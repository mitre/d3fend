import{s as M,e as m,t as k,b as D,d as p,f as g,h as H,y as F,j as V,i as h,x as b,k as E,l as v,m as I,n as T,o as C,p as N,r as A}from"./scheduler.Df3gJpkL.js";import{S as q,i as w}from"./index.DTzUNj_H.js";import{u as L,v as P}from"./stores.D0bXrGtW.js";function S(i){let e,s='<small>A knowledge <a style="all:unset;display:inline;text-decoration:none;cursor:pointer" href="/cad">graph</a> of cybersecurity countermeasures</small>';return{c(){e=m("div"),e.innerHTML=s,this.h()},l(l){e=p(l,"DIV",{class:!0,"data-svelte-h":!0}),F(e)!=="svelte-fh0jr0"&&(e.innerHTML=s),this.h()},h(){b(e,"class","text-center tagline svelte-1ib5bv6")},m(l,a){E(l,e,a)},d(l){l&&h(e)}}}function j(i){let e,s,l=i[4].version+"",a,u,c,_;return{c(){e=m("div"),s=m("small"),a=k(l),this.h()},l(n){e=p(n,"DIV",{class:!0,title:!0});var o=g(e);s=p(o,"SMALL",{});var t=g(s);a=H(t,l),t.forEach(h),o.forEach(h),this.h()},h(){b(e,"class","text-center version svelte-1ib5bv6"),b(e,"title",u="D3FEND Version "+i[4].version+" released on "+i[4].release_date)},m(n,o){E(n,e,o),v(e,s),v(s,a),c||(_=N(s,"click",i[5]),c=!0)},p(n,o){o&16&&l!==(l=n[4].version+"")&&I(a,l),o&16&&u!==(u="D3FEND Version "+n[4].version+" released on "+n[4].release_date)&&b(e,"title",u)},d(n){n&&h(e),c=!1,_()}}}function U(i){let e,s,l,a,u="™",c,_,n,o,t=i[2]&&S(),r=i[4]&&i[3]&&j(i);return{c(){e=m("div"),s=m("div"),l=k(i[0]),a=m("sup"),a.textContent=u,c=D(),_=k(i[1]),n=D(),t&&t.c(),o=D(),r&&r.c(),this.h()},l(f){e=p(f,"DIV",{});var d=g(e);s=p(d,"DIV",{class:!0});var y=g(s);l=H(y,i[0]),a=p(y,"SUP",{class:!0,"data-svelte-h":!0}),F(a)!=="svelte-1lmjpig"&&(a.textContent=u),c=V(y),_=H(y,i[1]),y.forEach(h),n=V(d),t&&t.l(d),o=V(d),r&&r.l(d),d.forEach(h),this.h()},h(){b(a,"class","trademark fancy-font svelte-1ib5bv6"),b(s,"class","text-center logo fancy-font svelte-1ib5bv6")},m(f,d){E(f,e,d),v(e,s),v(s,l),v(s,a),v(s,c),v(s,_),v(e,n),t&&t.m(e,null),v(e,o),r&&r.m(e,null)},p(f,[d]){d&1&&I(l,f[0]),d&2&&I(_,f[1]),f[2]?t||(t=S(),t.c(),t.m(e,o)):t&&(t.d(1),t=null),f[4]&&f[3]?r?r.p(f,d):(r=j(f),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},i:T,o:T,d(f){f&&h(e),t&&t.d(),r&&r.d()}}}function z(i,e,s){let l,a;C(i,L,t=>s(6,l=t)),C(i,P,t=>s(4,a=t));let{header:u="D3FEND"}=e,{postHeader:c=""}=e,{displayTagline:_=!0}=e,{displayVersionInfo:n=!0}=e;function o(){A(L,l.display_refcount=!l.display_refcount,l)}return i.$$set=t=>{"header"in t&&s(0,u=t.header),"postHeader"in t&&s(1,c=t.postHeader),"displayTagline"in t&&s(2,_=t.displayTagline),"displayVersionInfo"in t&&s(3,n=t.displayVersionInfo)},[u,c,_,n,a,o]}class K extends q{constructor(e){super(),w(this,e,z,U,M,{header:0,postHeader:1,displayTagline:2,displayVersionInfo:3})}}export{K as H};