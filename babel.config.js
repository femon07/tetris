module.exports = function(api) {
  const isTest = api.env('test');
  
  return {
    presets: [
      ['@babel/preset-env', {
        targets: isTest
          ? { node: 'current' }
          : { browsers: ['> 1%', 'last 2 versions', 'not ie <= 8'] },
        modules: isTest ? 'commonjs' : 'auto',
        useBuiltIns: 'entry',
        corejs: 3,
        debug: false
      }]
    ],
    plugins: [
      '@babel/plugin-transform-runtime',
      isTest && '@babel/plugin-transform-modules-commonjs'
    ].filter(Boolean),
    sourceMaps: 'inline',
    retainLines: true
  };
}
