/**
 * AudioControls - 音楽制御UIコンポーネント
 * BGMのオン/オフ切り替えと音量調整機能を提供
 */

export class AudioControls {
  constructor(containerId, audioManager) {
    this.container = document.getElementById(containerId);
    this.audioManager = audioManager;
    
    // UI要素
    this.controlsElement = null;
    this.toggleButton = null;
    this.volumeSlider = null;
    this.volumeDisplay = null;
    this.trackDisplay = null;
    
    this.initialize();
  }

  /**
   * 音楽制御UIを初期化
   */
  initialize() {
    if (!this.container) {
      console.warn('[AudioControls] コンテナ要素が見つかりません');
      return;
    }

    this.createControlsUI();
    this.setupEventListeners();
    this.updateUI();
    
    console.log('[AudioControls] 音楽制御UIを初期化しました');
  }

  /**
   * 音楽制御UIを作成
   */
  createControlsUI() {
    // 既存の要素があれば削除
    const existingControls = this.container.querySelector('.audio-controls');
    if (existingControls) {
      existingControls.remove();
    }

    // メインコンテナ
    this.controlsElement = document.createElement('div');
    this.controlsElement.className = 'audio-controls';

    // 楽曲情報表示
    const trackInfo = document.createElement('div');
    trackInfo.className = 'audio-track-info';
    
    this.trackDisplay = document.createElement('span');
    this.trackDisplay.className = 'audio-track-name';
    this.trackDisplay.textContent = '🎵 Korobeiniki';
    
    trackInfo.appendChild(this.trackDisplay);

    // コントロール行
    const controlsRow = document.createElement('div');
    controlsRow.className = 'audio-controls-row';

    // ON/OFFトグルボタン
    this.toggleButton = document.createElement('button');
    this.toggleButton.className = 'audio-toggle-btn';
    this.toggleButton.setAttribute('title', 'BGMのオン/オフを切り替え');

    // 音量制御セクション
    const volumeSection = document.createElement('div');
    volumeSection.className = 'volume-control';

    const volumeIcon = document.createElement('span');
    volumeIcon.className = 'volume-icon';
    volumeIcon.textContent = '🔊';

    this.volumeSlider = document.createElement('input');
    this.volumeSlider.type = 'range';
    this.volumeSlider.min = '0';
    this.volumeSlider.max = '100';
    this.volumeSlider.className = 'volume-slider';
    this.volumeSlider.setAttribute('title', 'BGM音量');

    this.volumeDisplay = document.createElement('span');
    this.volumeDisplay.className = 'volume-percent';

    // 組み立て
    volumeSection.appendChild(volumeIcon);
    volumeSection.appendChild(this.volumeSlider);
    volumeSection.appendChild(this.volumeDisplay);

    controlsRow.appendChild(this.toggleButton);
    controlsRow.appendChild(volumeSection);

    this.controlsElement.appendChild(trackInfo);
    this.controlsElement.appendChild(controlsRow);

    // コンテナに追加
    this.container.appendChild(this.controlsElement);
  }

  /**
   * イベントリスナーを設定
   */
  setupEventListeners() {
    // BGMトグルボタン
    if (this.toggleButton) {
      this.toggleButton.addEventListener('click', () => {
        this.toggleBGM();
      });
    }

    // 音量スライダー
    if (this.volumeSlider) {
      this.volumeSlider.addEventListener('input', (event) => {
        const volume = parseInt(event.target.value) / 100;
        this.setVolume(volume);
      });

      // マウスホイールでの音量調整（スムーズスクロール対応）
      this.volumeSlider.addEventListener('wheel', (event) => {
        // スクロールイベントを適切にハンドリング
        if (Math.abs(event.deltaY) < 50) { // 小さなスクロールのみ処理
          event.preventDefault();
          const delta = event.deltaY > 0 ? -5 : 5;
          const newValue = Math.max(0, Math.min(100, parseInt(this.volumeSlider.value) + delta));
          this.volumeSlider.value = newValue;
          this.setVolume(newValue / 100);
        }
      }, { passive: false }); // 明示的にnon-passiveを指定
    }

    // キーボードショートカット（Mキーで音楽トグル）
    document.addEventListener('keydown', (event) => {
      if (event.key.toLowerCase() === 'm' && !event.repeat) {
        this.toggleBGM();
      }
    });
  }

  /**
   * BGMのオン/オフを切り替え
   */
  async toggleBGM() {
    if (!this.audioManager) return;

    const status = this.audioManager.getStatus();
    
    if (status.isEnabled) {
      // BGMを無効化
      this.audioManager.setEnabled(false);
    } else {
      // BGMを有効化して再生開始
      this.audioManager.setEnabled(true);
      await this.audioManager.playBGM();
    }
    
    this.updateUI();
  }

  /**
   * 音量を設定
   */
  setVolume(volume) {
    if (!this.audioManager) return;
    
    this.audioManager.setBGMVolume(volume);
    this.updateVolumeDisplay();
  }

  /**
   * UIを更新
   */
  updateUI() {
    if (!this.audioManager) return;
    
    const status = this.audioManager.getStatus();
    
    this.updateToggleButton(status);
    this.updateVolumeControls(status);
    this.updateTrackDisplay(status);
  }

  /**
   * トグルボタンを更新
   */
  updateToggleButton(status) {
    if (!this.toggleButton) return;
    
    if (status.isEnabled) {
      this.toggleButton.textContent = 'ON';
      this.toggleButton.classList.add('active');
      this.toggleButton.classList.remove('inactive');
    } else {
      this.toggleButton.textContent = 'OFF';
      this.toggleButton.classList.add('inactive');
      this.toggleButton.classList.remove('active');
    }
  }

  /**
   * 音量コントロールを更新
   */
  updateVolumeControls(status) {
    if (!this.volumeSlider || !this.volumeDisplay) return;
    
    const volumePercent = Math.round(status.bgmVolume * 100);
    this.volumeSlider.value = volumePercent;
    this.volumeSlider.disabled = !status.isEnabled;
    
    this.updateVolumeDisplay();
  }

  /**
   * 音量表示を更新
   */
  updateVolumeDisplay() {
    if (!this.volumeDisplay || !this.volumeSlider) return;
    
    const volume = parseInt(this.volumeSlider.value);
    this.volumeDisplay.textContent = `${volume}%`;
  }

  /**
   * 楽曲表示を更新
   */
  updateTrackDisplay(status) {
    if (!this.trackDisplay) return;
    
    const playingIndicator = status.isPlaying ? '🎵' : '⏸️';
    this.trackDisplay.textContent = `${playingIndicator} ${status.currentTrack}`;
  }

  /**
   * BGMの再生状態を同期
   */
  syncPlaybackState() {
    this.updateUI();
  }

  /**
   * 設定を取得
   */
  getSettings() {
    if (!this.audioManager) return null;
    
    return this.audioManager.getStatus();
  }

  /**
   * リソースを解放
   */
  dispose() {
    // イベントリスナーは自動的にクリーンアップされる
    if (this.controlsElement && this.controlsElement.parent) {
      this.controlsElement.parent.removeChild(this.controlsElement);
    }
    
    console.log('[AudioControls] リソースを解放しました');
  }
}