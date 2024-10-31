import{e as je}from"../chunks/index.g5YcAAdQ.js";import{s as Be,b as w,j as D,k,i as c,c as Se,e as h,H as Re,t as M,d as m,f as j,y as Z,w as Ve,h as P,x as C,l as f,u as Ae,g as Ne,a as He,N as Le,n as Te,m as Me}from"../chunks/scheduler.Df3gJpkL.js";import{S as Pe,i as Oe,c as U,b as J,m as Q,t as T,a as R,d as W,g as he,e as me}from"../chunks/index.DTzUNj_H.js";import{e as ke}from"../chunks/each.CU-7MgHx.js";import{g as ye}from"../chunks/entry.DNFlw6eq.js";import{G as Ce,j as ze,k as Ge,d as de}from"../chunks/lib.VMLB1uup.js";import{T as Ke}from"../chunks/Title.B-pDgfy6.js";import{B as $e}from"../chunks/Button.DTq7yVWe.js";import{A as Fe}from"../chunks/Alert.CfQxrXIg.js";import{M as Ue}from"../chunks/Modal_full.BVsFaqCn.js";import{G as Je}from"../chunks/Graph-off_to_def.CIc9ITZT.js";async function Qe({params:n,fetch:e}){const t=n.technique,s=await e(`/api/offensive-technique/attack/${t}.json`),{description:a,off_to_def:l,subtechniques:r}=await s.json();return s.status!==200&&je(500,data.message),{description:a,off_to_def:l,technique_id:t,subtechniques:r}}const $t=Object.freeze(Object.defineProperty({__proto__:null,load:Qe},Symbol.toStringTag,{value:"Module"}));function Ee(n,e,t){const s=n.slice();return s[9]=e[t],s}const We=n=>({}),qe=n=>({});function we(n){let e,t,s;return t=new $e({props:{href:de(n[1]),size:"small",$$slots:{default:[Xe]},$$scope:{ctx:n}}}),{c(){e=h("span"),U(t.$$.fragment),this.h()},l(a){e=m(a,"SPAN",{class:!0});var l=j(e);J(t.$$.fragment,l),l.forEach(c),this.h()},h(){C(e,"class","left")},m(a,l){k(a,e,l),Q(t,e,null),s=!0},p(a,l){const r={};l&2&&(r.href=de(a[1])),l&130&&(r.$$scope={dirty:l,ctx:a}),t.$set(r)},i(a){s||(T(t.$$.fragment,a),s=!0)},o(a){R(t.$$.fragment,a),s=!1},d(a){a&&c(e),W(t)}}}function Xe(n){let e,t;return{c(){e=M("Parent: "),t=M(n[1])},l(s){e=P(s,"Parent: "),t=P(s,n[1])},m(s,a){k(s,e,a),k(s,t,a)},p(s,a){a&2&&Me(t,s[1])},d(s){s&&(c(e),c(t))}}}function Ye(n){let e;return{c(){e=M("MITRE ATT&CK® Link")},l(t){e=P(t,"MITRE ATT&CK® Link")},m(t,s){k(t,e,s)},d(t){t&&c(e)}}}function Ze(n){let e,t,s,a,l,r,v=n[3]["rdfs:label"]+"",I,u,b=n[3]["d3f:attack-id"]+"",i,_,o,A="(ATT&CK® Technique)",B,$=n[1]&&we(n);return a=new $e({props:{href:Ge(n[3]["d3f:attack-id"]),size:"small",$$slots:{default:[Ye]},$$scope:{ctx:n}}}),{c(){e=h("div"),$&&$.c(),t=w(),s=h("span"),U(a.$$.fragment),l=w(),r=h("h1"),I=M(v),u=M(" - "),i=M(b),_=w(),o=h("div"),o.textContent=A,this.h()},l(p){e=m(p,"DIV",{class:!0});var E=j(e);$&&$.l(E),t=D(E),s=m(E,"SPAN",{class:!0});var O=j(s);J(a.$$.fragment,O),O.forEach(c),E.forEach(c),l=D(p),r=m(p,"H1",{class:!0});var z=j(r);I=P(z,v),u=P(z," - "),i=P(z,b),z.forEach(c),_=D(p),o=m(p,"DIV",{class:!0,"data-svelte-h":!0}),Z(o)!=="svelte-1scusry"&&(o.textContent=A),this.h()},h(){C(s,"class","right"),C(e,"class","flex"),C(r,"class","text-center svelte-14efray"),C(o,"class","center text-center")},m(p,E){k(p,e,E),$&&$.m(e,null),f(e,t),f(e,s),Q(a,s,null),k(p,l,E),k(p,r,E),f(r,I),f(r,u),f(r,i),k(p,_,E),k(p,o,E),B=!0},p(p,E){p[1]?$?($.p(p,E),E&2&&T($,1)):($=we(p),$.c(),T($,1),$.m(e,t)):$&&(he(),R($,1,1,()=>{$=null}),me());const O={};E&128&&(O.$$scope={dirty:E,ctx:p}),a.$set(O)},i(p){B||(T($),T(a.$$.fragment,p),B=!0)},o(p){R($),R(a.$$.fragment,p),B=!1},d(p){p&&(c(e),c(l),c(r),c(_),c(o)),$&&$.d(),W(a)}}}function xe(n){let e,t,s="Subtechniques",a,l,r,v,I=ke(n[2].i(n[3]["@id"])["rdfs:hasSubClass"]),u=[];for(let i=0;i<I.length;i+=1)u[i]=De(Ee(n,I,i));const b=i=>R(u[i],1,1,()=>{u[i]=null});return{c(){e=h("div"),t=h("h2"),t.textContent=s,a=w(),l=h("div"),r=h("ul");for(let i=0;i<u.length;i+=1)u[i].c();this.h()},l(i){e=m(i,"DIV",{class:!0});var _=j(e);t=m(_,"H2",{class:!0,"data-svelte-h":!0}),Z(t)!=="svelte-flst9x"&&(t.textContent=s),a=D(_),l=m(_,"DIV",{class:!0});var o=j(l);r=m(o,"UL",{class:!0});var A=j(r);for(let B=0;B<u.length;B+=1)u[B].l(A);A.forEach(c),o.forEach(c),_.forEach(c),this.h()},h(){C(t,"class","text-center"),C(r,"class","center stretch shrink no-style"),C(l,"class","center"),C(e,"class","card")},m(i,_){k(i,e,_),f(e,t),f(e,a),f(e,l),f(l,r);for(let o=0;o<u.length;o+=1)u[o]&&u[o].m(r,null);v=!0},p(i,_){if(_&12){I=ke(i[2].i(i[3]["@id"])["rdfs:hasSubClass"]);let o;for(o=0;o<I.length;o+=1){const A=Ee(i,I,o);u[o]?(u[o].p(A,_),T(u[o],1)):(u[o]=De(A),u[o].c(),T(u[o],1),u[o].m(r,null))}for(he(),o=I.length;o<u.length;o+=1)b(o);me()}},i(i){if(!v){for(let _=0;_<I.length;_+=1)T(u[_]);v=!0}},o(i){u=u.filter(Boolean);for(let _=0;_<u.length;_+=1)R(u[_]);v=!1},d(i){i&&c(e),Le(u,i)}}}function et(n){let e=n[2].i(n[9]["@id"])["d3f:attack-id"]+"",t,s,a=n[2].i(n[9]["@id"])["rdfs:label"]+"",l;return{c(){t=M(e),s=M(" - "),l=M(a)},l(r){t=P(r,e),s=P(r," - "),l=P(r,a)},m(r,v){k(r,t,v),k(r,s,v),k(r,l,v)},p:Te,d(r){r&&(c(t),c(s),c(l))}}}function De(n){let e,t,s,a;return t=new $e({props:{href:de(n[2].i(n[9]["@id"])["d3f:attack-id"]),size:"small",$$slots:{default:[et]},$$scope:{ctx:n}}}),{c(){e=h("li"),U(t.$$.fragment),s=w()},l(l){e=m(l,"LI",{});var r=j(e);J(t.$$.fragment,r),s=D(r),r.forEach(c)},m(l,r){k(l,e,r),Q(t,e,null),f(e,s),a=!0},p(l,r){const v={};r&128&&(v.$$scope={dirty:r,ctx:l}),t.$set(v)},i(l){a||(T(t.$$.fragment,l),a=!0)},o(l){R(t.$$.fragment,l),a=!1},d(l){l&&c(e),W(t)}}}function Ie(n){let e,t,s;return t=new Fe({props:{$$slots:{default:[tt]},$$scope:{ctx:n}}}),{c(){e=h("div"),U(t.$$.fragment),this.h()},l(a){e=m(a,"DIV",{class:!0});var l=j(e);J(t.$$.fragment,l),l.forEach(c),this.h()},h(){C(e,"class","content")},m(a,l){k(a,e,l),Q(t,e,null),s=!0},i(a){s||(T(t.$$.fragment,a),s=!0)},o(a){R(t.$$.fragment,a),s=!1},d(a){a&&c(e),W(t)}}}function tt(n){let e,t="Browse the D3FEND knowledge graph by clicking on the nodes below.";return{c(){e=h("small"),e.textContent=t},l(s){e=m(s,"SMALL",{"data-svelte-h":!0}),Z(e)!=="svelte-cj5juo"&&(e.textContent=t)},m(s,a){k(s,e,a)},p:Te,d(s){s&&c(e)}}}function lt(n){let e,t,s,a,l,r,v,I,u,b,i,_,o="Definition",A,B,$,p=ze(n[4])+"",E,O,z,S,K,pe="D3FEND Inferred Relationships",le,x,se,ae,G,ne,X,F,re,ee,ie,oe,fe,ce,ue,y;const _e=n[6].header,te=Se(_e,n,n[7],qe),V=te||Ze(n);let H=n[2].graph.length>0&&xe(n),q=n[0].off_to_def.results.bindings.length>0&&Ie(n);return G=new Je({props:{off_to_def:n[0].off_to_def}}),{c(){V&&V.c(),e=w(),t=h("section"),s=h("div"),a=w(),H&&H.c(),l=w(),r=h("br"),v=w(),I=h("br"),u=w(),b=h("section"),i=h("div"),_=h("h2"),_.textContent=o,A=w(),B=h("div"),$=new Re(!1),E=w(),O=h("br"),z=w(),S=h("div"),K=h("h2"),K.textContent=pe,le=w(),q&&q.c(),x=w(),se=h("br"),ae=w(),U(G.$$.fragment),ne=w(),X=h("div"),F=h("a"),re=M("json"),ie=w(),oe=h("br"),fe=h("br"),ce=h("br"),ue=h("br"),this.h()},l(d){V&&V.l(d),e=D(d),t=m(d,"SECTION",{class:!0});var g=j(t);s=m(g,"DIV",{class:!0}),j(s).forEach(c),a=D(g),H&&H.l(g),l=D(g),r=m(g,"BR",{}),v=D(g),I=m(g,"BR",{}),g.forEach(c),u=D(d),b=m(d,"SECTION",{});var N=j(b);i=m(N,"DIV",{class:!0});var Y=j(i);_=m(Y,"H2",{class:!0,"data-svelte-h":!0}),Z(_)!=="svelte-thmaib"&&(_.textContent=o),A=D(Y),B=m(Y,"DIV",{class:!0});var ve=j(B);$=Ve(ve,!1),ve.forEach(c),E=D(Y),O=m(Y,"BR",{}),Y.forEach(c),z=D(N),S=m(N,"DIV",{class:!0});var L=j(S);K=m(L,"H2",{class:!0,"data-svelte-h":!0}),Z(K)!=="svelte-u3n8h4"&&(K.textContent=pe),le=D(L),q&&q.l(L),x=D(L),se=m(L,"BR",{}),ae=D(L),J(G.$$.fragment,L),ne=D(L),X=m(L,"DIV",{class:!0});var ge=j(X);F=m(ge,"A",{href:!0});var be=j(F);re=P(be,"json"),be.forEach(c),ge.forEach(c),L.forEach(c),ie=D(N),oe=m(N,"BR",{}),fe=m(N,"BR",{}),ce=m(N,"BR",{}),ue=m(N,"BR",{}),N.forEach(c),this.h()},h(){C(s,"class","text-center"),C(t,"class","content"),C(_,"class","text-center"),$.a=null,C(B,"class","text-justify"),C(i,"class","card"),C(K,"class","text-center"),C(F,"href",ee=`/api/offensive-technique/attack/${n[0].technique_id}.json`),C(X,"class","text-right"),C(S,"class","text-center card")},m(d,g){V&&V.m(d,g),k(d,e,g),k(d,t,g),f(t,s),f(t,a),H&&H.m(t,null),f(t,l),f(t,r),f(t,v),f(t,I),k(d,u,g),k(d,b,g),f(b,i),f(i,_),f(i,A),f(i,B),$.m(p,B),f(i,E),f(i,O),f(b,z),f(b,S),f(S,K),f(S,le),q&&q.m(S,null),f(S,x),f(S,se),f(S,ae),Q(G,S,null),f(S,ne),f(S,X),f(X,F),f(F,re),f(b,ie),f(b,oe),f(b,fe),f(b,ce),f(b,ue),y=!0},p(d,g){te?te.p&&(!y||g&128)&&Ae(te,_e,d,d[7],y?He(_e,d[7],g,We):Ne(d[7]),qe):V&&V.p&&(!y||g&2)&&V.p(d,y?g:-1),d[2].graph.length>0&&H.p(d,g),d[0].off_to_def.results.bindings.length>0?q?g&1&&T(q,1):(q=Ie(d),q.c(),T(q,1),q.m(S,x)):q&&(he(),R(q,1,1,()=>{q=null}),me());const N={};g&1&&(N.off_to_def=d[0].off_to_def),G.$set(N),(!y||g&1&&ee!==(ee=`/api/offensive-technique/attack/${d[0].technique_id}.json`))&&C(F,"href",ee)},i(d){y||(T(V,d),T(H),T(q),T(G.$$.fragment,d),y=!0)},o(d){R(V,d),R(H),R(q),R(G.$$.fragment,d),y=!1},d(d){d&&(c(e),c(t),c(u),c(b)),V&&V.d(d),H&&H.d(),q&&q.d(),W(G)}}}function st(n){let e,t,s,a;return e=new Ke({props:{title:"Offensive Technique Details"}}),s=new Ue({props:{$$slots:{default:[lt]},$$scope:{ctx:n}}}),s.$on("close",n[5]),{c(){U(e.$$.fragment),t=w(),U(s.$$.fragment)},l(l){J(e.$$.fragment,l),t=D(l),J(s.$$.fragment,l)},m(l,r){Q(e,l,r),k(l,t,r),Q(s,l,r),a=!0},p(l,[r]){const v={};r&131&&(v.$$scope={dirty:r,ctx:l}),s.$set(v)},i(l){a||(T(e.$$.fragment,l),T(s.$$.fragment,l),a=!0)},o(l){R(e.$$.fragment,l),R(s.$$.fragment,l),a=!1},d(l){l&&c(t),W(e,l),W(s,l)}}}function at(n,e,t){var _;let{$$slots:s={},$$scope:a}=e,{data:l}=e,r=new Ce(l.description),v=new Ce(l.subtechniques,{index:!0}),I=r.get("d3f:attack-id",l.technique_id),u=((_=I["d3f:definition"])==null?void 0:_.replace(/\(Citation: [^)]*\)/g,""))??"No definition available.",b;function i(o){ye("/")}return n.$$set=o=>{"data"in o&&t(0,l=o.data),"$$scope"in o&&t(7,a=o.$$scope)},n.$$.update=()=>{n.$$.dirty&1&&l.technique_id.includes(".")&&t(1,b=l.technique_id.split(".")[0])},[l,b,v,I,u,i,s,a]}class pt extends Pe{constructor(e){super(),Oe(this,e,at,st,Be,{data:0})}}export{pt as component,$t as universal};