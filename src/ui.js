/* Browser half: assistant-message action + the WeChat layout dialog. */
const NS = 'wechatMd';

const zh = {
  'action.open': '公众号排版',
  'action.tooltip': '用 doocs/md 风格排版，复制到公众号',
  'viewer.label': 'doocs/md 排版',
  'file.copied': '已复制',
  'file.empty': '这个 Markdown 文件还没有内容',
  'dialog.title': '公众号排版',
  'dialog.subtitle': 'Markdown 转公众号样式，复制后直接粘贴到公众号编辑器',
  'dialog.editor': 'Markdown',
  'dialog.preview': '预览',
  'dialog.theme': '主题',
  'dialog.color': '主题色',
  'dialog.fontSize': '字号',
  'dialog.import': '导入 .md',
  'dialog.copy': '复制到公众号',
  'dialog.copyHtml': '复制 HTML',
  'dialog.close': '关闭',
  'dialog.copied': '已复制，去公众号编辑器粘贴即可',
  'dialog.htmlCopied': 'HTML 源码已复制',
  'dialog.copyFailed': '复制失败，请在预览区全选后手动复制',
  'dialog.placeholder': '在这里粘贴 Markdown，右侧即时预览公众号效果…',
  'dialog.imageHint': '图片需为公网可访问地址，粘贴后公众号会自动转存',
  'dialog.credit': '主题参考 doocs/md',
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
  'action.open': 'WeChat layout',
  'action.tooltip': 'Typeset with doocs/md themes and copy to WeChat',
  'viewer.label': 'doocs/md layout',
  'file.copied': 'Copied',
  'file.empty': 'This Markdown file is empty',
  'dialog.title': 'WeChat layout',
  'dialog.subtitle': 'Markdown to WeChat-ready HTML. Copy, then paste into the WeChat editor.',
  'dialog.editor': 'Markdown',
  'dialog.preview': 'Preview',
  'dialog.theme': 'Theme',
  'dialog.color': 'Accent',
  'dialog.fontSize': 'Size',
  'dialog.import': 'Import .md',
  'dialog.copy': 'Copy to WeChat',
  'dialog.copyHtml': 'Copy HTML',
  'dialog.close': 'Close',
  'dialog.copied': 'Copied. Paste it into the WeChat editor.',
  'dialog.htmlCopied': 'HTML source copied',
  'dialog.copyFailed': 'Copy failed. Select the preview and copy manually.',
  'dialog.placeholder': 'Paste Markdown here to preview the WeChat layout…',
  'dialog.imageHint': 'Images must be publicly reachable; WeChat re-hosts them on paste.',
  'dialog.credit': 'Themes inspired by doocs/md',
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
.wmd-act{width:28px;height:28px;padding:6px;border:0;border-radius:6px;background:transparent;color:var(--dsw-alias-label-secondary);display:inline-flex;align-items:center;justify-content:center;cursor:pointer;flex:none}
.wmd-act:hover{background:color-mix(in srgb, var(--dsw-alias-label-primary) 8%, transparent);color:var(--dsw-alias-label-primary)}
.wmd-act:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}
.wmd-act svg{width:15px;height:15px}
.wmd-backdrop{position:fixed;inset:0;z-index:4000;display:flex;align-items:center;justify-content:center;padding:24px;background:rgba(0,0,0,.42);pointer-events:auto}
.wmd-panel{width:min(1180px,calc(100vw - 48px));height:min(860px,calc(100vh - 48px));display:flex;flex-direction:column;min-height:0;background:var(--dsw-alias-bg-overlay);color:var(--dsw-alias-label-primary);border:1px solid var(--dsw-alias-border-l1);border-radius:16px;box-shadow:0 24px 64px rgba(0,0,0,.28);overflow:hidden}
.wmd-head{display:flex;align-items:flex-start;gap:16px;padding:18px 22px 14px;border-bottom:1px solid var(--dsw-alias-border-l1)}
.wmd-head-main{flex:1;min-width:0}
.wmd-title{font-size:16px;font-weight:600;line-height:22px}
.wmd-sub{margin-top:4px;font-size:12px;line-height:18px;color:var(--dsw-alias-label-secondary)}
.wmd-close{width:30px;height:30px;border:0;border-radius:8px;background:transparent;color:var(--dsw-alias-label-secondary);font-size:20px;line-height:1;cursor:pointer;display:grid;place-items:center;flex:none}
.wmd-close:hover{background:color-mix(in srgb, var(--dsw-alias-label-primary) 8%, transparent);color:var(--dsw-alias-label-primary)}
.wmd-toolbar{display:flex;align-items:center;gap:22px;flex-wrap:wrap;padding:10px 22px;border-bottom:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-1)}
.wmd-field{display:flex;align-items:center;gap:8px;font-size:12px;color:var(--dsw-alias-label-secondary)}
.wmd-field select{height:30px;border-radius:8px;border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-2);color:var(--dsw-alias-label-primary);padding:0 8px;font:inherit;font-size:12px;cursor:pointer;outline:none}
.wmd-field select:focus{border-color:var(--dsw-alias-brand-primary)}
.wmd-swatches{display:flex;align-items:center;gap:6px}
.wmd-swatch{width:18px;height:18px;border-radius:50%;border:2px solid transparent;padding:0;cursor:pointer;box-shadow:0 0 0 1px var(--dsw-alias-border-l1) inset}
.wmd-swatch[data-active="true"]{border-color:var(--dsw-alias-bg-overlay);box-shadow:0 0 0 2px var(--dsw-alias-brand-primary)}
.wmd-body{flex:1;display:flex;min-height:0}
.wmd-pane{display:flex;flex-direction:column;min-width:0;min-height:0}
.wmd-editor-pane{flex:0 0 42%;border-right:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-1)}
.wmd-preview-pane{flex:1;background:var(--dsw-alias-bg-layer-2)}
.wmd-pane-head{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 16px;font-size:12px;font-weight:600;color:var(--dsw-alias-label-secondary);letter-spacing:.02em}
.wmd-import{height:26px;padding:0 10px;border-radius:6px;border:1px solid var(--dsw-alias-border-l2);background:transparent;color:var(--dsw-alias-label-secondary);font:inherit;font-size:12px;font-weight:500;cursor:pointer}
.wmd-import:hover{color:var(--dsw-alias-label-primary);border-color:var(--dsw-alias-border-l2);background:color-mix(in srgb, var(--dsw-alias-label-primary) 6%, transparent)}
.wmd-textarea{flex:1;min-height:0;margin:0 16px 16px;padding:14px 16px;box-sizing:border-box;border:1px solid var(--dsw-alias-border-l1);border-radius:10px;background:var(--dsw-alias-bg-base);color:var(--dsw-alias-label-primary);font-family:'SF Mono',Menlo,Monaco,Consolas,'Courier New',monospace;font-size:13px;line-height:1.7;resize:none;outline:none;tab-size:2}
.wmd-textarea:focus{border-color:var(--dsw-alias-brand-primary)}
.wmd-preview-scroll{flex:1;min-height:0;overflow:auto;padding:0 20px 24px}
.wmd-article{max-width:677px;margin:0 auto;padding:24px 22px;background:#ffffff;border-radius:8px;box-shadow:0 1px 4px rgba(0,0,0,.10)}
.wmd-foot{display:flex;align-items:center;gap:16px;padding:12px 22px;border-top:1px solid var(--dsw-alias-border-l1);background:var(--dsw-alias-bg-layer-1)}
.wmd-status{flex:1;min-width:0;font-size:12px;color:var(--dsw-alias-label-secondary)}
.wmd-status[data-tone="ok"]{color:var(--dsw-alias-state-success-primary)}
.wmd-status[data-tone="error"]{color:var(--dsw-alias-state-error-primary)}
.wmd-actions{display:flex;align-items:center;gap:10px}
.wmd-btn{height:34px;padding:0 16px;border-radius:8px;border:1px solid var(--dsw-alias-border-l2);background:transparent;color:var(--dsw-alias-label-primary);font:inherit;font-size:13px;font-weight:500;cursor:pointer}
.wmd-btn:hover:not(:disabled){background:color-mix(in srgb, var(--dsw-alias-label-primary) 6%, transparent)}
.wmd-btn:disabled{opacity:.45;cursor:default}
.wmd-btn-primary{border-color:var(--dsw-alias-brand-primary);background:var(--dsw-alias-brand-primary);color:#ffffff}
.wmd-btn-primary:hover:not(:disabled){background:color-mix(in srgb, var(--dsw-alias-brand-primary) 88%, #000000)}
.wmd-btn:focus-visible,.wmd-import:focus-visible,.wmd-swatch:focus-visible,.wmd-close:focus-visible{outline:2px solid var(--dsw-alias-brand-primary);outline-offset:2px}
.wmd-hint{font-size:11px;font-weight:400;color:var(--dsw-alias-label-secondary);opacity:.8}
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
@media (max-width: 860px){
  .wmd-body{flex-direction:column}
  .wmd-editor-pane{flex:0 0 42%;border-right:0;border-bottom:1px solid var(--dsw-alias-border-l1)}
}
`;

const PREFS_KEY = 'dsh.wechatMd.prefs';

function createStore(initial) {
  let state = initial;
  const listeners = new Set();
  return {
    get: () => state,
    set(patch) {
      state = Object.assign({}, state, patch);
      for (const listener of listeners) listener();
    },
    subscribe(listener) {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
  };
}

const dialogStore = createStore({ open: false, markdown: '' });

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

/**
 * One Chat snapshot's messageId -> Markdown index. Chat replaces the node map
 * on every update, and every assistant action shares one index per map, so a
 * long transcript is scanned once per update rather than once per message.
 */
const markdownIndexes = new WeakMap();

function indexMarkdown(nodes) {
  const index = new Map();
  for (const node of nodes.values()) {
    if (!node || node.kind !== 'turn-tail') continue;
    const closing = node.data && node.data.closing;
    const finalNode = closing && closing.finalNode;
    if (!finalNode || !finalNode.messageId) continue;
    const text = (closing.blocks || [])
      .filter((block) => block && block.kind === 'text' && typeof block.text === 'string')
      .map((block) => block.text)
      .join('\n\n')
      .trim();
    index.set(finalNode.messageId, text);
  }
  return index;
}

/** Recover one finalized assistant reply as Markdown from the Chat snapshot. */
function useMessageMarkdown(useChat, messageId) {
  return useChat((snapshot) => {
    const nodes = snapshot && snapshot.nodes;
    if (!messageId || !nodes) return null;
    const cached = markdownIndexes.get(nodes);
    if (cached) {
      const hit = cached.index.get(messageId);
      if (hit !== undefined) return hit || null;
    }
    markdownIndexes.set(nodes, { index: indexMarkdown(nodes) });
    return markdownIndexes.get(nodes).index.get(messageId) || null;
  });
}

function WechatActionIcon() {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 1.7,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      'aria-hidden': true,
      focusable: 'false',
    },
    React.createElement('path', { d: 'M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z' }),
    React.createElement('path', { d: 'M14 3v5h5' }),
    React.createElement('path', { d: 'M8.5 13h7' }),
    React.createElement('path', { d: 'M8.5 17h4.5' }),
  );
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

/** Open the converter with a fresh draft. */
function openConverter(markdown) {
  const current = dialogStore.get();
  dialogStore.set({ open: true, markdown: markdown || '', nonce: (current.nonce || 0) + 1 });
}

/** One assistant message's "WeChat layout" entry. */
function MessageWechatAction({ messageId, useChat, t }) {
  const markdown = useMessageMarkdown(useChat, messageId);
  const label = t('action.tooltip');
  const onClick = React.useCallback(() => {
    openConverter(markdown || '');
  }, [markdown]);
  return React.createElement(
    'button',
    {
      type: 'button',
      className: 'wmd-act',
      title: label,
      'aria-label': label,
      onClick,
    },
    React.createElement(WechatActionIcon),
  );
}

/** Identity shared by the document-preview metadata and its keyed body. */
const FILE_BODY_ID = '@local/wechat-md/file-preview';

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
          title: t('dialog.theme'),
          'aria-label': t('dialog.theme'),
          onChange: (event) => setTheme(event.target.value),
        },
        wmd.THEMES.map((item) => React.createElement('option', { key: item.id, value: item.id }, t(item.labelKey))),
      ),
      React.createElement(
        'select',
        {
          className: 'wmd-file-select',
          value: fontSize,
          title: t('dialog.fontSize'),
          'aria-label': t('dialog.fontSize'),
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
          title: status === 'copied' ? t('file.copied') : t('dialog.copy'),
          'aria-label': status === 'copied' ? t('file.copied') : t('dialog.copy'),
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
            t('dialog.copyFailed'),
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

/** The conversion dialog; mounted only while the shared store says it is open. */
function WechatDialog({ t }) {
  const state = React.useSyncExternalStore(dialogStore.subscribe, dialogStore.get, dialogStore.get);
  if (!state.open) return null;
  return React.createElement(WechatDialogBody, {
    key: state.nonce || 0,
    t,
    initialMarkdown: state.markdown || '',
    onClose: () => dialogStore.set({ open: false }),
  });
}

/** Dialog contents; a fresh mount per open keeps the draft in sync with the source message. */
function WechatDialogBody({ t, initialMarkdown, onClose }) {
  const saved = React.useMemo(() => storageRead(PREFS_KEY, {}), []);
  const [markdown, setMarkdown] = React.useState(initialMarkdown || '');
  const [theme, setTheme] = React.useState(saved.theme || 'default');
  const [color, setColor] = React.useState(saved.color || '#0F4C81');
  const [fontSize, setFontSize] = React.useState(saved.fontSize || '16');
  const [status, setStatus] = React.useState(null);
  const textareaRef = React.useRef(null);
  const previewRef = React.useRef(null);
  const fileRef = React.useRef(null);

  React.useEffect(() => {
    const previous = document.activeElement;
    if (textareaRef.current) textareaRef.current.focus();
    return () => {
      if (previous && typeof previous.focus === 'function' && document.contains(previous)) previous.focus();
    };
  }, []);

  React.useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      event.stopPropagation();
      onClose();
    };
    document.addEventListener('keydown', onKeyDown, true);
    return () => document.removeEventListener('keydown', onKeyDown, true);
  }, [onClose]);

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

  const rendered = React.useMemo(
    () =>
      wmd.renderMarkdown(markdown, {
        theme,
        color,
        fontSize,
        placeholder: t('dialog.placeholder'),
      }),
    [markdown, theme, color, fontSize, t],
  );

  const copyRich = async () => {
    const copied = await writeRichClipboard(rendered.html, previewRef.current);
    setStatus(copied ? 'copied' : 'failed');
  };

  const copySource = async () => {
    try {
      await navigator.clipboard.writeText(rendered.html);
      setStatus('htmlCopied');
    } catch {
      setStatus('failed');
    }
  };

  const onPickFile = async (event) => {
    const file = event.target.files && event.target.files[0];
    event.target.value = '';
    if (!file) return;
    try {
      const text = await file.text();
      setMarkdown(text);
      setStatus(null);
    } catch {
      setStatus('failed');
    }
  };

  const statusText =
    status === 'copied'
      ? t('dialog.copied')
      : status === 'htmlCopied'
        ? t('dialog.htmlCopied')
        : status === 'failed'
          ? t('dialog.copyFailed')
          : '';

  return React.createElement(
    'div',
    { className: 'wmd-backdrop', onClick: (event) => { if (event.target === event.currentTarget) onClose(); } },
    React.createElement(
      'div',
      {
        className: 'wmd-panel',
        role: 'dialog',
        'aria-modal': 'true',
        'aria-label': t('dialog.title'),
        onClick: (event) => event.stopPropagation(),
      },
      React.createElement(
        'header',
        { className: 'wmd-head' },
        React.createElement(
          'div',
          { className: 'wmd-head-main' },
          React.createElement('div', { className: 'wmd-title' }, t('dialog.title')),
          React.createElement('div', { className: 'wmd-sub' }, t('dialog.subtitle')),
        ),
        React.createElement(
          'button',
          { type: 'button', className: 'wmd-close', onClick: onClose, 'aria-label': t('dialog.close') },
          '\u00d7',
        ),
      ),
      React.createElement(
        'div',
        { className: 'wmd-toolbar' },
        React.createElement(
          'label',
          { className: 'wmd-field' },
          React.createElement('span', null, t('dialog.theme')),
          React.createElement(
            'select',
            { value: theme, onChange: (event) => setTheme(event.target.value) },
            wmd.THEMES.map((item) => React.createElement('option', { key: item.id, value: item.id }, t(item.labelKey))),
          ),
        ),
        React.createElement(
          'div',
          { className: 'wmd-field' },
          React.createElement('span', null, t('dialog.color')),
          React.createElement(
            'div',
            { className: 'wmd-swatches' },
            wmd.COLORS.map((item) =>
              React.createElement('button', {
                key: item.value,
                type: 'button',
                className: 'wmd-swatch',
                style: { backgroundColor: item.value },
                'data-active': String(color.toLowerCase() === item.value.toLowerCase()),
                title: t(item.labelKey),
                'aria-label': t(item.labelKey),
                onClick: () => setColor(item.value),
              }),
            ),
          ),
        ),
        React.createElement(
          'label',
          { className: 'wmd-field' },
          React.createElement('span', null, t('dialog.fontSize')),
          React.createElement(
            'select',
            { value: fontSize, onChange: (event) => setFontSize(event.target.value) },
            wmd.FONT_SIZES.map((size) =>
              React.createElement('option', { key: size, value: size }, `${size}px`),
            ),
          ),
        ),
      ),
      React.createElement(
        'div',
        { className: 'wmd-body' },
        React.createElement(
          'div',
          { className: 'wmd-pane wmd-editor-pane' },
          React.createElement(
            'div',
            { className: 'wmd-pane-head' },
            React.createElement('span', null, t('dialog.editor')),
            React.createElement(
              'button',
              { type: 'button', className: 'wmd-import', onClick: () => fileRef.current && fileRef.current.click() },
              t('dialog.import'),
            ),
          ),
          React.createElement('input', {
            ref: fileRef,
            type: 'file',
            accept: '.md,.markdown,.txt',
            hidden: true,
            onChange: onPickFile,
          }),
          React.createElement('textarea', {
            ref: textareaRef,
            className: 'wmd-textarea',
            value: markdown,
            spellCheck: false,
            placeholder: t('dialog.placeholder'),
            onChange: (event) => setMarkdown(event.target.value),
          }),
        ),
        React.createElement(
          'div',
          { className: 'wmd-pane wmd-preview-pane' },
          React.createElement(
            'div',
            { className: 'wmd-pane-head' },
            React.createElement('span', null, t('dialog.preview')),
            React.createElement('span', { className: 'wmd-hint' }, t('dialog.imageHint')),
          ),
          React.createElement(
            'div',
            { className: 'wmd-preview-scroll' },
            React.createElement('div', {
              ref: previewRef,
              className: 'wmd-article',
              dangerouslySetInnerHTML: { __html: rendered.html },
            }),
          ),
        ),
      ),
      React.createElement(
        'footer',
        { className: 'wmd-foot' },
        React.createElement(
          'div',
          {
            className: 'wmd-status',
            role: 'status',
            'data-tone': status === 'failed' ? 'error' : status ? 'ok' : undefined,
          },
          statusText || t('dialog.credit'),
        ),
        React.createElement(
          'div',
          { className: 'wmd-actions' },
          React.createElement(
            'button',
            {
              type: 'button',
              className: 'wmd-btn',
              disabled: markdown.trim() === '',
              onClick: copySource,
            },
            t('dialog.copyHtml'),
          ),
          React.createElement(
            'button',
            {
              type: 'button',
              className: 'wmd-btn wmd-btn-primary',
              disabled: markdown.trim() === '',
              onClick: copyRich,
            },
            t('dialog.copy'),
          ),
        ),
      ),
    ),
  );
}

/** Register the dictionaries, the per-message action, and the dialog. */
function apply(ctx) {
  ctx.effect(() => {
    const tag = document.createElement('style');
    tag.dataset.plugin = '@local/wechat-md';
    tag.textContent = STYLE;
    document.head.appendChild(tag);
    return () => tag.remove();
  }, 'wechat-md: styles');

  ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'wechat-md: locale');

  ctx.slots.inject('conversation.chat.assistant-actions', () =>
    ctx.slots.register(
      {
        name: 'conversation.chat.assistant-actions',
        id: 'wechat-md',
        order: 20,
        locale: NS,
      },
      MessageWechatAction,
    ),
  );

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

  ctx.slots.inject('shell.overlay', () =>
    ctx.slots.register(
      {
        name: 'shell.overlay',
        id: 'wechat-md-dialog',
        order: 40,
        locale: NS,
      },
      WechatDialog,
    ),
  );
}

const wmd = createWechatMarkdown(markedLib);

return { inject: ['slots', 'locale'], apply };
