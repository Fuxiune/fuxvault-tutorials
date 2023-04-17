"use strict";(self.webpackChunkclassic=self.webpackChunkclassic||[]).push([[6579],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=i,h=p["".concat(c,".").concat(u)]||p[u]||m[u]||o;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3612:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(7294),i=n(6010),o=n(5281),r=n(5999);const l={admonition:"admonition_LlT9",admonitionHeading:"admonitionHeading_tbUL",admonitionIcon:"admonitionIcon_kALy",admonitionContent:"admonitionContent_S0QG"};const c={note:{infimaClassName:"secondary",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))},label:a.createElement(r.Z,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)"},"note")},tip:{infimaClassName:"success",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))},label:a.createElement(r.Z,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)"},"tip")},danger:{infimaClassName:"danger",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 12 16"},a.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))},label:a.createElement(r.Z,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)"},"danger")},info:{infimaClassName:"info",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 14 16"},a.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))},label:a.createElement(r.Z,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)"},"info")},caution:{infimaClassName:"warning",iconComponent:function(){return a.createElement("svg",{viewBox:"0 0 16 16"},a.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},label:a.createElement(r.Z,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)"},"caution")}},s={secondary:"note",important:"info",success:"tip",warning:"danger"};function d(e){const{mdxAdmonitionTitle:t,rest:n}=function(e){const t=a.Children.toArray(e),n=t.find((e=>a.isValidElement(e)&&"mdxAdmonitionTitle"===e.props?.mdxType)),i=a.createElement(a.Fragment,null,t.filter((e=>e!==n)));return{mdxAdmonitionTitle:n,rest:i}}(e.children);return{...e,title:e.title??t,children:n}}function p(e){const{children:t,type:n,title:r,icon:p}=d(e),m=function(e){const t=s[e]??e,n=c[t];return n||(console.warn(`No admonition config found for admonition type "${t}". Using Info as fallback.`),c.info)}(n),u=r??m.label,{iconComponent:h}=m,f=p??a.createElement(h,null);return a.createElement("div",{className:(0,i.Z)(o.k.common.admonition,o.k.common.admonitionType(e.type),"alert",`alert--${m.infimaClassName}`,l.admonition)},a.createElement("div",{className:l.admonitionHeading},a.createElement("span",{className:l.admonitionIcon},f),u),a.createElement("div",{className:l.admonitionContent},t))}},5162:(e,t,n)=>{n(7294)},5488:(e,t,n)=>{n(7294),n(2389)},1395:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var a=n(7462),i=(n(7294),n(3905)),o=(n(5488),n(5162),n(3612));const r={sidebar_position:1},l="Embedd Javascript in HTML",c={unversionedId:"javascript/Basics/embedd-javascript-in-html",id:"javascript/Basics/embedd-javascript-in-html",title:"Embedd Javascript in HTML",description:"When we want to use Javascript in HTML websites, we have to reference the needed Javascript files.",source:"@site/docs/javascript/Basics/embedd-javascript-in-html.md",sourceDirName:"javascript/Basics",slug:"/javascript/Basics/embedd-javascript-in-html",permalink:"/fuxvault-tutorials/docs/javascript/Basics/embedd-javascript-in-html",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/javascript/Basics/embedd-javascript-in-html.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"javascript",previous:{title:"What is Javascript ?",permalink:"/fuxvault-tutorials/docs/"},next:{title:"Variables in Javascript",permalink:"/fuxvault-tutorials/docs/javascript/Basics/variables"}},s={},d=[{value:"Load Javascript files",id:"load-javascript-files",level:3},{value:"Write Javascript directly in HTML",id:"write-javascript-directly-in-html",level:3},{value:"Which option should I prefer?",id:"which-option-should-i-prefer",level:3}],p={toc:d},m="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"embedd-javascript-in-html"},"Embedd Javascript in HTML"),(0,i.kt)("p",null,"When we want to use Javascript in HTML websites, we have to reference the needed Javascript files."),(0,i.kt)(o.Z,{type:"tip",icon:"\ud83d\udca1",title:"But what if I have multiple Javascript-Files ?",mdxType:"Admonition"},(0,i.kt)("p",null,"You can have multiple Javascript files and load them seperately in your HTML website.")),(0,i.kt)("p",null,"The most common ways to embedd/load Javascript in your websites are:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Load one or multiple Javascript-Files which contains your Javascript code."),(0,i.kt)("li",{parentName:"ol"},"Write Javascript directly in your HTML when no seperate files are needed")),(0,i.kt)("h3",{id:"load-javascript-files"},"Load Javascript files"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n    <head>\n        \x3c!-- Javascript is loaded before your HTML Body --\x3e\n        <script src="path-to-file-1.js"><\/script>\n        <script src="path-to-file-2.js"><\/script>\n    </head>\n    <body>\n        \x3c!-- .... --\x3e\n    </body>\n</html>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<html>\n    <head>\n    </head>\n    <body>\n        \x3c!-- Javascript is loaded after your HTML Body --\x3e\n        <script src="path-to-file-1.js"><\/script>\n        <script src="path-to-file-2.js"><\/script>\n    </body>\n</html>\n')),(0,i.kt)("p",null,"It's totaly fine to load multiple Javascript files. Today it's common to load often single files which are\nhighly optimized and bundled from mighty frameworks. But for the beginning don't mind all that fancy stuff and\njust reference your needed files."),(0,i.kt)("h3",{id:"write-javascript-directly-in-html"},"Write Javascript directly in HTML"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<html>\n    <head>\n        \x3c!-- .... --\x3e\n        <script>\n            //This Javascript code gets executed when the page loads\n            alert('hello world!');\n        <\/script>\n    </head>\n    <body>\n        \x3c!-- .... --\x3e\n    </body>\n</html>\n")),(0,i.kt)("h3",{id:"which-option-should-i-prefer"},"Which option should I prefer?"),(0,i.kt)("p",null,"It's totaly up to you but when I write Javascript it's almost always in an additional .js file. I try to seperate\nthe markup and styling from my logic which manipulates the behavior of my website. But small scripts doesn't hurt and can easily be places within script-tags in your HTML."),(0,i.kt)(o.Z,{type:"info",icon:"\ud83d\udcc8",title:"Keep in mind...",mdxType:"Admonition"},(0,i.kt)("p",null,"When you place your script tag in the head-element of your html, the page gets blocked until your Javascript code is done. This can be a good choice but doesn't have to. It's also possible to place the script tag in the end of the body-element to guarantee that the html page is loaded first and then the Javascript code.")),(0,i.kt)("p",null,"Now that we know how to embedd our next coming Javascript code, let's get our hands dirty."))}u.isMDXComponent=!0}}]);