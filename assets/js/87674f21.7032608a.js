/*! For license information please see 87674f21.7032608a.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[359887],{159121:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var n=r(824246),u=r(511151);const o={id:"plugin-github-pull-requests-board.entityteampullrequestscardprops.pullrequestlimit",title:"EntityTeamPullRequestsCardProps.pullRequestLimit",description:"API reference for EntityTeamPullRequestsCardProps.pullRequestLimit"},s=void 0,l={id:"reference/plugin-github-pull-requests-board.entityteampullrequestscardprops.pullrequestlimit",title:"EntityTeamPullRequestsCardProps.pullRequestLimit",description:"API reference for EntityTeamPullRequestsCardProps.pullRequestLimit",source:"@site/../docs/reference/plugin-github-pull-requests-board.entityteampullrequestscardprops.pullrequestlimit.md",sourceDirName:"reference",slug:"/reference/plugin-github-pull-requests-board.entityteampullrequestscardprops.pullrequestlimit",permalink:"/docs/reference/plugin-github-pull-requests-board.entityteampullrequestscardprops.pullrequestlimit",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-github-pull-requests-board.entityteampullrequestscardprops.pullrequestlimit.md",tags:[],version:"current",frontMatter:{id:"plugin-github-pull-requests-board.entityteampullrequestscardprops.pullrequestlimit",title:"EntityTeamPullRequestsCardProps.pullRequestLimit",description:"API reference for EntityTeamPullRequestsCardProps.pullRequestLimit"}},i={},a=[];function c(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,u.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-github-pull-requests-board",children:(0,n.jsx)(t.code,{children:"@backstage/plugin-github-pull-requests-board"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-github-pull-requests-board.entityteampullrequestscardprops",children:(0,n.jsx)(t.code,{children:"EntityTeamPullRequestsCardProps"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/plugin-github-pull-requests-board.entityteampullrequestscardprops.pullrequestlimit",children:(0,n.jsx)(t.code,{children:"pullRequestLimit"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"pullRequestLimit?: number;\n"})})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,u.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(c,e)})):c(e)}},371426:(e,t,r)=>{var n=r(827378),u=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,o={},a=null,c=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(c=t.ref),t)s.call(t,n)&&!i.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:u,type:e,key:a,ref:c,props:o,_owner:l.current}}t.Fragment=o,t.jsx=a,t.jsxs=a},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),i=Symbol.for("react.context"),a=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function b(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}function _(){}function g(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=b.prototype;var v=g.prototype=new _;v.constructor=g,m(v,b.prototype),v.isPureReactComponent=!0;var q=Array.isArray,R=Object.prototype.hasOwnProperty,S={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var u,o={},s=null,l=null;if(null!=t)for(u in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(s=""+t.key),t)R.call(t,u)&&!E.hasOwnProperty(u)&&(o[u]=t[u]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var a=Array(i),c=0;c<i;c++)a[c]=arguments[c+2];o.children=a}if(e&&e.defaultProps)for(u in i=e.defaultProps)void 0===o[u]&&(o[u]=i[u]);return{$$typeof:r,type:e,key:s,ref:l,props:o,_owner:S.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var P=/\/+/g;function x(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,u,o,s){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var i=!1;if(null===e)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case r:case n:i=!0}}if(i)return s=s(i=e),e=""===o?"."+x(i,0):o,q(s)?(u="",null!=e&&(u=e.replace(P,"$&/")+"/"),C(s,t,u,"",(function(e){return e}))):null!=s&&(k(s)&&(s=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,u+(!s.key||i&&i.key===s.key?"":(""+s.key).replace(P,"$&/")+"/")+e)),t.push(s)),1;if(i=0,o=""===o?".":o+":",q(e))for(var a=0;a<e.length;a++){var c=o+x(l=e[a],a);i+=C(l,t,u,c,s)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),a=0;!(l=e.next()).done;)i+=C(l=l.value,t,u,c=o+x(l,a++),s);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function w(e,t,r){if(null==e)return e;var n=[],u=0;return C(e,n,"","",(function(e){return t.call(r,e,u++)})),n}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},T={transition:null},I={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:T,ReactCurrentOwner:S};t.Children={map:w,forEach:function(e,t,r){w(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return w(e,(function(){t++})),t},toArray:function(e){return w(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=u,t.Profiler=s,t.PureComponent=g,t.StrictMode=o,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var u=m({},e.props),o=e.key,s=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,l=S.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(a in t)R.call(t,a)&&!E.hasOwnProperty(a)&&(u[a]=void 0===t[a]&&void 0!==i?i[a]:t[a])}var a=arguments.length-2;if(1===a)u.children=n;else if(1<a){i=Array(a);for(var c=0;c<a;c++)i[c]=arguments[c+2];u.children=i}return{$$typeof:r,type:e.type,key:o,ref:s,props:u,_owner:l}},t.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=j,t.createFactory=function(e){var t=j.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:a,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:$}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,r){return O.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,r){return O.current.useReducer(e,t,r)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return O.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return O.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>l,ah:()=>o});var n=r(667294);const u=n.createContext({});function o(e){const t=n.useContext(u);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function l({components:e,children:t,disableParentContext:r}){let l;return l=r?"function"==typeof e?e({}):e||s:o(e),n.createElement(u.Provider,{value:l},t)}}}]);