import{A as j,_ as y,a as q,F as M}from"./DataPicker-cbPy5vyR.js";import{F as w}from"./FormTitle-IVPLuddD.js";import{I as s}from"./Input-5xpNUKFf.js";import{B as O}from"./ButtonSubmit-2VMfWnKi.js";import{U as m}from"./UserService-EP3R9ON8.js";import{r as u,q as P,b as R,e as U,f as G,l as t,k as c,g as r,m as H,F as J}from"./index-OHFFj_LP.js";import{_ as K}from"./Modal-TFsZK21Z.js";import{u as n}from"./ToastStore-saIhIEjP.js";const Q={class:"flex flex-col w-full my-5"},W={class:"flex flex-col gap-5 md:flex-row"},X={class:"flex flex-col gap-5 mt-5 md:flex-row"},Y={class:"flex flex-col gap-5 mt-5 md:flex-row"},Z={class:"flex flex-col gap-5 mt-5 md:flex-row"},ee={class:"flex flex-col md:flex-row md:items-end gap-3 lg:w-2/4"},ae={class:"flex flex-col gap-5 mt-5 md:flex-row"},le={class:"flex flex-col gap-5 mt-5 md:flex-row md:mt-5"},oe=r("p",{class:"flex"},"Deseja prosseguir com a alteração dos dados?",-1),pe={__name:"ShowUserForm",props:{myuser:Object,isDisabled:Boolean},setup(p){const A=p,v=u(!1),V=u([]),g=u([]),x=u([]),_=u(null),d=u({id:"",name:"",email:"",internalcode:"",role:null}),o=u({user_id:"",avatar:"",class:"",nif:"",gender_id:"",phone_number:"",birthday_date:"",address:"",city:"",district:"",postal_code:"",country_id:""});P(()=>A.myuser,e=>{var a,l,i,f,h,L,C,D,F,E,k,z;if(e){let $=Array.isArray(e.roles)&&e.roles.length>0?e.roles[0]:{};d.value={id:e.id||"",name:e.name||"",email:e.email||"",internalcode:e.internalcode||"",role:$.id||""},o.value={user_id:((a=e.user_info)==null?void 0:a.user_id)||"",avatar:((l=e.user_info)==null?void 0:l.profile_picture_path)||"",class:((i=e.user_info)==null?void 0:i.class)||"",nif:(f=e.user_info)!=null&&f.nif?e.user_info.nif.toString():"",gender_id:(h=e.user_info)!=null&&h.gender_id?e.user_info.gender_id:"",phone_number:(L=e.user_info)!=null&&L.phone_number?e.user_info.phone_number.toString():"",birthday_date:((C=e.user_info)==null?void 0:C.birthday_date)||"",address:((D=e.user_info)==null?void 0:D.address)||"",city:((F=e.user_info)==null?void 0:F.city)||"",district:((E=e.user_info)==null?void 0:E.district)||"",postal_code:((k=e.user_info)==null?void 0:k.postal_code)||"",country_id:(z=e.user_info)!=null&&z.country_id?e.user_info.country_id:""}}},{deep:!0,immediate:!0}),R(async()=>{try{V.value=(await m.getRoles()).data,g.value=(await m.getGenders()).data,x.value=(await m.getCountries()).data}catch(e){console.error("Error:",e.response)}});const B=e=>{_.value=e,o.value.avatar=URL.createObjectURL(e)},b=e=>{const a=Object.keys(e)[0];o[a]=e[a]},T=()=>{d.value.name!=""&&d.value.email!=""&&d.value.password!=""&&d.value.internalcode!=""&&o.value.birthday_date!=""&&o.value.nif!=""?v.value=!0:n().triggerToast("Preencha os campos obrigatórios marcados com *","error")},I=async()=>{S()},N=()=>{v.value=!1},S=async()=>{v.value=!1;const e=new FormData;_.value&&e.append("file",_.value),e.append("user_id",o.value.user_id),e.append("name",d.value.name),e.append("class",o.value.class),e.append("nif",o.value.nif),e.append("birthday_date",o.value.birthday_date),e.append("gender_id",o.value.gender_id),e.append("phone_number",o.value.phone_number),e.append("address",o.value.address),e.append("postal_code",o.value.postal_code),e.append("city",o.value.city),e.append("district",o.value.district),e.append("country_id",o.value.country_id),e.append("_method","PUT"),m.updateUser(d.value).then(a=>{if(a.success)m.updateUserInfo(e).then(l=>{if(l.success)window.dispatchEvent(new Event("user-updated")),n().triggerToast(`Utilizador ${d.value.name} actualizado com sucesso!`,"success"),window.location.reload();else{const i=l.message;Object.keys(i).forEach(f=>{n().triggerToast(` ${i[f][0]}`,"error")})}}).catch(l=>{n().triggerToast("Erro ao tentar atualizar dados do utilizador 1","error")});else{const l=a.message;Object.keys(l).forEach(i=>{n().triggerToast(` ${l[i][0]}`,"error")})}}).catch(a=>{n().triggerToast("Erro ao tentar atualizar dados do utilizador 2","error")})};return(e,a)=>(U(),G(J,null,[t(M,{onFormSubmit:T},{AvatarCard:c(()=>[t(j,{onAvatar:B,modelValue:o.value.avatar,"onUpdate:modelValue":a[0]||(a[0]=l=>o.value.avatar=l),class:"m-5"},null,8,["modelValue"])]),Form:c(()=>[t(w,{Title:"Editar Perfil"}),r("div",Q,[r("div",W,[t(s,{LabelTitle:"Nome Completo: *",type:"name",required:"",modelValue:d.value.name,"onUpdate:modelValue":a[1]||(a[1]=l=>d.value.name=l)},null,8,["modelValue"]),t(s,{LabelTitle:"Email: *",type:"email",required:"",modelValue:d.value.email,"onUpdate:modelValue":a[2]||(a[2]=l=>d.value.email=l)},null,8,["modelValue"])]),r("div",X,[t(s,{LabelTitle:"Codigo Interno: *",type:"text",required:"",modelValue:d.value.internalcode,"onUpdate:modelValue":a[3]||(a[3]=l=>d.value.internalcode=l),isDisabled:p.isDisabled},null,8,["modelValue","isDisabled"]),t(s,{LabelTitle:"Turma:",type:"text",modelValue:o.value.class,"onUpdate:modelValue":a[4]||(a[4]=l=>o.value.class=l),isDisabled:p.isDisabled},null,8,["modelValue","isDisabled"])]),r("div",Y,[t(y,{LabelTitle:"Role:",isDisabled:p.isDisabled,options:V.value,modelValue:d.value.role,"onUpdate:modelValue":[a[5]||(a[5]=l=>d.value.role=l),b]},null,8,["isDisabled","options","modelValue"]),t(y,{LabelTitle:"Gênero:",options:g.value,modelValue:o.value.gender_id,"onUpdate:modelValue":[a[6]||(a[6]=l=>o.value.gender_id=l),b]},null,8,["options","modelValue"]),t(q,{LabelTitle:"Data de Nascimento: *",required:"",modelValue:o.value.birthday_date,"onUpdate:modelValue":a[7]||(a[7]=l=>o.value.birthday_date=l)},null,8,["modelValue"])]),r("div",Z,[r("div",ee,[t(s,{LabelTitle:"NIF: *",type:"text",required:"",modelValue:o.value.nif,"onUpdate:modelValue":a[8]||(a[8]=l=>o.value.nif=l)},null,8,["modelValue"])]),t(s,{LabelTitle:"Número de telefone:",type:"text",modelValue:o.value.phone_number,"onUpdate:modelValue":a[9]||(a[9]=l=>o.value.phone_number=l)},null,8,["modelValue"])]),r("div",ae,[t(s,{LabelTitle:"Morada:",type:"address",modelValue:o.value.address,"onUpdate:modelValue":a[10]||(a[10]=l=>o.value.address=l)},null,8,["modelValue"]),t(s,{LabelTitle:"Código Postal:",type:"text",modelValue:o.value.postal_code,"onUpdate:modelValue":a[11]||(a[11]=l=>o.value.postal_code=l)},null,8,["modelValue"])]),r("div",le,[t(s,{LabelTitle:"Localidade:",type:"text",modelValue:o.value.district,"onUpdate:modelValue":a[12]||(a[12]=l=>o.value.district=l)},null,8,["modelValue"]),t(s,{LabelTitle:"Cidade:",type:"text",modelValue:o.value.city,"onUpdate:modelValue":a[13]||(a[13]=l=>o.value.city=l)},null,8,["modelValue"]),t(y,{LabelTitle:"País:",options:x.value,modelValue:o.value.country_id,"onUpdate:modelValue":[a[14]||(a[14]=l=>o.value.country_id=l),b],class:"md:w-1/5 xl:w-2/5"},null,8,["options","modelValue"])])]),t(O,{onClick:a[15]||(a[15]=l=>T(d.value)),textButton:"Atualizar Informação",type:"button"})]),_:1}),t(K,{show:v.value,onCancel:N,onConfirm:I},{title:c(()=>[H(" Alterar dados de utilizador ")]),content:c(()=>[oe]),_:1},8,["show"])],64))}};export{pe as _};
