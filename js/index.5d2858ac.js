(function(){"use strict";var e={9654:function(e,t,n){var r=n(9242),i=n(3396);const a=(0,i._)("img",{alt:"Vue logo",class:"sillyimage",src:"https://cdn.discordapp.com/emojis/1015738796987404489.webp?size=96&quality=lossless"},null,-1);function o(e,t,n,r,o,s){const u=(0,i.up)("ListOrganizer"),l=(0,i.up)("SnippetListOrganizer");return(0,i.wg)(),(0,i.iD)(i.HY,null,[a,(0,i.Wm)(u),(0,i.Wm)(l)],64)}const s=e=>((0,i.dD)("data-v-6f2f8cb0"),e=e(),(0,i.Cn)(),e),u={class:"stuff"},l=s((()=>(0,i._)("h1",null," Hosted Projects ",-1))),c={class:"stuff-list"};function p(e,t,n,r,a,o){const s=(0,i.up)("ListComponent");return(0,i.wg)(),(0,i.iD)("div",u,[l,(0,i._)("ul",c,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.items,(e=>((0,i.wg)(),(0,i.j4)(s,{key:e.name,name:e.name,url:e.url,imageUrl:e.imageUrl},null,8,["name","url","imageUrl"])))),128))])])}var m=JSON.parse('[{"name":"Blinking Text","url":"https://aquasine.github.io/blinking-text/?text=example"},{"name":"atrioc.org","url":"https://atrioc.org","imageUrl":"https://media.discordapp.net/attachments/518663754943299587/1059305011152175224/image.png?width=1268&height=660"},{"name":"Pong","url":"https://aquasine.github.io/brggren-pong/","imageUrl":"https://media.discordapp.net/attachments/518663754943299587/1059295845016674305/image.png"},{"name":"Conway","url":"https://aquasine.github.io/brggren-game-of-life/#/?type=berggren&size=40","imageUrl":"https://media.discordapp.net/attachments/518663754943299587/1059296594329079858/image.png?width=1263&height=660"},{"name":"Cube","url":"https://aquasine.github.io/berggcube-3d/","imageUrl":"https://media.discordapp.net/attachments/518663754943299587/1059298399507189871/image.png?width=919&height=660"}]'),g=n(7139);const f=e=>((0,i.dD)("data-v-4b9a5584"),e=e(),(0,i.Cn)(),e),d={class:"list-item"},h=["href"],v={class:"horiz-flex"},b=["src","alt"],w={key:1,class:"previewImage"},_=f((()=>(0,i._)("svg",{class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[(0,i._)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})],-1))),O=[_];function k(e,t,n,r,a,o){return(0,i.wg)(),(0,i.iD)("li",d,[(0,i._)("a",{href:n.url},[(0,i._)("div",v,[n.imageUrl?((0,i.wg)(),(0,i.iD)("img",{key:0,src:n.imageUrl,class:"previewImage",alt:"preview image for "+n.name},null,8,b)):((0,i.wg)(),(0,i.iD)("div",w,O)),(0,i.Uk)(" "+(0,g.zw)(n.name),1)])],8,h)])}var y={name:"ListComponent",props:["name","url","imageUrl"]},U=n(89);const j=(0,U.Z)(y,[["render",k],["__scopeId","data-v-4b9a5584"]]);var z=j,D={name:"ListOrganizer",components:{ListComponent:z},data(){return{items:m}}};const x=(0,U.Z)(D,[["render",p],["__scopeId","data-v-6f2f8cb0"]]);var C=x;const L=e=>((0,i.dD)("data-v-45df7654"),e=e(),(0,i.Cn)(),e),S={class:"snippets"},I=L((()=>(0,i._)("h2",null," Snippets ",-1))),q=["href"],A={class:"snippet-list-item-name"};function H(e,t,n,r,a,o){return(0,i.wg)(),(0,i.iD)("div",S,[I,((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.items,(e=>((0,i.wg)(),(0,i.iD)("a",{key:e.name,href:e.url,class:"snippet-list-item"},[(0,i._)("span",A,(0,g.zw)(e.name),1)],8,q)))),128))])}var N=JSON.parse('[{"name":"fadeout image","url":"https://gist.github.com/AQUASINE/2472c3817b2897ceb2c1a6d47d0b7baa"},{"name":"puffout image","url":"https://gist.github.com/AQUASINE/291a2f5a33121a2d814eea901042bfa2"}]'),P={name:"SnippetListOrganizer",data(){return{items:N}}};const Z=(0,U.Z)(P,[["render",H],["__scopeId","data-v-45df7654"]]);var E=Z,M={name:"App",components:{SnippetListOrganizer:E,ListOrganizer:C}};const T=(0,U.Z)(M,[["render",o]]);var Y=T;(0,r.ri)(Y).mount("#app")}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,i,a){if(!r){var o=1/0;for(c=0;c<e.length;c++){r=e[c][0],i=e[c][1],a=e[c][2];for(var s=!0,u=0;u<r.length;u++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(s=!1,a<o&&(o=a));if(s){e.splice(c--,1);var l=i();void 0!==l&&(t=l)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,i,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={826:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var i,a,o=r[0],s=r[1],u=r[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(u)var c=u(n)}for(t&&t(r);l<o.length;l++)a=o[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self["webpackChunkmicro_projects_collection"]=self["webpackChunkmicro_projects_collection"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(9654)}));r=n.O(r)})();
//# sourceMappingURL=index.5d2858ac.js.map