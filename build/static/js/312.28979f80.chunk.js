(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[312],{2856:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return j}));var n=t(50),l=t(14),s=t(15),r=t(16),i=t(17),c=t(1),o=t.n(c),m=t(837),u=t(838),d=t(604),p=t(102),f=t(844),h=t(204),b=t(847),g=t(878),v=t(932),E=t(839),y=t(859),N=t(10),O=(t(22),t(65)),j=(t(193),function(e){Object(r.a)(t,e);var a=Object(i.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=a.call(this,e)).changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault();var a=s.props.match.params.id;console.log(a),N.a.post("/admin/edit_order/".concat(a),s.state).then((function(e){console.log(e),s.props.history.push("/app/softNumen/order/placeorder")})).catch((function(e){console.log(e.response.data)}))},s.state={name:"",email:"",mobile:"",delivery_zone:"",status:""},s}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;N.a.get("/user/getviewone/".concat(a)).then((function(a){console.log("getviewone",a.data.data),e.setState({name:a.data.data.name,email:a.data.data.email,mobile:a.data.data.mobile,delivery_zone:a.data.data.delivery_zone,status:a.data.data.status})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(m.a,null,o.a.createElement(u.a,{sm:"12"},o.a.createElement("div",null,o.a.createElement(d.a,{listTag:"div"},o.a.createElement(p.a,{href:"/analyticsDashboard",tag:"a"},"Home"),o.a.createElement(p.a,{href:"/app/freshlist/hubs/hubList",tag:"a"},"Customer List"),o.a.createElement(p.a,{active:!0},"Edit Customer List"))))),o.a.createElement(f.a,null,o.a.createElement(m.a,{className:"m-2"},o.a.createElement(u.a,null,o.a.createElement("h1",{className:"float-left"},"Edit Resource List")),o.a.createElement(u.a,null,o.a.createElement(O.b,{render:function(e){var a=e.history;return o.a.createElement(h.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/freshlist/hubs/hubList")}},"Back")}}))),o.a.createElement(b.a,null,o.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(m.a,null,o.a.createElement(u.a,{lg:"5",md:"5",className:"ml-2"},o.a.createElement(v.a,null,o.a.createElement(E.a,null,"Hub Name"),o.a.createElement(y.a,{type:"text",placeholder:"Hub Name",name:"username",value:this.state.username,onChange:this.changeHandler}))),o.a.createElement(u.a,{lg:"5",md:"5",className:"ml-2"},o.a.createElement(v.a,null,o.a.createElement(E.a,null,"Email"),o.a.createElement(y.a,{type:"email",placeholder:"Enter Email",name:"email",value:this.state.email,onChange:this.changeHandler}))),o.a.createElement(u.a,{lg:"5",md:"5",className:"ml-2"},o.a.createElement(v.a,null,o.a.createElement(E.a,null,"Mobile"),o.a.createElement(y.a,{type:"number",placeholder:"Enter Mobile",name:"mobile",value:this.state.mobile,onChange:this.changeHandler}))),o.a.createElement(u.a,{lg:"5",md:"5",className:"ml-2"},o.a.createElement(v.a,null,o.a.createElement(E.a,null,"Delivery Zone"),o.a.createElement(y.a,{type:"text",placeholder:"Delivery Zone",name:"delivery_zone",value:this.state.delivery_zone,onChange:this.changeHandler}))),o.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},o.a.createElement(E.a,{className:"mb-1"},o.a.createElement("h4",null,"Status")),o.a.createElement("div",{className:"form-label-group",onChange:this.changeHandler1},o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"true"}),o.a.createElement("span",{style:{marginRight:"20px"}},"Active"),o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"false"}),o.a.createElement("span",{style:{marginRight:"3px"}},"Deactive")))),o.a.createElement(m.a,null,o.a.createElement(u.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"mr-2 mb-1"},"Update")))))))}}]),t}(c.Component))},859:function(e,a,t){"use strict";var n=t(6),l=t(7),s=t(12),r=t(21),i=t(1),c=t.n(i),o=t(2),m=t.n(o),u=t(5),d=t.n(u),p=t(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.focus=t.focus.bind(Object(s.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.type,r=e.bsSize,i=e.valid,o=e.invalid,m=e.tag,u=e.addon,h=e.plaintext,b=e.innerRef,g=Object(l.a)(e,f),v=["radio","checkbox"].indexOf(s)>-1,E=new RegExp("\\D","g"),y=m||("select"===s||"textarea"===s?s:"input"),N="form-control";h?(N+="-plaintext",y=m||"input"):"file"===s?N+="-file":"range"===s?N+="-range":v&&(N=u?null:"form-check-input"),g.size&&E.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=g.size,delete g.size);var O=Object(p.mapToCssModules)(d()(a,o&&"is-invalid",i&&"is-valid",!!r&&"form-control-"+r,N),t);return("input"===y||m&&"function"===typeof m)&&(g.type=s),g.children&&!h&&"select"!==s&&"string"===typeof y&&"select"!==y&&(Object(p.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(y,Object(n.a)({},g,{ref:b,className:O,"aria-invalid":o}))},a}(c.a.Component);b.propTypes=h,b.defaultProps={type:"text"},a.a=b},878:function(e,a,t){"use strict";var n=t(6),l=t(7),s=t(12),r=t(21),i=t(1),c=t.n(i),o=t(2),m=t.n(o),u=t(5),d=t.n(u),p=t(3),f=["className","cssModule","inline","tag","innerRef"],h={children:m.a.node,inline:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.submit=t.submit.bind(Object(s.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.inline,r=e.tag,i=e.innerRef,o=Object(l.a)(e,f),m=Object(p.mapToCssModules)(d()(a,!!s&&"form-inline"),t);return c.a.createElement(r,Object(n.a)({},o,{ref:i,className:m}))},a}(i.Component);b.propTypes=h,b.defaultProps={tag:"form"},a.a=b},932:function(e,a,t){"use strict";var n=t(6),l=t(7),s=t(1),r=t.n(s),i=t(2),c=t.n(i),o=t(5),m=t.n(o),u=t(3),d=["className","cssModule","row","disabled","check","inline","tag"],p={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:u.tagPropType,className:c.a.string,cssModule:c.a.object},f=function(e){var a=e.className,t=e.cssModule,s=e.row,i=e.disabled,c=e.check,o=e.inline,p=e.tag,f=Object(l.a)(e,d),h=Object(u.mapToCssModules)(m()(a,!!s&&"row",c?"form-check":"form-group",!(!c||!o)&&"form-check-inline",!(!c||!i)&&"disabled"),t);return"fieldset"===p&&(f.disabled=i),r.a.createElement(p,Object(n.a)({},f,{className:h}))};f.propTypes=p,f.defaultProps={tag:"div"},a.a=f}}]);
//# sourceMappingURL=312.28979f80.chunk.js.map