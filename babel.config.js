module.exports = {
  env: {
    // For Jest, which requires ES6 modules to be transpiled
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
      ],
    },
    // For Rollup, which requires ES6 modules to be left alone by Babel
    production: {
      presets: [['@babel/preset-env', { modules: false }]],
    },
  },
}
