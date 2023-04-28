/*! For license information please see b67e346f.e5e790b9.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[134946],{539407:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=n(824246),o=n(511151);const s={id:"FAQ",title:"FAQ",description:"All FAQ related to Backstage"},r=void 0,i={unversionedId:"FAQ",id:"FAQ",title:"FAQ",description:"All FAQ related to Backstage",source:"@site/../docs/FAQ.md",sourceDirName:".",slug:"/FAQ",permalink:"/docs/FAQ",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/FAQ.md",tags:[],version:"current",frontMatter:{id:"FAQ",title:"FAQ",description:"All FAQ related to Backstage"},sidebar:"docs",previous:{title:"ADR013: Proper use of HTTP fetching libraries",permalink:"/docs/architecture-decisions/adrs-adr013"},next:{title:"Introduction",permalink:"/docs/backend-system/"}},c={},l=[{value:"Product FAQ",id:"product-faq",level:2},{value:"Can we call Backstage something different? So that it fits our company better?",id:"can-we-call-backstage-something-different-so-that-it-fits-our-company-better",level:3},{value:"Is Backstage a monitoring platform?",id:"is-backstage-a-monitoring-platform",level:3},{value:"How is Backstage licensed?",id:"how-is-backstage-licensed",level:3},{value:"Why did we open source Backstage?",id:"why-did-we-open-source-backstage",level:3},{value:"Will Spotify&#39;s internal plugins be open sourced, too?",id:"will-spotifys-internal-plugins-be-open-sourced-too",level:3},{value:"What&#39;s the roadmap for Backstage?",id:"whats-the-roadmap-for-backstage",level:3},{value:"My company doesn&#39;t have thousands of developers or services. Is using Backstage excessive for our needs?",id:"my-company-doesnt-have-thousands-of-developers-or-services-is-using-backstage-excessive-for-our-needs",level:3},{value:"Our company has a strong design language system/brand that we want to incorporate. Does Backstage support this?",id:"our-company-has-a-strong-design-language-systembrand-that-we-want-to-incorporate-does-backstage-support-this",level:3},{value:"Technical FAQ",id:"technical-faq",level:2},{value:"Why Material-UI?",id:"why-material-ui",level:3},{value:"What technology does Backstage use?",id:"what-technology-does-backstage-use",level:3},{value:"What is the end-to-end user flow? The happy path story.",id:"what-is-the-end-to-end-user-flow-the-happy-path-story",level:3},{value:"What is a &quot;plugin&quot; in Backstage?",id:"what-is-a-plugin-in-backstage",level:3},{value:"Why can&#39;t I dynamically install plugins without modifications to the app?",id:"why-cant-i-dynamically-install-plugins-without-modifications-to-the-app",level:3},{value:"Why are there no published Docker images or helm charts for Backstage?",id:"why-are-there-no-published-docker-images-or-helm-charts-for-backstage",level:3},{value:"Do I have to write plugins in TypeScript?",id:"do-i-have-to-write-plugins-in-typescript",level:3},{value:"How do I find out if a plugin already exists?",id:"how-do-i-find-out-if-a-plugin-already-exists",level:3},{value:"Which plugin is used the most at Spotify?",id:"which-plugin-is-used-the-most-at-spotify",level:3},{value:"Are you planning to have plugins baked into the repo? Or should they be developed in separate repos?",id:"are-you-planning-to-have-plugins-baked-into-the-repo-or-should-they-be-developed-in-separate-repos",level:3},{value:"Any plans for integrating with other repository managers, such as GitLab or Bitbucket?",id:"any-plans-for-integrating-with-other-repository-managers-such-as-gitlab-or-bitbucket",level:3},{value:"Who maintains Backstage?",id:"who-maintains-backstage",level:3},{value:"Does Spotify provide a managed version of Backstage?",id:"does-spotify-provide-a-managed-version-of-backstage",level:3},{value:"How secure is Backstage?",id:"how-secure-is-backstage",level:3},{value:"Does Backstage collect any information that is shared with Spotify?",id:"does-backstage-collect-any-information-that-is-shared-with-spotify",level:3},{value:"Can Backstage be used to build something other than a developer portal?",id:"can-backstage-be-used-to-build-something-other-than-a-developer-portal",level:3},{value:"How can I get involved?",id:"how-can-i-get-involved",level:3}];function u(e){const t=Object.assign({h2:"h2",h3:"h3",p:"p",a:"a",strong:"strong",code:"code"},(0,o.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"product-faq",children:"Product FAQ"}),"\n",(0,a.jsx)(t.h3,{id:"can-we-call-backstage-something-different-so-that-it-fits-our-company-better",children:"Can we call Backstage something different? So that it fits our company better?"}),"\n",(0,a.jsx)(t.p,{children:"Yes, Backstage is just a platform for building your own developer portal. We\nhappen to call our internal version Backstage, as well, as a reference to our\nmusic roots. You can call your version whatever suits your team, company, or\nbrand."}),"\n",(0,a.jsx)(t.h3,{id:"is-backstage-a-monitoring-platform",children:"Is Backstage a monitoring platform?"}),"\n",(0,a.jsxs)(t.p,{children:["No, but it can be! Backstage is designed to be a developer portal for all your\ninfrastructure tooling, services, and documentation. So, it's not a monitoring\nplatform \u2014 but that doesn't mean you can't integrate a monitoring tool into\nBackstage by writing ",(0,a.jsx)(t.a,{href:"#what-is-a-plugin-in-backstage",children:"a plugin"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"how-is-backstage-licensed",children:"How is Backstage licensed?"}),"\n",(0,a.jsxs)(t.p,{children:["Backstage was released as open source software by Spotify and is licensed under\n",(0,a.jsx)(t.a,{href:"http://www.apache.org/licenses/LICENSE-2.0",children:"Apache License, Version 2.0"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"why-did-we-open-source-backstage",children:"Why did we open source Backstage?"}),"\n",(0,a.jsxs)(t.p,{children:["We hope to see Backstage become the infrastructure standard everywhere. When we\nsaw how much Backstage improved developer experience and productivity\ninternally, we wanted to share those gains. After all, if Backstage can create\norder in an engineering environment as open and diverse as ours, then we're\npretty sure it can create order (and boost productivity) anywhere. To learn\nmore, read our blog post,\n\"",(0,a.jsx)(t.a,{href:"https://backstage.io/blog/2020/03/18/what-is-backstage",children:"What the heck is Backstage anyway?"}),'"']}),"\n",(0,a.jsx)(t.h3,{id:"will-spotifys-internal-plugins-be-open-sourced-too",children:"Will Spotify's internal plugins be open sourced, too?"}),"\n",(0,a.jsxs)(t.p,{children:["Yes, we've already started releasing open source versions of some of the plugins\nwe use here, and we'll continue to do so.\n",(0,a.jsx)(t.a,{href:"#what-is-a-plugin-in-backstage",children:"Plugins"})," are the building blocks of\nfunctionality in Backstage. We have over 120 plugins inside Spotify \u2014 many of\nthose are specialized for our use, so will remain internal and proprietary to\nus. But we estimate that about a third of our existing plugins make good open\nsource candidates. (And we'll probably end up writing some brand new ones, too.)"]}),"\n",(0,a.jsx)(t.h3,{id:"whats-the-roadmap-for-backstage",children:"What's the roadmap for Backstage?"}),"\n",(0,a.jsxs)(t.p,{children:["We envision three phases, which you can learn about in\n",(0,a.jsx)(t.a,{href:"/docs/overview/roadmap",children:"our project roadmap"}),". Even though the open source version\nof Backstage is relatively new compared to our internal version, we have already\nbegun work on various aspects of all three phases. Looking at the\n",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/milestones",children:"milestones for active issues"}),"\nwill also give you a sense of our progress."]}),"\n",(0,a.jsx)(t.h3,{id:"my-company-doesnt-have-thousands-of-developers-or-services-is-using-backstage-excessive-for-our-needs",children:"My company doesn't have thousands of developers or services. Is using Backstage excessive for our needs?"}),"\n",(0,a.jsx)(t.p,{children:"Not at all! A core reason to adopt Backstage is to standardize how software is\nbuilt at your company. It's easier to decide on those standards as a small\ncompany, and grows in importance as the company grows. Backstage sets a\nfoundation, and an early investment in your infrastructure becomes even more\nvaluable as you grow."}),"\n",(0,a.jsx)(t.h3,{id:"our-company-has-a-strong-design-language-systembrand-that-we-want-to-incorporate-does-backstage-support-this",children:"Our company has a strong design language system/brand that we want to incorporate. Does Backstage support this?"}),"\n",(0,a.jsx)(t.p,{children:"Yes! The Backstage UI is built using Material-UI. With the theming capabilities\nof Material-UI, you are able to adapt the interface to your brand guidelines."}),"\n",(0,a.jsx)(t.h2,{id:"technical-faq",children:"Technical FAQ"}),"\n",(0,a.jsx)(t.h3,{id:"why-material-ui",children:"Why Material-UI?"}),"\n",(0,a.jsx)(t.p,{children:"The short answer is that's what we've been using in Backstage internally."}),"\n",(0,a.jsx)(t.p,{children:"The original decision was based on Google's Material Design being a thorough,\nwell thought out and complete design system, with many mature and powerful\nlibraries implemented in both the system itself and auxiliary components that we\nknew that we would like to use."}),"\n",(0,a.jsx)(t.p,{children:"It strikes a good balance between power, customizability, and ease of use. A\ncore focus of Backstage is to make plugin developers productive with as few\nhurdles as possible. Material-UI lets plugin makers get going easily with both\nwell-known tech and a large flora of components."}),"\n",(0,a.jsx)(t.h3,{id:"what-technology-does-backstage-use",children:"What technology does Backstage use?"}),"\n",(0,a.jsxs)(t.p,{children:["The codebase is a large-scale React application that uses TypeScript. For\n",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage#project-roadmap",children:"Phase 2"}),", we plan to\nuse Node.js and GraphQL."]}),"\n",(0,a.jsx)(t.h3,{id:"what-is-the-end-to-end-user-flow-the-happy-path-story",children:"What is the end-to-end user flow? The happy path story."}),"\n",(0,a.jsx)(t.p,{children:"There are three main user profiles for Backstage: the integrator, the\ncontributor, and the software engineer."}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.strong,{children:"integrator"})," hosts the Backstage app and configures which plugins are\navailable to use in the app."]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.strong,{children:"contributor"})," adds functionality to the app by writing plugins."]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.strong,{children:"software engineer"})," uses the app's functionality and interacts with its\nplugins."]}),"\n",(0,a.jsx)(t.h3,{id:"what-is-a-plugin-in-backstage",children:'What is a "plugin" in Backstage?'}),"\n",(0,a.jsx)(t.p,{children:"Plugins are what provide the feature functionality in Backstage. They are used\nto integrate different systems into Backstage's frontend, so that the developer\ngets a consistent UX, no matter what tool or service is being accessed on the\nother side."}),"\n",(0,a.jsx)(t.p,{children:"Each plugin is treated as a self-contained web app and can include almost any\ntype of content. Plugins all use a common set of platform APIs and reusable UI\ncomponents. Plugins can fetch data either from the backend or an API exposed\nthrough the proxy."}),"\n",(0,a.jsxs)(t.p,{children:["Learn more about ",(0,a.jsx)(t.a,{href:"/docs/overview/what-is-backstage",children:"the different components"})," that\nmake up Backstage."]}),"\n",(0,a.jsx)(t.h3,{id:"why-cant-i-dynamically-install-plugins-without-modifications-to-the-app",children:"Why can't I dynamically install plugins without modifications to the app?"}),"\n",(0,a.jsx)(t.p,{children:"This decision is part of the core architecture and development flow of\nBackstage. Plugins have a lot of freedom in what they provide and how they are\nintegrated into the app, and it would therefore add a lot of complexity to allow\nplugins to be integrated via configuration the same way as they can be\nintegrated with code."}),"\n",(0,a.jsx)(t.p,{children:"By bundling all plugins and their dependencies into one app bundle it is also\npossible to do significant optimizations to the app load time by allowing\nplugins to share dependencies between each other when possible. This contributes\nto Backstage being fast, which is an important part of the user and developer\nexperience."}),"\n",(0,a.jsx)(t.h3,{id:"why-are-there-no-published-docker-images-or-helm-charts-for-backstage",children:"Why are there no published Docker images or helm charts for Backstage?"}),"\n",(0,a.jsxs)(t.p,{children:["As mentioned above, Backstage is not a packaged service that you can use out of\nthe box. In order to get started with Backstage you need to use the\n",(0,a.jsx)(t.code,{children:"@backstage/create-app"})," package to create and customize your own Backstage app."]}),"\n",(0,a.jsxs)(t.p,{children:["In order to build a Docker image from your own app, you can use the\n",(0,a.jsx)(t.code,{children:"yarn build-image"})," command which is included out of the box in the app template.\nBy default this image will bundle up both the frontend and the backend into a\nsingle image that you can deploy using your favorite tooling."]}),"\n",(0,a.jsxs)(t.p,{children:["There are also some examples that can help you deploy Backstage to kubernetes in\nthe\n",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/contrib/kubernetes",children:"contrib"}),"\nfolder."]}),"\n",(0,a.jsx)(t.p,{children:"It is possible that example images will be provided in the future, which can be\nused to quickly try out a small subset of the functionality of Backstage, but\nthese would not be able to provide much more functionality on top of what you\ncan see on a demo site."}),"\n",(0,a.jsx)(t.h3,{id:"do-i-have-to-write-plugins-in-typescript",children:"Do I have to write plugins in TypeScript?"}),"\n",(0,a.jsx)(t.p,{children:"No, you can use JavaScript if you prefer. We want to keep the Backstage core\nAPIs in TypeScript, but aren't forcing it on individual plugins."}),"\n",(0,a.jsx)(t.h3,{id:"how-do-i-find-out-if-a-plugin-already-exists",children:"How do I find out if a plugin already exists?"}),"\n",(0,a.jsxs)(t.p,{children:["You can browse and search for all available plugins in the\n",(0,a.jsx)(t.a,{href:"https://backstage.io/plugins",children:"Plugin Marketplace"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["If you can't find it in the marketplace, before you write a plugin\n",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues?q=is%3Aissue+label%3Aplugin+",children:"search the plugin issues"}),"\nto see if is in the works. If no one's thought of it yet, great! Open a new\nissue as\n",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/new/choose",children:"a plugin suggestion"}),"\nand describe what your plugin will do. This will help coordinate our\ncontributors' efforts and avoid duplicating existing functionality."]}),"\n",(0,a.jsx)(t.h3,{id:"which-plugin-is-used-the-most-at-spotify",children:"Which plugin is used the most at Spotify?"}),"\n",(0,a.jsxs)(t.p,{children:['By far, our most-used plugin is our TechDocs plugin, which we use for creating\ntechnical documentation. Our philosophy at Spotify is to treat "docs like code",\nwhere you write documentation using the same workflow as you write your code.\nThis makes it easier to create, find, and update documentation.\n',(0,a.jsx)(t.a,{href:"https://backstage.io/docs/features/techdocs/",children:"TechDocs is now open source."}),'\n(See also:\n"',(0,a.jsx)(t.a,{href:"#will-spotifys-internal-plugins-be-open-sourced-too",children:"Will Spotify's internal plugins be open sourced, too?"}),'"\nabove)']}),"\n",(0,a.jsx)(t.h3,{id:"are-you-planning-to-have-plugins-baked-into-the-repo-or-should-they-be-developed-in-separate-repos",children:"Are you planning to have plugins baked into the repo? Or should they be developed in separate repos?"}),"\n",(0,a.jsxs)(t.p,{children:["Contributors can add open source plugins to the plugins directory in\n",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage",children:"this monorepo"}),". Integrators can then\nconfigure which open source plugins are available to use in their instance of\nthe app. Open source plugins are downloaded as npm packages published in the\nopen source repository. While we encourage using the open source model, we know\nthere are cases where contributors might want to experiment internally or keep\ntheir plugins closed source. Contributors writing closed source plugins should\ndevelop them in the plugins directory in their own Backstage repository.\nIntegrators also configure closed source plugins locally from the monorepo."]}),"\n",(0,a.jsx)(t.h3,{id:"any-plans-for-integrating-with-other-repository-managers-such-as-gitlab-or-bitbucket",children:"Any plans for integrating with other repository managers, such as GitLab or Bitbucket?"}),"\n",(0,a.jsxs)(t.p,{children:["We chose GitHub because it is the tool that we are most familiar with, so that\nwill naturally lead to integrations for GitHub being developed at an early\nstage. Hosting this project on GitHub does not exclude integrations with\nalternatives, such as\n",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues?q=is%3Aissue+is%3Aopen+GitLab",children:"GitLab"}),"\nor Bitbucket. We believe that in time there will be plugins that will provide\nfunctionality for these tools as well. Hopefully, contributed by the community!\nAlso note, implementations of Backstage can be hosted wherever you feel suits\nyour needs best."]}),"\n",(0,a.jsx)(t.h3,{id:"who-maintains-backstage",children:"Who maintains Backstage?"}),"\n",(0,a.jsxs)(t.p,{children:["Spotify will maintain the open source core, but we envision different parts of\nthe project being maintained by various companies and contributors. We also\nenvision a large, diverse ecosystem of open source plugins, which would be\nmaintained by their original authors/contributors or by the community. When it\ncomes to ",(0,a.jsx)(t.a,{href:"https://backstage.io/docs/deployment",children:"deployment"}),",\nthe system integrator (typically, the infrastructure team in your organization)\nmaintains Backstage in your own environment."]}),"\n",(0,a.jsxs)(t.p,{children:["For more information, see our\n",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/OWNERS.md",children:"Owners"})," and\n",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/GOVERNANCE.md",children:"Governance"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"does-spotify-provide-a-managed-version-of-backstage",children:"Does Spotify provide a managed version of Backstage?"}),"\n",(0,a.jsxs)(t.p,{children:["No, this is not a service offering. We build the piece of software, and someone\nin your infrastructure team is responsible for\n",(0,a.jsx)(t.a,{href:"https://backstage.io/docs/deployment",children:"deploying"})," and maintaining it."]}),"\n",(0,a.jsx)(t.h3,{id:"how-secure-is-backstage",children:"How secure is Backstage?"}),"\n",(0,a.jsxs)(t.p,{children:["We take security seriously. When it comes to packages and code we scan our\nrepositories periodically and update our packages to the latest versions. When\nit comes to deployment of Backstage within an organisation it depends on the\ndeployment and security setup in your organisation. Reach out to us on\n",(0,a.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"Discord"})," if you have specific queries."]}),"\n",(0,a.jsxs)(t.p,{children:["Please report sensitive security issues via Spotify's\n",(0,a.jsx)(t.a,{href:"https://hackerone.com/spotify",children:"bug-bounty program"})," rather than GitHub."]}),"\n",(0,a.jsx)(t.h3,{id:"does-backstage-collect-any-information-that-is-shared-with-spotify",children:"Does Backstage collect any information that is shared with Spotify?"}),"\n",(0,a.jsxs)(t.p,{children:["No. Backstage does not collect any telemetry from any third party using the\nplatform. Spotify, and the open source community, do have access to\n",(0,a.jsx)(t.a,{href:"https://github.com/features/insights",children:"GitHub Insights"}),", which contains\ninformation such as contributors, commits, traffic, and dependencies. Backstage\nis an open platform, but you are in control of your own data. You control who\nhas access to any data you provide to your version of Backstage and who that\ndata is shared with."]}),"\n",(0,a.jsx)(t.h3,{id:"can-backstage-be-used-to-build-something-other-than-a-developer-portal",children:"Can Backstage be used to build something other than a developer portal?"}),"\n",(0,a.jsxs)(t.p,{children:["Yes. The core frontend framework could be used for building any large-scale web\napplication where (1) multiple teams are building separate parts of the app, and\n(2) you want the overall experience to be consistent. That being said, in\n",(0,a.jsx)(t.a,{href:"/docs/overview/roadmap",children:"Phase 2"})," of the project we will add features that are\nneeded for developer portals and systems for managing software ecosystems. Our\nambition will be to keep Backstage modular."]}),"\n",(0,a.jsx)(t.h3,{id:"how-can-i-get-involved",children:"How can I get involved?"}),"\n",(0,a.jsxs)(t.p,{children:["Jump right in! Come help us fix some of the\n",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/contribute",children:"early bugs and good first issues"}),"\nor reach ",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/milestones",children:"a new milestone"}),".\nOr write an open source plugin for Backstage, like this\n",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/lighthouse",children:"Lighthouse plugin"}),".\nSee all the ways you can\n",(0,a.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/CONTRIBUTING.md",children:"contribute here"}),".\nWe'd love to have you as part of the community."]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(u,e)})):u(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var s,r,i=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in s=Object(arguments[c]))n.call(s,l)&&(i[l]=s[l]);if(t){r=t(s);for(var u=0;u<r.length;u++)a.call(s,r[u])&&(i[r[u]]=s[r[u]])}}return i}},371426:(e,t,n)=>{n(862525);var a=n(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),t.Fragment=s("react.fragment")}var r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var a,s={},l=null,u=null;for(a in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,a)&&!c.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===s[a]&&(s[a]=t[a]);return{$$typeof:o,type:e,key:l,ref:u,props:s,_owner:r.current}}t.jsx=l,t.jsxs=l},541535:(e,t,n)=>{var a=n(862525),o=60103,s=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var r=60109,i=60110,c=60112;t.Suspense=60113;var l=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var h=Symbol.for;o=h("react.element"),s=h("react.portal"),t.Fragment=h("react.fragment"),t.StrictMode=h("react.strict_mode"),t.Profiler=h("react.profiler"),r=h("react.provider"),i=h("react.context"),c=h("react.forward_ref"),t.Suspense=h("react.suspense"),l=h("react.memo"),u=h("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f={};function y(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||g}function m(){}function b(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=y.prototype;var w=b.prototype=new m;w.constructor=b,a(w,y.prototype),w.isPureReactComponent=!0;var v={current:null},k=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var a,s={},r=null,i=null;if(null!=t)for(a in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(r=""+t.key),t)k.call(t,a)&&!j.hasOwnProperty(a)&&(s[a]=t[a]);var c=arguments.length-2;if(1===c)s.children=n;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];s.children=l}if(e&&e.defaultProps)for(a in c=e.defaultProps)void 0===s[a]&&(s[a]=c[a]);return{$$typeof:o,type:e,key:r,ref:i,props:s,_owner:v.current}}function B(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var _=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function A(e,t,n,a,r){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case s:c=!0}}if(c)return r=r(c=e),e=""===a?"."+S(c,0):a,Array.isArray(r)?(n="",null!=e&&(n=e.replace(_,"$&/")+"/"),A(r,t,n,"",(function(e){return e}))):null!=r&&(B(r)&&(r=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(r,n+(!r.key||c&&c.key===r.key?"":(""+r.key).replace(_,"$&/")+"/")+e)),t.push(r)),1;if(c=0,a=""===a?".":a+":",Array.isArray(e))for(var l=0;l<e.length;l++){var u=a+S(i=e[l],l);c+=A(i,t,n,u,r)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(i=e.next()).done;)c+=A(i=i.value,t,n,u=a+S(i,l++),r);else if("object"===i)throw t=""+e,Error(p(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function O(e,t,n){if(null==e)return e;var a=[],o=0;return A(e,a,"","",(function(e){return t.call(n,e,o++)})),a}function I(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var W={current:null};function C(){var e=W.current;if(null===e)throw Error(p(321));return e}var P={ReactCurrentDispatcher:W,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:v,IsSomeRendererActing:{current:!1},assign:a};t.Children={map:O,forEach:function(e,t,n){O(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return O(e,(function(){t++})),t},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!B(e))throw Error(p(143));return e}},t.Component=y,t.PureComponent=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,t.cloneElement=function(e,t,n){if(null==e)throw Error(p(267,e));var s=a({},e.props),r=e.key,i=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,c=v.current),void 0!==t.key&&(r=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)k.call(t,u)&&!j.hasOwnProperty(u)&&(s[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)s.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];s.children=l}return{$$typeof:o,type:e.type,key:r,ref:i,props:s,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:r,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=B,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:I}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return C().useCallback(e,t)},t.useContext=function(e,t){return C().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return C().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return C().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return C().useLayoutEffect(e,t)},t.useMemo=function(e,t){return C().useMemo(e,t)},t.useReducer=function(e,t,n){return C().useReducer(e,t,n)},t.useRef=function(e){return C().useRef(e)},t.useState=function(e){return C().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>i,ah:()=>s});var a=n(667294);const o=a.createContext({});function s(e){const t=a.useContext(o);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||r:s(e),a.createElement(o.Provider,{value:i},t)}}}]);