(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e9a85722"],{"1a95":function(e,t,a){},4459:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"bg"},[e._m(0),a("div",{staticClass:"select"},[a("el-select",{attrs:{filterable:"",placeholder:"案件名称"},on:{change:e.caseNameChange1},model:{value:e.select.caseName,callback:function(t){e.$set(e.select,"caseName",t)},expression:"select.caseName"}},e._l(e.cases,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),a("el-select",{attrs:{filterable:"",placeholder:"电话号码"},on:{change:e.caseNameChange2},model:{value:e.select.id,callback:function(t){e.$set(e.select,"id",t)},expression:"select.id"}},e._l(e.phoneList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticClass:"nav"},[a("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{name:"soonLate"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-view"}),a("router-link",{attrs:{to:"/ticket/singlePhone/soonLate"}},[e._v("最早最晚分析")])],1)]),a("el-tab-pane",{attrs:{name:"periodAll"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-view"}),a("router-link",{attrs:{to:"/ticket/singlePhone/periodAll"}},[e._v("分时段分析")])],1)]),a("el-tab-pane",{attrs:{name:"continuePeriod"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-view"}),a("router-link",{attrs:{to:"/ticket/singlePhone/continuePeriod"}},[e._v("连续时段分析")])],1)]),a("el-tab-pane",{attrs:{name:"differentPeriod"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-view"}),a("router-link",{attrs:{to:"/ticket/singlePhone/differentPeriod"}},[e._v("不同时段分析")])],1)]),a("el-tab-pane",{attrs:{name:"callAnalyse"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-view"}),a("router-link",{attrs:{to:"/ticket/singlePhone/callAnalyse"}},[e._v("通话分析")])],1)]),a("el-tab-pane",{attrs:{name:"callDetailAnalyse"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-view"}),a("router-link",{attrs:{to:"/ticket/singlePhone/callDetailAnalyse"}},[e._v("通话详情分析")])],1)]),a("el-tab-pane",{attrs:{name:"phoneHomeLocation"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-view"}),a("router-link",{attrs:{to:"/ticket/singlePhone/phoneHomeLocation"}},[e._v("号码归属分析")])],1)]),a("el-tab-pane",{attrs:{name:"phoneTravel"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-view"}),a("router-link",{attrs:{to:"/ticket/singlePhone/phoneTravel"}},[e._v("手机轨迹")])],1)]),a("el-tab-pane",{attrs:{name:"mobileAnalyse"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-view"}),a("router-link",{attrs:{to:"/ticket/singlePhone/mobileAnalyse"}},[e._v("移动设备分析")])],1)]),a("el-tab-pane",{attrs:{name:"weekPhone"}},[a("span",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-view"}),a("router-link",{attrs:{to:"/ticket/singlePhone/weekPhone"}},[e._v("一周号码频次")])],1)])],1)],1),a("div",{staticClass:"mainContent"},[a("router-view")],1)])])},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"title"},[a("h3",[e._v("单话单分析")])])}],n=(a("4634"),a("7cfd"),{inject:["reload"],data:function(){return{activeName:"soonLate",cases:[],phoneList:[],select:{id:"",caseName:""}}},mounted:function(){this.activeName=this.$route.name,this.ticketOneName(),null!==JSON.parse(localStorage.getItem("phoneArr"))&&(this.phoneList=JSON.parse(localStorage.getItem("phoneArr"))),null!==JSON.parse(localStorage.getItem("selectInfo"))&&(this.select=JSON.parse(localStorage.getItem("selectInfo")))},methods:{handleClick:function(e,t){},caseNameChange1:function(){this.ticketOnePhone()},caseNameChange2:function(){localStorage.setItem("selectInfo",JSON.stringify(this.select)),this.singlePhoneList()},ticketOneName:function(){var e=this,t=this;this.$api.ticketOneName().then((function(a){var s=a.data;if(s.success){var l=[],n=s.result;n.forEach((function(e){var t={};t.value=e.caseName,t.label=e.caseName,l.push(t)})),t.cases=l}else e.$message({message:"获取话单案件名称失败!",type:"error"})}))},ticketOnePhone:function(){var e=this,t=this,a=this.select.caseName;this.$api.ticketOnePhone(a).then((function(a){var s=a.data;if(s.success){var l=[],n=s.result;n.forEach((function(e){var t={};t.value=e.recordId,t.label=e.phoneNumber,l.push(t)})),t.phoneList=l,t.select.id=t.phoneList[0].value,t.caseNameChange2(),localStorage.setItem("phoneArr",JSON.stringify(l))}else e.$message({message:"获取话单案件电话失败!",type:"error"})}))},singlePhoneList:function(){var e=this,t=this,a=this.phoneList.filter((function(e){return e.value===t.select.id})),s={id:this.select.id,phone:a[0].label};this.$api.ticketOneAnalyze(s).then((function(a){var s=a.data;s.success?(localStorage.setItem("phoneInfo",JSON.stringify(s.result.list)),localStorage.setItem("phone",JSON.stringify(s.result.phone)),t.reload()):e.$message({message:"获取话单失败!",type:"error"})}))}}}),i=n,o=(a("ba82"),a("5284"),a("6691")),c=Object(o["a"])(i,s,l,!1,null,"6de726fc",null);t["default"]=c.exports},5284:function(e,t,a){"use strict";var s=a("bd32"),l=a.n(s);l.a},ba82:function(e,t,a){"use strict";var s=a("1a95"),l=a.n(s);l.a},bd32:function(e,t,a){}}]);