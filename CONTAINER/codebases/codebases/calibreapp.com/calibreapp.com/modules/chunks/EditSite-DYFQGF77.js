import{d as O,f as Y,g as W,h as X}from"./chunk-T3M2VH6O.js";import{a as K}from"./chunk-SJXFQYTK.js";import{a as P}from"./chunk-IHTWZOQH.js";import"./chunk-OFY5O3WH.js";import"./chunk-WEIYGZZI.js";import{c as A,d as J,e as H,f as _}from"./chunk-ECKCXZDJ.js";import"./chunk-5AD3ZUGZ.js";import"./chunk-2OWL4LTV.js";import"./chunk-62V4AEVH.js";import"./chunk-WDJIMBUZ.js";import"./chunk-ZK4YBVUK.js";import"./chunk-URMVBSCF.js";import{a as D}from"./chunk-RZQ4QVPP.js";import"./chunk-M3VXQ3H4.js";import{a as j}from"./chunk-UJ4RDOBF.js";import{b as $}from"./chunk-EWS3NXQH.js";import{d as g,i as f}from"./chunk-AQDAG4C2.js";import"./chunk-TT3E6PQD.js";import{i as B}from"./chunk-WNVFIGRJ.js";import"./chunk-BYK2LYTJ.js";import"./chunk-SOUDSSPT.js";import"./chunk-YN3ICWDL.js";import{b as E,e as S,f as q,g as I}from"./chunk-JXNVBN57.js";import"./chunk-4JRWSVEX.js";import{c as V}from"./chunk-FJD4SS3V.js";import"./chunk-TKNWVBCA.js";import"./chunk-V454E5QD.js";import"./chunk-4DDSFSZM.js";import{a as Q}from"./chunk-M5TAP4VX.js";import"./chunk-X4YGTLGV.js";import"./chunk-BBW4QHNN.js";import{d as r}from"./chunk-CL7MNENB.js";import"./chunk-5ZVMZG6E.js";import"./chunk-33HWVBTX.js";import{a as F,b as G,c as N,f as v,i as C}from"./chunk-ORNWO27Z.js";var i=v(C());var l=v(C());var e=v(C());var ge=t=>{var c=t,{loading:s,onUpdate:p,saving:o}=c,n=N(c,["loading","onUpdate","saving"]);let M=(0,e.useRef)(),[U,L]=(0,e.useState)(!1),[T,h]=(0,e.useState)(n),{name:x,canonicalUrl:d}=T,y=u=>{let w=F(F({},T),u);h(w),L(!0)};return(0,e.useEffect)(()=>{h(n)},[s]),(0,e.useEffect)(()=>{L(o)},[o]),e.default.createElement(g,null,e.default.createElement("form",{onSubmit:u=>{u.preventDefault(),p(T)},ref:M,"data-qa":"siteForm"},e.default.createElement(f,{id:"site.settings.general",mb:0}),e.default.createElement(A,{mb:0},e.default.createElement(H,{label:"Site name",span:2},e.default.createElement(_,{loading:s,name:"site_name","data-testid":"site-name",defaultValue:x,required:!0,maxLength:120,onChange:u=>y({name:u}),placeholder:"Your site name"}))),e.default.createElement(A,{mb:0},e.default.createElement(H,{label:"Canonical URL",span:2},e.default.createElement(_,{loading:s,name:"site_canonical_url","data-testid":"site-canonical-url",defaultValue:d,required:!0,maxLength:256,onChange:u=>y({canonicalUrl:u}),placeholder:"https://example.com"}),e.default.createElement(J,{mt:2},e.default.createElement(r,{id:"site.settings.general.canonicalUrlDescription"})))),e.default.createElement(B,{"data-testid":"site-submit",disabled:!U||o||!x||!x.length||!d||!d.length,loading:o,type:"submit"},e.default.createElement(r,{id:"site.actions.update"}))))},Z=ge;var b=v(C());var Se=({slug:s})=>b.default.createElement(g,null,b.default.createElement(f,{id:"site.settings.general.slug"},b.default.createElement(E,{as:"p"},"Your Site slug can be used with our"," ",b.default.createElement(S,{href:"/docs/automation/cli"},"CLI"),","," ",b.default.createElement(S,{href:"/docs/automation/node"},"Node.JS API")," or"," ",b.default.createElement(S,{href:"/docs/automation/http-site-api"},"HTTP Site API"),".")),b.default.createElement(I,null,s)),R=Se;var a=v(C());var fe=({secret:s,onUpdate:p,saving:o})=>{let n="new secret please";return a.default.createElement(g,null,a.default.createElement(f,{id:"site.settings.general.secret"},a.default.createElement(E,{as:"p"},"Your Site secret can be used with the"," ",a.default.createElement(S,{href:"/docs/automation/http-site-api"},"HTTP Site API")," ","to create"," ",a.default.createElement(S,{href:"/docs/automation/snapshots"},"Snapshots")," and"," ",a.default.createElement(S,{href:"/docs/automation/deploys"},"Deploys"),". It can be useful as a part of a post-deploy or post-merge hook.")),a.default.createElement(I,{"data-testid":"site-secret"},s),a.default.createElement(V,{my:3},a.default.createElement(E,{as:"p"},a.default.createElement(r,{id:"site.settings.general.secret.new"}))),a.default.createElement(r,{id:"site.settings.general.secret.prompt",values:{confirmText:n}},t=>a.default.createElement(B,{disabled:o,onClick:()=>{prompt(t)===n&&p()},loading:o},a.default.createElement(r,{id:"site.actions.new_secret"}))))},ee=fe;var k=v(C());var be=({name:s,onDelete:p,loading:o,saving:n})=>k.default.createElement(g,null,k.default.createElement(f,{id:"site.settings.general.delete",mb:0}),o?k.default.createElement($,null):k.default.createElement(r,{id:"site.settings.general.delete.prompt",values:{name:s}},t=>k.default.createElement(B,{variant:"danger",disabled:n,onClick:()=>{prompt(t)===s&&p()},loading:n},k.default.createElement(r,{id:"site.actions.delete",values:{name:s}})))),te=be;var Te=l.default.lazy(()=>import("./Team-GICO2PDK.js")),he=({teamId:s,name:p,slug:o,canonicalUrl:n,loading:t,secret:c,onUpdateSettings:M,savingSettings:U,onUpdateSecret:L,savingSecret:T,onUpdateTeam:h,savingTeam:x,onDelete:d,deletingSite:y})=>l.default.createElement(l.default.Fragment,null,l.default.createElement(Z,{name:p,canonicalUrl:n,onUpdate:M,loading:t,saving:U}),l.default.createElement(R,{loading:t,slug:o}),l.default.createElement(ee,{loading:t,secret:c,saving:T,onUpdate:L}),l.default.createElement(l.Suspense,{fallback:l.default.createElement("div",null)},l.default.createElement(Te,{teamId:s,loading:t,saving:x,onUpdate:h})),l.default.createElement(te,{loading:t,name:p,saving:y,onDelete:d})),oe=he;var xe=i.default.lazy(()=>import("./Feedback-J4FBAYX2.js")),ke=({history:s,match:{params:{teamId:p,siteId:o}}})=>{let{feedback:n,setFeedback:t}=K(),c={teamId:p,siteId:o},{loading:M,data:U}=Q(O,{variables:c,fetchPolicy:"cache-and-network"}),{team:L}=U||{},{organisation:T,site:h}=L||{},{name:x,slug:d}=T||{},{name:y}=h||{},[z,{loading:u}]=D(Y,{onCompleted:()=>{t({location:"editSite",type:"success",message:i.default.createElement(r,{id:"site.settings.general.success"})})},onError:m=>{t({location:"editSite",type:"error",message:P(m)})}}),w=m=>{z({variables:{orgId:d,siteId:o,attributes:m}})},[ie,{loading:se}]=D(W,{onCompleted:()=>{t({location:"editSite",type:"success",message:i.default.createElement(r,{id:"site.settings.general.secret.success"})})},onError:m=>{t({location:"editSite",type:"error",message:P(m)})}}),ne=()=>ie({variables:{orgId:d,siteId:o}}),[re,{loading:ae}]=D(Y,{onCompleted:({updateSiteSettings:{name:m,team:{slug:ue,name:ce}}})=>{t({location:"sites",type:"success",message:i.default.createElement(r,{id:"site.settings.general.team.success",values:{site:i.default.createElement(q,{color:"green400"},m),team:i.default.createElement(q,{color:"green400"},ce)}})}),s.push(`/teams/${ue}`)},onError:m=>{t({location:"editSite",type:"error",message:P(m)})}}),me=m=>{re({variables:{orgId:d,siteId:o,attributes:{team:m}}})},[le,{loading:pe}]=D(X,{onCompleted:()=>{t({location:"sites",type:"success",message:i.default.createElement(r,{id:"site.settings.general.delete.success"})}),s.push(`/teams/${p}`)},onError:m=>{t({location:"editSite",type:"error",message:P(m)})}}),de=()=>le({variables:{orgId:d,siteId:o}});return i.default.createElement(i.default.Fragment,null,i.default.createElement(j,{id:"site.settings.general.title",breadcrumbs:[y,x]}),(n==null?void 0:n.location)==="editSite"&&i.default.createElement(i.Suspense,{fallback:i.default.createElement("div",null)},i.default.createElement(xe,G(F({},n),{p:null,pt:4,px:4,pb:0,onDismiss:()=>t(null)}))),i.default.createElement(oe,G(F({teamId:p},h),{loading:M,savingSettings:u,onUpdateSettings:w,onUpdateTeam:me,onDelete:de,deletingSite:pe,onUpdateSecret:ne,savingSecret:se,savingTeam:ae})))},et=ke;export{et as default};
//# sourceMappingURL=EditSite-DYFQGF77.js.map
