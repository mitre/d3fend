import{e as _t}from"../chunks/index.g5YcAAdQ.js";import{s as pt,b as I,e as p,j as N,d as m,f as y,y as B,i as h,x as w,k as $,l as u,R as lt,p as X,A as mt,o as vt,q as bt,t as O,h as R,G as gt,m as tt,n as H,v as nt,P as kt}from"../chunks/scheduler.DDVliNtX.js";import{h as st,u as Et}from"../chunks/await_block.eDnGvKeC.js";import{e as ot}from"../chunks/each.BFyodu2L.js";import{S as Dt,i as xt,c as Y,b as Q,m as W,t as P,a as F,d as Z,g as ht,e as dt}from"../chunks/index.iWffroUJ.js";import{H as yt}from"../chunks/Header.DSe4Rnl1.js";import{T as Ct}from"../chunks/Title.geje0d_0.js";/* empty css                                                    */import{e as wt,S as Tt}from"../chunks/extract.D4H_e2Eu.js";import{G as it}from"../chunks/lib.DSnscA8f.js";import{p as qt}from"../chunks/stores.ZQnSlIV2.js";async function It({fetch:o}){const t=await o("/api/dao/artifacts.json"),r=await t.json();return t.status!==200&&_t(500,data.message),{techniques:r}}const Jt=Object.freeze(Object.defineProperty({__proto__:null,load:It},Symbol.toStringTag,{value:"Module"}));function ct(o,t,r){const e=o.slice();return e[19]=t[r],e}function Nt(o){let t,r=o[22].message+"",e;return{c(){t=p("p"),e=O(r),this.h()},l(l){t=m(l,"P",{style:!0});var s=y(t);e=R(s,r),s.forEach(h),this.h()},h(){gt(t,"color","red")},m(l,s){$(l,t,s),u(t,e)},p(l,s){s&8&&r!==(r=l[22].message+"")&&tt(e,r)},i:H,o:H,d(l){l&&h(t)}}}function $t(o){let t,r,e,l;const s=[St,At],n=[];function i(c,v){return c[18].length>0?0:!c[2]&&c[18].length<1?1:-1}return~(t=i(o))&&(r=n[t]=s[t](o)),{c(){r&&r.c(),e=nt()},l(c){r&&r.l(c),e=nt()},m(c,v){~t&&n[t].m(c,v),$(c,e,v),l=!0},p(c,v){let k=t;t=i(c),t===k?~t&&n[t].p(c,v):(r&&(ht(),F(n[k],1,1,()=>{n[k]=null}),dt()),~t?(r=n[t],r?r.p(c,v):(r=n[t]=s[t](c),r.c()),P(r,1),r.m(e.parentNode,e)):r=null)},i(c){l||(P(r),l=!0)},o(c){F(r),l=!1},d(c){c&&h(e),~t&&n[t].d(c)}}}function At(o){let t,r="No D3FEND Artifacts found in text.";return{c(){t=p("div"),t.textContent=r,this.h()},l(e){t=m(e,"DIV",{class:!0,"data-svelte-h":!0}),B(t)!=="svelte-505pc9"&&(t.textContent=r),this.h()},h(){w(t,"class","card")},m(e,l){$(e,t,l)},p:H,i:H,o:H,d(e){e&&h(t)}}}function St(o){let t,r,e=o[0]&&ft(o);return{c(){t=p("div"),e&&e.c(),this.h()},l(l){t=m(l,"DIV",{class:!0});var s=y(t);e&&e.l(s),s.forEach(h),this.h()},h(){w(t,"class","card")},m(l,s){$(l,t,s),e&&e.m(t,null),r=!0},p(l,s){l[0]?e?(e.p(l,s),s&1&&P(e,1)):(e=ft(l),e.c(),P(e,1),e.m(t,null)):e&&(ht(),F(e,1,1,()=>{e=null}),dt())},i(l){r||(P(e),r=!0)},o(l){F(e),r=!1},d(l){l&&h(t),e&&e.d()}}}function ft(o){let t,r,e,l,s,n,i,c,v=o[0].length+"",k,V,A,E,T;e=new Tt({props:{url:o[4].url}});let q=ot(o[0]),d=[];for(let a=0;a<q.length;a+=1)d[a]=ut(ct(o,q,a));return{c(){t=p("div"),r=p("div"),Y(e.$$.fragment),l=I(),s=p("div"),n=p("b"),i=p("i"),c=O("Extracted "),k=O(v),V=O(" unique IDs:"),A=I(),E=p("dl");for(let a=0;a<d.length;a+=1)d[a].c();this.h()},l(a){t=m(a,"DIV",{class:!0});var g=y(t);r=m(g,"DIV",{class:!0});var _=y(r);Q(e.$$.fragment,_),_.forEach(h),g.forEach(h),l=N(a),s=m(a,"DIV",{class:!0});var f=y(s);n=m(f,"B",{});var S=y(n);i=m(S,"I",{});var j=y(i);c=R(j,"Extracted "),k=R(j,v),V=R(j," unique IDs:"),j.forEach(h),S.forEach(h),A=N(f),E=m(f,"DL",{class:!0});var M=y(E);for(let L=0;L<d.length;L+=1)d[L].l(M);M.forEach(h),f.forEach(h),this.h()},h(){w(r,"class","text-right"),w(t,"class","stretch"),w(E,"class","flex flex-wrap svelte-1bg32kq"),w(s,"class","")},m(a,g){$(a,t,g),u(t,r),W(e,r,null),$(a,l,g),$(a,s,g),u(s,n),u(n,i),u(i,c),u(i,k),u(i,V),u(s,A),u(s,E);for(let _=0;_<d.length;_+=1)d[_]&&d[_].m(E,null);T=!0},p(a,g){const _={};if(g&16&&(_.url=a[4].url),e.$set(_),(!T||g&1)&&v!==(v=a[0].length+"")&&tt(k,v),g&1){q=ot(a[0]);let f;for(f=0;f<q.length;f+=1){const S=ct(a,q,f);d[f]?d[f].p(S,g):(d[f]=ut(S),d[f].c(),d[f].m(E,null))}for(;f<d.length;f+=1)d[f].d(1);d.length=q.length}},i(a){T||(P(e.$$.fragment,a),T=!0)},o(a){F(e.$$.fragment,a),T=!1},d(a){a&&(h(t),h(l),h(s)),Z(e),kt(d,a)}}}function ut(o){let t,r,e=o[19]+"",l,s;return{c(){t=p("dd"),r=p("a"),l=O(e),this.h()},l(n){t=m(n,"DD",{});var i=y(t);r=m(i,"A",{href:!0});var c=y(r);l=R(c,e),c.forEach(h),i.forEach(h),this.h()},h(){w(r,"href",s="/dao/artifact/"+o[19])},m(n,i){$(n,t,i),u(t,r),u(r,l)},p(n,i){i&1&&e!==(e=n[19]+"")&&tt(l,e),i&1&&s!==(s="/dao/artifact/"+n[19])&&w(r,"href",s)},d(n){n&&h(t)}}}function Pt(o){let t;return{c(){t=O("enter text and click go")},l(r){t=R(r,"enter text and click go")},m(r,e){$(r,t,e)},p:H,i:H,o:H,d(r){r&&h(t)}}}function Vt(o){let t,r,e,l,s,n,i,c="D3FEND Artifact Extractor",v,k,V=`Extracts D3FEND artifacts from blobs of text. You may also want to try the <a href="/tools/d3fend-extractor">D3FEND Extractor</a>
      or <a href="/tools/attack-extractor">ATT&amp;CK Extractor.</a>`,A,E,T="<i>Paste any text containing D3FEND Artifacts:</i>",q,d,a,g,_,f,S="GO",j,M,L,K,U,G,z,J,et;t=new Ct({props:{title:"D3FEND Artifact Extractor | Tools | "}}),l=new yt({});let x={ctx:o,current:null,token:null,hasCatch:!0,pending:Pt,then:$t,catch:Nt,value:18,error:22,blocks:[,,,]};return st(G=o[3],x),{c(){Y(t.$$.fragment),r=I(),e=p("section"),Y(l.$$.fragment),s=I(),n=p("div"),i=p("h1"),i.textContent=c,v=I(),k=p("p"),k.innerHTML=V,A=I(),E=p("p"),E.innerHTML=T,q=I(),d=p("div"),a=p("textarea"),g=I(),_=p("div"),f=p("button"),f.textContent=S,j=I(),M=p("br"),L=I(),K=p("br"),U=I(),x.block.c(),this.h()},l(D){Q(t.$$.fragment,D),r=N(D),e=m(D,"SECTION",{class:!0});var b=y(e);Q(l.$$.fragment,b),s=N(b),n=m(b,"DIV",{class:!0});var C=y(n);i=m(C,"H1",{"data-svelte-h":!0}),B(i)!=="svelte-1veabte"&&(i.textContent=c),v=N(C),k=m(C,"P",{"data-svelte-h":!0}),B(k)!=="svelte-5bld3z"&&(k.innerHTML=V),A=N(C),E=m(C,"P",{class:!0,"data-svelte-h":!0}),B(E)!=="svelte-16bzqxf"&&(E.innerHTML=T),q=N(C),d=m(C,"DIV",{});var rt=y(d);a=m(rt,"TEXTAREA",{class:!0}),y(a).forEach(h),rt.forEach(h),g=N(C),_=m(C,"DIV",{});var at=y(_);f=m(at,"BUTTON",{class:!0,"data-svelte-h":!0}),B(f)!=="svelte-88k995"&&(f.textContent=S),at.forEach(h),j=N(C),M=m(C,"BR",{}),C.forEach(h),L=N(b),K=m(b,"BR",{}),U=N(b),x.block.l(b),b.forEach(h),this.h()},h(){w(E,"class","text-2"),w(a,"class","svelte-1bg32kq"),w(f,"class","button"),w(n,"class","card"),w(e,"class"," svelte-1bg32kq")},m(D,b){W(t,D,b),$(D,r,b),$(D,e,b),W(l,e,null),u(e,s),u(e,n),u(n,i),u(n,v),u(n,k),u(n,A),u(n,E),u(n,q),u(n,d),u(d,a),lt(a,o[1]),u(n,g),u(n,_),u(_,f),u(n,j),u(n,M),u(e,L),u(e,K),u(e,U),x.block.m(e,x.anchor=null),x.mount=()=>e,x.anchor=null,z=!0,J||(et=[X(a,"input",o[8]),X(a,"keypress",o[6]),X(f,"click",o[5])],J=!0)},p(D,[b]){o=D,b&2&&lt(a,o[1]),x.ctx=o,b&8&&G!==(G=o[3])&&st(G,x)||Et(x,o,b)},i(D){z||(P(t.$$.fragment,D),P(l.$$.fragment,D),P(x.block),z=!0)},o(D){F(t.$$.fragment,D),F(l.$$.fragment,D);for(let b=0;b<3;b+=1){const C=x.blocks[b];F(C)}z=!1},d(D){D&&(h(r),h(e)),Z(t,D),Z(l),x.block.d(),x.token=null,x=null,J=!1,mt(et)}}}function jt(o,t,r){let e;vt(o,qt,a=>r(4,e=a));let{data:l}=t;const s=new it(l.techniques,{index:!0,index_key:"d3f:d3fend-id"});let n,i="",c=!0,v;v=e.url.searchParams.get("q");let k=[];async function V(a){const g=`/api/dao/artifact/${a}.json`,_=await fetch(g);if(_.status==404)return{id:a,def_to_off:[],description:{graph:[]},status:_.status};if(_.ok){const f=await _.json();return{id:a,def_to_off:f.def_to_off,description:new it(f.description)}}else throw new Error(i)}async function A(){let a=r(0,n=Array.from(new Set(wt(i,s))));return a&&(a.forEach(function(g){let _=V(g);_&&k.push(_)}),e.url.searchParams.set("q",JSON.stringify(a)),history.replaceState(null,"mapping",e.url)),k}let E=A();function T(){r(3,E=A()),r(2,c=!1)}function q(a){a.ctrlKey==!0&&a.keyCode==13&&T()}bt(async()=>{v?(r(1,i=v),T()):r(1,i="")});function d(){i=this.value,r(1,i)}return o.$$set=a=>{"data"in a&&r(7,l=a.data)},[n,i,c,E,e,T,q,l,d]}class Xt extends Dt{constructor(t){super(),xt(this,t,jt,Vt,pt,{data:7})}}export{Xt as component,Jt as universal};