import{s as g,e as k,d as S,f as w,i as b,x as y,k as C,n as d,z as T,W as v}from"./scheduler.Df3gJpkL.js";import{S as D,i as F,g as L,a as f,e as M,t as u,c as _,b as $,m as h,d as p}from"./index.DTzUNj_H.js";import{L as q,T as z}from"./Loading.CBQysQid.js";import{S as A}from"./ScrollFrame.CdszIsPX.js";import{d as E}from"./stores.D0bXrGtW.js";function I(l){let e,r;return e=new q({}),{c(){_(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,n){h(e,t,n),r=!0},p:d,i(t){r||(u(e.$$.fragment,t),r=!0)},o(t){f(e.$$.fragment,t),r=!1},d(t){p(e,t)}}}function N(l){let e,r;return e=new A({props:{$$slots:{default:[W]},$$scope:{ctx:l}}}),{c(){_(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,n){h(e,t,n),r=!0},p(t,n){const c={};n&21&&(c.$$scope={dirty:n,ctx:t}),e.$set(c)},i(t){r||(u(e.$$.fragment,t),r=!0)},o(t){f(e.$$.fragment,t),r=!1},d(t){p(e,t)}}}function W(l){var t;let e,r;return e=new z({props:{tree:(t=l[2])==null?void 0:t.tree,theme:l[0]}}),e.$on("elementClick",l[3]),{c(){_(e.$$.fragment)},l(n){$(e.$$.fragment,n)},m(n,c){h(e,n,c),r=!0},p(n,c){var i;const s={};c&4&&(s.tree=(i=n[2])==null?void 0:i.tree),c&1&&(s.theme=n[0]),e.$set(s)},i(n){r||(u(e.$$.fragment,n),r=!0)},o(n){f(e.$$.fragment,n),r=!1},d(n){p(e,n)}}}function j(l){let e,r,t,n;const c=[N,I],s=[];function i(a,o){var m;return(m=a[2])!=null&&m.tree?0:1}return r=i(l),t=s[r]=c[r](l),{c(){e=k("main"),t.c(),this.h()},l(a){e=S(a,"MAIN",{class:!0});var o=w(e);t.l(o),o.forEach(b),this.h()},h(){y(e,"class","svelte-51re1e")},m(a,o){C(a,e,o),s[r].m(e,null),n=!0},p(a,[o]){let m=r;r=i(a),r===m?s[r].p(a,o):(L(),f(s[m],1,1,()=>{s[m]=null}),M(),t=s[r],t?t.p(a,o):(t=s[r]=c[r](a),t.c()),u(t,1),t.m(e,null))},i(a){n||(u(t),n=!0)},o(a){f(t),n=!1},d(a){a&&b(e),s[r].d()}}}function x(l,e,r){let t,n=d,c=()=>(n(),n=T(i,o=>r(2,t=o)),i);l.$$.on_destroy.push(()=>n());let{theme:s}=e,{treeStore:i=E}=e;c();function a(o){v.call(this,l,o)}return l.$$set=o=>{"theme"in o&&r(0,s=o.theme),"treeStore"in o&&c(r(1,i=o.treeStore))},[s,i,t,a]}class O extends D{constructor(e){super(),F(this,e,x,j,g,{theme:0,treeStore:1})}}export{O as D};
