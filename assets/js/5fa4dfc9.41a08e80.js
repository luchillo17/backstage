/*! For license information please see 5fa4dfc9.41a08e80.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[689854],{729845:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var t=n(824246),o=n(511151);const i={id:"plugin-permission-node.applyconditionsresponseentry",title:"ApplyConditionsResponseEntry",description:"API reference for ApplyConditionsResponseEntry"},s=void 0,c={unversionedId:"reference/plugin-permission-node.applyconditionsresponseentry",id:"reference/plugin-permission-node.applyconditionsresponseentry",title:"ApplyConditionsResponseEntry",description:"API reference for ApplyConditionsResponseEntry",source:"@site/../docs/reference/plugin-permission-node.applyconditionsresponseentry.md",sourceDirName:"reference",slug:"/reference/plugin-permission-node.applyconditionsresponseentry",permalink:"/docs/reference/plugin-permission-node.applyconditionsresponseentry",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-permission-node.applyconditionsresponseentry.md",tags:[],version:"current",frontMatter:{id:"plugin-permission-node.applyconditionsresponseentry",title:"ApplyConditionsResponseEntry",description:"API reference for ApplyConditionsResponseEntry"}},u={},a=[];function p(e){const r=Object.assign({p:"p",a:"a",code:"code",b:"b",pre:"pre"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-node",children:(0,t.jsx)(r.code,{children:"@backstage/plugin-permission-node"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-node.applyconditionsresponseentry",children:(0,t.jsx)(r.code,{children:"ApplyConditionsResponseEntry"})})]}),"\n",(0,t.jsx)(r.p,{children:"The result of applying the conditions, expressed as a definitive authorize result of ALLOW or DENY."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.b,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"export type ApplyConditionsResponseEntry = IdentifiedPermissionMessage<DefinitivePolicyDecision>;\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.b,{children:"References:"})," ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.identifiedpermissionmessage",children:"IdentifiedPermissionMessage"}),", ",(0,t.jsx)(r.a,{href:"/docs/reference/plugin-permission-common.definitivepolicydecision",children:"DefinitivePolicyDecision"})]})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(p,e)})):p(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,s,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var a in i=Object(arguments[u]))n.call(i,a)&&(c[a]=i[a]);if(r){s=r(i);for(var p=0;p<s.length;p++)t.call(i,s[p])&&(c[s[p]]=i[s[p]])}}return c}},371426:(e,r,n)=>{n(862525);var t=n(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),r.Fragment=i("react.fragment")}var s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,n){var t,i={},a=null,p=null;for(t in void 0!==n&&(a=""+n),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(p=r.ref),r)c.call(r,t)&&!u.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:o,type:e,key:a,ref:p,props:i,_owner:s.current}}r.jsx=a,r.jsxs=a},541535:(e,r,n)=>{var t=n(862525),o=60103,i=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var s=60109,c=60110,u=60112;r.Suspense=60113;var a=60115,p=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),i=f("react.portal"),r.Fragment=f("react.fragment"),r.StrictMode=f("react.strict_mode"),r.Profiler=f("react.profiler"),s=f("react.provider"),c=f("react.context"),u=f("react.forward_ref"),r.Suspense=f("react.suspense"),a=f("react.memo"),p=f("react.lazy")}var l="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function m(e,r,n){this.props=e,this.context=r,this.refs=h,this.updater=n||y}function v(){}function g(e,r,n){this.props=e,this.context=r,this.refs=h,this.updater=n||y}m.prototype.isReactComponent={},m.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=m.prototype;var _=g.prototype=new v;_.constructor=g,t(_,m.prototype),_.isPureReactComponent=!0;var b={current:null},j=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function E(e,r,n){var t,i={},s=null,c=null;if(null!=r)for(t in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(s=""+r.key),r)j.call(r,t)&&!O.hasOwnProperty(t)&&(i[t]=r[t]);var u=arguments.length-2;if(1===u)i.children=n;else if(1<u){for(var a=Array(u),p=0;p<u;p++)a[p]=arguments[p+2];i.children=a}if(e&&e.defaultProps)for(t in u=e.defaultProps)void 0===i[t]&&(i[t]=u[t]);return{$$typeof:o,type:e,key:s,ref:c,props:i,_owner:b.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var w=/\/+/g;function C(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function x(e,r,n,t,s){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var u=!1;if(null===e)u=!0;else switch(c){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case i:u=!0}}if(u)return s=s(u=e),e=""===t?"."+C(u,0):t,Array.isArray(s)?(n="",null!=e&&(n=e.replace(w,"$&/")+"/"),x(s,r,n,"",(function(e){return e}))):null!=s&&(k(s)&&(s=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(s,n+(!s.key||u&&u.key===s.key?"":(""+s.key).replace(w,"$&/")+"/")+e)),r.push(s)),1;if(u=0,t=""===t?".":t+":",Array.isArray(e))for(var a=0;a<e.length;a++){var p=t+C(c=e[a],a);u+=x(c,r,n,p,s)}else if(p=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=l&&e[l]||e["@@iterator"])?e:null}(e),"function"==typeof p)for(e=p.call(e),a=0;!(c=e.next()).done;)u+=x(c=c.value,r,n,p=t+C(c,a++),s);else if("object"===c)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return u}function R(e,r,n){if(null==e)return e;var t=[],o=0;return x(e,t,"","",(function(e){return r.call(n,e,o++)})),t}function S(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function $(){var e=P.current;if(null===e)throw Error(d(321));return e}var A={ReactCurrentDispatcher:P,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:t};r.Children={map:R,forEach:function(e,r,n){R(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return R(e,(function(){r++})),r},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error(d(143));return e}},r.Component=m,r.PureComponent=g,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,r.cloneElement=function(e,r,n){if(null==e)throw Error(d(267,e));var i=t({},e.props),s=e.key,c=e.ref,u=e._owner;if(null!=r){if(void 0!==r.ref&&(c=r.ref,u=b.current),void 0!==r.key&&(s=""+r.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(p in r)j.call(r,p)&&!O.hasOwnProperty(p)&&(i[p]=void 0===r[p]&&void 0!==a?a[p]:r[p])}var p=arguments.length-2;if(1===p)i.children=n;else if(1<p){a=Array(p);for(var f=0;f<p;f++)a[f]=arguments[f+2];i.children=a}return{$$typeof:o,type:e.type,key:s,ref:c,props:i,_owner:u}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:c,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},r.createElement=E,r.createFactory=function(e){var r=E.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:u,render:e}},r.isValidElement=k,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:S}},r.memo=function(e,r){return{$$typeof:a,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,n){return $().useImperativeHandle(e,r,n)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,n){return $().useReducer(e,r,n)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Zo:()=>c,ah:()=>i});var t=n(667294);const o=t.createContext({});function i(e){const r=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const s={};function c({components:e,children:r,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||s:i(e),t.createElement(o.Provider,{value:c},r)}}}]);