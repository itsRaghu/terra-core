(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{1073:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),o=c(n(11)),a=c(n(5)),i=c(n(8)),l=c(n(21)),u=c(n(1130));function c(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var s=a.default.bind(u.default),d=function(e){var t=p({},e),n=r.default.useContext(i.default),a=(0,o.default)(s("IconDiamond",n.className),e.className);return r.default.createElement(l.default,p({},t,{className:a}),r.default.createElement("path",{fill:"#78288C",d:"M24.8 47.7l22.9-22.9c.4-.4.4-1.1 0-1.6L24.8.3c-.4-.4-1.1-.4-1.6 0L.3 23.2c-.4.4-.4 1.1 0 1.6l22.9 22.9c.4.4 1.2.4 1.6 0z"}))};d.displayName="IconDiamond",d.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var m=d;t.default=m},1130:function(e,t,n){e.exports={"orion-fusion-theme":"IconDiamond-module__orion-fusion-theme___c2k9K","clinical-lowlight-theme":"IconDiamond-module__clinical-lowlight-theme___aSywY",IconDiamond:"IconDiamond-module__IconDiamond___3CLAn"}},1143:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),o=n.n(r),a=n(867),i=n.n(a),l=function(e){var t=e.url;return o.a.createElement(i.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-status-view",name:"terra-status-view",version:"4.34.0",url:t})}},2194:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(0)),i=(o=n(83))&&o.__esModule?o:{default:o};function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p=function(){var e=u((0,a.useState)("error"),2),t=e[0],n=e[1];return a.default.createElement("div",null,a.default.createElement(i.default,{variant:t}),a.default.createElement("fieldset",null,a.default.createElement("legend",null,"Change Variant"),a.default.createElement("select",{"aria-label":"changeVariant",id:"statusViewVariant",name:"statusViewVariant",value:t,onChange:function(e){n(e.target.value)}},a.default.createElement("option",{value:"error"},"Error"),a.default.createElement("option",{value:"no-data"},"No Data"),a.default.createElement("option",{value:"no-matching-results"},"No Matching Results"),a.default.createElement("option",{value:"not-authorized"},"Not Authorized"))))};t.default=p},2195:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(0)),i=(o=n(83))&&o.__esModule?o:{default:o};function l(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p=function(){var e=u((0,a.useState)(!1),2),t=e[0],n=e[1],r=u((0,a.useState)(!1),2),o=r[0],l=r[1];return a.default.createElement("div",null,a.default.createElement("div",{style:{height:"400px",border:"1px dashed black"}},a.default.createElement(i.default,{variant:"error",isAlignedTop:t,isGlyphHidden:o})),a.default.createElement("fieldset",null,a.default.createElement("legend",null,"Toggle alignment and glyph"),a.default.createElement("div",null,a.default.createElement("input",{id:"isAlignedTop",type:"checkbox",onChange:function(){n(!t)}}),a.default.createElement("label",{htmlFor:"isAlignedTop"},"isAlignedTop")),a.default.createElement("div",null,a.default.createElement("input",{id:"isGlyphHidden",type:"checkbox",onChange:function(){l(!o)}}),a.default.createElement("label",{htmlFor:"isGlyphHidden"},"isGlyphHidden"))))};t.default=p},2196:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),o=i(n(1073)),a=i(n(83));function i(e){return e&&e.__esModule?e:{default:e}}var l=[{text:"Action 1",key:1},{text:"Action 2",key:2}],u=function(){return r.default.createElement(a.default,{message:"Custom Message",customGlyph:r.default.createElement(o.default,null),title:"Custom Title",buttonAttrs:l})};t.default=u},2961:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return L}));var r=n(0),o=n.n(r),a=n(288),i=n(1143),l=n(2194),u=n.n(l);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s={};function d(e){var t=e.components,n=p(e,["components"]);return Object(a.mdx)("wrapper",c({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",c({parentName:"pre"},{className:"language-jsx"}),'import React, { useState } from \'react\';\nimport StatusView from \'terra-status-view\';\n\nconst ToggleVariants = () => {\n  const [variant, setVariant] = useState(\'error\');\n\n  const handleOnSelect = (event) => {\n    setVariant(event.target.value);\n  };\n\n  return (\n    <div>\n      <StatusView variant={variant} />\n      <fieldset>\n        <legend>Change Variant</legend>\n        <select aria-label="changeVariant" id="statusViewVariant" name="statusViewVariant" value={variant} onChange={handleOnSelect}>\n          <option value="error">Error</option>\n          <option value="no-data">No Data</option>\n          <option value="no-matching-results">No Matching Results</option>\n          <option value="not-authorized">Not Authorized</option>\n        </select>\n      </fieldset>\n    </div>\n  );\n};\n\nexport default ToggleVariants;\n\n')))}d.isMDXComponent=!0;var m=n(866),f=n.n(m),b=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(f.a,{title:t||"Toggle Variants",description:n,example:o.a.createElement(u.a,null),exampleSrc:o.a.createElement(d,null),isExpanded:r})},y=n(2195),g=n.n(y);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var h={};function x(e){var t=e.components,n=v(e,["components"]);return Object(a.mdx)("wrapper",O({},h,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",O({parentName:"pre"},{className:"language-jsx"}),'import React, { useState } from \'react\';\nimport StatusView from \'terra-status-view\';\n\nconst ToggleAlignmentAndGlyph = () => {\n  const [isAlignedTop, setIsAlignedTop] = useState(false);\n  const [isGlyphHidden, setIsGlyphHidden] = useState(false);\n\n  const handleOnAlignChange = () => {\n    setIsAlignedTop(!isAlignedTop);\n  };\n\n  const handleOnGlyphChange = () => {\n    setIsGlyphHidden(!isGlyphHidden);\n  };\n\n  /* eslint-disable react/forbid-dom-props */\n  return (\n    <div>\n      <div style={{ height: \'400px\', border: \'1px dashed black\' }}>\n        <StatusView variant="error" isAlignedTop={isAlignedTop} isGlyphHidden={isGlyphHidden} />\n      </div>\n      <fieldset>\n        <legend>Toggle alignment and glyph</legend>\n        <div>\n          <input id="isAlignedTop" type="checkbox" onChange={handleOnAlignChange} />\n          <label htmlFor="isAlignedTop">isAlignedTop</label>\n        </div>\n        <div>\n          <input id="isGlyphHidden" type="checkbox" onChange={handleOnGlyphChange} />\n          <label htmlFor="isGlyphHidden">isGlyphHidden</label>\n        </div>\n      </fieldset>\n    </div>\n  );\n};\n\nexport default ToggleAlignmentAndGlyph;\n\n')))}x.isMDXComponent=!0;var j=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(f.a,{title:t||"Toggle Alignment And Glyph",description:n,example:o.a.createElement(g.a,null),exampleSrc:o.a.createElement(x,null),isExpanded:r})},w=n(2196),S=n.n(w);function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var C={};function T(e){var t=e.components,n=N(e,["components"]);return Object(a.mdx)("wrapper",M({},C,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",M({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport IconDiamond from 'terra-icon/lib/icon/IconDiamond';\nimport StatusView from 'terra-status-view';\n\nconst StatusViewButtons = [\n  {\n    text: 'Action 1',\n    key: 1,\n  }, {\n    text: 'Action 2',\n    key: 2,\n  },\n];\n\nconst Custom = () => (\n  <StatusView\n    message=\"Custom Message\"\n    customGlyph={<IconDiamond />}\n    title=\"Custom Title\"\n    buttonAttrs={StatusViewButtons}\n  />\n);\n\nexport default Custom;\n\n")))}T.isMDXComponent=!0;var D=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(f.a,{title:t||"Custom",description:n,example:o.a.createElement(S.a,null),exampleSrc:o.a.createElement(T,null),isExpanded:r})},E=n(869),A=n.n(E);function V(){return(V=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var _=function(){return Object(a.mdx)(A.a,{rows:[{name:"buttonAttrs",type:function(){var e={};function t(t){var n=t.components,r=P(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"arrayOf"),Object(a.mdx)("pre",null,Object(a.mdx)("code",V({parentName:"pre"},{className:"language-json"}),'{\n "name": "shape",\n "value": "Button.propTypes",\n "computed": true\n}\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"[]",description:function(){var e={};function t(t){var n=t.components,r=P(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"An array of objects containing terra-button properties. A key attribute is required for each object.\nThis array is used to render buttons in the bottom section.\nExample:",Object(a.mdx)("inlineCode",{parentName:"p"},"[{ text: 'Button 1', key: 1, variant: 'neutral', onClick: onClickFunction}]")))}return t.isMDXComponent=!0,t({})}},{name:"customGlyph",type:function(){var e={};function t(t){var n=t.components,r=P(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=P(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Display a custom glyph. Overrides a variant's default glyph."))}return t.isMDXComponent=!0,t({})}},{name:"isAlignedTop",type:function(){var e={};function t(t){var n=t.components,r=P(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=P(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,'Aligns the component at the top of the container rather than "centered"'))}return t.isMDXComponent=!0,t({})}},{name:"isGlyphHidden",type:function(){var e={};function t(t){var n=t.components,r=P(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=P(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Determines if the glyph should be displayed."))}return t.isMDXComponent=!0,t({})}},{name:"message",type:function(){var e={};function t(t){var n=t.components,r=P(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=P(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The descriptive text, displayed under the title."))}return t.isMDXComponent=!0,t({})}},{name:"title",type:function(){var e={};function t(t){var n=t.components,r=P(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=P(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The title displayed under the glyph. Variants contain default titles that can be overriden by this prop."))}return t.isMDXComponent=!0,t({})}},{name:"variant",type:function(){var e={};function t(t){var n=t.components,r=P(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"enum"),Object(a.mdx)("pre",null,Object(a.mdx)("code",V({parentName:"pre"},{className:"language-json"}),'[\n "no-data",\n "no-matching-results",\n "not-authorized",\n "error"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=P(t,["components"]);return Object(a.mdx)("wrapper",V({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Sets the glyph and title using a pre-baked variant. One of the following: ",Object(a.mdx)("inlineCode",{parentName:"p"},"no-data"),",\n",Object(a.mdx)("inlineCode",{parentName:"p"},"no-matching-results"),", ",Object(a.mdx)("inlineCode",{parentName:"p"},"not-authorized"),", or ",Object(a.mdx)("inlineCode",{parentName:"p"},"error")))}return t.isMDXComponent=!0,t({})}}]})};function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var k={};function L(e){var t=e.components,n=I(e,["components"]);return Object(a.mdx)("wrapper",X({},k,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(i.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"terra-status-view"},"Terra Status View"),Object(a.mdx)("p",null,"debugger;\nPresents an icon, title, message, and/or buttons based on a status type scenario. Scenarios include ",Object(a.mdx)("inlineCode",{parentName:"p"},"no-data"),", ",Object(a.mdx)("inlineCode",{parentName:"p"},"no-matching-results"),", ",Object(a.mdx)("inlineCode",{parentName:"p"},"not-authorized"),", ",Object(a.mdx)("inlineCode",{parentName:"p"},"error"),", or a custom scenario."),Object(a.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Install with ",Object(a.mdx)("a",X({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(a.mdx)("ul",{parentName:"li"},Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"npm install terra-status-view"))))),Object(a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(a.mdx)("table",null,Object(a.mdx)("thead",{parentName:"table"},Object(a.mdx)("tr",{parentName:"thead"},Object(a.mdx)("th",X({parentName:"tr"},{align:null}),"Peer Dependency"),Object(a.mdx)("th",X({parentName:"tr"},{align:null}),"Version"))),Object(a.mdx)("tbody",{parentName:"table"},Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",X({parentName:"tr"},{align:null}),"react"),Object(a.mdx)("td",X({parentName:"tr"},{align:null}),"^16.8.5")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",X({parentName:"tr"},{align:null}),"react-dom"),Object(a.mdx)("td",X({parentName:"tr"},{align:null}),"^16.8.5")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",X({parentName:"tr"},{align:null}),"react-intl"),Object(a.mdx)("td",X({parentName:"tr"},{align:null}),"^2.8.0")))),Object(a.mdx)("h2",{id:"usage"},"Usage"),Object(a.mdx)("pre",null,Object(a.mdx)("code",X({parentName:"pre"},{className:"language-jsx"}),"import StatusView from 'terra-status-view';\n")),Object(a.mdx)("h2",{id:"implementation-notes"},"Implementation Notes:"),Object(a.mdx)("p",null,"The Status-View component must be composed inside the ",Object(a.mdx)("a",X({parentName:"p"},{href:"https://engineering.cerner.com/terra-core/components/terra-base/base/base"}),"Base")," component with a locale in order for it to load the correct translation strings."),Object(a.mdx)("h2",{id:"component-features"},"Component Features"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",X({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",X({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",X({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support"))),Object(a.mdx)("h2",{id:"examples"},"Examples"),Object(a.mdx)(b,{title:"Variants",mdxType:"ToggleVariants"}),Object(a.mdx)(D,{title:"Custom: Icon + message + buttons",mdxType:"Custom"}),Object(a.mdx)(j,{mdxType:"ToggleAlignmentAndGlyph"}),Object(a.mdx)("h2",{id:"status-view-props"},"Status View Props"),Object(a.mdx)(_,{mdxType:"StatusViewPropsTable"}))}L.isMDXComponent=!0},870:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(21));function a(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=function(e){var t=i({},e);return r.default.createElement(o.default,t,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};l.displayName="IconChevronLeft",l.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var u=l;t.default=u}}]);
//# sourceMappingURL=164-37b3e93544992da704f1.js.map