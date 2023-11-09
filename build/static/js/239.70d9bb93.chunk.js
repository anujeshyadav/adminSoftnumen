(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[239],{1597:function(e,a,t){"use strict";var l=t(5),n=t(11),r=t(1),c=t.n(r),m=t(2),i=t.n(m),s=t(7),o=t.n(s),u=t(4),d=["className","cssModule","valid","tooltip","tag"],p={children:i.a.node,tag:u.tagPropType,className:i.a.string,cssModule:i.a.object,valid:i.a.bool,tooltip:i.a.bool},E={tag:"div",valid:void 0},b=function(e){var a=e.className,t=e.cssModule,r=e.valid,m=e.tooltip,i=e.tag,s=Object(n.a)(e,d),p=m?"tooltip":"feedback",E=Object(u.mapToCssModules)(o()(a,r?"valid-"+p:"invalid-"+p),t);return c.a.createElement(i,Object(l.a)({},s,{className:E}))};b.propTypes=p,b.defaultProps=E,a.a=b},1598:function(e,a,t){"use strict";var l=t(5),n=t(11),r=t(1),c=t.n(r),m=t(2),i=t.n(m),s=t(7),o=t.n(s),u=t(4),d=["className","cssModule","inline","color","tag"],p={children:i.a.node,inline:i.a.bool,tag:u.tagPropType,color:i.a.string,className:i.a.string,cssModule:i.a.object},E=function(e){var a=e.className,t=e.cssModule,r=e.inline,m=e.color,i=e.tag,s=Object(n.a)(e,d),p=Object(u.mapToCssModules)(o()(a,!r&&"form-text",!!m&&"text-"+m),t);return c.a.createElement(i,Object(l.a)({},s,{className:p}))};E.propTypes=p,E.defaultProps={tag:"small",color:"muted"},a.a=E},3130:function(e,a,t){"use strict";t.r(a);var l=t(17),n=t(18),r=t(19),c=t(20),m=t(1),i=t.n(m),s=t(883),o=t(884),u=t(124),d=t(892),p=t(893),E=t(894),b=t(895),f=t(968),h=t(886),v=t(887),g=t(1598),I=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,null,i.a.createElement(p.a,null,i.a.createElement(E.a,null,"Basic Inputs")),i.a.createElement(b.a,null,i.a.createElement(s.a,null,i.a.createElement(o.a,{lg:"4",md:"6",sm:"12"},i.a.createElement(f.a,null,i.a.createElement(h.a,{for:"basicInput"},"Basic Input"),i.a.createElement(v.a,{type:"email",id:"basicInput",placeholder:"Enter Email"}))),i.a.createElement(o.a,{lg:"4",md:"6",sm:"12"},i.a.createElement(f.a,null,i.a.createElement(h.a,{for:"InputHelp"},"Input text with help")," ",i.a.createElement("small",{className:"text-muted"},"eg. ",i.a.createElement("i",null,"someone@example.com")),i.a.createElement(v.a,{type:"email",id:"InputHelp"}))),i.a.createElement(o.a,{lg:"4",md:"6",sm:"12"},i.a.createElement(f.a,null,i.a.createElement(h.a,{for:"disabledInput"},"Disabled Input"),i.a.createElement(v.a,{type:"text",id:"disabledInput",disabled:!0}))),i.a.createElement(o.a,{lg:"4",md:"6",sm:"12"},i.a.createElement(f.a,null,i.a.createElement(h.a,{for:"helperText"},"With Helper Text"),i.a.createElement(v.a,{type:"text",id:"helperText",placeholder:"Name"}),i.a.createElement(g.a,{className:"text-muted"},"Find helper text here for given textbox."))),i.a.createElement(o.a,{lg:"4",md:"6",sm:"12"},i.a.createElement(f.a,null,i.a.createElement(h.a,{for:"readonlyInput"},"Readonly input"),i.a.createElement(v.a,{type:"text",id:"readonlyInput",readOnly:!0,value:"You can't update me :P"}))),i.a.createElement(o.a,{lg:"4",md:"6",sm:"12"},i.a.createElement(f.a,null,i.a.createElement(h.a,{for:"StaticInput"},"Static Text"),i.a.createElement("p",{className:"form-control-static",id:"StaticInput"},"email@pixinvent.com"))))))}}]),t}(i.a.Component),N=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,null,i.a.createElement(p.a,null,i.a.createElement(E.a,null,"Input Style")),i.a.createElement(b.a,null,i.a.createElement("p",null,"To set rounded border to input box, use ",i.a.createElement("code",null,".round")," class and to set square border to input box, use ",i.a.createElement("code",null,".sqaure")," ","class alongwith ",i.a.createElement("code",null,"Input")," tag."),i.a.createElement(s.a,null,i.a.createElement(o.a,{md:"6",sm:"12"},i.a.createElement(f.a,null,i.a.createElement(h.a,{for:"roundedInput"},"Rounded Input"),i.a.createElement(v.a,{className:"round",type:"text",id:"roundedInput",placeholder:"Rounded Input"}))),i.a.createElement(o.a,{md:"6",sm:"12"},i.a.createElement(f.a,null,i.a.createElement(h.a,{for:"squareInput"},"Square Input")," ",i.a.createElement(v.a,{className:"square",type:"text",id:"squareInput",placeholder:"Square Input"}))))))}}]),t}(i.a.Component),y=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,null,i.a.createElement(p.a,null,i.a.createElement(E.a,null,"Floating Input")),i.a.createElement(b.a,null,i.a.createElement("p",{className:"mb-2"},"For Floting Label Inputs,you'll have to use"," ",i.a.createElement("code",null,".form-label-group")," class as a wrapper & add attribute disabled for disabled Floating Label Input."),i.a.createElement(s.a,null,i.a.createElement(o.a,{md:"6",sm:"12"},i.a.createElement(f.a,{className:"form-label-group"},i.a.createElement(v.a,{type:"text",id:"floatingInput",placeholder:"Label Placeholder"}),i.a.createElement(h.a,{for:"floatingInput"},"Label Placeholder"))),i.a.createElement(o.a,{md:"6",sm:"12"},i.a.createElement(f.a,{className:"form-label-group"},i.a.createElement(v.a,{type:"text",id:"squareInputDisabled",placeholder:"Label Placeholder",disabled:!0}),i.a.createElement(h.a,{for:"squareInputDisabled"},"Label Placeholder")," ")))))}}]),t}(i.a.Component),x=t(873),j=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,null,i.a.createElement(p.a,null,i.a.createElement(E.a,null,"Input File")),i.a.createElement(b.a,null,i.a.createElement(s.a,null,i.a.createElement(o.a,{md:"6",sm:"12"},i.a.createElement(f.a,null,i.a.createElement(h.a,{for:"inputFile"},"Simple File Input"),i.a.createElement(v.a,{type:"file",id:"inputFile",name:"fileInpur"}))),i.a.createElement(o.a,{md:"6",sm:"12"},i.a.createElement(f.a,null,i.a.createElement(h.a,{for:"customFile"},"Custom File Input"),i.a.createElement(x.a,{type:"file",id:"exampleCustomFileBrowser",name:"customFile"}))))))}}]),t}(i.a.Component),O=t(1597),S=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,null,i.a.createElement(p.a,null,i.a.createElement(E.a,null,"Input State")),i.a.createElement(b.a,null,i.a.createElement("p",null,"Use attribute ",i.a.createElement("code",null,"valid/invalid")," with input tag to indicate input state."),i.a.createElement(s.a,null,i.a.createElement(o.a,{md:"6",sm:"12"},i.a.createElement(f.a,null,i.a.createElement(h.a,{for:"validState"},"Valid State"),i.a.createElement(v.a,{type:"text",id:"validState",name:"validState",valid:!0}),i.a.createElement(O.a,{valid:!0},"Sweet! that name is available"))),i.a.createElement(o.a,{md:"6",sm:"12"},i.a.createElement(f.a,null,i.a.createElement(h.a,{for:"invalidState"},"Invalid State"),i.a.createElement(v.a,{type:"text",id:"invalidState",name:"invalidState",invalid:!0}),i.a.createElement(O.a,null,"Oh noes! that name is already taken"))))))}}]),t}(i.a.Component),L=t(885),C=t(170),D=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={firstName:"",lastName:"",city:"",isValid:null},e.handleSubmit=function(a){a.preventDefault(),e.state.firstName.length>0?e.setState({isValid:!0}):0===e.state.firstName.length&&e.setState({isValid:!1}),e.state.city.length>0?e.setState({isValid:!0}):0===e.state.city.length&&e.setState({isValid:!1}),e.state.lastName.length>0?e.setState({isValid:!0}):0===e.state.lastName.length&&e.setState({isValid:!1})},e}return Object(n.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(d.a,null,i.a.createElement(p.a,null,i.a.createElement(E.a,null,"Input Validation With Tooltip")),i.a.createElement(b.a,null,i.a.createElement("p",null,"Use class ",i.a.createElement("code",null,".valid/invalid-tooltip")," to display validation tooltip."),i.a.createElement(L.a,{onSubmit:this.handleSubmit},i.a.createElement(s.a,null,i.a.createElement(o.a,{md:"4",sm:"12",className:"mb-2"},i.a.createElement(f.a,null,i.a.createElement(h.a,{for:"firstName"},"First Name"),i.a.createElement(v.a,{type:"text",onChange:function(a){return e.setState({firstName:a.target.value})},value:this.state.firstName,id:"firstName",name:"firstName",valid:!0===this.state.isValid,invalid:!1===this.state.isValid}),this.state.isValid?i.a.createElement("span",{className:"valid-tooltip"},"Looks Good!"):!1===this.state.isValid?i.a.createElement("span",{className:"invalid-tooltip"},"Please enter a First Name"):"")),i.a.createElement(o.a,{md:"4",sm:"12",className:"mb-2"},i.a.createElement(f.a,null,i.a.createElement(h.a,{for:"lastName"},"Last Name"),i.a.createElement(v.a,{type:"text",onChange:function(a){return e.setState({lastName:a.target.value})},value:this.state.lastName,id:"lastName",name:"lastName",valid:!0===this.state.isValid,invalid:!1===this.state.isValid}),this.state.isValid?i.a.createElement("span",{className:"valid-tooltip"},"Looks Good!"):!1===this.state.isValid?i.a.createElement("span",{className:"invalid-tooltip"},"Please enter a Last Name"):"")),i.a.createElement(o.a,{md:"4",sm:"12",className:"mb-2"},i.a.createElement(f.a,null,i.a.createElement(h.a,{for:"city"},"City"),i.a.createElement(v.a,{type:"text",onChange:function(a){return e.setState({city:a.target.value})},value:this.state.city,id:"city",name:"city",valid:!0===this.state.isValid,invalid:!1===this.state.isValid}),this.state.isValid?i.a.createElement("span",{className:"valid-tooltip"},"Looks Good!"):!1===this.state.isValid?i.a.createElement("span",{className:"invalid-tooltip"},"Please enter a City"):""))),i.a.createElement(C.a.Ripple,{color:"primary",onClick:this.handleSubmit},"Submit"))))}}]),t}(i.a.Component),k=t(434),V=t(362),w=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,null,i.a.createElement(p.a,null,i.a.createElement(E.a,null,"Input with Icons")),i.a.createElement(b.a,null,i.a.createElement("p",null,"For Input Box with left side icon, use class"," ",i.a.createElement("code",null,".has-icon-left")," and for use divider between icon and input text box use ",i.a.createElement("code",null,".input-divider-left"),"or ",i.a.createElement("code",null,".input-divider-right")," for left and right divider respectively."),i.a.createElement(s.a,null,i.a.createElement(o.a,{lg:"6",md:"12"},i.a.createElement("div",{className:"font-medium-2 text-bold-600 mb-1"},"Left Icon"),i.a.createElement(f.a,{className:"position-relative has-icon-left"},i.a.createElement(v.a,{type:"text",placeholder:"Icon Left, Default Input"}),i.a.createElement("div",{className:"form-control-position"},i.a.createElement(k.a,{size:15})))),i.a.createElement(o.a,{lg:"6",md:"12"},i.a.createElement("div",{className:"font-medium-2 text-bold-600 mb-1"},"Right Icon"),i.a.createElement(f.a,{className:"position-relative"},i.a.createElement(v.a,{type:"text",placeholder:"Icon Right, Default Input"}),i.a.createElement("div",{className:"form-control-position"},i.a.createElement(V.a,{size:15})))),i.a.createElement(o.a,{lg:"6",md:"12"},i.a.createElement("div",{className:"font-medium-2 text-bold-600 mb-1"},"Left Icon With Divider"),i.a.createElement(f.a,{className:"position-relative has-icon-left input-divider-left"},i.a.createElement(v.a,{type:"text",placeholder:"Left Icon With Divider"}),i.a.createElement("div",{className:"form-control-position"},i.a.createElement(k.a,null)))),i.a.createElement(o.a,{lg:"6",md:"12"},i.a.createElement("div",{className:"font-medium-2 text-bold-600 mb-1"},"Right Icon With Divider"),i.a.createElement(f.a,{className:"position-relative input-divider-right"},i.a.createElement(v.a,{type:"text",placeholder:"Right Icon With Divider"}),i.a.createElement("div",{className:"form-control-position"},i.a.createElement(V.a,null)))))))}}]),t}(i.a.Component),F=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,null,i.a.createElement(p.a,null,i.a.createElement(E.a,null,"Input with Floating Labels And Icons")),i.a.createElement(b.a,null,i.a.createElement(s.a,null,i.a.createElement(o.a,{lg:"6",md:"12"},i.a.createElement("div",{className:"font-medium-2 text-bold-600 mb-2"},"Left Icon"),i.a.createElement(f.a,{className:"position-relative form-label-group has-icon-left"},i.a.createElement(v.a,{type:"text",placeholder:"Icon Left, Default Input"}),i.a.createElement("div",{className:"form-control-position"},i.a.createElement(k.a,{size:15})),i.a.createElement(h.a,null,"Icon Left, Default Input"))),i.a.createElement(o.a,{lg:"6",md:"12"},i.a.createElement("div",{className:"font-medium-2 text-bold-600 mb-2"},"Right Icon"),i.a.createElement(f.a,{className:"position-relative form-label-group"},i.a.createElement(v.a,{type:"text",placeholder:"Icon Right, Default Input"}),i.a.createElement("div",{className:"form-control-position"},i.a.createElement(V.a,{size:15})),i.a.createElement(h.a,null,"Icon Right, Default Input"))),i.a.createElement(o.a,{lg:"6",md:"12"},i.a.createElement("div",{className:"font-medium-2 text-bold-600 mb-2"},"Left Icon With Divider"),i.a.createElement(f.a,{className:"position-relative form-label-group has-icon-left input-divider-left"},i.a.createElement(v.a,{type:"text",placeholder:"Left Icon With Divider"}),i.a.createElement("div",{className:"form-control-position"},i.a.createElement(k.a,null)),i.a.createElement(h.a,null,"Left Icon With Divider"))),i.a.createElement(o.a,{lg:"6",md:"12"},i.a.createElement("div",{className:"font-medium-2 text-bold-600 mb-2"},"Right Icon With Divider"),i.a.createElement(f.a,{className:"position-relative form-label-group input-divider-right"},i.a.createElement(v.a,{type:"text",placeholder:"Right Icon With Divider"}),i.a.createElement("div",{className:"form-control-position"},i.a.createElement(V.a,null)),i.a.createElement(h.a,null,"Right Icon With Divider"))))))}}]),t}(i.a.Component),T=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,null,i.a.createElement(p.a,null,i.a.createElement(E.a,null,"Input Sizes")),i.a.createElement(b.a,null,i.a.createElement("p",null,"Use ",i.a.createElement("code",null,'bsSize="sm / lg"')," attribute with Input tag to change size of input."),i.a.createElement(s.a,null,i.a.createElement(o.a,{sm:"12"},i.a.createElement("div",{className:"font-medium-2 text-bold-600 mb-1"},"Large"),i.a.createElement(f.a,null,i.a.createElement(v.a,{type:"text",bsSize:"lg",placeholder:"Large Input"}))),i.a.createElement(o.a,{sm:"12"},i.a.createElement("div",{className:"font-medium-2 text-bold-600 mb-1"},"Default"),i.a.createElement(f.a,null,i.a.createElement(v.a,{type:"text",placeholder:"Default Input"}))),i.a.createElement(o.a,{sm:"12"},i.a.createElement("div",{className:"font-medium-2 text-bold-600 mb-1"},"Small"),i.a.createElement(f.a,null,i.a.createElement(v.a,{type:"text",bsSize:"sm",placeholder:"Small Input"}))))))}}]),t}(i.a.Component),P=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,null,i.a.createElement(p.a,null,i.a.createElement(E.a,null,"Input Sizes With Floating Labels")),i.a.createElement(b.a,null,i.a.createElement("p",null,"Use ",i.a.createElement("code",null,'bsSize="sm / lg"')," attribute with Input tag to change size of input and ",i.a.createElement("code",null,".form-label-group")," as a wrapper."),i.a.createElement(s.a,null,i.a.createElement(o.a,{sm:"12"},i.a.createElement("div",{className:"font-medium-2 text-bold-600 mb-2"},"Large"),i.a.createElement(f.a,{className:"form-label-group"},i.a.createElement(v.a,{type:"text",bsSize:"lg",placeholder:"Large Input"}),i.a.createElement(h.a,null,"Large Input"))),i.a.createElement(o.a,{sm:"12"},i.a.createElement("div",{className:"font-medium-2 text-bold-600 mb-2"},"Default"),i.a.createElement(f.a,{className:"form-label-group"},i.a.createElement(v.a,{type:"text",placeholder:"Default Input"}),i.a.createElement(h.a,null,"Default Input"))),i.a.createElement(o.a,{sm:"12"},i.a.createElement("div",{className:"font-medium-2 text-bold-600 mb-2"},"Small"),i.a.createElement(f.a,{className:"form-label-group"},i.a.createElement(v.a,{type:"text",bsSize:"sm",placeholder:"Small Input"}),i.a.createElement(h.a,null,"Small Input"))))))}}]),t}(i.a.Component),z=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{breadCrumbTitle:"Input",breadCrumbParent:"Form Elements",breadCrumbActive:"Input"}),i.a.createElement(s.a,null,i.a.createElement(o.a,{sm:"12"},i.a.createElement(I,null)),i.a.createElement(o.a,{sm:"12"},i.a.createElement(N,null)),i.a.createElement(o.a,{sm:"12"},i.a.createElement(y,null)),i.a.createElement(o.a,{sm:"12"},i.a.createElement(j,null)),i.a.createElement(o.a,{sm:"12"},i.a.createElement(S,null)),i.a.createElement(o.a,{sm:"12"},i.a.createElement(D,null)),i.a.createElement(o.a,{sm:"12"},i.a.createElement(w,null)),i.a.createElement(o.a,{sm:"12"},i.a.createElement(F,null)),i.a.createElement(o.a,{lg:"6",md:"12"},i.a.createElement(T,null)),i.a.createElement(o.a,{lg:"6",md:"12"},i.a.createElement(P,null))))}}]),t}(i.a.Component);a.default=z},968:function(e,a,t){"use strict";var l=t(5),n=t(11),r=t(1),c=t.n(r),m=t(2),i=t.n(m),s=t(7),o=t.n(s),u=t(4),d=["className","cssModule","row","disabled","check","inline","tag"],p={children:i.a.node,row:i.a.bool,check:i.a.bool,inline:i.a.bool,disabled:i.a.bool,tag:u.tagPropType,className:i.a.string,cssModule:i.a.object},E=function(e){var a=e.className,t=e.cssModule,r=e.row,m=e.disabled,i=e.check,s=e.inline,p=e.tag,E=Object(n.a)(e,d),b=Object(u.mapToCssModules)(o()(a,!!r&&"row",i?"form-check":"form-group",!(!i||!s)&&"form-check-inline",!(!i||!m)&&"disabled"),t);return"fieldset"===p&&(E.disabled=m),c.a.createElement(p,Object(l.a)({},E,{className:b}))};E.propTypes=p,E.defaultProps={tag:"div"},a.a=E}}]);
//# sourceMappingURL=239.70d9bb93.chunk.js.map