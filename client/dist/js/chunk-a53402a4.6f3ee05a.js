(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a53402a4"],{"0dbf":function(t,s,e){"use strict";var i=e("7ce3"),a=e.n(i);a.a},"7ce3":function(t,s,e){},a69a:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.error?e("div",{staticClass:"container"},[t._v("\n    There is a error\n")]):e("div",{staticClass:"container"},[e("v-dialog"),e("div",{staticClass:"create-post"},[e("button",{staticClass:"btn",on:{click:t.EditPost}},[t._v("Edit")]),e("button",{staticClass:"btn",on:{click:function(s){t.show()}}},[t._v("Delete")]),e("button",{staticClass:"btn",on:{click:function(s){t.$router.push("insertinfo?id="+t.posts[0]._id)}}},[t._v("Message")]),e("br"),e("br"),e("h1",[t._v(t._s(t.posts[0].ownID))]),e("div",{style:t.theyaremessages?"float:left;":""},[e("div",[e("div",{staticClass:"box-title"},[t._v("\n              Contact and person information\n           ")]),e("div",{staticClass:"box"},[e("div",[e("strong",[t._v("Client Name")]),e("div",{staticClass:"box03"},[t._v(t._s(t.posts[0].Client1Info.Client1Name)+" "+t._s(t.posts[0].Client1Info.Client1Surname))])]),e("div",[e("strong",[t._v("Client Telephon Number")]),e("div",{staticClass:"box03"},[t._v(t._s(t.posts[0].Client1Info.Client1Tel)+" ")])]),e("div",[e("strong",[t._v("Email")]),e("div",{staticClass:"box03"},[t._v(t._s(t.posts[0].Client1Info.Client1Email)+" ")])]),e("div",[e("strong",[t._v("Address")]),e("div",{staticClass:"box03"},[t._v(t._s(t.posts[0].Address))])])]),e("div",{staticClass:"box"},[e("div",[e("strong",[t._v("Client 2 Name")]),e("div",{staticClass:"box03"},[t._v(t._s(t.posts[0].Client2Info.Client2Name)+" "+t._s(t.posts[0].Client2Info.Client2Surname))])]),e("div",[e("strong",[t._v("Client 2 Telephon Number")]),e("div",{staticClass:"box03"},[t._v(t._s(t.posts[0].Client2Info.Client2Tel)+" ")])]),e("div",[e("strong",[t._v("Client 2 Email")]),e("div",{staticClass:"box03"},[t._v(t._s(t.posts[0].Client2Info.Client2Email)+" ")])])]),t.theyaremessages?e("div",{staticStyle:{clear:"both"}}):t._e(),e("div",{staticClass:"box"},[e("div",[e("strong",[t._v("Event Date")]),e("div",{staticClass:"box03"},[t._v(t._s(t.moment(t.posts[0].EventInfo.DateEvent).format("DD.MM.YYYY")))])]),e("div",{staticClass:"box01"},[e("strong",[t._v("Event location")]),e("div",{staticClass:"box03"},[t._v(t._s(t.posts[0].EventInfo.EventLocation))])]),e("div",[e("strong",[t._v("Contact Date")]),e("div",{staticClass:"box03"},[t._v(t._s(t.moment(t.posts[0].DateContact).format("DD.MM.YYYY")))])])]),e("div",{staticClass:"box"},[e("div",[e("strong",[t._v("Already Customer")]),e("div",{staticClass:"box03"},[t.posts[0].AlreadyCustomer?e("span",[t._v("Yes")]):e("span",[t._v("No")])])]),e("div",{staticClass:"box01"},[e("strong",[t._v("Actual Potential Client")]),e("div",{staticClass:"box03"},[t.posts[0].ActivCustomer?e("span",[t._v("Yes")]):e("span",[t._v("No")])])]),e("div",{staticClass:"box01"},[e("strong",[t._v("Source")]),e("div",{staticClass:"box03"},[t._v(t._s(t.posts[0].Source))])])])]),e("div",{staticClass:"barbtn",staticStyle:{clear:"both"},on:{click:function(s){t.contractVisible=!t.contractVisible}}},[t.contractVisible?e("span",[t._v("- View Contract fields?")]):e("span",[t._v("+ View Contract fields?")])]),e("transition",{attrs:{name:"fade"}},[t.contractVisible?e("div",{staticStyle:{clear:"both"}},[e("div",{staticClass:"box-title"},[t._v("\n            Contract information\n          ")]),e("div",{staticClass:"box"},[e("div",[e("strong",[t._v("Contract Date")]),e("div",{staticClass:"box03"},[t._v(t._s(t.moment(t.posts[0].ContractInfo.ContractDate).format("DD.MM.YYYY")))])]),e("div",{staticClass:"box01"},[e("strong",[t._v("Contracted Time")]),e("div",{staticClass:"box03"},[t._v(t._s(t.posts[0].ContractInfo.NumberHours))])])]),e("div",{staticClass:"box"},[e("div",[e("strong",[t._v("Ordered Services")]),e("div",{staticClass:"box03"},[t._v(t._s(t.posts[0].ContractInfo.OrderedServices))])]),e("div",{staticClass:"box01"},[e("strong",[t._v("Ordered Products")]),e("div",{staticClass:"box03"},[t._v(t._s(t.posts[0].ContractInfo.OrderedProducts))])])]),t.theyaremessages?e("div",{staticStyle:{clear:"both"}}):t._e(),e("div",{staticClass:"box"},[e("div",[e("strong",[t._v("Total Price")]),e("div",{staticClass:"box03"},[t._v(t._s(t.posts[0].ContractInfo.TotalPrice)+" €")])]),e("div",{staticClass:"box01"},[e("strong",[t._v("Permision to Publish")]),e("div",{staticClass:"box03"},[t.posts[0].ContractInfo.PermisionPublic?e("span",[t._v("Yes")]):e("span",[t._v("No")])])])]),e("div",{staticClass:"box"},[e("div",[e("strong",[t._v("Deposit to Pay")]),e("div",{staticClass:"box03"},[t._v(t._s(t.posts[0].ContractInfo.DepositToPay)+" €")])]),e("div",{staticClass:"box01"},[e("strong",[t._v("Deposit already payed?")]),e("div",{staticClass:"box03"},[t.posts[0].ContractInfo.DepositPayed?e("span",[t._v("Yes")]):e("span",[t._v("No")])])])])]):t._e()]),t.commentVisible?e("div",{staticStyle:{clear:"both"}},[e("div",{staticClass:"box-title"},[t._v("\n            Comment\n          ")]),e("div",[e("div",{staticClass:"box-comment",style:t.theyaremessages?"max-width:588px;":""},[e("div",{staticClass:"box02"},[t._v(t._s(t.posts[0].Comments))])])])]):t._e()],1),e("transition",{attrs:{name:"fade"}},[t.theyaremessages?e("div",{staticClass:"boxmessagecollumn"},[e("div",{staticClass:"box-title"},[t._v("\n          Comunication with client\n        ")]),t._l(t.postsmessages,function(s,i){return e("div",{key:s._id,attrs:{item:s,index:i}},[e("div",[e("div",{staticClass:"boxmessage"},[e("div",[e("strong",[t._v("Date")]),e("div",{staticClass:"box03"},[t._v(t._s(t.moment(s.DateInfo).format("DD.MM.YYYY")))])]),e("div",[e("strong",[t._v("Who")]),e("div",{staticClass:"box03"},[t._v(t._s(s.ContactPerson))])]),e("div",[e("strong",[t._v("Chanel")]),e("div",{staticClass:"box03"},[t._v(t._s(s.ChanelChoosed))])]),e("div",{staticClass:"boxmessage-comment"},[e("strong",[t._v("Comment")]),e("div",{staticClass:"box02"},[t._v(t._s(s.CommentsInfo))])]),e("div",{staticStyle:{clear:"both"}},[e("button",{staticClass:"btn",on:{click:function(e){t.EditMessage(s._id)}}},[t._v("Edit Message")]),e("button",{staticClass:"btn",on:{click:function(e){t.show(s._id)}}},[t._v("Delete Message")])])])])])})],2):t._e()]),e("br"),e("br"),e("br"),e("br"),e("div",{staticStyle:{clear:"both"}},[e("button",{staticClass:"btn",on:{click:t.EditPost}},[t._v("Edit")]),e("button",{staticClass:"btn",on:{click:function(s){t.show()}}},[t._v("Delete")]),e("button",{staticClass:"btn",on:{click:function(s){t.$router.push("insertinfo?id="+t.posts[0]._id)}}},[t._v("Message")])])],1)],1)},a=[],o=(e("55dd"),e("96cf"),e("3b8d")),n=(e("cadf"),e("551c"),e("097d"),e("d5b5")),r={name:"ViewCostumer",data:function(){return{contractVisible:!1,commentVisible:!1,posts:{0:{EventInfo:{},Client1Info:{},Client2Info:{},ContractInfo:{}}},posts2:[],postsmessages:{0:{}},error:"",id:"",id2:"",fecha:"",theyaremessages:!1}},created:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.$route.query.id?(this.id=this.$route.query.id,this.id2=this.id):this.$router.push("/"),t.prev=1,t.next=4,n["a"].getPosts(this.id);case 4:this.posts=t.sent,this.posts[0].AlreadyCustomer&&(this.contractVisible=!0),this.posts[0].Comments&&(this.commentVisible=!0),this.fecha=Date(this.posts[0].DateContact),this.getMessages(),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),this.error=t.t0.message;case 14:case"end":return t.stop()}},t,this,[[1,11]])}));function s(){return t.apply(this,arguments)}return s}(),methods:{getMessages:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n["a"].getMessages(this.id);case 3:this.postsmessages=t.sent,this.postsmessages[0]&&(this.theyaremessages=!0),this.postsmessages.sort(this.compare),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),this.error=t.t0.message;case 11:case"end":return t.stop()}},t,this,[[0,8]])}));function s(){return t.apply(this,arguments)}return s}(),EditPost:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.$router.push("Edit?id=".concat(this.id2));case 1:case"end":return t.stop()}},t,this)}));function s(){return t.apply(this,arguments)}return s}(),EditMessage:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(s){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.$router.push("insertinfo?idmessage=".concat(s));case 1:case"end":return t.stop()}},t,this)}));function s(s){return t.apply(this,arguments)}return s}(),deletePost:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var s,e=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return s=e.length>0&&void 0!==e[0]?e[0]:"",t.next=3,n["a"].deletePost(this.id,s);case 3:return t.next=5,n["a"].getPosts();case 5:this.posts=t.sent,this.$router.push("/"),this.hide();case 8:case"end":return t.stop()}},t,this)}));function s(){return t.apply(this,arguments)}return s}(),show:function(){var t,s,e=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.$modal.show("hello-world"),""===i?(t="Delete Entry "+this.posts[0].ownID,s="Are you sure you want to delete customer and all its messages??? "):(t="Delete Message of Client "+this.posts[0].ownID,s="Are you sure you want to delete the message??? "),this.$modal.show("dialog",{title:t,text:s,buttons:[{title:"Delete",handler:function(){e.deletePost(i)}},{title:"",default:!0,handler:function(){}},{title:"Close"}]})},hide:function(){this.$modal.hide("dialog")},compare:function(t,s){var e=t.DateInfo.toUpperCase(),i=s.DateInfo.toUpperCase(),a=0;return e>i?a=1:e<i&&(a=-1),-1*a}}},c=r,l=(e("0dbf"),e("2877")),v=Object(l["a"])(c,i,a,!1,null,"55390742",null);s["default"]=v.exports}}]);
//# sourceMappingURL=chunk-a53402a4.6f3ee05a.js.map