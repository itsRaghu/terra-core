(window.webpackJsonp=window.webpackJsonp||[]).push([[459],{1011:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.restoreFocusStyles=t.removeFocusStyles=void 0;t.restoreFocusStyles=function(e){return e.setAttribute("data-terra-switch-show-focus-styles","true")};t.removeFocusStyles=function(e){return e.setAttribute("data-terra-switch-show-focus-styles","false")}},1012:function(e,t,r){e.exports={"clinical-lowlight-theme":"Switch-module__clinical-lowlight-theme___X4YX8","orion-fusion-theme":"Switch-module__orion-fusion-theme___24Q9g",switch:"Switch-module__switch___2RmTk","is-block":"Switch-module__is-block___vJ1Tw","label-container":"Switch-module__label-container___2vYDa","label-text":"Switch-module__label-text___2Zou1","status-label-text":"Switch-module__status-label-text___1X_MG",tray:"Switch-module__tray___1elMp",slider:"Switch-module__slider___21Gbx","is-selected":"Switch-module__is-selected___QdocY","is-disabled":"Switch-module__is-disabled___2WWX7","is-enabled":"Switch-module__is-enabled___2nZLU"}},2859:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=i();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){var a=o?Object.getOwnPropertyDescriptor(e,l):null;a&&(a.get||a.set)?Object.defineProperty(r,l,a):r[l]=e[l]}r.default=e,t&&t.set(e,r);return r}(r(0)),a=(o=r(962))&&o.__esModule?o:{default:o};function i(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return i=function(){return e},e}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,l=void 0;try{for(var a,i=e[Symbol.iterator]();!(n=(a=i.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,l=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw l}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var s=function(){var e=u((0,l.useState)(!1),2),t=e[0],r=e[1];return l.default.createElement(a.default,{id:"defaultSwitch",isChecked:t,labelText:"Label",onChange:r})};t.default=s},962:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=y();if(t&&t.has(e))return t.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){var a=o?Object.getOwnPropertyDescriptor(e,l):null;a&&(a.get||a.set)?Object.defineProperty(r,l,a):r[l]=e[l]}r.default=e,t&&t.set(e,r);return r}(r(0)),l=b(r(3)),a=b(r(11)),i=b(r(5)),u=b(r(8)),c=r(9),s=r(22),f=r(1011),d=b(r(1012));function b(e){return e&&e.__esModule?e:{default:e}}function y(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return y=function(){return e},e}function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var m=i.default.bind(d.default),h=Object.freeze({ON:o.default.createElement(c.FormattedMessage,{id:"Terra.switch.switchstatuslabel.on"}),OFF:o.default.createElement(c.FormattedMessage,{id:"Terra.switch.switchstatuslabel.off"})}),v={isChecked:l.default.bool,isDisabled:l.default.bool,labelText:l.default.string.isRequired,isBlock:l.default.bool,onChange:l.default.func},w={isChecked:!1,isDisabled:!1,isBlock:!1,onChange:void 0},S=function(e){var t,r=e.isChecked,n=e.isDisabled,l=e.isBlock,i=e.onChange,c=e.labelText,d=p(e,["isChecked","isDisabled","isBlock","onChange","labelText"]),b=o.default.useContext(u.default),y=(0,o.useRef)(),v=(0,o.useCallback)((function(e){y.current.focus(),i&&i(!r,e)}),[r,i]),w=r?h.ON:h.OFF,S=(0,a.default)(m("switch",{"is-enabled":!n},{"is-disabled":n},{"is-selected":r},{"is-block":l},b.className),d.className),O=m(["label-container",{"is-block":l}]);return t=n?{"aria-disabled":!0}:{tabIndex:"0",onBlur:function(){(0,f.restoreFocusStyles)(y.current)},onClick:v,onMouseDown:function(e){e.preventDefault(),(0,f.removeFocusStyles)(y.current)},onKeyDown:function(e){e.nativeEvent.keyCode!==s.KEY_RETURN&&e.nativeEvent.keyCode!==s.KEY_SPACE||(e.preventDefault(),(0,f.restoreFocusStyles)(y.current),i&&i(!r,e))}},o.default.createElement("div",_({},d,t,{"aria-label":c,"aria-checked":r,role:"switch",className:S,"data-terra-switch-show-focus-styles":!0,ref:y}),o.default.createElement("div",{"aria-hidden":!0,className:O},o.default.createElement("div",{className:m("label-text")},c),o.default.createElement("div",{className:m("status-label-text")},w)),o.default.createElement("div",{"aria-hidden":!0,className:m("tray")},o.default.createElement("div",{className:m("slider")})))};S.propTypes=v,S.defaultProps=w;var O=S;t.default=O}}]);
//# sourceMappingURL=459-7516d219b74f6bfb0dc7.js.map