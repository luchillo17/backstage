/*! For license information please see 934f25df.a516ce15.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[808184],{7647:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>u,toc:()=>f});var n=t(824246),o=t(511151);const i={id:"core-plugin-api.errorapiref",title:"errorApiRef",description:"API reference for errorApiRef"},c=void 0,u={unversionedId:"reference/core-plugin-api.errorapiref",id:"reference/core-plugin-api.errorapiref",title:"errorApiRef",description:"API reference for errorApiRef",source:"@site/../docs/reference/core-plugin-api.errorapiref.md",sourceDirName:"reference",slug:"/reference/core-plugin-api.errorapiref",permalink:"/docs/reference/core-plugin-api.errorapiref",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/core-plugin-api.errorapiref.md",tags:[],version:"current",frontMatter:{id:"core-plugin-api.errorapiref",title:"errorApiRef",description:"API reference for errorApiRef"}},a={},f=[];function s(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api",children:(0,n.jsx)(r.code,{children:"@backstage/core-plugin-api"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.errorapiref",children:(0,n.jsx)(r.code,{children:"errorApiRef"})})]}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.apiref",children:"ApiRef"})," of ",(0,n.jsx)(r.a,{href:"/docs/reference/core-plugin-api.errorapi",children:"ErrorApi"}),"."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"errorApiRef: ApiRef<ErrorApi>\n"})})]})}const l=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(s,e)})):s(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,c,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var f in i=Object(arguments[a]))t.call(i,f)&&(u[f]=i[f]);if(r){c=r(i);for(var s=0;s<c.length;s++)n.call(i,c[s])&&(u[c[s]]=i[c[s]])}}return u}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),r.Fragment=i("react.fragment")}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function f(e,r,t){var n,i={},f=null,s=null;for(n in void 0!==t&&(f=""+t),void 0!==r.key&&(f=""+r.key),void 0!==r.ref&&(s=r.ref),r)u.call(r,n)&&!a.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:o,type:e,key:f,ref:s,props:i,_owner:c.current}}r.jsx=f,r.jsxs=f},541535:(e,r,t)=>{var n=t(862525),o=60103,i=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var c=60109,u=60110,a=60112;r.Suspense=60113;var f=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;o=l("react.element"),i=l("react.portal"),r.Fragment=l("react.fragment"),r.StrictMode=l("react.strict_mode"),r.Profiler=l("react.profiler"),c=l("react.provider"),u=l("react.context"),a=l("react.forward_ref"),r.Suspense=l("react.suspense"),f=l("react.memo"),s=l("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function v(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}function m(){}function g(e,r,t){this.props=e,this.context=r,this.refs=h,this.updater=t||y}v.prototype.isReactComponent={},v.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=v.prototype;var _=g.prototype=new m;_.constructor=g,n(_,v.prototype),_.isPureReactComponent=!0;var b={current:null},j=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function k(e,r,t){var n,i={},c=null,u=null;if(null!=r)for(n in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(c=""+r.key),r)j.call(r,n)&&!O.hasOwnProperty(n)&&(i[n]=r[n]);var a=arguments.length-2;if(1===a)i.children=t;else if(1<a){for(var f=Array(a),s=0;s<a;s++)f[s]=arguments[s+2];i.children=f}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===i[n]&&(i[n]=a[n]);return{$$typeof:o,type:e,key:c,ref:u,props:i,_owner:b.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var R=/\/+/g;function S(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function x(e,r,t,n,c){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var a=!1;if(null===e)a=!0;else switch(u){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case o:case i:a=!0}}if(a)return c=c(a=e),e=""===n?"."+S(a,0):n,Array.isArray(c)?(t="",null!=e&&(t=e.replace(R,"$&/")+"/"),x(c,r,t,"",(function(e){return e}))):null!=c&&(w(c)&&(c=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,t+(!c.key||a&&a.key===c.key?"":(""+c.key).replace(R,"$&/")+"/")+e)),r.push(c)),1;if(a=0,n=""===n?".":n+":",Array.isArray(e))for(var f=0;f<e.length;f++){var s=n+S(u=e[f],f);a+=x(u,r,t,s,c)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),f=0;!(u=e.next()).done;)a+=x(u=u.value,r,t,s=n+S(u,f++),c);else if("object"===u)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return a}function E(e,r,t){if(null==e)return e;var n=[],o=0;return x(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function C(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function A(){var e=P.current;if(null===e)throw Error(d(321));return e}var $={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:E,forEach:function(e,r,t){E(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return E(e,(function(){r++})),r},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(d(143));return e}},r.Component=v,r.PureComponent=g,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,r.cloneElement=function(e,r,t){if(null==e)throw Error(d(267,e));var i=n({},e.props),c=e.key,u=e.ref,a=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,a=b.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(s in r)j.call(r,s)&&!O.hasOwnProperty(s)&&(i[s]=void 0===r[s]&&void 0!==f?f[s]:r[s])}var s=arguments.length-2;if(1===s)i.children=t;else if(1<s){f=Array(s);for(var l=0;l<s;l++)f[l]=arguments[l+2];i.children=f}return{$$typeof:o,type:e.type,key:c,ref:u,props:i,_owner:a}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:u,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},r.createElement=k,r.createFactory=function(e){var r=k.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:a,render:e}},r.isValidElement=w,r.lazy=function(e){return{$$typeof:s,_payload:{_status:-1,_result:e},_init:C}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return A().useCallback(e,r)},r.useContext=function(e,r){return A().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return A().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return A().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return A().useLayoutEffect(e,r)},r.useMemo=function(e,r){return A().useMemo(e,r)},r.useReducer=function(e,r,t){return A().useReducer(e,r,t)},r.useRef=function(e){return A().useRef(e)},r.useState=function(e){return A().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>u,ah:()=>i});var n=t(667294);const o=n.createContext({});function i(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const c={};function u({components:e,children:r,disableParentContext:t}){let u;return u=t?"function"==typeof e?e({}):e||c:i(e),n.createElement(o.Provider,{value:u},r)}}}]);