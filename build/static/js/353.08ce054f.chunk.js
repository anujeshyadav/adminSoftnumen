(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[353],{3018:function(e,a,t){"use strict";t.r(a),t.d(a,"EditBrand",(function(){return E}));var n=t(50),s=t(14),i=t(15),r=t(16),l=t(17),o=t(1),c=t.n(o),d=t(844),u=t(837),p=t(838),m=t(204),f=t(847),h=t(878),b=t(839),v=t(859),g=(t(22),t(10)),y=t(65),E=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(e){var i;return Object(s.a)(this,t),(i=a.call(this,e)).onChangeHandler=function(e){i.setState({selectedFile:e.target.files[0]}),i.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},i.handleChange=function(e){i.setState({status:e.target.value})},i.changeHandler=function(e){i.setState(Object(n.a)({},e.target.name,e.target.value))},i.submitHandler=function(e){var a,t;e.preventDefault();var n=i.props.match.params.id,s=JSON.parse(localStorage.getItem("userData")),r=new FormData;r.append("user_id",null===s||void 0===s||null===(a=s.Userinfo)||void 0===a?void 0:a.id),r.append("role",null===s||void 0===s||null===(t=s.Userinfo)||void 0===t?void 0:t.role),r.append("brand_name",i.state.name),r.append("description",i.state.desc),r.append("status",i.state.status),r.append("brand_id",n),g.a.post("/editbrandsubmit",r).then((function(e){(null===e||void 0===e?void 0:e.data.success)&&i.props.history.push("/app/freshlist/brand/brandList")})).catch((function(e){console.log(e)}))},i.state={name:"",desc:"",brand_img:"",status:"",selectedFile:null,selectedName:""},i}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e,a,t=this;console.log(window);var n=this.props.match.params.id,s=JSON.parse(localStorage.getItem("userData")),i=new FormData;i.append("user_id",null===s||void 0===s||null===(e=s.Userinfo)||void 0===e?void 0:e.id),i.append("role",null===s||void 0===s||null===(a=s.Userinfo)||void 0===a?void 0:a.role),i.append("brand_id",n),g.a.post("/getviewbrand",i).then((function(e){var a,n,s,i;console.log(null===(a=e.data)||void 0===a||null===(n=a.data)||void 0===n?void 0:n.brands[0]);var r=null===(s=e.data)||void 0===s||null===(i=s.data)||void 0===i?void 0:i.brands[0];t.setState({name:null===r||void 0===r?void 0:r.brand_name,desc:r.description,status:r.status})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(d.a,null,c.a.createElement(u.a,{className:"m-2"},c.a.createElement(p.a,null,c.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Brand")),c.a.createElement(p.a,null,c.a.createElement(y.b,{render:function(e){var a=e.history;return c.a.createElement(m.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/freshlist/brand/brandList")}},"Back")}}))),c.a.createElement(f.a,null,c.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},c.a.createElement(u.a,{className:"mb-2"},c.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},c.a.createElement(b.a,null,"Brand Name"),c.a.createElement(v.a,{type:"text",placeholder:"Branch Name",name:"name",value:this.state.name,onChange:this.changeHandler})),c.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},c.a.createElement(b.a,null,"Description"),c.a.createElement(v.a,{type:"text",placeholder:"Description",name:"desc",value:this.state.desc,onChange:this.changeHandler})),c.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},c.a.createElement(b.a,{className:"mb-1"},"Status"),c.a.createElement("div",{className:"form-label-group",onChange:this.handleChange},c.a.createElement("input",{checked:"Active"===this.state.status,style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),c.a.createElement("span",{style:{marginRight:"20px"}},"Active"),c.a.createElement("input",{checked:"Deactive"===this.state.status,style:{marginRight:"3px"},type:"radio",name:"status",value:"Deactive"}),c.a.createElement("span",{style:{marginRight:"3px"}},"Deactive")))),c.a.createElement(u.a,null,c.a.createElement(m.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update Brand"))))))}}]),t}(o.Component);a.default=E},859:function(e,a,t){"use strict";var n=t(6),s=t(7),i=t(12),r=t(21),l=t(1),o=t.n(l),c=t(2),d=t.n(c),u=t(5),p=t.n(u),m=t(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:m.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(i.a)(t)),t.focus=t.focus.bind(Object(i.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,i=e.type,r=e.bsSize,l=e.valid,c=e.invalid,d=e.tag,u=e.addon,h=e.plaintext,b=e.innerRef,v=Object(s.a)(e,f),g=["radio","checkbox"].indexOf(i)>-1,y=new RegExp("\\D","g"),E=d||("select"===i||"textarea"===i?i:"input"),O="form-control";h?(O+="-plaintext",E=d||"input"):"file"===i?O+="-file":"range"===i?O+="-range":g&&(O=u?null:"form-check-input"),v.size&&y.test(v.size)&&(Object(m.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=v.size,delete v.size);var N=Object(m.mapToCssModules)(p()(a,c&&"is-invalid",l&&"is-valid",!!r&&"form-control-"+r,O),t);return("input"===E||d&&"function"===typeof d)&&(v.type=i),v.children&&!h&&"select"!==i&&"string"===typeof E&&"select"!==E&&(Object(m.warnOnce)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete v.children),o.a.createElement(E,Object(n.a)({},v,{ref:b,className:N,"aria-invalid":c}))},a}(o.a.Component);b.propTypes=h,b.defaultProps={type:"text"},a.a=b},878:function(e,a,t){"use strict";var n=t(6),s=t(7),i=t(12),r=t(21),l=t(1),o=t.n(l),c=t(2),d=t.n(c),u=t(5),p=t.n(u),m=t(3),f=["className","cssModule","inline","tag","innerRef"],h={children:d.a.node,inline:d.a.bool,tag:m.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(i.a)(t)),t.submit=t.submit.bind(Object(i.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,i=e.inline,r=e.tag,l=e.innerRef,c=Object(s.a)(e,f),d=Object(m.mapToCssModules)(p()(a,!!i&&"form-inline"),t);return o.a.createElement(r,Object(n.a)({},c,{ref:l,className:d}))},a}(l.Component);b.propTypes=h,b.defaultProps={tag:"form"},a.a=b}}]);
//# sourceMappingURL=353.08ce054f.chunk.js.map