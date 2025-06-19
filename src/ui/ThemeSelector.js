import { getAvailableThemes, getThemeConfig, getDefaultThemeId, isValidThemeId } from '../themes/ThemeConfigs.js';

/**
 * テーマ選択UIコンポーネント
 * ドロップダウンによるテーマ切り替え機能を提供
 */
export class ThemeSelector {
  constructor(containerId, onThemeChange) {
    this.container = document.getElementById(containerId);
    this.onThemeChange = onThemeChange;
    this.currentThemeId = getDefaultThemeId();
    
    // UI要素
    this.selectorElement = null;
    this.dropdown = null;
    
    this.initialize();
  }

  /**
   * テーマセレクターを初期化
   */
  initialize() {
    this.createSelectorUI();
    this.loadSavedTheme();
    this.setupEventListeners();
  }

  /**
   * セレクターUIを作成
   */
  createSelectorUI() {
    // セレクター要素を作成
    this.selectorElement = document.createElement('div');
    this.selectorElement.className = 'theme-selector';
    this.selectorElement.innerHTML = `
      <div class="theme-selector-label">
        <span class="theme-icon">🎨</span>
        <span>テーマ:</span>
      </div>
      <select class="theme-dropdown" id="theme-dropdown">
        ${this.generateThemeOptions()}
      </select>
    `;

    // スタイルを追加
    this.addStyles();
    
    // コンテナに追加
    if (this.container) {
      this.container.insertBefore(this.selectorElement, this.container.firstChild);
    }
    
    this.dropdown = document.getElementById('theme-dropdown');
  }

  /**
   * テーマオプションのHTMLを生成
   */
  generateThemeOptions() {
    const themes = getAvailableThemes();
    return themes.map(theme => 
      `<option value="${theme.id}" title="${theme.description}">
        ${theme.icon} ${theme.name}
      </option>`
    ).join('');
  }

  /**
   * スタイルを追加
   */
  addStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .theme-selector {
        margin-bottom: 15px;
        padding: 10px;
        background: rgba(240, 240, 240, 0.95);
        border-radius: 5px;
        border: 1px solid #ccc;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
      }
      
      .theme-selector-label {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 12px;
        font-weight: bold;
        color: #333;
      }
      
      .theme-icon {
        font-size: 14px;
      }
      
      .theme-dropdown {
        padding: 4px 8px;
        border: 1px solid #ddd;
        border-radius: 3px;
        background: white;
        font-size: 11px;
        min-width: 120px;
        cursor: pointer;
      }
      
      .theme-dropdown:hover {
        border-color: #0066cc;
      }
      
      .theme-dropdown:focus {
        outline: none;
        border-color: #0066cc;
        box-shadow: 0 0 3px rgba(0, 102, 204, 0.3);
      }
      
      .theme-selector.space-theme {
        background: rgba(20, 30, 60, 0.9);
        border-color: #4488ff;
      }
      
      .theme-selector.space-theme .theme-selector-label {
        color: #ffffff;
      }
      
      .theme-selector.space-theme .theme-dropdown {
        background: rgba(255, 255, 255, 0.9);
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * イベントリスナーを設定
   */
  setupEventListeners() {
    if (this.dropdown) {
      this.dropdown.addEventListener('change', (event) => {
        this.handleThemeChange(event.target.value);
      });
    }
  }

  /**
   * テーマ変更を処理
   */
  async handleThemeChange(themeId) {
    if (!isValidThemeId(themeId) || themeId === this.currentThemeId) {
      return;
    }

    try {
      // 変更中の視覚的フィードバック
      this.setLoading(true);
      
      // テーマ変更を実行
      if (this.onThemeChange) {
        await this.onThemeChange(themeId);
      }
      
      // 成功時の処理
      this.currentThemeId = themeId;
      this.saveThemePreference(themeId);
      this.updateUITheme(themeId);
      
    } catch (error) {
      console.error('[ThemeSelector] テーマ変更失敗:', error);
      // エラー時は元のテーマに戻す
      this.dropdown.value = this.currentThemeId;
      this.showErrorMessage('テーマの変更に失敗しました');
    } finally {
      this.setLoading(false);
    }
  }

  /**
   * ローディング状態を設定
   */
  setLoading(isLoading) {
    if (this.dropdown) {
      this.dropdown.disabled = isLoading;
      this.dropdown.style.cursor = isLoading ? 'wait' : 'pointer';
    }
  }

  /**
   * UI要素のテーマを更新
   */
  updateUITheme(themeId) {
    const config = getThemeConfig(themeId);
    
    // セレクター自体のテーマを更新
    this.selectorElement.className = `theme-selector ${themeId}-theme`;
    
    // カスタムプロパティを更新（他のUI要素で使用可能）
    document.documentElement.style.setProperty('--theme-bg', config.ui.panelBackground);
    document.documentElement.style.setProperty('--theme-text', config.ui.textColor);
    document.documentElement.style.setProperty('--theme-border', config.ui.borderColor);
    document.documentElement.style.setProperty('--theme-accent', config.ui.accentColor);
  }

  /**
   * エラーメッセージを表示
   */
  showErrorMessage(message) {
    // 簡単なトースト表示
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: #ff4444;
      color: white;
      padding: 10px 15px;
      border-radius: 5px;
      font-size: 12px;
      z-index: 1000;
    `;
    
    document.body.appendChild(toast);
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 3000);
  }

  /**
   * 保存されたテーマを読み込み
   */
  loadSavedTheme() {
    try {
      const savedTheme = localStorage.getItem('tetris-theme');
      if (savedTheme && isValidThemeId(savedTheme)) {
        this.currentThemeId = savedTheme;
        if (this.dropdown) {
          this.dropdown.value = savedTheme;
        }
        this.updateUITheme(savedTheme);
      }
    } catch (error) {
    }
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
    return this.currentThemeId;
  }

  /**
   * プログラム的にテーマを設定
   */
  setTheme(themeId) {
    if (isValidThemeId(themeId)) {
      this.dropdown.value = themeId;
      this.handleThemeChange(themeId);
    }
  }

  /**
   * リソースを解放
   */
  dispose() {
    if (this.selectorElement && this.selectorElement.parentNode) {
      this.selectorElement.parentNode.removeChild(this.selectorElement);
    }
  }
}