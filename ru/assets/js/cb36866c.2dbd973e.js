"use strict";(self.webpackChunk_feature_sliced_documentation=self.webpackChunk_feature_sliced_documentation||[]).push([[2399],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4703:(e,t,n)=>{n.d(t,{ZP:()=>u});var r=n(7462),a=n(7294),i=n(4137),l=n(3699),o=n(7325);const s=e=>{let{ticket:t}=e;const n=`https://github.com/feature-sliced/documentation/issues/${t}`;return a.createElement("div",null,a.createElement("p",null,(0,o.I)({id:"shared.wip.title"})),a.createElement("p",null,(0,o.I)({id:"shared.wip.subtitle"})),a.createElement("ul",null,a.createElement("li",null,(0,o.I)({id:"shared.wip.var.feedback.base"}),a.createElement(l.Z,{to:n},(0,o.I)({id:"shared.wip.var.feedback.link"}))),a.createElement("li",null,(0,o.I)({id:"shared.wip.var.material.base"}),a.createElement(l.Z,{to:"https://t.me/feature_sliced"},(0,o.I)({id:"shared.wip.var.material.link"}))),a.createElement("li",null,(0,o.I)({id:"shared.wip.var.contribute.base"}),a.createElement(l.Z,{to:"https://github.com/feature-sliced/documentation/blob/master/CONTRIBUTING.md"},(0,o.I)({id:"shared.wip.var.contribute.link"})))),a.createElement("br",null),a.createElement("p",null,a.createElement("i",null,"\ud83c\udf70 Stay tuned!")))},c={toc:[]};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"WIP",type:"caution"},(0,i.kt)(s,{ticket:n.ticket,mdxType:"WIP"})))}u.isMDXComponent=!0},2294:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(4137)),i=n(4703);const l={sidebar_position:3,sidebar_class_name:"sidebar-item--wip"},o="\u041c\u0438\u0433\u0440\u0430\u0446\u0438\u044f \u0441 legacy",s={unversionedId:"guides/migration/from-legacy",id:"guides/migration/from-legacy",title:"\u041c\u0438\u0433\u0440\u0430\u0446\u0438\u044f \u0441 legacy",description:"\u0412 \u0441\u0442\u0430\u0442\u044c\u0435 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043e\u043f\u044b\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0439 \u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432 \u043f\u043e \u043f\u0435\u0440\u0435\u0435\u0437\u0434\u0443 \u043d\u0430 Feature-Sliced Design \u0441 \u0440\u0430\u0437\u043d\u044b\u043c\u0438 \u0438\u0437\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u043c\u0438",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/guides/migration/from-legacy.mdx",sourceDirName:"guides/migration",slug:"/guides/migration/from-legacy",permalink:"/ru/docs/guides/migration/from-legacy",draft:!1,editUrl:"https://github.com/feature-sliced/documentation/edit/master/i18n/ru/docusaurus-plugin-content-docs/current/guides/migration/from-legacy.mdx",tags:[],version:"current",lastUpdatedAt:1670200961,formattedLastUpdatedAt:"5 \u0434\u0435\u043a. 2022 \u0433.",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_class_name:"sidebar-item--wip"},sidebar:"guidesSidebar",previous:{title:"SSR",permalink:"/ru/docs/guides/examples/ssr"},next:{title:"\u041c\u0438\u0433\u0440\u0430\u0446\u0438\u044f \u0441 v1",permalink:"/ru/docs/guides/migration/from-v1"}},c={},u=[{value:"\u0417\u0430\u0447\u0435\u043c?",id:"why",level:2},{value:"\u041a\u0430\u043a\u043e\u0439 \u043f\u043b\u0430\u043d?",id:"whats-the-plan",level:2},{value:"1. \u0423\u043d\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u043a\u043e\u0434\u043e\u0432\u043e\u0439 \u0431\u0430\u0437\u044b",id:"1-unification-of-the-code-base",level:3},{value:"2. \u0421\u043e\u0431\u0438\u0440\u0430\u0435\u043c \u0432\u043c\u0435\u0441\u0442\u0435 \u0438\u0437\u043b\u0438\u0448\u043d\u0435 \u0440\u0430\u0437\u0434\u0440\u043e\u0431\u043b\u0435\u043d\u043d\u043e\u0435",id:"2-putting-together-the-destructive-decoupled",level:3},{value:"3. \u0412\u044b\u0434\u0435\u043b\u044f\u0435\u043c \u0441\u043a\u043e\u0443\u043f\u044b \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438",id:"3-allocate-scopes-of-responsibility",level:3},{value:"4. Final ?",id:"4-final-",level:3},{value:"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435",id:"see-also",level:2}],p={toc:u};function d(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u043c\u0438\u0433\u0440\u0430\u0446\u0438\u044f-\u0441-legacy"},"\u041c\u0438\u0433\u0440\u0430\u0446\u0438\u044f \u0441 legacy"),(0,a.kt)(i.ZP,{ticket:"166",mdxType:"WIP"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u0412 \u0441\u0442\u0430\u0442\u044c\u0435 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043e\u043f\u044b\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0439 \u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432 \u043f\u043e \u043f\u0435\u0440\u0435\u0435\u0437\u0434\u0443 \u043d\u0430 Feature-Sliced Design \u0441 \u0440\u0430\u0437\u043d\u044b\u043c\u0438 \u0438\u0437\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u043c\u0438")),(0,a.kt)("h2",{id:"why"},"\u0417\u0430\u0447\u0435\u043c?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'\u041d\u0430\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043d\u0443\u0436\u0435\u043d \u043f\u0435\u0440\u0435\u0435\u0437\u0434? "\u0421\u043c\u0435\u0440\u0442\u044c \u043e\u0442 \u0442\u044b\u0441\u044f\u0447\u0438 \u043f\u043e\u0440\u0435\u0437\u043e\u0432" \u0438 \u0422\u0435\u0445\u0434\u043e\u043b\u0433. \u0427\u0435\u0433\u043e \u043d\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442? \u0427\u0435\u043c \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u043c\u043e\u0447\u044c \u043c\u0435\u0442\u043e\u0434\u043e\u043b\u043e\u0433\u0438\u044f?')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u0421\u043c. \u0434\u043e\u043a\u043b\u0430\u0434 ",(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/aOiJ3k2UvO4"},"\u0418\u043b\u044c\u044f \u041a\u043b\u0438\u043c\u043e\u0432\u0430 \u043f\u0440\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u044c \u0438 \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u0440\u0435\u0444\u0430\u043a\u0442\u043e\u0440\u0438\u043d\u0433\u0430"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"approaches-themed-bordered",src:n(1058).Z,width:"1572",height:"857"})),(0,a.kt)("h2",{id:"whats-the-plan"},"\u041a\u0430\u043a\u043e\u0439 \u043f\u043b\u0430\u043d?"),(0,a.kt)("h3",{id:"1-unification-of-the-code-base"},"1. \u0423\u043d\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u043a\u043e\u0434\u043e\u0432\u043e\u0439 \u0431\u0430\u0437\u044b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"- \u251c\u2500\u2500 products/\n- |   \u251c\u2500\u2500 components/\n- |   \u251c\u2500\u2500 containers/\n- |   \u251c\u2500\u2500 store/\n- |   \u251c\u2500\u2500 styles/\n- \u251c\u2500\u2500 checkout/\n- |   \u251c\u2500\u2500 components/\n- |   \u251c\u2500\u2500 containers/\n- |   \u251c\u2500\u2500 helpers/\n- |   \u251c\u2500\u2500 styles/\n+ \u2514\u2500\u2500 src/\n      \u251c\u2500\u2500 actions/\n      \u251c\u2500\u2500 api/\n+     \u251c\u2500\u2500 components/\n+     \u251c\u2500\u2500 containers/\n      \u251c\u2500\u2500 constants/\n      \u251c\u2500\u2500 epics/\n+     \u251c\u2500\u2500 i18n/\n      \u251c\u2500\u2500 modules/\n+     \u251c\u2500\u2500 helpers/\n+     \u251c\u2500\u2500 pages/\n-     \u251c\u2500\u2500 routes/\n-     \u251c\u2500\u2500 utils/\n      \u251c\u2500\u2500 reducers/\n-     \u251c\u2500\u2500 redux/\n      \u251c\u2500\u2500 selectors/\n+     \u251c\u2500\u2500 store\n+     \u251c\u2500\u2500 styles/\n      \u251c\u2500\u2500 App.jsx\n      \u2514\u2500\u2500 index.jsx\n")),(0,a.kt)("h3",{id:"2-putting-together-the-destructive-decoupled"},"2. \u0421\u043e\u0431\u0438\u0440\u0430\u0435\u043c \u0432\u043c\u0435\u0441\u0442\u0435 \u0438\u0437\u043b\u0438\u0448\u043d\u0435 \u0440\u0430\u0437\u0434\u0440\u043e\u0431\u043b\u0435\u043d\u043d\u043e\u0435"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"  \u2514\u2500\u2500 src/\n-     \u251c\u2500\u2500 actions/\n      \u251c\u2500\u2500 api/\n-     \u251c\u2500\u2500 components/\n-     \u251c\u2500\u2500 containers/\n-     \u251c\u2500\u2500 constants/\n-     \u251c\u2500\u2500 epics/\n+     \u251c\u2500\u2500 entities/{...}\n+     |     \u251c\u2500\u2500 ui\n+     |     \u251c\u2500\u2500 model/{actions, selectors, ...}\n+     |     \u251c\u2500\u2500 lib\n      \u251c\u2500\u2500 i18n/\n      |   # \u0412\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043c\u043e\u0436\u0435\u043c \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u044c \u0441\u044e\u0434\u0430 \u043e\u0441\u0442\u0430\u0432\u0448\u0438\u0435\u0441\u044f \u0441\u0435\u0433\u043c\u0435\u043d\u0442\u044b\n+     \u251c\u2500\u2500 modules/{helpers, constants}\n-     \u251c\u2500\u2500 helpers/\n      \u251c\u2500\u2500 pages/\n-     \u251c\u2500\u2500 reducers/\n-     \u251c\u2500\u2500 selectors/\n-     \u251c\u2500\u2500 store/\n      \u251c\u2500\u2500 styles/\n      \u251c\u2500\u2500 App.jsx\n      \u2514\u2500\u2500 index.jsx\n")),(0,a.kt)("h3",{id:"3-allocate-scopes-of-responsibility"},"3. \u0412\u044b\u0434\u0435\u043b\u044f\u0435\u043c \u0441\u043a\u043e\u0443\u043f\u044b \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"}," \u2514\u2500\u2500 src/\n-    \u251c\u2500\u2500 api/\n+    \u251c\u2500\u2500 app/\n+    |   \u251c\u2500\u2500 index.jsx\n+    |   \u251c\u2500\u2500 style.css\n     \u251c\u2500\u2500 pages/\n+    \u251c\u2500\u2500 features/\n+    |   \u251c\u2500\u2500 add-to-cart/{ui, model, lib}\n+    |   \u251c\u2500\u2500 choose-delivery/{ui, model, lib}\n+    \u251c\u2500\u2500 entities/{...}\n+    |   \u251c\u2500\u2500 delivery/{ui, model, lib}\n+    |   \u251c\u2500\u2500 cart/{ui, model, lib}\n+    |   \u251c\u2500\u2500 product/{ui, model, lib}\n+    \u251c\u2500\u2500 shared/\n+    |   \u251c\u2500\u2500 api/\n+    |   \u251c\u2500\u2500 lib/    # helpers\n+    |   |    \u251c\u2500\u2500 i18n/\n+    |   \u251c\u2500\u2500 config/ # constants\n-    \u251c\u2500\u2500 i18n/\n-    \u251c\u2500\u2500 modules/{helpers, constants}\n     \u2514\u2500\u2500 index.jsx\n")),(0,a.kt)("h3",{id:"4-final-"},"4. Final ?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u041f\u0440\u043e \u043e\u0441\u0442\u0430\u0432\u0448\u0438\u0435\u0441\u044f \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u0438 \u043d\u0430\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0442\u043e\u0438\u0442 \u0438\u0445 \u0443\u0441\u0442\u0440\u0430\u043d\u044f\u0442\u044c")),(0,a.kt)("h2",{id:"see-also"},"\u0421\u043c. \u0442\u0430\u043a\u0436\u0435"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/aOiJ3k2UvO4"},"(\u0414\u043e\u043a\u043b\u0430\u0434) \u0418\u043b\u044c\u044f \u041a\u043b\u0438\u043c\u043e\u0432 - \u041a\u0440\u044b\u0441\u0438\u043d\u044b\u0435 \u0431\u0435\u0433\u0430 \u0431\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0433\u043e \u0440\u0435\u0444\u0430\u043a\u0442\u043e\u0440\u0438\u043d\u0433\u0430: \u043a\u0430\u043a \u043d\u0435 \u0434\u0430\u0442\u044c \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u043c\u0443 \u0434\u043e\u043b\u0433\u0443 \u0443\u0431\u0438\u0442\u044c \u043c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044e \u0438 \u043f\u0440\u043e\u0434\u0443\u043a\u0442")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://youtu.be/SnzPAr_FJ7w"},"(\u0414\u043e\u043a\u043b\u0430\u0434) \u0418\u043b\u044c\u044f \u0410\u0437\u0438\u043d - \u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 Frontend \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u0412 \u0434\u043e\u043a\u043b\u0430\u0434\u0435 \u0432 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435 \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u044b \u043f\u043e\u0434\u0445\u043e\u0434\u044b \u043a \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0435 \u0438 \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u0438 \u0440\u0435\u0444\u0430\u043a\u0442\u043e\u0440\u0438\u043d\u0433\u0430")))))}d.isMDXComponent=!0},1058:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/approaches-a6bdea3f5ff95cb01c5d2e1dcaa69375.png"}}]);