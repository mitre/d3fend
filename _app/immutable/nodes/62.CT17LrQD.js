import{e as M}from"../chunks/index.g5YcAAdQ.js";import{s as N,e as p,b as D,t as j,d as m,f as v,v as O,j as w,i as f,h as k,w as x,k as T,l as d,n as S,I as P}from"../chunks/scheduler.Cph8Trd5.js";import{e as A}from"../chunks/each.DkdHin5j.js";import{S as z,i as B}from"../chunks/index.CThJCPP4.js";import{G as C}from"../chunks/lib.C6z0nzwW.js";async function F({fetch:s}){const t=await s("/api/technique/all.json"),r=await t.json();return t.status!==200&&M(500,r.message),{dtechs:r}}const U=Object.freeze(Object.defineProperty({__proto__:null,load:F},Symbol.toStringTag,{value:"Module"}));function H(s,t,r){const h=s.slice();return h[2]=t[r],h}function L(s){let t,r,h=s[2]["d3f:d3fend-id"]+"",u,i,_,n,b=s[2]["rdfs:label"]+"",E,g;return{c(){t=p("tr"),r=p("td"),u=j(h),i=D(),_=p("td"),n=p("a"),E=j(b),g=D(),this.h()},l(c){t=m(c,"TR",{});var e=v(t);r=m(e,"TD",{});var a=v(r);u=k(a,h),a.forEach(f),i=w(e),_=m(e,"TD",{});var o=v(_);n=m(o,"A",{href:!0});var l=v(n);E=k(l,b),l.forEach(f),o.forEach(f),g=w(e),e.forEach(f),this.h()},h(){x(n,"href","/layers?technique_id="+s[2]["@id"])},m(c,e){T(c,t,e),d(t,r),d(r,u),d(t,i),d(t,_),d(_,n),d(n,E),d(t,g)},p:S,d(c){c&&f(t)}}}function G(s){let t,r,h='<th class="stretch">D3FEND ID</th> <th>D3FEND Technique Name</th>',u,i,_,n,b,E=s[0].graph.length+"",g,c=A(s[0].graph),e=[];for(let a=0;a<c.length;a+=1)e[a]=L(H(s,c,a));return{c(){t=p("table"),r=p("thead"),r.innerHTML=h,u=D(),i=p("tbody");for(let a=0;a<e.length;a+=1)e[a].c();_=D(),n=p("p"),b=j("total count: "),g=j(E),this.h()},l(a){t=m(a,"TABLE",{id:!0,class:!0});var o=v(t);r=m(o,"THEAD",{"data-svelte-h":!0}),O(r)!=="svelte-1dx50zw"&&(r.innerHTML=h),u=w(o),i=m(o,"TBODY",{});var l=v(i);for(let q=0;q<e.length;q+=1)e[q].l(l);l.forEach(f),o.forEach(f),_=w(a),n=m(a,"P",{});var y=v(n);b=k(y,"total count: "),g=k(y,E),y.forEach(f),this.h()},h(){x(t,"id","mappings"),x(t,"class","table-auto")},m(a,o){T(a,t,o),d(t,r),d(t,u),d(t,i);for(let l=0;l<e.length;l+=1)e[l]&&e[l].m(i,null);T(a,_,o),T(a,n,o),d(n,b),d(n,g)},p(a,[o]){if(o&1){c=A(a[0].graph);let l;for(l=0;l<c.length;l+=1){const y=H(a,c,l);e[l]?e[l].p(y,o):(e[l]=L(y),e[l].c(),e[l].m(i,null))}for(;l<e.length;l+=1)e[l].d(1);e.length=c.length}},i:S,o:S,d(a){a&&(f(t),f(_),f(n)),P(e,a)}}}function I(s,t,r){let{data:h}=t,u=new C(h.dtechs);return s.$$set=i=>{"data"in i&&r(1,h=i.data)},[u,h]}class V extends z{constructor(t){super(),B(this,t,I,G,N,{data:1})}}export{V as component,U as universal};