/*! For license information please see 173.5d246100.chunk.js.LICENSE.txt */
(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[173],{2917:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(891),i=n(50),o=n(14),l=n(15),c=n(16),s=n(17),u=n(1),f=n.n(u),d=n(827),h=n(837),p=n(838),m=n(844),g=n(847),v=n(865),y=n(839),b=n(859),w=n(204),E=n(842),S=n(850),x=n(833),N=n(832),O=(n(958),n(9)),j=n(107),z=n(862),P=(n(893),n(328)),R=n(281),k=n(22),C=(n(860),n(856),n(193)),L=n.n(C);function D(){D=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a=Object.defineProperty||function(e,t,n){e[t]=n.value},r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(P){c=function(e,t,n){return e[t]=n}}function s(e,t,n,r){var i=t&&t.prototype instanceof d?t:d,o=Object.create(i.prototype),l=new O(r||[]);return a(o,"_invoke",{value:E(e,n,l)}),o}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(P){return{type:"throw",arg:P}}}e.wrap=s;var f={};function d(){}function h(){}function p(){}var m={};c(m,i,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(j([])));v&&v!==t&&n.call(v,i)&&(m=v);var y=p.prototype=d.prototype=Object.create(m);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var r;a(this,"_invoke",{value:function(a,i){function o(){return new t((function(r,o){!function a(r,i,o,l){var c=u(e[r],e,i);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){a("next",e,o,l)}),(function(e){a("throw",e,o,l)})):t.resolve(f).then((function(e){s.value=e,o(s)}),(function(e){return a("throw",e,o,l)}))}l(c.arg)}(a,i,r,o)}))}return r=r?r.then(o,o):o()}})}function E(e,t,n){var a="suspendedStart";return function(r,i){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw i;return z()}for(n.method=r,n.arg=i;;){var o=n.delegate;if(o){var l=S(o,n);if(l){if(l===f)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var c=u(e,t,n);if("normal"===c.type){if(a=n.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a="completed",n.method="throw",n.arg=c.arg)}}}function S(e,t){var n=t.method,a=e.iterator[n];if(void 0===a)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,S(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var r=u(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,f;var i=r.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function j(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,r=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:z}}function z(){return{value:void 0,done:!0}}return h.prototype=p,a(y,"constructor",{value:p,configurable:!0}),a(p,"constructor",{value:h,configurable:!0}),h.displayName=c(p,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,l,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(w.prototype),c(w.prototype,o,(function(){return this})),e.AsyncIterator=w,e.async=function(t,n,a,r,i){void 0===i&&(i=Promise);var o=new w(s(t,n,a,r),i);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},b(y),c(y,l,"Generator"),c(y,i,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var a in t)n.push(a);return n.reverse(),function e(){for(;n.length;){var a=n.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return o.type="throw",o.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],o=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),N(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;N(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}var _=function(e){Object(c.a)(n,e);var t=Object(s.a)(n);function n(){var e,a;Object(o.a)(this,n);for(var l=arguments.length,c=new Array(l),s=0;s<l;s++)c[s]=arguments[s];return(a=t.call.apply(t,[this].concat(c))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150,filter:!0},{headerName:"Order ID ",field:"orderId",filter:!0,resizable:!0,width:120,cellRendererFramework:function(e){return f.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},f.a.createElement("div",null,f.a.createElement("span",null,e.data.orderId)))}},{headerName:"Email",field:"email",filter:!0,resizable:!0,width:200,cellRendererFramework:function(e){return f.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},f.a.createElement("div",null,f.a.createElement("span",null,e.data.email)))}},{headerName:"Phone",field:"phone",filter:!0,resizable:!0,width:200,cellRendererFramework:function(e){return f.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},f.a.createElement("div",null,f.a.createElement("span",null,e.data.phone_no)))}},{headerName:"Zone",field:"zone",filter:!0,resizable:!0,width:150,cellRendererFramework:function(e){return f.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},f.a.createElement("div",null,f.a.createElement("span",null,e.data.order_zone)))}},{headerName:"Delivery Address",field:"delivery_address",filter:!0,resizable:!0,width:200,cellRendererFramework:function(e){return f.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},f.a.createElement("div",null,f.a.createElement("span",null,e.data.delivery_add)))}},{headerName:"Permitions",field:"permitions",filter:!0,width:100,cellRendererFramework:function(e){return f.a.createElement(d.a,{type:"switch",className:"mr-1",id:"primary",name:"primary",inline:!0,onChange:a.handleSwitchChange})}},{headerName:"Status",field:"status",filter:!0,width:150,cellRendererFramework:function(e){return"Canceled"===e.value?f.a.createElement("div",{className:"badge badge-pill bg-danger"},e.data.status):null}},(e={headerName:"Actions",field:"sortorder"},Object(i.a)(e,"field","transactions"),Object(i.a)(e,"width",100),Object(i.a)(e,"cellRendererFramework",(function(e){return f.a.createElement("div",{className:"actions cursor-pointer"},f.a.createElement(P.a,{className:"mr-50",size:"25px",color:"green",onClick:function(){return k.a.push("/app/freshlist/order/viewCanceled/".concat(e.data._id))}}))})),e)]},a.onGridReady=function(e){a.gridApi=e.api,a.gridColumnApi=e.columnApi,a.setState({currenPageSize:a.gridApi.paginationGetCurrentPage()+1,getPageSize:a.gridApi.paginationGetPageSize(),totalPages:a.gridApi.paginationGetTotalPages()})},a.updateSearchQuery=function(e){a.gridApi.setQuickFilter(e)},a.filterSize=function(e){a.gridApi&&(a.gridApi.paginationSetPageSize(Number(e)),a.setState({currenPageSize:e,getPageSize:e}))},a.onChangeHandler=function(e){a.setState({selectedFile:e.target.files[0]}),a.setState({selectedName:e.target.files[0].name}),console.log(e.target.files[0])},a.onChangeHandler=function(e){a.setState({selectedFile:e.target.files}),a.setState({selectedName:e.target.files.name}),console.log(e.target.files)},a.changeHandler1=function(e){a.setState({status:e.target.value})},a.changeHandler=function(e){a.setState(Object(i.a)({},e.target.name,e.target.value))},a.submitHandler=function(e){e.preventDefault();var t=new FormData;t.append("banner_title",a.state.banner_title),t.append("bannertype",a.state.bannertype),t.append("status",a.state.status);var n,i=Object(r.a)(a.state.selectedFile);try{for(i.s();!(n=i.n()).done;){var o=n.value;null!==a.state.selectedFile&&t.append("banner_img",o,o.name)}}catch(h){i.e(h)}finally{i.f()}var l,c=Object(r.a)(t.values());try{for(c.s();!(l=c.n()).done;){var s=l.value;console.log(s)}}catch(h){c.e(h)}finally{c.f()}var u,f=Object(r.a)(t.keys());try{for(f.s();!(u=f.n()).done;){var d=u.value;console.log(d)}}catch(h){f.e(h)}finally{f.f()}O.a.post("/addbanner",t).then((function(e){console.log(e),L()("Successful!","You clicked the button!","success"),a.props.history.push("/app/freshlist/banner/bannerList")})).catch((function(e){console.log(e)}))},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(a.a)(D().mark((function e(){var t=this;return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("/admin/canceled_order").then((function(e){var n=e.data.data;t.setState({rowData:n})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runthisfunction",value:function(){var e=Object(a.a)(D().mark((function e(t){return D().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,O.a.get("/admin/del_order/".concat(t)).then((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.rowData,a=t.columnDefs,r=t.defaultColDef;return f.a.createElement(h.a,{className:"app-user-list"},f.a.createElement(p.a,{sm:"12"},f.a.createElement("h2",null," Select Date Range"),f.a.createElement(m.a,null,f.a.createElement(g.a,null,f.a.createElement(v.a,{className:"m-1",onSubmit:this.submitHandler},f.a.createElement(h.a,null,f.a.createElement(p.a,{lg:"3",className:"mb-2"},f.a.createElement(y.a,null,"All"),f.a.createElement(b.a,{required:!0,type:"select",name:"bannertype",placeholder:"",value:this.state.bannertype,onChange:this.changeHandler},f.a.createElement("option",{value:"select"},"--Select--"),f.a.createElement("option",{value:"All"},"All"),f.a.createElement("option",{value:"In-house"},"In-house"),f.a.createElement("option",{value:"Seller"},"Seller"))),f.a.createElement(p.a,{lg:"3",className:"mb-2"},f.a.createElement(y.a,null,"Start Date"),f.a.createElement(b.a,{required:!0,type:"date",name:"bannertype",placeholder:"",value:this.state.bannertype,onChange:this.changeHandler})),f.a.createElement(p.a,{lg:"3",className:"mb-2"},f.a.createElement(y.a,null,"End Date"),f.a.createElement(b.a,{required:!0,type:"date",name:"bannertype",placeholder:"",value:this.state.bannertype,onChange:this.changeHandler})),f.a.createElement(p.a,{lg:"3",className:"mb-2"},f.a.createElement(w.a.Ripple,{className:"bt",color:"primary",type:"submit"},"Show Data"))))))),f.a.createElement(p.a,{sm:"12"},f.a.createElement(m.a,null,f.a.createElement(h.a,{className:"m-2"},f.a.createElement(p.a,null,f.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Canceled List"))),f.a.createElement(g.a,null,null===this.state.rowData?null:f.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},f.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},f.a.createElement("div",{className:"mb-1"},f.a.createElement(E.a,{className:"p-1 ag-dropdown"},f.a.createElement(S.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,f.a.createElement(R.a,{className:"ml-50",size:15})),f.a.createElement(x.a,{right:!0},f.a.createElement(N.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),f.a.createElement(N.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),f.a.createElement(N.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),f.a.createElement(N.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),f.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},f.a.createElement("div",{className:"table-input mr-1"},f.a.createElement(b.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),f.a.createElement("div",{className:"export-btn"},f.a.createElement(w.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),f.a.createElement(j.a.Consumer,null,(function(t){return f.a.createElement(z.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:a,rowData:n,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),n}(f.a.Component);t.default=_},856:function(e,t,n){},859:function(e,t,n){"use strict";var a=n(6),r=n(8),i=n(12),o=n(21),l=n(1),c=n.n(l),s=n(2),u=n.n(s),f=n(5),d=n.n(f),h=n(3),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],m={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:h.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(i.a)(n)),n.focus=n.focus.bind(Object(i.a)(n)),n}Object(o.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.focus=function(){this.ref&&this.ref.focus()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,i=e.type,o=e.bsSize,l=e.valid,s=e.invalid,u=e.tag,f=e.addon,m=e.plaintext,g=e.innerRef,v=Object(r.a)(e,p),y=["radio","checkbox"].indexOf(i)>-1,b=new RegExp("\\D","g"),w=u||("select"===i||"textarea"===i?i:"input"),E="form-control";m?(E+="-plaintext",w=u||"input"):"file"===i?E+="-file":"range"===i?E+="-range":y&&(E=f?null:"form-check-input"),v.size&&b.test(v.size)&&(Object(h.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=v.size,delete v.size);var S=Object(h.mapToCssModules)(d()(t,s&&"is-invalid",l&&"is-valid",!!o&&"form-control-"+o,E),n);return("input"===w||u&&"function"===typeof u)&&(v.type=i),v.children&&!m&&"select"!==i&&"string"===typeof w&&"select"!==w&&(Object(h.warnOnce)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete v.children),c.a.createElement(w,Object(a.a)({},v,{ref:g,className:S,"aria-invalid":s}))},t}(c.a.Component);g.propTypes=m,g.defaultProps={type:"text"},t.a=g},865:function(e,t,n){"use strict";var a=n(6),r=n(8),i=n(12),o=n(21),l=n(1),c=n.n(l),s=n(2),u=n.n(s),f=n(5),d=n.n(f),h=n(3),p=["className","cssModule","inline","tag","innerRef"],m={children:u.a.node,inline:u.a.bool,tag:h.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},g=function(e){function t(t){var n;return(n=e.call(this,t)||this).getRef=n.getRef.bind(Object(i.a)(n)),n.submit=n.submit.bind(Object(i.a)(n)),n}Object(o.a)(t,e);var n=t.prototype;return n.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},n.submit=function(){this.ref&&this.ref.submit()},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,i=e.inline,o=e.tag,l=e.innerRef,s=Object(r.a)(e,p),u=Object(h.mapToCssModules)(d()(t,!!i&&"form-inline"),n);return c.a.createElement(o,Object(a.a)({},s,{ref:l,className:u}))},t}(l.Component);g.propTypes=m,g.defaultProps={tag:"form"},t.a=g},891:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(109);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(a.a)(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i,o=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){l=!0,i=e},f:function(){try{o||null==r.return||r.return()}finally{if(l)throw i}}}}},958:function(e,t,n){}}]);
//# sourceMappingURL=173.5d246100.chunk.js.map