import{s as H,c as T,e as k,b as h,d as v,f as O,i as b,j as m,y as G,x as E,k as B,l as p,p as C,u as U,g as V,a as j,A as J,Y as L,I as Y}from"./scheduler.DDVliNtX.js";import{S as P,i as Q,t as q,a as A}from"./index.iWffroUJ.js";const W=s=>({}),z=s=>({}),X=s=>({}),F=s=>({});function Z(s){let l,u="Esc",o,d;return{c(){l=k("kbd"),l.textContent=u,this.h()},l(n){l=v(n,"KBD",{title:!0,class:!0,"data-svelte-h":!0}),G(l)!=="svelte-13prh44"&&(l.textContent=u),this.h()},h(){E(l,"title","Close this modal (navigate backwards)."),E(l,"class","svelte-m1ygw"),Y(l,"down",s[0])},m(n,c){B(n,l,c),o||(d=C(l,"click",s[3]),o=!0)},p(n,c){c&1&&Y(l,"down",n[0])},d(n){n&&b(l),o=!1,d()}}}function x(s){let l,u,o,d,n,c,g,w,y,a,K="close",$,_,I,N;const M=s[5].header,D=T(M,s,s[4],F),i=D||Z(s),R=s[5].default,f=T(R,s,s[4],null),S=s[5].footer,r=T(S,s,s[4],z);return{c(){l=k("div"),u=h(),o=k("div"),i&&i.c(),d=h(),n=k("br"),c=h(),f&&f.c(),g=h(),w=k("br"),y=h(),a=k("button"),a.textContent=K,$=h(),r&&r.c(),this.h()},l(e){l=v(e,"DIV",{class:!0}),O(l).forEach(b),u=m(e),o=v(e,"DIV",{class:!0});var t=O(o);i&&i.l(t),d=m(t),n=v(t,"BR",{}),c=m(t),f&&f.l(t),g=m(t),w=v(t,"BR",{}),y=m(t),a=v(t,"BUTTON",{class:!0,"data-svelte-h":!0}),G(a)!=="svelte-12i1kop"&&(a.textContent=K),$=m(t),r&&r.l(t),t.forEach(b),this.h()},h(){E(l,"class","modal-background svelte-m1ygw"),E(a,"class","svelte-m1ygw"),E(o,"class","modal svelte-m1ygw")},m(e,t){B(e,l,t),B(e,u,t),B(e,o,t),i&&i.m(o,null),p(o,d),p(o,n),p(o,c),f&&f.m(o,null),p(o,g),p(o,w),p(o,y),p(o,a),p(o,$),r&&r.m(o,null),_=!0,I||(N=[C(window,"keydown",s[1]),C(window,"keyup",s[2]),C(l,"click",s[3]),C(a,"click",s[3])],I=!0)},p(e,[t]){D?D.p&&(!_||t&16)&&U(D,M,e,e[4],_?j(M,e[4],t,X):V(e[4]),F):i&&i.p&&(!_||t&1)&&i.p(e,_?t:-1),f&&f.p&&(!_||t&16)&&U(f,R,e,e[4],_?j(R,e[4],t,null):V(e[4]),null),r&&r.p&&(!_||t&16)&&U(r,S,e,e[4],_?j(S,e[4],t,W):V(e[4]),z)},i(e){_||(q(i,e),q(f,e),q(r,e),_=!0)},o(e){A(i,e),A(f,e),A(r,e),_=!1},d(e){e&&(b(l),b(u),b(o)),i&&i.d(e),f&&f.d(e),r&&r.d(e),I=!1,J(N)}}}function ee(s,l,u){let{$$slots:o={},$$scope:d}=l;const n=L();let c=!1;function g(a){a.key==="Escape"&&u(0,c=!0)}function w(a){a.key==="Escape"&&(u(0,c=!0),n("close"))}function y(){n("close")}return s.$$set=a=>{"$$scope"in a&&u(4,d=a.$$scope)},[c,g,w,y,d,o]}class le extends P{constructor(l){super(),Q(this,l,ee,x,H,{})}}export{le as M};