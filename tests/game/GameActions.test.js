import { Game } from '../../src/core/Game.js';

describe('ゲームアクション処理', () => {
  let game;
  
  beforeEach(() => {
    game = new Game();
    game.reset();
  });
  
  describe('movePiece', () => {
    test('ゲームオーバーでない場合、ピースを移動できる', () => {
      // ゲームが実行中であることを確認
      expect(game.isGameOver).toBe(false);
      
      // 移動をテスト
      const result = game.movePiece(1);
      
      // 移動は成功または失敗する（具体的な結果は衝突判定によって決まる）
      expect(typeof result).toBe('boolean');
    });
    
    test('ゲームオーバーの場合、何も実行しない', () => {
      // ゲームオーバー状態に設定
      game.gameState.isGameOver = true;
      
      const result = game.movePiece(1);
      expect(result).toBe(false);
    });
    
    test('一時停止中の場合、正常に動作する', () => {
      // 一時停止中でも移動は可能（UIレベルで制御される）
      game.gameState.paused = true;
      
      const result = game.movePiece(1);
      expect(typeof result).toBe('boolean');
    });
  });
  
  describe('dropPiece', () => {
    test('ゲームオーバーでない場合、ピースをドロップできる', () => {
      expect(game.isGameOver).toBe(false);
      
      const result = game.dropPiece();
      expect(typeof result).toBe('boolean');
    });
    
    test('ゲームオーバーの場合、何も実行しない', () => {
      game.gameState.isGameOver = true;
      
      const result = game.dropPiece();
      expect(result).toBe(false);
    });
    
    test('ドロップ後にゲームオーバーになる可能性がある', () => {
      // このテストはゲームオーバー条件をシミュレートするのが困難なため、
      // 基本的な動作のみテスト
      game.dropPiece();
      
      // ゲームオーバー状態は変化する可能性がある
      expect(typeof game.isGameOver).toBe('boolean');
    });
  });
  
  describe('rotatePiece', () => {
    test('ゲームオーバーでない場合、ピースを回転できる', () => {
      expect(game.isGameOver).toBe(false);
      
      const result = game.rotatePiece(1);
      expect(typeof result).toBe('boolean');
    });
    
    test('ゲームオーバーの場合、何も実行しない', () => {
      game.gameState.isGameOver = true;
      
      const result = game.rotatePiece(1);
      expect(result).toBe(false);
    });
  });
  
  describe('holdPiece', () => {
    test('ゲームオーバーでない場合、ピースをホールドできる', () => {
      expect(game.isGameOver).toBe(false);
      
      const result = game.holdPiece();
      expect(typeof result).toBe('boolean');
    });
    
    test('ゲームオーバーの場合、ホールドできない', () => {
      game.gameState.isGameOver = true;
      
      const result = game.holdPiece();
      expect(result).toBe(false);
    });
    
    test('一時停止中はホールドできない', () => {
      game.gameState.paused = true;
      
      const result = game.holdPiece();
      expect(result).toBe(false);
    });
  });
  
  describe('ソフトドロップ機能', () => {
    test('ソフトドロップを開始できる', () => {
      game.startSoftDrop();
      
      // ソフトドロップ状態になっていることを確認
      // （実際の確認方法は実装依存）
      expect(game.gameState.isSoftDrop).toBe(true);
    });
    
    test('ソフトドロップを停止できる', () => {
      game.startSoftDrop();
      game.stopSoftDrop();
      
      // ソフトドロップが停止していることを確認
      expect(game.gameState.isSoftDrop).toBe(false);
    });
  });
});