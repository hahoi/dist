(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3629a9ba"],{"5f02":function(t,e,a){"use strict";var s=a("b476"),r=a.n(s);r.a},"86a7":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-container",[s("v-row",{},[s("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[s("v-btn",{attrs:{color:"orange"},on:{click:t.nearreported}},[t._v("顯示近期填報")])],1),s("v-col",{attrs:{cols:"12"}},[s("img",{directives:[{name:"show",rawName:"v-show",value:this.$store.state.loading,expression:"this.$store.state.loading"}],attrs:{src:a("cf1c"),height:"40px"}}),s("v-tree",{ref:"tree1",attrs:{data:t.treeData,tpl:t.tpl}})],1),s("v-spacer")],1)],1),s("v-container",[s("v-row",[s("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-right-transition"},model:{value:t.workDetailDialog,callback:function(e){t.workDetailDialog=e},expression:"workDetailDialog"}},[s("v-toolbar",{attrs:{dark:"",color:"primary"}},[s("v-btn",{staticClass:"px-0",attrs:{dark:"",text:""},on:{click:t.workDetailBackHandle}},[s("v-icon",[t._v("mdi-backspace")]),s("span",{staticClass:"title"},[t._v("退回")])],1),s("v-spacer")],1),s("v-card",{staticClass:"mx-auto",attrs:{tile:""}},[s("v-card-text",{staticClass:"px-3"},[s("ProgressReportDetail",{attrs:{propData:t.todo}})],1)],1)],1)],1)],1)],1)},r=[],o=(a("a4d3"),a("99af"),a("4de4"),a("d81d"),a("4e827"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("ade3")),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-card",{staticClass:"mx-auto blue lighten-5",attrs:{"max-width":"550",align:"left",outlined:""}},[a("v-card-text",[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"subtitle-1 mb-1",domProps:{innerHTML:t._s(t.propData.ptitle)}})]),a("v-col",{attrs:{cols:"12"}},[t._v(" 開始日期： "),a("span",{staticClass:"body-1 blue--text",domProps:{innerHTML:t._s(t.propData.t_startdate)}})]),a("v-col",{staticClass:"mb-2",attrs:{cols:"12"}},[t._v(" 完成日期： "),a("span",{staticClass:"body-1 blue--text mb-1",domProps:{innerHTML:t._s(t.propData.t_enddate)}})]),a("v-col",{attrs:{cols:"12"}},[t._v(" 負責單位： "),a("span",{staticClass:"body-1",domProps:{innerHTML:t._s(t.propData.depart)}})]),a("v-col",{attrs:{cols:"12"}},[t._v(" 剩餘天數： "),a("span",{staticClass:"body-1 blue--text",domProps:{innerHTML:t._s(t.propData.remaindays)}})]),a("v-col",{attrs:{cols:"12"}},[t._v(" 狀態： "),a("span",{staticClass:"body-1",domProps:{innerHTML:t._s(t.propData.status)}})]),a("v-col",{attrs:{cols:"12"}},[a("span",{staticClass:"body-2",domProps:{innerHTML:t._s(t.propData.memo)}})])],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"indigo",dark:""},on:{click:function(e){return t.ProcessAdd(t.newProcess,t.propData.id,!0,-1)}}},[t._v("進度填報")])],1)],1),a("v-card",{staticClass:"mx-auto lighten-5",staticStyle:{"border-width":"0px"},attrs:{"max-width":"550",align:"left",outlined:"",tile:""}},[a("v-card-text",{staticClass:"px-0"},[a("div",[a("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v("填報日期")]),a("th",{staticClass:"text-left"},[t._v("進度說明")]),a("th",{staticClass:"text-left"},[t._v("佐證資料")])])]),a("tbody",t._l(t.propData.process,(function(e,s){return a("tr",[a("td",{staticClass:"text-left px-0"},[a("v-menu",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(s){var r=s.on;return[a("v-btn",t._g({staticClass:"text-left px-0",attrs:{text:""}},r),[t._v(t._s(e.t_pgdate))])]}}],null,!0)},[e.showEdit?a("v-list",[a("v-list-item",[a("v-list-item-title",{on:{click:function(a){return t.ProcessAdd(e,t.propData.id,!1,s)}}},[t._v("修改")])],1),a("v-list-item",[a("v-list-item-title",{on:{click:function(a){return t.ProcessDelete(e,t.propData.id,s)}}},[t._v("刪除")])],1)],1):t._e()],1)],1),a("td",{staticClass:"text-left"},[t._v(t._s(e.pgdesc))]),e.pdf?a("td",{staticClass:"text-center"},[a("span",{staticClass:"blue--text",on:{click:function(a){return t.openPDF(""+e.cfmpic)}}},[t._v("檢視")])]):a("td",{directives:[{name:"viewer",rawName:"v-viewer",value:{inline:!1,button:!0,navbar:!1,title:!0,toolbar:!1,tooltip:!1,movable:!1,zoomable:!0,rotatable:!1,scalable:!1,transition:!1,fullscreen:!0,keyboard:!0,url:"data-source"},expression:"{'inline': false, 'button': true, 'navbar': false, 'title': true, 'toolbar': false, 'tooltip': false, 'movable': false, 'zoomable': true, 'rotatable': false, 'scalable': false, 'transition': false, 'fullscreen': true, 'keyboard': true, 'url': 'data-source' }"}],domProps:{innerHTML:t._s("<img src='"+e.cfmpic+"' style='height:80px;width:80px'>")}})])})),0)]},proxy:!0}])})],1)]),a("v-card-actions")],1),a("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-right-transition"},model:{value:t.ProcessAddDialog,callback:function(e){t.ProcessAddDialog=e},expression:"ProcessAddDialog"}},[a("workProcessAdd",{attrs:{propData4:t.ProcessAddData,addProcess:t.addProcess,ProcessNodeId:t.ProcessNodeId,ProcessItemIndex:t.ProcessItemIndex,ifProgressReport:!0},on:{listenToChild4:t.getChildData_ProcessAdd}})],1),a("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},model:{value:t.PDFdialog,callback:function(e){t.PDFdialog=e},expression:"PDFdialog"}},[a("v-card",[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-btn",{staticClass:"px-0",attrs:{dark:"",text:""},on:{click:function(e){t.PDFdialog=!1}}},[a("v-icon",[t._v("mdi-backspace")]),a("span",{staticClass:"title"},[t._v("關閉")])],1)],1),a("v-card-text",{staticClass:"px-0"},[a("iframe",{ref:"PDFiframe",attrs:{id:"PDFiframe",src:t.PDFURL,width:"100%",height:"1500px",frameborder:"0"}})])],1)],1)],1)},n=[],c=(a("a434"),a("b4ce")),l=a("9138"),d=a("6fa2"),p=a("c1df"),u=a.n(p),f={name:"ProgressReportDetail",props:["propData"],data:function(){return{ProcessAddDialog:!1,ProcessAddData:{},tempProcessAddData:{},tempIndex:-1,addProcess:!0,ProcessNodeId:"",ProcessItemIndex:-1,newProcess:{cfmpic:"",pgdate:new Date(u()()),pgdesc:"",pickey:"",t_pgdate:u()().format("YYYY-MM-DD")},PDFdialog:!1,PDFURL:"",iframeHeight:"1000 px"}},components:{workProcessAdd:c["a"]},created:function(){},mounted:function(){},watch:{},computed:{},methods:{ProcessAdd:function(t,e,a,s){this.addProcess=a,this.ProcessNodeId=e,this.ProcessItemIndex=s,a?this.ProcessAddData=Object.assign({},t):(this.tempProcessAddData=Object.assign({},t),this.tempIndex=s,this.ProcessAddData=t),this.ProcessAddDialog=!0},getChildData_ProcessAdd:function(t,e,a,s){if(this.ProcessAddDialog=!1,!t)return a||Object.assign(this.propData.process[this.tempIndex],this.tempProcessAddData),!1;t.pgdate=new Date(u()(t.t_pgdate)),a?this.propData.process.unshift(t):(Object.assign(this.propData.process[s],t),this.$forceUpdate());var r={process:this.propData.process};console.log("updateData",r),l["d"].collection(l["a"]).doc(e).update(r).then((function(){console.log("Document successfully Update!")})).catch((function(t){console.log("Uh-oh, an error occurred!")}))},ProcessDelete:function(t,e,a){var s=this;return console.log(this.propData,t,e,a),this.$dialog["warning"]({title:"警告",text:"確定要刪除這個進度嗎？",persistent:!1}).then((function(r){if(r){var o={process:s.propData.process};o.process.splice(a,1),l["d"].collection(l["a"]).doc(e).update(o).then((function(){console.log("Document successfully Update!")})).catch((function(t){console.log("Uh-oh, an error occurred!")})),console.log(t.pickey),""!=t.pickey&&l["f"].ref().child(t.pickey).delete()}})),this.ProcessAddDialog=!0,!1},openPDF:function(t){this.setiframe("PDFiframe"),this.PDFURL=t,this.PDFdialog=!0},setiframe:function(t){var e=this.$refs.PDFiframe,a=Math.max(document.documentElement.scrollHeight,document.documentElement.offsetHeight,document.documentElement.clientHeight);e&&(e.height=a+"px")},getServerTime:function(){var t=dbDatabase.ref(".info/serverTimeOffset");t.on("value",(function(t){var e=t.val(),a=(new Date).getTime()+e;return a}))}}},g=f,v=a("2877"),h=a("6544"),m=a.n(h),D=a("8336"),b=a("b0af"),_=a("99d9"),P=a("62ad"),x=a("169a"),y=a("132d"),w=a("8860"),k=a("da13"),C=a("5d23"),I=a("e449"),V=a("0fd9"),F=a("1f4f"),S=a("2fa4"),T=a("71d9"),L=Object(v["a"])(g,i,n,!1,null,null,null),M=L.exports;function O(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function R(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?O(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}m()(L,{VBtn:D["a"],VCard:b["a"],VCardActions:_["b"],VCardText:_["d"],VCol:P["a"],VDialog:x["a"],VIcon:y["a"],VList:w["a"],VListItem:k["a"],VListItemTitle:C["k"],VMenu:I["a"],VRow:V["a"],VSimpleTable:F["a"],VSpacer:S["a"],VToolbar:T["a"]});var j={name:"",data:function(){return{workDetailDialog:!1,treeData:[],db_data:[],todo:{},ShowRecentReport:10}},components:{ProgressReportDetail:M},created:function(){},mounted:function(){this.readData()},watch:{},computed:{},methods:{nearreported:function(){var t=this;this.$dialog.prompt({text:"天數",title:"顯示幾天內填報的資料：",persistent:!1}).then((function(e){e&&(t.ShowRecentReport=e,t.handleData(t.db_data))}))},readData:function(){var t=this;this.$store.commit("setLoading",!0),this.db_data=[],l["d"].collection(l["a"]).get().then((function(e){e.forEach((function(e){t.db_data.push(e.data())}))})).then((function(){t.handleData(t.db_data)})).then((function(){t.$refs.tree1.searchNodes("(".concat(t.$store.state.user.department,")"))}))},handleData:function(t){var e=this,a=t.map((function(t){return e.handleNodeData(t)}));this.treeData=d["a"].arrayToJson(a),this.$store.commit("setLoading",!1)},handleNodeData:function(t){t.t_title?t.title=t.t_title:t.t_title=t.title,t.expanded=!0,t.enddate&&(t.t_enddate=u()(t.enddate.toDate()).format("YYYY-MM-DD")),t.startdate&&(t.t_startdate=u()(t.startdate.toDate()).format("YYYY-MM-DD")),t.process&&(t.process.forEach((function(t){t.t_pgdate=u()(t.pgdate.toDate()).format("YYYY-MM-DD")||""})),t.process.sort((function(t,e){return u()(e.t_pgdate).diff(u()(t.t_pgdate))})));var e="";return u()(t.t_startdate)<u()(this.checkDate)&&"完成"!=t.status?(e=u()(t.t_enddate).diff(u()(this.checkDate),"day"),t.remaindays='<span class="red--text">'.concat(e,"天</span>")):t.remaindays="","完成"==t.status&&(t.title="<span class='green--text'>"+t.title+"</span>"),"不顯示"==t.status||"停止"==t.status?{}:(e<=0&&""!==e&&(t.title='<span class="red--text">'.concat(t.title,"</span>")),(u()(this.checkDate).isBefore(t.t_startdate)||""==t.t_startdate)&&(t.title="<span class='grey--text'>"+t.title+"</span>"),t.depart?t.title="".concat(t.title,'-<span class="deep-purple--text">(').concat(t.depart,")</span >"):t.title="".concat(t.title,'<span class="deep-purple--text">').concat(t.depart,"</span >"),t.ptitle=t.title,t.process&&t.process.length>0&&(0==this.ShowRecentReport?t.title=t.title:u()().diff(u()(t.process[0].t_pgdate),"day")<=this.ShowRecentReport&&(t.title="".concat(t.title,'【<span class="blue--text">').concat(t.process[0].t_pgdate," - ").concat(t.process[0].pgdesc,"</span>】"))),t)},tpl:function(){for(var t=this,e=this.$createElement,a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];var o=s[0],i=s[1],n=s[2],c=(s[3],o.selected?"node-title node-selected":"node-title");return o.searched&&(c+=" node-searched"),e("span",[e("span",{class:c,domProps:{innerHTML:o.title},on:{click:function(){i.parent.nodeSelected(i.props.node),null===n?t.$store.getters.projectEndDate:n.enddate||t.$store.getters.projectEndDate;var e=t.getServerTime();o.process&&o.process.forEach((function(t){var a=u()(e).diff(u()(t.t_pgdate))/864e5;t.showEdit=a<1})),t.todo=R({},o),t.workDetailDialog=!0}}})])},workDetailBackHandle:function(){this.readData(),this.workDetailDialog=!1},getServerTime:function(){var t=l["c"].ref(".info/serverTimeOffset");t.on("value",(function(t){var e=t.val(),a=(new Date).getTime()+e;return a}))}}},A=j,E=(a("5f02"),a("a523")),$=Object(v["a"])(A,s,r,!1,null,"892eaf96",null);e["default"]=$.exports;m()($,{VBtn:D["a"],VCard:b["a"],VCardText:_["d"],VCol:P["a"],VContainer:E["a"],VDialog:x["a"],VIcon:y["a"],VRow:V["a"],VSpacer:S["a"],VToolbar:T["a"]})},b476:function(t,e,a){},b4ce:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grey lighten-2"},[a("v-toolbar",{attrs:{dark:"",color:"indigo"}},[a("v-btn",{staticClass:"py-0 pl-1",attrs:{dark:"",text:""},on:{click:t.ProcessClose}},[a("v-icon",[t._v("mdi-backspace")]),a("span",{staticClass:"title"},[t._v("退回")])],1),a("v-spacer"),a("span",{staticClass:"headline lime--text"},[t._v(t._s(t.addProcess?"新增":"修改"))]),a("v-spacer")],1),a("v-card",{staticClass:"mx-auto",attrs:{height:"100vh","max-width":"550"}},[a("v-card-text",{staticClass:"py-0"},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-container",{staticClass:"text-center pb-0"},[a("div",{staticClass:"text-center mb-4"},[a("v-overlay",{attrs:{opacity:.5,"z-index":"1",value:t.alert}},[a("v-alert",{attrs:{color:"red",dark:"",transition:"scale-transition"}},[t._v(t._s(t.alertResult))])],1)],1),t.ifProgressReport?a("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"填報日期",rules:[t.rules.required],readonly:""},model:{value:t.propData4.t_pgdate,callback:function(e){t.$set(t.propData4,"t_pgdate",e)},expression:"propData4.t_pgdate"}})],1):a("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[a("v-dialog",{ref:"startDateDialog",attrs:{"return-value":t.propData4.t_pgdate,persistent:"",width:"290px"},on:{"update:returnValue":function(e){return t.$set(t.propData4,"t_pgdate",e)},"update:return-value":function(e){return t.$set(t.propData4,"t_pgdate",e)}},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-text-field",t._g({attrs:{label:"填報日期",rules:[t.rules.required],readonly:""},model:{value:t.propData4.t_pgdate,callback:function(e){t.$set(t.propData4,"t_pgdate",e)},expression:"propData4.t_pgdate"}},s))]}}]),model:{value:t.startDateDialogModal,callback:function(e){t.startDateDialogModal=e},expression:"startDateDialogModal"}},[a("v-date-picker",{attrs:{"first-day-of-week":"1",locale:"zh-TW",scrollable:""},model:{value:t.propData4.t_pgdate,callback:function(e){t.$set(t.propData4,"t_pgdate",e)},expression:"propData4.t_pgdate"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.startDateDialogModal=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.startDateDialog.save(t.propData4.t_pgdate)}}},[t._v("OK")])],1)],1)],1),a("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"進度說明",rules:[t.rules.required,t.rules.length(32)],counter:32},model:{value:t.propData4.pgdesc,callback:function(e){t.$set(t.propData4,"pgdesc",e)},expression:"propData4.pgdesc"}})],1),a("v-col",{staticClass:"pa-0",attrs:{cols:"12",align:"right"}},[""!==t.propData4.cfmpic&&3!==t.e1?a("v-btn",{attrs:{text:"",color:"orange"},on:{click:t.ProcessSave}},[t._v("進度說明存檔")]):t._e()],1)],1)],1)],1),[a("v-stepper",{attrs:{vertical:""},model:{value:t.e1,callback:function(e){t.e1=e},expression:"e1"}},[a("v-stepper-header",[a("v-stepper-step",{attrs:{complete:t.e1>1,step:"1"}},[t._v("步驟1")]),a("v-divider"),a("v-stepper-step",{attrs:{complete:t.e1>2,step:"2"}},[t._v("步驟2")]),a("v-divider"),a("v-stepper-step",{attrs:{step:"3"}},[t._v("步驟3")])],1),a("v-stepper-items",[a("v-stepper-content",{attrs:{step:"1"}},[a("v-card",{staticClass:"mb-2",attrs:{color:"grey lighten-2",height:"150",align:"center",justify:"center"}},[a("v-card-text",[""==t.propData4.cfmpic||t.propData4.pdf?t._e():a("div",{staticClass:"flex"},[a("v-img",{attrs:{src:t.propData4.cfmpic,"max-width":"100"}})],1),t.propData4.pdf?a("div",[t._v("PDF")]):t._e(),a("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{id:"inputimage",type:"file",accept:"image/*, .pdf"},on:{change:t.handleFileSelect}})])],1),a("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.$refs.fileInput.click()}}},[t._v("佐證資料")])],1),a("v-stepper-content",{attrs:{step:"2"}},[a("v-card",{staticClass:"mb-2",attrs:{color:"grey lighten-2",height:"150",align:"center",justify:"center"}},[a("v-card-text",{staticClass:"py-0"},[a("v-row",{staticClass:"pa-0"},[a("v-col",{staticClass:"pa-0",attrs:{cols:"8"}},t._l(t.imageFiles,(function(e,s){return a("div",[a("span",{staticClass:"delbtn",on:{click:function(e){return t.delImage(s)}}},[a("v-icon",{attrs:{large:"",color:""}},[t._v("mdi-delete-forever")])],1),t._v(" "+t._s(e.filename)+" "),a("br"),a("div",[a("v-img",{attrs:{src:e.imageDataUrl,"max-width":"100"}}),a("br"),e.GPSLatitude?a("div",[t._v(" 緯度："+t._s(e.GPSLatitude)+" "),a("br"),t._v(" 經度："+t._s(e.GPSLongitude)+" ")]):t._e()],1)])})),0),a("v-col",{attrs:{cols:"4"}},[t.progress>0?a("span",{attrs:{id:"progress"}},[a("v-progress-circular",{attrs:{size:80,width:10,rotate:-90,value:t.progress,color:"primary"}},[t._v(t._s(t.progress))])],1):t._e()])],1)],1)],1),a("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.uploadImage()}}},[t._v("上傳圖檔")])],1),a("v-stepper-content",{attrs:{step:"3"}},[a("v-card",{staticClass:"mb-2",attrs:{color:"grey lighten-2",height:"150",align:"center",justify:"center"}},[a("v-card-text",[""==t.propData4.cfmpic||t.propData4.pdf?t._e():a("div",[a("v-img",{attrs:{src:t.propData4.cfmpic,"max-width":"100"}})],1),t.propData4.pdf?a("div",[t._v("PDF")]):t._e()])],1),a("v-btn",{attrs:{color:"orange"},on:{click:t.ProcessSave}},[t._v("完成並存檔")])],1)],1)],1)]],2)],1)},r=[],o=(a("7db0"),a("fb6a"),a("b0c0"),a("466d"),a("159b"),a("9138")),i=a("6fa2"),n=(a("c1df"),{name:"workProcessAdd",props:["propData4","ProcessNodeId","addProcess","ProcessItemIndex","ifProgressReport"],data:function(){return{alertResult:"",alert:!1,valid:!1,rules:{length:function(t){return function(e){return(e||"").length<=t||"最多".concat(t,"個字元")}},required:function(t){return!!t||"這個欄位必須要輸入"},size:function(t){return!t||t.size<2e6||"頭相照片尺寸小於 2 MB！，不清楚"}},startDateDialogModal:!1,imageFiles:[],progress:0,e1:1,steps:2}},components:{},created:function(){},mounted:function(){},watch:{},computed:{},methods:{ProcessSave:function(){if(!this.$refs.form.validate())return!1;this.imageFiles=[],this.progress=0,this.$emit("listenToChild4",this.propData4,this.ProcessNodeId,this.addProcess,this.ProcessItemIndex),this.e1=1},ProcessClose:function(){""!==this.propData4.pickey&&3===this.e1&&(console.log(this.propData4.pickey),o["f"].ref().child(this.propData4.pickey).delete().then((function(){console.log("File deleted successfully")})).catch((function(t){console.log("Uh-oh, an error occurred!")}))),this.imageFiles=[],this.progress=0,this.e1=1,this.$emit("listenToChild4",!1,this.ProcessNodeId,this.addProcess,this.ProcessItemIndex)},handleFileSelect:function(t){var e=this,a=null;if(t.target.files&&window.FileReader){var s=t.target.files,r=Array.prototype.slice.call(s),n=r[0];if("application/pdf"!=n.type)r.forEach((function(t,s){if(t.type.match("image.*")){e.imageFiles.unshift({filename:"",imageDataUrl:"",EXIF:{},discription:"",GPSLatitude:0,GPSLongitude:0});var r=new FileReader,o=new Image;EXIF.getData(t,(function(){a=EXIF.getTag(this,"Orientation");var t=EXIF.getTag(this,"GPSLatitudeRef"),r=EXIF.getTag(this,"GPSLatitude"),o=EXIF.getTag(this,"GPSLongitudeRef"),n=EXIF.getTag(this,"GPSLongitude");void 0!=t&&void 0!=o&&void 0!=n&&void 0!=n&&(e.imageFiles[s].GPSLatitude="N"==t?i["a"].change_latlng(r):-1*i["a"].change_latlng(r),e.imageFiles[s].GPSLongitude="E"==o?i["a"].change_latlng(n):-1*i["a"].change_latlng(n))})),r.onload=function(r){o.src=r.target.result,o.onload=function(){var r=this.width,o=this.height;r>o&&r>750?(r=750,o=Math.ceil(750*this.height/this.width)):r<o&&o>1334&&(r=Math.ceil(1334*this.width/this.height),o=1334);var i=document.createElement("canvas"),n=i.getContext("2d");if(i.width=r,i.height=o,a&&1!=a)switch(a){case 6:i.width=o,i.height=r,n.rotate(Math.PI/2),n.drawImage(this,0,-o,r,o);break;case 3:n.rotate(Math.PI),n.drawImage(this,-r,-o,r,o);break;case 8:i.width=o,i.height=r,n.rotate(3*Math.PI/2),n.drawImage(this,-r,0,r,o);break}else n.drawImage(this,0,0,r,o);e.imageFiles[s].imageDataUrl=i.toDataURL("image/jpeg",.8),e.imageFiles[s].filename="image.jpg"==t.name?Math.floor(Date.now()/1e3)+".jpg":Math.floor(Date.now()/1e3)+t.name}},r.readAsDataURL(t)}})),this.e1=2;else{var c=+new Date+"-"+n.name,l={contentType:n.type},d=o["f"].ref().child("/"+o["a"]+"/"+e.ProcessNodeId+"/"+c).put(n,l);d.on("state_changed",(function(t){e.progress=t.bytesTransferred/t.totalBytes*100}),(function(t){}),(function(){d.snapshot.ref.getDownloadURL().then((function(t){e.propData4.cfmpic=t,e.propData4.pickey="/"+o["a"]+"/"+e.ProcessNodeId+"/"+c,e.propData4.pdf=!0,e.e1=3}))}))}}},dellatlng:function(t){var e=confirm("刪除GPS資料？");if(e){var a=this,s=a.data1.find((function(t){return t.id==a.tid}));s.images[t].key;s.images[t].center.lat=0,s.images[t].center.lng=0,place_data.set(a.data1)}},delImage:function(t){this.imageFiles.shift(t),this.e1=1},removeImage:function(t){this.imageFiles=[]},uploadImage:function(){var t=this,e=t.imageFiles;e.forEach((function(e,a,s){var r=o["f"].ref().child("/"+o["a"]+"/"+t.ProcessNodeId+"/"+e.filename).putString(e.imageDataUrl,"data_url");r.on("state_changed",(function(e){t.progress=e.bytesTransferred/e.totalBytes*100}),(function(t){console.log(t),alert("上傳圖片有錯誤！")}),(function(){r.snapshot.ref.getDownloadURL().then((function(a){t.propData4.cfmpic=a,t.propData4.pickey="/"+o["a"]+"/"+t.ProcessNodeId+"/"+e.filename,console.log(t.propData4.pickey),t.imageFiles=[],t.e1=3,t.progress=0}))}))}))}}}),c=n,l=a("2877"),d=a("6544"),p=a.n(d),u=a("0798"),f=a("8336"),g=a("b0af"),v=a("99d9"),h=a("62ad"),m=a("a523"),D=a("2e4b"),b=a("169a"),_=a("ce7e"),P=a("4bd4"),x=a("132d"),y=a("adda"),w=a("a797"),k=a("490a"),C=a("0fd9"),I=a("2fa4"),V=a("7e85"),F=a("e516"),S=a("9c54"),T=a("56a4"),L=a("8654"),M=a("71d9"),O=Object(l["a"])(c,s,r,!1,null,"28996016",null);e["a"]=O.exports;p()(O,{VAlert:u["a"],VBtn:f["a"],VCard:g["a"],VCardText:v["d"],VCol:h["a"],VContainer:m["a"],VDatePicker:D["a"],VDialog:b["a"],VDivider:_["a"],VForm:P["a"],VIcon:x["a"],VImg:y["a"],VOverlay:w["a"],VProgressCircular:k["a"],VRow:C["a"],VSpacer:I["a"],VStepper:V["a"],VStepperContent:F["a"],VStepperHeader:S["c"],VStepperItems:S["d"],VStepperStep:T["a"],VTextField:L["a"],VToolbar:M["a"]})},cf1c:function(t,e,a){t.exports=a.p+"img/loading.gif"}}]);