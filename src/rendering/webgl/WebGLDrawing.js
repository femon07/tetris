import * as THREE from 'three';

/**
 * WebGL描画メソッド群
 * ボード、ピース、グリッドなどの描画ロジックを管理
 */
export class WebGLDrawing {
  constructor(scene, blocks) {
    this.scene = scene;
    this.blocks = blocks;
    this.gridGroup = null;
  }

  /**
   * ボードのグリッド線を描画
   */
  drawGrid() {
    // 既存のグリッドがあればクリア
    if (this.gridGroup) {
      this.blocks.clearGroup(this.gridGroup);
      this.scene.remove(this.gridGroup);
    }

    this.gridGroup = new THREE.Group();
    this.scene.add(this.gridGroup);

    const gridColor = 0xcccccc;
    const material = new THREE.LineBasicMaterial({ color: gridColor });

    // 垂直線（一番左の線を追加 + ブロック中央に配置）
    for (let x = 0; x <= 10; x++) {
      const points = [];
      const lineX = x - 0.5;
      points.push(new THREE.Vector3(lineX, 0, 0));
      points.push(new THREE.Vector3(lineX, 20, 0));
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.LineSegments(geometry, material);
      this.gridGroup.add(line);
    }

    // 水平線（左に0.5ブロック移動）
    for (let y = 0; y <= 20; y++) {
      const points = [];
      points.push(new THREE.Vector3(-0.5, y, 0));
      points.push(new THREE.Vector3(9.5, y, 0));
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.LineSegments(geometry, material);
      this.gridGroup.add(line);
    }
  }

  /**
   * マトリックスを描画（汎用）
   */
  drawMatrix(matrix, offset, targetGroup) {
    if (!matrix || !Array.isArray(matrix) || !offset || !targetGroup) {
      return;
    }

    this.blocks.clearGroup(targetGroup);

    matrix.forEach((row, y) => {
      if (!Array.isArray(row)) return;
      row.forEach((value, x) => {
        if (value !== 0) {
          this.blocks.createBlock(
            x + offset.x,
            19 - (y + offset.y), // Y座標を調整
            0,
            value,
            targetGroup
          );
        }
      });
    });
  }

  /**
   * ゲームボードを描画
   */
  drawBoard(boardGrid, boardGroup) {
    if (!boardGrid || !Array.isArray(boardGrid) || !boardGroup) return;

    this.blocks.clearGroup(boardGroup);
    this.drawGrid();

    boardGrid.forEach((row, y) => {
      if (!Array.isArray(row)) return;
      row.forEach((value, x) => {
        if (value !== 0) {
          this.blocks.createBlock(x, 19 - y, 0, value, boardGroup);
        }
      });
    });
  }

  /**
   * 現在のピースを描画
   */
  drawCurrentPiece(piece, currentPieceGroup) {
    if (piece && piece.matrix && piece.pos && currentPieceGroup) {
      this.drawMatrix(piece.matrix, piece.pos, currentPieceGroup);
    }
  }

  /**
   * 次のピースを描画（3Dボードには表示しない）
   */
  drawNextPiece(nextPiece, nextPieceGroup) {
    if (!nextPieceGroup) return;
    
    // 次のピースは2Dキャンバスのみに表示するため、3Dグループからクリア
    this.blocks.clearGroup(nextPieceGroup);
    
    // 3Dボード上には何も描画しない（2Dキャンバスで処理）
    // nextPiece パラメータは互換性のため保持
  }

  /**
   * ホールドピースを描画（3Dボードには表示しない）
   */
  drawHoldPiece(holdPiece, holdPieceGroup) {
    if (!holdPieceGroup) return;
    
    // ホールドピースは2Dキャンバスのみに表示するため、3Dグループからクリア
    this.blocks.clearGroup(holdPieceGroup);
    
    // 3Dボード上には何も描画しない（2Dキャンバスで処理）
    // holdPiece パラメータは互換性のため保持
  }

  /**
   * 全体の描画統合メソッド
   */
  renderAll(gameData, groups) {
    const { boardGrid, piece, nextPiece, holdPiece } = gameData;
    const { board: boardGroup, currentPiece: currentPieceGroup, nextPiece: nextPieceGroup, holdPiece: holdPieceGroup } = groups;

    // メインボードの描画
    if (boardGrid) {
      this.drawBoard(boardGrid, boardGroup);
    }
    
    // 現在のピースの描画
    if (piece) {
      this.drawCurrentPiece(piece, currentPieceGroup);
    }

    // 次ピースとホールドピースの描画
    if (nextPiece) {
      this.drawNextPiece(nextPiece, nextPieceGroup);
    }
    
    if (holdPiece) {
      this.drawHoldPiece(holdPiece, holdPieceGroup);
    }
  }

  /**
   * 描画統計を取得
   */
  getStats() {
    return {
      hasGrid: !!this.gridGroup,
      gridChildrenCount: this.gridGroup ? this.gridGroup.children.length : 0
    };
  }

  /**
   * リソースを解放
   */
  dispose() {
    if (this.gridGroup) {
      this.blocks.clearGroup(this.gridGroup);
      this.scene.remove(this.gridGroup);
      this.gridGroup = null;
    }
  }
}