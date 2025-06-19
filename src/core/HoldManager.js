export class HoldManager {
  constructor(pieceManager) {
    this.pieceManager = pieceManager;
    this.reset();
  }

  reset() {
    this.heldPiece = null;
    this.canHold = true;
  }

  holdPiece(isGameOver, isPaused) {
    if (isGameOver || isPaused) return false;
    
    if (!this.canHold) return false;
    
    const currentPiece = this.pieceManager.getCurrentPiece();
    if (!currentPiece) return false;
    
    this.canHold = false;
    
    if (this.heldPiece === null) {
      this.heldPiece = currentPiece;
      this.pieceManager.spawnNewPiece();
    } else {
      const temp = currentPiece;
      this.pieceManager.currentPiece = this.heldPiece;
      this.heldPiece = temp;
    }
    
    const newPiece = this.pieceManager.getCurrentPiece();
    if (newPiece) {
      const matrix = newPiece.matrix;
      const x = Math.floor((this.pieceManager.boardCols - matrix[0].length) / 2);
      const y = -matrix.length;
      newPiece.pos = { x, y };
    }
    
    return true;
  }

  enableHold() {
    this.canHold = true;
  }

  getHeldPiece() {
    return this.heldPiece;
  }

  canHoldPiece() {
    return this.canHold;
  }
}