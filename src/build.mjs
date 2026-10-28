import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const sourceDir = path.dirname(fileURLToPath(import.meta.url));
const read = (name) => fs.readFileSync(path.join(sourceDir, name), 'utf8');

const marked = read('marked.min.js');
const markdown = read('markdown.js');
const ui = read('ui.js');

const out = `window.__ModuleLoader__.load({
  id: '@local/wechat-md',
  factory(require) {
    const React = require('react');

    // marked v15.0.7 (MIT) — https://github.com/markedjs/marked — vendored so the
    // plugin needs no network and no extra Client dependency.
    const markedLib = (function () {
      const exports = {};
      const module = { exports };
${marked}
      return module.exports;
    })();

${markdown}

${ui}
  },
});
`;

fs.writeFileSync(path.join(sourceDir, '..', 'client.js'), out);
console.log('client.js', out.length, 'bytes');
