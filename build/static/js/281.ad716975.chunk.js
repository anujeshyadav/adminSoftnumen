(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[281],{3069:function(e,t,a){"use strict";a.r(t);var i=a(14),n=a(15),l=a(16),r=a(17),o=a(1),s=a.n(o),c=a(837),d=a(838),u=a(844),p=a(847),f=a(842),m=a(850),g=a(833),v=a(832),h=a(859),S=a(204),b=(a(51),a(106)),z=a(862),w=a(281),E=(a(22),a(860),a(856),a(10)),y=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={rowData:[],paginationPageSize:20,currenPageSize:"",Log:[],getPageSize:"",defaultColDef:{sortable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150,filter:!0},{headerName:"Name",field:"full_name",filter:!0,width:200,cellRendererFramework:function(e){var t;return s.a.createElement("div",null,s.a.createElement("span",null,null===(t=e.data)||void 0===t?void 0:t.full_name))}},{headerName:"Activity",field:"product",filter:!0,width:700,cellRendererFramework:function(e){var t,a=JSON.parse(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.log_event);return s.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},s.a.createElement("span",null,null===a||void 0===a?void 0:a.data))}}]},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e,t,a,i=this,n=JSON.parse(localStorage.getItem("userData")),l=null===n||void 0===n||null===(e=n.role)||void 0===e?void 0:e.find((function(e){return"Logs"===(null===e||void 0===e?void 0:e.pageName)}));console.log(l),this.setState({Viewpermisson:null===l||void 0===l?void 0:l.permission.includes("View")}),this.setState({Createpermisson:null===l||void 0===l?void 0:l.permission.includes("Create")}),this.setState({Editpermisson:null===l||void 0===l?void 0:l.permission.includes("Edit")}),this.setState({Deletepermisson:null===l||void 0===l?void 0:l.permission.includes("Delete")});var r=new FormData;r.append("user_id",null===n||void 0===n||null===(t=n.Userinfo)||void 0===t?void 0:t.id),r.append("role",null===n||void 0===n||null===(a=n.Userinfo)||void 0===a?void 0:a.role),E.a.post("/getAllLogs",r).then((function(e){var t,a;console.log(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.data),i.setState({rowData:null===e||void 0===e||null===(a=e.data)||void 0===a?void 0:a.data})})).catch((function(e){}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,i=t.columnDefs,n=t.defaultColDef;return console.log(a),s.a.createElement(c.a,{className:"app-user-list"},s.a.createElement(d.a,{sm:"12"}),s.a.createElement(d.a,{sm:"12"},s.a.createElement(u.a,null,s.a.createElement(c.a,{className:"m-2"},s.a.createElement(d.a,null,s.a.createElement("h1",{sm:"6",className:"float-left"},"Logs Report"))),s.a.createElement(p.a,null,null===this.state.rowData?null:s.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},s.a.createElement("div",{className:"mb-1"},s.a.createElement(f.a,{className:"p-1 ag-dropdown"},s.a.createElement(m.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,s.a.createElement(w.a,{className:"ml-50",size:15})),s.a.createElement(g.a,{right:!0},s.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),s.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),s.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),s.a.createElement(v.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),s.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},s.a.createElement("div",{className:"table-input mr-1"},s.a.createElement(h.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),s.a.createElement("div",{className:"export-btn"},s.a.createElement(S.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),s.a.createElement(b.a.Consumer,null,(function(t){return s.a.createElement(z.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:n,columnDefs:i,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),a}(s.a.Component);t.default=y},856:function(e,t,a){},859:function(e,t,a){"use strict";var i=a(6),n=a(7),l=a(12),r=a(21),o=a(1),s=a.n(o),c=a(2),d=a.n(c),u=a(5),p=a.n(u),f=a(3),m=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],g={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:f.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},v=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(l.a)(a)),a.focus=a.focus.bind(Object(l.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,l=e.type,r=e.bsSize,o=e.valid,c=e.invalid,d=e.tag,u=e.addon,g=e.plaintext,v=e.innerRef,h=Object(n.a)(e,m),S=["radio","checkbox"].indexOf(l)>-1,b=new RegExp("\\D","g"),z=d||("select"===l||"textarea"===l?l:"input"),w="form-control";g?(w+="-plaintext",z=d||"input"):"file"===l?w+="-file":"range"===l?w+="-range":S&&(w=u?null:"form-check-input"),h.size&&b.test(h.size)&&(Object(f.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=h.size,delete h.size);var E=Object(f.mapToCssModules)(p()(t,c&&"is-invalid",o&&"is-valid",!!r&&"form-control-"+r,w),a);return("input"===z||d&&"function"===typeof d)&&(h.type=l),h.children&&!g&&"select"!==l&&"string"===typeof z&&"select"!==z&&(Object(f.warnOnce)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),s.a.createElement(z,Object(i.a)({},h,{ref:v,className:E,"aria-invalid":c}))},t}(s.a.Component);v.propTypes=g,v.defaultProps={type:"text"},t.a=v}}]);
//# sourceMappingURL=281.ad716975.chunk.js.map