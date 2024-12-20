import{e as Pe}from"../chunks/index.g5YcAAdQ.js";import{s as Fe,b as x,e as h,j as V,d,f as D,v as Y,i as o,w as T,k as $,l as i,P as De,p as ie,y as Me,o as Ke,q as Ue,t as z,h as G,E as Ee,m as Z,n as ee,J as fe,L as Te,F as Ce}from"../chunks/scheduler.BuUavueM.js";import{h as ge,u as Re}from"../chunks/await_block.8NTS1AiM.js";import{e as ce}from"../chunks/each.Ckho9Dz0.js";import{S as ze,i as Ge,c as he,b as de,m as _e,t as le,a as ae,d as ve,g as Se,e as Be}from"../chunks/index.B8nkrWGc.js";import{L as Je}from"../chunks/navigator.ClHjN3g0.js";import{H as Xe}from"../chunks/Header.FNfR-j_w.js";import{T as Ye}from"../chunks/Title.CTiQNLLX.js";import{A as Qe}from"../chunks/Alert.Ci27c02Q.js";import{b as We,S as Oe}from"../chunks/extract.tEjOmvyM.js";import{G as ye,b as oe,k as we,i as me,d as be}from"../chunks/lib.BDR6A2xH.js";import{p as Ze}from"../chunks/stores.1wZ9lVii.js";async function et({fetch:n}){const e=await n("/api/technique/all.json"),t=await e.json();return e.status!==200&&Pe(500,data.message),{techniques:t}}const At=Object.freeze(Object.defineProperty({__proto__:null,load:et},Symbol.toStringTag,{value:"Module"}));function qe(n,e,t){const l=n.slice();return l[22]=e[t],l}function Ne(n,e,t){const l=n.slice();return l[26]=e[t],l}function Ae(n,e,t){const l=n.slice();return l[30]=e[t],l}function tt(n){let e,t=n[29].message+"",l;return{c(){e=h("p"),l=z(t),this.h()},l(a){e=d(a,"P",{style:!0});var r=D(e);l=G(r,t),r.forEach(o),this.h()},h(){Ee(e,"color","red")},m(a,r){$(a,e,r),i(e,l)},p(a,r){r[0]&32&&t!==(t=a[29].message+"")&&Z(l,t)},i:ee,o:ee,d(a){a&&o(e)}}}function lt(n){let e,t,l,a;const r=[nt,at],s=[];function u(_,g){return _[21].length>0?0:!_[3]&&_[21].length<1?1:-1}return~(e=u(n))&&(t=s[e]=r[e](n)),{c(){t&&t.c(),l=fe()},l(_){t&&t.l(_),l=fe()},m(_,g){~e&&s[e].m(_,g),$(_,l,g),a=!0},p(_,g){let A=e;e=u(_),e===A?~e&&s[e].p(_,g):(t&&(Se(),ae(s[A],1,1,()=>{s[A]=null}),Be()),~e?(t=s[e],t?t.p(_,g):(t=s[e]=r[e](_),t.c()),le(t,1),t.m(l.parentNode,l)):t=null)},i(_){a||(le(t),a=!0)},o(_){ae(t),a=!1},d(_){_&&o(l),~e&&s[e].d(_)}}}function at(n){let e,t="No D3FEND techniques found in text.";return{c(){e=h("div"),e.textContent=t,this.h()},l(l){e=d(l,"DIV",{class:!0,"data-svelte-h":!0}),Y(e)!=="svelte-8bvq89"&&(e.textContent=t),this.h()},h(){T(e,"class","card")},m(l,a){$(l,e,a)},p:ee,i:ee,o:ee,d(l){l&&o(e)}}}function nt(n){let e,t,l,a,r,s,u,_,g,A,m,C="<b><i>Mapping Results:</i></b>",k,R,H,E="Download ATT&CK Navigator Layer",f,p,c,v,y,B="copy",w,I,j,P='<th class="stretch">D3FEND ID</th> <th>D3FEND Name</th> <th>Related ATT&amp;CK Techniques</th>',X,J,K,te,N=n[0]&&Ie(n);a=new Qe({props:{$$slots:{default:[rt]},$$scope:{ctx:n}}}),g=new Oe({props:{url:n[6].url}});function S(b,F){return b[2]?ot:st}let M=S(n),q=M(n),L=ce(n[21]),O=[];for(let b=0;b<L.length;b+=1)O[b]=xe(qe(n,L,b));return{c(){e=h("div"),N&&N.c(),t=x(),l=h("div"),he(a.$$.fragment),r=x(),s=h("div"),u=h("div"),_=h("div"),he(g.$$.fragment),A=x(),m=h("div"),m.innerHTML=C,k=x(),R=h("div"),H=h("button"),H.textContent=E,f=x(),p=h("div"),c=h("div"),q.c(),v=x(),y=h("button"),y.textContent=B,w=x(),I=h("table"),j=h("thead"),j.innerHTML=P,X=x();for(let b=0;b<O.length;b+=1)O[b].c();this.h()},l(b){e=d(b,"DIV",{class:!0});var F=D(e);N&&N.l(F),F.forEach(o),t=V(b),l=d(b,"DIV",{class:!0});var W=D(l);de(a.$$.fragment,W),W.forEach(o),r=V(b),s=d(b,"DIV",{class:!0});var Q=D(s);u=d(Q,"DIV",{class:!0});var U=D(u);_=d(U,"DIV",{class:!0});var ne=D(_);de(g.$$.fragment,ne),ne.forEach(o),U.forEach(o),A=V(Q),m=d(Q,"DIV",{"data-svelte-h":!0}),Y(m)!=="svelte-1hnfu3y"&&(m.innerHTML=C),k=V(Q),R=d(Q,"DIV",{class:!0});var ue=D(R);H=d(ue,"BUTTON",{class:!0,title:!0,"data-svelte-h":!0}),Y(H)!=="svelte-9h51sy"&&(H.textContent=E),ue.forEach(o),f=V(Q),p=d(Q,"DIV",{class:!0});var re=D(p);c=d(re,"DIV",{class:!0});var se=D(c);q.l(se),v=V(se),y=d(se,"BUTTON",{"data-svelte-h":!0}),Y(y)!=="svelte-1gemhfw"&&(y.textContent=B),se.forEach(o),w=V(re),I=d(re,"TABLE",{id:!0,class:!0});var pe=D(I);j=d(pe,"THEAD",{"data-svelte-h":!0}),Y(j)!=="svelte-17gzi8u"&&(j.innerHTML=P),X=V(pe);for(let ke=0;ke<O.length;ke+=1)O[ke].l(pe);pe.forEach(o),re.forEach(o),Q.forEach(o),this.h()},h(){T(e,"class","card"),T(l,"class","card"),T(_,"class","text-right"),T(u,"class","stretch"),T(H,"class","small button"),T(H,"title","Load into Navigator to see related TTPs"),T(R,"class","text-right"),T(c,"class","text-right"),T(I,"id","mappings"),T(I,"class","table-auto"),T(p,"class","results-wrap center svelte-xumjr3"),T(s,"class","card")},m(b,F){$(b,e,F),N&&N.m(e,null),$(b,t,F),$(b,l,F),_e(a,l,null),$(b,r,F),$(b,s,F),i(s,u),i(u,_),_e(g,_,null),i(s,A),i(s,m),i(s,k),i(s,R),i(R,H),i(s,f),i(s,p),i(p,c),q.m(c,null),i(c,v),i(c,y),i(p,w),i(p,I),i(I,j),i(I,X);for(let W=0;W<O.length;W+=1)O[W]&&O[W].m(I,null);J=!0,K||(te=[ie(H,"click",n[7]),ie(y,"click",vt)],K=!0)},p(b,F){b[0]?N?(N.p(b,F),F[0]&1&&le(N,1)):(N=Ie(b),N.c(),le(N,1),N.m(e,null)):N&&(Se(),ae(N,1,1,()=>{N=null}),Be());const W={};F[1]&4&&(W.$$scope={dirty:F,ctx:b}),a.$set(W);const Q={};if(F[0]&64&&(Q.url=b[6].url),g.$set(Q),M===(M=S(b))&&q?q.p(b,F):(q.d(1),q=M(b),q&&(q.c(),q.m(c,v))),F[0]&48){L=ce(b[21]);let U;for(U=0;U<L.length;U+=1){const ne=qe(b,L,U);O[U]?O[U].p(ne,F):(O[U]=xe(ne),O[U].c(),O[U].m(I,null))}for(;U<O.length;U+=1)O[U].d(1);O.length=L.length}},i(b){J||(le(N),le(a.$$.fragment,b),le(g.$$.fragment,b),J=!0)},o(b){ae(N),ae(a.$$.fragment,b),ae(g.$$.fragment,b),J=!1},d(b){b&&(o(e),o(t),o(l),o(r),o(s)),N&&N.d(),ve(a),ve(g),q.d(),Te(O,b),K=!1,Me(te)}}}function Ie(n){let e,t,l,a,r,s,u,_,g=n[0].length+"",A,m,C,k,R;l=new Oe({props:{url:n[6].url}});let H=ce(n[0]),E=[];for(let f=0;f<H.length;f+=1)E[f]=Le(Ae(n,H,f));return{c(){e=h("div"),t=h("div"),he(l.$$.fragment),a=x(),r=h("div"),s=h("b"),u=h("i"),_=z("Extracted "),A=z(g),m=z(" unique IDs:"),C=x(),k=h("dl");for(let f=0;f<E.length;f+=1)E[f].c();this.h()},l(f){e=d(f,"DIV",{class:!0});var p=D(e);t=d(p,"DIV",{class:!0});var c=D(t);de(l.$$.fragment,c),c.forEach(o),p.forEach(o),a=V(f),r=d(f,"DIV",{class:!0});var v=D(r);s=d(v,"B",{});var y=D(s);u=d(y,"I",{});var B=D(u);_=G(B,"Extracted "),A=G(B,g),m=G(B," unique IDs:"),B.forEach(o),y.forEach(o),C=V(v),k=d(v,"DL",{class:!0});var w=D(k);for(let I=0;I<E.length;I+=1)E[I].l(w);w.forEach(o),v.forEach(o),this.h()},h(){T(t,"class","text-right"),T(e,"class","stretch"),T(k,"class","flex flex-wrap svelte-xumjr3"),T(r,"class","")},m(f,p){$(f,e,p),i(e,t),_e(l,t,null),$(f,a,p),$(f,r,p),i(r,s),i(s,u),i(u,_),i(u,A),i(u,m),i(r,C),i(r,k);for(let c=0;c<E.length;c+=1)E[c]&&E[c].m(k,null);R=!0},p(f,p){const c={};if(p[0]&64&&(c.url=f[6].url),l.$set(c),(!R||p[0]&1)&&g!==(g=f[0].length+"")&&Z(A,g),p[0]&1){H=ce(f[0]);let v;for(v=0;v<H.length;v+=1){const y=Ae(f,H,v);E[v]?E[v].p(y,p):(E[v]=Le(y),E[v].c(),E[v].m(k,null))}for(;v<E.length;v+=1)E[v].d(1);E.length=H.length}},i(f){R||(le(l.$$.fragment,f),R=!0)},o(f){ae(l.$$.fragment,f),R=!1},d(f){f&&(o(e),o(a),o(r)),ve(l),Te(E,f)}}}function Le(n){let e,t,l=n[30]+"",a,r;return{c(){e=h("dd"),t=h("a"),a=z(l),this.h()},l(s){e=d(s,"DD",{});var u=D(e);t=d(u,"A",{href:!0});var _=D(t);a=G(_,l),_.forEach(o),u.forEach(o),this.h()},h(){T(t,"href",r="/technique/"+n[30])},m(s,u){$(s,e,u),i(e,t),i(t,a)},p(s,u){u[0]&1&&l!==(l=s[30]+"")&&Z(a,l),u[0]&1&&r!==(r="/technique/"+s[30])&&T(t,"href",r)},d(s){s&&o(e)}}}function rt(n){let e,t="Note: ",l;return{c(){e=h("b"),e.textContent=t,l=z(`These relationships are generated based on the digital
          artifacts specified for the offensive and defensive techniques. They
          are designed to give you ideas, they are not designed to be exact
          matches or indicate precise coverage. They can be used to better
          understand the technologies, ask better questions, and develop test
          plans for your countermeasures.`)},l(a){e=d(a,"B",{"data-svelte-h":!0}),Y(e)!=="svelte-gwu32y"&&(e.textContent=t),l=G(a,`These relationships are generated based on the digital
          artifacts specified for the offensive and defensive techniques. They
          are designed to give you ideas, they are not designed to be exact
          matches or indicate precise coverage. They can be used to better
          understand the technologies, ask better questions, and develop test
          plans for your countermeasures.`)},m(a,r){$(a,e,r),$(a,l,r)},p:ee,d(a){a&&(o(e),o(l))}}}function st(n){let e,t="select",l,a;return{c(){e=h("button"),e.textContent=t,this.h()},l(r){e=d(r,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(e)!=="svelte-3feg34"&&(e.textContent=t),this.h()},h(){T(e,"class","selector svelte-xumjr3")},m(r,s){$(r,e,s),l||(a=ie(e,"click",n[10]),l=!0)},p:ee,d(r){r&&o(e),l=!1,a()}}}function ot(n){let e,t="deselect",l,a;return{c(){e=h("button"),e.textContent=t,this.h()},l(r){e=d(r,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(e)!=="svelte-iey0zo"&&(e.textContent=t),this.h()},h(){T(e,"class","selector svelte-xumjr3")},m(r,s){$(r,e,s),l||(a=ie(e,"click",n[9]),l=!0)},p:ee,d(r){r&&o(e),l=!1,a()}}}function it(n){let e,t=n[29].message+"",l;return{c(){e=h("p"),l=z(t),this.h()},l(a){e=d(a,"P",{style:!0});var r=D(e);l=G(r,t),r.forEach(o),this.h()},h(){Ee(e,"color","red")},m(a,r){$(a,e,r),i(e,l)},p(a,r){r[0]&32&&t!==(t=a[29].message+"")&&Z(l,t)},d(a){a&&o(e)}}}function ft(n){let e;function t(r,s){return r[25].description.graph[0]?ut:ct}let l=t(n),a=l(n);return{c(){a.c(),e=fe()},l(r){a.l(r),e=fe()},m(r,s){a.m(r,s),$(r,e,s)},p(r,s){l===(l=t(r))&&a?a.p(r,s):(a.d(1),a=l(r),a&&(a.c(),a.m(e.parentNode,e)))},d(r){r&&o(e),a.d(r)}}}function ct(n){let e,t,l=n[25].id+"",a,r,s,u,_="not found in D3FEND graph",g,A;return{c(){e=h("td"),t=h("a"),a=z(l),s=x(),u=h("td"),u.textContent=_,g=x(),A=h("td"),this.h()},l(m){e=d(m,"TD",{class:!0});var C=D(e);t=d(C,"A",{style:!0,href:!0});var k=D(t);a=G(k,l),k.forEach(o),C.forEach(o),s=V(m),u=d(m,"TD",{"data-svelte-h":!0}),Y(u)!=="svelte-mgiypo"&&(u.textContent=_),g=V(m),A=d(m,"TD",{}),D(A).forEach(o),this.h()},h(){Ee(t,"color","red"),T(t,"href",r=we(n[25].id)),T(e,"class","text-center")},m(m,C){$(m,e,C),i(e,t),i(t,a),$(m,s,C),$(m,u,C),$(m,g,C),$(m,A,C)},p(m,C){C[0]&32&&l!==(l=m[25].id+"")&&Z(a,l),C[0]&32&&r!==(r=we(m[25].id))&&T(t,"href",r)},d(m){m&&(o(e),o(s),o(u),o(g),o(A))}}}function ut(n){let e,t,l=n[25].description.graph[0]["d3f:d3fend-id"]+"",a,r,s,u,_=n[25].description.graph[0]["rdfs:label"]+"",g,A,m,C,k,R='<th scope="col">defensive verb</th> <th scope="col">defensive artifact</th> <th scope="col">ATT&amp;CK Technique</th> <th scope="col">offensive verb</th> <th scope="col">offensive artifact</th> <th scope="col">ATT&amp;CK ID</th>',H,E=ce(Ve(n[25].def_to_off.results.bindings)),f=[];for(let c=0;c<E.length;c+=1)f[c]=He(Ne(n,E,c));let p=null;return E.length||(p=$e()),{c(){e=h("th"),t=h("a"),a=z(l),s=x(),u=h("td"),g=z(_),A=x(),m=h("td"),C=h("table"),k=h("thead"),k.innerHTML=R,H=x();for(let c=0;c<f.length;c+=1)f[c].c();p&&p.c(),this.h()},l(c){e=d(c,"TH",{class:!0,scope:!0});var v=D(e);t=d(v,"A",{href:!0});var y=D(t);a=G(y,l),y.forEach(o),v.forEach(o),s=V(c),u=d(c,"TD",{});var B=D(u);g=G(B,_),B.forEach(o),A=V(c),m=d(c,"TD",{});var w=D(m);C=d(w,"TABLE",{class:!0});var I=D(C);k=d(I,"THEAD",{class:!0,"data-svelte-h":!0}),Y(k)!=="svelte-1r9g4lp"&&(k.innerHTML=R),H=V(I);for(let j=0;j<f.length;j+=1)f[j].l(I);p&&p.l(I),I.forEach(o),w.forEach(o),this.h()},h(){T(t,"href",r="/technique/"+n[25].description.graph[0]["@id"]),T(e,"class","text-center"),T(e,"scope","row"),T(k,"class","svelte-xumjr3"),Ce(k,"hide",n[4]),T(C,"class","table-auto w100 svelte-xumjr3")},m(c,v){$(c,e,v),i(e,t),i(t,a),$(c,s,v),$(c,u,v),i(u,g),$(c,A,v),$(c,m,v),i(m,C),i(C,k),i(C,H);for(let y=0;y<f.length;y+=1)f[y]&&f[y].m(C,null);p&&p.m(C,null)},p(c,v){if(v[0]&32&&l!==(l=c[25].description.graph[0]["d3f:d3fend-id"]+"")&&Z(a,l),v[0]&32&&r!==(r="/technique/"+c[25].description.graph[0]["@id"])&&T(t,"href",r),v[0]&32&&_!==(_=c[25].description.graph[0]["rdfs:label"]+"")&&Z(g,_),v[0]&16&&Ce(k,"hide",c[4]),v[0]&32){E=ce(Ve(c[25].def_to_off.results.bindings));let y;for(y=0;y<E.length;y+=1){const B=Ne(c,E,y);f[y]?f[y].p(B,v):(f[y]=He(B),f[y].c(),f[y].m(C,null))}for(;y<f.length;y+=1)f[y].d(1);f.length=E.length,!E.length&&p?p.p(c,v):E.length?p&&(p.d(1),p=null):(p=$e(),p.c(),p.m(C,null))}},d(c){c&&(o(e),o(s),o(u),o(A),o(m)),Te(f,c),p&&p.d()}}}function $e(n){let e,t='no defensive relations <a href="/contribute">yet</a> ';return{c(){e=h("td"),e.innerHTML=t,this.h()},l(l){e=d(l,"TD",{colspan:!0,"data-svelte-h":!0}),Y(e)!=="svelte-3z0dm2"&&(e.innerHTML=t),this.h()},h(){T(e,"colspan","5")},m(l,a){$(l,e,a)},p:ee,d(l){l&&o(e)}}}function je(n){let e,t,l=n[26].def_artifact_rel_label.value+"",a,r,s,u,_=n[26].def_artifact_label.value+"",g,A,m,C,k,R=n[26].off_tech_label.value+"",H,E,f,p,c=n[26].off_artifact_rel_label.value+"",v,y,B,w,I=n[26].off_artifact_label.value+"",j,P,X,J,K,te=oe(n[26].off_tech.value)+"",N,S,M;return{c(){e=h("tr"),t=h("td"),a=z(l),r=x(),s=h("td"),u=h("a"),g=z(_),m=x(),C=h("td"),k=h("a"),H=z(R),f=x(),p=h("td"),v=z(c),y=x(),B=h("td"),w=h("a"),j=z(I),X=x(),J=h("td"),K=h("a"),N=z(te),M=x(),this.h()},l(q){e=d(q,"TR",{});var L=D(e);t=d(L,"TD",{});var O=D(t);a=G(O,l),O.forEach(o),r=V(L),s=d(L,"TD",{});var b=D(s);u=d(b,"A",{href:!0});var F=D(u);g=G(F,_),F.forEach(o),b.forEach(o),m=V(L),C=d(L,"TD",{});var W=D(C);k=d(W,"A",{href:!0});var Q=D(k);H=G(Q,R),Q.forEach(o),W.forEach(o),f=V(L),p=d(L,"TD",{});var U=D(p);v=G(U,c),U.forEach(o),y=V(L),B=d(L,"TD",{});var ne=D(B);w=d(ne,"A",{href:!0});var ue=D(w);j=G(ue,I),ue.forEach(o),ne.forEach(o),X=V(L),J=d(L,"TD",{});var re=D(J);K=d(re,"A",{href:!0});var se=D(K);N=G(se,te),se.forEach(o),re.forEach(o),M=V(L),L.forEach(o),this.h()},h(){T(u,"href",A="/dao/artifact/"+me(n[26].def_artifact.value)),T(k,"href",E=be(oe(n[26].off_tech.value))),T(w,"href",P="/dao/artifact/"+me(n[26].off_artifact.value)),T(K,"href",S=be(oe(n[26].off_tech.value)))},m(q,L){$(q,e,L),i(e,t),i(t,a),i(e,r),i(e,s),i(s,u),i(u,g),i(e,m),i(e,C),i(C,k),i(k,H),i(e,f),i(e,p),i(p,v),i(e,y),i(e,B),i(B,w),i(w,j),i(e,X),i(e,J),i(J,K),i(K,N),i(e,M)},p(q,L){L[0]&32&&l!==(l=q[26].def_artifact_rel_label.value+"")&&Z(a,l),L[0]&32&&_!==(_=q[26].def_artifact_label.value+"")&&Z(g,_),L[0]&32&&A!==(A="/dao/artifact/"+me(q[26].def_artifact.value))&&T(u,"href",A),L[0]&32&&R!==(R=q[26].off_tech_label.value+"")&&Z(H,R),L[0]&32&&E!==(E=be(oe(q[26].off_tech.value)))&&T(k,"href",E),L[0]&32&&c!==(c=q[26].off_artifact_rel_label.value+"")&&Z(v,c),L[0]&32&&I!==(I=q[26].off_artifact_label.value+"")&&Z(j,I),L[0]&32&&P!==(P="/dao/artifact/"+me(q[26].off_artifact.value))&&T(w,"href",P),L[0]&32&&te!==(te=oe(q[26].off_tech.value)+"")&&Z(N,te),L[0]&32&&S!==(S=be(oe(q[26].off_tech.value)))&&T(K,"href",S)},d(q){q&&o(e)}}}function He(n){let e,t=n[26].def_tech&&je(n);return{c(){t&&t.c(),e=fe()},l(l){t&&t.l(l),e=fe()},m(l,a){t&&t.m(l,a),$(l,e,a)},p(l,a){l[26].def_tech?t?t.p(l,a):(t=je(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(l){l&&o(e),t&&t.d(l)}}}function ht(n){let e;return{c(){e=z("loading...")},l(t){e=G(t,"loading...")},m(t,l){$(t,e,l)},p:ee,d(t){t&&o(e)}}}function xe(n){let e,t,l,a={ctx:n,current:null,token:null,hasCatch:!0,pending:ht,then:ft,catch:it,value:25,error:29};return ge(t=n[22],a),{c(){e=h("tr"),a.block.c(),l=x()},l(r){e=d(r,"TR",{});var s=D(e);a.block.l(s),l=V(s),s.forEach(o)},m(r,s){$(r,e,s),a.block.m(e,a.anchor=null),a.mount=()=>e,a.anchor=l,i(e,l)},p(r,s){n=r,a.ctx=n,s[0]&32&&t!==(t=n[22])&&ge(t,a)||Re(a,n,s)},d(r){r&&o(e),a.block.d(),a.token=null,a=null}}}function dt(n){let e;return{c(){e=z("enter text and click go")},l(t){e=G(t,"enter text and click go")},m(t,l){$(t,e,l)},p:ee,i:ee,o:ee,d(t){t&&o(e)}}}function _t(n){let e,t,l,a,r,s,u,_="D3FEND Extractor",g,A,m=`Extracts D3FEND techniques from blobs of text and identifies <i>related</i>
      ATT&amp;CK Techniques. You may also want to try the
      <a href="/tools/attack-extractor">ATT&amp;CK Extractor</a>
      or the <a href="/tools/artifact-extractor">Artifact Extractor.</a>`,C,k,R="<i>Paste any text containing D3FEND techniques:</i>",H,E,f,p,c,v,y="GO",B,w,I,j,P,X,J,K,te;e=new Ye({props:{title:"D3FEND Extractor | Tools | "}}),a=new Xe({props:{header:"D3FEND Extractor"}});let N={ctx:n,current:null,token:null,hasCatch:!0,pending:dt,then:lt,catch:tt,value:21,error:29,blocks:[,,,]};return ge(X=n[5],N),{c(){he(e.$$.fragment),t=x(),l=h("section"),he(a.$$.fragment),r=x(),s=h("div"),u=h("h1"),u.textContent=_,g=x(),A=h("p"),A.innerHTML=m,C=x(),k=h("p"),k.innerHTML=R,H=x(),E=h("div"),f=h("textarea"),p=x(),c=h("div"),v=h("button"),v.textContent=y,B=x(),w=h("br"),I=x(),j=h("br"),P=x(),N.block.c(),this.h()},l(S){de(e.$$.fragment,S),t=V(S),l=d(S,"SECTION",{class:!0});var M=D(l);de(a.$$.fragment,M),r=V(M),s=d(M,"DIV",{class:!0});var q=D(s);u=d(q,"H1",{"data-svelte-h":!0}),Y(u)!=="svelte-m1jolu"&&(u.textContent=_),g=V(q),A=d(q,"P",{"data-svelte-h":!0}),Y(A)!=="svelte-7fdplx"&&(A.innerHTML=m),C=V(q),k=d(q,"P",{class:!0,"data-svelte-h":!0}),Y(k)!=="svelte-5yux8l"&&(k.innerHTML=R),H=V(q),E=d(q,"DIV",{});var L=D(E);f=d(L,"TEXTAREA",{class:!0}),D(f).forEach(o),L.forEach(o),p=V(q),c=d(q,"DIV",{});var O=D(c);v=d(O,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(v)!=="svelte-88k995"&&(v.textContent=y),O.forEach(o),B=V(q),w=d(q,"BR",{}),q.forEach(o),I=V(M),j=d(M,"BR",{}),P=V(M),N.block.l(M),M.forEach(o),this.h()},h(){T(k,"class","text-2"),T(f,"class","svelte-xumjr3"),T(v,"class","button"),T(s,"class","card"),T(l,"class"," svelte-xumjr3")},m(S,M){_e(e,S,M),$(S,t,M),$(S,l,M),_e(a,l,null),i(l,r),i(l,s),i(s,u),i(s,g),i(s,A),i(s,C),i(s,k),i(s,H),i(s,E),i(E,f),De(f,n[1]),i(s,p),i(s,c),i(c,v),i(s,B),i(s,w),i(l,I),i(l,j),i(l,P),N.block.m(l,N.anchor=null),N.mount=()=>l,N.anchor=null,J=!0,K||(te=[ie(f,"input",n[13]),ie(f,"keypress",n[11]),ie(v,"click",n[8])],K=!0)},p(S,M){n=S,M[0]&2&&De(f,n[1]),N.ctx=n,M[0]&32&&X!==(X=n[5])&&ge(X,N)||Re(N,n,M)},i(S){J||(le(e.$$.fragment,S),le(a.$$.fragment,S),le(N.block),J=!0)},o(S){ae(e.$$.fragment,S),ae(a.$$.fragment,S);for(let M=0;M<3;M+=1){const q=N.blocks[M];ae(q)}J=!1},d(S){S&&(o(t),o(l)),ve(e,S),ve(a),N.block.d(),N.token=null,N=null,K=!1,Me(te)}}}function vt(){document.execCommand("copy")}function Ve(n){let e=new Set,t=[];return n.forEach(function(l){l.hasOwnProperty("off_tech_label")&&(e.has(l.off_tech_label.value)||(e.add(l.off_tech_label.value),t.push(l)))}),t}function pt(n,e,t){let l;Ke(n,Ze,w=>t(6,l=w));let{data:a}=e,r=new ye(a.techniques,{index:!0,index_key:"d3f:d3fend-id"}),s,u="",_=!1,g=!0,A,m=[];function C(){t(0,s=[]),t(2,_=!1),t(3,g=!0),m=[]}A=l.url.searchParams.get("q"),console.log("Found params: "+A);let k=!1;async function R(){let w=new Je,I=await Promise.all(m);I.forEach(function(J){J.def_to_off.results.bindings.forEach(function(K){w.add_technique({techniqueID:oe(K.off_tech.value),comment:`
`+K.def_tech_label.value+`
`,color:"#9ecae1"})})});let j=`"Navigator_Layer-${I.length}-D3FEND-Techniques.json"`;const P=document.createElement("a"),X=new Blob([JSON.stringify(w.json())],{type:"application/json;charset=utf-8"});P.href=URL.createObjectURL(X),P.download=j,P.click()}async function H(w){let I="/api/technique/"+w+".json";const j=await fetch(I);if(j.status==404)return{id:w,def_to_off:[],description:{graph:[]},status:j.status};if(j.ok){const P=await j.json();return{id:w,def_to_off:P.def_to_off,description:new ye(P.description)}}else throw new Error(u)}async function E(){C();let w=t(0,s=Array.from(new Set(We(u,r))));if(w)return w.forEach(function(I){let j;j=H(I),j&&m.push(j)}),l.url.searchParams.set("q",JSON.stringify(w)),history.replaceState(null,"mapping",l.url),m;C(),console.debug("no matches")}let f=E();function p(){t(5,f=E()),t(3,g=!1)}function c(){window.getSelection().removeAllRanges(),t(2,_=!1),t(4,k=!1)}function v(){t(4,k=!0);let w="mappings";const I=window.getSelection();I.removeAllRanges();let j=document.getElementById(w);const P=document.createRange();P.selectNodeContents(j),I.addRange(P),t(2,_=!0)}function y(w){w.ctrlKey==!0&&w.keyCode==13&&p()}Ue(async()=>{A?(t(1,u=A),console.log("handlingclick"),p()):(console.log("starting blank"),t(1,u=""))});function B(){u=this.value,t(1,u)}return n.$$set=w=>{"data"in w&&t(12,a=w.data)},[s,u,_,g,k,f,l,R,p,c,v,y,a,B]}class It extends ze{constructor(e){super(),Ge(this,e,pt,_t,Fe,{data:12},null,[-1,-1])}}export{It as component,At as universal};