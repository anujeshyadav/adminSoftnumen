/*! For license information please see 338.c2310b6a.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[338],{2864:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var r=n(9),a=n(928),o=n(55),i=n(17),l=n(18),c=n(19),u=n(20),s=n(1),h=n.n(s),f=n(892),d=n(893),p=n(894),m=n(895),v=n(885),y=n(883),g=n(884),b=n(886),E=n(887),w=n(873),x=n(170),_=n(10),L=n(221),O=n.n(L);function j(){j=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(k){c=function(e,t,n){return e[t]=n}}function u(e,t,n,a){var o=t&&t.prototype instanceof f?t:f,i=Object.create(o.prototype),l=new O(a||[]);return r(i,"_invoke",{value:w(e,n,l)}),i}function s(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(k){return{type:"throw",arg:k}}}e.wrap=u;var h={};function f(){}function d(){}function p(){}var m={};c(m,o,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(S([])));y&&y!==t&&n.call(y,o)&&(m=y);var g=p.prototype=f.prototype=Object.create(m);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var a;r(this,"_invoke",{value:function(r,o){function i(){return new t((function(a,i){!function r(a,o,i,l){var c=s(e[a],e,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==typeof h&&n.call(h,"__await")?t.resolve(h.__await).then((function(e){r("next",e,i,l)}),(function(e){r("throw",e,i,l)})):t.resolve(h).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,l)}))}l(c.arg)}(r,o,a,i)}))}return a=a?a.then(i,i):i()}})}function w(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return N()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var l=x(i,n);if(l){if(l===h)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=s(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function x(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var a=s(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,h;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function _(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(_,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:N}}function N(){return{value:void 0,done:!0}}return d.prototype=p,r(g,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:d,configurable:!0}),d.displayName=c(p,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,l,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(E.prototype),c(E.prototype,i,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new E(u(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(g),c(g,l,"Generator"),c(g,o,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=S,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;L(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},e}var S=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).onChangeHandler=function(e){r.setState({selectedFile:e.target.files[0]}),r.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},r.onChangeHandler=function(e){r.setState({selectedFile:e.target.files}),r.setState({selectedName:e.target.files.name}),console.log(e.target.files)},r.changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(o.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("banner_title",r.state.banner_title),t.append("bannertype",r.state.bannertype),t.append("bannerurl",r.state.bannerurl),t.append("status",r.state.status);var n,o=Object(a.a)(r.state.selectedFile);try{for(o.s();!(n=o.n()).done;){var i=n.value;null!==r.state.selectedFile&&t.append("banner_img",i,i.name)}}catch(d){o.e(d)}finally{o.f()}var l,c=Object(a.a)(t.values());try{for(c.s();!(l=c.n()).done;){var u=l.value;console.log(u)}}catch(d){c.e(d)}finally{c.f()}var s,h=Object(a.a)(t.keys());try{for(h.s();!(s=h.n()).done;){var f=s.value;console.log(f)}}catch(d){h.e(d)}finally{h.f()}_.a.post("/addbanner",t).then((function(e){console.log(e),O()("Successful!","You clicked the button!","success"),r.props.history.push("/app/freshlist/banner/bannerList")})).catch((function(e){console.log(e)}))},r.state={banner_title:"",banner_img:"",bannertype:"",bannerurl:"",resourcetype:"",selectedFile:void 0,selectedName:"",status:"active"},r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(r.a)(j().mark((function e(){var t,n=this;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,_.a.get("/admin/viewone_banner/".concat(t)).then((function(e){console.log("viewOne",e.data.data),n.setState({banner_title:e.data.data.banner_title,bannerurl:e.data.data.banner_url,banner_type:e.data.data.banner_type,banner_img:e.data.data.banner_img[0],status:e.data.data.status})}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return h.a.createElement("div",null,h.a.createElement(f.a,null,h.a.createElement(d.a,null,h.a.createElement(p.a,null,"Edit Banner")),h.a.createElement(m.a,null,h.a.createElement(v.a,{className:"m-1",onSubmit:this.submitHandler},h.a.createElement(y.a,null,h.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},h.a.createElement(b.a,null,"Banner url"),h.a.createElement(E.a,{required:!0,type:"url",name:"bannerurl",placeholder:"Enter Banner Url",value:this.state.bannerurl,onChange:this.changeHandler})),h.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},h.a.createElement(b.a,null,"Banner Title"),h.a.createElement(E.a,{required:!0,type:"text",name:"banner_title",placeholder:"Enter Banner Title",value:this.state.banner_title,onChange:this.changeHandler})),h.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},h.a.createElement(b.a,null,"Banner image"),h.a.createElement(w.a,{type:"file",multiple:!0,name:"bannerimg",onChange:this.onChangeHandler})),h.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},h.a.createElement(b.a,null,"Banner Type"),h.a.createElement(w.a,{required:!0,type:"select",name:"bannertype",placeholder:"Enter Banner Type",value:this.state.bannertype,onChange:this.changeHandler},h.a.createElement("option",{value:"Product"},"Product"),h.a.createElement("option",{value:"Category"},"Category"),h.a.createElement("option",{value:"Shop"},"Shop"),h.a.createElement("option",{value:"Brand"},"Brand")))),h.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},h.a.createElement(b.a,{className:"mb-1"},"Status"),h.a.createElement("div",{className:"form-label-group",onChange:function(t){return e.changeHandler1(t)}},h.a.createElement(E.a,{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active",defaultChecked:!0}),h.a.createElement("span",{style:{marginRight:"20px"}},"Active"),h.a.createElement(E.a,{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),h.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))),h.a.createElement(y.a,null,h.a.createElement(g.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},h.a.createElement(x.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Update Banner")))))))}}]),n}(s.Component)},928:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(125);function a(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(r.a)(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o,i=!0,l=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==a.return||a.return()}finally{if(l)throw o}}}}}}]);
//# sourceMappingURL=338.c2310b6a.chunk.js.map