import{d as $e}from"../chunks/dao-artifacts.C_NAGpf0.js";import{s as be,b as d,e as r,j as m,d as o,f as h,v as I,i as l,w as i,O as ve,k as M,l as s,n as ke}from"../chunks/scheduler.BuUavueM.js";import{S as xe,i as Ce,c as P,b as D,m as H,t as L,a as z,d as j}from"../chunks/index.B8nkrWGc.js";import{B as te}from"../chunks/BlockTree.DO6VVPJh.js";import{A as ye}from"../chunks/Alert.Ci27c02Q.js";import{T as we}from"../chunks/Title.CTiQNLLX.js";import{L as Se}from"../chunks/Lookup-DAO.Der5Slgw.js";import{G as Ae}from"../chunks/lib.BDR6A2xH.js";import"../chunks/entry.D5y5HF-9.js";function Te(f){return $e(f)}const Ge=Object.freeze(Object.defineProperty({__proto__:null,load:Te},Symbol.toStringTag,{value:"Module"}));function Ee(f){let n,u='Please also see the <a href="/taxonomies/">taxonomies page.</a>';return{c(){n=r("small"),n.innerHTML=u},l(t){n=o(t,"SMALL",{"data-svelte-h":!0}),I(n)!=="svelte-17hktgp"&&(n.innerHTML=u)},m(t,p){M(t,n,p)},p:ke,d(t){t&&l(n)}}}function Oe(f){let n,u,t,p,K="Digital Artifact Ontology",ae,A,me,se,q,pe=`This page renders interesting portions of the Digital Artifact Ontology, but
    not the whole thing. Some concepts have no direct relationships specified,
    sometimes they are inferred through parent classes. Thus, when you click on
    a more detailed view, you may not see direct relationships to offensive or
    defensive techniques.`,ne,_,W,T,G,E,$,X,c,b,B,ge="High-Level Artifacts",re,v,oe,k,F,ue="Files",le,x,ie,C,V,he="Network Traffic",fe,y,ce,w,J,_e="Software",de,S,Y;return n=new we({props:{title:"Digital Artifact Ontology"}}),_=new ye({props:{$$slots:{default:[Ee]},$$scope:{ctx:f}}}),$=new Se({props:{da_graph:f[0].da_graph}}),v=new te({props:{root_node:"d3f:DigitalArtifact",root_node_key:"@id",graph:f[1],edge_key:"rdfs:hasSubClass",label_key:"rdfs:label",size:"small",block_style:"background-color: #fff4dd; border: hsl(40.5882352941,60%,83.3333333333%) 1px solid;margin-bottom: 1px;",max_depth:"2"}}),x=new te({props:{root_node:"d3f:File",root_node_key:"@id",graph:f[1],edge_key:"rdfs:hasSubClass",label_key:"rdfs:label",size:"small",block_style:"background-color: #fff4dd; border: hsl(40.5882352941,60%,83.3333333333%) 1px solid;margin-bottom: 1px;"}}),y=new te({props:{root_node:"d3f:NetworkTraffic",root_node_key:"@id",graph:f[1],edge_key:"rdfs:hasSubClass",label_key:"rdfs:label",size:"small",block_style:"background-color: #fff4dd; border: hsl(40.5882352941,60%,83.3333333333%) 1px solid;margin-bottom: 1px;"}}),S=new te({props:{root_node:"d3f:Software",root_node_key:"@id",graph:f[1],edge_key:"rdfs:hasSubClass",label_key:"rdfs:label",size:"small",block_style:"background-color: #fff4dd; border: hsl(40.5882352941,60%,83.3333333333%) 1px solid;margin-bottom: 1px;"}}),{c(){P(n.$$.fragment),u=d(),t=r("section"),p=r("h1"),p.textContent=K,ae=d(),A=r("img"),se=d(),q=r("p"),q.textContent=pe,ne=d(),P(_.$$.fragment),W=d(),T=r("section"),G=r("div"),E=r("span"),P($.$$.fragment),X=d(),c=r("div"),b=r("span"),B=r("h2"),B.textContent=ge,re=d(),P(v.$$.fragment),oe=d(),k=r("span"),F=r("h2"),F.textContent=ue,le=d(),P(x.$$.fragment),ie=d(),C=r("span"),V=r("h2"),V.textContent=he,fe=d(),P(y.$$.fragment),ce=d(),w=r("span"),J=r("h2"),J.textContent=_e,de=d(),P(S.$$.fragment),this.h()},l(e){D(n.$$.fragment,e),u=m(e),t=o(e,"SECTION",{class:!0});var a=h(t);p=o(a,"H1",{class:!0,"data-svelte-h":!0}),I(p)!=="svelte-1ilkpdn"&&(p.textContent=K),ae=m(a),A=o(a,"IMG",{alt:!0,src:!0,class:!0}),se=m(a),q=o(a,"P",{"data-svelte-h":!0}),I(q)!=="svelte-140bylb"&&(q.textContent=pe),ne=m(a),D(_.$$.fragment,a),a.forEach(l),W=m(e),T=o(e,"SECTION",{class:!0});var Q=h(T);G=o(Q,"DIV",{class:!0});var R=h(G);E=o(R,"SPAN",{id:!0,class:!0});var U=h(E);D($.$$.fragment,U),U.forEach(l),R.forEach(l),Q.forEach(l),X=m(e),c=o(e,"DIV",{id:!0,class:!0});var g=h(c);b=o(g,"SPAN",{class:!0});var O=h(b);B=o(O,"H2",{"data-svelte-h":!0}),I(B)!=="svelte-9buj1i"&&(B.textContent=ge),re=m(O),D(v.$$.fragment,O),O.forEach(l),oe=m(g),k=o(g,"SPAN",{class:!0});var N=h(k);F=o(N,"H2",{"data-svelte-h":!0}),I(F)!=="svelte-4q5rlr"&&(F.textContent=ue),le=m(N),D(x.$$.fragment,N),N.forEach(l),ie=m(g),C=o(g,"SPAN",{class:!0});var Z=h(C);V=o(Z,"H2",{"data-svelte-h":!0}),I(V)!=="svelte-15u5kjf"&&(V.textContent=he),fe=m(Z),D(y.$$.fragment,Z),Z.forEach(l),ce=m(g),w=o(g,"SPAN",{class:!0});var ee=h(w);J=o(ee,"H2",{"data-svelte-h":!0}),I(J)!=="svelte-4ahosz"&&(J.textContent=_e),de=m(ee),D(S.$$.fragment,ee),ee.forEach(l),g.forEach(l),this.h()},h(){i(p,"class","text-center"),i(A,"alt","Digital Artifact Ontology Overview"),ve(A.src,me="/img/attack-dao-defend.png")||i(A,"src",me),i(A,"class","svelte-1bgesgr"),i(t,"class","content"),i(E,"id","lookup_container"),i(E,"class","text-center"),i(G,"class","card"),i(T,"class","content"),i(b,"class","flex-column flex-column-max-content card svelte-1bgesgr"),i(k,"class","flex-column flex-column-max-content card svelte-1bgesgr"),i(C,"class","flex-column flex-column-max-content card svelte-1bgesgr"),i(w,"class","flex-column flex-column-max-content card svelte-1bgesgr"),i(c,"id","browser"),i(c,"class","flex flex-start content center wrap svelte-1bgesgr")},m(e,a){H(n,e,a),M(e,u,a),M(e,t,a),s(t,p),s(t,ae),s(t,A),s(t,se),s(t,q),s(t,ne),H(_,t,null),M(e,W,a),M(e,T,a),s(T,G),s(G,E),H($,E,null),M(e,X,a),M(e,c,a),s(c,b),s(b,B),s(b,re),H(v,b,null),s(c,oe),s(c,k),s(k,F),s(k,le),H(x,k,null),s(c,ie),s(c,C),s(C,V),s(C,fe),H(y,C,null),s(c,ce),s(c,w),s(w,J),s(w,de),H(S,w,null),Y=!0},p(e,[a]){const Q={};a&16&&(Q.$$scope={dirty:a,ctx:e}),_.$set(Q);const R={};a&1&&(R.da_graph=e[0].da_graph),$.$set(R);const U={};a&2&&(U.graph=e[1]),v.$set(U);const g={};a&2&&(g.graph=e[1]),x.$set(g);const O={};a&2&&(O.graph=e[1]),y.$set(O);const N={};a&2&&(N.graph=e[1]),S.$set(N)},i(e){Y||(L(n.$$.fragment,e),L(_.$$.fragment,e),L($.$$.fragment,e),L(v.$$.fragment,e),L(x.$$.fragment,e),L(y.$$.fragment,e),L(S.$$.fragment,e),Y=!0)},o(e){z(n.$$.fragment,e),z(_.$$.fragment,e),z($.$$.fragment,e),z(v.$$.fragment,e),z(x.$$.fragment,e),z(y.$$.fragment,e),z(S.$$.fragment,e),Y=!1},d(e){e&&(l(u),l(t),l(W),l(T),l(X),l(c)),j(n,e),j(_),j($),j(v),j(x),j(y),j(S)}}}function Ne(f,n,u){let{data:t}=n,p;return f.$$set=K=>{"data"in K&&u(0,t=K.data)},f.$$.update=()=>{f.$$.dirty&1&&(t.da_graph["@graph"],u(1,p=new Ae(t.da_graph)))},[t,p]}class Be extends xe{constructor(n){super(),Ce(this,n,Ne,Oe,be,{data:0})}}export{Be as component,Ge as universal};