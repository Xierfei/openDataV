import{d as b,v as u,ba as $,y as m,B as g,o as c,c as d,a as t,u as a,bH as k,bI as y,_ as x}from"./index-10d63009.js";import{u as w}from"./index-76257893.js";const p=s=>(k("data-v-2403e872"),s=s(),y(),s),B={class:"dv-border-box-9"},I=["width","height"],C=["id"],N=p(()=>t("animate",{attributeName:"x1",values:"0%;100%;0%",dur:"10s",begin:"0s",repeatCount:"indefinite"},null,-1)),R=p(()=>t("animate",{attributeName:"x2",values:"100%;0%;100%",dur:"10s",begin:"0s",repeatCount:"indefinite"},null,-1)),L=["stop-color"],z=["values"],S=["stop-color"],D=["values"],H=["id"],V=["points"],E=["points"],G=["points"],P=["points"],j=["points"],q=["points"],A=["points"],F=["points"],J=["points"],K=["fill","points"],M=["width","height","fill","mask"],O=b({__name:"BorderBox",props:{component:{}},setup(s){const _=s,{propValue:o}=w(_.component),e=u(150),l=u(150),n=u(`border-box-9-gradient-${$()}`),v=u(`border-box-9-mask-${$()}`),f=r=>{const i=r.contentRect;e.value=i.width,l.value=i.height};return(r,i)=>{const h=m("resize");return g((c(),d("div",B,[(c(),d("svg",{class:"dv-border-svg-container",width:e.value,height:l.value},[t("defs",null,[t("linearGradient",{id:n.value,x1:"0%",y1:"0%",x2:"100%",y2:"100%"},[N,R,t("stop",{offset:"0%","stop-color":a(o).base.colorLeft},[t("animate",{attributeName:"stop-color",values:`${a(o).base.colorLeft};${a(o).base.colorRight};${a(o).base.colorLeft}`,dur:"10s",begin:"0s",repeatCount:"indefinite"},null,8,z)],8,L),t("stop",{offset:"100%","stop-color":a(o).base.colorRight},[t("animate",{attributeName:"stop-color",values:`${a(o).base.colorRight};${a(o).base.colorLeft};${a(o).base.colorRight}`,dur:"10s",begin:"0s",repeatCount:"indefinite"},null,8,D)],8,S)],8,C),t("mask",{id:v.value},[t("polyline",{stroke:"#fff","stroke-width":"3",fill:"transparent",points:`8, ${l.value*.4} 8, 3, ${e.value*.4+7}, 3`},null,8,V),t("polyline",{fill:"#fff",points:`8, ${l.value*.15} 8, 3, ${e.value*.1+7}, 3
              ${e.value*.1}, 8 14, 8 14, ${l.value*.15-7}
            `},null,8,E),t("polyline",{stroke:"#fff","stroke-width":"3",fill:"transparent",points:`${e.value*.5}, 3 ${e.value-3}, 3, ${e.value-3}, ${l.value*.25}`},null,8,G),t("polyline",{fill:"#fff",points:`
              ${e.value*.52}, 3 ${e.value*.58}, 3
              ${e.value*.58-7}, 9 ${e.value*.52+7}, 9
            `},null,8,P),t("polyline",{fill:"#fff",points:`
              ${e.value*.9}, 3 ${e.value-3}, 3 ${e.value-3}, ${l.value*.1}
              ${e.value-9}, ${l.value*.1-7} ${e.value-9}, 9 ${e.value*.9+7}, 9
            `},null,8,j),t("polyline",{stroke:"#fff","stroke-width":"3",fill:"transparent",points:`8, ${l.value*.5} 8, ${l.value-3} ${e.value*.3+7}, ${l.value-3}`},null,8,q),t("polyline",{fill:"#fff",points:`
              8, ${l.value*.55} 8, ${l.value*.7}
              2, ${l.value*.7-7} 2, ${l.value*.55+7}
            `},null,8,A),t("polyline",{stroke:"#fff","stroke-width":"3",fill:"transparent",points:`${e.value*.35}, ${l.value-3} ${e.value-3}, ${l.value-3} ${e.value-3}, ${l.value*.35}`},null,8,F),t("polyline",{fill:"#fff",points:`
              ${e.value*.92}, ${l.value-3} ${e.value-3}, ${l.value-3} ${e.value-3}, ${l.value*.8}
              ${e.value-9}, ${l.value*.8+7} ${e.value-9}, ${l.value-9} ${e.value*.92+7}, ${l.value-9}
            `},null,8,J)],8,H)]),t("polygon",{fill:a(o).base.backgroundColor,points:`
          15, 9 ${e.value*.1+1}, 9 ${e.value*.1+4}, 6 ${e.value*.52+2}, 6
          ${e.value*.52+6}, 10 ${e.value*.58-7}, 10 ${e.value*.58-2}, 6
          ${e.value*.9+2}, 6 ${e.value*.9+6}, 10 ${e.value-10}, 10 ${e.value-10}, ${l.value*.1-6}
          ${e.value-6}, ${l.value*.1-1} ${e.value-6}, ${l.value*.8+1} ${e.value-10}, ${l.value*.8+6}
          ${e.value-10}, ${l.value-10} ${e.value*.92+7}, ${l.value-10}  ${e.value*.92+2}, ${l.value-6}
          11, ${l.value-6} 11, ${l.value*.15-2} 15, ${l.value*.15-7}
        `},null,8,K),t("rect",{x:"0",y:"0",width:e.value,height:l.value,fill:`url(#${n.value})`,mask:`url(#${v.value})`},null,8,M)],8,I))])),[[h,f]])}}});const U=x(O,[["__scopeId","data-v-2403e872"]]);export{U as default};
