(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[386],{1081:function(e,t,a){"use strict";var n,l=a(6),s=a(7),r=a(12),i=a(21),o=a(37),c=a(1),u=a.n(c),d=a(2),m=a.n(d),p=a(5),E=a.n(p),h=a(110),g=a(3),f=["tag","isOpen","className","navbar","cssModule","children","innerRef"];function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){Object(o.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var y=O(O({},h.Transition.propTypes),{},{isOpen:m.a.bool,children:m.a.oneOfType([m.a.arrayOf(m.a.node),m.a.node]),tag:g.tagPropType,className:m.a.node,navbar:m.a.bool,cssModule:m.a.object,innerRef:m.a.oneOfType([m.a.func,m.a.string,m.a.object])}),C=O(O({},h.Transition.defaultProps),{},{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:g.TransitionTimeouts.Collapse}),A=((n={})[g.TransitionStatuses.ENTERING]="collapsing",n[g.TransitionStatuses.ENTERED]="collapse show",n[g.TransitionStatuses.EXITING]="collapsing",n[g.TransitionStatuses.EXITED]="collapse",n);function v(e){return e.scrollHeight}var x=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(e){a[e]=a[e].bind(Object(r.a)(a))})),a}Object(i.a)(t,e);var a=t.prototype;return a.onEntering=function(e,t){this.setState({height:v(e)}),this.props.onEntering(e,t)},a.onEntered=function(e,t){this.setState({height:null}),this.props.onEntered(e,t)},a.onExit=function(e){this.setState({height:v(e)}),this.props.onExit(e)},a.onExiting=function(e){e.offsetHeight;this.setState({height:0}),this.props.onExiting(e)},a.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},a.render=function(){var e=this,t=this.props,a=t.tag,n=t.isOpen,r=t.className,i=t.navbar,o=t.cssModule,c=t.children,d=(t.innerRef,Object(s.a)(t,f)),m=this.state.height,p=Object(g.pick)(d,g.TransitionPropTypeKeys),b=Object(g.omit)(d,g.TransitionPropTypeKeys);return u.a.createElement(h.Transition,Object(l.a)({},p,{in:n,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(t){var n=function(e){return A[e]||"collapse"}(t),s=Object(g.mapToCssModules)(E()(r,n,i&&"navbar-collapse"),o),d=null===m?null:{height:m};return u.a.createElement(a,Object(l.a)({},b,{style:O(O({},b.style),d),className:s,ref:e.props.innerRef}),c)}))},t}(c.Component);x.propTypes=y,x.defaultProps=C,t.a=x},1176:function(e,t,a){"use strict";var n=a(6),l=a(7),s=a(1),r=a.n(s),i=a(2),o=a.n(i),c=a(5),u=a.n(c),d=a(3),m=["className","cssModule","type","size","color","children","tag"],p={tag:d.tagPropType,type:o.a.string,size:o.a.string,color:o.a.string,className:o.a.string,cssModule:o.a.object,children:o.a.string},E=function(e){var t=e.className,a=e.cssModule,s=e.type,i=e.size,o=e.color,c=e.children,p=e.tag,E=Object(l.a)(e,m),h=Object(d.mapToCssModules)(u()(t,!!i&&"spinner-"+s+"-"+i,"spinner-"+s,!!o&&"text-"+o),a);return r.a.createElement(p,Object(n.a)({role:"status"},E,{className:h}),c&&r.a.createElement("span",{className:Object(d.mapToCssModules)("sr-only",a)},c))};E.propTypes=p,E.defaultProps={tag:"div",type:"border",children:"Loading..."},t.a=E},3097:function(e,t,a){"use strict";a.r(t);var n=a(14),l=a(15),s=a(16),r=a(17),i=a(1),o=a.n(i),c=a(837),u=a(838),d=a(844),m=a(845),p=a(846),E=a(847),h=a(840),g=a(1081),f=a(1176),b=a(281),O=a(422),y=a(211),C=a(5),A=a.n(C),v=a(107),x=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),r=0;r<l;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={collapse:!0,reload:!1,isVisible:!0,status:"Opened",isVisibleAll:!0,reloadAll:!1,collapseAll:!0,statusAll:"Opened"},e.refreshCard=function(){e.setState({reload:!0}),setTimeout((function(){e.setState({reload:!1})}),2e3)},e.refreshCardAll=function(){e.setState({reloadAll:!0}),setTimeout((function(){e.setState({reloadAll:!1})}),2e3)},e.toggle=function(){e.setState((function(e){return{collapse:!e.collapse}}))},e.toggleAll=function(){e.setState((function(e){return{collapseAll:!e.collapseAll}}))},e.onEntered=function(){e.setState({status:"Opened"})},e.onEnteredAll=function(){e.setState({status:"Opened"})},e.onEntering=function(){e.setState({status:"Opening..."})},e.onEnteringAll=function(){e.setState({statusAll:"Opening..."})},e.onEnteredAll=function(){e.setState({statusAll:"Opened"})},e.onExited=function(){e.setState({status:"Closed"})},e.onExiting=function(){e.setState({status:"Closing..."})},e.onExitingAll=function(){e.setState({statusAll:"Closing..."})},e.onExitedAll=function(){e.setState({statusAll:"Closed"})},e.removeCard=function(){e.setState({isVisible:!1})},e.removeCardAll=function(){e.setState({isVisibleAll:!1})},e}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(v.a,{breadCrumbTitle:"Card Actions",breadCrumbParent:"Card",breadCrumbActive:"Card Actions"}),o.a.createElement(c.a,null,o.a.createElement(u.a,{sm:"12"},o.a.createElement(d.a,null,o.a.createElement(m.a,null,o.a.createElement(p.a,null,"Card Actions")),o.a.createElement(E.a,null,o.a.createElement(h.a,{responsive:!0,bordered:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Action"),o.a.createElement("th",null,"Icon"),o.a.createElement("th",null,"Details"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"Collapse"),o.a.createElement("td",{className:"text-center"},o.a.createElement(b.a,{className:"collapse-icon",size:15})),o.a.createElement("td",null," Collapse card content using collapse action.")),o.a.createElement("tr",null,o.a.createElement("td",null,"Refresh Content"),o.a.createElement("td",{className:"text-center"},o.a.createElement(O.a,{size:15})),o.a.createElement("td",null,"Refresh your card content using refresh action.")),o.a.createElement("tr",null,o.a.createElement("td",null,"Remove Card"),o.a.createElement("td",{className:"text-center"},o.a.createElement(y.a,{size:15})),o.a.createElement("td",null," Remove card from page using remove card action"))))))),o.a.createElement(u.a,{md:"6",sm:"12"},o.a.createElement(d.a,{className:A()("card-action",{"card-collapsed":"Closed"===this.state.status,"card-shown":"Opened"===this.state.status,closing:"Closing..."===this.state.status,opening:"Opening..."===this.state.status})},o.a.createElement(m.a,null,o.a.createElement(p.a,null,"Collapsible"),o.a.createElement(b.a,{className:"collapse-icon",size:15,onClick:this.toggle})),o.a.createElement(g.a,{isOpen:this.state.collapse,onExited:this.onExited,onEntered:this.onEntered,onExiting:this.onExiting,onEntering:this.onEntering},o.a.createElement(E.a,null,o.a.createElement("p",null,"You can create collapsible card using reactstrap's collapse component, to create a collapsible card you'll have to manage it's collapse state."),o.a.createElement("p",null,"Click on ",o.a.createElement(b.a,{size:15})," to see card collapse in action"))))),o.a.createElement(u.a,{md:"6",sm:"12"},o.a.createElement(d.a,{className:A()("card-reload card-action",{refreshing:this.state.reload})},o.a.createElement(m.a,null,o.a.createElement(p.a,null,"Refresh"),o.a.createElement(O.a,{size:15,onClick:this.refreshCard})),o.a.createElement(E.a,null,this.state.reload?o.a.createElement(f.a,{color:"primary",className:"reload-spinner"}):"",o.a.createElement("p",null,"You can add refresh content action to card by adding class"," ",o.a.createElement("code",null,".card-reload")," with your card tag, and add conditional spinner into card body to showp when card is refreshing."),o.a.createElement("p",null,"Click on ",o.a.createElement(O.a,{size:15})," to see card refresh in action")))),o.a.createElement(u.a,{md:"6",sm:"12"},o.a.createElement(d.a,{className:A()("card-action",{"d-none":!1===this.state.isVisible})},o.a.createElement(m.a,null,o.a.createElement(p.a,null,"Remove Card"),o.a.createElement(y.a,{size:15,onClick:this.removeCard})),o.a.createElement(E.a,null,o.a.createElement("p",null,"You can create a removable card by managing state"," ",o.a.createElement("code",null,"isVisible"),", which will add conditional d-none class which clicked on icon to remove your card."),o.a.createElement("p",null,"Click on ",o.a.createElement(y.a,{size:15})," to see card refresh in action")))),o.a.createElement(u.a,{md:"6",sm:"12"},o.a.createElement(d.a,{className:A()("card-action card-reload",{"d-none":!1===this.state.isVisibleAll,refreshing:this.state.reloadAll,"card-collapsed":"Closed"===this.state.statusAll,closing:"Closing..."===this.state.statusAll,opening:"Opening..."===this.state.statusAll})},o.a.createElement(m.a,null,o.a.createElement(p.a,null,"All Actions"),o.a.createElement("div",{className:"actions"},o.a.createElement(b.a,{className:"collapse-icon mr-50",size:15,onClick:this.toggleAll}),o.a.createElement(O.a,{className:"mr-50",size:15,onClick:this.refreshCardAll}),o.a.createElement(y.a,{size:15,onClick:this.removeCardAll}))),o.a.createElement(g.a,{isOpen:this.state.collapseAll,onExited:this.onExitedAll,onEntered:this.onEnteredAll,onExiting:this.onExitingAll,onEntering:this.onEnteringAll},o.a.createElement(E.a,null,this.state.reloadAll?o.a.createElement(f.a,{color:"primary",className:"reload-spinner"}):"","You can also add all three action together by managing all three actions's required classes and by managing their states."))))))}}]),a}(o.a.Component);t.default=x}}]);
//# sourceMappingURL=386.408dd667.chunk.js.map