import{_ as a,c as l,d,e as n,t as i,b as c,j as t,w as r}from"./index-Wf_wPvl6.js";const f={props:{btnName:{type:String,required:!0},btnDescription:{type:String,required:!0}}},x={class:"flex flex-col w-full items-center shadow-sm bg-white py-2.5 rounded-md md:items-start"},g={class:"flex flex-col px-5 md:items-start md:pl-3 md:pr-0"},y={class:"text-primary text-lg bold lg:text-xl"},h={class:"text-primary text-xs mt-2 md:text-start xl:text-sm"};function w(p,m,e,u,_,b){return l(),d("button",x,[n("div",g,[n("h1",y,i(e.btnName),1),n("h3",h,i(e.btnDescription),1)])])}const S=a(f,[["render",w]]),D={components:{OptionButton:S}},N={class:"flex flex-col gap-5 w-full md:w-[40%] bg-grey p-10 md:px-5 border-b border-b-opacity-50 md:border-r md:border-r-opacity-50 md:border-t md:border-t-opacity-100"};function $(p,m,e,u,_,b){const s=c("OptionButton"),o=c("router-link");return l(),d("div",N,[t(o,{to:"/Settings/Account",class:"w-full"},{default:r(()=>[t(s,{btnName:"Account Settings",btnDescription:"Details about your personal settings"})]),_:1}),t(o,{to:"/Settings/Notifications",class:"w-full"},{default:r(()=>[t(s,{btnName:"Notifications",btnDescription:"Details about your notifications system"})]),_:1}),t(o,{to:"/Settings/Security",class:"w-full"},{default:r(()=>[t(s,{btnName:"Password & Security",btnDescription:"Details about your password settings"})]),_:1})])}const k=a(D,[["render",$]]);export{k as S};