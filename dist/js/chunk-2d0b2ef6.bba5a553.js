(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b2ef6"],{"25da":function(t,e,i){"use strict";i.r(e),i.d(e,"PageLoading",(function(){return s}));var n=i("6abc"),a=i("f7c4"),s={name:"PageLoading",props:{tip:{type:String,default:"Loading.."},size:{type:String,default:"large"}},render:function(){var t=arguments[0],e={textAlign:"center",background:"rgba(0,0,0,0.6)",position:"fixed",top:0,bottom:0,left:0,right:0,zIndex:1100},i={position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -50%)"};return t("div",{style:e},[t(a["a"],{attrs:{size:this.size,tip:this.tip},style:i})])}},o="0.0.1",r={newInstance:function(t,e){var i=document.querySelector("body>div[type=loading]");i||(i=document.createElement("div"),i.setAttribute("type","loading"),i.setAttribute("class","ant-loading-wrapper"),document.body.appendChild(i));var a=Object.assign({visible:!1,size:"large",tip:"Loading..."},e),o=new t({data:function(){return Object(n["a"])({},a)},render:function(){var t=arguments[0],e=this.tip,i={};return this.tip&&(i.tip=e),this.visible?t(s,{props:Object(n["a"])({},i)}):null}}).$mount(i);function r(t){var e=Object(n["a"])(Object(n["a"])({},a),t),i=e.visible,s=e.size,r=e.tip;o.$set(o,"visible",i),r&&o.$set(o,"tip",r),s&&o.$set(o,"size",s)}return{instance:o,update:r}}},c={show:function(t){this.instance.update(Object(n["a"])(Object(n["a"])({},t),{},{visible:!0}))},hide:function(){this.instance.update({visible:!1})}},d=function(t,e){t.prototype.$loading||(c.instance=r.newInstance(t,e),t.prototype.$loading=c)};e["default"]={version:o,install:d}}}]);