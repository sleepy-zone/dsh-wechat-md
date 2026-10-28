# 公众号排版 · WeChat Layout

一个 DeepSeek Harness（DSH）客户端插件：在右侧文件面板选择 **doocs/md 排版**，
把 Markdown 渲染成可直接粘贴进微信公众号编辑器的富文本；聊天回复也能一键转成
公众号文章。样式参考 [doocs/md](https://github.com/doocs/md)。

A DSH client plugin that turns Markdown into WeChat official-account (公众号)
ready HTML, modelled on [doocs/md](https://github.com/doocs/md).

- Each finalized assistant reply gets a **公众号排版** icon in its action row. It
  opens the converter pre-filled with that reply's Markdown.
- In the right Sidebar, opening a `.md` / `.markdown` file keeps the shipped
  **Markdown** viewer by default. The viewer dropdown gains a **doocs/md 排版**
  option; selecting it renders the file as a WeChat article with theme controls
  and a copy-icon button. The shipped **Plain text** viewer stays available too.
- The converter has a Markdown editor, a live WeChat-style preview, three
  doocs/md themes (经典 / 优雅 / 简洁), five accent colours, and 14–18px body
  sizes. Preferences persist per browser.
- **复制到公众号** writes the rendered article to the clipboard as rich HTML
  (`text/html` + `text/plain`); paste it into the WeChat editor and the inline
  styles survive. **复制 HTML** copies the same markup as source.
- A leading YAML frontmatter block is treated as document metadata and omitted
  from the article; the rest of the file renders normally.
- **导入 .md** loads a local Markdown file into the editor, so a draft written
  elsewhere can be converted without touching a chat message.

## Why it can be pasted into WeChat

The WeChat editor discards `<style>` blocks and class selectors, so the renderer
bakes every rule into `style` attributes: headings, paragraphs, quotes, lists,
tables, code, links and images all carry inline CSS. Relative styles are
resolved from the theme before rendering; no stylesheet, web font, CDN script,
or network request is involved.

The right-Sidebar viewer is a `documentPreviews` implementation: it registers
`md`/`markdown` for `text-pages` loading under the id
`@local/wechat-md/file-preview`. Its `builtin` priority registers it beside the
shipped Markdown viewer, so Markdown stays the default and doocs/md is a
dropdown choice; use `priority: 'extension'` to make it the default instead.

The Markdown parser is [marked](https://github.com/markedjs/marked) v15 (MIT),
vendored into `client.js`. Raw HTML in the Markdown is sanitized (scripts,
frames, form controls, `on*` handlers and `javascript:` URLs are removed) before
it reaches the preview or the clipboard.

## Install

This repository is a DSH bundle. Clone it somewhere in your workspace, then
install the package directory with `plugin_manager` (`install_bundle`):

```
git clone https://github.com/sleepy-zone/dsh-wechat-md.git
```

The bundle loads on the next page start; if the running page still shows the old
client generation, restart the app (or reload the Web UI) once.

## Development

```bash
node src/build.mjs      # concatenates marked + markdown.js + ui.js -> client.js
node --check client.js  # syntax check
```

- `src/markdown.js` — theme style maps and the marked renderer (pure, no React).
- `src/ui.js` — slot registrations, the message action, the dialog, and the
  right-Sidebar file viewer.
- `src/marked.min.js` — vendored marked build; do not edit.

## Known limits

- No Mermaid/PlantUML/KaTeX/emoji/GFM-alert extensions; code blocks are not
  syntax-highlighted (doocs/md has all of these).
- Images keep their Markdown URLs. In the right-Sidebar viewer, relative local
  images are resolved through the authenticated file route so the preview shows
  them; the copied HTML still carries the authored URL, so a relative image will
  not load in WeChat until you upload it. Public HTTP(S) images are re-hosted by
  WeChat on paste.
- The preview is the clipboard payload, not an iframe of the WeChat editor, so
  WeChat-side quirks (e.g. table scrolling on small screens) cannot be
  previewed exactly.

Themes are adapted from doocs/md's WTFPL-licensed theme styles; the
WeChat-layout UI is written for DSH. See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)
for the full marked, Markdown, and doocs/md license texts.

## License

[MIT](LICENSE) © 2026 sleepy-zone. Vendored and adapted third-party work is
covered by [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
