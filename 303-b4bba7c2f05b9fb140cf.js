(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{2594:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(0)),o=l(r(5)),u=l(r(879)),a=l(r(893));function l(e){return e&&e.__esModule?e:{default:e}}var i=o.default.bind(a.default),f=function(){return n.default.createElement("div",{className:i("content-wrapper")},n.default.createElement(u.default,{disabled:!0,id:"form-input-disabled",ariaLabel:"label"}))};t.default=f},879:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=f(r(0)),o=f(r(3)),u=f(r(11)),a=f(r(5)),l=f(r(8)),i=f(r(883));function f(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=h(e);if(t){var o=h(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return O(this,r)}}function O(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=a.default.bind(i.default),w={defaultValue:o.default.oneOfType([o.default.string,o.default.number]),disabled:o.default.bool,isIncomplete:o.default.bool,isInvalid:o.default.bool,onBlur:o.default.func,onChange:o.default.func,onFocus:o.default.func,name:o.default.string,pattern:o.default.string,refCallback:o.default.func,required:o.default.bool,type:o.default.string,value:o.default.oneOfType([o.default.string,o.default.number]),ariaLabel:o.default.string},j={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,name:null,pattern:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(l,e);var t,r,o,a=_(l);function l(){return y(this,l),a.apply(this,arguments)}return t=l,(r=[{key:"render",value:function(){var e,t=this.props,r=t.defaultValue,o=t.disabled,a=t.isIncomplete,l=t.isInvalid,i=t.onBlur,f=t.onChange,c=t.onFocus,y=t.name,m=t.pattern,v=t.refCallback,_=t.required,O=t.type,h=t.ariaLabel,w=t.value,j=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},b(t,["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","name","pattern","refCallback","required","type","ariaLabel","value"])),P=this.context,I=(0,u.default)(g("form-input",{"form-error":l},{"form-incomplete":a&&_&&!l},P.className),j.className);return j&&Object.prototype.hasOwnProperty.call(j,"aria-label")?e=h||j["aria-label"]:h&&(e=h),j["aria-label"]=e,_&&(j["aria-required"]="true"),void 0!==w?j.value=w:void 0!==r&&(j.defaultValue=r),j.placeholder&&(j.placeholder=null),n.default.createElement("input",p({},j,{ref:function(e){v&&v(e)},name:y,type:O,pattern:m,onBlur:i,onChange:f,onFocus:c,disabled:o,required:_,className:I}))}}])&&m(t.prototype,r),o&&m(t,o),l}(n.default.Component);P.propTypes=w,P.defaultProps=j,P.contextType=l.default,P.isInput=!0;var I=P;t.default=I},883:function(e,t,r){e.exports={"clinical-lowlight-theme":"Input-module__clinical-lowlight-theme___2ILS5","orion-fusion-theme":"Input-module__orion-fusion-theme___33ZoB","form-input":"Input-module__form-input___1P2d6","form-error":"Input-module__form-error___j0fiD","form-incomplete":"Input-module__form-incomplete___3wIAu"}},893:function(e,t,r){e.exports={"content-wrapper":"Input-test-module__content-wrapper___dsRQD"}}}]);
//# sourceMappingURL=303-b4bba7c2f05b9fb140cf.js.map