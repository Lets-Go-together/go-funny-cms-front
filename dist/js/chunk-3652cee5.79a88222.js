(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3652cee5"],{"0feb":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"d",(function(){return o})),a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return s}));var r=a("b775");function n(e){return Object(r["b"])({url:"/permission",method:"get",params:e})}function o(e){return Object(r["b"])({url:"/permission/save",method:"put",data:e})}function i(e){return Object(r["b"])({url:"/permission/delete",method:"delete",data:{id:e}})}function s(){return Object(r["b"])({url:"/permission/tree",method:"get"})}},"2df7":function(e,t,a){"use strict";var r=a("6abc");t["a"]={data:function(){return{pagination:{pageSize:10,page:1,total:0},pageParams:{pageSize:10,page:1}}},methods:{handleTableChange:function(e,t,a){var n=Object(r["a"])({},this.pagination);n.current=e.current,this.pagination=n,this.filters=Object.assign(this.filters,{pageSize:e.pageSize,page:e.current,sortField:a.field,sortOrder:a.order}),this.getList()}}}},"3c91":function(e,t,a){},4588:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-upload",{staticClass:"image-uploader",attrs:{name:"file","list-type":"picture-card","show-upload-list":!1,action:e.url,data:e.data,"before-upload":e.beforeUpload},on:{change:e.handleChange}},[e.image?a("img",{attrs:{src:e.image,alt:"image"}}):a("div",[a("a-icon",{attrs:{type:e.loading?"loading":"plus"}}),a("div",{staticClass:"ant-upload-text"},[e._v("Upload")])],1)])],1)},n=[],o=a("b775");function i(e){return Object(o["b"])({url:"/qiniu",method:"get",data:e})}a("e3b5"),a("ea94"),a("a037"),a("5b12"),a("9b5f");var s=function(e){e=e||32;for(var t="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",a=t.length,r="",n=0;n<e;n++)r+=t.charAt(Math.floor(Math.random()*a));return r},l={name:"UploadImage",props:{imgUrl:{type:String,default:function(){return""}}},data:function(){return{image:"https://cdn.surest.cn/uploads/t4zDf6BwrMWhA8sjzeEaWxhYCwsCpt4P",loading:!1,url:"",upload_dir:"",host:"",data:{token:"",key:""}}},created:function(){this.setUploadInfo(),this.image=this.imgUrl},methods:{setUploadInfo:function(){var e=this;i().then((function(t){var a=t.data,r=(a.bucket,a.token),n=a.url,o=a.host,i=a.upload_dir;e.url=n,e.data.token=r,e.host=o,e.upload_dir=i,e.data.key=e.upload_dir+s()}))},handleChange:function(e){if(this.data.key=this.upload_dir+s(),"uploading"!==e.file.status){if("done"===e.file.status){this.loading=!1;var t=this.host+e.file.response.key;this.uploadedImage(t)}}else this.loading=!0},beforeUpload:function(e){var t="image/jpeg"===e.type||"image/png"===e.type;t||this.$message.error("You can only upload JPG file!");var a=e.size/1024/1024<2;return a||this.$message.error("Image must smaller than 2MB!"),t&&a},uploadedImage:function(e){this.image=e,this.$emit("update:imgUrl",e)}}},d=l,u=(a("840e"),a("5d22")),c=Object(u["a"])(d,r,n,!1,null,"741e5579",null);t["a"]=c.exports},"60b5":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a("27ae");function r(e,t,a,r,n,o,i){try{var s=e[o](i),l=s.value}catch(d){return void a(d)}s.done?t(l):Promise.resolve(l).then(r,n)}function n(e){return function(){var t=this,a=arguments;return new Promise((function(n,o){var i=e.apply(t,a);function s(e){r(i,n,o,s,l,"next",e)}function l(e){r(i,n,o,s,l,"throw",e)}s(void 0)}))}}},6999:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("page-header-wrapper",[a("a-card",[a("div",{staticClass:"filters"},[a("a-form",{attrs:{form:e.filters,layout:"inline"}},[a("a-form-item",{attrs:{label:""}},[a("a-input",{attrs:{placeholder:"Name | Url"},model:{value:e.filters.keyword,callback:function(t){e.$set(e.filters,"keyword",t)},expression:"filters.keyword"}})],1),a("a-form-item",{attrs:{label:""}},[a("a-button-group",[a("a-button",{attrs:{type:"primary",icon:"search",loading:e.tableLoading,"allow-clear":""},on:{click:function(t){return e.getList()}}},[e._v("查询")]),a("a-button",{attrs:{type:"primary",icon:"add",loading:e.tableLoading},on:{click:function(t){return e.add()}}},[e._v("添加")])],1)],1)],1)],1),a("a-divider",{attrs:{dashed:""}}),a("div",{staticClass:"tableList"},[a("a-table",{attrs:{loading:e.tableLoading,columns:e.columns,"data-source":e.data,pagination:e.pagination},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"icon",fn:function(e){return a("span",{},[a("a-icon",{attrs:{type:e}})],1)}},{key:"method",fn:function(t){return a("span",{},[a("a-tag",{attrs:{color:"#2db7f5"}},[e._v(e._s(t))])],1)}},{key:"status",fn:function(t){return a("span",{},[1==t?a("a-tag",{attrs:{color:"#87d068"}},[e._v("正常")]):a("a-tag",{attrs:{color:"#f50"}},[e._v("禁用")])],1)}},{key:"hidden",fn:function(t){return a("span",{},[1==t?a("a-tag",{attrs:{color:"#87d068"}},[e._v("是")]):a("a-tag",{attrs:{color:"#f50"}},[e._v("否")])],1)}},{key:"action",fn:function(t){return a("span",{},[a("a-button",{attrs:{type:"link"},on:{click:function(a){return e.edit(t)}}},[e._v(e._s(e.$t("edit")))]),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link",on:{click:function(e){return e.preventDefault()}}},[e._v("更多"),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a-popconfirm",{attrs:{title:e.$t("confirm_delete"),"ok-text":"Yes","cancel-text":"No"},on:{confirm:function(a){return e.del(t.id)}}},[a("a",{attrs:{href:"#"}},[e._v(e._s(e.$t("delete")))])])],1)],1)],1)],1)}}])})],1)],1),a("a-drawer",{attrs:{title:e.formModue.title,width:"40%",visible:e.formModue.visible,"confirm-loading":e.formModue.loadding,footer:null},on:{close:function(t){e.formModue.visible=!1}}},[e.formModue.visible?a("module-form",{attrs:{formData:e.formModue.formData},on:{"update:formData":function(t){return e.$set(e.formModue,"formData",t)},"update:form-data":function(t){return e.$set(e.formModue,"formData",t)},success:e.success}}):e._e()],1)],1)},n=[],o=a("b775");function i(e){return Object(o["b"])({url:"/role",method:"get",params:e})}function s(e){return Object(o["b"])({url:"/role/show",method:"get",params:e})}function l(e){return Object(o["b"])({url:"/role/save",method:"put",data:e})}function d(e){return Object(o["b"])({url:"/role/delete",method:"delete",data:{id:e}})}var u=a("2df7"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-form-model",{ref:"ruleForm",attrs:{rules:e.rules,model:e.modelForm,"label-col":{span:4},"wrapper-col":{span:16}}},[e.modelForm.id?a("a-form-model-item",{attrs:{label:"Id",prop:"id"}},[a("a-input",{attrs:{disabled:""},model:{value:e.modelForm.id,callback:function(t){e.$set(e.modelForm,"id",t)},expression:"modelForm.id"}})],1):e._e(),a("a-form-model-item",{attrs:{label:"当前权限",prop:"permission_ids"}},[a("a-tree-select",{staticStyle:{width:"100%"},attrs:{"dropdown-style":{maxHeight:"400px",overflow:"auto"},"tree-data":e.permissions,"tree-checkable":"",replaceFields:e.replaceFields,placeholder:"Please select"},model:{value:e.modelForm.permission_ids,callback:function(t){e.$set(e.modelForm,"permission_ids",t)},expression:"modelForm.permission_ids"}})],1),a("a-form-model-item",{attrs:{label:"角色名称",prop:"name"}},[a("a-input",{attrs:{"allow-clear":""},model:{value:e.modelForm.name,callback:function(t){e.$set(e.modelForm,"name",t)},expression:"modelForm.name"}})],1),a("a-form-model-item",{attrs:{label:"角色描述",prop:"description"}},[a("a-textarea",{attrs:{"allow-clear":""},model:{value:e.modelForm.description,callback:function(t){e.$set(e.modelForm,"description",t)},expression:"modelForm.description"}})],1),a("a-form-model-item",{attrs:{label:"是否禁用",prop:"status"}},[a("a-switch",{attrs:{"checked-children":"是","un-checked-children":"否","default-checked":"","allow-clear":""},model:{value:e.modelForm.status,callback:function(t){e.$set(e.modelForm,"status",t)},expression:"modelForm.status"}})],1),a("a-form-model-item",{attrs:{"wrapper-col":{offset:4}}},[a("a-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.onSubmit}},[e._v("确认")])],1)],1)},m=[],f=a("60b5"),p=a("7dd6"),h=(a("6a61"),a("1d43"),a("01e5"),a("e487"),a("e3b5"),a("4588")),g=a("0feb"),b={name:"ModuleForm",components:{UploadImage:h["a"]},props:{formData:{type:Object,default:function(){return{}}}},data:function(){return Object(p["a"])({modelForm:{},rules:{},loading:!1,availableMethods:["GET","POST","PUT","DELETE","ANY"],permissions:[],replaceFields:{children:"children",title:"name",key:"id",value:"id"}},"rules",{name:[{required:!0,message:"请输入角色名称",tigger:"blur"}],description:[{required:!0,message:"请输入角色描述",tigger:"blur"},{type:"string",message:"角色描述最长不超过10个字符",min:1,max:10,tigger:"blur"}]})},methods:{onSubmit:function(){var e=this;this.$refs.ruleForm.validate((function(t){if(!t)return!1;var a=JSON.parse(JSON.stringify(e.modelForm));Object.assign(a,{status:a.status?2:1}),l(a).then((function(){e.$message.success("Success"),e.loading=!1,e.$emit("success")})).catch((function(){e.loading=!1}))}))},getRole:function(e){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,s({id:e}).then((function(e){var a=e.data,r=a.permission_ids,n=a.id,o=a.name,i=a.description,s=a.status,l={id:n,name:o,description:i,permission_ids:r||[],status:2==s};t.$set(t,"modelForm",l)}));case 2:case"end":return a.stop()}}),a)})))()},getPermissionTree:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(g["c"])().then((function(t){var a=t.data;e.permissions=a.filter((function(e){return 1!=e.id}))}));case 2:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getPermissionTree();case 2:e.formData.id&&e.getRole(e.formData.id);case 3:case"end":return t.stop()}}),t)})))()}},v=b,k=a("5d22"),y=Object(k["a"])(v,c,m,!1,null,null,null),w=y.exports,_={mixins:[u["a"]],components:{ModuleForm:w},data:function(){return{filters:{name:"",url:""},columns:[{title:"Id",dataIndex:"id",key:"id"},{title:"角色名称",dataIndex:"name",key:"name"},{title:"状态",dataIndex:"status",scopedSlots:{customRender:"status"},key:"status"},{title:"角色描述",dataIndex:"description",key:"description"},{title:"创建时间",dataIndex:"created_at",key:"created_at"},{title:"操作",key:"action",scopedSlots:{customRender:"action"},fixed:"right"}],data:[],tableLoading:!1,formModue:{title:"添加",visible:!1,formData:{},loadding:!1}}},methods:{getList:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t=Object.assign(t,this.pageParams,this.filters),this.tableLoading=!0,i(t).then((function(t){var a=t.data;e.data=a.list,e.tableLoading=!1,e.pagination.total=a.total})).catch((function(){e.tableLoading=!1}))},edit:function(e){e=JSON.parse(JSON.stringify(e)),this.$set(this,"formModue",{title:"编辑",visible:!0,formData:e})},del:function(e){var t=this;d(parseInt(e)).then((function(e){t.$message.success(e.message),t.getList()}))},add:function(){this.$set(this,"formModue",{title:"添加",visible:!0,formData:{}})},success:function(){this.formModue.visible=!1,this.getList()}},mounted:function(){this.getList()}},x=_,F=Object(k["a"])(x,r,n,!1,null,null,null);t["default"]=F.exports},"840e":function(e,t,a){"use strict";a("3c91")}}]);