webpackJsonp([0],{193:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),o=t.n(a),i=t(10),r=t(5),c=t(199),l=t(202),u=function(e){var n=function(){e.history.goBack()},t=function(){e.history.replace("/checkout/contact-data")},a=o.a.createElement(i.c,{to:"/"});if(e.ings){var r=e.purchased?o.a.createElement(i.c,{to:"/"}):null;a=o.a.createElement("div",null,r,o.a.createElement(c.a,{ingredients:e.ings,checkoutCancelled:n,checkoutContinued:t}),o.a.createElement(i.d,{path:e.match.path+"/contact-data",component:l.a}))}return a},s=function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}};n.default=Object(r.b)(s)(u)},196:function(e,n,t){"use strict";var a=t(0),o=t.n(a),i=t(197),r=t.n(i),c=function(e){var n=null,t=[r.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&t.push(r.a.Invalid),e.elementType){case"input":n=o.a.createElement("input",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":n=o.a.createElement("textarea",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":n=o.a.createElement("select",{className:t.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return o.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:n=o.a.createElement("input",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return o.a.createElement("div",{className:r.a.Input},o.a.createElement("label",{className:r.a.Label},e.label),n)};n.a=c},197:function(e,n,t){var a=t(198);"string"===typeof a&&(a=[[e.i,a,""]]);var o={};o.transform=void 0;t(192)(a,o);a.locals&&(e.exports=a.locals)},198:function(e,n,t){n=e.exports=t(191)(!0),n.push([e.i,".Input__Input__s67N0{width:100%;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__Label___n-1m{font-weight:700;display:block;margin-bottom:8px}.Input__InputElement__2-aFx{outline:none;border:1px solid #ccc;background-color:#fff;font:inherit;padding:6px 10px;display:block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__InputElement__2-aFx:focus{outline:none;background-color:#ccc}.Input__Invalid__1sl1p{border:1px solid red;background-color:#fda49a}","",{version:3,sources:["/home/slawa/web/React_burger/src/components/UI/Input/Input.css"],names:[],mappings:"AAAA,qBACI,WAAY,AACZ,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAClC,AAED,qBACI,gBAAkB,AAClB,cAAe,AACf,iBAAmB,CACtB,AAED,4BACI,aAAc,AACd,sBAAuB,AACvB,sBAAwB,AACxB,aAAc,AACd,iBAAkB,AAClB,cAAe,AACf,WAAY,AACZ,8BAA+B,AACvB,qBAAuB,CAClC,AAED,kCACI,aAAc,AACd,qBAAuB,CAC1B,AAED,uBACI,qBAAsB,AACtB,wBAA0B,CAC7B",file:"Input.css",sourcesContent:[".Input {\n    width: 100%;\n    padding: 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n.Label {\n    font-weight: bold;\n    display: block;\n    margin-bottom: 8px;\n}\n\n.InputElement {\n    outline: none;\n    border: 1px solid #ccc;\n    background-color: white;\n    font: inherit;\n    padding: 6px 10px;\n    display: block;\n    width: 100%;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n.InputElement:focus {\n    outline: none;\n    background-color: #ccc;\n}\n\n.Invalid {\n    border: 1px solid red;\n    background-color: #FDA49A;\n}"],sourceRoot:""}]),n.locals={Input:"Input__Input__s67N0",Label:"Input__Label___n-1m",InputElement:"Input__InputElement__2-aFx",Invalid:"Input__Invalid__1sl1p"}},199:function(e,n,t){"use strict";var a=t(0),o=t.n(a),i=t(60),r=t(57),c=t(200),l=t.n(c),u=function(e){return o.a.createElement("div",{className:l.a.CheckoutSummary},o.a.createElement("h1",null,"We hope it tastes well!"),o.a.createElement("div",{style:{width:"100%",margin:"auto"}},o.a.createElement(i.a,{ingredients:e.ingredients})),o.a.createElement(r.a,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCEL"),o.a.createElement(r.a,{btnType:"Success",clicked:e.checkoutContinued},"CONTINUE"))};n.a=u},200:function(e,n,t){var a=t(201);"string"===typeof a&&(a=[[e.i,a,""]]);var o={};o.transform=void 0;t(192)(a,o);a.locals&&(e.exports=a.locals)},201:function(e,n,t){n=e.exports=t(191)(!0),n.push([e.i,".CheckoutSummary__CheckoutSummary__1xBm4{text-align:center;width:80%;margin:auto}@media (min-width:600px){.CheckoutSummary__CheckoutSummary__1xBm4{width:500px}}","",{version:3,sources:["/home/slawa/web/React_burger/src/components/Order/CheckoutSummary/CheckoutSummary.css"],names:[],mappings:"AAAA,yCACI,kBAAmB,AACnB,UAAW,AACX,WAAa,CAChB,AAED,yBACI,yCACI,WAAa,CAChB,CACJ",file:"CheckoutSummary.css",sourcesContent:[".CheckoutSummary {\n    text-align: center;\n    width: 80%;\n    margin: auto;\n}\n\n@media (min-width: 600px) {\n    .CheckoutSummary {\n        width: 500px;\n    }\n}"],sourceRoot:""}]),n.locals={CheckoutSummary:"CheckoutSummary__CheckoutSummary__1xBm4"}},202:function(e,n,t){"use strict";var a=t(0),o=t.n(a),i=t(5),r=t(57),c=t(58),l=t(203),u=t.n(l),s=t(12),d=t(196),A=t(59),p=t(13),m=function(){function e(e,n){var t=[],a=!0,o=!1,i=void 0;try{for(var r,c=e[Symbol.iterator]();!(a=(r=c.next()).done)&&(t.push(r.value),!n||t.length!==n);a=!0);}catch(e){o=!0,i=e}finally{try{!a&&c.return&&c.return()}finally{if(o)throw i}}return t}return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return e(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),C=function(e){var n=Object(a.useState)({name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP Code"},value:"",validation:{required:!0,minLength:5,maxLength:5,isNumeric:!0},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-Mail"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",validation:{},valid:!0}}),t=m(n,2),i=t[0],l=t[1],s=Object(a.useState)(!1),A=m(s,2),p=A[0],C=A[1],g=function(n){n.preventDefault();var t={};for(var a in i)t[a]=i[a].value;var o={ingredients:e.ings,price:e.price,orderData:t,userId:e.userId};e.onOrderBurger(o,e.token)},h=function(e,n){var t=!0;if(!n)return!0;if(n.required&&(t=""!==e.trim()&&t),n.minLength&&(t=e.length>=n.minLength&&t),n.maxLength&&(t=e.length<=n.maxLength&&t),n.isEmail){t=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&t}if(n.isNumeric){t=/^\d+$/.test(e)&&t}return t},b=function(e,n){var t=Object.assign({},i),a=Object.assign({},t[n]);a.value=e.target.value,a.valid=h(a.value,a.validation),a.touched=!0,t[n]=a;var o=!0;for(var r in t)o=t[r].valid&&o;l(t),C(o)},v=[];for(var f in i)v.push({id:f,config:i[f]});var x=o.a.createElement("form",{onSubmit:g},v.map(function(e){return o.a.createElement(d.a,{key:e.id,elementType:e.config.elementType,elementConfig:e.config.elementConfig,value:e.config.value,invalid:!e.config.valid,shouldValidate:e.config.validation,touched:e.config.touched,changed:function(n){return b(n,e.id)}})}),o.a.createElement(r.a,{btnType:"Success",disabled:!p},"ORDER"));return e.loading&&(x=o.a.createElement(c.a,null)),o.a.createElement("div",{className:u.a.ContactData},o.a.createElement("h4",null,"Enter your Contact Data"),x)},g=function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}},h=function(e){return{onOrderBurger:function(n,t){return e(p.f(n,t))}}};n.a=Object(i.b)(g,h)(Object(A.a)(C,s.a))},203:function(e,n,t){var a=t(204);"string"===typeof a&&(a=[[e.i,a,""]]);var o={};o.transform=void 0;t(192)(a,o);a.locals&&(e.exports=a.locals)},204:function(e,n,t){n=e.exports=t(191)(!0),n.push([e.i,".ContactData__ContactData__1J81r{margin:20px auto;width:80%;text-align:center;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;border:1px solid #eee;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box}@media (min-width:600px){.ContactData__ContactData__1J81r{width:500px}}","",{version:3,sources:["/home/slawa/web/React_burger/src/containers/Checkout/ContactData/ContactData.css"],names:[],mappings:"AAAA,iCACI,iBAAkB,AAClB,UAAW,AACX,kBAAmB,AACnB,kCAAmC,AAC3B,0BAA2B,AACnC,sBAAuB,AACvB,aAAc,AACd,8BAA+B,AACvB,qBAAuB,CAClC,AAED,yBACI,iCACI,WAAa,CAChB,CACJ",file:"ContactData.css",sourcesContent:[".ContactData {\n    margin: 20px auto;\n    width: 80%;\n    text-align: center;\n    -webkit-box-shadow: 0 2px 3px #ccc;\n            box-shadow: 0 2px 3px #ccc;\n    border: 1px solid #eee;\n    padding: 10px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n}\n\n@media (min-width: 600px) {\n    .ContactData {\n        width: 500px;\n    }\n}"],sourceRoot:""}]),n.locals={ContactData:"ContactData__ContactData__1J81r"}}});
//# sourceMappingURL=0.4f8104fa.chunk.js.map