"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1844],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(n),d=i,k=c["".concat(s,".").concat(d)]||c[d]||u[d]||r;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var m=2;m<r;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7205:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return p},default:function(){return c}});var a=n(3117),i=n(102),r=(n(7294),n(4137)),o=["components"],l={sidebar_position:4},s="Migration from v1",m={unversionedId:"guides/migration/from-v1",id:"guides/migration/from-v1",isDocsHomePage:!1,title:"Migration from v1",description:"Why v2?",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/migration/from-v1.md",sourceDirName:"guides/migration",slug:"/guides/migration/from-v1",permalink:"/en/docs/guides/migration/from-v1",editUrl:"https://github.com/feature-sliced/documentation/edit/master/website/i18n/en/docusaurus-plugin-content-docs/current/guides/migration/from-v1.md",tags:[],version:"current",lastUpdatedAt:1643711042,formattedLastUpdatedAt:"2/1/2022",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"guidesSidebar",previous:{title:"Migration from legacy",permalink:"/en/docs/guides/migration/from-legacy"},next:{title:"Usage with NextJS",permalink:"/en/docs/guides/tech/with-nextjs"}},p=[{value:"Why v2?",id:"why-v2",children:[],level:2},{value:"Why does it make sense to migrate the project to v2?",id:"why-does-it-make-sense-to-migrate-the-project-to-v2",children:[{value:"\ud83d\udd0d More transparent and simple architecture",id:"-more-transparent-and-simple-architecture",children:[],level:4},{value:"\ud83d\udce6 More flexible and honest modularity",id:"-more-flexible-and-honest-modularity",children:[],level:4},{value:"\ud83d\ude80 More specifications, plans, community",id:"-more-specifications-plans-community",children:[],level:4}],level:2},{value:"Changelog",id:"changelog",children:[{value:"<code>BREAKING</code> Layers",id:"breaking-layers",children:[],level:3},{value:"<code>BREAKING</code> Shared",id:"breaking-shared",children:[],level:3},{value:"<code>NEW</code> Entities, Processes",id:"new-entities-processes",children:[],level:3},{value:"<code>BREAKING</code> Abstractions &amp; Naming",id:"breaking-abstractions--naming",children:[{value:"Layers",id:"layers",children:[],level:4},{value:"Segments",id:"segments",children:[],level:4}],level:3},{value:"<code>REFINED</code> Low coupling",id:"refined-low-coupling",children:[],level:3}],level:2},{value:"See also",id:"see-also",children:[],level:2}],u={toc:p};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"migration-from-v1"},"Migration from v1"),(0,r.kt)("h2",{id:"why-v2"},"Why v2?"),(0,r.kt)("p",null,"The original concept of ",(0,r.kt)("strong",{parentName:"p"},"feature-slices")," ",(0,r.kt)("a",{parentName:"p",href:"https://t.me/feature_slices"},"was announced")," in 2018."),(0,r.kt)("p",null,"Since then, many transformations of the methodology have taken place, but at the same time ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://featureslices.dev/v1.0.html"},"the basic principles were preserved")),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using a ",(0,r.kt)("em",{parentName:"li"},"standardized")," frontend project structure"),(0,r.kt)("li",{parentName:"ul"},"Splitting the application in the first place-according to ",(0,r.kt)("em",{parentName:"li"},"business logic")),(0,r.kt)("li",{parentName:"ul"},"Use of ",(0,r.kt)("em",{parentName:"li"},"isolated features")," to prevent implicit side effects and cyclic dependencies"),(0,r.kt)("li",{parentName:"ul"},"Using the ",(0,r.kt)("em",{parentName:"li"},"Public API"),' with a ban on climbing "into the insides" of the module')),(0,r.kt)("p",null,"At the same time, in the previous version of the methodology, there were still ",(0,r.kt)("strong",{parentName:"p"},"weak points")," that"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sometimes it leads to boilerplate code"),(0,r.kt)("li",{parentName:"ul"},"Sometimes it leads to excessive complication of the code base and non-obvious rules between abstractions"),(0,r.kt)("li",{parentName:"ul"},"Sometimes it leads to implicit architectural solutions, which prevented the project from being pulled up and new people from onboarding")),(0,r.kt)("p",null,"The new version of the methodology (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/feature-sliced/documentation"},"v2"),") is designed ",(0,r.kt)("strong",{parentName:"p"},"to eliminate these shortcomings, while preserving the existing advantages")," of the approach."),(0,r.kt)("p",null,"Since 2018, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kof/feature-driven-architecture/issues"},"has also developed")," another similar methodology - ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/feature-sliced/documentation/tree/rc/feature-driven"},(0,r.kt)("strong",{parentName:"a"},"feature-driven")),", which was first announced by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kof"},"Oleg Isonen"),"."),(0,r.kt)("p",null,"After merging of the two approaches, we have ",(0,r.kt)("strong",{parentName:"p"},"improved and refined existing practices")," - towards greater flexibility, clarity and efficiency in application."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"As a result, this has even affected the name of the methodology - ",(0,r.kt)("em",{parentName:"p"},'"feature-slice',(0,r.kt)("strong",{parentName:"em"},"d"),'"'))),(0,r.kt)("h2",{id:"why-does-it-make-sense-to-migrate-the-project-to-v2"},"Why does it make sense to migrate the project to v2?"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"WIP:")," The current version of the methodology is under development and some details ",(0,r.kt)("em",{parentName:"p"},"may change"))),(0,r.kt)("h4",{id:"-more-transparent-and-simple-architecture"},"\ud83d\udd0d More transparent and simple architecture"),(0,r.kt)("p",null,"The methodology (v2) offers ",(0,r.kt)("strong",{parentName:"p"},"more intuitive and more common abstractions and ways of separating logic among developers.")),(0,r.kt)("p",null,"All this has an extremely positive effect on attracting new people, as well as studying the current state of the project, and distributing the business logic of the application."),(0,r.kt)("h4",{id:"-more-flexible-and-honest-modularity"},"\ud83d\udce6 More flexible and honest modularity"),(0,r.kt)("p",null,"The methodology (v2) allows ",(0,r.kt)("strong",{parentName:"p"},"to distribute logic in a more flexible way:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"With the ability to refactor isolated parts from scratch"),(0,r.kt)("li",{parentName:"ul"},"With the ability to rely on the same abstractions, but without unnecessary interweaving of dependencies"),(0,r.kt)("li",{parentName:"ul"},"With simpler requirements for the location of the new module ",(0,r.kt)("em",{parentName:"li"},"(layer => slice => segment)"))),(0,r.kt)("h4",{id:"-more-specifications-plans-community"},"\ud83d\ude80 More specifications, plans, community"),(0,r.kt)("p",null,"At the moment, the ",(0,r.kt)("inlineCode",{parentName:"p"},"core-team")," is actively working on the latest (v2) version of the methodology"),(0,r.kt)("p",null,"So it is for her:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"there will be more described cases / problems"),(0,r.kt)("li",{parentName:"ul"},"there will be more guides on the application"),(0,r.kt)("li",{parentName:"ul"},"there will be more real examples"),(0,r.kt)("li",{parentName:"ul"},"in general, there will be more documentation for onboarding new people and studying the concepts of the methodology"),(0,r.kt)("li",{parentName:"ul"},"the toolkit will be developed in the future to comply with the concepts and conventions on architecture")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Of course, there will be user support for the first version as well - but the latest version is still a priority for us"),(0,r.kt)("p",{parentName:"blockquote"},"In the future, with the next major updates, you will still have access to the current version (v2) of the methodology, ",(0,r.kt)("strong",{parentName:"p"},"without risks for your teams and projects"))),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("h3",{id:"breaking-layers"},(0,r.kt)("inlineCode",{parentName:"h3"},"BREAKING")," Layers"),(0,r.kt)("p",null,"Now the methodology assumes explicit allocation of layers at the top level"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"/app")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"/processes")," > ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"/pages"))," > ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"/features"))," > ",(0,r.kt)("inlineCode",{parentName:"p"},"/entities")," > ",(0,r.kt)("inlineCode",{parentName:"p"},"/shared"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"That is, not everything is now treated as features/pages"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"This approach allows you to ",(0,r.kt)("a",{parentName:"p",href:"https://t.me/atomicdesign/18708"},"explicitly set rules for layers"),":")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"higher the layer")," of the module is located , the more ",(0,r.kt)("strong",{parentName:"p"},"context")," it has"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"(in other words-each module of the layer - can import only the modules of the underlying layers, but not higher)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("strong",{parentName:"p"},"lower the layer of the")," module is located , the more ",(0,r.kt)("strong",{parentName:"p"},"danger and responsibility")," to make changes to it"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("em",{parentName:"p"},"(because it is usually the underlying layers that are more overused)")))),(0,r.kt)("h3",{id:"breaking-shared"},(0,r.kt)("inlineCode",{parentName:"h3"},"BREAKING")," Shared"),(0,r.kt)("p",null,"The infrastructure abstractions ",(0,r.kt)("inlineCode",{parentName:"p"},"/ui"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"/lib"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"/api"),", which used to lie in the src root of the project, are now separated by a separate directory ",(0,r.kt)("inlineCode",{parentName:"p"},"/src/shared")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"shared/ui")," - Still the same general uikit of the application (optional)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"At the same time, no one forbids using ",(0,r.kt)("inlineCode",{parentName:"em"},"Atomic Design")," here as before")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"shared/lib")," - A set of auxiliary libraries for implementing logic",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Still - without a dump of helpers")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"shared/api")," - A common entry point for accessing the API",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Can also be registered locally in each feature / page - but it is not recommended")))),(0,r.kt)("li",{parentName:"ul"},"As before - there should be no explicit binding to business logic in ",(0,r.kt)("inlineCode",{parentName:"li"},"shared"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"If necessary, you need to take this relationship to the ",(0,r.kt)("inlineCode",{parentName:"em"},"entities")," level or even higher"))))),(0,r.kt)("h3",{id:"new-entities-processes"},(0,r.kt)("inlineCode",{parentName:"h3"},"NEW")," Entities, Processes"),(0,r.kt)("p",null,"In v2 ",(0,r.kt)("strong",{parentName:"p"},", other new abstractions")," have been added to eliminate the problems of logic complexity and high coupling."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/entities")," - layer ",(0,r.kt)("strong",{parentName:"li"},"business entities")," containing slices that are related directly to the business models or synthetic entities required only on frontend",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Examples: ",(0,r.kt)("inlineCode",{parentName:"em"},"user"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"i18n"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"order"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"blog"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/processes")," - layer ",(0,r.kt)("strong",{parentName:"li"},"business processes"),", penetrating app",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"The layer is optional"),", it is usually recommended to use it when ",(0,r.kt)("em",{parentName:"li"},"the logic grows and begins to blur in several pages")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Examples: ",(0,r.kt)("inlineCode",{parentName:"em"},"payment"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"auth"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"quick-tour")))))),(0,r.kt)("h3",{id:"breaking-abstractions--naming"},(0,r.kt)("inlineCode",{parentName:"h3"},"BREAKING")," Abstractions & Naming"),(0,r.kt)("p",null,"Now ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/app-splitting"},"specific abstractions")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/naming-adaptability"},"clear recommendations for naming them"),"are defined"),(0,r.kt)("h4",{id:"layers"},(0,r.kt)("a",{parentName:"h4",href:"/docs/concepts/app-splitting#group-layers"},"Layers")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/app")," \u2014 ",(0,r.kt)("strong",{parentName:"li"},"application initialization layer"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Previous versions: ",(0,r.kt)("inlineCode",{parentName:"em"},"app"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"core"),",",(0,r.kt)("inlineCode",{parentName:"em"},"init"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"src/index")," (and this happens)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/processes")," \u2014 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/20"},(0,r.kt)("strong",{parentName:"a"},"business process layer")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Previous versions: ",(0,r.kt)("inlineCode",{parentName:"em"},"processes"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"flows"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"workflows"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/pages")," \u2014 ",(0,r.kt)("strong",{parentName:"li"},"application page layer"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Previous versions: ",(0,r.kt)("inlineCode",{parentName:"em"},"pages"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"screens"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"views"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"layouts"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"components"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"containers"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/features")," \u2014 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/23"},(0,r.kt)("strong",{parentName:"a"},"functionality parts layer")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Previous versions: ",(0,r.kt)("inlineCode",{parentName:"em"},"features"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"components"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"containers"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/entities")," \u2014 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/18#discussioncomment-422649"},(0,r.kt)("strong",{parentName:"a"},"business entity layer")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Previous versions: ",(0,r.kt)("inlineCode",{parentName:"em"},"entities"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"models"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"shared"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/shared")," \u2014 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/31#discussioncomment-453020"},(0,r.kt)("strong",{parentName:"a"},"layer of reused infrastructure code"))," \ud83d\udd25",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Previous versions: ",(0,r.kt)("inlineCode",{parentName:"em"},"shared"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"common"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"lib")))))),(0,r.kt)("h4",{id:"segments"},(0,r.kt)("a",{parentName:"h4",href:"/docs/concepts/app-splitting#group-segments"},"Segments")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/ui")," \u2014 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/31#discussioncomment-453132"},(0,r.kt)("strong",{parentName:"a"},"UI segment"))," \ud83d\udd25",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Previous versions: ",(0,r.kt)("inlineCode",{parentName:"em"},"ui"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"components"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"view"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/model")," \u2014 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/31#discussioncomment-472645"},(0,r.kt)("strong",{parentName:"a"},"BL-segment"))," \ud83d\udd25",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Previous versions: ",(0,r.kt)("inlineCode",{parentName:"em"},"model"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"store"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"state"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"services"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"controller"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/lib")," \u2014 segment ",(0,r.kt)("strong",{parentName:"li"},"of auxiliary code"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Previous versions: ",(0,r.kt)("inlineCode",{parentName:"em"},"lib"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"libs"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"utils"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"helpers"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/api")," \u2014 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/66"},(0,r.kt)("strong",{parentName:"a"},"API segment")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Previous versions: ",(0,r.kt)("inlineCode",{parentName:"em"},"api"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"service"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"requests"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"queries"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/config")," \u2014 ",(0,r.kt)("strong",{parentName:"li"},"application configuration segment"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Previous versions: ",(0,r.kt)("inlineCode",{parentName:"em"},"config"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"env"),", ",(0,r.kt)("inlineCode",{parentName:"em"},"get-env")))))),(0,r.kt)("h3",{id:"refined-low-coupling"},(0,r.kt)("inlineCode",{parentName:"h3"},"REFINED")," Low coupling"),(0,r.kt)("p",null,"Now it is much easier to ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/low-coupling"},"observe the principle of low coupling")," between modules, thanks to the new layers."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},'At the same time, it is still recommended to avoid as much as possible cases where it is extremely difficult to "uncouple" modules')),(0,r.kt)("h2",{id:"see-also"},"See also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://t.me/feature_slices"},'Notes from the report "React SPB Meetup #1"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=BWAeYuWFHhs"},'React Berlin Talk - Oleg Isonen "Feature Driven Architecture"')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://t.me/feature_sliced/493"},"Comparison with v1 (community-chat)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://t.me/atomicdesign/18708"},"New ideas v2 with explanations (atomicdesign-chat)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/feature-sliced/documentation/discussions/31"},"Discussion of abstractions and naming for the new version of the methodology (v2)"))))}c.isMDXComponent=!0}}]);