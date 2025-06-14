// ゲームの定数定義
const COLS = 10; // フィールドの幅（ブロック数）
const ROWS = 20; // フィールドの高さ（ブロック数）
const BLOCK = 20; // 1ブロックのピクセルサイズ

// スコア計算用の定数
const SCORE_TABLE = {
  1: 40,   // 1行消し
  2: 100,  // 2行消し
  3: 300,  // 3行消し
  4: 1200  // 4行消し（テトリス）
};

// テトリミノの形状定義
const SHAPES = [
  // I
  [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  // J
  [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0]
  ],
  // L
  [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
  ],
  // O
  [
    [1, 1],
    [1, 1]
  ],
  // S
  [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0]
  ],
  // T
  [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0]
  ],
  // Z
  [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0]
  ]
];

// テトリミノの色定義
const COLORS = [
  '#FF0D72', // I (赤紫)
  '#0DC2FF', // J (青)
  '#0DFF72', // L (緑)
  '#F538FF', // O (ピンク)
  '#FF8E0D', // S (オレンジ)
  '#FFE138', // T (黄色)
  '#3877FF'  // Z (青)
];

// ゲームの状態
const GAME_STATES = {
  INIT: 'INIT',
  PLAYING: 'PLAYING',
  PAUSED: 'PAUSED',
  GAME_OVER: 'GAME_OVER'
};

// エクスポート
module.exports = {
  COLS,
  ROWS,
  BLOCK,
  SCORE_TABLE,
  SHAPES,
  COLORS,
  GAME_STATES
};
