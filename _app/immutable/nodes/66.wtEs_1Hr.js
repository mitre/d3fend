import{e as je}from"../chunks/index.g5YcAAdQ.js";import{s as ve,I as Re,e as V,b as z,J as U,d as G,j as J,f as x,i as _,w as y,k as s,Y as Ae,v as oe,n as fe,t as o,h as v,L as Me,m as j,c as Ie,l as P,u as Se,g as He,a as Ve}from"../chunks/scheduler.BuUavueM.js";import{S as Be,i as Ce,f as Ge,c as ee,b as le,m as te,g as pe,a as Y,e as ke,t as W,d as ae}from"../chunks/index.B8nkrWGc.js";import{g as Fe}from"../chunks/entry.D5y5HF-9.js";import{a as Oe,T as Pe,b as I,m as me,G as We,n as ze}from"../chunks/lib.BDR6A2xH.js";import{T as Je}from"../chunks/Title.CTiQNLLX.js";import{B as Ye}from"../chunks/Button.DsrrjMey.js";import{A as Ke}from"../chunks/Alert.Ci27c02Q.js";import{M as Qe}from"../chunks/Modal_full.BFecllsk.js";import{e as be}from"../chunks/each.Ckho9Dz0.js";import{G as Ue}from"../chunks/_Graph.BQtyR-cL.js";import{T as Xe,t as de}from"../chunks/ToggleBar.BqwPd21l.js";async function Ze({params:i,fetch:a}){const f=i.weakness,l=await a(`/api/weakness/cwe/${f}.json`),{description:e,weak_to_def:t}=await l.json();return l.status!==200&&je(500,data.message),{description:e,weak_to_def:t,weakness:f}}const Nl=Object.freeze(Object.defineProperty({__proto__:null,load:Ze},Symbol.toStringTag,{value:"Module"}));function we(i,a,f){const l=i.slice();return l[6]=a[f],l}function ye(i){let a,f=`There are no digital artifacts defined on this weakness (yet).
    Please consider <a href="/contribute">contributing</a> an addition to D3FEND.`;return{c(){a=V("small"),a.innerHTML=f},l(l){a=G(l,"SMALL",{"data-svelte-h":!0}),oe(a)!=="svelte-18tfuwk"&&(a.innerHTML=f)},m(l,e){s(l,a,e)},p:fe,i:fe,o:fe,d(l){l&&_(a)}}}function xe(i){let a=i[1],f,l,e=Ee(i);return{c(){e.c(),f=U()},l(t){e.l(t),f=U()},m(t,u){e.m(t,u),s(t,f,u),l=!0},p(t,u){u&2&&ve(a,a=t[1])?(pe(),Y(e,1,1,fe),ke(),e=Ee(t),e.c(),W(e,1),e.m(f.parentNode,f)):e.p(t,u)},i(t){l||(W(e),l=!0)},o(t){Y(e),l=!1},d(t){t&&_(f),e.d(t)}}}function $e(i){let a=i[2].edge_is_unique(i[6].def_tech_label.value,i[6].def_artifact_rel_label.value,i[6].weak_artifact_label.value),f,l=a&&he(i);return{c(){l&&l.c(),f=U()},l(e){l&&l.l(e),f=U()},m(e,t){l&&l.m(e,t),s(e,f,t)},p(e,t){t&1&&(a=e[2].edge_is_unique(e[6].def_tech_label.value,e[6].def_artifact_rel_label.value,e[6].weak_artifact_label.value)),a?l?l.p(e,t):(l=he(e),l.c(),l.m(f.parentNode,f)):l&&(l.d(1),l=null)},d(e){e&&_(f),l&&l.d(e)}}}function he(i){let a=!i[1].includes(i[6].def_tactic_label.value),f,l=a&&ge(i);return{c(){l&&l.c(),f=U()},l(e){l&&l.l(e),f=U()},m(e,t){l&&l.m(e,t),s(e,f,t)},p(e,t){t&3&&(a=!e[1].includes(e[6].def_tactic_label.value)),a?l?l.p(e,t):(l=ge(e),l.c(),l.m(f.parentNode,f)):l&&(l.d(1),l=null)},d(e){e&&_(f),l&&l.d(e)}}}function ge(i){let a=I(i[6].def_tech.value)+"",f,l,e=i[6].def_tech_label.value+"",t,u,p="-->",E,$,b=i[6].def_artifact_rel_label.value.replace(/ /g,"")+"",d,N,k=I(i[6].weak_artifact.value)+"",h,B,A=i[6].weak_artifact_label.value+"",M,C,m=i[2].edge_is_unique(i[6].def_tech.value,i[6].def_tactic_label.value,i[6].weak_id.value),r,D=i[6].def_tech_label.value.replace(/ |\./g,"")+"",O,F,S=i[6].weak_artifact_label.value.replace(/ /g,"")+"",L,T,q=I(i[6].def_tech.value)+"",R,K,Q=I(i[6].def_tech.value)+"",X,Z,H=m&&Ne(i);return{c(){f=o(a),l=o('["'),t=o(e),u=o('"] '),E=o(p),$=o(`
          | `),d=o(b),N=o(" | "),h=o(k),B=o('["'),M=o(A),C=o(`"];

          `),H&&H.c(),r=o(`
          class `),O=o(D),F=o(` DefensiveTechniqueNode;
          class `),L=o(S),T=o(` ArtifactNode;
          click `),R=o(q),K=o(' href "/technique/d3f:'),X=o(Q),Z=o('";')},l(c){f=v(c,a),l=v(c,'["'),t=v(c,e),u=v(c,'"] '),E=v(c,p),$=v(c,`
          | `),d=v(c,b),N=v(c," | "),h=v(c,k),B=v(c,'["'),M=v(c,A),C=v(c,`"];

          `),H&&H.l(c),r=v(c,`
          class `),O=v(c,D),F=v(c,` DefensiveTechniqueNode;
          class `),L=v(c,S),T=v(c,` ArtifactNode;
          click `),R=v(c,q),K=v(c,' href "/technique/d3f:'),X=v(c,Q),Z=v(c,'";')},m(c,g){s(c,f,g),s(c,l,g),s(c,t,g),s(c,u,g),s(c,E,g),s(c,$,g),s(c,d,g),s(c,N,g),s(c,h,g),s(c,B,g),s(c,M,g),s(c,C,g),H&&H.m(c,g),s(c,r,g),s(c,O,g),s(c,F,g),s(c,L,g),s(c,T,g),s(c,R,g),s(c,K,g),s(c,X,g),s(c,Z,g)},p(c,g){g&1&&a!==(a=I(c[6].def_tech.value)+"")&&j(f,a),g&1&&e!==(e=c[6].def_tech_label.value+"")&&j(t,e),g&1&&b!==(b=c[6].def_artifact_rel_label.value.replace(/ /g,"")+"")&&j(d,b),g&1&&k!==(k=I(c[6].weak_artifact.value)+"")&&j(h,k),g&1&&A!==(A=c[6].weak_artifact_label.value+"")&&j(M,A),g&1&&(m=c[2].edge_is_unique(c[6].def_tech.value,c[6].def_tactic_label.value,c[6].weak_id.value)),m?H?H.p(c,g):(H=Ne(c),H.c(),H.m(r.parentNode,r)):H&&(H.d(1),H=null),g&1&&D!==(D=c[6].def_tech_label.value.replace(/ |\./g,"")+"")&&j(O,D),g&1&&S!==(S=c[6].weak_artifact_label.value.replace(/ /g,"")+"")&&j(L,S),g&1&&q!==(q=I(c[6].def_tech.value)+"")&&j(R,q),g&1&&Q!==(Q=I(c[6].def_tech.value)+"")&&j(X,Q)},d(c){c&&(_(f),_(l),_(t),_(u),_(E),_($),_(d),_(N),_(h),_(B),_(M),_(C),_(r),_(O),_(F),_(L),_(T),_(R),_(K),_(X),_(Z)),H&&H.d(c)}}}function Ne(i){let a=I(i[6].def_tech.value)+"",f,l,e=i[6].def_tech_label.value+"",t,u,p="-.->",E,$,b="may-"+i[6].def_tactic_label.value.toLowerCase(),d,N,k=i[6].weak_id.value.replace(/ |\./g,"")+"",h,B,A=i[6].weak_label.value+"",M,C;return{c(){f=o(a),l=o('["'),t=o(e),u=o('"] '),E=o(p),$=o(`
            | `),d=o(b),N=o(" | "),h=o(k),B=o('["'),M=o(A),C=o('"] ;')},l(m){f=v(m,a),l=v(m,'["'),t=v(m,e),u=v(m,'"] '),E=v(m,p),$=v(m,`
            | `),d=v(m,b),N=v(m," | "),h=v(m,k),B=v(m,'["'),M=v(m,A),C=v(m,'"] ;')},m(m,r){s(m,f,r),s(m,l,r),s(m,t,r),s(m,u,r),s(m,E,r),s(m,$,r),s(m,d,r),s(m,N,r),s(m,h,r),s(m,B,r),s(m,M,r),s(m,C,r)},p(m,r){r&1&&a!==(a=I(m[6].def_tech.value)+"")&&j(f,a),r&1&&e!==(e=m[6].def_tech_label.value+"")&&j(t,e),r&1&&b!==(b="may-"+m[6].def_tactic_label.value.toLowerCase())&&j(d,b),r&1&&k!==(k=m[6].weak_id.value.replace(/ |\./g,"")+"")&&j(h,k),r&1&&A!==(A=m[6].weak_label.value+"")&&j(M,A)},d(m){m&&(_(f),_(l),_(t),_(u),_(E),_($),_(d),_(N),_(h),_(B),_(M),_(C))}}}function De(i){let a=i[6].weak_id.value.replace(/ |\./g,"")+"",f,l,e=i[6].weak_label.value+"",t,u,p="-->",E,$,b=i[6].weak_artifact_rel_label.value.replace(/ /g,"")+"",d,N,k=I(i[6].weak_artifact.value)+"",h,B,A=i[6].weak_artifact_label.value+"",M,C,m=i[6].weak_id.value.replace(/ |\./g,"")+"",r,D,O=I(i[6].weak_artifact.value)+"",F,S,L=I(i[6].weak_artifact.value)+"",T,q,R=I(i[6].weak_artifact.value)+"",K,Q,X=i[6].weak_id.value.replace(/ |\./g,"")+"",Z,H,c=me(i[6].weak_id.value)+"",g,re,ie=I(i[6].weak_artifact.value)+"",_e,ne,se=I(i[6].weak_artifact.value)+"",ue,ce;return{c(){f=o(a),l=o('["'),t=o(e),u=o('"] '),E=o(p),$=o(" |"),d=o(b),N=o("| "),h=o(k),B=o('["'),M=o(A),C=o('"]; class '),r=o(m),D=o(` WeaknessNode;
        class `),F=o(O),S=o(" ArtifactNode; click "),T=o(L),q=o(' href "/dao/artifact/d3f:'),K=o(R),Q=o(`";
        click `),Z=o(X),H=o(' href "'),g=o(c),re=o('"; click '),_e=o(ie),ne=o(' href "/dao/artifact/d3f:'),ue=o(se),ce=o('";')},l(n){f=v(n,a),l=v(n,'["'),t=v(n,e),u=v(n,'"] '),E=v(n,p),$=v(n," |"),d=v(n,b),N=v(n,"| "),h=v(n,k),B=v(n,'["'),M=v(n,A),C=v(n,'"]; class '),r=v(n,m),D=v(n,` WeaknessNode;
        class `),F=v(n,O),S=v(n," ArtifactNode; click "),T=v(n,L),q=v(n,' href "/dao/artifact/d3f:'),K=v(n,R),Q=v(n,`";
        click `),Z=v(n,X),H=v(n,' href "'),g=v(n,c),re=v(n,'"; click '),_e=v(n,ie),ne=v(n,' href "/dao/artifact/d3f:'),ue=v(n,se),ce=v(n,'";')},m(n,w){s(n,f,w),s(n,l,w),s(n,t,w),s(n,u,w),s(n,E,w),s(n,$,w),s(n,d,w),s(n,N,w),s(n,h,w),s(n,B,w),s(n,M,w),s(n,C,w),s(n,r,w),s(n,D,w),s(n,F,w),s(n,S,w),s(n,T,w),s(n,q,w),s(n,K,w),s(n,Q,w),s(n,Z,w),s(n,H,w),s(n,g,w),s(n,re,w),s(n,_e,w),s(n,ne,w),s(n,ue,w),s(n,ce,w)},p(n,w){w&1&&a!==(a=n[6].weak_id.value.replace(/ |\./g,"")+"")&&j(f,a),w&1&&e!==(e=n[6].weak_label.value+"")&&j(t,e),w&1&&b!==(b=n[6].weak_artifact_rel_label.value.replace(/ /g,"")+"")&&j(d,b),w&1&&k!==(k=I(n[6].weak_artifact.value)+"")&&j(h,k),w&1&&A!==(A=n[6].weak_artifact_label.value+"")&&j(M,A),w&1&&m!==(m=n[6].weak_id.value.replace(/ |\./g,"")+"")&&j(r,m),w&1&&O!==(O=I(n[6].weak_artifact.value)+"")&&j(F,O),w&1&&L!==(L=I(n[6].weak_artifact.value)+"")&&j(T,L),w&1&&R!==(R=I(n[6].weak_artifact.value)+"")&&j(K,R),w&1&&X!==(X=n[6].weak_id.value.replace(/ |\./g,"")+"")&&j(Z,X),w&1&&c!==(c=me(n[6].weak_id.value)+"")&&j(g,c),w&1&&ie!==(ie=I(n[6].weak_artifact.value)+"")&&j(_e,ie),w&1&&se!==(se=I(n[6].weak_artifact.value)+"")&&j(ue,se)},d(n){n&&(_(f),_(l),_(t),_(u),_(E),_($),_(d),_(N),_(h),_(B),_(M),_(C),_(r),_(D),_(F),_(S),_(T),_(q),_(K),_(Q),_(Z),_(H),_(g),_(re),_(_e),_(ne),_(ue),_(ce))}}}function Te(i){let a,f=i[2].edge_is_unique(i[6].weak_label.value,i[6].weak_artifact_rel_label.value,i[6].weak_artifact_label.value),l,e="def_tech"in i[6]&&$e(i),t=f&&De(i);return{c(){e&&e.c(),a=z(),t&&t.c(),l=U()},l(u){e&&e.l(u),a=J(u),t&&t.l(u),l=U()},m(u,p){e&&e.m(u,p),s(u,a,p),t&&t.m(u,p),s(u,l,p)},p(u,p){"def_tech"in u[6]?e?e.p(u,p):(e=$e(u),e.c(),e.m(a.parentNode,a)):e&&(e.d(1),e=null),p&1&&(f=u[2].edge_is_unique(u[6].weak_label.value,u[6].weak_artifact_rel_label.value,u[6].weak_artifact_label.value)),f?t?t.p(u,p):(t=De(u),t.c(),t.m(l.parentNode,l)):t&&(t.d(1),t=null)},d(u){u&&(_(a),_(l)),e&&e.d(u),t&&t.d(u)}}}function el(i){let a,f,l=be(i[0].results.bindings),e=[];for(let t=0;t<l.length;t+=1)e[t]=Te(we(i,l,t));return{c(){a=o(`graph LR;

    `);for(let t=0;t<e.length;t+=1)e[t].c();f=U()},l(t){a=v(t,`graph LR;

    `);for(let u=0;u<e.length;u+=1)e[u].l(t);f=U()},m(t,u){s(t,a,u);for(let p=0;p<e.length;p+=1)e[p]&&e[p].m(t,u);s(t,f,u)},p(t,u){if(u&7){l=be(t[0].results.bindings);let p;for(p=0;p<l.length;p+=1){const E=we(t,l,p);e[p]?e[p].p(E,u):(e[p]=Te(E),e[p].c(),e[p].m(f.parentNode,f))}for(;p<e.length;p+=1)e[p].d(1);e.length=l.length}},d(t){t&&(_(a),_(f)),Me(e,t)}}}function Ee(i){let a,f;return a=new Ue({props:{$$slots:{default:[el]},$$scope:{ctx:i}}}),{c(){ee(a.$$.fragment)},l(l){le(a.$$.fragment,l)},m(l,e){te(a,l,e),f=!0},p(l,e){const t={};e&515&&(t.$$scope={dirty:e,ctx:l}),a.$set(t)},i(l){f||(W(a.$$.fragment,l),f=!0)},o(l){Y(a.$$.fragment,l),f=!1},d(l){ae(a,l)}}}function ll(i){let a,f,l,e,t,u,p,E,$,b,d,N,k,h;function B(r){i[4](r)}let A={toggles:i[3]};i[1]!==void 0&&(A.selected=i[1]),e=new Xe({props:A}),Re.push(()=>Ge(e,"selected",B));const M=[xe,ye],C=[];function m(r,D){return r[0].results.bindings.length>0?0:1}return d=m(i),N=C[d]=M[d](i),{c(){a=V("br"),f=z(),l=V("div"),ee(e.$$.fragment),u=z(),p=V("br"),E=z(),$=V("br"),b=z(),N.c(),k=U(),this.h()},l(r){a=G(r,"BR",{}),f=J(r),l=G(r,"DIV",{class:!0});var D=x(l);le(e.$$.fragment,D),D.forEach(_),u=J(r),p=G(r,"BR",{}),E=J(r),$=G(r,"BR",{}),b=J(r),N.l(r),k=U(),this.h()},h(){y(l,"class","center shrink")},m(r,D){s(r,a,D),s(r,f,D),s(r,l,D),te(e,l,null),s(r,u,D),s(r,p,D),s(r,E,D),s(r,$,D),s(r,b,D),C[d].m(r,D),s(r,k,D),h=!0},p(r,[D]){const O={};!t&&D&2&&(t=!0,O.selected=r[1],Ae(()=>t=!1)),e.$set(O);let F=d;d=m(r),d===F?C[d].p(r,D):(pe(),Y(C[F],1,1,()=>{C[F]=null}),ke(),N=C[d],N?N.p(r,D):(N=C[d]=M[d](r),N.c()),W(N,1),N.m(k.parentNode,k))},i(r){h||(W(e.$$.fragment,r),W(N),h=!0)},o(r){Y(e.$$.fragment,r),Y(N),h=!1},d(r){r&&(_(a),_(f),_(l),_(u),_(p),_(E),_($),_(b),_(k)),ae(e),C[d].d(r)}}}function tl(i,a,f){let{weak_to_def:l}=a,e=new Pe,t=new Set;l.results.bindings.forEach($=>{"def_tactic_label"in $&&t.add($.def_tactic_label.value)});let u=Array.from(t).sort(function($,b){return de[$]-de[b]}),p=["Model"];Oe(u,p)&&(p=[]);function E($){p=$,f(1,p)}return i.$$set=$=>{"weak_to_def"in $&&f(0,l=$.weak_to_def)},i.$$.update=()=>{i.$$.dirty&2&&e.reset(p)},[l,p,e,u,E]}class al extends Be{constructor(a){super(),Ce(this,a,tl,ll,ve,{weak_to_def:0})}}const fl=i=>({}),Le=i=>({});function il(i){let a,f;return{c(){a=o(i[2]),f=o(" - cwe.mitre.org ⬈")},l(l){a=v(l,i[2]),f=v(l," - cwe.mitre.org ⬈")},m(l,e){s(l,a,e),s(l,f,e)},p:fe,d(l){l&&(_(a),_(f))}}}function _l(i){let a,f='<span class="right"></span>',l,e,t=i[1]["rdfs:label"]+"",u,p,E,$,b,d,N;return d=new Ye({props:{href:ze(i[2]),size:"medium",$$slots:{default:[il]},$$scope:{ctx:i}}}),{c(){a=V("div"),a.innerHTML=f,l=z(),e=V("h1"),u=o(t),p=o(" - "),E=o(i[2]),$=z(),b=V("div"),ee(d.$$.fragment),this.h()},l(k){a=G(k,"DIV",{class:!0,"data-svelte-h":!0}),oe(a)!=="svelte-m311k2"&&(a.innerHTML=f),l=J(k),e=G(k,"H1",{class:!0});var h=x(e);u=v(h,t),p=v(h," - "),E=v(h,i[2]),h.forEach(_),$=J(k),b=G(k,"DIV",{class:!0});var B=x(b);le(d.$$.fragment,B),B.forEach(_),this.h()},h(){y(a,"class","flex"),y(e,"class","text-center svelte-14efray"),y(b,"class","center text-center")},m(k,h){s(k,a,h),s(k,l,h),s(k,e,h),P(e,u),P(e,p),P(e,E),s(k,$,h),s(k,b,h),te(d,b,null),N=!0},p(k,h){const B={};h&32&&(B.$$scope={dirty:h,ctx:k}),d.$set(B)},i(k){N||(W(d.$$.fragment,k),N=!0)},o(k){Y(d.$$.fragment,k),N=!1},d(k){k&&(_(a),_(l),_(e),_($),_(b)),ae(d)}}}function qe(i){let a,f,l;return f=new Ke({props:{$$slots:{default:[sl]},$$scope:{ctx:i}}}),{c(){a=V("div"),ee(f.$$.fragment),this.h()},l(e){a=G(e,"DIV",{class:!0});var t=x(a);le(f.$$.fragment,t),t.forEach(_),this.h()},h(){y(a,"class","content")},m(e,t){s(e,a,t),te(f,a,null),l=!0},i(e){l||(W(f.$$.fragment,e),l=!0)},o(e){Y(f.$$.fragment,e),l=!1},d(e){e&&_(a),ae(f)}}}function sl(i){let a,f="Browse the D3FEND knowledge graph by clicking on the nodes below.";return{c(){a=V("small"),a.textContent=f},l(l){a=G(l,"SMALL",{"data-svelte-h":!0}),oe(a)!=="svelte-cj5juo"&&(a.textContent=f)},m(l,e){s(l,a,e)},p:fe,d(l){l&&_(a)}}}function ul(i){let a,f,l,e,t="D3FEND Inferred Relationships",u,p,E,$,b,d,N,k,h,B,A,M,C,m,r,D;const O=i[4].header,F=Ie(O,i,i[5],Le),S=F||_l(i);let L=i[0].weak_to_def.results.bindings.length>0&&qe(i);return b=new al({props:{weak_to_def:i[0].weak_to_def}}),{c(){S&&S.c(),a=z(),f=V("section"),l=V("div"),e=V("h2"),e.textContent=t,u=z(),L&&L.c(),p=z(),E=V("br"),$=z(),ee(b.$$.fragment),d=z(),N=V("div"),k=V("a"),h=o("json"),A=z(),M=V("br"),C=V("br"),m=V("br"),r=V("br"),this.h()},l(T){S&&S.l(T),a=J(T),f=G(T,"SECTION",{});var q=x(f);l=G(q,"DIV",{class:!0});var R=x(l);e=G(R,"H2",{class:!0,"data-svelte-h":!0}),oe(e)!=="svelte-u3n8h4"&&(e.textContent=t),u=J(R),L&&L.l(R),p=J(R),E=G(R,"BR",{}),$=J(R),le(b.$$.fragment,R),d=J(R),N=G(R,"DIV",{class:!0});var K=x(N);k=G(K,"A",{href:!0});var Q=x(k);h=v(Q,"json"),Q.forEach(_),K.forEach(_),R.forEach(_),A=J(q),M=G(q,"BR",{}),C=G(q,"BR",{}),m=G(q,"BR",{}),r=G(q,"BR",{}),q.forEach(_),this.h()},h(){y(e,"class","text-center"),y(k,"href",B=`/api/weakness/cwe/${i[0].weakness}.json`),y(N,"class","text-right"),y(l,"class","text-center card")},m(T,q){S&&S.m(T,q),s(T,a,q),s(T,f,q),P(f,l),P(l,e),P(l,u),L&&L.m(l,null),P(l,p),P(l,E),P(l,$),te(b,l,null),P(l,d),P(l,N),P(N,k),P(k,h),P(f,A),P(f,M),P(f,C),P(f,m),P(f,r),D=!0},p(T,q){F&&F.p&&(!D||q&32)&&Se(F,O,T,T[5],D?Ve(O,T[5],q,fl):He(T[5]),Le),T[0].weak_to_def.results.bindings.length>0?L?q&1&&W(L,1):(L=qe(T),L.c(),W(L,1),L.m(l,p)):L&&(pe(),Y(L,1,1,()=>{L=null}),ke());const R={};q&1&&(R.weak_to_def=T[0].weak_to_def),b.$set(R),(!D||q&1&&B!==(B=`/api/weakness/cwe/${T[0].weakness}.json`))&&y(k,"href",B)},i(T){D||(W(S,T),W(L),W(b.$$.fragment,T),D=!0)},o(T){Y(S,T),Y(L),Y(b.$$.fragment,T),D=!1},d(T){T&&(_(a),_(f)),S&&S.d(T),L&&L.d(),ae(b)}}}function rl(i){let a,f,l,e;return a=new Je({props:{title:"Weakness Details"}}),l=new Qe({props:{$$slots:{default:[ul]},$$scope:{ctx:i}}}),l.$on("close",i[3]),{c(){ee(a.$$.fragment),f=z(),ee(l.$$.fragment)},l(t){le(a.$$.fragment,t),f=J(t),le(l.$$.fragment,t)},m(t,u){te(a,t,u),s(t,f,u),te(l,t,u),e=!0},p(t,[u]){const p={};u&33&&(p.$$scope={dirty:u,ctx:t}),l.$set(p)},i(t){e||(W(a.$$.fragment,t),W(l.$$.fragment,t),e=!0)},o(t){Y(a.$$.fragment,t),Y(l.$$.fragment,t),e=!1},d(t){t&&_(f),ae(a,t),ae(l,t)}}}function nl(i,a,f){let{$$slots:l={},$$scope:e}=a,{data:t}=a,p=new We(t.description).get("d3f:cwe-id",t.weakness),E=p["d3f:cwe-id"];function $(b){Fe("/")}return i.$$set=b=>{"data"in b&&f(0,t=b.data),"$$scope"in b&&f(5,e=b.$$scope)},[t,p,E,$,l,e]}class Dl extends Be{constructor(a){super(),Ce(this,a,nl,rl,ve,{data:0})}}export{Dl as component,Nl as universal};