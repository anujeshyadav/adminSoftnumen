(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[379],{982:function(e,l,t){"use strict";t.r(l);var n=t(55),a=t(6),o=t(44),u=t(1),i=t.n(u),c=t(78),d=t(623),r=t.n(d),v=t(892),m=t(883),s=t(884),E=t(895),p=t(885),b=t(968),y=t(886),g=t(873),f=t(887),O=t(170),x=(t(25),t(158)),_=t.n(x),j=(t(625),t(976)),h=t(969),C=t(60),F=t(221),k=t.n(F),N=t(904),S=t(905),w=t(906),A=t(126),D=(t(624),t(88));l.default=function(e){var l,t,d,x,F,R,M,V,J,K,L,z,P,q,U,W,B,I,T,Y,$,G,H,Q=e.EditOneData,X=Object(u.useState)({}),Z=Object(o.a)(X,2),ee=Z[0],le=Z[1],te=Object(u.useState)({}),ne=Object(o.a)(te,2),ae=ne[0],oe=ne[1],ue=Object(u.useState)({}),ie=Object(o.a)(ue,2),ce=ie[0],de=ie[1],re=Object(u.useState)(""),ve=Object(o.a)(re,2),me=ve[0],se=ve[1],Ee=Object(u.useState)(""),pe=Object(o.a)(Ee,2),be=pe[0],ye=pe[1],ge=(Object(c.h)(),function(e,l,t){var o=e.target,u=o.name,i=o.value,c=o.checked;se(t),"checkbox"==l?oe(Object(a.a)(Object(a.a)({},ae),{},Object(n.a)({},u,c))):"number"==l?/^\d{0,10}$/.test(i)?(oe(Object(a.a)(Object(a.a)({},ae),{},Object(n.a)({},u,i))),ye("")):ye("Please enter a valid number with a maximum length of 10 digits"):i.length<=10?(oe(Object(a.a)(Object(a.a)({},ae),{},Object(n.a)({},u,i))),ye("")):oe(Object(a.a)(Object(a.a)({},ae),{},Object(n.a)({},u,i)))});Object(u.useEffect)((function(){console.log(ae)}),[ae]),Object(u.useEffect)((function(){console.log(Q),oe(Q),Object(D.k)().then((function(e){var l=r.a.xml2json(e.data,{compact:!0,spaces:2});le(JSON.parse(l)),de(JSON.parse(l))})).catch((function(e){console.log(e)}))}),[]);return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement(v.a,null,i.a.createElement(m.a,{className:"m-2"},i.a.createElement(s.a,null,i.a.createElement("h1",{className:"float-left"},"Account Information"))),i.a.createElement(E.a,null,i.a.createElement(p.a,{className:"m-1",onSubmit:function(e){e.preventDefault(),console.log(ae,null===Q||void 0===Q?void 0:Q._id),Object(D.j)(null===Q||void 0===Q?void 0:Q._id,ae).then((function(e){e.status&&(oe({}),k()("Acccont Updated Successfully"))})).catch((function(e){console.log(e)}))}},i.a.createElement(m.a,{className:"mb-2"},i.a.createElement(s.a,{lg:"6",md:"6"},i.a.createElement(b.a,null,i.a.createElement(y.a,null,null===(l=ce.CreateAccount)||void 0===l||null===(t=l.MyDropdown)||void 0===t||null===(d=t.dropdown)||void 0===d||null===(x=d.label)||void 0===x?void 0:x._text),i.a.createElement(g.a,{required:!0,type:"select",name:null===(F=ce.CreateAccount)||void 0===F||null===(R=F.MyDropdown)||void 0===R||null===(M=R.dropdown)||void 0===M||null===(V=M.name)||void 0===V?void 0:V._text,value:ae[null===(J=ce.CreateAccount)||void 0===J||null===(K=J.MyDropdown)||void 0===K||null===(L=K.dropdown)||void 0===L||null===(z=L.name)||void 0===z?void 0:z._text],onChange:ge},i.a.createElement("option",{value:""},"--Select Role--"),null===ce||void 0===ce||null===(P=ce.CreateAccount)||void 0===P||null===(q=P.MyDropdown)||void 0===q||null===(U=q.dropdown)||void 0===U?void 0:U.option.map((function(e,l){var t,n;return i.a.createElement("option",{key:l,value:null===e||void 0===e||null===(t=e._attributes)||void 0===t?void 0:t.value},null===e||void 0===e||null===(n=e._attributes)||void 0===n?void 0:n.value)}))))),ee&&(null===ee||void 0===ee||null===(W=ee.CreateAccount)||void 0===W||null===(B=W.input)||void 0===B?void 0:B.map((function(e,l){var t,o,u,c,d,r,v,m,E,p,g,O,x,j,h,C,F,k,D,R,M,V,J,K,L,z,P,q="",U="";if(null===e||void 0===e?void 0:e.role){var W,B,I,T=null===e||void 0===e||null===(W=e.role)||void 0===W?void 0:W.find((function(e){var l;return"WARRANTY APPROVER"===(null===(l=e._attributes)||void 0===l?void 0:l.name)}));q=null===T||void 0===T||null===(B=T.permissions)||void 0===B?void 0:B._text.includes("View"),U=null===T||void 0===T||null===(I=T.permissions)||void 0===I?void 0:I._text.includes("Edit")}return(null===e||void 0===e?void 0:e.phoneinput)?i.a.createElement(i.a.Fragment,null,U&&U?i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{key:l,lg:"6",md:"6",sm:"12"},i.a.createElement(b.a,null,i.a.createElement(y.a,null,null===e||void 0===e||null===(t=e.label)||void 0===t?void 0:t._text),i.a.createElement(_.a,{inputClass:"myphoneinput",country:"us",onKeyDown:function(l){var t,n;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(n=t._attributes)||void 0===n?void 0:n.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},countryCodeEditable:!1,name:null===e||void 0===e||null===(o=e.name)||void 0===o?void 0:o._text,value:ae[null===e||void 0===e||null===(u=e.name)||void 0===u?void 0:u._text],onChange:function(l){var t;oe(Object(a.a)(Object(a.a)({},ae),{},Object(n.a)({},null===e||void 0===e||null===(t=e.name)||void 0===t?void 0:t._text,l)))}}),me===l?i.a.createElement(i.a.Fragment,null,be&&i.a.createElement("span",{style:{color:"red"}},be)):i.a.createElement(i.a.Fragment,null)))):i.a.createElement(i.a.Fragment,null,q&&q?i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{key:l,lg:"6",md:"6",sm:"12"},i.a.createElement(b.a,null,i.a.createElement(y.a,null,null===e||void 0===e||null===(c=e.label)||void 0===c?void 0:c._text),i.a.createElement(_.a,{disabled:!0,inputClass:"myphoneinput",country:"us",onKeyDown:function(l){var t,n;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(n=t._attributes)||void 0===n?void 0:n.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},countryCodeEditable:!1,name:null===e||void 0===e||null===(d=e.name)||void 0===d?void 0:d._text,value:ae[null===e||void 0===e||null===(r=e.name)||void 0===r?void 0:r._text],onChange:function(l){var t;oe(Object(a.a)(Object(a.a)({},ae),{},Object(n.a)({},null===e||void 0===e||null===(t=e.name)||void 0===t?void 0:t._text,l)))}}),me===l?i.a.createElement(i.a.Fragment,null,be&&i.a.createElement("span",{style:{color:"red"}},be)):i.a.createElement(i.a.Fragment,null)))):null)):(null===e||void 0===e?void 0:e.library)?(null===e||void 0===e||null===(D=e.label._text)||void 0===D?void 0:D.includes("ountry"))?i.a.createElement(s.a,{key:l,lg:"6",md:"6",sm:"12"},i.a.createElement(b.a,null,i.a.createElement(y.a,null,null===e||void 0===e||null===(V=e.label)||void 0===V?void 0:V._text),i.a.createElement(A.a,{inputClass:"countryclass",className:"countryclassnw",options:N.a.getAllCountries(),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:ae.country,onChange:function(e){oe(Object(a.a)(Object(a.a)({},ae),{},Object(n.a)({},"country",e)))}}),me===l?i.a.createElement(i.a.Fragment,null,be&&i.a.createElement("span",{style:{color:"red"}},be)):i.a.createElement(i.a.Fragment,null))):(null===e||void 0===e||null===(R=e.label._text)||void 0===R?void 0:R.includes("tate"))?i.a.createElement(s.a,{key:l,lg:"6",md:"6",sm:"12"},i.a.createElement(b.a,null,i.a.createElement(y.a,null,null===e||void 0===e||null===(J=e.label)||void 0===J?void 0:J._text),i.a.createElement(A.a,{options:null===S.a||void 0===S.a?void 0:S.a.getStatesOfCountry(null===ae||void 0===ae||null===(K=ae.country)||void 0===K?void 0:K.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:ae.State,onChange:function(e){oe(Object(a.a)(Object(a.a)({},ae),{},Object(n.a)({},"State",e)))}}),me===l?i.a.createElement(i.a.Fragment,null,be&&i.a.createElement("span",{style:{color:"red"}},be)):i.a.createElement(i.a.Fragment,null))):(null===e||void 0===e||null===(M=e.label._text)||void 0===M?void 0:M.includes("ity"))?i.a.createElement(s.a,{key:l,lg:"6",md:"6",sm:"12"},i.a.createElement(b.a,null,i.a.createElement(y.a,null,null===e||void 0===e||null===(L=e.label)||void 0===L?void 0:L._text),i.a.createElement(A.a,{options:null===w.a||void 0===w.a?void 0:w.a.getCitiesOfState(null===ae||void 0===ae||null===(z=ae.State)||void 0===z?void 0:z.countryCode,null===ae||void 0===ae||null===(P=ae.State)||void 0===P?void 0:P.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:ae.City,onChange:function(e){oe(Object(a.a)(Object(a.a)({},ae),{},Object(n.a)({},"City",e)))}}),me===l?i.a.createElement(i.a.Fragment,null,be&&i.a.createElement("span",{style:{color:"red"}},be)):i.a.createElement(i.a.Fragment,null))):void 0:i.a.createElement(i.a.Fragment,null,U&&U?i.a.createElement(s.a,{key:l,lg:"6",md:"6",sm:"12"},i.a.createElement(b.a,null,i.a.createElement(y.a,null,null===e||void 0===e||null===(v=e.label)||void 0===v?void 0:v._text),i.a.createElement(f.a,{onKeyDown:function(l){var t,n;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(n=t._attributes)||void 0===n?void 0:n.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},type:null===e||void 0===e||null===(m=e.type)||void 0===m||null===(E=m._attributes)||void 0===E?void 0:E.type,placeholder:null===e||void 0===e||null===(p=e.placeholder)||void 0===p?void 0:p._text,name:null===e||void 0===e||null===(g=e.name)||void 0===g?void 0:g._text,value:ae[null===e||void 0===e||null===(O=e.name)||void 0===O?void 0:O._text],onChange:function(t){var n,a;return ge(t,null===e||void 0===e||null===(n=e.type)||void 0===n||null===(a=n._attributes)||void 0===a?void 0:a.type,l)}}),me===l?i.a.createElement(i.a.Fragment,null,be&&i.a.createElement("span",{style:{color:"red"}},be)):i.a.createElement(i.a.Fragment,null))):i.a.createElement(i.a.Fragment,null,q&&q?i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{key:l,lg:"6",md:"6",sm:"12"},i.a.createElement(b.a,null,i.a.createElement(y.a,null,null===e||void 0===e||null===(x=e.label)||void 0===x?void 0:x._text),i.a.createElement(f.a,{disabled:!0,onKeyDown:function(l){var t,n;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(n=t._attributes)||void 0===n?void 0:n.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},type:null===e||void 0===e||null===(j=e.type)||void 0===j||null===(h=j._attributes)||void 0===h?void 0:h.type,placeholder:null===e||void 0===e||null===(C=e.placeholder)||void 0===C?void 0:C._text,name:null===e||void 0===e||null===(F=e.name)||void 0===F?void 0:F._text,value:ae[null===e||void 0===e||null===(k=e.name)||void 0===k?void 0:k._text],onChange:function(t){var n,a;return ge(t,null===e||void 0===e||null===(n=e.type)||void 0===n||null===(a=n._attributes)||void 0===a?void 0:a.type,l)}}),me===l?i.a.createElement(i.a.Fragment,null,be&&i.a.createElement("span",{style:{color:"red"}},be)):i.a.createElement(i.a.Fragment,null)))):null))}))),i.a.createElement("div",{className:"container"},i.a.createElement(y.a,{className:"py-1"},"Notification"),i.a.createElement("div",null,ee&&(null===ee||void 0===ee||null===(I=ee.CreateAccount)||void 0===I||null===(T=I.CheckBox)||void 0===T||null===(Y=T.input)||void 0===Y?void 0:Y.map((function(e,l){var t,n,a,o,u;return i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{key:l,className:"mx-2"},i.a.createElement(f.a,{style:{marginRight:"3px"},type:null===e||void 0===e||null===(t=e.type)||void 0===t||null===(n=t._attributes)||void 0===n?void 0:n.type,name:null===e||void 0===e||null===(a=e.name)||void 0===a?void 0:a._text,onChange:function(e){return ge(e,"checkbox")}})," ",i.a.createElement("span",{className:"mt-1 mx-1",style:{marginRight:"40px"}},"Whatsapp"==(null===e||void 0===e||null===(o=e.label)||void 0===o?void 0:o._text)?i.a.createElement(C.k,{className:"mx-1",color:"#59CE72",size:25}):i.a.createElement(i.a.Fragment,null,"SMS"==(null===(u=e.label)||void 0===u?void 0:u._text)?i.a.createElement(i.a.Fragment,null,i.a.createElement(h.c,{size:30})):i.a.createElement(i.a.Fragment,null,i.a.createElement(j.a,{className:"",size:30}))))))})))))),i.a.createElement("hr",null),i.a.createElement(m.a,{className:"mt-2 "},i.a.createElement(s.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},i.a.createElement(y.a,{className:""},i.a.createElement("h4",null,"Status")),i.a.createElement("div",{className:"form-label-group mx-1"},ee&&(null===ee||void 0===ee||null===($=ee.CreateAccount)||void 0===$||null===(G=$.Radiobutton)||void 0===G||null===(H=G.input)||void 0===H?void 0:H.map((function(e,l){var t,n,a,o,u;return i.a.createElement(b.a,{key:l},i.a.createElement(f.a,{key:l,style:{marginRight:"3px"},required:!0,type:null===e||void 0===e||null===(t=e.type)||void 0===t||null===(n=t._attributes)||void 0===n?void 0:n.type,name:null===e||void 0===e||null===(a=e.name)||void 0===a?void 0:a._text,value:"".concat("Active"==(null===e||void 0===e||null===(o=e.label)||void 0===o?void 0:o._text)?"Active":"Deactive"),onChange:ge})," ",i.a.createElement("span",{className:"mt-2",style:{marginLeft:"20px"}},null===e||void 0===e||null===(u=e.label)||void 0===u?void 0:u._text))})))))),i.a.createElement(m.a,null,i.a.createElement(O.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-2 mx-2"},"Update")))))))}}}]);
//# sourceMappingURL=379.c1213398.chunk.js.map