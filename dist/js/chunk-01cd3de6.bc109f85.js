(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-01cd3de6","chunk-7c853649","chunk-112c9256","chunk-2d0efc65","chunk-2d22fce3"],{"06c5":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("a630"),n("fb6a"),n("b0c0"),n("d3b7"),n("25f0"),n("3ca3");var i=n("6b75");function r(t,e){if(t){if("string"===typeof t)return Object(i["a"])(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(i["a"])(t,e):void 0}}},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n("d3b7"),n("e6cf");function i(t,e,n,i,r,a,o){try{var c=t[a](o),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(i,r)}function r(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var o=t.apply(e,n);function c(t){i(o,r,a,c,u,"next",t)}function u(t){i(o,r,a,c,u,"throw",t)}c(void 0)}))}}},2498:function(t,e,n){"use strict";n.r(e);n("a4d3"),n("e01a"),n("d28b"),n("e260"),n("d3b7"),n("3ca3"),n("ddb0");var i=n("06c5");function r(t){if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=Object(i["a"])(t))){var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,a,o=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return o=t.done,t},e:function(t){c=!0,a=t},f:function(){try{o||null==r["return"]||r["return"]()}finally{if(c)throw a}}}}var a=[];function o(){return window.tinymce}var c=function(t,e){var n=document.getElementById(t),i=e||function(){};if(!n){var c=document.createElement("script");c.src=t,c.id=t,document.body.appendChild(c),a.push(i);var u="onload"in c?s:l;u(c)}function s(e){e.onload=function(){this.onerror=this.onload=null;var t,n=r(a);try{for(n.s();!(t=n.n()).done;){var i=t.value;i(null,e)}}catch(o){n.e(o)}finally{n.f()}a=null},e.onerror=function(){this.onerror=this.onload=null,i(new Error("Failed to load "+t),e)}}function l(t){t.onreadystatechange=function(){if("complete"===this.readyState||"loaded"===this.readyState){this.onreadystatechange=null;var e,n=r(a);try{for(n.s();!(e=n.n()).done;){var i=e.value;i(null,t)}}catch(o){n.e(o)}finally{n.f()}a=null}}}n&&i&&(o()?i(null,n):a.push(i))};e["default"]=c},"629a9":function(t,e,n){},"6b75":function(t,e,n){"use strict";function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}n.d(e,"a",(function(){return i}))},8256:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tinymce-textarea",attrs:{id:t.tinymceId}})},r=[],a=(n("a9e3"),n("b680"),n("9a18")),o=n("ea1b"),c=n("2498"),u=n("c1ab"),s="https://cdn.jsdelivr.net/npm/tinymce@5.7.1/tinymce.min.js",l={name:"Tinymce",props:{id:{type:String,default:function(){return"vue-tinymce-"+ +new Date+(1e3*Math.random()).toFixed(0)}},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:function(){return[]}},menubar:{type:String,default:"file edit insert view format table"},height:{type:[Number,String],required:!1,default:800},width:{type:[Number,String],required:!1,default:"auto"}},data:function(){return{hasChange:!1,hasInit:!1,tinymceId:this.id,fullscreen:!1,languageTypeList:{en:"en",zh:"zh_CN",es:"es_MX",ja:"ja"}}},computed:{containerWidth:function(){var t=this.width;return/^[\d]+(\.[\d]+)?$/.test(t)?"".concat(t,"px"):t}},methods:{init:function(){var t=this;Object(c["default"])(s,(function(e){e?t.$message.error(e.message):t.initTinymce()}))},initTinymce:function(){var t=this,e=this;window.tinymce.init({selector:"#".concat(this.tinymceId),language:this.languageTypeList["zh"],language_url:"https://cdn.surest.cn/plugin/tinymce/zh_CN.js",height:this.height,body_class:"panel-body ",object_resizing:!1,toolbar:this.toolbar.length>0?this.toolbar:o["default"],menubar:this.menubar,plugins:a["default"],quickbars_selection_toolbar:"bold italic forecolor | link blockquote quickimage",end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["www.tinymce.com","codepen.io"],default_link_target:"_blank",link_title:!1,nonbreaking_force_tab:!0,init_instance_callback:function(n){e.value&&n.setContent(e.value),e.hasInit=!0,n.on("NodeChange Change KeyUp SetContent",(function(){t.hasChange=!0,t.$emit("input",n.getContent()),t.$emit("update:value",n.getContent())}))},save_onsavecallback:function(t){e.$emit("save",e.value)},autosave_interval:"5s",setup:function(t){t.on("FullscreenStateChanged",(function(t){e.fullscreen=t.state}))},images_upload_handler:function(t,e,n){var i=new FormData;i.append("file",t.blob()),Object(u["uploadImage"])(i).then((function(t){e(t.file)})).catch((function(t){n("Server Error")}))}})},destroyTinymce:function(){var t=window.tinymce.get(this.tinymceId);this.fullscreen&&t.execCommand("mceFullScreen"),t&&t.destroy()},setContent:function(t){window.tinymce.get(this.tinymceId).setContent(t)},getContent:function(){window.tinymce.get(this.tinymceId).getContent()}},watch:{value:function(t){var e=this;!this.hasChange&&this.hasInit&&this.$nextTick((function(){window.tinymce.get(e.tinymceId).setContent(t||"")}))}},mounted:function(){this.init()},activated:function(){window.tinymce&&this.initTinymce()},deactivated:function(){this.destroyTinymce()},destroyed:function(){this.destroyTinymce()}},d=l,f=(n("9d83"),n("2877")),h=Object(f["a"])(d,i,r,!1,null,"0165abb0",null);e["default"]=h.exports},"9a18":function(t,e,n){"use strict";n.r(e);var i=["quickbars advlist anchor autolink autosave save code codesample directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template  textpattern visualblocks visualchars wordcount"];e["default"]=i},"9d83":function(t,e,n){"use strict";var i=n("629a9"),r=n.n(i);r.a},c1ab:function(t,e,n){"use strict";n.r(e),n.d(e,"uploadImage",(function(){return a})),n.d(e,"getUplaodSign",(function(){return o}));n("96cf");var i=n("1da1"),r=n("b775");function a(t){return function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var n,i,a,c,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o().then((function(t){var e=t.data;return e}));case 2:return signData=e.sent,n=signData,i=n.uploadUrl,a=n.token,c=n.host,n.dir,t.append("token",a),e.next=7,Object(r["default"])({url:i,method:"post",data:t}).then((function(t){t.hash;var e=t.key;return{file:c+e}}));case 7:return u=e.sent,e.abrupt("return",u);case 9:case"end":return e.stop()}}),e)})));function n(){return e.apply(this,arguments)}return n}()()}function o(t){return Object(r["default"])({url:"/upload-sign",method:"get",params:t})}},ea1b:function(t,e,n){"use strict";n.r(e);var i=["restoredraft save fontselect fontsizeselect searchreplace bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote redo removeformat subscript superscript code codesample","hr bullist numlist link image charmap preview anchor pagebreak insertdatetime media table emoticons forecolor backcolor fullscreen"];e["default"]=i}}]);