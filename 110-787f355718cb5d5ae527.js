(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{1e3:function(e,t,a){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},1001:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o="#D8DEE9",r="#B2B2B2",n="#c5a5c5",l="#5a9bcf",c="#8dc891",d="#d7deea",u="#FAC863",p={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:n},comment:{color:r},"block-comment":{color:r},prolog:{color:r},doctype:{color:r},cdata:{color:r},property:{color:l},number:{color:l},"function-name":{color:l},constant:{color:l},symbol:{color:l},deleted:{color:l},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:c},punctuation:{color:"#88C6BE"},selector:{color:o},char:{color:o},builtin:{color:o},inserted:{color:o},function:{color:"#79b6f2"},operator:{color:d},entity:{color:d,cursor:"help"},url:{color:d},".language-css .token.string":{color:d},".style .token.string":{color:d},variable:{color:d},"attr-value":{color:c},keyword:{color:n},"at-rule":{color:u},"class-name":{color:u},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=p},1002:function(e,t,a){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}},1879:function(e,t,a){"use strict";a.r(t),t.default="# Terra Doc Template Upgrade Guide\n\n## Changes from version 1 to version 2\n\n### Changes to CSS Custom Properties\n\n#### Renamed\n| Previous | New |\n|-|-|\n| --terra-doc-template-v1-examples-header-border-bottom | --terra-doc-template-examples-header-border-bottom |\n| --terra-doc-template-v1-examples-header-color | --terra-doc-template-examples-header-color |\n| --terra-doc-template-v1-examples-header-text-shadow | --terra-doc-template-examples-header-text-shadow |\n| --terra-doc-template-v1-doc-card-background-color | --terra-doc-template-doc-card-not-empty-background-color |\n| --terra-doc-template-v1-doc-card-border-radius | --terra-doc-template-doc-card-not-empty-border-radius |\n| --terra-doc-template-v1-doc-card-padding-bottom | --terra-doc-template-doc-card-not-empty-padding-bottom |\n| --terra-doc-template-v1-doc-card-padding-left | --terra-doc-template-doc-card-not-empty-padding-left |\n| --terra-doc-template-v1-doc-card-padding-right | --terra-doc-template-doc-card-not-empty-padding-right |\n| --terra-doc-template-v1-doc-card-padding-top | --terra-doc-template-doc-card-not-empty-padding-top |\n| --terra-doc-template-v1-header-background-color | --terra-doc-template-header-background-color |\n| --terra-doc-template-v1-content-background-color | --terra-doc-template-content-background-color |\n| --terra-doc-template-v1-footer-background-color | --terra-doc-template-footer-background-color |\n"},2394:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(a(0)),r=l(a(995)),n=l(a(1879));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(){return o.default.createElement(r.default,{packageName:"terra-doc-template",srcPath:"https://github.com/cerner/terra-core/tree/main/packages/terra-doc-template",readme:n.default})};t.default=c},957:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(a(0)),r=l(a(5)),n=l(a(973));function l(e){return e&&e.__esModule?e:{default:e}}var c=r.default.bind(n.default),d=function(e){var t=e.packageName,a=e.packageUrl,r=e.packageVersion;return r?o.default.createElement("div",{className:c("badge-container")},o.default.createElement("a",{className:c("badge"),href:a||"https://www.npmjs.org/package/".concat(t,"/v/").concat(r)},o.default.createElement("span",{className:c("badge-name")},a?"package":"npm"),o.default.createElement("span",{className:c("badge-version")},"v".concat(r)))):o.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},o.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}))};t.default=d},973:function(e,t,a){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}},995:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(a(0)),r=i(a(3)),n=i(a(1016)),l=i(a(896)),c=i(a(5)),d=i(a(957)),u=i(a(999)),p=i(a(1002));function i(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var f=c.default.bind(p.default),g={children:r.default.node,packageName:r.default.string,packageUrl:r.default.string,packageVersion:r.default.string,readme:r.default.string,srcPath:r.default.string,examples:r.default.arrayOf(r.default.shape({title:r.default.string,description:r.default.node,example:r.default.element,source:r.default.string})),propsTables:r.default.arrayOf(r.default.shape({componentSrc:r.default.string,componentName:r.default.string,componentProps:r.default.string,propsResolution:r.default.string}))},b=function(e){var t,a=e.packageName,r=e.packageVersion,c=e.packageUrl,p=e.readme,i=e.srcPath,g=e.examples,b=e.propsTables,_=e.children,h=m(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),v=g;b&&(t=b);for(var y=0,x=0;x<v.length;x+=1)v[x].id=y,y+=1;if(t)for(var E=0;E<t.length;E+=1)t[E].id=y,y+=1;var k,w=f(["doc-template",h.className]);if(v.length>0){var T=v.length>1?"Examples":"Example";k=o.default.createElement("h1",{className:f("examples-header")},T)}var O=o.default.createElement(d.default,{packageName:a,packageUrl:c,packageVersion:r});return o.default.createElement("div",s({},h,{className:w}),o.default.createElement("div",{className:f("doc-card")},a&&O,p&&o.default.createElement(l.default,{src:p}),i&&o.default.createElement("a",{href:i},"View component source code")),k,v.map((function(e){return o.default.createElement(u.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),o.default.createElement("div",{className:f("doc-card")},b[0]&&b[0].componentProps?t.map((function(e){return o.default.createElement("div",{className:f("props-table-markdown"),key:e.id},o.default.createElement("h2",null,e.componentName," Props"),o.default.createElement(l.default,{src:e.componentProps}))})):t.map((function(e){return o.default.createElement(n.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),_&&o.default.createElement("div",{className:f("doc-card")},_))};b.propTypes=g,b.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var _=b;t.default=_},999:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=p(a(0)),r=p(a(3)),n=p(a(1108)),l=p(a(1110)),c=p(a(5)),d=p(a(1e3)),u=p(a(1001));function p(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function f(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,o=v(e);if(t){var r=v(this).constructor;a=Reflect.construct(o,arguments,r)}else a=o.apply(this,arguments);return _(this,a)}}function _(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?h(e):t}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.default.registerLanguage("jsx",l.default);var y=c.default.bind(d.default),x={example:r.default.element,exampleSrc:r.default.string,title:r.default.string,description:r.default.node,children:r.default.element},E={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(c,e);var t,a,r,l=b(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=l.call(this,e)).state={isExpanded:!1,isBackgroundTransparent:!1},t.handleBgToggle=t.handleBgToggle.bind(h(t)),t.handleCodeToggle=t.handleCodeToggle.bind(h(t)),t}return t=c,(a=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.title,a=e.example,r=e.exampleSrc,l=e.children,c=e.description,d=m(e,["title","example","exampleSrc","children","description"]),p=this.state,i=p.isExpanded,f={};return p.isBackgroundTransparent&&(f={backgroundColor:"rgba(0, 0, 0, 0)"}),o.default.createElement("div",s({},d,{className:y("template",d.className)}),t&&o.default.createElement("div",{className:y("header")},o.default.createElement("h2",{className:y("title")},t)),o.default.createElement("div",{className:y("content"),style:f},c&&o.default.createElement("div",{className:y("description")},c),a,l),r&&o.default.createElement("div",{className:y("footer")},o.default.createElement("div",{className:y("button-container")},o.default.createElement("button",{type:"button",className:y("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),o.default.createElement("button",{type:"button",className:y("code-toggle"),onClick:this.handleCodeToggle},o.default.createElement("span",{className:y("chevron-left")}),o.default.createElement("span",null,"Code"),o.default.createElement("span",{className:y("chevron-right")}))),o.default.createElement("div",{className:y("code",{"is-expanded":i}),"aria-hidden":!i},i?o.default.createElement(n.default,{language:"jsx",style:u.default,customStyle:{margin:"0",borderRadius:"0"}},r):void 0)))}}])&&f(t.prototype,a),r&&f(t,r),c}(o.default.Component);k.propTypes=x,k.defaultProps=E;var w=k;t.default=w}}]);
//# sourceMappingURL=110-787f355718cb5d5ae527.js.map