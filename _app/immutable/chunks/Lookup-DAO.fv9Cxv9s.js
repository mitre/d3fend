import{s as p,e as _,d as h,f as g,i as f,q as b,k,F as y,V as w}from"./scheduler.XFNaxh87.js";import{S as I,i as $,t as d,a as u,f as S,c as v,b as A,m as D,d as F}from"./index.CZJgJfrq.js";import{g as C}from"./entry.Uv3GJV7O.js";import{S as q}from"./SimpleAutocomplete.DVzco0gJ.js";import{c as m,e as E}from"./lib.Bf3INatD.js";function L(o){let e,r,t;function a(n){o[5](n)}let s={items:o[1],labelFunction:m,keywordsFunction:o[3],placeholder:"Search D3FEND's "+o[1].length+" Artifacts",onChange:o[2]};return o[0]!==void 0&&(s.selectedItem=o[0]),e=new q({props:s}),y.push(()=>S(e,"selectedItem",a)),{c(){v(e.$$.fragment)},l(n){A(e.$$.fragment,n)},m(n,l){D(e,n,l),t=!0},p(n,l){const c={};!r&&l&1&&(r=!0,c.selectedItem=n[0],w(()=>r=!1)),e.$set(c)},i(n){t||(d(e.$$.fragment,n),t=!0)},o(n){u(e.$$.fragment,n),t=!1},d(n){F(e,n)}}}function V(o){let e,r,t=o[1].length>0&&L(o);return{c(){e=_("div"),t&&t.c(),this.h()},l(a){e=h(a,"DIV",{class:!0});var s=g(e);t&&t.l(s),s.forEach(f),this.h()},h(){b(e,"class","dao-lookup-wrapper")},m(a,s){k(a,e,s),t&&t.m(e,null),r=!0},p(a,[s]){a[1].length>0&&t.p(a,s)},i(a){r||(d(t),r=!0)},o(a){u(t),r=!1},d(a){a&&f(e),t&&t.d()}}}function N(o,e,r){let{da_graph:t}=e,a,s=t["@graph"];async function n(i){typeof window<"u"&&typeof i<"u"&&await C("/dao/artifact/"+i["@id"])}function l(i){return i?i["@id"]+" - "+m(i)+E(i):""}function c(i){a=i,r(0,a)}return o.$$set=i=>{"da_graph"in i&&r(4,t=i.da_graph)},[a,s,n,l,t,c]}class H extends I{constructor(e){super(),$(this,e,N,V,p,{da_graph:4})}}export{H as L};