(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[351],{3016:function(e,a,t){"use strict";t.r(a),t.d(a,"AddBrand",(function(){return N}));var n=t(50),s=t(14),r=t(15),i=t(16),l=t(17),c=t(1),o=t.n(c),d=t(844),u=t(837),m=t(838),p=t(204),f=t(847),b=t(878),h=t(839),g=t(859),v=(t(22),t(10)),y=t(65),E=t(193),O=t.n(E),N=function(e){Object(i.a)(t,e);var a=Object(l.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.handleChange=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){var a;e.preventDefault();var t=JSON.parse(localStorage.getItem("userData")),n=new FormData;n.append("user_id",null===t||void 0===t||null===(a=t.Userinfo)||void 0===a?void 0:a.id),n.append("brand_name",r.state.brandname),n.append("description",r.state.desc),n.append("status",r.state.status),v.a.post("/addbrand",n).then((function(e){var a,t;console.log(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.success),(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.success)&&(O()("Sucess","Brand Added Successfully"),r.setState({brandname:""}),r.setState({desc:""}),r.setState({status:""}),r.setState({selectedFile:""}))})).catch((function(e){console.log(e)}))},r.state={brandname:"",desc:"",brand_img:"",status:"",selectedFile:null,selectedName:""},r}return Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(d.a,null,o.a.createElement(u.a,{className:"m-2"},o.a.createElement(m.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Brand here")),o.a.createElement(m.a,null,o.a.createElement(y.b,{render:function(e){var a=e.history;return o.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/freshlist/brand/brandList")}},"Back")}}))),o.a.createElement(f.a,null,o.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(u.a,{className:"mb-2"},o.a.createElement(m.a,{lg:"6",md:"6",className:"mb-1"},o.a.createElement(h.a,null,"Brand Name"),o.a.createElement(g.a,{type:"text",placeholder:"Branch Name",name:"brandname",value:this.state.brandname,onChange:this.changeHandler})),o.a.createElement(m.a,{lg:"6",md:"6",className:"mb-1"},o.a.createElement(h.a,null,"Description"),o.a.createElement(g.a,{type:"textarea",placeholder:"Description",name:"desc",value:this.state.desc,onChange:this.changeHandler})),o.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},o.a.createElement(h.a,{className:"mb-1"},"Status"),o.a.createElement("div",{className:"form-label-group",onChange:this.handleChange},o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),o.a.createElement("span",{style:{marginRight:"20px"}},"Active"),o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Deactive"}),o.a.createElement("span",{style:{marginRight:"3px"}},"Deactive")))),o.a.createElement(u.a,null,o.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1 mx-1"},"Add"))))))}}]),t}(c.Component);a.default=N},859:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(12),i=t(21),l=t(1),c=t.n(l),o=t(2),d=t.n(o),u=t(5),m=t.n(u),p=t(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(i.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,i=e.bsSize,l=e.valid,o=e.invalid,d=e.tag,u=e.addon,b=e.plaintext,h=e.innerRef,g=Object(s.a)(e,f),v=["radio","checkbox"].indexOf(r)>-1,y=new RegExp("\\D","g"),E=d||("select"===r||"textarea"===r?r:"input"),O="form-control";b?(O+="-plaintext",E=d||"input"):"file"===r?O+="-file":"range"===r?O+="-range":v&&(O=u?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=g.size,delete g.size);var N=Object(p.mapToCssModules)(m()(a,o&&"is-invalid",l&&"is-valid",!!i&&"form-control-"+i,O),t);return("input"===E||d&&"function"===typeof d)&&(g.type=r),g.children&&!b&&"select"!==r&&"string"===typeof E&&"select"!==E&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(E,Object(n.a)({},g,{ref:h,className:N,"aria-invalid":o}))},a}(c.a.Component);h.propTypes=b,h.defaultProps={type:"text"},a.a=h},878:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(12),i=t(21),l=t(1),c=t.n(l),o=t(2),d=t.n(o),u=t(5),m=t.n(u),p=t(3),f=["className","cssModule","inline","tag","innerRef"],b={children:d.a.node,inline:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(i.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,i=e.tag,l=e.innerRef,o=Object(s.a)(e,f),d=Object(p.mapToCssModules)(m()(a,!!r&&"form-inline"),t);return c.a.createElement(i,Object(n.a)({},o,{ref:l,className:d}))},a}(l.Component);h.propTypes=b,h.defaultProps={tag:"form"},a.a=h}}]);
//# sourceMappingURL=351.7ba71d60.chunk.js.map