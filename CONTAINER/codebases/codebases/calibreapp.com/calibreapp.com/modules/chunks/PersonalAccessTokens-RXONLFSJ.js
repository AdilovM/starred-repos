import{a as se,e as re}from"./chunk-X7WQVXMB.js";import{a as W}from"./chunk-HVWSZP6M.js";import{b as R,c as ee}from"./chunk-IHNDKV3B.js";import{a as J}from"./chunk-SJXFQYTK.js";import{a as _}from"./chunk-KCN7NYIH.js";import"./chunk-YG5VU5UW.js";import{e as Y}from"./chunk-DQSCGVX4.js";import"./chunk-CWNFCDZO.js";import{a as X}from"./chunk-ECNFHRET.js";import{a as Z}from"./chunk-2LV7R6US.js";import{a as oe,b as te}from"./chunk-JLSB3ZPE.js";import{a as H}from"./chunk-TQDX6ACF.js";import{f as V}from"./chunk-DGXX4BQF.js";import{a as F}from"./chunk-IHTWZOQH.js";import"./chunk-OFY5O3WH.js";import"./chunk-WEIYGZZI.js";import{a as G}from"./chunk-WDJIMBUZ.js";import"./chunk-ZK4YBVUK.js";import"./chunk-URMVBSCF.js";import{a as K}from"./chunk-RZQ4QVPP.js";import"./chunk-M3VXQ3H4.js";import{a as z}from"./chunk-UJ4RDOBF.js";import{d as j}from"./chunk-EWS3NXQH.js";import{j as I}from"./chunk-AQDAG4C2.js";import{a as q,b as U,c as g,d as D,e as O,f as Q}from"./chunk-TT3E6PQD.js";import{a as N,i as $}from"./chunk-WNVFIGRJ.js";import"./chunk-BYK2LYTJ.js";import"./chunk-SOUDSSPT.js";import"./chunk-YN3ICWDL.js";import{e as L,f as C}from"./chunk-JXNVBN57.js";import"./chunk-4JRWSVEX.js";import{b as E,c as x}from"./chunk-FJD4SS3V.js";import"./chunk-TKNWVBCA.js";import{a as de}from"./chunk-V454E5QD.js";import"./chunk-4DDSFSZM.js";import{a as M}from"./chunk-M5TAP4VX.js";import"./chunk-X4YGTLGV.js";import"./chunk-BBW4QHNN.js";import{d as i}from"./chunk-CL7MNENB.js";import"./chunk-5ZVMZG6E.js";import"./chunk-33HWVBTX.js";import{a as k,b as S,f as w,i as v}from"./chunk-ORNWO27Z.js";var e=w(v());var o=w(v());var t=w(v());var ne=w(de());var ce=ne.default.div`
  max-width: 700px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ie=n=>{if(!n)return"Never";let a=Y(n);return`${V(a,"MMM do y")}`},ue=({attributes:n,uuid:a,organisation:f,displayName:p,displayTeam:y,isExpired:d,expiresAt:b,lastUsedAt:m,onRevoke:h})=>{let[T,c]=Z({triggerOnce:!1,rootMargin:"50% 0% 50%"}),u=d;return t.default.createElement(U,{key:`apiKey-${a}`,ref:T},c?t.default.createElement(t.default.Fragment,null,t.default.createElement(g,{py:"15px"},t.default.createElement(G,{label:p},t.default.createElement(ce,null,p))),n.includes("displayTeam")?t.default.createElement(g,{disabled:u},y):null,t.default.createElement(g,{disabled:u},u?t.default.createElement(i,{id:"apiToken.expired"}):ie(b)),t.default.createElement(g,{disabled:u},ie(m)),t.default.createElement(g,{textAlign:"right",alignItems:"center"},t.default.createElement(R,{label:"Edit",to:`/you/settings/tokens/${a}/edit`,mr:"15px"}),t.default.createElement(i,{id:"apiToken.revokePrompt",values:{confirmText:p}},r=>t.default.createElement(ee,{p:"0px",label:"Revoke",onClick:()=>{prompt(r)===p&&h({uuid:a,organisation:f==null?void 0:f.slug})}})))):t.default.createElement(g,{colSpan:"4",py:"27px"}))},P=ue;var fe=({attributes:n,apiTokens:a,loading:f,pageInfo:p,nextPage:y,handleRevoke:d,currentUserUuid:b})=>{let[m,h]=(0,o.useState)("displayName"),[T,c]=(0,o.useState)("asc"),u=a.slice().sort((r,B)=>{switch(m){case"expiresAt":case"lastUsed":return te(r[m]||Date(),B[m]||Date(),T);default:return oe(r[m],B[m],T)}});return o.default.createElement(x,{pb:"60px"},o.default.createElement(Q,{bleed:0},o.default.createElement(q,null,o.default.createElement(U,null,n.map(r=>o.default.createElement(D,{key:r,py:"15px",width:`${(100-10)/n.length}%`},o.default.createElement(N,{attribute:r,onUpdateSortBy:h,onUpdateSortDirection:c,sortBy:m,sortDirection:T},o.default.createElement(i,{id:`apiToken.attributes.${r}`})))),o.default.createElement(D,{width:"10%",textAlign:"right"},"actions"))),o.default.createElement(O,null,u.map(r=>o.default.createElement(P,k({key:r.uuid,attributes:n,onRevoke:d,currentUserUuid:b},r))))),!f&&p.hasNextPage&&o.default.createElement(E,null,o.default.createElement(x,{mx:"auto",mt:4},o.default.createElement(X,{pageInfo:p,onNext:y}))))};P.defaultProps={attributes:["displayName","displayTeam","expiresAt","lastUsed"]};var ae=fe;var Te=()=>{let{feedback:n,setFeedback:a,clearFeedback:f}=J(),[p,y]=(0,e.useState)([]),{loading:d,data:b,fetchMore:m}=M(se,{fetchPolicy:"cache-and-network",onError:s=>{a({type:"error",message:F(s),location:"apiKeyList"})}}),{currentUser:h}=b||{},{apiKeys:{edges:T,pageInfo:c}}=h||{apiKeys:{}};(0,e.useEffect)(()=>{if(!d){let s=(T||[]).map(({node:l})=>{var A;return S(k({},l),{displayName:l.description,displayTeam:((A=l.team)==null?void 0:A.name)||e.default.createElement(i,{id:"apiToken.noTeam"})})});y(s)}},[d]);let u=()=>{m({variables:{cursor:c==null?void 0:c.endCursor},updateQuery:(s,{fetchMoreResult:l})=>Object.assign({},s,{currentUser:S(k({},s.currentUser),{bustCache:1,apiKeys:S(k({},s.currentUser.apiKeys),{edges:[...s.currentUser.apiKeys.edges,...l.currentUser.apiKeys.edges],pageInfo:l.currentUser.apiKeys.pageInfo})})})})},[r]=K(re,{onCompleted:({deleteApiKey:s})=>{let{uuid:l,description:A}=s||{},me=p.filter(le=>le.uuid!==l);y(me),a({type:"success",location:"personalAccessTokens",message:e.default.createElement(i,{id:"apiToken.revokeMessage",values:{token:e.default.createElement(C,{color:"green400"},A)}})})},onError:s=>{a({type:"error",message:F(s),location:"apiKeyList"})}}),B=({organisation:s,uuid:l})=>{r({variables:{organisation:s,uuid:l}})};if(d)return e.default.createElement(j,null);let pe=["displayName","displayTeam","expiresAt","lastUsed"];return e.default.createElement(e.default.Fragment,null,e.default.createElement(z,{id:"accessTokens.title"}),e.default.createElement(I,{variant:"button"},e.default.createElement(x,{flex:1,mb:[4,0]},e.default.createElement(W,null,e.default.createElement(i,{id:"you.settings.accessTokens.heading"}))),e.default.createElement($,{to:"/you/settings/tokens/new"},e.default.createElement(i,{id:"you.settings.accessTokens.actions.new"}))),n&&n.location==="personalAccessTokens"&&e.default.createElement(_,k({"data-qa":"accessTokensFeedback",p:null,pt:4,px:4,pb:0,duration:0,onDismiss:()=>f()},n)),p.length?e.default.createElement(x,{mx:4,mt:"50px"},e.default.createElement(ae,{attributes:pe,apiTokens:p,loading:d,pageInfo:c,nextPage:u,handleRevoke:B})):e.default.createElement(H,{id:"you.settings.accessTokens",offset:190,offsets:[317,190],values:{automateLink:e.default.createElement(L,{href:"/docs/automation/cli#export-data-with-the-cli-or-nodejs-api",target:"_blank"},e.default.createElement(i,{id:"you.settings.accessTokens.blankSlate.automateLink"})),exportDataLink:e.default.createElement(L,{href:"/docs/account-and-billing/export-data#export-data-with-the-cli-or-nodejs-api",target:"_blank"},e.default.createElement(i,{id:"you.settings.accessTokens.blankSlate.exportDataLink"}))}}))},ze=Te;export{ze as default};
//# sourceMappingURL=PersonalAccessTokens-RXONLFSJ.js.map
