import{a as P}from"./chunk-2EBPDJGM.js";import{a as L}from"./chunk-IGBYPMTC.js";import{a as A}from"./chunk-KJKWVFWQ.js";import{a as q}from"./chunk-N5M54F45.js";import{a as H}from"./chunk-YN2S2TFI.js";import{a as h,b as C}from"./chunk-7MXQG6UX.js";import{a as u}from"./chunk-SCXJ6RQB.js";import{b as _,c as E,e as N}from"./chunk-JXNVBN57.js";import{d as i}from"./chunk-CL7MNENB.js";import{a as v,b,f as T,g as D,i as z}from"./chunk-ORNWO27Z.js";var e=T(z());var r=T(z());var $=class extends r.default.Component{constructor(){super();D(this,"timeUpdated",()=>{this.setState(()=>({timer:this.vidRef.current.currentTime*1e3}))});this.vidRef=r.default.createRef(),this.state={playing:!1,timer:0}}play(){this.setState({playing:!0}),this.vidRef.current.play()}get formattedTimer(){return C({number:this.state.timer,formatter:"humanDuration"})}render(){return r.default.createElement("div",{className:"video-player"},r.default.createElement("div",{className:"video-player__timer"},r.default.createElement("span",null,this.formattedTimer)),r.default.createElement("video",{ref:this.vidRef,onTimeUpdate:this.timeUpdated,onPlay:this.play.bind(this),poster:this.props.poster,src:this.props.src,controls:!0,playsInline:!0}))}},V=$;var l=T(z());var j=({screenshots:m})=>l.default.createElement("div",{className:"filmstrip"},l.default.createElement("div",{className:"filmstrip__clip",style:{width:`${110*m.length+1}px`}},m.map((o,n)=>l.default.createElement("div",{key:n,className:"filmstrip__frame"},l.default.createElement(h,{value:parseInt(o.timing),formatter:"humanDuration"}),l.default.createElement("img",{width:"140",src:o.url,loading:"lazy"})))));j.defaultProps={screenshots:[]};var B=j;var re=e.default.lazy(()=>import("./HarAssetsTypeChart-XTWJZGSL.js")),oe=e.default.lazy(()=>import("./HarRequestTable-MNY5MD5N.js")),ne=e.default.lazy(()=>import("./MainThreadActivity-EMK4QLOL.js")),ae=e.default.lazy(()=>import("./FeedbackBlock-W4EQRLI5.js")),le=["lighthouse-performance-score","lighthouse-pwa-score","lighthouse-accessibility-score","lighthouse-best-practices-score","lighthouse-seo-score","third_party_count","third_party_main_thread_duration","third_party_size_in_bytes","firstRender","first-interactive","first-meaningful-paint","max-potential-fid","visually_complete","js-parse-compile","onload","visually_complete_85","oncontentload","asset_count","page_dns_timing","page_tcp_timing","page_ssl_timing","page_download_timing","page_body_size_in_bytes","html_body_size_in_bytes","js_body_size_in_bytes","image_body_size_in_bytes","video_body_size_in_bytes","font_body_size_in_bytes","json_body_size_in_bytes","css_body_size_in_bytes","page_size_in_bytes","html_size_in_bytes","js_size_in_bytes","image_size_in_bytes","video_size_in_bytes","font_size_in_bytes","json_size_in_bytes","css_size_in_bytes","estimated-input-latency"],I=["largest_contentful_paint","cumulative-layout-shift","total-blocking-time","time-to-first-byte","page_wait_timing","first-contentful-paint","speed_index","consistently-interactive","testDuration"],U=({status:m,runMode:o,runtimeError:n,error:k,errorMessage:y,errorCode:d,measurements:O,screenshotUrl:c,videoUrl:x,screenshotTimeline:M,har:a,harUrl:W,mainThreadActivity:S})=>{let X=q(O,le).sort((t,s)=>{let g=I.indexOf(t.name),p=I.indexOf(s.name);return g<0?1:p<0||g<p?-1:1}).map(t=>({metric:e.default.createElement(h,b(v({},t),{level:"lg"})),label:t.label})),f=(a&&a.log&&a.log.entries||[]).slice().sort((t,s)=>new Date(t.startedDateTime)-new Date(s.startedDateTime)).map((t,s)=>{let g=A(t.response.content.mimeType),p=new URL(t.request.url),{blocked:J,dns:K,connect:Q,send:Y,wait:Z,receive:R,ssl:ee}=t.timings,te=[J,K,Q,Y,Z,R,ee].reduce((F,w)=>w<=0?F:F+w,0),ie=t.response.status>=300&&t.response.status<400?"REDIRECT":t.request.method,se=t._priority==="VeryHigh"?"Very High":t._priority==="VeryLow"?"Very Low":t._priority;return b(v({},t),{sequence:s+1,host:p.host,pathname:p.pathname,assetClassification:g,method:ie,priority:se,totalRequestTime:te})}),G=(f&&[...new Set(f.map(t=>t.assetClassification))]||[]).map(t=>({name:t}));return e.default.createElement("div",null,e.default.createElement("div",{className:"page-section"},e.default.createElement(()=>!o||o==="standard_mode"?null:e.default.createElement(e.Suspense,{fallback:e.default.createElement("div",null)},e.default.createElement(ae,{type:"warning",mb:4},e.default.createElement(i,{id:"test.mode.link"},t=>e.default.createElement(i,{id:`test.mode.${o}`,values:{link:e.default.createElement(N,{href:"/docs/guides/test-modes",target:"_blank"},t)}})))),null),e.default.createElement("div",{className:"row top-xs"},e.default.createElement("div",{className:"col-xs-12 col-md-8"},m==="errored"&&e.default.createElement("div",null,e.default.createElement(()=>d?e.default.createElement(e.default.Fragment,null,e.default.createElement(E,null,e.default.createElement(i,{id:"snapshot.runtimeError"},t=>e.default.createElement(e.default.Fragment,null,e.default.createElement(i,{id:`test.error.${d}.title`,defaultMessage:t}),e.default.createElement(i,{id:`test.error.${d}.description`,defaultMessage:"null"},s=>s[0]==="null"?null:`: ${s}`)))),e.default.createElement(i,{id:`test.error.${d}.message`,defaultMessage:"null",values:{errorMessage:y}},t=>e.default.createElement(_,{as:"p"},t[0]==="null"?y:t)),e.default.createElement(i,{id:`test.error.${d}.hint`,defaultMessage:"null"},t=>t[0]==="null"?null:e.default.createElement(_,{as:"p",fontSize:2,color:"grey400"},t))):y?e.default.createElement(e.default.Fragment,null,e.default.createElement("h2",{className:"type-medium"},e.default.createElement(i,{id:"snapshot.runtimeError"})),e.default.createElement(_,{as:"p",color:"grey300"},y)):k||n&&n.message?e.default.createElement(e.default.Fragment,null,e.default.createElement("h2",{className:"type-medium"},e.default.createElement(i,{id:"snapshot.runtimeError"})),e.default.createElement(_,{as:"p",color:"grey300"},k||n&&n.message)):null,null))||e.default.createElement(H,{items:X})),e.default.createElement("div",{className:"col-xs-12 col-md-4"},x&&e.default.createElement(e.Suspense,{fallback:e.default.createElement("div",null)},e.default.createElement(V,{src:x,poster:c}))||c&&e.default.createElement(e.Suspense,{fallback:e.default.createElement("div",null)},e.default.createElement(L,{src:c,width:"100%",borderWidth:"1px",borderStyle:"solid",borderColor:"grey100"}))||null))),!M||e.default.createElement("div",{className:"page-section"},e.default.createElement("h2",{className:"type-medium"},"Render timeline"),e.default.createElement(e.Suspense,{fallback:e.default.createElement("div",null)},e.default.createElement(B,{screenshots:M}))),S&&e.default.createElement(e.Suspense,{fallback:e.default.createElement(u,null)},e.default.createElement(ne,{mainThreadActivity:S}))||e.default.createElement(u,null),a&&e.default.createElement(e.Suspense,{fallback:e.default.createElement(u,null)},e.default.createElement(P,{initialState:G},e.default.createElement(re,{entries:f,error:a.error}),e.default.createElement(oe,{harUrl:W,har:a,entries:f})))||e.default.createElement(u,null))};U.defaultProps={measurements:[]};var Fe=U;export{Fe as a};
//# sourceMappingURL=chunk-N4ERTASB.js.map
