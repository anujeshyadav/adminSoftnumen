(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[153],{2767:function(e,t,a){},3112:function(e,t,a){"use strict";a.r(t);var n=a(14),l=a(15),s=a(16),r=a(17),i=a(1),o=a.n(i),c=a(986),m=a(845),u=a(846),d=a(852),h=a(855),p=a(205),f=a(867),b=a(848),E=a(860),g=a(843),w=a(844),v=a(899),k=a(835),x=a(849),C=a(5),y=a.n(C),N=a(963),S=a.n(N),L=a(282),j=a(388),O=a(428),R=a(968),M=(a(2767),function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,s=new Array(l),r=0;r<l;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={data:[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz",website:"hildegard.org"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv",website:"anastasia.net"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net",website:"ramiro.info"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org",website:"kale.biz"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca",website:"demarco.info"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",website:"ola.org"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",website:"elvis.io"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me",website:"jacynthe.com"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io",website:"conrad.com"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",website:"ambrose.net"}],filteredData:[],dataToExport:[],value:"",modal:!1,fileName:"",fileFormat:"xlsx",selectedRows:[],selectAll:!1},e.toggleModal=function(){e.setState({modal:!e.state.modal})},e.handleFilter=function(t){var a=e.state.data,n=[],l=t.target.value;e.setState({value:l}),l.length&&(n=a.filter((function(e){var t=e.name.toLowerCase().startsWith(l.toLowerCase())||e.email.toLowerCase().startsWith(l.toLowerCase())||e.website.toLowerCase().startsWith(l.toLowerCase())||e.id.toString().toLowerCase().startsWith(l.toLowerCase()),a=e.name.toLowerCase().includes(l.toLowerCase())||e.email.toLowerCase().includes(l.toLowerCase())||e.website.toLowerCase().includes(l.toLowerCase())||e.id.toString().toLowerCase().includes(l.toLowerCase());return t||(!t&&a?a:null)})),e.setState({value:l,filteredData:n}))},e.handleExport=function(){e.toggleModal();var t=e.state.dataToExport;e.state.data.map((function(a){return e.state.selectedRows.includes(a.id)?t.push(a):null})),e.setState({dataToExport:t});var a=e.state.fileName.length&&e.state.fileFormat.length?"".concat(e.state.fileName,".").concat(e.state.fileFormat):"excel-sheet.xlsx",n=S.a.utils.json_to_sheet(t),l=S.a.utils.book_new();S.a.utils.book_append_sheet(l,n,"test"),S.a.writeFile(l,a)},e.handleSelect=function(t){var a=e.state.selectedRows;if(a.includes(t)){if(!a.includes(t))return null;a.splice(a.indexOf(t),1)}else a.push(t);e.setState({selectedRows:a})},e.handleSelectAll=function(){var t=e.state.selectedRows,a=e.state.data;if(t.length<a.length){t=a.map((function(e){return e.id}))}else{if(t.length!==a.length)return null;t=[]}e.setState({selectedRows:t})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=(this.state.value?this.state.filteredData:this.state.data).map((function(t){return o.a.createElement("tr",{key:t.id,className:y()({selected:e.state.selectedRows.includes(t.id)})},o.a.createElement("td",null,o.a.createElement(R.a,{size:"sm",color:"primary",icon:o.a.createElement(L.a,{className:"vx-icon",size:12}),label:"",checked:e.state.selectedRows.includes(t.id),onChange:function(){return e.handleSelect(t.id)}})),o.a.createElement("td",null,t.email),o.a.createElement("td",null,t.name),o.a.createElement("td",null,t.website),o.a.createElement("td",null,t.id))})),a=this.state.selectedRows.length!==this.state.data.length&&this.state.selectedRows.length?j.a:L.a;return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{title:"XLSX",subTitle:"Xlsx is a parser and writer for various spreadsheet formats",link:"https://github.com/AdeleD/react-paginate"}),o.a.createElement(m.a,{className:"export-component"},o.a.createElement(u.a,{sm:"12"},o.a.createElement(d.a,null,o.a.createElement(h.a,null,o.a.createElement(m.a,null,o.a.createElement(u.a,{sm:"12"},o.a.createElement("div",{className:"d-flex flex-wrap justify-content-between"},o.a.createElement(p.a.Ripple,{color:"primary",onClick:this.toggleModal},"Export Selected"),o.a.createElement("div",{className:"filter position-relative has-icon-left"},o.a.createElement(f.a,{type:"text",value:this.state.value,onChange:function(t){return e.handleFilter(t)}}),o.a.createElement("div",{className:"form-control-position"},o.a.createElement(O.a,{size:15}))))),o.a.createElement(u.a,{sm:"12"},o.a.createElement(b.a,{className:"table-hover-animation mt-2",responsive:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,o.a.createElement(R.a,{size:"sm",color:"primary",icon:o.a.createElement(a,{className:"vx-icon",size:12}),checked:this.state.selectedRows.length,onChange:function(t){return e.handleSelectAll()}})),o.a.createElement("th",null,"Email"),o.a.createElement("th",null,"Name"),o.a.createElement("th",null,"Website"),o.a.createElement("th",null,"Rank"))),o.a.createElement("tbody",null,t)))))))),o.a.createElement(E.a,{isOpen:this.state.modal,toggle:this.toggleModal,className:"modal-dialog-centered"},o.a.createElement(g.a,{toggle:this.toggleModal},"Export To Excel"),o.a.createElement(w.a,null,o.a.createElement(v.a,null,o.a.createElement(f.a,{type:"text",value:this.state.fileName,onChange:function(t){return e.setState({fileName:t.target.value})},placeholder:"Enter File Name"})),o.a.createElement(v.a,null,o.a.createElement(k.a,{type:"select",id:"selectFileFormat",name:"customSelect",value:this.state.fileFormat,onChange:function(t){return e.setState({fileFormat:t.target.value})}},o.a.createElement("option",null,"xlsx"),o.a.createElement("option",null),o.a.createElement("option",null,"txt")))),o.a.createElement(x.a,null,o.a.createElement(p.a,{color:"primary",onClick:this.handleExport},"Export"),o.a.createElement(p.a,{color:"flat-danger",onClick:this.toggleModal},"Cancel"))))}}]),a}(o.a.Component));t.default=M},899:function(e,t,a){"use strict";var n=a(6),l=a(9),s=a(1),r=a.n(s),i=a(2),o=a.n(i),c=a(5),m=a.n(c),u=a(3),d=["className","cssModule","row","disabled","check","inline","tag"],h={children:o.a.node,row:o.a.bool,check:o.a.bool,inline:o.a.bool,disabled:o.a.bool,tag:u.tagPropType,className:o.a.string,cssModule:o.a.object},p=function(e){var t=e.className,a=e.cssModule,s=e.row,i=e.disabled,o=e.check,c=e.inline,h=e.tag,p=Object(l.a)(e,d),f=Object(u.mapToCssModules)(m()(t,!!s&&"row",o?"form-check":"form-group",!(!o||!c)&&"form-check-inline",!(!o||!i)&&"disabled"),a);return"fieldset"===h&&(p.disabled=i),r.a.createElement(h,Object(n.a)({},p,{className:f}))};p.propTypes=h,p.defaultProps={tag:"div"},t.a=p},951:function(e,t){},966:function(e,t){},967:function(e,t){},968:function(e,t,a){"use strict";var n=a(14),l=a(15),s=a(16),r=a(17),i=a(1),o=a.n(i),c=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"vx-checkbox-con ".concat(this.props.className?this.props.className:""," vx-checkbox-").concat(this.props.color)},o.a.createElement("input",{type:"checkbox",defaultChecked:this.props.defaultChecked,checked:this.props.checked,value:this.props.value,disabled:this.props.disabled,onClick:this.props.onClick?this.props.onClick:null,onChange:this.props.onChange?this.props.onChange:null}),o.a.createElement("span",{className:"vx-checkbox vx-checkbox-".concat(this.props.size?this.props.size:"md")},o.a.createElement("span",{className:"vx-checkbox--check"},this.props.icon)),o.a.createElement("span",null,this.props.label))}}]),a}(o.a.Component);t.a=c},986:function(e,t,a){"use strict";var n=a(14),l=a(15),s=a(16),r=a(17),i=a(1),o=a.n(i),c=a(845),m=a(846),u=function(e){Object(s.a)(a,e);var t=Object(r.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement(c.a,{className:"mb-2"},o.a.createElement(m.a,{sm:"12",className:"ml-50"},o.a.createElement("p",{className:"font-medium-5 mt-1 extension-title","data-tour":"extension-title"},this.props.title),this.props.link?o.a.createElement("a",{href:this.props.link,target:"_blank",rel:"noopener noreferrer"},this.props.subTitle):o.a.createElement("p",{className:"text-primary"},this.props.subTitle)))}}]),a}(o.a.Component);t.a=u}}]);
//# sourceMappingURL=153.ffebe3a8.chunk.js.map