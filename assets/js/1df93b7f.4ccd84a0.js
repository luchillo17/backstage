"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[353237],{137642:(e,t,a)=>{a.d(t,{n:()=>s});var n=a(386010),r=a(667294);const l="bannerSection_EqIc",s=({children:e,className:t,greyBackground:a=!1,greenGradientBackground:s=!1,greenBottomGradientBackground:o=!1,greenCallToActionGradientBackground:i=!1})=>r.createElement("section",{className:(0,n.Z)(l,t,{greyBackground:a,greenGradientBackground:s,greenBottomGradientBackground:o,greenCallToActionGradientBackground:i})},r.createElement("div",{className:"container padding-horiz--lg padding-vert--xl"},e))},201340:(e,t,a)=>{a.d(t,{E:()=>o});var n=a(386010),r=a(667294);const l="sectionGridContainer__rT4",s="gridContainer_uAL8",o=({header:e,children:t,className:a})=>r.createElement("div",{className:(0,n.Z)(l,a)},e&&r.createElement("div",{className:"gridHeader"},e),r.createElement("div",{className:s},Array.isArray(t)?t.map(((e,t)=>r.cloneElement(e,{key:t,className:(0,n.Z)(e.props.className)}))):t))},448501:(e,t,a)=>{a.d(t,{b:()=>o});var n=a(931984),r=a(386010),l=a(667294);const s="contentBlock_rJQu",o=({children:e,title:t,className:a,topImgSrc:o,hasBulletLine:i,actionButtons:c})=>l.createElement("div",{className:(0,r.Z)(a,s)},o&&l.createElement("img",{src:o,alt:o}),l.createElement("div",{className:"contentBlockTitle"},i&&l.createElement("div",{className:"bulletLine"}),t&&l.isValidElement(t)?t:l.createElement("h2",null,t)),e&&l.isValidElement(e)?e:l.createElement("p",null,e),c&&l.createElement("div",{className:"actionButtons"},c.map((({link:e,label:t},a)=>l.createElement(n.Z,{key:a,className:"button button--primary button--lg",to:e},t)))))},612308:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var n=a(667294),r=a(430358);function l({children:e,fallback:t}){return(0,r.Z)()?n.createElement(n.Fragment,null,null==e?void 0:e()):null!=t?t:null}var s=a(931984),o=a(208241),i=a(137642),c=a(201340),m=a(448501),d=a(794672),u=a(386010);const g={homePage:"homePage_Fi_C",newsletterBanner:"newsletterBanner_jXaJ",svgContainer:"svgContainer_abgx",catalogContainer:"catalogContainer_kqbo",softwareTemplatesContainer:"softwareTemplatesContainer__RKV",kubernetesSectionContainer:"kubernetesSectionContainer__PfI"},h="hubSpotNewAdopterFormContainer_pxkW",p="hubSpotNewAdopterFormContent_RCWQ",b=()=>{const[e,t]=(0,n.useState)(!0);return(0,n.useEffect)((()=>{const e=document.createElement("script");e.src="https://js.hsforms.net/forms/v2.js",document.body.appendChild(e),e.addEventListener("load",(()=>{window.hbspt&&window.hbspt.forms.create({portalId:"21894833",formId:"9a5aa2af-87f3-4a44-819f-88ee243bb61e",target:`.${p}`,pageId:"79735607665"})}))}),[]),n.createElement("div",{className:(0,u.Z)(h,e&&"adoptersFormHidden")},n.createElement("button",{className:"button button--primary",onClick:()=>{t(!e)}},"New Adopters"),n.createElement("div",{className:(0,u.Z)("padding-left--lg padding-vert--lg thin-scrollbar",p)}))},E="hiddenNewsletterBanner",f=()=>{const{siteConfig:e}=(0,o.Z)(),[t,a]=(0,n.useState)((()=>JSON.parse(localStorage.getItem(E))||!1));return n.createElement(d.Z,null,n.createElement("div",{className:g.homePage},n.createElement(i.n,{greyBackground:!0},n.createElement(c.E,{header:!t&&n.createElement("div",{className:(0,u.W)("card","padding--md",g.newsletterBanner)},n.createElement("div",{className:"text--left bannerContent"},"\ud83d\uddde\ufe0f Want to stay up to date with Backstage? Sign up for our"," ",n.createElement(s.Z,{to:"https://info.backstage.spotify.com/newsletter_subscribe",className:"text--secondary"},"Newsletter"),"!"),n.createElement("div",{className:(0,u.W)("button button--link","bannerCloseButton"),onClick:()=>{return e=!0,localStorage.setItem(E,JSON.stringify(e)),void a(e);var e}},n.createElement("svg",{className:"text--secondary",width:"24",height:"24",viewBox:"0 0 24 24"},n.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}))))},n.createElement(m.b,{className:g.openPlatformBanner,title:n.createElement("h1",null," An open platform for building developer portals"),actionButtons:[{link:"https://github.com/backstage/backstage#getting-started",label:"GITHUB"},{link:"https://info.backstage.spotify.com/office-hours",label:"OFFICE HOURS"}]},"Powered by a centralized software catalog, Backstage restores order to your infrastructure and enables your product teams to ship high-quality code quickly \u2014 without compromising autonomy."),n.createElement("div",{className:g.svgContainer},n.createElement("img",{className:"laptopSvg",src:`${e.baseUrl}img/laptop.svg`}),n.createElement("img",{className:"laptopScreenGif",src:`${e.baseUrl}animations/backstage-logos-hero-8.gif`})))),n.createElement(i.n,null,n.createElement(c.E,null,n.createElement(m.b,{title:"The Speed Paradox",topImgSrc:`${e.baseUrl}animations/backstage-speed-paradox-7.gif`},"At Spotify, we've always believed in the speed and ingenuity that comes from having autonomous development teams. But as we learned firsthand, the faster you grow, the more fragmented and complex your software ecosystem becomes. And then everything slows down again."),n.createElement(m.b,{title:"The Standards Paradox",topImgSrc:`${e.baseUrl}animations/backstage-standards-paradox-4.gif`},"By centralizing services and standardizing your tooling, Backstage streamlines your development environment from end to end. Instead of restricting autonomy, standardization frees your engineers from infrastructure complexity. So you can return to building and scaling, quickly and safely."))),n.createElement(i.n,{greenGradientBackground:!0},n.createElement("div",{className:g.catalogContainer},n.createElement("div",{className:"catalogTitle"},n.createElement("img",{src:`${e.baseUrl}animations/backstage-software-catalog-icon-1.gif`,alt:"Software Catalog Planet GIF"}),n.createElement("h2",{className:"text--primary"},"Backstage Software Catalog"),n.createElement("h1",null,"Build an ecosystem, not a wilderness")),n.createElement("picture",{className:"catalogImg"},n.createElement("source",{srcSet:`${e.baseUrl}img/components-with-filter.png`,media:"(min-width: 997px)"}),n.createElement("img",{src:`${e.baseUrl}img/components-with-filter-small.png`,alt:"Software Catalog Filter Sidebar"})),n.createElement(m.b,{title:"Manage all your software, all in one place",hasBulletLine:!0},"Backstage makes it easy for one team to manage 10 services \u2014 and makes it possible for your company to manage thousands of them"),n.createElement(m.b,{title:"A uniform overview",hasBulletLine:!0},"Every team can see all the services they own and related resources (deployments, data pipelines, pull request status, etc.)"),n.createElement(m.b,{title:"Metadata on tap",hasBulletLine:!0},"All that information can be shared with plugins inside Backstage to enable other management features, like resource monitoring and testing"),n.createElement(m.b,{title:"Not just services",hasBulletLine:!0},"Libraries, websites, ML models \u2014 you name it, Backstage knows all about it, including who owns it, dependencies, and more"),n.createElement(m.b,{title:"Discoverability & accountability",hasBulletLine:!0},"No more orphan software hiding in the dark corners of your tech stack"))),n.createElement(i.n,{greenCallToActionGradientBackground:!0},n.createElement("div",{className:"padding--lg text--center"},n.createElement("h1",null,"Learn more about the software catalog"),n.createElement(s.Z,{to:"https://backstage.io/docs/features/software-catalog/",className:"button button--secondary"},"READ"))),n.createElement(i.n,{greenBottomGradientBackground:!0},n.createElement("div",{className:g.softwareTemplatesContainer},n.createElement("div",{className:"softwareTemplatesTitle"},n.createElement("img",{src:`${e.baseUrl}animations/backstage-software-templates-icon-5.gif`,alt:"Software Templates Rocket GIF"}),n.createElement("h2",{className:"text--primary"},"Backstage Software Templates"),n.createElement("h1",null,"Standards can set you free")),n.createElement("picture",{className:"softwareTemplatesImg"},n.createElement("source",{srcSet:`${e.baseUrl}img/cards.png`,media:"(min-width: 997px)"}),n.createElement("img",{src:`${e.baseUrl}img/service-cards.png`,alt:"Software Templates Cards"})),n.createElement(m.b,{title:"Like automated getting started guides",hasBulletLine:!0},"Using templates, engineers can spin up a new microservice with your organization's best practices built-in, right from the start"),n.createElement(m.b,{title:"Push-button deployment",hasBulletLine:!0},"Click a button to create a Spring Boot project with your repo automatically configured on GitHub and your CI already running the first build"),n.createElement(m.b,{title:"Built to your standards",hasBulletLine:!0},"Go instead of Java? CircleCI instead of Jenkins? Serverless instead of Kubernetes? GCP instead of AWS? Customize your recipes with your best practices baked-in"),n.createElement(m.b,{title:"Golden Paths pave the way",hasBulletLine:!0},"When the right way is also the easiest way, engineers get up and running faster \u2014 and more safely"))),n.createElement(i.n,{greenCallToActionGradientBackground:!0},n.createElement("div",{className:"padding--lg text--center"},n.createElement("h1",null,"Build your own software templates"),n.createElement(s.Z,{to:"https://backstage.io/docs/features/software-templates",className:"button button--secondary"},"CONTRIBUTE"))),n.createElement(i.n,{greenBottomGradientBackground:!0},n.createElement("div",{className:g.softwareTemplatesContainer},n.createElement("div",{className:"softwareTemplatesTitle"},n.createElement("img",{src:`${e.baseUrl}animations/backstage-techdocs-icon-1.gif`,alt:"Backstage TechDocs File Copy GIF"}),n.createElement("h2",{className:"text--primary"},"Backstage TechDocs"),n.createElement("h1",null,"Docs like code")),n.createElement("picture",{className:"softwareTemplatesImg"},n.createElement("source",{srcSet:`${e.baseUrl}img/techdocs2.gif`,media:"(min-width: 997px)"}),n.createElement("img",{src:`${e.baseUrl}img/techdocs-static-mobile.png`,alt:"Backstage TechDocs Markdown to HTML"})),n.createElement(m.b,{title:"Free documentation",hasBulletLine:!0},"Whenever you use a Backstage Software Template, your project automatically gets a TechDocs site, for free"),n.createElement(m.b,{title:"Easy to write",hasBulletLine:!0},"With our docs-like-code approach, engineers write their documentation in Markdown files right alongside their code"),n.createElement(m.b,{title:"Easy to maintain",hasBulletLine:!0},"Updating code? Update your documentation while you're there \u2014 with docs and code in the same place, it becomes a natural part of your workstream"),n.createElement(m.b,{title:"Easy to find and use",hasBulletLine:!0},"Since all your documentation is in Backstage, finding any TechDoc is just a search query away"))),n.createElement(i.n,{greenCallToActionGradientBackground:!0},n.createElement("div",{className:"padding--lg text--center"},n.createElement("h1",null,"Learn more about TechDocs"),n.createElement(s.Z,{to:"https://backstage.io/docs/features/techdocs/",className:"button button--secondary"},"DOCS"))),n.createElement(i.n,{greenGradientBackground:!0},n.createElement("div",{className:g.softwareTemplatesContainer},n.createElement("div",{className:"softwareTemplatesTitle"},n.createElement("img",{src:`${e.baseUrl}animations/backstage-search-platform-icon-1.gif`,alt:"Search Platform Telescope GIF"}),n.createElement("h2",{className:"text--primary"},"Backstage Search Platform"),n.createElement("h1",null,"A search platform made just for you")),n.createElement("picture",{className:"softwareTemplatesImg"},n.createElement("source",{srcSet:`${e.baseUrl}img/search-platform-overview.png`,media:"(min-width: 997px)"}),n.createElement("img",{src:`${e.baseUrl}img/search-platform-overview-small.png`,alt:"Search Platform Search Bar"})),n.createElement(m.b,{title:"Way more than a text box",hasBulletLine:!0},"Backstage Search more than just a box you type questions into \u2014 it's an entire platform all by itself, which you can customize to fit your organization's needs"),n.createElement(m.b,{title:"Search the way you want",hasBulletLine:!0},"Bring your own search engine, create a customized search page experience, or edit the look and feel of each search result"),n.createElement(m.b,{title:"Index everything, find anything",hasBulletLine:!0},"With an extensible backend, you can search beyond the Software Catalog and index any source you'd like \u2014 whether it's TechDocs or Confluence and Stack Overflow"),n.createElement(m.b,{title:"Discoverability unlocked",hasBulletLine:!0},"New hires and seasoned employees alike can easily search your infrastructure instead of getting lost in it"))),n.createElement(i.n,{greenCallToActionGradientBackground:!0},n.createElement("div",{className:"padding--lg text--center"},n.createElement("h1",null,"Learn more about Backstage Search"),n.createElement(s.Z,{to:"https://backstage.io/docs/features/search/",className:"button button--secondary"},"READ"))),n.createElement(i.n,{greenBottomGradientBackground:!0},n.createElement(c.E,{className:g.kubernetesSectionContainer,header:n.createElement(n.Fragment,null,n.createElement("img",{src:`${e.baseUrl}animations/backstage-kubernetes-icon-1.gif`,alt:"Backstage Kubernetes Flag GIF"}),n.createElement("h2",{className:"text--primary"},"Backstage Kubernetes"),n.createElement("h1",null,"Manage your services, not clusters"))},n.createElement(m.b,{title:"Kubernetes made just for service owners",hasBulletLine:!0},"Backstage features the first Kubernetes monitoring tool designed around the needs of service owners, not cluster admins"),n.createElement(m.b,{title:"Your service at a glance",hasBulletLine:!0},"Get all your service's deployments in one, aggregated view \u2014 no more digging through cluster logs in a CLI, no more combing through lists of services you don't own"),n.createElement(m.b,{title:"Pick a cloud, any cloud",hasBulletLine:!0},"Since Backstage uses the Kubernetes API, it's cloud agnostic \u2014 so it works no matter which cloud provider or managed Kubernetes service you use, and even works in multi-cloud orgs"),n.createElement(m.b,{title:"Any K8s, one UI",hasBulletLine:!0},"Now you don't have to switch dashboards when you move from local testing to production, or from one cloud provider to another"))),n.createElement(i.n,{greenCallToActionGradientBackground:!0},n.createElement("div",{className:"padding--lg text--center"},n.createElement("h1",null,"Learn more about the K8s plugin"),n.createElement(s.Z,{to:"https://backstage.io/blog/2021/01/12/new-backstage-feature-kubernetes-for-service-owners",className:"button button--secondary"},"READ"))),n.createElement(i.n,{greenBottomGradientBackground:!0},n.createElement("div",{className:g.softwareTemplatesContainer},n.createElement("div",{className:"softwareTemplatesTitle"},n.createElement("img",{src:`${e.baseUrl}animations/backstage-plugin-icon-2.gif`,alt:"Plugins Building Blocks GIF"}),n.createElement("h2",{className:"text--primary"},"Customize Backstage with plugins"),n.createElement("h1",null,"An app store for your infrastructure")),n.createElement("picture",{className:"softwareTemplatesImg"},n.createElement("source",{srcSet:`${e.baseUrl}img/cards-plugins.png`,media:"(min-width: 997px)"}),n.createElement("img",{src:`${e.baseUrl}img/plugins.png`,alt:"Plugins Cards"})),n.createElement(m.b,{title:"Add functionality",hasBulletLine:!0},"Want scalable website testing? Add the"," ",n.createElement(s.Z,{to:"https://backstage.io/blog/2020/04/06/lighthouse-plugin"},"Lighthouse"," "),"plugin. Wondering about recommended frameworks? Add the"," ",n.createElement(s.Z,{to:"https://backstage.io/blog/2020/05/14/tech-radar-plugin"},"Tech Radar"," "),"plugin."),n.createElement(m.b,{title:"BYO Plugins",hasBulletLine:!0},"If you don't see the plugin you need, it's simple to build your own"),n.createElement(m.b,{title:"Integrate your own custom tooling",hasBulletLine:!0},"Building internal plugins lets you tailor your version of Backstage to be a perfect fit for your infrastructure"),n.createElement(m.b,{title:"Share with the community",hasBulletLine:!0},"Building ",n.createElement(s.Z,{to:"/plugins"},"open source plugins")," ","contributes to the entire Backstage ecosystem, which benefits everyone"))),n.createElement(i.n,{greenCallToActionGradientBackground:!0},n.createElement("div",{className:"padding--lg text--center"},n.createElement("h1",null,"Build a plugin"),n.createElement(s.Z,{to:"/docs/plugins/create-a-plugin",className:"button button--secondary"},"CONTRIBUTE"))),n.createElement(i.n,null,n.createElement("div",{className:"padding--lg text--center"},n.createElement("h2",null,"Backstage is a"," ",n.createElement(s.Z,{to:"https://www.cncf.io"},"Cloud Native Computing Foundation")," ","incubation project"),n.createElement("img",{src:`${e.baseUrl}img/cncf-white.svg`,alt:"CNCF Logo",height:"100px"}))),n.createElement(b,null)))},y=()=>n.createElement(l,null,(()=>n.createElement(f,null)))}}]);