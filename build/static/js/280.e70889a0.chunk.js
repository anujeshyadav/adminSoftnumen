(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[280],{2992:function(e,l,t){"use strict";t.r(l);var a=t(55),n=t(6),o=t(44),i=t(1),u=t.n(i),r=t(623),c=t.n(r),d=t(892),v=t(883),m=t(884),s=t(895),p=t(885),E=t(968),b=t(886),y=t(873),g=t(887),O=t(170),f=(t(25),t(158)),x=t.n(f),j=(t(625),t(904)),h=t(905),_=t(906),C=t(126),N=t(221),S=t.n(N),k=(t(624),t(88)),w=t(976),F=t(969),D=t(60),R=(t(907),t(90));l.default=function(){var e,l,t,r,f,N,W,H,A,J,M,V,z,L,P,q,K,B,T,Y,$,G,I,Q=Object(i.useState)({}),U=Object(o.a)(Q,2),X=U[0],Z=U[1],ee=Object(i.useState)({}),le=Object(o.a)(ee,2),te=le[0],ae=le[1],ne=Object(i.useState)({}),oe=Object(o.a)(ne,2),ie=oe[0],ue=oe[1],re=Object(i.useState)(""),ce=Object(o.a)(re,2),de=ce[0],ve=ce[1],me=Object(i.useState)(""),se=Object(o.a)(me,2),pe=se[0],Ee=se[1],be=Object(i.useState)({}),ye=Object(o.a)(be,2),ge=(ye[0],ye[1],Object(i.useContext)(R.a),function(e,l,t){var o=e.target,i=o.name,u=o.value,r=o.checked;ve(t),"checkbox"==l?ae(Object(n.a)(Object(n.a)({},te),{},Object(a.a)({},i,r))):"number"==l?/^\d{0,10}$/.test(u)?(ae(Object(n.a)(Object(n.a)({},te),{},Object(a.a)({},i,u))),Ee("")):Ee("Please enter a valid number with a maximum length of 10 digits"):u.length<=10?(ae(Object(n.a)(Object(n.a)({},te),{},Object(a.a)({},i,u))),Ee("")):ae(Object(n.a)(Object(n.a)({},te),{},Object(a.a)({},i,u)))});Object(i.useEffect)((function(){console.log(te)}),[te]),Object(i.useEffect)((function(){Object(k.lb)().then((function(e){var l,t,a,n=c.a.xml2json(e.data,{compact:!0,spaces:2});console.log(JSON.parse(n));null===(l=JSON.parse(n))||void 0===l||null===(t=l.CreateWareHouse)||void 0===t||null===(a=t.input[14].permissions)||void 0===a||a.role;Z(JSON.parse(n)),ue(JSON.parse(n))})).catch((function(e){console.log(e)}))}),[]);return u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement(d.a,null,u.a.createElement(v.a,{className:"m-2"},u.a.createElement(m.a,null,u.a.createElement("h1",{className:"float-left"},"Create WareHouse"))),u.a.createElement(s.a,null,u.a.createElement(p.a,{className:"m-1",onSubmit:function(e){e.preventDefault(),pe?S()("Error occured while Entering Details"):Object(k.i)(te).then((function(e){e.status&&(ae({}),window.location.reload(),S()("Acccont Created Successfully"))})).catch((function(e){console.log(e)}))}},u.a.createElement(v.a,{className:"mb-2"},u.a.createElement(m.a,{lg:"6",md:"6"},u.a.createElement(E.a,null,u.a.createElement(b.a,null,null===(e=ie.CreateWareHouse)||void 0===e||null===(l=e.MyDropdown)||void 0===l||null===(t=l.dropdown)||void 0===t||null===(r=t.label)||void 0===r?void 0:r._text),u.a.createElement(y.a,{required:!0,type:"select",name:null===(f=ie.CreateWareHouse)||void 0===f||null===(N=f.MyDropdown)||void 0===N||null===(W=N.dropdown)||void 0===W||null===(H=W.name)||void 0===H?void 0:H._text,value:te[null===(A=ie.CreateWareHouse)||void 0===A||null===(J=A.MyDropdown)||void 0===J||null===(M=J.dropdown)||void 0===M||null===(V=M.name)||void 0===V?void 0:V._text],onChange:ge},u.a.createElement("option",{value:""},"--Select Role--"),null===ie||void 0===ie||null===(z=ie.CreateWareHouse)||void 0===z||null===(L=z.MyDropdown)||void 0===L||null===(P=L.dropdown)||void 0===P?void 0:P.option.map((function(e,l){var t,a;return u.a.createElement("option",{key:l,value:null===e||void 0===e||null===(t=e._attributes)||void 0===t?void 0:t.value},null===e||void 0===e||null===(a=e._attributes)||void 0===a?void 0:a.value)}))))),X&&(null===X||void 0===X||null===(q=X.CreateWareHouse)||void 0===q||null===(K=q.input)||void 0===K?void 0:K.map((function(e,l){var t,o,i,r,c,d,v,s,p,y,O,f,N,S,k,w,F,D;if(null===e||void 0===e?void 0:e.role){var R,W,H,A=null===e||void 0===e||null===(R=e.role)||void 0===R?void 0:R.find((function(e){var l;return"WARRANTY APPROVER"===(null===(l=e._attributes)||void 0===l?void 0:l.name)}));null===A||void 0===A||null===(W=A.permissions)||void 0===W?void 0:W._text.includes("View"),null===A||void 0===A||null===(H=A.permissions)||void 0===H?void 0:H._text.includes("Edit")}return(null===e||void 0===e?void 0:e.phoneinput)?u.a.createElement(u.a.Fragment,null,u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{key:l,lg:"6",md:"6",sm:"12"},u.a.createElement(E.a,null,u.a.createElement(b.a,null,null===e||void 0===e||null===(t=e.label)||void 0===t?void 0:t._text),u.a.createElement(x.a,{inputClass:"myphoneinput",country:"us",onKeyDown:function(l){var t,a;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(a=t._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},countryCodeEditable:!1,name:null===e||void 0===e||null===(o=e.name)||void 0===o?void 0:o._text,value:te[null===e||void 0===e||null===(i=e.name)||void 0===i?void 0:i._text],onChange:function(l){var t;ae(Object(n.a)(Object(n.a)({},te),{},Object(a.a)({},null===e||void 0===e||null===(t=e.name)||void 0===t?void 0:t._text,l)))}}),de===l?u.a.createElement(u.a.Fragment,null,pe&&u.a.createElement("span",{style:{color:"red"}},pe)):u.a.createElement(u.a.Fragment,null))))):(null===e||void 0===e?void 0:e.library)?(null===e||void 0===e||null===(y=e.label._text)||void 0===y?void 0:y.includes("ountry"))?u.a.createElement(m.a,{key:l,lg:"6",md:"6",sm:"12"},u.a.createElement(E.a,null,u.a.createElement(b.a,null,null===e||void 0===e||null===(N=e.label)||void 0===N?void 0:N._text),u.a.createElement(C.a,{inputClass:"countryclass",className:"countryclassnw",options:j.a.getAllCountries(),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:te.country,onChange:function(e){ae(Object(n.a)(Object(n.a)({},te),{},Object(a.a)({},"country",e)))}}),de===l?u.a.createElement(u.a.Fragment,null,pe&&u.a.createElement("span",{style:{color:"red"}},pe)):u.a.createElement(u.a.Fragment,null))):(null===e||void 0===e||null===(O=e.label._text)||void 0===O?void 0:O.includes("tate"))?u.a.createElement(m.a,{key:l,lg:"6",md:"6",sm:"12"},u.a.createElement(E.a,null,u.a.createElement(b.a,null,null===e||void 0===e||null===(S=e.label)||void 0===S?void 0:S._text),u.a.createElement(C.a,{options:null===h.a||void 0===h.a?void 0:h.a.getStatesOfCountry(null===te||void 0===te||null===(k=te.country)||void 0===k?void 0:k.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:te.State,onChange:function(e){ae(Object(n.a)(Object(n.a)({},te),{},Object(a.a)({},"State",e)))}}),de===l?u.a.createElement(u.a.Fragment,null,pe&&u.a.createElement("span",{style:{color:"red"}},pe)):u.a.createElement(u.a.Fragment,null))):(null===e||void 0===e||null===(f=e.label._text)||void 0===f?void 0:f.includes("ity"))?u.a.createElement(m.a,{key:l,lg:"6",md:"6",sm:"12"},u.a.createElement(E.a,null,u.a.createElement(b.a,null,null===e||void 0===e||null===(w=e.label)||void 0===w?void 0:w._text),u.a.createElement(C.a,{options:null===_.a||void 0===_.a?void 0:_.a.getCitiesOfState(null===te||void 0===te||null===(F=te.State)||void 0===F?void 0:F.countryCode,null===te||void 0===te||null===(D=te.State)||void 0===D?void 0:D.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:te.City,onChange:function(e){ae(Object(n.a)(Object(n.a)({},te),{},Object(a.a)({},"City",e)))}}),de===l?u.a.createElement(u.a.Fragment,null,pe&&u.a.createElement("span",{style:{color:"red"}},pe)):u.a.createElement(u.a.Fragment,null))):void 0:u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{key:l,lg:"6",md:"6",sm:"12"},u.a.createElement(E.a,null,u.a.createElement(b.a,null,null===e||void 0===e||null===(r=e.label)||void 0===r?void 0:r._text),u.a.createElement(g.a,{onKeyDown:function(l){var t,a;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(a=t._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},type:null===e||void 0===e||null===(c=e.type)||void 0===c||null===(d=c._attributes)||void 0===d?void 0:d.type,placeholder:null===e||void 0===e||null===(v=e.placeholder)||void 0===v?void 0:v._text,name:null===e||void 0===e||null===(s=e.name)||void 0===s?void 0:s._text,value:te[null===e||void 0===e||null===(p=e.name)||void 0===p?void 0:p._text],onChange:function(t){var a,n;return ge(t,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,l)}}),de===l?u.a.createElement(u.a.Fragment,null,pe&&u.a.createElement("span",{style:{color:"red"}},pe)):u.a.createElement(u.a.Fragment,null))))}))),u.a.createElement("div",{className:"container"},u.a.createElement(b.a,{className:"py-1"},"Notification"),u.a.createElement("div",null,X&&(null===X||void 0===X||null===(B=X.CreateWareHouse)||void 0===B||null===(T=B.CheckBox)||void 0===T||null===(Y=T.input)||void 0===Y?void 0:Y.map((function(e,l){var t,a,n,o,i;return u.a.createElement(u.a.Fragment,null,u.a.createElement("span",{key:l,className:"mx-2"},u.a.createElement(g.a,{style:{marginRight:"3px"},type:null===e||void 0===e||null===(t=e.type)||void 0===t||null===(a=t._attributes)||void 0===a?void 0:a.type,name:null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n._text,onChange:function(e){return ge(e,"checkbox")}})," ",u.a.createElement("span",{className:"mt-1 mx-1",style:{marginRight:"40px"}},"Whatsapp"==(null===e||void 0===e||null===(o=e.label)||void 0===o?void 0:o._text)?u.a.createElement(D.k,{className:"mx-1",color:"#59CE72",size:25}):u.a.createElement(u.a.Fragment,null,"SMS"==(null===(i=e.label)||void 0===i?void 0:i._text)?u.a.createElement(u.a.Fragment,null,u.a.createElement(F.c,{size:30})):u.a.createElement(u.a.Fragment,null,u.a.createElement(w.a,{className:"",size:30}))))))})))))),u.a.createElement("hr",null),u.a.createElement(v.a,{className:"mt-2 "},u.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(b.a,{className:""},u.a.createElement("h4",null,"Status")),u.a.createElement("div",{className:"form-label-group mx-1"},X&&(null===X||void 0===X||null===($=X.CreateWareHouse)||void 0===$||null===(G=$.Radiobutton)||void 0===G||null===(I=G.input)||void 0===I?void 0:I.map((function(e,l){var t,a,n,o,i;return u.a.createElement(E.a,{key:l},u.a.createElement(g.a,{key:l,style:{marginRight:"3px"},required:!0,type:null===e||void 0===e||null===(t=e.type)||void 0===t||null===(a=t._attributes)||void 0===a?void 0:a.type,name:null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n._text,value:"".concat("Active"==(null===e||void 0===e||null===(o=e.label)||void 0===o?void 0:o._text)?"Active":"Deactive"),onChange:ge})," ",u.a.createElement("span",{className:"mx-1 mt-1",style:{marginRight:"20px"}},null===e||void 0===e||null===(i=e.label)||void 0===i?void 0:i._text))})))))),u.a.createElement(v.a,null,u.a.createElement(O.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-2 mx-2"},"Submit")))))))}},907:function(e,l,t){}}]);
//# sourceMappingURL=280.e70889a0.chunk.js.map