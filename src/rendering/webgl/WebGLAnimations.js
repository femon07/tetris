import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';

/**
 * WebGLアニメーション管理クラス
 * ライン消去、ブロック落下などのアニメーションを統合管理
 */
export class WebGLAnimations {
  constructor(blocks, particles) {
    this.blocks = blocks;
    this.particles = particles;
    this.activeAnimations = [];
  }

  /**
   * ライン消去アニメーション
   */
  clearLinesAnimation(clearedLines, boardGroup) {
    if (!boardGroup || !clearedLines || clearedLines.length === 0) return;

    console.log('[WebGLAnimations] ライン消去アニメーション開始:', clearedLines);

    // Step 1: フェードアウト + パーティクル爆発
    this.animateClearedBlocks(clearedLines, boardGroup);

    // Step 2: 残りブロックの落下アニメーション
    setTimeout(() => {
      this.animateBlockFalling(clearedLines, boardGroup);
    }, 100); // 少し遅延させて自然な流れに
  }

  /**
   * クリアされたブロックのアニメーション
   */
  animateClearedBlocks(clearedLines, boardGroup) {
    boardGroup.children.forEach(block => {
      const blockY = Math.floor(block.position.y);
      if (clearedLines.includes(19 - blockY)) {
        // パーティクル爆発エフェクト
        const colorIndex = this.blocks.getBlockColorIndex(block);
        if (this.particles) {
          this.particles.createExplosion(
            block.position.x + 0.5, 
            block.position.y + 0.5, 
            block.position.z + 0.5, 
            colorIndex, 
            12
          );
        }
        
        // フェードアウトアニメーション
        const fadeAnimation = new TWEEN.Tween(block.material)
          .to({ opacity: 0 }, 300)
          .easing(TWEEN.Easing.Quadratic.Out)
          .onComplete(() => {
            boardGroup.remove(block);
            if (block.geometry) block.geometry.dispose();
            if (block.material) block.material.dispose();
          });
        
        block.material.transparent = true;
        fadeAnimation.start();
        
        this.activeAnimations.push({
          type: 'fade',
          tween: fadeAnimation,
          startTime: performance.now()
        });
      }
    });
  }

  /**
   * ブロック落下アニメーション
   */
  animateBlockFalling(clearedLines, boardGroup) {
    // クリアされた行を昇順にソート
    const sortedLines = [...clearedLines].sort((a, b) => a - b);

    boardGroup.children.forEach(block => {
      const blockY = Math.floor(block.position.y);
      const boardY = 19 - blockY;

      // このブロックが何行落ちるかを計算
      let linesToDrop = 0;
      for (const clearedRow of sortedLines) {
        if (boardY < clearedRow) {
          linesToDrop++;
        }
      }

      if (linesToDrop > 0) {
        const fallAnimation = new TWEEN.Tween(block.position)
          .to({ y: block.position.y - linesToDrop }, 500)
          .easing(TWEEN.Easing.Quadratic.Out);
        
        fallAnimation.start();
        
        this.activeAnimations.push({
          type: 'fall',
          tween: fallAnimation,
          startTime: performance.now()
        });
      }
    });
  }

  /**
   * ブロック配置時の軽いバウンスアニメーション
   */
  animatePiecePlacement(piece, currentPieceGroup) {
    if (!piece || !piece.matrix || !piece.pos || !currentPieceGroup) return;

    // 現在のピース全体に軽いバウンス効果
    const originalScale = { x: 1, y: 1, z: 1 };
    const bounceScale = { x: 1.1, y: 1.1, z: 1.1 };

    currentPieceGroup.children.forEach(block => {
      // スケールのバウンスアニメーション
      const bounceAnimation = new TWEEN.Tween(block.scale)
        .to(bounceScale, 100)
        .easing(TWEEN.Easing.Quadratic.Out)
        .yoyo(true)
        .repeat(1);
      
      bounceAnimation.start();
      
      this.activeAnimations.push({
        type: 'bounce',
        tween: bounceAnimation,
        startTime: performance.now()
      });
    });
  }

  /**
   * スムーズなピース移動アニメーション
   */
  animatePieceMovement(fromPosition, toPosition, duration = 100) {
    return new Promise((resolve) => {
      const moveAnimation = new TWEEN.Tween(fromPosition)
        .to(toPosition, duration)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onComplete(resolve);
      
      moveAnimation.start();
      
      this.activeAnimations.push({
        type: 'move',
        tween: moveAnimation,
        startTime: performance.now()
      });
    });
  }

  /**
   * 回転アニメーション
   */
  animatePieceRotation(targetGroup, rotationAxis = 'y', angle = Math.PI / 2, duration = 150) {
    if (!targetGroup) return;

    targetGroup.children.forEach(block => {
      const currentRotation = block.rotation[rotationAxis];
      const targetRotation = currentRotation + angle;
      
      const rotateAnimation = new TWEEN.Tween(block.rotation)
        .to({ [rotationAxis]: targetRotation }, duration)
        .easing(TWEEN.Easing.Quadratic.Out);
      
      rotateAnimation.start();
      
      this.activeAnimations.push({
        type: 'rotate',
        tween: rotateAnimation,
        startTime: performance.now()
      });
    });
  }

  /**
   * アニメーション更新（毎フレーム呼び出し）
   */
  update() {
    // 完了したアニメーションを削除
    const now = performance.now();
    this.activeAnimations = this.activeAnimations.filter(animation => {
      const elapsed = now - animation.startTime;
      // 5秒以上経ったアニメーションは強制削除（メモリリーク防止）
      return elapsed < 5000;
    });
  }

  /**
   * アニメーション統計を取得
   */
  getStats() {
    const typeCounts = {};
    this.activeAnimations.forEach(animation => {
      typeCounts[animation.type] = (typeCounts[animation.type] || 0) + 1;
    });

    return {
      activeAnimations: this.activeAnimations.length,
      animationTypes: typeCounts
    };
  }

  /**
   * 全アニメーションを停止
   */
  stopAllAnimations() {
    this.activeAnimations.forEach(animation => {
      if (animation.tween && animation.tween.stop) {
        animation.tween.stop();
      }
    });
    this.activeAnimations = [];
  }

  /**
   * リソースを解放
   */
  dispose() {
    this.stopAllAnimations();
  }
}