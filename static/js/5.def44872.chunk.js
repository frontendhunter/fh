(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{237:function(e,r,t){"use strict";t.d(r,"b",(function(){return l})),t.d(r,"a",(function(){return d}));var s=t(3),a=t(248),n=(t(1),t(238)),i=t.n(n),o=t(0),c=["input","meta","Formtype"],m=function(e){var r=e.input,t=e.meta,n=t.touched,m=t.error,l=e.Formtype,d=Object(a.a)(e,c),j=n&&m;return Object(o.jsxs)("div",{className:i.a.formControl+" "+(j?i.a.error:""),children:[Object(o.jsx)("div",{children:Object(o.jsx)(l,Object(s.a)(Object(s.a)({},r),d))}),Object(o.jsx)("div",{children:j&&Object(o.jsx)("span",{children:m})})]})},l=function(e){return Object(o.jsx)(m,Object(s.a)(Object(s.a)({},e),{},{Formtype:"textarea"}))},d=function(e){return Object(o.jsx)(m,Object(s.a)(Object(s.a)({},e),{},{Formtype:"input"}))}},238:function(e,r,t){e.exports={mainTitle:"FormsControls_mainTitle__3OpOl",formWrapper:"FormsControls_formWrapper__2DbfW",rememberMe__container:"FormsControls_rememberMe__container__2VP2U",formControl:"FormsControls_formControl__1qQTS",error:"FormsControls_error__pqwJL",formSummaryError:"FormsControls_formSummaryError__3oqae",imageBlock:"FormsControls_imageBlock__1RcLn",allFormWrapper:"FormsControls_allFormWrapper__2PcSP"}},239:function(e,r,t){"use strict";t.d(r,"b",(function(){return s})),t.d(r,"a",(function(){return a}));var s=function(e){if(!e)return e?void 0:"Field is required"},a=function(e){return function(r){if(r&&r.length>e)return"Overflow Field max length: ".concat(e)}}},242:function(e,r,t){e.exports={dialogs__wrap:"Dialogs_dialogs__wrap__2ZZar",dialog__item:"Dialogs_dialog__item__1lTE1",active:"Dialogs_active__Mlupo",messages__item:"Dialogs_messages__item__3ZPA6"}},308:function(e,r,t){"use strict";t.r(r);var s=t(84),a=(t(1),t(242)),n=t.n(a),i=t(10),o=t(0),c=function(e){return Object(o.jsx)("div",{children:Object(o.jsxs)(i.b,{to:"/dialogs/"+e.id,className:n.a.dialog__item,activeClassName:n.a.active,children:[e.name,Object(o.jsx)("img",{src:e.img})]})})},m=function(e){return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:n.a.messages__item,children:[Object(o.jsx)("p",{children:Object(o.jsx)("b",{children:e.name})}),Object(o.jsx)("img",{src:e.img}),"  ",e.message]})})},l=t(117),d=t(118),j=t(237),u=t(239),_=Object(u.a)(50),b=Object(d.a)({form:"Message"})((function(e){return Object(o.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(o.jsx)(l.a,{validate:[u.b,_],component:j.b,name:"newMessageBody",placeholder:"Enter your message"}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{children:"add message"})})]})})),g=function(e){var r=e.dialogsPage.dialogs.map((function(e){return Object(o.jsx)(c,{id:e.id,name:e.name,img:e.img},e.id)})),t=e.dialogsPage.messages.map((function(e){return Object(o.jsx)(m,{class:e.class,message:e.message,name:e.name,img:e.img},e.id)}));return Object(o.jsxs)("div",{className:n.a.dialogs__wrap,children:[Object(o.jsx)("div",{className:n.a.dialogs,children:r}),Object(o.jsxs)("div",{className:n.a.messages,children:[t,Object(o.jsx)(b,{onSubmit:function(r){e.addMessage(r.newMessageBody)}})]})]})},O=t(21),f=t(82),p=t(22);r.default=Object(p.d)(Object(O.b)((function(e){return{dialogsPage:e.dialogsPage,newMessageText:e.dialogsPage.newMessageText}}),(function(e){return{addMessage:function(r){e(Object(s.a)(r))}}})),f.a)(g)}}]);
//# sourceMappingURL=5.def44872.chunk.js.map