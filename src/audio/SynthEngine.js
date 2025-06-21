/**
 * SynthEngine - 8bit風音色生成エンジン
 * Web Audio APIを使用してテトリス風のチップチューン音色を生成
 */

export class SynthEngine {
  constructor(audioContext) {
    this.audioContext = audioContext;
    this.masterVolume = 0.5; // 全体の音量
    this.activeOscillators = new Set();
    
    // エフェクトチェインのセットアップ
    this.setupEffectChain();
  }

  /**
   * エフェクトチェインのセットアップ
   */
  setupEffectChain() {
    // ディストーション用ウェーブシェイパー
    this.distortion = this.audioContext.createWaveShaper();
    this.distortion.curve = this.makeDistortionCurve(50); // ソフトディストーション
    this.distortion.oversample = '4x';

    // リバーブ用コンボルバー
    this.convolver = this.audioContext.createConvolver();
    this.convolver.buffer = this.createReverbImpulse(2, 2, false); // 2秒のリバーブ

    // ドライ/ウェットミックス用ゲイン
    this.dryGain = this.audioContext.createGain();
    this.wetGain = this.audioContext.createGain();
    this.dryGain.gain.value = 0.7; // ドライシグナル70%
    this.wetGain.gain.value = 0.3; // リバーブ30%

    // マスターゲインノード
    this.masterGain = this.audioContext.createGain();
    this.masterGain.gain.value = this.masterVolume;

    // エフェトチェインの接続
    this.dryGain.connect(this.masterGain);
    this.wetGain.connect(this.convolver);
    this.convolver.connect(this.masterGain);
    this.masterGain.connect(this.audioContext.destination);
  }

  /**
   * ディストーションカーブを作成
   */
  makeDistortionCurve(amount) {
    const samples = 44100;
    const curve = new Float32Array(samples);
    const deg = Math.PI / 180;
    
    for (let i = 0; i < samples; i++) {
      const x = (i * 2) / samples - 1;
      curve[i] = ((3 + amount) * x * 20 * deg) / (Math.PI + amount * Math.abs(x));
    }
    
    return curve;
  }

  /**
   * リバーブのインパルスレスポンスを作成
   */
  createReverbImpulse(duration, decay, reverse) {
    const sampleRate = this.audioContext.sampleRate;
    const length = sampleRate * duration;
    const impulse = this.audioContext.createBuffer(2, length, sampleRate);
    
    for (let channel = 0; channel < 2; channel++) {
      const channelData = impulse.getChannelData(channel);
      
      for (let i = 0; i < length; i++) {
        const n = reverse ? length - i : i;
        channelData[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, decay);
      }
    }
    
    return impulse;
  }

  /**
   * 音量を設定
   */
  setMasterVolume(volume) {
    this.masterVolume = Math.max(0, Math.min(1, volume));
    this.masterGain.gain.value = this.masterVolume;
  }

  /**
   * リバーブの深さを設定
   */
  setReverbMix(dryLevel, wetLevel) {
    this.dryGain.gain.value = dryLevel;
    this.wetGain.gain.value = wetLevel;
  }

  /**
   * ロック風メロディー音色（ディストーション付き）
   */
  createRockMelodyTone(frequency, startTime, duration, volume = 0.5) {
    if (frequency <= 0 || !isFinite(frequency) || !isFinite(startTime) || !isFinite(duration) || !isFinite(volume)) {
      return null;
    }
    
    // 時刻の検証と調整
    const currentTime = this.audioContext.currentTime;
    let actualStartTime = startTime;
    if (actualStartTime < currentTime) {
      actualStartTime = currentTime + 0.001;
    }
    
    const actualDuration = Math.max(0.05, duration);
    
    if (frequency <= 0) return null;

    // メインオシレーター（ノコギリ波）
    const oscillator = this.audioContext.createOscillator();
    oscillator.type = 'sawtooth';
    // 周波数設定を安定化（急激な変化を防ぐ）
    oscillator.frequency.setValueAtTime(frequency, actualStartTime);

    // ディストーション用ウェーブシェイパー
    const distortionNode = this.audioContext.createWaveShaper();
    distortionNode.curve = this.makeDistortionCurve(80); // 強めのディストーション
    distortionNode.oversample = '4x';

    // シンプルなロックエンベロープ（安全な3ポイント）
    const gainNode = this.audioContext.createGain();
    const rockFadeIn = actualStartTime + actualDuration * 0.05;
    const rockFadeOut = actualStartTime + actualDuration * 0.85;
    const rockEnd = actualStartTime + actualDuration;
    
    gainNode.gain.setValueAtTime(0, actualStartTime);
    gainNode.gain.linearRampToValueAtTime(volume, rockFadeIn);
    gainNode.gain.setValueAtTime(volume, rockFadeOut);
    gainNode.gain.linearRampToValueAtTime(0, rockEnd);

    // ローパスフィルター（エッジを減らす）
    const filter = this.audioContext.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(3000, actualStartTime);
    filter.Q.setValueAtTime(2, actualStartTime);

    // 接続
    oscillator.connect(distortionNode);
    distortionNode.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.dryGain);
    gainNode.connect(this.wetGain);

    // 再生
    oscillator.start(actualStartTime);
    oscillator.stop(actualStartTime + actualDuration);

    this.activeOscillators.add(oscillator);
    oscillator.onended = () => {
      this.activeOscillators.delete(oscillator);
    };

    return oscillator;
  }

  /**
   * アルペジオシンセサイザー音色
   */
  createArpeggioTone(frequencies, startTime, baseDuration, volume = 0.3) {
    // 入力検証
    if (!frequencies || !Array.isArray(frequencies) || frequencies.length === 0) {
      console.warn('[SynthEngine] Invalid frequencies for arpeggio:', frequencies);
      return [];
    }
    
    if (!isFinite(startTime) || !isFinite(baseDuration) || !isFinite(volume)) {
      console.warn('[SynthEngine] Invalid parameters for arpeggio:', { startTime, baseDuration, volume });
      return [];
    }
    
    const oscillators = [];
    const validFrequencies = frequencies.filter(f => f && isFinite(f) && f > 0);
    
    if (validFrequencies.length === 0) {
      return [];
    }
    
    const delayBetweenNotes = baseDuration / validFrequencies.length;
    
    validFrequencies.forEach((frequency, index) => {
      let noteStartTime = startTime + (index * delayBetweenNotes);
      const noteDuration = Math.max(0.05, baseDuration - (index * delayBetweenNotes * 0.5)); // 最低0.05秒に延長
      
      // 時刻の検証
      if (!isFinite(noteStartTime) || !isFinite(noteDuration) || noteDuration <= 0) {
        console.warn('[SynthEngine] Invalid timing for arpeggio note:', { noteStartTime, noteDuration });
        return;
      }
      
      // 現在時刻より前の時刻の場合、調整
      const currentTime = this.audioContext.currentTime;
      if (noteStartTime < currentTime) {
        noteStartTime = currentTime + 0.001;
      }
      
      const oscillator = this.audioContext.createOscillator();
      oscillator.type = 'triangle';
      oscillator.frequency.setValueAtTime(frequency, noteStartTime);
      
      // キラキラしたエンベロープ（音量を上げる）
      const gainNode = this.audioContext.createGain();
      const individualVolume = (volume * 1.5) / Math.sqrt(validFrequencies.length); // 音量アップ
      
      gainNode.gain.setValueAtTime(0, noteStartTime);
      gainNode.gain.linearRampToValueAtTime(individualVolume, noteStartTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, noteStartTime + noteDuration);
      
      // バンドパスフィルター（中高音域を強調）
      const filter = this.audioContext.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1200, noteStartTime); // 1.2kHz中心
      filter.Q.setValueAtTime(3, noteStartTime); // Q値を上げてキラキラ感アップ
      
      // 接続
      oscillator.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(this.dryGain);
      gainNode.connect(this.wetGain);
      
      oscillator.start(noteStartTime);
      oscillator.stop(noteStartTime + noteDuration);
      
      this.activeOscillators.add(oscillator);
      oscillator.onended = () => {
        this.activeOscillators.delete(oscillator);
      };
      
      oscillators.push(oscillator);
    });
    
    return oscillators;
  }

  /**
   * 8bit風メロディー音色を生成（方形波）
   */
  createMelodyTone(frequency, startTime, duration, volume = 0.4) {
    if (frequency <= 0 || !isFinite(frequency) || !isFinite(startTime) || !isFinite(duration) || !isFinite(volume)) {
      return null;
    }
    
    // 時刻の検証と調整
    const currentTime = this.audioContext.currentTime;
    let actualStartTime = startTime;
    if (actualStartTime < currentTime) {
      actualStartTime = currentTime + 0.001;
    }
    
    const actualDuration = Math.max(0.05, duration);
    
    if (frequency <= 0) return null; // REST note

    // オシレーター（方形波）
    const oscillator = this.audioContext.createOscillator();
    oscillator.type = 'square';
    // 周波数設定を安定化（急激な変化を防ぐ）
    oscillator.frequency.setValueAtTime(frequency, actualStartTime);

    // エンベロープ用ゲインノード
    const gainNode = this.audioContext.createGain();
    
    // シンプルなメロディーエンベロープ（安全な3ポイント）
    const melodyFadeIn = startTime + duration * 0.05;  // 最初の5%でフェードイン
    const melodyFadeOut = startTime + duration * 0.9;  // 最後の10%でフェードアウト
    const melodyEnd = startTime + duration;
    
    gainNode.gain.setValueAtTime(0, startTime);
    gainNode.gain.linearRampToValueAtTime(volume, melodyFadeIn);
    gainNode.gain.setValueAtTime(volume, melodyFadeOut);
    gainNode.gain.linearRampToValueAtTime(0, melodyEnd);

    // ローパスフィルター（8bit風の音質）
    const filter = this.audioContext.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2000, actualStartTime);
    filter.Q.setValueAtTime(1, actualStartTime);

    // 接続（エフェクトチェイン経由）
    oscillator.connect(filter);
    filter.connect(gainNode);
    
    // ドライとウェットに分岐
    gainNode.connect(this.dryGain);
    gainNode.connect(this.wetGain);

    // 再生スケジュール
    oscillator.start(actualStartTime);
    oscillator.stop(actualStartTime + actualDuration);

    // クリーンアップ
    this.activeOscillators.add(oscillator);
    oscillator.onended = () => {
      this.activeOscillators.delete(oscillator);
    };

    return oscillator;
  }

  /**
   * 8bit風ベース音色を生成（三角波）
   */
  createBassTone(frequency, startTime, duration, volume = 0.5) {
    if (frequency <= 0 || !isFinite(frequency) || !isFinite(startTime) || !isFinite(duration) || !isFinite(volume)) {
      console.warn('[SynthEngine] Invalid parameters for bass tone:', { frequency, startTime, duration, volume });
      return null;
    }
    
    // 時刻の検証と調整
    const currentTime = this.audioContext.currentTime;
    let actualStartTime = startTime;
    if (actualStartTime < currentTime) {
      console.warn('[SynthEngine] Start time is in the past, adjusting:', startTime, 'current:', currentTime);
      actualStartTime = currentTime + 0.001;
    }
    
    const actualDuration = Math.max(0.1, duration);
    
    // 全ての時刻パラメータを検証
    const totalEndTime = startTime + duration;
    if (!isFinite(startTime) || !isFinite(totalEndTime) || startTime < 0 || totalEndTime < 0) {
      console.error('[SynthEngine] Invalid time parameters for bass:', { startTime, duration, totalEndTime });
      return null;
    }
    
    if (frequency <= 0) return null;

    // カスタム三角波（より豊かな低音）
    const oscillator = this.audioContext.createOscillator();
    
    // 三角波の倍音を手動で作成してより豊かな音色にする
    const realParts = new Float32Array([0, 0.8, 0, 0.3, 0, 0.1, 0, 0.05]); // 基音、3倍音、5倍音、7倍音
    const imagParts = new Float32Array(realParts.length);
    const wave = this.audioContext.createPeriodicWave(realParts, imagParts);
    
    oscillator.setPeriodicWave(wave);
    // 周波数設定を安定化（急激な変化を防ぐ）
    oscillator.frequency.setValueAtTime(frequency, actualStartTime);

    // ベース用シンプルエンベロープ（安全な3ポイント）
    const gainNode = this.audioContext.createGain();
    const fadeInTime = actualStartTime + actualDuration * 0.1;
    const fadeOutStart = actualStartTime + actualDuration * 0.8;
    const releaseTime = actualStartTime + actualDuration;
    
    // シンプルな3ポイントエンベロープ
    gainNode.gain.setValueAtTime(0, actualStartTime);
    gainNode.gain.linearRampToValueAtTime(volume, fadeInTime);
    gainNode.gain.setValueAtTime(volume, fadeOutStart);
    gainNode.gain.linearRampToValueAtTime(0, releaseTime);

    // ローパスフィルター（低音強調、周波数を上げて聞こえやすく）
    const filter = this.audioContext.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, actualStartTime);
    filter.Q.setValueAtTime(1.5, actualStartTime);

    // 接続（ベースはドライのみ）
    oscillator.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.dryGain);

    // 再生
    oscillator.start(actualStartTime);
    oscillator.stop(actualStartTime + actualDuration);

    this.activeOscillators.add(oscillator);
    oscillator.onended = () => {
      this.activeOscillators.delete(oscillator);
    };

    return oscillator;
  }

  /**
   * 8bit風コード音色を生成（ノコギリ波）
   */
  createChordTone(frequencies, startTime, duration, volume = 0.2) {
    if (!frequencies || !Array.isArray(frequencies) || !isFinite(startTime) || !isFinite(duration) || !isFinite(volume)) {
      return [];
    }
    
    duration = Math.max(0.01, duration);
    const oscillators = [];
    
    frequencies.forEach((frequency, index) => {
      if (frequency <= 0 || !isFinite(frequency)) return;

      const oscillator = this.audioContext.createOscillator();
      oscillator.type = 'sawtooth';
      oscillator.frequency.setValueAtTime(frequency, startTime);

      // コード用エンベロープ（ソフトな音色）
      const gainNode = this.audioContext.createGain();
      const individualVolume = volume / frequencies.length; // 音数で割って音量調整
      
      const attack = 0.02;
      const decay = 0.15;
      const sustain = 0.4;
      const release = 0.3;
      
      gainNode.gain.setValueAtTime(0, startTime);
      gainNode.gain.linearRampToValueAtTime(individualVolume, startTime + attack);
      gainNode.gain.linearRampToValueAtTime(individualVolume * sustain, startTime + attack + decay);
      gainNode.gain.setValueAtTime(individualVolume * sustain, startTime + duration - release);
      gainNode.gain.linearRampToValueAtTime(0, startTime + duration);

      // コーラス効果のためのディレイ
      const delay = this.audioContext.createDelay(0.02);
      delay.delayTime.setValueAtTime(0.005 + index * 0.002, startTime); // 5-9ms遅延

      // ハイパスフィルター（中高音強調）
      const filter = this.audioContext.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.setValueAtTime(200, startTime);
      filter.Q.setValueAtTime(0.7, startTime);

      // 接続（一部をディレイ経由）
      oscillator.connect(filter);
      filter.connect(gainNode);
      
      if (index % 2 === 0) {
        gainNode.connect(this.dryGain); // 直接
      } else {
        gainNode.connect(delay);
        delay.connect(this.dryGain); // ディレイ経由
      }

      oscillator.start(startTime);
      oscillator.stop(startTime + duration);

      this.activeOscillators.add(oscillator);
      oscillator.onended = () => {
        this.activeOscillators.delete(oscillator);
      };

      oscillators.push(oscillator);
    });

    return oscillators;
  }

  /**
   * パーカッション音色を生成（ノイズベース）
   */
  createPercussion(type, startTime, volume = 0.3) {
    const duration = 0.1; // 100ms

    if (type === 'kick') {
      // キック: 低周波ノイズ + 短いサイン波
      const oscillator = this.audioContext.createOscillator();
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(60, startTime);
      oscillator.frequency.exponentialRampToValueAtTime(20, startTime + 0.05);

      const gainNode = this.audioContext.createGain();
      gainNode.gain.setValueAtTime(volume, startTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

      oscillator.connect(gainNode);
      gainNode.connect(this.dryGain);

      oscillator.start(startTime);
      oscillator.stop(startTime + duration);

      return oscillator;

    } else if (type === 'snare') {
      // スネア: ホワイトノイズ + 高周波
      const bufferSize = this.audioContext.sampleRate * duration;
      const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
      const data = buffer.getChannelData(0);

      // ホワイトノイズ生成
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * 0.5;
      }

      const source = this.audioContext.createBufferSource();
      source.buffer = buffer;

      const gainNode = this.audioContext.createGain();
      gainNode.gain.setValueAtTime(volume, startTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

      // ハイパスフィルター
      const filter = this.audioContext.createBiquadFilter();
      filter.type = 'highpass';
      filter.frequency.setValueAtTime(1000, startTime);

      source.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(this.dryGain);

      source.start(startTime);
      source.stop(startTime + duration);

      return source;
    }

    return null;
  }

  /**
   * ドラムパターンを再生
   */
  playDrumPattern(pattern, startTime, barDuration = 2.0) {
    const sources = [];
    
    // キックドラム
    pattern.kick.forEach(beat => {
      const time = startTime + (beat.time * barDuration / 2);
      const kick = this.createPercussion('kick', time, beat.velocity * 0.6); // 音量を下げる
      if (kick) sources.push(kick);
    });
    
    // スネアドラム
    pattern.snare.forEach(beat => {
      const time = startTime + (beat.time * barDuration / 2);
      const snare = this.createPercussion('snare', time, beat.velocity * 0.4); // 音量を下げる
      if (snare) sources.push(snare);
    });
    
    // ハイハット
    pattern.hihat.forEach(beat => {
      const time = startTime + (beat.time * barDuration / 2);
      const hihat = this.createHiHat(time, beat.velocity * 0.2); // 音量をさらに下げる
      if (hihat) sources.push(hihat);
    });
    
    return sources;
  }
  
  /**
   * ハイハット音色を作成
   */
  createHiHat(startTime, volume = 0.2) {
    const duration = 0.05; // 50ms
    
    // ホワイトノイズベース
    const bufferSize = this.audioContext.sampleRate * duration;
    const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.3;
    }
    
    const source = this.audioContext.createBufferSource();
    source.buffer = buffer;
    
    // ハイパスフィルター（高音域のみ）
    const filter = this.audioContext.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(8000, startTime);
    filter.Q.setValueAtTime(1, startTime);
    
    const gainNode = this.audioContext.createGain();
    gainNode.gain.setValueAtTime(volume, startTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
    
    source.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.dryGain);
    
    source.start(startTime);
    source.stop(startTime + duration);
    
    return source;
  }

  /**
   * 全ての音を停止
   */
  stopAllSounds() {
    this.activeOscillators.forEach(oscillator => {
      try {
        oscillator.stop();
      } catch (e) {
        // 既に停止している場合のエラーを無視
      }
    });
    this.activeOscillators.clear();
  }

  /**
   * リソースを解放
   */
  dispose() {
    this.stopAllSounds();
    if (this.masterGain) {
      this.masterGain.disconnect();
    }
  }
}