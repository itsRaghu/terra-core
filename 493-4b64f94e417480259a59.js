(window.webpackJsonp=window.webpackJsonp||[]).push([[493],{1005:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a=o(t(0)),d=o(t(3)),i=o(t(290)),r=o(t(919)),n=t(1125);function o(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function s(e,l){if(null==e)return{};var t,a,d=function(e,l){if(null==e)return{};var t,a,d={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],l.indexOf(t)>=0||(d[t]=e[t]);return d}(e,l);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(d[t]=e[t])}return d}var f={defaultValue:d.default.oneOfType([d.default.number,d.default.string]),disabled:d.default.bool,error:d.default.node,help:d.default.node,hideRequired:d.default.bool,isIncomplete:d.default.bool,isInline:d.default.bool,isLabelHidden:d.default.bool,isInvalid:d.default.bool,label:d.default.node.isRequired,labelAttrs:d.default.object,maxWidth:d.default.string,onChange:d.default.func,options:d.default.arrayOf(d.default.oneOfType([n.optionPropType,n.optGroupPropType])),required:d.default.bool,selectAttrs:d.default.object,selectId:d.default.string.isRequired,showOptional:d.default.bool,value:d.default.oneOfType([d.default.number,d.default.string])},p=function(e){var l,t=e.defaultValue,d=e.disabled,n=e.error,o=e.help,f=e.hideRequired,p=e.isIncomplete,c=e.isInline,b=e.isLabelHidden,v=e.isInvalid,h=e.label,m=e.labelAttrs,y=e.maxWidth,O=e.onChange,I=e.options,q=e.required,g=e.selectAttrs,w=e.selectId,_=e.showOptional,j=e.value,x=s(e,["defaultValue","disabled","error","help","hideRequired","isIncomplete","isInline","isLabelHidden","isInvalid","label","labelAttrs","maxWidth","onChange","options","required","selectAttrs","selectId","showOptional","value"]),A=o?a.default.createElement("span",null,o):void 0;return o&&n&&v?l="".concat(w,"-error ").concat(w,"-help"):(o&&(l="".concat(w,"-help")),n&&v&&(l="".concat(w,"-error"))),a.default.createElement(i.default,u({},x,{label:h,labelAttrs:m,error:n,help:A,hideRequired:f,required:q,showOptional:_,isInvalid:v,isInline:c,isLabelHidden:b,htmlFor:w,maxWidth:y}),a.default.createElement(r.default,{attrs:g,id:w,ariaDescribedBy:l,ariaLabel:h,disabled:d,isIncomplete:p,isInvalid:v,defaultValue:t,required:q,onChange:O,options:I,value:j}))};p.propTypes=f,p.defaultProps={disabled:!1,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,required:!1,showOptional:!1};var c=p;l.default=c},2662:function(e,l,t){"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a=n(t(0)),d=n(t(5)),i=n(t(1005)),r=n(t(917));function n(e){return e&&e.__esModule?e:{default:e}}var o=d.default.bind(r.default),u=function(){return a.default.createElement("div",{className:o("test-shell")},a.default.createElement(i.default,{label:"Required Field Text",options:[{value:"volvo",display:"Volvo"},{value:"saab",display:"Saab"},{value:"mercedes",display:"Mercedes"},{value:"audi",display:"Audi"}],required:!0,selectId:"test-id"}))};l.default=u},917:function(e,l,t){e.exports={"test-shell":"NativeSelectTest-module__test-shell___mX5pL"}}}]);
//# sourceMappingURL=493-4b64f94e417480259a59.js.map