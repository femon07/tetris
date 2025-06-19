import { SpaceThemeManager } from '../../themes/space/SpaceThemeManager.js';
import { EventManager } from '../../event/EventManager.js';
import { getThemeConfig, getDefaultThemeId, isValidThemeId } from '../../themes/ThemeConfigs.js';
import * as THREE from 'three';

/**
 * WebGLテーマシステム
 * 各種テーマ（宇宙テーマなど）の統括管理
 */
export class WebGLThemeSystem {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    
    // テーマ管理
    this.currentTheme = null;
    this.themeType = getDefaultThemeId();
    this.enabled = true;
    
    // イベント管理
    this.eventManager = new EventManager();
    this.themeChangeListeners = new Set();
  }

  /**
   * テーマシステムを初期化
   */
  async initialize() {
    if (!this.enabled) return;
    
    try {
      // 保存されたテーマを読み込み
      const savedTheme = this.loadSavedTheme();
      await this.loadTheme(savedTheme);
    } catch (error) {
      console.error('[WebGLThemeSystem] テーマ初期化失敗:', error);
      this.enabled = false;
    }
  }

  /**
   * 指定されたテーマを読み込み
   */
  async loadTheme(themeType) {
    if (!isValidThemeId(themeType)) {
      throw new Error(`Invalid theme type: ${themeType}`);
    }

    // 既存テーマをクリーンアップ
    if (this.currentTheme) {
      this.currentTheme.dispose();
      this.currentTheme = null;
    }

    const config = getThemeConfig(themeType);

    switch (themeType) {
      case 'space':
        await this.loadSpaceTheme();
        break;
      case 'classic':
        this.loadClassicTheme();
        break;
      default:
        throw new Error(`Unknown theme type: ${themeType}`);
    }

    // 背景色を設定
    this.scene.background = new THREE.Color(config.backgroundColor);
    
    this.themeType = themeType;
  }

  /**
   * 宇宙テーマを読み込み
   */
  async loadSpaceTheme() {
    // WebGLCameraからTHREE.Cameraを取得
    const threeCamera = this.camera.camera || this.camera;
    this.currentTheme = new SpaceThemeManager(this.scene, threeCamera, this.eventManager);
    await this.currentTheme.initialize();
  }

  /**
   * クラシックテーマを読み込み
   */
  loadClassicTheme() {
    // クラシックテーマは特別なオブジェクトを持たない
    this.currentTheme = null;
  }

  /**
   * アニメーション更新
   */
  update(deltaTime) {
    if (this.enabled && this.currentTheme && this.currentTheme.update) {
      this.currentTheme.update(deltaTime);
    }
  }

  /**
   * テーマを切り替え
   */
  async switchTheme(themeType) {
    if (themeType === this.themeType) return;
    
    try {
      const oldTheme = this.themeType;
      await this.loadTheme(themeType);
      
      // テーマ設定を保存
      this.saveThemePreference(themeType);
      
      // リスナーに通知
      this.notifyThemeChange(oldTheme, themeType);
      
    } catch (error) {
      console.error('[WebGLThemeSystem] テーマ切り替え失敗:', error);
      throw error;
    }
  }

  /**
   * テーマシステムを有効化
   */
  enable() {
    this.enabled = true;
  }

  /**
   * テーマシステムを無効化
   */
  disable() {
    this.enabled = false;
    if (this.currentTheme) {
      this.currentTheme.deactivate();
    }
  }

  /**
   * 現在のテーマ情報を取得
   */
  getThemeInfo() {
    return {
      type: this.themeType,
      enabled: this.enabled,
      hasTheme: !!this.currentTheme,
      stats: this.currentTheme ? this.currentTheme.getStats() : null
    };
  }

  /**
   * テーマ変更リスナーを追加
   */
  addThemeChangeListener(listener) {
    this.themeChangeListeners.add(listener);
  }

  /**
   * テーマ変更リスナーを削除
   */
  removeThemeChangeListener(listener) {
    this.themeChangeListeners.delete(listener);
  }

  /**
   * テーマ変更を通知
   */
  notifyThemeChange(oldTheme, newTheme) {
    this.themeChangeListeners.forEach(listener => {
      try {
        listener(oldTheme, newTheme);
      } catch (error) {
        console.error('[WebGLThemeSystem] リスナーエラー:', error);
      }
    });
  }

  /**
   * 保存されたテーマを読み込み
   */
  loadSavedTheme() {
    try {
      const savedTheme = localStorage.getItem('tetris-theme');
      if (savedTheme && isValidThemeId(savedTheme)) {
        return savedTheme;
      }
    } catch (error) {
    }
    return getDefaultThemeId();
  }

  /**
   * テーマ設定を保存
   */
  saveThemePreference(themeId) {
    try {
      localStorage.setItem('tetris-theme', themeId);
    } catch (error) {
    }
  }

  /**
   * 現在のテーマIDを取得
   */
  getCurrentThemeId() {
    return this.themeType;
  }

  /**
   * リソースを解放
   */
  dispose() {
    if (this.currentTheme) {
      this.currentTheme.dispose();
      this.currentTheme = null;
    }
    this.themeChangeListeners.clear();
  }
}