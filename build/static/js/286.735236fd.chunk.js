(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[286],{3071:function(e,t,a){"use strict";a.r(t);var n=a(50),i=a(14),r=a(15),l=a(16),s=a(17),o=a(1),c=a.n(o),d=a(845),u=a(846),m=a(852),p=a(855),f=a(850),g=a(859),v=a(841),h=a(840),b=a(867),w=a(205),E=(a(51),a(107)),S=a(870),z=a(330),y=a(283),N=a(22),P=(a(868),a(864),function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){var e,r;Object(i.a)(this,a);for(var l=arguments.length,s=new Array(l),o=0;o<l;o++)s[o]=arguments[o];return(r=t.call.apply(t,[this].concat(s))).state={rowData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:150,filter:!0},{headerName:"Name",field:"subscriptions",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",null,c.a.createElement("span",null,e.data.subscriptions))}},{headerName:"Product Name",field:"product",filter:!0,width:190,cellRendererFramework:function(e){return c.a.createElement("div",{className:"d-flex align-items-center cursor-pointer"},c.a.createElement("span",null,e.data.product))}},{headerName:"How Many Day",field:"validity",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",null,c.a.createElement("span",null,e.data.validity))}},{headerName:"How Many Orders Placed",field:"orders",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",null,c.a.createElement("span",null,e.data.orders))}},{headerName:"How Many Remaining",field:"remaining",filter:!0,width:200,cellRendererFramework:function(e){return c.a.createElement("div",null,c.a.createElement("span",null,e.data.remaining))}},{headerName:"Status",field:"status",filter:!0,width:150,cellRendererFramework:function(e){return"Block"===e.value?c.a.createElement("div",{className:"badge badge-pill badge-success"},e.data.status):"Unblock"===e.value?c.a.createElement("div",{className:"badge badge-pill badge-warning"},e.data.status):null}},(e={headerName:"Actions",field:"sortorder"},Object(n.a)(e,"field","transactions"),Object(n.a)(e,"width",150),Object(n.a)(e,"cellRendererFramework",(function(e){return c.a.createElement("div",{className:"actions cursor-pointer"},c.a.createElement(z.a,{className:"mr-50",size:"25px",color:"green",onClick:function(){return N.a.push("/app/freshlist/subscriber/viewSubscriber/".concat(e.data._id))}}))})),e)]},r.onGridReady=function(e){r.gridApi=e.api,r.gridColumnApi=e.columnApi,r.setState({currenPageSize:r.gridApi.paginationGetCurrentPage()+1,getPageSize:r.gridApi.paginationGetPageSize(),totalPages:r.gridApi.paginationGetTotalPages()})},r.updateSearchQuery=function(e){r.gridApi.setQuickFilter(e)},r.filterSize=function(e){r.gridApi&&(r.gridApi.paginationSetPageSize(Number(e)),r.setState({currenPageSize:e,getPageSize:e}))},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e,t,a,n=JSON.parse(localStorage.getItem("userData"));console.log(n.role);var i=null===n||void 0===n||null===(e=n.role)||void 0===e?void 0:e.find((function(e){return"Unique Code"===(null===e||void 0===e?void 0:e.pageName)}));console.log(i),this.setState({Viewpermisson:null===i||void 0===i?void 0:i.permission.includes("View")}),this.setState({Createpermisson:null===i||void 0===i?void 0:i.permission.includes("Create")}),this.setState({Editpermisson:null===i||void 0===i?void 0:i.permission.includes("Edit")}),this.setState({Deletepermisson:null===i||void 0===i?void 0:i.permission.includes("Delete")}),console.log(null===i||void 0===i?void 0:i.permission.includes("View")),console.log(null===i||void 0===i?void 0:i.permission.includes("Create")),console.log(null===i||void 0===i?void 0:i.permission.includes("Edit")),console.log(null===i||void 0===i?void 0:i.permission.includes("Delete"));var r=new FormData;r.append("user_id",null===n||void 0===n||null===(t=n.Userinfo)||void 0===t?void 0:t.id),r.append("role",null===n||void 0===n||null===(a=n.Userinfo)||void 0===a?void 0:a.role)}},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,n=t.columnDefs,i=t.defaultColDef;return console.log(a),c.a.createElement(d.a,{className:"app-user-list"},c.a.createElement(u.a,{sm:"12"}),c.a.createElement(u.a,{sm:"12"},c.a.createElement(m.a,null,c.a.createElement(d.a,{className:"m-2"},c.a.createElement(u.a,null,c.a.createElement("h1",{sm:"6",className:"float-left"},"Unique Code"))),c.a.createElement(p.a,null,null===this.state.rowData?null:c.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},c.a.createElement("div",{className:"mb-1"},c.a.createElement(f.a,{className:"p-1 ag-dropdown"},c.a.createElement(g.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,c.a.createElement(y.a,{className:"ml-50",size:15})),c.a.createElement(v.a,{right:!0},c.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),c.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),c.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),c.a.createElement(h.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},c.a.createElement("div",{className:"table-input mr-1"},c.a.createElement(b.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),c.a.createElement("div",{className:"export-btn"},c.a.createElement(w.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),c.a.createElement(E.a.Consumer,null,(function(t){return c.a.createElement(S.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:i,columnDefs:n,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})})))))))}}]),a}(c.a.Component));t.default=P},864:function(e,t,a){},867:function(e,t,a){"use strict";var n=a(6),i=a(9),r=a(12),l=a(21),s=a(1),o=a.n(s),c=a(2),d=a.n(c),u=a(5),m=a.n(u),p=a(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],g={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:p.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},v=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,l=e.bsSize,s=e.valid,c=e.invalid,d=e.tag,u=e.addon,g=e.plaintext,v=e.innerRef,h=Object(i.a)(e,f),b=["radio","checkbox"].indexOf(r)>-1,w=new RegExp("\\D","g"),E=d||("select"===r||"textarea"===r?r:"input"),S="form-control";g?(S+="-plaintext",E=d||"input"):"file"===r?S+="-file":"range"===r?S+="-range":b&&(S=u?null:"form-check-input"),h.size&&w.test(h.size)&&(Object(p.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=h.size,delete h.size);var z=Object(p.mapToCssModules)(m()(t,c&&"is-invalid",s&&"is-valid",!!l&&"form-control-"+l,S),a);return("input"===E||d&&"function"===typeof d)&&(h.type=r),h.children&&!g&&"select"!==r&&"string"===typeof E&&"select"!==E&&(Object(p.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),o.a.createElement(E,Object(n.a)({},h,{ref:v,className:z,"aria-invalid":c}))},t}(o.a.Component);v.propTypes=g,v.defaultProps={type:"text"},t.a=v}}]);
//# sourceMappingURL=286.735236fd.chunk.js.map