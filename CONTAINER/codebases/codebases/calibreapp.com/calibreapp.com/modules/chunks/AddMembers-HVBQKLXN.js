import{a as C}from"./chunk-H44VHDU4.js";import{a as E,d as $}from"./chunk-AZF7LUDH.js";import{a as P}from"./chunk-HVWSZP6M.js";import{a as G}from"./chunk-KCN7NYIH.js";import"./chunk-YG5VU5UW.js";import"./chunk-CWNFCDZO.js";import"./chunk-ECNFHRET.js";import{a as A}from"./chunk-IHTWZOQH.js";import"./chunk-OFY5O3WH.js";import"./chunk-H7BUDTAB.js";import"./chunk-ECKCXZDJ.js";import"./chunk-5AD3ZUGZ.js";import"./chunk-2OWL4LTV.js";import"./chunk-62V4AEVH.js";import"./chunk-WDJIMBUZ.js";import"./chunk-ZK4YBVUK.js";import"./chunk-URMVBSCF.js";import{a as h}from"./chunk-RZQ4QVPP.js";import"./chunk-M3VXQ3H4.js";import{a as L}from"./chunk-UJ4RDOBF.js";import"./chunk-EWS3NXQH.js";import{j as T}from"./chunk-AQDAG4C2.js";import"./chunk-TT3E6PQD.js";import{c as w,i as x}from"./chunk-WNVFIGRJ.js";import"./chunk-BYK2LYTJ.js";import"./chunk-SOUDSSPT.js";import"./chunk-YN3ICWDL.js";import{c as k,e as S}from"./chunk-JXNVBN57.js";import"./chunk-4JRWSVEX.js";import{b,c as s}from"./chunk-FJD4SS3V.js";import"./chunk-TKNWVBCA.js";import"./chunk-V454E5QD.js";import"./chunk-4DDSFSZM.js";import{a as q}from"./chunk-I2CW5RII.js";import"./chunk-EHER635N.js";import"./chunk-D3V43LVN.js";import{a as y}from"./chunk-M5TAP4VX.js";import"./chunk-X4YGTLGV.js";import"./chunk-BBW4QHNN.js";import{d as m}from"./chunk-CL7MNENB.js";import"./chunk-5ZVMZG6E.js";import"./chunk-33HWVBTX.js";import{a as M,f as v,i as F}from"./chunk-ORNWO27Z.js";var e=v(F());var o=v(F());var j=({orgId:r,teamId:n,loading:i,onSave:u})=>{let[a,l]=(0,o.useState)(!1),[B,f]=(0,o.useState)([]),d=t=>{f(t.map(({uuid:c})=>c)),l(!0)},p=t=>{t.preventDefault(),u({members:B})};return o.default.createElement(o.default.Fragment,null,o.default.createElement(C,{onUpdate:t=>d(t),teamId:n,orgId:r,loading:i}),o.default.createElement("form",{onSubmit:p,"data-qa":"newMembersForm"},o.default.createElement(b,{pb:4,mt:4},o.default.createElement(s,{order:2},o.default.createElement(x,{"data-testid":"members-submit",disabled:!a||i,onClick:p},o.default.createElement(m,{id:"team.members.add.actions.save"}))),o.default.createElement(s,{mr:2,order:1},o.default.createElement(x,{type:"button","data-testid":"team-cancel",to:`/teams/${n}/team`,variant:"tertiary"},o.default.createElement(m,{id:"team.members.add.actions.cancel"}))))))},H=j;var z=({match:{params:{teamId:r}},history:n})=>{let{organisation:i,team:u}=q({teamId:r}),[a,l]=(0,e.useState)({}),{loading:B,data:f}=y(E,{variables:{teamId:r},fetchPolicy:"cache-and-network"}),{slug:d,name:p}=i||{},{name:t}=u||{},{team:{members:c}}=f||{team:{members:[]}},[N,{loading:Q}]=h($,{onCompleted:()=>{n.push(`/teams/${r}/team`)},onError:g=>{l({type:"error",message:A(g)})}}),U=({members:g})=>{let D=c.map(({uuid:W})=>W).concat(g);N({variables:{organisation:d,team:r,attributes:{members:D}}})};return e.default.createElement(e.default.Fragment,null,e.default.createElement(L,{id:"team.members.add.title",breadcrumbs:[t,p]}),e.default.createElement(T,null,e.default.createElement(s,{flex:1,mb:[4,0]},e.default.createElement(P,{flexWrap:["wrap","nowrap"]},e.default.createElement(S,{to:`/teams/${r}/team`},e.default.createElement(m,{id:"team.members.heading",values:{team:t}})),e.default.createElement(m,{id:"team.members.add.title"}))),e.default.createElement(s,{pr:1,width:[1,"auto"]},e.default.createElement(w,{href:"/docs/account-and-billing/manage-users"},e.default.createElement(m,{id:"team.members.add.guide"})))),e.default.createElement(b,{mx:4,my:4},e.default.createElement(k,{as:"h2",level:"sm"},e.default.createElement(m,{id:"team.members.add.heading"}))),a&&a.type&&e.default.createElement(G,M({"data-qa":"addMembers",p:null,pt:4,px:4,pb:0,duration:0},a)),e.default.createElement(s,{mx:4},e.default.createElement(H,{onSave:U,teamId:r,orgId:d,loading:Q})))},ie=z;export{ie as default};
//# sourceMappingURL=AddMembers-HVBQKLXN.js.map
