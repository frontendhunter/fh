(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{237:function(e,t,s){"use strict";s.d(t,"b",(function(){return j})),s.d(t,"a",(function(){return u}));var r=s(3),a=s(248),n=(s(1),s(238)),i=s.n(n),o=s(0),c=["input","meta","Formtype"],l=function(e){var t=e.input,s=e.meta,n=s.touched,l=s.error,j=e.Formtype,u=Object(a.a)(e,c),d=n&&l;return Object(o.jsxs)("div",{className:i.a.formControl+" "+(d?i.a.error:""),children:[Object(o.jsx)("div",{children:Object(o.jsx)(j,Object(r.a)(Object(r.a)({},t),u))}),Object(o.jsx)("div",{children:d&&Object(o.jsx)("span",{children:l})})]})},j=function(e){return Object(o.jsx)(l,Object(r.a)(Object(r.a)({},e),{},{Formtype:"textarea"}))},u=function(e){return Object(o.jsx)(l,Object(r.a)(Object(r.a)({},e),{},{Formtype:"input"}))}},238:function(e,t,s){e.exports={mainTitle:"FormsControls_mainTitle__3OpOl",formWrapper:"FormsControls_formWrapper__2DbfW",rememberMe__container:"FormsControls_rememberMe__container__2VP2U",formControl:"FormsControls_formControl__1qQTS",error:"FormsControls_error__pqwJL",formSummaryError:"FormsControls_formSummaryError__3oqae",imageBlock:"FormsControls_imageBlock__1RcLn",allFormWrapper:"FormsControls_allFormWrapper__2PcSP"}},239:function(e,t,s){"use strict";s.d(t,"b",(function(){return r})),s.d(t,"a",(function(){return a}));var r=function(e){if(!e)return e?void 0:"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Overflow Field max length: ".concat(e)}}},247:function(e,t,s){e.exports={hiden:"ProfileInfo_hiden__21E4c",accept__btn:"ProfileInfo_accept__btn__2TMtR",formSummaryError:"ProfileInfo_formSummaryError__3-AVQ",fields:"ProfileInfo_fields__3vtob",links__md:"ProfileInfo_links__md__3fI41",profileInfo:"ProfileInfo_profileInfo__2MvMn",subHeaders:"ProfileInfo_subHeaders__11n-k",statusWrapper:"ProfileInfo_statusWrapper__1BDOQ",profilePhoto:"ProfileInfo_profilePhoto__1IUKO",profileData:"ProfileInfo_profileData__3sDpn",discriptionsWrap:"ProfileInfo_discriptionsWrap__9KldL",profileData__changes:"ProfileInfo_profileData__changes__3X23m"}},261:function(e,t,s){},304:function(e,t,s){e.exports={active:"MyPosts_active__3vSi_",item:"MyPosts_item__B5Ooa",MyPosts:"MyPosts_MyPosts__3VTBa"}},305:function(e,t,s){e.exports={active:"Post_active__3h0eq",item:"Post_item__XZZ5d"}},307:function(e,t,s){"use strict";s.r(t);var r=s(3),a=s(25),n=s(26),i=s(28),o=s(27),c=s(1),l=s.n(c),j=s(261),u=s.n(j),d=s(21),b=s(49),p=s(304),f=s.n(p),m=s(305),h=s.n(m),O=s(0),_=function(e){return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:h.a.item,children:[Object(O.jsx)("img",{src:"https://cs11.pikabu.ru/post_img/big/2020/04/15/7/15869461281221556.jpg"}),Object(O.jsxs)("b",{children:[e.name," "]}),e.message,Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{className:"like",children:"Like "}),e.likesCount]})]})})},x=s(117),v=s(118),P=s(239),g=s(237),k=Object(P.a)(30),N=Object(v.a)({form:"ProfileAddNewPostForm"})((function(e){return Object(O.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(O.jsx)(x.a,{validate:[P.b,k],name:"newPostText",component:g.b,placeholder:"write something"}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{children:"add post"})})]})})),y=function(e){var t=e.posts.map((function(e){return Object(O.jsx)(_,{name:e.name,message:e.message,likesCount:e.likesCount})}));return Object(O.jsxs)("div",{className:f.a.MyPosts,children:[Object(O.jsx)("h3",{children:" My posts:"}),Object(O.jsx)(N,{onSubmit:function(t){e.addPost(t.newPostText)}}),t]})},S=(Object(d.b)((function(e){return{posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(Object(b.a)(t))}}}))(y),s(73)),I=s(247),F=s.n(I),C=s(37),w=s(63),M=function(e){var t=Object(c.useState)(!1),s=Object(S.a)(t,2),r=s[0],a=s[1],n=Object(c.useState)(e.status),i=Object(S.a)(n,2),o=i[0],l=i[1];Object(c.useEffect)((function(){l(e.status)}),[e.status]);var j=function(e){l(e.currentTarget.value)},u=function(){a(!1),e.updateUserStatus(o)};return Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{children:"\u0421\u0442\u0430\u0442\u0443\u0441: "}),Object(O.jsx)("b",{children:e.isOwner?r?r?Object(O.jsx)("div",{children:Object(O.jsx)("input",{onChange:j,onBlur:u,value:o,autoFocus:!0})}):void 0:Object(O.jsxs)("span",{onDoubleClick:function(){return a(!0)},children:["  ",o||"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441"," "]}):Object(O.jsxs)("span",{children:["  ",o||"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441"," "]})})]})},D=Object(P.a)(20),U=Object(P.a)(100),T=Object(P.a)(300),W=Object(P.a)(1e3),E=Object(v.a)({form:"editProfile"})((function(e){var t=e.profile,s=e.handleSubmit,r=e.error,a=t.contacts;return Object(O.jsxs)("form",{onSubmit:s,className:F.a.profileData,children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{children:"\u0418\u043c\u044f: "}),Object(O.jsx)(x.a,{className:F.a.fields,validate:[P.b,D],placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",name:"fullName",component:g.a})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{children:"\u041e\u0431\u043e \u043c\u043d\u0435:"}),Object(O.jsx)(x.a,{className:F.a.fields,validate:[P.b,T],placeholder:"\u041e\u0431\u043e \u043c\u043d\u0435...",name:"aboutMe",component:g.b})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{children:"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443:"}),Object(O.jsx)(x.a,{validate:[P.b],type:"checkBox",name:"lookingForAJob",component:g.a})]}),Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"\u041d\u0430\u0432\u044b\u043a\u0438: "}),Object(O.jsx)(x.a,{className:F.a.fields,validate:[P.b,W],placeholder:"\u041c\u043e\u0438 \u043d\u0430\u0432\u044b\u043a\u0438...",name:"lookingForAJobDescription",component:g.b})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("b",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b:"}),Object(O.jsx)("p",{className:F.a.profileLinks,children:Object.keys(a).map((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsxs)("span",{className:F.a.labelInput,children:[e,":"]})," ",Object(O.jsx)(x.a,{className:F.a.fields,validate:[U],placeholder:e,name:"contacts."+e,component:g.a})]},e)}))})]}),Object(O.jsxs)("div",{children:[r&&Object(O.jsx)("div",{className:F.a.formSummaryError,children:r}),Object(O.jsx)("button",{className:F.a.accept__btn,onClick:s,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})})),A=function(e){var t=e.profile,s=e.isOwner,r=e.goToEditMode,a=t.contacts;return Object(O.jsxs)("div",{className:F.a.profileData,children:[Object(O.jsxs)("div",{className:F.a.discriptionsWrap,children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{className:F.a.subHeaders,children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:"})," ",t.aboutMe]}),s&&Object(O.jsx)("button",{className:F.a.links__md+" "+F.a.profileData__changes,onClick:r,children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{className:F.a.subHeaders,children:"\u0418\u0449\u0443 \u0440\u0430\u0431\u043e\u0442\u0443:"})," ",t.lookingForAJob?"\u0414\u0430!":"\u041d\u0435\u0442"]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{className:F.a.subHeaders,children:"\u041a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438: "}),t.lookingForAJobDescription]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{className:F.a.subHeaders,children:"contacts:"}),Object(O.jsx)("div",{className:F.a.profileLinks,children:Object.keys(a).map((function(e){return Object(O.jsxs)("div",{children:[e,": ",Object(O.jsx)("a",{className:F.a.links__md,target:"_blank",href:a[e],children:a[e]})]},e)}))})]})]})},B=function(e){var t=e.profile,s=e.status,r=e.updateUserStatus,a=e.isOwner,n=e.savePhoto,i=e.saveProfile,o=Object(c.useState)(!1),l=Object(S.a)(o,2),j=l[0],u=l[1];if(!t)return Object(O.jsx)(C.a,{});t.contacts;return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:F.a.profileInfo,children:[Object(O.jsxs)("h3",{className:F.a.subHeaders+" "+F.a.nameBlock,children:[" \u0418\u043c\u044f: ",Object(O.jsx)("b",{children:t.fullName})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{className:F.a.profilePhoto,src:t.photos.large?t.photos.large:w.a}),Object(O.jsx)("input",{className:F.a.hiden,name:"file",id:"input__file",onChange:function(e){e.target.files.length&&n(e.target.files[0])},type:"file"}),Object(O.jsx)("div",{children:a&&Object(O.jsx)("label",{htmlFor:"input__file",className:F.a.links__md,children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u043e\u0442\u043e "})})]}),Object(O.jsx)("h3",{className:F.a.subHeaders,children:Object(O.jsx)(M,{isOwner:a,status:s,updateUserStatus:r})}),Object(O.jsx)("hr",{}),j?Object(O.jsx)(E,{initialValues:t,profile:t,onSubmit:function(e){i(e).then((function(){u(!1)}))}}):Object(O.jsx)(A,{goToEditMode:function(){u(!0)},profile:t,isOwner:a})]})})},H=function(e){return Object(O.jsx)("main",{className:u.a.main,children:Object(O.jsx)(B,{isOwner:e.isOwner,savePhoto:e.savePhoto,profile:e.profile,status:e.status,updateUserStatus:e.updateUserStatus,saveProfile:e.saveProfile})})},J=s(9),L=s(22),q=function(e){Object(i.a)(s,e);var t=Object(o.a)(s);function s(){return Object(a.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getProfile(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,s){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(O.jsx)("main",{className:u.a.main,children:Object(O.jsx)(H,Object(r.a)(Object(r.a)({},this.props),{},{isOwner:!this.props.match.params.userId,savePhoto:this.props.savePhoto,profile:this.props.profile,status:this.props.status,updateUserStatus:this.props.updateUserStatus}))})}}]),s}(l.a.Component);t.default=Object(L.d)(Object(d.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getProfile:b.c,getUserStatus:b.d,updateUserStatus:b.g,savePhoto:b.e,saveProfile:b.f}),J.g)(q)}}]);
//# sourceMappingURL=4.72aa65ce.chunk.js.map