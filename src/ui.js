/* Browser half: the right-Sidebar doocs/md viewer for Markdown files. */
const NS = 'wechatMd';

const zh = {
  'viewer.label': 'doocs/md 排版',
  'file.theme': '主题',
  'file.fontSize': '字号',
  'file.copy': '复制到公众号',
  'file.copied': '已复制',
  'file.copyFailed': '复制失败，请在预览区全选后手动复制',
  'file.empty': '这个 Markdown 文件还没有内容',
  'theme.default': '经典',
  'theme.grace': '优雅',
  'theme.simple': '简洁',
  'color.classicBlue': '经典蓝',
  'color.emerald': '翡翠绿',
  'color.orange': '活力橘',
  'color.purple': '薰衣紫',
  'color.graphite': '石墨黑',
};

const en = {
  'viewer.label': 'doocs/md layout',
  'file.theme': 'Theme',
  'file.fontSize': 'Size',
  'file.copy': 'Copy to WeChat',
  'file.copied': 'Copied',
  'file.copyFailed': 'Copy failed. Select the preview and copy manually.',
  'file.empty': 'This Markdown file is empty',
  'theme.default': 'Classic',
  'theme.grace': 'Grace',
  'theme.simple': 'Simple',
  'color.classicBlue': 'Classic blue',
  'color.emerald': 'Emerald',
  'color.orange': 'Vivid orange',
  'color.purple': 'Lavender',
  'color.graphite': 'Graphite',
};

const STYLE = `
.wmd-article{max-width:677px;margin:0 auto;padding:24px 22px;background:#ffffff;border-radius:8px;box-shadow:0 1px 4px rgba(0,0,0,.10)}
.wmd-file{min-height:100%;white-space:normal;color:var(--dsw-alias-label-primary);font-family:var(--dsw-font,inherit);font-size:var(--dsh-content-font-size-secondary,13px);line-height:1.5}
.wmd-file-bar{position:sticky;top:0;z-index:2;display:flex;flex-wrap:wrap;align-items:center;gap:8px;padding:8px 10px;background:var(--dsw-alias-bg-layer-1);border-bottom:1px solid var(--dsw-alias-border-l1)}
.wmd-file-select{height:26px;max-width:132px;border-radius:6px;border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary);padding:0 6px;font:inherit;font-size:12px;cursor:pointer;outline:none}
.wmd-file-select:focus-visible{border-color:var(--dsw-alias-brand-primary)}
.wmd-file-colors{display:flex;align-items:center;gap:5px}
.wmd-file-swatch{box-sizing:border-box;width:16px;height:16px;border-radius:50%;border:2px solid transparent;padding:0;cursor:pointer;box-shadow:0 0 0 1px var(--dsw-alias-border-l1) inset}
.wmd-file-swatch[data-active="true"]{border-color:var(--dsw-alias-bg-layer-1);box-shadow:0 0 0 2px var(--dsw-alias-brand-primary)}
.wmd-file-copy{box-sizing:border-box;margin-left:auto;width:28px;height:28px;padding:6px;border:0;border-radius:6px;background:transparent;color:var(--dsw-alias-label-secondary);display:inline-flex;align-items:center;justify-content:center;flex:none;cursor:pointer}
.wmd-file-copy:hover:not(:disabled){background:color-mix(in srgb, var(--dsw-alias-label-primary) 8%, transparent);color:var(--dsw-alias-label-primary)}
.wmd-file-copy:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}
.wmd-file-copy:disabled{opacity:.45;cursor:default}
.wmd-file-copy svg{width:15px;height:15px}
.wmd-file-status{font-size:12px;color:var(--dsw-alias-label-secondary)}
.wmd-file-status[data-tone="error"]{color:var(--dsw-alias-state-error-primary)}
.wmd-file-article{box-sizing:border-box;width:calc(100% - 16px);max-width:677px;margin:8px auto 16px;padding:18px 16px}
`;

const PREFS_KEY = 'dsh.wechatMd.prefs';

function storageRead(key, fallback) {
  try {
    const raw = window.localStorage.getItem(key);
    return raw === null ? fallback : JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function storageWrite(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* A restricted storage surface only loses the preference. */
  }
}

/** Plain-text fallback for the rich clipboard payload. */
function htmlToPlainText(markup) {
  try {
    const holder = document.createElement('div');
    holder.innerHTML = markup;
    return holder.textContent || '';
  } catch {
    return '';
  }
}

/** Copy the rendered article as rich HTML so the WeChat editor keeps its styles. */
async function writeRichClipboard(markup, previewElement) {
  const plain = htmlToPlainText(markup);
  try {
    if (navigator.clipboard && typeof window.ClipboardItem === 'function') {
      const item = new window.ClipboardItem({
        'text/html': new Blob([markup], { type: 'text/html' }),
        'text/plain': new Blob([plain], { type: 'text/plain' }),
      });
      await navigator.clipboard.write([item]);
      return true;
    }
  } catch {
    /* Fall through to the selection copy path. */
  }
  if (!previewElement) return false;
  const selection = window.getSelection();
  if (!selection) return false;
  const range = document.createRange();
  range.selectNodeContents(previewElement);
  selection.removeAllRanges();
  selection.addRange(range);
  let copied = false;
  try {
    copied = document.execCommand('copy');
  } catch {
    copied = false;
  }
  selection.removeAllRanges();
  return copied;
}

/** The code-preview copy glyph (IconCopyOutlineRegular), drawn locally. */
function CopyOutlineIcon({ size = 15 }) {
  return React.createElement(
    'svg',
    {
      width: size,
      height: size,
      viewBox: '0 0 16 16',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      'aria-hidden': true,
      focusable: 'false',
      strokeWidth: 1,
    },
    React.createElement('rect', {
      x: '1.52075',
      y: '4.07373',
      width: '10.3932',
      height: '10.3932',
      rx: '2',
      stroke: 'currentColor',
    }),
    React.createElement('path', {
      d: 'M11.9792 1.53296C13.36 1.53296 14.4792 2.65225 14.4792 4.03296V9.42847C14.4792 10.3756 13.9521 11.1987 13.1755 11.6228V10.3298C13.3652 10.0787 13.4792 9.7674 13.4792 9.42847V4.03296C13.4792 3.20453 12.8077 2.53296 11.9792 2.53296H6.58374C6.27966 2.53301 5.99684 2.6235 5.7605 2.77905H4.42358C4.85652 2.03463 5.66056 1.53304 6.58374 1.53296H11.9792Z',
      fill: 'currentColor',
    }),
  );
}

/** The check glyph the code preview swaps in after copying. */
function CheckOutlineIcon({ size = 15 }) {
  return React.createElement(
    'svg',
    {
      width: size,
      height: size,
      viewBox: '0 0 16 16',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      'aria-hidden': true,
      focusable: 'false',
      strokeWidth: 1,
    },
    React.createElement('path', {
      d: 'M2.25 8.5L5.49732 11.7473C5.90519 12.1552 6.57263 12.1344 6.95426 11.7018L13.75 4',
      stroke: 'currentColor',
    }),
  );
}

/** Whether a path already names an absolute file. */
function isAbsoluteFilePath(path) {
  return path.startsWith('/') || /^[a-z]:[/\\]/iu.test(path);
}

/**
 * Resolve one authored image destination through the authenticated file route.
 * The preview shows local images; the copied HTML keeps its original URLs.
 */
function localImageUrl(base, documentPath, destination) {
  if ((!base.startsWith('http:') && !base.startsWith('https:') && !base.startsWith('dsh-app://app/')) || !documentPath) return undefined;
  const suffix = destination.search(/[?#]/u);
  let path;
  try {
    path = decodeURIComponent(suffix === -1 ? destination : destination.slice(0, suffix));
  } catch {
    return undefined;
  }
  if (path.length === 0) return undefined;
  if (!isAbsoluteFilePath(path)) {
    if (/^(?:[a-z][a-z\d+.-]*:|\/\/)/iu.test(path)) return undefined;
    const trimmed = documentPath.replace(/[/\\]+$/, '');
    const cut = Math.max(trimmed.lastIndexOf('/'), trimmed.lastIndexOf('\\')) + 1;
    path = trimmed.slice(0, cut) + path;
  }
  if (!isAbsoluteFilePath(path) || /^[/\\]{2}/u.test(path) || /[\u0000-\u001f\u007f]/u.test(path)) return undefined;
  return new URL(`api/file?path=${encodeURIComponent(path)}`, base).href;
}

/** Identity shared by the document-preview metadata and its keyed body. */
const FILE_BODY_ID = '@local/wechat-md/file-preview';

/** Read-only doocs/md layout for one Markdown file in the right Sidebar. */
function MarkdownFilePreview({ content, resourceAddress, useResource, t }) {
  const saved = React.useMemo(() => storageRead(PREFS_KEY, {}), []);
  const [theme, setTheme] = React.useState(saved.theme || 'default');
  const [color, setColor] = React.useState(saved.color || '#0F4C81');
  const [fontSize, setFontSize] = React.useState(saved.fontSize || '16');
  const [status, setStatus] = React.useState(null);
  const articleRef = React.useRef(null);
  const source = content && content.kind === 'text' && typeof content.text === 'string' ? content.text : '';
  const empty = source.trim() === '';
  const file = useResource(resourceAddress);
  const absolutePath = file && file.value ? file.value.absolutePath : undefined;

  const rendered = React.useMemo(
    () =>
      wmd.renderMarkdown(source, {
        theme,
        color,
        fontSize,
        placeholder: t('file.empty'),
      }),
    [source, theme, color, fontSize, t],
  );

  React.useEffect(() => {
    storageWrite(PREFS_KEY, { theme, color, fontSize });
  }, [theme, color, fontSize]);

  React.useEffect(() => {
    const article = articleRef.current;
    if (!article || !absolutePath) return;
    for (const image of article.querySelectorAll('img')) {
      const source = image.getAttribute('src');
      if (!source || /^(?:[a-z][a-z\d+.-]*:|\/\/)/iu.test(source)) continue;
      const resolved = localImageUrl(document.baseURI, absolutePath, source);
      if (resolved) image.src = resolved;
    }
  }, [rendered.html, absolutePath]);

  React.useEffect(() => {
    if (!status) return undefined;
    const timer = window.setTimeout(() => setStatus(null), 4200);
    return () => window.clearTimeout(timer);
  }, [status]);

  const copy = async () => {
    if (empty) return;
    const copied = await writeRichClipboard(rendered.html, articleRef.current);
    setStatus(copied ? 'copied' : 'failed');
  };

  return React.createElement(
    'div',
    { className: 'wmd-file' },
    React.createElement(
      'div',
      { className: 'wmd-file-bar' },
      React.createElement(
        'select',
        {
          className: 'wmd-file-select',
          value: theme,
          title: t('file.theme'),
          'aria-label': t('file.theme'),
          onChange: (event) => setTheme(event.target.value),
        },
        wmd.THEMES.map((item) => React.createElement('option', { key: item.id, value: item.id }, t(item.labelKey))),
      ),
      React.createElement(
        'select',
        {
          className: 'wmd-file-select',
          value: fontSize,
          title: t('file.fontSize'),
          'aria-label': t('file.fontSize'),
          onChange: (event) => setFontSize(event.target.value),
        },
        wmd.FONT_SIZES.map((size) => React.createElement('option', { key: size, value: size }, `${size}px`)),
      ),
      React.createElement(
        'div',
        { className: 'wmd-file-colors' },
        wmd.COLORS.map((item) => {
          const active = color.toLowerCase() === item.value.toLowerCase();
          return React.createElement('button', {
            key: item.value,
            type: 'button',
            className: 'wmd-file-swatch',
            style: { backgroundColor: item.value },
            'data-active': String(active),
            'aria-pressed': active,
            title: t(item.labelKey),
            'aria-label': t(item.labelKey),
            onClick: () => setColor(item.value),
          });
        }),
      ),
      React.createElement(
        'button',
        {
          type: 'button',
          className: 'wmd-file-copy',
          disabled: empty,
          title: status === 'copied' ? t('file.copied') : t('file.copy'),
          'aria-label': status === 'copied' ? t('file.copied') : t('file.copy'),
          onClick: copy,
        },
        status === 'copied'
          ? React.createElement(CheckOutlineIcon)
          : React.createElement(CopyOutlineIcon),
      ),
      status === 'failed'
        ? React.createElement(
            'span',
            { className: 'wmd-file-status', role: 'status', 'data-tone': 'error' },
            t('file.copyFailed'),
          )
        : null,
    ),
    React.createElement('div', {
      ref: articleRef,
      className: 'wmd-article wmd-file-article',
      dangerouslySetInnerHTML: { __html: rendered.html },
    }),
  );
}

/** Register the dictionaries and the Markdown document-preview renderer. */
function apply(ctx) {
  ctx.effect(() => {
    const tag = document.createElement('style');
    tag.dataset.plugin = '@local/wechat-md';
    tag.textContent = STYLE;
    document.head.appendChild(tag);
    return () => tag.remove();
  }, 'wechat-md: styles');

  ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'wechat-md: locale');

  ctx.inject(['documentPreviews', 'slots', 'locale'], (scope) => {
    const label = scope.locale.bind(NS);
    scope.effect(
      () =>
        scope.documentPreviews.register({
          id: FILE_BODY_ID,
          extensions: ['md', 'markdown'],
          priority: 'builtin',
          title: () => label('viewer.label'),
          loading: 'text-pages',
          wrap: false,
        }),
      'wechat-md: file preview',
    );
    scope.slots.inject('sidebar.right.tab.document', () =>
      scope.slots.register(
        {
          name: 'sidebar.right.tab.document',
          key: FILE_BODY_ID,
          locale: NS,
        },
        MarkdownFilePreview,
      ),
    );
  });
}

const wmd = createWechatMarkdown(markedLib);

return { inject: ['slots', 'locale'], apply };
