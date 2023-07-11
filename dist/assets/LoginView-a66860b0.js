import{r,a as c,c as p,d as t,w as l,v as i,g as f,k as d,m as g}from"./index-83832da2.js";import{a as h}from"./axios-4a70c6fc.js";const _={class:"bg-black h-screen flex items-center justify-center background-shadow"},x={class:"text-center m-6 text-white space-y-8 w-screen max-w-md"},b=t("h1",{class:"text-5xl tracking-wider font-semibold"},[d("ROCK"),t("span",{class:"font-light italic"},"fit")],-1),v=t("p",{class:"text-gray-200 tracking-wide"},"Track your training | Learn from others",-1),k={class:"flex flex-col text-lg"},w=t("p",{id:"form-error",class:"text-red-500 text-sm mt-6 hidden"},null,-1),y=t("div",null,[d("Not a Member? "),t("a",{href:"/signup",class:"font-bold green"},"Sign Up!")],-1),L={__name:"login",setup(u){const n=r(""),a=r(""),m=()=>{const s=document.getElementById("form-error");s.classList.add("hidden"),h.post("https://murmuring-chamber-41078-cebcac015bc4.herokuapp.com/api/users/login",{email:n.value,password:a.value}).then(e=>{if(e.status===200){const o=e.data.accessToken;localStorage.setItem("token",o),document.location.replace("/")}else s.classList.remove("hidden"),s.innerHTML="System error - please try again in a minute"}).catch(e=>{e.response.status===400?(s.classList.remove("hidden"),s.innerHTML="All fields are required"):e.response.status===401&&(s.classList.remove("hidden"),s.innerHTML="Please enter a valid email and password")})};return(s,e)=>(c(),p("section",_,[t("div",x,[b,v,t("div",null,[t("form",k,[l(t("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>n.value=o),class:"w-full rounded-lg bg-black green-border px-2 py-1 focus:outline-none",placeholder:"email",type:"email"},null,512),[[i,n.value]]),l(t("input",{"onUpdate:modelValue":e[1]||(e[1]=o=>a.value=o),class:"w-full rounded-lg bg-black green-border px-2 py-1 focus:outline-none mt-3",placeholder:"password",type:"password"},null,512),[[i,a.value]]),w,t("button",{onClick:e[2]||(e[2]=f(o=>m(),["prevent"])),class:"btn mt-6 transition rounded-lg text-black p-2 font-semibold",type:"button"},"Login")])]),y])]))}},B={__name:"LoginView",setup(u){return(n,a)=>(c(),g(L))}};export{B as default};
