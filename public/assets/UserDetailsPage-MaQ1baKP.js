import{H as o,r as t,o as a,f as c,l,e as n}from"./index-OHFFj_LP.js";import{U as i}from"./UserService-EP3R9ON8.js";import{_ as m}from"./ShowUserForm-fkCypMeV.js";import"./DataPicker-cbPy5vyR.js";import"./FormTitle-IVPLuddD.js";import"./Input-5xpNUKFf.js";import"./ButtonSubmit-2VMfWnKi.js";import"./Modal-TFsZK21Z.js";import"./ToastStore-saIhIEjP.js";const u={class:"flex flex-col w-full xl:items-center"},B={__name:"UserDetailsPage",setup(p){const s=o(),r=t({});return a(async()=>{try{const e=await i.getUser(s.params.userId);e.success?(r.value=e.data,console.log("User Data:",r)):console.error("Invalid response structure:",e)}catch(e){console.error("Error fetching tickets:",e)}}),(e,f)=>(n(),c("div",u,[l(m,{myuser:r.value,isDisabled:!1},null,8,["myuser"])]))}};export{B as default};