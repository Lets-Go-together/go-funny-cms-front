(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e57ed"],{9572:function(e,n,i){"use strict";i.r(n);i("4160"),i("caad"),i("2532"),i("159b");var t=i("8bbf"),o=i.n(t),s=i("4360"),a=o.a.directive("action",{inserted:function(e,n,i){var t=n.arg,o=s["default"].getters.roles,a=i.context.$route.meta.permission,r=a instanceof String&&[a]||a;o.permissions.forEach((function(n){r.includes(n.permissionId)&&n.actionList&&!n.actionList.includes(t)&&(e.parentNode&&e.parentNode.removeChild(e)||(e.style.display="none"))}))}});n["default"]=a}}]);