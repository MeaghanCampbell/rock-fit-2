import{o,c as s,a as t,t as w,b as O,F as v,w as x,d as T,r as f,e as S,u as _,f as h,g as u,h as M,i as y,v as k,n as E}from"./index-c16e7e5d.js";import{a as A}from"./axios-4a70c6fc.js";const H={class:"px-4 py-2 bg-white rounded-t-md"},I={class:"flex justify-between text-black"},N={class:"font-semibold"},F={class:"italic"},R={class:"px-4 py-6 rounded-b-lg workout-preview transition"},G={class:"flex justify-center space-x-5 font-semibold"},Y=t("span",null,"|",-1),q={class:"font-light italic"},P=t("span",null,"|",-1),D={__name:"workout-preview",props:["user_name","date","category","time","level"],setup(p){const e=p;return(n,c)=>(o(),s(v,null,[t("div",H,[t("div",I,[t("p",N,w(e.user_name),1),t("p",F,w(e.date),1)])]),t("div",R,[t("div",G,[t("p",null,w(e.category),1),O(),Y,t("p",q,w(e.time)+" minutes",1),O(),P,t("p",null,w(e.level),1)])])],64))}},$=(p,e)=>{const n=p.__vccOpts||p;for(const[c,r]of e)n[c]=r;return n},J={},K=T('<div class="px-4 py-2 bg-white rounded-t-md"><div class="flex justify-between text-black"><p class="font-semibold">Username</p><p class="italic">Date</p></div></div><div class="px-4 py-6 rounded-b-lg text-white"><div class="text-center space-y-5"><p><span class="font-bold">Category: </span><span>category</span></p><p><span class="font-bold">Time: </span><span>time</span></p><p><span class="font-bold">Difficulty: </span><span>difficulty</span></p><p class="flex flex-col items-center"><span class="font-bold">Description</span><span>description</span></p></div></div><button class="btn w-full rounded-b-lg font-semibold tracking-wide py-2 transition"> Save Users Session </button>',3),Q=[K];function X(p,e){return o(),s("div",{onClick:e[0]||(e[0]=x(()=>{},["stop"])),class:"bg-black w-full border border-white rounded-lg relative transform overflow-hidden text-left shadow-xl transition-all sm:w-full sm:max-w-sm"},Q)}const Z=$(J,[["render",X]]),tt={key:0,class:"relative z-10","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},et=t("div",{class:"fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"},null,-1),ot={class:"fixed inset-0 z-10 overflow-y-auto"},st={class:"text-white max-w-md mx-auto px-5 py-8"},nt={key:0,class:"w-full border border-white rounded-lg",disabled:""},lt={__name:"home",setup(p){let e=f({}),n=f(!1);function c(){n.value=!n.value}return S(()=>{A.get("http://localhost:5001/api/workouts").then(r=>{const i=r.data,d={};for(let m=0;m<i.length;m++){const g=i[m];d["workoutObject"+m]=g}e.value=d}).catch(r=>{console.log(r)})}),(r,i)=>(o(),s(v,null,[_(n)?(o(),s("div",tt,[et,t("div",ot,[t("div",{onClick:c,class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},[h(Z)])])])):u("",!0),t("section",st,[Object.keys(_(e)).length===0?(o(),s("button",nt,"Loading...")):(o(!0),s(v,{key:1},M(_(e),(d,m)=>(o(),s("button",{onClick:c,class:"w-full border border-white rounded-lg mt-4",key:m},[h(D,{user_name:d.user_name,date:d.date,category:d.category,time:d.time,level:d.level},null,8,["user_name","date","category","time","level"])]))),128))])],64))}},it={},at={class:"text-white max-w-md mx-auto px-4 py-8"},ct=t("input",{class:"w-full rounded-lg bg-black green-border px-2 py-1 focus:outline-none",placeholder:"Search a username",type:"text"},null,-1),rt=t("div",{class:"space-y-6 mt-6"}," components here ",-1),dt=[ct,rt];function pt(p,e){return o(),s("section",at,dt)}const ut=$(it,[["render",pt]]),ft={},mt={class:"text-white max-w-md mx-auto px-4 py-8"},ht=t("div",{class:"space-y-6"}," components here ",-1),bt=[ht];function _t(p,e){return o(),s("section",mt,bt)}const vt=$(ft,[["render",_t]]),xt={},gt=T('<div class="px-4 py-2 bg-white rounded-t-md"><div class="flex justify-between text-black"><p class="font-semibold">Username</p><p class="italic">Date</p></div></div><div class="px-4 py-6 rounded-b-lg text-white"><div class="text-center space-y-5"><p><span class="font-bold">Category: </span><span>category</span></p><p><span class="font-bold">Time: </span><span>time</span></p><p><span class="font-bold">Difficulty: </span><span>difficulty</span></p><p class="flex flex-col items-center"><span class="font-bold">Description</span><span>description</span></p></div></div><button class="btn w-full font-semibold tracking-wide py-2 transition"> Update Workout </button><button class="bg-red-500 w-full rounded-b-lg font-semibold tracking-wide py-2 transition"> Delete Workout </button>',4),wt=[gt];function yt(p,e){return o(),s("div",{onClick:e[0]||(e[0]=x(()=>{},["stop"])),class:"bg-black w-full border border-white rounded-lg relative transform overflow-hidden text-left shadow-xl transition-all sm:w-full sm:max-w-sm"},wt)}const kt=$(xt,[["render",yt]]),$t={},Ct=T('<div class="px-4 py-6 rounded-b-lg text-white"><div class="text-center space-y-5"><div class="flex flex-col items-center"><label for="location" class="block font-bold text-white leading-6">Boulder Grade</label><select id="location" name="location" class="mt-2 block w-full rounded-md border-0 py-1.5 pl-2 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"><option selected>v1</option><option>v2</option><option>v3</option><option>v4</option><option>v5</option><option>v6</option><option>v7</option><option>v8</option><option>v9</option><option>v10</option><option>v11</option><option>v12</option><option>v13</option><option>v14</option><option>v15</option></select></div><div class="flex flex-col items-center"><label for="location" class="block font-bold text-white leading-6">Route Grade</label><select id="location" name="location" class="mt-2 block w-full rounded-md border-0 py-1.5 pl-2 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"><option selected>5.7</option><option>5.8</option><option>5.9</option><option>5.10a</option><option>5.10b</option><option>5.10c</option><option>5.10d</option><option>5.11a</option><option>5.11b</option><option>5.11c</option><option>5.11d</option><option>5.12a</option><option>5.12b</option><option>5.12c</option><option>5.12d</option><option>5.13a</option><option>5.13b</option><option>5.13c</option><option>5.13d</option><option>5.14a</option><option>5.14b</option><option>5.14c</option><option>5.14d</option><option>5.15a</option></select></div></div></div><button class="btn w-full rounded-b-lg font-semibold tracking-wide py-2 transition"> Save </button>',2),Lt=[Ct];function jt(p,e){return o(),s("form",{onClick:e[0]||(e[0]=x(()=>{},["stop"])),class:"bg-black w-full border border-white rounded-lg relative transform overflow-hidden text-left shadow-xl transition-all sm:w-full sm:max-w-sm"},Lt)}const At=$($t,[["render",jt]]),Tt={key:0,class:"relative z-10","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},Mt=t("div",{class:"fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"},null,-1),zt={class:"fixed inset-0 z-10 overflow-y-auto"},Vt={key:1,class:"relative z-10","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},Bt=t("div",{class:"fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"},null,-1),Ot={class:"fixed inset-0 z-10 overflow-y-auto"},St={class:"px-4 py-6 rounded-b-lg text-white"},Dt={class:"text-center space-y-5"},Ut={class:"flex flex-col items-center text-black"},Wt=t("label",{for:"location",class:"block font-bold text-white leading-6"},"Date",-1),Et={class:"flex flex-col items-center text-black"},Ht=t("label",{for:"location",class:"block font-bold text-white leading-6"},"Category",-1),It={class:"flex flex-col items-center text-black"},Nt=t("label",{for:"location",class:"block font-bold text-white leading-6"},"Time",-1),Ft={class:"flex flex-col items-center text-black"},Rt=t("label",{for:"location",class:"block font-bold text-white leading-6"},"Level",-1),Gt={class:"flex flex-col items-center pb-4"},Yt=t("span",{class:"font-bold"},"Description",-1),qt=["onClick"],Pt={key:2,class:"relative z-10","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},Jt=t("div",{class:"fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity"},null,-1),Kt={class:"fixed inset-0 z-10 overflow-y-auto"},Qt={class:"text-white max-w-md mx-auto px-4 py-8 space-y-8"},Xt=t("div",null,[t("h2",{class:"text-center text-2xl tracking-wider font-semibold border-b border-white pb-2 mb-6"},"Your Benchmarks"),t("div",{class:"flex items-center justify-center space-x-10"},[t("div",{class:"benchmark-gradient w-24 h-24 rounded-full flex items-center justify-center text-3xl font-semibold"},"v4"),t("div",{class:"benchmark-gradient w-24 h-24 rounded-full flex items-center justify-center text-3xl font-semibold"},"5.12a")])],-1),Zt=t("h2",{class:"text-center text-2xl tracking-wider font-semibold border-b border-white pb-2 mb-6"},"Your Sessions",-1),te={key:0,class:"w-full border border-white rounded-lg",disabled:""},ee={__name:"profile",setup(p){let e=f({}),n=f(!1),c=f(!1),r=f(!1);const i=f(""),d=f(""),m=f(""),g=f(""),L=f("");function z(){n.value=!n.value}function V(){c.value=!c.value}function B(){r.value=!r.value}S(()=>{const j=localStorage.getItem("token");A.get("http://localhost:5001/api/users/current",{headers:{Authorization:`Bearer ${j}`}}).then(a=>{const l=a.data.workouts,b={};for(let C=0;C<l.length;C++){const W=l[C];b["userWorkoutObject"+C]=W}e.value=b}).catch(a=>{console.log(a)})});function U(){const a={headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}},l={date:i._rawValue,category:d._rawValue,time:parseInt(m._rawValue),level:g._rawValue,description:L._rawValue};A.post("http://localhost:5001/api/workouts",l,a).then(b=>{console.log(b)}).catch(b=>{console.log(b)})}return(j,a)=>(o(),s(v,null,[_(n)?(o(),s("div",Tt,[Mt,t("div",zt,[t("div",{onClick:z,class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},[h(kt)])])])):u("",!0),_(c)?(o(),s("div",Vt,[Bt,t("div",Ot,[t("div",{onClick:V,class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},[t("form",{onClick:a[5]||(a[5]=x(()=>{},["stop"])),class:"bg-black w-full border border-white rounded-lg relative transform overflow-hidden text-left shadow-xl transition-all sm:w-full sm:max-w-sm"},[t("div",St,[t("div",Dt,[t("div",Ut,[Wt,y(t("input",{class:"w-full rounded-md px-2 py-1",type:"text","onUpdate:modelValue":a[0]||(a[0]=l=>i.value=l)},null,512),[[k,i.value]])]),t("div",Et,[Ht,y(t("input",{class:"w-full rounded-md px-2 py-1",type:"text","onUpdate:modelValue":a[1]||(a[1]=l=>d.value=l)},null,512),[[k,d.value]])]),t("div",It,[Nt,y(t("input",{class:"w-full rounded-md px-2 py-1",type:"text","onUpdate:modelValue":a[2]||(a[2]=l=>m.value=l)},null,512),[[k,m.value]])]),t("div",Ft,[Rt,y(t("input",{class:"w-full rounded-md px-2 py-1",type:"text","onUpdate:modelValue":a[3]||(a[3]=l=>g.value=l)},null,512),[[k,g.value]])]),t("p",Gt,[Yt,y(t("textarea",{"onUpdate:modelValue":a[4]||(a[4]=l=>L.value=l),rows:"5",cols:"60",name:"text",placeholder:"Enter text",class:"rounded-lg p-2 text-black",style:{"max-width":"21em"}},null,512),[[k,L.value]])])])]),t("button",{onClick:x(U,["prevent"]),class:"btn w-full rounded-b-lg font-semibold tracking-wide py-2 transition"}," Save ",8,qt)])])])])):u("",!0),_(r)?(o(),s("div",Pt,[Jt,t("div",Kt,[t("div",{onClick:B,class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},[h(At)])])])):u("",!0),t("section",Qt,[t("div",{class:"flex space-x-2"},[t("button",{onClick:V,class:"btn transition rounded-lg text-black p-2 font-semibold w-1/2",type:"button"},"Add Workout"),t("button",{onClick:B,class:"btn transition rounded-lg text-black p-2 font-semibold w-1/2",type:"button"},"Add Benchmark")]),Xt,t("div",null,[Zt,Object.keys(_(e)).length===0?(o(),s("button",te,"Loading...")):(o(!0),s(v,{key:1},M(_(e),(l,b)=>(o(),s("button",{onClick:z,class:"w-full border border-white rounded-lg mt-4",key:b},[h(D,{user_name:l.user_name,date:l.date,category:l.category,time:l.time,level:l.level},null,8,["user_name","date","category","time","level"])]))),128))])])],64))}},oe={class:"bg-black min-h-screen max-h-screen overflow-scroll background-shadow"},se={class:"nav-gradient fixed bottom-0 w-full"},ne={class:"text-white flex justify-center max-w-md mx-auto"},le=["id","href","onClick","innerHTML"],ie={key:0},ae={key:0},ce={key:1},re={key:0},de={key:2},pe={key:0},ue={key:3},fe={key:0},be={__name:"HomeView",setup(p){const e=function(c){let r="";c.id?r=c.id:r=c.target.value,Object.keys(this.tabs).forEach(i=>{i===r?this.tabs[i].active=!0:this.tabs[i].active=!1}),window.location.hash=c.href},n={homeTab:{id:"homeTab",name:"HOME",href:"#home",svg:'<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="40px" height="40px">    <path d="M 12 2 A 1 1 0 0 0 11.289062 2.296875 L 1.203125 11.097656 A 0.5 0.5 0 0 0 1 11.5 A 0.5 0.5 0 0 0 1.5 12 L 4 12 L 4 20 C 4 20.552 4.448 21 5 21 L 9 21 C 9.552 21 10 20.552 10 20 L 10 14 L 14 14 L 14 20 C 14 20.552 14.448 21 15 21 L 19 21 C 19.552 21 20 20.552 20 20 L 20 12 L 22.5 12 A 0.5 0.5 0 0 0 23 11.5 A 0.5 0.5 0 0 0 22.796875 11.097656 L 12.716797 2.3027344 A 1 1 0 0 0 12.710938 2.296875 A 1 1 0 0 0 12 2 z"/></svg>',active:!0},searchTab:{id:"searchTab",name:"SEARCH",href:"#search",svg:'<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="40px" height="40px">    <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 19.585938 21.585938 C 20.137937 22.137937 21.033938 22.137938 21.585938 21.585938 C 22.137938 21.033938 22.137938 20.137938 21.585938 19.585938 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"/></svg>',active:!1},savedTab:{id:"savedTab",name:"SAVED",href:"#saved",svg:'<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="40px" height="40px">    <path d="M 6 2 C 5.861875 2 5.7278809 2.0143848 5.5976562 2.0410156 C 4.686084 2.2274316 4 3.033125 4 4 L 4 22 L 12 19 L 20 22 L 20 4 C 20 3.8625 19.985742 3.7275391 19.958984 3.5976562 C 19.799199 2.8163086 19.183691 2.2008008 18.402344 2.0410156 C 18.272119 2.0143848 18.138125 2 18 2 L 6 2 z"/></svg>',active:!1},profileTab:{id:"profileTab",name:"PROFILE",href:"#profile",svg:'<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="40px" height="40px">    <path d="M 12 3 A 4 4 0 0 0 8 7 A 4 4 0 0 0 12 11 A 4 4 0 0 0 16 7 A 4 4 0 0 0 12 3 z M 12 14 C 8.996 14 3 15.508 3 18.5 L 3 20 C 3 20.552 3.448 21 4 21 L 20 21 C 20.552 21 21 20.552 21 20 L 21 18.5 C 21 15.508 15.004 14 12 14 z"/></svg>',active:!1}};return(c,r)=>(o(),s("main",oe,[t("section",se,[t("div",ne,[(o(),s(v,null,M(n,i=>t("a",{id:i.id,key:i.name,href:i.href,onClick:x(d=>e(i),["prevent"]),innerHTML:i.svg,class:E([i.active?"shadow-inner light-green-bg":"","py-6 px-8"])},null,10,le)),64))])]),n.homeTab?(o(),s("div",ie,[n.homeTab.active?(o(),s("div",ae,[h(lt)])):u("",!0)])):u("",!0),n.searchTab?(o(),s("div",ce,[n.searchTab.active?(o(),s("div",re,[h(ut)])):u("",!0)])):u("",!0),n.savedTab?(o(),s("div",de,[n.savedTab.active?(o(),s("div",pe,[h(vt)])):u("",!0)])):u("",!0),n.profileTab?(o(),s("div",ue,[n.profileTab.active?(o(),s("div",fe,[h(ee)])):u("",!0)])):u("",!0)]))}};export{be as default};