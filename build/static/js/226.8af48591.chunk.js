(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[226],{1044:function(e,t,a){"use strict";var l=a(5),n=a(11),o=a(1),i=a.n(o),r=a(2),c=a.n(r),u=a(7),m=a.n(u),d=a(4),v=["className","cssModule","tag","size"],s={tag:d.tagPropType,size:c.a.string,className:c.a.string,cssModule:c.a.object},p=function(e){var t=e.className,a=e.cssModule,o=e.tag,r=e.size,c=Object(n.a)(e,v),u=Object(d.mapToCssModules)(m()(t,"input-group",r?"input-group-"+r:null),a);return i.a.createElement(o,Object(l.a)({},c,{className:u}))};p.propTypes=s,p.defaultProps={tag:"div"},t.a=p},2973:function(e,t,a){"use strict";a.r(t);var l=a(55),n=a(6),o=a(36),i=a(44),r=a(1),c=a.n(r),u=a(623),m=a.n(u),d=a(892),v=a(883),s=a(884),p=a(886),E=a(873),f=a(895),g=a(885),b=a(968),y=a(1044),O=a(887),h=a(170),N=a(900),j=a(881),x=a(882),k=a(888),S=(a(25),a(158)),_=a.n(S),C=(a(625),a(221)),w=a.n(C),D=(a(624),a(88)),W=a(976),F=a(969),R=a(60),P=(a(907),a(90)),J=a(159);t.default=function(e){var t,a,u,S,C,A,I=Object(r.useState)({}),M=Object(i.a)(I,2),z=M[0],B=M[1],U=Object(r.useState)({}),T=Object(i.a)(U,2),H=T[0],K=T[1],L=Object(r.useState)(null),Q=Object(i.a)(L,2),V=Q[0],Y=Q[1],q=Object(r.useState)({}),$=Object(i.a)(q,2),G=$[0],X=$[1],Z=Object(r.useState)(""),ee=Object(i.a)(Z,2),te=ee[0],ae=ee[1],le=Object(r.useState)(""),ne=Object(i.a)(le,2),oe=ne[0],ie=ne[1],re=Object(r.useState)({}),ce=Object(i.a)(re,2),ue=(ce[0],ce[1],Object(r.useState)("")),me=Object(i.a)(ue,2),de=me[0],ve=me[1],se=Object(r.useState)(!1),pe=Object(i.a)(se,2),Ee=pe[0],fe=pe[1],ge=Object(r.useState)(!1),be=Object(i.a)(ge,2),ye=be[0],Oe=be[1],he=Object(r.useState)("Pending"),Ne=Object(i.a)(he,2),je=Ne[0],xe=(Ne[1],function(){return fe(!Ee)}),ke=(Object(r.useContext)(P.a),Object(r.useState)([{userName:"",Role:"",comment:"",time:""}])),Se=Object(i.a)(ke,2),_e=Se[0],Ce=Se[1],we=Object(r.useState)([{files:[]}]),De=Object(i.a)(we,2),We=De[0],Fe=De[1],Re=Object(r.useState)([{files:[]}]),Pe=Object(i.a)(Re,2),Je=Pe[0],Ae=Pe[1],Ie={userName:JSON.parse(localStorage.getItem("userData")).UserName,Role:JSON.parse(localStorage.getItem("userData")).Role,comment:"",time:(new Date).toString()},Me=function(e,t,a){var o=e.target,i=o.name,r=o.value,c=o.checked;ae(a),"checkbox"==t?K(Object(n.a)(Object(n.a)({},H),{},Object(l.a)({},i,c))):"number"==t?/^\d{0,10}$/.test(r)?(K(Object(n.a)(Object(n.a)({},H),{},Object(l.a)({},i,r))),ie("")):ie("Please enter a valid number with a maximum length of 10 digits"):r.length<=10?(K(Object(n.a)(Object(n.a)({},H),{},Object(l.a)({},i,r))),ie("")):K(Object(n.a)(Object(n.a)({},H),{},Object(l.a)({},i,r)))},ze=function(){xe()};Object(r.useEffect)((function(){return console.log(H),function(){window.onbeforeunload=function(){console.log(null===z||void 0===z?void 0:z.createWiki),Be()}}}),[z,H,_e,We,Je]),Object(r.useEffect)((function(){return function(){var e=Math.floor(9e3*Math.random())+1e3;ve(e)}(),Object(D.O)().then((function(e){var t,a,l;console.log(e);var n=m.a.xml2json(e.data,{compact:!0,spaces:2});console.log(JSON.parse(n).createWiki);var o=null===(t=JSON.parse(n))||void 0===t||null===(a=t.createWiki)||void 0===a||null===(l=a.CheckBox)||void 0===l?void 0:l.input;null===o||void 0===o||o.map((function(e){H[null===e||void 0===e?void 0:e.name._text]=!1})),B(JSON.parse(n)),X(JSON.parse(n))})).catch((function(e){console.log(e)})),function(){null==V&&Y("Not")}}),[]);var Be=function(){var e,t,a,l,n,o,i,r=new FormData;console.log(null===z||void 0===z?void 0:z.createWiki),null===z||void 0===z||null===(e=z.createWiki)||void 0===e||null===(t=e.CheckBox)||void 0===t||null===(a=t.input)||void 0===a||a.map((function(e){r.append("".concat(null===e||void 0===e?void 0:e.name._text),H[null===e||void 0===e?void 0:e.name._text])})),null===z||void 0===z||null===(l=z.createWiki)||void 0===l||null===(n=l.MyDropDown)||void 0===n||n.map((function(e){var t,a,l,n;r.append("".concat(null===e||void 0===e||null===(t=e.dropdown)||void 0===t||null===(a=t.name)||void 0===a?void 0:a._text),H[null===e||void 0===e||null===(l=e.dropdown)||void 0===l||null===(n=l.name)||void 0===n?void 0:n._text])})),null===z||void 0===z||null===(o=z.createWiki)||void 0===o||null===(i=o.input)||void 0===i||i.map((function(e){var t,a;r.append("".concat(null===e||void 0===e||null===(t=e.name)||void 0===t?void 0:t._text),H[null===e||void 0===e||null===(a=e.name)||void 0===a?void 0:a._text])})),r.append("Status","Draft"),r.append("id","wiki"+{randomNumber:de}),_e.length>0&&r.append("Comments",JSON.stringify(_e));var c=JSON.parse(localStorage.getItem("userData"));if(We.length){var u=[];null===We||void 0===We||We.map((function(e,t){var a=Array.from(null===e||void 0===e?void 0:e.files);u.push(a)}));var m=u.flat();null===m||void 0===m||m.map((function(e,t){r.append("files",e)}))}if((Je.length||We.length)&&(r.append("Role",null===c||void 0===c?void 0:c.Role),r.append("time",(new Date).toString()),r.append("userName",null===c||void 0===c?void 0:c.UserName)),Je.length){var d=[];null===Je||void 0===Je||Je.map((function(e,t){var a=Array.from(null===e||void 0===e?void 0:e.files);d.push(a)}));var v=d.flat();null===v||void 0===v||v.map((function(e,t){r.append("files",e)}))}Object(D.o)(r).then((function(e){})).catch((function(e){console.log(e.response)}))};return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement(d.a,null,c.a.createElement(v.a,{className:"m-2"},c.a.createElement(s.a,{className:""},c.a.createElement("div",{style:{justifyContent:"space-between"},className:"d-flex myclasswikiheading"},c.a.createElement("h1",{className:"justify-content-start"},"Create Wiki "),c.a.createElement("div",{className:"mystatus"},"Status : (Draft) "),c.a.createElement("div",{className:"mystatus"}," ",c.a.createElement("div",null,c.a.createElement(p.a,null," Change Status"),c.a.createElement(E.a,{required:!0,type:"select",name:"Status",value:H.Status,onChange:Me},c.a.createElement("option",{value:""},"--Select Status---"),c.a.createElement("option",{value:"Draft"},"Draft"),c.a.createElement("option",{value:"Pending"},"Pending"),c.a.createElement("option",{value:"Query"},"Query"),c.a.createElement("option",{value:"Accept"},"Accept"),c.a.createElement("option",{value:"Hold"},"Hold"),c.a.createElement("option",{value:"Work In Progress"},"Work In Progress"),c.a.createElement("option",{value:"Approve"},"Approve"),c.a.createElement("option",{value:"Reject"},"Reject"),c.a.createElement("option",{value:"Paid"},"Paid"),c.a.createElement("option",{value:"Completed"},"Completed"),c.a.createElement("option",{value:"Cancelled"},"Cancelled")))," ")),c.a.createElement("div",null,c.a.createElement("span",null,"Wiki Id")," ",c.a.createElement("span",null,"# :wiki",de)))),c.a.createElement(f.a,null,c.a.createElement(g.a,{className:"m-1",onSubmit:function(e){var t,a,l,n,o,i,r;e.preventDefault();var c=new FormData;null===z||void 0===z||null===(t=z.createWiki)||void 0===t||null===(a=t.CheckBox)||void 0===a||null===(l=a.input)||void 0===l||l.map((function(e){c.append("".concat(null===e||void 0===e?void 0:e.name._text),H[null===e||void 0===e?void 0:e.name._text])})),null===z||void 0===z||null===(n=z.createWiki)||void 0===n||null===(o=n.MyDropDown)||void 0===o||o.map((function(e){var t,a,l,n;c.append("".concat(null===e||void 0===e||null===(t=e.dropdown)||void 0===t||null===(a=t.name)||void 0===a?void 0:a._text),H[null===e||void 0===e||null===(l=e.dropdown)||void 0===l||null===(n=l.name)||void 0===n?void 0:n._text])})),null===z||void 0===z||null===(i=z.createWiki)||void 0===i||null===(r=i.input)||void 0===r||r.map((function(e){var t,a;c.append("".concat(null===e||void 0===e||null===(t=e.name)||void 0===t?void 0:t._text),H[null===e||void 0===e||null===(a=e.name)||void 0===a?void 0:a._text])})),c.append("Status",je),c.append("id","wiki"+{randomNumber:de}),_e.length>0&&c.append("Comments",JSON.stringify(_e));var u=JSON.parse(localStorage.getItem("userData"));if(We.length){var m=[];null===We||void 0===We||We.map((function(e,t){var a=Array.from(null===e||void 0===e?void 0:e.files);m.push(a)}));var d=m.flat();null===d||void 0===d||d.map((function(e,t){c.append("files",e)}))}if((Je.length||We.length)&&(c.append("Role",null===u||void 0===u?void 0:u.Role),c.append("time",(new Date).toString()),c.append("userName",null===u||void 0===u?void 0:u.UserName)),Je.length){var v=[];null===Je||void 0===Je||Je.map((function(e,t){var a=Array.from(null===e||void 0===e?void 0:e.files);v.push(a)}));var s=v.flat();null===s||void 0===s||s.map((function(e,t){c.append("files",e)}))}Object(D.o)(c).then((function(e){Y("Yes"),console.log(e),w()("Wiki Created Successfully")})).catch((function(e){console.log(e.response),w()("Something Went Wrong")}))}},c.a.createElement(v.a,{className:"mb-2"},null===G||void 0===G||null===(t=G.createWiki)||void 0===t?void 0:t.MyDropDown.map((function(e,t){var a,l,n,o,i,r;return c.a.createElement(s.a,{lg:"6",md:"6",key:t},c.a.createElement(b.a,null,c.a.createElement(p.a,null,null===e||void 0===e||null===(a=e.dropdown)||void 0===a||null===(l=a.label)||void 0===l?void 0:l._text),c.a.createElement(E.a,{type:"select",name:null===e||void 0===e||null===(n=e.dropdown)||void 0===n||null===(o=n.name)||void 0===o?void 0:o._text,value:H[null===e||void 0===e||null===(i=e.dropdown)||void 0===i||null===(r=i.name)||void 0===r?void 0:r._text],onChange:Me},c.a.createElement("option",{value:""},"--Select ",null===e||void 0===e?void 0:e.dropdown.name._text,"---"),e.dropdown.option.map((function(e,t){var a,l;return c.a.createElement("option",{key:t,value:null===e||void 0===e||null===(a=e._attributes)||void 0===a?void 0:a.value},null===e||void 0===e||null===(l=e._attributes)||void 0===l?void 0:l.value)})))))})),z&&(null===z||void 0===z||null===(a=z.createWiki)||void 0===a||null===(u=a.input)||void 0===u?void 0:u.map((function(e,t){var a,o,i,r,u,m,d,v,E,f,g,N;if(null===e||void 0===e?void 0:e.role){var j,x,k,S=null===e||void 0===e||null===(j=e.role)||void 0===j?void 0:j.find((function(e){var t;return"WARRANTY APPROVER"===(null===(t=e._attributes)||void 0===t?void 0:t.name)}));null===S||void 0===S||null===(x=S.permissions)||void 0===x?void 0:x._text.includes("View"),null===S||void 0===S||null===(k=S.permissions)||void 0===k?void 0:k._text.includes("Edit")}return(null===e||void 0===e?void 0:e.phoneinput)?c.a.createElement(c.a.Fragment,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{key:t,lg:"6",md:"6",sm:"12"},c.a.createElement(b.a,null,c.a.createElement(p.a,null,null===e||void 0===e||null===(a=e.label)||void 0===a?void 0:a._text),c.a.createElement(_.a,{inputClass:"myphoneinput",country:"us",onKeyDown:function(t){var a,l;"number"==(null===e||void 0===e||null===(a=e.type)||void 0===a||null===(l=a._attributes)||void 0===l?void 0:l.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},countryCodeEditable:!1,name:null===e||void 0===e||null===(o=e.name)||void 0===o?void 0:o._text,value:H[null===e||void 0===e||null===(i=e.name)||void 0===i?void 0:i._text],onChange:function(t){var a;K(Object(n.a)(Object(n.a)({},H),{},Object(l.a)({},null===e||void 0===e||null===(a=e.name)||void 0===a?void 0:a._text,t)))}}),te===t?c.a.createElement(c.a.Fragment,null,oe&&c.a.createElement("span",{style:{color:"red"}},oe)):c.a.createElement(c.a.Fragment,null))))):(null===e||void 0===e?void 0:e.lookup)?c.a.createElement(c.a.Fragment,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{key:t,lg:"6",md:"6",sm:"12"},c.a.createElement(b.a,null,c.a.createElement(p.a,null,null===e||void 0===e||null===(r=e.label)||void 0===r?void 0:r._text),c.a.createElement(y.a,{className:"maininput"},c.a.createElement(O.a,{className:"form-control inputs",type:"text",name:null===e||void 0===e||null===(u=e.name)||void 0===u?void 0:u._text,placeholder:null===e||void 0===e?void 0:e.name._text,value:H[null===e||void 0===e||null===(m=e.name)||void 0===m?void 0:m._text],readOnly:!0})," ",c.a.createElement(h.a,{onClick:ze,color:"primary",className:"mybtn primary"},c.a.createElement(J.g,{onClick:function(e){return e.preventDefault()},fill:"white"}))),te===t?c.a.createElement(c.a.Fragment,null,oe&&c.a.createElement("span",{style:{color:"red"}},oe)):c.a.createElement(c.a.Fragment,null))))):c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{key:t,lg:"6",md:"6",sm:"12"},c.a.createElement(b.a,null,c.a.createElement(p.a,null,null===e||void 0===e||null===(d=e.label)||void 0===d?void 0:d._text),c.a.createElement(O.a,{onKeyDown:function(t){var a,l;"number"==(null===e||void 0===e||null===(a=e.type)||void 0===a||null===(l=a._attributes)||void 0===l?void 0:l.type)&&["e","E","+","-"].includes(t.key)&&t.preventDefault()},type:null===e||void 0===e||null===(v=e.type)||void 0===v||null===(E=v._attributes)||void 0===E?void 0:E.type,placeholder:null===e||void 0===e||null===(f=e.placeholder)||void 0===f?void 0:f._text,name:null===e||void 0===e||null===(g=e.name)||void 0===g?void 0:g._text,value:H[null===e||void 0===e||null===(N=e.name)||void 0===N?void 0:N._text],onChange:function(a){var l,n;return Me(a,null===e||void 0===e||null===(l=e.type)||void 0===l||null===(n=l._attributes)||void 0===n?void 0:n.type,t)}}),te===t?c.a.createElement(c.a.Fragment,null,oe&&c.a.createElement("span",{style:{color:"red"}},oe)):c.a.createElement(c.a.Fragment,null))))}))),c.a.createElement("div",{className:"container"},c.a.createElement(p.a,{className:"py-1"},"Notification"),c.a.createElement("div",null,z&&(null===z||void 0===z||null===(S=z.createWiki)||void 0===S||null===(C=S.CheckBox)||void 0===C||null===(A=C.input)||void 0===A?void 0:A.map((function(e,t){var a,l,n,o,i;return c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{key:t,className:"mx-2"},c.a.createElement(O.a,{style:{marginRight:"3px"},type:null===e||void 0===e||null===(a=e.type)||void 0===a||null===(l=a._attributes)||void 0===l?void 0:l.type,name:null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n._text,onChange:function(e){return Me(e,"checkbox")}})," ",c.a.createElement("span",{className:"mt-1 mx-1",style:{marginRight:"40px"}},"Whatsapp"==(null===e||void 0===e||null===(o=e.label)||void 0===o?void 0:o._text)?c.a.createElement(R.k,{className:"mx-1",color:"#59CE72",size:25}):c.a.createElement(c.a.Fragment,null,"SMS"==(null===(i=e.label)||void 0===i?void 0:i._text)?c.a.createElement(c.a.Fragment,null,c.a.createElement(F.c,{size:30})):c.a.createElement(c.a.Fragment,null,c.a.createElement(W.a,{className:"",size:30}))))))})))))),We.map((function(e,t){return c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{className:"mt-1"},"Attachments :"),c.a.createElement(v.a,{className:"my-1"},c.a.createElement(s.a,{lg:"6",md:"6",sm:"12",key:t},c.a.createElement(O.a,{type:"file",multiple:!0,onChange:function(e){return function(e,t){var a=Object(o.a)(We),l=t.target.files;a[e].files=l,Fe(a)}(t,e)}})),c.a.createElement(s.a,{className:"d-flex mt-2",lg:"3",md:"3",sm:"12"},c.a.createElement("div",null,t?c.a.createElement(h.a,{type:"button",className:"btn btn-danger",onClick:function(){return function(e){var t=Object(o.a)(We);t.splice(e,1),Fe(t)}(t)}},"-"):null),c.a.createElement("div",null,c.a.createElement(h.a,{className:"ml-1",color:"primary",type:"button",onClick:function(){Fe([].concat(Object(o.a)(We),[{files:[]}]))}},"+")))))})),c.a.createElement("hr",null),c.a.createElement(v.a,null,c.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-2 mx-2"},"Submit"))),ye&&ye?c.a.createElement(c.a.Fragment,null,_e.length&&(null===_e||void 0===_e?void 0:_e.map((function(e,t){return c.a.createElement(v.a,{key:t},c.a.createElement(s.a,null,c.a.createElement("div",{style:{border:"1px solid black",padding:"2px 2px",borderRadius:"8px",marginBottom:"4px"},className:""},c.a.createElement("div",{className:"py-1 mx-2"},c.a.createElement("strong",null," ",c.a.createElement(R.g,{size:25,fill:"#055761"}))," ","\xa0",null===e||void 0===e?void 0:e.comment," ",null===e||void 0===e?void 0:e.userName," (",null===e||void 0===e?void 0:e.Role,")"," ",null===e||void 0===e?void 0:e.time))))})))):null,_e&&(null===_e||void 0===_e?void 0:_e.map((function(e,t){return c.a.createElement(c.a.Fragment,null,c.a.createElement(v.a,{key:t,className:"my-2"},c.a.createElement(s.a,{lg:"6",md:"6",sm:"12"},c.a.createElement(p.a,null,"Comment"),c.a.createElement(O.a,{type:"textarea",name:"comment",placeholder:"Comment",value:e.comment||"",onChange:function(e){return function(e,t){var a=JSON.parse(localStorage.getItem("userData")),l=Object(o.a)(_e);l[e].userName=null===a||void 0===a?void 0:a.UserName,l[e].Role=null===a||void 0===a?void 0:a.Role,l[e].time=(new Date).toString(),l[e][t.target.name]=t.target.value,Ce(l)}(t,e)}})),c.a.createElement(s.a,{className:"d-flex mt-2",lg:"3",md:"3",sm:"12"},c.a.createElement("div",null,t?c.a.createElement(h.a,{type:"button",className:"btn btn-danger",onClick:function(){return function(e){var t=Object(o.a)(_e);t.splice(e,1),Ce(t)}(t)}},"-"):null),c.a.createElement("div",null,c.a.createElement(h.a,{className:"ml-1 ",color:"primary",type:"button",onClick:function(){Ce([].concat(Object(o.a)(_e),[Ie]))}},"+")))))}))),c.a.createElement(h.a,{className:"ml-1 ",color:"primary",onClick:function(e){!function(){var e=JSON.parse(localStorage.getItem("userData"));Oe(!0),Object(D.g)(null===e||void 0===e?void 0:e.accountId,_e).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}()}},"Submit Comment"),c.a.createElement("section",null,null===Je||void 0===Je?void 0:Je.map((function(e,t){return c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{className:"mt-1"},"Upload :"),c.a.createElement(v.a,{className:"my-1"},c.a.createElement(s.a,{lg:"6",md:"6",sm:"12",key:t},c.a.createElement(O.a,{type:"file",multiple:!0,onChange:function(e){return function(e,t){var a=Object(o.a)(Je),l=t.target.files;a[e].files=l,Ae(a)}(t,e)}})),c.a.createElement(s.a,{className:"d-flex mt-2",lg:"3",md:"3",sm:"12"},c.a.createElement("div",null,t?c.a.createElement(h.a,{type:"button",className:"btn btn-danger",onClick:function(){return function(e){var t=Object(o.a)(Je);t.splice(e,1),Ae(t)}(t)}},"-"):null),c.a.createElement("div",null,c.a.createElement(h.a,{className:"ml-1",color:"primary",type:"button",onClick:function(){Ae([].concat(Object(o.a)(Je),[{files:[]}]))}},"+")))))})))))),c.a.createElement(N.a,Object.assign({fullscreen:"xl",size:"lg",backdrop:!1,isOpen:Ee,toggle:xe},e),c.a.createElement(j.a,{toggle:xe},"Product List"),c.a.createElement(x.a,null,c.a.createElement("div",{className:"modalheaderaddrol p-1"},c.a.createElement("h3",null,"Product List"),c.a.createElement(k.a,{className:"tableofrole",bordered:!0,borderless:!0,hover:!0,responsive:!0,size:"sm",striped:!0},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"S.No."),c.a.createElement("th",null,"Product Name"))),c.a.createElement("tbody",null))))))}},907:function(e,t,a){}}]);
//# sourceMappingURL=226.8af48591.chunk.js.map