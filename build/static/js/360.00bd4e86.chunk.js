(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[360],{2883:function(e,t,a){"use strict";a.r(t),a.d(t,"EditDeal",(function(){return y}));var n=a(50),r=a(14),s=a(15),i=a(16),l=a(17),o=a(1),c=a.n(o),u=a(844),p=a(847),d=a(865),f=a(837),m=a(838),b=a(839),h=a(859),g=a(204),v=(a(22),a(8)),y=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).onChangeHandler=function(e){s.setState({selectedFile:e.target.files[0]}),s.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},s.changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(n.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("name",s.state.name),t.append("sortorder",s.state.sortorder),t.append("desc",s.state.desc),t.append("status",s.state.status),t.append("product_img",s.state.selectedFile,s.state.selectedName),v.a.post(" /addproductcategory",t).then((function(e){console.log(e),s.props.history.push("/app/category/category")})).catch((function(e){console.log(e)}))},s.state={name:"",selectedFile:null,selectedName:"",sortorder:"",desc:"",product_img:"",status:""},s}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("h1",null," Update Deal Of The Day"),c.a.createElement("div",null,c.a.createElement(u.a,null,c.a.createElement(p.a,null,c.a.createElement(d.a,{onSubmit:this.submitHandler},c.a.createElement(f.a,{className:"mb-1"},c.a.createElement(m.a,{lg:"12"},c.a.createElement(b.a,null,"Title"),c.a.createElement(h.a,{required:!0,type:"text",name:"bannertype",placeholder:"Enter Title",value:this.state.bannertype,onChange:this.changeHandler})),c.a.createElement(m.a,{lg:"12"},c.a.createElement(b.a,null,"Products"),c.a.createElement(h.a,{required:!0,type:"select",name:"bannertype",placeholder:"",value:this.state.bannertype,onChange:this.changeHandler},c.a.createElement("option",{value:"select"},"--Select--"),c.a.createElement("option",{value:"1"},"1"),c.a.createElement("option",{value:"2"},"2 "),c.a.createElement("option",{value:"3"},"3"),c.a.createElement("option",{value:"4"},"4 ")))),c.a.createElement(f.a,{style:{float:"right"}},c.a.createElement(g.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1 "},"Update")))))))}}]),a}(o.Component);t.default=y},859:function(e,t,a){"use strict";var n=a(6),r=a(9),s=a(12),i=a(21),l=a(1),o=a.n(l),c=a(2),u=a.n(c),p=a(5),d=a.n(p),f=a(3),m=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,i=e.bsSize,l=e.valid,c=e.invalid,u=e.tag,p=e.addon,b=e.plaintext,h=e.innerRef,g=Object(r.a)(e,m),v=["radio","checkbox"].indexOf(s)>-1,y=new RegExp("\\D","g"),O=u||("select"===s||"textarea"===s?s:"input"),E="form-control";b?(E+="-plaintext",O=u||"input"):"file"===s?E+="-file":"range"===s?E+="-range":v&&(E=p?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=g.size,delete g.size);var j=Object(f.mapToCssModules)(d()(t,c&&"is-invalid",l&&"is-valid",!!i&&"form-control-"+i,E),a);return("input"===O||u&&"function"===typeof u)&&(g.type=s),g.children&&!b&&"select"!==s&&"string"===typeof O&&"select"!==O&&(Object(f.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),o.a.createElement(O,Object(n.a)({},g,{ref:h,className:j,"aria-invalid":c}))},t}(o.a.Component);h.propTypes=b,h.defaultProps={type:"text"},t.a=h},865:function(e,t,a){"use strict";var n=a(6),r=a(9),s=a(12),i=a(21),l=a(1),o=a.n(l),c=a(2),u=a.n(c),p=a(5),d=a.n(p),f=a(3),m=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.submit=a.submit.bind(Object(s.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.inline,i=e.tag,l=e.innerRef,c=Object(r.a)(e,m),u=Object(f.mapToCssModules)(d()(t,!!s&&"form-inline"),a);return o.a.createElement(i,Object(n.a)({},c,{ref:l,className:u}))},t}(l.Component);h.propTypes=b,h.defaultProps={tag:"form"},t.a=h}}]);
//# sourceMappingURL=360.00bd4e86.chunk.js.map