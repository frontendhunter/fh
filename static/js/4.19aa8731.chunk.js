(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{237:function(e,t,s){e.exports={mainTitle:"FormsControls_mainTitle__3OpOl",formWrapper:"FormsControls_formWrapper__2DbfW",rememberMe__container:"FormsControls_rememberMe__container__2VP2U",formControl:"FormsControls_formControl__1qQTS",error:"FormsControls_error__pqwJL",formSummaryError:"FormsControls_formSummaryError__3oqae",imageBlock:"FormsControls_imageBlock__1RcLn",allFormWrapper:"FormsControls_allFormWrapper__2PcSP"}},238:function(e,t,s){"use strict";s.d(t,"b",(function(){return j})),s.d(t,"a",(function(){return u}));var r=s(3),a=s(67),n=(s(1),s(237)),i=s.n(n),o=s(0),c=["input","meta","Formtype"],l=function(e){var t=e.input,s=e.meta,n=s.touched,l=s.error,j=e.Formtype,u=Object(a.a)(e,c),d=n&&l;return Object(o.jsxs)("div",{className:i.a.formControl+" "+(d?i.a.error:""),children:[Object(o.jsx)("div",{children:Object(o.jsx)(j,Object(r.a)(Object(r.a)({},t),u))}),Object(o.jsx)("div",{children:d&&Object(o.jsx)("span",{children:l})})]})},j=function(e){return Object(o.jsx)(l,Object(r.a)(Object(r.a)({},e),{},{Formtype:"textarea"}))},u=function(e){return Object(o.jsx)(l,Object(r.a)(Object(r.a)({},e),{},{Formtype:"input"}))}},239:function(e,t,s){"use strict";s.d(t,"b",(function(){return r})),s.d(t,"a",(function(){return a}));var r=function(e){if(!e)return e?void 0:"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Overflow Field max length: ".concat(e)}}},259:function(e,t,s){},260:function(e,t,s){e.exports={hiden:"ProfileInfo_hiden__21E4c",accept__btn:"ProfileInfo_accept__btn__2TMtR",formSummaryError:"ProfileInfo_formSummaryError__3-AVQ",fields:"ProfileInfo_fields__3vtob",links__md:"ProfileInfo_links__md__3fI41",profileInfo:"ProfileInfo_profileInfo__2MvMn",subHeaders:"ProfileInfo_subHeaders__11n-k",statusWrapper:"ProfileInfo_statusWrapper__1BDOQ",profilePhoto:"ProfileInfo_profilePhoto__1IUKO",profileData:"ProfileInfo_profileData__3sDpn",discriptionsWrap:"ProfileInfo_discriptionsWrap__9KldL",profileData__changes:"ProfileInfo_profileData__changes__3X23m"}},304:function(e,t,s){"use strict";s.r(t);var r=s(3),a=s(30),n=s(31),i=s(35),o=s(33),c=s(1),l=s.n(c),j=s(259),u=s.n(j),d=s(21),b=s(72),f=s(260),p=s.n(f),h=s(32),m=s(83),O=s(0),_=function(e){var t=Object(c.useState)(!1),s=Object(b.a)(t,2),r=s[0],a=s[1],n=Object(c.useState)(e.status),i=Object(b.a)(n,2),o=i[0],l=i[1];Object(c.useEffect)((function(){l(e.status)}),[e.status]);var j=function(e){l(e.currentTarget.value)},u=function(){a(!1),e.updateUserStatus(o)};return Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{children:"\u0421\u0442\u0430\u0442\u0443\u0441: "}),Object(O.jsx)("b",{children:e.isOwner?r?r?Object(O.jsx)("input",{onChange:j,onBlur:u,value:o,autoFocus:!0}):void 0:Object(O.jsxs)("span",{onDoubleClick:function(){return a(!0)},children:["  ",o||"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441"," "]}):Object(O.jsxs)("span",{children:["  ",o||"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441"," "]})})]})},x=s(239),v=s(238),P=s(117),g=s(118),N=Object(x.a)(20),k=Object(x.a)(100),I=Object(x.a)(300),S=Object(x.a)(1e3),F=Object(g.a)({form:"editProfile"})((function(e){var t=e.profile,s=e.handleSubmit,r=e.error,a=t.contacts;return Object(O.jsxs)("form",{onSubmit:s,className:p.a.profileData,children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{children:"\u0418\u043c\u044f: "}),Object(O.jsx)(P.a,{className:p.a.fields,validate:[x.b,N],placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",name:"fullName",component:v.a})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{children:"\u041e\u0431\u043e \u043c\u043d\u0435:"}),Object(O.jsx)(P.a,{className:p.a.fields,validate:[x.b,I],placeholder:"\u041e\u0431\u043e \u043c\u043d\u0435...",name:"aboutMe",component:v.b})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{children:"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443:"}),Object(O.jsx)(P.a,{validate:[],type:"checkBox",name:"lookingForAJob",component:v.a})]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"\u041d\u0430\u0432\u044b\u043a\u0438: "}),Object(O.jsx)(P.a,{className:p.a.fields,validate:[x.b,S],placeholder:"\u041c\u043e\u0438 \u043d\u0430\u0432\u044b\u043a\u0438...",name:"lookingForAJobDescription",component:v.b})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b:"}),Object(O.jsx)("div",{className:p.a.profileLinks,children:Object.keys(a).map((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsxs)("span",{className:p.a.labelInput,children:[e,":"]})," ",Object(O.jsx)(P.a,{className:p.a.fields,validate:[k],placeholder:e,name:"contacts."+e,component:v.a})]},e)}))})]}),Object(O.jsxs)("div",{children:[r&&Object(O.jsx)("div",{className:p.a.formSummaryError,children:r}),Object(O.jsx)("button",{className:p.a.accept__btn,onClick:s,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})})),y=function(e){var t=e.profile,s=e.isOwner,r=e.goToEditMode,a=t.contacts;return Object(O.jsxs)("div",{className:p.a.profileData,children:[Object(O.jsxs)("div",{className:p.a.discriptionsWrap,children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{className:p.a.subHeaders,children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:"})," ",t.aboutMe]}),s&&Object(O.jsx)("button",{className:p.a.links__md+" "+p.a.profileData__changes,onClick:r,children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{className:p.a.subHeaders,children:"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443:"})," ",t.lookingForAJob?"\u0414\u0430!":"\u041d\u0435\u0442"]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{className:p.a.subHeaders,children:"\u041a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438: "}),t.lookingForAJobDescription]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{className:p.a.subHeaders,children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b:"}),Object(O.jsx)("div",{className:p.a.profileLinks,children:Object.keys(a).map((function(e){return Object(O.jsxs)("div",{children:[e,": ",Object(O.jsx)("a",{className:p.a.links__md,target:"_blank",href:a[e],children:a[e]})]},e)}))})]})]})},C=function(e){var t=e.profile,s=e.status,r=e.updateUserStatus,a=e.isOwner,n=e.savePhoto,i=e.saveProfile,o=Object(c.useState)(!1),l=Object(b.a)(o,2),j=l[0],u=l[1];if(!t)return Object(O.jsx)(h.a,{});t.contacts;return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:p.a.profileInfo,children:[Object(O.jsxs)("h3",{className:p.a.subHeaders+" "+p.a.nameBlock,children:[" \u0418\u043c\u044f: ",Object(O.jsx)("b",{children:t.fullName})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{className:p.a.profilePhoto,src:t.photos.large?t.photos.large:m.a}),Object(O.jsx)("input",{className:p.a.hiden,name:"file",id:"input__file",onChange:function(e){var t;(null===(t=e.target.files)||void 0===t?void 0:t.length)&&n(e.target.files[0])},type:"file"}),Object(O.jsx)("div",{children:a&&Object(O.jsx)("label",{htmlFor:"input__file",className:p.a.links__md,children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u043e\u0442\u043e "})})]}),Object(O.jsx)("h3",{className:p.a.subHeaders,children:Object(O.jsx)(_,{isOwner:a,status:s,updateUserStatus:r})}),Object(O.jsx)("hr",{}),j?Object(O.jsx)(F,{initialValues:t,profile:t,onSubmit:function(e){i(e).then((function(){u(!1)}))}}):Object(O.jsx)(y,{goToEditMode:function(){u(!0)},profile:t,isOwner:a})]})})},D=function(e){return Object(O.jsx)("main",{className:u.a.main,children:Object(O.jsx)(C,{isOwner:e.isOwner,savePhoto:e.savePhoto,profile:e.profile,status:e.status,updateUserStatus:e.updateUserStatus,saveProfile:e.saveProfile})})},U=s(54),w=s(9),M=s(22),W=function(e){Object(i.a)(s,e);var t=Object(o.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"refreshProfile",value:function(){var e=+this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(O.jsx)("main",{className:u.a.main,children:Object(O.jsx)(D,Object(r.a)(Object(r.a)({},this.props),{},{isOwner:!this.props.match.params.userId,savePhoto:this.props.savePhoto,profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus}))})}}]),s}(l.a.Component);t.default=Object(M.d)(Object(d.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getProfile:U.c,getUserStatus:U.d,updateUserStatus:U.g,savePhoto:U.e,saveProfile:U.f}),w.g)(W)}}]);
//# sourceMappingURL=4.19aa8731.chunk.js.map