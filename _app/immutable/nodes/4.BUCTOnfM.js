import{s as z,e as b,d as v,f as w,i as _,w as $,k as E,p as M,y as F,o as H,q as O,_ as j,I as B,n as G,b as y,j as D,F as m,l as k,c as J,u as K,g as P,a as Q}from"../chunks/scheduler.BuUavueM.js";import{S as A,i as q,g as R,a as I,e as U,t as N,c as T,b as V,m as C,d as L}from"../chunks/index.B8nkrWGc.js";import{d as X}from"../chunks/stores.joY6sq-3.js";import{L as Y,T as Z}from"../chunks/Loading.C3fUnRvY.js";import{H as x}from"../chunks/Header.FNfR-j_w.js";import"../chunks/entry.D5y5HF-9.js";/* empty css                                                         */import"../chunks/marked.esm.D23x4JZT.js";function ee(r){let t,e;return t=new Y({}),{c(){T(t.$$.fragment)},l(s){V(t.$$.fragment,s)},m(s,i){C(t,s,i),e=!0},p:G,i(s){e||(N(t.$$.fragment,s),e=!0)},o(s){I(t.$$.fragment,s),e=!1},d(s){L(t,s)}}}function se(r){let t,e,s,i,c,u,d,o=r[2]>0&&S(r),a=(r[2]<r[3]||r[2]===void 0)&&r[5]<r[4]&&W(r);return i=new Z({props:{tree:r[7],theme:r[0]}}),{c(){o&&o.c(),t=y(),a&&a.c(),e=y(),s=b("section"),T(i.$$.fragment),this.h()},l(l){o&&o.l(l),t=D(l),a&&a.l(l),e=D(l),s=v(l,"SECTION",{class:!0});var n=w(s);V(i.$$.fragment,n),n.forEach(_),this.h()},h(){$(s,"class","svelte-18shyb5")},m(l,n){o&&o.m(l,n),E(l,t,n),a&&a.m(l,n),E(l,e,n),E(l,s,n),C(i,s,null),r[10](s),c=!0,u||(d=M(s,"scroll",r[11]),u=!0)},p(l,n){l[2]>0?o?o.p(l,n):(o=S(l),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null),(l[2]<l[3]||l[2]===void 0)&&l[5]<l[4]?a?a.p(l,n):(a=W(l),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null);const f={};n&128&&(f.tree=l[7]),n&1&&(f.theme=l[0]),i.$set(f)},i(l){c||(N(i.$$.fragment,l),c=!0)},o(l){I(i.$$.fragment,l),c=!1},d(l){l&&(_(t),_(e),_(s)),o&&o.d(l),a&&a.d(l),L(i),r[10](null),u=!1,d()}}}function S(r){let t,e;return{c(){t=b("div"),e=b("div"),this.h()},l(s){t=v(s,"DIV",{class:!0});var i=w(t);e=v(i,"DIV",{class:!0}),w(e).forEach(_),i.forEach(_),this.h()},h(){$(e,"class","svelte-18shyb5"),m(e,"scroll-indicator-left",!r[6]),m(e,"show",r[2]>0),$(t,"class","svelte-18shyb5"),m(t,"scroll-indicator-left-container",!r[6]),m(t,"show",r[2]>0)},m(s,i){E(s,t,i),k(t,e)},p(s,i){i&64&&m(e,"scroll-indicator-left",!s[6]),i&4&&m(e,"show",s[2]>0),i&64&&m(t,"scroll-indicator-left-container",!s[6]),i&4&&m(t,"show",s[2]>0)},d(s){s&&_(t)}}}function W(r){let t,e;return{c(){t=b("div"),e=b("div"),this.h()},l(s){t=v(s,"DIV",{class:!0});var i=w(t);e=v(i,"DIV",{class:!0}),w(e).forEach(_),i.forEach(_),this.h()},h(){$(e,"class","svelte-18shyb5"),m(e,"scroll-indicator-right",!r[6]),m(e,"show",r[2]<r[3]),$(t,"class","svelte-18shyb5"),m(t,"scroll-indicator-right-container",!r[6]),m(t,"show",r[2]<r[3])},m(s,i){E(s,t,i),k(t,e)},p(s,i){i&64&&m(e,"scroll-indicator-right",!s[6]),i&12&&m(e,"show",s[2]<s[3]),i&64&&m(t,"scroll-indicator-right-container",!s[6]),i&12&&m(t,"show",s[2]<s[3])},d(s){s&&_(t)}}}function te(r){let t,e,s,i,c,u;const d=[se,ee],o=[];function a(l,n){return l[7]?0:1}return e=a(r),s=o[e]=d[e](r),{c(){t=b("main"),s.c(),this.h()},l(l){t=v(l,"MAIN",{class:!0});var n=w(t);s.l(n),n.forEach(_),this.h()},h(){$(t,"class","svelte-18shyb5")},m(l,n){E(l,t,n),o[e].m(t,null),i=!0,c||(u=[M(window,"scroll",r[8]),M(window,"resize",r[8]),M(window,"load",r[8])],c=!0)},p(l,[n]){let f=e;e=a(l),e===f?o[e].p(l,n):(R(),I(o[f],1,1,()=>{o[f]=null}),U(),s=o[e],s?s.p(l,n):(s=o[e]=d[e](l),s.c()),N(s,1),s.m(t,null))},i(l){i||(N(s),i=!0)},o(l){I(s),i=!1},d(l){l&&_(t),o[e].d(),c=!1,F(u)}}}function le(r,t,e){let s;H(r,X,h=>e(7,s=h));let{theme:i}=t,{scroll_indicator:c=i!="poster"}=t,u,d,o,a,l,n=!1;function f(){if(c){let h=u;e(4,a=h.scrollWidth),e(5,l=h.clientWidth),e(3,o=a-l)}else e(6,n=!0)}O(async()=>{await j(),f()});function g(h){B[h?"unshift":"push"](()=>{u=h,e(1,u)})}const p=()=>e(2,d=u.scrollLeft);return r.$$set=h=>{"theme"in h&&e(0,i=h.theme),"scroll_indicator"in h&&e(9,c=h.scroll_indicator)},[i,u,d,o,a,l,n,s,f,c,g,p]}class ie extends A{constructor(t){super(),q(this,t,le,te,z,{theme:0,scroll_indicator:9})}}function re(r){let t,e,s,i,c,u,d,o,a;const l=r[1].default,n=J(l,r,r[0],null);return i=new x({}),o=new ie({props:{scroll_indicator:!1}}),{c(){t=b("main"),e=b("section"),n&&n.c(),s=y(),T(i.$$.fragment),c=y(),u=b("div"),d=y(),T(o.$$.fragment),this.h()},l(f){t=v(f,"MAIN",{class:!0});var g=w(t);e=v(g,"SECTION",{});var p=w(e);n&&n.l(p),s=D(p),V(i.$$.fragment,p),c=D(p),u=v(p,"DIV",{id:!0,class:!0}),w(u).forEach(_),d=D(p),V(o.$$.fragment,p),p.forEach(_),g.forEach(_),this.h()},h(){$(u,"id","searchpad"),$(u,"class","svelte-1xxgzpr"),$(t,"class","svelte-1xxgzpr")},m(f,g){E(f,t,g),k(t,e),n&&n.m(e,null),k(e,s),C(i,e,null),k(e,c),k(e,u),k(e,d),C(o,e,null),a=!0},p(f,[g]){n&&n.p&&(!a||g&1)&&K(n,l,f,f[0],a?Q(l,f[0],g,null):P(f[0]),null)},i(f){a||(N(n,f),N(i.$$.fragment,f),N(o.$$.fragment,f),a=!0)},o(f){I(n,f),I(i.$$.fragment,f),I(o.$$.fragment,f),a=!1},d(f){f&&_(t),n&&n.d(f),L(i),L(o)}}}function ne(r,t,e){let{$$slots:s={},$$scope:i}=t;return r.$$set=c=>{"$$scope"in c&&e(0,i=c.$$scope)},[i,s]}class he extends A{constructor(t){super(),q(this,t,ne,re,z,{})}}export{he as component};