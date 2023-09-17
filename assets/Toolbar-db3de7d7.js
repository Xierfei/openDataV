import{Y as S,d as f,Z as R,$ as x,e as i,a0 as k,a1 as p,a2 as $,a3 as _,a4 as v,I as h,a5 as B,a6 as P,i as w,H as O,o as T,l as y,a7 as I,u as j,_ as V}from"./index-10d63009.js";import{s as H}from"./li-bf48c28b.js";import{L}from"./LogoView-b067190b.js";import{T as N}from"./ToolBar-8264009a.js";const D=S("gradient-text",`
 display: inline-block;
 font-weight: var(--n-font-weight);
 -webkit-background-clip: text;
 background-clip: text;
 color: #0000;
 white-space: nowrap;
 background-image: linear-gradient(var(--n-rotate), var(--n-color-start) 0%, var(--n-color-end) 100%);
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier);
`),G=Object.assign(Object.assign({},p.props),{size:[String,Number],fontSize:[String,Number],type:{type:String,default:"primary"},color:[Object,String],gradient:[Object,String]}),q=f({name:"GradientText",props:G,setup(e){R();const{mergedClsPrefixRef:n,inlineThemeDisabled:s}=x(e),a=i(()=>{const{type:t}=e;return t==="danger"?"error":t}),l=i(()=>{let t=e.size||e.fontSize;return t&&(t=k(t)),t||void 0}),o=i(()=>{const t=e.color||e.gradient;if(typeof t=="string")return t;if(t){const c=t.deg||0,d=t.from,g=t.to;return`linear-gradient(${c}deg, ${d} 0%, ${g} 100%)`}}),b=p("GradientText","-gradient-text",D,$,e,n),u=i(()=>{const{value:t}=a,{common:{cubicBezierEaseInOut:c},self:{rotate:d,[_("colorStart",t)]:g,[_("colorEnd",t)]:C,fontWeight:z}}=b.value;return{"--n-bezier":c,"--n-rotate":d,"--n-color-start":g,"--n-color-end":C,"--n-font-weight":z}}),r=s?v("gradient-text",i(()=>a.value[0]),u,e):void 0;return{mergedClsPrefix:n,compatibleType:a,styleFontSize:l,styleBgImage:o,cssVars:s?void 0:u,themeClass:r?.themeClass,onRender:r?.onRender}},render(){const{mergedClsPrefix:e,onRender:n}=this;return n?.(),h("span",{class:[`${e}-gradient-text`,`${e}-gradient-text--${this.compatibleType}-type`,this.themeClass],style:[{fontSize:this.styleFontSize,backgroundImage:this.styleBgImage},this.cssVars]},this.$slots)}}),E=Object.assign(Object.assign({},p.props),{alignText:Boolean}),J=f({name:"Ol",props:E,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:s}=x(e),a=p("Typography","-xl",H,B,e,n),l=i(()=>{const{common:{cubicBezierEaseInOut:b},self:{olPadding:u,ulPadding:r,liMargin:t,liTextColor:c,liLineHeight:d,liFontSize:g}}=a.value;return{"--n-bezier":b,"--n-font-size":g,"--n-line-height":d,"--n-text-color":c,"--n-li-margin":t,"--n-ol-padding":u,"--n-ul-padding":r}}),o=s?v("ol",void 0,l,e):void 0;return{mergedClsPrefix:n,cssVars:s?void 0:l,themeClass:o?.themeClass,onRender:o?.onRender}},render(){var e;const{mergedClsPrefix:n}=this;return(e=this.onRender)===null||e===void 0||e.call(this),h("ol",{class:[`${n}-ol`,this.themeClass,this.alignText&&`${n}-ol--align-text`],style:this.cssVars},this.$slots)}}),m=P(),F=()=>{m.setNavTheme(m.darkTheme?"dark":"light"),m.setDarkTheme(!m.darkTheme)},W=f({__name:"ThemeIcon",setup(e){const n=w("DarkTheme",i(()=>!0)),s=i(()=>n.value?"sun":"moon");return(a,l)=>{const o=O("x-icon");return T(),y(o,{name:s.value,size:24},null,8,["name"])}}}),A=f({__name:"Toolbar",setup(e){const n=I(),s=[{label:"首页",action:async a=>{await n.push({name:"Pages"})},icon:()=>h(L,{width:"60px"}),divider:!0,location:"left"},{label:"GitHub",action:()=>{window.open("https://github.com/AnsGoo/openDataV","_blank")},icon:"github",location:"right"},{label:"主题",action:F,icon:()=>h(W),location:"right"}];return(a,l)=>(T(),y(j(N),{bars:s}))}});const Q=V(A,[["__scopeId","data-v-7722e8bc"]]);export{J as N,Q as T,q as a};
