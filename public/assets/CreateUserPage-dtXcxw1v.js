import{r as n,o as $,e as y,f as w,l as o,k as v,g as s,v as I,a4 as E,m as b,t as N,F as B,C as M,_ as S,d as q}from"./index-OHFFj_LP.js";import{A as D,_,a as P,F as z}from"./DataPicker-cbPy5vyR.js";import{F as A}from"./FormTitle-IVPLuddD.js";import{I as d}from"./Input-5xpNUKFf.js";import{B as j}from"./ButtonSubmit-2VMfWnKi.js";import{U as p}from"./UserService-EP3R9ON8.js";import{u}from"./ToastStore-saIhIEjP.js";import{_ as O}from"./Modal-TFsZK21Z.js";const G={class:"flex flex-col w-full my-5"},R={class:"flex flex-col gap-5 md:flex-row"},H={class:"flex flex-col gap-5 mt-5 md:flex-row"},J={class:"flex flex-col gap-5 mt-5 md:flex-row"},K={class:"flex flex-col gap-5 mt-5 md:flex-row"},Q={class:"flex flex-col md:flex-row md:items-end gap-3 lg:w-2/4"},W={class:"flex flex-row mb-2 gap-2"},X=s("label",{class:"text-pink text-sm"},"Set NIF as password",-1),Y={class:"flex flex-col gap-5 mt-5 md:flex-row"},Z={class:"flex flex-col gap-5 mt-5 md:flex-row md:mt-5"},ee={class:"flex"},le={class:"font-bold"},ae={__name:"CreateUserForm",setup(C){const i=n(!1),c=n([]),f=n([]),V=n([]),m=n(!1),x=()=>{t.value.name!=""&&t.value.email!=""&&t.value.password!=""&&t.value.internalcode!=""&&a.value.birthday_date!=""&&a.value.nif!=""?i.value=!0:u().triggerToast("Preencha os campos obrigatórios marcados com *","error")},U=()=>{i.value=!1},t=n({name:"",email:"",password:"",internalcode:"",role:""}),a=n({user_id:"",gender:"",avatar:"",class:"",nif:"",phone_number:"",birthday_date:"",address:"",city:"",district:"",postal_code:"",country:""});$(async()=>{await T()});const T=async()=>{try{c.value=(await p.getRoles()).data,f.value=(await p.getGenders()).data,V.value=(await p.getCountries()).data}catch(r){console.error("Error:",r.response)}},h=r=>{a.value.avatar=r},L=()=>{m.value?t.value.password=a.value.nif:t.password=""},F=async()=>{i.value=!1,m.value&&(t.value.password=a.value.nif.toString()),p.createUser(t.value).then(r=>{if(r.success)a.value.user_id=r.data,p.createUserInfo(a.value).then(e=>{if(e.success)u().triggerToast(`Utilizador ${t.value.name}, criado com sucesso!`,"success"),M.push({name:"userDetails",params:{userId:a.value.user_id}});else{const l=e.message;Object.keys(l).forEach(k=>{u().triggerToast(` ${l[k][0]}`,"error")})}}).catch(e=>{u().triggerToast("Erro ao tentar criar utilizador","error")});else{const e=r.message;Object.keys(e).forEach(l=>{u().triggerToast(` ${e[l][0]}`,"error")})}}).catch(r=>{u().triggerToast("Erro ao tentar criar utilizador","error")})},g=r=>{const e=Object.keys(r)[0];a[e]=r[e]};return(r,e)=>(y(),w(B,null,[o(z,{onFormSubmit:x},{AvatarCard:v(()=>[o(D,{onAvatar:h})]),Form:v(()=>[o(A,{Title:"Criar User"}),s("div",G,[s("div",R,[o(d,{LabelTitle:"Nome Completo: *",type:"name",required:"",modelValue:t.value.name,"onUpdate:modelValue":e[0]||(e[0]=l=>t.value.name=l)},null,8,["modelValue"]),o(d,{LabelTitle:"Email: *",type:"email",required:"",modelValue:t.value.email,"onUpdate:modelValue":e[1]||(e[1]=l=>t.value.email=l)},null,8,["modelValue"])]),s("div",H,[o(d,{LabelTitle:"Codigo Interno: *",type:"text",required:"",modelValue:t.value.internalcode,"onUpdate:modelValue":e[2]||(e[2]=l=>t.value.internalcode=l)},null,8,["modelValue"]),o(d,{LabelTitle:"Turma:",type:"text",modelValue:a.value.class,"onUpdate:modelValue":e[3]||(e[3]=l=>a.value.class=l)},null,8,["modelValue"]),o(d,{LabelTitle:"Palavra-Passe: *",type:"password",required:"",modelValue:t.value.password,"onUpdate:modelValue":e[4]||(e[4]=l=>t.value.password=l)},null,8,["modelValue"])]),s("div",J,[o(_,{LabelTitle:"Role:",options:c.value,modelValue:t.value.role,"onUpdate:modelValue":[e[5]||(e[5]=l=>t.value.role=l),g]},null,8,["options","modelValue"]),o(_,{LabelTitle:"Gênero:",options:f.value,modelValue:a.value.gender,"onUpdate:modelValue":[e[6]||(e[6]=l=>a.value.gender=l),g]},null,8,["options","modelValue"]),o(P,{LabelTitle:"Data de Nascimento: *",required:"",modelValue:a.value.birthday_date,"onUpdate:modelValue":e[7]||(e[7]=l=>a.value.birthday_date=l)},null,8,["modelValue"])]),s("div",K,[s("div",Q,[o(d,{LabelTitle:"NIF: *",type:"number",required:"",modelValue:a.value.nif,"onUpdate:modelValue":e[8]||(e[8]=l=>a.value.nif=l)},null,8,["modelValue"]),s("div",W,[X,I(s("input",{type:"checkbox","onUpdate:modelValue":e[9]||(e[9]=l=>m.value=l),onChange:L,class:"size-6"},null,544),[[E,m.value]])])]),o(d,{LabelTitle:"Número de telefone:",type:"text",modelValue:a.value.phone_number,"onUpdate:modelValue":e[10]||(e[10]=l=>a.value.phone_number=l)},null,8,["modelValue"])]),s("div",Y,[o(d,{LabelTitle:"Morada:",type:"address",modelValue:a.value.address,"onUpdate:modelValue":e[11]||(e[11]=l=>a.value.address=l)},null,8,["modelValue"]),o(d,{LabelTitle:"Código Postal:",type:"text",modelValue:a.value.postal_code,"onUpdate:modelValue":e[12]||(e[12]=l=>a.value.postal_code=l)},null,8,["modelValue"])]),s("div",Z,[o(d,{LabelTitle:"Localidade:",type:"text",modelValue:a.value.district,"onUpdate:modelValue":e[13]||(e[13]=l=>a.value.district=l)},null,8,["modelValue"]),o(d,{LabelTitle:"Cidade:",type:"text",modelValue:a.value.city,"onUpdate:modelValue":e[14]||(e[14]=l=>a.value.city=l)},null,8,["modelValue"]),o(_,{LabelTitle:"País",options:V.value,modelValue:a.value.country,"onUpdate:modelValue":[e[15]||(e[15]=l=>a.value.country=l),g]},null,8,["options","modelValue"])])]),o(j,{textButton:"Criar User",type:"submit"})]),_:1}),o(O,{show:i.value,onCancel:U,onConfirm:F},{title:v(()=>[b(" Criar utilizador? ")]),content:v(()=>[s("p",ee,[b("Esta prestes a criar  "),s("div",le,N(t.value.name),1),b(", pretende prosseguir?")])]),_:1},8,["show"])],64))}},oe={components:{CreateUserForm:ae}},te={class:"flex flex-col w-full xl:items-center"};function se(C,i,c,f,V,m){const x=q("CreateUserForm");return y(),w("div",te,[o(x)])}const ce=S(oe,[["render",se]]);export{ce as default};
