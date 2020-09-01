(window.webpackJsonp=window.webpackJsonp||[]).push([[468],{2130:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=(o=n(0))&&o.__esModule?o:{default:o},i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(82));function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}var u=function(){return a.default.createElement(i.default,null,a.default.createElement(i.SubsectionHeader,{title:"Default SubsectionHeader",key:"default"}))};t.default=u},3e3:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var r=n(0),o=n.n(r),a=n(288),i=n(901),c=n(2130),u=n.n(c);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p={};function d(e){var t=e.components,n=s(e,["components"]);return Object(a.mdx)("wrapper",l({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",l({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport List, { SubsectionHeader } from 'terra-list/lib/index';\n\nconst ListSubsectionHeaderExample = () => (\n  <List>\n    <SubsectionHeader title=\"Default SubsectionHeader\" key=\"default\" />\n  </List>\n);\n\nexport default ListSubsectionHeaderExample;\n\n")))}d.isMDXComponent=!0;var m=n(866),f=n.n(m),b=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(f.a,{title:t||"List Subsection Header",description:n,example:o.a.createElement(u.a,null),exampleSrc:o.a.createElement(d,null),isExpanded:r})},y=n(869),O=n.n(y);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var j=function(){return Object(a.mdx)(O.a,{rows:[{name:"level",type:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"enum"),Object(a.mdx)("pre",null,Object(a.mdx)("code",v({parentName:"pre"},{className:"language-json"}),'[\n "2",\n "3",\n "4",\n "5",\n "6"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"2",description:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Optionally sets the heading level. One of ",Object(a.mdx)("inlineCode",{parentName:"p"},"2"),", ",Object(a.mdx)("inlineCode",{parentName:"p"},"3"),", ",Object(a.mdx)("inlineCode",{parentName:"p"},"4"),", ",Object(a.mdx)("inlineCode",{parentName:"p"},"5"),", ",Object(a.mdx)("inlineCode",{parentName:"p"},"6"),"."))}return t.isMDXComponent=!0,t({})}},{name:"refCallback",type:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Function callback passthrough for the ref of the section li."))}return t.isMDXComponent=!0,t({})}},{name:"title",type:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",v({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Title text to be placed within the subsection header."))}return t.isMDXComponent=!0,t({})}}]})};function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var w={};function S(e){var t=e.components,n=g(e,["components"]);return Object(a.mdx)("wrapper",h({},w,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(i.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"list-subsection-header"},"List Subsection Header"),Object(a.mdx)("p",null,"The list subsection header is a sub-component of the list subsection. It provides the visual representation of the subsection, but does not provided any collapsible functionality itself, it's collapsible props are for the display of the collapse/expand indicator. The subsection header should only be consumed directly when the header is static, as the actual list item collapse is handled by the subsection."),Object(a.mdx)("p",null,"When consumed by itself as an individual list item avoid enabling the collapsible properties."),Object(a.mdx)("h2",{id:"usage"},"Usage"),Object(a.mdx)("pre",null,Object(a.mdx)("code",h({parentName:"pre"},{className:"language-jsx"}),"import List, { SubsectionHeader } from 'terra-list/lib/List';\n")),Object(a.mdx)("h2",{id:"examples"},"Examples"),Object(a.mdx)(b,{mdxType:"ListSubsectionHeaderExample"}),Object(a.mdx)("h2",{id:"list-subsection-header-props"},"List Subsection Header Props"),Object(a.mdx)(j,{mdxType:"ListSubsectionHeaderPropsTable"}))}S.isMDXComponent=!0},870:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(21));function a(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=function(e){var t=i({},e);return r.default.createElement(o.default,t,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};c.displayName="IconChevronLeft",c.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var u=c;t.default=u},901:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),o=n.n(r),a=n(867),i=n.n(a),c=function(e){var t=e.url;return o.a.createElement(i.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-list",name:"terra-list",version:"4.37.0",url:t})}}}]);
//# sourceMappingURL=468-744c31d1e712193fd971.js.map