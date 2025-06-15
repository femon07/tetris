// シンプルなテスト
const test = (name, fn) => {
  try {
    fn();
    console.log(`✅ ${name}`);
  } catch (error) {
    console.error(`❌ ${name}`);
    console.error(error);
  }
};

// テストケース
test('1 + 1 は 2 になる', () => {
  if (1 + 1 !== 2) {
    throw new Error('1 + 1 は 2 になるはずです');
  }
});

console.log('テストが完了しました');
