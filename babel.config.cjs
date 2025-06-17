module.exports = function(api) {
  const isTest = api.env('test');
  
  return {
    presets: [
      ['@babel/preset-env', {
        targets: isTest
          ? { node: 'current' }
          : { browsers: ['> 1%', 'last 2 versions', 'not ie <= 8'] },
        modules: isTest ? 'commonjs' : false, // ESM対応のためfalseに設定
        useBuiltIns: 'usage',
        corejs: { version: 3, proposals: true },
        debug: false,
        shippedProposals: true
      }]
    ],
    plugins: [
      ['@babel/plugin-transform-runtime', {
        useESModules: !isTest, // テスト環境以外ではESMを使用
        regenerator: true,
        corejs: 3
      }],
      // テスト環境でのみcommonjsに変換
      isTest && ['@babel/plugin-transform-modules-commonjs', {
        loose: true
      }]
    ].filter(Boolean),
    sourceMaps: 'inline',
    assumptions: {
      setPublicClassFields: true,
      privateFieldsAsProperties: true
    },
    retainLines: true
  };
}
