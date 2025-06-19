export class UIUpdater {
  constructor() {
    this.elements = this.findUIElements();
  }

  findUIElements() {
    return {
      score: document.getElementById('score'),
      lines: document.getElementById('lines'),
      level: document.getElementById('level')
    };
  }

  updateScore(score) {
    try {
      if (typeof score !== 'number' || isNaN(score)) {
        console.warn('Invalid score value:', score);
        return;
      }

      if (this.elements.score) {
        this.elements.score.textContent = score.toString();
      }
    } catch (error) {
      console.error('Error updating score display:', error);
    }
  }

  updateLines(lines) {
    try {
      if (typeof lines !== 'number' || isNaN(lines)) {
        console.warn('Invalid lines value:', lines);
        return;
      }

      if (this.elements.lines) {
        this.elements.lines.textContent = lines.toString();
      }
    } catch (error) {
      console.error('Error updating lines display:', error);
    }
  }

  updateLevel(level) {
    try {
      if (typeof level !== 'number' || isNaN(level)) {
        console.warn('Invalid level value:', level);
        return;
      }

      if (this.elements.level) {
        this.elements.level.textContent = level.toString();
      }
    } catch (error) {
      console.error('Error updating level display:', error);
    }
  }

  updateAll(gameData) {
    if (!gameData) {
      console.warn('No game data provided to updateAll');
      return;
    }

    this.updateScore(gameData.score || 0);
    this.updateLines(gameData.lines || 0);
    this.updateLevel(gameData.level || 1);
  }

  // 要素の再取得（DOM構造が変わった場合）
  refreshElements() {
    this.elements = this.findUIElements();
  }

  // 特定の要素が存在するかチェック
  hasElement(elementName) {
    return !!this.elements[elementName];
  }

  // カスタム更新関数の追加
  addCustomUpdater(elementId, updateFunction) {
    const element = document.getElementById(elementId);
    if (element) {
      this.elements[elementId] = element;
      this[`update${elementId.charAt(0).toUpperCase() + elementId.slice(1)}`] = (value) => {
        try {
          updateFunction(element, value);
        } catch (error) {
          console.error(`Error updating ${elementId}:`, error);
        }
      };
    } else {
      console.warn(`Element with id '${elementId}' not found`);
    }
  }

  // UIの状態をリセット
  reset() {
    this.updateScore(0);
    this.updateLines(0);
    this.updateLevel(1);
  }
}