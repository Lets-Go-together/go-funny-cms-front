(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b820262"],{"2ca2":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=this,n=t.$createElement,i=t._self._c||n;return i("a-modal",{attrs:{centered:"",maskClosable:!1},on:{cancel:t.handleCancel},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[i("div",{style:{textAlign:"center"},attrs:{slot:"title"},slot:"title"},[t._v("两步验证")]),i("template",{slot:"footer"},[i("div",{style:{textAlign:"center"}},[i("a-button",{key:"back",on:{click:t.handleCancel}},[t._v("返回")]),i("a-button",{key:"submit",attrs:{type:"primary",loading:t.stepLoading},on:{click:t.handleStepOk}},[t._v(" 继续 ")])],1)]),i("a-spin",{attrs:{spinning:t.stepLoading}},[i("a-form",{attrs:{layout:"vertical","auto-form-create":function(t){e.form=t}}},[i("div",{staticClass:"step-form-wrapper"},[t.stepLoading?i("p",{staticStyle:{"text-align":"center"}},[t._v("正在验证.."),i("br"),t._v("请稍后")]):i("p",{staticStyle:{"text-align":"center"}},[t._v("请在手机中打开 Google Authenticator 或两步验证 APP"),i("br"),t._v("输入 6 位动态码")]),i("a-form-item",{style:{textAlign:"center"},attrs:{hasFeedback:"",fieldDecoratorId:"stepCode",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入 6 位动态码!",pattern:/^\d{6}$/,len:6}]}}},[i("a-input",{style:{textAlign:"center"},attrs:{placeholder:"000000"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleStepOk(e)}}})],1),i("p",{staticStyle:{"text-align":"center"}},[i("a",{on:{click:t.onForgeStepCode}},[t._v("遗失手机?")])])],1)])],1)],2)},a=[],l={props:{visible:{type:Boolean,default:!1}},data:function(){return{stepLoading:!1,form:null}},methods:{handleStepOk:function(){var e=this,t=this;this.stepLoading=!0,this.form.validateFields((function(n,i){n?(e.stepLoading=!1,e.$emit("error",{err:n})):setTimeout((function(){t.stepLoading=!1,t.$emit("success",{values:i})}),2e3)}))},handleCancel:function(){this.visible=!1,this.$emit("cancel")},onForgeStepCode:function(){}}},o=l,s=(n("edd4"),n("5d22")),r=Object(s["a"])(o,i,a,!1,null,"4a462ef6",null);t["default"]=r.exports},e0ed:function(e,t,n){},edd4:function(e,t,n){"use strict";n("e0ed")}}]);