(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23f2e7e4","chunk-64e3d94a"],{"1e01":function(t,e,a){var i=a("da0b"),s=a("ae6e").set;t.exports=function(t,e,a){var n,r=e.constructor;return r!==a&&"function"==typeof r&&(n=r.prototype)!==a.prototype&&i(n)&&s&&s(t,n),t}},"2d28":function(t,e,a){"use strict";a.d(e,"b",(function(){return s})),a.d(e,"a",(function(){return n}));var i=a("8f4d");function s(t){return Object(i["a"])({url:i["a"].adornUrl("space/spacetime/spacequery"),method:"post",data:i["a"].adornData(t,!1)})}function n(t){return Object(i["a"])({url:i["a"].adornUrl("space/spacetime/analyzedetails"),method:"post",data:i["a"].adornData(t,!1)})}},"3a06":function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"4a63":function(t,e,a){},6236:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"timespacelist"},[a("div",{staticClass:"dir"},[a("div",{staticClass:"list",on:{click:t.search}},[a("span",{staticClass:"__icon el-icon-circle-check"}),a("span",[t._v("全部")])]),t._l(t.navList,(function(e,i){return a("div",{key:i,staticClass:"list",on:{click:function(a){return t.filterList(e.title)}}},[a("span",{class:["__icon",e.icon]}),a("span",[t._v(t._s(e.title))])])})),a("div",{staticClass:"list",on:{click:t.search}},[a("span",{staticClass:"__icon el-icon-search"}),a("span",[t._v("查询")])])],2),a("div",{staticClass:"tsimp"},[a("el-form",{ref:"form",staticClass:"demo-ruleForm",attrs:{model:t.form,"status-icon":"",rules:t.rules}},[a("el-form-item",{attrs:{prop:"idNumber"}},[a("el-input",{attrs:{placeholder:"身份证号"},model:{value:t.form.idNumber,callback:function(e){t.$set(t.form,"idNumber",e)},expression:"form.idNumber"}})],1),a("el-form-item",{attrs:{prop:"startDate"}},[a("el-date-picker",{attrs:{"popper-class":"datePicker",type:"date",placeholder:"选择开始日期"},model:{value:t.form.startDate,callback:function(e){t.$set(t.form,"startDate",e)},expression:"form.startDate"}})],1),a("el-form-item",{attrs:{prop:"endDate"}},[a("el-date-picker",{attrs:{"popper-class":"datePicker",type:"date",placeholder:"选择结束日期"},model:{value:t.form.endDate,callback:function(e){t.$set(t.form,"endDate",e)},expression:"form.endDate"}})],1)],1)],1),a("div",{staticClass:"infoCoat1"},[a("div",{staticClass:"infoCoat2"},[a("div",{staticClass:"infoList"},[a("el-timeline",{attrs:{reverse:!1}},t._l(t.dataList,(function(e,i){return a("el-timeline-item",{key:i,attrs:{placement:"top"}},[a("div",{staticClass:"listCoat1"},[a("div",{staticClass:"listCoat2"},[a("div",[a("div",{staticClass:"infoItem",staticStyle:{width:"17%"}},["飞机"===e.typeCode?a("span",{staticClass:"icon-zdy-feiji",style:t.iconStyle}):"火车"===e.typeCode?a("span",{staticClass:"icon-zdy-huoche",style:t.iconStyle}):"汽车"===e.typeCode?a("span",{staticClass:"icon-zdy-daba",style:t.iconStyle}):"旅馆"===e.typeCode?a("span",{staticClass:"icon-zdy-fangzidichan",style:t.iconStyle}):"网吧"===e.typeCode?a("span",{staticClass:"icon-zdy-qitaleixianshiqi",style:t.iconStyle}):t._e(),a("span",{staticStyle:{"font-size":"14px"}},[t._v(" "+t._s(e.typeCode)+"出行信息")])]),"旅馆"!==e.typeCode&&"网吧"!==e.typeCode?a("div",{staticClass:"infoItem",staticStyle:{width:"32%"}},[a("span",{staticStyle:{"font-size":"18px"}},[t._v("\n                      "+t._s(e.startSstation)+" - "+t._s(e.destination)+"\n                    ")]),a("span",{staticClass:"el-icon-time"},[t._v("\n                       "+t._s(e.startTime)+"\n                    ")])]):a("div",{staticClass:"infoItem",staticStyle:{width:"32%"}},[a("span",{staticStyle:{"font-size":"18px"}},[t._v(t._s(e.name))]),a("span",{staticClass:"el-icon-time"},[t._v(" "+t._s(e.startTime))])]),"旅馆"!==e.typeCode&&"网吧"!==e.typeCode?a("div",{staticClass:"infoItem",staticStyle:{width:"23%"}},[a("span",{staticClass:"icon-zdy-facheshikebiao"},[t._v("班次： "+t._s(e.toolNumber))])]):a("div",{staticClass:"infoItem",staticStyle:{width:"23%"}},[a("span",{staticClass:"icon-zdy-facheshikebiao"},[t._v(" "+t._s(e.addr||e.address))])]),"飞机"===e.typeCode?a("div",{staticClass:"infoItem",staticStyle:{width:"23%"}},[a("span",{staticClass:"icon-zdy-yizi"},[t._v(" "+t._s(e.cabinPlace)+"仓"+t._s(e.seatNumber))])]):"火车"===e.typeCode?a("div",{staticClass:"infoItem",staticStyle:{width:"23%"}},[a("span",{staticClass:"icon-zdy-yizi"},[t._v(" "+t._s(e.cabinPlace)+"车"+t._s(e.seatNumber))])]):"汽车"===e.typeCode?a("div",{staticClass:"infoItem",staticStyle:{width:"23%"}},[a("span",{staticClass:"icon-zdy-yizi"},[t._v(" "+t._s(e.seatNumber)+"座")])]):"汽车"===e.typeCode?a("div",{staticClass:"infoItem",staticStyle:{width:"23%"}},[a("span",{staticClass:"icon-zdy-yizi"},[t._v(" "+t._s(e.seatNumber)+"座")])]):"旅馆"===e.typeCode?a("div",{staticClass:"infoItem",staticStyle:{width:"23%"}},[a("span",{staticClass:"icon-zdy-yizi"},[t._v(" "+t._s(e.roomNo)+"房")])]):"网吧"===e.typeCode?a("div",{staticClass:"infoItem",staticStyle:{width:"23%"}},[a("span",{staticClass:"icon-zdy-yizi"},[t._v(" "+t._s(e.computerNo)+"号机")])]):t._e(),a("div",{staticClass:"infoItem",staticStyle:{width:"5%"}},[a("span",{staticClass:"el-icon-d-arrow-right",on:{click:function(a){return t.gotoInfo(e)}}})])])])])])})),1)],1)]),a("el-pagination",{attrs:{"current-page":t.page,"page-size":t.pageSize,layout:"total, prev, pager, next, jumper",total:t.totalSize},on:{"current-change":t.changePage}})],1),a("div",{staticClass:"infoCard"},[a("personal-info-card",{attrs:{IDNum:t.userData&&t.userData.idNnumber,name:t.userData&&t.userData.name,nationality:t.userData&&t.userData.nation,sex:t.userData&&t.userData.sex,birthday:t.userData&&t.userData.birthday,mobile:t.userData&&t.userData.cellphone,addr:t.userData&&t.userData.currentAddress},on:{addToRelationAnalysis:t.addToRelationAnalysis}})],1)])},s=[],n=(a("de90"),a("dea4")),r=a("672a"),o=a("2d28");function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return function(a,i){var s=[a[t],i[t]],n=s[0],r=s[1];return 1===e?n-r:r-n}}var l=a("e04f"),d=a.n(l),u={name:"timespacelist",components:{personalInfoCard:r["default"]},data:function(){return{navList:[{title:"飞机",value:"air",icon:"icon-zdy-feiji"},{title:"火车",value:"train",icon:"icon-zdy-huoche"},{title:"汽车",value:"bus",icon:"icon-zdy-daba"},{title:"旅馆",value:"hotel",icon:"icon-zdy-fangzidichan"},{title:"网吧",value:"web",icon:"icon-zdy-qitaleixianshiqi"}],form:{startDate:d.a.get("shikong_list_params")?JSON.parse(d.a.get("shikong_list_params")).startDate:"",endDate:d.a.get("shikong_list_params")?JSON.parse(d.a.get("shikong_list_params")).endDate:"",idNumber:d.a.get("shikong_list_params")?JSON.parse(d.a.get("shikong_list_params")).idNumber:""},rules:{idNumber:this.filter_rules({required:!0,type:"idCard"}),startDate:[{required:!1,message:"请选择开始日期",trigger:"blur"}],endDate:[{required:!1,message:"请选择结束日期",trigger:"blur"}]},userData:null,totalData:null,dataList:[],iconStyle:{fontSize:"40px",overflow:"inherit"},page:1,pageSize:10,totalSize:1}},created:function(){var t=this;document.onkeydown=function(){13===window.event.keyCode&&t.onSubmit("form")}},mounted:function(){this.receiveRouter(),document.addEventListener("click",this.handleDocumentClick),this.getList()},methods:{receiveRouter:function(){this.form.idNumber=this.$route.query.idNumber,this.form.startDate=this.$route.query.startDate,this.form.endDate=this.$route.query.endDate},filterList:function(t){this.page=1,this.totalSize=1;var e=[this.totalData,[]],a=e[0],i=e[1];a.map((function(e){e.typeCode===t&&i.push(e)})),this.dataList=i.slice(0,this.pageSize)},search:function(){this.getList()},onSubmit:function(t){var e=this;this.$refs[t].validate((function(t){t&&e.getTimespaceList()}))},getTimespaceList:function(){this.$api.spacequery(this.from).then((function(t){t.data}))},gotoInfo:function(t){d.a.set("shikong_list_params",this.form),d.a.set("shikong_data",t);var e={fj:"飞机",qc:"汽车",hc:"火车",lg:"旅馆",wb:"网吧"};for(var a in e)e[a]===t.typeCode&&this.$router.push({name:"timespaceinfo",query:{type:a}})},changePage:function(t){this.dataList=this.totalData.slice(this.pageSize*(t-1),t*this.pageSize)},addToRelationAnalysis:function(){},getList:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.form.startDate,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.form.endDate,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.form.idNumber;Object(o["b"])({beginTime:e,endTime:a,identityNumber:i}).then((function(e){var a=e.data;if(a&&200===parseInt(a.code)){var i=a.result;t.userData=i.crewEntity[0],i.bg.map((function(t){t.typeCode="旅馆"})),i.wb.map((function(t){t.typeCode="网吧"}));var s=[].concat(Object(n["a"])(i.fj),Object(n["a"])(i.hc),Object(n["a"])(i.qc),Object(n["a"])(i.bg),Object(n["a"])(i.wb));s.map((function(t){t.checkIn&&(t.timestamp=new Date(t.checkIn).getTime()),t.startTime&&(t.timestamp=new Date(t.startTime).getTime()),t.checkIn&&!t.startTime&&(t.startTime=t.checkIn)})),s=s.sort(c("timestamp")),t.totalData=s,t.totalSize=s.length,t.dataList=t.totalData.slice(0,t.pageSize)}else t.$message.error(a.message)}))}}},p=u,f=(a("f731"),a("6691")),m=Object(f["a"])(p,i,s,!1,null,"00650f57",null);e["default"]=m.exports},"672a":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"personalInfoCard"},[a("div",{staticClass:"cardCoat1"},[a("div",{staticClass:"cardCoat2"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("人员信息")]),a("el-button",{staticStyle:{float:"right",padding:"0"},attrs:{icon:"el-icon-postcard",type:"text"}})],1),a("div",{staticClass:"cardImg"},[a("img",{attrs:{src:t.avatar,alt:""}})]),a("div",{staticClass:"cardInfo"},[a("div",{staticClass:"list"},[a("span",[t._v("证件号码")]),t._v("  \n            "),a("span",[t._v(t._s(t.IDNum))])]),a("div",{staticClass:"list"},[a("span",[t._v("姓名")]),t._v("  \n            "),a("span",[t._v(t._s(t.name))])]),a("div",{staticClass:"list"},[a("span",[t._v("民族")]),t._v("  \n            "),a("span",[t._v(t._s(t.nationality))])]),a("div",{staticClass:"list"},[a("span",[t._v("性别")]),t._v("  \n            "),a("span",[t._v(t._s(t.realSex))])]),a("div",{staticClass:"list"},[a("span",[t._v("出生日期")]),t._v("  \n            "),a("span",[t._v(t._s(t.birthday))])]),a("div",{staticClass:"list"},[a("span",[t._v("联系电话")]),t._v("  \n            "),a("span",[t._v(t._s(t.mobile))])]),a("div",{staticClass:"list"},[a("span",[t._v("现居地")]),t._v("  \n            "),a("span",[t._v(t._s(t.addr))])])]),a("div",{staticClass:"timespaceBut"},[a("el-button",{staticClass:"sureBut",attrs:{size:"mini",type:"primary"},on:{click:t.addToRelationAnalysis}},[a("span",[t._v("添加到关系分析")])])],1)])],1)])])},s=[],n=(a("8f42"),{name:"personalInfoCard",props:{avatar:{default:"",required:!1,type:String},IDNum:{default:"",required:!1,type:[Number,String]},name:{default:"",required:!1,type:String},nationality:{default:"",required:!1,type:String},sex:{default:"",required:!1,type:[String,Number]},birthday:{default:"",required:!1,type:String},mobile:{default:"",required:!1,type:[String,Number]},addr:{default:"",required:!1,type:String}},computed:{realSex:function(t){return t-0===1?"女":"男"}},methods:{addToRelationAnalysis:function(){this.$emit("addToRelationAnalysis")}}}),r=n,o=(a("ffbb"),a("6691")),c=Object(o["a"])(r,i,s,!1,null,"372f2ca0",null);e["default"]=c.exports},"6bd2":function(t,e,a){},7130:function(t,e,a){var i=a("2498"),s=a("3038"),n=a("0cc1"),r=a("3a06"),o="["+r+"]",c="​",l=RegExp("^"+o+o+"*"),d=RegExp(o+o+"*$"),u=function(t,e,a){var s={},o=n((function(){return!!r[t]()||c[t]()!=c})),l=s[t]=o?e(p):r[t];a&&(s[a]=l),i(i.P+i.F*o,"String",s)},p=u.trim=function(t,e){return t=String(s(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(d,"")),t};t.exports=u},"8eba":function(t,e,a){"use strict";var i=a("0cc1");t.exports=function(t,e){return!!t&&i((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},"8f42":function(t,e,a){"use strict";var i=a("3f8b"),s=a("549d"),n=a("6077"),r=a("1e01"),o=a("2ab1"),c=a("0cc1"),l=a("cb2e").f,d=a("e493").f,u=a("d3d8").f,p=a("7130").trim,f="Number",m=i[f],v=m,y=m.prototype,h=n(a("65c3")(y))==f,_="trim"in String.prototype,C=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=_?e.trim():p(e,3);var a,i,s,n=e.charCodeAt(0);if(43===n||45===n){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===n){switch(e.charCodeAt(1)){case 66:case 98:i=2,s=49;break;case 79:case 111:i=8,s=55;break;default:return+e}for(var r,c=e.slice(2),l=0,d=c.length;l<d;l++)if(r=c.charCodeAt(l),r<48||r>s)return NaN;return parseInt(c,i)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof m&&(h?c((function(){y.valueOf.call(a)})):n(a)!=f)?r(new v(C(e)),a,m):C(e)};for(var b,g=a("f9a5")?l(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;g.length>S;S++)s(v,b=g[S])&&!s(m,b)&&u(m,b,d(v,b));m.prototype=y,y.constructor=m,a("a6d5")(i,f,m)}},ae6e:function(t,e,a){var i=a("da0b"),s=a("8cac"),n=function(t,e){if(s(t),!i(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,i){try{i=a("e85e")(Function.call,a("e493").f(Object.prototype,"__proto__").set,2),i(t,[]),e=!(t instanceof Array)}catch(s){e=!0}return function(t,a){return n(t,a),e?t.__proto__=a:i(t,a),t}}({},!1):void 0),check:n}},cb2e:function(t,e,a){var i=a("7afe"),s=a("d93f").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return i(t,s)}},de90:function(t,e,a){"use strict";var i=a("2498"),s=a("8451"),n=a("a9cf"),r=a("0cc1"),o=[].sort,c=[1,2,3];i(i.P+i.F*(r((function(){c.sort(void 0)}))||!r((function(){c.sort(null)}))||!a("8eba")(o)),"Array",{sort:function(t){return void 0===t?o.call(n(this)):o.call(n(this),s(t))}})},dea4:function(t,e,a){"use strict";function i(t){if(Array.isArray(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}function s(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r(t){return i(t)||s(t)||n()}a.d(e,"a",(function(){return r}))},e493:function(t,e,a){var i=a("c864"),s=a("0614"),n=a("6117"),r=a("2ab1"),o=a("549d"),c=a("25ae"),l=Object.getOwnPropertyDescriptor;e.f=a("f9a5")?l:function(t,e){if(t=n(t),e=r(e,!0),c)try{return l(t,e)}catch(a){}if(o(t,e))return s(!i.f.call(t,e),t[e])}},f731:function(t,e,a){"use strict";var i=a("4a63"),s=a.n(i);s.a},ffbb:function(t,e,a){"use strict";var i=a("6bd2"),s=a.n(i);s.a}}]);