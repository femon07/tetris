/**
 * AnimationManager - ゲーム内アニメーション効果の管理
 * ライン消去、ピース配置、コンボなどのアニメーション効果を提供します
 */
export class AnimationManager {
  constructor(gameCanvas, uiElements) {
    this.gameCanvas = gameCanvas;
    this.uiElements = uiElements;
    
    // アニメーション状態
    this.activeAnimations = new Map();
    this.animationQueue = [];
    this.isProcessing = false;
    
    // アニメーション設定
    this.config = {
      enabled: true,
      duration: {
        lineClear: 500,
        piecePlace: 200,
        combo: 400,
        levelUp: 800,
        gameOver: 1000
      },
      easing: {
        default: 'ease',
        bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }
    };

    // パーティクル効果用
    this.particles = [];
    this.particleCanvas = null;
    this.particleContext = null;
    
    this.setupParticleSystem();
  }

  /**
   * パーティクルシステムを設定
   */
  setupParticleSystem() {
    // パーティクル用のキャンバスを作成
    this.particleCanvas = document.createElement('canvas');
    this.particleCanvas.style.position = 'absolute';
    this.particleCanvas.style.top = '0';
    this.particleCanvas.style.left = '0';
    this.particleCanvas.style.pointerEvents = 'none';
    this.particleCanvas.style.zIndex = '10';
    
    // ゲームキャンバスのコンテナに追加
    if (this.gameCanvas && this.gameCanvas.parentElement) {
      this.gameCanvas.parentElement.style.position = 'relative';
      this.gameCanvas.parentElement.appendChild(this.particleCanvas);
      
      // キャンバスサイズを合わせる
      this.updateParticleCanvasSize();
    }
    
    this.particleContext = this.particleCanvas?.getContext('2d');
  }

  /**
   * パーティクルキャンバスのサイズを更新
   */
  updateParticleCanvasSize() {
    if (this.particleCanvas && this.gameCanvas) {
      const rect = this.gameCanvas.getBoundingClientRect();
      this.particleCanvas.width = this.gameCanvas.width;
      this.particleCanvas.height = this.gameCanvas.height;
      this.particleCanvas.style.width = this.gameCanvas.style.width || `${rect.width}px`;
      this.particleCanvas.style.height = this.gameCanvas.style.height || `${rect.height}px`;
    }
  }

  /**
   * ライン消去アニメーション
   */
  animateLineClear(lines, callback) {
    if (!this.config.enabled) {
      if (callback) callback();
      return;
    }

    const animationId = `lineClear_${Date.now()}`;
    
    // ライン消去エフェクト
    lines.forEach((lineIndex, index) => {
      setTimeout(() => {
        this.createLineClearEffect(lineIndex);
      }, index * 50);
    });

    // パーティクル効果
    this.createLineClearParticles(lines);

    // UIフラッシュ効果
    this.flashUI('success');

    // アニメーション完了処理
    const duration = this.config.duration.lineClear;
    this.activeAnimations.set(animationId, setTimeout(() => {
      this.activeAnimations.delete(animationId);
      if (callback) callback();
    }, duration));
  }

  /**
   * ライン消去エフェクトを作成
   */
  createLineClearEffect(lineIndex) {
    // DOM要素でのライン強調表示
    const gameBoard = this.gameCanvas?.parentElement;
    if (!gameBoard) return;

    const effectElement = document.createElement('div');
    effectElement.className = 'line-clear-effect';
    effectElement.style.cssText = `
      position: absolute;
      top: ${lineIndex * 30}px;
      left: 0;
      right: 0;
      height: 30px;
      background: linear-gradient(90deg, transparent, #10b981, transparent);
      animation: lineClearFlash 0.5s ease-in-out;
      pointer-events: none;
      z-index: 5;
    `;

    gameBoard.appendChild(effectElement);
    
    setTimeout(() => {
      if (effectElement.parentNode) {
        effectElement.parentNode.removeChild(effectElement);
      }
    }, 500);
  }

  /**
   * ライン消去パーティクルを作成
   */
  createLineClearParticles(lines) {
    if (!this.particleContext) return;

    lines.forEach(lineIndex => {
      const y = lineIndex * 30 + 15; // ライン中央
      
      // 複数のパーティクルを生成
      for (let i = 0; i < 10; i++) {
        this.particles.push({
          x: Math.random() * this.particleCanvas.width,
          y: y,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 2,
          life: 1.0,
          decay: 0.02,
          size: Math.random() * 3 + 2,
          color: `hsl(${Math.random() * 60 + 120}, 70%, 60%)` // 緑系の色
        });
      }
    });

    this.startParticleAnimation();
  }

  /**
   * ピース配置アニメーション
   */
  animatePiecePlace(piece, callback) {
    if (!this.config.enabled) {
      if (callback) callback();
      return;
    }

    // ピース配置の視覚的フィードバック
    this.createPiecePlaceEffect(piece);
    
    // UI要素のパルス効果
    if (this.uiElements.scoreElement) {
      this.pulseElement(this.uiElements.scoreElement);
    }

    const duration = this.config.duration.piecePlace;
    setTimeout(() => {
      if (callback) callback();
    }, duration);
  }

  /**
   * ピース配置エフェクトを作成
   */
  createPiecePlaceEffect(piece) {
    if (!piece || !this.particleContext) return;

    // ピースの各ブロック位置にパーティクルを生成
    piece.matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value) {
          const worldX = (piece.pos.x + x) * 30 + 15;
          const worldY = (piece.pos.y + y) * 30 + 15;
          
          this.particles.push({
            x: worldX,
            y: worldY,
            vx: (Math.random() - 0.5) * 2,
            vy: -Math.random() * 2,
            life: 0.8,
            decay: 0.03,
            size: Math.random() * 2 + 1,
            color: `hsl(${Math.random() * 360}, 50%, 70%)`
          });
        }
      });
    });

    this.startParticleAnimation();
  }

  /**
   * コンボアニメーション
   */
  animateCombo(comboCount, callback) {
    if (!this.config.enabled) {
      if (callback) callback();
      return;
    }

    // コンボ表示エフェクト
    this.showComboText(comboCount);
    
    // パーティクル爆発効果
    this.createComboParticles(comboCount);
    
    // UI強調効果
    this.flashUI('combo');

    const duration = this.config.duration.combo;
    setTimeout(() => {
      if (callback) callback();
    }, duration);
  }

  /**
   * コンボテキストを表示
   */
  showComboText(comboCount) {
    const gameBoard = this.gameCanvas?.parentElement;
    if (!gameBoard) return;

    const comboElement = document.createElement('div');
    comboElement.textContent = `COMBO x${comboCount}!`;
    comboElement.className = 'combo-text';
    comboElement.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: ${Math.min(24 + comboCount * 2, 48)}px;
      font-weight: bold;
      color: #f59e0b;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
      animation: comboAppear 0.4s ease-out;
      pointer-events: none;
      z-index: 15;
    `;

    gameBoard.appendChild(comboElement);
    
    setTimeout(() => {
      if (comboElement.parentNode) {
        comboElement.parentNode.removeChild(comboElement);
      }
    }, 400);
  }

  /**
   * コンボパーティクルを作成
   */
  createComboParticles(comboCount) {
    if (!this.particleContext) return;

    const centerX = this.particleCanvas.width / 2;
    const centerY = this.particleCanvas.height / 2;
    const particleCount = Math.min(comboCount * 5, 30);

    for (let i = 0; i < particleCount; i++) {
      const angle = (Math.PI * 2 * i) / particleCount;
      const speed = Math.random() * 3 + 2;
      
      this.particles.push({
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1.0,
        decay: 0.015,
        size: Math.random() * 4 + 2,
        color: `hsl(${Math.random() * 60 + 30}, 80%, 60%)` // オレンジ/黄色系
      });
    }

    this.startParticleAnimation();
  }

  /**
   * レベルアップアニメーション
   */
  animateLevelUp(newLevel, callback) {
    if (!this.config.enabled) {
      if (callback) callback();
      return;
    }

    // レベル表示のアニメーション
    if (this.uiElements.levelElement) {
      this.uiElements.levelElement.classList.add('level-up');
      setTimeout(() => {
        this.uiElements.levelElement?.classList.remove('level-up');
      }, this.config.duration.levelUp);
    }

    // レベルアップ通知
    this.showLevelUpNotification(newLevel);
    
    // 全画面フラッシュ効果
    this.flashUI('levelup');

    const duration = this.config.duration.levelUp;
    setTimeout(() => {
      if (callback) callback();
    }, duration);
  }

  /**
   * レベルアップ通知を表示
   */
  showLevelUpNotification(level) {
    const gameBoard = this.gameCanvas?.parentElement;
    if (!gameBoard) return;

    const notification = document.createElement('div');
    notification.textContent = `LEVEL ${level}!`;
    notification.className = 'levelup-notification';
    notification.style.cssText = `
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 32px;
      font-weight: bold;
      color: #7c3aed;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
      animation: levelUpAppear 0.8s ease-out;
      pointer-events: none;
      z-index: 15;
    `;

    gameBoard.appendChild(notification);
    
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 800);
  }

  /**
   * UI要素をフラッシュ
   */
  flashUI(type) {
    const colors = {
      success: '#10b981',
      combo: '#f59e0b',
      levelup: '#7c3aed',
      error: '#ef4444'
    };

    const flashElement = document.createElement('div');
    flashElement.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${colors[type] || colors.success};
      opacity: 0.1;
      pointer-events: none;
      z-index: 20;
      animation: uiFlash 0.2s ease-out;
    `;

    document.body.appendChild(flashElement);
    
    setTimeout(() => {
      if (flashElement.parentNode) {
        flashElement.parentNode.removeChild(flashElement);
      }
    }, 200);
  }

  /**
   * 要素にパルス効果を適用
   */
  pulseElement(element) {
    if (!element) return;
    
    element.classList.remove('pulse');
    requestAnimationFrame(() => {
      element.classList.add('pulse');
      setTimeout(() => element.classList.remove('pulse'), 600);
    });
  }

  /**
   * パーティクルアニメーションを開始
   */
  startParticleAnimation() {
    if (this.isProcessing || !this.particleContext) return;
    
    this.isProcessing = true;
    this.animateParticles();
  }

  /**
   * パーティクルをアニメーション
   */
  animateParticles() {
    if (!this.particleContext || this.particles.length === 0) {
      this.isProcessing = false;
      return;
    }

    // キャンバスをクリア
    this.particleContext.clearRect(0, 0, this.particleCanvas.width, this.particleCanvas.height);

    // パーティクルを更新・描画
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const particle = this.particles[i];
      
      // 位置を更新
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vy += 0.1; // 重力
      particle.life -= particle.decay;

      // 寿命が尽きたパーティクルを削除
      if (particle.life <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      // パーティクルを描画
      this.particleContext.save();
      this.particleContext.globalAlpha = particle.life;
      this.particleContext.fillStyle = particle.color;
      this.particleContext.beginPath();
      this.particleContext.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.particleContext.fill();
      this.particleContext.restore();
    }

    // 次のフレーム
    if (this.particles.length > 0) {
      requestAnimationFrame(() => this.animateParticles());
    } else {
      this.isProcessing = false;
    }
  }

  /**
   * アニメーションを有効/無効に設定
   */
  setEnabled(enabled) {
    this.config.enabled = enabled;
    
    if (!enabled) {
      // すべてのアニメーションを停止
      this.stopAllAnimations();
    }
  }

  /**
   * すべてのアニメーションを停止
   */
  stopAllAnimations() {
    // アクティブなアニメーションをクリア
    this.activeAnimations.forEach(timer => clearTimeout(timer));
    this.activeAnimations.clear();
    
    // パーティクルをクリア
    this.particles = [];
    if (this.particleContext) {
      this.particleContext.clearRect(0, 0, this.particleCanvas.width, this.particleCanvas.height);
    }
    
    this.isProcessing = false;
  }

  /**
   * ハードドロップエフェクトを作成
   */
  createHardDropEffect(piece, startPos, endPos, dropDistance) {
    if (!this.config.enabled || !piece || dropDistance <= 0) {
      return;
    }

    // ハードドロップのトレイル効果
    this.createDropTrail(startPos, endPos, piece);
    
    // インパクトエフェクト
    this.createDropImpact(endPos, piece);
  }

  /**
   * ドロップトレイル効果を作成
   */
  createDropTrail(startPos, endPos, piece) {
    if (!this.particleContext) return;

    const trailLength = endPos.y - startPos.y;
    
    for (let i = 0; i < trailLength; i++) {
      const y = startPos.y * 30 + i * 30;
      
      // トレイルパーティクルを生成
      for (let j = 0; j < 3; j++) {
        this.particles.push({
          x: startPos.x * 30 + 15 + (Math.random() - 0.5) * 20,
          y: y,
          vx: (Math.random() - 0.5) * 2,
          vy: Math.random() * 2,
          life: 0.6,
          decay: 0.03,
          size: Math.random() * 2 + 1,
          color: `hsl(200, 70%, ${60 + Math.random() * 30}%)` // 青系の色
        });
      }
    }

    this.startParticleAnimation();
  }

  /**
   * ドロップインパクト効果を作成
   */
  createDropImpact(endPos, piece) {
    if (!this.particleContext) return;

    const impactX = endPos.x * 30 + 15;
    const impactY = endPos.y * 30 + 15;

    // インパクトパーティクルを生成
    for (let i = 0; i < 15; i++) {
      const angle = (Math.PI * 2 * i) / 15;
      const speed = Math.random() * 4 + 2;
      
      this.particles.push({
        x: impactX,
        y: impactY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1, // 上向きのバイアス
        life: 1.0,
        decay: 0.02,
        size: Math.random() * 3 + 2,
        color: `hsl(60, 80%, ${70 + Math.random() * 20}%)` // 黄色系の色
      });
    }

    this.startParticleAnimation();
  }

  /**
   * リソースを解放
   */
  dispose() {
    this.stopAllAnimations();
    
    if (this.particleCanvas && this.particleCanvas.parentNode) {
      this.particleCanvas.parentNode.removeChild(this.particleCanvas);
    }
    
    this.particleCanvas = null;
    this.particleContext = null;
  }
}