(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[424],{2851:function(e,a,t){"use strict";t.r(a);var l=t(14),n=t(15),s=t(16),r=t(17),c=t(1),i=t.n(c),m=t(837),d=t(838),o=t(844),u=t(204),E=t(847),f=t(834),v=t(10),N=(t(22),t(65)),h=function(e){Object(s.a)(t,e);var a=Object(r.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={data:{}},n}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;v.a.get("/admin/viewone_order/".concat(a)).then((function(a){console.log(a.data.data),e.setState({data:a.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,null,i.a.createElement(d.a,{sm:"12"},i.a.createElement(o.a,null,i.a.createElement(m.a,{className:"m-2"},i.a.createElement(d.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"All Order Detail")),i.a.createElement(d.a,null,i.a.createElement(N.b,{render:function(e){var a=e.history;return i.a.createElement(u.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/freshlist/order/All")}},"Back")}}))),i.a.createElement(E.a,null,i.a.createElement(m.a,{className:"mx-0",col:"12"},i.a.createElement(d.a,{className:"pl-0",sm:"12",lg:"6"},i.a.createElement(f.a,{className:"d-sm-flex d-block"},i.a.createElement(f.a,{body:!0},i.a.createElement(m.a,{className:"ml-4"},i.a.createElement(d.a,{sm:"9",md:"12",lg:"12"},i.a.createElement("div",{className:"users-page-view-table"},i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Order ID"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.orderId))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Delivery Address"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.delivery_add))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Email"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.email))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Previous Address"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.previous_add))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"New Address"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.new_address))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Phone"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.phone_no))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Zone"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.order_zone))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Notify"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.notify))),i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Time Slot"),i.a.createElement("div",{className:"text-truncate"},i.a.createElement("span",null,this.state.data.time_slot))),i.a.createElement("div",{className:"users-page-view-table"},i.a.createElement("div",{className:"d-flex user-info"},i.a.createElement("div",{className:"user-info-title font-weight-bold"},"Status"),i.a.createElement("div",null,this.state.data.status)))))))))))))))}}]),t}(i.a.Component);a.default=h}}]);
//# sourceMappingURL=424.7094e51f.chunk.js.map