module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset', //  这行
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry'
      }
    ]
  ]
}