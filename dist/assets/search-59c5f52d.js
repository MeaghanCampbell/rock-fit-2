import{r as u,o as v,a as o,c as l,b as c,u as e,d as a,e as p,w as g,v as b,i as y,F as x,f as k}from"./index-10a74f20.js";import{_ as w}from"./workout-preview-e9e4df76.js";import{s as f,_ as C,u as M,d as $,c as N,t as V,l as B,a as j,o as z}from"./workout-modal-a726561a.js";import{c as F,_ as L}from"./check-login-e058ec6a.js";import{a as O}from"./axios-4a70c6fc.js";let n=u(!1),d=u({}),i=u(""),_=function(){n&&(n.value=!1),O.get("http://localhost:5001/api/workouts").then(r=>{const m=r.data;d.value=m.filter(s=>s.user_name===i.value),d.value.length===0&&(n.value=!0)}).catch(r=>{console.log(r)})};const S={class:"bg-black min-h-screen max-h-screen overflow-scroll background-shadow pb-28"},U={key:0,class:"relative z-10","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},W=a("div",{class:"fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"},null,-1),A={class:"fixed inset-0 z-10 overflow-y-auto"},D={class:"text-white max-w-md mx-auto px-4 py-8"},E={class:"space-y-6 mt-6"},I=["onClick"],R={key:0,class:"text-red-500 text-sm text-center"},P={__name:"search",setup(r){return v(()=>{F()}),(m,s)=>(o(),l("main",S,[c(L),e(f)?(o(),l("div",U,[W,a("div",A,[a("div",{onClick:s[0]||(s[0]=t=>f.value=!1),class:"flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0"},[c(C,{user_name:e(M),date:e($),category:e(N),time:e(V),level:e(B),description:e(j)},null,8,["user_name","date","category","time","level","description"])])])])):p("",!0),a("section",D,[g(a("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>y(i)?i.value=t:null),class:"w-full rounded-lg bg-black green-border px-2 py-1 focus:outline-none",placeholder:"Search a username",type:"text"},null,512),[[b,e(i)]]),a("button",{onClick:s[2]||(s[2]=(...t)=>e(_)&&e(_)(...t)),class:"btn transition rounded-lg text-black p-2 font-semibold mt-4 w-full",type:"button"},"Search"),a("div",E,[(o(!0),l(x,null,k(e(d),(t,h)=>(o(),l("button",{onClick:T=>e(z)(t),class:"w-full border border-white rounded-lg mt-4",key:h},[c(w,{id:t._id,user_name:t.user_name,date:t.date,category:t.category,time:t.time,level:t.level},null,8,["id","user_name","date","category","time","level"])],8,I))),128)),e(n)?(o(),l("p",R,"Oops! It looks like there are no workouts for this user. Check the spelling or search another user.")):p("",!0)])])]))}};export{P as default};