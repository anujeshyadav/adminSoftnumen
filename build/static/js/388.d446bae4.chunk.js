(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[388],{2847:function(e,t,a){"use strict";a.r(t),a.d(t,"FilterOption",(function(){return C}));var n=a(55),l=a(17),r=a(18),c=a(19),s=a(20),o=a(1),m=a.n(o),i=a(883),u=a(884),d=a(170),p=a(892),h=a(895),E=a(885),g=a(887),f=a(886),v=a(873),y=a(25),b=a(10),C=function(e){Object(c.a)(a,e);var t=Object(s.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.changeHandler1=function(e){r.setState({status:e.target.value})},r.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("name",r.state.name),t.append("sortorder",r.state.sortorder),t.append("desc",r.state.desc),t.append("status",r.state.status),t.append("product_img",r.state.selectedFile,r.state.selectedName),b.a.post(" /addproductcategory",t).then((function(e){console.log(e),r.props.history.push("/app/category/category")})).catch((function(e){console.log(e)}))},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.state={name:"",selectedFile:null,selectedName:"",sortorder:"",desc:"",product_img:"",status:""},r}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return m.a.createElement("div",null,m.a.createElement(i.a,null,m.a.createElement(u.a,{className:"float-left"},"Wallet"),m.a.createElement(u.a,{className:"12",style:{marginBottom:"15px",marginLeft:"75rem"}},m.a.createElement(d.a.Ripple,{color:"primary",onClick:function(){return y.a.push("/app/freshlist/customer/addFund")}},"Add Fund"))),m.a.createElement("div",null,m.a.createElement(p.a,null,m.a.createElement(i.a,{className:"m-1"},m.a.createElement(u.a,null,m.a.createElement("h3",{"col-sm-6":!0,className:"float-left"},"Filter Option"))),m.a.createElement(h.a,null,m.a.createElement(E.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement(i.a,{className:"mb-2"},m.a.createElement(u.a,null,m.a.createElement("h5",null,"From"),m.a.createElement(g.a,{required:!0,type:"date",name:"date",placeholder:"Enter Date",value:this.state.date,onChange:this.changeHandler})),m.a.createElement(u.a,null,m.a.createElement("h5",null,"To"),m.a.createElement(g.a,{required:!0,type:"date",name:"date",placeholder:"Enter Date",value:this.state.date,onChange:this.changeHandler}))),m.a.createElement(i.a,null,m.a.createElement(u.a,{lg:"6",md:"6",className:"mb-2"},m.a.createElement(f.a,null,"All"),m.a.createElement(v.a,{type:"select",name:"type",value:this.state.type,onChange:this.changeHandler},m.a.createElement("option",null,"--All--"),m.a.createElement("option",{value:"1"},"1"),m.a.createElement("option",{value:"2"},"2"),m.a.createElement("option",{value:"3"},"3"))),m.a.createElement(u.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(f.a,null,"Select Customer"),m.a.createElement(v.a,{type:"select",name:"desc",value:this.state.desc,onChange:this.changeHandler},m.a.createElement("option",null,"---Select Customer---"),m.a.createElement("option",{value:"1"},"1"),m.a.createElement("option",{value:"2"},"2"),m.a.createElement("option",{value:"3"},"3")))),m.a.createElement("div",{style:{marginBottom:"15px",float:"right"}},m.a.createElement(d.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Filter")))))))}}]),a}(o.Component);t.default=C}}]);
//# sourceMappingURL=388.d446bae4.chunk.js.map