(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46e3066c"],{"1c70":function(e,t,a){},2544:function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"organManage"},[a("div",{staticClass:"coat1"},[a("div",{staticClass:"coat2"},[a("div",{staticClass:"operateMenu"},[a("ul",{staticClass:"clearfix"},[a("li",{on:{click:function(t){e.addDialog=!0}}},[e._v("添加")]),a("li",{on:{click:function(t){e.pitchOn()&&(e.getChooseData(),e.editDialog=!0)}}},[e._v("\n            编辑\n          ")]),a("li",{on:{click:function(t){e.importDialog=!0}}},[e._v("导入")]),a("li",{on:{click:function(t){e.pitchOn2()&&(e.deleteDialog=!0)}}},[e._v("删除")]),a("li",{on:{click:function(t){return e.flush()}}},[e._v("刷新")])])]),a("div",{staticClass:"fgx"}),a("div",{staticClass:"organTable"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.organData},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"50"}}),a("el-table-column",{attrs:{prop:"title",label:"机构名称",width:"225"}}),a("el-table-column",{attrs:{prop:"coding",label:"机构编码",width:"225"}}),a("el-table-column",{attrs:{prop:"status",label:"状态",width:"225"}}),a("el-table-column",{attrs:{prop:"describeP",label:"描述"}}),a("el-table-column",{attrs:{prop:"createTime",label:"创建时间",width:"225"}})],1),a("Pagination",{staticClass:"user-list-pagination",attrs:{curPage:e.currentPage,totalPage:e.totalPage,size:e.pageSize},on:{handleCurrentChange:e.changePage}})],1),a("div",{staticClass:"dialog"},[a("fly-dialog",{attrs:{title:"添加机构",show:e.addDialog},on:{"update:show":function(t){e.addDialog=t}}},[a("div",{staticClass:"from"},[a("el-form",{ref:"form",staticClass:"demo-ruleForm",attrs:{model:e.form,"status-icon":"",rules:e.rules,"hide-required-asterisk":e.asterisk,"label-width":"50%"}},[a("el-form-item",{attrs:{label:"机构名称",prop:"name"}},[a("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"机构编码",prop:"code"}},[a("el-input",{model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1),a("el-form-item",{attrs:{label:"机构描述",prop:"desc"}},[a("el-input",{model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1),a("el-form-item",{attrs:{label:"上级机构",prop:"superior"}},[a("el-select",{attrs:{"popper-class":"fromselect",placeholder:"请选择部门"},on:{change:e.chooseDepartmentId},model:{value:e.form.superior,callback:function(t){e.$set(e.form,"superior",t)},expression:"form.superior"}},e._l(e.superiorList,(function(e,t){return a("el-option",{key:t,attrs:{label:e.title,value:e.title}})})),1)],1),a("el-form-item",{attrs:{label:"下辖授权数",prop:"authNum"}},[a("el-input",{attrs:{placeholder:"为大于0的整数"},model:{value:e.form.authNum,callback:function(t){e.$set(e.form,"authNum",t)},expression:"form.authNum"}})],1)],1)],1),a("div",{staticClass:"butCoat"},[a("el-button",{staticClass:"canBut",on:{click:function(t){e.addDialog=!1}}},[a("span",[e._v("取 消")])]),a("el-button",{staticClass:"okBut",attrs:{type:"primary"},on:{click:e.addOrgan}},[a("span",[e._v("确 定")])])],1)]),a("fly-dialog",{attrs:{title:"编辑机构",show:e.editDialog},on:{"update:show":function(t){e.editDialog=t}}},[a("div",{staticClass:"from"},[a("el-form",{ref:"form",staticClass:"demo-ruleForm",attrs:{model:e.organInfo,"status-icon":"",rules:e.rules,"hide-required-asterisk":e.asterisk,"label-width":"50%"}},[a("el-form-item",{attrs:{label:"机构名称",prop:"title"}},[a("el-input",{model:{value:e.organInfo.title,callback:function(t){e.$set(e.organInfo,"title",t)},expression:"organInfo.title"}})],1),a("el-form-item",{attrs:{label:"机构编码",prop:"coding"}},[a("el-input",{attrs:{disabled:!0},model:{value:e.organInfo.coding,callback:function(t){e.$set(e.organInfo,"coding",t)},expression:"organInfo.coding"}})],1),a("el-form-item",{attrs:{label:"机构层级",prop:"hierarchy"}},[a("el-input",{model:{value:e.organInfo.hierarchy,callback:function(t){e.$set(e.organInfo,"hierarchy",t)},expression:"organInfo.hierarchy"}})],1),a("el-form-item",{attrs:{label:"机构描述",prop:"describeP"}},[a("el-input",{model:{value:e.organInfo.describeP,callback:function(t){e.$set(e.organInfo,"describeP",t)},expression:"organInfo.describeP"}})],1),a("el-form-item",{attrs:{label:"机构状态",prop:"state"}},[a("el-select",{attrs:{"popper-class":"fromselect",placeholder:"请选择状态"},model:{value:e.organInfo.state,callback:function(t){e.$set(e.organInfo,"state",t)},expression:"organInfo.state"}},e._l(e.stateList,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),a("el-form-item",{attrs:{label:"下辖授权数",prop:"authNum"}},[a("el-input",{attrs:{placeholder:"为大于0的整数"},model:{value:e.organInfo.authNum,callback:function(t){e.$set(e.organInfo,"authNum",t)},expression:"organInfo.authNum"}})],1)],1)],1),a("div",{staticClass:"butCoat"},[a("el-button",{staticClass:"canBut",on:{click:function(t){e.editDialog=!1}}},[a("span",[e._v("取 消")])]),a("el-button",{staticClass:"okBut",attrs:{type:"primary"},on:{click:e.editOrgan}},[a("span",[e._v("确 定")])])],1)]),a("fly-dialog",{attrs:{title:"导入机构",show:e.importDialog},on:{"update:show":function(t){e.importDialog=t}}},[a("span",{staticClass:"content"},[e._v("导入")]),a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:e.uploadURL,"on-preview":e.handlePreview,"on-remove":e.handleRemove,"before-upload":e.beforeUpload,"on-error":e.uploadError,"on-success":e.uploadSuccess,limit:1,"on-exceed":e.handleExceed,"auto-upload":!1}},[a("el-button",{staticClass:"impBut",attrs:{size:"small",type:"primary"}},[a("span",[e._v("点击上传")])]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传xls/xlsx文件")])],1),a("div",{staticClass:"butCoat"},[a("el-button",{staticClass:"canBut",on:{click:function(t){e.importDialog=!1}}},[a("span",[e._v("取 消")])]),a("el-button",{staticClass:"okBut",attrs:{type:"primary"},on:{click:e.importOrgan}},[a("span",[e._v("确 定")])])],1)],1),a("fly-dialog",{attrs:{title:"删除",show:e.deleteDialog},on:{"update:show":function(t){e.deleteDialog=t}}},[a("span",{staticClass:"content"},[e._v("确定删除？")]),a("div",{staticClass:"butCoat"},[a("el-button",{staticClass:"canBut",on:{click:function(t){e.deleteDialog=!1}}},[a("span",[e._v("取 消")])]),a("el-button",{staticClass:"okBut",attrs:{type:"primary"},on:{click:function(t){return e.deleteOrgan()}}},[a("span",[e._v("确 定")])])],1)])],1)])])])},n=[],i=(a("63ff"),a("f8f9")),s=(a("7cfd"),a("e04f")),r=a.n(s),l=a("e30b"),c=a("1799"),u=a("8593"),d={name:"organManage",components:{FlyDialog:l["a"],Pagination:c["a"]},data:function(){return{uploadURL:"http://192.168.1.186:90/admin/importExcelDe",currentPage:1,pageSize:10,totalPage:1,asterisk:!0,addDialog:!1,editDialog:!1,deleteDialog:!1,importDialog:!1,form:{name:"",code:"",desc:"",superior:"",authNum:"",departmentId:""},organInfo:{name:"",code:"",hierarchy:"",state:1,authNum:""},stateList:[{value:0,label:"有效"},{value:-1,label:"无效"}],rules:{name:[{required:!0,message:"请输入机构名称",trigger:"blur"}],code:[{required:!0,message:"请输入机构编码",trigger:"blur"}],desc:[{required:!0,message:"请输入角色描述",trigger:"blur"}]},superiorList:[{id:"",pid:"",title:""}],organData:[{coding:"",createBy:"",createTime:"",delFlag:null,describeP:"",establishmentLevel:"",id:"",parentId:"",roleCount:0,sortCountSum:0,sortCountSy:0,sortId:null,status:null,title:"",updateBy:null,updateTime:null}],fileList2:[],multipleSelection:[]}},methods:{pitchOn:function(){var e=!1;return 1===this.multipleSelection.length?e=!0:this.$message.error("请选择一条数据!"),e},pitchOn2:function(){var e=!1;return this.multipleSelection.length>0?e=!0:this.$message.error("请至少选择一条数据!"),e},handleSelectionChange:function(e){this.multipleSelection=e},handleRemove:function(e,t){},handlePreview:function(e){},beforeUpload:function(e){var t="application/vnd.ms-excel"===e.type,a="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"===e.type;return t|a},uploadError:function(){this.$message({message:"文件上传失败!",type:"error"})},uploadSuccess:function(e,t,a){this.$message({type:"success",message:"文件上传成功"})},handleExceed:function(){this.$message.warning("当前限制选择 1 个文件，请删除后继续上传")},deleteOrgan:function(){var e=this,t=this.multipleSelection[0];Object(u["f"])({id:t.id}).then((function(a){var o=a.data;o&&200===o.code?(e.organData.map((function(a,o){a===t&&e.organData.splice(o,1)})),e.$message({message:"删除成功",type:"success"}),e.deleteDialog=!1):e.$message.error(o.data)}))},flush:function(){var e=this;this.initPage((function(){e.$message({message:"刷新成功",type:"success"})}))},importOrgan:function(){this.$refs.upload.submit(),this.importDialog=!1},chooseDepartmentId:function(e){var t=this;this.superiorList.map((function(a,o){a.title===e&&(t.form.departmentId=a.id)}))},editOrgan:function(){var e=this;this.$refs["form"].validate((function(t){t&&Object(u["i"])({userId:r.a.get("userId"),id:e.organInfo.id,title:e.organInfo.title,coding:e.organInfo.coding,describe:e.organInfo.describeP,parentId:e.organInfo.parentId,roleCount:e.organInfo.authNum}).then((function(t){var a=t.data;a&&200===a.code?e.initPage((function(){e.$message({message:"修改成功",type:"success"}),e.editDialog=!1})):e.$message.error(a.msg)}))}))},getChooseData:function(){this.organInfo=this.multipleSelection[0]},addOrgan:function(){var e=this;this.$refs["form"].validate((function(t){t&&Object(u["a"])({userId:r.a.get("userId"),title:e.form.name,coding:e.form.code,describe:e.form.desc,parentId:e.form.departmentId,roleCount:e.form.authNum}).then((function(t){var a=t.data;a&&200===a.code?e.initPage((function(){e.$message({message:"添加成功",type:"success"}),e.addDialog=!1})):e.$message.error(a.msg)}))}))},changePage:function(e){this.currentPage=e,this.getUserList(e)},getDepartmentList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.currentPage,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.pageSize;Object(u["m"])({page:t,size:a}).then((function(t){var a=t.data;if(a&&200===a.code){var o=a.data,n=o.list,i=o.p;n.map((function(e){e.status=0===e.status?"有效":"无效"})),e.organData=n,e.currentPage=i.current,e.totalPage=Math.ceil(i.total/i.size)}else e.$message.error(a.msg)}))},initPage:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,a=this,o=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:function(){},e.next=3,this.getDepartmentList();case 3:return e.next=5,Object(u["n"])().then((function(e){var t=e.data;t&&200===t.code?(a.superiorList=t.data,a.superiorList.unshift({id:-1,pid:-1,title:"（不选择）"})):a.$message.error(t.msg)}));case 5:return e.next=7,t();case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},mounted:function(){this.initPage()}},p=d,m=(a("7837"),a("6691")),f=Object(m["a"])(p,o,n,!1,null,"0711ad8f",null);t["default"]=f.exports},7837:function(e,t,a){"use strict";var o=a("1c70"),n=a.n(o);n.a}}]);