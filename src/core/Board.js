// Boardクラス
// テトリスの盤面管理とロジックを担当

export class Board {
  constructor(cols = 10, rows = 20) {
    this.cols = cols;
    this.rows = rows;
    this.clear();
  }

  clear() {
    this.grid = Array.from({ length: this.rows }, () => Array(this.cols).fill(0));
  }

  isInside(x, y) {
    return x >= 0 && x < this.cols && y >= 0 && y < this.rows;
  }

  isEmpty(x, y) {
    return this.isInside(x, y) && this.grid[y][x] === 0;
  }

  setCell(x, y, value) {
    if (this.isInside(x, y)) this.grid[y][x] = value;
  }

  getCell(x, y) {
    if (!this.isInside(x, y) || !this.grid[y]) {
      return null;
    }
    return this.grid[y][x];
  }

  merge(piece) {
    for (let y = 0; y < piece.matrix.length; y++) {
      for (let x = 0; x < piece.matrix[y].length; x++) {
        if (piece.matrix[y][x]) {
          this.setCell(piece.pos.x + x, piece.pos.y + y, piece.matrix[y][x]);
        }
      }
    }
  }

  clearLines() {
    if (!this.grid || !Array.isArray(this.grid)) {
      console.error('Invalid grid state');
      return 0;
    }
    
    let cleared = 0;
    const newGrid = [];
    
    for (let y = 0; y < this.grid.length; y++) {
      const row = this.grid[y];
      if (!Array.isArray(row)) {
        console.warn(`Invalid row at index ${y}:`, row);
        continue;
      }
      
      try {
        if (row.every(cell => cell !== 0)) {
          cleared++;
        } else {
          newGrid.push([...row]); // 行のコピーを作成して参照を避ける
        }
      } catch (error) {
        console.error(`Error processing row ${y}:`, error);
        newGrid.push([...row]);
      }
    }
    
    // 削除された行の分だけ空の行を上に追加
    while (newGrid.length < this.rows) {
      newGrid.unshift(Array(this.cols).fill(0));
    }
    
    this.grid = newGrid;
    return cleared;
  }
}
