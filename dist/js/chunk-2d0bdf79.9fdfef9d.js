(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bdf79"],{"2df7":function(e,a,t){"use strict";t.r(a);var i=t("6abc");a["default"]={data:function(){return{pagination:{pageSize:10,page:1,total:0},pageParams:{pageSize:10,page:1}}},methods:{handleTableChange:function(e,a,t){var n=Object(i["a"])({},this.pagination);n.current=e.current,this.pagination=n,this.filters=Object.assign(this.filters,{pageSize:e.pageSize,page:e.current,sortField:t.field,sortOrder:t.order}),this.getList()}}}}}]);