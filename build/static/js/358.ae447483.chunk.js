(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[358],{2853:function(e,a,t){"use strict";t.r(a),t.d(a,"AddTransactions",(function(){return N}));var n=t(55),l=t(17),r=t(18),c=t(19),s=t(20),o=t(1),m=t.n(o),i=t(892),u=t(883),d=t(884),h=t(170),b=t(895),p=t(885),E=t(968),g=t(886),f=t(887),v=(t(25),t(10)),y=t(78),N=function(e){Object(c.a)(t,e);var a=Object(s.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault(),v.a.post("/admin/addwallet",r.state).then((function(e){console.log(e.data.data)})).catch((function(e){console.log(e)}))},r.state={name:"",mobile_no:"",remarks:"",wallet_type:"",amount:""},r}return Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(i.a,null,m.a.createElement(u.a,{className:"m-2"},m.a.createElement(d.a,null,m.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Transactions")),m.a.createElement(d.a,null,m.a.createElement(y.b,{render:function(e){var a=e.history;return m.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/freshlist/wallet/walletType")}},"Back")}}))),m.a.createElement(b.a,null,m.a.createElement(p.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement(u.a,{className:"mb-2"},m.a.createElement(d.a,{lg:"6",md:"6"},m.a.createElement(E.a,null,m.a.createElement(g.a,null,"Name"),m.a.createElement(f.a,{type:"text",placeholder:" Name",name:"name",value:this.state.name,onChange:this.changeHandler}))),m.a.createElement(d.a,{lg:"6",md:"6"},m.a.createElement(E.a,null,m.a.createElement(g.a,null,"Mobile No. "),m.a.createElement(f.a,{type:"number",placeholder:"Mobile No.",name:"mobile_no",value:this.state.mobile_no,onChange:this.changeHandler}))),m.a.createElement(d.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(g.a,null,"Wallet Type"),m.a.createElement(f.a,{required:!0,type:"select",name:"wallet_type",placeholder:"Enter Iden Type",value:this.state.wallet_type,onChange:this.changeHandler},m.a.createElement("option",{value:"select"},"--Select--"),m.a.createElement("option",{value:"credit"},"Credit"),m.a.createElement("option",{value:"debit"},"Debit"))),m.a.createElement(d.a,{lg:"6",md:"6"},m.a.createElement(E.a,null,m.a.createElement(g.a,null,"Amount"),m.a.createElement(f.a,{type:"number",placeholder:"Enter Here",name:"amount",value:this.state.amount,onChange:this.changeHandler})))),m.a.createElement(u.a,null,m.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Submit"))))))}}]),t}(o.Component);a.default=N},968:function(e,a,t){"use strict";var n=t(5),l=t(11),r=t(1),c=t.n(r),s=t(2),o=t.n(s),m=t(7),i=t.n(m),u=t(4),d=["className","cssModule","row","disabled","check","inline","tag"],h={children:o.a.node,row:o.a.bool,check:o.a.bool,inline:o.a.bool,disabled:o.a.bool,tag:u.tagPropType,className:o.a.string,cssModule:o.a.object},b=function(e){var a=e.className,t=e.cssModule,r=e.row,s=e.disabled,o=e.check,m=e.inline,h=e.tag,b=Object(l.a)(e,d),p=Object(u.mapToCssModules)(i()(a,!!r&&"row",o?"form-check":"form-group",!(!o||!m)&&"form-check-inline",!(!o||!s)&&"disabled"),t);return"fieldset"===h&&(b.disabled=s),c.a.createElement(h,Object(n.a)({},b,{className:p}))};b.propTypes=h,b.defaultProps={tag:"div"},a.a=b}}]);
//# sourceMappingURL=358.ae447483.chunk.js.map