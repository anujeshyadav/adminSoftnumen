(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[387],{3178:function(e,a,t){"use strict";t.r(a);var n=t(14),l=t(15),r=t(16),c=t(17),i=t(1),o=t.n(i),u=t(837),s=t(838),p=t(108),m=t(844),d=t(845),f=t(846),b=t(847),h=t(859),v=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(m.a,null,o.a.createElement(d.a,null,o.a.createElement(f.a,null,"Default")),o.a.createElement(b.a,null,o.a.createElement("p",null,"To create a Textarea use ",o.a.createElement("code",null,'type="textarea"')," with reactstrap Input tag."),o.a.createElement(h.a,{type:"textarea",name:"text",id:"exampleText",rows:"3",placeholder:"Textarea"})))}}]),t}(o.a.Component),E=t(839),g=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(m.a,null,o.a.createElement(d.a,null,o.a.createElement(f.a,null,"Floating label")),o.a.createElement(b.a,null,o.a.createElement("p",null,"Use ",o.a.createElement("code",null,".form-label-group")," as a wrapper to add a Floating Label with Textarea"),o.a.createElement("div",{className:"form-label-group mt-2"},o.a.createElement(h.a,{type:"textarea",name:"text",id:"exampleText",rows:"3",placeholder:"Floating Label"}),o.a.createElement(E.a,null,"Floating Label"))))}}]),t}(o.a.Component),x=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,r=new Array(l),c=0;c<l;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={value:""},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(m.a,null,o.a.createElement(d.a,null,o.a.createElement(f.a,null,"Counter")),o.a.createElement(b.a,null,o.a.createElement("div",{className:"form-label-group mt-2 mb-0"},o.a.createElement(h.a,{type:"textarea",name:"text",id:"exampleText",rows:"3",value:this.state.value,placeholder:"Counter",onChange:function(a){return e.setState({value:a.target.value})}}),o.a.createElement(E.a,null,"Counter")),o.a.createElement("small",{className:"counter-value float-right ".concat(this.state.value.length>20?"bg-danger":"")},"".concat(this.state.value.length,"/20"))))}}]),t}(o.a.Component),O=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,{breadCrumbTitle:"Textarea",breadCrumbParent:"Form Elements",breadCrumbActive:"Textarea"}),o.a.createElement(u.a,null,o.a.createElement(s.a,{sm:"12"},o.a.createElement(v,null)),o.a.createElement(s.a,{sm:"12"},o.a.createElement(g,null)),o.a.createElement(s.a,{sm:"12"},o.a.createElement(x,null))))}}]),t}(o.a.Component);a.default=O},859:function(e,a,t){"use strict";var n=t(6),l=t(8),r=t(12),c=t(21),i=t(1),o=t.n(i),u=t(2),s=t.n(u),p=t(5),m=t.n(p),d=t(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:s.a.node,type:s.a.string,size:s.a.oneOfType([s.a.number,s.a.string]),bsSize:s.a.string,valid:s.a.bool,invalid:s.a.bool,tag:d.tagPropType,innerRef:s.a.oneOfType([s.a.object,s.a.func,s.a.string]),plaintext:s.a.bool,addon:s.a.bool,className:s.a.string,cssModule:s.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,c=e.bsSize,i=e.valid,u=e.invalid,s=e.tag,p=e.addon,b=e.plaintext,h=e.innerRef,v=Object(l.a)(e,f),E=["radio","checkbox"].indexOf(r)>-1,g=new RegExp("\\D","g"),x=s||("select"===r||"textarea"===r?r:"input"),O="form-control";b?(O+="-plaintext",x=s||"input"):"file"===r?O+="-file":"range"===r?O+="-range":E&&(O=p?null:"form-check-input"),v.size&&g.test(v.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=v.size,delete v.size);var y=Object(d.mapToCssModules)(m()(a,u&&"is-invalid",i&&"is-valid",!!c&&"form-control-"+c,O),t);return("input"===x||s&&"function"===typeof s)&&(v.type=r),v.children&&!b&&"select"!==r&&"string"===typeof x&&"select"!==x&&(Object(d.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete v.children),o.a.createElement(x,Object(n.a)({},v,{ref:h,className:y,"aria-invalid":u}))},a}(o.a.Component);h.propTypes=b,h.defaultProps={type:"text"},a.a=h}}]);
//# sourceMappingURL=387.307c8d55.chunk.js.map