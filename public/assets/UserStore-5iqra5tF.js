import{O as r}from"./index-OHFFj_LP.js";import{U as s}from"./UserService-EP3R9ON8.js";const a=r({id:"authedUser",state:()=>({currentUser:null,userRole:"",isLoading:!0}),actions:{async fetchAuthedUser(){try{const e=await s.getAuthedUser();e.success?(this.currentUser=e.data,this.userRole=e.data.roles[0].name):console.error("Invalid response structure:",e)}catch(e){console.error("Error fetching user:",e)}finally{this.isLoading=!1}}}});export{a as u};
