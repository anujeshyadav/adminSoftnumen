(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[361],{2880:function(e,t,a){"use strict";a.r(t),a.d(t,"AddDiscount",(function(){return E}));var n=a(14),l=a(15),r=a(16),c=a(17),s=a(1),i=a.n(s),o=a(852),u=a(845),m=a(846),p=a(205),d=a(855),f=a(874),b=a(847),h=a(867),g=(a(22),a(8),a(65)),E=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(o.a,null,i.a.createElement(u.a,{className:"m-2"},i.a.createElement(m.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Discount")),i.a.createElement(m.a,null,i.a.createElement(g.b,{render:function(e){var t=e.history;return i.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/freshlist/discount/discountList")}},"Back")}}))),i.a.createElement(d.a,null,"  ",i.a.createElement(f.a,{className:"m-1"},i.a.createElement(u.a,{className:"mb-2"},i.a.createElement(m.a,{lg:"6",md:"6",className:"mb-2"},i.a.createElement(b.a,null,"Auto Generate Code"),i.a.createElement(h.a,{type:"text",placeholder:"Auto Generate Code",name:"name"})),i.a.createElement(m.a,{lg:"6",md:"6",className:"mb-2"},i.a.createElement(b.a,null,"Type"),i.a.createElement(h.a,{type:"select"},i.a.createElement("option",{selected:!0},"---Select Type---"),i.a.createElement("option",null,"Flat"),i.a.createElement("option",null,"Percentage"))),i.a.createElement(m.a,{lg:"6",md:"6",className:"mb-2"},i.a.createElement(b.a,null,"Discount"),i.a.createElement(h.a,{type:"number",placeholder:"Discount",name:"name"})),i.a.createElement(m.a,{lg:"6",md:"6",className:"mb-2"},i.a.createElement(b.a,null,"Apply On"),i.a.createElement(h.a,{type:"select"},i.a.createElement("option",{selected:!0},"---Select---"),i.a.createElement("option",null,"Category"),i.a.createElement("option",null,"Subcategory"),i.a.createElement("option",null,"Product")))),i.a.createElement(u.a,null,i.a.createElement(p.a.Ripple,{color:"danger",type:"submit",className:"mr-1 mb-1"},"Add Attribute"))))))}}]),a}(s.Component);t.default=E},867:function(e,t,a){"use strict";var n=a(6),l=a(9),r=a(12),c=a(21),s=a(1),i=a.n(s),o=a(2),u=a.n(o),m=a(5),p=a.n(m),d=a(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,c=e.bsSize,s=e.valid,o=e.invalid,u=e.tag,m=e.addon,b=e.plaintext,h=e.innerRef,g=Object(l.a)(e,f),E=["radio","checkbox"].indexOf(r)>-1,y=new RegExp("\\D","g"),v=u||("select"===r||"textarea"===r?r:"input"),O="form-control";b?(O+="-plaintext",v=u||"input"):"file"===r?O+="-file":"range"===r?O+="-range":E&&(O=m?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=g.size,delete g.size);var j=Object(d.mapToCssModules)(p()(t,o&&"is-invalid",s&&"is-valid",!!c&&"form-control-"+c,O),a);return("input"===v||u&&"function"===typeof u)&&(g.type=r),g.children&&!b&&"select"!==r&&"string"===typeof v&&"select"!==v&&(Object(d.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),i.a.createElement(v,Object(n.a)({},g,{ref:h,className:j,"aria-invalid":o}))},t}(i.a.Component);h.propTypes=b,h.defaultProps={type:"text"},t.a=h},874:function(e,t,a){"use strict";var n=a(6),l=a(9),r=a(12),c=a(21),s=a(1),i=a.n(s),o=a(2),u=a.n(o),m=a(5),p=a.n(m),d=a(3),f=["className","cssModule","inline","tag","innerRef"],b={children:u.a.node,inline:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.submit=a.submit.bind(Object(r.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.inline,c=e.tag,s=e.innerRef,o=Object(l.a)(e,f),u=Object(d.mapToCssModules)(p()(t,!!r&&"form-inline"),a);return i.a.createElement(c,Object(n.a)({},o,{ref:s,className:u}))},t}(s.Component);h.propTypes=b,h.defaultProps={tag:"form"},t.a=h}}]);
//# sourceMappingURL=361.ca9a7e9f.chunk.js.map