(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[199],{1071:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(1),i=t.n(r),c=t(2),l=t.n(c),o=t(5),p=t.n(o),u=t(3),m=["className","cssModule","fluid","tag"],d={tag:u.tagPropType,fluid:l.a.oneOfType([l.a.bool,l.a.string]),className:l.a.string,cssModule:l.a.object},f=function(e){var a=e.className,t=e.cssModule,r=e.fluid,c=e.tag,l=Object(s.a)(e,m),o="container";!0===r?o="container-fluid":r&&(o="container-"+r);var d=Object(u.mapToCssModules)(p()(a,o),t);return i.a.createElement(c,Object(n.a)({},l,{className:d}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},3201:function(e,a,t){"use strict";t.r(a);var n=t(14),s=t(15),r=t(16),i=t(17),c=t(1),l=t.n(c),o=t(1071),p=t(837),u=t(838),m=t(844),d=t(845),f=t(878),h=t(931),b=t(839),g=t(859),v=t(204),y=t(205),E=t.n(y),j=t(956),N=t(280),O=t(29),x=t(55),k=t(22),C=(t(604),t(605),t(51),t(224));x.apps.length||x.initializeApp(C.a);var w=x.auth(),R=function(e){Object(r.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(n.a)(this,t);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={email:"",password:"",name:"",confirmPass:""},e.handleRegister=function(a){a.preventDefault(),e.props.signupWithFirebase(e.state.email,e.state.password,e.state.name)},e}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(o.a,null,l.a.createElement(p.a,{className:"m-0 justify-content-center"},l.a.createElement(u.a,{sm:"8",xl:"7",lg:"10",md:"8",className:"d-flex justify-content-center"},l.a.createElement(u.a,{lg:"8",md:"12",className:"p-1"},l.a.createElement(m.a,{className:"rounded-0  px-2 pb-3 login-tabs-container"},l.a.createElement(d.a,{className:"pb-1 justify-content-center"},l.a.createElement("img",{src:E.a,class:"img-fluid",alt:"..."}),l.a.createElement("br",null)),l.a.createElement(f.a,{onSubmit:this.handleRegister},l.a.createElement(h.a,{className:"form-label-group position-relative has-icon-left"},l.a.createElement("div",{class:"form-group"},l.a.createElement(b.a,null,"Name"),l.a.createElement(g.a,{type:"text",class:"form-control mt-1 mb-3",placeholder:"Name",value:this.state.name,onChange:function(a){return e.setState({name:a.target.value})},required:!0,name:"name"}))),l.a.createElement(h.a,{className:"form-label-group position-relative has-icon-left"},l.a.createElement("div",{class:"form-group"},l.a.createElement(b.a,null,"Gmail"),l.a.createElement(g.a,{type:"text",placeholder:"Email",value:this.state.email,onChange:function(a){return e.setState({email:a.target.value})},required:!0,name:"email"}))),l.a.createElement(h.a,{className:"form-label-group position-relative has-icon-left"},l.a.createElement("div",{class:"form-group"},l.a.createElement(b.a,null,"Password"),l.a.createElement(g.a,{type:"password",placeholder:"Password",value:this.state.password,onChange:function(a){return e.setState({password:a.target.value})},required:!0}))),l.a.createElement(h.a,{className:"form-label-group"},l.a.createElement("div",{class:"form-group"},l.a.createElement(b.a,null,"Confirm Password"),l.a.createElement(g.a,{type:"password",placeholder:"Confirm Password",required:!0,value:this.state.confirmPass,onChange:function(a){return e.setState({confirmPass:a.target.value})}}))),l.a.createElement(h.a,null,l.a.createElement(j.a,{color:"primary",icon:l.a.createElement(N.a,{className:"vx-icon",size:16}),label:" I accept the terms & conditions.",defaultChecked:!0})),l.a.createElement("div",{className:"d-flex justify-content-between"},l.a.createElement(v.a.Ripple,{onClick:function(){return k.a.push("/pages/login")},color:"primary",outline:!0},"Login"),l.a.createElement(v.a.Ripple,{color:"primary",type:"submit"},"Register"))))))))}}]),t}(l.a.Component);a.default=Object(O.b)((function(e){return{values:e.auth.register}}),{signupWithFirebase:function(e,a,t){return function(n){var s=null;w.createUserWithEmailAndPassword(e,a).then((function(e){w.onAuthStateChanged((function(a){e.user.updateProfile({displayName:t}),a&&(s=a.email,n({type:"SIGNUP_WITH_EMAIL",payload:{email:s,name:t,isSignedIn:!0}}),n({type:"LOGIN_WITH_EMAIL",payload:{email:s,name:t}}))})),k.a.push("/")})).catch((function(e){console.log(e.message)}))}}})(R)},859:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(12),i=t(21),c=t(1),l=t.n(c),o=t(2),p=t.n(o),u=t(5),m=t.n(u),d=t(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:p.a.node,type:p.a.string,size:p.a.oneOfType([p.a.number,p.a.string]),bsSize:p.a.string,valid:p.a.bool,invalid:p.a.bool,tag:d.tagPropType,innerRef:p.a.oneOfType([p.a.object,p.a.func,p.a.string]),plaintext:p.a.bool,addon:p.a.bool,className:p.a.string,cssModule:p.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(i.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,i=e.bsSize,c=e.valid,o=e.invalid,p=e.tag,u=e.addon,h=e.plaintext,b=e.innerRef,g=Object(s.a)(e,f),v=["radio","checkbox"].indexOf(r)>-1,y=new RegExp("\\D","g"),E=p||("select"===r||"textarea"===r?r:"input"),j="form-control";h?(j+="-plaintext",E=p||"input"):"file"===r?j+="-file":"range"===r?j+="-range":v&&(j=u?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=g.size,delete g.size);var N=Object(d.mapToCssModules)(m()(a,o&&"is-invalid",c&&"is-valid",!!i&&"form-control-"+i,j),t);return("input"===E||p&&"function"===typeof p)&&(g.type=r),g.children&&!h&&"select"!==r&&"string"===typeof E&&"select"!==E&&(Object(d.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),l.a.createElement(E,Object(n.a)({},g,{ref:b,className:N,"aria-invalid":o}))},a}(l.a.Component);b.propTypes=h,b.defaultProps={type:"text"},a.a=b},878:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(12),i=t(21),c=t(1),l=t.n(c),o=t(2),p=t.n(o),u=t(5),m=t.n(u),d=t(3),f=["className","cssModule","inline","tag","innerRef"],h={children:p.a.node,inline:p.a.bool,tag:d.tagPropType,innerRef:p.a.oneOfType([p.a.object,p.a.func,p.a.string]),className:p.a.string,cssModule:p.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(i.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,i=e.tag,c=e.innerRef,o=Object(s.a)(e,f),p=Object(d.mapToCssModules)(m()(a,!!r&&"form-inline"),t);return l.a.createElement(i,Object(n.a)({},o,{ref:c,className:p}))},a}(c.Component);b.propTypes=h,b.defaultProps={tag:"form"},a.a=b},931:function(e,a,t){"use strict";var n=t(6),s=t(7),r=t(1),i=t.n(r),c=t(2),l=t.n(c),o=t(5),p=t.n(o),u=t(3),m=["className","cssModule","row","disabled","check","inline","tag"],d={children:l.a.node,row:l.a.bool,check:l.a.bool,inline:l.a.bool,disabled:l.a.bool,tag:u.tagPropType,className:l.a.string,cssModule:l.a.object},f=function(e){var a=e.className,t=e.cssModule,r=e.row,c=e.disabled,l=e.check,o=e.inline,d=e.tag,f=Object(s.a)(e,m),h=Object(u.mapToCssModules)(p()(a,!!r&&"row",l?"form-check":"form-group",!(!l||!o)&&"form-check-inline",!(!l||!c)&&"disabled"),t);return"fieldset"===d&&(f.disabled=c),i.a.createElement(d,Object(n.a)({},f,{className:h}))};f.propTypes=d,f.defaultProps={tag:"div"},a.a=f},956:function(e,a,t){"use strict";var n=t(14),s=t(15),r=t(16),i=t(17),c=t(1),l=t.n(c),o=function(e){Object(r.a)(t,e);var a=Object(i.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},l.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),l.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},l.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),l.a.createElement("span",null,this.props.label))}}]),t}(l.a.Component);a.a=o}}]);
//# sourceMappingURL=199.da7b2c69.chunk.js.map