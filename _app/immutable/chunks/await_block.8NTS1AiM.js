import{A as b,B as p,C as a,D as m}from"./scheduler.BuUavueM.js";import{g,a as v,e as x,t as w}from"./index.B8nkrWGc.js";function B(e,t){const h=t.token={};function c(r,s,d,k){if(t.token!==h)return;t.resolved=k;let u=t.ctx;d!==void 0&&(u=u.slice(),u[d]=k);const l=r&&(t.current=r)(u);let o=!1;t.block&&(t.blocks?t.blocks.forEach((n,_)=>{_!==s&&n&&(g(),v(n,1,1,()=>{t.blocks[_]===n&&(t.blocks[_]=null)}),x())}):t.block.d(1),l.c(),w(l,1),l.m(t.mount(),t.anchor),o=!0),t.block=l,t.blocks&&(t.blocks[s]=l),o&&m()}if(b(e)){const r=p();if(e.then(s=>{a(r),c(t.then,1,t.value,s),a(null)},s=>{if(a(r),c(t.catch,2,t.error,s),a(null),!t.hasCatch)throw s}),t.current!==t.pending)return c(t.pending,0),!0}else{if(t.current!==t.then)return c(t.then,1,t.value,e),!0;t.resolved=e}}function D(e,t,h){const c=t.slice(),{resolved:r}=e;e.current===e.then&&(c[e.value]=r),e.current===e.catch&&(c[e.error]=r),e.block.p(c,h)}export{B as h,D as u};