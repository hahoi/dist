(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2308ce"],{ed81:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.desserts,"sort-by":"createAt",locale:"zh-TW"},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[t._v("使用者管理")]),a("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:t._u([{key:"activator",fn:function(t){t.on}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{attrs:{outlined:""}},[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-toolbar-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("儲存")])],1),a("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[a("v-icon",[t._v("mdi-close")])],1)],1),a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"姓名",rules:[t.rules.required],name:"name"},model:{value:t.editedItem.name,callback:function(e){t.$set(t.editedItem,"name",e)},expression:"editedItem.name"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-select",{attrs:{items:t.department,label:"單位名稱"},model:{value:t.editedItem.department,callback:function(e){t.$set(t.editedItem,"department",e)},expression:"editedItem.department"}})],1),a("v-col",{attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"連絡電話",name:"telphone"},model:{value:t.editedItem.telphone,callback:function(e){t.$set(t.editedItem,"telphone",e)},expression:"editedItem.telphone"}})],1),-1!==t.editedIndex?a("v-col",{attrs:{cols:"12"}},[a("v-select",{attrs:{items:t.roles,"menu-props":{maxHeight:"400"},label:"權限",multiple:"","persistent-hint":""},model:{value:t.editedItem.role,callback:function(e){t.$set(t.editedItem,"role",e)},expression:"editedItem.role"}})],1):t._e()],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("不存離開")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v("儲存")])],1)],1)],1)],1)]},proxy:!0},{key:"item.action",fn:function(e){var i=e.item;return[a("v-menu",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on;return[a("v-btn",t._g({attrs:{icon:""}},i),[a("v-icon",[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[a("v-list",{staticClass:"text-left"},[a("v-list-item",[a("v-list-item-title",{on:{click:function(e){return t.editItem(i)}}},[a("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v("mdi-pencil-outline")]),t._v("編輯使用者資料 ")],1)],1),a("v-list-item",[a("v-list-item-title",{on:{click:function(e){return t.sendPasswordResetEmailFun(i)}}},[a("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v("mdi-pencil-outline")]),t._v("發送重設密碼電子郵件 ")],1)],1),a("v-list-item",[a("v-list-item-title",{on:{click:function(e){return t.ForcePasswordChangeAndAuthentication(i)}}},[a("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v("mdi-pencil-outline")]),t._v("強制變更密碼及驗證 ")],1)],1),a("v-list-item",[a("v-list-item-title",{on:{click:function(e){return t.deleteItem(i)}}},[a("v-icon",{staticClass:"mr-2",attrs:{small:""}},[t._v("mdi-delete")]),t._v("刪除使用者 ")],1)],1)],1)],1)]}},{key:"no-data",fn:function(){return[a("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v("重新載入資料")])]},proxy:!0}])})},n=[],o=(a("c975"),a("4e827"),a("a434"),a("b0c0"),a("466d"),a("159b"),a("53ca")),s=a("c1df"),l=a.n(s),r=a("9138"),d=a("41cb"),c={data:function(){return{dialog:!1,ForcePasswordChangeDialog:!1,headers:[{text:"登入代號",value:"alias"},{text:"Email",value:"email"},{text:"姓名",value:"name"},{text:"單位部門",value:"department"},{text:"連絡電話",value:"telphone"},{text:"使用權限",value:"role"},{text:"修改時間",value:"createAt"},{text:"操作",value:"action",sortable:!1}],desserts:[],roles:[],editedIndex:-1,department:[],slug:"",show1:!1,show2:!1,password:"",repassword:"",editedItem:{slug:"",alias:"",authId:null,email:"",name:"",department:"",telphone:"",role:[],state:"",memo:"",createAt:null},defaultItem:{alias:"",authId:null,email:"",name:"",department:"",telphone:"",role:[],state:"",memo:"",createAt:null},rules:{required:function(t){return!!t||"這個欄位必須要輸入"},min:function(t){return t.length>=8||"最少需要8個字元"},email:function(t){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(t)||"不合格式的 e-mail."},length:function(t){return function(e){return(e||"").length<=t||"最多".concat(t,"個字元")}},password:function(t){return(t||"").match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/)||"密碼必須包含大寫英文、數字、特殊字元"}}}},computed:{formTitle:function(){return-1===this.editedIndex?"新增使用者":"使用者資料編輯"}},watch:{dialog:function(t){t||this.close()}},created:function(){var t=this,e=this.$store.getters.user.alias,a="000614"===e?d["a"]:d["c"];a[0].children.forEach((function(e){void 0!==e.meta&&t.roles.push(e.meta.role)})),this.initialize()},mounted:function(){var t=this;r["c"].collection("SettingData").doc("Department").get().then((function(e){var a=e.data().depart;a.sort((function(t,e){return t.order-e.order})).forEach((function(e){t.department.push(e.title)}))}))},methods:{initialize:function(){var t=this;this.$store.commit("setLoading",!0),r["c"].collection("MyAppUsers").get().then((function(e){e.forEach((function(e){var a={slug:e.id,authId:e.data().authId,alias:e.data().alias,email:e.data().email,name:e.data().name,department:e.data().department,telphone:e.data().telphone||"",memo:e.data().memo,role:e.data().role,state:e.data().state,createAt:"object"===Object(o["a"])(e.data().createAt)?l()(e.data().createAt.toDate()).format("YYYY-MM-DD"):e.data().createAt||""};t.desserts.push(a)})),t.$store.commit("setLoading",!1)}))},editItem:function(t){this.editedIndex=this.desserts.indexOf(t),this.editedItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){var e=this.desserts.indexOf(t);confirm("確定要刪除這筆資料嗎？")&&this.desserts.splice(e,1),r["c"].collection("MyAppUsers").doc(t.slug).delete();var a=r["d"].httpsCallable("AdminDeleteUser");a({uid:t.authId}).then((function(t){return t.data}))},close:function(){var t=this;this.dialog=!1,setTimeout((function(){t.editedItem=Object.assign({},t.defaultItem),t.editedIndex=-1}),300)},save:function(){if(this.editedIndex>-1){var t=new Date;this.editedItem.createAt=l()(t).format("YYYY-MM-DD"),Object.assign(this.desserts[this.editedIndex],this.editedItem),this.editedItem.createAt=t,r["c"].collection("MyAppUsers").doc(this.editedItem.slug).set(this.editedItem).then((function(){console.log("Document successfully Update!")})).catch((function(t){console.error("Error Update document: ",t)}))}this.close()},sendPasswordResetEmailFun:function(t){var e=t.email;r["b"].sendPasswordResetEmail(e).then((function(){})).catch((function(t){}))},ForcePasswordChangeAndAuthentication:function(t){var e=this;this.$dialog.prompt({text:"密碼空白時，強制完成email認證。",title:"請輸入變更的密碼"}).then((function(a){var i={};void 0!==a?a.length<8?e.$dialog.notify.info("密碼長度至少需8個字元以上！"):i={uid:t.authId,emailVerified:!0,password:a}:i={uid:t.authId,emailVerified:!0};var n=r["d"].httpsCallable("AdminUpdateUser");n(i).then((function(t){console.log(t.data)}))}))}}},u=c,m=a("2877"),v=a("6544"),h=a.n(v),f=a("8336"),p=a("b0af"),b=a("99d9"),I=a("62ad"),g=a("a523"),x=a("8fea"),k=a("169a"),_=a("ce7e"),w=a("132d"),A=a("8860"),V=a("da13"),C=a("5d23"),y=a("e449"),D=a("0fd9"),T=a("b974"),$=a("2fa4"),E=a("8654"),M=a("71d9"),U=a("2a7f"),Y=Object(m["a"])(u,i,n,!1,null,null,null);e["default"]=Y.exports;h()(Y,{VBtn:f["a"],VCard:p["a"],VCardActions:b["b"],VCardText:b["d"],VCol:I["a"],VContainer:g["a"],VDataTable:x["a"],VDialog:k["a"],VDivider:_["a"],VIcon:w["a"],VList:A["a"],VListItem:V["a"],VListItemTitle:C["k"],VMenu:y["a"],VRow:D["a"],VSelect:T["a"],VSpacer:$["a"],VTextField:E["a"],VToolbar:M["a"],VToolbarItems:U["b"],VToolbarTitle:U["c"]})}}]);