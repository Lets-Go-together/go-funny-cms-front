(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0be08a"],{"2f11":function(t,e,n){"use strict";n.r(e),n.d(e,"getList",(function(){return r})),n.d(e,"getMailers",(function(){return a})),n.d(e,"add",(function(){return d})),n.d(e,"update",(function(){return i})),n.d(e,"del",(function(){return o}));var u=n("b775");function r(t){return Object(u["default"])({url:"/mail",method:"get",params:t})}function a(t){return Object(u["default"])({url:"/mail/mailer",method:"get",data:t})}function d(t){return Object(u["default"])({url:"/mail/store",method:"post",data:t})}function i(t,e){return Object(u["default"])({url:"/mail/save",method:"put",data:e})}function o(t){return Object(u["default"])({url:"/mail/delete",method:"delete",data:{id:t}})}}}]);