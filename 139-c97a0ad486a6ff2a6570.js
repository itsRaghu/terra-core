(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{1123:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(n(0)),a=p(n(3)),o=n(9),l=p(n(290)),i=p(n(298)),c=p(n(75)),u=p(n(60));function p(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s={children:a.default.node,label:a.default.string.isRequired,defaultValue:a.default.oneOfType([a.default.string,a.default.number,a.default.array]),disabled:a.default.bool,error:a.default.node,help:a.default.node,hideRequired:a.default.bool,intl:o.intlShape.isRequired,isIncomplete:a.default.bool,isInline:a.default.bool,isInvalid:a.default.bool,isLabelHidden:a.default.bool,isTouchAccessible:a.default.bool,labelAttrs:a.default.object,maxSelectionCount:a.default.number,maxHeight:a.default.number,maxWidth:a.default.string,onChange:a.default.func,placeholder:a.default.string,required:a.default.bool,selectAttrs:a.default.object,selectId:a.default.string.isRequired,showOptional:a.default.bool,value:a.default.oneOfType([a.default.string,a.default.number,a.default.array])},f={children:void 0,defaultValue:void 0,disabled:!1,error:void 0,help:void 0,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,isTouchAccessible:!1,labelAttrs:{},maxSelectionCount:void 0,maxHeight:void 0,maxWidth:void 0,onChange:void 0,placeholder:void 0,required:!1,selectAttrs:{},showOptional:!1,value:void 0},b=function(e){var t,n=e.children,a=e.defaultValue,o=e.disabled,c=e.error,u=e.help,p=e.hideRequired,s=e.intl,f=e.isIncomplete,b=e.isInline,x=e.isInvalid,O=e.isLabelHidden,y=e.isTouchAccessible,v=e.label,h=e.labelAttrs,g=e.maxSelectionCount,j=e.maxHeight,T=e.maxWidth,w=e.onChange,M=e.placeholder,S=e.required,D=e.selectAttrs,X=e.selectId,L=e.showOptional,C=e.value,E=m(e,["children","defaultValue","disabled","error","help","hideRequired","intl","isIncomplete","isInline","isInvalid","isLabelHidden","isTouchAccessible","label","labelAttrs","maxSelectionCount","maxHeight","maxWidth","onChange","placeholder","required","selectAttrs","selectId","showOptional","value"]),N=u;if(void 0!==g&&g>=2){var F=s.formatMessage({id:"Terra.form.select.maxSelectionHelp"},{text:g});N=u?r.default.createElement("span",null,F," ",u):F}return u&&c&&x?t="".concat(X,"-error ").concat(X,"-help"):(u&&(t="".concat(X,"-help")),c&&x&&(t="".concat(X,"-error"))),r.default.createElement(l.default,d({},E,{label:v,labelAttrs:h,error:c,help:N,hideRequired:p,required:S,showOptional:L,isInvalid:x,isInline:b,isLabelHidden:O,htmlFor:X,maxWidth:T}),r.default.createElement(i.default,d({},D,{ariaLabel:v,"aria-describedby":t,disabled:D.disabled||o,inputId:X,isIncomplete:f,isInvalid:x,isTouchAccessible:y,defaultValue:a,maxHeight:j||D.maxHeight,maxSelectionCount:void 0!==g&&g<2?void 0:g,onChange:w,placeholder:M,required:S,value:C}),n))};b.propTypes=s,b.defaultProps=f,b.Option=u.default,b.OptGroup=c.default;var x=(0,o.injectIntl)(b);t.default=x},2013:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),a=i(n(1123)),o=i(n(5)),l=i(n(874));function i(e){return e&&e.__esModule?e:{default:e}}var c=o.default.bind(l.default),u=function(){return r.default.createElement(a.default,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-3",className:c("form-select")},r.default.createElement(a.default.Option,{value:"xSmall",display:"Extra Small"}),r.default.createElement(a.default.Option,{value:"small",display:"Small"}),r.default.createElement(a.default.Option,{value:"medium",display:"Medium"}),r.default.createElement(a.default.Option,{value:"large",display:"Large"}),r.default.createElement(a.default.Option,{value:"xLarge",display:"Extra Large"}))};t.default=u},2014:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),a=i(n(1123)),o=i(n(5)),l=i(n(874));function i(e){return e&&e.__esModule?e:{default:e}}var c=o.default.bind(l.default),u=function(){return r.default.createElement(a.default,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-2",required:!0,className:c("form-select")},r.default.createElement(a.default.Option,{value:"xSmall",display:"Extra Small"}),r.default.createElement(a.default.Option,{value:"small",display:"Small"}),r.default.createElement(a.default.Option,{value:"medium",display:"Medium"}),r.default.createElement(a.default.Option,{value:"large",display:"Large"}),r.default.createElement(a.default.Option,{value:"xLarge",display:"Extra Large"}))};t.default=u},2015:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),a=i(n(1123)),o=i(n(5)),l=i(n(874));function i(e){return e&&e.__esModule?e:{default:e}}var c=o.default.bind(l.default),u=function(){return r.default.createElement(a.default,{required:!0,isIncomplete:!0,label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-1",className:c("form-select")},r.default.createElement(a.default.Option,{value:"xSmall",display:"Extra Small"}),r.default.createElement(a.default.Option,{value:"small",display:"Small"}),r.default.createElement(a.default.Option,{value:"medium",display:"Medium"}),r.default.createElement(a.default.Option,{value:"large",display:"Large"}),r.default.createElement(a.default.Option,{value:"xLarge",display:"Extra Large"}))};t.default=u},2971:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return z}));var r=n(0),a=n.n(r),o=n(288),l=n(885),i=n(2013),c=n.n(i);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={};function m(e){var t=e.components,n=p(e,["components"]);return Object(o.mdx)("wrapper",u({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",u({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport TagSelectField from \'terra-form-select/lib/TagSelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst TagSelectFieldExample = () => (\n  <TagSelectField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-3" className={cx(\'form-select\')}>\n    <TagSelectField.Option value="xSmall" display="Extra Small" />\n    <TagSelectField.Option value="small" display="Small" />\n    <TagSelectField.Option value="medium" display="Medium" />\n    <TagSelectField.Option value="large" display="Large" />\n    <TagSelectField.Option value="xLarge" display="Extra Large" />\n  </TagSelectField>\n);\n\nexport default TagSelectFieldExample;\n\n')))}m.isMDXComponent=!0;var s=n(866),f=n.n(s),b=n(875),x=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Tag Select Field",description:n,example:a.a.createElement(c.a,null),exampleCssSrc:a.a.createElement(b.a,null),exampleSrc:a.a.createElement(m,null),isExpanded:r})},O=n(2014),y=n.n(O);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g={};function j(e){var t=e.components,n=h(e,["components"]);return Object(o.mdx)("wrapper",v({},g,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",v({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport TagSelectField from \'terra-form-select/lib/TagSelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst TagSelectFieldExample = () => (\n  <TagSelectField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-2" required className={cx(\'form-select\')}>\n    <TagSelectField.Option value="xSmall" display="Extra Small" />\n    <TagSelectField.Option value="small" display="Small" />\n    <TagSelectField.Option value="medium" display="Medium" />\n    <TagSelectField.Option value="large" display="Large" />\n    <TagSelectField.Option value="xLarge" display="Extra Large" />\n  </TagSelectField>\n);\n\nexport default TagSelectFieldExample;\n\n')))}j.isMDXComponent=!0;var T=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Required Tag Select Field",description:n,example:a.a.createElement(y.a,null),exampleCssSrc:a.a.createElement(b.a,null),exampleSrc:a.a.createElement(j,null),isExpanded:r})},w=n(2015),M=n.n(w);function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var X={};function L(e){var t=e.components,n=D(e,["components"]);return Object(o.mdx)("wrapper",S({},X,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",S({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport TagSelectField from \'terra-form-select/lib/TagSelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst TagSelectFieldExample = () => (\n  <TagSelectField required isIncomplete label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-1" className={cx(\'form-select\')}>\n    <TagSelectField.Option value="xSmall" display="Extra Small" />\n    <TagSelectField.Option value="small" display="Small" />\n    <TagSelectField.Option value="medium" display="Medium" />\n    <TagSelectField.Option value="large" display="Large" />\n    <TagSelectField.Option value="xLarge" display="Extra Large" />\n  </TagSelectField>\n);\n\nexport default TagSelectFieldExample;\n\n')))}L.isMDXComponent=!0;var C=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Incomplete Tag Select Field",description:n,example:a.a.createElement(M.a,null),exampleCssSrc:a.a.createElement(b.a,null),exampleSrc:a.a.createElement(L,null),isExpanded:r})},E=n(869),N=n.n(E);function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function q(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var I=function(){return Object(o.mdx)(N.a,{rows:[{name:"children",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The select options."))}return t.isMDXComponent=!0,t({})}},{name:"label",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The field label."))}return t.isMDXComponent=!0,t({})}},{name:"defaultValue",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"union"),Object(o.mdx)("pre",null,Object(o.mdx)("code",F({parentName:"pre"},{className:"language-json"}),'[\n {\n  "name": "string"\n },\n {\n  "name": "number"\n },\n {\n  "name": "array"\n }\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The default value of the select. Can be a string, number, or array of strings/numbers."))}return t.isMDXComponent=!0,t({})}},{name:"disabled",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether the input is disabled."))}return t.isMDXComponent=!0,t({})}},{name:"error",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Error message displayed when the select is invalid."))}return t.isMDXComponent=!0,t({})}},{name:"help",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Help message to display with the select."))}return t.isMDXComponent=!0,t({})}},{name:"hideRequired",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether to hide the required indicator on the label."))}return t.isMDXComponent=!0,t({})}},{name:"isIncomplete",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether the field displays as Incomplete. Use when no value has been provided. ",Object(o.mdx)("em",{parentName:"p"},"(usage note: ",Object(o.mdx)("inlineCode",{parentName:"em"},"required")," must also be set)"),"."))}return t.isMDXComponent=!0,t({})}},{name:"isInline",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether the field is displayed inline. Displays block by default."))}return t.isMDXComponent=!0,t({})}},{name:"isInvalid",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether the field displays as Invalid. Use when value does not meet validation pattern."))}return t.isMDXComponent=!0,t({})}},{name:"isLabelHidden",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether the label is hidden. Allows hiding the label while meeting accessibility guidelines."))}return t.isMDXComponent=!0,t({})}},{name:"isTouchAccessible",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Ensures touch accessibility by rendering the dropdown inline without a portal."),Object(o.mdx)("p",null,"Note: When enabled the dropdown will clip if rendered within a container that has an overflow: hidden ancestor.\nThe dropdown may also appear beneath content if rendered within a container that has an overflow: auto ancestor."))}return t.isMDXComponent=!0,t({})}},{name:"labelAttrs",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"{}",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Additional attributes to spread onto the label."))}return t.isMDXComponent=!0,t({})}},{name:"maxSelectionCount",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"number"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The maximum number of options that can be selected. A value less than 2 will be ignored."))}return t.isMDXComponent=!0,t({})}},{name:"maxHeight",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"number"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The max height of the dropdown."))}return t.isMDXComponent=!0,t({})}},{name:"maxWidth",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Set the max-width of a field using ",Object(o.mdx)("inlineCode",{parentName:"p"},"length")," or ",Object(o.mdx)("inlineCode",{parentName:"p"},"%"),".  Best practice recommendation to never exceed\na rendered value of 1020px. ",Object(o.mdx)("em",{parentName:"p"},"(Note: Providing custom inline styles will take precedence.)")))}return t.isMDXComponent=!0,t({})}},{name:"onChange",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Callback function triggered when the select value changes. function(value)"))}return t.isMDXComponent=!0,t({})}},{name:"placeholder",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Placeholder text."))}return t.isMDXComponent=!0,t({})}},{name:"required",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether the field is required."))}return t.isMDXComponent=!0,t({})}},{name:"selectAttrs",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"{}",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Additional attributes to spread onto the select."))}return t.isMDXComponent=!0,t({})}},{name:"selectId",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The Select identifier. Links the htmlFor of the field to the select identifier."))}return t.isMDXComponent=!0,t({})}},{name:"showOptional",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether to append the 'optional' label to a non-required field label."))}return t.isMDXComponent=!0,t({})}},{name:"value",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"union"),Object(o.mdx)("pre",null,Object(o.mdx)("code",F({parentName:"pre"},{className:"language-json"}),'[\n {\n  "name": "string"\n },\n {\n  "name": "number"\n },\n {\n  "name": "array"\n }\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(o.mdx)("wrapper",F({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The value of the select. Can be a string, number, or array of strings/numbers."))}return t.isMDXComponent=!0,t({})}}]})};function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function V(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var _={};function z(e){var t=e.components,n=V(e,["components"]);return Object(o.mdx)("wrapper",P({},_,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(l.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-form-tag-select-field"},"Terra Form Tag Select Field"),Object(o.mdx)("p",null,"A convenience wrapper assembling a ",Object(o.mdx)("a",P({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-select/src/TagSelect.jsx"}),"terra-form-select TagSelect")," within a ",Object(o.mdx)("a",P({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-field"}),"terra-form-field"),"."),Object(o.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Install with ",Object(o.mdx)("a",P({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"npm install terra-form-select"))))),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",P({parentName:"pre"},{className:"language-jsx"}),"import TagSelectField from 'terra-form-select/lib/TagSelectField';\n")),Object(o.mdx)("h2",{id:"component-features"},"Component Features"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",P({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",P({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",P({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",P({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#internationalization-i18n-support"}),"Internationalization Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",P({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#internationalization-i18n-support"}),"Localization Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",P({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#ltr--rtl-support"}),"LTR/RTL Support"))),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)(x,{title:"Tag Select Field Example",mdxType:"TagSelectFieldExample"}),Object(o.mdx)(T,{title:"Required Tag Select Field Example",mdxType:"RequiredTagSelectFieldExample"}),Object(o.mdx)(C,{title:"Incomplete Tag Select Field Example",description:"Applies theme-specific styling for incomplete. ***Note: Only use incomplete if given specific guidance, reserved for specific applications when no value has been provided. Not for general use.***",mdxType:"IncompleteTagSelectFieldExample"}),Object(o.mdx)("h2",{id:"tag-select-field-props"},"Tag Select Field Props"),Object(o.mdx)(I,{mdxType:"TagSelectFieldPropsTable"}))}z.isMDXComponent=!0},870:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(21));function o(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=function(e){var t=l({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var c=i;t.default=c},874:function(e,t,n){e.exports={"form-select":"FormSelectDocCommon-module__form-select___3HVkD"}},875:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(0);var r=n(288);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l={};function i(e){var t=e.components,n=o(e,["components"]);return Object(r.mdx)("wrapper",a({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("pre",null,Object(r.mdx)("code",a({parentName:"pre"},{className:"language-scss"}),":local {\n  .form-select {\n    max-width: 300px;\n  }\n}\n\n")))}i.isMDXComponent=!0},885:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),a=n.n(r),o=n(867),l=n.n(o),i=function(e){var t=e.url;return a.a.createElement(l.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-select",name:"terra-form-select",version:"6.16.0",url:t})}}}]);
//# sourceMappingURL=139-c97a0ad486a6ff2a6570.js.map