import{a as st}from"./chunk-XMXM47AQ.js";import{a as It,b as Rt,d as te}from"./chunk-Y2VMCV7S.js";import{a as ee}from"./chunk-LI7KQDDQ.js";import{a as ot}from"./chunk-HVWSZP6M.js";import{a as Ht}from"./chunk-KCN7NYIH.js";import"./chunk-YG5VU5UW.js";import{f as Zt}from"./chunk-QHRJV7PN.js";import{c as Vt}from"./chunk-DQSCGVX4.js";import"./chunk-QZKSC5M6.js";import"./chunk-CWNFCDZO.js";import"./chunk-WEIWD5Z2.js";import"./chunk-ZMOXJOAW.js";import{a as jt,b as Jt,c as Kt,l as it}from"./chunk-ZNS7TFW4.js";import{a as Xt}from"./chunk-U5Q7W6VE.js";import{a as At}from"./chunk-2LV7R6US.js";import{a as Bt,b as zt}from"./chunk-JLSB3ZPE.js";import{b as bt}from"./chunk-7MXQG6UX.js";import{a as Yt,c as _t,d as rt}from"./chunk-JELGMUFY.js";import"./chunk-AQM24QTG.js";import{b as Ut}from"./chunk-GP57J2CW.js";import"./chunk-DGXX4BQF.js";import{a as Qt}from"./chunk-IHTWZOQH.js";import"./chunk-OFY5O3WH.js";import{a as Ot}from"./chunk-INK6RNBJ.js";import"./chunk-ECKCXZDJ.js";import{b as qt}from"./chunk-5AD3ZUGZ.js";import"./chunk-YOWIORHC.js";import"./chunk-2OWL4LTV.js";import"./chunk-62V4AEVH.js";import{a as ct}from"./chunk-WDJIMBUZ.js";import"./chunk-ZK4YBVUK.js";import"./chunk-URMVBSCF.js";import"./chunk-CEAYBKHZ.js";import{a as J}from"./chunk-RZQ4QVPP.js";import"./chunk-M3VXQ3H4.js";import{a as ht}from"./chunk-UJ4RDOBF.js";import{f as Nt}from"./chunk-EWS3NXQH.js";import{d as $,f as Tt,g as Ct,h as kt,i as Z}from"./chunk-AQDAG4C2.js";import{a as $t,b as tt,c as et,d as A,e as Gt,f as Et}from"./chunk-TT3E6PQD.js";import"./chunk-SCXJ6RQB.js";import{a as I,b as Dt,c as Lt,f as R,i as N}from"./chunk-WNVFIGRJ.js";import"./chunk-BYK2LYTJ.js";import"./chunk-SOUDSSPT.js";import"./chunk-YN3ICWDL.js";import{b as vt,c as Ft,e as X,f as Pt}from"./chunk-JXNVBN57.js";import{a as gt}from"./chunk-4JRWSVEX.js";import{b as k,c as l}from"./chunk-FJD4SS3V.js";import"./chunk-TKNWVBCA.js";import{a as de}from"./chunk-V454E5QD.js";import"./chunk-4DDSFSZM.js";import{a as Wt}from"./chunk-I2CW5RII.js";import"./chunk-EHER635N.js";import{a as wt}from"./chunk-D3V43LVN.js";import{a as K}from"./chunk-M5TAP4VX.js";import"./chunk-X4YGTLGV.js";import"./chunk-BBW4QHNN.js";import{d}from"./chunk-CL7MNENB.js";import"./chunk-5ZVMZG6E.js";import"./chunk-33HWVBTX.js";import{a as T,b as P,c as q,f as Q,i as O}from"./chunk-ORNWO27Z.js";var e=Q(O());var t=Q(O());var z=Q(de());var h=Q(O());var fe=r=>!isNaN(parseFloat(r))&&isFinite(r),yt=fe;var ge=({value:r,metric:i})=>{if(!yt(r))return"neutral";switch(i.budgetThreshold){case"GreaterThan":return r>i.poorStop?"error":r<i.goodStop?"success":"warning";default:return r>i.goodStop?"success":r<i.poorStop?"error":"warning"}},ce=({teamId:r,siteId:i,metric:n,page:m,profile:f,deploys:a})=>{let p={teamId:r,siteId:i,profiles:[f.uuid],pages:[m.uuid],first:15,measurements:[n.name]},{data:u,loading:g}=K(Kt,{variables:p}),{team:v}=u||{},{site:{timeSeries:y}}=v||{site:{}},{series:B=[{values:[]}],times:b=[]}=y||{},G=B[0]&&B[0].values||[],S=b.map((w,D)=>{let L;return a.forEach(C=>{C.timestamp<w.timestamp&&(L=C)}),P(T({},w),{color:ge({metric:n,value:G[D]}),value:G[D],link:w.snapshot?`/teams/${r}/${i}/snapshots/${w.snapshot}?page=${m.uuid}&profile=${f.uuid}`:null,deploy:L})});for(;S.length<15;)S.unshift({});for(;S.length>15;)S.splice(0,1);return h.default.createElement(Zt,{height:24,width:148,loading:g||!u,emptyLabel:h.default.createElement(vt,{level:"xs",textAlign:"left",color:"grey300"},h.default.createElement("em",null,h.default.createElement(d,{id:"pages.metrics.empty"}))),segments:S,formatter:({value:w,name:D,timestamp:L,deploy:C})=>h.default.createElement(ee,{metric:n,value:h.default.createElement(bt,{number:w,formatter:n.formatter}),metadata:h.default.createElement(h.default.Fragment,null,D,h.default.createElement("br",null),h.default.createElement(Ut,{date:L}),C?h.default.createElement(h.default.Fragment,null,h.default.createElement("br",null),C.name):null)})})},he=({teamId:r,siteId:i,metric:n,page:m,profile:f,current:a,currentGrading:p,deploys:u})=>{let[g,v]=At({triggerOnce:!0});return h.default.createElement(k,{alignItems:"center",ref:g},h.default.createElement(l,{width:148},v?h.default.createElement(ce,{teamId:r,siteId:i,page:m,profile:f,metric:n,deploys:u}):null),h.default.createElement(l,{ml:"8px"},h.default.createElement(Yt,{level:"base",variant:p},yt(a)?h.default.createElement(bt,{number:a,formatter:n.formatter}):null)))},oe=he;var Be=t.default.lazy(()=>import("./BlankSlate-DDTKSP2G.js")),be=(0,z.default)(X)`
  display: inline-block;
`,re=(0,z.default)(et)`
  max-width: 60px;

  ${gt(2)`
    max-width: none;
  `};
`,ie=(0,z.default)(et)`
  min-width: 220px;

  ${gt(2)`
    min-width: none;
  `};
`,ye=(0,z.default)(R)`
  left: ${({left:r})=>r}px;
  margin-top: ${({top:r})=>r}px;
  position: absolute;
  transform: translateY(-50%);
  z-index: 4;
`,xe=m=>{var f=m,{containerRef:r,metricRef:i}=f,n=q(f,["containerRef","metricRef"]);let a=i.current.getBoundingClientRect(),p=r.current.getBoundingClientRect(),u=a.left-25,g=Math.min(p.height/2,(window.innerHeight-p.top)/2);return t.default.createElement(ye,P(T({},n),{left:u,top:g,"data-qa":"choose-customise-metric-button"}),t.default.createElement(d,{id:"pages.actions.metrics.change"}))},se=({teamId:r,siteId:i,metrics:n,sortBy:m,sortDirection:f,from:a,deviceFilter:p,searchTerm:u,customiseMetrics:g,onCustomiseMetric:v})=>{let[y,B]=(0,t.useState)(m||"page"),[b,G]=(0,t.useState)(f||"asc"),S=(0,t.useRef)(),E=[(0,t.useRef)(),(0,t.useRef)(),(0,t.useRef)()],[w]=J(it),D=o=>{B(o),w({variables:{siteId:i,sortBy:o}})},L=o=>{G(o),w({variables:{siteId:i,sortDirection:o}})},C=(0,t.useMemo)(()=>n.map(({name:o})=>o),[n]),nt={teamId:r,siteId:i,measurements:C,from:a},[mt,{data:lt,loading:H}]=wt(Jt,{variables:nt});(0,t.useEffect)(()=>{C.length&&mt()},[C]);let{team:Y}=lt||{},{site:{deploys:_={},latestMetrics:at}}=Y||{site:{}},{pages:W=[],testProfiles:pt=[],data:x=[]}=at||{},ut=Xt(_),F=[];W.forEach(o=>{pt.forEach(c=>{F.push({id:`${o.uuid}-${c.uuid}`,teamId:r,siteId:i,page:o,profile:c,metrics:[],gradings:[]})})}),x.forEach(({profile:o,page:c,measurement:U,current:V,currentGrading:pe})=>{let ue=`${c}-${o}`,dt=F.find(({id:ft})=>ft===ue);dt&&C.forEach((ft,St)=>{ft===U&&(dt.metrics[St]=V,dt.gradings[St]=pe)})}),p&&p!=="all"&&(F=F.filter(({profile:{device:o}})=>p==="mobile"?o&&o.isMobile:!o||!o.isMobile)),u!==""&&(F=Ot(F,u,{keys:["page.name","profile.name"]}));let j=F.sort((o,c)=>{switch(y){case"page":return Bt(o.page.name,c.page.name,b);case"profile":return Bt(o.profile.name,c.profile.name,b);default:return zt(o.metrics[y]?o.metrics[y]:null,c.metrics[y]?c.metrics[y]:null,b)}});return H?t.default.createElement(d,{id:"test.page"},o=>t.default.createElement(Nt,{label:o})):(W==null?void 0:W.length)?t.default.createElement($,{borderBottom:"none",ref:S},t.default.createElement(Et,{bleed:0,overflow:"auto",disabled:g,header:g?t.default.createElement(t.default.Fragment,null,n.map((o,c)=>t.default.createElement(xe,{key:c,containerRef:S,metricRef:E[c],onClick:()=>v(o)}))):null},t.default.createElement($t,null,t.default.createElement(tt,null,t.default.createElement(A,null,t.default.createElement(I,{attribute:"page",onUpdateSortBy:D,onUpdateSortDirection:L,sortBy:y,sortDirection:b},t.default.createElement(d,{id:"test.page"}))),t.default.createElement(A,null,t.default.createElement(I,{attribute:"profile",onUpdateSortBy:D,onUpdateSortDirection:L,sortBy:y,sortDirection:b},t.default.createElement(d,{id:"test.profile"}))),n.length?n.map((o,c)=>t.default.createElement(A,{key:c},t.default.createElement("div",{ref:E[c]},t.default.createElement(I,{attribute:`${c}`,onUpdateSortBy:D,onUpdateSortDirection:L,sortBy:y,sortDirection:b},t.default.createElement(_t,T({},o)))," ",t.default.createElement(rt,T({},o))))):[1,2,3].map(o=>t.default.createElement(A,{key:o},t.default.createElement(l,{width:"150px"}))))),t.default.createElement(Gt,null,u!==""&&!j.length?t.default.createElement(tt,null,t.default.createElement(et,{borderBottomWidth:"1px",colSpan:"5"},t.default.createElement(d,{id:"pages.metrics.no_results"}))):j.map((o,c)=>t.default.createElement(tt,{key:c},t.default.createElement(re,{borderBottomWidth:c===x.length-1?"1px":0},t.default.createElement(be,{to:`/teams/${r}/${i}?page=${o.page.uuid}`},t.default.createElement(ct,{label:o.page.name},t.default.createElement("div",null,o.page.name)))),t.default.createElement(re,{borderBottomWidth:c===x.length-1?"1px":0},t.default.createElement(ct,{label:o.profile.name},t.default.createElement(t.default.Fragment,null,o.profile.name))),n.length?n.map((U,V)=>t.default.createElement(ie,{key:`${U.name}-${V}`,borderBottomWidth:c===x.length-1?"1px":0},t.default.createElement(oe,P(T({},o),{loading:H,current:o.metrics[V],currentGrading:o.gradings[V],metric:U,deploys:ut})))):[1,2,3].map(U=>t.default.createElement(ie,{key:U,borderBottomWidth:U===x.length-1?"1px":0},t.default.createElement(l,{width:"150px"})))))))):t.default.createElement(t.Suspense,{fallback:t.default.createElement("div",null)},t.default.createElement(Be,{id:"pages"}))};se.defaultProps={filters:"all"};var ne=se;var s=Q(O());var M=Q(O());var xt=Q(O());var Me=m=>{var f=m,{selectedMetric:r,onSelectMetric:i}=f,n=q(f,["selectedMetric","onSelectMetric"]);let{name:a,shortLabel:p,label:u}=n;return xt.default.createElement(l,{mr:"15px",mb:3},xt.default.createElement(N,{onClick:v=>{v.preventDefault(),i(n)},variant:r.name===a?"outlinedActive":"outlined"},p||u))},Mt=Me;var Se=({label:r,docsPath:i,recommendedMetrics:n,otherMetrics:m,onSelectMetric:f,selectedMetric:a})=>{let[p,u]=st(!1);return M.default.createElement(M.default.Fragment,null,M.default.createElement(l,{mb:3},M.default.createElement(k,{alignItems:"center"},M.default.createElement(l,{mr:"5px"},M.default.createElement(Ft,{as:"h2",level:"md"},r)),M.default.createElement(l,null,M.default.createElement(rt,{docsPath:i,label:r})))),M.default.createElement(k,{flexWrap:"wrap"},n.map(g=>M.default.createElement(Mt,P(T({key:g.value},g),{selectedMetric:a,onSelectMetric:f}))),p?m.map(g=>M.default.createElement(Mt,P(T({key:g.value},g),{selectedMetric:a,onSelectMetric:f}))):null),m.length?M.default.createElement(k,null,M.default.createElement(Dt,{onClick:u,open:p},M.default.createElement(d,{id:`pages.metrics.customise.${p?"close":"open"}`}))):null)},me=Se;var we=({metricCategories:r,currentMetric:i,onBack:n,onSave:m,saving:f,feedback:a})=>{let p=(0,s.useRef)(),[u,g]=(0,s.useState)(i),v=B=>{B.preventDefault(),m(u)},y=r.map(G=>{var S=G,{metrics:B}=S,b=q(S,["metrics"]);return P(T({},b),{recommendedMetrics:B.filter(({recommended:E,name:w})=>E||w===i),otherMetrics:B.filter(({recommended:E})=>!E)})}).filter(({recommendedMetrics:B})=>B.length);return s.default.createElement("form",{onSubmit:v,ref:p,"data-qa":"pageForm"},s.default.createElement($,null,s.default.createElement(k,{alignItems:"center"},s.default.createElement(l,{flex:1,mb:0},s.default.createElement(ot,null,s.default.createElement(X,{onClick:n},s.default.createElement(d,{id:"pages.title"})),s.default.createElement(d,{id:"pages.metrics.customise.title"}))),s.default.createElement(l,{pr:1,width:[1,"auto"]},s.default.createElement(Lt,{href:"/docs/features/pages-leaderboard#customise-displayed-metrics"},s.default.createElement(d,{id:"pages.actions.metrics.guide"}))))),s.default.createElement($,{borderBottom:"none",p:void 0,px:4,pt:4,pb:0},s.default.createElement(Z,{id:"pages.metrics.customise.lockup",mb:0,values:{metric:s.default.createElement(Pt,null,i.shortLabel||i.label)}})),y.map((B,b)=>s.default.createElement($,{key:b,mt:b===0?-4:0,borderBottom:b===y.length-1?"0px solid":"1px solid"},s.default.createElement(me,P(T({},B),{selectedMetric:u,onSelectMetric:G=>g(G)})))),s.default.createElement($,{mt:-4},!a||a.type==="success"||s.default.createElement(Ct,null,s.default.createElement(kt,{span:2},s.default.createElement(Ht,T({p:0,pb:4,duration:0},a)))),s.default.createElement(k,null,s.default.createElement(l,{mr:"15px"},s.default.createElement(N,{onClick:n,variant:"tertiary"},s.default.createElement(d,{id:"pages.actions.metrics.cancel"}))),s.default.createElement(l,null,s.default.createElement(N,{loading:f,disabled:f||u.name===i.name,type:"submit"},s.default.createElement(d,{id:"pages.actions.metrics.save"}))))))},le=we;var ae=Vt(new Date,30),Te=({match:{params:{teamId:r,siteId:i}}})=>{let{can:n}=Wt({teamId:r,siteId:i}),[m,f]=(0,e.useState)({}),[a,p]=st(!1),[u,g]=(0,e.useState)(null),[v,y]=(0,e.useState)(""),[B,b]=(0,e.useState)(),[G,S]=(0,e.useState)(),E={team:r,site:i,from:ae},{loading:w,data:D}=K(jt,{variables:E}),[L,{loading:C}]=J(it,{onCompleted:({updateUserSitePageMetrics:x})=>{g(null),S(),f(x),window.scrollTo(0,0)},onError:x=>{S({type:"error",message:Qt(x)})}}),{team:nt,metricCategories:mt=[],currentUser:lt}=D||{},{name:H,site:Y}=nt||{},{name:_}=Y||{},{sitePageMetrics:at}=lt||{};(0,e.useEffect)(()=>{f(at)},[w]);let W=x=>{let ut=m.metrics.map((F,j)=>j===u?x:F);L({variables:{siteId:i,metrics:ut.map(({value:F})=>F)}})},pt=x=>{g(m.metrics.indexOf(x)),p(),window.scrollTo(0,0)};return u!==null?e.default.createElement(e.default.Fragment,null,e.default.createElement(ht,{id:"pages.title",breadcrumbs:[_,H]}),e.default.createElement(le,{onBack:()=>{g(null),window.scrollTo(0,0)},onSave:W,metricCategories:mt,currentMetric:m.metrics[u],saving:C,feedback:G})):e.default.createElement(e.default.Fragment,null,e.default.createElement(ht,{id:"pages.title",breadcrumbs:[_,H]}),e.default.createElement($,null,e.default.createElement(k,{alignItems:"center",flexWrap:"wrap",width:"1"},e.default.createElement(l,{flex:["auto",1],mb:[3,0],width:[1,"auto"]},e.default.createElement(ot,null,e.default.createElement(d,{id:"pages.title"}))),e.default.createElement(l,{my:[2,"-8px"],width:[1,"auto"]},a?e.default.createElement(N,{variant:"tertiary",onClick:p},e.default.createElement(d,{id:"pages.actions.metrics.close"})):e.default.createElement(R,{onClick:p},e.default.createElement(d,{id:"pages.actions.metrics.customise"}))),!!a||n("updateSites")?e.default.createElement(l,{my:[0,"-8px"],ml:[0,"15px"],width:[1,"auto"]},e.default.createElement(N,{to:`/teams/${r}/${i}/settings/pages`,variant:"primary"},e.default.createElement(d,{id:"pages.actions.settings"})," ")):null)),e.default.createElement($,{p:null,px:4,pt:4,borderBottom:"none"},e.default.createElement(k,{flexWrap:["wrap","nowrap"]},e.default.createElement(l,{flex:1},e.default.createElement(te,{flexWrap:["wrap","wrap","nowrap"]},e.default.createElement(Rt,{mb:4},e.default.createElement(It,{currentDeviceFilter:B,onChange:b})))),e.default.createElement(l,{width:270,mb:4,"data-testid":"pagesSearch"},e.default.createElement(d,{id:"pages.actions.search"},x=>e.default.createElement(qt,{onChange:y,placeholder:x,width:1})))),a?e.default.createElement(Tt,{backgroundColor:"white"},e.default.createElement(Z,{id:"pages.metrics.lockup",mb:0,link:"/docs/features/pages-leaderboard#customise-displayed-metrics"})):null),w?null:e.default.createElement(ne,{teamId:r,siteId:i,site:Y,metrics:(m==null?void 0:m.metrics)||[],sortBy:m==null?void 0:m.sortBy,sortDirection:m==null?void 0:m.sortDirection,from:ae,deviceFilter:B,searchTerm:v,customiseMetrics:a,onCustomiseMetric:pt}))},Oo=Te;export{Oo as default};
//# sourceMappingURL=Overview-PMEJGX4R.js.map
