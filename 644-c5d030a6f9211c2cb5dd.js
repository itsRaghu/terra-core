(window.webpackJsonp=window.webpackJsonp||[]).push([[644],{2292:function(e,t,n){e.exports={"weighted-text":"DefaultI18n-module__weighted-text___LPl8d","fallback-message":"DefaultI18n-module__fallback-message___19RNk"}},2739:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),l=i(n(3)),o=n(9),r=i(n(5)),c=i(n(323)),u=i(n(324)),s=i(n(2292));function i(e){return e&&e.__esModule?e:{default:e}}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=b(e);if(t){var l=b(this).constructor;n=Reflect.construct(a,arguments,l)}else n=a.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=r.default.bind(s.default),v=["en","en-GB","pt","pt-GW","zu","zu-ZA"],_=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(s,e);var t,n,l,r=h(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=r.call(this,e)).state={selectedLocale:"en",areTranslationsLoaded:!1,locale:e.locale,messages:{}},t.handleLocaleChange=t.handleLocaleChange.bind(y(t)),t}return t=s,(n=[{key:"componentDidMount",value:function(){(0,u.default)(this.props.locale,this.setState,this)}},{key:"handleLocaleChange",value:function(e){this.setState({selectedLocale:e.target.value}),(0,u.default)(e.target.value,this.setState,this)}},{key:"render",value:function(){return this.state.areTranslationsLoaded?a.default.createElement("div",null,a.default.createElement(c.default,{locale:this.state.locale,messages:this.state.messages},a.default.createElement("label",{htmlFor:"change-locale"}," Current locale: "),a.default.createElement("select",{id:"change-locale",onChange:this.handleLocaleChange,value:this.state.selectedLocale},v.map((function(e){return a.default.createElement("option",{key:e,value:e},e)}))),a.default.createElement("p",{id:"translated-message"},a.default.createElement("span",{className:g("weighted-text")}," Loaded locale message: "),a.default.createElement(o.FormattedMessage,{id:"Terra.ajax.error"})),this.state.selectedLocale.includes("zu")&&a.default.createElement("p",{className:g("fallback-message")},"Using the en locale as fallback."),"pt-GW"===this.state.selectedLocale&&a.default.createElement("p",{className:g("fallback-message")},"Using the pt locale as fallback."))):a.default.createElement("div",null)}}])&&d(t.prototype,n),l&&d(t,l),s}(a.default.Component);_.propTypes={locale:l.default.string},_.defaultProps={locale:"en"};t.default=function(){return a.default.createElement(_,null)}}}]);
//# sourceMappingURL=644-c5d030a6f9211c2cb5dd.js.map