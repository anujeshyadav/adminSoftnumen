(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[356],{2869:function(e,a,t){"use strict";t.r(a),t.d(a,"AddVendor",(function(){return H}));var n=t(928),l=t(55),r=t(17),c=t(18),s=t(19),m=t(20),o=t(1),i=t.n(o),d=t(892),u=t(883),h=t(884),p=t(170),g=t(895),E=t(885),b=t(886),f=t(887),N=t(873),v=(t(25),t(10)),y=t(221),_=t.n(y),C=(t(624),t(78)),H=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var c;return Object(r.a)(this,t),(c=a.call(this,e)).onChangeHandler1=function(e){c.setState({selectedFile1:e.target.files[0]}),c.setState({selectedName1:e.target.files[0].name}),console.log(e.target.files[0])},c.onChangeHandler2=function(e){c.setState({selectedFile2:e.target.files[0]}),c.setState({selectedName2:e.target.files[0].name}),console.log(e.target.files[0])},c.onChangeHandler3=function(e){c.setState({selectedFile3:e.target.files[0]}),c.setState({selectedName3:e.target.files[0].name}),console.log(e.target.files[0])},c.onChangeHandler4=function(e){c.setState({selectedFile4:e.target.files[0]}),c.setState({selectedName4:e.target.files[0].name}),console.log(e.target.files[0])},c.onChangeHandler5=function(e){c.setState({selectedFile5:e.target.files[0]}),c.setState({selectedName5:e.target.files[0].name}),console.log(e.target.files[0])},c.onChangeHandler6=function(e){c.setState({selectedFile6:e.target.files[0]}),c.setState({selectedName6:e.target.files[0].name}),console.log(e.target.files[0])},c.changeHandler=function(e){c.setState(Object(l.a)({},e.target.name,e.target.value))},c.submitHandler=function(e){e.preventDefault();var a=new FormData;a.append("name",c.state.name),a.append("mobile",c.state.mobile),a.append("email",c.state.email),a.append("door_number",c.state.door_number),a.append("street",c.state.street),a.append("location",c.state.location),a.append("city",c.state.city),a.append("pincode",c.state.pincode),a.append("service_location",c.state.service_location),a.append("service_city",c.state.service_city),a.append("service_pincode",c.state.service_pincode),a.append("adhar_no",c.state.adhar_no),a.append("pancard_no",c.state.pancard_no),a.append("account_no",c.state.account_no),a.append("cus_name",c.state.cus_name),a.append("branch",c.state.branch),a.append("ifsc_code",c.state.ifsc_code),a.append("vendoor_img",c.state.selectedFile1,c.state.selectedName1),a.append("adhar_img_front",c.state.selectedFile2,c.state.selectedName2),a.append("adhar_img_back",c.state.selectedFile3,c.state.selectedName3),a.append("pancard_img_front",c.state.selectedFile4,c.state.selectedName4),a.append("pancard_img_back",c.state.selectedFile5,c.state.selectedName5),a.append("passbook_img",c.state.selectedFile6,c.state.selectedName6);var t,l=Object(n.a)(a.values());try{for(l.s();!(t=l.n()).done;){var r=t.value;console.log(r)}}catch(s){l.e(s)}finally{l.f()}v.a.post("/admin/admin_add_vender",a).then((function(e){console.log(e.data),"success"===e.data.msg&&(_()("Success!","Submitted SuccessFull!","success"),c.props.history.push("/app/freshlist/vendor/vendorList"))})).catch((function(e){console.log(e)}))},c.state={name:"",mobile:"",email:"",door_number:"",street:"",location:"",city:"",pincode:"",service_location:"",service_city:"",service_pincode:"",adhar_no:"",pancard_no:"",account_no:"",cus_name:"",branch:"",ifsc_code:"",selectedFile1:null,selectedName1:"",selectedFile2:null,selectedName2:"",selectedFile3:null,selectedName3:"",selectedFile4:null,selectedName4:"",selectedFile5:null,selectedName5:"",selectedFile6:null,selectedName6:""},c}return Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(d.a,null,i.a.createElement(u.a,{className:"m-2"},i.a.createElement(h.a,null,i.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add New Vendor")),i.a.createElement(h.a,null,i.a.createElement(C.b,{render:function(e){var a=e.history;return i.a.createElement(p.a,{className:"float-right",color:"danger",onClick:function(){return a.push("/app/freshlist/vendor/vendorList")}},"Back")}}))),i.a.createElement(g.a,null,i.a.createElement(E.a,{className:"m-1",onSubmit:this.submitHandler},i.a.createElement(u.a,null,i.a.createElement("h5",null,"Personal Information")),i.a.createElement(u.a,{className:"mb-2 mt-2"},i.a.createElement(h.a,{lg:"6",md:"6",className:"mb-2"},i.a.createElement(b.a,null,"Name"),i.a.createElement(f.a,{required:!0,type:"text",placeholder:"Name",name:"name",value:this.state.name,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(b.a,null,"Mobile No."),i.a.createElement(f.a,{required:!0,type:"number",name:"mobile",placeholder:"Enter Mobile Number",value:this.state.mobile,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(b.a,null,"Email"),i.a.createElement(f.a,{required:!0,type:"email",name:"email",placeholder:"Enter Email",value:this.state.email,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(b.a,null,"Door Number"),i.a.createElement(f.a,{required:!0,type:"text",name:"door_number",placeholder:"Door Number",value:this.state.door_number,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(b.a,null,"Street"),i.a.createElement(f.a,{required:!0,type:"text",name:"street",placeholder:"Street",value:this.state.street,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(b.a,null,"Location"),i.a.createElement(f.a,{required:!0,type:"text",name:"location",placeholder:"Location",value:this.state.location,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(b.a,null,"City"),i.a.createElement(f.a,{required:!0,type:"text",name:"city",placeholder:"City",value:this.state.city,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(b.a,null,"PinCode"),i.a.createElement(f.a,{required:!0,type:"tel",name:"pincode",placeholder:"PINCODE",value:this.state.pincode,onChange:this.changeHandler}))),i.a.createElement(u.a,null,i.a.createElement("h5",null,"Service Information")),i.a.createElement(u.a,{className:"mb-2 mt-2"},i.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(b.a,null,"Service Location"),i.a.createElement(f.a,{required:!0,type:"text",name:"service_location",placeholder:"Service Location",value:this.state.service_location,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(b.a,null,"Service City"),i.a.createElement(f.a,{required:!0,type:"text",name:"service_city",placeholder:"Service City",value:this.state.service_city,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(b.a,null,"Service PinCode"),i.a.createElement(f.a,{required:!0,type:"number",name:"service_pincode",placeholder:"Service PinCode",value:this.state.service_pincode,onChange:this.changeHandler}))),i.a.createElement(u.a,null,i.a.createElement("h5",null," Document Details")),i.a.createElement(u.a,{className:"mb-2 mt-2"},i.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(b.a,null,"Vendor Image"),i.a.createElement(N.a,{required:!0,type:"file",onChange:this.onChangeHandler1})),i.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(b.a,null,"Aadhar Number"),i.a.createElement(f.a,{required:!0,type:"number",name:"adhar_no",placeholder:"Aadhar Number",value:this.state.adhar_no,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(b.a,null,"Aadhar Front Image"),i.a.createElement(N.a,{required:!0,type:"file",onChange:this.onChangeHandler2})),i.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(b.a,null,"Aadhar Back Image"),i.a.createElement(N.a,{required:!0,type:"file",onChange:this.onChangeHandler3})),i.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(b.a,null,"PAN Card Number"),i.a.createElement(f.a,{required:!0,type:"text",name:"pancard_no",placeholder:"Pan Number",value:this.state.pancard_no,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(b.a,null,"PAN Card Front Image"),i.a.createElement(N.a,{required:!0,type:"file",onChange:this.onChangeHandler4})),i.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(b.a,null,"PAN Card Back Image"),i.a.createElement(N.a,{required:!0,type:"file",onChange:this.onChangeHandler5})),i.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(b.a,null,"Account Number"),i.a.createElement(f.a,{required:!0,type:"text",name:"account_no",placeholder:"Account Number",value:this.state.account_no,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(b.a,null,"Account Holder Name"),i.a.createElement(f.a,{required:!0,type:"text",name:"cus_name",placeholder:"Account Holder Name",value:this.state.cus_name,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(b.a,null,"Branch Name"),i.a.createElement(f.a,{required:!0,type:"text",name:"branch",placeholder:"Branch Name",value:this.state.branch,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(b.a,null,"IFSC Code"),i.a.createElement(f.a,{required:!0,type:"text",name:"ifsc_code",placeholder:"IFSC Code",value:this.state.ifsc_code,onChange:this.changeHandler})),i.a.createElement(h.a,{lg:"6",md:"6",className:"mb-1"},i.a.createElement(b.a,null,"Cancelled Cheque Image"),i.a.createElement(N.a,{required:!0,type:"file",onChange:this.onChangeHandler6}))),i.a.createElement(u.a,{style:{float:"center"}},i.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1 "},"Submit"))))))}}]),t}(o.Component);a.default=H},928:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t(125);function l(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var a=0,t=function(){};return{s:t,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,r,c=!0,s=!1;return{s:function(){l=e[Symbol.iterator]()},n:function(){var e=l.next();return c=e.done,e},e:function(e){s=!0,r=e},f:function(){try{c||null==l.return||l.return()}finally{if(s)throw r}}}}}}]);
//# sourceMappingURL=356.15230a96.chunk.js.map