(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},128:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(8),i=a.n(o),s=(a(104),a(105),a(25)),l=a(13),c=a(9),m=a(44),d=a(79),u=a(19),p={status:"idle",error:null,isInitialized:!1,loading:!1},f=function(e){return{type:"PROFILE_SET_LOADING",loadingStatus:e}},g=a(80),E=a.n(g).a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),b=function(e){return E.post("auth/register",e)},v=function(e){return E.post("auth/login",e)},w=function(){return E.post("auth/me",{})},h=function(){return E.delete("auth/me")},y=function(e){return E.post("auth/forgot",{email:e,from:"testdenis12345@gmail.com",message:"<div style=\"background-color: lime; padding: 15px\"> \n\t\t\t\t\tpassword recovery link: \t\n\t\t\t\t\t<a href='https://prudiusdenys.github.io/friday-project/#/recovery/$token$'>link</a></div>"})},S=function(e){return E.post("auth/set-new-password",e)},x=function(e,t){var a=e.response.data.error?e.response.data.error:"Some error :(";t(I(a))},N={isSignIn:!1},O=function(e){return{type:"login/IS-SIGN-IN",isSignIn:e}},j={errorMessage:null,success:!0,isInitialized:!1},I=function(e){return{type:"app/SET-ERROR-MESSAGE",errorMessage:e}},P=function(e){return{type:"app/SET-STATUS",success:e}},_={isRegistered:!1},F=function(e){return{type:" REGISTRATION/REGISTER_USER",isRegistered:e}},R={passwordIsUpdated:!1},T={emailSentSuccessful:!1},A=Object(m.c)({profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PROFILE_SET_LOADING":return Object(u.a)({},e,{loading:t.loadingStatus})}return e},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case" REGISTRATION/REGISTER_USER":return Object(u.a)({},e,{isRegistered:t.isRegistered})}return e},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login/IS-SIGN-IN":return Object(u.a)({},e,{isSignIn:t.isSignIn});case"login/SET-USER":return Object(u.a)({},e,{},t.data);default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/SET-STATUS":return Object(u.a)({},e,{success:t.success});case"app/SET-ERROR-MESSAGE":return Object(u.a)({},e,{errorMessage:t.errorMessage});case"app/SET-APP-INITIALIZED":return Object(u.a)({},e,{isInitialized:t.value});default:return e}},recoveryPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"recoveryPassword/PASSWORD-IS-CONFIRMED":return Object(u.a)({},e,{passwordIsUpdated:t.value})}return e},forgotPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"forgotPassword/EMAIL-SET-SUCCESSFUL":return Object(u.a)({},e,{emailSentSuccessful:t.value})}return e}}),C=Object(m.d)(A,Object(m.a)(d.a));window.store=C;var B=a(40),M=a.n(B),G=a(175),L=a(166),U=a(164),k=a(176),D=a(167),W=a(170),Z=a(168),q=a(159),z=a(30),V=a(83),$=a.n(V),K=function(e){var t=e.title;return n.a.createElement("div",{className:$.a.title},n.a.createElement("h1",null,t))},J=a(162),X=Object(q.a)((function(e){return Object(G.a)({loading:{position:"absolute",top:"80px",left:"0",zIndex:1,width:"100%"}})})),H=function(){var e=X();return n.a.createElement(J.a,{className:e.loading})},Q=a(174),Y=a(171);function ee(e){return n.a.createElement(Y.a,Object.assign({elevation:6,variant:"filled"},e))}var te=function(){var e=Object(c.c)((function(e){return e.app.errorMessage})),t=Object(c.b)(),a=function(e,a){"clickaway"!==a&&t(I(null))},r=null!==e;return n.a.createElement(Q.a,{open:r,autoHideDuration:3e3,onClose:a},n.a.createElement(ee,{onClose:a,severity:"error"},e))},ae=Object(q.a)((function(e){return Object(G.a)({grid:{maxWidth:"600px",width:"100%",margin:"0 30px"},formControl:{width:"100%"},container:{height:"100vh"},formGroup:{alignItems:"center"},textField:{width:"100%",paddingBottom:"30px"},button:{width:"100%",marginBottom:"15px"},registration:{textAlign:"center"}})})),re=function(){var e=ae(),t=Object(c.b)(),a=Object(c.c)((function(e){return e.profile.loading})),r=Object(c.c)((function(e){return e.registration.isRegistered})),o=Object(c.c)((function(e){return e.login.isSignIn})),i=Object(z.a)({initialValues:{email:"",password:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)?e.password?e.password.length<8&&(t.password="Password length should be at least 8 characters"):t.password="This field is required":t.email="Invalid email address":t.email="This field is required",t},onSubmit:function(e){var a;t((a=e,function(e){e(f(!0)),b(a).then((function(t){e(F(!0))})).catch((function(t){e(F(!1)),e(I(t.response.data.error))})).finally((function(){return e(f(!1))}))}))}});return r?n.a.createElement(l.a,{to:"/login"}):o?n.a.createElement(l.a,{to:"/"}):n.a.createElement("div",{className:M.a.registrationForm},a&&n.a.createElement(H,null),n.a.createElement(K,{title:"Registration Form"}),n.a.createElement(L.a,{container:!0,justify:"center",alignItems:"center",className:e.container},n.a.createElement(L.a,{item:!0,className:e.grid},n.a.createElement(U.a,{elevation:3,style:{padding:"30px"}},n.a.createElement("div",{className:e.registration},n.a.createElement("h2",{style:{margin:"0 0 30px 0"}},"Please fill in all fields")),n.a.createElement("form",{className:M.a.form,onSubmit:i.handleSubmit},n.a.createElement(k.a,{className:e.formControl},n.a.createElement(D.a,{className:e.formGroup},n.a.createElement("div",{className:M.a.inputBox},n.a.createElement(W.a,Object.assign({className:e.textField,label:"Email",variant:"outlined",error:!!i.errors.email||void 0},i.getFieldProps("email"))),i.errors.email&&n.a.createElement("div",{className:M.a.error},i.errors.email)),n.a.createElement("div",{className:M.a.inputBox},n.a.createElement(W.a,Object.assign({className:e.textField,type:"password",label:"Password",variant:"outlined",error:!!i.errors.password||void 0},i.getFieldProps("password"))),i.errors.password&&n.a.createElement("div",{className:M.a.error},i.errors.password)),n.a.createElement(Z.a,{type:"submit",disabled:!(i.isValid&&i.dirty),variant:"contained",color:"primary",className:e.button},"Sign up"),n.a.createElement(s.b,{to:"/login",style:{textDecoration:"none",width:"100%"}},n.a.createElement(Z.a,{style:{width:"100%"},color:"secondary",variant:"contained"},"Login")))))))),n.a.createElement(te,null))},ne=a(60),oe=a.n(ne),ie=a(87),se=a.n(ie),le=a(169),ce={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"},me=function(){return n.a.createElement("div",{style:ce},n.a.createElement(le.a,null))},de=function(){var e=Object(c.c)((function(e){return e.login.isSignIn})),t=Object(c.c)((function(e){return e.app.isInitialized})),a=Object(c.b)();if(Object(r.useEffect)((function(){a((function(e){w().then((function(t){e(O(!0)),e({type:"app/SET-APP-INITIALIZED",value:!0})}))}))}),[a]),!t)return n.a.createElement(me,null);if(!e)return n.a.createElement(l.a,{to:"/login"});return n.a.createElement("div",{className:oe.a.profile},n.a.createElement("div",{className:se.a.container},n.a.createElement("div",{className:oe.a.profileContent},n.a.createElement(K,{title:"Welcome to Profile page"}),n.a.createElement("div",{className:oe.a.btn},e&&n.a.createElement(Z.a,{variant:"contained",color:"secondary",onClick:function(){a((function(e){e(f(!0)),h().then((function(t){e(O(!1))})).catch((function(t){x(t,e)})).finally((function(){return e(f(!1))}))}))}},"Log out")))))},ue=a(177),pe=a(172),fe=a(88),ge=a.n(fe);function Ee(){return n.a.createElement("div",{style:{position:"absolute",zIndex:2,bottom:"-50px",left:"50%",transform:"translateX(-50%)"}},n.a.createElement("img",{src:ge.a,alt:"spinner"}))}function be(){var e=Object(q.a)((function(e){return Object(G.a)({gridItem:{position:"relative",zIndex:1,maxWidth:"400px",width:"100%",padding:"0 10px"},formControl:{width:"100%"},container:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},formLabel:{margin:"10px 0 10px 0"},errMessage:{color:"#d82626"},button:{margin:"0 0 10px 0"},signUp:{width:"100%"},disable:{opacity:.5,pointerEvents:"none"},enable:{opacity:1,pointerEvents:"inherit"}})}))(),t=Object(c.b)(),a=Object(c.c)((function(e){return e.login.isSignIn})),r=Object(c.c)((function(e){return e.app.success})),o=Object(z.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(e){return e.email?e.password?e.password.length<=6?{password:"Password should be more than 5 symbols"}:void 0:{password:"Password is required!"}:{email:"Email is required!"}},onSubmit:function(e){var a;t((a=e,function(e){e(P(!1)),e(f(!0)),v(a).then((function(t){e(O(!0)),e(function(e){return{type:"login/SET-USER",data:e}}(t.data)),e(P(!0))})).catch((function(t){x(t,e),e(P(!0))})).finally((function(){return e(f(!1))}))}))}});return a?n.a.createElement(l.a,{to:"/"}):n.a.createElement("div",null,n.a.createElement(K,{title:"Login Form"}),n.a.createElement(L.a,{container:!0,className:e.container},n.a.createElement(L.a,{item:!0,className:"".concat(e.gridItem," ").concat(r?e.enable:e.disable)},!r&&n.a.createElement(Ee,null),n.a.createElement(U.a,{elevation:3,style:{padding:"30px"}},n.a.createElement("form",{onSubmit:o.handleSubmit},n.a.createElement(k.a,{className:e.formControl},n.a.createElement(D.a,null,n.a.createElement(W.a,Object.assign({type:"email",label:"Email",margin:"normal"},o.getFieldProps("email"))),o.errors.email&&n.a.createElement("div",{className:e.errMessage},o.errors.email),n.a.createElement(W.a,Object.assign({type:"password",label:"Password",margin:"normal"},o.getFieldProps("password"))),o.errors.password&&n.a.createElement("div",{className:e.errMessage},o.errors.password),n.a.createElement(ue.a,{className:e.formLabel,label:"Remember me",control:n.a.createElement(pe.a,Object.assign({color:"primary",checked:o.values.rememberMe},o.getFieldProps("rememberMe")))}),n.a.createElement(s.b,{to:"/forgotPassword",style:{marginBottom:"10px",color:"#3f51b5"}},"Forgot Password?"),n.a.createElement(Z.a,{className:e.button,type:"submit",variant:"contained",color:"primary"},"Sign In"),n.a.createElement(s.b,{to:"/registration"},n.a.createElement(Z.a,{className:e.signUp,variant:"contained",color:"secondary"},"Sign Up")))))))))}var ve=a(41),we=a.n(ve),he=Object(q.a)((function(e){return Object(G.a)({grid:{maxWidth:"400px",width:"100%",margin:"0 30px"},formControl:{width:"100%"},container:{height:"100vh"},formGroup:{alignItems:"center"},textField:{width:"100%",paddingBottom:"30px"},button:{width:"100%",marginBottom:"15px"},registration:{textAlign:"center"}})})),ye=function(){var e=he(),t=Object(c.b)(),a=Object(c.c)((function(e){return e.profile.loading})),r=Object(c.c)((function(e){return e.recoveryPassword.passwordIsUpdated})),o=Object(l.f)().userId;console.log(o);var i=Object(z.a)({initialValues:{password:"",confirmPassword:""},validate:function(e){var t={};return e.password?e.password.length<8?t.password="Password length should be at least 8 characters":e.confirmPassword!==e.password&&(t.confirmPassword="Passwords must match"):t.password="This field is required",t},onSubmit:function(e){var a;t((a=e.password,function(e){e(f(!0)),S(a).then((function(t){e({type:"recoveryPassword/PASSWORD-IS-CONFIRMED",value:!0})})).catch((function(t){e(I(t.response.data.error))})).finally((function(){return e(f(!1))}))}))}});return r?n.a.createElement(l.a,{to:"/login"}):n.a.createElement("div",{className:we.a.recoveryPassword},a&&n.a.createElement(H,null),n.a.createElement(K,{title:"Recovery Password Form"}),n.a.createElement(L.a,{container:!0,justify:"center",alignItems:"center",className:e.container},n.a.createElement(L.a,{item:!0,className:e.grid},n.a.createElement(U.a,{elevation:3,style:{padding:"30px"}},n.a.createElement("form",{className:we.a.form,onSubmit:i.handleSubmit},n.a.createElement(k.a,{className:e.formControl},n.a.createElement(D.a,{className:e.formGroup},n.a.createElement("div",{className:we.a.inputBox},n.a.createElement(W.a,Object.assign({className:e.textField,type:"password",label:"New password",variant:"outlined",error:!!i.errors.password||void 0},i.getFieldProps("password"))),i.errors.password&&n.a.createElement("div",{className:we.a.error},i.errors.password)),n.a.createElement("div",{className:we.a.inputBox},n.a.createElement(W.a,Object.assign({className:e.textField,type:"password",label:"Confirm password",variant:"outlined",error:!!i.errors.confirmPassword||void 0},i.getFieldProps("confirmPassword"))),i.errors.confirmPassword&&n.a.createElement("div",{className:we.a.error},i.errors.confirmPassword)),n.a.createElement(Z.a,{type:"submit",disabled:!(i.isValid&&i.dirty),variant:"contained",color:"primary",className:e.button},"Save password"))))))),n.a.createElement(te,null))},Se=a(53),xe=a.n(Se),Ne=Object(q.a)((function(e){return Object(G.a)({grid:{maxWidth:"400px",width:"100%",margin:"0 30px"},formControl:{width:"100%"},container:{height:"100vh"},formGroup:{alignItems:"center"},textField:{width:"100%",paddingBottom:"30px"},button:{width:"100%",marginBottom:"15px"},registration:{textAlign:"center"}})})),Oe=function(){var e=Ne(),t=Object(c.b)(),a=Object(c.c)((function(e){return e.profile.loading})),r=Object(c.c)((function(e){return e.forgotPassword.emailSentSuccessful})),o=Object(z.a)({initialValues:{email:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="This field is required",t},onSubmit:function(e){var a;t((a=e.email,function(e){e(f(!0)),y(a).then((function(t){e({type:"forgotPassword/EMAIL-SET-SUCCESSFUL",value:!0})})).catch((function(t){e(I(t.response.data.error))})).finally((function(){return e(f(!1))}))}))}});return r?n.a.createElement(l.a,{to:"/recovery"}):n.a.createElement("div",{className:xe.a.forgotPassword},a&&n.a.createElement(H,null),n.a.createElement(K,{title:"Forgot Password Form"}),n.a.createElement(L.a,{container:!0,justify:"center",alignItems:"center",className:e.container},n.a.createElement(L.a,{item:!0,className:e.grid},n.a.createElement(U.a,{elevation:3,style:{padding:"30px"}},n.a.createElement("form",{className:xe.a.form,onSubmit:o.handleSubmit},n.a.createElement(k.a,{className:e.formControl},n.a.createElement(D.a,{className:e.formGroup},n.a.createElement("div",{className:xe.a.inputBox},n.a.createElement(W.a,Object.assign({className:e.textField,label:"Write your email",variant:"outlined",error:!!o.errors.email||void 0},o.getFieldProps("email"))),o.errors.email&&n.a.createElement("div",{className:xe.a.error},o.errors.email)),n.a.createElement(Z.a,{type:"submit",disabled:!(o.isValid&&o.dirty),variant:"contained",color:"primary",className:e.button},"Send"),n.a.createElement(s.b,{to:"/login",style:{textDecoration:"none",width:"100%"}},n.a.createElement(Z.a,{style:{width:"100%"},color:"secondary",variant:"contained"},"Login")))))))),n.a.createElement(te,null))},je=function(){return n.a.createElement(s.a,null,n.a.createElement(c.a,{store:C},n.a.createElement("div",{className:"App"},n.a.createElement(l.b,{exact:!0,path:"/",render:function(){return n.a.createElement(de,null)}}),n.a.createElement(l.b,{path:"/registration",render:function(){return n.a.createElement(re,null)}}),n.a.createElement(l.b,{path:"/login",render:function(){return n.a.createElement(be,null)}}),n.a.createElement(l.b,{path:"/forgotPassword",render:function(){return n.a.createElement(Oe,null)}}),n.a.createElement(l.b,{path:"/recovery",render:function(){return n.a.createElement(ye,null)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(je,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},40:function(e,t,a){e.exports={registrationForm:"RegistrationForm_registrationForm___mcIv",inputBox:"RegistrationForm_inputBox__1KGpA",error:"RegistrationForm_error__2bM7-"}},41:function(e,t,a){e.exports={recoveryPassword:"RecoveryPassword_recoveryPassword__QCnqF",inputBox:"RecoveryPassword_inputBox__3h1TK",error:"RecoveryPassword_error__1A7ZL"}},53:function(e,t,a){e.exports={forgotPassword:"ForgotPassword_forgotPassword__3kUX3",inputBox:"ForgotPassword_inputBox__tYNiZ",error:"ForgotPassword_error__1KoeN"}},60:function(e,t,a){e.exports={profileContent:"Profile_profileContent__12fFa",btn:"Profile_btn__1bBM3",loading:"Profile_loading__3GbAF"}},83:function(e,t,a){e.exports={title:"Title_title__1RTB2"}},87:function(e,t,a){e.exports={container:"container_container__1jjuF"}},88:function(e,t,a){e.exports=a.p+"static/media/spinner.cceb1073.svg"},99:function(e,t,a){e.exports=a(128)}},[[99,1,2]]]);
//# sourceMappingURL=main.8153155f.chunk.js.map