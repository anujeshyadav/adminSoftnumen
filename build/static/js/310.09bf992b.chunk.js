(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[310],{2854:function(e,a,t){"use strict";t.r(a);var n=t(50),l=t(4),r=t(35),s=t(1),i=t.n(s),c=t(845),o=t(838),m=t(839),u=t(204),d=t(848),p=t(879),b=t(933),f=t(840),h=t(860),g=(t(22),t(10)),E=t(65);a.default=function(e){var a=Object(s.useState)({name:"",email:"",password:"",mobile:"",address:"",delivery_zone:"",status:""}),t=Object(r.a)(a,2),v=t[0],y=t[1],O=function(e){y(Object(l.a)(Object(l.a)({},v),{},Object(n.a)({},e.target.name,e.target.value)))};return i.a.createElement("div",null,i.a.createElement(c.a,null,i.a.createElement(o.a,{className:"m-2"},i.a.createElement(m.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Hub")),i.a.createElement(m.a,null,i.a.createElement(E.b,{render:function(e){var a=e.history;return i.a.createElement(u.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/freshlist/hubs/hubList")}},"Back")}}))),i.a.createElement(d.a,null,i.a.createElement(p.a,{className:"m-1",onSubmit:function(a){a.preventDefault(),console.log("submitHandler",v),g.a.post("/admin/addhub",v).then((function(a){console.log("response",a.data.data),e.history.push("/app/freshlist/hubs/hubList")})).catch((function(e){console.log(e)}))}},i.a.createElement(o.a,{className:"mb-2"},i.a.createElement(m.a,{lg:"6",md:"6"},i.a.createElement(b.a,null,i.a.createElement(f.a,null,"Hub Name"),i.a.createElement(h.a,{type:"text",placeholder:"Hub Name",name:"name",value:v.name,onChange:O}))),i.a.createElement(m.a,{lg:"6",md:"6"},i.a.createElement(b.a,null,i.a.createElement(f.a,null,"Mobile No."),i.a.createElement(h.a,{type:"tel",maxlength:"10",placeholder:"Mobile",name:"mobile",value:v.mobile,onChange:O}))),i.a.createElement(m.a,{lg:"6",md:"6"},i.a.createElement(b.a,null,i.a.createElement(f.a,null,"Email"),i.a.createElement(h.a,{type:"email",placeholder:"Enter Email",name:"email",value:v.email,onChange:O}))),i.a.createElement(m.a,{lg:"6",md:"6"},i.a.createElement(b.a,null,i.a.createElement(f.a,null,"Password"),i.a.createElement(h.a,{type:"password",placeholder:"Enter Password",name:"password",value:v.password,onChange:O}))),i.a.createElement(m.a,{lg:"6",md:"6"},i.a.createElement(b.a,null,i.a.createElement(f.a,null,"Address"),i.a.createElement(h.a,{type:"text",placeholder:"Enter Address",name:"address",id:"address",value:v.address,onChange:O}))),i.a.createElement(m.a,{lg:"6",md:"6"},i.a.createElement(b.a,null,i.a.createElement(f.a,null,"Delivery Zone"),i.a.createElement(h.a,{type:"text",placeholder:"",name:"delivery_zone",value:v.delivery_zone,onChange:O}))),i.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2 mt-1"},i.a.createElement(f.a,{className:"mb-1"},"Status"),i.a.createElement("div",{className:"form-label-group",onChange:O},i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),i.a.createElement("span",{style:{marginRight:"20px"}},"Active"),i.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),i.a.createElement("span",{style:{marginRight:"3px"}},"Inactive")))),i.a.createElement(o.a,{className:"m-2"},i.a.createElement(E.b,{render:function(e){e.history;return i.a.createElement(u.a,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add Hub")}}))))))}},860:function(e,a,t){"use strict";var n=t(6),l=t(7),r=t(12),s=t(21),i=t(1),c=t.n(i),o=t(2),m=t.n(o),u=t(5),d=t.n(u),p=t(3),b=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],f={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,s=e.bsSize,i=e.valid,o=e.invalid,m=e.tag,u=e.addon,f=e.plaintext,h=e.innerRef,g=Object(l.a)(e,b),E=["radio","checkbox"].indexOf(r)>-1,v=new RegExp("\\D","g"),y=m||("select"===r||"textarea"===r?r:"input"),O="form-control";f?(O+="-plaintext",y=m||"input"):"file"===r?O+="-file":"range"===r?O+="-range":E&&(O=u?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=g.size,delete g.size);var j=Object(p.mapToCssModules)(d()(a,o&&"is-invalid",i&&"is-valid",!!s&&"form-control-"+s,O),t);return("input"===y||m&&"function"===typeof m)&&(g.type=r),g.children&&!f&&"select"!==r&&"string"===typeof y&&"select"!==y&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(y,Object(n.a)({},g,{ref:h,className:j,"aria-invalid":o}))},a}(c.a.Component);h.propTypes=f,h.defaultProps={type:"text"},a.a=h},879:function(e,a,t){"use strict";var n=t(6),l=t(7),r=t(12),s=t(21),i=t(1),c=t.n(i),o=t(2),m=t.n(o),u=t(5),d=t.n(u),p=t(3),b=["className","cssModule","inline","tag","innerRef"],f={children:m.a.node,inline:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,s=e.tag,i=e.innerRef,o=Object(l.a)(e,b),m=Object(p.mapToCssModules)(d()(a,!!r&&"form-inline"),t);return c.a.createElement(s,Object(n.a)({},o,{ref:i,className:m}))},a}(i.Component);h.propTypes=f,h.defaultProps={tag:"form"},a.a=h},933:function(e,a,t){"use strict";var n=t(6),l=t(7),r=t(1),s=t.n(r),i=t(2),c=t.n(i),o=t(5),m=t.n(o),u=t(3),d=["className","cssModule","row","disabled","check","inline","tag"],p={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:u.tagPropType,className:c.a.string,cssModule:c.a.object},b=function(e){var a=e.className,t=e.cssModule,r=e.row,i=e.disabled,c=e.check,o=e.inline,p=e.tag,b=Object(l.a)(e,d),f=Object(u.mapToCssModules)(m()(a,!!r&&"row",c?"form-check":"form-group",!(!c||!o)&&"form-check-inline",!(!c||!i)&&"disabled"),t);return"fieldset"===p&&(b.disabled=i),s.a.createElement(p,Object(n.a)({},b,{className:f}))};b.propTypes=p,b.defaultProps={tag:"div"},a.a=b}}]);
//# sourceMappingURL=310.09bf992b.chunk.js.map