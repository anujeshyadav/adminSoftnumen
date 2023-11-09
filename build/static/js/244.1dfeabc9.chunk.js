(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[244,378],{1116:function(e,a,t){},1924:function(e,a,t){"use strict";t.r(a);var n=t(14),l=t(15),c=t(16),r=t(17),o=t(1),m=t.n(o),s=t(845),i=t(846),u=t(108),d=t(852),p=t(853),E=t(854),g=t(855),f=t(1164),h=t.n(f),b=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={basicPicker:new Date,dateTimePicker:new Date,humanFriendly:new Date,minMax:new Date,disabledRange:new Date,multipleDates:new Date,rangePicker:new Date,weekNum:new Date,inlinePicker:new Date},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.basicPicker,n=a.dateTimePicker,l=a.humanFriendly,c=a.minMax,r=a.disabledRange,o=a.multipleDates,u=a.rangePicker,f=a.weekNum,b=a.inlinePicker;return m.a.createElement(d.a,null,m.a.createElement(p.a,null,m.a.createElement(E.a,null,"Datepickers")),m.a.createElement(g.a,null,m.a.createElement(s.a,null,m.a.createElement(i.a,{className:"mb-3",md:"6",sm:"12"},m.a.createElement("h5",{className:"text-bold-500"},"Basic"),m.a.createElement(h.a,{className:"form-control",value:t,onChange:function(a){e.setState({basicPicker:a})}})),m.a.createElement(i.a,{className:"mb-3",md:"6",sm:"12"},m.a.createElement("h5",{className:"text-bold-500"},"Date & Time"),m.a.createElement(h.a,{options:{minDate:"today",altInput:!0,altFormat:"m-j-Y H:i:S"},className:"form-control","data-enable-time":!0,value:n,onChange:function(a){e.setState({dateTimePicker:a})}})),m.a.createElement(i.a,{className:"mb-3",md:"6",sm:"12"},m.a.createElement("h5",{className:"text-bold-500"},"Human Friendly"),m.a.createElement(h.a,{className:"form-control",value:l,options:{altInput:!0,altFormat:"F j, Y",dateFormat:"Y-m-d"},onChange:function(a){e.setState({humanFriendly:a})}})),m.a.createElement(i.a,{className:"mb-3",md:"6",sm:"12"},m.a.createElement("h5",{className:"text-bold-500"},"Min & Max Dates"),m.a.createElement(h.a,{className:"form-control",value:c,options:{minDate:"today",maxDate:(new Date).fp_incr(14)},onChange:function(a){e.setState({minMax:a})}})),m.a.createElement(i.a,{className:"mb-3",md:"6",sm:"12"},m.a.createElement("h5",{className:"text-bold-500"},"Disabled Range"),m.a.createElement(h.a,{className:"form-control",value:r,options:{dateFormat:"Y-m-d",disable:[{from:"2020-02-01",to:"2020-02-10"},{from:"2020-02-20",to:"2020-02-25"}]},onChange:function(a){e.setState({disabledRange:a})}})),m.a.createElement(i.a,{className:"mb-3",md:"6",sm:"12"},m.a.createElement("h5",{className:"text-bold-500"},"Multiple Dates"),m.a.createElement(h.a,{className:"form-control",value:o,options:{mode:"multiple"},onChange:function(a){e.setState({multipleDates:a})}})),m.a.createElement(i.a,{className:"mb-3",md:"6",sm:"12"},m.a.createElement("h5",{className:"text-bold-500"},"Range"),m.a.createElement(h.a,{value:u,className:"form-control",options:{mode:"range"}})),m.a.createElement(i.a,{className:"mb-3",md:"6",sm:"12"},m.a.createElement("h5",{className:"text-bold-500"},"Preloaded Range"),m.a.createElement(h.a,{className:"form-control",options:{mode:"range",defaultDate:["2020-02-01","2020-02-15"]},onChange:function(a){e.setState({preloadRange:a})}})),m.a.createElement(i.a,{className:"mb-md-0 mb-3",md:"6",sm:"12"},m.a.createElement("h5",{className:"text-bold-500"},"Week Numbers"),m.a.createElement(h.a,{className:"form-control",value:f,options:{weekNumbers:!0},onChange:function(a){e.setState({weekNum:a})}})),m.a.createElement(i.a,{md:"6",sm:"12"},m.a.createElement("h5",{className:"text-bold-500"},"Inline"),m.a.createElement(h.a,{className:"form-control",value:b,options:{inline:!0},onChange:function(a){e.setState({inlinePicker:a})}})))))}}]),t}(m.a.Component),y=function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){var e;Object(n.a)(this,t);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={basic:new Date,timeLimit:new Date,preloaded:new Date},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.basic,n=a.timeLimit;return m.a.createElement(d.a,null,m.a.createElement(p.a,null,m.a.createElement(E.a,null,"Timepickers")),m.a.createElement(g.a,null,m.a.createElement(s.a,null,m.a.createElement(i.a,{className:"mb-3",md:"6",sm:"12"},m.a.createElement("h5",{className:"text-bold-500"},"Basic 24hrs"),m.a.createElement(h.a,{className:"form-control",value:t,options:{enableTime:!0,noCalendar:!0,dateFormat:"H:i"},onChange:function(a){e.setState({basic:a})}})),m.a.createElement(i.a,{className:"mb-3",md:"6",sm:"12"},m.a.createElement("h5",{className:"text-bold-500"},"Limit"),m.a.createElement(h.a,{className:"form-control",value:n,options:{enableTime:!0,noCalendar:!0,dateFormat:"H:i",minTime:"16:00",maxTime:"22:30"},onChange:function(a){e.setState({timeLimit:a})}})),m.a.createElement(i.a,{className:"mb-3",md:"6",sm:"12"},m.a.createElement("h5",{className:"text-bold-500"},"Preloaded"),m.a.createElement(h.a,{className:"form-control",options:{enableTime:!0,noCalendar:!0,dateFormat:"H:i",defaultDate:"13:45"},onChange:function(a){e.setState({preloaded:a})}})))))}}]),t}(m.a.Component),v=(t(1255),t(1116),function(e){Object(c.a)(t,e);var a=Object(r.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return m.a.createElement(m.a.Fragment,null,m.a.createElement(u.a,{breadCrumbTitle:"Date & Time Picker",breadCrumbParent:"Form Elements",breadCrumbActive:"Date & Time Picker"}),m.a.createElement(s.a,null,m.a.createElement(i.a,{sm:"12"},m.a.createElement(b,null)),m.a.createElement(i.a,{sm:"12"},m.a.createElement(y,null))))}}]),t}(m.a.Component));a.default=v},3186:function(e,a,t){"use strict";t.r(a);var n=t(50),l=t(4),c=t(35),r=t(1),o=t.n(r),m=t(136),s=t(845),i=t(846),u=t(852),d=t(855),p=t(874),E=t(899),g=t(847),f=t(867),h=t(205),b=t(1042),y=t(860),v=t(843),N=t(844),S=t(848),x=t(849);t(1962);t(22),t(8),t(1023);var C=t(193),O=t.n(C),R=(t(597),t(1100),t(74)),j=(t(903),t(1924),["Product Registration","SpareParts","Orders","PartsCatalogue","Scrutiny / Inspections","Invoices / Billing","Support","Servicing","Warehouse","Distributors","Dealers","Suppliers","Service Centers","Customer Data","Campaigns"]);a.default=function(){var e=Object(r.useState)({}),a=Object(c.a)(e,2),t=a[0],C=a[1],D=Object(r.useState)({}),k=Object(c.a)(D,2),P=k[0],F=k[1],w=Object(r.useState)(!1),T=Object(c.a)(w,2),_=T[0],U=T[1],I=Object(r.useState)(!1),M=Object(c.a)(I,2),A=M[0],H=M[1],L=function(){return H(!A)},B=Object(r.useState)(""),Y=Object(c.a)(B,2),q=Y[0],W=Y[1],J=Object(r.useState)([]),z=Object(c.a)(J,2),G=z[0],Q=z[1];Object(r.useEffect)((function(){Q(j)}),[]),Object(r.useEffect)((function(){console.log(t),console.log(P)}),[t,P]);var X=function(e){var a=e.target,c=a.name,r=a.value;a.checked;C(Object(l.a)(Object(l.a)({},t),{},Object(n.a)({},c,r)))};return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(s.a,null,o.a.createElement(i.a,null)),o.a.createElement(u.a,null,o.a.createElement(s.a,{className:"m-2"},o.a.createElement(i.a,null,o.a.createElement("h1",{className:"float-left"},"Scheduler Time"))),o.a.createElement(d.a,null,o.a.createElement(p.a,{className:"m-1",onSubmit:function(e){e.preventDefault();JSON.parse(localStorage.getItem("userData"))}},o.a.createElement(s.a,{className:"mb-2"},o.a.createElement(i.a,{lg:"6",md:"6",sm:"12"},o.a.createElement(E.a,null,o.a.createElement(g.a,null,"Start Date"),o.a.createElement(f.a,{required:!0,type:"date",name:"StartDate",value:null===t||void 0===t?void 0:t.StartDate,onChange:function(e){return X(e)}}))),o.a.createElement(i.a,{lg:"6",md:"6",sm:"12"},o.a.createElement(E.a,null,o.a.createElement(g.a,null,"Start Time "),o.a.createElement(f.a,{required:!0,type:"time",name:"Start_Time",value:null===t||void 0===t?void 0:t.Start_Time,onChange:function(e){return X(e)}}))),o.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(g.a,null,"Recurrence Pattern"),o.a.createElement("div",{className:"form-label-group mt-2"},o.a.createElement("div",null,o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"Pattern",value:"Yearly",onChange:function(e){return X(e)}}),o.a.createElement("span",{style:{marginRight:"3px"}},"Yearly")),o.a.createElement("div",null,o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"Pattern",value:"Monthly",onChange:function(e){return X(e)}}),o.a.createElement("span",{style:{marginRight:"3px"}},"Monthly")),o.a.createElement("div",null,o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"Pattern",value:"Weekly",onChange:function(e){return X(e)}}),o.a.createElement("span",{style:{marginRight:"3px"}},"Weekly")),o.a.createElement("div",null,o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"Pattern",value:"Daily",onChange:function(e){return X(e)}}),o.a.createElement("span",{style:{marginRight:"3px"}},"Daily")),o.a.createElement("div",null,o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"Pattern",value:"Hourly",onChange:function(e){return X(e)}}),o.a.createElement("span",{style:{marginRight:"3px"}},"Hourly")),o.a.createElement("div",null,o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"Pattern",value:"Minuts",onChange:function(e){return X(e)}}),o.a.createElement("span",{style:{marginRight:"20px"}},"Minuts")),o.a.createElement("div",null,o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"Pattern",value:"Second",onChange:function(e){return X(e)}}),o.a.createElement("span",{style:{marginRight:"20px"}},"Second")))),o.a.createElement(i.a,{lg:"6",md:"6"},(null===t||void 0===t?void 0:t.Pattern)&&(null===t||void 0===t?void 0:t.Pattern)&&o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{className:"mb-1"},"If you want to Repeated Time"),o.a.createElement(E.a,{className:"d-flex"},o.a.createElement("div",{className:"mx-2"},o.a.createElement(f.a,{type:"radio",name:"Repeat_time",value:"Every",onChange:function(e){return X(e)}}),o.a.createElement("span",{style:{marginRight:"3px"}},"Every")),o.a.createElement("div",null,o.a.createElement(f.a,{className:"every",style:{marginRight:"3px",width:"80px"},type:"text",placeholder:null===t||void 0===t?void 0:t.Pattern,name:"Every_Interval",value:null===t||void 0===t?void 0:t.Every_Interval,onChange:function(e){return X(e)}}))))),o.a.createElement("hr",null),o.a.createElement(i.a,{lg:"6",md:"6"},o.a.createElement(E.a,null,o.a.createElement(g.a,{className:"my-1"},"Range Of Recurrence "),o.a.createElement("div",{className:"ml-2 "},o.a.createElement(f.a,{style:{marginRight:"3px"},type:"radio",name:"Recurrence",value:"No_End_Date",onChange:function(e){return X(e)}}),o.a.createElement("span",{style:{marginRight:"3px"}},"No End Date")),o.a.createElement("div",{className:"ml-2 "},o.a.createElement(f.a,{style:{marginRight:"3px"},type:"radio",name:"Recurrence",value:"End_After",onChange:function(e){return X(e)}}),o.a.createElement("span",{style:{marginRight:"3px"}},"End After")),"End_After"==(null===t||void 0===t?void 0:t.Recurrence)&&o.a.createElement("div",{className:"d-flex py-1"},o.a.createElement("div",{className:"OccurrencesStyle",style:{marginTop:"-5px"}},o.a.createElement(f.a,{style:{marginRight:"3px",width:"100px",marginBottom:"2px"},value:null===t||void 0===t?void 0:t.Occurance_frequency,onChange:function(e){return X(e)},type:"number",name:"Occurance_frequency",placeholder:"Occurrences Time"})),o.a.createElement("div",null,o.a.createElement("span",{style:{marginLeft:"10px"}},o.a.createElement("b",null,"Occurrences")))),o.a.createElement("div",{className:"ml-2"},o.a.createElement(f.a,{style:{marginRight:"3px"},type:"radio",name:"Recurrence",value:"End_by",onChange:function(e){return X(e)}}),o.a.createElement("span",{style:{marginRight:"3px"}},"End by")),"End_by"==(null===t||void 0===t?void 0:t.Recurrence)&&o.a.createElement(f.a,{value:null===t||void 0===t?void 0:t.End_by_date,type:"date",name:"End_by_date",onChange:function(e){return X(e)}})))),o.a.createElement(s.a,null,o.a.createElement(h.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mt-2 mx-2"},"Submit"))),o.a.createElement("hr",null),o.a.createElement(s.a,null),o.a.createElement(p.a,null,o.a.createElement(s.a,{className:"mt-2"},o.a.createElement(i.a,null,o.a.createElement(g.a,null,"Import Type"),o.a.createElement(b.a,{className:"maininput"},o.a.createElement(f.a,{disabled:!0,name:"Role",value:q,onChange:function(e){return X(e)},type:"text",placeholder:"Import Search",className:"form-control inputs"}),o.a.createElement(h.a,{onClick:function(){L()},color:"primary",className:"mybtn primary"},o.a.createElement(m.g,{onClick:function(e){return e.preventDefault()},fill:"white"})))),o.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(g.a,{className:""},o.a.createElement("h4",null,"Adhoc Upload")),o.a.createElement("input",{multiple:!0,className:"form-control",style:{marginRight:"3px"},name:"adhocfiles",type:"file",onChange:function(e){return F(e.target.files)}})),o.a.createElement(i.a,{lg:"6",md:"6",sm:"6",className:"mb-2 d-flex justify-content-center"},_?o.a.createElement(o.a.Fragment,null," ",o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a.Ripple,{color:"primary",className:"mr-1 mt-2 mx-2"},"Loading.."))):o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a.Ripple,{color:"primary",onClick:function(e){return function(e){U(!0),e.preventDefault();var a,t,n=new FormData;console.log(q.split(" ").join("")),q.split(" ").join("").includes("/")?(a=q.split("/").join("").split(" ")[0],t=q.split("/").join("").split(" ")[1]):a=q.split(" ").join("");var l=P[0].name.split(".")[0];l.includes(a)||l.includes(t)?(n.append("file",P[0]),n.append("partType",a),"SpareParts"==q&&Object(R.S)(n).then((function(e){console.log(e.message),O()("".concat(q," ").concat(e.message))})).catch((function(e){console.log(e)})),"Orders"==q&&Object(R.G)(n).then((function(e){U(!1),console.log(e),O()("".concat(q," File Uploaded Successfully"))})).catch((function(e){console.log(e)})),"PartsCatalogue"==q&&Object(R.J)(n).then((function(e){U(!1),console.log(e),O()("".concat(q," File Uploaded Successfully"))})).catch((function(e){console.log(e)})),"Product Registration"==q&&Object(R.N)(n).then((function(e){U(!1),console.log(e),O()("".concat(q," File Uploaded Successfully"))})).catch((function(e){console.log(e)})),"Scrutiny / Inspections"==q&&Object(R.B)(n).then((function(e){console.log(e),U(!1),O()("".concat(q," File Uploaded Successfully"))})).catch((function(e){console.log(e)})),"Invoices / Billing"==q&&Object(R.E)(n).then((function(e){console.log(e),U(!1),O()("".concat(q," File Uploaded Successfully"))})).catch((function(e){console.log(e)})),"Support"==q&&Object(R.X)(n).then((function(e){U(!1),console.log(e),O()("".concat(q," File Uploaded Successfully"))})).catch((function(e){console.log(e)})),"Servicing"==q&&Object(R.Q)(n).then((function(e){U(!1),console.log(e),O()("".concat(q," File Uploaded Successfully"))})).catch((function(e){console.log(e)})),"Warehouse"==q&&Object(R.cb)(n).then((function(e){U(!1),console.log(e),O()("".concat(q," File Uploaded Successfully"))})).catch((function(e){console.log(e)})),"Distributors"==q&&Object(R.x)(n).then((function(e){U(!1),console.log(e),O()("".concat(q," File Uploaded Successfully"))})).catch((function(e){console.log(e)})),"Dealers"==q&&Object(R.s)(n).then((function(e){U(!1),console.log(e),O()("".concat(q," File Uploaded Successfully"))})).catch((function(e){console.log(e)})),"Suppliers"==q&&Object(R.U)(n).then((function(e){U(!1),console.log(e),O()("".concat(q," File Uploaded Successfully"))})).catch((function(e){console.log(e)})),"Service Centers"==q&&Object(R.P)(n).then((function(e){U(!1),console.log(e),O()("".concat(q," File Uploaded Successfully"))})).catch((function(e){console.log(e)})),"Customer Data"==q&&Object(R.q)(n).then((function(e){U(!1),console.log(e),O()("".concat(q," File Uploaded Successfully"))})).catch((function(e){console.log(e)})),"Campaigns"==q&&Object(R.e)(n).then((function(e){U(!1),console.log(e),O()("".concat(q," File Uploaded Successfully"))})).catch((function(e){console.log(e)}))):O()("Error!","Note: ".concat(a," Name and ").concat(l," Name Prefix Should be Match"),"error")}(e)},className:"mr-1 mt-2 mx-2"},"Upload"))))))),o.a.createElement(y.a,{fullscreen:"xl",size:"lg",backdrop:!1,isOpen:A,toggle:L},o.a.createElement(v.a,{toggle:L},"Import Type List"),o.a.createElement(N.a,{className:"table-body shedulemodalbody"},o.a.createElement("div",{className:"modalheaderaddrol p-1"},o.a.createElement("h3",{className:"table-item"},"Import Type"),o.a.createElement(S.a,{className:"scheduletble_heading",bordered:!0,hover:!0,responsive:!0,size:"sm"},o.a.createElement("thead",{className:"tableRowStyle"},o.a.createElement("tr",{className:"tableRowStyle"},o.a.createElement("th",null,"S.No."),o.a.createElement("th",null,"Import Type Name"))),o.a.createElement("tbody",null,G.map((function(e,a){return o.a.createElement("tr",{className:"tableRowStyles",key:a,name:"Role",onClick:function(a){return W(e),void L()},style:{cursor:"pointer"}},o.a.createElement("th",{scope:"row",className:"tableRowStyles"},a+1),o.a.createElement("td",{className:"tableRowStyles"}," ",e))})))))),o.a.createElement(x.a,null,o.a.createElement(h.a,{color:"primary",onClick:L},"Submit"),o.a.createElement(h.a,{color:"secondary",onClick:L},"Cancel")))))}},904:function(e,a){}}]);
//# sourceMappingURL=244.1dfeabc9.chunk.js.map