(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[349],{3001:function(e,t,a){"use strict";a.r(t),a.d(t,"EditProductType",(function(){return j}));var n=a(50),s=a(14),i=a(15),r=a(16),l=a(17),c=a(1),o=a.n(c),u=a(844),d=a(837),m=a(838),p=a(204),f=a(847),b=a(865),h=a(839),g=a(859),v=(a(22),a(8)),y=a(65),E=a(193),O=a.n(E),j=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e){var i;return Object(s.a)(this,a),(i=t.call(this,e)).onChangeHandler=function(e){i.setState({selectedFile:e.target.files[0]}),i.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},i.handleChange=function(e){i.setState({status:e.target.value})},i.changeHandler=function(e){i.setState(Object(n.a)({},e.target.name,e.target.value))},i.submitHandler=function(e){var t;e.preventDefault();var a=JSON.parse(localStorage.getItem("userData")),n=new FormData;n.append("user_id",null===a||void 0===a||null===(t=a.Userinfo)||void 0===t?void 0:t.id),n.append("brand_name",i.state.brandname),n.append("description",i.state.desc),n.append("status",i.state.status),v.a.post("/addbrand",n).then((function(e){var t,a;console.log(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.success),(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.success)&&(O()("Sucess","Brand Added Successfully"),i.setState({brandname:""}),i.setState({desc:""}),i.setState({status:""}),i.setState({selectedFile:""}))})).catch((function(e){console.log(e)}))},i.state={brandname:"",desc:"",brand_img:"",status:"",selectedFile:null,selectedName:""},i}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e,t=(null===(e=this.props)||void 0===e?void 0:e.match.params).id;console.log(t)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(u.a,null,o.a.createElement(d.a,{className:"m-2"},o.a.createElement(m.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Product Type")),o.a.createElement(m.a,null,o.a.createElement(y.b,{render:function(e){var t=e.history;return o.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/Producttype/BodyStyleList")}},"Back")}}))),o.a.createElement(f.a,null,o.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(d.a,{className:"mb-2"},o.a.createElement(m.a,{lg:"6",md:"6",className:"mb-1"},o.a.createElement(h.a,null,"Title"),o.a.createElement(g.a,{type:"text",placeholder:"Branch Name",name:"brandname",value:this.state.brandname,onChange:this.changeHandler})),o.a.createElement(m.a,{lg:"6",md:"6",className:"mb-1"},o.a.createElement(h.a,null,"Description"),o.a.createElement(g.a,{type:"textarea",placeholder:"Description",name:"desc",value:this.state.desc,onChange:this.changeHandler})),o.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},o.a.createElement(h.a,{className:"mb-1"},"Status"),o.a.createElement("div",{className:"form-label-group",onChange:this.handleChange},o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),o.a.createElement("span",{style:{marginRight:"20px"}},"Active"),o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Deactive"}),o.a.createElement("span",{style:{marginRight:"3px"}},"Deactive")))),o.a.createElement(d.a,null,o.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1 mx-1"},"Add"))))))}}]),a}(c.Component);t.default=j},859:function(e,t,a){"use strict";var n=a(6),s=a(9),i=a(12),r=a(21),l=a(1),c=a.n(l),o=a(2),u=a.n(o),d=a(5),m=a.n(d),p=a(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(i.a)(a)),a.focus=a.focus.bind(Object(i.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,i=e.type,r=e.bsSize,l=e.valid,o=e.invalid,u=e.tag,d=e.addon,b=e.plaintext,h=e.innerRef,g=Object(s.a)(e,f),v=["radio","checkbox"].indexOf(i)>-1,y=new RegExp("\\D","g"),E=u||("select"===i||"textarea"===i?i:"input"),O="form-control";b?(O+="-plaintext",E=u||"input"):"file"===i?O+="-file":"range"===i?O+="-range":v&&(O=d?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=g.size,delete g.size);var j=Object(p.mapToCssModules)(m()(t,o&&"is-invalid",l&&"is-valid",!!r&&"form-control-"+r,O),a);return("input"===E||u&&"function"===typeof u)&&(g.type=i),g.children&&!b&&"select"!==i&&"string"===typeof E&&"select"!==E&&(Object(p.warnOnce)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(E,Object(n.a)({},g,{ref:h,className:j,"aria-invalid":o}))},t}(c.a.Component);h.propTypes=b,h.defaultProps={type:"text"},t.a=h},865:function(e,t,a){"use strict";var n=a(6),s=a(9),i=a(12),r=a(21),l=a(1),c=a.n(l),o=a(2),u=a.n(o),d=a(5),m=a.n(d),p=a(3),f=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(i.a)(a)),a.submit=a.submit.bind(Object(i.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,i=e.inline,r=e.tag,l=e.innerRef,o=Object(s.a)(e,f),u=Object(p.mapToCssModules)(m()(t,!!i&&"form-inline"),a);return c.a.createElement(r,Object(n.a)({},o,{ref:l,className:u}))},t}(l.Component);h.propTypes=b,h.defaultProps={tag:"form"},t.a=h}}]);
//# sourceMappingURL=349.2c1e5f3d.chunk.js.map