(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[274],{2859:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return x}));var n=a(891),r=a(50),l=a(14),s=a(15),i=a(16),c=a(17),o=a(1),u=a.n(o),m=a(844),p=a(845),f=a(846),d=a(847),b=a(865),h=a(837),g=a(838),v=a(839),y=a(859),E=a(827),O=a(204),j=a(9),R=a(193),N=a.n(R),x=function(e){Object(i.a)(a,e);var t=Object(c.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).onChangeHandler=function(e){s.setState({selectedFile:e.target.files[0]}),s.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},s.onChangeHandler=function(e){s.setState({selectedFile:e.target.files}),s.setState({selectedName:e.target.files.name}),console.log(e.target.files)},s.changeHandler1=function(e){s.setState({status:e.target.value})},s.changeHandler=function(e){s.setState(Object(r.a)({},e.target.name,e.target.value))},s.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("banner_title",s.state.banner_title),t.append("bannertype",s.state.bannertype),t.append("status",s.state.status);var a,r=Object(n.a)(s.state.selectedFile);try{for(r.s();!(a=r.n()).done;){var l=a.value;null!==s.state.selectedFile&&t.append("banner_img",l,l.name)}}catch(f){r.e(f)}finally{r.f()}var i,c=Object(n.a)(t.values());try{for(c.s();!(i=c.n()).done;){var o=i.value;console.log(o)}}catch(f){c.e(f)}finally{c.f()}var u,m=Object(n.a)(t.keys());try{for(m.s();!(u=m.n()).done;){var p=u.value;console.log(p)}}catch(f){m.e(f)}finally{m.f()}j.a.post("/addbanner",t).then((function(e){console.log(e),N()("Successful!","You clicked the button!","success"),s.props.history.push("/app/freshlist/banner/bannerList")})).catch((function(e){console.log(e)}))},s.state={banner_title:"",banner_img:"",bannertype:"",selectedFile:void 0,selectedName:"",status:""},s}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement(m.a,null,u.a.createElement(p.a,null,u.a.createElement(f.a,null,"New Banner")),u.a.createElement(d.a,null,u.a.createElement(b.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(h.a,null,u.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(v.a,null,"Banner URL"),u.a.createElement(y.a,{required:!0,type:"text",name:"banner_title",placeholder:"Enter Banner URL",value:this.state.banner_title,onChange:this.changeHandler})),u.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(v.a,null,"Banner Title"),u.a.createElement(y.a,{required:!0,type:"text",name:"banner_title",placeholder:"Enter Banner Title",value:this.state.banner_title,onChange:this.changeHandler})),u.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(v.a,null,"Banner image"),u.a.createElement(E.a,{type:"file",multiple:!0,onChange:this.onChangeHandler})),u.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(v.a,null,"Banner Type"),u.a.createElement(E.a,{required:!0,type:"select",name:"bannertype",placeholder:"Enter Banner Type",value:this.state.bannertype,onChange:this.changeHandler},u.a.createElement("option",{value:"select"},"--Select--"),u.a.createElement("option",{value:"AB"},"AB"),u.a.createElement("option",{value:"PV"},"PV")))),u.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(v.a,{className:"mb-1"},"Status"),u.a.createElement("div",{className:"form-label-group",onChange:function(t){return e.changeHandler1(t)}},u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),u.a.createElement("span",{style:{marginRight:"20px"}},"Active"),u.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),u.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))),u.a.createElement(h.a,null,u.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(O.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Add Banner")))))))}}]),a}(o.Component)},859:function(e,t,a){"use strict";var n=a(6),r=a(8),l=a(12),s=a(21),i=a(1),c=a.n(i),o=a(2),u=a.n(o),m=a(5),p=a.n(m),f=a(3),d=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(l.a)(a)),a.focus=a.focus.bind(Object(l.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.type,s=e.bsSize,i=e.valid,o=e.invalid,u=e.tag,m=e.addon,b=e.plaintext,h=e.innerRef,g=Object(r.a)(e,d),v=["radio","checkbox"].indexOf(l)>-1,y=new RegExp("\\D","g"),E=u||("select"===l||"textarea"===l?l:"input"),O="form-control";b?(O+="-plaintext",E=u||"input"):"file"===l?O+="-file":"range"===l?O+="-range":v&&(O=m?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=g.size,delete g.size);var j=Object(f.mapToCssModules)(p()(t,o&&"is-invalid",i&&"is-valid",!!s&&"form-control-"+s,O),a);return("input"===E||u&&"function"===typeof u)&&(g.type=l),g.children&&!b&&"select"!==l&&"string"===typeof E&&"select"!==E&&(Object(f.warnOnce)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(E,Object(n.a)({},g,{ref:h,className:j,"aria-invalid":o}))},t}(c.a.Component);h.propTypes=b,h.defaultProps={type:"text"},t.a=h},865:function(e,t,a){"use strict";var n=a(6),r=a(8),l=a(12),s=a(21),i=a(1),c=a.n(i),o=a(2),u=a.n(o),m=a(5),p=a.n(m),f=a(3),d=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(l.a)(a)),a.submit=a.submit.bind(Object(l.a)(a)),a}Object(s.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.inline,s=e.tag,i=e.innerRef,o=Object(r.a)(e,d),u=Object(f.mapToCssModules)(p()(t,!!l&&"form-inline"),a);return c.a.createElement(s,Object(n.a)({},o,{ref:i,className:u}))},t}(i.Component);h.propTypes=b,h.defaultProps={tag:"form"},t.a=h},891:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(109);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l,s=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return s=e.done,e},e:function(e){i=!0,l=e},f:function(){try{s||null==r.return||r.return()}finally{if(i)throw l}}}}}}]);
//# sourceMappingURL=274.d463862b.chunk.js.map