(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[297],{3032:function(e,a,t){"use strict";t.r(a);var l=t(928),n=t(36),o=t(55),c=t(6),r=t(44),m=t(1),u=t.n(m),i=t(623),d=t.n(i),s=t(892),v=t(883),E=t(884),p=t(895),b=t(885),y=t(968),g=t(886),f=t(873),O=t(887),N=t(170),h=t(1044),j=t(900),x=t(881),C=t(882),S=t(888),_=t(889),k=(t(912),t(25),t(2109),t(158)),D=t.n(k),P=(t(625),t(904)),w=t(905),F=t(906),R=t(126),J=t(159),M=t(221),I=t.n(M),L=(t(624),t(88)),V=t(976),z=t(969),A=t(60),U=(t(907),t(90)),B=["Product Registration","SpareParts","Orders","PartsCatalogue","Scrutiny / Inspections","Invoices / Billing","Support","Servicing","Warehouse","Distributors","Dealers","Suppliers","Service Centers","Customer Data","Campaigns"];a.default=function(e){var a,t,i,k,M,K,q,W,Y,G=Object(m.useState)({}),$=Object(r.a)(G,2),H=$[0],Q=$[1],T=Object(m.useState)({}),X=Object(r.a)(T,2),Z=X[0],ee=X[1],ae=Object(m.useState)({}),te=Object(r.a)(ae,2),le=te[0],ne=te[1],oe=Object(m.useState)({}),ce=Object(r.a)(oe,2),re=ce[0],me=ce[1],ue=Object(m.useState)({}),ie=Object(r.a)(ue,2),de=ie[0],se=ie[1],ve=Object(m.useState)({}),Ee=Object(r.a)(ve,2),pe=(Ee[0],Ee[1]),be=Object(m.useState)(""),ye=Object(r.a)(be,2),ge=ye[0],fe=ye[1],Oe=Object(m.useState)(""),Ne=Object(r.a)(Oe,2),he=Ne[0],je=Ne[1],xe=Object(m.useState)(null),Ce=Object(r.a)(xe,2),Se=(Ce[0],Ce[1],Object(m.useState)([{name:JSON.parse(localStorage.getItem("userData")).UserName,userRole:JSON.parse(localStorage.getItem("userData")).Role,comment:"",time:new Date}])),_e=Object(r.a)(Se,2),ke=_e[0],De=_e[1],Pe=Object(m.useState)([{files:[]}]),we=Object(r.a)(Pe,2),Fe=we[0],Re=we[1],Je={userName:JSON.parse(localStorage.getItem("userData")).UserName,Role:JSON.parse(localStorage.getItem("userData")).Role,comment:"",time:(new Date).toString()},Me=Object(m.useState)([{productName:"",model:"",variant:""}]),Ie=Object(r.a)(Me,2),Le=Ie[0],Ve=Ie[1],ze=Object(m.useState)([{productName:"",color:""}]),Ae=Object(r.a)(ze,2),Ue=Ae[0],Be=Ae[1],Ke=Object(m.useState)(!1),qe=Object(r.a)(Ke,2),We=qe[0],Ye=qe[1],Ge=Object(m.useState)([{field:"name"},{field:"medals.gold",headerName:"Gold"},{field:"person.age"}]),$e=Object(r.a)(Ge,2),He=($e[0],$e[1],Object(m.useState)([])),Qe=Object(r.a)(He,2),Te=(Qe[0],Qe[1]),Xe=function(){return Ye(!We)},Ze=(Object(m.useContext)(U.a),function(e,a,t){console.log(e.target.value);var l=e.target,n=l.name,r=l.value,m=l.checked;fe(t),"checkbox"==a?se(Object(c.a)(Object(c.a)({},de),{},Object(o.a)({},n,m))):"number"==a?/^\d{0,10}$/.test(r)?(se(Object(c.a)(Object(c.a)({},de),{},Object(o.a)({},n,r))),je("")):je("Please enter a valid number with a maximum length of 10 digits"):r.length<=10?(se(Object(c.a)(Object(c.a)({},de),{},Object(o.a)({},n,r))),je("")):se(Object(c.a)(Object(c.a)({},de),{},Object(o.a)({},n,r)))});Object(m.useEffect)((function(){var e=localStorage.getItem("userData"),a=JSON.parse(e);a.UserName,a.Role}),[de]),Object(m.useEffect)((function(){Te(B),Object(L.M)().then((function(e){var a,t,l,n=d.a.xml2json(e.data,{compact:!0,spaces:2});console.log(JSON.parse(n).Policy),Q(JSON.parse(n));var o=null===(a=JSON.parse(n))||void 0===a||null===(t=a.MyDropdown)||void 0===t||null===(l=t.CheckBox)||void 0===l?void 0:l.input;null===o||void 0===o||o.map((function(e){de[null===e||void 0===e?void 0:e.name._text]=!1})),pe(JSON.parse(n))})).catch((function(e){console.log(e)}))}),[]),Object(m.useEffect)((function(){}),[ke]),Object(m.useEffect)((function(){console.log(de),console.log(H)}),[de,H]);var ea=function(e,a){var t=Object(n.a)(Le);t[e][a.target.name]=a.target.value,Ve(t)},aa=function(){Xe()};return u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement(s.a,null,u.a.createElement(v.a,{className:"m-2"},u.a.createElement(E.a,{className:""},u.a.createElement("div",null,u.a.createElement("h1",{className:""},"Create Policy ")),u.a.createElement("div",null,u.a.createElement("span",null,"Policy Id")," ",u.a.createElement("span",null,"#")))),u.a.createElement(p.a,null,u.a.createElement(b.a,{className:"m-1",onSubmit:function(e){var a,t,n,o;e.preventDefault();var c,r=new FormData,m=(null===H||void 0===H||null===(a=H.Policy)||void 0===a||null===(t=a.MyDropDown)||void 0===t||t.map((function(e){var a,t,l,n;r.append("".concat(null===e||void 0===e||null===(a=e.dropdown)||void 0===a||null===(t=a.name)||void 0===t?void 0:t._text),de[null===e||void 0===e||null===(l=e.dropdown)||void 0===l||null===(n=l.name)||void 0===n?void 0:n._text])})),null===H||void 0===H||null===(n=H.Policy)||void 0===n||null===(o=n.input)||void 0===o||o.map((function(e){var a,t;r.append("".concat(null===e||void 0===e||null===(a=e.name)||void 0===a?void 0:a._text),de[null===e||void 0===e||null===(t=e.name)||void 0===t?void 0:t._text])})),Object(l.a)(r.values()));try{for(m.s();!(c=m.n()).done;){var u=c.value;console.log(u)}}catch(i){m.e(i)}finally{m.f()}Object(L.L)(r).then((function(e){I()("Policy Added Successfully"),console.log(e)})).catch((function(e){console.log(e)}))}},u.a.createElement(v.a,{className:"mb-2"},null===H||void 0===H||null===(a=H.Policy)||void 0===a?void 0:a.MyDropDown.map((function(e,a){var t,l,n,o,c,r,m;return u.a.createElement(E.a,{lg:"6",md:"6",key:a},u.a.createElement(y.a,null,u.a.createElement(g.a,null,null===e||void 0===e||null===(t=e.dropdown)||void 0===t||null===(l=t.label)||void 0===l?void 0:l._text),u.a.createElement(f.a,{required:!0,type:"select",name:null===e||void 0===e||null===(n=e.dropdown)||void 0===n||null===(o=n.name)||void 0===o?void 0:o._text,value:de[null===e||void 0===e||null===(c=e.dropdown)||void 0===c||null===(r=c.dropdown)||void 0===r||null===(m=r.name)||void 0===m?void 0:m._text],onChange:Ze},u.a.createElement("option",{value:""},"--Select ",null===e||void 0===e?void 0:e.dropdown.name._text,"---"),e.dropdown.option.map((function(e,a){var t,l;return u.a.createElement("option",{key:a,value:null===e||void 0===e||null===(t=e._attributes)||void 0===t?void 0:t.value},null===e||void 0===e||null===(l=e._attributes)||void 0===l?void 0:l.value)})))))})),H&&(null===H||void 0===H||null===(t=H.Policy)||void 0===t||null===(i=t.input)||void 0===i?void 0:i.map((function(e,a){return"Policy Duration"==e.label._text?u.a.createElement(u.a.Fragment,null,u.a.createElement(E.a,{key:a,lg:"6",md:"6",sm:"12"},u.a.createElement(y.a,null,u.a.createElement(g.a,null,"Policy Duration"),u.a.createElement(v.a,null,u.a.createElement("div",{className:"mainDiv "},u.a.createElement("div",{className:"child"},u.a.createElement(O.a,{type:"number",placeholder:"Number"})),u.a.createElement("div",{className:"dropdownselect"},u.a.createElement(f.a,{type:"select"},u.a.createElement("option",{value:"day"},"Day"),u.a.createElement("option",{value:"month"},"Month"),u.a.createElement("option",{value:"year"},"Year")))),u.a.createElement("div",{className:"mainDiv "},u.a.createElement("div",{className:"child"},u.a.createElement(O.a,{type:"number",placeholder:"Number"})),u.a.createElement("div",{className:"dropdownselect"},u.a.createElement(f.a,{type:"select"},u.a.createElement("option",{value:"day"},"Day"),u.a.createElement("option",{value:"month"},"Month"),u.a.createElement("option",{value:"year"},"Year")))))))):(null===e||void 0===e?void 0:e.phoneinput)?u.a.createElement(u.a.Fragment,null,u.a.createElement(E.a,{key:a,lg:"6",md:"6",sm:"12"},u.a.createElement(y.a,null,u.a.createElement(g.a,null,null===e||void 0===e||null===(t=e.label)||void 0===t?void 0:t._text),u.a.createElement(D.a,{inputClass:"myphoneinput",country:"us",onKeyDown:function(a){var t,l;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(l=t._attributes)||void 0===l?void 0:l.type)&&["e","E","+","-"].includes(a.key)&&a.preventDefault()},countryCodeEditable:!1,name:null===e||void 0===e||null===(l=e.name)||void 0===l?void 0:l._text,value:de[null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n._text],onChange:function(a){var t;se(Object(c.a)(Object(c.a)({},de),{},Object(o.a)({},null===e||void 0===e||null===(t=e.name)||void 0===t?void 0:t._text,a)))}}),ge===a?u.a.createElement(u.a.Fragment,null,he&&u.a.createElement("span",{style:{color:"red"}},he)):u.a.createElement(u.a.Fragment,null)))):(null===e||void 0===e?void 0:e.library)?(null===e||void 0===e||null===(r=e.label._text)||void 0===r?void 0:r.includes("ountry"))?u.a.createElement(E.a,{key:a,lg:"6",md:"6",sm:"12"},u.a.createElement(y.a,null,u.a.createElement(g.a,null,null===e||void 0===e||null===(d=e.label)||void 0===d?void 0:d._text),u.a.createElement(R.a,{inputClass:"countryclass",className:"countryclassnw",options:P.a.getAllCountries(),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:Z,onChange:function(e){ee(e),se(Object(c.a)(Object(c.a)({},de),{},Object(o.a)({},"Country",null===e||void 0===e?void 0:e.name)))}}),ge===a?u.a.createElement(u.a.Fragment,null,he&&u.a.createElement("span",{style:{color:"red"}},he)):u.a.createElement(u.a.Fragment,null))):(null===e||void 0===e||null===(m=e.label._text)||void 0===m?void 0:m.includes("tate"))?u.a.createElement(E.a,{key:a,lg:"6",md:"6",sm:"12"},u.a.createElement(y.a,null,u.a.createElement(g.a,null,null===e||void 0===e||null===(s=e.label)||void 0===s?void 0:s._text),u.a.createElement(R.a,{options:null===w.a||void 0===w.a?void 0:w.a.getStatesOfCountry(null===Z||void 0===Z?void 0:Z.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:le,onChange:function(e){ne(e),se(Object(c.a)(Object(c.a)({},de),{},Object(o.a)({},"State",null===e||void 0===e?void 0:e.name)))}}),ge===a?u.a.createElement(u.a.Fragment,null,he&&u.a.createElement("span",{style:{color:"red"}},he)):u.a.createElement(u.a.Fragment,null))):(null===e||void 0===e||null===(i=e.label._text)||void 0===i?void 0:i.includes("ity"))?u.a.createElement(E.a,{key:a,lg:"6",md:"6",sm:"12"},u.a.createElement(y.a,null,u.a.createElement(g.a,null,null===e||void 0===e||null===(p=e.label)||void 0===p?void 0:p._text),u.a.createElement(R.a,{options:null===F.a||void 0===F.a?void 0:F.a.getCitiesOfState(null===le||void 0===le?void 0:le.countryCode,null===le||void 0===le?void 0:le.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:re,onChange:function(e){me(e),se(Object(c.a)(Object(c.a)({},de),{},Object(o.a)({},"City",null===e||void 0===e?void 0:e.name)))}}),ge===a?u.a.createElement(u.a.Fragment,null,he&&u.a.createElement("span",{style:{color:"red"}},he)):u.a.createElement(u.a.Fragment,null))):u.a.createElement(E.a,{key:a,lg:"6",md:"6",sm:"12"},u.a.createElement(y.a,{key:a},u.a.createElement(g.a,null,null===e||void 0===e||null===(b=e.label)||void 0===b?void 0:b._text),u.a.createElement(O.a,{onKeyDown:function(a){var t,l;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(l=t._attributes)||void 0===l?void 0:l.type)&&["e","E","+","-"].includes(a.key)&&a.preventDefault()},type:null===e||void 0===e||null===(N=e.type)||void 0===N||null===(h=N._attributes)||void 0===h?void 0:h.type,placeholder:null===e||void 0===e||null===(j=e.placeholder)||void 0===j?void 0:j._text,name:null===e||void 0===e||null===(x=e.name)||void 0===x?void 0:x._text,value:de[null===e||void 0===e||null===(C=e.name)||void 0===C?void 0:C._text],onChange:function(t){var l,n;return Ze(t,null===e||void 0===e||null===(l=e.type)||void 0===l||null===(n=l._attributes)||void 0===n?void 0:n.type,a)}}),ge===a?u.a.createElement(u.a.Fragment,null,he&&u.a.createElement("span",{style:{color:"red"}},he)):u.a.createElement(u.a.Fragment,null))):u.a.createElement(u.a.Fragment,null,u.a.createElement(E.a,{key:a,lg:"6",md:"6",sm:"12"},u.a.createElement(y.a,{key:a},u.a.createElement(g.a,null,null===e||void 0===e||null===(S=e.label)||void 0===S?void 0:S._text),u.a.createElement(O.a,{onKeyDown:function(a){var t,l;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(l=t._attributes)||void 0===l?void 0:l.type)&&["e","E","+","-"].includes(a.key)&&a.preventDefault()},type:null===e||void 0===e||null===(_=e.type)||void 0===_||null===(k=_._attributes)||void 0===k?void 0:k.type,placeholder:null===e||void 0===e||null===(J=e.placeholder)||void 0===J?void 0:J._text,name:null===e||void 0===e||null===(M=e.name)||void 0===M?void 0:M._text,value:de[null===e||void 0===e||null===(I=e.name)||void 0===I?void 0:I._text],onChange:function(t){var l,n;return Ze(t,null===e||void 0===e||null===(l=e.type)||void 0===l||null===(n=l._attributes)||void 0===n?void 0:n.type,a)}}),ge===a?u.a.createElement(u.a.Fragment,null,he&&u.a.createElement("span",{style:{color:"red"}},he)):u.a.createElement(u.a.Fragment,null))));var t,l,n,r,m,i,d,s,p,b,N,h,j,x,C,S,_,k,J,M,I})))),Fe.map((function(e,a){return u.a.createElement(v.a,{className:"my-2"},u.a.createElement(E.a,{lg:"6",md:"6",sm:"12",key:a},u.a.createElement(O.a,{type:"file",multiple:!0,onChange:function(e){return function(e,a){var t=Object(n.a)(Fe),l=a.target.files;t[e].files=l,Re(t)}(a,e)}})),u.a.createElement(E.a,{className:"d-flex mt-2",lg:"3",md:"3",sm:"12"},u.a.createElement("div",null,a?u.a.createElement(N.a,{type:"button",className:"btn btn-danger",onClick:function(){return function(e){var a=Object(n.a)(Fe);a.splice(e,1),Re(a)}(a)}},"-"):null),u.a.createElement("div",null,u.a.createElement(N.a,{className:"ml-1",color:"primary",type:"button",onClick:function(){Re([].concat(Object(n.a)(Fe),[{files:[]}]))}},"+"))))})),Le.map((function(e,a){return u.a.createElement(v.a,{className:"",key:a},u.a.createElement(E.a,{className:"",lg:"2",md:"2",sm:"12"},u.a.createElement(g.a,null,"Product#"),u.a.createElement(h.a,{className:"maininput"},u.a.createElement(O.a,{className:"form-control inputs",disabled:!0,type:"text",name:"productN",readOnly:!0,placeholder:"Product"}),u.a.createElement(N.a,{onClick:aa,color:"primary",className:"mybtn primary"},u.a.createElement(J.g,{onClick:function(e){return e.preventDefault()},fill:"white"})))),u.a.createElement(E.a,{className:"",lg:"2",md:"2",sm:"12"},u.a.createElement(y.a,null,u.a.createElement(g.a,null,"Product Name"),u.a.createElement(O.a,{type:"text",name:"productName",readOnly:!0,placeholder:"Product Name",value:e.productName||"",onChange:function(e){return ea(a,e)}}))),u.a.createElement(E.a,{className:"",lg:"2",md:"2",sm:"12"},u.a.createElement(y.a,null,u.a.createElement(g.a,null,"Model"),u.a.createElement(O.a,{type:"text",name:"model",readOnly:!0,placeholder:"Model",value:e.model||"",onChange:function(e){return ea(a,e)}}))),u.a.createElement(E.a,{className:"",lg:"2",md:"2",sm:"12"},u.a.createElement(y.a,null,u.a.createElement(g.a,null,"Variant"),u.a.createElement(O.a,{type:"text",name:"variant",readOnly:!0,placeholder:"Variant",value:e.variant||"",onChange:function(e){return ea(a,e)}}))),u.a.createElement(E.a,{className:"d-flex mt-2",lg:"2",md:"2",sm:"12"},u.a.createElement("div",null,a?u.a.createElement(N.a,{type:"button",className:"button remove ",onClick:function(){return function(e){var a=Object(n.a)(Le);a.splice(e,1),Ve(a)}(a)}},"Remove"):null),u.a.createElement("div",null,u.a.createElement(N.a,{className:"ml-1 ",color:"primary",type:"button",onClick:function(){Ve([].concat(Object(n.a)(Le),[{productName:"",model:"",variant:""}]))}},"+"))))})),Ue.map((function(e,a){return u.a.createElement(v.a,{className:"",key:a},u.a.createElement(E.a,{className:"",lg:"3",md:"3",sm:"12"},u.a.createElement(y.a,null,u.a.createElement(g.a,null,"Part#"),u.a.createElement(O.a,{type:"text",name:"partName",readOnly:!0,placeholder:"Part Name"}))),u.a.createElement(E.a,{className:"",lg:"3",md:"3",sm:"12"},u.a.createElement(y.a,null,u.a.createElement(g.a,null,"Part Name"),u.a.createElement(O.a,{type:"text",name:"partName",readOnly:!0,placeholder:"Part Name",value:e.partName||"",onChange:function(e){return function(e,a){var t=Object(n.a)(Ue);t[e][a.target.name]=a.target.value,Be(t)}(a,e)}}))),u.a.createElement(E.a,{className:"",lg:"3",md:"3",sm:"12"},u.a.createElement(y.a,null,u.a.createElement(g.a,null,"Color"),u.a.createElement(O.a,{type:"text",name:"model",placeholder:"Color",readOnly:!0,value:e.color||"",onChange:function(e){return ea(a,e)}}))),u.a.createElement(E.a,{className:"d-flex mt-2",lg:"3",md:"3",sm:"12"},u.a.createElement("div",null,a?u.a.createElement(N.a,{type:"button",className:"button remove ",onClick:function(){return function(e){var a=Object(n.a)(Ue);a.splice(e,1),Be(a)}(a)}},"Remove"):null),u.a.createElement("div",null,u.a.createElement(N.a,{className:"ml-1 ",color:"primary",type:"button",onClick:function(){Be([].concat(Object(n.a)(Ue),[{partName:"",color:""}]))}},"+"))))})),u.a.createElement("hr",null),u.a.createElement(v.a,{className:"mt-2 "},u.a.createElement("div",{className:"container my-2"},u.a.createElement(g.a,{className:"py-1"},"Notification"),u.a.createElement("div",null,H&&(null===H||void 0===H||null===(k=H.Policy)||void 0===k||null===(M=k.CheckBox)||void 0===M||null===(K=M.input)||void 0===K?void 0:K.map((function(e,a){var t,l,n,o,c;return u.a.createElement(u.a.Fragment,null,u.a.createElement("span",{key:a,className:"mx-2"},u.a.createElement(O.a,{style:{marginRight:"3px"},type:null===e||void 0===e||null===(t=e.type)||void 0===t||null===(l=t._attributes)||void 0===l?void 0:l.type,name:null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n._text,onChange:function(e){return Ze(e,"checkbox")}})," ",u.a.createElement("span",{className:"mt-1 mx-1",style:{marginRight:"40px"}},"Whatsapp"==(null===e||void 0===e||null===(o=e.label)||void 0===o?void 0:o._text)?u.a.createElement(A.k,{className:"mx-1",color:"#59CE72",size:25}):u.a.createElement(u.a.Fragment,null,"SMS"==(null===(c=e.label)||void 0===c?void 0:c._text)?u.a.createElement(u.a.Fragment,null,u.a.createElement(z.c,{size:30})):u.a.createElement(u.a.Fragment,null,u.a.createElement(V.a,{className:"",size:30}))))))}))))),u.a.createElement(E.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(g.a,{className:""},u.a.createElement("h4",null,"Status")),u.a.createElement("div",{className:"form-label-group mx-1"},H&&(null===H||void 0===H||null===(q=H.Policy)||void 0===q||null===(W=q.Radiobutton)||void 0===W||null===(Y=W.input)||void 0===Y?void 0:Y.map((function(e,a){var t,l,n,o,c;return u.a.createElement(y.a,{key:a},u.a.createElement(O.a,{key:a,style:{marginRight:"3px"},required:!0,type:null===e||void 0===e||null===(t=e.type)||void 0===t||null===(l=t._attributes)||void 0===l?void 0:l.type,name:null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n._text,value:"".concat("Active"==(null===e||void 0===e||null===(o=e.label)||void 0===o?void 0:o._text)?"Active":"Deactive"),onChange:Ze})," ",u.a.createElement("span",{className:"mx-1 mt-1",style:{marginRight:"20px"}},null===e||void 0===e||null===(c=e.label)||void 0===c?void 0:c._text))})))))),u.a.createElement(v.a,null,u.a.createElement(N.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-2 mx-2"},"Submit"))),ke&&(null===ke||void 0===ke?void 0:ke.map((function(e,a){return u.a.createElement(u.a.Fragment,null,u.a.createElement(v.a,{key:a,className:"my-2"},u.a.createElement(E.a,{lg:"6",md:"6",sm:"12"},u.a.createElement(g.a,null,"Comment"),u.a.createElement(O.a,{type:"textarea",name:"comment",placeholder:"Comment",value:e.comment||"",onChange:function(e){return function(e,a){var t=Object(n.a)(ke);t[e][a.target.name]=a.target.value,De(t)}(a,e)}})),u.a.createElement(E.a,{className:"d-flex mt-2",lg:"3",md:"3",sm:"12"},u.a.createElement("div",null,a?u.a.createElement(N.a,{type:"button",className:"btn btn-danger",onClick:function(){return function(e){var a=Object(n.a)(ke);a.splice(e,1),De(a)}(a)}},"-"):null),u.a.createElement("div",null,u.a.createElement(N.a,{className:"ml-1 ",color:"primary",type:"button",onClick:function(){De([].concat(Object(n.a)(ke),[Je]))}},"+")))))}))),u.a.createElement(N.a,{className:"ml-1 ",color:"primary",onClick:function(e){alert("Comment Submit")}},"Submit Comment"))),u.a.createElement(j.a,{fullscreen:"xl",size:"lg",backdrop:!1,isOpen:We,toggle:Xe},u.a.createElement(x.a,{toggle:Xe},"Product Look Up"),u.a.createElement(C.a,{className:"table-body shedulemodalbody"},u.a.createElement("div",{className:"modalheaderaddrol p-1"},u.a.createElement("h3",{className:"table-item"},"Product List"),u.a.createElement(S.a,{className:"scheduletble_heading",bordered:!0,hover:!0,responsive:!0,size:"sm"},u.a.createElement("thead",{className:"tableRowStyle"},u.a.createElement("tr",{className:"tableRowStyle"},u.a.createElement("th",null,"S.No."),u.a.createElement("th",null,"ProductName"),u.a.createElement("th",null,"Modal"),u.a.createElement("th",null,"Variant"))),u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",null,"1"),u.a.createElement("td",null,"abc"),u.a.createElement("td",null,"ls123"),u.a.createElement("td",null,"ch84")))))),u.a.createElement(_.a,null,u.a.createElement(N.a,{color:"primary",onClick:Xe},"Submit"),u.a.createElement(N.a,{color:"secondary",onClick:Xe},"Cancel")))))}},907:function(e,a,t){}}]);
//# sourceMappingURL=297.7a763bd2.chunk.js.map