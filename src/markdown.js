/*
 * Markdown -> WeChat-compatible HTML.
 *
 * The output intentionally mirrors doocs/md's "classic / grace / simple"
 * themes (see https://github.com/doocs/md, MIT) but bakes every style into a
 * `style` attribute, because the WeChat editor strips <style> blocks and
 * class names. No external CSS, fonts, or images are required.
 */
function createWechatMarkdown(lib) {
  const FONT_SANS = "-apple-system-font,BlinkMacSystemFont,'Helvetica Neue','PingFang SC','Hiragino Sans GB','Microsoft YaHei UI','Microsoft YaHei',Arial,sans-serif";
  const FONT_MONO = "'Fira Code',Menlo,Monaco,Consolas,'Courier New',monospace";
  const BODY = '#333333';
  const HEADING = '#1a1a1a';
  const LINK = '#576b95';

  function esc(value) {
    return String(value == null ? '' : value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /**
   * Keep author HTML but remove active content: scripts, styles, frames, form
   * controls, inline event handlers, and javascript: URLs. Unknown markup is
   * preserved so semantic HTML (details, kbd, mark) still renders.
   */
  function sanitizeFragment(fragment) {
    if (typeof DOMParser === 'undefined') return fragment;
    const blocked = new Set([
      'SCRIPT', 'STYLE', 'IFRAME', 'OBJECT', 'EMBED', 'LINK', 'META', 'BASE',
      'FORM', 'INPUT', 'TEXTAREA', 'SELECT', 'BUTTON',
    ]);
    try {
      const doc = new DOMParser().parseFromString(`<div id="wmd-root">${fragment}</div>`, 'text/html');
      const root = doc.getElementById('wmd-root');
      if (!root) return fragment;
      const walk = (node) => {
        for (const child of Array.from(node.children)) {
          if (blocked.has(child.tagName)) {
            child.remove();
            continue;
          }
          for (const attribute of Array.from(child.attributes)) {
            const name = attribute.name.toLowerCase();
            const value = attribute.value || '';
            if (name.startsWith('on') || ((name === 'href' || name === 'src' || name === 'xlink:href') && /^\s*javascript:/i.test(value))) {
              child.removeAttribute(attribute.name);
            }
          }
          walk(child);
        }
      };
      walk(root);
      return root.innerHTML;
    } catch {
      return fragment;
    }
  }

  function hexToRgba(hex, alpha) {
    let h = String(hex || '').replace('#', '').trim();
    if (h.length === 3) h = h.split('').map((c) => c + c).join('');
    if (!/^[0-9a-fA-F]{6}$/.test(h)) return `rgba(15,76,129,${alpha})`;
    const r = parseInt(h.slice(0, 2), 16);
    const g = parseInt(h.slice(2, 4), 16);
    const b = parseInt(h.slice(4, 6), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  }

  /** Serialize a declaration object into one style attribute value. */
  function css(decl) {
    const parts = [];
    for (const key of Object.keys(decl)) {
      const value = decl[key];
      if (value === undefined || value === null || value === '') continue;
      parts.push(`${key}:${value}`);
    }
    return parts.join(';');
  }

  function tag(name, decl, inner, extra) {
    return `<${name} style="${esc(css(decl))}"${extra || ''}>${inner}</${name}>`;
  }

  const THEMES = [
    { id: 'default', labelKey: 'theme.default' },
    { id: 'grace', labelKey: 'theme.grace' },
    { id: 'simple', labelKey: 'theme.simple' },
  ];

  const COLORS = [
    { value: '#0F4C81', labelKey: 'color.classicBlue' },
    { value: '#009874', labelKey: 'color.emerald' },
    { value: '#FA5151', labelKey: 'color.orange' },
    { value: '#92617E', labelKey: 'color.purple' },
    { value: '#333333', labelKey: 'color.graphite' },
  ];

  const FONT_SIZES = ['14', '15', '16', '17', '18'];

  /** Resolve one theme id + primary color into the element style map. */
  function makeTheme(themeId, primary, fontSize) {
    const color = primary || COLORS[0].value;
    const size = FONT_SIZES.indexOf(String(fontSize)) >= 0 ? String(fontSize) : '16';
    const tint8 = hexToRgba(color, 0.08);
    const tint20 = hexToRgba(color, 0.2);
    const styles = {
      container: {
        'font-family': FONT_SANS,
        'font-size': `${size}px`,
        'line-height': '1.75',
        'letter-spacing': '0.05em',
        'color': BODY,
        'text-align': 'left',
      },
      p: { 'margin': '1.5em 8px', 'letter-spacing': '0.1em', 'color': BODY },
      h1: {
        'display': 'table',
        'padding': '0 1em',
        'border-bottom': `2px solid ${color}`,
        'margin': '2em auto 1em',
        'color': HEADING,
        'font-size': '1.2em',
        'font-weight': 'bold',
        'text-align': 'center',
      },
      h2: {
        'display': 'table',
        'padding': '0 0.2em',
        'margin': '4em auto 2em',
        'color': '#ffffff',
        'background': color,
        'font-size': '1.2em',
        'font-weight': 'bold',
        'text-align': 'center',
      },
      h3: {
        'padding-left': '8px',
        'border-left': `3px solid ${color}`,
        'margin': '2em 8px 0.75em 0',
        'color': HEADING,
        'font-size': '1.1em',
        'font-weight': 'bold',
        'line-height': '1.2',
      },
      h4: { 'margin': '2em 8px 0.5em', 'color': color, 'font-size': '1em', 'font-weight': 'bold' },
      h5: { 'margin': '1.5em 8px 0.5em', 'color': color, 'font-size': '1em', 'font-weight': 'bold' },
      h6: { 'margin': '1.5em 8px 0.5em', 'color': color, 'font-size': '1em', 'font-weight': 'bold' },
      blockquote: {
        'margin': '0 0 1em',
        'padding': '1em',
        'border-left': `4px solid ${color}`,
        'border-radius': '6px',
        'color': BODY,
        'background': '#f7f7f7',
        'font-style': 'normal',
      },
      blockquoteP: { 'margin': '0', 'font-size': '1em', 'letter-spacing': '0.1em', 'color': BODY },
      pre: {
        'margin': '10px 8px',
        'padding': '14px 16px',
        'background': '#f6f8fa',
        'border-radius': '8px',
        'overflow-x': 'auto',
        'font-size': '90%',
        'line-height': '1.5',
        'color': '#24292e',
        'font-family': FONT_MONO,
        'text-indent': '0',
      },
      preCode: {
        'font-family': FONT_MONO,
        'font-size': '1em',
        'white-space': 'pre',
        'word-break': 'normal',
        'background': 'transparent',
        'border': 'none',
        'padding': '0',
        'color': 'inherit',
      },
      codespan: {
        'font-family': FONT_MONO,
        'font-size': '90%',
        'color': color,
        'background': tint8,
        'padding': '3px 5px',
        'border-radius': '4px',
        'border': `1px solid ${tint20}`,
      },
      a: { 'color': LINK, 'text-decoration': 'none' },
      strong: { 'color': color, 'font-weight': 'bold' },
      em: { 'font-style': 'italic' },
      del: { 'color': '#999999', 'text-decoration': 'line-through' },
      ul: { 'list-style': 'none', 'margin': '1em 0', 'padding-left': '1.2em', 'color': BODY },
      ol: { 'list-style': 'none', 'margin': '1em 0', 'padding-left': '1.2em', 'color': BODY },
      li: { 'display': 'block', 'margin': '0.2em 8px', 'color': BODY, 'line-height': '1.75' },
      listP: { 'margin': '0.2em 0', 'letter-spacing': '0.1em', 'color': BODY },
      tableWrap: { 'max-width': '100%', 'overflow-x': 'auto' },
      table: {
        'border-collapse': 'collapse',
        'width': '100%',
        'min-width': '100%',
        'margin': '1em 0',
        'color': BODY,
        'font-size': '0.95em',
      },
      th: {
        'border': '1px solid rgba(0,0,0,0.15)',
        'padding': '0.25em 0.5em',
        'background': 'rgba(0,0,0,0.05)',
        'font-weight': 'bold',
        'word-break': 'keep-all',
      },
      td: {
        'border': '1px solid rgba(0,0,0,0.15)',
        'padding': '0.25em 0.5em',
        'color': BODY,
        'word-break': 'keep-all',
      },
      hr: { 'border': 'none', 'height': '1px', 'background': 'rgba(0,0,0,0.1)', 'margin': '1.5em 0' },
      img: { 'display': 'block', 'max-width': '100%', 'height': 'auto', 'margin': '0.1em auto 0.5em', 'border-radius': '4px' },
      caption: { 'display': 'block', 'text-align': 'center', 'color': 'rgba(0,0,0,0.5)', 'font-size': '0.8em' },
    };

    if (themeId === 'grace') {
      Object.assign(styles, {
        h1: {
          ...styles.h1,
          'padding': '0.5em 1em',
          'font-size': '1.4em',
          'text-shadow': '2px 2px 4px rgba(0,0,0,0.1)',
        },
        h2: {
          ...styles.h2,
          'padding': '0.3em 1em',
          'border-radius': '8px',
          'font-size': '1.3em',
          'box-shadow': '0 4px 6px rgba(0,0,0,0.1)',
        },
        h3: {
          ...styles.h3,
          'padding-left': '12px',
          'font-size': '1.2em',
          'border-left': `4px solid ${color}`,
          'border-bottom': `1px dashed ${color}`,
        },
        h4: { ...styles.h4, 'font-size': '1.1em' },
        h5: { ...styles.h5, 'font-size': '1em' },
        h6: { ...styles.h6, 'font-size': '1em' },
        blockquote: {
          ...styles.blockquote,
          'font-style': 'italic',
          'padding': '1em 1em 1em 2em',
          'color': 'rgba(0,0,0,0.6)',
          'background': 'transparent',
          'box-shadow': '0 4px 6px rgba(0,0,0,0.05)',
        },
        blockquoteP: { ...styles.blockquoteP, 'color': 'rgba(0,0,0,0.6)' },
        codespan: { ...styles.codespan, 'box-shadow': '0 1px 3px rgba(0,0,0,0.08)' },
        pre: { ...styles.pre, 'box-shadow': 'inset 0 0 10px rgba(0,0,0,0.05)' },
        img: { ...styles.img, 'border-radius': '8px', 'box-shadow': '0 4px 8px rgba(0,0,0,0.1)' },
        ul: { ...styles.ul, 'padding-left': '1.5em' },
        li: { ...styles.li, 'margin': '0.5em 8px' },
        hr: {
          ...styles.hr,
          'background': 'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.1), rgba(0,0,0,0))',
        },
        table: {
          ...styles.table,
          'border-collapse': 'separate',
          'border-spacing': '0',
          'border-radius': '8px',
          'box-shadow': '0 4px 6px rgba(0,0,0,0.1)',
          'margin': '1em 8px',
        },
        th: { ...styles.th, 'background': color, 'color': '#ffffff', 'padding': '0.5em 1em' },
        td: { ...styles.td, 'padding': '0.5em 1em' },
        caption: { ...styles.caption, 'color': '#888888' },
      });
    }

    if (themeId === 'simple') {
      Object.assign(styles, {
        h1: {
          ...styles.h1,
          'padding': '0.5em 1em',
          'font-size': '1.4em',
          'text-shadow': '1px 1px 3px rgba(0,0,0,0.05)',
        },
        h2: {
          ...styles.h2,
          'padding': '0.3em 1.2em',
          'font-size': '1.3em',
          'border-radius': '8px 24px 8px 24px',
          'box-shadow': '0 2px 6px rgba(0,0,0,0.06)',
        },
        h3: {
          ...styles.h3,
          'padding': '0 12px',
          'font-size': '1.2em',
          'border-radius': '6px',
          'line-height': '2.4em',
          'border': `1px solid ${tint20}`,
          'border-left': `4px solid ${color}`,
          'background': tint8,
        },
        h4: { ...styles.h4, 'font-size': '1.1em' },
        h5: { ...styles.h5, 'font-size': '1em' },
        h6: { ...styles.h6, 'font-size': '1em' },
        blockquote: {
          ...styles.blockquote,
          'font-style': 'italic',
          'padding': '1em 1em 1em 2em',
          'color': 'rgba(0,0,0,0.6)',
          'background': 'transparent',
          'border-top': '0.2px solid rgba(0,0,0,0.04)',
          'border-bottom': '0.2px solid rgba(0,0,0,0.04)',
          'border-right': '0.2px solid rgba(0,0,0,0.04)',
        },
        blockquoteP: { ...styles.blockquoteP, 'color': 'rgba(0,0,0,0.6)' },
        codespan: { ...styles.codespan, 'border-radius': '6px' },
        pre: { ...styles.pre, 'border': '1px solid rgba(0,0,0,0.04)' },
        img: { ...styles.img, 'border-radius': '8px', 'border': '1px solid rgba(0,0,0,0.04)' },
        ul: { ...styles.ul, 'padding-left': '1.5em' },
        li: { ...styles.li, 'margin': '0.5em 8px' },
        hr: {
          ...styles.hr,
          'background': 'linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.1), rgba(0,0,0,0))',
        },
        caption: { ...styles.caption, 'color': '#888888' },
      });
    }

    return styles;
  }

  /** Build a private parser for one render so list state never leaks between calls. */
  function createParser(theme) {
    const parser = new lib.Marked({ gfm: true, breaks: true });
    const orderedStack = [];
    const counterStack = [];

    parser.use({
      renderer: {
        heading({ tokens, depth }) {
          const key = `h${depth}`;
          return tag(key, theme[key], this.parser.parseInline(tokens));
        },
        paragraph({ tokens }) {
          const inner = this.parser.parseInline(tokens);
          if (inner.trim() === '') return '';
          return tag('p', theme.p, inner);
        },
        blockquote({ tokens }) {
          let inner = this.parser.parse(tokens);
          inner = inner.replace(/<p style="[^"]*"/g, `<p style="${esc(css(theme.blockquoteP))}"`);
          return tag('blockquote', theme.blockquote, inner);
        },
        code({ text }) {
          return `<pre style="${esc(css(theme.pre))}"><code style="${esc(css(theme.preCode))}">${esc(text)}</code></pre>`;
        },
        codespan({ text }) {
          return `<code style="${esc(css(theme.codespan))}">${esc(text)}</code>`;
        },
        list({ ordered, start, items }) {
          orderedStack.push(Boolean(ordered));
          counterStack.push(Number(start) || 1);
          const inner = items.map((item) => this.listitem(item)).join('');
          orderedStack.pop();
          counterStack.pop();
          return tag(ordered ? 'ol' : 'ul', theme[ordered ? 'ol' : 'ul'], inner);
        },
        listitem(token) {
          const ordered = orderedStack[orderedStack.length - 1];
          const index = counterStack[counterStack.length - 1] || 1;
          counterStack[counterStack.length - 1] = index + 1;
          let prefix = ordered ? `${index}. ` : '• ';
          if (token.task) prefix = token.checked ? '☑ ' : '☐ ';
          let content;
          try {
            content = this.parser.parseInline(token.tokens);
          } catch {
            content = this.parser
              .parse(token.tokens)
              .replace(/^<p(?:\s[^>]*)?>([\s\S]*?)<\/p>/, '$1');
          }
          content = content.replace(/<p style="[^"]*"/g, `<p style="${esc(css(theme.listP))}"`);
          return tag('li', theme.li, prefix + content);
        },
        image({ href, title, text }) {
          const titleAttr = title ? ` title="${esc(title)}"` : '';
          const caption = text ? tag('span', theme.caption, esc(text)) : '';
          return `<img src="${esc(href)}"${titleAttr} alt="${esc(text || '')}" style="${esc(css(theme.img))}" />${caption}`;
        },
        link({ href, title, tokens }) {
          const inner = this.parser.parseInline(tokens);
          return `<a href="${esc(href)}" title="${esc(title || '')}" style="${esc(css(theme.a))}">${inner}</a>`;
        },
        strong({ tokens }) {
          return tag('strong', theme.strong, this.parser.parseInline(tokens));
        },
        em({ tokens }) {
          return tag('em', theme.em, this.parser.parseInline(tokens));
        },
        del({ tokens }) {
          return tag('del', theme.del, this.parser.parseInline(tokens));
        },
        table({ header, rows }) {
          const align = (cell) => `;text-align:${cell.align || 'left'}`;
          const head = header
            .map((cell) => `<th style="${esc(css(theme.th) + align(cell))}">${this.parser.parseInline(cell.tokens)}</th>`)
            .join('');
          const body = rows
            .map(
              (row) =>
                `<tr>${row
                  .map((cell) => `<td style="${esc(css(theme.td) + align(cell))}">${this.parser.parseInline(cell.tokens)}</td>`)
                  .join('')}</tr>`,
            )
            .join('');
          return `<section style="${esc(css(theme.tableWrap))}"><table style="${esc(css(theme.table))}"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table></section>`;
        },
        hr() {
          return `<hr style="${esc(css(theme.hr))}" />`;
        },
        br() {
          return '<br />';
        },
        html({ text }) {
          return text;
        },
      },
    });

    return parser;
  }

  /**
   * Render Markdown to a single WeChat-ready section.
   * @param {string} markdown - source Markdown.
   * @param {{theme?: string, color?: string, fontSize?: string}} options - presentation.
   * @returns {{html: string, source: string}} rendered HTML and its plain text fallback.
   */
  function renderMarkdown(markdown, options) {
    const settings = options || {};
    const theme = makeTheme(settings.theme, settings.color, settings.fontSize);
    // A leading YAML frontmatter block is document metadata, not article copy.
    const source = String(markdown == null ? '' : markdown)
      .replace(/^\uFEFF?---[ \t]*\r?\n(?=[A-Za-z0-9_.-]+[ \t]*:)[\s\S]*?\r?\n---[ \t]*(?:\r?\n|$)/, '');
    let body;
    try {
      body = sanitizeFragment(createParser(theme).parse(source));
    } catch (error) {
      body = tag(
        'p',
        theme.p,
        `Markdown 解析失败：${esc(error && error.message ? error.message : error)}`,
      );
    }
    if (!body || body.trim() === '') {
      const placeholder = settings.placeholder || '在左侧粘贴 Markdown，右侧会即时显示公众号样式。';
      body = `<p style="${esc(css(theme.p))};color:#999999">${esc(placeholder)}</p>`;
    }
    return {
      html: `<section style="${esc(css(theme.container))}">${body}</section>`,
      source,
    };
  }

  return { renderMarkdown, makeTheme, THEMES, COLORS, FONT_SIZES };
}
