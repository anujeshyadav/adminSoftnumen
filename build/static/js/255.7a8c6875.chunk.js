(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[255],{3031:function(e,l,t){"use strict";t.r(l);var a=t(55),n=t(6),o=t(44),i=t(1),u=t.n(i),d=t(623),r=t.n(d),c=t(892),v=t(883),m=t(884),s=t(895),p=t(885),E=t(968),b=t(886),y=t(873),g=t(887),O=t(170),f=(t(25),t(158)),x=t.n(f),j=(t(625),t(904)),_=t(905),h=t(906),C=t(126),k=t(971),F=t.n(k),N=t(221),S=t.n(N),w=(t(624),t(88)),D=t(976),A=t(969),M=t(60),R=(t(907),t(90));l.default=function(){var e,l,t,d,f,k,N,J,z,Y,I,K,U,L,V,q,B,H,P,T,W,Z,$,G=Object(i.useState)({}),Q=Object(o.a)(G,2),X=Q[0],ee=Q[1],le=Object(i.useState)({}),te=Object(o.a)(le,2),ae=te[0],ne=te[1],oe=Object(i.useState)({}),ie=Object(o.a)(oe,2),ue=ie[0],de=ie[1],re=Object(i.useState)({}),ce=Object(o.a)(re,2),ve=ce[0],me=ce[1],se=Object(i.useState)({}),pe=Object(o.a)(se,2),Ee=pe[0],be=pe[1],ye=Object(i.useState)({}),ge=Object(o.a)(ye,2),Oe=ge[0],fe=ge[1],xe=Object(i.useState)(""),je=Object(o.a)(xe,2),_e=je[0],he=je[1],Ce=Object(i.useState)(""),ke=Object(o.a)(Ce,2),Fe=ke[0],Ne=ke[1],Se=Object(i.useState)({}),we=Object(o.a)(Se,2),De=(we[0],we[1],Object(i.useContext)(R.a)),Ae=function(e,l,t){var o=e.target,i=o.name,u=o.value,d=o.checked;he(t),"checkbox"==l?be(Object(n.a)(Object(n.a)({},Ee),{},Object(a.a)({},i,d))):"number"==l?/^\d{0,10}$/.test(u)?(be(Object(n.a)(Object(n.a)({},Ee),{},Object(a.a)({},i,u))),Ne("")):Ne("Please enter a valid number with a maximum length of 10 digits"):u.length<=10?(be(Object(n.a)(Object(n.a)({},Ee),{},Object(a.a)({},i,u))),Ne("")):be(Object(n.a)(Object(n.a)({},Ee),{},Object(a.a)({},i,u)))};Object(i.useEffect)((function(){var e;console.log(Ee),console.log(null===De||void 0===De||null===(e=De.UserInformatio)||void 0===e?void 0:e.dateFormat),console.log(null===ve||void 0===ve?void 0:ve.latitude,null===ve||void 0===ve?void 0:ve.longitude)}),[Ee]),Object(i.useEffect)((function(){Object(w.k)().then((function(e){var l,t,a,n=r.a.xml2json(e.data,{compact:!0,spaces:2});console.log(JSON.parse(n)),ee(JSON.parse(n));var o=null===(l=JSON.parse(n))||void 0===l||null===(t=l.CreateAccount)||void 0===t||null===(a=t.CheckBox)||void 0===a?void 0:a.input;null===o||void 0===o||o.map((function(e){Ee[null===e||void 0===e?void 0:e.name._text]=!1})),fe(JSON.parse(n))})).catch((function(e){console.log(e)}))}),[]);return u.a.createElement("div",null,u.a.createElement("div",null,u.a.createElement(c.a,null,u.a.createElement(v.a,{className:"m-2"},u.a.createElement(m.a,null,u.a.createElement("h1",{className:"float-left"},"Account Creation"))),u.a.createElement(s.a,null,u.a.createElement(p.a,{className:"m-1",onSubmit:function(e){e.preventDefault(),console.log(Ee),Fe?S()("Error occured while Entering Details"):Object(w.i)(Ee).then((function(e){be({}),e.status&&(window.location.reload(),S()("Acccont Created Successfully"))})).catch((function(e){console.log(e)}))}},u.a.createElement(v.a,{className:"mb-2"},u.a.createElement(m.a,{lg:"6",md:"6"},u.a.createElement(E.a,null,u.a.createElement(b.a,null,null===(e=Oe.CreateAccount)||void 0===e||null===(l=e.MyDropdown)||void 0===l||null===(t=l.dropdown)||void 0===t||null===(d=t.label)||void 0===d?void 0:d._text),u.a.createElement(y.a,{required:!0,type:"select",name:null===(f=Oe.CreateAccount)||void 0===f||null===(k=f.MyDropdown)||void 0===k||null===(N=k.dropdown)||void 0===N||null===(J=N.name)||void 0===J?void 0:J._text,value:Ee[null===(z=Oe.CreateAccount)||void 0===z||null===(Y=z.MyDropdown)||void 0===Y||null===(I=Y.dropdown)||void 0===I||null===(K=I.name)||void 0===K?void 0:K._text],onChange:Ae},u.a.createElement("option",{value:""},"--Select Role--"),null===Oe||void 0===Oe||null===(U=Oe.CreateAccount)||void 0===U||null===(L=U.MyDropdown)||void 0===L||null===(V=L.dropdown)||void 0===V?void 0:V.option.map((function(e,l){var t,a;return u.a.createElement("option",{key:l,value:null===e||void 0===e||null===(t=e._attributes)||void 0===t?void 0:t.value},null===e||void 0===e||null===(a=e._attributes)||void 0===a?void 0:a.value)}))))),X&&(null===X||void 0===X||null===(q=X.CreateAccount)||void 0===q||null===(B=q.input)||void 0===B?void 0:B.map((function(e,l){var t,o,i,d,r,c,v,s,p,y,O,f,k,N,S,w,D,A,M,R,J,z,Y,I,K,U,L,V,q,B,H,P;F()("2022-08-05T12:00:00").tz("America/New_York").format("D MMM, YYYY HH:mm");return(null===e||void 0===e?void 0:e.phoneinput)?u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{key:l,lg:"6",md:"6",sm:"12"},u.a.createElement(E.a,null,u.a.createElement(b.a,null,null===e||void 0===e||null===(t=e.label)||void 0===t?void 0:t._text),u.a.createElement(x.a,{inputClass:"myphoneinput",country:"us",onKeyDown:function(l){var t,a;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(a=t._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},countryCodeEditable:!1,name:null===e||void 0===e||null===(o=e.name)||void 0===o?void 0:o._text,value:Ee[null===e||void 0===e||null===(i=e.name)||void 0===i?void 0:i._text],onChange:function(l){var t;be(Object(n.a)(Object(n.a)({},Ee),{},Object(a.a)({},null===e||void 0===e||null===(t=e.name)||void 0===t?void 0:t._text,l)))}}),_e===l?u.a.createElement(u.a.Fragment,null,Fe&&u.a.createElement("span",{style:{color:"red"}},Fe)):u.a.createElement(u.a.Fragment,null)))):(null===e||void 0===e?void 0:e.library)?(null===e||void 0===e||null===(d=e.label._text)||void 0===d?void 0:d.includes("ountry"))?(console.log(e),u.a.createElement(m.a,{key:l,lg:"6",md:"6",sm:"12"},u.a.createElement(E.a,null,u.a.createElement(b.a,null,null===e||void 0===e||null===(v=e.label)||void 0===v?void 0:v._text),u.a.createElement(C.a,{inputClass:"countryclass",className:"countryclassnw",options:j.a.getAllCountries(),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:ae,onChange:function(e){ne(e),be(Object(n.a)(Object(n.a)({},Ee),{},Object(a.a)({},"Country",null===e||void 0===e?void 0:e.name)))}}),_e===l?u.a.createElement(u.a.Fragment,null,Fe&&u.a.createElement("span",{style:{color:"red"}},Fe)):u.a.createElement(u.a.Fragment,null)))):(null===e||void 0===e||null===(r=e.label._text)||void 0===r?void 0:r.includes("tate"))?u.a.createElement(m.a,{key:l,lg:"6",md:"6",sm:"12"},u.a.createElement(E.a,null,u.a.createElement(b.a,null,null===e||void 0===e||null===(s=e.label)||void 0===s?void 0:s._text),u.a.createElement(C.a,{options:null===_.a||void 0===_.a?void 0:_.a.getStatesOfCountry(null===ae||void 0===ae?void 0:ae.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:ue,onChange:function(e){de(e),be(Object(n.a)(Object(n.a)({},Ee),{},Object(a.a)({},"State",null===e||void 0===e?void 0:e.name)))}}),_e===l?u.a.createElement(u.a.Fragment,null,Fe&&u.a.createElement("span",{style:{color:"red"}},Fe)):u.a.createElement(u.a.Fragment,null))):(null===e||void 0===e||null===(c=e.label._text)||void 0===c?void 0:c.includes("ity"))?u.a.createElement(m.a,{key:l,lg:"6",md:"6",sm:"12"},u.a.createElement(E.a,null,u.a.createElement(b.a,null,null===e||void 0===e||null===(p=e.label)||void 0===p?void 0:p._text),u.a.createElement(C.a,{options:null===h.a||void 0===h.a?void 0:h.a.getCitiesOfState(null===ue||void 0===ue?void 0:ue.countryCode,null===ue||void 0===ue?void 0:ue.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:ve,onChange:function(e){me(e),be(Object(n.a)(Object(n.a)({},Ee),{},Object(a.a)({},"City",null===e||void 0===e?void 0:e.name)))}}),_e===l?u.a.createElement(u.a.Fragment,null,Fe&&u.a.createElement("span",{style:{color:"red"}},Fe)):u.a.createElement(u.a.Fragment,null))):u.a.createElement(u.a.Fragment,null,"date"==(null===e||void 0===e||null===(y=e.type)||void 0===y||null===(O=y._attributes)||void 0===O?void 0:O.type)?u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{key:l,lg:"6",md:"6",sm:"12"},u.a.createElement(E.a,{key:l},u.a.createElement(b.a,null,null===e||void 0===e||null===(f=e.label)||void 0===f?void 0:f._text),u.a.createElement(g.a,{onKeyDown:function(l){var t,a;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(a=t._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},type:null===e||void 0===e||null===(k=e.type)||void 0===k||null===(N=k._attributes)||void 0===N?void 0:N.type,placeholder:null===e||void 0===e||null===(S=e.placeholder)||void 0===S?void 0:S._text,name:null===e||void 0===e||null===(w=e.name)||void 0===w?void 0:w._text,dateFormat:null===De||void 0===De||null===(D=De.UserInformatio)||void 0===D?void 0:D.dateFormat,value:F()(Ee[null===e||void 0===e||null===(A=e.name)||void 0===A?void 0:A._text]).tz(null===De||void 0===De||null===(M=De.UserInformatio)||void 0===M?void 0:M.timeZone).format(null===De||void 0===De||null===(R=De.UserInformatio)||void 0===R?void 0:R.dateFormat),onChange:function(t){var a,n;return Ae(t,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,l)}}),_e===l?u.a.createElement(u.a.Fragment,null,Fe&&u.a.createElement("span",{style:{color:"red"}},Fe)):u.a.createElement(u.a.Fragment,null)))):u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{key:l,lg:"6",md:"6",sm:"12"},u.a.createElement(E.a,{key:l},u.a.createElement(b.a,null,null===e||void 0===e||null===(J=e.label)||void 0===J?void 0:J._text),u.a.createElement(g.a,{onKeyDown:function(l){var t,a;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(a=t._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},type:null===e||void 0===e||null===(z=e.type)||void 0===z||null===(Y=z._attributes)||void 0===Y?void 0:Y.type,placeholder:null===e||void 0===e||null===(I=e.placeholder)||void 0===I?void 0:I._text,name:null===e||void 0===e||null===(K=e.name)||void 0===K?void 0:K._text,value:Ee[null===e||void 0===e||null===(U=e.name)||void 0===U?void 0:U._text],onChange:function(t){var a,n;return Ae(t,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,l)}}),_e===l?u.a.createElement(u.a.Fragment,null,Fe&&u.a.createElement("span",{style:{color:"red"}},Fe)):u.a.createElement(u.a.Fragment,null))))):u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{key:l,lg:"6",md:"6",sm:"12"},u.a.createElement(E.a,{key:l},u.a.createElement(b.a,null,null===e||void 0===e||null===(L=e.label)||void 0===L?void 0:L._text),u.a.createElement(g.a,{onKeyDown:function(l){var t,a;"number"==(null===e||void 0===e||null===(t=e.type)||void 0===t||null===(a=t._attributes)||void 0===a?void 0:a.type)&&["e","E","+","-"].includes(l.key)&&l.preventDefault()},type:null===e||void 0===e||null===(V=e.type)||void 0===V||null===(q=V._attributes)||void 0===q?void 0:q.type,placeholder:null===e||void 0===e||null===(B=e.placeholder)||void 0===B?void 0:B._text,name:null===e||void 0===e||null===(H=e.name)||void 0===H?void 0:H._text,value:Ee[null===e||void 0===e||null===(P=e.name)||void 0===P?void 0:P._text],onChange:function(t){var a,n;return Ae(t,null===e||void 0===e||null===(a=e.type)||void 0===a||null===(n=a._attributes)||void 0===n?void 0:n.type,l)}}),_e===l?u.a.createElement(u.a.Fragment,null,Fe&&u.a.createElement("span",{style:{color:"red"}},Fe)):u.a.createElement(u.a.Fragment,null))))}))),u.a.createElement("div",{className:"container"},u.a.createElement(b.a,{className:"py-1"},"Notification"),u.a.createElement("div",null,X&&(null===X||void 0===X||null===(H=X.CreateAccount)||void 0===H||null===(P=H.CheckBox)||void 0===P||null===(T=P.input)||void 0===T?void 0:T.map((function(e,l){var t,a,n,o,i;return u.a.createElement(u.a.Fragment,null,u.a.createElement("span",{key:l,className:"mx-2"},u.a.createElement(g.a,{style:{marginRight:"3px"},type:null===e||void 0===e||null===(t=e.type)||void 0===t||null===(a=t._attributes)||void 0===a?void 0:a.type,name:null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n._text,onChange:function(e){return Ae(e,"checkbox")}})," ",u.a.createElement("span",{className:"mt-1 mx-1",style:{marginRight:"40px"}},"Whatsapp"==(null===e||void 0===e||null===(o=e.label)||void 0===o?void 0:o._text)?u.a.createElement(M.k,{className:"mx-1",color:"#59CE72",size:25}):u.a.createElement(u.a.Fragment,null,"SMS"==(null===(i=e.label)||void 0===i?void 0:i._text)?u.a.createElement(u.a.Fragment,null,u.a.createElement(A.c,{size:30})):u.a.createElement(u.a.Fragment,null,u.a.createElement(D.a,{className:"",size:30}))))))})))))),u.a.createElement("hr",null),u.a.createElement(v.a,{className:"mt-2 "},u.a.createElement(m.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},u.a.createElement(b.a,{className:""},u.a.createElement("h4",null,"Status")),u.a.createElement("div",{className:"form-label-group mx-1"},X&&(null===X||void 0===X||null===(W=X.CreateAccount)||void 0===W||null===(Z=W.Radiobutton)||void 0===Z||null===($=Z.input)||void 0===$?void 0:$.map((function(e,l){var t,a,n,o,i;return u.a.createElement(E.a,{key:l},u.a.createElement(g.a,{key:l,style:{marginRight:"3px"},required:!0,type:null===e||void 0===e||null===(t=e.type)||void 0===t||null===(a=t._attributes)||void 0===a?void 0:a.type,name:null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n._text,value:"".concat("Active"==(null===e||void 0===e||null===(o=e.label)||void 0===o?void 0:o._text)?"Active":"Deactive"),onChange:Ae})," ",u.a.createElement("span",{className:"mx-1 mt-1",style:{marginRight:"20px"}},null===e||void 0===e||null===(i=e.label)||void 0===i?void 0:i._text))})))))),u.a.createElement(v.a,null,u.a.createElement(O.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-2 mx-2"},"Submit")))))))}},907:function(e,l,t){}}]);
//# sourceMappingURL=255.7a8c6875.chunk.js.map