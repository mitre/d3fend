import{e as N}from"../chunks/index.g5YcAAdQ.js";import{s as O,e as p,b as x,t as D,d as m,f as y,y as P,j as k,i as h,h as w,x as S,k as T,l as f,n as A,N as z}from"../chunks/scheduler.Df3gJpkL.js";import{e as H}from"../chunks/each.CU-7MgHx.js";import{S as B,i as C}from"../chunks/index.DTzUNj_H.js";import{G}from"../chunks/lib.VMLB1uup.js";const q=!0;async function F({fetch:s}){const t=await s("/api/tactic/all.json"),l=await t.json();return t.status!==200&&N(500,data.message),{graph:l}}const V=Object.freeze(Object.defineProperty({__proto__:null,load:F,prerender:q},Symbol.toStringTag,{value:"Module"}));function L(s,t,l){const n=s.slice();return n[2]=t[l],n}function M(s){let t,l,n,_=s[2]["rdfs:label"]+"",o,u;return{c(){t=p("tr"),l=p("td"),n=p("a"),o=D(_),u=x(),this.h()},l(i){t=m(i,"TR",{});var d=y(t);l=m(d,"TD",{});var E=y(l);n=m(E,"A",{href:!0});var g=y(n);o=w(g,_),g.forEach(h),E.forEach(h),u=k(d),d.forEach(h),this.h()},h(){S(n,"href","/tactic/"+s[2]["@id"]+"/")},m(i,d){T(i,t,d),f(t,l),f(l,n),f(n,o),f(t,u)},p:A,d(i){i&&h(t)}}}function R(s){let t,l,n="<th>D3FEND Tactic Name</th>",_,o,u,i,d,E=s[0].graph.length+"",g,v=H(s[0].graph),r=[];for(let e=0;e<v.length;e+=1)r[e]=M(L(s,v,e));return{c(){t=p("table"),l=p("thead"),l.innerHTML=n,_=x(),o=p("tbody");for(let e=0;e<r.length;e+=1)r[e].c();u=x(),i=p("p"),d=D("total count: "),g=D(E),this.h()},l(e){t=m(e,"TABLE",{id:!0,class:!0});var c=y(t);l=m(c,"THEAD",{"data-svelte-h":!0}),P(l)!=="svelte-12tszhw"&&(l.innerHTML=n),_=k(c),o=m(c,"TBODY",{});var a=y(o);for(let j=0;j<r.length;j+=1)r[j].l(a);a.forEach(h),c.forEach(h),u=k(e),i=m(e,"P",{});var b=y(i);d=w(b,"total count: "),g=w(b,E),b.forEach(h),this.h()},h(){S(t,"id","mappings"),S(t,"class","table-auto")},m(e,c){T(e,t,c),f(t,l),f(t,_),f(t,o);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(o,null);T(e,u,c),T(e,i,c),f(i,d),f(i,g)},p(e,[c]){if(c&1){v=H(e[0].graph);let a;for(a=0;a<v.length;a+=1){const b=L(e,v,a);r[a]?r[a].p(b,c):(r[a]=M(b),r[a].c(),r[a].m(o,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=v.length}},i:A,o:A,d(e){e&&(h(t),h(u),h(i)),z(r,e)}}}function Y(s,t,l){let{data:n}=t,_=new G(n.graph);return s.$$set=o=>{"data"in o&&l(1,n=o.data)},[_,n]}class W extends B{constructor(t){super(),C(this,t,Y,R,O,{data:1})}}export{W as component,V as universal};