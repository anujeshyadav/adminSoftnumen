(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[356],{2849:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return R}));var n=a(50),s=a(14),r=a(15),i=a(16),l=a(17),o=a(1),c=a.n(o),u=a(844),m=a(845),p=a(846),f=a(847),d=a(865),b=a(837),h=a(838),g=a(839),v=a(827),y=a(859),O=a(204),E=a(51),j=a.n(E),R=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault(),j.a.post("http://35.154.86.59/api/user/customersignup",r.state).then((function(e){console.log(e),alert("Customer Added Successful"),r.props.history.push("/app/customer/customerList")})).catch((function(e){console.log(e)}))},r.state={first_name:"",last_name:"",customer_email:"",mobile_no:"",sortorder:"",selectedFile:null,status:""},r}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(u.a,null,c.a.createElement(m.a,null,c.a.createElement(p.a,null,"Add Fund")),c.a.createElement(f.a,null,c.a.createElement(d.a,{className:"m-1",onSubmit:this.submitHandler},c.a.createElement(b.a,null,c.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(g.a,null,"Customer"),c.a.createElement(v.a,{type:"select",name:"type",value:this.state.type,onChange:this.changeHandler},c.a.createElement("option",null,"--Select Customer--"),c.a.createElement("option",{value:"1"},"1"),c.a.createElement("option",{value:"2"},"2"),c.a.createElement("option",{value:"3"},"3"))),c.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(g.a,null,"Fund"),c.a.createElement(y.a,{required:!0,type:"text",name:"last_name",placeholder:"Enter Last Name",value:this.state.last_name,onChange:this.changeHandler}))),c.a.createElement(b.a,null,c.a.createElement(h.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(O.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Submit")))))))}}]),a}(o.Component)},859:function(e,t,a){"use strict";var n=a(6),s=a(9),r=a(12),i=a(21),l=a(1),o=a.n(l),c=a(2),u=a.n(c),m=a(5),p=a.n(m),f=a(3),d=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,i=e.bsSize,l=e.valid,c=e.invalid,u=e.tag,m=e.addon,b=e.plaintext,h=e.innerRef,g=Object(s.a)(e,d),v=["radio","checkbox"].indexOf(r)>-1,y=new RegExp("\\D","g"),O=u||("select"===r||"textarea"===r?r:"input"),E="form-control";b?(E+="-plaintext",O=u||"input"):"file"===r?E+="-file":"range"===r?E+="-range":v&&(E=m?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=g.size,delete g.size);var j=Object(f.mapToCssModules)(p()(t,c&&"is-invalid",l&&"is-valid",!!i&&"form-control-"+i,E),a);return("input"===O||u&&"function"===typeof u)&&(g.type=r),g.children&&!b&&"select"!==r&&"string"===typeof O&&"select"!==O&&(Object(f.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),o.a.createElement(O,Object(n.a)({},g,{ref:h,className:j,"aria-invalid":c}))},t}(o.a.Component);h.propTypes=b,h.defaultProps={type:"text"},t.a=h},865:function(e,t,a){"use strict";var n=a(6),s=a(9),r=a(12),i=a(21),l=a(1),o=a.n(l),c=a(2),u=a.n(c),m=a(5),p=a.n(m),f=a(3),d=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.submit=a.submit.bind(Object(r.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.inline,i=e.tag,l=e.innerRef,c=Object(s.a)(e,d),u=Object(f.mapToCssModules)(p()(t,!!r&&"form-inline"),a);return o.a.createElement(i,Object(n.a)({},c,{ref:l,className:u}))},t}(l.Component);h.propTypes=b,h.defaultProps={tag:"form"},t.a=h}}]);
//# sourceMappingURL=356.cd4cb26a.chunk.js.map