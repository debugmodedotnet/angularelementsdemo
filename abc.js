const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/counterelment/runtime-es2015.js',
    './dist/counterelment/polyfills-es2015.js',
    './dist/counterelment/scripts.js',
    './dist/counterelment/main-es2015.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/dj-counter.js');
  await fs.copyFile(
    './dist/counterelment/styles.css',
    'elements/styles.css'
  );
})();