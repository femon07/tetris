export class GameStateManager {
  constructor(rows, cols) {
    this.state = {
      ctx: null,
      canvas: null,
      board: [],
      ROWS: rows,
      COLS: cols,
      piece: null,
      nextPiece: null,
      score: 0,
      lines: 0,
      level: 1,
      dropCounter: 0,
      dropInterval: 1000,
      lastTime: 0,
      gameLoopId: null,
      isGameOver: false,
      paused: false,
      keys: {},
      isSoftDrop: false
    };
  }

  /**
   * 状態を取得する
   * @returns {Object} 現在の状態
   */
  getState() {
    return { ...this.state };
  }

  /**
   * 特定の状態値を取得する
   * @param {string} key - 取得する状態のキー
   * @returns {*} 状態値
   */
  get(key) {
    return this.state[key];
  }

  /**
   * 特定の状態値を設定する
   * @param {string} key - 設定する状態のキー
   * @param {*} value - 設定する値
   */
  set(key, value) {
    this.state[key] = value;
  }

  /**
   * 複数の状態値を一度に設定する
   * @param {Object} updates - 更新する状態のオブジェクト
   */
  update(updates) {
    Object.assign(this.state, updates);
  }

  /**
   * ボードを初期化する
   */
  initBoard() {
    this.state.board = Array(this.state.ROWS).fill(null).map(() => Array(this.state.COLS).fill(0));
  }

  /**
   * ゲーム状態をリセットする
   */
  reset() {
    this.state.score = 0;
    this.state.lines = 0;
    this.state.level = 1;
    this.state.isGameOver = false;
    this.state.paused = false;
    this.state.dropCounter = 0;
    this.state.dropInterval = 1000;
    this.state.lastTime = 0;
    this.state.isSoftDrop = false;
    
    if (this.state.gameLoopId) {
      cancelAnimationFrame(this.state.gameLoopId);
      this.state.gameLoopId = null;
    }
    
    this.initBoard();
  }

  /**
   * ゲームの基本情報を同期する
   * @param {Object} gameInstance - ゲームインスタンス
   */
  syncWithGame(gameInstance) {
    if (!gameInstance) return;
    
    this.state.score = gameInstance.score || 0;
    this.state.lines = gameInstance.lines || 0;
    this.state.level = gameInstance.level || 1;
    this.state.isGameOver = gameInstance.isGameOver || false;
    this.state.piece = gameInstance.piece || null;
    this.state.nextPiece = gameInstance.nextPiece || null;
    
    if (gameInstance.board && gameInstance.board.grid) {
      this.state.board = gameInstance.board.grid;
    }
  }

  /**
   * キーの状態を更新する
   * @param {string} key - キー名
   * @param {boolean} pressed - 押されているかどうか
   */
  updateKeyState(key, pressed) {
    this.state.keys[key] = pressed;
  }

  /**
   * ゲームループIDを設定する
   * @param {number} id - ゲームループID
   */
  setGameLoopId(id) {
    this.state.gameLoopId = id;
  }

  /**
   * ゲームループを停止する
   */
  stopGameLoop() {
    if (this.state.gameLoopId) {
      cancelAnimationFrame(this.state.gameLoopId);
      this.state.gameLoopId = null;
    }
  }

  /**
   * ゲームが実行中かどうかを判定する
   * @returns {boolean} 実行中かどうか
   */
  isRunning() {
    return !this.state.isGameOver && !this.state.paused;
  }

  /**
   * ゲームを一時停止/再開する
   * @param {boolean} paused - 一時停止するかどうか
   */
  setPaused(paused) {
    this.state.paused = paused;
  }

  /**
   * ドロップ間隔を更新する
   * @param {number} interval - 新しいドロップ間隔
   */
  updateDropInterval(interval) {
    this.state.dropInterval = interval;
  }

  /**
   * ソフトドロップの状態を設定する
   * @param {boolean} isSoftDrop - ソフトドロップ中かどうか
   */
  setSoftDrop(isSoftDrop) {
    this.state.isSoftDrop = isSoftDrop;
  }

  /**
   * デバッグ用: 現在の状態をログに出力する
   */
  logState() {
    console.log('Current Game State:', {
      score: this.state.score,
      lines: this.state.lines,
      level: this.state.level,
      isGameOver: this.state.isGameOver,
      paused: this.state.paused,
      piece: this.state.piece,
      nextPiece: this.state.nextPiece,
    });
  }

  /**
   * 状態の検証を行う
   * @returns {boolean} 状態が有効かどうか
   */
  validateState() {
    const requiredFields = ['score', 'lines', 'level', 'ROWS', 'COLS'];
    
    for (const field of requiredFields) {
      if (typeof this.state[field] !== 'number') {
        console.warn(`Invalid state field: ${field}`, this.state[field]);
        return false;
      }
    }
    
    if (!Array.isArray(this.state.board)) {
      console.warn('Invalid board state');
      return false;
    }
    
    return true;
  }
}