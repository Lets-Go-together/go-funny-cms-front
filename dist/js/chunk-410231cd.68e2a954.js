(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-410231cd","chunk-2d221fc5"],{"0c3f":function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"list-notify"},[e("a-divider"),t._l(t.list,(function(i,s){return e("div",{key:s,staticClass:"list-notify-item"},[e("h3",{staticClass:"list-notify-item-user"},[t._v(t._s(i.title)+" :")]),e("i",{staticClass:"list-notify-item-time"},[t._v("> "+t._s(i.updated_at))]),e("p",{staticClass:"list-notify-item-detail"},[t._v(t._s(i.description)+" "),e("a",{attrs:{href:"http://"}},[t._v("查看详情")])]),e("a-divider",{attrs:{dashed:""}})],1)}))],2)},n=[],a=(e("4de4"),e("d3b7"),e("cd4b")),c={data:function(){return{list:[],page:1,pageSize:20,tableLoading:!1}},methods:{getList:function(){var t=this,i=this.page,e=this.pageSize,s=Object.assign({page:i,pageSize:e},this.filter);this.tableLoading=!0,Object(a["getList"])(s).then((function(i){var e=i.data;t.list=e.list})).finally((function(){t.tableLoading=!1}))}},mounted:function(){this.getList()}},l=c,r=(e("ce44"),e("2877")),u=Object(r["a"])(l,s,n,!1,null,null,null);i["default"]=u.exports},cd4b:function(t,i,e){"use strict";e.r(i),e.d(i,"getList",(function(){return n}));var s=e("b775");function n(t){return Object(s["default"])({url:"/notify",method:"get",params:t})}},ce44:function(t,i,e){"use strict";var s=e("ea28"),n=e.n(s);n.a},ea28:function(t,i,e){}}]);