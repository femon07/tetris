/**
 * コロブチカ（Korobeiniki）音楽データ
 * テトリスの代表的BGM - BPM160 アップテンポ版
 * 原曲：ロシア民謡「コロブチカ」（パブリックドメイン）
 */

// 音名を周波数に変換するマップ
export const NOTE_FREQUENCIES = {
  'REST': 0,
  // 低音域
  'C2': 65.41, 'C#2': 69.30, 'D2': 73.42, 'D#2': 77.78, 'E2': 82.41, 'F2': 87.31,
  'F#2': 92.50, 'G2': 98.00, 'G#2': 103.83, 'A2': 110.00, 'A#2': 116.54, 'B2': 123.47,
  
  // 中音域
  'C3': 130.81, 'C#3': 138.59, 'D3': 146.83, 'D#3': 155.56, 'E3': 164.81, 'F3': 174.61,
  'F#3': 185.00, 'G3': 196.00, 'G#3': 207.65, 'A3': 220.00, 'A#3': 233.08, 'B3': 246.94,
  'C4': 261.63, 'C#4': 277.18, 'D4': 293.66, 'D#4': 311.13, 'E4': 329.63, 'F4': 349.23,
  'F#4': 369.99, 'G4': 392.00, 'G#4': 415.30, 'A4': 440.00, 'A#4': 466.16, 'B4': 493.88,
  'C5': 523.25, 'C#5': 554.37, 'D5': 587.33, 'D#5': 622.25, 'E5': 659.25, 'F5': 698.46,
  'F#5': 739.99, 'G5': 783.99, 'G#5': 830.61, 'A5': 880.00, 'A#5': 932.33, 'B5': 987.77,
  
  // 高音域
  'C6': 1046.50, 'C#6': 1108.73, 'D6': 1174.66, 'D#6': 1244.51, 'E6': 1318.51, 'F6': 1396.91,
  'F#6': 1479.98, 'G6': 1567.98, 'G#6': 1661.22, 'A6': 1760.00, 'A#6': 1864.66, 'B6': 1975.53,
  'C7': 2093.00, 'C#7': 2217.46, 'D7': 2349.32, 'D#7': 2489.02, 'E7': 2637.02, 'F7': 2793.83,
  'F#7': 2959.96, 'G7': 3135.96, 'G#7': 3322.44, 'A7': 3520.00, 'A#7': 3729.31, 'B7': 3951.07
};

// BPM160での音符の長さ（秒）
const BPM = 160;
const BEAT_DURATION = 60 / BPM; // 0.375秒
export const NOTE_DURATIONS = {
  'whole': BEAT_DURATION * 4,      // 全音符
  'half': BEAT_DURATION * 2,       // 2分音符
  'quarter': BEAT_DURATION,        // 4分音符
  'eighth': BEAT_DURATION / 2,     // 8分音符
  'sixteenth': BEAT_DURATION / 4,  // 16分音符
  'sixteenth': BEAT_DURATION / 8, // 32分音符
  'dotted_quarter': BEAT_DURATION * 1.5,  // 付点4分音符
  'dotted_eighth': BEAT_DURATION * 0.75,   // 付点8分音符
  'triplet_eighth': BEAT_DURATION / 3,     // 8分3連符
  'syncopated_eighth': BEAT_DURATION * 0.6, // シンコペーション用
  'sixty_fourth': BEAT_DURATION / 16        // 64分音符（最短）
};

// コロブチカ メインメロディー（シンコペーション強化版）
export const KOROBEINIKI_MELODY = [
  // Aセクション（シンコペーション強化版）
  // 小節1 (Am) - シンコペーションパターン
  { note: 'E5', duration: 'syncopated_eighth' }, { note: 'REST', duration: 'sixteenth' }, 
  { note: 'B4', duration: 'sixteenth' }, { note: 'C5', duration: 'syncopated_eighth' }, 
  { note: 'D5', duration: 'eighth' }, { note: 'E5', duration: 'sixteenth' }, 
  { note: 'C5', duration: 'syncopated_eighth' }, { note: 'B4', duration: 'sixteenth' }, { note: 'A4', duration: 'eighth' },

  // 小節2 (Am) - 3連符とシンコペーション
  { note: 'A4', duration: 'triplet_eighth' }, { note: 'G4', duration: 'triplet_eighth' }, { note: 'E4', duration: 'triplet_eighth' },
  { note: 'C4', duration: 'syncopated_eighth' }, { note: 'REST', duration: 'sixteenth' },
  { note: 'D4', duration: 'sixteenth' }, { note: 'E4', duration: 'syncopated_eighth' }, 
  { note: 'F4', duration: 'sixteenth' }, { note: 'E4', duration: 'eighth' },

  // 小節3 (Dm)
  { note: 'D5', duration: 'eighth' }, { note: 'C5', duration: 'eighth' }, { note: 'B4', duration: 'eighth' }, { note: 'A4', duration: 'eighth' },
  { note: 'G4', duration: 'eighth' }, { note: 'F4', duration: 'eighth' }, { note: 'E4', duration: 'eighth' }, { note: 'D4', duration: 'eighth' },

  // 小節4 (E7)
  { note: 'C5', duration: 'eighth' }, { note: 'B4', duration: 'eighth' }, { note: 'A4', duration: 'eighth' }, { note: 'G#4', duration: 'eighth' },
  { note: 'A4', duration: 'eighth' }, { note: 'B4', duration: 'eighth' }, { note: 'C5', duration: 'eighth' }, { note: 'E5', duration: 'eighth' },

  // 小節5 (Am) - 繰り返し
  { note: 'E5', duration: 'eighth' }, { note: 'B4', duration: 'eighth' }, { note: 'C5', duration: 'eighth' }, { note: 'D5', duration: 'eighth' },
  { note: 'E5', duration: 'eighth' }, { note: 'C5', duration: 'eighth' }, { note: 'B4', duration: 'eighth' }, { note: 'A4', duration: 'eighth' },

  // 小節6 (Am) - 繰り返し
  { note: 'A4', duration: 'eighth' }, { note: 'G4', duration: 'eighth' }, { note: 'E4', duration: 'eighth' }, { note: 'C4', duration: 'eighth' },
  { note: 'D4', duration: 'eighth' }, { note: 'E4', duration: 'eighth' }, { note: 'F4', duration: 'eighth' }, { note: 'E4', duration: 'eighth' },

  // 小節7 (Dm) - 繰り返し
  { note: 'D5', duration: 'eighth' }, { note: 'C5', duration: 'eighth' }, { note: 'B4', duration: 'eighth' }, { note: 'A4', duration: 'eighth' },
  { note: 'G4', duration: 'eighth' }, { note: 'F4', duration: 'eighth' }, { note: 'E4', duration: 'eighth' }, { note: 'D4', duration: 'eighth' },

  // 小節8 (E7)
  { note: 'C5', duration: 'eighth' }, { note: 'B4', duration: 'eighth' }, { note: 'A4', duration: 'eighth' }, { note: 'G#4', duration: 'eighth' },
  { note: 'A4', duration: 'eighth' }, { note: 'B4', duration: 'eighth' }, { note: 'C5', duration: 'eighth' }, { note: 'E5', duration: 'eighth' },

  // Bセクション
  // 小節9 (Dm)
  { note: 'D5', duration: 'eighth' }, { note: 'F5', duration: 'eighth' }, { note: 'A5', duration: 'eighth' }, { note: 'G5', duration: 'eighth' },
  { note: 'F5', duration: 'eighth' }, { note: 'E5', duration: 'eighth' }, { note: 'D5', duration: 'eighth' }, { note: 'C5', duration: 'eighth' },

  // 小節10 (G7)
  { note: 'B4', duration: 'eighth' }, { note: 'A4', duration: 'eighth' }, { note: 'G4', duration: 'eighth' }, { note: 'F4', duration: 'eighth' },
  { note: 'E4', duration: 'eighth' }, { note: 'D4', duration: 'eighth' }, { note: 'C4', duration: 'eighth' }, { note: 'B3', duration: 'eighth' },

  // 小節11 (C)
  { note: 'C5', duration: 'eighth' }, { note: 'B4', duration: 'eighth' }, { note: 'A4', duration: 'eighth' }, { note: 'G4', duration: 'eighth' },
  { note: 'F4', duration: 'eighth' }, { note: 'E4', duration: 'eighth' }, { note: 'D4', duration: 'eighth' }, { note: 'C4', duration: 'eighth' },

  // 小節12 (F)
  { note: 'B4', duration: 'eighth' }, { note: 'A4', duration: 'eighth' }, { note: 'G4', duration: 'eighth' }, { note: 'F4', duration: 'eighth' },
  { note: 'E4', duration: 'eighth' }, { note: 'D4', duration: 'eighth' }, { note: 'C4', duration: 'eighth' }, { note: 'B3', duration: 'eighth' },

  // 小節13 (Bdim - E7)
  { note: 'B4', duration: 'eighth' }, { note: 'C5', duration: 'eighth' }, { note: 'D5', duration: 'eighth' }, { note: 'E5', duration: 'eighth' },
  { note: 'F5', duration: 'eighth' }, { note: 'E5', duration: 'eighth' }, { note: 'D5', duration: 'eighth' }, { note: 'C5', duration: 'eighth' },

  // 小節14 (Am) - 繰り返し
  { note: 'E5', duration: 'eighth' }, { note: 'B4', duration: 'eighth' }, { note: 'C5', duration: 'eighth' }, { note: 'D5', duration: 'eighth' },
  { note: 'E5', duration: 'eighth' }, { note: 'C5', duration: 'eighth' }, { note: 'B4', duration: 'eighth' }, { note: 'A4', duration: 'eighth' },

  // 小節15 (Dm) - 繰り返し
  { note: 'D5', duration: 'eighth' }, { note: 'C5', duration: 'eighth' }, { note: 'B4', duration: 'eighth' }, { note: 'A4', duration: 'eighth' },
  { note: 'G4', duration: 'eighth' }, { note: 'F4', duration: 'eighth' }, { note: 'E4', duration: 'eighth' }, { note: 'D4', duration: 'eighth' },

  // 小節16 (E7 - Am)
  { note: 'C5', duration: 'eighth' }, { note: 'B4', duration: 'eighth' }, { note: 'A4', duration: 'eighth' }, { note: 'G#4', duration: 'eighth' },
  { note: 'A4', duration: 'eighth' }, { note: 'REST', duration: 'quarter' }, { note: 'REST', duration: 'eighth' },
];

// オクターブ上のメロディー（重ね用）
export const KOROBEINIKI_MELODY_OCTAVE = [
  // Aセクション - 1オクターブ上
  // 小節1 (Am)
  { note: 'E6', duration: 'syncopated_eighth' }, { note: 'REST', duration: 'sixteenth' }, 
  { note: 'B5', duration: 'sixteenth' }, { note: 'C6', duration: 'syncopated_eighth' }, 
  { note: 'D6', duration: 'eighth' }, { note: 'E6', duration: 'sixteenth' }, 
  { note: 'C6', duration: 'syncopated_eighth' }, { note: 'B5', duration: 'sixteenth' }, { note: 'A5', duration: 'eighth' },

  // 小節2 (Am)
  { note: 'A5', duration: 'triplet_eighth' }, { note: 'G5', duration: 'triplet_eighth' }, { note: 'E5', duration: 'triplet_eighth' },
  { note: 'C5', duration: 'syncopated_eighth' }, { note: 'REST', duration: 'sixteenth' },
  { note: 'D5', duration: 'sixteenth' }, { note: 'E5', duration: 'syncopated_eighth' }, 
  { note: 'F5', duration: 'sixteenth' }, { note: 'E5', duration: 'eighth' },

  // 残りのメロディーも同様に1オクターブ上で繰り返し
  // (簡略化のため最初の2小節のみ表示)
];

// ダイナミックなベースライン（グルーヴ重視）
export const KOROBEINIKI_BASS = [
  // Aセクション (8小節)
  // 小節1 (Am)
  { note: 'A2', duration: 'eighth' }, { note: 'E3', duration: 'eighth' }, { note: 'A2', duration: 'eighth' }, { note: 'E3', duration: 'eighth' },
  { note: 'A2', duration: 'eighth' }, { note: 'E3', duration: 'eighth' }, { note: 'A2', duration: 'eighth' }, { note: 'E3', duration: 'eighth' },

  // 小節2 (Am)
  { note: 'A2', duration: 'eighth' }, { note: 'E3', duration: 'eighth' }, { note: 'A2', duration: 'eighth' }, { note: 'E3', duration: 'eighth' },
  { note: 'A2', duration: 'eighth' }, { note: 'E3', duration: 'eighth' }, { note: 'A2', duration: 'eighth' }, { note: 'E3', duration: 'eighth' },

  // 小節3 (Dm)
  { note: 'D3', duration: 'eighth' }, { note: 'A3', duration: 'eighth' }, { note: 'D3', duration: 'eighth' }, { note: 'A3', duration: 'eighth' },
  { note: 'D3', duration: 'eighth' }, { note: 'A3', duration: 'eighth' }, { note: 'D3', duration: 'eighth' }, { note: 'A3', duration: 'eighth' },

  // 小節4 (E7)
  { note: 'E3', duration: 'eighth' }, { note: 'B3', duration: 'eighth' }, { note: 'E3', duration: 'eighth' }, { note: 'B3', duration: 'eighth' },
  { note: 'E3', duration: 'eighth' }, { note: 'B3', duration: 'eighth' }, { note: 'E3', duration: 'eighth' }, { note: 'B3', duration: 'eighth' },

  // 小節5 (Am) - 繰り返し
  { note: 'A2', duration: 'eighth' }, { note: 'E3', duration: 'eighth' }, { note: 'A2', duration: 'eighth' }, { note: 'E3', duration: 'eighth' },
  { note: 'A2', duration: 'eighth' }, { note: 'E3', duration: 'eighth' }, { note: 'A2', duration: 'eighth' }, { note: 'E3', duration: 'eighth' },

  // 小節6 (Am) - 繰り返し
  { note: 'A2', duration: 'eighth' }, { note: 'E3', duration: 'eighth' }, { note: 'A2', duration: 'eighth' }, { note: 'E3', duration: 'eighth' },
  { note: 'A2', duration: 'eighth' }, { note: 'E3', duration: 'eighth' }, { note: 'A2', duration: 'eighth' }, { note: 'E3', duration: 'eighth' },

  // 小節7 (Dm) - 繰り返し
  { note: 'D3', duration: 'eighth' }, { note: 'A3', duration: 'eighth' }, { note: 'D3', duration: 'eighth' }, { note: 'A3', duration: 'eighth' },
  { note: 'D3', duration: 'eighth' }, { note: 'A3', duration: 'eighth' }, { note: 'D3', duration: 'eighth' }, { note: 'A3', duration: 'eighth' },

  // 小節8 (E7)
  { note: 'E3', duration: 'eighth' }, { note: 'B3', duration: 'eighth' }, { note: 'E3', duration: 'eighth' }, { note: 'B3', duration: 'eighth' },
  { note: 'E3', duration: 'eighth' }, { note: 'B3', duration: 'eighth' }, { note: 'E3', duration: 'eighth' }, { note: 'B3', duration: 'eighth' },

  // Bセクション (8小節)
  // 小節9 (Dm)
  { note: 'D3', duration: 'eighth' }, { note: 'A3', duration: 'eighth' }, { note: 'D3', duration: 'eighth' }, { note: 'A3', duration: 'eighth' },
  { note: 'D3', duration: 'eighth' }, { note: 'A3', duration: 'eighth' }, { note: 'D3', duration: 'eighth' }, { note: 'A3', duration: 'eighth' },

  // 小節10 (G7)
  { note: 'G2', duration: 'eighth' }, { note: 'D3', duration: 'eighth' }, { note: 'G2', duration: 'eighth' }, { note: 'D3', duration: 'eighth' },
  { note: 'G2', duration: 'eighth' }, { note: 'D3', duration: 'eighth' }, { note: 'G2', duration: 'eighth' }, { note: 'D3', duration: 'eighth' },

  // 小節11 (C)
  { note: 'C3', duration: 'eighth' }, { note: 'G3', duration: 'eighth' }, { note: 'C3', duration: 'eighth' }, { note: 'G3', duration: 'eighth' },
  { note: 'C3', duration: 'eighth' }, { note: 'G3', duration: 'eighth' }, { note: 'C3', duration: 'eighth' }, { note: 'G3', duration: 'eighth' },

  // 小節12 (F)
  { note: 'F2', duration: 'eighth' }, { note: 'C3', duration: 'eighth' }, { note: 'F2', duration: 'eighth' }, { note: 'C3', duration: 'eighth' },
  { note: 'F2', duration: 'eighth' }, { note: 'C3', duration: 'eighth' }, { note: 'F2', duration: 'eighth' }, { note: 'C3', duration: 'eighth' },

  // 小節13 (Bdim - E7)
  { note: 'B2', duration: 'eighth' }, { note: 'F3', duration: 'eighth' }, { note: 'B2', duration: 'eighth' }, { note: 'F3', duration: 'eighth' },
  { note: 'E3', duration: 'eighth' }, { note: 'B3', duration: 'eighth' }, { note: 'E3', duration: 'eighth' }, { note: 'B3', duration: 'eighth' },

  // 小節14 (Am) - 繰り返し
  { note: 'A2', duration: 'eighth' }, { note: 'E3', duration: 'eighth' }, { note: 'A2', duration: 'eighth' }, { note: 'E3', duration: 'eighth' },
  { note: 'A2', duration: 'eighth' }, { note: 'E3', duration: 'eighth' }, { note: 'A2', duration: 'eighth' }, { note: 'E3', duration: 'eighth' },

  // 小節15 (Dm) - 繰り返し
  { note: 'D3', duration: 'eighth' }, { note: 'A3', duration: 'eighth' }, { note: 'D3', duration: 'eighth' }, { note: 'A3', duration: 'eighth' },
  { note: 'D3', duration: 'eighth' }, { note: 'A3', duration: 'eighth' }, { note: 'D3', duration: 'eighth' }, { note: 'A3', duration: 'eighth' },

  // 小節16 (E7 - Am)
  { note: 'E3', duration: 'eighth' }, { note: 'B3', duration: 'eighth' }, { note: 'E3', duration: 'eighth' }, { note: 'B3', duration: 'eighth' },
  { note: 'A2', duration: 'eighth' }, { note: 'E3', duration: 'eighth' }, { note: 'A2', duration: 'eighth' }, { note: 'E3', duration: 'eighth' },
];

// ファンキーなベースライン（シンコペーション強化）
export const KOROBEINIKI_BASS_FUNKY = [
  // 小節1 (Am) - ファンキーパターン
  { note: 'A2', duration: 'sixteenth' }, { note: 'REST', duration: 'sixteenth' }, 
  { note: 'A2', duration: 'syncopated_eighth' }, { note: 'E3', duration: 'sixteenth' },
  { note: 'A2', duration: 'sixteenth' }, { note: 'REST', duration: 'sixteenth' }, 
  { note: 'A3', duration: 'sixteenth' }, { note: 'E3', duration: 'syncopated_eighth' },

  // 小節2 (F) - スラップベース風
  { note: 'F2', duration: 'sixteenth' }, { note: 'REST', duration: 'sixteenth' },
  { note: 'F2', duration: 'sixteenth' }, { note: 'C3', duration: 'syncopated_eighth' },
  { note: 'F3', duration: 'sixteenth' }, { note: 'C3', duration: 'sixteenth' },
  { note: 'F2', duration: 'syncopated_eighth' }, { note: 'REST', duration: 'sixteenth' },

  // 小節3 (C) - グルーヴィーパターン
  { note: 'C3', duration: 'sixteenth' }, { note: 'REST', duration: 'sixteenth' },
  { note: 'C3', duration: 'syncopated_eighth' }, { note: 'G3', duration: 'sixteenth' },
  { note: 'C3', duration: 'sixteenth' }, { note: 'REST', duration: 'sixteenth' },
  { note: 'C4', duration: 'sixteenth' }, { note: 'G3', duration: 'syncopated_eighth' },

  // 小節4 (G) - ファンキーパターン
  { note: 'G2', duration: 'sixteenth' }, { note: 'REST', duration: 'sixteenth' },
  { note: 'G2', duration: 'sixteenth' }, { note: 'D3', duration: 'syncopated_eighth' },
  { note: 'G3', duration: 'sixteenth' }, { note: 'D3', duration: 'sixteenth' },
  { note: 'G2', duration: 'syncopated_eighth' }, { note: 'REST', duration: 'sixteenth' },

  // 小節5-8 (繰り返し)
  { note: 'A2', duration: 'sixteenth' }, { note: 'REST', duration: 'sixteenth' }, 
  { note: 'A2', duration: 'syncopated_eighth' }, { note: 'E3', duration: 'sixteenth' },
  { note: 'A2', duration: 'sixteenth' }, { note: 'REST', duration: 'sixteenth' }, 
  { note: 'A3', duration: 'sixteenth' }, { note: 'E3', duration: 'syncopated_eighth' },

  { note: 'F2', duration: 'sixteenth' }, { note: 'REST', duration: 'sixteenth' },
  { note: 'F2', duration: 'sixteenth' }, { note: 'C3', duration: 'syncopated_eighth' },
  { note: 'F3', duration: 'sixteenth' }, { note: 'C3', duration: 'sixteenth' },
  { note: 'F2', duration: 'syncopated_eighth' }, { note: 'REST', duration: 'sixteenth' },

  { note: 'C3', duration: 'sixteenth' }, { note: 'REST', duration: 'sixteenth' },
  { note: 'C3', duration: 'syncopated_eighth' }, { note: 'G3', duration: 'sixteenth' },
  { note: 'C3', duration: 'sixteenth' }, { note: 'REST', duration: 'sixteenth' },
  { note: 'C4', duration: 'sixteenth' }, { note: 'G3', duration: 'syncopated_eighth' },

  { note: 'G2', duration: 'sixteenth' }, { note: 'REST', duration: 'sixteenth' },
  { note: 'G2', duration: 'sixteenth' }, { note: 'D3', duration: 'syncopated_eighth' },
  { note: 'G3', duration: 'sixteenth' }, { note: 'D3', duration: 'sixteenth' },
  { note: 'G2', duration: 'syncopated_eighth' }, { note: 'REST', duration: 'sixteenth' },

  // パターンを繰り返してメロディーと同じ長さにする
  { note: 'A2', duration: 'sixteenth' }, { note: 'REST', duration: 'sixteenth' }, 
  { note: 'A2', duration: 'syncopated_eighth' }, { note: 'E3', duration: 'sixteenth' },
  { note: 'A2', duration: 'sixteenth' }, { note: 'REST', duration: 'sixteenth' }, 
  { note: 'A3', duration: 'sixteenth' }, { note: 'E3', duration: 'syncopated_eighth' },

  { note: 'F2', duration: 'sixteenth' }, { note: 'REST', duration: 'sixteenth' },
  { note: 'F2', duration: 'sixteenth' }, { note: 'C3', duration: 'syncopated_eighth' },
  { note: 'F3', duration: 'sixteenth' }, { note: 'C3', duration: 'sixteenth' },
  { note: 'F2', duration: 'syncopated_eighth' }, { note: 'REST', duration: 'sixteenth' },

  { note: 'C3', duration: 'sixteenth' }, { note: 'REST', duration: 'sixteenth' },
  { note: 'C3', duration: 'syncopated_eighth' }, { note: 'G3', duration: 'sixteenth' },
  { note: 'C3', duration: 'sixteenth' }, { note: 'REST', duration: 'sixteenth' },
  { note: 'C4', duration: 'sixteenth' }, { note: 'G3', duration: 'syncopated_eighth' },

  { note: 'G2', duration: 'sixteenth' }, { note: 'REST', duration: 'sixteenth' },
  { note: 'G2', duration: 'sixteenth' }, { note: 'D3', duration: 'syncopated_eighth' },
  { note: 'G3', duration: 'sixteenth' }, { note: 'D3', duration: 'sixteenth' },
  { note: 'G2', duration: 'syncopated_eighth' }, { note: 'REST', duration: 'sixteenth' },
];

// ドラムパターン（キック、スネア、ハイハット）
export const KOROBEINIKI_DRUMS = {
  kick: [
    // 4/4拍子のファンキーパターン
    { time: 0, velocity: 1.0 },           // 1拍目
    { time: 0.5, velocity: 0.7 },         // 2拍目裏
    { time: 1.0, velocity: 0.8 },         // 3拍目
    { time: 1.375, velocity: 0.6 },       // 4拍目前のシンコペーション
  ],
  snare: [
    { time: 0.5, velocity: 0.9 },         // 2拍目
    { time: 1.25, velocity: 0.6 },        // 4拍目前のアクセント
    { time: 1.5, velocity: 1.0 },         // 4拍目
  ],
  hihat: [
    { time: 0, velocity: 0.3 },           // 各拍の表（音量を下げる）
    { time: 0.25, velocity: 0.4 },        // 8分音符の裏
    { time: 0.5, velocity: 0.3 },
    { time: 0.75, velocity: 0.5 },        // シャッフル感
    { time: 1.0, velocity: 0.3 },
    { time: 1.25, velocity: 0.4 },
    { time: 1.5, velocity: 0.3 },
    { time: 1.75, velocity: 0.4 },
  ]
};

// 現代的なコード進行（Am-F-C-G系統）
export const KOROBEINIKI_CHORDS_MODERN = [
  // Aセクション - よりモダンなコード進行
  // 小節1 (Am - アルペジオパターン)
  { note: ['A3', 'C4', 'E4'], duration: 'sixteenth' }, { note: ['C4', 'E4', 'A4'], duration: 'sixteenth' },
  { note: ['E4', 'A4', 'C5'], duration: 'sixteenth' }, { note: ['A4', 'C5', 'E5'], duration: 'sixteenth' },
  { note: ['C5', 'E5', 'A5'], duration: 'sixteenth' }, { note: ['E5', 'A5', 'C6'], duration: 'sixteenth' },
  { note: ['A5', 'C6', 'E6'], duration: 'sixteenth' }, { note: ['C6', 'E6', 'A6'], duration: 'sixteenth' },

  // 小節2 (F - アルペジオパターン)
  { note: ['F3', 'A3', 'C4'], duration: 'sixteenth' }, { note: ['A3', 'C4', 'F4'], duration: 'sixteenth' },
  { note: ['C4', 'F4', 'A4'], duration: 'sixteenth' }, { note: ['F4', 'A4', 'C5'], duration: 'sixteenth' },
  { note: ['A4', 'C5', 'F5'], duration: 'sixteenth' }, { note: ['C5', 'F5', 'A5'], duration: 'sixteenth' },
  { note: ['F5', 'A5', 'C6'], duration: 'sixteenth' }, { note: ['A5', 'C6', 'F6'], duration: 'sixteenth' },

  // 小節3 (C - アルペジオパターン)
  { note: ['C4', 'E4', 'G4'], duration: 'sixteenth' }, { note: ['E4', 'G4', 'C5'], duration: 'sixteenth' },
  { note: ['G4', 'C5', 'E5'], duration: 'sixteenth' }, { note: ['C5', 'E5', 'G5'], duration: 'sixteenth' },
  { note: ['E5', 'G5', 'C6'], duration: 'sixteenth' }, { note: ['G5', 'C6', 'E6'], duration: 'sixteenth' },
  { note: ['C6', 'E6', 'G6'], duration: 'sixteenth' }, { note: ['E6', 'G6', 'C7'], duration: 'sixteenth' },

  // 小節4 (G - アルペジオパターン)
  { note: ['G3', 'B3', 'D4'], duration: 'sixteenth' }, { note: ['B3', 'D4', 'G4'], duration: 'sixteenth' },
  { note: ['D4', 'G4', 'B4'], duration: 'sixteenth' }, { note: ['G4', 'B4', 'D5'], duration: 'sixteenth' },
  { note: ['B4', 'D5', 'G5'], duration: 'sixteenth' }, { note: ['D5', 'G5', 'B5'], duration: 'sixteenth' },
  { note: ['G5', 'B5', 'D6'], duration: 'sixteenth' }, { note: ['B5', 'D6', 'G6'], duration: 'sixteenth' },

  // パターンを繰り返してメロディーと同じ長さにする
  { note: ['A3', 'C4', 'E4'], duration: 'sixteenth' }, { note: ['C4', 'E4', 'A4'], duration: 'sixteenth' },
  { note: ['E4', 'A4', 'C5'], duration: 'sixteenth' }, { note: ['A4', 'C5', 'E5'], duration: 'sixteenth' },
  { note: ['C5', 'E5', 'A5'], duration: 'sixteenth' }, { note: ['E5', 'A5', 'C6'], duration: 'sixteenth' },
  { note: ['A5', 'C6', 'E6'], duration: 'sixteenth' }, { note: ['C6', 'E6', 'A6'], duration: 'sixteenth' },

  { note: ['F3', 'A3', 'C4'], duration: 'sixteenth' }, { note: ['A3', 'C4', 'F4'], duration: 'sixteenth' },
  { note: ['C4', 'F4', 'A4'], duration: 'sixteenth' }, { note: ['F4', 'A4', 'C5'], duration: 'sixteenth' },
  { note: ['A4', 'C5', 'F5'], duration: 'sixteenth' }, { note: ['C5', 'F5', 'A5'], duration: 'sixteenth' },
  { note: ['F5', 'A5', 'C6'], duration: 'sixteenth' }, { note: ['A5', 'C6', 'F6'], duration: 'sixteenth' },

  { note: ['C4', 'E4', 'G4'], duration: 'sixteenth' }, { note: ['E4', 'G4', 'C5'], duration: 'sixteenth' },
  { note: ['G4', 'C5', 'E5'], duration: 'sixteenth' }, { note: ['C5', 'E5', 'G5'], duration: 'sixteenth' },
  { note: ['E5', 'G5', 'C6'], duration: 'sixteenth' }, { note: ['G5', 'C6', 'E6'], duration: 'sixteenth' },
  { note: ['C6', 'E6', 'G6'], duration: 'sixteenth' }, { note: ['E6', 'G6', 'C7'], duration: 'sixteenth' },

  { note: ['G3', 'B3', 'D4'], duration: 'sixteenth' }, { note: ['B3', 'D4', 'G4'], duration: 'sixteenth' },
  { note: ['D4', 'G4', 'B4'], duration: 'sixteenth' }, { note: ['G4', 'B4', 'D5'], duration: 'sixteenth' },
  { note: ['B4', 'D5', 'G5'], duration: 'sixteenth' }, { note: ['D5', 'G5', 'B5'], duration: 'sixteenth' },
  { note: ['G5', 'B5', 'D6'], duration: 'sixteenth' }, { note: ['B5', 'D6', 'G6'], duration: 'sixteenth' },
];

export const KOROBEINIKI_CHORDS = [
  // Aセクション (8小節)
  // 小節1 (Am)
  { note: ['A3', 'C4', 'E4'], duration: 'sixteenth' }, { note: ['E4', 'G4', 'C5'], duration: 'sixteenth' },
  { note: ['A3', 'C4', 'E4'], duration: 'sixteenth' }, { note: ['E4', 'G4', 'C5'], duration: 'sixteenth' },
  { note: ['A3', 'C4', 'E4'], duration: 'sixteenth' }, { note: ['E4', 'G4', 'C5'], duration: 'sixteenth' },
  { note: ['A3', 'C4', 'E4'], duration: 'sixteenth' }, { note: ['E4', 'G4', 'C5'], duration: 'sixteenth' },

  // 小節2 (Am)
  { note: ['A3', 'C4', 'E4'], duration: 'sixteenth' }, { note: ['E4', 'G4', 'C5'], duration: 'sixteenth' },
  { note: ['A3', 'C4', 'E4'], duration: 'sixteenth' }, { note: ['E4', 'G4', 'C5'], duration: 'sixteenth' },
  { note: ['A3', 'C4', 'E4'], duration: 'sixteenth' }, { note: ['E4', 'G4', 'C5'], duration: 'sixteenth' },
  { note: ['A3', 'C4', 'E4'], duration: 'sixteenth' }, { note: ['E4', 'G4', 'C5'], duration: 'sixteenth' },

  // 小節3 (Dm)
  { note: ['D3', 'F3', 'A3'], duration: 'sixteenth' }, { note: ['A3', 'C4', 'F4'], duration: 'sixteenth' },
  { note: ['D3', 'F3', 'A3'], duration: 'sixteenth' }, { note: ['A3', 'C4', 'F4'], duration: 'sixteenth' },
  { note: ['D3', 'F3', 'A3'], duration: 'sixteenth' }, { note: ['A3', 'C4', 'F4'], duration: 'sixteenth' },
  { note: ['D3', 'F3', 'A3'], duration: 'sixteenth' }, { note: ['A3', 'C4', 'F4'], duration: 'sixteenth' },

  // 小節4 (E7)
  { note: ['E3', 'G#3', 'B3'], duration: 'sixteenth' }, { note: ['B3', 'D4', 'G#4'], duration: 'sixteenth' },
  { note: ['E3', 'G#3', 'B3'], duration: 'sixteenth' }, { note: ['B3', 'D4', 'G#4'], duration: 'sixteenth' },
  { note: ['E3', 'G#3', 'B3'], duration: 'sixteenth' }, { note: ['B3', 'D4', 'G#4'], duration: 'sixteenth' },
  { note: ['E3', 'G#3', 'B3'], duration: 'sixteenth' }, { note: ['B3', 'D4', 'G#4'], duration: 'sixteenth' },

  // 小節5 (Am) - 繰り返し
  { note: ['A3', 'C4', 'E4'], duration: 'sixteenth' }, { note: ['E4', 'G4', 'C5'], duration: 'sixteenth' },
  { note: ['A3', 'C4', 'E4'], duration: 'sixteenth' }, { note: ['E4', 'G4', 'C5'], duration: 'sixteenth' },
  { note: ['A3', 'C4', 'E4'], duration: 'sixteenth' }, { note: ['E4', 'G4', 'C5'], duration: 'sixteenth' },
  { note: ['A3', 'C4', 'E4'], duration: 'sixteenth' }, { note: ['E4', 'G4', 'C5'], duration: 'sixteenth' },

  // 小節6 (Am) - 繰り返し
  { note: ['A3', 'C4', 'E4'], duration: 'sixteenth' }, { note: ['E4', 'G4', 'C5'], duration: 'sixteenth' },
  { note: ['A3', 'C4', 'E4'], duration: 'sixteenth' }, { note: ['E4', 'G4', 'C5'], duration: 'sixteenth' },
  { note: ['A3', 'C4', 'E4'], duration: 'sixteenth' }, { note: ['E4', 'G4', 'C5'], duration: 'sixteenth' },
  { note: ['A3', 'C4', 'E4'], duration: 'sixteenth' }, { note: ['E4', 'G4', 'C5'], duration: 'sixteenth' },

  // 小節7 (Dm) - 繰り返し
  { note: ['D3', 'F3', 'A3'], duration: 'sixteenth' }, { note: ['A3', 'C4', 'F4'], duration: 'sixteenth' },
  { note: ['D3', 'F3', 'A3'], duration: 'sixteenth' }, { note: ['A3', 'C4', 'F4'], duration: 'sixteenth' },
  { note: ['D3', 'F3', 'A3'], duration: 'sixteenth' }, { note: ['A3', 'C4', 'F4'], duration: 'sixteenth' },
  { note: ['D3', 'F3', 'A3'], duration: 'sixteenth' }, { note: ['A3', 'C4', 'F4'], duration: 'sixteenth' },

  // 小節8 (E7)
  { note: ['E3', 'G#3', 'B3'], duration: 'sixteenth' }, { note: ['B3', 'D4', 'G#4'], duration: 'sixteenth' },
  { note: ['E3', 'G#3', 'B3'], duration: 'sixteenth' }, { note: ['B3', 'D4', 'G#4'], duration: 'sixteenth' },
  { note: ['E3', 'G#3', 'B3'], duration: 'sixteenth' }, { note: ['B3', 'D4', 'G#4'], duration: 'sixteenth' },
  { note: ['E3', 'G#3', 'B3'], duration: 'sixteenth' }, { note: ['B3', 'D4', 'G#4'], duration: 'sixteenth' },

  // Bセクション (8小節)
  // 小節9 (Dm)
  { note: ['D3', 'F3', 'A3'], duration: 'sixteenth' }, { note: ['A3', 'C4', 'F4'], duration: 'sixteenth' },
  { note: ['D3', 'F3', 'A3'], duration: 'sixteenth' }, { note: ['A3', 'C4', 'F4'], duration: 'sixteenth' },
  { note: ['D3', 'F3', 'A3'], duration: 'sixteenth' }, { note: ['A3', 'C4', 'F4'], duration: 'sixteenth' },
  { note: ['D3', 'F3', 'A3'], duration: 'sixteenth' }, { note: ['A3', 'C4', 'F4'], duration: 'sixteenth' },

  // 小節10 (G7)
  { note: ['G3', 'B3', 'D4'], duration: 'sixteenth' }, { note: ['D4', 'F4', 'B4'], duration: 'sixteenth' },
  { note: ['G3', 'B3', 'D4'], duration: 'sixteenth' }, { note: ['D4', 'F4', 'B4'], duration: 'sixteenth' },
  { note: ['G3', 'B3', 'D4'], duration: 'sixteenth' }, { note: ['D4', 'F4', 'B4'], duration: 'sixteenth' },
  { note: ['G3', 'B3', 'D4'], duration: 'sixteenth' }, { note: ['D4', 'F4', 'B4'], duration: 'sixteenth' },

  // 小節11 (C)
  { note: ['C4', 'E4', 'G4'], duration: 'sixteenth' }, { note: ['G4', 'B4', 'E5'], duration: 'sixteenth' },
  { note: ['C4', 'E4', 'G4'], duration: 'sixteenth' }, { note: ['G4', 'B4', 'E5'], duration: 'sixteenth' },
  { note: ['C4', 'E4', 'G4'], duration: 'sixteenth' }, { note: ['G4', 'B4', 'E5'], duration: 'sixteenth' },
  { note: ['C4', 'E4', 'G4'], duration: 'sixteenth' }, { note: ['G4', 'B4', 'E5'], duration: 'sixteenth' },

  // 小節12 (F)
  { note: ['F3', 'A3', 'C4'], duration: 'sixteenth' }, { note: ['C4', 'E4', 'A4'], duration: 'sixteenth' },
  { note: ['F3', 'A3', 'C4'], duration: 'sixteenth' }, { note: ['C4', 'E4', 'A4'], duration: 'sixteenth' },
  { note: ['F3', 'A3', 'C4'], duration: 'sixteenth' }, { note: ['C4', 'E4', 'A4'], duration: 'sixteenth' },
  { note: ['F3', 'A3', 'C4'], duration: 'sixteenth' }, { note: ['C4', 'E4', 'A4'], duration: 'sixteenth' },

  // 小節13 (Bdim - E7)
  { note: ['B2', 'D3', 'F3'], duration: 'sixteenth' }, { note: ['F3', 'A3', 'D4'], duration: 'sixteenth' },
  { note: ['B2', 'D3', 'F3'], duration: 'sixteenth' }, { note: ['F3', 'A3', 'D4'], duration: 'sixteenth' },
  { note: ['E3', 'G#3', 'B3'], duration: 'sixteenth' }, { note: ['B3', 'D4', 'G#4'], duration: 'sixteenth' },
  { note: ['E3', 'G#3', 'B3'], duration: 'sixteenth' }, { note: ['B3', 'D4', 'G#4'], duration: 'sixteenth' },

  // 小節14 (Am) - 繰り返し
  { note: ['A3', 'C4', 'E4'], duration: 'sixteenth' }, { note: ['E4', 'G4', 'C5'], duration: 'sixteenth' },
  { note: ['A3', 'C4', 'E4'], duration: 'sixteenth' }, { note: ['E4', 'G4', 'C5'], duration: 'sixteenth' },
  { note: ['A3', 'C4', 'E4'], duration: 'sixteenth' }, { note: ['E4', 'G4', 'C5'], duration: 'sixteenth' },
  { note: ['A3', 'C4', 'E4'], duration: 'sixteenth' }, { note: ['E4', 'G4', 'C5'], duration: 'sixteenth' },

  // 小節15 (Dm) - 繰り返し
  { note: ['D3', 'F3', 'A3'], duration: 'sixteenth' }, { note: ['A3', 'C4', 'F4'], duration: 'sixteenth' },
  { note: ['D3', 'F3', 'A3'], duration: 'sixteenth' }, { note: ['A3', 'C4', 'F4'], duration: 'sixteenth' },
  { note: ['D3', 'F3', 'A3'], duration: 'sixteenth' }, { note: ['A3', 'C4', 'F4'], duration: 'sixteenth' },
  { note: ['D3', 'F3', 'A3'], duration: 'sixteenth' }, { note: ['A3', 'C4', 'F4'], duration: 'sixteenth' },

  // 小節16 (E7 - Am)
  { note: ['E3', 'G#3', 'B3'], duration: 'sixteenth' }, { note: ['B3', 'D4', 'G#4'], duration: 'sixteenth' },
  { note: ['E3', 'G#3', 'B3'], duration: 'sixteenth' }, { note: ['B3', 'D4', 'G#4'], duration: 'sixteenth' },
  { note: ['A3', 'C4', 'E4'], duration: 'sixteenth' }, { note: ['E4', 'G4', 'C5'], duration: 'sixteenth' },
  { note: ['A3', 'C4', 'E4'], duration: 'sixteenth' }, { note: ['E4', 'G4', 'C5'], duration: 'sixteenth' },
];

// 楽曲全体の構成情報
// ブレイクダウンセクション（静かな部分から盛り上がる）
export const KOROBEINIKI_BREAKDOWN = [
  // 静かなパート（メロディーのみ、低音量）
  { note: 'A4', duration: 'quarter', volume: 0.3 },
  { note: 'C5', duration: 'quarter', volume: 0.3 },
  { note: 'E5', duration: 'half', volume: 0.4 },
  
  // 徸々に盛り上がる
  { note: 'A4', duration: 'eighth', volume: 0.5 },
  { note: 'C5', duration: 'eighth', volume: 0.6 },
  { note: 'E5', duration: 'eighth', volume: 0.7 },
  { note: 'A5', duration: 'eighth', volume: 0.8 },
  
  // 爆発的な盛り上がり
  { note: 'C6', duration: 'sixteenth', volume: 1.0 },
  { note: 'E6', duration: 'sixteenth', volume: 1.0 },
  { note: 'A6', duration: 'quarter', volume: 1.0 },
];

export const KOROBEINIKI_INFO = {
  title: 'Korobeiniki',
  subtitle: 'Classic Tetris Theme - Uptempo',
  bpm: 160,
  key: 'A minor',
  timeSignature: '4/4',
  totalDuration: (KOROBEINIKI_MELODY.length * BEAT_DURATION / 2), // 概算
  sections: ['A', 'B'],
  loopPoint: 0 // 最初から繰り返し
};