(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[345],{3016:function(e,t,a){"use strict";a.r(t),a.d(t,"AddVarient",(function(){return j}));var n=a(50),s=a(14),r=a(15),i=a(16),l=a(17),c=a(1),o=a.n(c),u=a(845),d=a(838),m=a(839),p=a(204),f=a(848),b=a(879),h=a(840),g=a(860),v=(a(22),a(10)),y=a(65),E=a(193),O=a.n(E),j=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(s.a)(this,a),(r=t.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.handleChange=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){var t;e.preventDefault();var a=JSON.parse(localStorage.getItem("userData")),n=new FormData;n.append("user_id",null===a||void 0===a||null===(t=a.Userinfo)||void 0===t?void 0:t.id),n.append("brand_name",r.state.brandname),n.append("description",r.state.desc),n.append("status",r.state.status),v.a.post("/addbrand",n).then((function(e){var t,a;console.log(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.success),(null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.success)&&(O()("Sucess","Brand Added Successfully"),r.setState({brandname:""}),r.setState({desc:""}),r.setState({status:""}),r.setState({selectedFile:""}))})).catch((function(e){console.log(e)}))},r.state={brandname:"",desc:"",brand_img:"",status:"",selectedFile:null,selectedName:""},r}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(u.a,null,o.a.createElement(d.a,{className:"m-2"},o.a.createElement(m.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Varient")),o.a.createElement(m.a,null,o.a.createElement(y.b,{render:function(e){var t=e.history;return o.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/Producttype/VariantList")}},"Back")}}))),o.a.createElement(f.a,null,o.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(d.a,{className:"mb-2"},o.a.createElement(m.a,{lg:"6",md:"6",className:"mb-1"},o.a.createElement(h.a,null,"Title"),o.a.createElement(g.a,{type:"text",placeholder:"Branch Name",name:"brandname",value:this.state.brandname,onChange:this.changeHandler})),o.a.createElement(m.a,{lg:"6",md:"6",className:"mb-1"},o.a.createElement(h.a,null,"Description"),o.a.createElement(g.a,{type:"textarea",placeholder:"Description",name:"desc",value:this.state.desc,onChange:this.changeHandler})),o.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},o.a.createElement(h.a,{className:"mb-1"},"Status"),o.a.createElement("div",{className:"form-label-group",onChange:this.handleChange},o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),o.a.createElement("span",{style:{marginRight:"20px"}},"Active"),o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Deactive"}),o.a.createElement("span",{style:{marginRight:"3px"}},"Deactive")))),o.a.createElement(d.a,null,o.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1 mx-1"},"Add"))))))}}]),a}(c.Component);t.default=j},860:function(e,t,a){"use strict";var n=a(6),s=a(7),r=a(12),i=a(21),l=a(1),c=a.n(l),o=a(2),u=a.n(o),d=a(5),m=a.n(d),p=a(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,i=e.bsSize,l=e.valid,o=e.invalid,u=e.tag,d=e.addon,b=e.plaintext,h=e.innerRef,g=Object(s.a)(e,f),v=["radio","checkbox"].indexOf(r)>-1,y=new RegExp("\\D","g"),E=u||("select"===r||"textarea"===r?r:"input"),O="form-control";b?(O+="-plaintext",E=u||"input"):"file"===r?O+="-file":"range"===r?O+="-range":v&&(O=d?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=g.size,delete g.size);var j=Object(p.mapToCssModules)(m()(t,o&&"is-invalid",l&&"is-valid",!!i&&"form-control-"+i,O),a);return("input"===E||u&&"function"===typeof u)&&(g.type=r),g.children&&!b&&"select"!==r&&"string"===typeof E&&"select"!==E&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(E,Object(n.a)({},g,{ref:h,className:j,"aria-invalid":o}))},t}(c.a.Component);h.propTypes=b,h.defaultProps={type:"text"},t.a=h},879:function(e,t,a){"use strict";var n=a(6),s=a(7),r=a(12),i=a(21),l=a(1),c=a.n(l),o=a(2),u=a.n(o),d=a(5),m=a.n(d),p=a(3),f=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:p.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.submit=a.submit.bind(Object(r.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.inline,i=e.tag,l=e.innerRef,o=Object(s.a)(e,f),u=Object(p.mapToCssModules)(m()(t,!!r&&"form-inline"),a);return c.a.createElement(i,Object(n.a)({},o,{ref:l,className:u}))},t}(l.Component);h.propTypes=b,h.defaultProps={tag:"form"},t.a=h}}]);
//# sourceMappingURL=345.35fd7b1f.chunk.js.map