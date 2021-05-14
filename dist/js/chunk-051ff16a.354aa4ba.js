(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-051ff16a","chunk-61e79f8a","chunk-2d0afe49","chunk-2d0e4e22","chunk-2d21f30b"],{"0feb":function(e,t,r){"use strict";r.r(t),r.d(t,"getList",(function(){return o})),r.d(t,"add",(function(){return a})),r.d(t,"update",(function(){return i})),r.d(t,"del",(function(){return l})),r.d(t,"getPermisstionTree",(function(){return d}));var n=r("b775");function o(e){return Object(n["default"])({url:"/permission",method:"get",params:e})}function a(e){return Object(n["default"])({url:"/permission/store",method:"post",data:e})}function i(e){return Object(n["default"])({url:"/permission/save",method:"put",data:e})}function l(e){return Object(n["default"])({url:"/permission/delete",method:"delete",data:{id:e}})}function d(){return Object(n["default"])({url:"/permission/tree",method:"get"})}},"1da1":function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("d3b7"),r("e6cf");function n(e,t,r,n,o,a,i){try{var l=e[a](i),d=l.value}catch(s){return void r(s)}l.done?t(d):Promise.resolve(d).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function l(e){n(i,o,a,l,d,"next",e)}function d(e){n(i,o,a,l,d,"throw",e)}l(void 0)}))}}},"42c5":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-form-model",{ref:"ruleForm",attrs:{rules:e.rules,model:e.modelForm,"label-col":{span:4},"wrapper-col":{span:16}}},[e.modelForm.id?r("a-form-model-item",{attrs:{label:"Id",prop:"id"}},[r("a-input",{attrs:{disabled:""},model:{value:e.modelForm.id,callback:function(t){e.$set(e.modelForm,"id",t)},expression:"modelForm.id"}})],1):e._e(),r("a-form-model-item",{attrs:{label:"父节点",prop:"name"}},[r("a-tree-select",{staticStyle:{width:"100%"},attrs:{"dropdown-style":{maxHeight:"400px",overflow:"auto"},"tree-data":e.permissions,replaceFields:e.replaceFields,placeholder:"Please select"},model:{value:e.modelForm.p_id,callback:function(t){e.$set(e.modelForm,"p_id",t)},expression:"modelForm.p_id"}})],1),r("a-form-model-item",{attrs:{label:"权限名称",prop:"name"}},[r("a-input",{attrs:{"allow-clear":""},model:{value:e.modelForm.name,callback:function(t){e.$set(e.modelForm,"name",t)},expression:"modelForm.name"}})],1),r("a-form-model-item",{attrs:{label:"Url",prop:"url"}},[r("a-input",{attrs:{"allow-clear":""},model:{value:e.modelForm.url,callback:function(t){e.$set(e.modelForm,"url",t)},expression:"modelForm.url"}})],1),r("a-form-model-item",{attrs:{label:"请求方法",prop:"method"}},[r("a-radio-group",{attrs:{"button-style":"solid"},model:{value:e.modelForm.method,callback:function(t){e.$set(e.modelForm,"method",t)},expression:"modelForm.method"}},e._l(e.availableMethods,(function(t){return r("a-radio-button",{key:t,attrs:{value:t}},[e._v(e._s(t))])})),1)],1),r("a-form-model-item",{attrs:{label:"Icon",prop:"icon"}},[r("a-input",{attrs:{type:"url","allow-clear":""},model:{value:e.modelForm.icon,callback:function(t){e.$set(e.modelForm,"icon",t)},expression:"modelForm.icon"}})],1),r("a-form-model-item",{attrs:{label:"是否禁用",prop:"status"}},[r("a-switch",{attrs:{"checked-children":"是","un-checked-children":"否","default-checked":"","allow-clear":""},model:{value:e.modelForm.status,callback:function(t){e.$set(e.modelForm,"status",t)},expression:"modelForm.status"}})],1),r("a-form-model-item",{attrs:{label:"是否隐藏",prop:"hidden"}},[r("a-switch",{attrs:{"checked-children":"是","un-checked-children":"否","default-checked":"","allow-clear":""},model:{value:e.modelForm.hidden,callback:function(t){e.$set(e.modelForm,"hidden",t)},expression:"modelForm.hidden"}})],1),r("a-form-model-item",{attrs:{"wrapper-col":{offset:4}}},[r("a-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.onSubmit}},[e._v("确认")]),r("a-button",{staticStyle:{"margin-left":"10px"},on:{click:function(t){return e.$emit("close")}}},[e._v("取消")])],1)],1)},o=[],a=(r("96cf"),r("1da1")),i=r("4588"),l=r("0feb"),d={name:"ModuleForm",components:{UploadImage:i["default"]},props:{formData:{type:Object,default:function(){return{}}}},data:function(){return{modelForm:{},rules:{p_id:[{required:!0,message:"请选择父节点",tigger:"blur"}],name:[{required:!0,message:"请输入权限名称",tigger:"blur"}],url:[{required:!0,message:"请输入url",tigger:"blur"}],icon:[{required:!0,message:"请输入icon",tigger:"blur"}],method:[{required:!0,message:"请选择请求方法",tigger:"blur"}]},loading:!1,availableMethods:["GET","POST","PUT","DELETE","ANY"],permissions:[],replaceFields:{children:"children",title:"name",key:"id",value:"id"}}},methods:{onSubmit:function(){var e=this;this.$refs.ruleForm.validate((function(t){if(t){if(e.modelForm.p_id==e.modelForm.id)return void e.$message.success("父节点设置错误: 不允许设置自己");e.loading=!0;var r=JSON.parse(JSON.stringify(e.modelForm));Object.assign(r,{status:r.status?2:1,hidden:r.hidden?2:1}),Object(l["update"])(r).then((function(t){e.$message.success("Success"),e.loading=!1,e.$emit("success")})).catch((function(){e.loading=!1}))}}))},getPermissionTree:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["getPermisstionTree"])().then((function(t){var r=t.data;e.permissions=r}));case 2:case"end":return t.stop()}}),t)})))()}},mounted:function(){this.modelForm=Object.assign(this.formData,{status:1==this.formData.status,hidden:1==this.formData.hidden}),this.getPermissionTree()}},s=d,u=r("2877"),c=Object(u["a"])(s,n,o,!1,null,null,null);t["default"]=c.exports},4588:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("a-upload",{staticClass:"image-uploader",attrs:{name:"file","list-type":"picture-card","show-upload-list":!1,action:e.url,data:e.data,"before-upload":e.beforeUpload},on:{change:e.handleChange}},[e.image?r("img",{attrs:{src:e.image,alt:"image"}}):r("div",[r("a-icon",{attrs:{type:e.loading?"loading":"plus"}}),r("div",{staticClass:"ant-upload-text"},[e._v("Upload")])],1)])],1)},o=[],a=r("91b6"),i=r("d988"),l={name:"UploadImage",props:{imgUrl:{type:String,default:function(){return""}}},data:function(){return{image:"https://cdn.surest.cn/uploads/t4zDf6BwrMWhA8sjzeEaWxhYCwsCpt4P",loading:!1,url:"",upload_dir:"",host:"",data:{token:"",key:""}}},created:function(){this.setUploadInfo(),this.image=this.imgUrl},methods:{setUploadInfo:function(){var e=this;Object(a["getQiniuInfo"])().then((function(t){var r=t.data,n=(r.bucket,r.token),o=r.url,a=r.host,l=r.upload_dir;e.url=o,e.data.token=n,e.host=a,e.upload_dir=l,e.data.key=e.upload_dir+Object(i["randomString"])()}))},handleChange:function(e){if(this.data.key=this.upload_dir+Object(i["randomString"])(),"uploading"!==e.file.status){if("done"===e.file.status){this.loading=!1;var t=this.host+e.file.response.key;this.uploadedImage(t)}}else this.loading=!0},beforeUpload:function(e){var t="image/jpeg"===e.type||"image/png"===e.type;t||this.$message.error("You can only upload JPG file!");var r=e.size/1024/1024<2;return r||this.$message.error("Image must smaller than 2MB!"),t&&r},uploadedImage:function(e){this.image=e,this.$emit("update:imgUrl",e)}}},d=l,s=(r("4ea9"),r("2877")),u=Object(s["a"])(d,n,o,!1,null,"1ccf5a9c",null);t["default"]=u.exports},"4ea9":function(e,t,r){"use strict";var n=r("9817"),o=r.n(n);o.a},"91b6":function(e,t,r){"use strict";r.r(t),r.d(t,"getQiniuInfo",(function(){return o}));var n=r("b775");function o(e){return Object(n["default"])({url:"/qiniu",method:"get",data:e})}},9817:function(e,t,r){},d988:function(e,t,r){"use strict";r.r(t),r.d(t,"filterEmpty",(function(){return n})),r.d(t,"getStrFullLength",(function(){return o})),r.d(t,"cutStrByFullLength",(function(){return a})),r.d(t,"randomString",(function(){return i}));r("4de4"),r("13d5"),r("ac1f"),r("1276"),r("498a");function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.filter((function(e){return e.tag||e.text&&""!==e.text.trim()}))}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.split("").reduce((function(e,t){var r=t.charCodeAt(0);return r>=0&&r<=128?e+1:e+2}),0)},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,r=0;return e.split("").reduce((function(e,n){var o=n.charCodeAt(0);return r+=o>=0&&o<=128?1:2,r<=t?e+n:e}),"")},i=function(e){e=e||32;for(var t="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",r=t.length,n="",o=0;o<e;o++)n+=t.charAt(Math.floor(Math.random()*r));return n}}}]);