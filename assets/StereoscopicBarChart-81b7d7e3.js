import{u as w,e as y,r as b,L as C}from"./hooks-fbd8a0f9.js";import{d as D,v as E,x as V,y as N,B as X,u as O,o as Y,c as k}from"./index-10d63009.js";import{u as B}from"./index-8ff99341.js";import{u as R}from"./index-76257893.js";import{c as z}from"./utils-ac153957.js";const j=D({__name:"StereoscopicBarChart",props:{component:{}},setup(g){const p=g;let f,d=[];const P=(l,n)=>{l.status==="SUCCESS"&&(d=l.afterData,T(d))};B(p.component,P);const A=()=>{T(d)},v=E(null),{updateEchart:L,resizeHandler:S}=w(v),{propValue:e}=R(p.component,A);V(async()=>{_(),f=h(),L(f)});function _(){const t=y({shape:{x:0,y:0},buildPath(u,o){const a=o.xAxisPoint,i=[o.x,o.y],r=[o.x-10,o.y-5],c=[a[0]-10,a[1]-5],m=[a[0],a[1]];u.moveTo(i[0],i[1])?.lineTo(r[0],r[1])?.lineTo(c[0],c[1])?.lineTo(m[0],m[1])?.closePath()}}),s=y({shape:{x:0,y:0},buildPath:function(u,o){const a=o.xAxisPoint,i=[o.x,o.y],r=[a[0],a[1]],c=[a[0]+10,a[1]-5],m=[o.x+10,o.y-5];u.moveTo(i[0],i[1])?.lineTo(r[0],r[1])?.lineTo(c[0],c[1])?.lineTo(m[0],m[1])?.closePath()}}),x=y({shape:{x:0,y:0},buildPath:function(u,o){const a=[o.x,o.y],i=[o.x+10,o.y-5],r=[o.x,o.y-10],c=[o.x-10,o.y-5];u.moveTo(a[0],a[1])?.lineTo(i[0],i[1])?.lineTo(r[0],r[1])?.lineTo(c[0],c[1])?.closePath()}});b("CubeLeft",t),b("CubeRight",s),b("CubeTop",x)}const h=()=>{const l={grid:{top:"10%",left:"3%",right:"4%",bottom:"10%",containLabel:!0},backgroundColor:"transparent",tooltip:{trigger:"axis"},xAxis:{type:"category",data:[],splitLine:{show:e.axis.xshow,lineStyle:{type:e.axis.xLineType,color:e.axis.xAxisLineColor}},axisLine:{lineStyle:{color:e.axis.axisColor||"#fff"}},axisTick:{lineStyle:{color:e.axis.axisColor||"#fff"}},axisLabel:{color:e.axis.axisLabelColor||"#fff"}},yAxis:{type:"value",max:n=>e.data.max==="dataMax"||!e.data.max?n.max+Number(e.data.maxOffset||0):Number(e.data.max)+Number(e.data.maxOffset||0),min:n=>e.data.min==="dataMin"?n.min-Number(e.data.minOffset||0):e.data.min===""||e.data.min===void 0?0-Number(e.data.minOffset||0):Number(e.data.min)-Number(e.data.minOffset||0),splitLine:{show:e.axis.yshow,lineStyle:{type:e.axis.yLineType,color:e.axis.yAxisLineColor}},axisLine:{lineStyle:{color:e.axis.axisColor||"#fff"}},axisTick:{lineStyle:{color:e.axis.axisColor||"#fff"}},axisLabel:{color:e.axis.axisLabelColor||"#fff"}}};return l.series=[{type:"custom",renderItem(n,t){if(!t?.value)return null;const s=t.coord([t.value(0),t.value(1)]);return{type:"group",children:[{type:"CubeLeft",shape:{api:t,xValue:t.value(0),yValue:t.value(1),x:s[0],y:s[1],xAxisPoint:t.coord([t.value(0),0])},buildPath(){},style:{fill:new C(0,0,0,1,[{offset:0,color:e.label.axisLabelColor||"#3DE7C9"}])}},{type:"CubeRight",shape:{api:t,xValue:t.value(0),yValue:t.value(1),x:s[0],y:s[1],xAxisPoint:t.coord([t.value(0),0])},style:{fill:new C(0,0,0,1,[{offset:0,color:e.label.axisLabelColor||"#3DE7C9"}])}},{type:"CubeTop",shape:{api:t,xValue:t.value(0),yValue:t.value(1),x:s[0],y:s[1],xAxisPoint:t.coord([t.value(0),0])},style:{fill:new C(0,0,0,1,[{offset:0,color:e.label.axisLabelColor||"#3DE7C9"}])}}]}}}],l},T=l=>{const n=e.data.upperLimit,t=e.data.lowerLimit,s=l.map(x=>({value:z(Number(x.value),n,t),label:x.label}));f=h(),f.series[0].data=s,f.xAxis={...f.xAxis,data:s.map(x=>x.label)},L(f)};return(l,n)=>{const t=N("resize");return X((Y(),k("div",{ref_key:"chartEl",ref:v},null,512)),[[t,O(S)]])}}});export{j as default};
