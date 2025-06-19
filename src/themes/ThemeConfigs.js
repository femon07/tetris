/**
 * テーマ設定統合管理
 * 利用可能なテーマの定義と設定を提供
 */

export const THEME_TYPES = {
  SPACE: 'space',
  CLASSIC: 'classic'
};

export const THEME_CONFIGS = {
  [THEME_TYPES.SPACE]: {
    id: 'space',
    name: '宇宙テーマ',
    description: '3D宇宙戦闘エフェクト付きテーマ',
    backgroundColor: 0x000011,
    ui: {
      panelBackground: 'rgba(20, 30, 60, 0.9)',
      textColor: '#ffffff',
      borderColor: '#4488ff',
      accentColor: '#44aaff'
    },
    effects: {
      particles: true,
      animations: true,
      lighting: 'dynamic'
    },
    icon: '🚀'
  },
  
  [THEME_TYPES.CLASSIC]: {
    id: 'classic',
    name: 'クラシック',
    description: 'シンプルで軽量な標準テーマ',
    backgroundColor: 0xf0f0f0,
    ui: {
      panelBackground: 'rgba(255, 255, 255, 0.95)',
      textColor: '#333333',
      borderColor: '#cccccc',
      accentColor: '#0066cc'
    },
    effects: {
      particles: false,
      animations: false,
      lighting: 'static'
    },
    icon: '🎮'
  }
};

/**
 * 利用可能なテーマのリストを取得
 */
export function getAvailableThemes() {
  return Object.values(THEME_CONFIGS);
}

/**
 * テーマ設定を取得
 */
export function getThemeConfig(themeId) {
  return THEME_CONFIGS[themeId] || THEME_CONFIGS[THEME_TYPES.CLASSIC];
}

/**
 * デフォルトテーマIDを取得
 */
export function getDefaultThemeId() {
  return THEME_TYPES.SPACE;
}

/**
 * テーマIDの有効性をチェック
 */
export function isValidThemeId(themeId) {
  return Object.values(THEME_TYPES).includes(themeId);
}