(function(t){function e(e){for(var r,i,a=e[0],c=e[1],l=e[2],p=0,f=[];p<a.length;p++)i=a[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);s&&s(e);while(f.length)f.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={main:0},u=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var s=c;u.push(["c96c","chunk-vendors"]),n()})({c96c:function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-link",{attrs:{to:{path:"/"}}},[t._v("Home")]),e("router-link",{attrs:{to:{path:"/about"}}},[t._v("About")]),e("router-view")],1)},u=[],i=n("2877"),a={},c=Object(i["a"])(a,o,u,!1,null,null,null),l=c.exports,s=n("8c4f"),p=function(){var t=this,e=t._self._c;return e("div",[e("div",[t._v("id: "+t._s(t.item.id))]),e("div",[t._v("name: "+t._s(t.item.name))]),t.flag?e("div",[t._v("client only")]):t._e()])},f=[],d={name:"Home",data(){return{flag:!1}},mounted(){this.flag=!0},asyncData({store:t,route:e}){return console.log(e.query.id),t.dispatch("fetchItem",2)},computed:{item(){return this.$store.state.item}}},m=d,v=Object(i["a"])(m,p,f,!1,null,null,null),_=v.exports,h=function(){var t=this,e=t._self._c;return e("div",[t._v("About Page")])},b=[],y={},w=Object(i["a"])(y,h,b,!1,null,null,null),g=w.exports;r["a"].use(s["a"]);const O=[{path:"/",name:"Home",component:_},{path:"/about",name:"About",component:g}];function j(){return new s["a"]({mode:"history",routes:O})}var I=n("2f62");function P(t){const e=[{name:"item1",id:1},{name:"item2",id:2},{name:"item3",id:3}],n=e.find(e=>e.id==t);return Promise.resolve(n)}function S(){return new I["a"].Store({state:{item:{}},actions:{fetchItem({commit:t},e){return P(e).then(e=>{t("setItem",e)})}},mutations:{setItem(t,e){t.item=e}}})}function T(t){const e=j(),n=S(),o=new r["a"]({router:e,store:n,render:t=>t(l)});return{router:e,store:n,app:o}}r["a"].use(I["a"]),r["a"].config.productionTip=!1;const{app:x,router:A,store:k}=T();window.__INITIAL_STATE__&&k.replaceState(window.__INITIAL_STATE__),A.onReady(()=>{x.$mount("#app",!0)})}});
//# sourceMappingURL=main.a29c6e93.js.map