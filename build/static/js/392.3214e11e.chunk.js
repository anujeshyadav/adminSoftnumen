(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[392],{3100:function(e,t,a){"use strict";a.r(t);var i=a(14),n=a(15),r=a(16),l=a(17),s=a(1),o=a.n(s),c=a(852),d=a(855),u=a(850),f=a(859),g=a(841),p=a(840),m=a(867),h=a(205),b=a(870),v=a(107),S=a(283),w=a(51),y=a.n(w),z=(a(868),a(108)),N=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={rowData:null,paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"First Name",field:"firstname",width:175,filter:!0,checkboxSelection:!0,headerCheckboxSelectionFilteredOnly:!0,headerCheckboxSelection:!0},{headerName:"Last Name",field:"lastname",filter:!0,width:175},{headerName:"Email",field:"email",filter:!0,width:250,pinned:window.innerWidth>992&&"left"},{headerName:"Company",field:"company",filter:!0,width:250},{headerName:"City",field:"city",filter:!0,width:150},{headerName:"Country",field:"country",filter:!0,width:150},{headerName:"State",field:"state",filter:!0,width:125},{headerName:"Zip",field:"zip",filter:"agNumberColumnFilter",width:140},{headerName:"Followers",field:"followers",filter:"agNumberColumnFilter",width:140}]},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this;y.a.get("/api/aggrid/data").then((function(t){var a=t.data.data;JSON.stringify(a),e.setState({rowData:a})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,i=t.columnDefs,n=t.defaultColDef;return o.a.createElement(o.a.Fragment,null,o.a.createElement(z.a,{breadCrumbTitle:"Aggrid Table",breadCrumbParent:"Forms & Tables",breadCrumbActive:"Aggrid Table"}),o.a.createElement(c.a,{className:"overflow-hidden agGrid-card"},o.a.createElement(d.a,{className:"py-0"},null===this.state.rowData?null:o.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},o.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},o.a.createElement("div",{className:"mb-1"},o.a.createElement(u.a,{className:"p-1 ag-dropdown"},o.a.createElement(f.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,o.a.createElement(S.a,{className:"ml-50",size:15})),o.a.createElement(g.a,{right:!0},o.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),o.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),o.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),o.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),o.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},o.a.createElement("div",{className:"table-input mr-1"},o.a.createElement(m.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),o.a.createElement("div",{className:"export-btn"},o.a.createElement(h.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),o.a.createElement(v.a.Consumer,null,(function(t){return o.a.createElement(b.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:n,columnDefs:i,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!0,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})}))))))}}]),a}(o.a.Component);t.default=N},867:function(e,t,a){"use strict";var i=a(6),n=a(9),r=a(12),l=a(21),s=a(1),o=a.n(s),c=a(2),d=a.n(c),u=a(5),f=a.n(u),g=a(3),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],m={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:g.tagPropType,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(r.a)(a)),a.focus=a.focus.bind(Object(r.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,r=e.type,l=e.bsSize,s=e.valid,c=e.invalid,d=e.tag,u=e.addon,m=e.plaintext,h=e.innerRef,b=Object(n.a)(e,p),v=["radio","checkbox"].indexOf(r)>-1,S=new RegExp("\\D","g"),w=d||("select"===r||"textarea"===r?r:"input"),y="form-control";m?(y+="-plaintext",w=d||"input"):"file"===r?y+="-file":"range"===r?y+="-range":v&&(y=u?null:"form-check-input"),b.size&&S.test(b.size)&&(Object(g.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=b.size,delete b.size);var z=Object(g.mapToCssModules)(f()(t,c&&"is-invalid",s&&"is-valid",!!l&&"form-control-"+l,y),a);return("input"===w||d&&"function"===typeof d)&&(b.type=r),b.children&&!m&&"select"!==r&&"string"===typeof w&&"select"!==w&&(Object(g.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),o.a.createElement(w,Object(i.a)({},b,{ref:h,className:z,"aria-invalid":c}))},t}(o.a.Component);h.propTypes=m,h.defaultProps={type:"text"},t.a=h}}]);
//# sourceMappingURL=392.3214e11e.chunk.js.map