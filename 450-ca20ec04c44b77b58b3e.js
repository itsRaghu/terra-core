(window.webpackJsonp=window.webpackJsonp||[]).push([[450],{2362:function(e,t,n){"use strict";n.r(t),t.default="### css\n```css\n@font-face {\n  font-family: Chunkfive; src: url('Chunkfive.otf');\n}\n\nbody, .usertext {\n  color: #F0F0F0; background: #600;\n  font-family: Chunkfive, sans;\n}\n\n@import url(print.css);\n@media print {\n  a[href^=http]::after {\n    content: attr(href)\n  }\n}\n```"},2756:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),a=c(n(896)),o=c(n(2362));function c(e){return e&&e.__esModule?e:{default:e}}var l=function(){return r.default.createElement(a.default,{src:o.default})};t.default=l},896:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),a=i(n(3)),o=i(n(5)),c=i(n(985)),l=i(n(986));n(987),n(988),n(989);var u=i(n(913));function i(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=o.default.bind(u.default),b=Object.keys(l.default.languages).filter((function(e){return!["extend","insertBefore","DFS"].includes(e)}));c.default.setOptions({headerIds:!1,highlight:function(e,t){return b.includes(t)?l.default.highlight(e,l.default.languages[t],t):null},langPrefix:"codeblock language-"});var g=new c.default.Renderer;g.heading=function(e,t){var n=e.toLowerCase().replace(/[^\w]+/g,"-");return"<h".concat(t,">")+'<a name="'.concat(n,'" class="anchor" aria-hidden="true" href="#').concat(n,'">')+'<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="is-bidi octicon octicon-link"><path d="M10.5 26.3a16 16 0 0 1 .9-5.3L8 17.6a6.73 6.73 0 0 1-2-4.8A6.41 6.41 0 0 1 8 8a6.76 6.76 0 0 1 9.6 0l9 9a6.88 6.88 0 0 1 0 9.6 6.27 6.27 0 0 1-3.4 1.8 2.65 2.65 0 0 0 .5.6l4.1 4.1a11.36 11.36 0 0 0 3.1-2.3 12.8 12.8 0 0 0 0-18.1l-9-9a12.63 12.63 0 0 0-9-3.7 12.63 12.63 0 0 0-9 3.7A12.1 12.1 0 0 0 0 12.8a12.63 12.63 0 0 0 3.7 9l7 7a21.05 21.05 0 0 1-.2-2.5zm27-4.6a16 16 0 0 1-.9 5.3l3.4 3.4a6.79 6.79 0 1 1-9.6 9.6l-9-9a6.88 6.88 0 0 1 0-9.6 6.27 6.27 0 0 1 3.4-1.8 2.65 2.65 0 0 0-.5-.6l-4-4a11.36 11.36 0 0 0-3.1 2.3 12.8 12.8 0 0 0 0 18.1l9 9a12.73 12.73 0 0 0 18-18l-7-7a8 8 0 0 1 .3 2.3z"/></svg></a>'+"".concat(e)+"</h".concat(t,">")};var h={src:a.default.string,baseUrl:a.default.string,hasHeadingAnchors:a.default.bool},v=function(e){return r.default.createElement("div",{dir:"ltr",className:p(["markdown"]),dangerouslySetInnerHTML:{__html:(0,c.default)(e.src,f(f({},e.baseUrl&&{baseUrl:e.baseUrl}),e.hasHeadingAnchors&&{renderer:g}))}})};v.propTypes=h,v.defaultProps={src:""};var w=v;t.default=w},913:function(e,t,n){e.exports={markdown:"Markdown__markdown___3KTyB"}}}]);
//# sourceMappingURL=450-ca20ec04c44b77b58b3e.js.map