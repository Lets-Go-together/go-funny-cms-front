(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-722fac80"],{"9dac":function(e,n,c){var t={"./404":["8cdb",9,"chunk-2d0e95df"],"./404.vue":["8cdb",9,"chunk-2d0e95df"],"./account/settings/AvatarModal":["8d90",9,"chunk-a1104904"],"./account/settings/AvatarModal.vue":["8d90",9,"chunk-a1104904"],"./account/settings/BaseSetting":["33e6",9,"chunk-1a024484"],"./account/settings/BaseSetting.vue":["33e6",9,"chunk-1a024484"],"./account/settings/Binding":["91be",9,"chunk-2d0e4e51"],"./account/settings/Binding.vue":["91be",9,"chunk-2d0e4e51"],"./account/settings/Custom":["55c3",9,"chunk-15e436f9"],"./account/settings/Custom.vue":["55c3",9,"chunk-15e436f9"],"./account/settings/Index":["cd07",9,"chunk-77de706e"],"./account/settings/Index.vue":["cd07",9,"chunk-77de706e"],"./account/settings/Notification":["0c3f",9,"chunk-2d0aecfc"],"./account/settings/Notification.vue":["0c3f",9,"chunk-2d0aecfc"],"./account/settings/Security":["a9a9",9,"chunk-2d209ae6"],"./account/settings/Security.vue":["a9a9",9,"chunk-2d209ae6"],"./auth/admin/Index":["2339",9,"chunk-6a1629b0"],"./auth/admin/Index.vue":["2339",9,"chunk-6a1629b0"],"./auth/admin/columns":["ff7d",7,"chunk-2d2384c3"],"./auth/admin/columns.js":["ff7d",7,"chunk-2d2384c3"],"./auth/admin/modules/form":["423f",9,"chunk-37ff9b90"],"./auth/admin/modules/form.vue":["423f",9,"chunk-37ff9b90"],"./auth/menu/Index":["c965",9,"chunk-b99ba046"],"./auth/menu/Index.vue":["c965",9,"chunk-b99ba046"],"./auth/menu/modules/form":["1892",9,"chunk-500d1d47"],"./auth/menu/modules/form.vue":["1892",9,"chunk-500d1d47"],"./auth/permission/Index":["9c0d",9,"chunk-6ae7aa0c"],"./auth/permission/Index.vue":["9c0d",9,"chunk-6ae7aa0c"],"./auth/permission/modules/form":["42c5",9,"chunk-73ab2fe9"],"./auth/permission/modules/form.vue":["42c5",9,"chunk-73ab2fe9"],"./auth/role/Index":["6999",9,"chunk-ccbef304"],"./auth/role/Index.vue":["6999",9,"chunk-ccbef304"],"./auth/role/modules/form":["e547",9,"chunk-11016b30"],"./auth/role/modules/form.vue":["e547",9,"chunk-11016b30"],"./dashboard/Workplace":["004c",9,"chunk-2d0a2da5"],"./dashboard/Workplace.vue":["004c",9,"chunk-2d0a2da5"],"./exception/403":["e409",9,"chunk-2d2253ae"],"./exception/403.vue":["e409",9,"chunk-2d2253ae"],"./exception/404":["cc89",9,"fail"],"./exception/404.vue":["cc89",9,"fail"],"./exception/500":["6c05",9,"chunk-2d0da6a8"],"./exception/500.vue":["6c05",9,"chunk-2d0da6a8"],"./result/Error":["f32b",9,"chunk-2d22c4b3"],"./result/Error.vue":["f32b",9,"chunk-2d22c4b3"],"./result/Success":["3ada",9,"chunk-4e55fba6"],"./result/Success.vue":["3ada",9,"chunk-4e55fba6"],"./user/Login":["ac2a",9,"chunk-16926f6e"],"./user/Login.vue":["ac2a",9,"chunk-16926f6e"],"./user/Register":["1348",9,"chunk-571df88f"],"./user/Register.vue":["1348",9,"chunk-571df88f"],"./user/RegisterResult":["1037",9,"chunk-2d0aa1b9"],"./user/RegisterResult.vue":["1037",9,"chunk-2d0aa1b9"]};function u(e){if(!c.o(t,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=t[e],u=n[0];return c.e(n[2]).then((function(){return c.t(u,n[1])}))}u.keys=function(){return Object.keys(t)},u.id="9dac",e.exports=u},aa0f:function(e,n,c){"use strict";c.r(n),c.d(n,"generatorDynamicRouter",(function(){return o})),c.d(n,"generator",(function(){return h}));var t=c("6abc"),u=(c("27ae"),c("591f"),c("feb3"),c("3337"),c("16ca"),c("1d43"),c("6cd0"),c("fc13"),c("9b5f"),c("3bae"),c("7ded")),a=c("680a"),r={BasicLayout:a["BasicLayout"],BlankLayout:a["BlankLayout"],RouteView:a["RouteView"],PageView:a["PageView"],403:function(){return c.e("error").then(c.bind(null,"e409"))},404:function(){return c.e("error").then(c.bind(null,"cc89"))},500:function(){return c.e("error").then(c.bind(null,"6c05"))}},d={path:"*",redirect:"/404",hidden:!0},i={key:"",name:"index",path:"",component:"BasicLayout",redirect:"/dashboard",meta:{title:"首页"},children:[]},o=function(e){return new Promise((function(n,c){u["getCurrentUserNav"](e).then((function(e){var c=e.result,t=[],u=[];s(c,u,0),i.children=u,t.push(i);var a=h(t);a.push(d),n(a)})).catch((function(e){c(e)}))}))},h=function e(n,t){return n.map((function(n){var u=n.meta||{},a=u.title,d=u.show,i=u.hideChildren,o=u.hiddenHeaderContent,h=u.target,s=u.icon,f={path:n.path||"".concat(t&&t.path||"","/").concat(n.key),name:n.name||n.key||"",component:r[n.component||n.key]||function(){return c("9dac")("./".concat(n.component))},meta:{title:a,icon:s||void 0,hiddenHeaderContent:o,target:h,permission:n.name}};return!1===d&&(f.hidden=!0),i&&(f.hideChildrenInMenu=!0),f.path.startsWith("http")||(f.path=f.path.replace("//","/")),n.redirect&&(f.redirect=n.redirect),n.children&&n.children.length>0&&(f.children=e(n.children,f)),f}))},s=function e(n,c,u){n.forEach((function(a){if(a.parentId===u){var r=Object(t["a"])(Object(t["a"])({},a),{},{key:a.key||a.name,children:[]});e(n,r.children,a.id),r.children.length<=0&&delete r.children,c.push(r)}}))}}}]);