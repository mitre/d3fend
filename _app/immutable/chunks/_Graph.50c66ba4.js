import{S as I,i as M,s as S,G as T,k as p,q as G,a as V,l as b,m as v,r as D,h as g,c as k,n as q,T as E,b as C,H as f,J as H,K as L,L as j,g as J,d as K,o as P,ae as R,w}from"./index.38e6a1b1.js";import{m as z}from"./mermaid.core.ffca9792.js";function A(l){let s,r,a,_,u,d,i,o;const h=l[4].default,t=T(h,l,l[3],null);return{c(){s=p("div"),r=p("div"),a=p("pre"),_=G("        "),t&&t.c(),u=G(`
      `),d=V(),i=p("div"),this.h()},l(e){s=b(e,"DIV",{});var n=v(s);r=b(n,"DIV",{});var m=v(r);a=b(m,"PRE",{class:!0});var c=v(a);_=D(c,"        "),t&&t.l(c),u=D(c,`
      `),c.forEach(g),m.forEach(g),d=k(n),i=b(n,"DIV",{}),v(i).forEach(g),n.forEach(g),this.h()},h(){q(a,"class","svelte-mjolgb"),E(a,"hidden",!l[0])},m(e,n){C(e,s,n),f(s,r),f(r,a),f(a,_),t&&t.m(a,null),f(a,u),l[5](a),f(s,d),f(s,i),l[6](i),o=!0},p(e,[n]){t&&t.p&&(!o||n&8)&&H(t,h,e,e[3],o?j(h,e[3],n,null):L(e[3]),null),(!o||n&1)&&E(a,"hidden",!e[0])},i(e){o||(J(t,e),o=!0)},o(e){K(t,e),o=!1},d(e){e&&g(s),t&&t.d(e),l[5](null),l[6](null)}}}function B(l,s,r){let{$$slots:a={},$$scope:_}=s,{debug:u=!1}=s,d,i;async function o(e,n){let m=i.textContent;const{svg:c,bindFunctions:y}=await z.render("m-abstract-base-graph"+e,m);n.innerHTML=c,y==null||y(n)}P(async()=>{console.debug("creating _Graph");let e=Math.random().toString(36).substr(2);await o(e,d)}),R(()=>{console.debug("destroying _Graph")});function h(e){w[e?"unshift":"push"](()=>{i=e,r(2,i)})}function t(e){w[e?"unshift":"push"](()=>{d=e,r(1,d)})}return l.$$set=e=>{"debug"in e&&r(0,u=e.debug),"$$scope"in e&&r(3,_=e.$$scope)},[u,d,i,_,a,h,t]}class Q extends I{constructor(s){super(),M(this,s,B,A,S,{debug:0})}}export{Q as G};