module.exports = {
	format: ['umd'],
  input: 'dist/*.vue',
  filename: 'js/[name].js',
  plugins: [
    'vue',
  ],
  vue: {
    css: false,
    template: {
      isProduction: true,
      compilerOptions: { 
        preserveWhitespace: false 
      }
    }
  }
}