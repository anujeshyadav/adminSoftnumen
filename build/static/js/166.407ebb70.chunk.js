(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[166],{1230:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(1),r=h(c),s=h(a(5)),i=h(a(2)),u=h(a(2519)),o=h(a(2520)),d=a(2521);function h(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){if(!this.props.disabled){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}}},{key:"handleTouchStart",value:function(e){this.props.disabled||(this.startX=(0,d.pointerCoord)(e).x,this.activated=!0)}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,l=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,s.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return r.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},r.default.createElement("div",{className:"react-toggle-track"},r.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),r.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),r.default.createElement("div",{className:"react-toggle-thumb"}),r.default.createElement("input",n({},l,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=m,m.displayName="Toggle",m.defaultProps={icons:{checked:r.default.createElement(u.default,null),unchecked:r.default.createElement(o.default,null)}},m.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},2519:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,l=a(1),c=(n=l)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},2520:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,l=a(1),c=(n=l)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},2521:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},2522:function(e,t,a){},2523:function(e,t,a){},3133:function(e,t,a){"use strict";a.r(t);var n=a(14),l=a(15),c=a(16),r=a(17),s=a(1),i=a.n(s),u=a(837),o=a(838),d=a(107),h=a(844),m=a(845),f=a(846),p=a(847),b=a(1230),E=a.n(b),v=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={isChecked:!1},e}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(h.a,null,i.a.createElement(m.a,null,i.a.createElement(f.a,null,"React Toggle Basic")),i.a.createElement(p.a,null,i.a.createElement("label",{className:"react-toggle-wrapper d-inline-block align-middle"},i.a.createElement(E.a,{defaultChecked:this.state.isChecked})),i.a.createElement("span",{className:"label-text align-middle"},"Adjecent Label Text")))}}]),a}(i.a.Component),k=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={isChecked:!1},e.handleSwitchChange=function(){alert("Switched!")},e}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(h.a,null,i.a.createElement(m.a,null,i.a.createElement(f.a,null,"React Toggle Event ")),i.a.createElement(p.a,null,i.a.createElement("label",{className:"react-toggle-wrapper"},i.a.createElement(E.a,{defaultChecked:this.state.isChecked,onChange:this.handleSwitchChange}))))}}]),a}(i.a.Component),g=a(204),y=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={isChecked:!1},e.handleSwitchChange=function(){e.setState({isChecked:!e.state.isChecked})},e}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(h.a,null,i.a.createElement(m.a,null,i.a.createElement(f.a,null,"React Toggle Controlled")),i.a.createElement(p.a,null,i.a.createElement("label",{className:"react-toggle-wrapper"},i.a.createElement(E.a,{checked:this.state.isChecked,onChange:this.handleSwitchChange,name:"controlledSwitch",value:"yes"}),i.a.createElement(g.a.Ripple,{color:"primary",onClick:this.handleSwitchChange,size:"sm"},this.state.isChecked?"True":"False"))))}}]),a}(i.a.Component),w=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(h.a,null,i.a.createElement(m.a,null,i.a.createElement(f.a,null,"React Toggle Disabled")),i.a.createElement(p.a,null,i.a.createElement("div",{className:"d-inline-block mr-1"},i.a.createElement("label",{className:"react-toggle-wrapper"},i.a.createElement(E.a,{defaultChecked:!1,disabled:!0}),i.a.createElement("span",{className:"label-text"},"Diabled, Unchecked"))),i.a.createElement("div",{className:"d-inline-block"},i.a.createElement("label",{className:"react-toggle-wrapper"},i.a.createElement(E.a,{defaultChecked:!0,disabled:!0}),i.a.createElement("span",{className:"label-text"},"Diabled, Checked")))))}}]),a}(i.a.Component),C=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={isChecked:!1},e}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(h.a,null,i.a.createElement(m.a,null,i.a.createElement(f.a,null,"React Toggle Custom Class")),i.a.createElement(p.a,null,i.a.createElement("label",{className:"react-toggle-wrapper w-25"},i.a.createElement(E.a,{defaultChecked:this.state.isChecked,className:"switch-danger"}),i.a.createElement("span",{className:"label-text"},"Adjecent Label"))))}}]),a}(i.a.Component),O=a(484),j=a(485),N=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={isChecked:!1},e}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(h.a,null,i.a.createElement(m.a,null,i.a.createElement(f.a,null,"React Toggle Icons")),i.a.createElement(p.a,null,i.a.createElement("div",{className:"d-inline-block mr-1"},i.a.createElement("label",{className:"react-toggle-wrapper"},i.a.createElement(E.a,{defaultChecked:this.state.isChecked,icons:{checked:i.a.createElement(O.a,{size:13,style:{position:"absolute",top:"-2px"}}),unchecked:i.a.createElement(j.a,{size:13,style:{position:"absolute",top:"-2px"}})}}),i.a.createElement("span",{className:"label-text"},"Custom Icons"))),i.a.createElement("div",{className:"d-inline-block"},i.a.createElement("label",{className:"react-toggle-wrapper"},i.a.createElement(E.a,{defaultChecked:this.state.isChecked,icons:!1}),i.a.createElement("span",{className:"label-text"},"No Icons")))))}}]),a}(i.a.Component),S=a(827),T=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(h.a,null,i.a.createElement(m.a,null,i.a.createElement(f.a,null,"Reactstrap Basic Switch")),i.a.createElement(p.a,null,i.a.createElement(S.a,{type:"switch",id:"exampleCustomSwitch",Reactstrap:!0,Switch:!0,Colors:!0,name:"customSwitch",inline:!0},i.a.createElement("span",{className:"switch-label"},"Toggle this switch element")),i.a.createElement(S.a,{type:"switch",id:"exampleCustomSwitchdisabled",name:"customSwitchdisabled",inline:!0,disabled:!0},i.a.createElement("span",{className:"switch-label"},"Disabled switch element"))))}}]),a}(i.a.Component),x=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(h.a,null,i.a.createElement(m.a,null,i.a.createElement(f.a,null,"Reactstrap Switch Colors")),i.a.createElement(p.a,null,i.a.createElement("div",{className:"d-flex justify-content-start flex-wrap mt-1"},i.a.createElement(S.a,{type:"switch",className:"mr-1 mb-2",id:"primary",name:"primary",inline:!0},i.a.createElement("span",{className:"mb-0 switch-label"},"Primary")),i.a.createElement(S.a,{className:"custom-switch-success mr-1 mb-2",type:"switch",id:"success",name:"success",inline:!0},i.a.createElement("span",{className:"mb-0 switch-label"},"Success")),i.a.createElement(S.a,{className:"custom-switch-danger mr-1 mb-2",type:"switch",id:"danger",name:"danger",inline:!0},i.a.createElement("span",{className:"mb-0 switch-label"},"Danger")),i.a.createElement(S.a,{className:"custom-switch-info mr-1 mb-2",type:"switch",id:"info",name:"info",inline:!0},i.a.createElement("span",{className:"mb-0 switch-label"},"Info")),i.a.createElement(S.a,{className:"custom-switch-warning mr-1 mb-2",type:"switch",id:"warning",name:"warning",inline:!0},i.a.createElement("span",{className:"mb-0 switch-label"},"Warning")),i.a.createElement(S.a,{className:"custom-switch-dark mr-1 mb-2",type:"switch",id:"dark",name:"dark",inline:!0},i.a.createElement("span",{className:"mb-0 switch-label"},"Dark")))))}}]),a}(i.a.Component),_=function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(h.a,null,i.a.createElement(m.a,null,i.a.createElement(f.a,null,"Reactstrap Basic Switch")),i.a.createElement(p.a,null,i.a.createElement(S.a,{type:"switch",id:"default",name:"default",inline:!0},i.a.createElement("span",{className:"switch-label"},"Default")),i.a.createElement(S.a,{type:"switch",id:"medium",name:"medium",inline:!0,className:"switch-md"},i.a.createElement("span",{className:"switch-label"},"medium")),i.a.createElement(S.a,{type:"switch",id:"large",name:"large",inline:!0,className:"switch-lg"},i.a.createElement("span",{className:"switch-label"},"large"))))}}]),a}(i.a.Component),P=(a(2522),a(2523),function(e){Object(c.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{breadCrumbTitle:"Switch",breadCrumbParent:"Form Elements",breadCrumbActive:"Switch"}),i.a.createElement(u.a,null,i.a.createElement(o.a,{md:"6",sm:"12"},i.a.createElement(T,null)),i.a.createElement(o.a,{md:"6",sm:"12"},i.a.createElement(_,null)),i.a.createElement(o.a,{sm:"12"},i.a.createElement(x,null)),i.a.createElement(o.a,{md:"6",sm:"12"},i.a.createElement(v,null)),i.a.createElement(o.a,{md:"6",sm:"12"},i.a.createElement(k,null)),i.a.createElement(o.a,{md:"6",sm:"12"},i.a.createElement(y,null)),i.a.createElement(o.a,{md:"6",sm:"12"},i.a.createElement(w,null)),i.a.createElement(o.a,{md:"6",sm:"12"},i.a.createElement(C,null)),i.a.createElement(o.a,{md:"6",sm:"12"},i.a.createElement(N,null))))}}]),a}(i.a.Component));t.default=P}}]);
//# sourceMappingURL=166.407ebb70.chunk.js.map