import{S as O,i as R,s as V,k as m,q,a as k,l as E,m as v,r as y,h as n,c as A,n as x,b as B,H as r,C as I,V as Y}from"../chunks/index.38e6a1b1.js";import{G as j}from"../chunks/lib.1620f930.js";function w(c,t,l){const s=c.slice();return s[2]=t[l],s}function L(c){let t,l,s=c[2]["d3f:d3fend-id"]+"",D,_,i,u,T=c[2]["rdfs:label"]+"",p,b;return{c(){t=m("tr"),l=m("td"),D=q(s),_=k(),i=m("td"),u=m("a"),p=q(T),b=k(),this.h()},l(o){t=E(o,"TR",{});var d=v(t);l=E(d,"TD",{});var F=v(l);D=y(F,s),F.forEach(n),_=A(d),i=E(d,"TD",{});var N=v(i);u=E(N,"A",{href:!0});var g=v(u);p=y(g,T),g.forEach(n),N.forEach(n),b=A(d),d.forEach(n),this.h()},h(){x(u,"href","/technique/"+c[2]["@id"])},m(o,d){B(o,t,d),r(t,l),r(l,D),r(t,_),r(t,i),r(i,u),r(u,p),r(t,b)},p:I,d(o){o&&n(t)}}}function z(c){let t,l,s,D,_,i,u,T,p,b,o,d,F=c[0].graph.length+"",N,g=c[0].graph,h=[];for(let e=0;e<g.length;e+=1)h[e]=L(w(c,g,e));return{c(){t=m("table"),l=m("thead"),s=m("th"),D=q("D3FEND ID"),_=k(),i=m("th"),u=q("D3FEND Technique Name"),T=k(),p=m("tbody");for(let e=0;e<h.length;e+=1)h[e].c();b=k(),o=m("p"),d=q("total count: "),N=q(F),this.h()},l(e){t=E(e,"TABLE",{id:!0,class:!0});var f=v(t);l=E(f,"THEAD",{});var a=v(l);s=E(a,"TH",{class:!0});var H=v(s);D=y(H,"D3FEND ID"),H.forEach(n),_=A(a),i=E(a,"TH",{});var P=v(i);u=y(P,"D3FEND Technique Name"),P.forEach(n),a.forEach(n),T=A(f),p=E(f,"TBODY",{});var S=v(p);for(let G=0;G<h.length;G+=1)h[G].l(S);S.forEach(n),f.forEach(n),b=A(e),o=E(e,"P",{});var C=v(o);d=y(C,"total count: "),N=y(C,F),C.forEach(n),this.h()},h(){x(s,"class","stretch"),x(t,"id","mappings"),x(t,"class","table-auto")},m(e,f){B(e,t,f),r(t,l),r(l,s),r(s,D),r(l,_),r(l,i),r(i,u),r(t,T),r(t,p);for(let a=0;a<h.length;a+=1)h[a].m(p,null);B(e,b,f),B(e,o,f),r(o,d),r(o,N)},p(e,[f]){if(f&1){g=e[0].graph;let a;for(a=0;a<g.length;a+=1){const H=w(e,g,a);h[a]?h[a].p(H,f):(h[a]=L(H),h[a].c(),h[a].m(p,null))}for(;a<h.length;a+=1)h[a].d(1);h.length=g.length}},i:I,o:I,d(e){e&&n(t),Y(h,e),e&&n(b),e&&n(o)}}}function J(c,t,l){let{data:s}=t,D=new j(s.dtechs);return c.$$set=_=>{"data"in _&&l(1,s=_.data)},[D,s]}class Q extends O{constructor(t){super(),R(this,t,J,z,V,{data:1})}}export{Q as default};