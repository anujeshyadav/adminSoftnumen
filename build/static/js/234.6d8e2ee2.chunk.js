(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[234],{1027:function(e,a,t){},2850:function(e,a,t){"use strict";t.r(a);var l=t(14),n=t(15),c=t(16),r=t(17),m=t(1),s=t.n(m),u=t(845),i=t(846),o=t(852),E=t(205),d=t(855),h=(t(22),t(1027),t(864),t(8)),v=t(65),f=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={data:{}},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;h.a.get("/user/getviewone/".concat(a)).then((function(a){console.log(a.data.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){var e,a,t,l;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,s.a.createElement(u.a,null,s.a.createElement(i.a,{sm:"12"})),s.a.createElement(o.a,{className:"overflow-hidden app-ecommerce-details"},s.a.createElement(u.a,{className:"m-2"},s.a.createElement(i.a,null,s.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"View Customer")),s.a.createElement(i.a,null,s.a.createElement(v.b,{render:function(e){var a=e.history;return s.a.createElement(E.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/freshlist/customer/customerList")}},"Back")}}))),s.a.createElement(d.a,{className:"pb-0"},s.a.createElement(u.a,{className:"m-2"},s.a.createElement(i.a,{sm:"12",className:"my-1"},s.a.createElement(u.a,{className:"m-3"},s.a.createElement(i.a,{sm:"4"},s.a.createElement("img",{src:null===(e=this.state.data)||void 0===e?void 0:e.image,alt:"aaa",width:"200",height:"150"})),s.a.createElement(i.a,{sm:"8"},s.a.createElement(u.a,{className:"m-2"},s.a.createElement(i.a,null,s.a.createElement("h6",null,"UserName")),s.a.createElement(i.a,null,s.a.createElement("h6",null,s.a.createElement("b",null,null===(a=this.state.data)||void 0===a?void 0:a.username)))),s.a.createElement(u.a,{className:"m-2"},s.a.createElement(i.a,null,s.a.createElement("h6",null,"Email")),s.a.createElement(i.a,null,s.a.createElement("h6",null,s.a.createElement("b",null,null===(t=this.state.data)||void 0===t?void 0:t.email)))),s.a.createElement(u.a,{className:"m-2"},s.a.createElement(i.a,null,s.a.createElement("h6",null,"Phone")),s.a.createElement(i.a,null,s.a.createElement("h6",null,s.a.createElement("b",null,null===(l=this.state.data)||void 0===l?void 0:l.mobile))))))))))))}}]),t}(s.a.Component);a.default=f},864:function(e,a,t){}}]);
//# sourceMappingURL=234.6d8e2ee2.chunk.js.map