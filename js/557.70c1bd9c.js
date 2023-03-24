"use strict";(self["webpackChunkvue_project"]=self["webpackChunkvue_project"]||[]).push([[557],{6317:function(s,e,t){t.d(e,{Z:function(){return c}});var i=function(){var s=this,e=s._self._c;return e("div",{staticClass:"chooser-component"},[e("ul",{staticClass:"chooser-list"},s._l(s.banks,(function(t,i){return e("li",{class:[t.name,{active:i===s.nowIndex}],attrs:{title:t.label},on:{click:function(e){return s.choosenSelectio(i)}}})})),0)])},o=[],a={name:"BankChooser",data(){return{nowIndex:0,banks:[{id:201,label:"招商银行",name:"zhaoshang"},{id:301,label:"中国建设银行",name:"jianshe"},{id:201,label:"招商银行",name:"zhaoshang"},{id:601,label:"浦发银行",name:"pufa"},{id:1101,label:"交通银行",name:"jiaotong"},{id:101,label:"中国工商银行",name:"gongshang"},{id:401,label:"中国农业银行",name:"nongye"},{id:1201,label:"中国银行",name:"zhongguo"},{id:501,label:"中信银行",name:"zhongxin"}]}},methods:{choosenSelectio(s){this.nowIndex=s,this.$emit("on-change",this.banks[s])}}},l=a,n=t(1001),r=(0,n.Z)(l,i,o,!1,null,"3c39b31c",null),c=r.exports},8015:function(s,e,t){t.d(e,{Z:function(){return c}});var i=function(){var s=this,e=s._self._c;return e("div",{staticClass:"selection-component"},[e("div",{staticClass:"selection-list"},[e("ul",s._l(s.selections,(function(t,i){return e("span",{class:{active:i===s.nowIndex},attrs:{title:t.label},on:{click:function(e){return s.chooseSelection(i)}}},[s._v(" "+s._s(t.label)+" ")])})),0)])])},o=[],a={props:{selections:{type:Array,default:[{label:"text",value:0}]}},data(){return{nowIndex:0}},methods:{chooseSelection(s){this.nowIndex=s,this.$emit("on-change",this.selections[s])}}},l=a,n=t(1001),r=(0,n.Z)(l,i,o,!1,null,"7368cd0e",null),c=r.exports},5533:function(s,e,t){t.d(e,{Z:function(){return d}});var i=function(){var s=this,e=s._self._c;return e("div",{staticClass:"selection-component"},[e("div",{staticClass:"selection-show",on:{click:function(e){return e.stopPropagation(),s.toggleDrop.apply(null,arguments)}}},[e("span",[s._v(" "+s._s(s.selections[s.nowIndex].label)+" ")]),e("div",{staticClass:"arrow"})]),s.isDrop?e("div",{staticClass:"selection-list"},[e("ul",s._l(s.selections,(function(t,i){return e("li",{on:{click:function(e){return s.chooseSelection(i)}}},[s._v(" "+s._s(t.label)+" ")])})),0)]):s._e()])},o=[],a=t(7123),l={props:{selections:{type:Array,default:[{label:"text",value:0}]}},data(){return{isDrop:!1,nowIndex:0}},methods:{toggleDrop(){this.isDrop=!this.isDrop},chooseSelection(s){this.nowIndex=s,this.$emit("on-change",this.selections[this.nowIndex])}},mounted(){a.Y.$on("reset-select",(()=>{this.isDrop=!1}))}},n=l,r=t(1001),c=(0,r.Z)(n,i,o,!1,null,"21ee3866",null),d=c.exports},320:function(s,e,t){t.d(e,{Z:function(){return d}});var i=function(){var s=this,e=s._self._c;return e("div",[e("dia-log",{attrs:{"is-show":s.isShowCheckDialog},on:{"on-close":s.checkStatus}},[s._v(" 请检查你的支付状态! "),e("div",{staticClass:"button",on:{click:s.checkStatus}},[s._v(" 支付成功 ")]),e("div",{staticClass:"button",on:{click:s.checkStatus}},[s._v(" 支付失败 ")])]),e("dia-log",{attrs:{"is-show":s.isShowSuccessDialog},on:{"on-close":s.Success}},[s._v(" 购买成功! ")]),e("dia-log",{attrs:{"is-show":s.isShowFailDialog},on:{"on-close":s.Success}},[s._v(" 购买失败! ")])],1)},o=[],a=(t(7658),t(54)),l={components:{DiaLog:a.Z},props:{isShowCheckDialog:{type:Boolean,default:!1},orderId:{type:[String,Number]}},data(){return{isShowSuccessDialog:!1,isShowFailDialog:!1}},methods:{checkStatus(){this.$http.get("http://localhost:3000/createOrder",{orderId:this.orderId}).then((s=>{this.isShowSuccessDialog=!0,this.$emit("on-close-check-dialog")}),(s=>{this.isShowFailDialog=!0,this.$emit("on-close-check-dialog")}))},Success(){this.isShowSuccessDialog=!1,this.$router.push({path:"/orderList"})}}},n=l,r=t(1001),c=(0,r.Z)(n,i,o,!1,null,"dcd53ed0",null),d=c.exports},5557:function(s,e,t){t.r(e),t.d(e,{default:function(){return p}});var i=function(){var s=this,e=s._self._c;return e("div",{staticClass:"sales-board"},[s._m(0),e("div",{staticClass:"sales-board-form"},[e("div",{staticClass:"sales-board-line"},[e("div",{staticClass:"sales-board-line-left"},[s._v(" 产品类型: ")]),e("div",{staticClass:"sales-board-line-right"},[e("v-chooser",{attrs:{selections:s.buyTypes},on:{"on-change":function(e){return s.hasParanChange("buyType",e)}}})],1)]),e("div",{staticClass:"sales-board-line"},[e("div",{staticClass:"sales-board-line-left"},[s._v(" 适用地区: ")]),e("div",{staticClass:"sales-board-line-right"},[e("v-selection",{attrs:{selections:s.seleTypes},on:{"on-change":function(e){return s.hasParanChange("versions",e)}}})],1)]),e("div",{staticClass:"sales-board-line"},[e("div",{staticClass:"sales-board-line-left"},[s._v(" 有效时间: ")]),e("div",{staticClass:"sales-board-line-right"},[e("v-chooser",{attrs:{selections:s.periodList},on:{"on-change":function(e){return s.hasParanChange("period",e)}}})],1)]),e("div",{staticClass:"sales-board-line"},[e("div",{staticClass:"sales-board-line-left"},[s._v(" 总价: ")]),e("div",{staticClass:"sales-board-line-right"},[s._v(" "+s._s(s.price)+" ")])]),e("div",{staticClass:"sales-board-line"},[e("div",{staticClass:"sales-board-line-left"},[s._v("   ")]),e("div",{staticClass:"sales-board-line-right"},[e("div",{staticClass:"button",on:{click:s.showPayDialog}},[s._v(" 立即购买 ")])])])]),s._m(1),e("dia-log",{attrs:{"is-show":s.isShow},on:{"on-close":s.hideShowParDialog}},[e("table",{staticClass:"buy-dialog-table"},[e("tr",[e("th",[s._v("产品类型")]),e("th",[s._v("适用地区")]),e("th",[s._v("有效时间")]),e("th",[s._v("总价")])]),e("tr",[e("td",[s._v(" "+s._s(s.buyType.label)+" ")]),e("td",[e("span",[s._v(" "+s._s(s.versions.label)+" ")])]),e("td",[s._v(" "+s._s(s.period.label)+" ")]),e("td",[s._v(" "+s._s(s.price)+" ")])])]),e("h3",{staticClass:"buy-dialog-title"},[s._v("请选择银行")]),e("bank-chooser",{on:{"on-change":s.onChangeBanks}}),e("div",{staticClass:"button buy-dialog-btn",on:{click:s.confirmBuy}},[s._v(" 确认购买 ")])],1),e("dia-log",{attrs:{"is-show":s.isShowErrDialog},on:{"on-close":s.hideErrDialog}},[s._v(" 支付失败！ ")]),e("check-order",{attrs:{"is-show-check-dialog":s.isShowCheckOrder,"order-id":s.orderId},on:{"on-close-check-dialog":s.hideCheckOrder}})],1)},o=[function(){var s=this,e=s._self._c;return e("div",{staticClass:"sales-board-intro"},[e("h2",[s._v("数据统计")]),e("p",[s._v(" 历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。 ")])])},function(){var s=this,e=s._self._c;return e("div",{staticClass:"sales-board-des"},[e("h2",[s._v("产品说明")]),e("p",[s._v(" 历史资料、科学实验、检验、统计等所获得的和用于科学研究、技术设计、查证、决策等的数值加以统计为解决方案做前期准备。 ")]),e("table",{staticClass:"sales-board-table"},[e("tbody",[e("tr",[e("td",[s._v("安全安保")]),e("td",[s._v("办公文教")]),e("td",[s._v("彩票")]),e("td",[s._v("车辆物流")]),e("td",[s._v("成人用品")]),e("td",[s._v("出版传媒")]),e("td",[s._v("电脑硬件")])]),e("tr",[e("td",[s._v("电子电工")]),e("td",[s._v("房地产建筑装修")]),e("td",[s._v("分类平台")]),e("td",[s._v("服装鞋帽")]),e("td",[s._v("箱包饰品")]),e("td",[s._v("化工原料制品")]),e("td",[s._v("机械设备")])]),e("tr",[e("td",[s._v("家庭日用品")]),e("td",[s._v("家用电器")]),e("td",[s._v("教育培训")]),e("td",[s._v("节能环保")]),e("td",[s._v("金融服务")]),e("td",[s._v("礼品")]),e("td",[s._v("旅游住宿")])]),e("tr",[e("td",[s._v("美容化妆")]),e("td",[s._v("母婴护理")]),e("td",[s._v("农林牧渔")]),e("td",[s._v("软件")]),e("td",[s._v("商务服务")]),e("td",[s._v("生活服务")]),e("td",[s._v("食品保健品")])]),e("tr",[e("td",[s._v("手机数码")]),e("td",[s._v("通讯服务设备")]),e("td",[s._v("网络服务")]),e("td",[s._v("医疗服务")]),e("td",[s._v("游戏")]),e("td",[s._v("运动休闲娱乐")]),e("td",[s._v("招商加盟")])])])])])}],a=t(8015),l=t(5533),n=t(54),r=t(6317),c=t(320),d=t(6486),h=t.n(d),v={components:{VChooser:a.Z,VSelection:l.Z,DiaLog:n.Z,BankChooser:r.Z,CheckOrder:c.Z},data(){return{isShow:!1,buyType:[],versions:{},period:{},price:0,isShowCheckOrder:!1,bankId:null,isShowErrDialog:!1,orderId:void 0,buyTypes:[{label:"红色版",value:0},{label:"绿色版",value:1},{label:"紫色版",value:2}],seleTypes:[{label:"上海",value:0},{label:"重庆",value:1},{label:"北京",value:2},{label:"深圳",value:2},{label:"广东",value:2},{label:"香港",value:2},{label:"澳门",value:2}],periodList:[{label:"半年",value:0},{label:"一年",value:0},{label:"二年",value:0}]}},methods:{hasParanChange(s,e){this[s]=e,this.getPrice(),console.log(this[s])},getPrice(){let s=h().map(this.versions,(s=>s.value)),e={buyType:this.buyType.value,period:this.period.value,version:s.join(",")};this.$http.get("http://localhost:3000/getPrice",e).then((s=>{console.log(s);let e=s.body;this.price=e.amount}))},showPayDialog(){this.isShow=!0},hideShowParDialog(){this.isShow=!1},onChangeBanks(s){this.bankId=s.id,console.log(this.bankId)},confirmBuy(){let s=h().map(this.versions,(s=>s.value)),e={buyType:this.buyType.value,period:this.period.value,version:s.join(","),bankId:this.bankId};this.$http.get("http://localhost:3000/createOrder",e).then((s=>{this.orderId=s.body.orderId,this.isShowCheckOrder=!0,this.isShow=!1}),(s=>{this.isShowBuyDialog=!1,this.isShowErrDialog=!0}))},hideErrDialog(){this.isShowErrDialog=!1},hideCheckOrder(){this.isShowCheckOrder=!1}},mounted(){this.buyType=this.buyTypes[0],this.versions=this.seleTypes[0],this.period=this.periodList[0],this.getPrice()}},u=v,_=t(1001),b=(0,_.Z)(u,i,o,!1,null,"71c9caee",null),p=b.exports}}]);
//# sourceMappingURL=557.70c1bd9c.js.map