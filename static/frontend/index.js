(()=>{var e={1754:(e,t,n)=>{"use strict";var i=n(7294),a=n(3935),r=n(9163);n(185);const l=()=>{const[e,t]=(0,i.useState)({itemOne:!1}),n=(0,i.useRef)(null);return(0,i.useLayoutEffect)((()=>{const e=n.current.getBoundingClientRect().top,i=()=>{const n=window.scrollY+window.innerHeight;e<n&&t((e=>({...e,itemOne:!0})))};return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)}),[]),i.createElement(i.Fragment,null,i.createElement(s,null,i.createElement(o,{animate:e.itemOne,ref:n},i.createElement("section",{className:"aboutme",id:"aboutme"},i.createElement("div",{className:"container"},i.createElement("div",{className:"aboutme-details"},i.createElement("div",{className:"aboutme-heading"},i.createElement("h1",null,"About Me"),i.createElement("h6",null,"Some words about who I am!.")),i.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),i.createElement("div",{className:"social-media"},i.createElement("ul",{className:"button text-center"},i.createElement("li",null,i.createElement("a",{href:"#",className:"icon-link my-auto"},i.createElement("i",{className:"fab fa-facebook-square"}))),i.createElement("li",null,i.createElement("a",{href:"#",className:"icon-link my-auto"},i.createElement("i",{className:"fab fa-snapchat-square"})))))))))))},o=r.ZP.div`
  height: 900px;
  width: 350px;
  transform: translateX(${({animate:e})=>e?"0":"100vw"});
  transition: transform 1s;
  margin: 20px;
`,s=r.ZP.div`
  margin-top: 2vh;
  display: flex;
  flex-flow: column;
  align-items: center;
`,c=document.getElementById("aboutme");a.render(i.createElement(l,null),c),n(8696);const m=()=>{const[e,t]=(0,i.useState)({itemOne:!1}),n=(0,i.useRef)(null);return(0,i.useLayoutEffect)((()=>{const e=n.current.getBoundingClientRect().top,i=()=>{const n=window.scrollY+window.innerHeight;e<n&&t((e=>({...e,itemOne:!0})))};return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)}),[]),i.createElement(i.Fragment,null,i.createElement(d,null,i.createElement(u,{animate:e.itemOne,ref:n},i.createElement("section",{className:"services",id:"services"},i.createElement("div",{className:"container"},i.createElement("div",{className:"services-heading section-heading"},i.createElement("h1",null,"Services"),i.createElement("h6",null,"More To Come In The Future")),i.createElement("div",{className:"my-product text-center"},i.createElement("div",{className:"product1"},i.createElement("h1",null,"Content Writing"),i.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),i.createElement("div",{className:"product2 text-center"},i.createElement("h1",null,"Web Development"),i.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))))))))},u=r.ZP.div`
  height: 700px;
  width: 350px;
  transform: translateX(${({animate:e})=>e?"0":"-100vw"});
  transition: transform 1s;
  margin: 10px;
  margin-top: 125px
`,d=r.ZP.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`,p=document.getElementById("services");a.render(i.createElement(m,null),p);const f=()=>{const[e,t]=(0,i.useState)({itemOne:!1}),n=(0,i.useRef)(null);return(0,i.useLayoutEffect)((()=>{const e=n.current.getBoundingClientRect().top,i=()=>{const n=window.scrollY+window.innerHeight;e<n&&t((e=>({...e,itemOne:!0})))};return window.addEventListener("scroll",i),()=>window.removeEventListener("scroll",i)}),[]),i.createElement(i.Fragment,null,i.createElement(h,null,i.createElement(g,{animate:e.itemOne,ref:n},i.createElement("section",{className:"portfolio",id:"portfolio"},i.createElement("div",{className:"container"},i.createElement("div",{className:"portfolio-heading section-heading"},i.createElement("h1",null,"Portfolio"),i.createElement("h2",null,"Have A Look!")),i.createElement("div",{className:"portfolio-item tex"},i.createElement("div",{className:"portfolio-img"},i.createElement("img",{src:"/static/images/portitem1.jpeg",alt:""})),i.createElement("div",{className:"portfolio-description text-center"},i.createElement("h3",null,"Blog, Stories and Content"),i.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),i.createElement("a",{href:"#",className:"cta"},"View details"))),i.createElement("div",{className:"portfolio-item"},i.createElement("div",{className:"portfolio-img"},i.createElement("img",{src:"/static/images/portitem2.jpeg",alt:""})),i.createElement("div",{className:"portfolio-description text-center"},i.createElement("h3",null,"Websites, Applications and Other Programming Stuff"),i.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),i.createElement("a",{href:"#",className:"cta"},"View details"))))))))},g=r.ZP.div`
  height: 900px;
  width: 350px;
  transform: translateX(${({animate:e})=>e?"0":"100vw"});
  transition: transform 1s;
  margin: 5px;
  margin-bottom: 1000px;
`,h=r.ZP.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`,v=document.getElementById("portfolio");a.render(i.createElement(f,null),v);var E=n(1624);function x(){return i.createElement(E.Zb,{style:{maxWidth:"300px"}},i.createElement(E.Ol,null,"Card header"),i.createElement(E.Mo,{src:"https://place-hold.it/300x200"}),i.createElement(E.eW,null,i.createElement(E.ll,null,"Lorem Ipsum"),i.createElement("p",null,"Lorem ipsum dolor sit amet."),i.createElement(E.zx,null,"Read more →")),i.createElement(E.iR,null,"Card footer"))}const b=document.getElementById("thetitle");ReactDOM.render(i.createElement(x,null),b)},1705:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});var i=n(3645),a=n.n(i)()((function(e){return e[1]}));a.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Permanent+Marker);"]),a.push([e.id,"\n#aboutme .container{\n  margin-top: 120px;\n  align-items: center;\n  justify-content: center;\n  display: grid;  \n  grid-gap: 10px 10px;\n  background-color: #2bd1fc;\n}\n\n.aboutme-heading{\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.aboutme p{\n  align-items: center;\n}\n\n.aboutme-heading h1{\n  font-size: 15rem;\n  font-family: 'Permanent Marker', cursive;\n  background: linear-gradient(to top, #131210, #f3f0f2);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  margin: 100px;\n}\n\n.aboutme-heading h6{\n  font-size: 2rem;\n  font-weight: 300;\n}\n\n.social-media{\n   margin-top: 5rem;\n   list-style-type: none;\n }\n\n.social-media i{\n  font-size: 5rem;\n  list-style-type: none;\n} \n\n.fa-facebook-square:hover{\n  color: aqua;\n}\n\n.fa-snapchat-square:hover{\n  color: #ffe838;\n}\n\n\n",""]);const r=a},3187:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r});var i=n(3645),a=n.n(i)()((function(e){return e[1]}));a.push([e.id,"@import url(https://fonts.googleapis.com/css?family=Permanent+Marker);"]),a.push([e.id,".services .container{\n    align-items: center;\n    justify-content: center;\n    display: grid;  \n    grid-gap: 10px 10px;\n    margin-top: 5%;\n  \n  }\n  \n  .my-skills{\n    margin-top: 5rem;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));\n    grid-gap: 1.5rem;\n  }\n  \n  \n  .services-heading{\n    text-align: center;\n    text-transform: uppercase;\n  }\n  \n  .services-heading h1{\n    font-size: 15rem;\n    font-family: 'Permanent Marker', cursive;\n    background: linear-gradient(to top, #131210, #f3f0f2);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n  }\n  \n  .services-heading h6{\n    font-size: 2rem;\n    font-weight: 300;\n  }",""]);const r=a},185:(e,t,n)=>{var i=n(1705);e.exports="string"==typeof i?i:i.toString()},8696:(e,t,n)=>{var i=n(3187);e.exports="string"==typeof i?i:i.toString()}},t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={id:i,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={826:0},t=[[1754,736]],i=()=>{};function a(){for(var i,a=0;a<t.length;a++){for(var r=t[a],l=!0,o=1;o<r.length;o++){var s=r[o];0!==e[s]&&(l=!1)}l&&(t.splice(a--,1),i=n(n.s=r[0]))}return 0===t.length&&(n.x(),n.x=()=>{}),i}n.x=()=>{n.x=()=>{},l=l.slice();for(var e=0;e<l.length;e++)r(l[e]);return(i=a)()};var r=a=>{for(var r,l,[s,c,m,u]=a,d=0,p=[];d<s.length;d++)l=s[d],n.o(e,l)&&e[l]&&p.push(e[l][0]),e[l]=0;for(r in c)n.o(c,r)&&(n.m[r]=c[r]);for(m&&m(n),o(a);p.length;)p.shift()();return u&&t.push.apply(t,u),i()},l=self.webpackChunkthesite=self.webpackChunkthesite||[],o=l.push.bind(l);l.push=r})(),n.x()})();