/*! For license information please see 91244bc3.a5136c3d.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[834183],{885758:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=r(824246),o=r(511151);const i={id:"plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovideroptions",title:"IncrementalEntityProviderOptions",description:"API reference for IncrementalEntityProviderOptions"},c=void 0,a={unversionedId:"reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovideroptions",id:"reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovideroptions",title:"IncrementalEntityProviderOptions",description:"API reference for IncrementalEntityProviderOptions",source:"@site/../docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovideroptions.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovideroptions",permalink:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovideroptions",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovideroptions.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovideroptions",title:"IncrementalEntityProviderOptions",description:"API reference for IncrementalEntityProviderOptions"}},s={},l=[{value:"Properties",id:"properties",level:2}];function u(e){const t=Object.assign({p:"p",a:"a",code:"code",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-catalog-backend-module-incremental-ingestion"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovideroptions",children:(0,n.jsx)(t.code,{children:"IncrementalEntityProviderOptions"})})]}),"\n",(0,n.jsx)(t.p,{children:"Signature:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export interface IncrementalEntityProviderOptions \n"})}),"\n",(0,n.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Property"}),(0,n.jsx)(t.th,{children:"Modifiers"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovideroptions.backoff",children:"backoff?"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"DurationObjectUnits[]"}),(0,n.jsxs)(t.td,{children:["(Optional)"," In the event of an error during an ingestion burst, the backoff determines how soon it will be retried. E.g. ","[{ minutes: 1}, { minutes: 5}, {minutes: 30 }, { hours: 3 }]"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovideroptions.burstinterval",children:"burstInterval"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"DurationObjectUnits"}),(0,n.jsx)(t.td,{children:"Entities are ingested in bursts. This interval determines how much time to wait in between each burst."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovideroptions.burstlength",children:"burstLength"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"DurationObjectUnits"}),(0,n.jsx)(t.td,{children:"Entities are ingested in bursts. This value determines how long to keep ingesting within each burst."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovideroptions.rejectemptysourcecollections",children:"rejectEmptySourceCollections?"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"boolean"}),(0,n.jsxs)(t.td,{children:["(Optional)"," Similar to the rejectRemovalsAbovePercentage, this option prevents removals in circumstances where a data source has improperly returned 0 assets. If set to ","true",", Backstage will reject removals when that happens."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovideroptions.rejectremovalsabovepercentage",children:"rejectRemovalsAbovePercentage?"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"number"}),(0,n.jsxs)(t.td,{children:["(Optional)"," If an error occurs at a data source that results in a large number of assets being inadvertently removed, it will result in Backstage removing all associated entities. To avoid that, set a percentage of entities past which removal will be disallowed."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/reference/plugin-catalog-backend-module-incremental-ingestion.incrementalentityprovideroptions.restlength",children:"restLength"})}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:"DurationObjectUnits"}),(0,n.jsx)(t.td,{children:"After a successful ingestion, the incremental entity provider will rest for this period of time before starting to ingest again."})]})]})]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(u,e)})):u(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,c,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),s=1;s<arguments.length;s++){for(var l in i=Object(arguments[s]))r.call(i,l)&&(a[l]=i[l]);if(t){c=t(i);for(var u=0;u<c.length;u++)n.call(i,c[u])&&(a[c[u]]=i[c[u]])}}return a}},371426:(e,t,r)=>{r(862525);var n=r(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,i={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,n)&&!s.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:u,props:i,_owner:c.current}}t.jsx=l,t.jsxs=l},541535:(e,t,r)=>{var n=r(862525),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var c=60109,a=60110,s=60112;t.Suspense=60113;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;o=d("react.element"),i=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),c=d("react.provider"),a=d("react.context"),s=d("react.forward_ref"),t.Suspense=d("react.suspense"),l=d("react.memo"),u=d("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function y(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||h}function g(){}function v(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=y.prototype;var b=v.prototype=new g;b.constructor=v,n(b,y.prototype),b.isPureReactComponent=!0;var j={current:null},x=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,r){var n,i={},c=null,a=null;if(null!=t)for(n in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(c=""+t.key),t)x.call(t,n)&&!_.hasOwnProperty(n)&&(i[n]=t[n]);var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===i[n]&&(i[n]=s[n]);return{$$typeof:o,type:e,key:c,ref:a,props:i,_owner:j.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var w=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,r,n,c){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var s=!1;if(null===e)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case o:case i:s=!0}}if(s)return c=c(s=e),e=""===n?"."+E(s,0):n,Array.isArray(c)?(r="",null!=e&&(r=e.replace(w,"$&/")+"/"),P(c,t,r,"",(function(e){return e}))):null!=c&&(O(c)&&(c=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,r+(!c.key||s&&s.key===c.key?"":(""+c.key).replace(w,"$&/")+"/")+e)),t.push(c)),1;if(s=0,n=""===n?".":n+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=n+E(a=e[l],l);s+=P(a,t,r,u,c)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(a=e.next()).done;)s+=P(a=a.value,t,r,u=n+E(a,l++),c);else if("object"===a)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function S(e,t,r){if(null==e)return e;var n=[],o=0;return P(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function C(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var I={current:null};function R(){var e=I.current;if(null===e)throw Error(p(321));return e}var $={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:S,forEach:function(e,t,r){S(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return S(e,(function(){t++})),t},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error(p(143));return e}},t.Component=y,t.PureComponent=v,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,r){if(null==e)throw Error(p(267,e));var i=n({},e.props),c=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=j.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)x.call(t,u)&&!_.hasOwnProperty(u)&&(i[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)i.children=r;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];i.children=l}return{$$typeof:o,type:e.type,key:c,ref:a,props:i,_owner:s}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:a,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=O,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:C}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return R().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,r){return R().useReducer(e,t,r)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.2"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>a,ah:()=>i});var n=r(667294);const o=n.createContext({});function i(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function a({components:e,children:t,disableParentContext:r}){let a;return a=r?"function"==typeof e?e({}):e||c:i(e),n.createElement(o.Provider,{value:a},t)}}}]);