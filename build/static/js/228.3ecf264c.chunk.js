(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[228],{1044:function(e,l,a){"use strict";var t=a(5),n=a(11),o=a(1),i=a.n(o),u=a(2),d=a.n(u),r=a(7),v=a.n(r),m=a(4),c=["className","cssModule","tag","size"],s={tag:m.tagPropType,size:d.a.string,className:d.a.string,cssModule:d.a.object},p=function(e){var l=e.className,a=e.cssModule,o=e.tag,u=e.size,d=Object(n.a)(e,c),r=Object(m.mapToCssModules)(v()(l,"input-group",u?"input-group-"+u:null),a);return i.a.createElement(o,Object(t.a)({},d,{className:r}))};p.propTypes=s,p.defaultProps={tag:"div"},l.a=p},2970:function(e,l,a){"use strict";a.r(l);var t=a(55),n=a(6),o=a(36),i=a(44),u=a(1),d=a.n(u),r=a(623),v=a.n(r),m=a(892),c=a(883),s=a(884),p=a(886),E=a(873),y=a(895),b=a(885),g=a(968),x=a(1044),_=a(887),f=a(170),h=a(900),N=a(881),O=a(882),F=a(888),j=a(158),w=a.n(j),k=(a(625),a(624),a(88)),D=a(976),C=a(969),S=a(60),R=(a(907),a(159));l.default=function(e){var l,a,r,j,P,W,M,A,J,z,T,V,I,L,q,U,B,K,Y,$,G,H,Q,X,Z,ee,le,ae,te,ne,oe,ie=Object(u.useState)({}),ue=Object(i.a)(ie,2),de=(ue[0],ue[1]),re=Object(u.useState)({}),ve=Object(i.a)(re,2),me=ve[0],ce=ve[1],se=Object(u.useState)({}),pe=Object(i.a)(se,2),Ee=pe[0],ye=pe[1],be=Object(u.useState)(""),ge=Object(i.a)(be,2),xe=ge[0],_e=ge[1],fe=Object(u.useState)({}),he=Object(i.a)(fe,2),Ne=he[0],Oe=he[1],Fe=Object(u.useState)(""),je=Object(i.a)(Fe,2),we=je[0],ke=je[1],De=Object(u.useState)({}),Ce=Object(i.a)(De,2),Se=Ce[0],Re=Ce[1],Pe=Object(u.useState)(""),We=Object(i.a)(Pe,2),Me=We[0],Ae=We[1],Je=Object(u.useState)(!1),ze=Object(i.a)(Je,2),Te=ze[0],Ve=ze[1],Ie=Object(u.useState)(!1),Le=Object(i.a)(Ie,2),qe=Le[0],Ue=Le[1],Be=function(){return Ue(!qe)},Ke=Object(u.useState)(!1),Ye=Object(i.a)(Ke,2),$e=Ye[0],Ge=Ye[1],He=function(){return Ge(!$e)},Qe=Object(u.useState)([{userName:"",Role:"",comment:"",time:""}]),Xe=Object(i.a)(Qe,2),Ze=Xe[0],el=Xe[1],ll=Object(u.useState)([{files:[]}]),al=Object(i.a)(ll,2),tl=al[0],nl=al[1],ol={userName:JSON.parse(localStorage.getItem("userData")).UserName,Role:JSON.parse(localStorage.getItem("userData")).Role,comment:"",time:(new Date).toString()},il=function(){Be()},ul=function(){Object(k.A)().then((function(e){console.log(e)})).catch((function(e){console.log(e)})),He()},dl=function(){Object(k.hb)().then((function(e){if(null===e||void 0===e?void 0:e.Warranty.length){var l,a,t=null===e||void 0===e||null===(l=e.Warranty[(null===e||void 0===e||null===(a=e.Warranty)||void 0===a?void 0:a.length)-1])||void 0===l?void 0:l.id,n=t.substring(0,5),o=parseInt(t.match(/\d+$/)[0],10)+1;Ae(n+o)}else{Ae("wrn001")}})).catch((function(e){console.log(e)}))},rl=function(e,l,a){var o=e.target,i=o.name,u=o.value,d=o.checked;_e(a),"checkbox"==l?ce(Object(n.a)(Object(n.a)({},me),{},Object(t.a)({},i,d))):"number"==l?/^\d{0,10}$/.test(u)?(ce(Object(n.a)(Object(n.a)({},me),{},Object(t.a)({},i,u))),ke("")):ke("Please enter a valid number with a maximum length of 10 digits"):u.length<=10?(ce(Object(n.a)(Object(n.a)({},me),{},Object(t.a)({},i,u))),ke("")):ce(Object(n.a)(Object(n.a)({},me),{},Object(t.a)({},i,u)))};Object(u.useEffect)((function(){var e=function(e){null===e.state?console.log("User used the browser back button."):console.log("User navigated to another menu or route.")};return window.addEventListener("popstate",e),function(){window.removeEventListener("popstate",e)}}),[me,Ze,tl]),Object(u.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));Re(e),dl(),Object(k.jb)().then((function(e){var l,a,t,n,o,i,u,d,r=v.a.xml2json(e.data,{compact:!0,spaces:2}),m=null===(l=JSON.parse(r))||void 0===l||null===(a=l.Warranty)||void 0===a||null===(t=a.CheckBox)||void 0===t?void 0:t.input;null===m||void 0===m||m.map((function(e){me[null===e||void 0===e?void 0:e.name._text]=!1})),de(null===(n=JSON.parse(r))||void 0===n?void 0:n.Warranty),Oe(null===(o=JSON.parse(r))||void 0===o||null===(i=o.Warranty.CurrentStatus)||void 0===i||null===(u=i.MyDropDown)||void 0===u?void 0:u.dropdown),ye(null===(d=JSON.parse(r))||void 0===d?void 0:d.Warranty)})).catch((function(e){console.log(e)}))}),[]);return d.a.createElement("div",null,d.a.createElement("div",null,d.a.createElement(m.a,null,d.a.createElement(c.a,{className:"m-2"},d.a.createElement(s.a,{className:""},d.a.createElement("div",{style:{justifyContent:"space-between"},className:"d-flex myclasswikiheading"},d.a.createElement("h1",{className:"justify-content-start"},"Create Warranty"),d.a.createElement("div",{className:"mystatus"},"Status : (Draft) "),d.a.createElement("div",{className:"mystatus"},d.a.createElement("div",null,Ne&&Ne?d.a.createElement(d.a.Fragment,null,d.a.createElement(p.a,null,null===Ne||void 0===Ne||null===(l=Ne.label)||void 0===l?void 0:l._text),d.a.createElement(E.a,{required:!0,type:"select",name:null===Ne||void 0===Ne||null===(a=Ne.name)||void 0===a?void 0:a._text,value:me[null===Ne||void 0===Ne||null===(r=Ne.name)||void 0===r?void 0:r._text],onChange:rl},d.a.createElement("option",{value:""},"--Select Status---"),null===Ne||void 0===Ne||null===(j=Ne.option)||void 0===j?void 0:j.map((function(e,l){var a,t,n,o=null===e||void 0===e||null===(a=e._attributes)||void 0===a?void 0:a.permission.split(","),i=null===o||void 0===o?void 0:o.includes(null===Se||void 0===Se?void 0:Se.Role);return d.a.createElement(d.a.Fragment,null,i&&d.a.createElement("option",{key:l,value:null===e||void 0===e||null===(t=e._attributes)||void 0===t?void 0:t.value},null===e||void 0===e||null===(n=e._attributes)||void 0===n?void 0:n.value))})))):null))),d.a.createElement("div",null,d.a.createElement("span",null,"Warranty Id")," ",d.a.createElement("span",null,"# :",Me)))),d.a.createElement(y.a,null,d.a.createElement(b.a,{className:"m-1",onSubmit:function(e){var l,a,t,n,o,i,u,d,r,v,m,c,s,p,E,y;e.preventDefault();var b=new FormData;null===Ee||void 0===Ee||null===(l=Ee.CheckBox)||void 0===l||null===(a=l.input)||void 0===a||a.map((function(e){b.append("".concat(null===e||void 0===e?void 0:e.name._text),me[null===e||void 0===e?void 0:e.name._text])})),null===Ee||void 0===Ee||null===(t=Ee.PartDetails)||void 0===t||null===(n=t.MyDropDown)||void 0===n||n.map((function(e){var l,a,t,n;b.append("".concat(null===e||void 0===e||null===(l=e.dropdown)||void 0===l||null===(a=l.name)||void 0===a?void 0:a._text),me[null===e||void 0===e||null===(t=e.dropdown)||void 0===t||null===(n=t.name)||void 0===n?void 0:n._text])}));var g,x,_=null===Ee||void 0===Ee||null===(o=Ee.MyDropDown)||void 0===o?void 0:o.dropdown;_&&b.append("".concat(null===(g=_.name)||void 0===g?void 0:g._text),me[null===(x=_.name)||void 0===x?void 0:x._text]);null===Ee||void 0===Ee||null===(i=Ee.PartDetails)||void 0===i||null===(u=i.input)||void 0===u||u.map((function(e){var l,a;b.append("".concat(null===e||void 0===e||null===(l=e.name)||void 0===l?void 0:l._text),me[null===e||void 0===e||null===(a=e.name)||void 0===a?void 0:a._text])})),null===Ee||void 0===Ee||null===(d=Ee.ProductDetails)||void 0===d||null===(r=d.MyDropDown)||void 0===r||r.map((function(e){var l,a,t,n;b.append("".concat(null===e||void 0===e||null===(l=e.dropdown)||void 0===l||null===(a=l.name)||void 0===a?void 0:a._text),me[null===e||void 0===e||null===(t=e.dropdown)||void 0===t||null===(n=t.name)||void 0===n?void 0:n._text])})),null===Ee||void 0===Ee||null===(v=Ee.ProductDetails)||void 0===v||null===(m=v.input)||void 0===m||m.map((function(e){var l,a;b.append("".concat(null===e||void 0===e||null===(l=e.name)||void 0===l?void 0:l._text),me[null===e||void 0===e||null===(a=e.name)||void 0===a?void 0:a._text])})),null===Ee||void 0===Ee||null===(c=Ee.WType)||void 0===c||null===(s=c.MyDropDown)||void 0===s||s.map((function(e){var l,a,t,n;b.append("".concat(null===e||void 0===e||null===(l=e.dropdown)||void 0===l||null===(a=l.name)||void 0===a?void 0:a._text),me[null===e||void 0===e||null===(t=e.dropdown)||void 0===t||null===(n=t.name)||void 0===n?void 0:n._text])})),null===Ee||void 0===Ee||null===(p=Ee.WType)||void 0===p||null===(E=p.input)||void 0===E||E.map((function(e){var l,a;b.append("".concat(null===e||void 0===e||null===(l=e.name)||void 0===l?void 0:l._text),me[null===e||void 0===e||null===(a=e.name)||void 0===a?void 0:a._text])})),null===Ee||void 0===Ee||null===(y=Ee.input)||void 0===y||y.map((function(e){var l,a;b.append("".concat(null===e||void 0===e||null===(l=e.name)||void 0===l?void 0:l._text),me[null===e||void 0===e||null===(a=e.name)||void 0===a?void 0:a._text])})),b.append("id",Me),Ze.length>0&&b.append("Comments",JSON.stringify(Ze));var f=JSON.parse(localStorage.getItem("userData"));if(tl.length){var h=[];null===tl||void 0===tl||tl.map((function(e,l){var a=Array.from(null===e||void 0===e?void 0:e.files);h.push(a)}));var N=h.flat();null===N||void 0===N||N.map((function(e,l){b.append("files",e)}))}(tl.length||tl.length)&&(b.append("Role",null===f||void 0===f?void 0:f.Role),b.append("time",(new Date).toString()),b.append("userName",null===f||void 0===f?void 0:f.UserName)),Object(k.ib)(b).then((function(e){console.log(null===e||void 0===e?void 0:e.Warranty),dl(),swal("Warrenty Created Successfully")})).catch((function(e){console.log(e.response),swal("Something Went Wrong")}))}},d.a.createElement(c.a,{className:"mb-2"},null===Ee||void 0===Ee||null===(P=Ee.WType)||void 0===P?void 0:P.MyDropDown.map((function(e,l){var a,t,n,o,i,u,r;return d.a.createElement(s.a,{lg:"6",md:"6",key:l},d.a.createElement(g.a,null,d.a.createElement(p.a,null,null===e||void 0===e||null===(a=e.dropdown)||void 0===a||null===(t=a.label)||void 0===t?void 0:t._text),d.a.createElement(E.a,{required:!0,type:"select",name:null===e||void 0===e||null===(n=e.dropdown)||void 0===n||null===(o=n.name)||void 0===o?void 0:o._text,value:me[null===e||void 0===e||null===(i=e.dropdown)||void 0===i||null===(u=i.dropdown)||void 0===u||null===(r=u.name)||void 0===r?void 0:r._text],onChange:rl},d.a.createElement("option",{value:""},"--Select---"),e.dropdown.option.map((function(e,l){var a,t;return d.a.createElement("option",{key:l,value:null===e||void 0===e||null===(a=e._attributes)||void 0===a?void 0:a.value},null===e||void 0===e||null===(t=e._attributes)||void 0===t?void 0:t.value)})))))})),Ee&&(null===Ee||void 0===Ee||null===(W=Ee.WType)||void 0===W||null===(M=W.input)||void 0===M?void 0:M.map((function(e,l){var a,o,i,u,r,v,m,c,E,y,b,h,N,O,F,j,k,D,C,S,P,W;if(null===e||void 0===e?void 0:e.role){var M,A,J,z=null===e||void 0===e||null===(M=e.role)||void 0===M?void 0:M.find((function(e){var l;return"WARRANTY APPROVER"===(null===(l=e._attributes)||void 0===l?void 0:l.name)}));null===z||void 0===z||null===(A=z.permissions)||void 0===A?void 0:A._text.includes("View"),null===z||void 0===z||null===(J=z.permissions)||void 0===J?void 0:J._text.includes("Edit")}return(null===e||void 0===e?void 0:e.lookup)?d.a.createElement(d.a.Fragment,null,d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,{key:l,lg:"6",md:"6",sm:"12"},d.a.createElement(g.a,null,d.a.createElement(p.a,null,null===e||void 0===e||null===(a=e.label)||void 0===a?void 0:a._text),d.a.createElement(x.a,{className:"maininput"},d.a.createElement(_.a,{className:"form-control inputs",type:"text",name:null===e||void 0===e||null===(o=e.name)||void 0===o?void 0:o._text,placeholder:null===e||void 0===e?void 0:e.placeholder._text,value:me[null===e||void 0===e||null===(i=e.name)||void 0===i?void 0:i._text],readOnly:!0}),d.a.createElement(f.a,{onClick:il,color:"primary",className:"mybtn primary"},d.a.createElement(R.g,{onClick:function(e){return e.preventDefault()},fill:"white"}))),xe===l?d.a.createElement(d.a.Fragment,null,we&&d.a.createElement("span",{style:{color:"red"}},we)):d.a.createElement(d.a.Fragment,null))))):(null===e||void 0===e?void 0:e.phoneinput)?d.a.createElement(d.a.Fragment,null,d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,{key:l,lg:"6",md:"6",sm:"12"},d.a.createElement(g.a,null,d.a.createElement(p.a,null,null===e||void 0===e||null===(u=e.label)||void 0===u?void 0:u._text),d.a.createElement(w.a,{disableCountryCode:!0,disabled:!0,inputClass:"myphoneinput",country:"us",onKeyDown:function(l){var a,t;"number"==(null===e||void 0===e||null===(a=e.type)||void 0===a||null===(t=a._attributes)||void 0===t?void 0:t.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},countryCodeEditable:!1,name:null===e||void 0===e||null===(r=e.name)||void 0===r?void 0:r._text,value:me[null===e||void 0===e||null===(v=e.name)||void 0===v?void 0:v._text],onChange:function(l){var a;ce(Object(n.a)(Object(n.a)({},me),{},Object(t.a)({},null===e||void 0===e||null===(a=e.name)||void 0===a?void 0:a._text,l)))}}),xe===l?d.a.createElement(d.a.Fragment,null,we&&d.a.createElement("span",{style:{color:"red"}},we)):d.a.createElement(d.a.Fragment,null))))):(null===e||void 0===e?void 0:e.Readonly)?"checkbox"==(null===e||void 0===e||null===(m=e.type._attributes)||void 0===m?void 0:m.type)?d.a.createElement(d.a.Fragment,null,d.a.createElement(p.a,{className:"mx-1"},null===e||void 0===e||null===(c=e.heading)||void 0===c?void 0:c._text),d.a.createElement(s.a,{key:l,lg:"12",md:"12",sm:"12"},d.a.createElement(g.a,null,d.a.createElement(_.a,{disabled:!0,className:"mx-1",type:null===e||void 0===e||null===(E=e.type._attributes)||void 0===E?void 0:E.type,name:null===e||void 0===e||null===(y=e.name)||void 0===y?void 0:y._text,placeholder:null===e||void 0===e?void 0:e.name._text,value:me[null===e||void 0===e||null===(b=e.value)||void 0===b?void 0:b._text]}),d.a.createElement("span",{className:"mx-3 py-1"},null===e||void 0===e||null===(h=e.value)||void 0===h?void 0:h._text),xe===l?d.a.createElement(d.a.Fragment,null,we&&d.a.createElement("span",{style:{color:"red"}},we)):d.a.createElement(d.a.Fragment,null)))):d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,{key:l,lg:"6",md:"6",sm:"12"},d.a.createElement(p.a,null,null===e||void 0===e||null===(N=e.label)||void 0===N?void 0:N._text),d.a.createElement(g.a,null,d.a.createElement(_.a,{disabled:!0,className:"form-control",type:null===e||void 0===e||null===(O=e.type._attributes)||void 0===O?void 0:O.type,name:null===e||void 0===e||null===(F=e.name)||void 0===F?void 0:F._text,placeholder:null===e||void 0===e?void 0:e.placeholder._text,value:me[null===e||void 0===e?void 0:e.name._text]}),d.a.createElement("span",{className:"mx-2"},null===e||void 0===e||null===(j=e.value)||void 0===j?void 0:j._text),xe===l?d.a.createElement(d.a.Fragment,null,we&&d.a.createElement("span",{style:{color:"red"}},we)):d.a.createElement(d.a.Fragment,null)))):d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,{className:"mb-2",key:l,lg:"6",md:"6",sm:"12"},d.a.createElement(p.a,null,null===e||void 0===e||null===(k=e.label)||void 0===k?void 0:k._text),d.a.createElement(_.a,{type:null===e||void 0===e||null===(D=e.type)||void 0===D||null===(C=D._attributes)||void 0===C?void 0:C.type,placeholder:null===e||void 0===e||null===(S=e.placeholder)||void 0===S?void 0:S._text,name:null===e||void 0===e||null===(P=e.name)||void 0===P?void 0:P._text,value:me[null===e||void 0===e||null===(W=e.name)||void 0===W?void 0:W._text],onChange:function(a){var t,n;return rl(a,null===e||void 0===e||null===(t=e.type)||void 0===t||null===(n=t._attributes)||void 0===n?void 0:n.type,l)}}),xe===l?d.a.createElement(d.a.Fragment,null,we&&d.a.createElement("span",{style:{color:"red"}},we)):d.a.createElement(d.a.Fragment,null)))})))),d.a.createElement("h4",{className:"mb-1"},"Product Details"),d.a.createElement(c.a,null,null===Ee||void 0===Ee||null===(A=Ee.ProductDetails)||void 0===A?void 0:A.MyDropDown.map((function(e,l){var a,t,n,o,i,u,r;return d.a.createElement(s.a,{lg:"6",md:"6",key:l},d.a.createElement(g.a,null,d.a.createElement(p.a,null,null===e||void 0===e||null===(a=e.dropdown)||void 0===a||null===(t=a.label)||void 0===t?void 0:t._text),d.a.createElement(E.a,{required:!0,type:"select",name:null===e||void 0===e||null===(n=e.dropdown)||void 0===n||null===(o=n.name)||void 0===o?void 0:o._text,value:me[null===e||void 0===e||null===(i=e.dropdown)||void 0===i||null===(u=i.dropdown)||void 0===u||null===(r=u.name)||void 0===r?void 0:r._text],onChange:rl},d.a.createElement("option",{value:""},"--Select---"),e.dropdown.option.map((function(e,l){var a,t;return d.a.createElement("option",{key:l,value:null===e||void 0===e||null===(a=e._attributes)||void 0===a?void 0:a.value},null===e||void 0===e||null===(t=e._attributes)||void 0===t?void 0:t.value)})))))})),Ee&&(null===Ee||void 0===Ee||null===(J=Ee.ProductDetails)||void 0===J||null===(z=J.input)||void 0===z?void 0:z.map((function(e,l){var a,o,i,u,r,v,m,c,E,y,b,h,N,O,F,j,k,D,C,S,P,W;if(null===e||void 0===e?void 0:e.role){var M,A,J,z=null===e||void 0===e||null===(M=e.role)||void 0===M?void 0:M.find((function(e){var l;return"WARRANTY APPROVER"===(null===(l=e._attributes)||void 0===l?void 0:l.name)}));null===z||void 0===z||null===(A=z.permissions)||void 0===A?void 0:A._text.includes("View"),null===z||void 0===z||null===(J=z.permissions)||void 0===J?void 0:J._text.includes("Edit")}return(null===e||void 0===e?void 0:e.lookup)?d.a.createElement(d.a.Fragment,null,d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,{key:l,lg:"6",md:"6",sm:"12"},d.a.createElement(g.a,null,d.a.createElement(p.a,null,null===e||void 0===e||null===(a=e.label)||void 0===a?void 0:a._text),d.a.createElement(x.a,{className:"maininput"},d.a.createElement(_.a,{className:"form-control inputs",type:"text",name:null===e||void 0===e||null===(o=e.name)||void 0===o?void 0:o._text,placeholder:null===e||void 0===e?void 0:e.placeholder._text,value:me[null===e||void 0===e||null===(i=e.name)||void 0===i?void 0:i._text],readOnly:!0}),d.a.createElement(f.a,{onClick:il,color:"primary",className:"mybtn primary"},d.a.createElement(R.g,{onClick:function(e){return e.preventDefault()},fill:"white"}))),xe===l?d.a.createElement(d.a.Fragment,null,we&&d.a.createElement("span",{style:{color:"red"}},we)):d.a.createElement(d.a.Fragment,null))))):(null===e||void 0===e?void 0:e.phoneinput)?d.a.createElement(d.a.Fragment,null,d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,{key:l,lg:"6",md:"6",sm:"12"},d.a.createElement(g.a,null,d.a.createElement(p.a,null,null===e||void 0===e||null===(u=e.label)||void 0===u?void 0:u._text),d.a.createElement(w.a,{disableCountryCode:!0,disabled:!0,inputClass:"myphoneinput",country:"us",onKeyDown:function(l){var a,t;"number"==(null===e||void 0===e||null===(a=e.type)||void 0===a||null===(t=a._attributes)||void 0===t?void 0:t.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},countryCodeEditable:!1,name:null===e||void 0===e||null===(r=e.name)||void 0===r?void 0:r._text,value:me[null===e||void 0===e||null===(v=e.name)||void 0===v?void 0:v._text],onChange:function(l){var a;ce(Object(n.a)(Object(n.a)({},me),{},Object(t.a)({},null===e||void 0===e||null===(a=e.name)||void 0===a?void 0:a._text,l)))}}),xe===l?d.a.createElement(d.a.Fragment,null,we&&d.a.createElement("span",{style:{color:"red"}},we)):d.a.createElement(d.a.Fragment,null))))):(null===e||void 0===e?void 0:e.Readonly)?"checkbox"==(null===e||void 0===e||null===(m=e.type._attributes)||void 0===m?void 0:m.type)?d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,{key:l,lg:"12",md:"12",sm:"12"},d.a.createElement(p.a,{className:"mx-1"},null===e||void 0===e||null===(c=e.heading)||void 0===c?void 0:c._text),d.a.createElement(g.a,null,d.a.createElement(_.a,{disabled:!0,className:"mx-1",type:null===e||void 0===e||null===(E=e.type._attributes)||void 0===E?void 0:E.type,name:null===e||void 0===e||null===(y=e.name)||void 0===y?void 0:y._text,placeholder:null===e||void 0===e?void 0:e.name._text,value:me[null===e||void 0===e||null===(b=e.value)||void 0===b?void 0:b._text]}),d.a.createElement("span",{className:"mx-3"},null===e||void 0===e||null===(h=e.value)||void 0===h?void 0:h._text),xe===l?d.a.createElement(d.a.Fragment,null,we&&d.a.createElement("span",{style:{color:"red"}},we)):d.a.createElement(d.a.Fragment,null)))):d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,{key:l,lg:"6",md:"6",sm:"12"},d.a.createElement(p.a,null,null===e||void 0===e||null===(N=e.label)||void 0===N?void 0:N._text),d.a.createElement(g.a,null,d.a.createElement(_.a,{disabled:!0,className:"form-control",type:null===e||void 0===e||null===(O=e.type._attributes)||void 0===O?void 0:O.type,name:null===e||void 0===e||null===(F=e.name)||void 0===F?void 0:F._text,placeholder:null===e||void 0===e?void 0:e.name._text,value:me[null===e||void 0===e?void 0:e.name._text]}),d.a.createElement("span",{className:"mx-2"},null===e||void 0===e||null===(j=e.value)||void 0===j?void 0:j._text),xe===l?d.a.createElement(d.a.Fragment,null,we&&d.a.createElement("span",{style:{color:"red"}},we)):d.a.createElement(d.a.Fragment,null)))):d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,{className:"mb-2",key:l,lg:"6",md:"6",sm:"12"},d.a.createElement(p.a,null,null===e||void 0===e||null===(k=e.label)||void 0===k?void 0:k._text),d.a.createElement(_.a,{type:null===e||void 0===e||null===(D=e.type)||void 0===D||null===(C=D._attributes)||void 0===C?void 0:C.type,placeholder:null===e||void 0===e||null===(S=e.placeholder)||void 0===S?void 0:S._text,name:null===e||void 0===e||null===(P=e.name)||void 0===P?void 0:P._text,value:me[null===e||void 0===e||null===(W=e.name)||void 0===W?void 0:W._text],onChange:function(a){var t,n;return rl(a,null===e||void 0===e||null===(t=e.type)||void 0===t||null===(n=t._attributes)||void 0===n?void 0:n.type,l)}}),xe===l?d.a.createElement(d.a.Fragment,null,we&&d.a.createElement("span",{style:{color:"red"}},we)):d.a.createElement(d.a.Fragment,null)))})))),d.a.createElement("h4",{className:"mb-1"},"Part Details"),d.a.createElement(c.a,null,null===Ee||void 0===Ee||null===(T=Ee.PartDetails)||void 0===T?void 0:T.MyDropDown.map((function(e,l){var a,t,n,o,i,u,r;return d.a.createElement(s.a,{lg:"6",md:"6",key:l},d.a.createElement(g.a,null,d.a.createElement(p.a,null,null===e||void 0===e||null===(a=e.dropdown)||void 0===a||null===(t=a.label)||void 0===t?void 0:t._text),d.a.createElement(E.a,{required:!0,type:"select",name:null===e||void 0===e||null===(n=e.dropdown)||void 0===n||null===(o=n.name)||void 0===o?void 0:o._text,value:me[null===e||void 0===e||null===(i=e.dropdown)||void 0===i||null===(u=i.dropdown)||void 0===u||null===(r=u.name)||void 0===r?void 0:r._text],onChange:rl},d.a.createElement("option",{value:""},"--Select---"),e.dropdown.option.map((function(e,l){var a,t;return d.a.createElement("option",{key:l,value:null===e||void 0===e||null===(a=e._attributes)||void 0===a?void 0:a.value},null===e||void 0===e||null===(t=e._attributes)||void 0===t?void 0:t.value)})))))})),Ee&&(null===Ee||void 0===Ee||null===(V=Ee.PartDetails)||void 0===V||null===(I=V.input)||void 0===I?void 0:I.map((function(e,l){var a,o,i,u,r,v,m,c,E,y,b,h,N,O,F,j,k,D,C,S,P,W;if(null===e||void 0===e?void 0:e.role){var M,A,J,z=null===e||void 0===e||null===(M=e.role)||void 0===M?void 0:M.find((function(e){var l;return"WARRANTY APPROVER"===(null===(l=e._attributes)||void 0===l?void 0:l.name)}));null===z||void 0===z||null===(A=z.permissions)||void 0===A?void 0:A._text.includes("View"),null===z||void 0===z||null===(J=z.permissions)||void 0===J?void 0:J._text.includes("Edit")}return(null===e||void 0===e?void 0:e.lookup)?d.a.createElement(d.a.Fragment,null,d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,{key:l,lg:"6",md:"6",sm:"12"},d.a.createElement(g.a,null,d.a.createElement(p.a,null,null===e||void 0===e||null===(a=e.label)||void 0===a?void 0:a._text),d.a.createElement(x.a,{className:"maininput"},d.a.createElement(_.a,{className:"form-control inputs",type:"text",name:null===e||void 0===e||null===(o=e.name)||void 0===o?void 0:o._text,placeholder:null===e||void 0===e?void 0:e.placeholder._text,value:me[null===e||void 0===e||null===(i=e.name)||void 0===i?void 0:i._text],readOnly:!0}),d.a.createElement(f.a,{onClick:ul,color:"primary",className:"mybtn primary"},d.a.createElement(R.g,{onClick:function(e){return e.preventDefault()},fill:"white"}))),xe===l?d.a.createElement(d.a.Fragment,null,we&&d.a.createElement("span",{style:{color:"red"}},we)):d.a.createElement(d.a.Fragment,null))))):(null===e||void 0===e?void 0:e.phoneinput)?d.a.createElement(d.a.Fragment,null,d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,{key:l,lg:"6",md:"6",sm:"12"},d.a.createElement(g.a,null,d.a.createElement(p.a,null,null===e||void 0===e||null===(u=e.label)||void 0===u?void 0:u._text),d.a.createElement(w.a,{disableCountryCode:!0,disabled:!0,inputClass:"myphoneinput",country:"us",onKeyDown:function(l){var a,t;"number"==(null===e||void 0===e||null===(a=e.type)||void 0===a||null===(t=a._attributes)||void 0===t?void 0:t.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},countryCodeEditable:!1,name:null===e||void 0===e||null===(r=e.name)||void 0===r?void 0:r._text,value:me[null===e||void 0===e||null===(v=e.name)||void 0===v?void 0:v._text],onChange:function(l){var a;ce(Object(n.a)(Object(n.a)({},me),{},Object(t.a)({},null===e||void 0===e||null===(a=e.name)||void 0===a?void 0:a._text,l)))}}),xe===l?d.a.createElement(d.a.Fragment,null,we&&d.a.createElement("span",{style:{color:"red"}},we)):d.a.createElement(d.a.Fragment,null))))):(null===e||void 0===e?void 0:e.Readonly)?"checkbox"==(null===e||void 0===e||null===(m=e.type._attributes)||void 0===m?void 0:m.type)?d.a.createElement(d.a.Fragment,null,d.a.createElement(p.a,{className:"mx-1"},null===e||void 0===e||null===(c=e.heading)||void 0===c?void 0:c._text),d.a.createElement(s.a,{key:l,lg:"12",md:"12",sm:"12"},d.a.createElement(g.a,null,d.a.createElement(_.a,{disabled:!0,className:"mx-1",type:null===e||void 0===e||null===(E=e.type._attributes)||void 0===E?void 0:E.type,name:null===e||void 0===e||null===(y=e.name)||void 0===y?void 0:y._text,placeholder:null===e||void 0===e?void 0:e.name._text,value:me[null===e||void 0===e||null===(b=e.value)||void 0===b?void 0:b._text]}),d.a.createElement("span",{className:"mx-3 py-1"},null===e||void 0===e||null===(h=e.value)||void 0===h?void 0:h._text),xe===l?d.a.createElement(d.a.Fragment,null,we&&d.a.createElement("span",{style:{color:"red"}},we)):d.a.createElement(d.a.Fragment,null)))):d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,{key:l,lg:"6",md:"6",sm:"12"},d.a.createElement(p.a,null,null===e||void 0===e||null===(N=e.label)||void 0===N?void 0:N._text),d.a.createElement(g.a,null,d.a.createElement(_.a,{disabled:!0,className:"form-control",type:null===e||void 0===e||null===(O=e.type._attributes)||void 0===O?void 0:O.type,name:null===e||void 0===e||null===(F=e.name)||void 0===F?void 0:F._text,placeholder:null===e||void 0===e?void 0:e.name._text,value:me[null===e||void 0===e?void 0:e.name._text]}),d.a.createElement("span",{className:"mx-2"},null===e||void 0===e||null===(j=e.value)||void 0===j?void 0:j._text),xe===l?d.a.createElement(d.a.Fragment,null,we&&d.a.createElement("span",{style:{color:"red"}},we)):d.a.createElement(d.a.Fragment,null)))):d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,{className:"mb-2",key:l,lg:"6",md:"6",sm:"12"},d.a.createElement(p.a,null,null===e||void 0===e||null===(k=e.label)||void 0===k?void 0:k._text),d.a.createElement(_.a,{type:null===e||void 0===e||null===(D=e.type)||void 0===D||null===(C=D._attributes)||void 0===C?void 0:C.type,placeholder:null===e||void 0===e||null===(S=e.placeholder)||void 0===S?void 0:S._text,name:null===e||void 0===e||null===(P=e.name)||void 0===P?void 0:P._text,value:me[null===e||void 0===e||null===(W=e.name)||void 0===W?void 0:W._text],onChange:function(a){var t,n;return rl(a,null===e||void 0===e||null===(t=e.type)||void 0===t||null===(n=t._attributes)||void 0===n?void 0:n.type,l)}}),xe===l?d.a.createElement(d.a.Fragment,null,we&&d.a.createElement("span",{style:{color:"red"}},we)):d.a.createElement(d.a.Fragment,null)))})))),d.a.createElement(c.a,null,(null===Ee||void 0===Ee||null===(L=Ee.MyDropDown)||void 0===L?void 0:L.dropdown)&&(null===Ee||void 0===Ee||null===(q=Ee.MyDropDown)||void 0===q?void 0:q.dropdown)?d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,{lg:"6",md:"6",sm:"12"},d.a.createElement(g.a,null,d.a.createElement(p.a,null,null===Ee||void 0===Ee||null===(U=Ee.MyDropDown)||void 0===U||null===(B=U.dropdown)||void 0===B||null===(K=B.label)||void 0===K?void 0:K._text),d.a.createElement(E.a,{required:!0,type:"select",name:null===Ee||void 0===Ee||null===(Y=Ee.MyDropDown)||void 0===Y||null===($=Y.dropdown)||void 0===$||null===(G=$.name)||void 0===G?void 0:G._text,value:me[null===Ee||void 0===Ee||null===(H=Ee.MyDropDown)||void 0===H||null===(Q=H.dropdown)||void 0===Q||null===(X=Q.name)||void 0===X?void 0:X._text],onChange:rl},d.a.createElement("option",{value:""},"--Select Status---"),null===Ee||void 0===Ee||null===(Z=Ee.MyDropDown)||void 0===Z||null===(ee=Z.dropdown)||void 0===ee||null===(le=ee.option)||void 0===le?void 0:le.map((function(e,l){var a;return d.a.createElement("option",{key:l,value:null===e||void 0===e||null===(a=e._attributes)||void 0===a?void 0:a.value},null===e||void 0===e?void 0:e._text)})))))):null,Ee&&(null===Ee||void 0===Ee||null===(ae=Ee.input)||void 0===ae?void 0:ae.map((function(e,l){var a,o,i,u,r,v,m,c,E,y,b,h,N,O,F,j,k,D,C,S,P,W;if(null===e||void 0===e?void 0:e.role){var M,A,J,z=null===e||void 0===e||null===(M=e.role)||void 0===M?void 0:M.find((function(e){var l;return"WARRANTY APPROVER"===(null===(l=e._attributes)||void 0===l?void 0:l.name)}));null===z||void 0===z||null===(A=z.permissions)||void 0===A?void 0:A._text.includes("View"),null===z||void 0===z||null===(J=z.permissions)||void 0===J?void 0:J._text.includes("Edit")}return(null===e||void 0===e?void 0:e.lookup)?d.a.createElement(d.a.Fragment,null,d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,{key:l,lg:"6",md:"6",sm:"12"},d.a.createElement(g.a,null,d.a.createElement(p.a,null,null===e||void 0===e||null===(a=e.label)||void 0===a?void 0:a._text),d.a.createElement(x.a,{className:"maininput"},d.a.createElement(_.a,{className:"form-control inputs",type:"text",name:null===e||void 0===e||null===(o=e.name)||void 0===o?void 0:o._text,placeholder:null===e||void 0===e?void 0:e.placeholder._text,value:me[null===e||void 0===e||null===(i=e.name)||void 0===i?void 0:i._text],readOnly:!0}),d.a.createElement(f.a,{onClick:il,color:"primary",className:"mybtn primary"},d.a.createElement(R.g,{onClick:function(e){return e.preventDefault()},fill:"white"}))),xe===l?d.a.createElement(d.a.Fragment,null,we&&d.a.createElement("span",{style:{color:"red"}},we)):d.a.createElement(d.a.Fragment,null))))):(null===e||void 0===e?void 0:e.phoneinput)?d.a.createElement(d.a.Fragment,null,d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,{key:l,lg:"6",md:"6",sm:"12"},d.a.createElement(g.a,null,d.a.createElement(p.a,null,null===e||void 0===e||null===(u=e.label)||void 0===u?void 0:u._text),d.a.createElement(w.a,{disableCountryCode:!0,disabled:!0,inputClass:"myphoneinput",country:"us",onKeyDown:function(l){var a,t;"number"==(null===e||void 0===e||null===(a=e.type)||void 0===a||null===(t=a._attributes)||void 0===t?void 0:t.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},countryCodeEditable:!1,name:null===e||void 0===e||null===(r=e.name)||void 0===r?void 0:r._text,value:me[null===e||void 0===e||null===(v=e.name)||void 0===v?void 0:v._text],onChange:function(l){var a;ce(Object(n.a)(Object(n.a)({},me),{},Object(t.a)({},null===e||void 0===e||null===(a=e.name)||void 0===a?void 0:a._text,l)))}}),xe===l?d.a.createElement(d.a.Fragment,null,we&&d.a.createElement("span",{style:{color:"red"}},we)):d.a.createElement(d.a.Fragment,null))))):(null===e||void 0===e?void 0:e.Readonly)?"checkbox"==(null===e||void 0===e||null===(m=e.type._attributes)||void 0===m?void 0:m.type)?d.a.createElement(d.a.Fragment,null,d.a.createElement(p.a,{className:"mx-1"},null===e||void 0===e||null===(c=e.heading)||void 0===c?void 0:c._text),d.a.createElement(s.a,{key:l,lg:"12",md:"12",sm:"12"},d.a.createElement(g.a,null,d.a.createElement(_.a,{disabled:!0,className:"mx-1",type:null===e||void 0===e||null===(E=e.type._attributes)||void 0===E?void 0:E.type,name:null===e||void 0===e||null===(y=e.name)||void 0===y?void 0:y._text,placeholder:null===e||void 0===e?void 0:e.name._text,value:me[null===e||void 0===e||null===(b=e.value)||void 0===b?void 0:b._text]}),d.a.createElement("span",{className:"mx-3 py-1"},null===e||void 0===e||null===(h=e.value)||void 0===h?void 0:h._text),xe===l?d.a.createElement(d.a.Fragment,null,we&&d.a.createElement("span",{style:{color:"red"}},we)):d.a.createElement(d.a.Fragment,null)))):d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,{key:l,lg:"6",md:"6",sm:"12"},d.a.createElement(p.a,null,null===e||void 0===e||null===(N=e.label)||void 0===N?void 0:N._text),d.a.createElement(g.a,null,d.a.createElement(_.a,{disabled:!0,className:"form-control",type:null===e||void 0===e||null===(O=e.type._attributes)||void 0===O?void 0:O.type,name:null===e||void 0===e||null===(F=e.name)||void 0===F?void 0:F._text,placeholder:null===e||void 0===e?void 0:e.name._text,value:me[null===e||void 0===e?void 0:e.name._text]}),d.a.createElement("span",{className:"mx-2"},null===e||void 0===e||null===(j=e.value)||void 0===j?void 0:j._text),xe===l?d.a.createElement(d.a.Fragment,null,we&&d.a.createElement("span",{style:{color:"red"}},we)):d.a.createElement(d.a.Fragment,null)))):d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,{className:"mb-2",key:l,lg:"6",md:"6",sm:"12"},d.a.createElement(p.a,null,null===e||void 0===e||null===(k=e.label)||void 0===k?void 0:k._text),d.a.createElement(_.a,{type:null===e||void 0===e||null===(D=e.type)||void 0===D||null===(C=D._attributes)||void 0===C?void 0:C.type,placeholder:null===e||void 0===e||null===(S=e.placeholder)||void 0===S?void 0:S._text,name:null===e||void 0===e||null===(P=e.name)||void 0===P?void 0:P._text,value:me[null===e||void 0===e||null===(W=e.name)||void 0===W?void 0:W._text],onChange:function(a){var t,n;return rl(a,null===e||void 0===e||null===(t=e.type)||void 0===t||null===(n=t._attributes)||void 0===n?void 0:n.type,l)}}),xe===l?d.a.createElement(d.a.Fragment,null,we&&d.a.createElement("span",{style:{color:"red"}},we)):d.a.createElement(d.a.Fragment,null)))})))),d.a.createElement(c.a,null,d.a.createElement("div",{className:"container mb-2"},d.a.createElement(p.a,{className:"mb-1"},"Notification"),d.a.createElement("div",null,Ee&&(null===Ee||void 0===Ee||null===(te=Ee.CheckBox)||void 0===te||null===(ne=te.input)||void 0===ne?void 0:ne.map((function(e,l){var a,t,n,o,i;return d.a.createElement(d.a.Fragment,null,d.a.createElement("span",{key:l,className:"mx-2"},d.a.createElement(_.a,{style:{marginRight:"3px"},type:null===e||void 0===e||null===(a=e.type)||void 0===a||null===(t=a._attributes)||void 0===t?void 0:t.type,name:null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n._text,onChange:function(e){return rl(e,"checkbox")}})," ",d.a.createElement("span",{className:"mt-1 mx-1",style:{marginRight:"40px"}},"Whatsapp"==(null===e||void 0===e||null===(o=e.label)||void 0===o?void 0:o._text)?d.a.createElement(S.k,{className:"mx-1",color:"#59CE72",size:25}):d.a.createElement(d.a.Fragment,null,"SMS"==(null===(i=e.label)||void 0===i?void 0:i._text)?d.a.createElement(d.a.Fragment,null,d.a.createElement(C.c,{size:30})):d.a.createElement(d.a.Fragment,null,d.a.createElement(D.a,{className:"",size:30}))))))})))))),d.a.createElement("hr",null),d.a.createElement(c.a,null,d.a.createElement(f.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-2 mx-2"},"Submit"))),Te&&Te?d.a.createElement(d.a.Fragment,null,""!==(null===(oe=Ze[0])||void 0===oe?void 0:oe.comment)?d.a.createElement(d.a.Fragment,null,Ze.length&&(null===Ze||void 0===Ze?void 0:Ze.map((function(e,l){return d.a.createElement(c.a,{key:l},d.a.createElement(s.a,null,d.a.createElement("div",{style:{border:"1px solid black",padding:"2px 2px",borderRadius:"8px",marginBottom:"4px"},className:""},d.a.createElement("div",{className:"py-1 mx-2"},d.a.createElement("strong",null," ",d.a.createElement(S.g,{size:25,fill:"#055761"}))," ","\xa0",null===e||void 0===e?void 0:e.comment," ",null===e||void 0===e?void 0:e.userName," (",null===e||void 0===e?void 0:e.Role,") ",null===e||void 0===e?void 0:e.time))))})))):null):null,Ze&&(null===Ze||void 0===Ze?void 0:Ze.map((function(e,l){return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"container"},d.a.createElement(c.a,{key:l,className:"my-2"},d.a.createElement(s.a,{lg:"6",md:"6",sm:"12"},d.a.createElement(p.a,null,"Comment"),d.a.createElement(_.a,{type:"textarea",name:"comment",placeholder:"Comment",value:e.comment||"",onChange:function(e){return function(e,l){var a=JSON.parse(localStorage.getItem("userData")),t=Object(o.a)(Ze);t[e].userName=null===a||void 0===a?void 0:a.UserName,t[e].Role=null===a||void 0===a?void 0:a.Role,t[e].time=(new Date).toString(),t[e][l.target.name]=l.target.value,el(t)}(l,e)}})),d.a.createElement(s.a,{className:"d-flex mt-2",lg:"3",md:"3",sm:"12"},d.a.createElement("div",null,l?d.a.createElement(f.a,{type:"button",className:"btn btn-danger",onClick:function(){return function(e){var l=Object(o.a)(Ze);l.splice(e,1),el(l)}(l)}},"-"):null),d.a.createElement("div",null,d.a.createElement(f.a,{className:"ml-1 ",color:"primary",type:"button",onClick:function(){el([].concat(Object(o.a)(Ze),[ol]))}},"+"))))))}))),d.a.createElement(f.a,{className:"ml-1 ",color:"primary",onClick:function(e){Ve(!0)}},"Submit Comment"),d.a.createElement("div",{className:"py-2 mx-1"},d.a.createElement(p.a,{className:"mt-1"},"Attachment"),tl.map((function(e,l){return d.a.createElement(c.a,{className:"my-2 mt-1"},d.a.createElement(s.a,{lg:"6",md:"6",sm:"12",key:l},d.a.createElement(_.a,{type:"file",multiple:!0,onChange:function(e){return function(e,l){var a=Object(o.a)(tl),t=l.target.files;a[e].files=t,nl(a)}(l,e)}})),d.a.createElement(s.a,{className:"d-flex mt-2",lg:"3",md:"3",sm:"12"},d.a.createElement("div",null,l?d.a.createElement(f.a,{type:"button",className:"btn btn-danger",onClick:function(){return function(e){var l=Object(o.a)(tl);l.splice(e,1),nl(l)}(l)}},"-"):null),d.a.createElement("div",null,d.a.createElement(f.a,{className:"ml-1",color:"primary",type:"button",onClick:function(){nl([].concat(Object(o.a)(tl),[{files:[]}]))}},"+"))))}))))),d.a.createElement(h.a,Object.assign({fullscreen:"xl",size:"lg",backdrop:!1,isOpen:qe,toggle:Be},e),d.a.createElement(N.a,{toggle:Be},"Product List"),d.a.createElement(O.a,null,d.a.createElement("div",{className:"modalheaderaddrol p-1"},d.a.createElement("h3",null,"Product List"),d.a.createElement(F.a,{className:"tableofrole",bordered:!0,borderless:!0,hover:!0,responsive:!0,size:"sm",striped:!0},d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",null,"S.No."),d.a.createElement("th",null,"Product Name"))),d.a.createElement("tbody",null))))),d.a.createElement(h.a,Object.assign({fullscreen:"xl",size:"lg",backdrop:!1,isOpen:$e,toggle:He},e),d.a.createElement(N.a,{toggle:He},"Part List"),d.a.createElement(O.a,null,d.a.createElement("div",{className:"modalheaderaddrol p-1"},d.a.createElement("h3",null,"Part List"),d.a.createElement(F.a,{className:"tableofrole",bordered:!0,borderless:!0,hover:!0,responsive:!0,size:"sm",striped:!0},d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",null,"S.No."),d.a.createElement("th",null,"Product Name"))),d.a.createElement("tbody",null)))))))}},907:function(e,l,a){}}]);
//# sourceMappingURL=228.3ecf264c.chunk.js.map