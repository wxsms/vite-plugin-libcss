const fs = require('fs');
const { resolve } = require('path');

let viteConfig;

module.exports = function () {
  return {
    name: 'lib-inject-css',
    apply: 'build',
    enforce: 'post',

    configResolved (resolvedConfig) {
      viteConfig = resolvedConfig;
    },

    writeBundle (_, bundle) {
      const files = Object.keys(bundle);
      const cssFile = files.find((v) => v.endsWith('.css'));
      if (!cssFile) {
        return;
      }
      for (const file of files) {
        if (!file.endsWith('.js')) {
          continue;
        }
        const outDir = viteConfig.build.outDir || 'dist';
        const filePath = resolve(viteConfig.root, outDir, file);
        const data = fs.readFileSync(filePath, {
          encoding: 'utf8',
        });
        fs.writeFileSync(filePath, `import './${cssFile}';\n${data}`);
      }
    },
  };
};
