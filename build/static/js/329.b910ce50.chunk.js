(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[329],{2850:function(e,a,t){"use strict";t.r(a),t.d(a,"AddTransactions",(function(){return O}));var n=t(50),l=t(14),r=t(15),s=t(16),i=t(17),c=t(1),o=t.n(c),u=t(844),m=t(837),d=t(838),p=t(204),f=t(847),b=t(865),h=t(896),g=t(839),v=t(859),E=(t(22),t(9)),y=t(65),O=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(l.a)(this,t),(r=a.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault(),E.a.post("/admin/addwallet",r.state).then((function(e){console.log(e.data.data)})).catch((function(e){console.log(e)}))},r.state={name:"",mobile_no:"",remarks:"",wallet_type:"",amount:""},r}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(u.a,null,o.a.createElement(m.a,{className:"m-2"},o.a.createElement(d.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Transactions")),o.a.createElement(d.a,null,o.a.createElement(y.b,{render:function(e){var a=e.history;return o.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/freshlist/wallet/walletType")}},"Back")}}))),o.a.createElement(f.a,null,o.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(m.a,{className:"mb-2"},o.a.createElement(d.a,{lg:"6",md:"6"},o.a.createElement(h.a,null,o.a.createElement(g.a,null,"Name"),o.a.createElement(v.a,{type:"text",placeholder:" Name",name:"name",value:this.state.name,onChange:this.changeHandler}))),o.a.createElement(d.a,{lg:"6",md:"6"},o.a.createElement(h.a,null,o.a.createElement(g.a,null,"Mobile No. "),o.a.createElement(v.a,{type:"number",placeholder:"Mobile No.",name:"mobile_no",value:this.state.mobile_no,onChange:this.changeHandler}))),o.a.createElement(d.a,{lg:"6",md:"6",className:"mb-1"},o.a.createElement(g.a,null,"Wallet Type"),o.a.createElement(v.a,{required:!0,type:"select",name:"wallet_type",placeholder:"Enter Iden Type",value:this.state.wallet_type,onChange:this.changeHandler},o.a.createElement("option",{value:"select"},"--Select--"),o.a.createElement("option",{value:"credit"},"Credit"),o.a.createElement("option",{value:"debit"},"Debit"))),o.a.createElement(d.a,{lg:"6",md:"6"},o.a.createElement(h.a,null,o.a.createElement(g.a,null,"Amount"),o.a.createElement(v.a,{type:"number",placeholder:"Enter Here",name:"amount",value:this.state.amount,onChange:this.changeHandler})))),o.a.createElement(m.a,null,o.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Submit"))))))}}]),t}(c.Component);a.default=O},859:function(e,a,t){"use strict";var n=t(6),l=t(8),r=t(12),s=t(21),i=t(1),c=t.n(i),o=t(2),u=t.n(o),m=t(5),d=t.n(m),p=t(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,s=e.bsSize,i=e.valid,o=e.invalid,u=e.tag,m=e.addon,b=e.plaintext,h=e.innerRef,g=Object(l.a)(e,f),v=["radio","checkbox"].indexOf(r)>-1,E=new RegExp("\\D","g"),y=u||("select"===r||"textarea"===r?r:"input"),O="form-control";b?(O+="-plaintext",y=u||"input"):"file"===r?O+="-file":"range"===r?O+="-range":v&&(O=m?null:"form-check-input"),g.size&&E.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=g.size,delete g.size);var j=Object(p.mapToCssModules)(d()(a,o&&"is-invalid",i&&"is-valid",!!s&&"form-control-"+s,O),t);return("input"===y||u&&"function"===typeof u)&&(g.type=r),g.children&&!b&&"select"!==r&&"string"===typeof y&&"select"!==y&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(y,Object(n.a)({},g,{ref:h,className:j,"aria-invalid":o}))},a}(c.a.Component);h.propTypes=b,h.defaultProps={type:"text"},a.a=h},865:function(e,a,t){"use strict";var n=t(6),l=t(8),r=t(12),s=t(21),i=t(1),c=t.n(i),o=t(2),u=t.n(o),m=t(5),d=t.n(m),p=t(3),f=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,s=e.tag,i=e.innerRef,o=Object(l.a)(e,f),u=Object(p.mapToCssModules)(d()(a,!!r&&"form-inline"),t);return c.a.createElement(s,Object(n.a)({},o,{ref:i,className:u}))},a}(i.Component);h.propTypes=b,h.defaultProps={tag:"form"},a.a=h},896:function(e,a,t){"use strict";var n=t(6),l=t(8),r=t(1),s=t.n(r),i=t(2),c=t.n(i),o=t(5),u=t.n(o),m=t(3),d=["className","cssModule","row","disabled","check","inline","tag"],p={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:m.tagPropType,className:c.a.string,cssModule:c.a.object},f=function(e){var a=e.className,t=e.cssModule,r=e.row,i=e.disabled,c=e.check,o=e.inline,p=e.tag,f=Object(l.a)(e,d),b=Object(m.mapToCssModules)(u()(a,!!r&&"row",c?"form-check":"form-group",!(!c||!o)&&"form-check-inline",!(!c||!i)&&"disabled"),t);return"fieldset"===p&&(f.disabled=i),s.a.createElement(p,Object(n.a)({},f,{className:b}))};f.propTypes=p,f.defaultProps={tag:"div"},a.a=f}}]);
//# sourceMappingURL=329.b910ce50.chunk.js.map