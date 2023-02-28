/*! For license information please see 1f2887eb.0cdb72f5.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[164923],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=r.createContext({}),s=function(e){var t=r.useContext(f),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(f.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,f=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=s(n),d=o,y=l["".concat(f,".").concat(d)]||l[d]||p[d]||a;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var f in t)hasOwnProperty.call(t,f)&&(c[f]=t[f]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},855089:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>f,toc:()=>u});n(827378);var r=n(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={id:"backend-tasks.taskinvocationdefinition.fn",title:"TaskInvocationDefinition.fn",description:"API reference for TaskInvocationDefinition.fn"},c=void 0,f={unversionedId:"reference/backend-tasks.taskinvocationdefinition.fn",id:"reference/backend-tasks.taskinvocationdefinition.fn",title:"TaskInvocationDefinition.fn",description:"API reference for TaskInvocationDefinition.fn",source:"@site/../docs/reference/backend-tasks.taskinvocationdefinition.fn.md",sourceDirName:"reference",slug:"/reference/backend-tasks.taskinvocationdefinition.fn",permalink:"/docs/reference/backend-tasks.taskinvocationdefinition.fn",draft:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-tasks.taskinvocationdefinition.fn.md",tags:[],version:"current",frontMatter:{id:"backend-tasks.taskinvocationdefinition.fn",title:"TaskInvocationDefinition.fn",description:"API reference for TaskInvocationDefinition.fn"}},s={},u=[],l={toc:u};function p(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",o({parentName:"p"},{href:"/docs/reference/"}),"Home")," ",">"," ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/reference/backend-tasks"}),(0,r.kt)("inlineCode",{parentName:"a"},"@backstage/backend-tasks"))," ",">"," ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/reference/backend-tasks.taskinvocationdefinition"}),(0,r.kt)("inlineCode",{parentName:"a"},"TaskInvocationDefinition"))," ",">"," ",(0,r.kt)("a",o({parentName:"p"},{href:"/docs/reference/backend-tasks.taskinvocationdefinition.fn"}),(0,r.kt)("inlineCode",{parentName:"a"},"fn"))),(0,r.kt)("p",null,"The actual task function to be invoked regularly."),(0,r.kt)("b",null,"Signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",o({parentName:"pre"},{className:"language-typescript"}),"fn: TaskFunction;\n")))}p.isMDXComponent=!0},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var i,c,f=o(e),s=1;s<arguments.length;s++){for(var u in i=Object(arguments[s]))n.call(i,u)&&(f[u]=i[u]);if(t){c=t(i);for(var l=0;l<c.length;l++)r.call(i,c[l])&&(f[c[l]]=i[c[l]])}}return f}},541535:(e,t,n)=>{var r=n(862525),o=60103,a=60106;var i=60109,c=60110,f=60112;var s=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),a=l("react.portal"),l("react.fragment"),l("react.strict_mode"),l("react.profiler"),i=l("react.provider"),c=l("react.context"),f=l("react.forward_ref"),l("react.suspense"),s=l("react.memo"),u=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function k(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||y}function v(){}function m(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||y}k.prototype.isReactComponent={},k.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=k.prototype;var h=m.prototype=new v;h.constructor=m,r(h,k.prototype),h.isPureReactComponent=!0;var g={current:null},O=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,n){var r,a={},i=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)O.call(t,r)&&!j.hasOwnProperty(r)&&(a[r]=t[r]);var f=arguments.length-2;if(1===f)a.children=n;else if(1<f){for(var s=Array(f),u=0;u<f;u++)s[u]=arguments[u+2];a.children=s}if(e&&e.defaultProps)for(r in f=e.defaultProps)void 0===a[r]&&(a[r]=f[r]);return{$$typeof:o,type:e,key:i,ref:c,props:a,_owner:g.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var _=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,n,r,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var f=!1;if(null===e)f=!0;else switch(c){case"string":case"number":f=!0;break;case"object":switch(e.$$typeof){case o:case a:f=!0}}if(f)return i=i(f=e),e=""===r?"."+S(f,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(_,"$&/")+"/"),T(i,t,n,"",(function(e){return e}))):null!=i&&(P(i)&&(i=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||f&&f.key===i.key?"":(""+i.key).replace(_,"$&/")+"/")+e)),t.push(i)),1;if(f=0,r=""===r?".":r+":",Array.isArray(e))for(var s=0;s<e.length;s++){var u=r+S(c=e[s],s);f+=T(c,t,n,u,i)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),s=0;!(c=e.next()).done;)f+=T(c=c.value,t,n,u=r+S(c,s++),i);else if("object"===c)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return f}function E(e,t,n){if(null==e)return e;var r=[],o=0;return T(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function x(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var C={current:null};function D(){var e=C.current;if(null===e)throw Error(d(321));return e}},827378:(e,t,n)=>{n(541535)}}]);