(window.webpackJsonp=window.webpackJsonp||[]).push([[684],{1007:function(e,t,n){e.exports=n.p+"87ec563ff16c288f58b0747d553762d6.jpg"},2747:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),o=u(n(195)),a=u(n(1007));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return d(this,n)}}function d(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(d,e);var t,n,u,l=f(d);function d(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(t=l.call(this,e)).state={errorImageId:void 0,loadedImageId:void 0},t}return t=d,(n=[{key:"render",value:function(){var e=this;return r.default.createElement("div",null,r.default.createElement("h2",null,"Loading Image Examples"),r.default.createElement("p",null,"Image is successfully loaded."),r.default.createElement("div",null,r.default.createElement(o.default,{id:this.state.loadedImageId,alt:"loading image",src:a.default,onLoad:function(){e.setState({loadedImageId:"loadedImage"})},onError:function(){e.setState({errorImageId:"errorImage"})}})),r.default.createElement("p",null,"Image fails to load."),r.default.createElement("div",null,r.default.createElement(o.default,{id:this.state.errorImageId,src:"invalid.jpg",onLoad:function(){e.setState({loadedImageId:"loadedImage"})},onError:function(){e.setState({errorImageId:"errorImage"})},alt:"Alt text for image with invalid source"})))}}])&&c(t.prototype,n),u&&c(t,u),d}(r.default.Component);t.default=p}}]);
//# sourceMappingURL=684-36f05876dda88c25d780.js.map