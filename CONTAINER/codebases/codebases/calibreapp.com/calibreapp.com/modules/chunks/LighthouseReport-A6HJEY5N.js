import{a as b}from"./chunk-JGVSOO63.js";import{a as y}from"./chunk-SCXJ6RQB.js";import"./chunk-SOUDSSPT.js";import"./chunk-YN3ICWDL.js";import{b as N,c as v}from"./chunk-JXNVBN57.js";import"./chunk-4JRWSVEX.js";import{a as L}from"./chunk-FJD4SS3V.js";import"./chunk-TKNWVBCA.js";import"./chunk-V454E5QD.js";import"./chunk-4DDSFSZM.js";import{d as c}from"./chunk-CL7MNENB.js";import"./chunk-5ZVMZG6E.js";import"./chunk-33HWVBTX.js";import{f as g,i as I}from"./chunk-ORNWO27Z.js";var e=g(I());var A=g(L());var n=e.default.lazy(()=>import("./LighthouseAggregationGroup-46QQFRYB.js")),k=["metrics","performance-budget","diagnostics","resource-summary","main-thread-tasks"],M=()=>e.default.createElement("div",{className:"align align--center align--middle stretch-height"},e.default.createElement("div",{className:"align__content"},e.default.createElement("h1",{className:"m--b0"},e.default.createElement(c,{id:"test.no_audits.title"})))),T=({lighthouseReport:l,reportCategory:f})=>{let r,t,a,m=[],o=[],d=[],p=[],u=[],h=i=>i>=.75;if(!l||l.error||l.aggregations||!Object.keys(l).length)return e.default.createElement(M,null);if(l.lhr||parseInt(l.lighthouseVersion,10)>=7){let{audits:i={},categories:D={}}=l.lhr||l;if(r=D[f],!r)return e.default.createElement(M,null);t=r.title,a=r.description,r.auditRefs.map(s=>i[s.id]).filter(s=>s!==void 0).filter(s=>!k.includes(s.id)).filter(s=>!(s.scoreDisplayMode==="numeric"&&!s.details)).forEach(s=>{s.scoreDisplayMode==="notApplicable"?d.push(s):s.scoreDisplayMode==="manual"?u.push(s):s.scoreDisplayMode==="informative"?p.push(s):s.score>=.75?m.push(s):o.push(s)})}else r=l.reportCategories.find(i=>i.id==f),t=r.name,a=r.description,m=r.audits.filter(i=>i.group!=="perf-metric").filter(i=>h(i.score/100)),o=r.audits.filter(i=>i.group!=="perf-metric").filter(i=>!h(i.score/100));return e.default.createElement(e.Suspense,{fallback:e.default.createElement(y,null)},e.default.createElement("header",{className:"section-header"},e.default.createElement(v,{as:"h1",level:"md"},t),e.default.createElement(A.Box,{width:2/3},e.default.createElement(N,{as:"p",color:"grey300",mt:1,dangerouslySetInnerHTML:b(a)}))),e.default.createElement("div",{className:"page-section"},!o.length||e.default.createElement(e.default.Fragment,null,e.default.createElement("h4",{className:"type-medium m--2"},"Opportunities"),e.default.createElement(n,{audits:o})),!m.length||e.default.createElement(e.default.Fragment,null,e.default.createElement("h4",{className:"type-medium m--2"},"Passed audits"),e.default.createElement(n,{audits:m})),!p.length||e.default.createElement(e.default.Fragment,null,e.default.createElement("h4",{className:"type-medium m--2"},"Informative"),e.default.createElement(n,{audits:p})),!u.length||e.default.createElement(e.default.Fragment,null,e.default.createElement("h4",{className:"type-medium m--2"},"Items to manually check"),e.default.createElement(n,{audits:u})),!d.length||e.default.createElement(e.default.Fragment,null,e.default.createElement("h4",{className:"type-medium m--2"},"Not applicable"),e.default.createElement(n,{audits:d}))))},w=T;export{w as default};
//# sourceMappingURL=LighthouseReport-A6HJEY5N.js.map
