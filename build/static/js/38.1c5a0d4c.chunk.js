(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[38],{639:function(e,t,a){"use strict";var r=a(43),o=a(162),s=(a(1),a(638)),n=a(640),c=a(21),l=["borderColor","backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"],i=function(e){var t=e.borderColor,a=e.backgroundColor,i=e.pointHoverBackgroundColor,d=e.dataPoints,b=e.label,j=e.pointed,p=Object(o.a)(e,l),x=i||("transparent"!==a?a:t),h=[{data:d,borderColor:Object(s.getColor)(t),backgroundColor:Object(s.getColor)(a),pointBackgroundColor:Object(s.getColor)(x),pointHoverBackgroundColor:Object(s.getColor)(x),label:b}],g={scales:{xAxes:[{offset:!0,gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:Math.min.apply(Math,d)-5,max:Math.max.apply(Math,d)+5}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}},m={scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}}},u=function(){var e=j?g:m;return Object.assign({},e,{maintainAspectRatio:!1,legend:{display:!1}})}(),O=Object(s.deepObjectsMerge)(h,p.datasets||{}),C=Object(s.deepObjectsMerge)(u,p.options||{});return Object(c.jsx)(n.c,Object(r.a)(Object(r.a)({},p),{},{datasets:O,options:C,labels:b}))};i.defaultProps={borderColor:"rgba(255,255,255,.55)",backgroundColor:"transparent",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"},t.a=i},645:function(e,t,a){"use strict";var r=a(43),o=a(162),s=(a(1),a(638)),n=a(640),c=a(21),l=["backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"],i=function(e){var t=e.backgroundColor,a=e.pointHoverBackgroundColor,i=e.dataPoints,d=e.label,b=(e.pointed,Object(o.a)(e,l)),j=[{data:i,backgroundColor:Object(s.getColor)(t),pointHoverBackgroundColor:Object(s.getColor)(a),label:d,barPercentage:.5,categoryPercentage:1}],p={maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]}};return Object(c.jsx)(n.a,Object(r.a)(Object(r.a)({},b),{},{datasets:j,options:p,labels:d}))};i.defaultProps={backgroundColor:"rgba(0,0,0,.2)",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"},t.a=i},666:function(e,t,a){"use strict";a.r(t);a(1);var r=a(630),o=a(636),s=a(639),n=a(645),c=a(21);t.default=function(){return Object(c.jsxs)(r.wb,{children:[Object(c.jsx)(r.u,{sm:"6",lg:"3",children:Object(c.jsx)(r.Ub,{color:"gradient-primary",header:"9.823",text:"Alunos",footerSlot:Object(c.jsx)(s.a,{pointed:!0,className:"c-chart-wrapper mt-3 mx-3",style:{height:"70px"},dataPoints:[65,59,84,84,51,55,40],pointHoverBackgroundColor:"primary",label:"Members",labels:"months"}),children:Object(c.jsxs)(r.z,{children:[Object(c.jsx)(r.E,{color:"transparent",children:Object(c.jsx)(o.a,{name:"cil-settings"})}),Object(c.jsxs)(r.D,{className:"pt-0",placement:"bottom-end",children:[Object(c.jsx)(r.C,{children:"Acessar Relat\xf3rio"}),Object(c.jsx)(r.C,{children:"Gerenciar dados"})]})]})})}),Object(c.jsx)(r.u,{sm:"6",lg:"3",children:Object(c.jsx)(r.Ub,{color:"gradient-info",header:"9.823",text:"Cursos",footerSlot:Object(c.jsx)(s.a,{pointed:!0,className:"mt-3 mx-3",style:{height:"70px"},dataPoints:[1,18,9,17,34,22,11],pointHoverBackgroundColor:"info",options:{elements:{line:{tension:1e-5}}},label:"Members",labels:"months"}),children:Object(c.jsxs)(r.z,{children:[Object(c.jsx)(r.E,{caret:!1,color:"transparent",children:Object(c.jsx)(o.a,{name:"cil-location-pin"})}),Object(c.jsxs)(r.D,{className:"pt-0",placement:"bottom-end",children:[Object(c.jsx)(r.C,{children:"Acessar Relat\xf3rio"}),Object(c.jsx)(r.C,{children:"Gerenciar dados"})]})]})})}),Object(c.jsx)(r.u,{sm:"6",lg:"3",children:Object(c.jsx)(r.Ub,{color:"gradient-warning",header:"9.823",text:"Matr\xedculas",footerSlot:Object(c.jsx)(s.a,{className:"mt-3",style:{height:"70px"},backgroundColor:"rgba(255,255,255,.2)",dataPoints:[78,81,80,45,34,12,40],options:{elements:{line:{borderWidth:2.5}}},pointHoverBackgroundColor:"warning",label:"Members",labels:"months"}),children:Object(c.jsxs)(r.z,{children:[Object(c.jsx)(r.E,{color:"transparent",children:Object(c.jsx)(o.a,{name:"cil-settings"})}),Object(c.jsxs)(r.D,{className:"pt-0",placement:"bottom-end",children:[Object(c.jsx)(r.C,{children:"Acessar Relat\xf3rio"}),Object(c.jsx)(r.C,{children:"Gerenciar dados"})]})]})})}),Object(c.jsx)(r.u,{sm:"6",lg:"3",children:Object(c.jsx)(r.Ub,{color:"gradient-danger",header:"9.823",text:"Turmas",footerSlot:Object(c.jsx)(n.a,{className:"mt-3 mx-3",style:{height:"70px"},backgroundColor:"rgb(250, 152, 152)",label:"Members",labels:"months"}),children:Object(c.jsxs)(r.z,{children:[Object(c.jsx)(r.E,{caret:!0,className:"text-white",color:"transparent",children:Object(c.jsx)(o.a,{name:"cil-settings"})}),Object(c.jsxs)(r.D,{className:"pt-0",placement:"bottom-end",children:[Object(c.jsx)(r.C,{children:"Acessar Relat\xf3rio"}),Object(c.jsx)(r.C,{children:"Gerenciar dados"})]})]})})})]})}}}]);
//# sourceMappingURL=38.1c5a0d4c.chunk.js.map