(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[234],{1074:function(e,a,t){"use strict";var n=t(6),s=t(7),l=t(1),r=t.n(l),c=t(2),i=t.n(c),o=t(5),u=t.n(o),m=t(3),p=["className","cssModule","tag"],d={tag:m.tagPropType,className:i.a.string,cssModule:i.a.object},f=function(e){var a=e.className,t=e.cssModule,l=e.tag,c=Object(s.a)(e,p),i=Object(m.mapToCssModules)(u()(a,"input-group-text"),t);return r.a.createElement(l,Object(n.a)({},c,{className:i}))};f.propTypes=d,f.defaultProps={tag:"span"},a.a=f},1110:function(e,a,t){"use strict";var n=t(6),s=t(7),l=t(1),r=t.n(l),c=t(2),i=t.n(c),o=t(5),u=t.n(o),m=t(3),p=["className","cssModule","tag","size"],d={tag:m.tagPropType,size:i.a.string,className:i.a.string,cssModule:i.a.object},f=function(e){var a=e.className,t=e.cssModule,l=e.tag,c=e.size,i=Object(s.a)(e,p),o=Object(m.mapToCssModules)(u()(a,"input-group",c?"input-group-"+c:null),t);return r.a.createElement(l,Object(n.a)({},i,{className:o}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},3021:function(e,a,t){"use strict";t.r(a),t.d(a,"AddBatch",(function(){return j}));var n=t(50),s=t(14),l=t(15),r=t(16),c=t(17),i=t(1),o=t.n(i),u=t(845),m=t(838),p=t(839),d=t(204),f=t(848),h=t(879),b=t(840),g=t(860),y=t(1110),v=t(1074),E=(t(22),t(10)),N=t(65),j=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(e){var l;return Object(s.a)(this,t),(l=a.call(this,e)).changeHandler=function(e){l.setState(Object(n.a)({},e.target.name,e.target.value))},l.submitHandler=function(e){e.preventDefault(),console.log(l.state),E.a.post("/admin/addbatch",l.state).then((function(e){console.log(e),l.props.history.push("/app/freshlist/batch/batchList")})).catch((function(e){console.log(e)}))},l.state={batch:"",rack_no:"",shelf_life:"",expiry_date:"",stock:"",notify:""},l}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(u.a,null,o.a.createElement(m.a,{className:"m-2"},o.a.createElement(p.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Batch")),o.a.createElement(p.a,null,o.a.createElement(N.b,{render:function(e){var a=e.history;return o.a.createElement(d.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/freshlist/batch/batchList")}},"Back")}}))),o.a.createElement(f.a,null,o.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(m.a,{className:"mb-2"},o.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},o.a.createElement(b.a,null,"Batch"),o.a.createElement(g.a,{type:"number",placeholder:"Batch",name:"batch",value:this.state.batch,onChange:this.changeHandler})),o.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},o.a.createElement(b.a,null,"Rack Number"),o.a.createElement(g.a,{type:"number",placeholder:"Rack Number",name:"rack_no",value:this.state.rack_no,onChange:this.changeHandler})),o.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},o.a.createElement(b.a,null,"Shelf Life"),o.a.createElement(y.a,null,o.a.createElement(v.a,null,"Days"),o.a.createElement(g.a,{type:"number",placeholder:"Shelf Life",name:"shelf_life",value:this.state.shelf_life,onChange:this.changeHandler}))),o.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},o.a.createElement(b.a,null,"Expiry Date"),o.a.createElement(g.a,{type:"text",placeholder:"Expiry Date",name:"expiry_date",value:this.state.expiry_date,onChange:this.changeHandler})),o.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},o.a.createElement(b.a,null,"Stock"),o.a.createElement(g.a,{type:"number",placeholder:"stock",name:"stock",value:this.state.stock,onChange:this.changeHandler})),o.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},o.a.createElement(b.a,null,"Notify"),o.a.createElement(g.a,{type:"number",placeholder:"Notify",name:"notify",value:this.state.notify,onChange:this.changeHandler}))),o.a.createElement(m.a,null,o.a.createElement(d.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add"))))))}}]),t}(i.Component);a.default=j},860:function(e,a,t){"use strict";var n=t(6),s=t(7),l=t(12),r=t(21),c=t(1),i=t.n(c),o=t(2),u=t.n(o),m=t(5),p=t.n(m),d=t(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.focus=t.focus.bind(Object(l.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.type,r=e.bsSize,c=e.valid,o=e.invalid,u=e.tag,m=e.addon,h=e.plaintext,b=e.innerRef,g=Object(s.a)(e,f),y=["radio","checkbox"].indexOf(l)>-1,v=new RegExp("\\D","g"),E=u||("select"===l||"textarea"===l?l:"input"),N="form-control";h?(N+="-plaintext",E=u||"input"):"file"===l?N+="-file":"range"===l?N+="-range":y&&(N=m?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=g.size,delete g.size);var j=Object(d.mapToCssModules)(p()(a,o&&"is-invalid",c&&"is-valid",!!r&&"form-control-"+r,N),t);return("input"===E||u&&"function"===typeof u)&&(g.type=l),g.children&&!h&&"select"!==l&&"string"===typeof E&&"select"!==E&&(Object(d.warnOnce)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),i.a.createElement(E,Object(n.a)({},g,{ref:b,className:j,"aria-invalid":o}))},a}(i.a.Component);b.propTypes=h,b.defaultProps={type:"text"},a.a=b},879:function(e,a,t){"use strict";var n=t(6),s=t(7),l=t(12),r=t(21),c=t(1),i=t.n(c),o=t(2),u=t.n(o),m=t(5),p=t.n(m),d=t(3),f=["className","cssModule","inline","tag","innerRef"],h={children:u.a.node,inline:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.submit=t.submit.bind(Object(l.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.inline,r=e.tag,c=e.innerRef,o=Object(s.a)(e,f),u=Object(d.mapToCssModules)(p()(a,!!l&&"form-inline"),t);return i.a.createElement(r,Object(n.a)({},o,{ref:c,className:u}))},a}(c.Component);b.propTypes=h,b.defaultProps={tag:"form"},a.a=b}}]);
//# sourceMappingURL=234.cde3a245.chunk.js.map