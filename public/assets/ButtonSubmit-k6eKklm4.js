import{_ as o,c as n,d as l,t as i,e as r}from"./index-Wf_wPvl6.js";const p={props:{FormTitle:{type:String,required:!0}}},_={class:"text-purple text-2xl font-bold max-md:max-w-full"};function x(s,e,t,u,a,c){return n(),l("h1",_,i(t.FormTitle),1)}const q=o(p,[["render",x]]),f={props:{LabelTitle:{type:String,required:!0},modelValue:{type:String,required:!0},type:{type:String,required:!0}}},m={class:"flex grow basis-[0%] flex-col"},b={class:"text-pink text-xs mb-2 pl-2"},$=["value","type"];function y(s,e,t,u,a,c){return n(),l("div",m,[r("label",b,i(t.LabelTitle)+"*",1),r("input",{value:t.modelValue,onInput:e[0]||(e[0]=d=>s.$emit("update:modelValue",d.target.value)),type:t.type,class:"bg-white text-purple text-base text-wrap border border-solid border-purple pl-2.5 py-1.5 rounded-lg"},null,40,$)])}const T=o(f,[["render",y]]),g={props:{textButton:{type:String,required:!0}}},h={class:"flex justify-center"},w={class:"flex items-center w-full xl:w-5/12"},B={type:"submit",class:"text-white text-center text-lg w-full font-bold justify-center items-center bg-purple py-3 rounded-md"};function S(s,e,t,u,a,c){return n(),l("div",h,[r("div",w,[r("button",B,i(t.textButton),1)])])}const F=o(g,[["render",S]]);export{F as B,q as F,T as I};