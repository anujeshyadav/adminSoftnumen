(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[229],{1036:function(e,a,t){"use strict";var n=t(6),s=t(9),c=t(1),l=t.n(c),r=t(2),i=t.n(r),o=t(5),u=t.n(o),m=t(3),p=["className","cssModule","tag","size"],d={tag:m.tagPropType,size:i.a.string,className:i.a.string,cssModule:i.a.object},f=function(e){var a=e.className,t=e.cssModule,c=e.tag,r=e.size,i=Object(s.a)(e,p),o=Object(m.mapToCssModules)(u()(a,"input-group",r?"input-group-"+r:null),t);return l.a.createElement(c,Object(n.a)({},i,{className:o}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},1074:function(e,a,t){"use strict";var n=t(6),s=t(9),c=t(1),l=t.n(c),r=t(2),i=t.n(r),o=t(5),u=t.n(o),m=t(3),p=["className","cssModule","tag"],d={tag:m.tagPropType,className:i.a.string,cssModule:i.a.object},f=function(e){var a=e.className,t=e.cssModule,c=e.tag,r=Object(s.a)(e,p),i=Object(m.mapToCssModules)(u()(a,"input-group-text"),t);return l.a.createElement(c,Object(n.a)({},r,{className:i}))};f.propTypes=d,f.defaultProps={tag:"span"},a.a=f},3023:function(e,a,t){"use strict";t.r(a),t.d(a,"EditBatch",(function(){return j}));var n=t(50),s=t(14),c=t(15),l=t(16),r=t(17),i=t(1),o=t.n(i),u=t(844),m=t(837),p=t(838),d=t(204),f=t(847),h=t(865),b=t(839),g=t(859),y=t(1036),v=t(1074),E=(t(22),t(8)),N=t(65),j=function(e){Object(l.a)(t,e);var a=Object(r.a)(t);function t(e){var c;return Object(s.a)(this,t),(c=a.call(this,e)).changeHandler=function(e){c.setState(Object(n.a)({},e.target.name,e.target.value))},c.submitHandler=function(e){e.preventDefault(),console.log(c.state);var a=c.props.match.params.id;E.a.post("/admin/edit_batch/".concat(a),c.state).then((function(e){console.log(e),c.props.history.push("/app/freshlist/batch/batchList")})).catch((function(e){console.log(e)}))},c.state={batch:"",rack_no:"",shelf_life:"",expiry_date:"",stock:"",notify:""},c}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;E.a.get("/admin/viewone_addbatch/".concat(a)).then((function(a){console.log(a.data.data),e.setState({data:a.data.data,batch:a.data.data.batch,rack_no:a.data.data.rack_no,shelf_life:a.data.data.shelf_life,expiry_date:a.data.data.expiry_date,stock:a.data.data.stock,notify:a.data.data.notify})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(u.a,null,o.a.createElement(m.a,{className:"m-2"},o.a.createElement(p.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Edit Batch")),o.a.createElement(p.a,null,o.a.createElement(N.b,{render:function(e){var a=e.history;return o.a.createElement(d.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/freshlist/batch/batchList")}},"Back")}}))),o.a.createElement(f.a,null,o.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(m.a,{className:"mb-2"},o.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},o.a.createElement(b.a,null,"Batch"),o.a.createElement(g.a,{type:"number",placeholder:"Batch",name:"batch",value:this.state.batch,onChange:this.changeHandler})),o.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},o.a.createElement(b.a,null,"Rack Number"),o.a.createElement(g.a,{type:"number",placeholder:"Rack Number",name:"rack_no",value:this.state.rack_no,onChange:this.changeHandler})),o.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},o.a.createElement(b.a,null,"Shelf Life"),o.a.createElement(y.a,null,o.a.createElement(v.a,null,"Days"),o.a.createElement(g.a,{type:"number",placeholder:"Shelf Life",name:"shelf_life",value:this.state.shelf_life,onChange:this.changeHandler}))),o.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},o.a.createElement(b.a,null,"Expiry Date"),o.a.createElement(g.a,{type:"text",placeholder:"Expiry Date",name:"expiry_date",value:this.state.expiry_date,onChange:this.changeHandler})),o.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},o.a.createElement(b.a,null,"Stock"),o.a.createElement(g.a,{type:"number",placeholder:"stock",name:"stock",value:this.state.stock,onChange:this.changeHandler})),o.a.createElement(p.a,{lg:"6",md:"6",className:"mb-1"},o.a.createElement(b.a,null,"Notify"),o.a.createElement(g.a,{type:"number",placeholder:"Notify",name:"notify",value:this.state.notify,onChange:this.changeHandler}))),o.a.createElement(m.a,null,o.a.createElement(d.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add"))))))}}]),t}(i.Component);a.default=j},859:function(e,a,t){"use strict";var n=t(6),s=t(9),c=t(12),l=t(21),r=t(1),i=t.n(r),o=t(2),u=t.n(o),m=t(5),p=t.n(m),d=t(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(c.a)(t)),t.focus=t.focus.bind(Object(c.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,c=e.type,l=e.bsSize,r=e.valid,o=e.invalid,u=e.tag,m=e.addon,h=e.plaintext,b=e.innerRef,g=Object(s.a)(e,f),y=["radio","checkbox"].indexOf(c)>-1,v=new RegExp("\\D","g"),E=u||("select"===c||"textarea"===c?c:"input"),N="form-control";h?(N+="-plaintext",E=u||"input"):"file"===c?N+="-file":"range"===c?N+="-range":y&&(N=m?null:"form-check-input"),g.size&&v.test(g.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=g.size,delete g.size);var j=Object(d.mapToCssModules)(p()(a,o&&"is-invalid",r&&"is-valid",!!l&&"form-control-"+l,N),t);return("input"===E||u&&"function"===typeof u)&&(g.type=c),g.children&&!h&&"select"!==c&&"string"===typeof E&&"select"!==E&&(Object(d.warnOnce)('Input with a type of "'+c+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),i.a.createElement(E,Object(n.a)({},g,{ref:b,className:j,"aria-invalid":o}))},a}(i.a.Component);b.propTypes=h,b.defaultProps={type:"text"},a.a=b},865:function(e,a,t){"use strict";var n=t(6),s=t(9),c=t(12),l=t(21),r=t(1),i=t.n(r),o=t(2),u=t.n(o),m=t(5),p=t.n(m),d=t(3),f=["className","cssModule","inline","tag","innerRef"],h={children:u.a.node,inline:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(c.a)(t)),t.submit=t.submit.bind(Object(c.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,c=e.inline,l=e.tag,r=e.innerRef,o=Object(s.a)(e,f),u=Object(d.mapToCssModules)(p()(a,!!c&&"form-inline"),t);return i.a.createElement(l,Object(n.a)({},o,{ref:r,className:u}))},a}(r.Component);b.propTypes=h,b.defaultProps={tag:"form"},a.a=b}}]);
//# sourceMappingURL=229.7e8bec8d.chunk.js.map