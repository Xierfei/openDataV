import"./index-448c4cac.js";import{c as v,S as w,D as N}from"./DynamicExtendContent-288d9c83.js";import{d as m,v as D,T as S,x as b,R,o as g,c as k,b as o,w as r,u as l,b5 as O,N as T,W as _,D as I,b2 as E,E as P,aZ as x,F as U,b6 as C,l as A,b7 as B,b8 as J,b9 as M,ba as c}from"./index-10d63009.js";const u="QUICK";class Q{id;title;constructor({id:t}){this.id=t}toJSON(){return{options:{id:this.id||"",title:this.title},type:"STATIC"}}static dumps(t,s=!1){return s?JSON.stringify(t,null,"	"):JSON.stringify(t)}static loads(t){return JSON.parse(t)}async connect(t,s){const a=await this.getRespData(s);t(a)}async getRespData(t){const s={status:"SUCCESS",data:""};if(!this.id)return s;try{const a=await v(this.id);if(a.status<400){const d=a.data;this.title=d.name,s.data=d.data}}catch(a){s.status="FAILED",s.data=a.stack||a.message}return s}}const f=Q,$=m({__name:"Pane",props:{slotter:{}},setup(p){const t=p,s=D(!1),a=S({id:"",title:"",data:""});b(async()=>{await d()});const d=async()=>{const i=t.slotter.dataConfig;if(i&&i.type===u){const e=t.slotter.dataConfig?.dataInstance,{options:n}=e.toJSON();a.id=n.id,a.title=n.title}else{const e={type:u,dataInstance:new f({id:a.id})};await t.slotter.changeDataConfig(e)}},y=()=>{const i={type:u,dataInstance:new f({id:a.id})};t.slotter.changeDataConfig(i)},h=(i,e)=>{a.id=i,a.title=e,y()};return R(()=>t.slotter,async()=>{t.slotter&&await d()},{immediate:!0}),(i,e)=>(g(),k(U,null,[o(l(E),{key:"title",label:"快速数据"},{default:r(()=>[o(l(O),null,{default:r(()=>[o(l(T),{value:a.title,"onUpdate:value":e[0]||(e[0]=n=>a.title=n),readonly:!0,placeholder:"编辑请点击",onClick:e[1]||(e[1]=n=>s.value=!0)},null,8,["value"]),o(l(_),{type:"primary",onClick:e[2]||(e[2]=n=>s.value=!0)},{default:r(()=>[I(" 编辑 ")]),_:1})]),_:1})]),_:1}),o(l(x),{show:s.value,"onUpdate:show":e[5]||(e[5]=n=>s.value=n),"display-directive":"show"},{default:r(()=>[o(l(P),{style:{width:"800px"},title:"快速数据",bordered:!1,size:"small",role:"dialog","aria-modal":"true",closable:"",onClose:e[4]||(e[4]=n=>s.value=!1)},{default:r(()=>[o(w,{options:a,"onUpdate:options":e[3]||(e[3]=n=>a=n),mode:"use",onDataChange:h},null,8,["options"])]),_:1})]),_:1},8,["show"])],64))}}),V={type:u,name:"快速数据",component:C($),handler:f,useTo:"COMPONENT"},q=m({__name:"Pane",props:{slotter:{}},setup(p){return(t,s)=>(g(),A(l(B),{slotter:t.slotter},{default:r(()=>[o(N)]),_:1},8,["slotter"]))}}),H={type:"REST",name:"动态数据",component:C(q),handler:J,useTo:["COMPONENT","GLOBAL"],getdefaultOption:()=>({method:M.GET,url:"/getRiskArea",headers:[{key:"",value:"",disable:!1,id:c()}],params:[{key:"",value:"",disable:!1,id:c()}],data:[{key:"",value:"",disable:!1,id:c()}],otherConfig:{isRepeat:!1,interval:1e3}})};export{V as Q,H as R};
