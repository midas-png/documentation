"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[1209],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(4137));const o={sidebar_position:7},a="Entities",s={unversionedId:"reference/units/layers/entities",id:"reference/units/layers/entities",title:"Entities",description:"When a lot of deunified logic appears in the project, often tied to specific entities",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/units/layers/entities.md",sourceDirName:"reference/units/layers",slug:"/reference/units/layers/entities",permalink:"/docs/reference/units/layers/entities",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/en/docusaurus-plugin-content-docs/current/reference/units/layers/entities.md",tags:[],version:"current",lastUpdatedAt:1676010174,formattedLastUpdatedAt:"Feb 10, 2023",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"referenceSidebar",previous:{title:"Features",permalink:"/docs/reference/units/layers/features"},next:{title:"Shared",permalink:"/docs/reference/units/layers/shared"}},l={},c=[{value:"Description",id:"description",level:2},{value:"Structure",id:"structure",level:2},{value:"Examples",id:"examples",level:2},{value:"Using the Entity Model",id:"using-the-entity-model",level:3},{value:"Using Entity components",id:"using-entity-components",level:3}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"entities"},"Entities"),(0,i.kt)("admonition",{title:"When to use?",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"When a lot of deunified logic appears in the project, often tied to specific entities")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"entities-themed-bordered",src:n(1292).Z,width:"1200",height:"630"})),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"There are usually placed:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"business entities, for building the business logic of the application",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"For example: ",(0,i.kt)("inlineCode",{parentName:"em"},"user"),", ",(0,i.kt)("inlineCode",{parentName:"em"},"order"),", ",(0,i.kt)("inlineCode",{parentName:"em"},"post"),", ",(0,i.kt)("inlineCode",{parentName:"em"},"journal"),", ",(0,i.kt)("inlineCode",{parentName:"em"},"navigation"),", ...")))),(0,i.kt)("li",{parentName:"ul"},"components with the representation of entities, for building the UI of the overlying layers",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"For example: ",(0,i.kt)("inlineCode",{parentName:"em"},"UserCard"),", ",(0,i.kt)("inlineCode",{parentName:"em"},"TweetCard"),", ..."))))),(0,i.kt)("h2",{id:"structure"},"Structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"\u2514\u2500\u2500 entities/{slice}\n          \u251c\u2500\u2500 lib/\n          \u251c\u2500\u2500 model/\n          \u251c\u2500\u2500 ui/\n          \u2514\u2500\u2500 index.ts\n")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"using-the-entity-model"},"Using the Entity Model"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=**/**/index.tsx",title:"**/**/index.tsx"},'import { viewerModel } from "entities/viewer";\n\nexport const Wallet = () => {\n    const viewer = viewerModel.useViewer();\n    const { moneyCount } = viewer;\n    \n    ...\n}\n')),(0,i.kt)("h3",{id:"using-entity-components"},"Using Entity components"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=entities/book/index.ts",title:"entities/book/index.ts"},'export { BookCard, ... } from "./ui";\nexport * as bookModel from "./model";\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=pages/**/index.tsx",title:"pages/**/index.tsx"},'import { BookCard } from "entities/book";\n\nexport const CatalogPage = () => {\n    const bookQuery = ...;\n    return (\n        ...\n        {bookQuery.map((book) => (\n            <BookCard key={book.id} data={book} />\n        ))}\n        ...\n    )\n}\n')))}u.isMDXComponent=!0},1292:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/entities-5371350e42cfad7a170dfe64658c5839.png"}}]);