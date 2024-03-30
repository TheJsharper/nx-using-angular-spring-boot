const { NxWebpackPlugin } = require('@nx/webpack');
const { join } = require('path');

module.exports = {
  output: {
    path: join(__dirname, '../../dist/frotend/libs/primeng-table'),
  },
  devServer: {
    port: 4200,
  },
  plugins: [
    new NxWebpackPlugin({
      
      main: './src/main.ts',
      tsConfig: './tsconfig.app.json',
      index: './src/index.html',
      styles: ['./src/styles.css'],
      outputHashing: process.env['NODE_ENV'] === 'production' ? 'all' : 'none',
      optimization: process.env['NODE_ENV'] === 'production',
      "primeng-table": {
        '@angular/forms': { // <-- This was missing
          singleton: true,
          strictVersion: true,
          requiredVersion: 'auto',
          includeSecondaries: true
        }}
    }),
    
  ],
};