import{e as G}from"../chunks/index.g5YcAAdQ.js";import{s as K,b as A,e as T,t as g,j as F,d as D,y as U,f as E,h as $,i as m,x as c,k as j,l as r}from"../chunks/scheduler.Df3gJpkL.js";import{S as W,i as X,c as H,b as J,m as x,t as Q,a as R,d as B}from"../chunks/index.DTzUNj_H.js";import{S as Y}from"../chunks/SPARQLTable.CPpU6rzM.js";import{T as Z}from"../chunks/Title.B-pDgfy6.js";import{i as ee}from"../chunks/lib.VMLB1uup.js";async function te({fetch:p,params:n}){const{version:f}=n,a=await p(`/api/mappings/nist.${f}.json`),S=await a.json();return a.status!==200&&G(500,data.message),{mappings:S,version:f}}const fe=Object.freeze(Object.defineProperty({__proto__:null,load:te},Symbol.toStringTag,{value:"Module"}));function ae(p){let n,f,a,S=`<h1>Semantic D3FEND Mappings to NIST 800-53</h1> <p>The D3FEND team created this mapping in order to help users navigate between
    the two data sets.</p>`,s,o,i,q,_,C,b,O,h,y,w,I,v,L,N,M,V,u,d;return n=new Z({props:{title:"Semantic D3FEND Mappings to NIST 800-53"}}),u=new Y({props:{results:p[0].mappings,transform_row:p[1]}}),{c(){H(n.$$.fragment),f=A(),a=T("section"),a.innerHTML=S,s=A(),o=T("section"),i=T("div"),q=g(`Download in 
    `),_=T("a"),C=g("CSV"),O=g(`,
    `),h=T("a"),y=g("TSV"),I=g(`,
    `),v=T("a"),L=g("JSON-LD"),M=g("."),V=A(),H(u.$$.fragment),this.h()},l(e){J(n.$$.fragment,e),f=F(e),a=D(e,"SECTION",{class:!0,"data-svelte-h":!0}),U(a)!=="svelte-z9jylk"&&(a.innerHTML=S),s=F(e),o=D(e,"SECTION",{class:!0});var t=E(o);i=D(t,"DIV",{class:!0});var l=E(i);q=$(l,`Download in 
    `),_=D(l,"A",{href:!0});var P=E(_);C=$(P,"CSV"),P.forEach(m),O=$(l,`,
    `),h=D(l,"A",{href:!0});var k=E(h);y=$(k,"TSV"),k.forEach(m),I=$(l,`,
    `),v=D(l,"A",{href:!0});var z=E(v);L=$(z,"JSON-LD"),z.forEach(m),M=$(l,"."),l.forEach(m),V=F(t),J(u.$$.fragment,t),t.forEach(m),this.h()},h(){c(a,"class","content-wider text-center"),c(_,"href",b=`/api/mappings/nist.${p[0].version}.csv`),c(h,"href",w=`/api/mappings/nist.${p[0].version}.tsv`),c(v,"href",N=`/api/mappings/nist.${p[0].version}.json`),c(i,"class","text-right"),c(o,"class","content-wider card")},m(e,t){x(n,e,t),j(e,f,t),j(e,a,t),j(e,s,t),j(e,o,t),r(o,i),r(i,q),r(i,_),r(_,C),r(i,O),r(i,h),r(h,y),r(i,I),r(i,v),r(v,L),r(i,M),r(o,V),x(u,o,null),d=!0},p(e,[t]){(!d||t&1&&b!==(b=`/api/mappings/nist.${e[0].version}.csv`))&&c(_,"href",b),(!d||t&1&&w!==(w=`/api/mappings/nist.${e[0].version}.tsv`))&&c(h,"href",w),(!d||t&1&&N!==(N=`/api/mappings/nist.${e[0].version}.json`))&&c(v,"href",N);const l={};t&1&&(l.results=e[0].mappings),u.$set(l)},i(e){d||(Q(n.$$.fragment,e),Q(u.$$.fragment,e),d=!0)},o(e){R(n.$$.fragment,e),R(u.$$.fragment,e),d=!1},d(e){e&&(m(f),m(a),m(s),m(o)),B(n,e),B(u)}}}function ne(p,n,f){let{data:a}=n;function S(s){let o=ee(s.Defensive_Technique.value);return s.Defensive_Technique.value=`<a href="/technique/${o}">${s.Technique.value}</a>`,s}return p.$$set=s=>{"data"in s&&f(0,a=s.data)},[a,S]}class me extends W{constructor(n){super(),X(this,n,ne,ae,K,{data:0})}}export{me as component,fe as universal};