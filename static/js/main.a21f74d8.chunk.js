(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{103:function(e,t,a){e.exports=a(132)},108:function(e,t,a){},109:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(9),i=a.n(o),s=(a(108),a(109),a(25)),c=a(13),l=a(7),m=a(40),u=a.n(m),d=a(180),p=a(169),f=a(167),g=a(181),E=a(170),b=a(174),v=a(171),h=a(162),w=a(30),y=a(83),S=a.n(y),O=n.a.memo((function(e){var t=e.title;return n.a.createElement("div",{className:S.a.title},n.a.createElement("h1",null,t))})),j=a(165),x=Object(h.a)((function(e){return Object(d.a)({loading:{position:"absolute",top:"80px",left:"0",zIndex:1,width:"100%"}})})),I=n.a.memo((function(){var e=x();return n.a.createElement(j.a,{className:e.loading})})),N=a(18),P=a(87),_=a.n(P).a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),F=function(e){return _.post("auth/register",e)},R=function(e){return _.post("auth/login",e)},A=function(){return _.post("auth/me",{})},T=function(){return _.delete("auth/me")},C=function(e){return _.post("auth/forgot",{email:e,from:"testdenis12345@gmail.com",message:"<div style=\"background-color: lime; padding: 15px\"> \n\t\t\t\t\tpassword recovery link: \t\n\t\t\t\t\t<a href='https://prudiusdenys.github.io/friday-project/#/recovery/$token$'>link</a></div>"})},B=function(e,t){return _.post("auth/set-new-password",{password:e,resetPasswordToken:t})},L={status:"idle",error:null,isInitialized:!1,loading:!1},M=function(e){return{type:"PROFILE_SET_LOADING",loadingStatus:e}},k=function(e,t){var a=e.response.data.error?e.response.data.error:"Some error :(";t(D(a))},G={isSignIn:!1},U=function(e){return{type:"Login/IS-SIGN-IN",isSignIn:e}},Z={errorMessage:null,success:!0,isInitialized:!1,isSuccessfulMessage:!1},D=function(e){return{type:"app/SET-ERROR-MESSAGE",errorMessage:e}},W=function(e){return{type:"app/SET-SUCCESS-MESSAGE",value:e}},z=function(e){return{type:"app/SET-STATUS",success:e}},q={isRegistered:!1},V=function(e){return{type:" REGISTRATION/REGISTER_USER",isRegistered:e}},$=a(179),K=a(176);function J(e){return n.a.createElement(K.a,Object.assign({elevation:6,variant:"filled"},e))}var X=n.a.memo((function(){var e=Object(l.c)((function(e){return e.app.errorMessage})),t=Object(l.b)(),a=function(e,a){"clickaway"!==a&&t(D(null))},r=null!==e;return n.a.createElement($.a,{open:r,autoHideDuration:3e3,onClose:a},n.a.createElement(J,{onClose:a,severity:"error"},e))})),H=Object(h.a)((function(e){return Object(d.a)({grid:{maxWidth:"600px",width:"100%",margin:"0 30px"},formControl:{width:"100%"},container:{height:"100vh"},formGroup:{alignItems:"center"},textField:{width:"100%",paddingBottom:"30px"},button:{width:"100%",marginBottom:"15px"},registration:{textAlign:"center"}})})),Q=n.a.memo((function(){var e=H(),t=Object(l.b)(),a=Object(l.c)((function(e){return e.profile.loading})),r=Object(l.c)((function(e){return e.registration.isRegistered})),o=Object(l.c)((function(e){return e.login.isSignIn})),i=Object(w.a)({initialValues:{email:"",password:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)?e.password?e.password.length<8&&(t.password="Password length should be at least 8 characters"):t.password="This field is required":t.email="Invalid email address":t.email="This field is required",t},onSubmit:function(e,a){var r,n=a.resetForm;t((r=e,function(e){e(M(!0)),F(r).then((function(t){e(V(!0))})).catch((function(t){e(V(!1)),e(D(t.response.data.error))})).finally((function(){return e(M(!1))}))})),n()}});return r?n.a.createElement(c.a,{to:"/Login"}):o?n.a.createElement(c.a,{to:"/"}):n.a.createElement("div",{className:u.a.registrationForm},a&&n.a.createElement(I,null),n.a.createElement(O,{title:"Registration Form"}),n.a.createElement(p.a,{container:!0,justify:"center",alignItems:"center",className:e.container},n.a.createElement(p.a,{item:!0,className:e.grid},n.a.createElement(f.a,{elevation:3,style:{padding:"30px"}},n.a.createElement("div",{className:e.registration},n.a.createElement("h2",{style:{margin:"0 0 30px 0",color:"#666"}},"Please fill in all fields")),n.a.createElement("form",{className:u.a.form,onSubmit:i.handleSubmit},n.a.createElement(g.a,{className:e.formControl},n.a.createElement(E.a,{className:e.formGroup},n.a.createElement("div",{className:u.a.inputBox},n.a.createElement(b.a,Object.assign({className:e.textField,label:"Email",variant:"outlined",error:!!i.errors.email||void 0},i.getFieldProps("email"))),i.errors.email&&n.a.createElement("div",{className:u.a.error},i.errors.email)),n.a.createElement("div",{className:u.a.inputBox},n.a.createElement(b.a,Object.assign({className:e.textField,type:"password",label:"Password",variant:"outlined",error:!!i.errors.password||void 0},i.getFieldProps("password"))),i.errors.password&&n.a.createElement("div",{className:u.a.error},i.errors.password)),n.a.createElement(v.a,{type:"submit",disabled:!(i.isValid&&i.dirty),variant:"contained",color:"primary",className:e.button},"Sign up"),n.a.createElement(s.b,{to:"/Login",style:{textDecoration:"none",width:"100%"}},n.a.createElement(v.a,{style:{width:"100%"},color:"secondary",variant:"contained"},"Login")))))))),n.a.createElement(X,null))})),Y=a(62),ee=a.n(Y),te=a(88),ae=a.n(te),re=n.a.memo((function(){var e=Object(l.c)((function(e){return e.login.isSignIn})),t=Object(l.b)(),a=Object(r.useCallback)((function(){t((function(e){e(M(!0)),T().then((function(t){e(U(!1))})).catch((function(t){k(t,e)})).finally((function(){return e(M(!1))}))}))}),[t]);return e?n.a.createElement("div",{className:ee.a.profile},n.a.createElement("div",{className:ae.a.container},n.a.createElement("div",{className:ee.a.profileContent},n.a.createElement(O,{title:"Welcome to Profile page"}),n.a.createElement("div",{className:ee.a.btn},e&&n.a.createElement(v.a,{variant:"contained",color:"secondary",onClick:a},"Log out"))))):n.a.createElement(c.a,{to:"/Login"})})),ne=a(172),oe=a(177),ie=a(89),se=a.n(ie),ce=n.a.memo((function(){return n.a.createElement("div",{style:{position:"absolute",zIndex:2,bottom:"-50px",left:"50%",transform:"translateX(-50%)"}},n.a.createElement("img",{src:se.a,alt:"spinner"}))})),le=Object(h.a)((function(e){return Object(d.a)({gridItem:{position:"relative",zIndex:1,maxWidth:"400px",width:"100%",padding:"0 10px"},formControl:{width:"100%"},container:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},formLabel:{margin:"0 0 10px 0"},inputBox:{position:"relative",width:"100%"},errMessage:{position:"absolute",bottom:"6px",left:"0",color:"#d82626"},button:{margin:"0 0 10px 0"},signUp:{width:"100%"},disable:{opacity:.5,pointerEvents:"none"},enable:{opacity:1,pointerEvents:"inherit"}})})),me=n.a.memo((function(){var e=le(),t=Object(l.b)(),a=Object(l.c)((function(e){return e.login.isSignIn})),r=Object(l.c)((function(e){return e.app.success})),o=Object(w.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)?e.password?e.password.length<8&&(t.password="Password should be at least 8 characters"):t.password="This field is required":t.email="Invalid email address":t.email="This field is required",t},onSubmit:function(e,a){var r,n=a.resetForm;t((r=e,function(e){e(z(!1)),e(M(!0)),R(r).then((function(t){e(U(!0)),e(function(e){return{type:"Login/SET-USER",data:e}}(t.data)),e(z(!0))})).catch((function(t){k(t,e),e(z(!0))})).finally((function(){return e(M(!1))}))})),n()}});if(a)return n.a.createElement(c.a,{to:"/"});return n.a.createElement("div",null,n.a.createElement(O,{title:"Login Form"}),n.a.createElement(p.a,{container:!0,className:e.container},n.a.createElement(p.a,{item:!0,className:"".concat(e.gridItem," ").concat(r?e.enable:e.disable)},!r&&n.a.createElement(ce,null),n.a.createElement(f.a,{elevation:3,style:{padding:"30px"}},n.a.createElement("form",{onSubmit:o.handleSubmit},n.a.createElement(g.a,{className:e.formControl},n.a.createElement(E.a,null,n.a.createElement("div",{className:e.inputBox},n.a.createElement(b.a,Object.assign({style:{width:"100%",paddingBottom:"30px"},type:"email",label:"Email",variant:"outlined",error:!!o.errors.email||void 0},o.getFieldProps("email"))),o.errors.email&&n.a.createElement("div",{className:e.errMessage},o.errors.email)),n.a.createElement("div",{className:e.inputBox},n.a.createElement(b.a,Object.assign({style:{width:"100%",paddingBottom:"30px"},type:"password",label:"Password",variant:"outlined",error:!!o.errors.password||void 0},o.getFieldProps("password"))),o.errors.password&&n.a.createElement("div",{className:e.errMessage},o.errors.password)),n.a.createElement(ne.a,{className:e.formLabel,label:"Remember me",control:n.a.createElement(oe.a,Object.assign({color:"primary",checked:o.values.rememberMe},o.getFieldProps("rememberMe")))}),n.a.createElement(s.b,{to:"/forgotPassword",style:{marginBottom:"10px",color:"#3f51b5"}},"Forgot Password?"),n.a.createElement(v.a,{className:e.button,type:"submit",variant:"contained",color:"primary"},"Sign In"),n.a.createElement(s.b,{to:"/registration"},n.a.createElement(v.a,{className:e.signUp,variant:"contained",color:"secondary"},"Sign Up")),n.a.createElement("button",{type:"button",onClick:function(){window.gapi.auth2.getAuthInstance().signIn({scope:"profile email"}).then((function(e){console.log("Auth Ok",e.getBasicProfile().getId()),e.getBasicProfile().getId()}),(function(e){console.log("Auth Error",e)}))}},"Google Log In"))))))))})),ue=a(41),de=a.n(ue),pe={passwordIsUpdated:!1},fe=Object(h.a)((function(e){return Object(d.a)({grid:{maxWidth:"400px",width:"100%",margin:"0 30px"},formControl:{width:"100%"},container:{height:"100vh"},formGroup:{alignItems:"center"},textField:{width:"100%",paddingBottom:"30px"},button:{width:"100%",marginBottom:"15px"},registration:{textAlign:"center"}})})),ge=n.a.memo((function(){var e=fe(),t=Object(l.b)(),a=Object(l.c)((function(e){return e.profile.loading})),r=Object(l.c)((function(e){return e.login.isSignIn})),o=Object(l.c)((function(e){return e.recoveryPassword.passwordIsUpdated})),i=Object(c.f)().userId,s=Object(w.a)({initialValues:{password:"",confirmPassword:""},validate:function(e){var t={};return e.password?e.password.length<8?t.password="Password length should be at least 8 characters":e.confirmPassword!==e.password&&(t.confirmPassword="Passwords must match"):t.password="This field is required",t},onSubmit:function(e,a){var r=a.resetForm;t(function(e,t){return function(a){a(M(!0)),B(e,t).then((function(e){a({type:"recoveryPassword/PASSWORD-IS-CONFIRMED",value:!0})})).catch((function(e){a(D(e.response.data.error))})).finally((function(){return a(M(!1))}))}}(e.password,i)),r()}});return o?n.a.createElement(c.a,{to:"/Login"}):r?n.a.createElement(c.a,{to:"/"}):n.a.createElement("div",{className:de.a.recoveryPassword},a&&n.a.createElement(I,null),n.a.createElement(O,{title:"Recovery Password Form"}),n.a.createElement(p.a,{container:!0,justify:"center",alignItems:"center",className:e.container},n.a.createElement(p.a,{item:!0,className:e.grid},n.a.createElement(f.a,{elevation:3,style:{padding:"30px"}},n.a.createElement("form",{className:de.a.form,onSubmit:s.handleSubmit},n.a.createElement(g.a,{className:e.formControl},n.a.createElement(E.a,{className:e.formGroup},n.a.createElement("div",{className:de.a.inputBox},n.a.createElement(b.a,Object.assign({className:e.textField,type:"password",label:"New password",variant:"outlined",error:!!s.errors.password||void 0},s.getFieldProps("password"))),s.errors.password&&n.a.createElement("div",{className:de.a.error},s.errors.password)),n.a.createElement("div",{className:de.a.inputBox},n.a.createElement(b.a,Object.assign({className:e.textField,type:"password",label:"Confirm password",variant:"outlined",error:!!s.errors.confirmPassword||void 0},s.getFieldProps("confirmPassword"))),s.errors.confirmPassword&&n.a.createElement("div",{className:de.a.error},s.errors.confirmPassword)),n.a.createElement(v.a,{type:"submit",disabled:!(s.isValid&&s.dirty),variant:"contained",color:"primary",className:e.button},"Save password"))))))),n.a.createElement(X,null))})),Ee=a(53),be=a.n(Ee),ve={emailSentSuccessful:!1},he=a(175),we=a(133),ye=Object(h.a)((function(e){return Object(d.a)({typography:{padding:e.spacing(6)}})})),Se=n.a.memo((function(){var e=ye(),t=Object(l.b)(),a=Object(l.c)((function(e){return e.app.isSuccessfulMessage})),o=Object(r.useCallback)((function(){t(W(!1))}),[t]);return n.a.createElement("div",null,n.a.createElement(he.a,{open:a,onClose:o,anchorOrigin:{vertical:"center",horizontal:"center"},transformOrigin:{vertical:"center",horizontal:"center"}},n.a.createElement(we.a,{style:{backgroundColor:"#3f51b5",color:"#fff"},className:e.typography},"Email was sent to your address")))})),Oe=Object(h.a)((function(e){return Object(d.a)({grid:{maxWidth:"400px",width:"100%",margin:"0 30px"},formControl:{width:"100%"},container:{height:"100vh"},formGroup:{alignItems:"center"},textField:{width:"100%",paddingBottom:"30px"},button:{width:"100%",marginBottom:"15px"},registration:{textAlign:"center"}})})),je=n.a.memo((function(){var e=Oe(),t=Object(l.b)(),a=Object(l.c)((function(e){return e.profile.loading})),r=Object(l.c)((function(e){return e.login.isSignIn})),o=Object(l.c)((function(e){return e.app.isSuccessfulMessage})),i=Object(w.a)({initialValues:{email:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="This field is required",t},onSubmit:function(e,a){var r,n=a.resetForm;t((r=e.email,function(e){e(M(!0)),C(r).then((function(t){e({type:"forgotPassword/EMAIL-SET-SUCCESSFUL",value:!0}),e(W(!0))})).catch((function(t){e(D(t.response.data.error))})).finally((function(){return e(M(!1))}))})),n()}});return r?n.a.createElement(c.a,{to:"/"}):n.a.createElement("div",{className:be.a.forgotPassword},a&&n.a.createElement(I,null),n.a.createElement(O,{title:"Forgot Password Form"}),n.a.createElement(p.a,{container:!0,justify:"center",alignItems:"center",className:e.container},n.a.createElement(p.a,{item:!0,className:e.grid},n.a.createElement(f.a,{elevation:3,style:{padding:"30px"}},n.a.createElement("form",{className:be.a.form,onSubmit:i.handleSubmit},n.a.createElement(g.a,{className:e.formControl},n.a.createElement(E.a,{className:e.formGroup},n.a.createElement("div",{className:be.a.inputBox},n.a.createElement(b.a,Object.assign({className:e.textField,label:"Write your email",variant:"outlined",error:!!i.errors.email||void 0},i.getFieldProps("email"))),i.errors.email&&n.a.createElement("div",{className:be.a.error},i.errors.email)),n.a.createElement(v.a,{type:"submit",disabled:!(i.isValid&&i.dirty),variant:"contained",color:"primary",className:e.button},"Send"),n.a.createElement(s.b,{to:"/Login",style:{textDecoration:"none",width:"100%"}},n.a.createElement(v.a,{style:{width:"100%"},color:"secondary",variant:"contained"},"Login")))))))),n.a.createElement(X,null),o&&n.a.createElement(Se,null))})),xe=a(173),Ie={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"},Ne=n.a.memo((function(){return n.a.createElement("div",{style:Ie},n.a.createElement(xe.a,null))})),Pe=function(){var e=Object(l.b)(),t=Object(l.c)((function(e){return e.app.isInitialized}));return Object(r.useEffect)((function(){e((function(e){A().then((function(t){e(U(!0))})).finally((function(){return e({type:"app/SET-APP-INITIALIZED",value:!0})}))}))}),[e]),Object(r.useEffect)((function(){window.gapi.load("auth2",(function(){window.gapi.auth2.init({client_id:"192242024154-3lqo1cg32i5v14jedhhrtrn0ima9jjap.apps.googleusercontent.com"}).then((function(){return console.log("OK")}),(function(){console.log("Error1")}))}))}),[]),t?n.a.createElement(s.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(c.b,{exact:!0,path:"/",render:function(){return n.a.createElement(re,null)}}),n.a.createElement(c.b,{path:"/registration",render:function(){return n.a.createElement(Q,null)}}),n.a.createElement(c.b,{path:"/Login",render:function(){return n.a.createElement(me,null)}}),n.a.createElement(c.b,{path:"/forgotPassword",render:function(){return n.a.createElement(je,null)}}),n.a.createElement(c.b,{path:"/recovery/:userId",render:function(){return n.a.createElement(ge,null)}}))):n.a.createElement(Ne,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _e=a(45),Fe=a(90),Re=Object(_e.c)({profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PROFILE_SET_LOADING":return Object(N.a)({},e,{loading:t.loadingStatus})}return e},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case" REGISTRATION/REGISTER_USER":return Object(N.a)({},e,{isRegistered:t.isRegistered})}return e},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Login/IS-SIGN-IN":return Object(N.a)({},e,{isSignIn:t.isSignIn});case"Login/SET-USER":return Object(N.a)({},e,{},t.data);default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/SET-STATUS":return Object(N.a)({},e,{success:t.success});case"app/SET-ERROR-MESSAGE":return Object(N.a)({},e,{errorMessage:t.errorMessage});case"app/SET-APP-INITIALIZED":return Object(N.a)({},e,{isInitialized:t.value});case"app/SET-SUCCESS-MESSAGE":return Object(N.a)({},e,{isSuccessfulMessage:t.value});default:return e}},recoveryPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"recoveryPassword/PASSWORD-IS-CONFIRMED":return Object(N.a)({},e,{passwordIsUpdated:t.value})}return e},forgotPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"forgotPassword/EMAIL-SET-SUCCESSFUL":return Object(N.a)({},e,{emailSentSuccessful:t.value})}return e}}),Ae=Object(_e.d)(Re,Object(_e.a)(Fe.a));window.store=Ae,i.a.render(n.a.createElement(l.a,{store:Ae},n.a.createElement(Pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},40:function(e,t,a){e.exports={registrationForm:"RegistrationForm_registrationForm___mcIv",inputBox:"RegistrationForm_inputBox__1KGpA",error:"RegistrationForm_error__2bM7-"}},41:function(e,t,a){e.exports={recoveryPassword:"RecoveryPassword_recoveryPassword__QCnqF",inputBox:"RecoveryPassword_inputBox__3h1TK",error:"RecoveryPassword_error__1A7ZL"}},53:function(e,t,a){e.exports={forgotPassword:"ForgotPassword_forgotPassword__3kUX3",inputBox:"ForgotPassword_inputBox__tYNiZ",error:"ForgotPassword_error__1KoeN"}},62:function(e,t,a){e.exports={profileContent:"Profile_profileContent__12fFa",btn:"Profile_btn__1bBM3",loading:"Profile_loading__3GbAF"}},83:function(e,t,a){e.exports={title:"Title_title__1RTB2"}},88:function(e,t,a){e.exports={container:"container_container__1jjuF"}},89:function(e,t,a){e.exports=a.p+"static/media/spinner.cceb1073.svg"}},[[103,1,2]]]);
//# sourceMappingURL=main.a21f74d8.chunk.js.map