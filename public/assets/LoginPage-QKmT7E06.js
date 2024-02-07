import{r,c,d,e,h as f,l as p,n as i,B as n,k as _,Q as g,s as x,j as b}from"./index-Wf_wPvl6.js";import{_ as h}from"./logo-NSY5cdEY.js";const v={class:"h-screen w-screen"},w={class:"flex flex-col items-center md:justify-center px-6 py-20 mx-auto h-screen lg:py-0 md:max-w-screen-md"},y={class:"w-full rounded-lg shadow flex flex-col items-center"},k=e("img",{class:"mt-10 w-48 mr-2 object-contain",src:h},null,-1),V={class:"w-full p-6 space-y-4 md:space-y-6 sm:p-8"},$=e("h1",{class:"text-xl font-bold leading-tight tracking-tight"}," Sign in to your account ",-1),R={class:"space-y-4 md:space-y-6",action:"#"},S={for:"email",class:"block mb-2 text-sm font-medium"},j=e("label",{for:"password",class:"block mb-2 text-sm font-medium"},"Password",-1),B=_('<div class="flex items-center justify-between"><div class="flex items-start"><div class="flex items-center h-5"><input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3" required=""></div><div class="ml-3 text-sm"><label for="remember" class="text-gray-500">Remember me</label></div></div><a href="#" class="text-sm font-medium hover:underline">Forgot password?</a></div>',1),D={__name:"Login",setup(u){const s=r(null),l=r(null),m=async a=>{if(a.preventDefault(),!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(s.value)){alert("Email inválido");return}(await g.login(s.value,l.value)).success&&x.push({name:"home"}).then()};return(a,t)=>(c(),d("div",v,[e("section",null,[e("div",w,[e("div",y,[k,e("div",V,[$,e("form",R,[e("div",null,[e("label",S,[f("Your Email"),p(a.$slots,"default")]),i(e("input",{type:"email","onUpdate:modelValue":t[0]||(t[0]=o=>s.value=o),name:"email",id:"email",class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:border-2 block w-full p-2.5",placeholder:"email@cesaedigital.com",required:""},null,512),[[n,s.value]])]),e("div",null,[j,i(e("input",{type:"password","onUpdate:modelValue":t[1]||(t[1]=o=>l.value=o),name:"password",id:"password",class:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-2 focus:border-2 block w-full p-2.5",placeholder:"••••••••",required:""},null,512),[[n,l.value]])]),B,e("button",{onClick:m,type:"submit",class:"w-full bg-purple text-white focus:ring-4 focus:outline-none focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5 text-center"},"Sign in")])])])])])]))}},N={class:"h-screen w-screen"},q={class:"flex items-center flex-col h-[90%] w-full"},E={class:"flex flex-col items-center"},P={__name:"LoginPage",setup(u){return(s,l)=>(c(),d("div",N,[e("div",q,[e("div",E,[b(D)])])]))}};export{P as default};
