import{S as B}from"./SettingsBar-ndYFme59.js";import{_ as y,e as c,f as d,n as j,t as m,r as f,p as V,v as A,g as t,q as R,o as b,j as w,w as h,l as n,F as $,i as C,A as _,d as S}from"./index-sLfY9VFm.js";import{F as k,I as T}from"./Input-Fd5B68kP.js";import{S as v}from"./StatusesService-zM_cYs_L.js";const N={},D={class:"bg-grey rounded-md p-5"};function U(e,l){return c(),d("div",D,[j(e.$slots,"default")])}const L=y(N,[["render",U]]),F={props:{SubTitle:{type:String,required:!0}}},G={class:"text-purple text-xl font-bold max-md:max-w-full"};function I(e,l,i,s,o,u){return c(),d("h1",G,m(i.SubTitle),1)}const x=y(F,[["render",I]]),M={props:{buttonText:String,color:String},setup(e,l){const i=f("#25183E"),s=()=>{l.emit("update:buttonText",i.value),o()},o=()=>{v.createStatus({name:e.buttonText,color:i.value})};return{color:i,changeColor:s,createStatus:o}}},P={class:"flex justify-center space-x-2 items-end max-w-fit"};function z(e,l,i,s,o,u){return c(),d("div",P,[V(t("input",{"onUpdate:modelValue":l[0]||(l[0]=r=>s.color=r),id:"nativeColorPicker1",type:"color",value:"#25183E",class:"align-items-center justify-center w-8 h-8"},null,512),[[A,s.color]]),t("button",{type:"submit",class:"inline-block rounded-xl px-6 py-2.5 text-xs font-medium uppercase text-white shadow-md",style:R({backgroundColor:s.color}),onClick:l[1]||(l[1]=(...r)=>s.changeColor&&s.changeColor(...r))},m(i.buttonText?i.buttonText:"Guardar"),5)])}const H=y(M,[["render",z]]),J=t("div",{class:"bg-blue w-full h-px rounded my-3"},null,-1),K={class:"flex flex-col mt-3"},O={class:"mt-5 w-full flex flex-row gap-5 justify-between px-10"},Q={class:"w-2/5"},W={class:"flex"},X=t("hr",{class:"my-5"},null,-1),Y={class:"flex flex-col mt-3"},Z={class:"mt-5 w-full flex flex-row gap-5 justify-between px-10"},tt={class:"w-full"},et={class:"flex justify-between my-2"},st={class:"flex w-full text-sm"},ot={class:"flex w-full text-sm"},lt={class:"flex gap-2.5"},at={__name:"StatusCfg",setup(e){const l=f(""),i=f([]),s=f(null);b(async()=>{await o()});const o=async()=>{try{i.value=(await v.getStatuses()).data}catch(a){console.error("Error:",a.response)}},u=a=>{l.value=a},r=async()=>{try{console.log(s),await v.deleteStatus(s),o()}catch(a){console.error("Error:",a.response)}};return(a,p)=>(c(),w(L,null,{default:h(()=>[n(k,{Title:"Configuração de Estados"}),J,t("div",K,[n(x,{SubTitle:"Criar Estado",class:"pl-5"}),t("div",O,[t("div",Q,[n(T,{LabelTitle:"Titulo do Estado",type:"text",required:"",modelValue:l.value,"onUpdate:modelValue":p[0]||(p[0]=g=>l.value=g)},null,8,["modelValue"])]),t("div",W,[n(H,{buttonText:l.value,color:a.color,"onUpdate:buttonText":u},null,8,["buttonText","color"])])])]),X,t("div",Y,[n(x,{SubTitle:"Estados",class:"pl-5"}),t("div",Z,[t("div",tt,[(c(!0),d($,null,C(i.value,g=>(c(),d("li",{key:g.id,class:"list-none"},[t("div",et,[t("div",st,m(g.name),1),t("div",ot,m(g.color),1),t("div",lt,[t("button",{class:"text-xs bg-green-400 rounded-lg px-2 py-1.5",onClick:p[1]||(p[1]=(...q)=>a.editStatus&&a.editStatus(...q))},"Editar"),t("button",{class:"text-xs bg-red-400 rounded-lg px-2 py-1.5",onClick:r},"Apagar")])])]))),128))])])])]),_:1}))}},E={getCategories:async()=>await _.makeRequest("get","/categories"),createCategory:async e=>await _.makeRequest("post","/categories",e),updateCategory:async e=>_.makeRequest("put",`/categories/${e.id}`,e),deleteCategory:async e=>await _.makeRequest("delete",`/categories/${e}`)},nt=t("div",{class:"bg-blue w-full h-px rounded my-3"},null,-1),it={class:"mt-5 w-full flex flex-row gap-5 justify-between px-10"},rt={class:"w-2/5"},ct={class:"flex"},ut=t("hr",{class:"my-5"},null,-1),dt={class:"flex flex-col mt-3"},pt={class:"mt-5 w-full flex flex-row gap-5 justify-between px-10"},_t={class:"w-full"},ft={class:"flex justify-between my-2"},mt={class:"flex w-full text-sm"},xt={class:"flex w-full text-sm"},gt={class:"flex gap-2.5"},yt={__name:"CategoryCfg",setup(e){const l=f([]);f(null),b(async()=>{await i()});const i=async()=>{try{l.value=(await E.getCategories()).data}catch(o){console.error("Error:",o.response)}},s=()=>{E.createCategory({name:category.value})};return(o,u)=>{const r=S("ButtonSubmit");return c(),w(L,null,{default:h(()=>[n(k,{Title:"Configuração de Categorias"}),nt,n(x,{SubTitle:"Nova Categoria",class:"pl-5"}),t("div",it,[t("div",rt,[n(T,{LabelTitle:"Nova Categoria",type:"text",required:"",modelValue:o.catName,"onUpdate:modelValue":u[0]||(u[0]=a=>o.catName=a)},null,8,["modelValue"])]),t("div",ct,[n(r,{textButton:"Guardar",type:"submit",onClick:s,class:"mx-10"})])]),ut,t("div",dt,[n(x,{SubTitle:"Editar Categoria",class:"pl-5"}),t("div",pt,[t("div",_t,[(c(!0),d($,null,C(l.value,a=>(c(),d("li",{key:a.id,class:"list-none"},[t("div",ft,[t("div",mt,m(a.id),1),t("div",xt,m(a.name),1),t("div",gt,[t("button",{class:"text-xs bg-green-400 rounded-lg px-2 py-1.5",onClick:u[1]||(u[1]=(...p)=>o.editStatus&&o.editStatus(...p))},"Editar"),t("button",{class:"text-xs bg-red-400 rounded-lg px-2 py-1.5",onClick:u[2]||(u[2]=(...p)=>o.deleteStatus&&o.deleteStatus(...p))},"Apagar")])])]))),128))])])])]),_:1})}}},vt={getLocations:async()=>await _.makeRequest("get","/locations"),createLocation:async e=>await _.makeRequest("post","/locations",e),updateLocation:async e=>_.makeRequest("put",`/locations/${e.id}`,e),deleteLocation:async e=>await _.makeRequest("delete",`/locations/${e}`)},bt=t("div",{class:"bg-blue w-full h-px rounded my-3"},null,-1),wt={class:"mt-5 w-full flex flex-row gap-5 justify-between px-10"},ht={class:"w-2/5"},$t={class:"flex"},Ct=t("hr",{class:"my-5"},null,-1),St={class:"flex flex-col mt-3"},kt={class:"mt-5 w-full flex flex-row gap-5 justify-between px-10"},Tt={class:"w-full"},Lt={class:"flex justify-between my-2"},Et={class:"flex w-full text-sm"},qt={class:"flex w-full text-sm"},Bt={class:"flex gap-2.5"},jt={__name:"LocationCfg",setup(e){const l=f([]);f(null),b(async()=>{await i()});const i=async()=>{try{l.value=(await vt.getLocations()).data}catch(s){console.error("Error:",s.response)}};return(s,o)=>{const u=S("ButtonSubmit");return c(),w(L,{class:"mt-5"},{default:h(()=>[n(k,{Title:"Configuração de Localidades"}),bt,n(x,{SubTitle:"Nova Localidade",class:"pl-5"}),t("div",wt,[t("div",ht,[n(T,{LabelTitle:"Localidades",type:"text",required:"",modelValue:s.loc,"onUpdate:modelValue":o[0]||(o[0]=r=>s.loc=r)},null,8,["modelValue"])]),t("div",$t,[n(u,{textButton:"Guardar",type:"submit",onClick:s.createLocation,class:"mx-10"},null,8,["onClick"])])]),Ct,t("div",St,[n(x,{SubTitle:"Editar Localidade",class:"pl-5"}),t("div",kt,[t("div",Tt,[(c(!0),d($,null,C(l.value,r=>(c(),d("li",{key:r.id,class:"list-none"},[t("div",Lt,[t("div",Et,m(r.id),1),t("div",qt,m(r.name),1),t("div",Bt,[t("button",{type:"submit",onClick:o[1]||(o[1]=(...a)=>s.editLocation&&s.editLocation(...a)),class:"text-xs bg-green-400 rounded-lg px-2 py-1.5"},"Editar"),t("button",{type:"submit",onClick:o[2]||(o[2]=(...a)=>s.editLocation&&s.editLocation(...a)),class:"text-xs bg-red-400 rounded-lg px-2 py-1.5"},"Apagar")])])]))),128))])])])]),_:1})}}},Vt={__name:"ConfigureApp",setup(e){return(l,i)=>(c(),d("div",null,[n(at,{class:"mt-5"}),n(yt,{class:"mt-5"}),n(jt,{class:"mt-5"})]))}},At={components:{SettingsBar:B,ConfigureApp:Vt}},Rt={class:"md:flex w-full h-full"},Nt={class:"flex flex-col w-[75%] p-8"},Dt={class:"overflow-y-auto"};function Ut(e,l,i,s,o,u){const r=S("ConfigureApp");return c(),d("div",Rt,[t("div",Nt,[t("div",Dt,[n(r)])])])}const Pt=y(At,[["render",Ut]]);export{Pt as default};
