(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{1003:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(r(0)),a=r(1071),i=d(r(3)),o=d(r(11)),l=r(1025),u=d(r(1113)),c=d(r(1026));function d(e){return e&&e.__esModule?e:{default:e}}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b={"grid-template-columns":i.default.string,"grid-template-rows":i.default.string,"grid-gap":i.default.string,style:i.default.object},y={children:i.default.node,defaultTemplate:i.default.shape(b),tiny:i.default.shape(b),small:i.default.shape(b),medium:i.default.shape(b),large:i.default.shape(b),huge:i.default.shape(b)},O=function(e){var t=e.defaultTemplate,r=e.tiny,i=e.small,u=e.medium,d=e.large,s=e.huge,b=e.children,y=m(e,["defaultTemplate","tiny","small","medium","large","huge","children"]),O=function(e,t){return Object.keys(t).length?g({},"@media screen and (min-width: ".concat(e,")"),(0,l.grid)(t)):{}},h=a.StyleSheet.create({grid:p(p(p(p(p(p({},(0,l.grid)(t)),O(c.default.tiny,r)),O(c.default.small,i)),O(c.default.medium,u)),O(c.default.large,d)),O(c.default.huge,s))}),j=(0,o.default)(y.className,(0,a.css)(h.grid));return n.default.createElement("div",f({},y,{className:j}),b)};O.propTypes=y,O.defaultProps={defaultTemplate:{},tiny:{},small:{},medium:{},large:{},huge:{}},O.Region=u.default;var h=O;t.default=h},1025:function(e,t,r){"use strict";function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0}),t.region=t.grid=void 0;var o=function(e,t){var r,n=t["grid-template-".concat(e)];if(void 0===n)return{};var a=(t["grid-gap"]||"0").split(/\s+/);return a="rows"===e?a[0]:a.slice(-1)[0],i(r={},"grid-template-".concat(e),n),i(r,"-ms-grid-".concat(e),n.split(/\s+/).join(" ".concat(a," "))),r},l=function(e,t){var r,n=t["grid-".concat(e,"-start")];return void 0===n?{}:(i(r={},"grid-".concat(e,"-start"),"".concat(n)),i(r,"-ms-grid-".concat(e),"".concat(2*n-1)),r)},u=function(e,t){var r;if(void 0===t["grid-".concat(e,"-end")])return{};var n=t["grid-".concat(e,"-start")]||t["grid-".concat(e,"-end")],a=t["grid-".concat(e,"-end")],o=n===a?1:2*(a-n)-1;return i(r={},"grid-".concat(e,"-end"),"".concat(a)),i(r,"-ms-grid-".concat(e,"-span"),"".concat(o)),r};t.grid=function(e){return a(a(a(a(a({},(t=e,0===Object.keys(t).length?{}:{display:window.CSS&&window.CSS.supports&&window.CSS.supports("display","grid")?"grid":"-ms-grid"})),function(e){return e["grid-gap"]?{"grid-gap":e["grid-gap"]}:{}}(e)),o("columns",e)),o("rows",e)),e.style||{});var t};t.region=function(e){return a(a(a(a(a({},l("column",e)),u("column",e)),l("row",e)),u("row",e)),e.style||{})}},1026:function(e,t,r){e.exports={tiny:"544px",small:"768px",medium:"992px",large:"1216px",huge:"1440px"}},1113:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(r(0)),a=d(r(3)),i=r(1071),o=d(r(5)),l=d(r(1026)),u=d(r(1114)),c=r(1025);function d(e){return e&&e.__esModule?e:{default:e}}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=o.default.bind(u.default),y={"grid-column-start":a.default.number,"grid-column-end":a.default.number,"grid-row-start":a.default.number,"grid-row-end":a.default.number,style:a.default.object},O={children:a.default.node,defaultPosition:a.default.shape(y),tiny:a.default.shape(y),small:a.default.shape(y),medium:a.default.shape(y),large:a.default.shape(y),huge:a.default.shape(y)},h=function(e){var t=e.children,r=e.defaultPosition,a=e.tiny,u=e.small,d=e.medium,s=e.large,y=e.huge,O=m(e,["children","defaultPosition","tiny","small","medium","large","huge"]),h=function(e,t){return Object.keys(t).length?g({},"@media screen and (min-width: ".concat(e,")"),(0,c.region)(t)):{}},j=i.StyleSheet.create({region:p(p(p(p(p(p({},(0,c.region)(r)),h(l.default.tiny,a)),h(l.default.small,u)),h(l.default.medium,d)),h(l.default.large,s)),h(l.default.huge,y))}),v=(0,o.default)(O.className,(0,i.css)(j.region));return n.default.createElement("div",f({},O,{className:v}),n.default.createElement("div",{className:b("region-child-container")},t))};h.propTypes=O,h.defaultProps={defaultPosition:{},tiny:{},small:{},medium:{},large:{},huge:{}};var j=h;t.default=j},1114:function(e,t,r){e.exports={"region-child-container":"Region-module__region-child-container___q-jy1"}},2567:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(0)),a=i(r(1003));function i(e){return e&&e.__esModule?e:{default:e}}var o={"grid-template-columns":"100px 100px","grid-template-rows":"100px","grid-gap":"10px"},l={"grid-column-start":1,"grid-row-start":1},u={"grid-column-start":2,"grid-row-start":1};t.default=function(){return n.default.createElement(a.default,{id:"defaultDynamicGrid",defaultTemplate:o},n.default.createElement(a.default.Region,{id:"region1",defaultPosition:l},"R1"),n.default.createElement(a.default.Region,{id:"region2",defaultPosition:u},"R2"))}}}]);
//# sourceMappingURL=241-3989fce5f12c52800afe.js.map