# vite-plugin-libcss

This plugin will inject css into bundled js file using `import` statement like this:

```js
// bundled js file, with import css at top (if any)
import './style.css';
// rest of the file
// ...
```

Install:

```
npm i vite-plugin-libcss -D
```

Usage:

```js
// vite.config.js
import libCss from 'vite-plugin-libcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // any other plugins
    libCss()
  ],
});
```

Note that this plugin will only work with [library-mode](https://vitejs.dev/guide/build.html#library-mode) and es format build.
