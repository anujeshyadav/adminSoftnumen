(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[376],{1440:function(e,t,a){},3121:function(e,t,a){"use strict";a.r(t);var n=a(14),r=a(15),l=a(16),o=a(17),s=a(1),i=a.n(s),c=a(845),m=a(846),u=a(108),p=a(852),h=a(853),y=a(854),d=a(855),b=a(957),x=a.n(b),E=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={options:{chart:{id:"lineChart"},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]},stroke:{curve:"straight"},dataLabels:{enabled:!1},title:{text:"Product Trends by Month",align:"left"},colors:e.props.themeColors,grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}}},series:[{name:"line-series",data:[10,41,35,51,49,62,69,91,148]}]},e}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(p.a,null,i.a.createElement(h.a,null,i.a.createElement(y.a,null,"Line Chart")),i.a.createElement(d.a,null,i.a.createElement(x.a,{options:this.state.options,series:this.state.series,type:"line",height:350})))}}]),a}(i.a.Component),f=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={options:{chart:{id:"areaChart"},xaxis:{type:"datetime",categories:["2020-09-18T00:00:00","2020-09-18T01:00:00","2020-09-18T02:00:00","2020-09-18T03:00:00","2020-09-18T04:00:00","2020-09-18T05:00:00","2020-09-18T06:00:00"]},stroke:{curve:"smooth"},dataLabels:{enabled:!1},title:{text:"Product Trends by Time",align:"left"},colors:e.props.themeColors,grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},legend:{offsetY:-10},tooltip:{x:{format:"dd/MM/yy HH:mm"}}},series:[{name:"series1",data:[31,40,28,51,42,109,100]},{name:"series2",data:[11,32,45,32,34,52,41]}]},e}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(p.a,null,i.a.createElement(h.a,null,i.a.createElement(y.a,null,"Area Chart")),i.a.createElement(d.a,null,i.a.createElement(x.a,{options:this.state.options,series:this.state.series,type:"area",height:350})))}}]),a}(i.a.Component),w=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={options:{colors:e.props.themeColors,plotOptions:{bar:{horizontal:!1,endingShape:"rounded",columnWidth:"55%"}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},legend:{offsetY:-10},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},yaxis:{title:{text:"$ (thousands)"}},fill:{opacity:1},tooltip:{y:{formatter:function(e){return"$ "+e+" thousands"}}}},series:[{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]},{name:"Revenue",data:[76,85,101,98,87,105,91,114,94]},{name:"Free Cash Flow",data:[35,41,36,26,45,48,52,53,41]}]},e}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(p.a,null,i.a.createElement(h.a,null,i.a.createElement(y.a,null,"Column Chart")),i.a.createElement(d.a,null,i.a.createElement(x.a,{options:this.state.options,series:this.state.series,type:"bar",height:350})))}}]),a}(i.a.Component),v=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={options:{colors:e.props.themeColors,plotOptions:{bar:{horizontal:!0}},dataLabels:{enabled:!1},xaxis:{categories:["South Korea","Canada","United Kingdom","Netherlands","Italy","France","Japan","United States","China","Germany"],tickAmount:5}},series:[{data:[400,430,448,470,540,580,690,1100,1200,1380]}]},e}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(p.a,null,i.a.createElement(h.a,null,i.a.createElement(y.a,null,"Bar Chart")),i.a.createElement(d.a,null,i.a.createElement(x.a,{options:this.state.options,series:this.state.series,type:"bar",height:350})))}}]),a}(i.a.Component),C=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={options:{chart:{stacked:!1},colors:e.props.themeColors,stroke:{width:[0,2,5],curve:"smooth"},plotOptions:{bar:{columnWidth:"50%"}},fill:{opacity:[.85,.25,1],gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.85,opacityTo:.55,stops:[0,100,100,100]}},labels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],markers:{size:0},legend:{offsetY:-10},xaxis:{type:"datetime"},yaxis:{min:0,tickAmount:5,title:{text:"Points"}},tooltip:{shared:!0,intersect:!1,y:{formatter:function(e){return"undefined"!==typeof e?e.toFixed(0)+" views":e}}}},series:[{name:"TEAM A",type:"column",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"TEAM B",type:"area",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"TEAM C",type:"line",data:[30,25,36,30,45,35,64,52,59,36,39]}]},e}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(p.a,null,i.a.createElement(h.a,null,i.a.createElement(y.a,null,"Mixed Chart")),i.a.createElement(d.a,null,i.a.createElement(x.a,{options:this.state.options,series:this.state.series,type:"line",height:350})))}}]),a}(i.a.Component),g=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={options:{colors:e.props.themeColors,xaxis:{type:"datetime"},yaxis:{tickAmount:5,tooltip:{enabled:!0}}},series:[{data:[{x:new Date(15387786e5),y:[6629.81,6650.5,6623.04,6633.33]},{x:new Date(15387804e5),y:[6632.01,6643.59,6620,6630.11]},{x:new Date(15387822e5),y:[6630.71,6648.95,6623.34,6635.65]},{x:new Date(1538784e6),y:[6635.65,6651,6629.67,6638.24]},{x:new Date(15387858e5),y:[6638.24,6640,6620,6624.47]},{x:new Date(15387876e5),y:[6624.53,6636.03,6621.68,6624.31]},{x:new Date(15387894e5),y:[6624.61,6632.2,6617,6626.02]},{x:new Date(15387912e5),y:[6627,6627.62,6584.22,6603.02]},{x:new Date(1538793e6),y:[6605,6608.03,6598.95,6604.01]},{x:new Date(15387948e5),y:[6604.5,6614.4,6602.26,6608.02]},{x:new Date(15387966e5),y:[6608.02,6610.68,6601.99,6608.91]},{x:new Date(15387984e5),y:[6608.91,6618.99,6608.01,6612]},{x:new Date(15388002e5),y:[6612,6615.13,6605.09,6612]},{x:new Date(1538802e6),y:[6612,6624.12,6608.43,6622.95]},{x:new Date(15388038e5),y:[6623.91,6623.91,6615,6615.67]},{x:new Date(15388056e5),y:[6618.69,6618.74,6610,6610.4]},{x:new Date(15388074e5),y:[6611,6622.78,6610.4,6614.9]},{x:new Date(15388092e5),y:[6614.9,6626.2,6613.33,6623.45]},{x:new Date(1538811e6),y:[6623.48,6627,6618.38,6620.35]},{x:new Date(15388128e5),y:[6619.43,6620.35,6610.05,6615.53]},{x:new Date(15388146e5),y:[6615.53,6617.93,6610,6615.19]},{x:new Date(15388164e5),y:[6615.19,6621.6,6608.2,6620]},{x:new Date(15388182e5),y:[6619.54,6625.17,6614.15,6620]},{x:new Date(153882e7),y:[6620.33,6634.15,6617.24,6624.61]},{x:new Date(15388218e5),y:[6625.95,6626,6611.66,6617.58]},{x:new Date(15388236e5),y:[6619,6625.97,6595.27,6598.86]},{x:new Date(15388254e5),y:[6598.86,6598.88,6570,6587.16]},{x:new Date(15388272e5),y:[6588.86,6600,6580,6593.4]},{x:new Date(1538829e6),y:[6593.99,6598.89,6585,6587.81]},{x:new Date(15388308e5),y:[6587.81,6592.73,6567.14,6578]},{x:new Date(15388326e5),y:[6578.35,6581.72,6567.39,6579]},{x:new Date(15388344e5),y:[6579.38,6580.92,6566.77,6575.96]},{x:new Date(15388362e5),y:[6575.96,6589,6571.77,6588.92]},{x:new Date(1538838e6),y:[6588.92,6594,6577.55,6589.22]},{x:new Date(15388398e5),y:[6589.3,6598.89,6589.1,6596.08]},{x:new Date(15388416e5),y:[6597.5,6600,6588.39,6596.25]},{x:new Date(15388434e5),y:[6598.03,6600,6588.73,6595.97]},{x:new Date(15388452e5),y:[6595.97,6602.01,6588.17,6602]},{x:new Date(1538847e6),y:[6602,6607,6596.51,6599.95]},{x:new Date(15388488e5),y:[6600.63,6601.21,6590.39,6591.02]},{x:new Date(15388506e5),y:[6591.02,6603.08,6591,6591]},{x:new Date(15388524e5),y:[6591,6601.32,6585,6592]},{x:new Date(15388542e5),y:[6593.13,6596.01,6590,6593.34]},{x:new Date(1538856e6),y:[6593.34,6604.76,6582.63,6593.86]},{x:new Date(15388578e5),y:[6593.86,6604.28,6586.57,6600.01]},{x:new Date(15388596e5),y:[6601.81,6603.21,6592.78,6596.25]},{x:new Date(15388614e5),y:[6596.25,6604.2,6590,6602.99]},{x:new Date(15388632e5),y:[6602.99,6606,6584.99,6587.81]},{x:new Date(1538865e6),y:[6587.81,6595,6583.27,6591.96]},{x:new Date(15388668e5),y:[6591.97,6596.07,6585,6588.39]},{x:new Date(15388686e5),y:[6587.6,6598.21,6587.6,6594.27]},{x:new Date(15388704e5),y:[6596.44,6601,6590,6596.55]},{x:new Date(15388722e5),y:[6598.91,6605,6596.61,6600.02]},{x:new Date(1538874e6),y:[6600.55,6605,6589.14,6593.01]},{x:new Date(15388758e5),y:[6593.15,6605,6592,6603.06]},{x:new Date(15388776e5),y:[6603.07,6604.5,6599.09,6603.89]},{x:new Date(15388794e5),y:[6604.44,6604.44,6600,6603.5]},{x:new Date(15388812e5),y:[6603.5,6603.99,6597.5,6603.86]},{x:new Date(1538883e6),y:[6603.85,6605,6600,6604.07]},{x:new Date(15388848e5),y:[6604.98,6606,6604.07,6606]}]}]},e}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(p.a,null,i.a.createElement(h.a,null,i.a.createElement(y.a,null,"Candlestick Chart")),i.a.createElement(d.a,null,i.a.createElement(x.a,{options:this.state.options,series:this.state.series,type:"candlestick",height:350})))}}]),a}(i.a.Component),D=function(e,t,a){for(var n=0,r=[];n<t;){var l=Math.floor(Math.random()*(a.max-a.min+1))+a.min,o=Math.floor(61*Math.random())+15;r.push([e,l,o]),e+=864e5,n++}return r},O=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={options:{colors:e.props.themeColors,dataLabels:{enabled:!1},legend:{offsetY:-10},fill:{type:"gradient"},xaxis:{tickAmount:12,type:"datetime",labels:{rotate:0}},yaxis:{max:70,tickAmount:5},theme:{palette:"palette2"}},series:[{name:"Product1",data:D(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Product2",data:D(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Product3",data:D(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Product4",data:D(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})}]},e}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(p.a,null,i.a.createElement(h.a,null,i.a.createElement(y.a,null,"3D Bubble Chart")),i.a.createElement(d.a,null,i.a.createElement(x.a,{options:this.state.options,series:this.state.series,type:"bubble",height:350})))}}]),a}(i.a.Component),j=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={options:{zoom:{enabled:!0,type:"xy"},colors:e.props.themeColors,legend:{offsetY:-10},xaxis:{tickAmount:10},yaxis:{tickAmount:7}},series:[{name:"SAMPLE A",data:[[16.4,5.4],[21.7,2],[25.4,3],[19,2],[10.9,1],[13.6,3.2],[10.9,7.4],[10.9,0],[10.9,8.2],[16.4,0],[16.4,1.8],[13.6,.3],[13.6,0],[29.9,0],[27.1,2.3],[16.4,0],[13.6,3.7],[10.9,5.2],[16.4,6.5],[10.9,0],[24.5,7.1],[10.9,0],[8.1,4.7],[19,0],[21.7,1.8],[27.1,0],[24.5,0],[27.1,0],[29.9,1.5],[27.1,.8],[22.1,2]]},{name:"SAMPLE B",data:[[6.4,13.4],[1.7,11],[5.4,8],[9,17],[1.9,4],[3.6,12.2],[1.9,14.4],[1.9,9],[1.9,13.2],[1.4,7],[6.4,8.8],[3.6,4.3],[1.6,10],[9.9,2],[7.1,15],[1.4,0],[3.6,13.7],[1.9,15.2],[6.4,16.5],[.9,10],[4.5,17.1],[10.9,10],[.1,14.7],[9,10],[12.7,11.8],[2.1,10],[2.5,10],[27.1,10],[2.9,11.5],[7.1,10.8],[2.1,12]]},{name:"SAMPLE C",data:[[21.7,3],[23.6,3.5],[24.6,3],[29.9,3],[21.7,20],[23,2],[10.9,3],[28,4],[27.1,.3],[16.4,4],[13.6,0],[19,5],[22.4,3],[24.5,3],[32.6,3],[27.1,4],[29.6,6],[31.6,8],[21.6,5],[20.9,4],[22.4,0],[32.6,10.3],[29.7,20.8],[24.5,.8],[21.4,0],[21.7,6.9],[28.6,7.7],[15.4,0],[18.1,0],[33.4,0],[16.4,0]]}]},e}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(p.a,null,i.a.createElement(h.a,null,i.a.createElement(y.a,null,"Scatter Chart")),i.a.createElement(d.a,null,i.a.createElement(x.a,{options:this.state.options,series:this.state.series,type:"scatter",height:350})))}}]),a}(i.a.Component),A=function(e,t){for(var a=0,n=[];a<e;){var r="w"+(a+1).toString(),l=Math.floor(Math.random()*(t.max-t.min+1))+t.min;n.push({x:r,y:l}),a++}return n},M=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={options:{dataLabels:{enabled:!1},colors:e.props.primary},series:[{name:"Metric1",data:A(18,{min:0,max:90})},{name:"Metric2",data:A(18,{min:0,max:90})},{name:"Metric3",data:A(18,{min:0,max:90})},{name:"Metric4",data:A(18,{min:0,max:90})},{name:"Metric5",data:A(18,{min:0,max:90})},{name:"Metric6",data:A(18,{min:0,max:90})},{name:"Metric7",data:A(18,{min:0,max:90})},{name:"Metric8",data:A(18,{min:0,max:90})},{name:"Metric9",data:A(18,{min:0,max:90})}]},e}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(p.a,null,i.a.createElement(h.a,null,i.a.createElement(y.a,null,"Heat Map Chart")),i.a.createElement(d.a,null,i.a.createElement(x.a,{options:this.state.options,series:this.state.series,type:"heatmap",height:350})))}}]),a}(i.a.Component),k=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={options:{colors:e.props.themeColors,labels:["Team A","Team B","Team C","Team D"],responsive:[{breakpoint:480,options:{chart:{width:350},legend:{position:"bottom"}}}]},series:[44,55,13,43]},e}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(p.a,null,i.a.createElement(h.a,null,i.a.createElement(y.a,null,"Pie Chart")),i.a.createElement(d.a,null,i.a.createElement(x.a,{options:this.state.options,series:this.state.series,type:"pie",height:350})))}}]),a}(i.a.Component),T=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={options:{colors:e.props.themeColors,legend:{itemMargin:{horizontal:2}},responsive:[{breakpoint:480,options:{chart:{width:350},legend:{position:"bottom"}}}]},series:[44,55,41,17]},e}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(p.a,null,i.a.createElement(h.a,null,i.a.createElement(y.a,null,"Donut Chart")),i.a.createElement(d.a,null,i.a.createElement(x.a,{options:this.state.options,series:this.state.series,type:"donut",height:350})))}}]),a}(i.a.Component),F=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={options:{colors:e.props.themeColors,plotOptions:{radialBar:{dataLabels:{name:{fontSize:"22px"},value:{fontSize:"16px"},total:{show:!0,label:"Total",formatter:function(e){return 249}}}}},labels:["Apples","Oranges","Bananas","Berries"]},series:[44,55,67,83]},e}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(p.a,null,i.a.createElement(h.a,null,i.a.createElement(y.a,null,"Radial Chart")),i.a.createElement(d.a,null,i.a.createElement(x.a,{options:this.state.options,series:this.state.series,type:"radialBar",height:350})))}}]),a}(i.a.Component),P=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={options:{colors:e.props.themeColors,labels:["January","February","March","April","May","June"],dataLabels:{style:{color:e.props.labelColor}}},series:[{name:"Series 1",data:[80,50,30,40,100,20]}]},e}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(p.a,null,i.a.createElement(h.a,null,i.a.createElement(y.a,null,"Radial Chart")),i.a.createElement(d.a,null,i.a.createElement(x.a,{options:this.state.options,series:this.state.series,type:"radar",height:350})))}}]),a}(i.a.Component),S=(a(1440),["#7367F0","#28C76F","#EA5455","#FF9F43","#00cfe8"]),L=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{breadCrumbTitle:"Apex Charts",breadCrumbParent:"Charts",breadCrumbActive:"Apex"}),i.a.createElement(c.a,null,i.a.createElement(m.a,{sm:"12"},i.a.createElement("p",null,"A React.js component for ApexCharts. Read full documnetation"," ",i.a.createElement("a",{href:"https://github.com/apexcharts/react-apexcharts",target:"_blank",rel:"noopener noreferrer"},"here"))),i.a.createElement(m.a,{lg:"6",md:"12"},i.a.createElement(E,{themeColors:S})),i.a.createElement(m.a,{lg:"6",md:"12"},i.a.createElement(f,{themeColors:S})),i.a.createElement(m.a,{lg:"6",md:"12"},i.a.createElement(w,{themeColors:S})),i.a.createElement(m.a,{lg:"6",md:"12"},i.a.createElement(v,{themeColors:S})),i.a.createElement(m.a,{sm:"12"},i.a.createElement(C,{themeColors:S})),i.a.createElement(m.a,{sm:"12"},i.a.createElement(g,{themeColors:S})),i.a.createElement(m.a,{lg:"6",sm:"12"},i.a.createElement(O,{themeColors:S})),i.a.createElement(m.a,{lg:"6",sm:"12"},i.a.createElement(j,{themeColors:S})),i.a.createElement(m.a,{sm:"12"},i.a.createElement(M,{primary:["#7367F0"]})),i.a.createElement(m.a,{lg:"6",sm:"12"},i.a.createElement(k,{themeColors:S})),i.a.createElement(m.a,{lg:"6",sm:"12"},i.a.createElement(T,{themeColors:S})),i.a.createElement(m.a,{lg:"6",sm:"12"},i.a.createElement(F,{themeColors:S})),i.a.createElement(m.a,{lg:"6",sm:"12"},i.a.createElement(P,{themeColors:S,labelColor:"#dae1e7"}))))}}]),a}(i.a.Component);t.default=L}}]);
//# sourceMappingURL=376.f405be53.chunk.js.map