(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user","chunk-6e5221ca","chunk-e4475688","chunk-2d0aa1b9","chunk-1c13ee41"],{1037:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-result",{attrs:{isSuccess:!0,content:!1,title:e.email,"sub-title":e.description},scopedSlots:e._u([{key:"extra",fn:function(){return[a("a-button",{attrs:{size:"large",type:"primary"}},[e._v("查看邮箱")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{size:"large"},on:{click:e.goHomeHandle}},[e._v("返回首页")])]},proxy:!0}])})},r=[],i={name:"RegisterResult",data:function(){return{description:"激活邮件已发送到你的邮箱中，邮件有效期为24小时。请及时登录邮箱，点击邮件中的链接激活帐户。",form:{}}},computed:{email:function(){var e=this.form&&this.form.email||"xxx";return"你的账户：".concat(e," 注册成功")}},created:function(){this.form=this.$route.params},methods:{goHomeHandle:function(){this.$router.push({name:"login"})}}},n=i,o=a("2877"),l=Object(o["a"])(n,s,r,!1,null,"4a6c53ae",null);t["default"]=l.exports},1348:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main user-layout-register"},[e._m(0),a("a-form",{ref:"formRegister",attrs:{form:e.form,id:"formRegister"}},[a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["email",{rules:[{required:!0,type:"email",message:"请输入邮箱地址"}],validateTrigger:["change","blur"]}],expression:"['email', {rules: [{ required: true, type: 'email', message: '请输入邮箱地址' }], validateTrigger: ['change', 'blur']}]"}],attrs:{size:"large",type:"text",placeholder:"邮箱"}})],1),a("a-popover",{attrs:{placement:"rightTop",trigger:["focus"],getPopupContainer:function(e){return e.parentElement}},model:{value:e.state.passwordLevelChecked,callback:function(t){e.$set(e.state,"passwordLevelChecked",t)},expression:"state.passwordLevelChecked"}},[a("template",{slot:"content"},[a("div",{style:{width:"240px"}},[a("div",{class:["user-register",e.passwordLevelClass]},[e._v("强度："),a("span",[e._v(e._s(e.passwordLevelName))])]),a("a-progress",{attrs:{percent:e.state.percent,showInfo:!1,strokeColor:e.passwordLevelColor}}),a("div",{staticStyle:{"margin-top":"10px"}},[a("span",[e._v("请至少输入 6 个字符。请不要使用容易被猜到的密码。")])])],1)]),a("a-form-item",[a("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"至少6位密码，区分大小写"},{validator:this.handlePasswordLevel}],validateTrigger:["change","blur"]}],expression:"['password', {rules: [{ required: true, message: '至少6位密码，区分大小写'}, { validator: this.handlePasswordLevel }], validateTrigger: ['change', 'blur']}]"}],attrs:{size:"large",placeholder:"至少6位密码，区分大小写"},on:{click:e.handlePasswordInputClick}})],1)],2),a("a-form-item",[a("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["password2",{rules:[{required:!0,message:"至少6位密码，区分大小写"},{validator:this.handlePasswordCheck}],validateTrigger:["change","blur"]}],expression:"['password2', {rules: [{ required: true, message: '至少6位密码，区分大小写' }, { validator: this.handlePasswordCheck }], validateTrigger: ['change', 'blur']}]"}],attrs:{size:"large",placeholder:"确认密码"}})],1),a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["mobile",{rules:[{required:!0,message:"请输入正确的手机号",pattern:/^1[3456789]\d{9}$/},{validator:this.handlePhoneCheck}],validateTrigger:["change","blur"]}],expression:"['mobile', {rules: [{ required: true, message: '请输入正确的手机号', pattern: /^1[3456789]\\d{9}$/ }, { validator: this.handlePhoneCheck } ], validateTrigger: ['change', 'blur'] }]"}],attrs:{size:"large",placeholder:"11 位手机号"}},[a("a-select",{attrs:{slot:"addonBefore",size:"large",defaultValue:"+86"},slot:"addonBefore"},[a("a-select-option",{attrs:{value:"+86"}},[e._v("+86")]),a("a-select-option",{attrs:{value:"+87"}},[e._v("+87")])],1)],1)],1),a("a-row",{attrs:{gutter:16}},[a("a-col",{staticClass:"gutter-row",attrs:{span:16}},[a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["captcha",{rules:[{required:!0,message:"请输入验证码"}],validateTrigger:"blur"}],expression:"['captcha', {rules: [{ required: true, message: '请输入验证码' }], validateTrigger: 'blur'}]"}],attrs:{size:"large",type:"text",placeholder:"验证码"}},[a("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"mail"},slot:"prefix"})],1)],1)],1),a("a-col",{staticClass:"gutter-row",attrs:{span:8}},[a("a-button",{staticClass:"getCaptcha",attrs:{size:"large",disabled:e.state.smsSendBtn},domProps:{textContent:e._s(e.state.smsSendBtn?e.state.time+" s":"获取验证码")},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.getCaptcha(t)}}})],1)],1),a("a-form-item",[a("a-button",{staticClass:"register-button",attrs:{size:"large",type:"primary",htmlType:"submit",loading:e.registerBtn,disabled:e.registerBtn},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.handleSubmit(t)}}},[e._v("注册 ")]),a("router-link",{staticClass:"login",attrs:{to:{name:"login"}}},[e._v("使用已有账户登录")])],1)],1)],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h3",[a("span",[e._v("注册")])])}],i=(a("498a"),a("5530")),n=a("7ded"),o=a("705f"),l={0:"低",1:"低",2:"中",3:"强"},c={0:"error",1:"error",2:"warning",3:"success"},u={0:"#ff0000",1:"#ff0000",2:"#ff7e05",3:"#52c41a"},d={name:"Register",components:{},mixins:[o["deviceMixin"]],data:function(){return{form:this.$form.createForm(this),state:{time:60,smsSendBtn:!1,passwordLevel:0,passwordLevelChecked:!1,percent:10,progressColor:"#FF0000"},registerBtn:!1}},computed:{passwordLevelClass:function(){return c[this.state.passwordLevel]},passwordLevelName:function(){return l[this.state.passwordLevel]},passwordLevelColor:function(){return u[this.state.passwordLevel]}},methods:{handlePasswordLevel:function(e,t,a){var s=0;/[0-9]/.test(t)&&s++,/[a-zA-Z]/.test(t)&&s++,/[^0-9a-zA-Z_]/.test(t)&&s++,this.state.passwordLevel=s,this.state.percent=30*s,s>=2?(s>=3&&(this.state.percent=100),a()):(0===s&&(this.state.percent=10),a(new Error("密码强度不够")))},handlePasswordCheck:function(e,t,a){var s=this.form.getFieldValue("password");void 0===t&&a(new Error("请输入密码")),t&&s&&t.trim()!==s.trim()&&a(new Error("两次密码不一致")),a()},handlePhoneCheck:function(e,t,a){a()},handlePasswordInputClick:function(){this.isMobile?this.state.passwordLevelChecked=!1:this.state.passwordLevelChecked=!0},handleSubmit:function(){var e=this.form.validateFields,t=this.state,a=this.$router;e({force:!0},(function(e,s){e||(t.passwordLevelChecked=!1,a.push({name:"registerResult",params:Object(i["a"])({},s)}))}))},getCaptcha:function(e){e.preventDefault();var t=this.form.validateFields,a=this.state,s=this.$message,r=this.$notification;t(["mobile"],{force:!0},(function(e,t){if(!e){a.smsSendBtn=!0;var i=window.setInterval((function(){a.time--<=0&&(a.time=60,a.smsSendBtn=!1,window.clearInterval(i))}),1e3),o=s.loading("验证码发送中..",0);Object(n["getSmsCaptcha"])({mobile:t.mobile}).then((function(e){setTimeout(o,2500),r["success"]({message:"提示",description:"验证码获取成功，您的验证码为："+e.result.captcha,duration:8})})).catch((function(e){setTimeout(o,1),clearInterval(i),a.time=60,a.smsSendBtn=!1}))}}))},requestFailed:function(e){this.$notification["error"]({message:"错误",description:((e.response||{}).data||{}).message||"请求出现错误，请稍后再试",duration:4}),this.registerBtn=!1}},watch:{"state.passwordLevel":function(e){}}},p=d,m=(a("5d18"),a("aa37"),a("2877")),h=Object(m["a"])(p,s,r,!1,null,"329cecaa",null);t["default"]=h.exports},"2ca2":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=this,a=t.$createElement,s=t._self._c||a;return s("a-modal",{attrs:{centered:"",maskClosable:!1},on:{cancel:t.handleCancel},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[s("div",{style:{textAlign:"center"},attrs:{slot:"title"},slot:"title"},[t._v("两步验证")]),s("template",{slot:"footer"},[s("div",{style:{textAlign:"center"}},[s("a-button",{key:"back",on:{click:t.handleCancel}},[t._v("返回")]),s("a-button",{key:"submit",attrs:{type:"primary",loading:t.stepLoading},on:{click:t.handleStepOk}},[t._v(" 继续 ")])],1)]),s("a-spin",{attrs:{spinning:t.stepLoading}},[s("a-form",{attrs:{layout:"vertical","auto-form-create":function(t){e.form=t}}},[s("div",{staticClass:"step-form-wrapper"},[t.stepLoading?s("p",{staticStyle:{"text-align":"center"}},[t._v("正在验证.."),s("br"),t._v("请稍后")]):s("p",{staticStyle:{"text-align":"center"}},[t._v("请在手机中打开 Google Authenticator 或两步验证 APP"),s("br"),t._v("输入 6 位动态码")]),s("a-form-item",{style:{textAlign:"center"},attrs:{hasFeedback:"",fieldDecoratorId:"stepCode",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入 6 位动态码!",pattern:/^\d{6}$/,len:6}]}}},[s("a-input",{style:{textAlign:"center"},attrs:{placeholder:"000000"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleStepOk(e)}}})],1),s("p",{staticStyle:{"text-align":"center"}},[s("a",{on:{click:t.onForgeStepCode}},[t._v("遗失手机?")])])],1)])],1)],2)},r=[],i={props:{visible:{type:Boolean,default:!1}},data:function(){return{stepLoading:!1,form:null}},methods:{handleStepOk:function(){var e=this,t=this;this.stepLoading=!0,this.form.validateFields((function(a,s){a?(e.stepLoading=!1,e.$emit("error",{err:a})):setTimeout((function(){t.stepLoading=!1,t.$emit("success",{values:s})}),2e3)}))},handleCancel:function(){this.visible=!1,this.$emit("cancel")},onForgeStepCode:function(){}}},n=i,o=(a("edd4"),a("2877")),l=Object(o["a"])(n,s,r,!1,null,"4a462ef6",null);t["default"]=l.exports},4431:function(e,t,a){"use strict";var s=a("e14e"),r=a.n(s);r.a},"5d18":function(e,t,a){"use strict";var s=a("eeab"),r=a.n(s);r.a},"90b4":function(e,t,a){},aa37:function(e,t,a){"use strict";var s=a("f526"),r=a.n(s);r.a},ac2a:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("a-form",{ref:"formLogin",staticClass:"user-layout-login",attrs:{id:"formLogin",form:e.form},on:{submit:e.handleSubmit}},[a("a-tabs",{attrs:{activeKey:e.customActiveKey,tabBarStyle:{textAlign:"center",borderBottom:"unset"}},on:{change:e.handleTabClick}},[a("a-tab-pane",{key:"tab1",attrs:{tab:"账号密码登录"}},[e.isLoginError?a("a-alert",{staticStyle:{"margin-bottom":"24px"},attrs:{type:"error",showIcon:"",message:"账户或密码错误（admin/ant.design )"}}):e._e(),a("a-form-item",[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["username",{rules:[{required:!0,message:"请输入帐户名或邮箱地址"},{validator:e.handleUsernameOrEmail}],validateTrigger:"change"}],expression:"['username', { rules: [{ required: true, message: '请输入帐户名或邮箱地址' }, { validator: handleUsernameOrEmail }], validateTrigger: 'change' }]"}],attrs:{size:"large",type:"text",placeholder:"账户: admin"}},[a("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),a("a-form-item",[a("a-input-password",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"请输入密码"}],validateTrigger:"blur"}],expression:"['password', { rules: [{ required: true, message: '请输入密码' }], validateTrigger: 'blur' }]"}],attrs:{size:"large",placeholder:"密码: admin or ant.design"}},[a("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1)],1)],1),a("a-form-item",[a("router-link",{staticClass:"forge-password",staticStyle:{float:"right"},attrs:{to:{name:"recover",params:{user:"aaa"}}}},[e._v("忘记密码")])],1),a("a-form-item",{staticStyle:{"margin-top":"24px"}},[a("a-button",{staticClass:"login-button",attrs:{size:"large",type:"primary",htmlType:"submit",loading:e.state.loginBtn,disabled:e.state.loginBtn}},[e._v("确定")])],1)],1),e.requiredTwoStepCaptcha?a("two-step-captcha",{attrs:{visible:e.stepCaptchaVisible},on:{success:e.stepCaptchaSuccess,cancel:e.stepCaptchaCancel}}):e._e()],1)},r=[],i=(a("d3b7"),a("3ca3"),a("ddb0"),a("5530")),n=a("2ca2"),o=a("5880"),l=a("ca00"),c=a("7ded"),u={components:{TwoStepCaptcha:n["default"]},data:function(){return{customActiveKey:"tab1",loginBtn:!1,loginType:0,isLoginError:!1,requiredTwoStepCaptcha:!1,stepCaptchaVisible:!1,form:this.$form.createForm(this),state:{time:60,loginBtn:!1,loginType:0,smsSendBtn:!1}}},created:function(){},methods:Object(i["a"])(Object(i["a"])({},Object(o["mapActions"])(["Login","Logout","GetInfo"])),{},{handleUsernameOrEmail:function(e,t,a){var s=this.state,r=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;r.test(t)?s.loginType=0:s.loginType=1,a()},handleTabClick:function(e){this.customActiveKey=e},handleSubmit:function(e){var t=this;e.preventDefault();var a=this.form.validateFields,s=this.state,r=this.customActiveKey,n=this.Login;this.GetInfo;s.loginBtn=!0;var o="tab1"===r?["username","password"]:["mobile","captcha"];a(o,{force:!0},(function(e,a){if(e)setTimeout((function(){s.loginBtn=!1}),600);else{var r=Object(i["a"])({},a);delete r.username,r.account=a.username,r.password=a.password;var o=n(r);Promise.all([o]).then((function(){t.loginSuccess()})).finally((function(){s.loginBtn=!1}))}}))},getCaptcha:function(e){var t=this;e.preventDefault();var a=this.form.validateFields,s=this.state;a(["mobile"],{force:!0},(function(e,a){if(!e){s.smsSendBtn=!0;var r=window.setInterval((function(){s.time--<=0&&(s.time=60,s.smsSendBtn=!1,window.clearInterval(r))}),1e3),i=t.$message.loading("验证码发送中..",0);Object(c["getSmsCaptcha"])({mobile:a.mobile}).then((function(e){setTimeout(i,2500),t.$notification["success"]({message:"提示",description:"验证码获取成功，您的验证码为："+e.result.captcha,duration:8})})).catch((function(e){setTimeout(i,1),clearInterval(r),s.time=60,s.smsSendBtn=!1}))}}))},stepCaptchaSuccess:function(){this.loginSuccess()},stepCaptchaCancel:function(){var e=this;this.Logout().then((function(){e.loginBtn=!1,e.stepCaptchaVisible=!1}))},loginSuccess:function(e){var t=this;this.$router.push({path:"/"}),setTimeout((function(){t.$notification.success({message:"欢迎",description:"".concat(Object(l["timeFix"])(),"，欢迎回来")})}),1e3),this.isLoginError=!1},requestFailed:function(e){this.isLoginError=!0,this.$notification["error"]({message:"错误",description:((e.response||{}).data||{}).message||"请求出现错误，请稍后再试",duration:4})}})},d=u,p=(a("4431"),a("2877")),m=Object(p["a"])(d,s,r,!1,null,"eb0f3d04",null);t["default"]=m.exports},e14e:function(e,t,a){},edd4:function(e,t,a){"use strict";var s=a("90b4"),r=a.n(s);r.a},eeab:function(e,t,a){},f526:function(e,t,a){}}]);