import{A as t,e as c,f as a,g as r,n,_ as i}from"./index-sLfY9VFm.js";const f={getTickets:async()=>await t.makeRequest("get","/tickets"),getTicket:async e=>t.makeRequest("get",`tickets/${e}`),createTicket:async e=>t.makeRequest("post","tickets",e,"multipart/form-data"),updateTicket:async e=>t.makeRequest("put",`tickets/${id}`,e),deleteTicket:async e=>t.makeRequest("delete",`tickets/${e}`),getComments:async e=>t.makeRequest("get",`tickets/${e}/comments`),getCategories:async()=>t.makeRequest("get","categories"),getPriorities:async()=>t.makeRequest("get","priorities"),getStatus:async()=>t.makeRequest("get","status"),getMyTickets:async e=>t.makeRequest("get",`tickets/user/${e}`),assignTechnician:async(e,s)=>t.makeRequest("put",`tickets/${e}/assign/${s}`),getStatuses:async()=>t.makeRequest("get","status"),updateStatus:async(e,s)=>t.makeRequest("put",`tickets/${e}/status/${s}`),closeTicket:async e=>t.makeRequest("put",`tickets/${e}/close`),reopenTicket:async e=>t.makeRequest("put",`tickets/${e}/reopen`)},o={class:"hidden lg:flex flex-col xl:w-[20%]"},u={class:"bg-grey flex flex-col flex-grow border-r-black border-r border-solid"},x={__name:"SideSection",props:{ticket:Object},setup(e){return(s,m)=>(c(),a("div",o,[r("div",u,[n(s.$slots,"default")])]))}},l={},k={class:"justify-center flex flex-col px-5 h-[9vh] border-b-black border-b border-solid"},d={class:"justify-between flex flex-col xl:flex-row gap-4 xl:gap-5"},p={class:"text-purple text-2xl"};function g(e,s){return c(),a("div",k,[r("span",d,[r("div",p,[n(e.$slots,"default")])])])}const y=i(l,[["render",g]]);export{y as S,f as T,x as _};
