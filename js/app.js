(function(e){function t(t){for(var n,a,u=t[0],c=t[1],l=t[2],d=0,f=[];d<u.length;d++)a=u[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);s&&s(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,a=1;a<r.length;a++){var c=r[a];0!==o[c]&&(n=!1)}n&&(i.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={app:0},i=[];function a(e){return u.p+"js/"+({}[e]||e)+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=a(e);var l=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(d);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",l.name="ChunkLoadError",l.type=n,l.request=i,r[1](l)}o[e]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/dist/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var s=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"41cb":function(e,t,r){"use strict";r.d(t,"c",(function(){return s})),r.d(t,"a",(function(){return h}));r("a4d3"),r("4de4"),r("c975"),r("b0c0"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("159b");var n=r("ade3"),o=r("2b0e"),i=r("8c4f"),a=r("6fa2"),u=r("c0d6"),c=r("9138");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}o["a"].use(i["a"]);var s=[{path:"/",hidden:!1,component:function(){return r.e("chunk-2d221fb8").then(r.bind(null,"cd56"))},meta:{title:"Main"},children:[{path:"/project",component:function(){return r.e("chunk-269c77bc").then(r.bind(null,"616c"))},meta:{title:"專案管理",role:"專案管理",icon:"mdi-home"}},{path:"/worklist",component:function(){return Promise.all([r.e("chunk-14c3a650"),r.e("chunk-3c185b36")]).then(r.bind(null,"0b06"))},meta:{title:"工項管理",role:"工項管理",icon:"mdi-home",divider:!0}},{path:"/treeview",component:function(){return r.e("chunk-2d0d0f8b").then(r.bind(null,"69f8"))},meta:{title:"treeview",role:"treeview",icon:"mdi-home"}},{path:"/page1",component:function(){return r.e("chunk-2d215cd2").then(r.bind(null,"c06e"))},meta:{title:"第一頁",role:"第一頁",icon:"mdi-home"}},{path:"/page2",component:function(){return r.e("chunk-2d0c8f65").then(r.bind(null,"56b0"))},meta:{title:"第二頁",role:"第二頁",icon:"mdi-contact-mail",divider:!0}},{path:"/Users",component:function(){return Promise.all([r.e("chunk-14c3a650"),r.e("chunk-2d2308ce")]).then(r.bind(null,"ed81"))},meta:{title:"使用者管理",role:"使用者管理",icon:"mdi-account"}}]}],f=[{path:"/login",name:"login",component:function(){return r.e("chunk-c94c0a9e").then(r.bind(null,"dd7b"))}},{path:"/signup",name:"signup",component:function(){return r.e("chunk-c97749da").then(r.bind(null,"62c4"))}}],h=a["a"].deepCopy(s),p=new i["a"]({mode:"history",base:"/dist/",routes:f});t["b"]=p,p.beforeEach((function(e,t,r){if(u["a"].getters.userId)if(0!==u["a"].getters.newRouter.length)r();else if(u["a"].getters.user){var n=s,o=s[0].children.filter((function(e){if(e.meta)return-1!==u["a"].getters.user.role.indexOf(e.meta.role)}));n[0].children=o,p.addRoutes(n),u["a"].dispatch("saveRoles",n).then((function(t){r(d({},e))}))}else c["d"].collection("MyAppUsers").where("authId","==",u["a"].getters.userId).get().then((function(t){var n={};t.forEach((function(e){n={authId:e.data().authId,email:e.data().email,department:e.data().department,name:e.data().name,alias:e.data().alias,role:e.data().role,state:e.data().state,memo:e.data().memo}})),u["a"].dispatch("loginSet",n).then((function(){console.log("重新讀取使用者資料成功")})).catch((function(){console.log("重新讀取使用者資料失敗")}));var o=s,i=s[0].children.filter((function(e){if(e.meta)return-1!==u["a"].getters.user.role.indexOf(e.meta.role)}));o[0].children=i,p.addRoutes(o),u["a"].dispatch("saveRoles",o).then((function(t){r(d({},e))}))}));else"/login"==e.path||"/signup"==e.path?r():r("/login")}))},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("transition",{attrs:{mode:"out-in"}},[r("router-view")],1)],1)},i=[],a={name:"App",computed:{},created:function(){var e=this.$util.getWindowSize();e.height>1.2*e.width&&(this.$store.commit("storeDevice","Mobile"),console.log("It's Mobile")),e.height<=1.2*e.width&&(this.$store.commit("storeDevice","PC"),console.log("It's PC"))}},u=a,c=r("2877"),l=r("6544"),d=r.n(l),s=r("7496"),f=Object(c["a"])(u,o,i,!1,null,null,null),h=f.exports;d()(f,{VApp:s["a"]});var p=r("f309");n["a"].use(p["a"]);var v=new p["a"]({}),g=r("c0d6"),m=r("41cb"),b=(r("d3b7"),r("e25e"),r("25f0"),r("466d"),r("5319"),r("1276"),{cutStr:function(e,t){try{return e.length>t?e.substring(0,t)+"...":e}catch(r){return""}},verifyEmail:function(e){if(null==e||void 0==e)return!1;var t=/^[0-9A-Za-z_]+@[0-9A-Za-z]+\.[A-Za-z]+/;return t.test(e)},utcToLocal:function(e){var t=function(e){return e>=10?e:"0"+e},r=e.split(/[^0-9]/),n=new Date(r[0],r[1]-1,r[2],r[3],r[4],r[5]),o=new Date(n.getTime()+288e5);return t(o.getFullYear())+"-"+t(o.getMonth()+1)+"-"+t(o.getDate())+" "+t(o.getHours())+":"+t(o.getMinutes())+":"+t(o.getSeconds())},guid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0,r="x"==e?t:3&t|8;return r.toString(16)}))},randomInt:function(e,t){var r=t-e;if(r<0)return e;var n=Math.random()*r+e;return n=parseInt(n,10),n},copy:function(e){var t,r=document.createElement("input");r.value=e,document.body.appendChild(r),r.select();try{t=document.execCommand("copy")}catch(n){}return document.body.removeChild(r),t},formatTime:function(e){var t=parseInt(e),r=parseInt(t/60),n=parseInt(t%60);return(r<10?"0":"")+parseInt(t/60)+":"+(n<10?"0":"")+parseInt(t%60)},getWindowSize:function(){var e={};return e.width=window.innerWeight||document.documentElement.clientWidth||document.body.clientWidth,e.height=window.innerWeight||document.documentElement.clientHeight||document.body.clientHeight,e},addHttp:function(e){return(e.match(/https?:\/\//i)?"":"https://")+e}}),y=r("9eed"),w=r.n(y),O=r("83df"),x=(r("8128"),r("1816"),r("4e1d")),j=r.n(x),I=(r("0808"),r("6944")),A=r.n(I);n["a"].prototype.$util=b,n["a"].use(w.a,{vuetify:v}),n["a"].use(O["a"],{context:{vuetify:v}}),n["a"].use(j.a),n["a"].use(A.a),n["a"].config.productionTip=!1,new n["a"]({vuetify:v,store:g["a"],router:m["b"],render:function(e){return e(h)}}).$mount("#app")},"6fa2":function(e,t,r){"use strict";r("a4d3"),r("e01a"),r("d28b"),r("99af"),r("4de4"),r("fb6a"),r("a434"),r("b0c0"),r("a9e3"),r("b680"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("acd8"),r("25f0"),r("3ca3"),r("5319"),r("1276"),r("159b"),r("ddb0");var n=r("2909"),o=r("ade3"),i=r("53ca");function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t["a"]={cloneJSON:function(e){if(null===e||void 0===e||"object"!==Object(i["a"])(e))return e;if(e instanceof Array){for(var t=[],r=0;r<e.length;++r)t[r]=this.cloneJSON(e[r]);return t}var n={};for(var o in e)"title"!=o&&"id"!=o&&"children"!=o&&"expanded"!=o||(n[o]=this.cloneJSON(e[o]));return n},deepCopy:function(e){if(null===e||void 0===e||"object"!==Object(i["a"])(e))return e;if(e instanceof Array){for(var t=[],r=0;r<e.length;++r)t[r]=this.deepCopy(e[r]);return t}var n={};for(var r in e)n[r]=this.deepCopy(e[r]);return n},DBdeepCopy:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(null===e||void 0===e||"object"!==Object(i["a"])(e))return e;if(e instanceof Array){for(var r=[],n=0;n<e.length;++n)r[n]=this.DBdeepCopy(e[n],n);return r}var o={};for(var a in o.key=t,e)o[a]=this.DBdeepCopy(e[a],t);return o},jsonToArray:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=[];if(Array.isArray(e))for(var n=0,o=e.length;n<o;n++)e[n]["pid"]=t,r.push(e[n]),Array.isArray(e[n]["children"])&&e[n]["children"].length>0&&(r=r.concat(this.jsonToArray(e[n]["children"],e[n]["id"]))),delete e[n]["children"];return r},arrayToJson:function(e){var t=e.filter((function(t){var r=e.filter((function(e){return t.id==e.pid}));return r.length>0&&(t.children=r),0==t.pid}));return t},arrayTransTree:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"pid",n=[],o={},i=0;i<e.length;i++)o[e[i][t]]=e[i];for(var a=0;a<e.length;a++){var u=o[e[a][r]];u?(u["nodes"]||(u["nodes"]=[]),u["nodes"].push(e[a])):n.push(e[a])}return n},arrayToTree:function(e){for(var t=[],r={},n=0,o=e.length;n<o;n++)r[e[n]["id"]]=e[n];for(var i=0,a=e.length;i<a;i++){var u=r[e[i]["pid"]];u?(u["children"]||(u["children"]=[]),u["children"].push(e[i])):t.push(e[i])}return t},render:function(e){var t=this;if(!Array.isArray(e)||e.length<=0)return"";var r="<ul>";return e.forEach((function(e){var n=Array.isArray(e.children)&&e.children.length>0?"dir":"file";r+="<li>"+t.RemoveHTML(e.title)+n,Array.isArray(e.children)&&e.children.length>0&&(n="dir",r+=t.render(e.children)),r+="</li>"})),r+="</ul>",r},getTree:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=[];for(var o in e){var i=e[o];(r||i.pid)&&i.pid!==r||i.id===t||n.push(u({key:i.id,value:i.id+"",label:i.name,children:this.getTree(e,t,i.id)},i))}return n.length?n:void 0},getTreeParents:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=r.id,o=[];do{var i=!0,a=!1,u=void 0;try{for(var c,l=t[Symbol.iterator]();!(i=(c=l.next()).done);i=!0){var d=c.value;d.id===n&&(e=d)}}catch(m){a=!0,u=m}finally{try{i||null==l.return||l.return()}finally{if(a)throw u}}if(e&&e.pid){n=e.pid;var s=!0,f=!1,h=void 0;try{for(var p,v=t[Symbol.iterator]();!(s=(p=v.next()).done);s=!0){var g=p.value;g.id===n&&o.push(g)}}catch(m){f=!0,h=m}finally{try{s||null==v.return||v.return()}finally{if(f)throw h}}}}while(e&&e.pid);return o},getTreeAllChildren:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=[],o=!0,i=!1,a=void 0;try{for(var u,c=e[Symbol.iterator]();!(o=(u=c.next()).done);o=!0){var l=u.value;if(l.pid===t.id){r.push(l);var d=this.getTreeAllChildren(e,l);d&&r.push.apply(r,Object(n["a"])(d))}}}catch(s){i=!0,a=s}finally{try{o||null==c.return||c.return()}finally{if(i)throw a}}return r},my_unique:function(e){e=e.concat();for(var t=0;t<e.length;++t)for(var r=t+1;r<e.length;++r)e[t]===e[r]&&e.splice(r,1);return e},parsePath:function(e){var t=[];return r(e,[]),t[0];function r(e,n){if(!e||e.length<=0)return t.push(n.slice());for(var o=0;o<e.length;o++){var i=e[o];n.push(i.name),r(i.children,n),n.pop()}}},twoDim_to_oneDim:function(e){return result=[].concat.apply([],e)},RemoveHTML:function(e){var t=/<[^>]*>/g;return e.replace(t,"")},addCommas:function(e){e+="";var t=e.split("."),r=t[0],n=t.length>1?"."+t[1]:"",o=/(\d+)(\d{3})/;while(o.test(r))r=r.replace(o,"$1,$2");return r+n},pad:function(e){return e<10?"0"+e:e},DateStringID:function(e){return e.getUTCFullYear()+pad(e.getUTCMonth()+1)+pad(e.getUTCDate())},cal_quality:function(e){var t=48e4/parseFloat(e);return t<.1?t=.1:t>=.9&&(t=.9),t.toFixed(1)},change_latlng:function(e){var t=e;return parseFloat(t[0]+t[1]/60+t[2]/3600)},in_array:function(e,t){for(var r=t.split(","),n=0;n<r.length;n++){var o=r[n].toString();if(o==e)return!0}return!1},inArray:function(e,t){for(var r=0,n=t.length;r<n;r++)if(t[r]===e)return!0;return!1},capitalMoney:function(e){try{var t=1,r=new Array("","萬","億"),n=new Array("拾","佰","仟"),o=new Array("零","壹","貳","參","肆","伍","陸","柒","捌","玖"),i=this.splits(e),a=(i[0],i[1]),u=0,c=0,l=0,d="",s=i[0].length;for(t=1;t<=s;t++){var f=i[0].charAt(s-t),h=0;if(s-t-1>=0&&(h=i[0].charAt(s-t-1)),l+=Number(f),0!=l&&(d=o[Number(f)].concat(d),"0"==f&&(l=0)),s-t-1>=0)if(3!=u)0!=h&&(d=n[u].concat(d)),u++;else{u=0;var p=d.charAt(0);"万"!=p&&"亿"!=p||(d=d.substr(1,d.length-1)),d=r[c].concat(d),l=0}3==u&&c++}var v="";if(""!=a){var g=a.charAt(0);0!=g&&(v+=o[Number(g)]+"角"),g=a.charAt(1),0!=g&&(v+=o[Number(g)]+"分")}d+="元"+v}catch(m){return"0元"}return d},splits:function(e){for(var t=new Array("",""),r=e.split("."),n=0;n<r.length;n++)t=r;return t}}},9138:function(e,t,r){"use strict";r.d(t,"b",(function(){return u})),r.d(t,"c",(function(){return c})),r.d(t,"d",(function(){return l})),r.d(t,"f",(function(){return d})),r.d(t,"e",(function(){return s})),r.d(t,"a",(function(){return f}));var n=r("59ca"),o=r.n(n),i=(r("66ce"),r("e71f"),r("588e"),r("ea7b"),r("8934"),{apiKey:"AIzaSyDULgg9oarIWldmJPw0wio8wQlWWvvJZEo",authDomain:"pthg-6750e.firebaseapp.com",databaseURL:"https://pthg-6750e.firebaseio.com",projectId:"pthg-6750e",storageBucket:"pthg-6750e.appspot.com",messagingSenderId:"961587834250"}),a=o.a.initializeApp(i),u=a.auth(),c=a.database(),l=a.firestore(),d=a.storage(),s=a.functions(),f="DESIGN"},c0d6:function(e,t,r){"use strict";r("d3b7"),r("96cf");var n=r("2b0e"),o=r("2f62");n["a"].use(o["a"]);var i={device:"",userId:"undefined"===sessionStorage.getItem("uid")?"":sessionStorage.getItem("uid"),user:null,projectEndDate:"2020-05-31",loading:!0,LevelOneID:"1234567890abc",newRouter:[],workItemData:{}},a={device:function(e){return e.device},userId:function(e){return e.userId},user:function(e){return e.user},projectEndDate:function(e){return e.projectEndDate},loading:function(e){return e.loading},newRouter:function(e){return e.newRouter},workItemData:function(e){return e.workItemData}},u={setLoading:function(e,t){e.loading=t},storeDevice:function(e,t){e.device=t},storeUserId:function(e,t){e.userId=t},storeUser:function(e,t){e.user=t},clearUserId:function(e){e.userId=null},setNewRouter:function(e,t){e.newRouter=t},setWorkItemData:function(e,t){e.workItemData=t}},c={saveRoles:function(e,t){var r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.abrupt("return",new Promise((function(e){r("setNewRouter",t),e(t)})).catch((function(e){console.log("catch:",e)})));case 2:case"end":return n.stop()}}))},loginSet:function(e,t){var r;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.prev=1,n.abrupt("return",new Promise((function(e){r("storeUserId",t.authId),r("storeUser",t),sessionStorage.setItem("uid",t.authId),e(t)})));case 5:throw n.prev=5,n.t0=n["catch"](1),new Error(n.t0);case 8:case"end":return n.stop()}}),null,null,[[1,5]])},logout:function(e){var t;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return t=e.commit,r.prev=1,r.abrupt("return",new Promise((function(e){t("storeUserId",""),t("storeUser",null),location.reload(),sessionStorage.removeItem("uid"),e()})));case 5:throw r.prev=5,r.t0=r["catch"](1),new Error(r.t0);case 8:case"end":return r.stop()}}),null,null,[[1,5]])}};t["a"]=new o["a"].Store({state:i,getters:a,mutations:u,actions:c})}});