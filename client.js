window.__ModuleLoader__.load({
  id: '@local/wechat-md',
  factory(require) {
    const React = require('react');

    // marked v15.0.7 (MIT) — https://github.com/markedjs/marked — vendored so the
    // plugin needs no network and no extra Client dependency.
    const markedLib = (function () {
      const exports = {};
      const module = { exports };
/**
 * marked v15.0.7 - a markdown parser
 * Copyright (c) 2011-2025, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).marked={})}(this,(function(e){"use strict";function t(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}function n(t){e.defaults=t}e.defaults={async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null};const s={exec:()=>null};function r(e,t=""){let n="string"==typeof e?e:e.source;const s={replace:(e,t)=>{let r="string"==typeof t?t:t.source;return r=r.replace(i.caret,"$1"),n=n.replace(e,r),s},getRegex:()=>new RegExp(n,t)};return s}const i={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[\t ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},l=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,o=/(?:[*+-]|\d{1,9}[.)])/,a=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,c=r(a).replace(/bull/g,o).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),h=r(a).replace(/bull/g,o).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),p=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,u=/(?!\s*\])(?:\\.|[^\[\]\\])+/,g=r(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",u).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),k=r(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,o).getRegex(),d="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",f=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,x=r("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ \t]*)+\\n|$))","i").replace("comment",f).replace("tag",d).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),b=r(p).replace("hr",l).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",d).getRegex(),w={blockquote:r(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",b).getRegex(),code:/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,def:g,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,hr:l,html:x,lheading:c,list:k,newline:/^(?:[ \t]*(?:\n|$))+/,paragraph:b,table:s,text:/^[^\n]+/},m=r("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",l).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}\t)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",d).getRegex(),y={...w,lheading:h,table:m,paragraph:r(p).replace("hr",l).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",m).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",d).getRegex()},$={...w,html:r("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",f).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:s,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:r(p).replace("hr",l).replace("heading"," *#{1,6} *[^\n]").replace("lheading",c).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},R=/^( {2,}|\\)\n(?!\s*$)/,S=/[\p{P}\p{S}]/u,T=/[\s\p{P}\p{S}]/u,z=/[^\s\p{P}\p{S}]/u,A=r(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,T).getRegex(),_=/(?!~)[\p{P}\p{S}]/u,P=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,I=r(P,"u").replace(/punct/g,S).getRegex(),L=r(P,"u").replace(/punct/g,_).getRegex(),B="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",C=r(B,"gu").replace(/notPunctSpace/g,z).replace(/punctSpace/g,T).replace(/punct/g,S).getRegex(),q=r(B,"gu").replace(/notPunctSpace/g,/(?:[^\s\p{P}\p{S}]|~)/u).replace(/punctSpace/g,/(?!~)[\s\p{P}\p{S}]/u).replace(/punct/g,_).getRegex(),E=r("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,z).replace(/punctSpace/g,T).replace(/punct/g,S).getRegex(),Z=r(/\\(punct)/,"gu").replace(/punct/g,S).getRegex(),v=r(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),D=r(f).replace("(?:--\x3e|$)","--\x3e").getRegex(),M=r("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",D).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),O=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Q=r(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",O).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),j=r(/^!?\[(label)\]\[(ref)\]/).replace("label",O).replace("ref",u).getRegex(),N=r(/^!?\[(ref)\](?:\[\])?/).replace("ref",u).getRegex(),G={_backpedal:s,anyPunctuation:Z,autolink:v,blockSkip:/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,br:R,code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,del:s,emStrongLDelim:I,emStrongRDelimAst:C,emStrongRDelimUnd:E,escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,link:Q,nolink:N,punctuation:A,reflink:j,reflinkSearch:r("reflink|nolink(?!\\()","g").replace("reflink",j).replace("nolink",N).getRegex(),tag:M,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,url:s},H={...G,link:r(/^!?\[(label)\]\((.*?)\)/).replace("label",O).getRegex(),reflink:r(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",O).getRegex()},X={...G,emStrongRDelimAst:q,emStrongLDelim:L,url:r(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},F={...X,br:r(R).replace("{2,}","*").getRegex(),text:r(X.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},U={normal:w,gfm:y,pedantic:$},J={normal:G,gfm:X,breaks:F,pedantic:H},K={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},V=e=>K[e];function W(e,t){if(t){if(i.escapeTest.test(e))return e.replace(i.escapeReplace,V)}else if(i.escapeTestNoEncode.test(e))return e.replace(i.escapeReplaceNoEncode,V);return e}function Y(e){try{e=encodeURI(e).replace(i.percentDecode,"%")}catch{return null}return e}function ee(e,t){const n=e.replace(i.findPipe,((e,t,n)=>{let s=!1,r=t;for(;--r>=0&&"\\"===n[r];)s=!s;return s?"|":" |"})).split(i.splitPipe);let s=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t)if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;s<n.length;s++)n[s]=n[s].trim().replace(i.slashPipe,"|");return n}function te(e,t,n){const s=e.length;if(0===s)return"";let r=0;for(;r<s;){if(e.charAt(s-r-1)!==t)break;r++}return e.slice(0,s-r)}function ne(e,t,n,s,r){const i=t.href,l=t.title||null,o=e[1].replace(r.other.outputLinkReplace,"$1");if("!"!==e[0].charAt(0)){s.state.inLink=!0;const e={type:"link",raw:n,href:i,title:l,text:o,tokens:s.inlineTokens(o)};return s.state.inLink=!1,e}return{type:"image",raw:n,href:i,title:l,text:o}}class se{options;rules;lexer;constructor(t){this.options=t||e.defaults}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const e=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:te(e,"\n")}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const e=t[0],n=function(e,t,n){const s=e.match(n.other.indentCodeCompensation);if(null===s)return t;const r=s[1];return t.split("\n").map((e=>{const t=e.match(n.other.beginningSpace);if(null===t)return e;const[s]=t;return s.length>=r.length?e.slice(r.length):e})).join("\n")}(e,t[3]||"",this.rules);return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:n}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){const t=te(e,"#");this.options.pedantic?e=t.trim():t&&!this.rules.other.endingSpaceChar.test(t)||(e=t.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:te(t[0],"\n")}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let e=te(t[0],"\n").split("\n"),n="",s="";const r=[];for(;e.length>0;){let t=!1;const i=[];let l;for(l=0;l<e.length;l++)if(this.rules.other.blockquoteStart.test(e[l]))i.push(e[l]),t=!0;else{if(t)break;i.push(e[l])}e=e.slice(l);const o=i.join("\n"),a=o.replace(this.rules.other.blockquoteSetextReplace,"\n    $1").replace(this.rules.other.blockquoteSetextReplace2,"");n=n?`${n}\n${o}`:o,s=s?`${s}\n${a}`:a;const c=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(a,r,!0),this.lexer.state.top=c,0===e.length)break;const h=r.at(-1);if("code"===h?.type)break;if("blockquote"===h?.type){const t=h,i=t.raw+"\n"+e.join("\n"),l=this.blockquote(i);r[r.length-1]=l,n=n.substring(0,n.length-t.raw.length)+l.raw,s=s.substring(0,s.length-t.text.length)+l.text;break}if("list"!==h?.type);else{const t=h,i=t.raw+"\n"+e.join("\n"),l=this.list(i);r[r.length-1]=l,n=n.substring(0,n.length-h.raw.length)+l.raw,s=s.substring(0,s.length-t.raw.length)+l.raw,e=i.substring(r.at(-1).raw.length).split("\n")}}return{type:"blockquote",raw:n,tokens:r,text:s}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const s=n.length>1,r={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");const i=this.rules.other.listItemRegex(n);let l=!1;for(;e;){let n=!1,s="",o="";if(!(t=i.exec(e)))break;if(this.rules.block.hr.test(e))break;s=t[0],e=e.substring(s.length);let a=t[2].split("\n",1)[0].replace(this.rules.other.listReplaceTabs,(e=>" ".repeat(3*e.length))),c=e.split("\n",1)[0],h=!a.trim(),p=0;if(this.options.pedantic?(p=2,o=a.trimStart()):h?p=t[1].length+1:(p=t[2].search(this.rules.other.nonSpaceChar),p=p>4?1:p,o=a.slice(p),p+=t[1].length),h&&this.rules.other.blankLine.test(c)&&(s+=c+"\n",e=e.substring(c.length+1),n=!0),!n){const t=this.rules.other.nextBulletRegex(p),n=this.rules.other.hrRegex(p),r=this.rules.other.fencesBeginRegex(p),i=this.rules.other.headingBeginRegex(p),l=this.rules.other.htmlBeginRegex(p);for(;e;){const u=e.split("\n",1)[0];let g;if(c=u,this.options.pedantic?(c=c.replace(this.rules.other.listReplaceNesting,"  "),g=c):g=c.replace(this.rules.other.tabCharGlobal,"    "),r.test(c))break;if(i.test(c))break;if(l.test(c))break;if(t.test(c))break;if(n.test(c))break;if(g.search(this.rules.other.nonSpaceChar)>=p||!c.trim())o+="\n"+g.slice(p);else{if(h)break;if(a.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4)break;if(r.test(a))break;if(i.test(a))break;if(n.test(a))break;o+="\n"+c}h||c.trim()||(h=!0),s+=u+"\n",e=e.substring(u.length+1),a=g.slice(p)}}r.loose||(l?r.loose=!0:this.rules.other.doubleBlankLine.test(s)&&(l=!0));let u,g=null;this.options.gfm&&(g=this.rules.other.listIsTask.exec(o),g&&(u="[ ] "!==g[0],o=o.replace(this.rules.other.listReplaceTask,""))),r.items.push({type:"list_item",raw:s,task:!!g,checked:u,loose:!1,text:o,tokens:[]}),r.raw+=s}const o=r.items.at(-1);if(!o)return;o.raw=o.raw.trimEnd(),o.text=o.text.trimEnd(),r.raw=r.raw.trimEnd();for(let e=0;e<r.items.length;e++)if(this.lexer.state.top=!1,r.items[e].tokens=this.lexer.blockTokens(r.items[e].text,[]),!r.loose){const t=r.items[e].tokens.filter((e=>"space"===e.type)),n=t.length>0&&t.some((e=>this.rules.other.anyLine.test(e.raw)));r.loose=n}if(r.loose)for(let e=0;e<r.items.length;e++)r.items[e].loose=!0;return r}}html(e){const t=this.rules.block.html.exec(e);if(t){return{type:"html",block:!0,raw:t[0],pre:"pre"===t[1]||"script"===t[1]||"style"===t[1],text:t[0]}}}def(e){const t=this.rules.block.def.exec(e);if(t){const e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:e,raw:t[0],href:n,title:s}}}table(e){const t=this.rules.block.table.exec(e);if(!t)return;if(!this.rules.other.tableDelimiter.test(t[2]))return;const n=ee(t[1]),s=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),r=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split("\n"):[],i={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===s.length){for(const e of s)this.rules.other.tableAlignRight.test(e)?i.align.push("right"):this.rules.other.tableAlignCenter.test(e)?i.align.push("center"):this.rules.other.tableAlignLeft.test(e)?i.align.push("left"):i.align.push(null);for(let e=0;e<n.length;e++)i.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:i.align[e]});for(const e of r)i.rows.push(ee(e,i.header.length).map(((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:i.align[t]}))));return i}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const e="\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;const t=te(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{const e=function(e,t){if(-1===e.indexOf(t[1]))return-1;let n=0;for(let s=0;s<e.length;s++)if("\\"===e[s])s++;else if(e[s]===t[0])n++;else if(e[s]===t[1]&&(n--,n<0))return s;return-1}(t[2],"()");if(e>-1){const n=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=""}}let n=t[2],s="";if(this.options.pedantic){const e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],s=e[3])}else s=t[3]?t[3].slice(1,-1):"";return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),ne(t,{href:n?n.replace(this.rules.inline.anyPunctuation,"$1"):n,title:s?s.replace(this.rules.inline.anyPunctuation,"$1"):s},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," ").toLowerCase()];if(!e){const e=n[0].charAt(0);return{type:"text",raw:e,text:e}}return ne(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!s)return;if(s[3]&&n.match(this.rules.other.unicodeAlphaNumeric))return;if(!(s[1]||s[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const n=[...s[0]].length-1;let r,i,l=n,o=0;const a="*"===s[0][0]?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(a.lastIndex=0,t=t.slice(-1*e.length+n);null!=(s=a.exec(t));){if(r=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!r)continue;if(i=[...r].length,s[3]||s[4]){l+=i;continue}if((s[5]||s[6])&&n%3&&!((n+i)%3)){o+=i;continue}if(l-=i,l>0)continue;i=Math.min(i,i+l+o);const t=[...s[0]][0].length,a=e.slice(0,n+s.index+t+i);if(Math.min(n,i)%2){const e=a.slice(1,-1);return{type:"em",raw:a,text:e,tokens:this.lexer.inlineTokens(e)}}const c=a.slice(2,-2);return{type:"strong",raw:a,text:c,tokens:this.lexer.inlineTokens(c)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal," ");const n=this.rules.other.nonSpaceChar.test(e),s=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&s&&(e=e.substring(1,e.length-1)),{type:"codespan",raw:t[0],text:e}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let e,n;return"@"===t[2]?(e=t[1],n="mailto:"+e):(e=t[1],n=e),{type:"link",raw:t[0],text:e,href:n,tokens:[{type:"text",raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if("@"===t[2])e=t[0],n="mailto:"+e;else{let s;do{s=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??""}while(s!==t[0]);e=t[0],n="www."===t[1]?"http://"+t[0]:t[0]}return{type:"link",raw:t[0],text:e,href:n,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){const e=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:e}}}}class re{tokens;options;state;tokenizer;inlineQueue;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||e.defaults,this.options.tokenizer=this.options.tokenizer||new se,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={other:i,block:U.normal,inline:J.normal};this.options.pedantic?(n.block=U.pedantic,n.inline=J.pedantic):this.options.gfm&&(n.block=U.gfm,this.options.breaks?n.inline=J.breaks:n.inline=J.gfm),this.tokenizer.rules=n}static get rules(){return{block:U,inline:J}}static lex(e,t){return new re(t).lex(e)}static lexInline(e,t){return new re(t).inlineTokens(e)}lex(e){e=e.replace(i.carriageReturn,"\n"),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){const t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){for(this.options.pedantic&&(e=e.replace(i.tabCharGlobal,"    ").replace(i.spaceLine,""));e;){let s;if(this.options.extensions?.block?.some((n=>!!(s=n.call({lexer:this},e,t))&&(e=e.substring(s.raw.length),t.push(s),!0))))continue;if(s=this.tokenizer.space(e)){e=e.substring(s.raw.length);const n=t.at(-1);1===s.raw.length&&void 0!==n?n.raw+="\n":t.push(s);continue}if(s=this.tokenizer.code(e)){e=e.substring(s.raw.length);const n=t.at(-1);"paragraph"===n?.type||"text"===n?.type?(n.raw+="\n"+s.raw,n.text+="\n"+s.text,this.inlineQueue.at(-1).src=n.text):t.push(s);continue}if(s=this.tokenizer.fences(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.heading(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.hr(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.blockquote(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.list(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.html(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.def(e)){e=e.substring(s.raw.length);const n=t.at(-1);"paragraph"===n?.type||"text"===n?.type?(n.raw+="\n"+s.raw,n.text+="\n"+s.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[s.tag]||(this.tokens.links[s.tag]={href:s.href,title:s.title});continue}if(s=this.tokenizer.table(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.lheading(e)){e=e.substring(s.raw.length),t.push(s);continue}let r=e;if(this.options.extensions?.startBlock){let t=1/0;const n=e.slice(1);let s;this.options.extensions.startBlock.forEach((e=>{s=e.call({lexer:this},n),"number"==typeof s&&s>=0&&(t=Math.min(t,s))})),t<1/0&&t>=0&&(r=e.substring(0,t+1))}if(this.state.top&&(s=this.tokenizer.paragraph(r))){const i=t.at(-1);n&&"paragraph"===i?.type?(i.raw+="\n"+s.raw,i.text+="\n"+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=i.text):t.push(s),n=r.length!==e.length,e=e.substring(s.raw.length)}else if(s=this.tokenizer.text(e)){e=e.substring(s.raw.length);const n=t.at(-1);"text"===n?.type?(n.raw+="\n"+s.raw,n.text+="\n"+s.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(s)}else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n=e,s=null;if(this.tokens.links){const e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(s=this.tokenizer.rules.inline.reflinkSearch.exec(n));)e.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(n=n.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(s=this.tokenizer.rules.inline.blockSkip.exec(n));)n=n.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+n.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(s=this.tokenizer.rules.inline.anyPunctuation.exec(n));)n=n.slice(0,s.index)+"++"+n.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);let r=!1,i="";for(;e;){let s;if(r||(i=""),r=!1,this.options.extensions?.inline?.some((n=>!!(s=n.call({lexer:this},e,t))&&(e=e.substring(s.raw.length),t.push(s),!0))))continue;if(s=this.tokenizer.escape(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.tag(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.link(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(s.raw.length);const n=t.at(-1);"text"===s.type&&"text"===n?.type?(n.raw+=s.raw,n.text+=s.text):t.push(s);continue}if(s=this.tokenizer.emStrong(e,n,i)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.codespan(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.br(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.del(e)){e=e.substring(s.raw.length),t.push(s);continue}if(s=this.tokenizer.autolink(e)){e=e.substring(s.raw.length),t.push(s);continue}if(!this.state.inLink&&(s=this.tokenizer.url(e))){e=e.substring(s.raw.length),t.push(s);continue}let l=e;if(this.options.extensions?.startInline){let t=1/0;const n=e.slice(1);let s;this.options.extensions.startInline.forEach((e=>{s=e.call({lexer:this},n),"number"==typeof s&&s>=0&&(t=Math.min(t,s))})),t<1/0&&t>=0&&(l=e.substring(0,t+1))}if(s=this.tokenizer.inlineText(l)){e=e.substring(s.raw.length),"_"!==s.raw.slice(-1)&&(i=s.raw.slice(-1)),r=!0;const n=t.at(-1);"text"===n?.type?(n.raw+=s.raw,n.text+=s.text):t.push(s)}else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}return t}}class ie{options;parser;constructor(t){this.options=t||e.defaults}space(e){return""}code({text:e,lang:t,escaped:n}){const s=(t||"").match(i.notSpaceStart)?.[0],r=e.replace(i.endingNewline,"")+"\n";return s?'<pre><code class="language-'+W(s)+'">'+(n?r:W(r,!0))+"</code></pre>\n":"<pre><code>"+(n?r:W(r,!0))+"</code></pre>\n"}blockquote({tokens:e}){return`<blockquote>\n${this.parser.parse(e)}</blockquote>\n`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>\n`}hr(e){return"<hr>\n"}list(e){const t=e.ordered,n=e.start;let s="";for(let t=0;t<e.items.length;t++){const n=e.items[t];s+=this.listitem(n)}const r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+s+"</"+r+">\n"}listitem(e){let t="";if(e.task){const n=this.checkbox({checked:!!e.checked});e.loose?"paragraph"===e.tokens[0]?.type?(e.tokens[0].text=n+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&"text"===e.tokens[0].tokens[0].type&&(e.tokens[0].tokens[0].text=n+" "+W(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:n+" ",text:n+" ",escaped:!0}):t+=n+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>\n`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>\n`}table(e){let t="",n="";for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let s="";for(let t=0;t<e.rows.length;t++){const r=e.rows[t];n="";for(let e=0;e<r.length;e++)n+=this.tablecell(r[e]);s+=this.tablerow({text:n})}return s&&(s=`<tbody>${s}</tbody>`),"<table>\n<thead>\n"+t+"</thead>\n"+s+"</table>\n"}tablerow({text:e}){return`<tr>\n${e}</tr>\n`}tablecell(e){const t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>\n`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${W(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){const s=this.parser.parseInline(n),r=Y(e);if(null===r)return s;let i='<a href="'+(e=r)+'"';return t&&(i+=' title="'+W(t)+'"'),i+=">"+s+"</a>",i}image({href:e,title:t,text:n}){const s=Y(e);if(null===s)return W(n);let r=`<img src="${e=s}" alt="${n}"`;return t&&(r+=` title="${W(t)}"`),r+=">",r}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:W(e.text)}}class le{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}}class oe{options;renderer;textRenderer;constructor(t){this.options=t||e.defaults,this.options.renderer=this.options.renderer||new ie,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new le}static parse(e,t){return new oe(t).parse(e)}static parseInline(e,t){return new oe(t).parseInline(e)}parse(e,t=!0){let n="";for(let s=0;s<e.length;s++){const r=e[s];if(this.options.extensions?.renderers?.[r.type]){const e=r,t=this.options.extensions.renderers[e.type].call({parser:this},e);if(!1!==t||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(e.type)){n+=t||"";continue}}const i=r;switch(i.type){case"space":n+=this.renderer.space(i);continue;case"hr":n+=this.renderer.hr(i);continue;case"heading":n+=this.renderer.heading(i);continue;case"code":n+=this.renderer.code(i);continue;case"table":n+=this.renderer.table(i);continue;case"blockquote":n+=this.renderer.blockquote(i);continue;case"list":n+=this.renderer.list(i);continue;case"html":n+=this.renderer.html(i);continue;case"paragraph":n+=this.renderer.paragraph(i);continue;case"text":{let r=i,l=this.renderer.text(r);for(;s+1<e.length&&"text"===e[s+1].type;)r=e[++s],l+="\n"+this.renderer.text(r);n+=t?this.renderer.paragraph({type:"paragraph",raw:l,text:l,tokens:[{type:"text",raw:l,text:l,escaped:!0}]}):l;continue}default:{const e='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(e),"";throw new Error(e)}}}return n}parseInline(e,t=this.renderer){let n="";for(let s=0;s<e.length;s++){const r=e[s];if(this.options.extensions?.renderers?.[r.type]){const e=this.options.extensions.renderers[r.type].call({parser:this},r);if(!1!==e||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(r.type)){n+=e||"";continue}}const i=r;switch(i.type){case"escape":case"text":n+=t.text(i);break;case"html":n+=t.html(i);break;case"link":n+=t.link(i);break;case"image":n+=t.image(i);break;case"strong":n+=t.strong(i);break;case"em":n+=t.em(i);break;case"codespan":n+=t.codespan(i);break;case"br":n+=t.br(i);break;case"del":n+=t.del(i);break;default:{const e='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(e),"";throw new Error(e)}}}return n}}class ae{options;block;constructor(t){this.options=t||e.defaults}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?re.lex:re.lexInline}provideParser(){return this.block?oe.parse:oe.parseInline}}class ce{defaults={async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null};options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=oe;Renderer=ie;TextRenderer=le;Lexer=re;Tokenizer=se;Hooks=ae;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(const s of e)switch(n=n.concat(t.call(this,s)),s.type){case"table":{const e=s;for(const s of e.header)n=n.concat(this.walkTokens(s.tokens,t));for(const s of e.rows)for(const e of s)n=n.concat(this.walkTokens(e.tokens,t));break}case"list":{const e=s;n=n.concat(this.walkTokens(e.items,t));break}default:{const e=s;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach((s=>{const r=e[s].flat(1/0);n=n.concat(this.walkTokens(r,t))})):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach((e=>{const n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach((e=>{if(!e.name)throw new Error("extension name required");if("renderer"in e){const n=t.renderers[e.name];t.renderers[e.name]=n?function(...t){let s=e.renderer.apply(this,t);return!1===s&&(s=n.apply(this,t)),s}:e.renderer}if("tokenizer"in e){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw new Error("extension level must be 'block' or 'inline'");const n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&("block"===e.level?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:"inline"===e.level&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}"childTokens"in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)})),n.extensions=t),e.renderer){const t=this.defaults.renderer||new ie(this.defaults);for(const n in e.renderer){if(!(n in t))throw new Error(`renderer '${n}' does not exist`);if(["options","parser"].includes(n))continue;const s=n,r=e.renderer[s],i=t[s];t[s]=(...e)=>{let n=r.apply(t,e);return!1===n&&(n=i.apply(t,e)),n||""}}n.renderer=t}if(e.tokenizer){const t=this.defaults.tokenizer||new se(this.defaults);for(const n in e.tokenizer){if(!(n in t))throw new Error(`tokenizer '${n}' does not exist`);if(["options","rules","lexer"].includes(n))continue;const s=n,r=e.tokenizer[s],i=t[s];t[s]=(...e)=>{let n=r.apply(t,e);return!1===n&&(n=i.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){const t=this.defaults.hooks||new ae;for(const n in e.hooks){if(!(n in t))throw new Error(`hook '${n}' does not exist`);if(["options","block"].includes(n))continue;const s=n,r=e.hooks[s],i=t[s];ae.passThroughHooks.has(n)?t[s]=e=>{if(this.defaults.async)return Promise.resolve(r.call(t,e)).then((e=>i.call(t,e)));const n=r.call(t,e);return i.call(t,n)}:t[s]=(...e)=>{let n=r.apply(t,e);return!1===n&&(n=i.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){const t=this.defaults.walkTokens,s=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(s.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}})),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return re.lex(e,t??this.defaults)}parser(e,t){return oe.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{const s={...n},r={...this.defaults,...s},i=this.onError(!!r.silent,!!r.async);if(!0===this.defaults.async&&!1===s.async)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(null==t)return i(new Error("marked(): input parameter is undefined or null"));if("string"!=typeof t)return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));r.hooks&&(r.hooks.options=r,r.hooks.block=e);const l=r.hooks?r.hooks.provideLexer():e?re.lex:re.lexInline,o=r.hooks?r.hooks.provideParser():e?oe.parse:oe.parseInline;if(r.async)return Promise.resolve(r.hooks?r.hooks.preprocess(t):t).then((e=>l(e,r))).then((e=>r.hooks?r.hooks.processAllTokens(e):e)).then((e=>r.walkTokens?Promise.all(this.walkTokens(e,r.walkTokens)).then((()=>e)):e)).then((e=>o(e,r))).then((e=>r.hooks?r.hooks.postprocess(e):e)).catch(i);try{r.hooks&&(t=r.hooks.preprocess(t));let e=l(t,r);r.hooks&&(e=r.hooks.processAllTokens(e)),r.walkTokens&&this.walkTokens(e,r.walkTokens);let n=o(e,r);return r.hooks&&(n=r.hooks.postprocess(n)),n}catch(e){return i(e)}}}onError(e,t){return n=>{if(n.message+="\nPlease report this to https://github.com/markedjs/marked.",e){const e="<p>An error occurred:</p><pre>"+W(n.message+"",!0)+"</pre>";return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}}const he=new ce;function pe(e,t){return he.parse(e,t)}pe.options=pe.setOptions=function(e){return he.setOptions(e),pe.defaults=he.defaults,n(pe.defaults),pe},pe.getDefaults=t,pe.defaults=e.defaults,pe.use=function(...e){return he.use(...e),pe.defaults=he.defaults,n(pe.defaults),pe},pe.walkTokens=function(e,t){return he.walkTokens(e,t)},pe.parseInline=he.parseInline,pe.Parser=oe,pe.parser=oe.parse,pe.Renderer=ie,pe.TextRenderer=le,pe.Lexer=re,pe.lexer=re.lex,pe.Tokenizer=se,pe.Hooks=ae,pe.parse=pe;const ue=pe.options,ge=pe.setOptions,ke=pe.use,de=pe.walkTokens,fe=pe.parseInline,xe=pe,be=oe.parse,we=re.lex;e.Hooks=ae,e.Lexer=re,e.Marked=ce,e.Parser=oe,e.Renderer=ie,e.TextRenderer=le,e.Tokenizer=se,e.getDefaults=t,e.lexer=we,e.marked=pe,e.options=ue,e.parse=xe,e.parseInline=fe,e.parser=be,e.setOptions=ge,e.use=ke,e.walkTokens=de}));

      return module.exports;
    })();

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

  },
});
