"use strict";(self.webpackChunkcrackpipe_docs=self.webpackChunkcrackpipe_docs||[]).push([[599],{9613:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||n;return r?o.createElement(m,i(i({ref:t},c),{},{components:r})):o.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<n;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},688:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var o=r(1163),a=(r(9496),r(9613));const n={slug:1,title:"Introducing Crackpipe \ud83d\ude80 - The Open-Source Alternative to Traditional Game Platforms",authors:["alfagun74","yelo420"],tags:["open-source"]},i=void 0,l={permalink:"/blog/1",editUrl:"https://github.com/phalcode/crackpipe-docs/tree/master/blog/2023-06-01.md",source:"@site/blog/2023-06-01.md",title:"Introducing Crackpipe \ud83d\ude80 - The Open-Source Alternative to Traditional Game Platforms",description:"Hey Guys,",date:"2023-06-01T00:00:00.000Z",formattedDate:"June 1, 2023",tags:[{label:"open-source",permalink:"/blog/tags/open-source"}],readingTime:1.805,hasTruncateMarker:!1,authors:[{name:"Alper Alkan",title:"Co-Founder of Phalcode",url:"https://github.com/Alfagun74",imageURL:"https://github.com/Alfagun74.png",key:"alfagun74"},{name:"Philip Sch\xe4fer",title:"Co-Founder of Phalcode",url:"https://github.com/Yelo420",imageURL:"https://github.com/Yelo420.png",key:"yelo420"}],frontMatter:{slug:"1",title:"Introducing Crackpipe \ud83d\ude80 - The Open-Source Alternative to Traditional Game Platforms",authors:["alfagun74","yelo420"],tags:["open-source"]}},s={authorsImageUrls:[void 0,void 0]},u=[],c={toc:u},p="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Hey Guys,"),(0,a.kt)("p",null,"Our team has been working tirelessly for the past eight months on creating Crackpipe, the open-source, decentralized, self-hosted, and liberal alternative to traditional cloud-based game platforms like Steam, Origin, Epic Games, and GoG. We are excited to share that Crackpipe is now available for everyone to use, and we are delighted to open-source it to the community."),(0,a.kt)("p",null,'With Crackpipe, you can play and track games together with your friends on a shared file server, free from any restrictions that traditional game platforms may impose. We have designed it to work with "alternatively obtained" games such as DRM-free games, providing a unique solution for those who want a more flexible and open approach to gaming. Think of it like Jellyfin, but for Videogames.'),(0,a.kt)("p",null,"Crackpipe offers a self-hosted approach that gives you complete control over your gaming experience. The platform enables you to browse your server's game collection, securely download games, launch and play them, and even track your playtimes and progress - regardless of whether the server is offline. Additionally, you can compare stats and play states with other users on the server."),(0,a.kt)("p",null,"Our server features offer automatic indexing of games on the file system into a database, enrichment of games with metadata like tags and genres using RAWG API, multi-user authentication, and configurable logging. We have also implemented health monitoring, full-text search, filters, sorting, pagination, and a fully documented API. The Crackpipe platform is highly configurable to suit your needs."),(0,a.kt)("p",null,'We are thrilled that you have found us, and we invite you to try Crackpipe today. We would be grateful for any contributions, feedback, bug reports, and feature requests you might have. You can also support us by donating using the "Support Us" link on our website. If you have any questions or would like to connect with other Crackpipe users, please join our Discord server and Reddit forum - links to which are available in the footer.'),(0,a.kt)("p",null,"We are passionate about creating a gaming experience that is more open, flexible, and enjoyable for everyone. We hope you will join us on this journey and experience the benefits of a truly open-source alternative to traditional game platforms with Crackpipe."))}f.isMDXComponent=!0}}]);