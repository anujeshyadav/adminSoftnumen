(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[344],{3012:function(e,t,a){"use strict";a.r(t),a.d(t,"AddValveType",(function(){return j}));var n=a(50),s=a(14),l=a(15),r=a(16),i=a(17),c=a(1),o=a.n(c),u=a(844),d=a(837),m=a(838),p=a(204),f=a(847),b=a(878),h=a(839),g=a(859),v=(a(22),a(10)),y=a(65),E=a(193),O=a.n(E),j=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(e){var l;return Object(s.a)(this,a),(l=t.call(this,e)).onChangeHandler=function(e){l.setState({selectedFile:e.target.files[0]}),l.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},l.handleChange=function(e){l.setState({status:e.target.value})},l.changeHandler=function(e){l.setState(Object(n.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){var t;e.preventDefault();var a=JSON.parse(localStorage.getItem("userData")),n=new FormData;n.append("user_id",null===a||void 0===a||null===(t=a.Userinfo)||void 0===t?void 0:t.id),n.append("brand_name",l.state.brandname),n.append("description",l.state.desc),n.append("status",l.state.status),v.a.post("/addbrand",n).then((function(e){var t,a;console.log(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.success),(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.success)&&(O()("Sucess","Brand Added Successfully"),l.setState({brandname:""}),l.setState({desc:""}),l.setState({status:""}),l.setState({selectedFile:""}))})).catch((function(e){console.log(e)}))},l.state={brandname:"",desc:"",brand_img:"",status:"",selectedFile:null,selectedName:""},l}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(u.a,null,o.a.createElement(d.a,{className:"m-2"},o.a.createElement(m.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Valve type")),o.a.createElement(m.a,null,o.a.createElement(y.b,{render:function(e){var t=e.history;return o.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/Producttype/ValvesTypeList")}},"Back")}}))),o.a.createElement(f.a,null,o.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(d.a,{className:"mb-2"},o.a.createElement(m.a,{lg:"6",md:"6",className:"mb-1"},o.a.createElement(h.a,null,"Title"),o.a.createElement(g.a,{type:"text",placeholder:"Branch Name",name:"brandname",value:this.state.brandname,onChange:this.changeHandler})),o.a.createElement(m.a,{lg:"6",md:"6",className:"mb-1"},o.a.createElement(h.a,null,"Description"),o.a.createElement(g.a,{type:"textarea",placeholder:"Description",name:"desc",value:this.state.desc,onChange:this.changeHandler})),o.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},o.a.createElement(h.a,{className:"mb-1"},"Status"),o.a.createElement("div",{className:"form-label-group",onChange:this.handleChange},o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),o.a.createElement("span",{style:{marginRight:"20px"}},"Active"),o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Deactive"}),o.a.createElement("span",{style:{marginRight:"3px"}},"Deactive")))),o.a.createElement(d.a,null,o.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1 mx-1"},"Add"))))))}}]),a}(c.Component);t.default=j},859:function(e,t,a){"use strict";var n=a(6),s=a(7),l=a(12),r=a(21),i=a(1),c=a.n(i),o=a(2),u=a.n(o),d=a(5),m=a.n(d),p=a(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(l.a)(a)),a.focus=a.focus.bind(Object(l.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.type,r=e.bsSize,i=e.valid,o=e.invalid,u=e.tag,d=e.addon,b=e.plaintext,h=e.innerRef,g=Object(s.a)(e,f),v=["radio","checkbox"].indexOf(l)>-1,y=new RegExp("\\D","g"),E=u||("select"===l||"textarea"===l?l:"input"),O="form-control";b?(O+="-plaintext",E=u||"input"):"file"===l?O+="-file":"range"===l?O+="-range":v&&(O=d?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=g.size,delete g.size);var j=Object(p.mapToCssModules)(m()(t,o&&"is-invalid",i&&"is-valid",!!r&&"form-control-"+r,O),a);return("input"===E||u&&"function"===typeof u)&&(g.type=l),g.children&&!b&&"select"!==l&&"string"===typeof E&&"select"!==E&&(Object(p.warnOnce)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(E,Object(n.a)({},g,{ref:h,className:j,"aria-invalid":o}))},t}(c.a.Component);h.propTypes=b,h.defaultProps={type:"text"},t.a=h},878:function(e,t,a){"use strict";var n=a(6),s=a(7),l=a(12),r=a(21),i=a(1),c=a.n(i),o=a(2),u=a.n(o),d=a(5),m=a.n(d),p=a(3),f=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(l.a)(a)),a.submit=a.submit.bind(Object(l.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.inline,r=e.tag,i=e.innerRef,o=Object(s.a)(e,f),u=Object(p.mapToCssModules)(m()(t,!!l&&"form-inline"),a);return c.a.createElement(r,Object(n.a)({},o,{ref:i,className:u}))},t}(i.Component);h.propTypes=b,h.defaultProps={tag:"form"},t.a=h}}]);
//# sourceMappingURL=344.0f7ca3d6.chunk.js.map