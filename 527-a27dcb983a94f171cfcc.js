(window.webpackJsonp=window.webpackJsonp||[]).push([[527],{2280:function(t,e,n){t.exports={"content-wrapper":"AlertTestCommon__content-wrapper___2JY5r"}},2463:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==r(t)&&"function"!=typeof t)return{default:t};var e=f();if(e&&e.has(t))return e.get(t);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){var a=o?Object.getOwnPropertyDescriptor(t,i):null;a&&(a.get||a.set)?Object.defineProperty(n,i,a):n[i]=t[i]}n.default=t,e&&e.set(t,n);return n}(n(0)),i=c(n(53)),a=c(n(5)),u=c(n(904)),l=c(n(2280));function c(t){return t&&t.__esModule?t:{default:t}}function f(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return f=function(){return t},t}function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var p=a.default.bind(l.default),y=function(){var t=s((0,o.useState)(0),2),e=t[0],n=t[1],r=s((0,o.useState)(!1),2),a=r[0],l=r[1];return o.default.createElement(o.default.Fragment,null,o.default.createElement("p",null,"Alerts are responsive to their container width."),!a&&o.default.createElement(u.default,{id:"dismissibleAlert",type:"success",onDismiss:function(){return l(!a)}},"This is a success alert. It is configured to be dismissible. Click on the Dismiss button to dismiss the alert."),o.default.createElement(u.default,{type:"info"}),o.default.createElement("div",{className:p("content-wrapper")},o.default.createElement("p",null,"Alerts with actions in a small container that will cause the action section of the alert to render below the message instead of beside it."),o.default.createElement(u.default,{id:"actionAlert",type:"warning",action:o.default.createElement(i.default,{text:"Action",variant:"emphasis",onClick:function(){n(e+1)}})},"This is a warning. It is configured with a custom Action button."),o.default.createElement(u.default,{id:"noActionsAlert",type:"info"},"This is an info alert")))};e.default=y}}]);
//# sourceMappingURL=527-a27dcb983a94f171cfcc.js.map