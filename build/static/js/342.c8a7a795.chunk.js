(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[342],{2841:function(e,a,t){"use strict";t.r(a);var l=t(55),n=t(6),r=t(44),c=t(1),m=t.n(c),s=t(892),o=t(883),i=t(884),u=t(170),d=t(895),p=t(885),b=t(968),E=t(886),h=t(887),g=(t(25),t(10)),f=t(78),v=void 0;a.default=function(){var e=Object(c.useState)({hub_name:"",desc:"",email:"",phone:"",address:"",d_zone:"",cat:"",subcat:"",status:""}),a=Object(r.a)(e,2),t=a[0],N=a[1],y=function(e){N(Object(n.a)(Object(n.a)({},t),{},Object(l.a)({},e.target.name,e.target.value)))};return m.a.createElement("div",null,m.a.createElement(s.a,null,m.a.createElement(o.a,{className:"m-2"},m.a.createElement(i.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Customer")),m.a.createElement(i.a,null,m.a.createElement(f.b,{render:function(e){var a=e.history;return m.a.createElement(u.a,{className:"btn btn-danger float-right",onClick:function(){return a.push("/app/freshlist/customer/customerList")}},"Back")}}))),m.a.createElement(d.a,null,m.a.createElement(p.a,{className:"m-1",onSubmit:function(e){e.preventDefault(),console.log("submitHandler",t),g.a.post("/admin/addcategory",t).then((function(e){console.log(e),v.props.history.push("/app/freshlist/order/orderList")})).catch((function(e){console.log(e)}))}},m.a.createElement(o.a,{className:"mb-2"},m.a.createElement(i.a,{lg:"6",md:"6"},m.a.createElement(b.a,null,m.a.createElement(E.a,null,"Customer Name"),m.a.createElement(h.a,{type:"text",placeholder:"Customer_Name",name:"customer_name",value:t.customer_name,onChange:y}))),m.a.createElement(i.a,{lg:"6",md:"6"},m.a.createElement(b.a,null,m.a.createElement(E.a,null,"Email"),m.a.createElement(h.a,{type:"email",placeholder:"Enter Email",name:"email",value:t.email,onChange:y}))),m.a.createElement(i.a,{lg:"6",md:"6"},m.a.createElement(b.a,null,m.a.createElement(E.a,null,"Mobile No."),m.a.createElement(h.a,{type:"Number",placeholder:"Enter No.",name:"phone",value:t.phone,onChange:y}))),m.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},m.a.createElement(E.a,{className:"mb-1"},"Status"),m.a.createElement("div",{className:"form-label-group",onChange:y},m.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),m.a.createElement("span",{style:{marginRight:"20px"}},"Active"),m.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),m.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),m.a.createElement(o.a,{className:"m-2"},m.a.createElement(u.a,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add Customer"))))))}},968:function(e,a,t){"use strict";var l=t(5),n=t(11),r=t(1),c=t.n(r),m=t(2),s=t.n(m),o=t(7),i=t.n(o),u=t(4),d=["className","cssModule","row","disabled","check","inline","tag"],p={children:s.a.node,row:s.a.bool,check:s.a.bool,inline:s.a.bool,disabled:s.a.bool,tag:u.tagPropType,className:s.a.string,cssModule:s.a.object},b=function(e){var a=e.className,t=e.cssModule,r=e.row,m=e.disabled,s=e.check,o=e.inline,p=e.tag,b=Object(n.a)(e,d),E=Object(u.mapToCssModules)(i()(a,!!r&&"row",s?"form-check":"form-group",!(!s||!o)&&"form-check-inline",!(!s||!m)&&"disabled"),t);return"fieldset"===p&&(b.disabled=m),c.a.createElement(p,Object(l.a)({},b,{className:E}))};b.propTypes=p,b.defaultProps={tag:"div"},a.a=b}}]);
//# sourceMappingURL=342.c8a7a795.chunk.js.map