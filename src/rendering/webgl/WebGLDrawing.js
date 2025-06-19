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

    // 垂直線
    for (let x = 0; x <= 10; x++) {
      const points = [];
      points.push(new THREE.Vector3(x, 0, 0));
      points.push(new THREE.Vector3(x, 20, 0));
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.LineSegments(geometry, material);
      this.gridGroup.add(line);
    }

    // 水平線
    for (let y = 0; y <= 20; y++) {
      const points = [];
      points.push(new THREE.Vector3(0, y, 0));
      points.push(new THREE.Vector3(10, y, 0));
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
   * 次のピースを描画
   */
  drawNextPiece(nextPiece, nextPieceGroup) {
    if (!nextPieceGroup) return;
    
    this.blocks.clearGroup(nextPieceGroup);

    if (nextPiece && nextPiece.matrix) {
      const offset = { x: 12, y: 18 }; // ボードの右側に表示
      nextPiece.matrix.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            this.blocks.createBlock(
              offset.x + x,
              offset.y - y,
              0,
              value,
              nextPieceGroup
            );
          }
        });
      });
    }
  }

  /**
   * ホールドピースを描画
   */
  drawHoldPiece(holdPiece, holdPieceGroup) {
    if (!holdPieceGroup) return;
    
    this.blocks.clearGroup(holdPieceGroup);

    if (holdPiece && holdPiece.matrix) {
      const offset = { x: -3, y: 18 }; // ボードの左側に表示
      holdPiece.matrix.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            this.blocks.createBlock(
              offset.x + x,
              offset.y - y,
              0,
              value,
              holdPieceGroup
            );
          }
        });
      });
    }
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