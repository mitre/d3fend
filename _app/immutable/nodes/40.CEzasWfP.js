import{e as ge}from"../chunks/index.g5YcAAdQ.js";import{s as ve,b as c,e as a,J as Ee,j as p,d as n,f as D,v as O,i as s,K as _e,w as m,k as l,l as o}from"../chunks/scheduler.Cph8Trd5.js";import{S as be,i as $e,c as A,b as q,m as j,t as M,a as H,d as P}from"../chunks/index.CThJCPP4.js";import{T as Ne}from"../chunks/Title.B0Sa5AEO.js";import{T as ee}from"../chunks/Table.CrBpDDRG.js";async function Te({fetch:w}){const r=await w("/changelog.json"),u=await r.json();return!r.status===200&&ge(500,u.message),{changelog:u}}const ke=Object.freeze(Object.defineProperty({__proto__:null,load:Te},Symbol.toStringTag,{value:"Module"}));function xe(w){let r,u,i,f,le="D3FEND Resources",te,se,ae,h,C,ce="General Resources",ne,E,K,_,d,R,pe="Tools",oe,b,V,$,g,I,fe="Mappings",re,N,z,T,v,S,me="Misc",ie,x,W,B,J,L,G,F,k,Y=w[0].changelog.html+"",y;return r=new Ne({props:{title:"Resources"}}),E=new ee({props:{table_cols:["Resource","Description"],table_rows:[{Resource:"<a href='/resources/D3FEND.pdf'>D3FEND Paper</a>",Description:"This paper explains the motivation and design of the D3FEND knowledge graph. PDF format."},{Resource:"<a class='' href='/resources/ontology/'>D3FEND Ontology Resources</a>",Description:"Access the D3FEND Ontology and associated data files in various formats such as TTL, JSON-LD, and RDF/OWL."},{Resource:"<a href='/poster'>D3FEND Poster</a>",Description:"A D3FEND Matrix web view suitable for printing, adjust your printer page size settings to match the resolution and size needed."}]}}),b=new ee({props:{table_cols:["Tool","Description"],table_rows:[{Tool:"<a href='/ontologies/d3fend.csv'>D3FEND Spreadsheet</a>",Description:"This spreadsheet contains all D3FEND techniques and their definitions. CSV format."},{Tool:"<a href='/tools/attack-extractor'>ATT&CK Extractor</a>",Description:"Extracts ATT&CK techniques from blobs of text and recommends <i>potential</i> D3FEND countermeasures."},{Tool:"<a class='' href='/tools/d3fend-extractor'>D3FEND Extractor</a>",Description:"Extracts D3FEND techniques from blobs of text and shows related ATT&CK techniques."},{Tool:"<a class='' href='/tools/artifact-extractor'>D3FEND Artifact Extractor</a>",Description:"Extracts D3FEND Artifacts from blobs of text and links to their definitions."}]}}),N=new ee({props:{table_cols:["Mapping","Description"],table_rows:[{Mapping:"<a href='/mappings/attack-mitigations'>ATT&CK Mitigations to D3FEND Techniques</a>",Description:"The D3FEND team created this mapping in order to help users navigate between the two knowledgebases."},{Mapping:"<a class='' href='/mappings/nist/5'>NIST 800-53 Rev. 5 to D3FEND Techniques</a>",Description:"The D3FEND team created this mapping in order to help users navigate between the two data sets."},{Mapping:"<a class='' href='/mappings/cci/2022-04-05'>DISA CCI to D3FEND Techniques</a>",Description:"The D3FEND team created this mapping in order to help users navigate between the two data sets."}]}}),x=new ee({props:{table_cols:["Resource","Description"],table_rows:[{Resource:"<a href='https://next.d3fend.mitre.org'>D3FEND Next</a>",Description:"The next/upcoming (and alpha) version of the D3FEND website."},{Resource:"<a href='https://github.com/d3fend'>D3FEND Github</a>",Description:"Open source code from the D3FEND project. You can create issues or submit pull requests."},{Resource:"<a class='glow' href='https://join.slack.com/t/mitre-d3fend/shared_invite/zt-1fm6t0lkm-p1IHW1KdabklvDFbxZ1WCw'>D3FEND Slack</a>",Description:"Join our public D3FEND Slack Workspace."},{Resource:"<a class='' href='/api-docs'>D3FEND API</a>",Description:"Initial public D3FEND developer's API"}]}}),{c(){A(r.$$.fragment),u=c(),i=a("section"),f=a("h1"),f.textContent=le,te=c(),se=a("br"),ae=c(),h=a("div"),C=a("h2"),C.textContent=ce,ne=c(),A(E.$$.fragment),K=c(),_=a("section"),d=a("div"),R=a("h2"),R.textContent=pe,oe=c(),A(b.$$.fragment),V=c(),$=a("section"),g=a("div"),I=a("h2"),I.textContent=fe,re=c(),A(N.$$.fragment),z=c(),T=a("section"),v=a("div"),S=a("h2"),S.textContent=me,ie=c(),A(x.$$.fragment),W=c(),B=a("br"),J=c(),L=a("br"),G=c(),F=a("section"),k=new Ee(!1),this.h()},l(e){q(r.$$.fragment,e),u=p(e),i=n(e,"SECTION",{class:!0});var t=D(i);f=n(t,"H1",{class:!0,"data-svelte-h":!0}),O(f)!=="svelte-1k4kpgr"&&(f.textContent=le),te=p(t),se=n(t,"BR",{}),ae=p(t),h=n(t,"DIV",{class:!0});var Z=D(h);C=n(Z,"H2",{"data-svelte-h":!0}),O(C)!=="svelte-1emi3j1"&&(C.textContent=ce),ne=p(Z),q(E.$$.fragment,Z),Z.forEach(s),t.forEach(s),K=p(e),_=n(e,"SECTION",{class:!0});var ue=D(_);d=n(ue,"DIV",{class:!0});var Q=D(d);R=n(Q,"H2",{"data-svelte-h":!0}),O(R)!=="svelte-ngy2mb"&&(R.textContent=pe),oe=p(Q),q(b.$$.fragment,Q),Q.forEach(s),ue.forEach(s),V=p(e),$=n(e,"SECTION",{class:!0});var De=D($);g=n(De,"DIV",{class:!0});var U=D(g);I=n(U,"H2",{"data-svelte-h":!0}),O(I)!=="svelte-4iei75"&&(I.textContent=fe),re=p(U),q(N.$$.fragment,U),U.forEach(s),De.forEach(s),z=p(e),T=n(e,"SECTION",{class:!0});var he=D(T);v=n(he,"DIV",{class:!0});var X=D(v);S=n(X,"H2",{"data-svelte-h":!0}),O(S)!=="svelte-1ws6q3m"&&(S.textContent=me),ie=p(X),q(x.$$.fragment,X),X.forEach(s),he.forEach(s),W=p(e),B=n(e,"BR",{}),J=p(e),L=n(e,"BR",{}),G=p(e),F=n(e,"SECTION",{class:!0});var de=D(F);k=_e(de,!1),de.forEach(s),this.h()},h(){m(f,"class","text-center"),m(h,"class","center"),m(i,"class","content"),m(d,"class","center"),m(_,"class","content"),m(g,"class","center"),m($,"class","content"),m(v,"class","center"),m(T,"class","content"),k.a=null,m(F,"class","content")},m(e,t){j(r,e,t),l(e,u,t),l(e,i,t),o(i,f),o(i,te),o(i,se),o(i,ae),o(i,h),o(h,C),o(h,ne),j(E,h,null),l(e,K,t),l(e,_,t),o(_,d),o(d,R),o(d,oe),j(b,d,null),l(e,V,t),l(e,$,t),o($,g),o(g,I),o(g,re),j(N,g,null),l(e,z,t),l(e,T,t),o(T,v),o(v,S),o(v,ie),j(x,v,null),l(e,W,t),l(e,B,t),l(e,J,t),l(e,L,t),l(e,G,t),l(e,F,t),k.m(Y,F),y=!0},p(e,[t]){(!y||t&1)&&Y!==(Y=e[0].changelog.html+"")&&k.p(Y)},i(e){y||(M(r.$$.fragment,e),M(E.$$.fragment,e),M(b.$$.fragment,e),M(N.$$.fragment,e),M(x.$$.fragment,e),y=!0)},o(e){H(r.$$.fragment,e),H(E.$$.fragment,e),H(b.$$.fragment,e),H(N.$$.fragment,e),H(x.$$.fragment,e),y=!1},d(e){e&&(s(u),s(i),s(K),s(_),s(V),s($),s(z),s(T),s(W),s(B),s(J),s(L),s(G),s(F)),P(r,e),P(E),P(b),P(N),P(x)}}}function Fe(w,r,u){let{data:i}=r;return w.$$set=f=>{"data"in f&&u(0,i=f.data)},[i]}class ye extends be{constructor(r){super(),$e(this,r,Fe,xe,ve,{data:0})}}export{ye as component,ke as universal};