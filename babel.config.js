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
    // For Storybook
    storybook: {
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
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
      ],
    },
  },
}
