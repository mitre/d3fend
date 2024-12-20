import{s as qe,Q as ue,R as Oe,e as s,b as a,d as o,v as l,j as r,k as n,n as Ue,i}from"./scheduler.BuUavueM.js";import{S as $e,i as Ae,c as Be,b as ze,m as Re,t as je,a as Ge,d as Ie}from"./index.B8nkrWGc.js";import{g as Ke,a as Pe}from"./spread.CgU5AtxT.js";import{B as Qe}from"./blog-layout.DKrYBvYw.js";function Je($){let u,m="The D3FEND Story So Far",d,c,p='We released D3FEND to the public in June of 2021 as a beta software release. We’ve kept it as beta releases since, using <a href="https://semver.org/" rel="nofollow">semantic versioning</a> to indicate we might make significant changes to the model. We knew that if we released a formal ontology, in <a href="https://www.w3.org/TR/owl2-primer/" rel="nofollow">OWL 2 DL</a>, that developers would start building applications on top of D3FEND’s <a href="/resources/ontology/">ontological model</a>. We were contacted by a variety of organizations who were building tools even with the beta release.',f,h,pe="We have also seen an vendors apply and collaborate on D3FEND in increasing numbers. Since its release, D3FEND has nearly tripled in size. Now, the benefit of two years of feedback and discussion from the community, we plan to release a stable D3FEND 1.0 in 2024.",A,v,fe="Toward D3FEND 1.0",B,w,ce="Our goal with a 1.0 release is to create a stable, extensible, and integration-friendly version of D3FEND.",z,x,de="Our vision is a community-developed cybersecurity ontology—which can satisfy requirements for sophisticated reasoning applications. This contrasts with an ontology used purely for language standardization. D3FEND is use case driven.",R,y,he="Community contributions to D3FEND have been essential to D3FEND’s progress. They’ve come from a diverse set of individuals with roles ranging from security architects, application security analysts, detection engineers, compliance experts, and expert ontologists. These varied perspectives help shape the ontology for both general and specific use cases.",j,g,me="Remaining Work to get to 1.0",G,C,ve="Making D3FEND Easier to Use",I,_,we="We are committed to making D3FEND easier to use and apply across a broader set of domains. This involves detailing specific use cases and creating recommended workflows and software tools for domains such as systems security engineering, risk engineering, and test and evaluation.",K,D,xe="Integration and Extensibility Improvements",Q,b,ye='What makes D3FEND powerful is that is both a formal model and a knowledge base. Thus, its dual purpose in that you can use it to structure applications, and reason about general concepts to make nuanced recommendations. This aspect of D3FEND and the primitives for this are buried in our <a href="/resources/ontology">ontology files</a>.',J,E,ge="Developing reasoning applications, such as reliable smart recommendation systems, is challenging. Using standards-based technologies make it even more challenging. We will continue using standards-based technology, the foremost being OWL 2 DL, the ontology specification D3FEND uses. This makes it easy to extend the base D3FEND model for custom applications with custom local knowledge.",Z,k,Ce="Continue Modeling Software and Hardware Weaknesses",V,T,_e='Today, D3FEND’s primary use case is finding relationships between defensive techniques and to offensive techniques through a model of infrastructure (<a href="/dao">digital artifacts</a> ). However, we are also starting to model weaknesses incorporating the Common Weakness Enumeration (<a href="https://cwe.mitre.org" rel="nofollow">CWE™</a>) with this method to deal with issues in addition to threat. We have made some progress on this, for example, the <a href="/taxonomies/d3f:Subroutine/">subroutine taxonomy</a>. We’ll also be adding more defensive techniques that address these weaknesses as well.',X,F,De="Add Access Control Concepts",Y,H,be='Access control concepts are a key concern for cybersecurity architects. Zero Trust’s rise in popularity underscores and extends these concepts. D3FEND’s first release was mostly focused on detection techniques (see <a href="https://d3fend.mitre.org/tactic/d3f:Detect/" rel="nofollow">Detect</a>). D3FEND 1.0 will include a taxonomy to cover access control concepts from a cybersecurity architect’s perspective.',ee,N,Ee="Connecting D3FEND to a Formal Upper Ontology",te,L,ke='Although not crucial for most users, aligning D3FEND with a <a href="https://en.wikipedia.org/wiki/Upper_ontology" rel="nofollow">formal upper ontology</a> is essential for ensuring the coherence, accuracy, and utility of the model for broader applications. Since this area of study includes the domain of philosophy, it’s perhaps unsurprising there are differing opinions amongst academics in approaches to modeling the universe.',ne,M,Te='Our aim in this area is to reconcile various modeling approaches, ensuring D3FEND achieves maximum compatible with popular upper ontologies, such as Basic Formal Ontology <a href="https://basic-formal-ontology.org/" rel="nofollow">(BFO)</a>, which is prevalent in the U.S., and Unified Foundational Ontology <a href="https://dev.nemo.inf.ufes.br/seon/UFO.html" rel="nofollow">(UFO)</a>, which we see used in Europe.',ie,W,Fe="Create a Content Deprecation Strategy",se,O,He='We will create a well-defined deprecation strategy for classes and properties. This will be based on the <a href="https://www.w3.org/TR/owl-ref/#Deprecation" rel="nofollow">OWL’s deprecation specification</a>. In addition, we will develop our workflows and user interface elements to show the deprecation status to users.',oe,P,Ne="Next Steps",le,S,Le='D3FEND’s open and flexible licensing and distribution enables us to realize our long-term vision. We encourage you to <a href="https://d3fend.mitre.org/contribute/" rel="nofollow">participate</a> in our community and help bring D3FEND 1.0 to life.',ae,q,Me="<em>Acknowledgements:</em>",re,U,We="<p>Thank you to Dr. Mike Smith and Will Barnum for reviewing drafts of this post.</p>";return{c(){u=s("h2"),u.textContent=m,d=a(),c=s("p"),c.innerHTML=p,f=a(),h=s("p"),h.textContent=pe,A=a(),v=s("h2"),v.textContent=fe,B=a(),w=s("p"),w.textContent=ce,z=a(),x=s("p"),x.textContent=de,R=a(),y=s("p"),y.textContent=he,j=a(),g=s("h2"),g.textContent=me,G=a(),C=s("h3"),C.textContent=ve,I=a(),_=s("p"),_.textContent=we,K=a(),D=s("h3"),D.textContent=xe,Q=a(),b=s("p"),b.innerHTML=ye,J=a(),E=s("p"),E.textContent=ge,Z=a(),k=s("h3"),k.textContent=Ce,V=a(),T=s("p"),T.innerHTML=_e,X=a(),F=s("h3"),F.textContent=De,Y=a(),H=s("p"),H.innerHTML=be,ee=a(),N=s("h3"),N.textContent=Ee,te=a(),L=s("p"),L.innerHTML=ke,ne=a(),M=s("p"),M.innerHTML=Te,ie=a(),W=s("h3"),W.textContent=Fe,se=a(),O=s("p"),O.innerHTML=He,oe=a(),P=s("h2"),P.textContent=Ne,le=a(),S=s("p"),S.innerHTML=Le,ae=a(),q=s("h6"),q.innerHTML=Me,re=a(),U=s("blockquote"),U.innerHTML=We},l(e){u=o(e,"H2",{"data-svelte-h":!0}),l(u)!=="svelte-1qs9p2d"&&(u.textContent=m),d=r(e),c=o(e,"P",{"data-svelte-h":!0}),l(c)!=="svelte-1ylpxnk"&&(c.innerHTML=p),f=r(e),h=o(e,"P",{"data-svelte-h":!0}),l(h)!=="svelte-1n9dfkl"&&(h.textContent=pe),A=r(e),v=o(e,"H2",{"data-svelte-h":!0}),l(v)!=="svelte-1kkztow"&&(v.textContent=fe),B=r(e),w=o(e,"P",{"data-svelte-h":!0}),l(w)!=="svelte-oht0t8"&&(w.textContent=ce),z=r(e),x=o(e,"P",{"data-svelte-h":!0}),l(x)!=="svelte-1by3055"&&(x.textContent=de),R=r(e),y=o(e,"P",{"data-svelte-h":!0}),l(y)!=="svelte-10k4qew"&&(y.textContent=he),j=r(e),g=o(e,"H2",{"data-svelte-h":!0}),l(g)!=="svelte-hev94c"&&(g.textContent=me),G=r(e),C=o(e,"H3",{"data-svelte-h":!0}),l(C)!=="svelte-1v7wdue"&&(C.textContent=ve),I=r(e),_=o(e,"P",{"data-svelte-h":!0}),l(_)!=="svelte-1oadoqi"&&(_.textContent=we),K=r(e),D=o(e,"H3",{"data-svelte-h":!0}),l(D)!=="svelte-15xhtdz"&&(D.textContent=xe),Q=r(e),b=o(e,"P",{"data-svelte-h":!0}),l(b)!=="svelte-17ce8fw"&&(b.innerHTML=ye),J=r(e),E=o(e,"P",{"data-svelte-h":!0}),l(E)!=="svelte-udl19b"&&(E.textContent=ge),Z=r(e),k=o(e,"H3",{"data-svelte-h":!0}),l(k)!=="svelte-fkasbf"&&(k.textContent=Ce),V=r(e),T=o(e,"P",{"data-svelte-h":!0}),l(T)!=="svelte-1uvuwso"&&(T.innerHTML=_e),X=r(e),F=o(e,"H3",{"data-svelte-h":!0}),l(F)!=="svelte-1hihrcv"&&(F.textContent=De),Y=r(e),H=o(e,"P",{"data-svelte-h":!0}),l(H)!=="svelte-f39n59"&&(H.innerHTML=be),ee=r(e),N=o(e,"H3",{"data-svelte-h":!0}),l(N)!=="svelte-6n2smq"&&(N.textContent=Ee),te=r(e),L=o(e,"P",{"data-svelte-h":!0}),l(L)!=="svelte-w0jq4c"&&(L.innerHTML=ke),ne=r(e),M=o(e,"P",{"data-svelte-h":!0}),l(M)!=="svelte-e855w6"&&(M.innerHTML=Te),ie=r(e),W=o(e,"H3",{"data-svelte-h":!0}),l(W)!=="svelte-168ykgh"&&(W.textContent=Fe),se=r(e),O=o(e,"P",{"data-svelte-h":!0}),l(O)!=="svelte-vt17cj"&&(O.innerHTML=He),oe=r(e),P=o(e,"H2",{"data-svelte-h":!0}),l(P)!=="svelte-dxcrp0"&&(P.textContent=Ne),le=r(e),S=o(e,"P",{"data-svelte-h":!0}),l(S)!=="svelte-1cd7evs"&&(S.innerHTML=Le),ae=r(e),q=o(e,"H6",{"data-svelte-h":!0}),l(q)!=="svelte-1nd3tu6"&&(q.innerHTML=Me),re=r(e),U=o(e,"BLOCKQUOTE",{"data-svelte-h":!0}),l(U)!=="svelte-1o0v7uo"&&(U.innerHTML=We)},m(e,t){n(e,u,t),n(e,d,t),n(e,c,t),n(e,f,t),n(e,h,t),n(e,A,t),n(e,v,t),n(e,B,t),n(e,w,t),n(e,z,t),n(e,x,t),n(e,R,t),n(e,y,t),n(e,j,t),n(e,g,t),n(e,G,t),n(e,C,t),n(e,I,t),n(e,_,t),n(e,K,t),n(e,D,t),n(e,Q,t),n(e,b,t),n(e,J,t),n(e,E,t),n(e,Z,t),n(e,k,t),n(e,V,t),n(e,T,t),n(e,X,t),n(e,F,t),n(e,Y,t),n(e,H,t),n(e,ee,t),n(e,N,t),n(e,te,t),n(e,L,t),n(e,ne,t),n(e,M,t),n(e,ie,t),n(e,W,t),n(e,se,t),n(e,O,t),n(e,oe,t),n(e,P,t),n(e,le,t),n(e,S,t),n(e,ae,t),n(e,q,t),n(e,re,t),n(e,U,t)},p:Ue,d(e){e&&(i(u),i(d),i(c),i(f),i(h),i(A),i(v),i(B),i(w),i(z),i(x),i(R),i(y),i(j),i(g),i(G),i(C),i(I),i(_),i(K),i(D),i(Q),i(b),i(J),i(E),i(Z),i(k),i(V),i(T),i(X),i(F),i(Y),i(H),i(ee),i(N),i(te),i(L),i(ne),i(M),i(ie),i(W),i(se),i(O),i(oe),i(P),i(le),i(S),i(ae),i(q),i(re),i(U))}}}function Ze($){let u,m;const d=[$[0],Se];let c={$$slots:{default:[Je]},$$scope:{ctx:$}};for(let p=0;p<d.length;p+=1)c=ue(c,d[p]);return u=new Qe({props:c}),{c(){Be(u.$$.fragment)},l(p){ze(u.$$.fragment,p)},m(p,f){Re(u,p,f),m=!0},p(p,[f]){const h=f&1?Ke(d,[f&1&&Pe(p[0]),f&0&&Pe(Se)]):{};f&2&&(h.$$scope={dirty:f,ctx:p}),u.$set(h)},i(p){m||(je(u.$$.fragment,p),m=!0)},o(p){Ge(u.$$.fragment,p),m=!1},d(p){Ie(u,p)}}}const Se={title:"D3FEND: Getting to 1.0",description:"Thanks to steady and valuable input from the community on the beta version of D3FEND, we are now ready advance to the next step: creating a stable, extensible, and integration-friendly version of D3FEND: D3FEND 1.0.",tags:"general",last_modified:"Oct 23, 2023 07:27:00",authors:"Peter Kaloroumakis|netfl0",category:"General",version:"0.13.0-BETA-1",target_audience:"Security Architects, Systems Security Engineers, Digital Engineers, Enterprise Modelers, Cyber Risk Engineers, Cyber T&E Engineers, and Ontologists",layout:"d3fend_post"};function Ve($,u,m){return $.$$set=d=>{m(0,u=ue(ue({},u),Oe(d)))},u=Oe(u),[u]}class nt extends $e{constructor(u){super(),Ae(this,u,Ve,Ze,qe,{})}}export{nt as default,Se as metadata};