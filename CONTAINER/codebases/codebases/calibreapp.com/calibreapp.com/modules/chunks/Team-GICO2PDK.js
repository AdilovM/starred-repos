import{c as g}from"./chunk-T3M2VH6O.js";import{c as d,e as u,h as p}from"./chunk-ECKCXZDJ.js";import"./chunk-5AD3ZUGZ.js";import"./chunk-2OWL4LTV.js";import"./chunk-62V4AEVH.js";import"./chunk-WDJIMBUZ.js";import"./chunk-ZK4YBVUK.js";import"./chunk-URMVBSCF.js";import"./chunk-M3VXQ3H4.js";import"./chunk-EWS3NXQH.js";import{d as n,i as r}from"./chunk-AQDAG4C2.js";import"./chunk-TT3E6PQD.js";import{i as l}from"./chunk-WNVFIGRJ.js";import"./chunk-BYK2LYTJ.js";import"./chunk-SOUDSSPT.js";import"./chunk-YN3ICWDL.js";import"./chunk-JXNVBN57.js";import"./chunk-4JRWSVEX.js";import"./chunk-FJD4SS3V.js";import"./chunk-TKNWVBCA.js";import"./chunk-V454E5QD.js";import"./chunk-4DDSFSZM.js";import{a as s}from"./chunk-M5TAP4VX.js";import"./chunk-X4YGTLGV.js";import"./chunk-BBW4QHNN.js";import{d as m}from"./chunk-CL7MNENB.js";import"./chunk-5ZVMZG6E.js";import"./chunk-33HWVBTX.js";import{f as L,i as T}from"./chunk-ORNWO27Z.js";var t=L(T());var k=({teamId:a,onUpdate:c,saving:f})=>{let[e,b]=(0,t.useState)(a),{data:S}=s(g,{variables:{teamId:a},fetchPolicy:"cache-and-network"}),{team:F}=S||{},{organisation:h}=F||{},{teamsList:{edges:v}}=h||{teamsList:{edges:[]}},i=(v||[]).map(({node:o})=>o);return t.default.createElement(n,null,t.default.createElement(r,{id:"site.settings.general.team",mb:0,link:"/docs"}),t.default.createElement("form",{onSubmit:o=>{o.preventDefault(),c(e)},"data-qa":"siteTeamForm"},t.default.createElement(d,{mb:0},t.default.createElement(u,{"data-testid":"site-team",labelid:"site.settings.team.label"},t.default.createElement(p,{name:"site_team",options:(i||[]).map(({slug:o,name:y})=>({label:y,value:o})),defaultValue:e,onChange:b,loading:!i.length||!e}))),t.default.createElement(l,{disabled:!e||e===a,type:"submit",loading:f},t.default.createElement(m,{id:"site.settings.general.team.save"}))))},C=k;export{C as default};
//# sourceMappingURL=Team-GICO2PDK.js.map
