import{d as g,v,x as w,y as _,B as C,u as S,o as L,c as y}from"./index-70139cdd.js";import{u as D}from"./index-3c321de0.js";import{u as E}from"./index-76257893.js";import{u as z}from"./hooks-c7f5d0ad.js";import{c as B}from"./utils-ac153957.js";const V=g({__name:"BasicPieChart",props:{component:{}},setup(d){const n=d,c=v(null);let a;const{updateEchart:p,resizeHandler:m}=z(c);let s=[];const h=(t,o)=>{t.status==="SUCCESS"&&(s=t.afterData,l(s)),l(s)};D(n.component,h);const b=()=>{l(s)},{propValue:e}=E(n.component,b);w(async()=>{a=u(),p(a)});const u=()=>{const t={grid:{top:"10%",left:"3%",right:"4%",bottom:"0%",containLabel:!0},tooltip:{trigger:"item"},legend:{show:e.legend.isShow,top:"5%",left:"center"},series:[]};let o=[{type:"pie",radius:[`${e.series.radiusMin||0}%`,`${e.series.radiusMax||100}%`],avoidLabelOverlap:!0,itemStyle:{borderRadius:e.series.borderRadius,borderColor:"transparent",borderWidth:100},label:{show:!1,position:"center",color:e.label.labelColor},emphasis:{label:{show:e.label.isShow,fontSize:e.label.labelSize,fontWeight:e.label.labelWeight},itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}},labelLine:{show:!1},data:[]}];return t.series=o,t},l=t=>{const o=e.data.upperLimit,i=e.data.lowerLimit,f=t.map(r=>({value:B(Number(r.value),o,i),label:r.label}));a=u(),a.series[0].data=f.map(r=>({value:r.value,name:r.label})),p(a)};return(t,o)=>{const i=_("resize");return C((L(),y("div",{ref_key:"chartEl",ref:c},null,512)),[[i,S(m)]])}}});export{V as default};
