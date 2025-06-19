import { Canvas2DRenderer } from './Canvas2DRenderer.js';
import { WebGLRenderer } from './WebGLRenderer.js';

/**
 * レンダラーの種類
 */
export const RendererType = {
  CANVAS_2D: 'canvas2d',
  WEBGL: 'webgl'
};

/**
 * レンダラーファクトリークラス
 * 指定されたタイプに応じて適切なレンダラーを生成する
 */
export class RendererFactory {
  /**
   * WebGL対応状況をキャッシュ
   */
  static webglSupported = null;

  /**
   * WebGL対応状況を確認する
   * @returns {boolean} WebGL対応フラグ
   */
  static isWebGLSupported() {
    if (RendererFactory.webglSupported !== null) {
      return RendererFactory.webglSupported;
    }

    // テスト環境（Jest/JSDOM）では常にfalseを返す
    if (typeof process !== 'undefined' && process.env.NODE_ENV === 'test') {
      RendererFactory.webglSupported = false;
      return false;
    }

    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      RendererFactory.webglSupported = !!gl;
      
      // テスト用のcanvasをクリーンアップ
      canvas.width = 1;
      canvas.height = 1;
      
      return RendererFactory.webglSupported;
    } catch (error) {
      // テスト環境では警告を出さない
      if (typeof process === 'undefined' || process.env.NODE_ENV !== 'test') {
        console.warn('WebGL support check failed:', error);
      }
      RendererFactory.webglSupported = false;
      return false;
    }
  }

  /**
   * 利用可能なレンダラータイプを取得する
   * @returns {Array<string>} 利用可能なレンダラータイプの配列
   */
  static getAvailableRendererTypes() {
    const types = [RendererType.CANVAS_2D];
    
    if (RendererFactory.isWebGLSupported()) {
      types.push(RendererType.WEBGL);
    }
    
    return types;
  }

  /**
   * デフォルトのレンダラータイプを取得する
   * @returns {string} デフォルトレンダラータイプ
   */
  static getDefaultRendererType() {
    // 現時点ではCanvas2Dをデフォルトとする
    // 将来的にはユーザー設定やパフォーマンスに基づいて決定
    return RendererType.CANVAS_2D;
  }

  /**
   * 推奨レンダラータイプを取得する
   * デバイスの性能に基づいて最適なレンダラーを推奨
   * @returns {string} 推奨レンダラータイプ
   */
  static getRecommendedRendererType() {
    // 簡単なパフォーマンス推定
    const deviceMemory = navigator.deviceMemory || 4; // デフォルト4GB
    const hardwareConcurrency = navigator.hardwareConcurrency || 4; // デフォルト4コア
    
    // 高性能デバイスの場合はWebGLを推奨
    if (deviceMemory >= 8 && hardwareConcurrency >= 8 && RendererFactory.isWebGLSupported()) {
      return RendererType.WEBGL;
    }
    
    // 中性能デバイスでもWebGLが使用可能なら推奨
    if (deviceMemory >= 4 && RendererFactory.isWebGLSupported()) {
      return RendererType.WEBGL;
    }
    
    return RendererType.CANVAS_2D;
  }

  /**
   * レンダラーを作成する
   * @param {string} type - レンダラータイプ
   * @param {HTMLCanvasElement} canvas - キャンバス要素
   * @param {Array<string>} colors - 色配列
   * @param {number} blockSize - ブロックサイズ
   * @returns {BaseRenderer} 作成されたレンダラーインスタンス
   */
  static createRenderer(type, canvas, colors, blockSize) {
    if (!canvas || !colors || !blockSize) {
      throw new Error('Invalid parameters for renderer creation');
    }

    // レンダラータイプの正規化
    const normalizedType = type ? type.toLowerCase() : RendererFactory.getDefaultRendererType();

    switch (normalizedType) {
      case RendererType.CANVAS_2D:
        return new Canvas2DRenderer(canvas, colors, blockSize);
        
      case RendererType.WEBGL:
        if (!RendererFactory.isWebGLSupported()) {
          console.warn('WebGL not supported, falling back to Canvas2D');
          return new Canvas2DRenderer(canvas, colors, blockSize);
        }
        try {
          return new WebGLRenderer(canvas, colors, blockSize);
        } catch (error) {
          console.error('WebGL renderer creation failed, falling back to Canvas2D:', error);
          return new Canvas2DRenderer(canvas, colors, blockSize);
        }
        
      default:
        console.warn(`Unknown renderer type: ${type}, falling back to Canvas2D`);
        return new Canvas2DRenderer(canvas, colors, blockSize);
    }
  }

  /**
   * 自動でベストなレンダラーを作成する
   * @param {HTMLCanvasElement} canvas - キャンバス要素
   * @param {Array<string>} colors - 色配列
   * @param {number} blockSize - ブロックサイズ
   * @returns {BaseRenderer} 作成されたレンダラーインスタンス
   */
  static createAutoRenderer(canvas, colors, blockSize) {
    const recommendedType = RendererFactory.getRecommendedRendererType();
    return RendererFactory.createRenderer(recommendedType, canvas, colors, blockSize);
  }

  /**
   * レンダラータイプの表示名を取得する
   * @param {string} type - レンダラータイプ
   * @returns {string} 表示名
   */
  static getRendererDisplayName(type) {
    switch (type) {
      case RendererType.CANVAS_2D:
        return 'Canvas 2D (互換性重視)';
      case RendererType.WEBGL:
        return 'WebGL (高性能3D)';
      default:
        return '不明なレンダラー';
    }
  }

  /**
   * レンダラータイプの説明を取得する
   * @param {string} type - レンダラータイプ
   * @returns {string} 説明文
   */
  static getRendererDescription(type) {
    switch (type) {
      case RendererType.CANVAS_2D:
        return 'すべてのブラウザで動作する従来型のレンダラー。軽量で安定性が高い。';
      case RendererType.WEBGL:
        return '3D描画とリッチなエフェクトを提供。高性能だが一部の古いデバイスでは動作しない場合がある。';
      default:
        return '詳細情報なし';
    }
  }

  /**
   * システム情報を取得する
   * @returns {Object} システム情報
   */
  static getSystemInfo() {
    return {
      webglSupported: RendererFactory.isWebGLSupported(),
      availableRenderers: RendererFactory.getAvailableRendererTypes(),
      defaultRenderer: RendererFactory.getDefaultRendererType(),
      recommendedRenderer: RendererFactory.getRecommendedRendererType(),
      deviceMemory: navigator.deviceMemory || 'unknown',
      hardwareConcurrency: navigator.hardwareConcurrency || 'unknown',
      userAgent: navigator.userAgent
    };
  }
}