import{d as B}from"../chunks/dao-artifacts.C_NAGpf0.js";import{s as C,e as p,b as D,t as x,d as m,f as v,y as G,j as A,i as f,h as L,x as j,k,l as d,n as H,N}from"../chunks/scheduler.Df3gJpkL.js";import{e as M}from"../chunks/each.CU-7MgHx.js";import{S as q,i as w}from"../chunks/index.DTzUNj_H.js";import{G as z}from"../chunks/lib.VMLB1uup.js";function I(n){return B(n)}const V=Object.freeze(Object.defineProperty({__proto__:null,load:I},Symbol.toStringTag,{value:"Module"}));function O(n,t,r){const h=n.slice();return h[2]=t[r],h}function P(n){let t,r,h=n[2]["@id"]+"",u,i,_,o,b=n[2]["rdfs:label"]+"",y,g;return{c(){t=p("tr"),r=p("td"),u=x(h),i=D(),_=p("td"),o=p("a"),y=x(b),g=D(),this.h()},l(c){t=m(c,"TR",{});var e=v(t);r=m(e,"TD",{});var T=v(r);u=L(T,h),T.forEach(f),i=A(e),_=m(e,"TD",{});var a=v(_);o=m(a,"A",{href:!0});var s=v(o);y=L(s,b),s.forEach(f),a.forEach(f),g=A(e),e.forEach(f),this.h()},h(){j(o,"href","/dao/artifact/"+n[2]["@id"])},m(c,e){k(c,t,e),d(t,r),d(r,u),d(t,i),d(t,_),d(_,o),d(o,y),d(t,g)},p:H,d(c){c&&f(t)}}}function R(n){var T;let t,r,h='<th class="stretch">Identifier</th> <th>Digital Artifact Name</th>',u,i,_,o,b,y=((T=n[0].graph)==null?void 0:T.length)+"",g,c=M(n[0].graph),e=[];for(let a=0;a<c.length;a+=1)e[a]=P(O(n,c,a));return{c(){t=p("table"),r=p("thead"),r.innerHTML=h,u=D(),i=p("tbody");for(let a=0;a<e.length;a+=1)e[a].c();_=D(),o=p("p"),b=x("total count: "),g=x(y),this.h()},l(a){t=m(a,"TABLE",{id:!0,class:!0});var s=v(t);r=m(s,"THEAD",{"data-svelte-h":!0}),G(r)!=="svelte-rbmks2"&&(r.innerHTML=h),u=A(s),i=m(s,"TBODY",{});var l=v(i);for(let S=0;S<e.length;S+=1)e[S].l(l);l.forEach(f),s.forEach(f),_=A(a),o=m(a,"P",{});var E=v(o);b=L(E,"total count: "),g=L(E,y),E.forEach(f),this.h()},h(){j(t,"id","mappings"),j(t,"class","table-auto")},m(a,s){k(a,t,s),d(t,r),d(t,u),d(t,i);for(let l=0;l<e.length;l+=1)e[l]&&e[l].m(i,null);k(a,_,s),k(a,o,s),d(o,b),d(o,g)},p(a,[s]){if(s&1){c=M(a[0].graph);let l;for(l=0;l<c.length;l+=1){const E=O(a,c,l);e[l]?e[l].p(E,s):(e[l]=P(E),e[l].c(),e[l].m(i,null))}for(;l<e.length;l+=1)e[l].d(1);e.length=c.length}},i:H,o:H,d(a){a&&(f(t),f(_),f(o)),N(e,a)}}}function Y(n,t,r){let{data:h}=t,u=new z(h.da_graph);return n.$$set=i=>{"data"in i&&r(1,h=i.data)},[u,h]}class W extends q{constructor(t){super(),w(this,t,Y,R,C,{data:1})}}export{W as component,V as universal};
