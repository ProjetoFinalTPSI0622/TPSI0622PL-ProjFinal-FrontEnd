import{I as a,c,d,e as t,l as r,i as m}from"./index-Wf_wPvl6.js";function u(){const s=a();return{triggerToast:(e,o)=>{s[o](e,{position:"top-right",timeout:3e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!0,draggablePercent:.6,showCloseButtonOnHover:!0,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1})}}}const h={key:0,class:"relative z-10","aria-labelledby":"modal-title",role:"dialog","aria-modal":"true"},g=t("div",{class:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"},null,-1),f={class:"fixed inset-0 z-10 w-screen overflow-y-auto"},x={class:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"},p={class:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"},_={class:"bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"},v={class:"sm:flex sm:items-start"},w=t("div",{class:"mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"},[t("svg",{class:"h-6 w-6 text-red-600",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"})])],-1),b={class:"mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"},y={class:"text-base font-semibold leading-6 text-gray-900",id:"modal-title"},C={class:"mt-2"},k={class:"text-sm text-gray-500"},z={__name:"Modal",props:{show:Boolean},emits:["Confirm","Cancel"],setup(s,{emit:n}){const e=n;u();const o=()=>{e("Confirm")},l=()=>{e("Cancel")};return(i,B)=>s.show?(c(),d("div",h,[g,t("div",f,[t("div",x,[t("div",p,[t("div",_,[t("div",v,[w,t("div",b,[t("h3",y,[r(i.$slots,"title")]),t("div",C,[t("p",k,[r(i.$slots,"content")])])])])]),t("div",{class:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"},[t("button",{onClick:o,type:"button",class:"inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hoverGreen sm:ml-3 sm:w-auto"},"Confirm"),t("button",{onClick:l,type:"button",class:"inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hoverRed sm:mt-0 sm:w-auto"},"Cancel")])])])])])):m("",!0)}};export{z as _,u};