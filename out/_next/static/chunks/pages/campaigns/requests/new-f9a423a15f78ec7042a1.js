(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[189],{2717:function(e,t,r){"use strict";r.r(t);var n=r(85893),s=r(809),a=r.n(s),o=r(92447),c=r(74047),u=r(4706),i=r(52700),l=r(8127),f=r(44102),p=r(20775),h=r(26265),m=r(67294),d=r(73657),v=r(3542),b=r(68251),y=r(27904);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,h.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,p.Z)(e);if(t){var s=(0,p.Z)(this).constructor;r=Reflect.construct(n,arguments,s)}else r=n.apply(this,arguments);return(0,f.Z)(this,r)}}var O=function(e){(0,l.Z)(r,e);var t=g(r);function r(e){var n;return(0,c.Z)(this,r),n=t.call(this,e),(0,h.Z)((0,u.Z)(n),"formSubmitHandler",function(){var e=(0,o.Z)(a().mark((function e(t){var r,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,v.Z.eth.getAccounts();case 3:return r=e.sent[0],s=(0,b.Z)(n.props.address),e.next=7,s.methods.CreateRequest(n.state.reason,v.Z.utils.toWei(n.state.amount,"ether"),n.state.receiver).send({from:r});case 7:y.Router.pushRoute("/campaigns/".concat(n.props.address,"/requests"));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),n.state={address:n.props.address,receiver:"",amount:"",reason:""},n}return(0,i.Z)(r,null,[{key:"getInitialProps",value:function(){var e=(0,o.Z)(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query.address,e.abrupt("return",{address:r});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),(0,i.Z)(r,[{key:"render",value:function(){var e=this;return(0,n.jsxs)(d.Z,{children:[(0,n.jsx)("h1",{children:"New Request Form"}),(0,n.jsx)("hr",{}),(0,n.jsxs)("form",{onSubmit:this.formSubmitHandler,children:[(0,n.jsxs)("div",{className:"form-group mb-3",children:[(0,n.jsx)("label",{htmlFor:"receiver",children:"Receiver Address"}),(0,n.jsx)("input",{value:this.state.receiver,onChange:function(t){e.setState(x(x({},e.state),{},{receiver:t.target.value}))},type:"text",className:"form-control",id:"receiver",placeholder:"Enter the Etherium Address of the Receiver"})]}),(0,n.jsxs)("div",{className:"form-group mb-3",children:[(0,n.jsx)("label",{htmlFor:"amount",children:"Amount (Ether)"}),(0,n.jsx)("input",{value:this.state.amount,onChange:function(t){e.setState(x(x({},e.state),{},{amount:t.target.value}))},type:"text",className:"form-control",id:"amount",placeholder:"Enter the Etherium Amount in Ether"})]}),(0,n.jsxs)("div",{className:"form-group mb-5",children:[(0,n.jsx)("label",{htmlFor:"reason",children:"Reason"}),(0,n.jsx)("input",{value:this.state.reason,onChange:function(t){e.setState(x(x({},e.state),{},{reason:t.target.value}))},type:"text",className:"form-control",id:"reason",placeholder:"Enter a valid reason to back your claim"})]}),(0,n.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit Your Request"})]})]})}}]),r}(m.Component);t.default=O},76306:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/campaigns/requests/new",function(){return r(2717)}])}},function(e){e.O(0,[482,773,486,774,888,179],(function(){return t=76306,e(e.s=t);var t}));var t=e.O();_N_E=t}]);