(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[314],{2933:function(e,t,a){"use strict";a.r(t),a.d(t,"CreateAttribute",(function(){return O}));var n=a(894),r=a(50),l=a(14),i=a(15),s=a(16),o=a(17),c=a(1),u=a.n(c),m=a(845),p=a(838),f=a(839),d=a(204),b=a(848),h=a(879),g=a(840),v=a(860),y=a(22),E=a(10),O=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).onChangeHandler=function(e){i.setState({selectedFile:e.target.files[0]}),i.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},i.changeHandler1=function(e){i.setState({status:e.target.value})},i.changeHandler=function(e){i.setState(Object(r.a)({},e.target.name,e.target.value))},i.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("category_name",i.state.category_name),t.append("desc",i.state.desc),t.append("status",i.state.status),null!==i.state.selectedFile&&t.append("image",i.state.selectedFile,i.state.selectedName);var a,r=Object(n.a)(t.values());try{for(r.s();!(a=r.n()).done;){var l=a.value;console.log(l)}}catch(s){r.e(s)}finally{r.f()}E.a.post("/admin/addcategory",t).then((function(e){console.log(e),i.props.history.push("/app/freshlist/category/categoryList")})).catch((function(e){console.log(e)}))},i.state={category_name:"",selectedFile:null,selectedName:"",desc:"",image:"",status:""},i}return Object(i.a)(a,[{key:"render",value:function(){return u.a.createElement("div",null,u.a.createElement(m.a,null,u.a.createElement(p.a,{className:"m-2"},u.a.createElement(f.a,null,u.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"CreateAttribute")),u.a.createElement(f.a,null,u.a.createElement(d.a,{className:" btn btn-danger float-right",onClick:function(){return y.a.push("/app/freshlist/options/AttributeList")}},"Back"))),u.a.createElement(b.a,null,u.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},u.a.createElement(p.a,{className:"mb-2"},u.a.createElement(f.a,{lg:"6",md:"6",className:"mb-1"},u.a.createElement(g.a,null,"Weight"),u.a.createElement(v.a,{required:!0,type:"select",name:"weight",placeholder:"Enter Iden Type",value:this.state.weight,onChange:this.changeHandler},u.a.createElement("option",{value:"select"},"--Select--"),u.a.createElement("option",{value:"1KG"},"1KG"),u.a.createElement("option",{value:"2KG"},"2KG"),u.a.createElement("option",{value:"3KG"},"3KG"),u.a.createElement("option",{value:"5KG"},"5KG"))),u.a.createElement(f.a,{lg:"6",md:"6",className:"mb-1"},u.a.createElement(g.a,null,"Volume"),u.a.createElement(v.a,{required:!0,type:"select",name:"volume",placeholder:"Enter Iden Type",value:this.state.volume,onChange:this.changeHandler},u.a.createElement("option",{value:"select"},"--Select--"),u.a.createElement("option",{value:"1L"},"1L"),u.a.createElement("option",{value:"2L"},"2L"),u.a.createElement("option",{value:"3L"},"3L"),u.a.createElement("option",{value:"5L"},"5L"))),u.a.createElement(f.a,{lg:"6",md:"6",className:"mb-1"},u.a.createElement(g.a,null,"Pisces"),u.a.createElement(v.a,{required:!0,type:"select",name:"pisces",placeholder:"Enter Iden Type",value:this.state.pisces,onChange:this.changeHandler},u.a.createElement("option",{value:"select"},"--Select--"),u.a.createElement("option",{value:"1"},"1"),u.a.createElement("option",{value:"2"},"2"),u.a.createElement("option",{value:"3"},"3")))),u.a.createElement(p.a,null,u.a.createElement(d.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Submit"))))))}}]),a}(c.Component);t.default=O},860:function(e,t,a){"use strict";var n=a(6),r=a(7),l=a(12),i=a(21),s=a(1),o=a.n(s),c=a(2),u=a.n(c),m=a(5),p=a.n(m),f=a(3),d=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(l.a)(a)),a.focus=a.focus.bind(Object(l.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.type,i=e.bsSize,s=e.valid,c=e.invalid,u=e.tag,m=e.addon,b=e.plaintext,h=e.innerRef,g=Object(r.a)(e,d),v=["radio","checkbox"].indexOf(l)>-1,y=new RegExp("\\D","g"),E=u||("select"===l||"textarea"===l?l:"input"),O="form-control";b?(O+="-plaintext",E=u||"input"):"file"===l?O+="-file":"range"===l?O+="-range":v&&(O=m?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=g.size,delete g.size);var j=Object(f.mapToCssModules)(p()(t,c&&"is-invalid",s&&"is-valid",!!i&&"form-control-"+i,O),a);return("input"===E||u&&"function"===typeof u)&&(g.type=l),g.children&&!b&&"select"!==l&&"string"===typeof E&&"select"!==E&&(Object(f.warnOnce)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),o.a.createElement(E,Object(n.a)({},g,{ref:h,className:j,"aria-invalid":c}))},t}(o.a.Component);h.propTypes=b,h.defaultProps={type:"text"},t.a=h},879:function(e,t,a){"use strict";var n=a(6),r=a(7),l=a(12),i=a(21),s=a(1),o=a.n(s),c=a(2),u=a.n(c),m=a(5),p=a.n(m),f=a(3),d=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:f.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(l.a)(a)),a.submit=a.submit.bind(Object(l.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.inline,i=e.tag,s=e.innerRef,c=Object(r.a)(e,d),u=Object(f.mapToCssModules)(p()(t,!!l&&"form-inline"),a);return o.a.createElement(i,Object(n.a)({},c,{ref:s,className:u}))},t}(s.Component);h.propTypes=b,h.defaultProps={tag:"form"},t.a=h},894:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(108);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l,i=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){s=!0,l=e},f:function(){try{i||null==r.return||r.return()}finally{if(s)throw l}}}}}}]);
//# sourceMappingURL=314.f4adc137.chunk.js.map