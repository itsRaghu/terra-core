(window.webpackJsonp=window.webpackJsonp||[]).push([[370],{1045:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var a=r(0),n=r.n(a),d=r(867),c=r.n(d),o=function(e){var t=e.url;return n.a.createElement(c.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-checkbox",name:"terra-form-checkbox",version:"4.8.0",url:t})}},2397:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return m}));r(0);var a=r(288),n=r(1045);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},d=Object.keys(e);for(a=0;a<d.length;a++)r=d[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)r=d[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o={};function m(e){var t=e.components,r=c(e,["components"]);return Object(a.mdx)("wrapper",d({},o,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(n.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"terra-form-checkbox-upgrade-guide"},"Terra Form Checkbox Upgrade Guide"),Object(a.mdx)("h2",{id:"changes-from-version-3-to-version-4"},"Changes from version 3 to version 4"),Object(a.mdx)("h3",{id:"props"},"Props"),Object(a.mdx)("h4",{id:"updated"},"Updated"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Form Fields allowed the ",Object(a.mdx)("inlineCode",{parentName:"li"},"label")," to be a node, which potentially breaks the display when injecting other non-inline-only text elements (terra-text) or has the potential to completely break accessibility if something non-text based would be passed in."),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"labelText")," prop's type changed from node to string."),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"legend")," prop's type changed from node to string.")),Object(a.mdx)("h5",{id:"steps-to-update"},"Steps to Update"),Object(a.mdx)("p",null," To upgrade from 3.0 to 4.0 each existing Checkbox must be reviewed and updated to ensure only a string is being passed to the ",Object(a.mdx)("inlineCode",{parentName:"p"},"labelText")," and ",Object(a.mdx)("inlineCode",{parentName:"p"},"legend ")," props. Solutions passing node data types need to be reworked to provide only a string."),Object(a.mdx)("h2",{id:"changes-from-version-2-to-version-3"},"Changes from version 2 to version 3"),Object(a.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),Object(a.mdx)("h4",{id:"renamed"},"Renamed"),Object(a.mdx)("table",null,Object(a.mdx)("thead",{parentName:"table"},Object(a.mdx)("tr",{parentName:"thead"},Object(a.mdx)("th",d({parentName:"tr"},{align:null}),"Previous"),Object(a.mdx)("th",d({parentName:"tr"},{align:null}),"New"))),Object(a.mdx)("tbody",{parentName:"table"},Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-background-color"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-before-background-color")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-background-image"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-before-background-image")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-border"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-before-border")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-border-radius"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-before-border-radius")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-height"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-before-height")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-margin-top"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-before-margin-top")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-transition"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-before-transition")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-width"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-before-width")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-checked-background-color"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-checked-before-background-color")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-checked-background-image"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-checked-before-background-image")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-checked-border"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-checked-before-border")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-checked-border-radius"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-checked-before-border-radius")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-symbol"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-checked-before-content")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-checked-height"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-checked-before-height")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-checked-line-height"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-checked-before-line-height")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-margin-top"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-checked-before-margin-top")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-checked-symbol-padding-left"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-checked-before-padding-left")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-checked-symbol-padding-right"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-checked-before-padding-right")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-checked-symbol-padding-top"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-checked-before-padding-top")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-checked-transform"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-checked-before-transform")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-checked-transition"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-checked-before-transition")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-checked-width"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-checked-before-width")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-is-mobile-height"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-is-mobile-before-height")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-is-mobile-margin-top"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-is-mobile-before-margin-top")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-is-mobile-width"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-is-mobile-before-width")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-is-mobile-checked-height"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-is-mobile-checked-before-height")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-is-mobile-checked-line-height"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-is-mobile-checked-before-line-height")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-is-mobile-margin-top"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-is-mobile-checked-before-margin-top")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-is-mobile-checked-width"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-is-mobile-checked-before-width")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-hover-border-color"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-hover-before-border-color")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-hover-border-width"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-hover-before-border-width")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-checked-hover-border-color"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-hover-checked-before-border-color")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-checked-hover-border-width"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-hover-checked-before-border-width")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-disabled-background-color"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-disabled-before-background-color")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-disabled-background-image"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-disabled-before-background-image")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-disabled-border-color"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-disabled-before-border-color")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-disabled-border-width"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-disabled-before-border-width")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-checked-disabled-border-width"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-checked-disabled-before-border-width")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-disabled-symbol"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-checked-disabled-before-content")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-focus-border-color"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-focus-before-border-color")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-focus-border-width"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-focus-before-border-width")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-focus-ring-background-color"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-focus-after-ring-background-color")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-focus-ring-border-radius"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-focus-after-ring-border-radius")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-focus-ring-height"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-focus-after-ring-height")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-focus-ring-left"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-focus-after-ring-left")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-focus-ring-top"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-focus-after-ring-top")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-focus-ring-width"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-focus-after-ring-width")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-field-error-icon"),Object(a.mdx)("td",d({parentName:"tr"},{align:null}),"--terra-form-checkbox-field-error-background")))),Object(a.mdx)("h4",{id:"added"},"Added"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"--terra-form-checkbox-field-label-error-icon-margin-right")),Object(a.mdx)("h4",{id:"removed"},"Removed"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"--terra-form-checkbox-field-label-error-icon-padding-right")))}m.isMDXComponent=!0},867:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r(0)),n=o(r(3)),d=o(r(5)),c=o(r(868));function o(e){return e&&e.__esModule?e:{default:e}}var m=d.default.bind(c.default),b={name:n.default.string.isRequired,src:n.default.string,url:n.default.string,version:n.default.string.isRequired},l=function(e){var t=e.src,r=e.name,n=e.url,d=e.version,c=a.default.createElement("a",{className:m("badge"),href:n||"https://www.npmjs.org/package/".concat(r,"/v/").concat(d)},a.default.createElement("span",{className:m("badge-name")},n?"package":"npm"),a.default.createElement("span",{className:m("badge-version")},"v".concat(d))),o=t?a.default.createElement("a",{className:m("badge"),href:t},a.default.createElement("span",{className:m("badge-name")},"github"),a.default.createElement("span",{className:m("badge-version")},"source")):void 0;return a.default.createElement("div",{className:m("badge-container")},c,o)};l.propTypes=b;var i=l;t.default=i},868:function(e,t,r){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}}}]);
//# sourceMappingURL=370-fe290fb32bf3b04a88e3.js.map