(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e142727","chunk-61e79f8a","chunk-2d0c798e","chunk-2d0e4e22","chunk-2d21f30b","chunk-2d0cf182"],{"1da1":function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));r("d3b7"),r("e6cf");function a(e,t,r,a,o,n,i){try{var l=e[n](i),u=l.value}catch(d){return void r(d)}l.done?t(u):Promise.resolve(u).then(a,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,n){var i=e.apply(t,r);function l(e){a(i,o,n,l,u,"next",e)}function u(e){a(i,o,n,l,u,"throw",e)}l(void 0)}))}}},"423f":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-form-model",{ref:"ruleForm",attrs:{rules:e.rules,model:e.modelForm,"label-col":{span:6},"wrapper-col":{span:16}}},[r("a-form-model-item",{attrs:{label:"Account",prop:"account"}},[r("a-input",{model:{value:e.modelForm.account,callback:function(t){e.$set(e.modelForm,"account",t)},expression:"modelForm.account"}})],1),r("a-form-model-item",{attrs:{label:"Avatar",prop:"avatar"}},[r("upload-image",{attrs:{imgUrl:e.modelForm.avatar},on:{"update:imgUrl":function(t){return e.$set(e.modelForm,"avatar",t)},"update:img-url":function(t){return e.$set(e.modelForm,"avatar",t)}}})],1),r("a-form-model-item",{attrs:{label:"用户角色",prop:"permission_ids"}},[r("a-tree-select",{staticStyle:{width:"100%"},attrs:{"dropdown-style":{maxHeight:"400px",overflow:"auto"},"tree-data":e.tree,"tree-checkable":"",replaceFields:e.replaceFields,placeholder:"Please select"},model:{value:e.modelForm.role_ids,callback:function(t){e.$set(e.modelForm,"role_ids",t)},expression:"modelForm.role_ids"}})],1),r("a-form-model-item",{attrs:{label:"Email",prop:"email"}},[r("a-input",{model:{value:e.modelForm.email,callback:function(t){e.$set(e.modelForm,"email",t)},expression:"modelForm.email"}})],1),r("a-form-model-item",{attrs:{label:"Phone",prop:"phone"}},[r("a-input",{attrs:{autocomplete:"phone"},model:{value:e.modelForm.phone,callback:function(t){e.$set(e.modelForm,"phone",t)},expression:"modelForm.phone"}})],1),r("a-form-model-item",{attrs:{label:"Password",prop:"password"}},[r("a-input",{attrs:{type:"text",autocomplete:"password"},model:{value:e.modelForm.password,callback:function(t){e.$set(e.modelForm,"password",t)},expression:"modelForm.password"}})],1),r("a-form-model-item",{attrs:{label:"Confirm Password",prop:"confirm_password"}},[r("a-input",{attrs:{type:"text"},model:{value:e.modelForm.confirm_password,callback:function(t){e.$set(e.modelForm,"confirm_password",t)},expression:"modelForm.confirm_password"}})],1),r("a-form-model-item",{attrs:{label:"Desccription",prop:"description"}},[r("a-input",{attrs:{type:"textarea"},model:{value:e.modelForm.description,callback:function(t){e.$set(e.modelForm,"description",t)},expression:"modelForm.description"}})],1),r("a-form-model-item",{attrs:{"wrapper-col":{span:16,offset:6}}},[r("a-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.onSubmit}},[e._v("确认")])],1)],1)},o=[],n=(r("96cf"),r("1da1")),i=r("61f7"),l=r("4588"),u=r("50fc"),d={name:"ModuleForm",components:{UploadImage:l["default"]},props:{formData:{type:Object,default:function(){return{}}}},data:function(){var e=this,t=function(t,r,a){var o=e.modelForm.password;return o?0==o.length?a():o!==r?a(new Error("两次输入密码不一致")):a():a()};return{modelForm:{},rules:{account:[{required:!0,message:"请输入账号",trigger:"blur"}],avatar:[{required:!1,message:"Please upload avatar",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{type:"email",message:"请输入正确的邮箱"}],phone:[{required:!0,message:"请输入电话号码",trigger:"blur"},{validator:i["validatePhone"],trigger:"blur"}],password:[{validator:i["validatePassword"],trigger:"blur"}],confirm_password:[{validator:i["validatePassword"],trigger:"blur"},{validator:t,trigger:"blur"}],description:[{required:!0,message:"请输入管理员的描述",trigger:"blur"}]},loading:!1,tree:[],replaceFields:{children:"children",title:"name",key:"id",value:"id"}}},methods:{onSubmit:function(){var e=this;this.$refs.ruleForm.validate((function(t){if(!t)return!1;var r;e.loading=!0,r=e.modelForm.id?Object(u["update"])(e.modelForm.id,e.modelForm):Object(u["add"])(e.modelForm),r.then((function(t){e.$message.success(t.message),e.$emit("success")})).catch((function(){e.loading=!1}))}))},getRoleTree:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(u["getRoleTree"])().then((function(t){var r=t.data;e.tree=r}));case 2:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getRoleTree();case 2:e.modelForm=e.formData;case 3:case"end":return t.stop()}}),t)})))()}},s=d,c=r("2877"),m=Object(c["a"])(s,a,o,!1,null,null,null);t["default"]=m.exports},4588:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("a-upload",{staticClass:"image-uploader",attrs:{name:"file","list-type":"picture-card","show-upload-list":!1,action:e.url,data:e.data,"before-upload":e.beforeUpload},on:{change:e.handleChange}},[e.image?r("img",{attrs:{src:e.image,alt:"image"}}):r("div",[r("a-icon",{attrs:{type:e.loading?"loading":"plus"}}),r("div",{staticClass:"ant-upload-text"},[e._v("Upload")])],1)])],1)},o=[],n=r("91b6"),i=r("d988"),l={name:"UploadImage",props:{imgUrl:{type:String,default:function(){return""}}},data:function(){return{image:"https://cdn.surest.cn/uploads/t4zDf6BwrMWhA8sjzeEaWxhYCwsCpt4P",loading:!1,url:"",upload_dir:"",host:"",data:{token:"",key:""}}},created:function(){this.setUploadInfo(),this.image=this.imgUrl},methods:{setUploadInfo:function(){var e=this;Object(n["getQiniuInfo"])().then((function(t){var r=t.data,a=(r.bucket,r.token),o=r.url,n=r.host,l=r.upload_dir;e.url=o,e.data.token=a,e.host=n,e.upload_dir=l,e.data.key=e.upload_dir+Object(i["randomString"])()}))},handleChange:function(e){if(this.data.key=this.upload_dir+Object(i["randomString"])(),"uploading"!==e.file.status){if("done"===e.file.status){this.loading=!1;var t=this.host+e.file.response.key;this.uploadedImage(t)}}else this.loading=!0},beforeUpload:function(e){var t="image/jpeg"===e.type||"image/png"===e.type;t||this.$message.error("You can only upload JPG file!");var r=e.size/1024/1024<2;return r||this.$message.error("Image must smaller than 2MB!"),t&&r},uploadedImage:function(e){this.image=e,this.$emit("update:imgUrl",e)}}},u=l,d=(r("4ea9"),r("2877")),s=Object(d["a"])(u,a,o,!1,null,"1ccf5a9c",null);t["default"]=s.exports},"4ea9":function(e,t,r){"use strict";var a=r("9817"),o=r.n(a);o.a},"50fc":function(e,t,r){"use strict";r.r(t),r.d(t,"getList",(function(){return o})),r.d(t,"add",(function(){return n})),r.d(t,"update",(function(){return i})),r.d(t,"del",(function(){return l})),r.d(t,"getRoleTree",(function(){return u}));var a=r("b775");function o(e){return Object(a["default"])({url:"/admin",method:"get",params:e})}function n(e){return Object(a["default"])({url:"/admin/store",method:"post",data:e})}function i(e,t){return Object(a["default"])({url:"/admin/save",method:"put",data:t})}function l(e){return Object(a["default"])({url:"/admin/delete",method:"delete",data:{id:e}})}function u(){return Object(a["default"])({url:"/admin/tree",method:"get"})}},"61f7":function(e,t,r){"use strict";function a(e,t,r){return t?/^1[3456789]\d{9}$/.test(t)?r():r(new Error("手机号码不符合规范")):r(new Error("Please input the Phone"))}function o(e,t,r){return t&&(t.length>12||t.length<6)?r(new Error("密码限定6-12个字符串")):r()}function n(e,t,r){var a=this.modelForm.password;return a!==t?r(new Error("两次输入密码不一致")):r()}r.r(t),r.d(t,"validatePhone",(function(){return a})),r.d(t,"validatePassword",(function(){return o})),r.d(t,"validateConfirmPassword",(function(){return n}))},"91b6":function(e,t,r){"use strict";r.r(t),r.d(t,"getQiniuInfo",(function(){return o}));var a=r("b775");function o(e){return Object(a["default"])({url:"/qiniu",method:"get",data:e})}},9817:function(e,t,r){},d988:function(e,t,r){"use strict";r.r(t),r.d(t,"filterEmpty",(function(){return a})),r.d(t,"getStrFullLength",(function(){return o})),r.d(t,"cutStrByFullLength",(function(){return n})),r.d(t,"randomString",(function(){return i}));r("4de4"),r("13d5"),r("ac1f"),r("1276"),r("498a");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.filter((function(e){return e.tag||e.text&&""!==e.text.trim()}))}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.split("").reduce((function(e,t){var r=t.charCodeAt(0);return r>=0&&r<=128?e+1:e+2}),0)},n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,r=0;return e.split("").reduce((function(e,a){var o=a.charCodeAt(0);return r+=o>=0&&o<=128?1:2,r<=t?e+a:e}),"")},i=function(e){e=e||32;for(var t="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",r=t.length,a="",o=0;o<e;o++)a+=t.charAt(Math.floor(Math.random()*r));return a}}}]);