(window.webpackJsonp=window.webpackJsonp||[]).push([[273],{2252:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(l(0)),a=o(l(886)),r=o(l(926));function o(e){return e&&e.__esModule?e:{default:e}}var c=function(){return n.default.createElement(a.default,{summaryId:"example-scalar-table",summary:"This table shows an implementation of scalar width table columns.",numberOfColumns:4,cellPaddingStyle:"standard",columnWidths:[{scalar:2},{scalar:1},{scalar:3},{scalar:4}],dividerStyle:"horizontal",headerData:{cells:[{key:"cell-0",id:"unique-cell-0",children:"Scalar 2"},{key:"cell-1",id:"unique-cell-1",children:"Scalar 1"},{key:"cell-2",id:"unique-cell-2",children:"Scalar 3"},{key:"cell-3",id:"unique-cell-3",children:"Scalar 4"}]},bodyData:[{rows:(e=r.default,e.map((function(e){return{key:(t=e).key,cells:(l=t.cells,l.map((function(e){return function(e){return{key:e.key,children:e.title}}(e)})))};var t,l})))}]});var e};t.default=c},3003:function(e,t,l){"use strict";l.r(t),l.d(t,"default",(function(){return _}));var n=l(0),a=l.n(n),r=l(288),o=l(2252),c=l.n(o);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var d={};function s(e){var t=e.components,l=i(e,["components"]);return Object(r.mdx)("wrapper",u({},d,l,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("pre",null,Object(r.mdx)("code",u({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Table from 'terra-table';\nimport mockData from './mock-data/mock-select';\n\nconst createCell = cell => ({ key: cell.key, children: cell.title });\n\nconst createCellsForRow = cells => cells.map(cell => createCell(cell));\n\nconst createRow = rowData => (\n  {\n    key: rowData.key,\n    cells: createCellsForRow(rowData.cells),\n  }\n);\n\nconst createRows = data => data.map(childItem => createRow(childItem));\n\nconst ScalarWidthTable = () => (\n  <Table\n    summaryId=\"example-scalar-table\"\n    summary=\"This table shows an implementation of scalar width table columns.\"\n    numberOfColumns={4}\n    cellPaddingStyle=\"standard\"\n    columnWidths={[\n      { scalar: 2 },\n      { scalar: 1 },\n      { scalar: 3 },\n      { scalar: 4 },\n    ]}\n    dividerStyle=\"horizontal\"\n    headerData={{\n      cells: [\n        { key: 'cell-0', id: 'unique-cell-0', children: 'Scalar 2' },\n        { key: 'cell-1', id: 'unique-cell-1', children: 'Scalar 1' },\n        { key: 'cell-2', id: 'unique-cell-2', children: 'Scalar 3' },\n        { key: 'cell-3', id: 'unique-cell-3', children: 'Scalar 4' },\n      ],\n    }}\n    bodyData={[{\n      rows: createRows(mockData),\n    }]}\n  />\n);\n\nexport default ScalarWidthTable;\n\n")))}s.isMDXComponent=!0;var m=l(866),p=l.n(m),f=function(e){var t=e.title,l=e.description,n=e.isExpanded;return a.a.createElement(p.a,{title:t||"Scalar Width Table",description:l,example:a.a.createElement(c.a,null),exampleSrc:a.a.createElement(s,null),isExpanded:n})};function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var h={};function _(e){var t=e.components,l=b(e,["components"]);return Object(r.mdx)("wrapper",y({},h,l,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h1",{id:"terra-table---scalar-width-columns"},"Terra Table - Scalar Width Columns"),Object(r.mdx)("h2",{id:"create-row-and-cell-generation-functions"},"Create Row and Cell Generation Functions"),Object(r.mdx)("p",null,"First we declare our method of creating our rows."),Object(r.mdx)("pre",null,Object(r.mdx)("code",y({parentName:"pre"},{className:"language-diff"}),"+ const createRow = rowData => (\n+   {\n+     key: rowData.key,\n+     cells: createCellsForRow(rowData.cells),\n+   }\n+ );\n\n+ const createRows = data => data.map(childItem => createRow(childItem));\n")),Object(r.mdx)("p",null,"Followed by unpacking our cell data into those rows."),Object(r.mdx)("pre",null,Object(r.mdx)("code",y({parentName:"pre"},{className:"language-diff"}),"+ const createCell = cell => ({ key: cell.key, children: cell.title });\n\n+ const createCellsForRow = cells => cells.map(cell => createCell(cell));\n")),Object(r.mdx)("p",null,"And then we define the functional component returning our table."),Object(r.mdx)("pre",null,Object(r.mdx)("code",y({parentName:"pre"},{className:"language-diff"}),"+ const ScalarWidthTable = () => (\n+   <Table\n+     summaryId=\"example-scalar-table\"\n+     summary=\"This table shows an implementation of scalar width table columns.\"\n+     numberOfColumns={4}\n+     cellPaddingStyle=\"standard\"\n+     headerData={{\n+       cells: [\n+         { key: 'cell-0', id: `unique-cell-0`, children: 'Scalar 2' },\n+         { key: 'cell-1', id: `unique-cell-1`, children: 'Scalar 1' },\n+         { key: 'cell-2', id: `unique-cell-2`, children: 'Scalar 3' },\n+         { key: 'cell-3', id: `unique-cell-3`, children: 'Scalar 4' },\n+       ],\n+     }}\n+     bodyData={[{\n+       rows: createRows(mockData),\n+     }]}\n+   />\n+ );\n")),Object(r.mdx)("p",null,"Then in order to adjust our columns, we set the ",Object(r.mdx)("inlineCode",{parentName:"p"},"columnWidths")," prop with your appropriate index based width values."),Object(r.mdx)("pre",null,Object(r.mdx)("code",y({parentName:"pre"},{className:"language-diff"}),"const ScalarWidthTable = () => (\n  <Table\n    summaryId=\"example-scalar-table\"\n    summary=\"This table shows an implementation of scalar width table columns.\"\n    numberOfColumns={3}\n    cellPaddingStyle=\"standard\"\n+   columnWidths={[\n+     { scalar: 2 },\n+     { scalar: 1 },\n+     { scalar: 3 },\n+     { scalar: 4 },\n+   ]}\n    headerData={{\n      cells: [\n        { key: 'cell-0', id: `unique-cell-0`, children: 'Scalar 2' },\n        { key: 'cell-1', id: `unique-cell-1`, children: 'Scalar 1' },\n        { key: 'cell-2', id: `unique-cell-2`, children: 'Scalar 3' },\n        { key: 'cell-3', id: `unique-cell-3`, children: 'Scalar 4' },\n      ],\n    }}\n    bodyData={[{\n      rows: createRows(mockData),\n    }]}\n  />\n);\n")),Object(r.mdx)("p",null,"Using these steps we get the following example:"),Object(r.mdx)(f,{mdxType:"ScalarWidthTable"}))}_.isMDXComponent=!0},866:function(e,t,l){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var l={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(l,r,o):l[r]=e[r]}l.default=e,t&&t.set(e,l);return l}(l(0)),r=m(l(3)),o=m(l(5)),c=l(81),u=m(l(870)),i=m(l(192)),d=l(22),s=m(l(871));function m(e){return e&&e.__esModule?e:{default:e}}function p(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var l=[],n=!0,a=!1,r=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done)&&(l.push(o.value),!t||l.length!==t);n=!0);}catch(e){a=!0,r=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw r}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);"Object"===l&&e.constructor&&(l=e.constructor.name);if("Map"===l||"Set"===l)return Array.from(e);if("Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,n=new Array(t);l<t;l++)n[l]=e[l];return n}var b=o.default.bind(s.default),h={example:r.default.element,exampleSrc:r.default.element,exampleCssSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},w=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},x=function(e){var t=e.example,l=e.exampleSrc,n=e.exampleCssSrc,r=e.title,o=e.description,s=e.isExpanded,m=f((0,a.useState)(s),2),p=m[0],y=m[1],h=f((0,a.useState)(!1),2),x=h[0],g=h[1],v=a.default.useContext(c.ThemeContext),k=void 0!==n,O=function(){g(!x),p&&y(!p)},T=function(){y(!p),x&&g(!x)},E=function(e,t){e.nativeEvent.keyCode!==d.KEY_SPACE&&e.nativeEvent.keyCode!==d.KEY_RETURN||(e.preventDefault(),t())};return a.default.createElement("div",{className:b("template",v.className)},a.default.createElement("div",{className:b("header")},r&&a.default.createElement("h2",{className:b("title")},r)),a.default.createElement("div",{className:b("content")},o&&a.default.createElement("div",{className:b("description")},o),t),a.default.createElement("div",{className:b("footer")},l?a.default.createElement("div",{className:b("button-container")},k&&a.default.createElement("button",{type:"button",className:b("css-toggle","item",{"is-selected":x}),onClick:O,onKeyDown:function(e){return E(e,O)},onBlur:_,onMouseDown:w,tabIndex:0,"data-focus-styles-enabled":!0},a.default.createElement(u.default,{className:b("chevron")}),a.default.createElement("span",null,"CSS"),a.default.createElement(i.default,{className:b("chevron")})),a.default.createElement("button",{type:"button",className:b("code-toggle","item",{"is-selected":p}),onClick:T,onKeyDown:function(e){return E(e,T)},onBlur:_,onMouseDown:w,tabIndex:0,"data-focus-styles-enabled":!0},a.default.createElement(u.default,{className:b("chevron")}),a.default.createElement("span",null,"Code"),a.default.createElement(i.default,{className:b("chevron")}))):null,a.default.createElement("div",null,x&&a.default.createElement("div",{className:b("css")},n),p&&a.default.createElement("div",{className:b("code")},l))))};x.propTypes=h,x.defaultProps={isExpanded:!1};var g=x;t.default=g},870:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(l(0)),a=r(l(21));function r(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e}).apply(this,arguments)}var c=function(e){var t=o({},e);return n.default.createElement(a.default,t,n.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};c.displayName="IconChevronLeft",c.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var u=c;t.default=u},871:function(e,t,l){e.exports={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___e4g6e","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___MlAIc",template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",css:"ExampleTemplate-module__css___3yyDQ",code:"ExampleTemplate-module__code____AmLF","css-toggle":"ExampleTemplate-module__css-toggle___2I9Yn","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","is-selected":"ExampleTemplate-module__is-selected___1H6Un",item:"ExampleTemplate-module__item___1N1C-",chevron:"ExampleTemplate-module__chevron___3Xlby",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},926:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=[{key:"unique-0",toggleText:"Toggle Power Row 0",discloseText:"Power Row 0 - Details",primaryIndex:1,cells:[{key:"unique-0-0",title:"Item 0-0"},{key:"unique-0-1",title:"Item 0-1"},{key:"unique-0-2",title:"Item 0-2"},{key:"unique-0-3",title:"Item 0-3"}]},{key:"unique-1",toggleText:"Toggle Power Row 1",discloseText:"Power Row 1 - Details",primaryIndex:1,cells:[{key:"unique-1-0",title:"Item 1-0"},{key:"unique-1-1",title:"Item 1-1"},{key:"unique-1-2",title:"Item 1-2"},{key:"unique-1-3",title:"Item 1-3"}]},{key:"unique-2",toggleText:"Toggle Power Row 2",discloseText:"Power Row 2 - Details",primaryIndex:1,cells:[{key:"unique-2-0",title:"Item 2-0"},{key:"unique-2-1",title:"Item 2-1"},{key:"unique-2-2",title:"Item 2-2"},{key:"unique-2-3",title:"Item 2-3"}]},{key:"unique-3",toggleText:"Toggle Power Row 3",discloseText:"Power Row 3 - Details",primaryIndex:1,cells:[{key:"unique-3-0",title:"Item 3-0"},{key:"unique-3-1",title:"Item 3-1"},{key:"unique-3-2",title:"Item 3-2"},{key:"unique-3-3",title:"Item 3-3"}]},{key:"unique-4",toggleText:"Toggle Power Row 4",discloseText:"Power Row 4 - Details",primaryIndex:1,cells:[{key:"unique-4-0",title:"Item 4-0"},{key:"unique-4-1",title:"Item 4-1"},{key:"unique-4-2",title:"Item 4-2"},{key:"unique-4-3",title:"Item 4-3"}]}];t.default=n}}]);
//# sourceMappingURL=273-aedf4022b4bd8b2cc799.js.map