/*! For license information please see e6230c69.855edaf3.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[606825],{376070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(824246),o=n(511151);const i={id:"yarn-migration",title:"Migration to Yarn 3",description:"Guide for how to migrate a Backstage project to use Yarn 3"},a=void 0,s={unversionedId:"tutorials/yarn-migration",id:"tutorials/yarn-migration",title:"Migration to Yarn 3",description:"Guide for how to migrate a Backstage project to use Yarn 3",source:"@site/../docs/tutorials/yarn-migration.md",sourceDirName:"tutorials",slug:"/tutorials/yarn-migration",permalink:"/docs/tutorials/yarn-migration",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/tutorials/yarn-migration.md",tags:[],version:"current",frontMatter:{id:"yarn-migration",title:"Migration to Yarn 3",description:"Guide for how to migrate a Backstage project to use Yarn 3"},sidebar:"docs",previous:{title:"Using the Backstage Proxy from Within a Plugin",permalink:"/docs/tutorials/using-backstage-proxy-within-plugin"},next:{title:"Overview",permalink:"/docs/architecture-decisions/"}},l={},c=[{value:"Migration",id:"migration",level:2},{value:"Ignore File Updates",id:"ignore-file-updates",level:3},{value:"Installation",id:"installation",level:3},{value:"Migrate Usage",id:"migrate-usage",level:3}];function u(e){const t=Object.assign({blockquote:"blockquote",p:"p",code:"code",a:"a",h2:"h2",h3:"h3",pre:"pre"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"NOTE: We do not yet recommend all projects to migrate to Yarn 3. Only do so if you have specific reasons for it."}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["While Backstage projects created with ",(0,r.jsx)(t.code,{children:"@backstage/create-app"})," use ",(0,r.jsx)(t.a,{href:"https://classic.yarnpkg.com/",children:"Yarn 1"})," by default, it\nis possible to switch them to instead use ",(0,r.jsx)(t.a,{href:"https://yarnpkg.com/",children:"Yarn 3"}),". Tools like ",(0,r.jsx)(t.code,{children:"yarn backstage-cli versions:bump"})," will\nstill work, as they recognize both lockfile formats."]}),"\n",(0,r.jsx)(t.h2,{id:"migration",children:"Migration"}),"\n",(0,r.jsxs)(t.p,{children:["In addition to this guide, also be sure to check out the ",(0,r.jsx)(t.a,{href:"https://yarnpkg.com/getting-started/migration",children:"Yarn migration guide"})," as well."]}),"\n",(0,r.jsx)(t.h3,{id:"ignore-file-updates",children:"Ignore File Updates"}),"\n",(0,r.jsx)(t.p,{children:"First off, be sure to have the updated ignore entries in your app. These are included in all newly created projects, but might be missing in yours:"}),"\n",(0,r.jsxs)(t.p,{children:["Add the following to ",(0,r.jsx)(t.code,{children:".gitignore"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-gitignore",children:"# Yarn 3 files\n.pnp.*\n.yarn/*\n!.yarn/patches\n!.yarn/plugins\n!.yarn/releases\n!.yarn/sdks\n!.yarn/versions\n"})}),"\n",(0,r.jsxs)(t.p,{children:["And this to ",(0,r.jsx)(t.code,{children:".dockerignore"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-gitignore",children:".yarn/cache\n.yarn/install-state.gz\n"})}),"\n",(0,r.jsx)(t.h3,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(t.p,{children:"Let's move on to the actual installation. We'd recommend making separate Git commits of most of these steps, in case you need to go back and debug anything. To install Yarn 3, run the following command in the project root:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn set version stable\n"})}),"\n",(0,r.jsx)(t.p,{children:"We'll need the Yarn workspace tools plugin later on, so let's install that too:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn plugin import @yarnpkg/plugin-workspace-tools\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Now we're ready to re-install all dependencies. This will update your ",(0,r.jsx)(t.code,{children:"yarn.lock"})," and switch the project to use ",(0,r.jsx)(t.code,{children:"node-modules"})," as the Yarn node linker."]}),"\n",(0,r.jsxs)(t.p,{children:["In case you had a ",(0,r.jsx)(t.code,{children:".yarnrc"})," you can delete it now, but be sure to migrate over any options to ",(0,r.jsx)(t.code,{children:".yarnrc.yml"}),". See the ",(0,r.jsx)(t.a,{href:"https://yarnpkg.com/configuration/manifest",children:"Yarn configuration docs"})," for a full list of options. For example, ",(0,r.jsx)(t.code,{children:"registry"})," is now ",(0,r.jsx)(t.code,{children:"npmRegistryServer"}),", and ",(0,r.jsx)(t.code,{children:"network-timeout"})," is ",(0,r.jsx)(t.code,{children:"httpTimeout"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"migrate-usage",children:"Migrate Usage"}),"\n",(0,r.jsxs)(t.p,{children:["At this point you'll be all set up with Yarn 3! What remains is to migrate any usage of Yarn according to their ",(0,r.jsx)(t.a,{href:"https://yarnpkg.com/getting-started/migration",children:"migration guide"}),". For example, any ",(0,r.jsx)(t.code,{children:"yarn install --frozen-lockfile"})," commands should be replaced with ",(0,r.jsx)(t.code,{children:"yarn install --immutable"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["You'll also need to update any ",(0,r.jsx)(t.code,{children:"Dockerfile"}),"s to add instructions to copy in your Yarn 3 installation into the image:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Dockerfile",children:"COPY .yarn ./.yarn\nCOPY .yarnrc.yml ./\n"})}),"\n",(0,r.jsxs)(t.p,{children:["In a multi-stage ",(0,r.jsx)(t.code,{children:"Dockerfile"}),", each stage that runs a ",(0,r.jsx)(t.code,{children:"yarn"})," command will also need the Yarn 3 installation. For example, in the final stage you may need to add the following:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Dockerfile",children:"COPY --from=build --chown=node:node /app/.yarn ./.yarn\nCOPY --from=build --chown=node:node /app/.yarnrc.yml  ./\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"--production"})," flag to ",(0,r.jsx)(t.code,{children:"yarn install"})," has been removed in Yarn 3, instead you need to use ",(0,r.jsx)(t.code,{children:"yarn workspaces focus --all --production"})," to avoid installing development dependencies in your production deployment. A tradeoff of this is that ",(0,r.jsx)(t.code,{children:"yarn workspaces focus"})," does not support the ",(0,r.jsx)(t.code,{children:"--immutable"})," flag."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Dockerfile",children:'RUN yarn workspaces focus --all --production && rm -rf "$(yarn cache clean)"\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Additionally, ",(0,r.jsx)(t.code,{children:"yarn config"})," has been reworked from being able to store any arbitrary key-value pairs to only supporting a handful of predefined pairs. Previously, we would set our preferred ",(0,r.jsx)(t.code,{children:"python3"})," interpreter to work around ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/11583",children:"any issues related to node-gyp"})," so we need to provide an appropriate substitute."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Dockerfile",children:'FROM node:16-bullseye-slim\n\n# highlight-add-start\n# Set Python interpreter for `node-gyp` to use\nENV PYTHON /usr/bin/python3\n# highlight-add-end\n\n# Install sqlite3 dependencies. You can skip this if you don\'t use sqlite3 in the image,\n# in which case you should also move better-sqlite3 to "devDependencies" in package.json.\nRUN apt-get update && \\\n    apt-get install -y --no-install-recommends libsqlite3-dev python3 build-essential && \\\n    # highlight-remove-start\n    rm -rf /var/lib/apt/lists/* && \\\n    yarn config set python /usr/bin/python3\n    # highlight-remove-end\n    # highlight-add-next-line\n    rm -rf /var/lib/apt/lists/*\n'})}),"\n",(0,r.jsxs)(t.p,{children:["You'll want to make sure that the ",(0,r.jsx)(t.code,{children:"PYTHON"})," environment variable is declared relatively early, before any instances of ",(0,r.jsx)(t.code,{children:"Yarn"})," are invoked as ",(0,r.jsx)(t.code,{children:"node-gyp"})," is indirectly triggered by some modules during installation."]}),"\n",(0,r.jsxs)(t.p,{children:["If you have any internal CLI tools in your project that are exposed through ",(0,r.jsx)(t.code,{children:'"bin"'})," entries in ",(0,r.jsx)(t.code,{children:"package.json"}),", then you'll need to add these packages as dependencies in your project root ",(0,r.jsx)(t.code,{children:"package.json"}),". This is to make sure Yarn picks up the executables and makes them available through ",(0,r.jsx)(t.code,{children:"yarn <executable>"}),"."]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(u,e)})):u(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,a,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var c in i=Object(arguments[l]))n.call(i,c)&&(s[c]=i[c]);if(t){a=t(i);for(var u=0;u<a.length;u++)r.call(i,a[u])&&(s[a[u]]=i[a[u]])}}return s}},371426:(e,t,n)=>{n(862525);var r=n(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,i={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:u,props:i,_owner:a.current}}t.jsx=c,t.jsxs=c},541535:(e,t,n)=>{var r=n(862525),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var a=60109,s=60110,l=60112;t.Suspense=60113;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;o=d("react.element"),i=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),a=d("react.provider"),s=d("react.context"),l=d("react.forward_ref"),t.Suspense=d("react.suspense"),c=d("react.memo"),u=d("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}function m(){}function j(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=g.prototype;var v=j.prototype=new m;v.constructor=j,r(v,g.prototype),v.isPureReactComponent=!0;var b={current:null},x=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,n){var r,i={},a=null,s=null;if(null!=t)for(r in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)x.call(t,r)&&!k.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===i[r]&&(i[r]=l[r]);return{$$typeof:o,type:e,key:a,ref:s,props:i,_owner:b.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,n,r,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case o:case i:l=!0}}if(l)return a=a(l=e),e=""===r?"."+S(l,0):r,Array.isArray(a)?(n="",null!=e&&(n=e.replace(O,"$&/")+"/"),C(a,t,n,"",(function(e){return e}))):null!=a&&(_(a)&&(a=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,n+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+e)),t.push(a)),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var c=0;c<e.length;c++){var u=r+S(s=e[c],c);l+=C(s,t,n,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),c=0;!(s=e.next()).done;)l+=C(s=s.value,t,n,u=r+S(s,c++),a);else if("object"===s)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function P(e,t,n){if(null==e)return e;var r=[],o=0;return C(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function Y(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function R(){var e=E.current;if(null===e)throw Error(f(321));return e}var $={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:P,forEach:function(e,t,n){P(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(f(143));return e}},t.Component=g,t.PureComponent=j,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,t.cloneElement=function(e,t,n){if(null==e)throw Error(f(267,e));var i=r({},e.props),a=e.key,s=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,l=b.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)x.call(t,u)&&!k.hasOwnProperty(u)&&(i[u]=void 0===t[u]&&void 0!==c?c[u]:t[u])}var u=arguments.length-2;if(1===u)i.children=n;else if(1<u){c=Array(u);for(var d=0;d<u;d++)c[d]=arguments[d+2];i.children=c}return{$$typeof:o,type:e.type,key:a,ref:s,props:i,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:Y}},t.memo=function(e,t){return{$$typeof:c,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return R().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,n){return R().useReducer(e,t,n)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>s,ah:()=>i});var r=n(667294);const o=r.createContext({});function i(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function s({components:e,children:t,disableParentContext:n}){let s;return s=n?"function"==typeof e?e({}):e||a:i(e),r.createElement(o.Provider,{value:s},t)}}}]);