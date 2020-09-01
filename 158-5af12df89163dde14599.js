(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{1080:function(e,t,n){e.exports={"content-wrapper":"ExampleTemplate__content-wrapper___4Jde5"}},1571:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),a=c(n(292)),o=c(n(198)),l=c(n(994));function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement(l.default,null,r.default.createElement(o.default,{start:r.default.createElement(a.default,{href:"#"},"Start Action")}))}},1572:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),a=c(n(53)),o=c(n(198)),l=c(n(994));function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement(l.default,null,r.default.createElement(o.default,{end:r.default.createElement(a.default,{text:"End Action"})}))}},1573:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(n(0)),a=p(n(53)),o=p(n(292)),l=p(n(293)),c=p(n(198)),i=p(n(994));function p(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement(i.default,null,r.default.createElement(c.default,{start:r.default.createElement(o.default,{href:"#"},"Start Action"),end:r.default.createElement(r.default.Fragment,null,r.default.createElement(l.default,{isInlineBlock:!0,marginRight:"medium"},r.default.createElement(a.default,{text:"Submit",variant:a.default.Opts.Variants.EMPHASIS})),r.default.createElement(a.default,{text:"Cancel"}))}))}},2972:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return L}));var r=n(0),a=n.n(r),o=n(288),l=n(993),c=n(1571),i=n.n(c);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m={};function d(e){var t=e.components,n=u(e,["components"]);return Object(o.mdx)("wrapper",p({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",p({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Hyperlink from 'terra-hyperlink';\nimport ActionFooter from 'terra-action-footer';\nimport ExampleTemplate from '../../common/ExampleTemplate';\n\nexport default () => (\n  <ExampleTemplate>\n    <ActionFooter\n      start={<Hyperlink href=\"#\">Start Action</Hyperlink>}\n    />\n  </ExampleTemplate>\n);\n\n")))}d.isMDXComponent=!0;var s=n(866),f=n.n(s),b=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Single Start Action",description:n,example:a.a.createElement(i.a,null),exampleSrc:a.a.createElement(d,null),isExpanded:r})},x=n(1572),O=n.n(x);function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var v={};function g(e){var t=e.components,n=y(e,["components"]);return Object(o.mdx)("wrapper",j({},v,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",j({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Button from 'terra-button';\nimport ActionFooter from 'terra-action-footer';\nimport ExampleTemplate from '../../common/ExampleTemplate';\n\nexport default () => (\n  <ExampleTemplate>\n    <ActionFooter\n      end={<Button text=\"End Action\" />}\n    />\n  </ExampleTemplate>\n);\n\n")))}g.isMDXComponent=!0;var h=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Single End Action",description:n,example:a.a.createElement(O.a,null),exampleSrc:a.a.createElement(g,null),isExpanded:r})},E=n(1573),w=n.n(E);function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var T={};function A(e){var t=e.components,n=N(e,["components"]);return Object(o.mdx)("wrapper",S({},T,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",S({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Button from 'terra-button';\nimport Hyperlink from 'terra-hyperlink';\nimport Spacer from 'terra-spacer';\nimport ActionFooter from 'terra-action-footer';\nimport ExampleTemplate from '../../common/ExampleTemplate';\n\nexport default () => (\n  <ExampleTemplate>\n    <ActionFooter\n      start={<Hyperlink href=\"#\">Start Action</Hyperlink>}\n      end={(\n        <React.Fragment>\n          <Spacer isInlineBlock marginRight=\"medium\">\n            <Button text=\"Submit\" variant={Button.Opts.Variants.EMPHASIS} />\n          </Spacer>\n          <Button text=\"Cancel\" />\n        </React.Fragment>\n      )}\n    />\n  </ExampleTemplate>\n);\n\n")))}A.isMDXComponent=!0;var M=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Multiple Start End Actions",description:n,example:a.a.createElement(w.a,null),exampleSrc:a.a.createElement(A,null),isExpanded:r})},P=n(869),k=n.n(P);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var F=function(){return Object(o.mdx)(k.a,{rows:[{name:"start",type:function(){var e={};function t(t){var n=t.components,r=D(t,["components"]);return Object(o.mdx)("wrapper",_({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=D(t,["components"]);return Object(o.mdx)("wrapper",_({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Actions to be displayed in the start socket"))}return t.isMDXComponent=!0,t({})}},{name:"end",type:function(){var e={};function t(t){var n=t.components,r=D(t,["components"]);return Object(o.mdx)("wrapper",_({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=D(t,["components"]);return Object(o.mdx)("wrapper",_({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Actions to be displayed in the end socket"))}return t.isMDXComponent=!0,t({})}}]})};function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var B={};function L(e){var t=e.components,n=X(e,["components"]);return Object(o.mdx)("wrapper",C({},B,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(l.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-action-footer"},"Terra Action Footer"),Object(o.mdx)("p",null,"The ",Object(o.mdx)("inlineCode",{parentName:"p"},"terra-action-footer")," component is a footer bar that contains two sockets, start and end, for placing actionable items such as buttons and hyperlinks. If no actions are provided, the footer bar collapses to a themeable height and maintains the top border."),Object(o.mdx)("p",null,"Terra provides a Standard, Centered, and Block-style variations for Action Footer:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",C({parentName:"li"},{href:"#usage"}),"Standard Action Footer")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",C({parentName:"li"},{href:"/terra-core/components/terra-action-footer/action-footer/centered"}),"Centered Action Footer")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",C({parentName:"li"},{href:"/terra-core/components/terra-action-footer/action-footer/block/"}),"Block Action Footer"))),Object(o.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Install with ",Object(o.mdx)("a",C({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"npm install terra-action-footer"))))),Object(o.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(o.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(o.mdx)("table",null,Object(o.mdx)("thead",{parentName:"table"},Object(o.mdx)("tr",{parentName:"thead"},Object(o.mdx)("th",C({parentName:"tr"},{align:null}),"Peer Dependency"),Object(o.mdx)("th",C({parentName:"tr"},{align:null}),"Version"))),Object(o.mdx)("tbody",{parentName:"table"},Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",C({parentName:"tr"},{align:null}),"react"),Object(o.mdx)("td",C({parentName:"tr"},{align:null}),"^16.8.5")),Object(o.mdx)("tr",{parentName:"tbody"},Object(o.mdx)("td",C({parentName:"tr"},{align:null}),"react-dom"),Object(o.mdx)("td",C({parentName:"tr"},{align:null}),"^16.8.5")))),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",C({parentName:"pre"},{className:"language-jsx"}),"import ActionFooter from 'terra-action-footer';\n")),Object(o.mdx)("h2",{id:"component-features"},"Component Features"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",C({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",C({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",C({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",C({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#ltr--rtl-support"}),"LTR/RTL Support"))),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)(b,{title:"Single Start Action",mdxType:"SingleStartActionExample"}),Object(o.mdx)(h,{title:"Single End Action",mdxType:"SingleEndActionExample"}),Object(o.mdx)(M,{title:"Multiple Start and End Actions",mdxType:"MultipleStartEndActionsExample"}),Object(o.mdx)("h2",{id:"standard-action-footer-props"},"Standard Action Footer Props"),Object(o.mdx)(F,{mdxType:"ActionFooterPropsTable"}))}L.isMDXComponent=!0},870:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(21));function o(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=function(e){var t=l({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};c.displayName="IconChevronLeft",c.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var i=c;t.default=i},993:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),a=n.n(r),o=n(867),l=n.n(o),c=function(e){var t=e.url;return a.a.createElement(l.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-action-footer",name:"terra-action-footer",version:"2.52.0",url:t})}},994:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),a=c(n(5)),o=c(n(3)),l=c(n(1080));function c(e){return e&&e.__esModule?e:{default:e}}var i=a.default.bind(l.default),p={children:o.default.node.isRequired},u=function(e){var t=e.children;return r.default.createElement("div",{className:i("content-wrapper")},t)};u.propTypes=p;var m=u;t.default=m}}]);
//# sourceMappingURL=158-5af12df89163dde14599.js.map