import{_ as r,e as o,f as i,g as l,t as d}from"./index-OHFFj_LP.js";const n={props:{LabelTitle:{type:String,required:!0},modelValue:{type:String,required:!0},type:{type:String,required:!0},isDisabled:{type:Boolean,default:!1}}},p={class:"flex grow basis-[0%] flex-col"},u={class:"text-pink text-xs mb-2 pl-2"},c=["disabled","value","type"];function b(a,t,e,_,x,f){return o(),i("div",p,[l("label",u,d(e.LabelTitle),1),l("input",{disabled:e.isDisabled,value:e.modelValue,onInput:t[0]||(t[0]=s=>a.$emit("update:modelValue",s.target.value)),type:e.type,maxlength:"60",class:"bg-white text-purple text-base text-wrap border border-solid border-purple pl-2.5 py-1.5 rounded-lg"},null,40,c)])}const m=r(n,[["render",b]]);export{m as I};
