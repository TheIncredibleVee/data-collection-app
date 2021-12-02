(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[0],{101:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),i=a(19),o=a(26),s=a(73),u=a(81),m=Object(o.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL":return t.payload;case"CREATE":return[].concat(Object(u.a)(e),[t.payload]);case"UPDATE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"DELETE":return e.filter((function(e){return e._id!==t.payload}));default:return e}}}),p=a(33),d=a(6),g=a(11),f=a.n(g),E=a(20),y=a(12),b=(a(101),a(51)),v=a.n(b),h=a(54),O=a.n(h),j=a(16),x=a.n(j),C=function(e,t){switch(t.type){case"LOGIN":return t.payload;case"LOGOUT":return{name:"",email:"",token:""};default:return e}},N={email:"null",name:"null",token:"null"},w=Object(n.createContext)(N),k=function(e){var t=e.children,a=Object(n.useReducer)(C,N),c=Object(y.a)(a,2),l=c[0],i=c[1];return r.a.createElement(w.Provider,{value:{user:l,signInUser:function(e){i({type:"SIGN_IN",payload:e})},signOutUser:function(){i({type:"SIGN_OUT"})},dispatch:i}},t)},I=function(){var e=Object(n.useContext)(w),t=e.user,a=e.dispatch,c=Object(d.f)();Object(n.useEffect)((function(){"null"!==t.email&&c("/user")}),[t,c]);var l=Object(n.useState)(""),i=Object(y.a)(l,2),o=i[0],s=i[1],u=Object(n.useState)(""),m=Object(y.a)(u,2),p=m[0],g=m[1],b=function(){var e=Object(E.a)(f.a.mark((function e(t){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(o,p),e.prev=2,e.next=5,x.a.post("http://localhost:5000/user/login",{email:o,password:p});case 5:n=e.sent,console.log(n),200===n.status?(alert("Login Successful"),r={email:n.data.email,name:n.data.name,token:n.data.token},console.log(r),a({type:"LOGIN",payload:r})):202===n.status?alert("Wrong Password"):alert("User not found"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:return e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"LoginSignUpContainer"},r.a.createElement("div",{className:"LoginSignUpBox"},r.a.createElement("div",null,r.a.createElement("div",{className:"login_signUp_toggle"},r.a.createElement("p",null,"LOGIN")),r.a.createElement("button",null)),r.a.createElement("div",{className:"loginForm"},r.a.createElement("div",{className:"loginEmail"},r.a.createElement(v.a,null),r.a.createElement("input",{type:"email",placeholder:"Email",required:!0,onChange:function(e){return s(e.target.value)}})),r.a.createElement("div",{className:"loginPassword"},r.a.createElement(O.a,null),r.a.createElement("input",{type:"password",placeholder:"Password",required:!0,onChange:function(e){return g(e.target.value)}})),r.a.createElement("button",{className:"loginBtn",onClick:b},"Login"))))},L=a(167),S=a(168),P=a(158),D=a(170),A=a(163),T=a(162),B=a(156),F=a(157),U=a(159),_=a(160),R=a(161),W=a(79),G=a.n(W),M=a(78),z=a.n(M),q=a(77),H=a.n(q),V="http://localhost:5000/posts",J=function(e){return x.a.post(V,{email:e})},K=function(e,t){return x.a.patch("".concat(V,"/").concat(e),t)},Q=function(e){return x.a.delete("".concat(V,"/").concat(e))},X=function(e){return function(){var t=Object(E.a)(f.a.mark((function t(a){var n,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,x.a.post("".concat(V,"/create"),c);case 3:n=t.sent,r=n.data,a({type:"CREATE",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},Y=function(e,t){return function(){var a=Object(E.a)(f.a.mark((function a(n){var r,c;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,K(e,t);case 3:r=a.sent,c=r.data,n({type:"UPDATE",payload:c}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0.message);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},Z=a(155),$=Object(Z.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),ee=function(e){var t=e.post,a=e.setCurrentId,n=Object(i.b)(),c=$();return r.a.createElement(B.a,{className:c.card},r.a.createElement(F.a,{className:c.media,image:t.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:t.title}),r.a.createElement("div",{className:c.overlay},r.a.createElement(P.a,{variant:"h6"},t.creator),r.a.createElement(P.a,{variant:"body2"},H()(t.createdAt).fromNow())),r.a.createElement("div",{className:c.overlay2},r.a.createElement(U.a,{style:{color:"white"},size:"small",onClick:function(){return a(t._id)}},r.a.createElement(z.a,{fontSize:"default"}))),r.a.createElement("div",{className:c.details},r.a.createElement(P.a,{variant:"body2",color:"textSecondary",component:"h2"},t.additionalNotes)),r.a.createElement(P.a,{className:c.title,gutterBottom:!0,variant:"h5",component:"h2"},t.title),r.a.createElement(_.a,null,r.a.createElement(P.a,{variant:"body2",color:"textSecondary",component:"p"},t.description)),r.a.createElement(R.a,{className:c.cardActions},r.a.createElement(U.a,{size:"small",color:"primary",onClick:function(){return n((e=t._id,function(){var t=Object(E.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Q(e);case 3:a({type:"DELETE",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(G.a,{fontSize:"small"})," Delete")))},te=Object(Z.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),ae=function(e){var t=e.setCurrentId,a=Object(i.c)((function(e){return e.posts})),n=te();return a.length?r.a.createElement(A.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3},a.map((function(e){return r.a.createElement(A.a,{key:e._id,item:!0,xs:12,sm:6,md:6},r.a.createElement(ee,{post:e,setCurrentId:t}))}))):r.a.createElement(T.a,null)},ne=a(13),re=a(83),ce=a(171),le=a(166),ie=a(173),oe=a(169),se=a(174),ue=a(80),me=a.n(ue),pe=[{type:"Curricular Content"},{type:"Feedback and Corrective Action"}],de=[{type:"Student Enrolment and Profile"},{type:"Faculty Profile"},{type:"Teaching \u2013 Learning Process"},{type:"Students Performance and Learning Outcomes"}],ge=[{type:"Promotion of Research & Facilities"},{type:"Resource Mobilization for Research"},{type:"Innovation Eco system"},{type:"Research Publication and Awards"},{type:"Consultancy"},{type:"Extension Activities"},{type:"Collaboration"}],fe=[{type:"Physical Facilities"},{type:"Library as a learning resource"},{type:"IT infrastructure "},{type:"Expenditure on Physical Infrastructure augmentation"}],Ee=[{type:"Student support "},{type:"Student progression"},{type:"Student Participation and Activities"}],ye=[{type:"Department Vision and Leadership"},{type:"Strategy development and deployment"},{type:"Faculty Empowerment Strategies"}],be=[{type:"Department values & social responsibility"}],ve=[{type:"Curricular Aspects"},{type:"Teaching Learning and Evaluation"},{type:"Research, Innovation and Extension"},{type:"Infrastructure and Learning Resources"},{type:"Student Support and Progression"},{type:"Governance, Leadership and Management"},{type:"Institutional Values and Best Practices"}],he=Object(Z.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),Oe=function(e){var t=e.currentId,a=e.setCurrentId,c=Object(n.useContext)(w).user;console.log(c);var l=Object(n.useState)({name:c.name,title:"",description:"",additionalNotes:"",selectedFile:"",mainCategory:"",subCategory:"",email:c.email}),o=Object(y.a)(l,2),s=o[0],u=o[1],m=Object(i.c)((function(e){return t?e.posts.find((function(e){return e._id===t})):null})),p=Object(i.b)(),d=he();Object(n.useEffect)((function(){m&&(u(m),console.log(m))}),[m,s]);var g=function(){a(0),u({name:c.name,title:"",description:"",additionalNotes:"",selectedFile:"",mainCategory:"",subCategory:"",email:c.email})},b=function(){var e=Object(E.a)(f.a.mark((function e(a){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),0===t?(p(X(s)),g()):(p(Y(t,s)),g());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v="Curricular Aspects"===s.mainCategory?pe:"Teaching Learning and Evaluation"===s.mainCategory?de:"Research, Innovation and Extension"===s.mainCategory?ge:"Infrastructure and Learning Resources"===s.mainCategory?fe:"Student Support and Progression"===s.mainCategory?Ee:"Governance, Leadership and Management"===s.mainCategory?ye:"Institutional Values and Best Practices"===s.mainCategory?be:[{type:"Select a main category"}];return r.a.createElement(re.a,{className:d.paper},r.a.createElement("form",{autoComplete:"off",noValidate:!0,className:"".concat(d.root," ").concat(d.form),onSubmit:b},r.a.createElement(P.a,{variant:"h6"},t?'Editing "'.concat(m.title,'"'):"Enter the data to be entered"),r.a.createElement(ce.a,{disabled:!0,name:"Name",variant:"outlined",label:"Name",fullWidth:!0,value:s.name,onChange:function(e){return u(Object(ne.a)(Object(ne.a)({},s),{},{name:e.target.value}))}}),r.a.createElement(ce.a,{disabled:!0,name:"Email",variant:"outlined",label:"Email",fullWidth:!0,value:s.email,onChange:function(e){return u(Object(ne.a)(Object(ne.a)({},s),{},{email:e.target.value}))}}),r.a.createElement(ce.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:s.title,onChange:function(e){return u(Object(ne.a)(Object(ne.a)({},s),{},{title:e.target.value}))}}),r.a.createElement(ce.a,{name:"description",variant:"outlined",label:"Description",fullWidth:!0,multiline:!0,rows:4,value:s.description,onChange:function(e){return u(Object(ne.a)(Object(ne.a)({},s),{},{description:e.target.value}))}}),r.a.createElement(ce.a,{name:"additionalNotes",variant:"outlined",label:"Additional Notes",fullWidth:!0,value:s.additionalNotes,onChange:function(e){return u(Object(ne.a)(Object(ne.a)({},s),{},{additionalNotes:e.target.value}))}}),r.a.createElement(le.a,{fullWidth:!0},r.a.createElement(ie.a,null,"Main Category"),r.a.createElement(oe.a,{value:s.mainCategory,onChange:function(e){return u(Object(ne.a)(Object(ne.a)({},s),{},{mainCategory:e.target.value}))}},ve.map((function(e){return r.a.createElement(se.a,{key:e.type,value:e.type},e.type)})))),r.a.createElement(le.a,{fullWidth:!0},r.a.createElement(ie.a,null,"Sub Category"),r.a.createElement(oe.a,{value:s.subCategory,onChange:function(e){return u(Object(ne.a)(Object(ne.a)({},s),{},{subCategory:e.target.value}))}},v.map((function(e){return r.a.createElement(se.a,{key:e.type,value:e.type},e.type)})))),r.a.createElement("div",{className:d.fileInput},r.a.createElement(me.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return u(Object(ne.a)(Object(ne.a)({},s),{},{selectedFile:t}))}})),r.a.createElement(U.a,{className:d.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0},"Submit"),r.a.createElement(U.a,{variant:"contained",color:"secondary",size:"small",onClick:g,fullWidth:!0},"Clear")))},je=a(56),xe=a.n(je),Ce=Object(Z.a)((function(){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"rgba(0,183,255, 1)"},image:{marginLeft:"15px"}}})),Ne=function(){var e=Object(d.f)(),t=Object(n.useContext)(w).user;Object(n.useEffect)((function(){"null"===t.email&&e("/")}),[t,e]);var a=Object(n.useState)(0),c=Object(y.a)(a,2),l=c[0],o=c[1],s=Object(i.b)(),u=Ce();function m(){return(m=Object(E.a)(f.a.mark((function e(){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J(t.email);case 3:a=e.sent,n=a.data,s({type:"FETCH_ALL",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){m.apply(this,arguments)}()}),[l,s]),r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{maxWidth:"lg"},r.a.createElement(S.a,{className:u.appBar,position:"static",color:"inherit"},r.a.createElement(P.a,{className:u.heading,variant:"h2",align:"center"},"Data Collection-DTU"),r.a.createElement("img",{className:u.image,src:xe.a,alt:"icon",height:"60"})),r.a.createElement(S.a,{className:u.appBar,position:"static",color:"inherit"},r.a.createElement(P.a,{style:{color:"Black"},className:u.heading,variant:"h5",align:"center"},"Logged In as ",r.a.createElement("b",{style:{color:"grey"}},t.name))),r.a.createElement(D.a,{in:!0},r.a.createElement(L.a,null,r.a.createElement(A.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3},r.a.createElement(A.a,{item:!0,xs:12,sm:7},r.a.createElement(ae,{setCurrentId:o})),r.a.createElement(A.a,{item:!0,xs:12,sm:4},r.a.createElement(Oe,{currentId:l,setCurrentId:o})))))))},we=Object(Z.a)((function(){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"#ff0000"},image:{marginLeft:"15px"}}})),ke=function(){var e=Object(d.f)(),t=Object(n.useContext)(w).user,a=Object(n.useState)(0),c=Object(y.a)(a,2),l=c[0],o=c[1],s=Object(i.b)(),u=we();return Object(n.useEffect)((function(){"null"===t.email&&e("/admin-login"),s(function(){var e=Object(E.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get(V);case 3:a=e.sent,n=a.data,t({type:"FETCH_ALL",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[l,s,t,e]),r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{maxWidth:"lg"},r.a.createElement(S.a,{className:u.appBar,position:"static",color:"inherit"},r.a.createElement(P.a,{className:u.heading,variant:"h2",align:"center"},"Data Collection- DTU"),r.a.createElement("img",{className:u.image,src:xe.a,alt:"icon",height:"60"})),r.a.createElement(S.a,{className:u.appBar,position:"static",color:"inherit"},r.a.createElement(P.a,{style:{color:"Black"},className:u.heading,variant:"h5",align:"center"},"Logged In as ",r.a.createElement("b",{style:{color:"grey"}},"Admin"))),r.a.createElement(D.a,{in:!0},r.a.createElement(L.a,null,r.a.createElement(A.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3},r.a.createElement(A.a,{item:!0,xs:12,sm:7},r.a.createElement(ae,{setCurrentId:o})),r.a.createElement(A.a,{item:!0,xs:12,sm:4},r.a.createElement(Oe,{currentId:l,setCurrentId:o})))))))},Ie=(a(121),function(){var e=Object(n.useContext)(w),t=e.user,a=e.dispatch,c=Object(d.f)();Object(n.useEffect)((function(){"null"!==t.email&&c("/admin")}),[t,c]);var l=Object(n.useState)(""),i=Object(y.a)(l,2),o=i[0],s=i[1],u=Object(n.useState)(""),m=Object(y.a)(u,2),p=m[0],g=m[1],b=function(){var e=Object(E.a)(f.a.mark((function e(t){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(o,p),e.prev=2,e.next=5,x.a.post("http://localhost:5000/admin/login",{email:o,password:p});case 5:n=e.sent,console.log(n),200===n.status?(alert("Login Successful"),r={email:n.data.email,name:n.data.name,token:n.data.token},console.log(r),a({type:"LOGIN",payload:r})):202===n.status?alert("Wrong Password"):alert("User not found"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:return e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"LoginSignUpContainer"},r.a.createElement("div",{className:"LoginSignUpBox"},r.a.createElement("div",null,r.a.createElement("div",{className:"login_signUp_toggle"},r.a.createElement("p",null,"ADMIN LOGIN")),r.a.createElement("button",{style:{backgroundColor:"black"}})),r.a.createElement("div",{className:"loginForm"},r.a.createElement("div",{className:"loginEmail"},r.a.createElement(v.a,null),r.a.createElement("input",{type:"email",placeholder:"Email",required:!0,onChange:function(e){return s(e.target.value)}})),r.a.createElement("div",{className:"loginPassword"},r.a.createElement(O.a,null),r.a.createElement("input",{type:"password",placeholder:"Password",required:!0,onChange:function(e){return g(e.target.value)}})),r.a.createElement("button",{style:{backgroundColor:"black"},className:"loginBtn",onClick:b},"Login"))))}),Le=function(){return r.a.createElement(p.a,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",element:r.a.createElement(I,null)}),r.a.createElement(d.a,{exact:!0,path:"/admin-login",element:r.a.createElement(Ie,null)}),r.a.createElement(d.a,{exact:!0,path:"/admin",element:r.a.createElement(ke,null)}),r.a.createElement(d.a,{exact:!0,path:"/user",element:r.a.createElement(Ne,null)})))},Se=(a(122),Object(o.e)(m,Object(o.d)(Object(o.a)(s.a))));l.a.render(r.a.createElement(k,null,r.a.createElement(i.a,{store:Se},r.a.createElement(Le,null))),document.getElementById("root"))},56:function(e,t,a){e.exports=a.p+"static/media/memories.411f1ccb.png"},90:function(e,t,a){e.exports=a(123)}},[[90,1,2]]]);
//# sourceMappingURL=main.d5530f5a.chunk.js.map