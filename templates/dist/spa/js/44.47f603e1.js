(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[44],{"0bf2":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",[e("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[e("q-table",{staticClass:"my-sticky-header-table shadow-24",attrs:{data:t.table_list,"row-key":"id",separator:t.separator,loading:t.loading,filter:t.filter,columns:t.columns,"hide-bottom":"",pagination:t.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:t.height},flat:"",bordered:""},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(){return[e("q-btn-group",{attrs:{push:""}},[e("q-btn",{attrs:{label:t.$t("refresh"),icon:"refresh"},on:{click:function(e){return t.reFresh()}}},[e("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n             "+t._s(t.$t("refreshtip"))+"\n           ")])],1)],1)]},proxy:!0},{key:"body",fn:function(a){return[e("q-tr",{attrs:{props:a}},[e("q-td",{key:"staff_type",attrs:{props:a}},[t._v("\n             "+t._s(a.row.staff_type)+"\n           ")]),e("q-td",{key:"creater",attrs:{props:a}},[t._v("\n             "+t._s(a.row.creater)+"\n           ")]),e("q-td",{key:"create_time",attrs:{props:a}},[t._v("\n           "+t._s(a.row.create_time)+"\n         ")]),e("q-td",{key:"update_time",attrs:{props:a}},[t._v("\n           "+t._s(a.row.update_time)+"\n         ")])],1)]}}])})],1),[e("div",{staticClass:"q-pa-lg flex flex-center"},[e("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.pathname_previous,expression:"pathname_previous"}],attrs:{flat:"",push:"",color:"purple",label:t.$t("previous"),icon:"navigate_before"},on:{click:function(e){return t.getListPrevious()}}},[e("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          "+t._s(t.$t("previous"))+"\n        ")])],1),e("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.pathname_next,expression:"pathname_next"}],attrs:{flat:"",push:"",color:"purple",label:t.$t("next"),"icon-right":"navigate_next"},on:{click:function(e){return t.getListNext()}}},[e("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          "+t._s(t.$t("next"))+"\n        ")])],1),e("q-btn",{directives:[{name:"show",rawName:"v-show",value:!t.pathname_previous&&!t.pathname_next,expression:"!pathname_previous && !pathname_next"}],attrs:{flat:"",push:"",color:"dark",label:t.$t("no_data")}})],1)]],2)},n=[],o=a("3004"),i=a("18d6"),r={name:"Pagestafflist",data(){return{openid:"",login_name:"",authin:"0",pathname:"staff/type/",pathname_previous:"",pathname_next:"",separator:"cell",loading:!1,height:"",table_list:[],columns:[{name:"staff_type",required:!0,label:this.$t("staff.view_staff.staff_type"),align:"left",field:"staff_type"},{name:"creater",label:this.$t("creater"),field:"creater",align:"center"},{name:"create_time",label:this.$t("createtime"),field:"create_time",align:"center"},{name:"update_time",label:this.$t("updatetime"),field:"update_time",align:"center"}],filter:"",pagination:{page:1,rowsPerPage:"30"}}},methods:{getList(){var t=this;i["a"].has("auth")&&Object(o["e"])(t.pathname,{}).then((e=>{t.table_list=e.results,"zh-hans"===i["a"].getItem("lang")&&t.table_list.forEach(((t,e)=>{"Admin"===t.staff_type?t.staff_type="管理员":"Customer"===t.staff_type?t.staff_type="客户":"Supplier"===t.staff_type?t.staff_type="供应商":"Manager"===t.staff_type?t.staff_type="经理":"Supervisor"===t.staff_type?t.staff_type="主管":"Inbound"===t.staff_type?t.staff_type="收货组":"Outbound"===t.staff_type?t.staff_type="发货组":"StockControl"===t.staff_type&&(t.staff_type="库存管理")})),t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getListPrevious(){var t=this;i["a"].has("auth")&&Object(o["e"])(t.pathname_previous,{}).then((e=>{t.table_list=e.results,"zh-hans"===i["a"].getItem("lang")&&t.table_list.forEach(((t,e)=>{"Admin"===t.staff_type?t.staff_type="管理员":"Customer"===t.staff_type?t.staff_type="客户":"Supplier"===t.staff_type?t.staff_type="供应商":"Manager"===t.staff_type?t.staff_type="经理":"Supervisor"===t.staff_type?t.staff_type="主管":"Inbound"===t.staff_type?t.staff_type="收货组":"Outbound"===t.staff_type?t.staff_type="发货组":"StockControl"===t.staff_type&&(t.staff_type="库存管理")})),t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getListNext(){var t=this;i["a"].has("auth")&&Object(o["e"])(t.pathname_next,{}).then((e=>{t.table_list=e.results,"zh-hans"===i["a"].getItem("lang")&&t.table_list.forEach(((t,e)=>{"Admin"===t.staff_type?t.staff_type="管理员":"Customer"===t.staff_type?t.staff_type="客户":"Supplier"===t.staff_type?t.staff_type="供应商":"Manager"===t.staff_type?t.staff_type="经理":"Supervisor"===t.staff_type?t.staff_type="主管":"Inbound"===t.staff_type?t.staff_type="收货组":"Outbound"===t.staff_type?t.staff_type="发货组":"StockControl"===t.staff_type&&(t.staff_type="库存管理")})),t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},reFresh(){var t=this;t.getList()}},created(){var t=this;i["a"].has("openid")?t.openid=i["a"].getItem("openid"):(t.openid="",i["a"].set("openid","")),i["a"].has("login_name")?t.login_name=i["a"].getItem("login_name"):(t.login_name="",i["a"].set("login_name","")),i["a"].has("auth")?(t.authin="1",t.getList()):t.authin="0"},mounted(){var t=this;t.$q.platform.is.electron?t.height=String(t.$q.screen.height-290)+"px":t.height=t.$q.screen.height-290+"px"},updated(){},destroyed(){}},f=r,p=a("42e1"),l=a("c694"),_=a("eaac"),c=a("e7a9"),u=a("9c40"),h=a("05c0"),d=a("bd08"),y=a("db86"),m=a("eebe"),g=a.n(m),b=Object(p["a"])(f,s,n,!1,null,null,null);"function"===typeof l["default"]&&Object(l["default"])(b);e["default"]=b.exports;g()(b,"components",{QTable:_["a"],QBtnGroup:c["a"],QBtn:u["a"],QTooltip:h["a"],QTr:d["a"],QTd:y["a"]})},"1fd3":function(t,e){},c694:function(t,e,a){"use strict";var s=a("1fd3"),n=a.n(s);e["default"]=n.a}}]);