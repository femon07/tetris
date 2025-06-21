/**
 * AudioManager - テトリス音響システム
 * コロブチカ（Korobeiniki）BPM160版の再生管理
 */

import { SynthEngine } from './SynthEngine.js';
import { 
  KOROBEINIKI_MELODY, 
  KOROBEINIKI_MELODY_OCTAVE,
  KOROBEINIKI_BASS, 
  KOROBEINIKI_BASS_FUNKY,
  KOROBEINIKI_CHORDS,
  KOROBEINIKI_CHORDS_MODERN,
  KOROBEINIKI_DRUMS,
  KOROBEINIKI_BREAKDOWN,
  KOROBEINIKI_INFO,
  NOTE_FREQUENCIES, 
  NOTE_DURATIONS 
} from './KorobeinikiData.js';

export class AudioManager {
  constructor() {
    this.audioContext = null;
    this.synthEngine = null;
    this.isEnabled = true;
    this.bgmVolume = 0.8;
    this.isPlaying = false;
    this.isPaused = false;
    this.currentPosition = 0;
    this.loopId = null;
    this.startTime = 0;
    this.pauseTime = 0;
    
    // アレンジモード
    this.arrangementMode = 'enhanced'; // 'classic', 'enhanced', 'rock'
    this.useOctaveDoubling = true;
    this.useDrums = true;
    this.useBreakdown = false;
    
    console.log('[AudioManager] Initialization - Arrangement mode:', this.arrangementMode);
    
    // 音楽データ
    this.musicData = {
      melody: KOROBEINIKI_MELODY,
      melodyOctave: KOROBEINIKI_MELODY_OCTAVE,
      bass: KOROBEINIKI_BASS,
      bassFunky: KOROBEINIKI_BASS_FUNKY,
      chords: KOROBEINIKI_CHORDS,
      chordsModern: KOROBEINIKI_CHORDS_MODERN,
      drums: KOROBEINIKI_DRUMS,
      breakdown: KOROBEINIKI_BREAKDOWN,
      info: KOROBEINIKI_INFO
    };
    
    this.initialize();
  }

  /**
   * 音響システムを初期化
   */
  async initialize() {
    try {
      // 設定を読み込み
      this.loadSettings();
      
      // Web Audio Contextの初期化
      this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
      
      // ユーザージェスチャーが必要な場合の処理
      if (this.audioContext.state === 'suspended') {
        console.log('[AudioManager] AudioContextが中断されています。ユーザー操作後に再開されます。');
      }
      
      // SynthEngineの初期化
      this.synthEngine = new SynthEngine(this.audioContext);
      this.synthEngine.setMasterVolume(this.bgmVolume);
      
      // リバーブの初期設定（ドライ70%, リバーブ30%）
      this.synthEngine.setReverbMix(0.7, 0.3);
      
      console.log('[AudioManager] 音響システムを初期化しました');
      
    } catch (error) {
      console.warn('[AudioManager] 音響システムの初期化に失敗:', error);
    }
  }

  /**
   * AudioContextを再開（ユーザー操作後に呼び出し）
   */
  async resumeAudioContext() {
    if (this.audioContext && this.audioContext.state === 'suspended') {
      try {
        await this.audioContext.resume();
        console.log('[AudioManager] AudioContextを再開しました');
      } catch (error) {
        console.warn('[AudioManager] AudioContext再開に失敗:', error);
      }
    }
  }

  /**
   * BGMを再生開始
   */
  async playBGM() {
    if (!this.isEnabled || !this.synthEngine || this.isPlaying) {
      return;
    }

    try {
      // AudioContextを再開
      await this.resumeAudioContext();
      
      // AudioContext安定化のため短い待機時間を追加
      const stabilizationDelay = 0.1; // 100ms
      
      this.isPlaying = true;
      this.isPaused = false;
      this.startTime = this.audioContext.currentTime + stabilizationDelay;
      this.currentPosition = 0;
      
      console.log('[AudioManager] コロブチカBGM再生開始');
      
      // 安定化後に音楽をスケジュール
      setTimeout(() => {
        if (this.isPlaying && !this.isPaused) {
          this.scheduleMusic();
        }
      }, stabilizationDelay * 1000);
      
    } catch (error) {
      console.warn('[AudioManager] BGM再生に失敗:', error);
      this.isPlaying = false;
    }
  }

  /**
   * BGMを停止
   */
  stopBGM() {
    if (!this.isPlaying) return;
    
    this.isPlaying = false;
    this.isPaused = false;
    this.currentPosition = 0;
    
    if (this.loopId) {
      clearTimeout(this.loopId);
      this.loopId = null;
    }
    
    if (this.synthEngine) {
      this.synthEngine.stopAllSounds();
    }
    
    console.log('[AudioManager] BGM停止');
  }

  /**
   * BGMを一時停止
   */
  pauseBGM() {
    if (!this.isPlaying || this.isPaused) return;
    
    this.isPaused = true;
    this.pauseTime = this.audioContext.currentTime;
    
    if (this.loopId) {
      clearTimeout(this.loopId);
      this.loopId = null;
    }
    
    if (this.synthEngine) {
      this.synthEngine.stopAllSounds();
    }
    
    console.log('[AudioManager] BGM一時停止');
  }

  /**
   * BGMを再開
   */
  async resumeBGM() {
    if (!this.isPlaying || !this.isPaused) return;
    
    try {
      await this.resumeAudioContext();
      
      this.isPaused = false;
      
      // 一時停止時間を考慮して開始時間を調整
      const pauseDuration = this.pauseTime - this.startTime;
      this.startTime = this.audioContext.currentTime - pauseDuration;
      
      this.scheduleMusic();
      
      console.log('[AudioManager] BGM再開');
      
    } catch (error) {
      console.warn('[AudioManager] BGM再開に失敗:', error);
    }
  }

  /**
   * 音楽をスケジュール
   */
  scheduleMusic() {
    if (!this.isPlaying || this.isPaused) return;
    
    const currentTime = this.audioContext.currentTime;
    const scheduleAhead = 0.5; // 0.5秒先まで予約
    
    // 楽曲全体の長さを計算
    const totalDuration = this.calculateTotalDuration();
    const elapsed = currentTime - this.startTime;
    const loopCount = Math.floor(elapsed / totalDuration);
    const currentLoopTime = elapsed % totalDuration; // 現在のループ内の経過時間

    // メロディーをスケジュール
    this.scheduleMelody(currentTime, scheduleAhead, currentLoopTime, totalDuration, loopCount);
    
    // オクターブ重ねが有効な場合
    if (this.useOctaveDoubling && this.arrangementMode === 'enhanced') {
      this.scheduleOctaveMelody(currentTime, scheduleAhead, currentLoopTime, totalDuration, loopCount);
    }
    
    // ベースラインをスケジュール（ファンキーベースを無効にして通常ベースを使用）
    this.scheduleBass(currentTime, scheduleAhead, currentLoopTime, totalDuration, loopCount);
    
    // コードをスケジュール
    if (this.arrangementMode === 'enhanced') {
      this.scheduleModernChords(currentTime, scheduleAhead, currentLoopTime, totalDuration, loopCount);
    } else {
      this.scheduleChords(currentTime, scheduleAhead, currentLoopTime, totalDuration, loopCount);
    }
    
    // ドラムをスケジュール
    if (this.useDrums && this.arrangementMode === 'enhanced') {
      this.scheduleDrums(currentTime, scheduleAhead, currentLoopTime, totalDuration, loopCount);
    }
    
    // 次のスケジュール更新
    this.loopId = setTimeout(() => {
      this.scheduleMusic();
    }, 100); // 100msごとに更新（音楽スケジューリングの精度向上）
  }

  /**
   * 楽曲全体の長さを計算
   */
  calculateTotalDuration() {
    let totalTime = 0;
    for (const note of this.musicData.melody) {
      totalTime += NOTE_DURATIONS[note.duration];
    }
    return totalTime;
  }

  /**
   * メロディーをスケジュール
   */
  scheduleMelody(currentTime, scheduleAhead, currentLoopTime, totalDuration, loopCount) {
    let time = 0; // 楽曲開始からの相対時間
    
    for (let i = 0; i < this.musicData.melody.length; i++) {
      const note = this.musicData.melody[i];
      const duration = NOTE_DURATIONS[note.duration];
      
      if (!duration || !isFinite(duration)) {
        console.warn('[AudioManager] Invalid duration for melody:', note);
        continue;
      }
      
      // 音符の絶対再生時刻を正しく計算
      const noteAbsoluteTime = this.startTime + ((loopCount * totalDuration) + time);
      
      // スケジュール範囲内かチェック（現在時刻から少し先まで）
      if (noteAbsoluteTime >= currentTime && noteAbsoluteTime <= currentTime + scheduleAhead) {
        const frequency = NOTE_FREQUENCIES[note.note];
        if (frequency && frequency > 0 && note.note !== 'REST' && isFinite(frequency) && isFinite(noteAbsoluteTime) && isFinite(duration)) {
          // アレンジモードに応じた音色選択
          if (this.arrangementMode === 'rock') {
            this.synthEngine.createRockMelodyTone(frequency, noteAbsoluteTime, duration, 0.4);
          } else {
            this.synthEngine.createMelodyTone(frequency, noteAbsoluteTime, duration, 0.3);
          }
        }
      }
      
      time += duration;
    }
  }

  /**
   * ベースラインをスケジュール
   */
  scheduleBass(currentTime, scheduleAhead, currentLoopTime, totalDuration, loopCount) {
    let time = 0; // 楽曲開始からの相対時間
    
    for (let i = 0; i < this.musicData.bass.length; i++) {
      const note = this.musicData.bass[i];
      const duration = NOTE_DURATIONS[note.duration];
      
      let noteAbsoluteTime = this.startTime + time;
      
      if (noteAbsoluteTime >= (this.startTime + currentLoopTime) && 
          noteAbsoluteTime < (this.startTime + currentLoopTime + scheduleAhead + duration)) {
        const frequency = NOTE_FREQUENCIES[note.note];
        if (frequency && frequency > 0 && note.note !== 'REST') { // 'rest' を 'REST' に修正
          this.synthEngine.createBassTone(frequency, noteAbsoluteTime, duration, 0.5);
        }
      }
      
      time += duration;
    }
  }

  /**
   * オクターブ上のメロディーをスケジュール
   */
  scheduleOctaveMelody(currentTime, scheduleAhead, currentLoopTime, totalDuration, loopCount) {
    let time = 0;
    const octaveMelody = this.musicData.melodyOctave || [];
    
    for (let i = 0; i < octaveMelody.length && i < this.musicData.melody.length; i++) {
      const note = octaveMelody[i];
      const duration = NOTE_DURATIONS[note.duration];
      
      if (!duration || !isFinite(duration)) {
        console.warn('[AudioManager] Invalid duration for octave melody:', note);
        continue;
      }
      
      const noteAbsoluteTime = this.startTime + ((loopCount * totalDuration) + time);
      
      if (noteAbsoluteTime >= currentTime && noteAbsoluteTime <= currentTime + scheduleAhead) {
        const frequency = NOTE_FREQUENCIES[note.note];
        if (frequency && frequency > 0 && note.note !== 'REST' && isFinite(frequency) && isFinite(noteAbsoluteTime) && isFinite(duration)) {
          this.synthEngine.createMelodyTone(frequency, noteAbsoluteTime, duration, 0.2);
        }
      }
      
      time += duration;
    }
  }

  /**
   * ファンキーベースをスケジュール
   */
  scheduleFunkyBass(currentTime, scheduleAhead, currentLoopTime, totalDuration, loopCount) {
    let time = 0;
    const funkyBass = this.musicData.bassFunky || [];
    
    for (let i = 0; i < funkyBass.length; i++) {
      const note = funkyBass[i];
      const duration = NOTE_DURATIONS[note.duration];
      
      if (!duration || !isFinite(duration)) {
        console.warn('[AudioManager] Invalid duration for funky bass:', note);
        continue;
      }
      
      const noteAbsoluteTime = this.startTime + ((loopCount * totalDuration) + time);
      
      if (noteAbsoluteTime >= currentTime && noteAbsoluteTime <= currentTime + scheduleAhead) {
        const frequency = NOTE_FREQUENCIES[note.note];
        if (frequency && frequency > 0 && note.note !== 'REST' && isFinite(frequency) && isFinite(noteAbsoluteTime) && isFinite(duration)) {
          // console.log('[AudioManager] Playing funky bass:', note.note, frequency, 'at', noteAbsoluteTime.toFixed(3));
          this.synthEngine.createBassTone(frequency, noteAbsoluteTime, duration, 0.8);
        }
      }
      
      time += duration;
    }
  }

  /**
   * モダンコードをスケジュール
   */
  scheduleModernChords(currentTime, scheduleAhead, currentLoopTime, totalDuration, loopCount) {
    let time = 0;
    const modernChords = this.musicData.chordsModern || [];
    
    for (let i = 0; i < modernChords.length; i++) {
      const chordData = modernChords[i];
      
      const duration = chordData.duration ? NOTE_DURATIONS[chordData.duration] : NOTE_DURATIONS.sixteenth;
      
      if (!duration || !isFinite(duration)) {
        console.warn('[AudioManager] Invalid duration for modern chord:', chordData);
        continue;
      }
      
      const chordAbsoluteTime = this.startTime + ((loopCount * totalDuration) + time);
      
      if (chordAbsoluteTime >= currentTime && chordAbsoluteTime <= currentTime + scheduleAhead) {
        const notes = Array.isArray(chordData.note) ? chordData.note : [chordData.note];
        const frequencies = notes
          .filter(note => note && NOTE_FREQUENCIES[note])
          .map(note => NOTE_FREQUENCIES[note])
          .filter(freq => freq && isFinite(freq) && freq > 0);
        
        if (frequencies.length > 0) {
          // console.log('[AudioManager] Playing modern chords:', notes, 'frequencies:', frequencies.map(f => f.toFixed(1)), 'at', chordAbsoluteTime.toFixed(3));
          this.synthEngine.createArpeggioTone(frequencies, chordAbsoluteTime, duration, 0.5);
        }
      }
      
      time += duration;
    }
  }

  /**
   * ドラムパターンをスケジュール
   */
  scheduleDrums(currentTime, scheduleAhead, currentLoopTime, totalDuration, loopCount) {
    if (!this.musicData.drums || !NOTE_DURATIONS.quarter) {
      return;
    }
    
    const barDuration = NOTE_DURATIONS.quarter * 4; // 1小節 = 4拍
    
    if (!isFinite(barDuration) || barDuration <= 0) {
      return;
    }
    
    const currentBar = Math.floor(currentLoopTime / barDuration);
    const nextBarTime = (currentBar + 1) * barDuration;
    
    // 次の小節の開始がスケジュール範囲内にあるかチェック
    if (isFinite(nextBarTime) && nextBarTime >= currentLoopTime && nextBarTime < currentLoopTime + scheduleAhead) {
      const drumStartTime = this.startTime + nextBarTime;
      if (isFinite(drumStartTime) && this.synthEngine.playDrumPattern) {
        this.synthEngine.playDrumPattern(this.musicData.drums, drumStartTime, barDuration);
      }
    }
  }

  /**
   * コードをスケジュール
   */
  scheduleChords(currentTime, scheduleAhead, currentLoopTime, totalDuration, loopCount) {
    const measureDuration = NOTE_DURATIONS.quarter * 4; // 1小節 = 4拍
    
    for (let i = 0; i < this.musicData.chords.length; i++) {
      const chordData = this.musicData.chords[i];
      const duration = NOTE_DURATIONS[chordData.duration];
      
      let chordAbsoluteTime = this.startTime + (chordData.start * measureDuration);
      
      if (chordAbsoluteTime >= (this.startTime + currentLoopTime) && 
          chordAbsoluteTime < (this.startTime + currentLoopTime + scheduleAhead + duration)) {
        
        // コードデータの形式を確認
        let notes = [];
        if (chordData.chord && Array.isArray(chordData.chord)) {
          notes = chordData.chord;
        } else if (chordData.note && Array.isArray(chordData.note)) {
          notes = chordData.note;
        } else if (chordData.note) {
          notes = [chordData.note];
        }
        
        const frequencies = notes
          .filter(note => note && NOTE_FREQUENCIES[note])
          .map(note => NOTE_FREQUENCIES[note])
          .filter(freq => freq && isFinite(freq) && freq > 0);
        
        if (frequencies.length > 0 && isFinite(chordAbsoluteTime) && isFinite(duration)) {
          this.synthEngine.createChordTone(frequencies, chordAbsoluteTime, duration, 0.25);
        }
      }
    }
  }

  /**
   * アレンジモードを設定
   */
  setArrangementMode(mode) {
    const validModes = ['classic', 'enhanced', 'rock'];
    if (validModes.includes(mode)) {
      this.arrangementMode = mode;
      
      // モードに応じた設定調整
      if (mode === 'rock') {
        this.synthEngine.setReverbMix(0.5, 0.5); // リバーブを強めに
        this.useOctaveDoubling = true;
        this.useDrums = true;
      } else if (mode === 'enhanced') {
        this.synthEngine.setReverbMix(0.7, 0.3);
        this.useOctaveDoubling = true;
        this.useDrums = true;
      } else {
        this.synthEngine.setReverbMix(0.9, 0.1); // クラシックはリバーブ控えめ
        this.useOctaveDoubling = false;
        this.useDrums = false;
      }
      
      localStorage.setItem('tetris-arrangement-mode', mode);
      console.log(`[AudioManager] アレンジモード: ${mode}`);
    }
  }

  /**
   * 音楽を有効/無効にする
   */
  setEnabled(enabled) {
    this.isEnabled = enabled;
    
    if (!enabled && this.isPlaying) {
      this.stopBGM();
    }
    
    localStorage.setItem('tetris-audio-enabled', enabled);
    console.log(`[AudioManager] 音楽: ${enabled ? '有効' : '無効'}`);
  }

  /**
   * BGM音量を設定
   */
  setBGMVolume(volume) {
    this.bgmVolume = Math.max(0, Math.min(1, volume));
    
    if (this.synthEngine) {
      this.synthEngine.setMasterVolume(this.bgmVolume);
    }
    
    localStorage.setItem('tetris-bgm-volume', this.bgmVolume);
  }

  /**
   * 現在の状態を取得
   */
  getStatus() {
    return {
      isEnabled: this.isEnabled,
      isPlaying: this.isPlaying,
      isPaused: this.isPaused,
      bgmVolume: this.bgmVolume,
      currentTrack: this.musicData.info.title,
      bpm: this.musicData.info.bpm,
      arrangementMode: this.arrangementMode,
      useOctaveDoubling: this.useOctaveDoubling,
      useDrums: this.useDrums,
      effects: {
        reverb: true,
        distortion: this.arrangementMode === 'rock'
      }
    };
  }

  /**
   * 設定をローカルストレージから読み込み
   */
  loadSettings() {
    const enabled = localStorage.getItem('tetris-audio-enabled');
    const bgmVolume = localStorage.getItem('tetris-bgm-volume');
    const arrangementMode = localStorage.getItem('tetris-arrangement-mode');
    
    if (enabled !== null) {
      this.isEnabled = enabled === 'true';
    }
    
    if (bgmVolume !== null) {
      this.bgmVolume = parseFloat(bgmVolume);
    }
    
    if (arrangementMode !== null) {
      this.setArrangementMode(arrangementMode);
    }
  }

  /**
   * リソースを解放
   */
  dispose() {
    this.stopBGM();
    
    if (this.synthEngine) {
      this.synthEngine.dispose();
    }
    
    if (this.audioContext) {
      this.audioContext.close();
    }
    
    console.log('[AudioManager] リソースを解放しました');
  }
}