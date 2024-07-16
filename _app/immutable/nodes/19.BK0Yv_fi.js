import{s as se,c as fe,b as S,e as v,t as U,j as A,d as g,f as D,h as $,i as _,p as G,q as k,k as w,l as d,m as P,u as he,g as ue,a as de,C as Re,E as Ue,F as le,n as _e,I as ee,G as K,V as $e}from"../chunks/scheduler.XFNaxh87.js";import{S as ne,i as ae,c as W,b as X,m as Z,t as j,a as F,d as x,f as Pe,g as He,e as Me}from"../chunks/index.CZJgJfrq.js";import{e as Y}from"../chunks/each.BM1lhngx.js";import{b as je,a as Be}from"../chunks/entry.Uv3GJV7O.js";import{T as qe}from"../chunks/Title.CR5zmqnh.js";import{i as me}from"../chunks/isEmpty.BQ-MdN2s.js";import{S as ze}from"../chunks/SimpleAutocomplete.DVzco0gJ.js";/* empty css                             */import{t as Fe}from"../chunks/toString.8PGGVYZ3.js";function pe(r){return Fe(r).toUpperCase()}const Ve=r=>({}),ve=r=>({}),Ye=r=>({}),ge=r=>({});function Je(r){let e,t,l,s,h,i,o,a=`The D3FEND REST API is used to populate the views on the D3FEND website.
    This is an alpha version API, please send <a href="/contribute">feedback</a>
    to help improve this community resource.`,f,n,c,T,m,p;e=new qe({props:{title:r[0]}});const I=r[5].list,b=fe(I,r,r[4],ge),L=r[5].api,y=fe(L,r,r[4],ve);return{c(){W(e.$$.fragment),t=S(),l=v("header"),s=v("h1"),h=U(r[1]),i=S(),o=v("p"),o.innerHTML=a,f=S(),n=v("main"),c=v("aside"),b&&b.c(),T=S(),m=v("section"),y&&y.c(),this.h()},l(u){X(e.$$.fragment,u),t=A(u),l=g(u,"HEADER",{class:!0});var E=D(l);s=g(E,"H1",{class:!0});var H=D(s);h=$(H,r[1]),H.forEach(_),i=A(E),o=g(E,"P",{class:!0,"data-svelte-h":!0}),G(o)!=="svelte-1hwuol7"&&(o.innerHTML=a),E.forEach(_),f=A(u),n=g(u,"MAIN",{class:!0});var z=D(n);c=g(z,"ASIDE",{id:!0,class:!0});var B=D(c);b&&b.l(B),B.forEach(_),T=A(z),m=g(z,"SECTION",{id:!0,class:!0});var q=D(m);y&&y.l(q),q.forEach(_),z.forEach(_),this.h()},h(){k(s,"class","text-center"),k(o,"class","text-center"),k(l,"class","content"),k(c,"id","container-list-api"),k(c,"class","card svelte-1k1j5wl"),k(m,"id","container-details"),k(m,"class","flex flex-start svelte-1k1j5wl"),k(n,"class","content svelte-1k1j5wl")},m(u,E){Z(e,u,E),w(u,t,E),w(u,l,E),d(l,s),d(s,h),d(l,i),d(l,o),w(u,f,E),w(u,n,E),d(n,c),b&&b.m(c,null),r[6](c),d(n,T),d(n,m),y&&y.m(m,null),r[7](m),p=!0},p(u,[E]){const H={};E&1&&(H.title=u[0]),e.$set(H),(!p||E&2)&&P(h,u[1]),b&&b.p&&(!p||E&16)&&he(b,I,u,u[4],p?de(I,u[4],E,Ye):ue(u[4]),ge),y&&y.p&&(!p||E&16)&&he(y,L,u,u[4],p?de(L,u[4],E,Ve):ue(u[4]),ve)},i(u){p||(j(e.$$.fragment,u),j(b,u),j(y,u),p=!0)},o(u){F(e.$$.fragment,u),F(b,u),F(y,u),p=!1},d(u){u&&(_(t),_(l),_(f),_(n)),x(e,u),b&&b.d(u),r[6](null),y&&y.d(u),r[7](null)}}}function Ge(r,e,t){let{$$slots:l={},$$scope:s}=e,{title:h}=e,{header:i}=e,o,a,f,n;const c=()=>{f=new IntersectionObserver(p=>{p.forEach(I=>{const b=I.target.getAttribute("id");I.intersectionRatio>0?a.querySelector(`div[id=${b}]`).classList.add("glow"):a.querySelector(`div[id=${b}]`).classList.remove("glow")})}),o.querySelectorAll("section[id]").forEach(p=>{f.observe(p)})};Re(()=>{c(),n=document.getElementsByTagName("html")[0],n==null||n.classList.add("scroll-smooth")}),je(()=>{n==null||n.classList.remove("scroll-smooth")}),Be(()=>{n==null||n.classList.add("scroll-smooth")}),Ue(()=>{f&&f.disconnect()});function T(p){le[p?"unshift":"push"](()=>{a=p,t(3,a)})}function m(p){le[p?"unshift":"push"](()=>{o=p,t(2,o)})}return r.$$set=p=>{"title"in p&&t(0,h=p.title),"header"in p&&t(1,i=p.header),"$$scope"in p&&t(4,s=p.$$scope)},[h,i,o,a,s,l,T,m]}class Ke extends ne{constructor(e){super(),ae(this,e,Ge,Je,se,{title:0,header:1})}}function be(r,e,t){const l=r.slice();return l[5]=e[t],l}function Ee(r,e,t){const l=r.slice();return l[5]=e[t],l}function ke(r){let e,t="Parameters",l,s,h,i="<th>Name</th> <th>Type</th> <th>Description</th>",o,a,f=Y(r[2]),n=[];for(let c=0;c<f.length;c+=1)n[c]=ye(Ee(r,f,c));return{c(){e=v("h5"),e.textContent=t,l=S(),s=v("table"),h=v("thead"),h.innerHTML=i,o=S(),a=v("tbody");for(let c=0;c<n.length;c+=1)n[c].c();this.h()},l(c){e=g(c,"H5",{id:!0,"data-svelte-h":!0}),G(e)!=="svelte-p6a49i"&&(e.textContent=t),l=A(c),s=g(c,"TABLE",{class:!0});var T=D(s);h=g(T,"THEAD",{"data-svelte-h":!0}),G(h)!=="svelte-4txvgq"&&(h.innerHTML=i),o=A(T),a=g(T,"TBODY",{});var m=D(a);for(let p=0;p<n.length;p+=1)n[p].l(m);m.forEach(_),T.forEach(_),this.h()},h(){k(e,"id","container-parameters"),k(s,"class","table-auto svelte-sz7d95")},m(c,T){w(c,e,T),w(c,l,T),w(c,s,T),d(s,h),d(s,o),d(s,a);for(let m=0;m<n.length;m+=1)n[m]&&n[m].m(a,null)},p(c,T){if(T&4){f=Y(c[2]);let m;for(m=0;m<f.length;m+=1){const p=Ee(c,f,m);n[m]?n[m].p(p,T):(n[m]=ye(p),n[m].c(),n[m].m(a,null))}for(;m<n.length;m+=1)n[m].d(1);n.length=f.length}},d(c){c&&(_(e),_(l),_(s)),ee(n,c)}}}function Te(r){let e,t,l,s=r[5].name+"",h,i,o,a=r[5].type+"",f,n,c,T=r[5].description+"",m,p;return{c(){e=v("tr"),t=v("td"),l=v("em"),h=U(s),i=S(),o=v("td"),f=U(a),n=S(),c=v("td"),m=U(T),p=S()},l(I){e=g(I,"TR",{});var b=D(e);t=g(b,"TD",{});var L=D(t);l=g(L,"EM",{});var y=D(l);h=$(y,s),y.forEach(_),L.forEach(_),i=A(b),o=g(b,"TD",{});var u=D(o);f=$(u,a),u.forEach(_),n=A(b),c=g(b,"TD",{});var E=D(c);m=$(E,T),E.forEach(_),p=A(b),b.forEach(_)},m(I,b){w(I,e,b),d(e,t),d(t,l),d(l,h),d(e,i),d(e,o),d(o,f),d(e,n),d(e,c),d(c,m),d(e,p)},p(I,b){b&4&&s!==(s=I[5].name+"")&&P(h,s),b&4&&a!==(a=I[5].type+"")&&P(f,a),b&4&&T!==(T=I[5].description+"")&&P(m,T)},d(I){I&&_(e)}}}function ye(r){let e,t=r[5].tag==="param"&&Te(r);return{c(){t&&t.c(),e=K()},l(l){t&&t.l(l),e=K()},m(l,s){t&&t.m(l,s),w(l,e,s)},p(l,s){l[5].tag==="param"?t?t.p(l,s):(t=Te(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(l){l&&_(e),t&&t.d(l)}}}function De(r){let e,t,l=r[5].type+"",s,h,i,o=r[5].description+"",a,f;return{c(){e=v("tr"),t=v("td"),s=U(l),h=S(),i=v("td"),a=U(o),f=S()},l(n){e=g(n,"TR",{});var c=D(e);t=g(c,"TD",{});var T=D(t);s=$(T,l),T.forEach(_),h=A(c),i=g(c,"TD",{});var m=D(i);a=$(m,o),m.forEach(_),f=A(c),c.forEach(_)},m(n,c){w(n,e,c),d(e,t),d(t,s),d(e,h),d(e,i),d(i,a),d(e,f)},p(n,c){c&4&&l!==(l=n[5].type+"")&&P(s,l),c&4&&o!==(o=n[5].description+"")&&P(a,o)},d(n){n&&_(e)}}}function Ce(r){let e,t=r[5].tag==="returns"&&De(r);return{c(){t&&t.c(),e=K()},l(l){t&&t.l(l),e=K()},m(l,s){t&&t.m(l,s),w(l,e,s)},p(l,s){l[5].tag==="returns"?t?t.p(l,s):(t=De(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(l){l&&_(e),t&&t.d(l)}}}function Qe(r){var re;let e,t,l,s,h,i=((re=r[2][0])==null?void 0:re.name)+"",o,a,f,n,c=r[0].endpoint+"",T,m,p=!me(r[0].params),I,b,L="Returns",y,u,E,H="<th>Type</th> <th>Description</th>",z,B,q,M=p&&ke(r),J=Y(r[2]),O=[];for(let C=0;C<J.length;C+=1)O[C]=Ce(be(r,J,C));return{c(){e=v("article"),t=v("h6"),l=U(r[3]),s=S(),h=v("div"),o=U(i),a=S(),f=v("div"),n=v("b"),T=U(c),m=S(),M&&M.c(),I=S(),b=v("h5"),b.textContent=L,y=S(),u=v("table"),E=v("thead"),E.innerHTML=H,z=S(),B=v("tbody");for(let C=0;C<O.length;C+=1)O[C].c();this.h()},l(C){e=g(C,"ARTICLE",{class:!0,id:!0});var N=D(e);t=g(N,"H6",{class:!0});var V=D(t);l=$(V,r[3]),V.forEach(_),s=A(N),h=g(N,"DIV",{class:!0});var R=D(h);o=$(R,i),R.forEach(_),a=A(N),f=g(N,"DIV",{});var Q=D(f);n=g(Q,"B",{});var oe=D(n);T=$(oe,c),oe.forEach(_),Q.forEach(_),m=A(N),M&&M.l(N),I=A(N),b=g(N,"H5",{id:!0,"data-svelte-h":!0}),G(b)!=="svelte-ecegt5"&&(b.textContent=L),y=A(N),u=g(N,"TABLE",{class:!0});var te=D(u);E=g(te,"THEAD",{"data-svelte-h":!0}),G(E)!=="svelte-1a3ku9e"&&(E.innerHTML=H),z=A(te),B=g(te,"TBODY",{});var ce=D(B);for(let ie=0;ie<O.length;ie+=1)O[ie].l(ce);ce.forEach(_),te.forEach(_),N.forEach(_),this.h()},h(){k(t,"class","svelte-sz7d95"),k(h,"class","block-verb svelte-sz7d95"),k(b,"id","container-parameters"),k(u,"class","table-auto svelte-sz7d95"),k(e,"class","block-sticky card svelte-sz7d95"),k(e,"id",q=`${r[0].subDirectory}_${r[1]}`)},m(C,N){w(C,e,N),d(e,t),d(t,l),d(e,s),d(e,h),d(h,o),d(e,a),d(e,f),d(f,n),d(n,T),d(e,m),M&&M.m(e,null),d(e,I),d(e,b),d(e,y),d(e,u),d(u,E),d(u,z),d(u,B);for(let V=0;V<O.length;V+=1)O[V]&&O[V].m(B,null)},p(C,[N]){var V;if(N&8&&P(l,C[3]),N&4&&i!==(i=((V=C[2][0])==null?void 0:V.name)+"")&&P(o,i),N&1&&c!==(c=C[0].endpoint+"")&&P(T,c),N&1&&(p=!me(C[0].params)),p?M?M.p(C,N):(M=ke(C),M.c(),M.m(e,I)):M&&(M.d(1),M=null),N&4){J=Y(C[2]);let R;for(R=0;R<J.length;R+=1){const Q=be(C,J,R);O[R]?O[R].p(Q,N):(O[R]=Ce(Q),O[R].c(),O[R].m(B,null))}for(;R<O.length;R+=1)O[R].d(1);O.length=J.length}N&3&&q!==(q=`${C[0].subDirectory}_${C[1]}`)&&k(e,"id",q)},i:_e,o:_e,d(C){C&&_(e),M&&M.d(),ee(O,C)}}}function We(r,e,t){let l,s,{item:h}=e,{index:i}=e,{urlEndpoint:o={}}=e;return r.$$set=a=>{"item"in a&&t(0,h=a.item),"index"in a&&t(1,i=a.index),"urlEndpoint"in a&&t(4,o=a.urlEndpoint)},r.$$.update=()=>{r.$$.dirty&16&&t(3,{description:l="",tags:s=[]}=o,l,(t(2,s),t(4,o)))},[h,i,s,l,o]}class Xe extends ne{constructor(e){super(),ae(this,e,We,Qe,se,{item:0,index:1,urlEndpoint:4})}}function Ze(r){let e,t,l=JSON.stringify(r[0],null,2)+"",s;return{c(){e=v("pre"),t=v("code"),s=U(l),this.h()},l(h){e=g(h,"PRE",{class:!0});var i=D(e);t=g(i,"CODE",{class:!0});var o=D(t);s=$(o,l),o.forEach(_),i.forEach(_),this.h()},h(){k(t,"class","svelte-1slftyk"),k(e,"class","svelte-1slftyk")},m(h,i){w(h,e,i),d(e,t),d(t,s)},p(h,i){i&1&&l!==(l=JSON.stringify(h[0],null,2)+"")&&P(s,l)},d(h){h&&_(e)}}}function xe(r){let e,t,l;return{c(){e=v("pre"),t=v("code"),l=U(r[1]),this.h()},l(s){e=g(s,"PRE",{"data-lang":!0,class:!0});var h=D(e);t=g(h,"CODE",{class:!0});var i=D(t);l=$(i,r[1]),i.forEach(_),h.forEach(_),this.h()},h(){k(t,"class","svelte-1slftyk"),k(e,"data-lang","Typescript"),k(e,"class","svelte-1slftyk")},m(s,h){w(s,e,h),d(e,t),d(t,l)},p(s,h){h&2&&P(l,s[1])},d(s){s&&_(e)}}}function et(r){let e,t,l,s,h,i,o,a,f,n,c,T,m;function p(u){r[6](u)}let I={inputClassName:"autocomplete-cursor-select",items:r[5],readonly:!0};r[3]!==void 0&&(I.selectedItem=r[3]),o=new ze({props:I}),le.push(()=>Pe(o,"selectedItem",p)),r[7](o);function b(u,E){if(u[3]===u[5][0])return xe;if(u[3]===u[5][1])return Ze}let L=b(r),y=L&&L(r);return{c(){e=v("section"),t=v("header"),l=v("span"),s=v("a"),h=U(r[2]),i=S(),W(o.$$.fragment),f=S(),n=v("details"),c=v("summary"),T=S(),y&&y.c(),this.h()},l(u){e=g(u,"SECTION",{class:!0});var E=D(e);t=g(E,"HEADER",{class:!0});var H=D(t);l=g(H,"SPAN",{class:!0});var z=D(l);s=g(z,"A",{href:!0});var B=D(s);h=$(B,r[2]),B.forEach(_),z.forEach(_),i=A(H),X(o.$$.fragment,H),H.forEach(_),f=A(E),n=g(E,"DETAILS",{});var q=D(n);c=g(q,"SUMMARY",{class:!0}),D(c).forEach(_),T=A(q),y&&y.l(q),q.forEach(_),E.forEach(_),this.h()},h(){k(s,"href",r[2]),k(l,"class","summary-text svelte-1slftyk"),k(t,"class","svelte-1slftyk"),k(c,"class","details-header"),n.open=!0,k(e,"class","container-schema card svelte-1slftyk")},m(u,E){w(u,e,E),d(e,t),d(t,l),d(l,s),d(s,h),d(t,i),Z(o,t,null),d(e,f),d(e,n),d(n,c),d(n,T),y&&y.m(n,null),m=!0},p(u,[E]){(!m||E&4)&&P(h,u[2]),(!m||E&4)&&k(s,"href",u[2]);const H={};!a&&E&8&&(a=!0,H.selectedItem=u[3],$e(()=>a=!1)),o.$set(H),L===(L=b(u))&&y?y.p(u,E):(y&&y.d(1),y=L&&L(u),y&&(y.c(),y.m(n,null)))},i(u){m||(j(o.$$.fragment,u),m=!0)},o(u){F(o.$$.fragment,u),m=!1},d(u){u&&_(e),r[7](null),x(o),y&&y.d()}}}function tt(r,e,t){let{data:l}=e,{typescript:s}=e,{exampleUrl:h}=e;const i=["Typescript","Data"];let o=i[0],a;function f(c){o=c,t(3,o)}function n(c){le[c?"unshift":"push"](()=>{a=c,t(4,a)})}return r.$$set=c=>{"data"in c&&t(0,l=c.data),"typescript"in c&&t(1,s=c.typescript),"exampleUrl"in c&&t(2,h=c.exampleUrl)},[l,s,h,o,a,i,f,n]}class lt extends ne{constructor(e){super(),ae(this,e,tt,et,se,{data:0,typescript:1,exampleUrl:2})}}function Ie(r,e,t){const l=r.slice();return l[1]=e[t][0],l[8]=e[t][1],l}function Se(r,e,t){const l=r.slice();return l[1]=e[t][0],l[2]=e[t][1],l}function Ae(r,e,t){const l=r.slice();return l[5]=e[t],l[7]=t,l}function Ne(r){let e,t,l=pe(r[1])+"",s,h,i,o;return{c(){e=v("div"),t=v("a"),s=U(l),i=S(),this.h()},l(a){e=g(a,"DIV",{class:!0,id:!0});var f=D(e);t=g(f,"A",{href:!0});var n=D(t);s=$(n,l),n.forEach(_),i=A(f),f.forEach(_),this.h()},h(){k(t,"href",h=`#${r[1]}_0`),k(e,"class","list-endpoint svelte-vy7w1b"),k(e,"id",o=r[1])},m(a,f){w(a,e,f),d(e,t),d(t,s),d(e,i)},p(a,f){f&1&&l!==(l=pe(a[1])+"")&&P(s,l),f&1&&h!==(h=`#${a[1]}_0`)&&k(t,"href",h),f&1&&o!==(o=a[1])&&k(e,"id",o)},d(a){a&&_(e)}}}function st(r){var o;let e,t,l="Endpoints",s,h=Y(Object.entries((o=r[0])==null?void 0:o.endpoints)),i=[];for(let a=0;a<h.length;a+=1)i[a]=Ne(Ie(r,h,a));return{c(){e=v("section"),t=v("h2"),t.textContent=l,s=S();for(let a=0;a<i.length;a+=1)i[a].c();this.h()},l(a){e=g(a,"SECTION",{id:!0,class:!0});var f=D(e);t=g(f,"H2",{class:!0,"data-svelte-h":!0}),G(t)!=="svelte-eoxcx4"&&(t.textContent=l),s=A(f);for(let n=0;n<i.length;n+=1)i[n].l(f);f.forEach(_),this.h()},h(){k(t,"class","text-center"),k(e,"id","container-endpoint"),k(e,"class","svelte-vy7w1b")},m(a,f){w(a,e,f),d(e,t),d(e,s);for(let n=0;n<i.length;n+=1)i[n]&&i[n].m(e,null)},p(a,f){var n;if(f&1){h=Y(Object.entries((n=a[0])==null?void 0:n.endpoints));let c;for(c=0;c<h.length;c+=1){const T=Ie(a,h,c);i[c]?i[c].p(T,f):(i[c]=Ne(T),i[c].c(),i[c].m(e,null))}for(;c<i.length;c+=1)i[c].d(1);i.length=h.length}},d(a){a&&_(e),ee(i,a)}}}function we(r){let e,t,l,s,h;return t=new Xe({props:{item:r[5],index:r[7],urlEndpoint:r[5].comments[0]}}),s=new lt({props:{typescript:r[5].typescript,exampleUrl:r[5].exampleUrl,data:r[5].data}}),{c(){e=v("section"),W(t.$$.fragment),l=S(),W(s.$$.fragment),this.h()},l(i){e=g(i,"SECTION",{class:!0});var o=D(e);X(t.$$.fragment,o),l=A(o),X(s.$$.fragment,o),o.forEach(_),this.h()},h(){k(e,"class","container-detail-item svelte-vy7w1b")},m(i,o){w(i,e,o),Z(t,e,null),d(e,l),Z(s,e,null),h=!0},p(i,o){const a={};o&1&&(a.item=i[5]),o&1&&(a.urlEndpoint=i[5].comments[0]),t.$set(a);const f={};o&1&&(f.typescript=i[5].typescript),o&1&&(f.exampleUrl=i[5].exampleUrl),o&1&&(f.data=i[5].data),s.$set(f)},i(i){h||(j(t.$$.fragment,i),j(s.$$.fragment,i),h=!0)},o(i){F(t.$$.fragment,i),F(s.$$.fragment,i),h=!1},d(i){i&&_(e),x(t),x(s)}}}function Oe(r){let e,t,l,s,h=Y(r[2]),i=[];for(let a=0;a<h.length;a+=1)i[a]=we(Ae(r,h,a));const o=a=>F(i[a],1,1,()=>{i[a]=null});return{c(){e=v("section");for(let a=0;a<i.length;a+=1)i[a].c();t=S(),this.h()},l(a){e=g(a,"SECTION",{id:!0,class:!0});var f=D(e);for(let n=0;n<i.length;n+=1)i[n].l(f);t=A(f),f.forEach(_),this.h()},h(){k(e,"id",l=r[1]),k(e,"class","svelte-vy7w1b")},m(a,f){w(a,e,f);for(let n=0;n<i.length;n+=1)i[n]&&i[n].m(e,null);d(e,t),s=!0},p(a,f){if(f&1){h=Y(a[2]);let n;for(n=0;n<h.length;n+=1){const c=Ae(a,h,n);i[n]?(i[n].p(c,f),j(i[n],1)):(i[n]=we(c),i[n].c(),j(i[n],1),i[n].m(e,t))}for(He(),n=h.length;n<i.length;n+=1)o(n);Me()}(!s||f&1&&l!==(l=a[1]))&&k(e,"id",l)},i(a){if(!s){for(let f=0;f<h.length;f+=1)j(i[f]);s=!0}},o(a){i=i.filter(Boolean);for(let f=0;f<i.length;f+=1)F(i[f]);s=!1},d(a){a&&_(e),ee(i,a)}}}function nt(r){var i;let e,t,l=Y(Object.entries((i=r[0])==null?void 0:i.endpoints)),s=[];for(let o=0;o<l.length;o+=1)s[o]=Oe(Se(r,l,o));const h=o=>F(s[o],1,1,()=>{s[o]=null});return{c(){for(let o=0;o<s.length;o+=1)s[o].c();e=K()},l(o){for(let a=0;a<s.length;a+=1)s[a].l(o);e=K()},m(o,a){for(let f=0;f<s.length;f+=1)s[f]&&s[f].m(o,a);w(o,e,a),t=!0},p(o,a){var f;if(a&1){l=Y(Object.entries((f=o[0])==null?void 0:f.endpoints));let n;for(n=0;n<l.length;n+=1){const c=Se(o,l,n);s[n]?(s[n].p(c,a),j(s[n],1)):(s[n]=Oe(c),s[n].c(),j(s[n],1),s[n].m(e.parentNode,e))}for(He(),n=l.length;n<s.length;n+=1)h(n);Me()}},i(o){if(!t){for(let a=0;a<l.length;a+=1)j(s[a]);t=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)F(s[a]);t=!1},d(o){o&&_(e),ee(s,o)}}}function at(r){let e,t;return e=new Ke({props:{header:Le,title:Le,$$slots:{api:[nt],list:[st]},$$scope:{ctx:r}}}),{c(){W(e.$$.fragment)},l(l){X(e.$$.fragment,l)},m(l,s){Z(e,l,s),t=!0},p(l,[s]){const h={};s&2049&&(h.$$scope={dirty:s,ctx:l}),e.$set(h)},i(l){t||(j(e.$$.fragment,l),t=!0)},o(l){F(e.$$.fragment,l),t=!1},d(l){x(e,l)}}}let Le="D3FEND API Documentation";function it(r,e,t){let{data:l}=e;return r.$$set=s=>{"data"in s&&t(0,l=s.data)},[l]}class pt extends ne{constructor(e){super(),ae(this,e,it,at,se,{data:0})}}export{pt as component};