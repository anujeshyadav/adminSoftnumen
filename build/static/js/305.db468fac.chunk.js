/*! For license information please see 305.db468fac.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[305],{3054:function(e,t,n){"use strict";n.r(t),n.d(t,"EditType",(function(){return T}));var r=n(30),a=n(7),i=n(50),o=n(14),s=n(15),c=n(79),l=n(16),u=n(17),p=n(1),f=n.n(p),d=n(844),h=n(837),m=n(838),v=n(204),g=n(847),y=n(865),b=n(895),w=n(839),E=n(859),x=(n(22),n(8)),O=n(65),j=n(193),N=n.n(j);function S(){S=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(L){c=function(e,t,n){return e[t]=n}}function l(e,t,n,a){var i=t&&t.prototype instanceof f?t:f,o=Object.create(i.prototype),s=new N(a||[]);return r(o,"_invoke",{value:E(e,n,s)}),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=l;var p={};function f(){}function d(){}function h(){}var m={};c(m,i,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(T([])));g&&g!==t&&n.call(g,i)&&(m=g);var y=h.prototype=f.prototype=Object.create(m);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var a;r(this,"_invoke",{value:function(r,i){function o(){return new t((function(a,o){!function r(a,i,o,s){var c=u(e[a],e,i);if("throw"!==c.type){var l=c.arg,p=l.value;return p&&"object"==typeof p&&n.call(p,"__await")?t.resolve(p.__await).then((function(e){r("next",e,o,s)}),(function(e){r("throw",e,o,s)})):t.resolve(p).then((function(e){l.value=e,o(l)}),(function(e){return r("throw",e,o,s)}))}s(c.arg)}(r,i,a,o)}))}return a=a?a.then(o,o):o()}})}function E(e,t,n){var r="suspendedStart";return function(a,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw i;return k()}for(n.method=a,n.arg=i;;){var o=n.delegate;if(o){var s=x(o,n);if(s){if(s===p)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=u(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function x(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var a=u(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,p;var i=a.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function T(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=h,r(y,"constructor",{value:h,configurable:!0}),r(h,"constructor",{value:d,configurable:!0}),d.displayName=c(h,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,s,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(w.prototype),c(w.prototype,o,(function(){return this})),e.AsyncIterator=w,e.async=function(t,n,r,a,i){void 0===i&&(i=Promise);var o=new w(l(t,n,r,a),i);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},b(y),c(y,s,"Generator"),c(y,i,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=T,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return o.type="throw",o.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),j(n),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;j(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:T(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},e}var T=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).onChangeHandler3=function(e){r.setState({selectedFile3:e.target.files}),r.setState({selectedName3:e.target.files[0].name}),console.log(e.target.files)},r.changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(i.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){var t,n;e.preventDefault();var a=JSON.parse(localStorage.getItem("userData"));console.log(null===a||void 0===a||null===(t=a.Userinfo)||void 0===t?void 0:t.id);var i=new FormData,o=r.props.match.params.id;i.append("user_id",null===a||void 0===a||null===(n=a.Userinfo)||void 0===n?void 0:n.id),i.append("product_type_id",o),i.append("product_type",r.state.TypeName),i.append("description",r.state.Description),i.append("status",r.state.status),x.a.post("/editproducttypesubmit",i).then((function(e){var t;console.log(e),(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.success)&&(r.setState({TypeName:""}),r.setState({Description:""}),N()("Success!","You Data has been Submitted","success"))})).catch((function(e){console.log(e)}))},r.state={TypeName:"",Brand:"",Brandlist:"",Description:"",Price:"",stock:"",Regularprice:"",formValues:[{PName:"",price:""}],DiscountPrice:"",Addmore:!1,rowData:[],description:"",variety:"",shipmentfee:"",Tags:"",taxrate:"",status:"",selectedFile3:null,selectedName3:""},r.handleSubmit=r.handleSubmit.bind(Object(c.a)(r)),r}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=Object(a.a)(S().mark((function e(){var t,n,r=this;return S().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,(n=new FormData).append("product_type_id",t),e.next=5,x.a.post("/editproducttypelistview",n).then((function(e){var t,n=null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data[0];console.log(n),r.setState({TypeName:null===n||void 0===n?void 0:n.product_type}),r.setState({Description:null===n||void 0===n?void 0:n.description}),r.setState({status:null===n||void 0===n?void 0:n.status})}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e,t){var n=this.state.formValues;n[e][t.target.name]=t.target.value,this.setState({formValues:n})}},{key:"addFormFields",value:function(){this.setState({formValues:[].concat(Object(r.a)(this.state.formValues),[{PName:"",price:""}])}),this.handleSubmit()}},{key:"removeFormFields",value:function(e){var t=this.state.formValues;t.splice(e,1),this.setState({formValues:t})}},{key:"handleSubmit",value:function(){console.log(this.state.formValues)}},{key:"render",value:function(){return f.a.createElement("div",null,f.a.createElement(d.a,null,f.a.createElement("h1",{className:"p-2 "},"Edit here"),f.a.createElement(h.a,{className:"m-2"},f.a.createElement(m.a,null),f.a.createElement(m.a,null,f.a.createElement(O.b,{render:function(e){var t=e.history;return f.a.createElement(v.a,{className:" btn btn-danger float-right",onClick:function(){return t.push("/app/freshlist/house/Typelist")}},"Back")}}))),f.a.createElement(g.a,null,f.a.createElement(y.a,{className:"m-1",onSubmit:this.submitHandler},f.a.createElement(h.a,{className:"mb-2"},f.a.createElement(m.a,{lg:"6",md:"6"},f.a.createElement(b.a,null,f.a.createElement(w.a,null," Existing Type"),f.a.createElement(E.a,{type:"text",placeholder:"Title",name:"TypeName",bsSize:"lg",value:this.state.TypeName,onChange:this.changeHandler}))),f.a.createElement(m.a,{lg:"6",md:"6"},f.a.createElement(b.a,null,f.a.createElement(w.a,null,"Description"),f.a.createElement(E.a,{type:"text",placeholder:"Title",name:"Description",bsSize:"lg",value:this.state.Description,onChange:this.changeHandler}))),f.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},f.a.createElement(w.a,{className:"mb-1 py-2"},f.a.createElement("h4",null,"Status")),f.a.createElement("div",{className:"form-label-group",onChange:this.changeHandler},f.a.createElement("input",{defaultChecked:!0,style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),f.a.createElement("span",{style:{marginRight:"20px"}},"Active"),f.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Deactive"}),f.a.createElement("span",{style:{marginRight:"3px"}},"Deactive")))),f.a.createElement(h.a,null,f.a.createElement(m.a,null,f.a.createElement(v.a.Ripple,{color:"primary",type:"submit",className:"mx-3 mb-1"},"Submit")))))))}}]),n}(p.Component);t.default=T},859:function(e,t,n){"use strict";var r=n(6),a=n(9),i=n(12),o=n(21),s=n(1),c=n.n(s),l=n(2),u=n.n(l),p=n(5),f=n.n(p),d=n(3),h=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],m={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},v=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(i.a)(n)),n.focus=n.focus.bind(Object(i.a)(n)),n}Object(o.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,i=e.type,o=e.bsSize,s=e.valid,l=e.invalid,u=e.tag,p=e.addon,m=e.plaintext,v=e.innerRef,g=Object(a.a)(e,h),y=["radio","checkbox"].indexOf(i)>-1,b=new RegExp("\\D","g"),w=u||("select"===i||"textarea"===i?i:"input"),E="form-control";m?(E+="-plaintext",w=u||"input"):"file"===i?E+="-file":"range"===i?E+="-range":y&&(E=p?null:"form-check-input"),g.size&&b.test(g.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=g.size,delete g.size);var x=Object(d.mapToCssModules)(f()(t,l&&"is-invalid",s&&"is-valid",!!o&&"form-control-"+o,E),n);return("input"===w||u&&"function"===typeof u)&&(g.type=i),g.children&&!m&&"select"!==i&&"string"===typeof w&&"select"!==w&&(Object(d.warnOnce)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(w,Object(r.a)({},g,{ref:v,className:x,"aria-invalid":l}))},t}(c.a.Component);v.propTypes=m,v.defaultProps={type:"text"},t.a=v},865:function(e,t,n){"use strict";var r=n(6),a=n(9),i=n(12),o=n(21),s=n(1),c=n.n(s),l=n(2),u=n.n(l),p=n(5),f=n.n(p),d=n(3),h=["className","cssModule","inline","tag","innerRef"],m={children:u.a.node,inline:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},v=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(i.a)(n)),n.submit=n.submit.bind(Object(i.a)(n)),n}Object(o.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.submit=function(){this.ref&&this.ref.submit()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,i=e.inline,o=e.tag,s=e.innerRef,l=Object(a.a)(e,h),u=Object(d.mapToCssModules)(f()(t,!!i&&"form-inline"),n);return c.a.createElement(o,Object(r.a)({},l,{ref:s,className:u}))},t}(s.Component);v.propTypes=m,v.defaultProps={tag:"form"},t.a=v},895:function(e,t,n){"use strict";var r=n(6),a=n(9),i=n(1),o=n.n(i),s=n(2),c=n.n(s),l=n(5),u=n.n(l),p=n(3),f=["className","cssModule","row","disabled","check","inline","tag"],d={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:p.tagPropType,className:c.a.string,cssModule:c.a.object},h=function(e){var t=e.className,n=e.cssModule,i=e.row,s=e.disabled,c=e.check,l=e.inline,d=e.tag,h=Object(a.a)(e,f),m=Object(p.mapToCssModules)(u()(t,!!i&&"row",c?"form-check":"form-group",!(!c||!l)&&"form-check-inline",!(!c||!s)&&"disabled"),n);return"fieldset"===d&&(h.disabled=s),o.a.createElement(d,Object(r.a)({},h,{className:m}))};h.propTypes=d,h.defaultProps={tag:"div"},t.a=h}}]);
//# sourceMappingURL=305.db468fac.chunk.js.map