(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[293],{2871:function(e,a,t){"use strict";t.r(a),t.d(a,"AddDriver",(function(){return j}));var n=t(892),l=t(50),s=t(14),r=t(15),i=t(16),c=t(17),o=t(1),m=t.n(o),d=t(838),u=t(844),p=t(837),f=t(204),g=t(847),h=t(878),b=t(839),E=t(859),y=t(827),v=(t(22),t(10)),N=t(65),C=t(193),O=t.n(C),j=function(e){Object(i.a)(t,e);var a=Object(c.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).onChangeHandler1=function(e){r.setState({selectedFile1:e.target.files[0]}),r.setState({selectedName1:e.target.files[0].name}),console.log(e.target.files[0])},r.onChangeHandler2=function(e){r.setState({selectedFile2:e.target.files[0]}),r.setState({selectedName2:e.target.files[0].name}),console.log(e.target.files[0])},r.onChangeHandler3=function(e){r.setState({selectedFile3:e.target.files[0]}),r.setState({selectedName3:e.target.files[0].name}),console.log(e.target.files[0])},r.onChangeHandler4=function(e){r.setState({selectedFile4:e.target.files[0]}),r.setState({selectedName4:e.target.files[0].name}),console.log(e.target.files[0])},r.onChangeHandler5=function(e){r.setState({selectedFile5:e.target.files[0]}),r.setState({selectedName5:e.target.files[0].name}),console.log(e.target.files[0])},r.onChangeHandler6=function(e){r.setState({selectedFile6:e.target.files[0]}),r.setState({selectedName6:e.target.files[0].name}),console.log(e.target.files[0])},r.changeHandler=function(e){r.setState(Object(l.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("firstname",r.state.firstname),a.append("lastname",r.state.lastname),a.append("identity_type",r.state.identity_type),a.append("phone_no",r.state.phone_no),a.append("address",r.state.address),a.append("email",r.state.email),a.append("password",r.state.password),a.append("adhar_card_img",r.state.selectedFile1,r.state.selectedName1),a.append("driver_img",r.state.selectedFile2,r.state.selectedName2),a.append("identity_img",r.state.selectedFile3,r.state.selectedName3),a.append("regis_cardImg",r.state.selectedFile4,r.state.selectedName4),a.append("insuranceImg",r.state.selectedFile5,r.state.selectedName5),a.append("licenseImg",r.state.selectedFile6,r.state.selectedName6);var t,l=Object(n.a)(a.values());try{for(l.s();!(t=l.n()).done;){var s=t.value;console.log(s)}}catch(i){l.e(i)}finally{l.f()}v.a.post("/admin/add_drive",a).then((function(e){console.log(e.data.data),"success"==e.data.msg&&(O()("Success!","Submitted Successfully","success"),r.props.history.push("/app/freshlist/driver/driverList"))})).catch((function(e){console.log(e.response.data)}))},r.state={firstname:"",lastname:"",identity_type:"",phone_no:"",address:"",email:"",password:"",selectedFile1:null,selectedName1:"",selectedFile2:null,selectedName2:"",selectedFile3:null,selectedName3:"",selectedFile4:null,selectedName4:"",selectedFile5:null,selectedName5:"",selectedFile6:null,selectedName6:""},r}return Object(r.a)(t,[{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(d.a,{sm:"12"},m.a.createElement(d.a,null,m.a.createElement("div",null,m.a.createElement(u.a,null,m.a.createElement(p.a,{className:"m-2"},m.a.createElement(d.a,null,m.a.createElement("h1",null,"Add Driver")),m.a.createElement(d.a,null,m.a.createElement(N.b,{render:function(e){var a=e.history;return m.a.createElement(f.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/freshlist/driver/driverList")}},"Back")}}))),m.a.createElement(g.a,null,m.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},m.a.createElement(p.a,{className:"mb-2"},m.a.createElement(d.a,{lg:"6",md:"6",className:"mb-2"},m.a.createElement(b.a,null,"First Name"),m.a.createElement(E.a,{required:!0,type:"text",name:"firstname",placeholder:"First Name",value:this.state.firstname,onChange:this.changeHandler})),m.a.createElement(d.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(b.a,null,"Last Name"),m.a.createElement(E.a,{required:!0,type:"text",name:"lastname",placeholder:"Last Name",value:this.state.lastname,onChange:this.changeHandler})),m.a.createElement(d.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(b.a,null,"Identity Type"),m.a.createElement(E.a,{type:"select",name:"identity_type",placeholder:"Enter Identity Type",value:this.state.identity_type,onChange:this.changeHandler},m.a.createElement("option",{value:"Driving License"},"Driving License"),m.a.createElement("option",{value:"PanCard"},"Pan Card"),m.a.createElement("option",{value:"PassPort"},"Passport"))),m.a.createElement(d.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(b.a,null,"Identity Type Image"),m.a.createElement(y.a,{required:!0,type:"file",onChange:this.onChangeHandler3})),m.a.createElement(d.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(b.a,null,"Phone No."),m.a.createElement(E.a,{required:!0,type:"tel",maxLength:"10",name:"phone_no",placeholder:"Phone No",value:this.state.phone_no,onChange:this.changeHandler})),m.a.createElement(d.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(b.a,null,"Address"),m.a.createElement(E.a,{required:!0,type:"text",name:"address",placeholder:"Address",value:this.state.address,onChange:this.changeHandler})),m.a.createElement(d.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(b.a,null,"Aadhar Card Image"),m.a.createElement(y.a,{required:!0,type:"file",onChange:this.onChangeHandler1})),m.a.createElement(d.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(b.a,null,"Driver Image"),m.a.createElement(y.a,{required:!0,type:"file",onChange:this.onChangeHandler2}))),m.a.createElement(p.a,{className:"mt-2 mb-1"},m.a.createElement(d.a,null,"Account Information")),m.a.createElement(p.a,{className:"mb-2"},m.a.createElement(d.a,{lg:"6",md:"6",className:"mb-2"},m.a.createElement(b.a,null,"Email"),m.a.createElement(E.a,{required:!0,type:"email",placeholder:"Email","aria-autocomplete":"none"})),m.a.createElement(d.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(b.a,null,"Password"),m.a.createElement(E.a,{required:!0,autoComplete:"none",type:"password",name:"password",placeholder:" Password",value:this.state.password,onChange:this.changeHandler}))),m.a.createElement(p.a,{className:"mt-2 mb-1"},m.a.createElement(d.a,null,"Vehicle Information")),m.a.createElement(p.a,{className:"mb-2"},m.a.createElement(d.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(b.a,null,"Registration Card Image"),m.a.createElement(y.a,{required:!0,type:"file",onChange:this.onChangeHandler4})),m.a.createElement(d.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(b.a,null,"Insurance Policy Image"),m.a.createElement(y.a,{required:!0,type:"file",onChange:this.onChangeHandler5})),m.a.createElement(d.a,{lg:"6",md:"6",className:"mb-1"},m.a.createElement(b.a,null,"License Image"),m.a.createElement(y.a,{required:!0,type:"file",onChange:this.onChangeHandler6}))),m.a.createElement(p.a,{style:{float:"right"}},m.a.createElement(f.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1 "},"Submit")))))))))}}]),t}(o.Component);a.default=j},859:function(e,a,t){"use strict";var n=t(6),l=t(7),s=t(12),r=t(21),i=t(1),c=t.n(i),o=t(2),m=t.n(o),d=t(5),u=t.n(d),p=t(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],g={children:m.a.node,type:m.a.string,size:m.a.oneOfType([m.a.number,m.a.string]),bsSize:m.a.string,valid:m.a.bool,invalid:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),plaintext:m.a.bool,addon:m.a.bool,className:m.a.string,cssModule:m.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.focus=t.focus.bind(Object(s.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.type,r=e.bsSize,i=e.valid,o=e.invalid,m=e.tag,d=e.addon,g=e.plaintext,h=e.innerRef,b=Object(l.a)(e,f),E=["radio","checkbox"].indexOf(s)>-1,y=new RegExp("\\D","g"),v=m||("select"===s||"textarea"===s?s:"input"),N="form-control";g?(N+="-plaintext",v=m||"input"):"file"===s?N+="-file":"range"===s?N+="-range":E&&(N=d?null:"form-check-input"),b.size&&y.test(b.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=b.size,delete b.size);var C=Object(p.mapToCssModules)(u()(a,o&&"is-invalid",i&&"is-valid",!!r&&"form-control-"+r,N),t);return("input"===v||m&&"function"===typeof m)&&(b.type=s),b.children&&!g&&"select"!==s&&"string"===typeof v&&"select"!==v&&(Object(p.warnOnce)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),c.a.createElement(v,Object(n.a)({},b,{ref:h,className:C,"aria-invalid":o}))},a}(c.a.Component);h.propTypes=g,h.defaultProps={type:"text"},a.a=h},878:function(e,a,t){"use strict";var n=t(6),l=t(7),s=t(12),r=t(21),i=t(1),c=t.n(i),o=t(2),m=t.n(o),d=t(5),u=t.n(d),p=t(3),f=["className","cssModule","inline","tag","innerRef"],g={children:m.a.node,inline:m.a.bool,tag:p.tagPropType,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.submit=t.submit.bind(Object(s.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.inline,r=e.tag,i=e.innerRef,o=Object(l.a)(e,f),m=Object(p.mapToCssModules)(u()(a,!!s&&"form-inline"),t);return c.a.createElement(r,Object(n.a)({},o,{ref:i,className:m}))},a}(i.Component);h.propTypes=g,h.defaultProps={tag:"form"},a.a=h},892:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(108);function l(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var a=0,t=function(){};return{s:t,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,s,r=!0,i=!1;return{s:function(){l=e[Symbol.iterator]()},n:function(){var e=l.next();return r=e.done,e},e:function(e){i=!0,s=e},f:function(){try{r||null==l.return||l.return()}finally{if(i)throw s}}}}}}]);
//# sourceMappingURL=293.57aad05b.chunk.js.map