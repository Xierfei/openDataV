import{i as y}from"./LogoView-b067190b.js";import{d as h,e as p,I as g,o as t,c as s,b as u,w as _,u as l,W as C,a as i,C as k,bD as T,l as b,X as I,s as N,F as v,ae as S,f as m,r as w,_ as D}from"./index-10d63009.js";const B=h({__name:"ToolBarItem",props:{label:{},action:{},disable:{type:Function,default:()=>!1},icon:{},divider:{type:Boolean},children:{},otherShow:{},isButton:{type:Boolean,default:!0}},setup(r){const a=r,c=S().appContext.components.XIcon,o=p(()=>y(a.icon)?g(c,{name:a.icon,size:24}):a.icon());return(n,e)=>(t(),s(v,null,[u(l(T),null,{trigger:_(()=>[u(l(C),{quaternary:"",size:"small",title:n.label,onClick:n.action},{default:_(()=>[u(l(o))]),_:1},8,["title","onClick"])]),default:_(()=>[i("span",null,k(n.label),1)]),_:1}),n.divider?(t(),b(l(I),{key:0,vertical:""})):N("",!0)],64))}}),F={class:"tool-bar"},V={class:"tool-bar-item"},X={class:"tool-bar-middle"},x={class:"tool-bar-item"},z=h({__name:"ToolBar",props:{bars:{default:()=>[]}},setup(r){const a=r,f=p(()=>a.bars.filter(o=>o.location==="left"||o.location===void 0)),c=p(()=>a.bars.filter(o=>o.location==="right"));return(o,n)=>(t(),s("div",F,[i("div",V,[(t(!0),s(v,null,m(f.value,(e,d)=>(t(),b(B,{key:d,action:e.action,label:e.label,divider:e.divider,icon:e.icon},null,8,["action","label","divider","icon"]))),128))]),i("div",X,[w(o.$slots,"default",{},void 0,!0)]),i("div",x,[(t(!0),s(v,null,m(c.value,(e,d)=>(t(),b(B,{key:d,action:e.action,label:e.label,divider:e.divider,icon:e.icon},null,8,["action","label","divider","icon"]))),128))])]))}});const E=D(z,[["__scopeId","data-v-23b8e24a"]]);export{E as T};
