(function(e){function t(t){for(var a,s,r=t[0],c=t[1],u=t[2],d=0,p=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={app:0},i=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/Portfolio/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0e29":function(e,t,n){},"408b":function(e,t,n){},4357:function(e,t,n){"use strict";n("0e29")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-app"},[n("Nav"),n("MorphBackground",{staticClass:"svg-morph-background"}),n("Home")],1)},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"center examplex"},[n("vs-navbar",{staticClass:"my-nav",attrs:{color:"#24252a","text-white":"",square:"","right-collapsed":""},scopedSlots:e._u([{key:"left",fn:function(){return[n("div",{staticClass:"logo"},[e._v("Logo")])]},proxy:!0},{key:"right",fn:function(){return[n("vs-switch",{on:{click:e.toggleLanguage},scopedSlots:e._u([{key:"off",fn:function(){return[n("i",{staticClass:"bx bxs-volume-mute"}),e._v(" ENG ")]},proxy:!0},{key:"on",fn:function(){return[n("i",{staticClass:"bx bxs-volume-full"}),e._v(" ESP ")]},proxy:!0}]),model:{value:e.lenguage,callback:function(t){e.lenguage=t},expression:"lenguage"}})]},proxy:!0}]),model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("vs-navbar-item",{attrs:{active:"home"==e.actualIndex,target:"_self",href:"#home"}},[n("span",{staticClass:"nav-link"},[e._v("Home ")])]),n("vs-navbar-item",{attrs:{active:"about"==e.actualIndex,target:"_self",href:"#about"}},[n("span",{staticClass:"nav-link"},[e._v("About Me")])]),n("vs-navbar-item",{attrs:{active:"experience"==e.actualIndex,target:"_self",href:"#experience"}},[n("span",{staticClass:"nav-link"},[e._v("Experience ")])]),n("vs-navbar-item",{attrs:{active:"contact"==e.actualIndex,target:"_self",href:"#contact"}},[n("span",{staticClass:"nav-link"},[e._v("Contact ")])])],1)],1)},r=[],c=n("5530"),u=n("2f62"),l={data:function(){return{lenguage:!1,active:!1}},methods:{toggleLanguage:function(){}},computed:Object(c["a"])({},Object(u["b"])({actualIndex:"navIndexSelected"}))},d=l,p=(n("ba3a"),n("2877")),f=Object(p["a"])(d,s,r,!1,null,"59b25b9a",null),v=f.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("svg",{staticClass:"svg",attrs:{viewBox:"0 0 1918 1080",preserveAspectRatio:"none"}},[n("path",{ref:"svgmorph",staticClass:"svgmorph",attrs:{id:"jajas",fill:"#24252a",d:"M-1 19.5909V0H1920V7V19.5909H1355H574.449H-1Z"}})])])},g=[],h=n("2909"),b=(n("d3b7"),n("25f0"),n("99af"),n("1209")),x={data:function(){return{defaultMorphOptions:{duration:2e3,loop:!1,direction:"alternate",easing:"easeOutElastic(1, .6)",delay:-1e3}}},mounted:function(){var e={value:"M-1 19.5909V0H1920V7V19.5909H1355H574.449H-1Z"},t=[{value:"M-61 113V0H1943V587.768V1081C1907.5 1081 1514 1107.27 1085 587.768C826.914 275.238 628 113 223 113H-61Z"}];this.morphBackground(e,t)},computed:Object(c["a"])({},Object(u["b"])({MorphBackgroundTo:"MorphBackgroundTo"})),watch:{MorphBackgroundTo:function(e){var t={value:this.$refs.svgmorph.getAttribute("d").toString()},n=e;this.morphBackground(t,n)}},methods:{morphBackground:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.defaultMorphOptions,a=[e].concat(Object(h["a"])(t));Object(b["default"])(Object(c["a"])({targets:this.$refs.svgmorph,d:a},n))}}},C=x,_=(n("8553"),Object(p["a"])(C,m,g,!1,null,"ff890c8a",null)),y=_.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home-full-page"},[n("full-page",{ref:"fullpage",attrs:{options:e.fullpageOptions}},[n("div",{staticClass:"section s1"},[n("div",{staticClass:"bg-1"}),n("div",{staticClass:"section-content"},[e._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae earum amet iusto ipsum dolorum. Veritatis, sit nam! Amet ipsa a, ut minima veniam ipsam sapiente deleniti tempore ratione aspernatur ducimus? ")])]),n("div",{staticClass:"section s2"},[n("div",{staticClass:"section-content"},[e._v(" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis totam exercitationem voluptas, laborum, assumenda rem facilis consequatur, at quam consectetur quod facere ex corporis soluta! At dolor ipsa tenetur officia? ")])]),n("div",{staticClass:"section s3"},[n("div",{staticClass:"section-content"},[e._v(" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, tempore consectetur quam numquam tenetur unde sed ab deleniti praesentium inventore possimus modi ducimus quis enim consequuntur quos, hic laboriosam. Fuga. ")])]),n("div",{staticClass:"section s4"},[n("div",{staticClass:"section-content"},[e._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores adipisci nostrum ad deserunt ipsum magni rerum nam debitis quod ducimus possimus, quos a repellendus, saepe recusandae amet assumenda eius? Quos! ")])])])],1)},O=[],H=(n("18a5"),{name:"Home",components:{},data:function(){return{fullpageOptions:{licenseKey:"YOUR_KEY_HEERE",paddingTop:"90px",menu:"menu",navigation:!0,anchors:["home","about","experience","contact"],onLeave:this.onLeave}}},methods:{onLeave:function(e,t,n){return this.$store.commit("changeNavigation",{destination:t.anchor,direction:n}),!0}}}),V=H,j=(n("4357"),Object(p["a"])(V,k,O,!1,null,"60c0b79c",null)),w=j.exports,M={name:"App",components:{Nav:v,MorphBackground:y,Home:w}},S=M,B=Object(p["a"])(S,o,i,!1,null,"9aa9abe8",null),E=B.exports,q=n("9483");Object(q["a"])("".concat("/Portfolio/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var P=n("8c4f");a["default"].use(P["a"]);var L=[{path:"/",name:"Home",component:w}],A=new P["a"]({mode:"history",base:"/Portfolio/",routes:L}),N=A;a["default"].use(u["a"]);var T={home:[{value:"M-61 113V0H1943V587.768V1081C1907.5 1081 1514 1107.27 1085 587.768C826.914 275.238 628 113 223 113H-61Z"}],about:[{value:"M-108 341.75V0H2060V579.424V684C1524.68 408.299 1513.45 791.579 1151.41 559.409C794.909 330.797 670.64 670.49 278.646 670.49C84.5 670.49 -108 624.957 -108 341.75Z"}],experience:[{value:"M-108 527V0H2060V34V182.5C1948 182.5 1962.5 271 1521.5 191.5C1038.57 104.442 1151.83 301.921 682 716.5C74 1253 -424 1202.5 -108 527Z"}],contact:[{value:"M-108 341.75V0H2008.5V94.5V1094.5C1922 1344.5 1531 1183.5 1103 1183.5C679.497 1183.5 23.4999 1283.5 -254 1008C-273.355 988.784 -108 624.957 -108 341.75Z"}],default:[{value:"M-1 19.5909V0H1920V7V19.5909H1355H574.449H-1Z"}]},I=new u["a"].Store({state:{navIndexSelected:"home",lastDirection:"up",MorphBackgroundTo:T["default"]},mutations:{changeNavigation:function(e,t){var n=t.destination,a=t.direction;e.navIndexSelected=n,e.lastDirection=a,e.MorphBackgroundTo=T[n]||T["default"]}},actions:{},modules:{}}),Z=n("574d"),$=n.n(Z),F=(n("04f2"),n("a45e")),D=n.n(F),R=n("01e8"),J=n.n(R);n("a0d8");a["default"].use($.a,{}),a["default"].use(D.a),a["default"].use(J.a),a["default"].config.productionTip=!1,new a["default"]({router:N,store:I,render:function(e){return e(E)}}).$mount("#app")},"58d0":function(e,t,n){},8553:function(e,t,n){"use strict";n("408b")},a0d8:function(e,t,n){},ba3a:function(e,t,n){"use strict";n("58d0")}});
//# sourceMappingURL=app.2d6f1280.js.map