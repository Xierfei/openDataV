import{bG as m,d as yt,e as W,v as k,bH as Ct,x as xt,V as gt,B as T,y as vt,b as A,bI as M,j as N,aQ as wt,bJ as U,as as Y,J as St,E as K,F as Dt,bK as Q,bL as G,h as bt,S as zt,W as $,bM as Lt,bN as V,bO as Et,bP as B,au as _,aw as Pt}from"./index-70139cdd.js";const kt={lt:Mt,t:It,rt:Tt,r:Xt,rb:Yt,b:Bt,lb:At,l:Rt};function E(t){const{top:e,left:n,height:s,width:i}=t;return{y:e+s/2,x:n+i/2}}function Z(t,e,n){return t*(n-e.x)+e.y}function tt(t,e,n){return e.x-(e.y-n)/t}function Mt(t,e){const{top:n,left:s,rotate:i,width:c,height:d}=t,h=E(t),f={x:s+c,y:n+d},r=m(f,h,i),l={x:(r.x+e.x)/2,y:(r.y+e.y)/2},u=m(e,l,-i),p=m(r,l,-i),y=p.y-u.y,v=p.x-u.x;return{top:u.y,left:u.x,width:v,height:y}}function Rt(t,e){const{left:n,rotate:s,width:i,height:c,top:d}=t,h=E(t),f={x:n+i,y:d+c/2},r=m(f,h,s);if(s%180!=90){const v=(h.y-r.y)/(h.x-r.x),P=Z(v,h,e.x);e.y=P}else e.x=h.x;const l={x:(r.x+e.x)/2,y:(r.y+e.y)/2},u=m(e,l,-s),y=m(r,l,-s).x-u.x;return{top:l.y-c/2,left:u.x,width:y,height:c}}function At(t,e){const{top:n,left:s,rotate:i,width:c}=t,d=E(t),h={x:s+c,y:n},f=m(h,d,i),r={x:(f.x+e.x)/2,y:(f.y+e.y)/2},l=m(e,r,-i),u=m(f,r,-i),p=l.y-u.y,y=u.x-l.x;return{top:l.y-p,left:l.x,width:y,height:p}}function Bt(t,e){const{top:n,left:s,rotate:i,width:c}=t,d=E(t),h={x:s+c/2,y:n},f=m(h,d,i);if(i%180!=90){const y=(d.y-f.y)/(d.x-f.x),v=tt(y,d,e.y);e.x=v}else e.y=d.y;const r={x:(f.x+e.x)/2,y:(f.y+e.y)/2},l=m(e,r,-i),u=m(f,r,-i),p=l.y-u.y;return{top:l.y-p,left:r.x-c/2,width:c,height:p}}function It(t,e){const{top:n,left:s,rotate:i,width:c,height:d}=t,h=E(t),f={x:s+c/2,y:n+d},r=m(f,h,i);if(i%180!=90){const v=(h.y-r.y)/(h.x-r.x),P=tt(v,h,e.y);e.x=P}else e.y=h.y;const l={x:(r.x+e.x)/2,y:(r.y+e.y)/2},u=m(e,l,-i),y=m(r,l,-i).y-u.y;return{top:u.y,left:l.x-c/2,width:c,height:y}}function Tt(t,e){const{top:n,left:s,rotate:i,height:c}=t,d=E(t),h={x:s,y:n+c},f=m(h,d,i),r={x:(f.x+e.x)/2,y:(f.y+e.y)/2},l=m(e,r,-i),u=m(f,r,-i),p=u.y-l.y,y=l.x-u.x;return{top:l.y,left:u.x,width:y,height:p}}function Yt(t,e){const{top:n,left:s,rotate:i}=t,c=E(t),h=m({x:s,y:n},c,i),f={x:(h.x+e.x)/2,y:(h.y+e.y)/2},r=m(e,f,-i),l=m(h,f,-i),u=r.y-l.y,p=r.x-l.x;return{top:l.y,left:l.x,width:p,height:u}}function Xt(t,e){const{top:n,left:s,rotate:i,height:c}=t,d=E(t),h={x:s,y:n+c/2},f=m(h,d,i);if(i%180!=90){const y=(d.y-f.y)/(d.x-f.x),v=Z(y,d,e.x);e.y=v}else e.x=d.x;const r={x:(f.x+e.x)/2,y:(f.y+e.y)/2},l=m(e,r,-i),u=m(f,r,-i),p=l.x-u.x;return{top:u.y-c/2,left:u.x,width:p,height:c}}function Ht(t,e,n){const{top:s,left:i,width:c,height:d}=kt[t](e,n);return{top:Math.round(s),left:Math.round(i),width:Math.round(c),height:Math.round(d)}}const qt=yt({props:{active:{type:Boolean,default:!1},isInner:{type:Boolean,default:!1},info:Object,defaultStyle:Object,index:Number},setup(t,{slots:e}){const n=N(),s=Gt(),i=Jt(),c=()=>{i.copy(n.curComponent)},d=()=>{n.removeComponent(t.index,t.info.parent)},h=()=>{n.upComponent(t.index,t.info.parent)},f=()=>{n.downComponent(t.index,t.info.parent)},r=()=>{n.topComponent(t.index,t.info.parent)},l=()=>{const o=n.curComponent.id;Q(o)},u=()=>{n.bottomComponent(t.index,t.info.parent)},p=()=>{n.decompose()},y=(o,a)=>{if(n.curComponent&&n.curComponent.id===t.info.id)a.stopPropagation();else if(!n.curComponent&&!t.info.parent)n.setCurComponent(t.info,t.index.toString()),a.stopPropagation();else return;return[{text:"拆分",subText:"",disable:n.curComponent?.component!=="Group",handler:p},{divider:!0},{text:"复制",subText:"Ctrl + C",handler:c},{text:"复制ID",subText:"",handler:l},{text:"删除",subText:"Ctr + Delete",handler:d},{divider:!0},{text:"置于顶层",handler:r,children:[{text:"置于顶层",handler:r},{text:"上移一层",handler:h}]},{text:"置于底层",handler:u,children:[{text:"置于底层",handler:u},{text:"下移一层",handler:f}]}]},v=W(()=>n.isShowEm),P=k(null),O=k({}),et=k("0px"),nt=k("#fff0"),ot=k("none"),J=k(!1),X=k("");Ct((o,a,x)=>{if(wt.error(o.message),x==="render function"){if(n.isEditMode){if(a){const{name:w}=a.component||{};X.value=`组件[${w}]渲染异常`}else X.value="组件渲染异常";et.value="5px",nt.value="red",ot.value="dashed",J.value=!0}return!1}else return!0});const H=W(()=>t.active&&!t.info.locked||s.isActived(t.info)),st=()=>{s.appendComponent(n.curComponent),s.appendComponent(t.info)},it=o=>{if(o.preventDefault(),t.info.parent||o.stopPropagation(),!n.curComponent||t.info.id!==n.curComponent.id||t.info.locked)return;o.stopPropagation(),O.value=j();let{top:a,left:x}=t.defaultStyle;const w=o.clientY,z=o.clientX,b=a,S=x,g=G(D=>{const R=D.clientX;a=(D.clientY-w)/n.scale+b,x=(R-z)/n.scale+S,n.syncComponentLocation({top:a,left:x},t.info.parent,!1)}),L=()=>{bt.emit(zt.DRAG_STOP),document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",L),t.info&&t.info.parent&&n.resizeAutoComponent(t.info.parent),n.saveComponentData()};document.addEventListener("mousemove",g),document.addEventListener("mouseup",L)},at=o=>{if(o.ctrlKey||o.metaKey){st();return}o.preventDefault(),t.isInner?t.info.parent?.id===n.benchmarkComponent?.id&&(o.stopPropagation(),n.setCurComponent(t.info,t.index.toString())):(o.stopPropagation(),n.setCurComponent(t.info,t.index.toString()))},ct=o=>{t.isInner&&(o.preventDefault(),t.info&&(!t.info.parent||t.info.parent?.active)&&(o.stopPropagation(),n.setCurComponent(t.info,t.index.toString())))},rt=(o,a)=>{if(a.button!==0||!(n.curComponent&&t.info.id===n.curComponent.id))return;a.stopPropagation(),a.preventDefault();const x={top:t.defaultStyle.top,left:t.defaultStyle.left,height:t.defaultStyle.height,width:t.defaultStyle.width,rotate:t.defaultStyle.rotate},w=document.querySelector("#editor").getBoundingClientRect(),z=G(S=>{const g={x:(S.clientX-w.left)/n.scale,y:(S.clientY-w.top)/n.scale},{top:L,left:D,width:R,height:I}=Ht(o,x,g);n.syncComponentLocation({top:L,left:D,width:R,height:I},t.info.parent,!1)}),b=()=>{document.removeEventListener("mousemove",z),document.removeEventListener("mouseup",b),t.info&&n.resizeAutoComponent(t.info.parent),n.saveComponentData()};document.addEventListener("mousemove",z),document.addEventListener("mouseup",b)},lt=o=>{if(o.button!==0||!P.value||(o.preventDefault(),o.stopPropagation(),!(n.curComponent&&t.info.id===n.curComponent.id))||t.info.locked)return;let{rotate:a}={...t.defaultStyle};const x=o.clientY,w=o.clientX,z=a,b=P.value.getBoundingClientRect(),S=b.left+b.width/2,g=b.top+b.height/2,L=Math.atan2(x-g,w-S)/(Math.PI/180),D=G(I=>{const ht=I.clientX,mt=I.clientY,pt=Math.atan2(mt-g,ht-S)/(Math.PI/180);a=z+pt-L,n.syncComponentLocation({rotate:a},t.info.parent,!1)}),R=()=>{document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",R),t.info&&n.resizeAutoComponent(t.info.parent),n.saveComponentData()};document.addEventListener("mousemove",D),document.addEventListener("mouseup",R)},j=()=>{if(!n.curComponent)return{};const o=U(n.curComponent.style.rotate),a={};let x=-1;const w=[{start:338,end:23,cursor:"nw"},{start:23,end:68,cursor:"n"},{start:68,end:113,cursor:"ne"},{start:113,end:158,cursor:"e"},{start:158,end:203,cursor:"se"},{start:203,end:248,cursor:"s"},{start:248,end:293,cursor:"sw"},{start:293,end:338,cursor:"w"}],z={lt:0,t:45,rt:90,r:135,rb:180,b:225,lb:270,l:315};return["lt","t","rt","r","rb","b","lb","l"].forEach(S=>{const g=U(z[S]+o),L=w.length;for(;;){x=(x+1)%L;const D=w[x];if(g<23||g>=338){a[S]="nw-resize";return}if(D.start<=g&&g<D.end){a[S]=D.cursor+"-resize";return}}}),a},ft=W(()=>{const o="rotate-",a=t.defaultStyle.rotate;return a>-22.5&&a<=22.5?o+0:a>22.5&&a<=67.5?o+45:a>67.5&&a<=112.5?o+90:a>112.5&&a<=157.5?o+135:a>157.5||a<=-157.5?o+0:a>-157.5&&a<=-112.5?o+45:a>-112.5&&a<=-67.5?o+90:a>-67.5&&a<=-22.5?o+135:o+0}),q=o=>{if(document.addEventListener("keyup",F),!(n.curComponent&&t.info.id===n.curComponent.id))return;const a=o.ctrlKey||o.metaKey;if(o.stopPropagation(),t.info&&a)switch(o.code){case"ArrowLeft":o.preventDefault(),n.syncComponentLocation({left:t.info.positionStyle.left-1},t.info.parent,!1);break;case"ArrowUp":o.preventDefault(),n.syncComponentLocation({top:t.info.positionStyle.top-1},t.info.parent,!1);break;case"ArrowRight":o.preventDefault(),n.syncComponentLocation({left:t.info.positionStyle.left+1},t.info.parent,!1);break;case"ArrowDown":o.preventDefault(),n.syncComponentLocation({top:t.info.positionStyle.top+1},t.info.parent,!1);break;case"Delete":o.preventDefault(),d();break;default:return}},F=o=>{n.curComponent&&t.info.id===n.curComponent.id&&(o.stopPropagation(),t.info&&n.resizeAutoComponent(t.info.parent),n.saveComponentData(),document.removeEventListener("keyup",F))};xt(()=>{O.value=j()}),gt(()=>n.curComponent,o=>{o&&t.info.id===o.id?document.addEventListener("keydown",q):document.removeEventListener("keydown",q)});const ut=[{top:"0%",left:"0%",direction:"lt"},{top:"0%",left:"50%",direction:"t"},{top:"0%",left:"100%",direction:"rt"},{top:"50%",left:"100%",direction:"r"},{top:"100%",left:"100%",direction:"rb"},{top:"100%",left:"50%",direction:"b"},{top:"100%",left:"0%",direction:"lb"},{top:"50%",left:"0%",direction:"l"}],dt=()=>A(Dt,null,[T(A("span",{class:M.errorInfo},[X.value]),[[Y,J.value]]),T(A(St("x-icon"),{class:M.rotation,name:"rotation",onMousedown:lt},null),[[Y,H.value]]),T(A("em",null,[K("("),t.defaultStyle.left,K(","),t.defaultStyle.top,K(")")]),[[Y,v.value]]),ut.map(o=>T(A("div",{class:[M.shapePoint,M[o.direction],M[ft.value]],style:{top:o.top,left:o.left},onMousedown:a=>rt(o.direction,a)},null),[[Y,H.value]])),e.default&&e.default()]);return()=>T(A("div",{ref:P,class:[M.shape,H.value||t.active?M.active:""],onDblclick:o=>ct(o),onClick:o=>at(o),onMousedown:o=>it(o)},[dt()]),[[vt("contextmenu"),(o,a)=>y(o,a)]])}}),C=N();class Wt{state=$({style:{top:0,left:0,width:0,height:0},components:[],ids:new Set});get style(){return this.state.style}set style(e){this.state.style=e}get ids(){return this.state.ids}set ids(e){this.state.ids=e}get components(){return this.state.components}set components(e){this.state.components=e}get canCompose(){return this.components.length>1}get hidden(){return this.style.width>0}isActived(e){return this.components.findIndex(n=>n.id===e.id)!==-1}setSelectComponents(e){const{components:n,rect:s}=Lt(e,C.componentData)||{};n&&s?(this.style.left=s.left,this.style.top=s.top,this.style.width=s.right-s.left,this.style.height=s.bottom-s.top,this.components=n||[],this.ids.clear(),this.components.forEach(i=>this.ids.add(i.id))):this.setHidden()}appendComponent(e){e&&(this.ids.has(e.id)||(this.components.push(e),this.ids.add(e.id),this.components.length>1&&(this.style={...this.style,...V(this.components)})))}setHidden(){this.style={left:0,top:0,width:0,height:0},this.components=[],this.ids.clear()}setPostion(e){e.left&&(this.style.left=Math.round(e.left)),e.top&&(this.style.top=Math.round(e.top)),e.width&&(this.style.width=Math.round(e.width)),e.height&&(this.style.height=Math.round(e.height))}compose(){this.style.width===0&&(this.style={...this.style,...V(this.components)});const n=C.components.Group,s=new n;for(const c in this.style)s.changeStyle(["position",c],this.style[c]);s.addComponent(this.components,!0),Et(s),this.batchDeleteComponent(this.components),C.appendComponent(s);const i=C.componentData.length-1;C.setCurComponent(C.componentData[i],i.toString()),this.components=[]}batchDeleteComponent(e){e.forEach(n=>{for(let s=0,i=C.componentData.length;s<i;s++)if(n.id===C.componentData[s].id){C.componentData.splice(s,1);break}}),this.ids.clear()}flushRight(){const{right:e,items:n}=B(this.components);n.forEach(s=>{const i=e-s.right;s.component.changeStyle(["position","left"],s.component.positionStyle.left+i)}),C.saveComponentData()}flushLeft(){const{left:e,items:n}=B(this.components);n.forEach(s=>{const i=s.left-e;s.component.changeStyle(["position","left"],s.component.positionStyle.left-i)}),C.saveComponentData()}flushTop(){const{top:e,items:n}=B(this.components);n.forEach(s=>{const i=s.top-e;s.component.changeStyle(["position","top"],s.component.positionStyle.top-i)}),C.saveComponentData()}flushBottom(){const{bottom:e,items:n}=B(this.components);n.forEach(s=>{const i=e-s.bottom;s.component.changeStyle(["position","top"],s.component.positionStyle.top+i)}),C.saveComponentData()}flushRow(){const{top:e,bottom:n,items:s}=B(this.components);s.forEach(i=>{const c=(n+e)/2-i.center.y;i.component.changeStyle(["position","top"],i.component.positionStyle.top+c)}),C.saveComponentData()}flushColumn(){const{left:e,right:n,items:s}=B(this.components);s.forEach(i=>{const c=(e+n)/2-i.center.x;i.component.changeStyle(["position","left"],i.component.positionStyle.left+c)}),C.saveComponentData()}}const Kt=new Wt;function Gt(){return Kt}class Nt{state=$({copyData:void 0,isCut:!1});get copyData(){return this.state.copyData}set copyData(e){this.state.copyData=e}get isCut(){return this.state.isCut}set isCut(e){this.state.isCut=e}copy(e){this.copyData=_(e),this.copyData.parent=void 0,this.copyData.groupStyle=void 0,Q(JSON.stringify(this.copyData.toJson()))}paste(e,n,s){if(!this.copyData)return;const i=N();e?(this.copyData.changeStyle(["position","top"],s),this.copyData.changeStyle(["position","left"],n)):(this.copyData.changeStyle(["position","top"],this.copyData.style.top+10),this.copyData.changeStyle(["position","left"],this.copyData.style.left+10));const c=_(this.copyData);c.id=Pt(),i.appendComponent(c)}}const Ot=new Nt;function Jt(){return Ot}export{qt as S,Gt as a,Jt as u};
