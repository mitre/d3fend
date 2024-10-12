import{e as Xl}from"../chunks/index.g5YcAAdQ.js";import{s as Ee,c as Yl,e as A,t as d,b as Y,M as Ze,d as T,f as H,h,j as Z,N as ye,i as s,x as w,k as r,l as $,p as Zl,m as C,u as yl,g as xl,a as et,v as R,n as ue,P as De,L as lt,V as tt,y as qe}from"../chunks/scheduler.DDVliNtX.js";import{S as We,i as Fe,t as O,a as G,g as Ae,e as Te,c as he,b as pe,m as ve,d as me,f as ft}from"../chunks/index.iWffroUJ.js";import{e as ne}from"../chunks/each.BFyodu2L.js";import{T as Jl,b as y,d as ol,G as Kl,a as it,m as nt}from"../chunks/lib.DSnscA8f.js";import{B as at}from"../chunks/BlockTree.CBiPHLrW.js";import{A as ot}from"../chunks/Alert.BsS8d9Dv.js";import{G as xe}from"../chunks/_Graph.CGXTKsEb.js";import{T as _t,t as _l}from"../chunks/ToggleBar.Dt3UQwWP.js";import{T as st}from"../chunks/Title.geje0d_0.js";import{L as rt}from"../chunks/Lookup-DAO.ei_E5Tjx.js";/* empty css                                                                 */function ut(a){let t,f,e,l,i,n,o,_,c,p,N,j,g,S,E,I,M,J;const x=a[3].default,V=Yl(x,a,a[2],null);return{c(){t=A("div"),f=A("div"),e=A("button"),l=d(a[0]),i=Y(),n=Ze("svg"),o=Ze("path"),_=Ze("path"),c=Y(),p=A("div"),N=A("br"),j=Y(),V&&V.c(),g=Y(),S=A("br"),this.h()},l(L){t=T(L,"DIV",{class:!0});var B=H(t);f=T(B,"DIV",{});var F=H(f);e=T(F,"BUTTON",{"aria-expanded":!0,class:!0});var ee=H(e);l=h(ee,a[0]),i=Z(ee),n=ye(ee,"svg",{viewBox:!0,fill:!0,class:!0});var U=H(n);o=ye(U,"path",{class:!0,d:!0,stroke:!0,"stroke-width":!0}),H(o).forEach(s),_=ye(U,"path",{d:!0,stroke:!0,"stroke-width":!0}),H(_).forEach(s),U.forEach(s),ee.forEach(s),F.forEach(s),c=Z(B),p=T(B,"DIV",{class:!0});var W=H(p);N=T(W,"BR",{}),j=Z(W),V&&V.l(W),g=Z(W),S=T(W,"BR",{}),W.forEach(s),B.forEach(s),this.h()},h(){w(o,"class","vert svelte-d1f2jj"),w(o,"d","M10 1V19"),w(o,"stroke","black"),w(o,"stroke-width","2"),w(_,"d","M1 10L19 10"),w(_,"stroke","black"),w(_,"stroke-width","2"),w(n,"viewBox","0 0 20 20"),w(n,"fill","none"),w(n,"class","svelte-d1f2jj"),w(e,"aria-expanded",a[1]),w(e,"class","svelte-d1f2jj"),w(p,"class","contents"),p.hidden=E=!a[1],w(t,"class","collapsible")},m(L,B){r(L,t,B),$(t,f),$(f,e),$(e,l),$(e,i),$(e,n),$(n,o),$(n,_),$(t,c),$(t,p),$(p,N),$(p,j),V&&V.m(p,null),$(p,g),$(p,S),I=!0,M||(J=Zl(e,"click",a[4]),M=!0)},p(L,[B]){(!I||B&1)&&C(l,L[0]),(!I||B&2)&&w(e,"aria-expanded",L[1]),V&&V.p&&(!I||B&4)&&yl(V,x,L,L[2],I?et(x,L[2],B,null):xl(L[2]),null),(!I||B&2&&E!==(E=!L[1]))&&(p.hidden=E)},i(L){I||(O(V,L),I=!0)},o(L){G(V,L),I=!1},d(L){L&&s(t),V&&V.d(L),M=!1,J()}}}function ct(a,t,f){let{$$slots:e={},$$scope:l}=t,{headerText:i}=t,n=!1;const o=()=>f(1,n=!n);return a.$$set=_=>{"headerText"in _&&f(0,i=_.headerText),"$$scope"in _&&f(2,l=_.$$scope)},[i,n,l,e,o]}class dt extends We{constructor(t){super(),Fe(this,t,ct,ut,Ee,{headerText:0})}}async function ht({params:a,fetch:t}){const{artifact:f}=a,e=await t(`/api/dao/artifact/${f}.json`),l=await e.json(),i=await t("/api/dao/artifacts.json"),n=await i.json();(e.status!==200||i.status!==200)&&Xl(500,l.message);let o=l.description["@graph"].find(_=>_["@id"]==f);return{da_to_off:l.da_to_off,da_to_def:l.da_to_def,da_graph:l.da_graph,da_to_weak:l.da_to_weak,lookup_da_graph:n,neighbors:l.neighbors,description:o}}const ef=Object.freeze(Object.defineProperty({__proto__:null,load:ht},Symbol.toStringTag,{value:"Module"}));function sl(a,t,f){const e=a.slice();return e[2]=t[f],e}function pt(a){let t;return{c(){t=d("No related offensive techniques in this release.")},l(f){t=h(f,"No related offensive techniques in this release.")},m(f,e){r(f,t,e)},p:ue,i:ue,o:ue,d(f){f&&s(t)}}}function vt(a){let t,f;return t=new xe({props:{$$slots:{default:[mt]},$$scope:{ctx:a}}}),{c(){he(t.$$.fragment)},l(e){pe(t.$$.fragment,e)},m(e,l){ve(t,e,l),f=!0},p(e,l){const i={};l&33&&(i.$$scope={dirty:l,ctx:e}),t.$set(i)},i(e){f||(O(t.$$.fragment,e),f=!0)},o(e){G(t.$$.fragment,e),f=!1},d(e){me(t,e)}}}function rl(a){let t=a[2].off_tech_id.value.replace(/ |\./g,"")+"",f,e,l=a[2].off_tech_label.value+"",i,n,o="-->",_,c,p=a[2].off_artifact_rel_label.value.replace(/ /g,"")+"",N,j,g=y(a[2].off_artifact.value)+"",S,E,I=a[2].off_artifact_label.value+"",M,J,x=a[2].off_tech_id.value.replace(/ |\./g,"")+"",V,L,B=y(a[2].off_artifact.value)+"",F,ee,U=a[2].off_tech_id.value.replace(/ |\./g,"")+"",W,te,z=ol(a[2].off_tech_id.value)+"",le,fe,K=y(a[2].off_artifact.value)+"",Q,ie,b=y(a[2].off_artifact.value)+"",D,ae;return{c(){f=d(t),e=d('["'),i=d(l),n=d('"] '),_=d(o),c=d(" |"),N=d(p),j=d("| "),S=d(g),E=d('["'),M=d(I),J=d('"]; class '),V=d(x),L=d(` OffensiveTechniqueNode;
        class `),F=d(B),ee=d(" ArtifactNode; click "),W=d(U),te=d(' href "'),le=d(z),fe=d('"; click '),Q=d(K),ie=d(' href "/dao/artifact/d3f:'),D=d(b),ae=d('";')},l(u){f=h(u,t),e=h(u,'["'),i=h(u,l),n=h(u,'"] '),_=h(u,o),c=h(u," |"),N=h(u,p),j=h(u,"| "),S=h(u,g),E=h(u,'["'),M=h(u,I),J=h(u,'"]; class '),V=h(u,x),L=h(u,` OffensiveTechniqueNode;
        class `),F=h(u,B),ee=h(u," ArtifactNode; click "),W=h(u,U),te=h(u,' href "'),le=h(u,z),fe=h(u,'"; click '),Q=h(u,K),ie=h(u,' href "/dao/artifact/d3f:'),D=h(u,b),ae=h(u,'";')},m(u,m){r(u,f,m),r(u,e,m),r(u,i,m),r(u,n,m),r(u,_,m),r(u,c,m),r(u,N,m),r(u,j,m),r(u,S,m),r(u,E,m),r(u,M,m),r(u,J,m),r(u,V,m),r(u,L,m),r(u,F,m),r(u,ee,m),r(u,W,m),r(u,te,m),r(u,le,m),r(u,fe,m),r(u,Q,m),r(u,ie,m),r(u,D,m),r(u,ae,m)},p(u,m){m&1&&t!==(t=u[2].off_tech_id.value.replace(/ |\./g,"")+"")&&C(f,t),m&1&&l!==(l=u[2].off_tech_label.value+"")&&C(i,l),m&1&&p!==(p=u[2].off_artifact_rel_label.value.replace(/ /g,"")+"")&&C(N,p),m&1&&g!==(g=y(u[2].off_artifact.value)+"")&&C(S,g),m&1&&I!==(I=u[2].off_artifact_label.value+"")&&C(M,I),m&1&&x!==(x=u[2].off_tech_id.value.replace(/ |\./g,"")+"")&&C(V,x),m&1&&B!==(B=y(u[2].off_artifact.value)+"")&&C(F,B),m&1&&U!==(U=u[2].off_tech_id.value.replace(/ |\./g,"")+"")&&C(W,U),m&1&&z!==(z=ol(u[2].off_tech_id.value)+"")&&C(le,z),m&1&&K!==(K=y(u[2].off_artifact.value)+"")&&C(Q,K),m&1&&b!==(b=y(u[2].off_artifact.value)+"")&&C(D,b)},d(u){u&&(s(f),s(e),s(i),s(n),s(_),s(c),s(N),s(j),s(S),s(E),s(M),s(J),s(V),s(L),s(F),s(ee),s(W),s(te),s(le),s(fe),s(Q),s(ie),s(D),s(ae))}}}function ul(a){let t=a[1].edge_is_unique(a[2].off_tech_label.value,a[2].off_artifact_rel_label.value,a[2].off_artifact_label.value),f,e=t&&rl(a);return{c(){e&&e.c(),f=R()},l(l){e&&e.l(l),f=R()},m(l,i){e&&e.m(l,i),r(l,f,i)},p(l,i){i&1&&(t=l[1].edge_is_unique(l[2].off_tech_label.value,l[2].off_artifact_rel_label.value,l[2].off_artifact_label.value)),t?e?e.p(l,i):(e=rl(l),e.c(),e.m(f.parentNode,f)):e&&(e.d(1),e=null)},d(l){l&&s(f),e&&e.d(l)}}}function mt(a){let t,f,e=ne(a[0].results.bindings),l=[];for(let i=0;i<e.length;i+=1)l[i]=ul(sl(a,e,i));return{c(){t=d(`graph LR;

    `);for(let i=0;i<l.length;i+=1)l[i].c();f=R()},l(i){t=h(i,`graph LR;

    `);for(let n=0;n<l.length;n+=1)l[n].l(i);f=R()},m(i,n){r(i,t,n);for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(i,n);r(i,f,n)},p(i,n){if(n&3){e=ne(i[0].results.bindings);let o;for(o=0;o<e.length;o+=1){const _=sl(i,e,o);l[o]?l[o].p(_,n):(l[o]=ul(_),l[o].c(),l[o].m(f.parentNode,f))}for(;o<l.length;o+=1)l[o].d(1);l.length=e.length}},d(i){i&&(s(t),s(f)),De(l,i)}}}function bt(a){let t,f,e,l;const i=[vt,pt],n=[];function o(_,c){return _[0].results.bindings.length>0?0:1}return t=o(a),f=n[t]=i[t](a),{c(){f.c(),e=R()},l(_){f.l(_),e=R()},m(_,c){n[t].m(_,c),r(_,e,c),l=!0},p(_,[c]){let p=t;t=o(_),t===p?n[t].p(_,c):(Ae(),G(n[p],1,1,()=>{n[p]=null}),Te(),f=n[t],f?f.p(_,c):(f=n[t]=i[t](_),f.c()),O(f,1),f.m(e.parentNode,e))},i(_){l||(O(f),l=!0)},o(_){G(f),l=!1},d(_){_&&s(e),n[t].d(_)}}}function kt(a,t,f){let{da_to_off:e}=t,l=new Jl;return a.$$set=i=>{"da_to_off"in i&&f(0,e=i.da_to_off)},[e,l]}class gt extends We{constructor(t){super(),Fe(this,t,kt,bt,Ee,{da_to_off:0})}}function cl(a,t,f){const e=a.slice();return e[12]=t[f],e}function dl(a,t,f){const e=a.slice();return e[15]=t[f],e}function hl(a,t,f){const e=a.slice();return e[18]=t[f],e}function pl(a,t,f){const e=a.slice();return e[12]=t[f],e}function vl(a,t,f){const e=a.slice();return e[15]=t[f],e}function $t(a){let t,f=y(a[0])+"",e,l,i;return{c(){t=A("code"),e=d(f),l=Y(),i=d(a[1])},l(n){t=T(n,"CODE",{});var o=H(t);e=h(o,f),o.forEach(s),l=Z(n),i=h(n,a[1])},m(n,o){r(n,t,o),$(t,e),r(n,l,o),r(n,i,o)},p(n,o){o&1&&f!==(f=y(n[0])+"")&&C(e,f),o&2&&C(i,n[1])},i:ue,o:ue,d(n){n&&(s(t),s(l),s(i))}}}function Nt(a){let t,f;return t=new xe({props:{debug:!1,$$slots:{default:[wt]},$$scope:{ctx:a}}}),{c(){he(t.$$.fragment)},l(e){pe(t.$$.fragment,e)},m(e,l){ve(t,e,l),f=!0},p(e,l){const i={};l&33554557&&(i.$$scope={dirty:l,ctx:e}),t.$set(i)},i(e){f||(O(t.$$.fragment,e),f=!0)},o(e){G(t.$$.fragment,e),f=!1},d(e){me(t,e)}}}function ml(a){let t,f=ne(a[18]["d3f:outbound"]),e=[];for(let l=0;l<f.length;l+=1)e[l]=kl(pl(a,f,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=R()},l(l){for(let i=0;i<e.length;i+=1)e[i].l(l);t=R()},m(l,i){for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(l,i);r(l,t,i)},p(l,i){if(i&189){f=ne(l[18]["d3f:outbound"]);let n;for(n=0;n<f.length;n+=1){const o=pl(l,f,n);e[n]?e[n].p(o,i):(e[n]=kl(o),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=f.length}},d(l){l&&s(t),De(e,l)}}}function bl(a){let t=a[18]["@id"]+"",f,e,l=a[18]["rdfs:label"][0]+"",i,n,o="-->",_,c,p=y(a[12]["@id"])+"",N,j,g=a[15]["@id"]+"",S,E,I=a[7].i(a[15]["@id"])["rdfs:label"][0]+"",M,J,x=a[18]["@id"]+"",V,L,B=a[18]["@id"]+"",F,ee,U,W,te=a[15]["@id"]+"",z,le,fe=a[15]["@id"]+"",K,Q,ie,b,D=a[18]["@id"]+"",ae,u,m=a[4](a[18])+"",Re,je,de=a[15]["@id"]+"",Le,Se,be=a[5](a[15])+"",ce,Ie;return{c(){f=d(t),e=d('["'),i=d(l),n=d('"] '),_=d(o),c=d(" | "),N=d(p),j=d(" | "),S=d(g),E=d('["'),M=d(I),J=d(`"];

            class `),V=d(x),L=d(` inbound_node;
            style `),F=d(B),ee=d(" fill:"),U=d(a[2]),W=d(`;

            class `),z=d(te),le=d(` RootArtifactNode;
            style `),K=d(fe),Q=d(" fill:"),ie=d(a[3]),b=d(`;

            click `),ae=d(D),u=d(' href "'),Re=d(m),je=d(`";
            click `),Le=d(de),Se=d(' href "'),ce=d(be),Ie=d('";')},l(v){f=h(v,t),e=h(v,'["'),i=h(v,l),n=h(v,'"] '),_=h(v,o),c=h(v," | "),N=h(v,p),j=h(v," | "),S=h(v,g),E=h(v,'["'),M=h(v,I),J=h(v,`"];

            class `),V=h(v,x),L=h(v,` inbound_node;
            style `),F=h(v,B),ee=h(v," fill:"),U=h(v,a[2]),W=h(v,`;

            class `),z=h(v,te),le=h(v,` RootArtifactNode;
            style `),K=h(v,fe),Q=h(v," fill:"),ie=h(v,a[3]),b=h(v,`;

            click `),ae=h(v,D),u=h(v,' href "'),Re=h(v,m),je=h(v,`";
            click `),Le=h(v,de),Se=h(v,' href "'),ce=h(v,be),Ie=h(v,'";')},m(v,q){r(v,f,q),r(v,e,q),r(v,i,q),r(v,n,q),r(v,_,q),r(v,c,q),r(v,N,q),r(v,j,q),r(v,S,q),r(v,E,q),r(v,M,q),r(v,J,q),r(v,V,q),r(v,L,q),r(v,F,q),r(v,ee,q),r(v,U,q),r(v,W,q),r(v,z,q),r(v,le,q),r(v,K,q),r(v,Q,q),r(v,ie,q),r(v,b,q),r(v,ae,q),r(v,u,q),r(v,Re,q),r(v,je,q),r(v,Le,q),r(v,Se,q),r(v,ce,q),r(v,Ie,q)},p(v,q){q&1&&t!==(t=v[18]["@id"]+"")&&C(f,t),q&1&&l!==(l=v[18]["rdfs:label"][0]+"")&&C(i,l),q&1&&p!==(p=y(v[12]["@id"])+"")&&C(N,p),q&1&&g!==(g=v[15]["@id"]+"")&&C(S,g),q&1&&I!==(I=v[7].i(v[15]["@id"])["rdfs:label"][0]+"")&&C(M,I),q&1&&x!==(x=v[18]["@id"]+"")&&C(V,x),q&1&&B!==(B=v[18]["@id"]+"")&&C(F,B),q&4&&C(U,v[2]),q&1&&te!==(te=v[15]["@id"]+"")&&C(z,te),q&1&&fe!==(fe=v[15]["@id"]+"")&&C(K,fe),q&8&&C(ie,v[3]),q&1&&D!==(D=v[18]["@id"]+"")&&C(ae,D),q&17&&m!==(m=v[4](v[18])+"")&&C(Re,m),q&1&&de!==(de=v[15]["@id"]+"")&&C(Le,de),q&33&&be!==(be=v[5](v[15])+"")&&C(ce,be)},d(v){v&&(s(f),s(e),s(i),s(n),s(_),s(c),s(N),s(j),s(S),s(E),s(M),s(J),s(V),s(L),s(F),s(ee),s(U),s(W),s(z),s(le),s(K),s(Q),s(ie),s(b),s(ae),s(u),s(Re),s(je),s(Le),s(Se),s(ce),s(Ie))}}}function kl(a){let t,f=ne(a[18][a[12]["@id"]]),e=[];for(let l=0;l<f.length;l+=1)e[l]=bl(vl(a,f,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=R()},l(l){for(let i=0;i<e.length;i+=1)e[i].l(l);t=R()},m(l,i){for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(l,i);r(l,t,i)},p(l,i){if(i&189){f=ne(l[18][l[12]["@id"]]);let n;for(n=0;n<f.length;n+=1){const o=vl(l,f,n);e[n]?e[n].p(o,i):(e[n]=bl(o),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=f.length}},d(l){l&&s(t),De(e,l)}}}function gl(a){let t,f=a[18]["d3f:outbound"]&&ml(a);return{c(){f&&f.c(),t=R()},l(e){f&&f.l(e),t=R()},m(e,l){f&&f.m(e,l),r(e,t,l)},p(e,l){e[18]["d3f:outbound"]?f?f.p(e,l):(f=ml(e),f.c(),f.m(t.parentNode,t)):f&&(f.d(1),f=null)},d(e){e&&s(t),f&&f.d(e)}}}function $l(a){let t,f=ne(a[7].i(a[0])["d3f:outbound"]),e=[];for(let l=0;l<f.length;l+=1)e[l]=wl(cl(a,f,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=R()},l(l){for(let i=0;i<e.length;i+=1)e[i].l(l);t=R()},m(l,i){for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(l,i);r(l,t,i)},p(l,i){if(i&225){f=ne(l[7].i(l[0])["d3f:outbound"]);let n;for(n=0;n<f.length;n+=1){const o=cl(l,f,n);e[n]?e[n].p(o,i):(e[n]=wl(o),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=f.length}},d(l){l&&s(t),De(e,l)}}}function Nl(a){let t,f,e=a[7].i(a[0])["rdfs:label"][0]+"",l,i,n="-->",o,_,c=y(a[12]["@id"])+"",p,N,j=a[15]["@id"]+"",g,S,E=a[7].graph[a[7].index[a[15]["@id"]]]["rdfs:label"][0]+"",I,M,J,x,V=a[15]["@id"]+"",L,B,F,ee,U=a[5](a[0])+"",W,te,z=a[15]["@id"]+"",le,fe,K=a[6](a[15])+"",Q,ie;return{c(){t=d(a[0]),f=d('["'),l=d(e),i=d('"] '),o=d(n),_=d(" | "),p=d(c),N=d(" | "),g=d(j),S=d('["'),I=d(E),M=d(`"]; 

          class `),J=d(a[0]),x=d(" RootArtifactNode; class "),L=d(V),B=d(` ArtifactNode;
          click `),F=d(a[0]),ee=d(' href "'),W=d(U),te=d(`";
          click `),le=d(z),fe=d(' href "'),Q=d(K),ie=d('";')},l(b){t=h(b,a[0]),f=h(b,'["'),l=h(b,e),i=h(b,'"] '),o=h(b,n),_=h(b," | "),p=h(b,c),N=h(b," | "),g=h(b,j),S=h(b,'["'),I=h(b,E),M=h(b,`"]; 

          class `),J=h(b,a[0]),x=h(b," RootArtifactNode; class "),L=h(b,V),B=h(b,` ArtifactNode;
          click `),F=h(b,a[0]),ee=h(b,' href "'),W=h(b,U),te=h(b,`";
          click `),le=h(b,z),fe=h(b,' href "'),Q=h(b,K),ie=h(b,'";')},m(b,D){r(b,t,D),r(b,f,D),r(b,l,D),r(b,i,D),r(b,o,D),r(b,_,D),r(b,p,D),r(b,N,D),r(b,g,D),r(b,S,D),r(b,I,D),r(b,M,D),r(b,J,D),r(b,x,D),r(b,L,D),r(b,B,D),r(b,F,D),r(b,ee,D),r(b,W,D),r(b,te,D),r(b,le,D),r(b,fe,D),r(b,Q,D),r(b,ie,D)},p(b,D){D&1&&C(t,b[0]),D&1&&e!==(e=b[7].i(b[0])["rdfs:label"][0]+"")&&C(l,e),D&1&&c!==(c=y(b[12]["@id"])+"")&&C(p,c),D&1&&j!==(j=b[15]["@id"]+"")&&C(g,j),D&1&&E!==(E=b[7].graph[b[7].index[b[15]["@id"]]]["rdfs:label"][0]+"")&&C(I,E),D&1&&C(J,b[0]),D&1&&V!==(V=b[15]["@id"]+"")&&C(L,V),D&1&&C(F,b[0]),D&33&&U!==(U=b[5](b[0])+"")&&C(W,U),D&1&&z!==(z=b[15]["@id"]+"")&&C(le,z),D&65&&K!==(K=b[6](b[15])+"")&&C(Q,K)},d(b){b&&(s(t),s(f),s(l),s(i),s(o),s(_),s(p),s(N),s(g),s(S),s(I),s(M),s(J),s(x),s(L),s(B),s(F),s(ee),s(W),s(te),s(le),s(fe),s(Q),s(ie))}}}function wl(a){let t,f=ne(a[7].i(a[0])[a[12]["@id"]]),e=[];for(let l=0;l<f.length;l+=1)e[l]=Nl(dl(a,f,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=R()},l(l){for(let i=0;i<e.length;i+=1)e[i].l(l);t=R()},m(l,i){for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(l,i);r(l,t,i)},p(l,i){if(i&225){f=ne(l[7].i(l[0])[l[12]["@id"]]);let n;for(n=0;n<f.length;n+=1){const o=dl(l,f,n);e[n]?e[n].p(o,i):(e[n]=Nl(o),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=f.length}},d(l){l&&s(t),De(e,l)}}}function wt(a){let t,f,e=a[7].i(a[0])&&a[7].i(a[0])["d3f:outbound"],l,i=ne(a[7].graph.filter(a[11])),n=[];for(let _=0;_<i.length;_+=1)n[_]=gl(hl(a,i,_));let o=e&&$l(a);return{c(){t=d(`graph LR;

    `);for(let _=0;_<n.length;_+=1)n[_].c();f=Y(),o&&o.c(),l=R()},l(_){t=h(_,`graph LR;

    `);for(let c=0;c<n.length;c+=1)n[c].l(_);f=Z(_),o&&o.l(_),l=R()},m(_,c){r(_,t,c);for(let p=0;p<n.length;p+=1)n[p]&&n[p].m(_,c);r(_,f,c),o&&o.m(_,c),r(_,l,c)},p(_,c){if(c&189){i=ne(_[7].graph.filter(_[11]));let p;for(p=0;p<i.length;p+=1){const N=hl(_,i,p);n[p]?n[p].p(N,c):(n[p]=gl(N),n[p].c(),n[p].m(f.parentNode,f))}for(;p<n.length;p+=1)n[p].d(1);n.length=i.length}c&1&&(e=_[7].i(_[0])&&_[7].i(_[0])["d3f:outbound"]),e?o?o.p(_,c):(o=$l(_),o.c(),o.m(l.parentNode,l)):o&&(o.d(1),o=null)},d(_){_&&(s(t),s(f),s(l)),De(n,_),o&&o.d(_)}}}function Et(a){let t,f,e,l;const i=[Nt,$t],n=[];function o(_,c){return _[7].graph.length>0?0:1}return t=o(a),f=n[t]=i[t](a),{c(){f.c(),e=R()},l(_){f.l(_),e=R()},m(_,c){n[t].m(_,c),r(_,e,c),l=!0},p(_,[c]){f.p(_,c)},i(_){l||(O(f),l=!0)},o(_){G(f),l=!1},d(_){_&&s(e),n[t].d(_)}}}function Dt(a,t,f){let{neighbors:e}=t,{root_node:l}=t,{empty_message:i="has no direct neighbors in this release."}=t,{outbound_color:n="#fff4dd"}=t,{inbound_color:o="#fff4dd"}=t,{root_color:_="#fff4dd"}=t,{link_function:c=E=>`/dao/artifact/${E["@id"]}`}=t,{inbound_link_function:p=c}=t,{root_link_function:N=E=>`/dao/artifact/${E}`}=t,{outbound_link_function:j=c}=t,g=new Kl(e,{index:!0});const S=E=>E["@id"]!=l;return a.$$set=E=>{"neighbors"in E&&f(8,e=E.neighbors),"root_node"in E&&f(0,l=E.root_node),"empty_message"in E&&f(1,i=E.empty_message),"outbound_color"in E&&f(9,n=E.outbound_color),"inbound_color"in E&&f(2,o=E.inbound_color),"root_color"in E&&f(3,_=E.root_color),"link_function"in E&&f(10,c=E.link_function),"inbound_link_function"in E&&f(4,p=E.inbound_link_function),"root_link_function"in E&&f(5,N=E.root_link_function),"outbound_link_function"in E&&f(6,j=E.outbound_link_function)},[l,i,o,_,p,N,j,g,e,n,c,S]}class Ql extends We{constructor(t){super(),Fe(this,t,Dt,Et,Ee,{neighbors:8,root_node:0,empty_message:1,outbound_color:9,inbound_color:2,root_color:3,link_function:10,inbound_link_function:4,root_link_function:5,outbound_link_function:6})}}function El(a,t,f){const e=a.slice();return e[6]=t[f],e}function Ct(a){let t;return{c(){t=d("No related defensive techniques in this release.")},l(f){t=h(f,"No related defensive techniques in this release.")},m(f,e){r(f,t,e)},p:ue,i:ue,o:ue,d(f){f&&s(t)}}}function At(a){let t,f,e=a[1],l,i,n=Tl(a);return{c(){t=A("br"),f=Y(),n.c(),l=R()},l(o){t=T(o,"BR",{}),f=Z(o),n.l(o),l=R()},m(o,_){r(o,t,_),r(o,f,_),n.m(o,_),r(o,l,_),i=!0},p(o,_){_&2&&Ee(e,e=o[1])?(Ae(),G(n,1,1,ue),Te(),n=Tl(o),n.c(),O(n,1),n.m(l.parentNode,l)):n.p(o,_)},i(o){i||(O(n),i=!0)},o(o){G(n),i=!1},d(o){o&&(s(t),s(f),s(l)),n.d(o)}}}function Dl(a){let t=!a[1].includes(a[6].def_tactic_label.value),f,e=t&&Cl(a);return{c(){e&&e.c(),f=R()},l(l){e&&e.l(l),f=R()},m(l,i){e&&e.m(l,i),r(l,f,i)},p(l,i){i&3&&(t=!l[1].includes(l[6].def_tactic_label.value)),t?e?e.p(l,i):(e=Cl(l),e.c(),e.m(f.parentNode,f)):e&&(e.d(1),e=null)},d(l){l&&s(f),e&&e.d(l)}}}function Cl(a){let t=y(a[6].def_tech.value)+"",f,e,l=a[6].def_tech_label.value+"",i,n,o="-->",_,c,p=a[6].def_artifact_rel_label.value.replace(/ /g,"")+"",N,j,g=y(a[6].def_artifact.value)+"",S,E,I=a[6].def_artifact_label.value+"",M,J,x=y(a[6].def_tech.value)+"",V,L,B=y(a[6].def_artifact.value)+"",F,ee,U=y(a[6].def_tech.value)+"",W,te,z=y(a[6].def_tech.value)+"",le,fe,K=y(a[6].def_artifact.value)+"",Q,ie,b=y(a[6].def_artifact.value)+"",D,ae;return{c(){f=d(t),e=d('["'),i=d(l),n=d('"] '),_=d(o),c=d(`
          | `),N=d(p),j=d(" | "),S=d(g),E=d('["'),M=d(I),J=d('"]; class '),V=d(x),L=d(" DefensiveTechniqueNode; class "),F=d(B),ee=d(" ArtifactNode; click "),W=d(U),te=d(' href "/technique/d3f:'),le=d(z),fe=d('"; click '),Q=d(K),ie=d(' href "/dao/artifact/d3f:'),D=d(b),ae=d('";')},l(u){f=h(u,t),e=h(u,'["'),i=h(u,l),n=h(u,'"] '),_=h(u,o),c=h(u,`
          | `),N=h(u,p),j=h(u," | "),S=h(u,g),E=h(u,'["'),M=h(u,I),J=h(u,'"]; class '),V=h(u,x),L=h(u," DefensiveTechniqueNode; class "),F=h(u,B),ee=h(u," ArtifactNode; click "),W=h(u,U),te=h(u,' href "/technique/d3f:'),le=h(u,z),fe=h(u,'"; click '),Q=h(u,K),ie=h(u,' href "/dao/artifact/d3f:'),D=h(u,b),ae=h(u,'";')},m(u,m){r(u,f,m),r(u,e,m),r(u,i,m),r(u,n,m),r(u,_,m),r(u,c,m),r(u,N,m),r(u,j,m),r(u,S,m),r(u,E,m),r(u,M,m),r(u,J,m),r(u,V,m),r(u,L,m),r(u,F,m),r(u,ee,m),r(u,W,m),r(u,te,m),r(u,le,m),r(u,fe,m),r(u,Q,m),r(u,ie,m),r(u,D,m),r(u,ae,m)},p(u,m){m&1&&t!==(t=y(u[6].def_tech.value)+"")&&C(f,t),m&1&&l!==(l=u[6].def_tech_label.value+"")&&C(i,l),m&1&&p!==(p=u[6].def_artifact_rel_label.value.replace(/ /g,"")+"")&&C(N,p),m&1&&g!==(g=y(u[6].def_artifact.value)+"")&&C(S,g),m&1&&I!==(I=u[6].def_artifact_label.value+"")&&C(M,I),m&1&&x!==(x=y(u[6].def_tech.value)+"")&&C(V,x),m&1&&B!==(B=y(u[6].def_artifact.value)+"")&&C(F,B),m&1&&U!==(U=y(u[6].def_tech.value)+"")&&C(W,U),m&1&&z!==(z=y(u[6].def_tech.value)+"")&&C(le,z),m&1&&K!==(K=y(u[6].def_artifact.value)+"")&&C(Q,K),m&1&&b!==(b=y(u[6].def_artifact.value)+"")&&C(D,b)},d(u){u&&(s(f),s(e),s(i),s(n),s(_),s(c),s(N),s(j),s(S),s(E),s(M),s(J),s(V),s(L),s(F),s(ee),s(W),s(te),s(le),s(fe),s(Q),s(ie),s(D),s(ae))}}}function Al(a){let t=a[2].edge_is_unique(a[6].def_tech_label.value,a[6].def_artifact_rel_label.value,a[6].def_artifact_label.value),f,e=t&&Dl(a);return{c(){e&&e.c(),f=R()},l(l){e&&e.l(l),f=R()},m(l,i){e&&e.m(l,i),r(l,f,i)},p(l,i){i&1&&(t=l[2].edge_is_unique(l[6].def_tech_label.value,l[6].def_artifact_rel_label.value,l[6].def_artifact_label.value)),t?e?e.p(l,i):(e=Dl(l),e.c(),e.m(f.parentNode,f)):e&&(e.d(1),e=null)},d(l){l&&s(f),e&&e.d(l)}}}function Tt(a){let t,f,e=ne(a[0].results.bindings),l=[];for(let i=0;i<e.length;i+=1)l[i]=Al(El(a,e,i));return{c(){t=d(`graph LR;

      `);for(let i=0;i<l.length;i+=1)l[i].c();f=R()},l(i){t=h(i,`graph LR;

      `);for(let n=0;n<l.length;n+=1)l[n].l(i);f=R()},m(i,n){r(i,t,n);for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(i,n);r(i,f,n)},p(i,n){if(n&7){e=ne(i[0].results.bindings);let o;for(o=0;o<e.length;o+=1){const _=El(i,e,o);l[o]?l[o].p(_,n):(l[o]=Al(_),l[o].c(),l[o].m(f.parentNode,f))}for(;o<l.length;o+=1)l[o].d(1);l.length=e.length}},d(i){i&&(s(t),s(f)),De(l,i)}}}function Tl(a){let t,f;return t=new xe({props:{$$slots:{default:[Tt]},$$scope:{ctx:a}}}),{c(){he(t.$$.fragment)},l(e){pe(t.$$.fragment,e)},m(e,l){ve(t,e,l),f=!0},p(e,l){const i={};l&515&&(i.$$scope={dirty:l,ctx:e}),t.$set(i)},i(e){f||(O(t.$$.fragment,e),f=!0)},o(e){G(t.$$.fragment,e),f=!1},d(e){me(t,e)}}}function qt(a){let t,f,e,l,i,n,o;function _(g){a[4](g)}let c={toggles:a[3]};a[1]!==void 0&&(c.selected=a[1]),t=new _t({props:c}),lt.push(()=>ft(t,"selected",_));const p=[At,Ct],N=[];function j(g,S){return g[0].results.bindings.length>0?0:1}return l=j(a),i=N[l]=p[l](a),{c(){he(t.$$.fragment),e=Y(),i.c(),n=R()},l(g){pe(t.$$.fragment,g),e=Z(g),i.l(g),n=R()},m(g,S){ve(t,g,S),r(g,e,S),N[l].m(g,S),r(g,n,S),o=!0},p(g,[S]){const E={};!f&&S&2&&(f=!0,E.selected=g[1],tt(()=>f=!1)),t.$set(E);let I=l;l=j(g),l===I?N[l].p(g,S):(Ae(),G(N[I],1,1,()=>{N[I]=null}),Te(),i=N[l],i?i.p(g,S):(i=N[l]=p[l](g),i.c()),O(i,1),i.m(n.parentNode,n))},i(g){o||(O(t.$$.fragment,g),O(i),o=!0)},o(g){G(t.$$.fragment,g),G(i),o=!1},d(g){g&&(s(e),s(n)),me(t,g),N[l].d(g)}}}function Rt(a,t,f){let{da_to_def:e}=t,l=new Jl,i=new Set;e.results.bindings.forEach(c=>{i.add(c.def_tactic_label.value)});let n=Array.from(i).sort(function(c,p){return _l[c]-_l[p]}),o=["Model"];it(n,o)&&(o=[]);function _(c){o=c,f(1,o)}return a.$$set=c=>{"da_to_def"in c&&f(0,e=c.da_to_def)},a.$$.update=()=>{a.$$.dirty&2&&l.reset(o)},[e,o,l,n,_]}class jt extends We{constructor(t){super(),Fe(this,t,Rt,qt,Ee,{da_to_def:0})}}function ql(a,t,f){const e=a.slice();return e[6]=t[f][0],e[7]=t[f][1],e}function Rl(a,t,f){const e=a.slice();return e[10]=t[f],e}function jl(a,t,f){const e=a.slice();return e[6]=t[f][0],e[7]=t[f][1],e}function Ll(a,t,f){const e=a.slice();return e[10]=t[f],e}function Sl(a){let t,f=ne([].concat(a[0].description[a[7]])),e=[];for(let l=0;l<f.length;l+=1)e[l]=Il(Ll(a,f,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=R()},l(l){for(let i=0;i<e.length;i+=1)e[i].l(l);t=R()},m(l,i){for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(l,i);r(l,t,i)},p(l,i){if(i&9){f=ne([].concat(l[0].description[l[7]]));let n;for(n=0;n<f.length;n+=1){const o=Ll(l,f,n);e[n]?e[n].p(o,i):(e[n]=Il(o),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=f.length}},d(l){l&&s(t),De(e,l)}}}function Lt(a){let t,f=a[6]+"",e,l,i=a[10]["@id"]+"",n;return{c(){t=A("dt"),e=d(f),l=A("dd"),n=d(i),this.h()},l(o){t=T(o,"DT",{class:!0});var _=H(t);e=h(_,f),_.forEach(s),l=T(o,"DD",{class:!0});var c=H(l);n=h(c,i),c.forEach(s),this.h()},h(){w(t,"class","svelte-3hh43c"),w(l,"class","svelte-3hh43c")},m(o,_){r(o,t,_),$(t,e),r(o,l,_),$(l,n)},p(o,_){_&1&&i!==(i=o[10]["@id"]+"")&&C(n,i)},d(o){o&&(s(t),s(l))}}}function St(a){let t,f=a[6]+"",e,l,i=a[10]+"",n;return{c(){t=A("dt"),e=d(f),l=A("dd"),n=d(i),this.h()},l(o){t=T(o,"DT",{class:!0});var _=H(t);e=h(_,f),_.forEach(s),l=T(o,"DD",{class:!0});var c=H(l);n=h(c,i),c.forEach(s),this.h()},h(){w(t,"class","svelte-3hh43c"),w(l,"class","svelte-3hh43c")},m(o,_){r(o,t,_),$(t,e),r(o,l,_),$(l,n)},p(o,_){_&1&&i!==(i=o[10]+"")&&C(n,i)},d(o){o&&(s(t),s(l))}}}function Il(a){let t;function f(i,n){return typeof i[10]=="string"?St:Lt}let e=f(a),l=e(a);return{c(){l.c(),t=R()},l(i){l.l(i),t=R()},m(i,n){l.m(i,n),r(i,t,n)},p(i,n){e===(e=f(i))&&l?l.p(i,n):(l.d(1),l=e(i),l&&(l.c(),l.m(t.parentNode,t)))},d(i){i&&s(t),l.d(i)}}}function Vl(a){let t,f=a[0].description[a[7]]&&Sl(a);return{c(){f&&f.c(),t=R()},l(e){f&&f.l(e),t=R()},m(e,l){f&&f.m(e,l),r(e,t,l)},p(e,l){e[0].description[e[7]]?f?f.p(e,l):(f=Sl(e),f.c(),f.m(t.parentNode,t)):f&&(f.d(1),f=null)},d(e){e&&s(t),f&&f.d(e)}}}function Bl(a){let t,f=ne([].concat(a[0].description[a[7]])),e=[];for(let l=0;l<f.length;l+=1)e[l]=Hl(Rl(a,f,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=R()},l(l){for(let i=0;i<e.length;i+=1)e[i].l(l);t=R()},m(l,i){for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(l,i);r(l,t,i)},p(l,i){if(i&17){f=ne([].concat(l[0].description[l[7]]));let n;for(n=0;n<f.length;n+=1){const o=Rl(l,f,n);e[n]?e[n].p(o,i):(e[n]=Hl(o),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=f.length}},d(l){l&&s(t),De(e,l)}}}function It(a){let t,f=a[6]+"",e,l,i;function n(c,p){return p&1&&(l=null),l==null&&(l=!!c[10]["@id"].startsWith("d3f:")),l?Ht:Bt}let o=n(a,-1),_=o(a);return{c(){t=A("dt"),e=d(f),_.c(),i=R(),this.h()},l(c){t=T(c,"DT",{class:!0});var p=H(t);e=h(p,f),p.forEach(s),_.l(c),i=R(),this.h()},h(){w(t,"class","svelte-3hh43c")},m(c,p){r(c,t,p),$(t,e),_.m(c,p),r(c,i,p)},p(c,p){o===(o=n(c,p))&&_?_.p(c,p):(_.d(1),_=o(c),_&&(_.c(),_.m(i.parentNode,i)))},d(c){c&&(s(t),s(i)),_.d(c)}}}function Vt(a){let t,f=a[6]+"",e,l,i,n=a[10]+"",o,_;return{c(){t=A("dt"),e=d(f),l=A("dd"),i=A("a"),o=d(n),this.h()},l(c){t=T(c,"DT",{class:!0});var p=H(t);e=h(p,f),p.forEach(s),l=T(c,"DD",{class:!0});var N=H(l);i=T(N,"A",{href:!0});var j=H(i);o=h(j,n),j.forEach(s),N.forEach(s),this.h()},h(){w(t,"class","svelte-3hh43c"),w(i,"href",_=a[10]["@id"]),w(l,"class","svelte-3hh43c")},m(c,p){r(c,t,p),$(t,e),r(c,l,p),$(l,i),$(i,o)},p(c,p){p&1&&n!==(n=c[10]+"")&&C(o,n),p&1&&_!==(_=c[10]["@id"])&&w(i,"href",_)},d(c){c&&(s(t),s(l))}}}function Bt(a){let t,f,e=a[10]["@id"]+"",l,i;return{c(){t=A("dd"),f=A("a"),l=d(e),this.h()},l(n){t=T(n,"DD",{class:!0});var o=H(t);f=T(o,"A",{href:!0});var _=H(f);l=h(_,e),_.forEach(s),o.forEach(s),this.h()},h(){w(f,"href",i=a[10]["@id"]),w(t,"class","svelte-3hh43c")},m(n,o){r(n,t,o),$(t,f),$(f,l)},p(n,o){o&1&&e!==(e=n[10]["@id"]+"")&&C(l,e),o&1&&i!==(i=n[10]["@id"])&&w(f,"href",i)},d(n){n&&s(t)}}}function Ht(a){let t,f,e=a[10]["@id"]+"",l,i;return{c(){t=A("dd"),f=A("a"),l=d(e),this.h()},l(n){t=T(n,"DD",{class:!0});var o=H(t);f=T(o,"A",{href:!0});var _=H(f);l=h(_,e),_.forEach(s),o.forEach(s),this.h()},h(){w(f,"href",i="/dao/artifact/"+a[10]["@id"]),w(t,"class","svelte-3hh43c")},m(n,o){r(n,t,o),$(t,f),$(f,l)},p(n,o){o&1&&e!==(e=n[10]["@id"]+"")&&C(l,e),o&1&&i!==(i="/dao/artifact/"+n[10]["@id"])&&w(f,"href",i)},d(n){n&&s(t)}}}function Hl(a){let t;function f(i,n){return typeof i[10]=="string"?Vt:It}let e=f(a),l=e(a);return{c(){l.c(),t=R()},l(i){l.l(i),t=R()},m(i,n){l.m(i,n),r(i,t,n)},p(i,n){e===(e=f(i))&&l?l.p(i,n):(l.d(1),l=e(i),l&&(l.c(),l.m(t.parentNode,t)))},d(i){i&&s(t),l.d(i)}}}function Pl(a){let t,f=a[0].description[a[7]]&&Bl(a);return{c(){f&&f.c(),t=R()},l(e){f&&f.l(e),t=R()},m(e,l){f&&f.m(e,l),r(e,t,l)},p(e,l){e[0].description[e[7]]?f?f.p(e,l):(f=Bl(e),f.c(),f.m(t.parentNode,t)):f&&(f.d(1),f=null)},d(e){e&&s(t),f&&f.d(e)}}}function Ol(a){let t,f,e="Neighbors",l,i,n;return i=new Ql({props:{neighbors:a[0].neighbors,root_node:a[0].description["@id"]}}),{c(){t=A("span"),f=A("h2"),f.textContent=e,l=Y(),he(i.$$.fragment),this.h()},l(o){t=T(o,"SPAN",{class:!0});var _=H(t);f=T(_,"H2",{class:!0,"data-svelte-h":!0}),qe(f)!=="svelte-12pqhyn"&&(f.textContent=e),l=Z(_),pe(i.$$.fragment,_),_.forEach(s),this.h()},h(){w(f,"class","svelte-3hh43c"),w(t,"class","flex-column flex-column-max-content card")},m(o,_){r(o,t,_),$(t,f),$(t,l),ve(i,t,null),n=!0},p(o,_){const c={};_&1&&(c.neighbors=o[0].neighbors),_&1&&(c.root_node=o[0].description["@id"]),i.$set(c)},i(o){n||(O(i.$$.fragment,o),n=!0)},o(o){G(i.$$.fragment,o),n=!1},d(o){o&&s(t),me(i)}}}function Ml(a){let t,f,e=a[0].neighbors&&Ol(a);return{c(){e&&e.c(),t=R()},l(l){e&&e.l(l),t=R()},m(l,i){e&&e.m(l,i),r(l,t,i),f=!0},p(l,i){l[0].neighbors?e?(e.p(l,i),i&1&&O(e,1)):(e=Ol(l),e.c(),O(e,1),e.m(t.parentNode,t)):e&&(Ae(),G(e,1,1,()=>{e=null}),Te())},i(l){f||(O(e),f=!0)},o(l){G(e),f=!1},d(l){l&&s(t),e&&e.d(l)}}}function Pt(a){let t,f=`This page is experimental and may change significantly in future
        releases.`;return{c(){t=A("small"),t.textContent=f},l(e){t=T(e,"SMALL",{"data-svelte-h":!0}),qe(t)!=="svelte-1xvshgn"&&(t.textContent=f)},m(e,l){r(e,t,l)},p:ue,d(e){e&&s(t)}}}function Gl(a){let t,f,e="Hierarchy",l,i,n="<i>(filtered)</i>",o,_,c;return _=new at({props:{highlight_nodes:[a[0].description["@id"]],root_node:"d3f:DigitalArtifact",root_node_key:"@id",graph:a[2],edge_key:"rdfs:hasSubClass",label_key:"rdfs:label",size:"small",block_style:"background-color: #fff4dd; border: hsl(40.5882352941,60%,83.3333333333%) 1px solid;margin-bottom: 1px;"}}),{c(){t=A("span"),f=A("h2"),f.textContent=e,l=Y(),i=A("p"),i.innerHTML=n,o=Y(),he(_.$$.fragment),this.h()},l(p){t=T(p,"SPAN",{class:!0});var N=H(t);f=T(N,"H2",{class:!0,"data-svelte-h":!0}),qe(f)!=="svelte-1qyqs6n"&&(f.textContent=e),l=Z(N),i=T(N,"P",{class:!0,title:!0,"data-svelte-h":!0}),qe(i)!=="svelte-14lc97v"&&(i.innerHTML=n),o=Z(N),pe(_.$$.fragment,N),N.forEach(s),this.h()},h(){w(f,"class","svelte-3hh43c"),w(i,"class","text-center"),w(i,"title","Filtered from the whole ontology to only things related to offense or defense"),w(t,"class","flex-column flex-column-max-content card")},m(p,N){r(p,t,N),$(t,f),$(t,l),$(t,i),$(t,o),ve(_,t,null),c=!0},p(p,N){const j={};N&1&&(j.highlight_nodes=[p[0].description["@id"]]),N&4&&(j.graph=p[2]),_.$set(j)},i(p){c||(O(_.$$.fragment,p),c=!0)},o(p){G(_.$$.fragment,p),c=!1},d(p){p&&s(t),me(_)}}}function zl(a){let t,f,e=a[2].graph.length>0&&Gl(a);return{c(){e&&e.c(),t=R()},l(l){e&&e.l(l),t=R()},m(l,i){e&&e.m(l,i),r(l,t,i),f=!0},p(l,i){l[2].graph.length>0?e?(e.p(l,i),i&4&&O(e,1)):(e=Gl(l),e.c(),O(e,1),e.m(t.parentNode,t)):e&&(Ae(),G(e,1,1,()=>{e=null}),Te())},i(l){f||(O(e),f=!0)},o(l){G(e),f=!1},d(l){l&&s(t),e&&e.d(l)}}}function Wl(a){let t,f,e="Related Countermeasure Techniques",l,i,n;return i=new jt({props:{da_to_def:a[0].da_to_def}}),{c(){t=A("span"),f=A("h2"),f.textContent=e,l=Y(),he(i.$$.fragment),this.h()},l(o){t=T(o,"SPAN",{class:!0});var _=H(t);f=T(_,"H2",{class:!0,"data-svelte-h":!0}),qe(f)!=="svelte-16jr402"&&(f.textContent=e),l=Z(_),pe(i.$$.fragment,_),_.forEach(s),this.h()},h(){w(f,"class","svelte-3hh43c"),w(t,"class","flex-column flex-column-max-content flex-column card")},m(o,_){r(o,t,_),$(t,f),$(t,l),ve(i,t,null),n=!0},p(o,_){const c={};_&1&&(c.da_to_def=o[0].da_to_def),i.$set(c)},i(o){n||(O(i.$$.fragment,o),n=!0)},o(o){G(i.$$.fragment,o),n=!1},d(o){o&&s(t),me(i)}}}function Ot(a){let t,f;return t=new Ql({props:{neighbors:a[0].da_to_weak,root_node:a[0].description["@id"],empty_message:"has no related weaknesses in this release.",inbound_color:"#f9d999",inbound_link_function:a[5]}}),{c(){he(t.$$.fragment)},l(e){pe(t.$$.fragment,e)},m(e,l){ve(t,e,l),f=!0},p(e,l){const i={};l&1&&(i.neighbors=e[0].da_to_weak),l&1&&(i.root_node=e[0].description["@id"]),t.$set(i)},i(e){f||(O(t.$$.fragment,e),f=!0)},o(e){G(t.$$.fragment,e),f=!1},d(e){me(t,e)}}}function Fl(a){let t,f,e="Related Weaknesses",l,i,n;return i=new dt({props:{headerText:`(${a[1]}) found`,$$slots:{default:[Ot]},$$scope:{ctx:a}}}),{c(){t=A("div"),f=A("h2"),f.textContent=e,l=Y(),he(i.$$.fragment),this.h()},l(o){t=T(o,"DIV",{class:!0});var _=H(t);f=T(_,"H2",{class:!0,"data-svelte-h":!0}),qe(f)!=="svelte-17wp8wo"&&(f.textContent=e),l=Z(_),pe(i.$$.fragment,_),_.forEach(s),this.h()},h(){w(f,"class","svelte-3hh43c"),w(t,"class","card")},m(o,_){r(o,t,_),$(t,f),$(t,l),ve(i,t,null),n=!0},p(o,_){const c={};_&2&&(c.headerText=`(${o[1]}) found`),_&131073&&(c.$$scope={dirty:_,ctx:o}),i.$set(c)},i(o){n||(O(i.$$.fragment,o),n=!0)},o(o){G(i.$$.fragment,o),n=!1},d(o){o&&s(t),me(i)}}}function Ul(a){let t,f,e="Related Offensive Techniques",l,i,n;return i=new gt({props:{da_to_off:a[0].da_to_off}}),{c(){t=A("div"),f=A("h2"),f.textContent=e,l=Y(),he(i.$$.fragment),this.h()},l(o){t=T(o,"DIV",{class:!0});var _=H(t);f=T(_,"H2",{class:!0,"data-svelte-h":!0}),qe(f)!=="svelte-1dp42w9"&&(f.textContent=e),l=Z(_),pe(i.$$.fragment,_),_.forEach(s),this.h()},h(){w(f,"class","svelte-3hh43c"),w(t,"class","card")},m(o,_){r(o,t,_),$(t,f),$(t,l),ve(i,t,null),n=!0},p(o,_){const c={};_&1&&(c.da_to_off=o[0].da_to_off),i.$set(c)},i(o){n||(O(i.$$.fragment,o),n=!0)},o(o){G(i.$$.fragment,o),n=!1},d(o){o&&s(t),me(i)}}}function Mt(a){let t,f,e,l=a[0].description["rdfs:label"]+"",i,n,o,_,c,p,N,j,g,S,E="Properties",I,M,J,x="id:",V,L,B=a[0].description["@id"]+"",F,ee,U,W,te,z,le,fe,K,Q,ie,b,D,ae=a[0].neighbors,u,m,Re,je,de,Le="Inferred Relationships",Se,be,ce,Ie,v,q=a[2],Ue,el=a[0].da_to_def,Je,Ce,ll=a[0].da_to_weak,Ke,tl=a[0].da_to_off,Ve;t=new st({props:{title:a[0].description["rdfs:label"]+" - Artifact Details",og_title:a[0].description["rdfs:label"]+" - Artifact Details",og_description:a[0].description["d3f:definition"],og_type:"article"}}),p=new rt({props:{da_graph:a[0].lookup_da_graph}});let Pe=ne(a[3]),oe=[];for(let k=0;k<Pe.length;k+=1)oe[k]=Vl(jl(a,Pe,k));let Oe=ne(a[4]),_e=[];for(let k=0;k<Oe.length;k+=1)_e[k]=Pl(ql(a,Oe,k));let ke=Ml(a);ce=new ot({props:{$$slots:{default:[Pt]},$$scope:{ctx:a}}});let ge=zl(a),$e=Wl(a),Ne=Fl(a),we=Ul(a);return{c(){he(t.$$.fragment),f=Y(),e=A("h1"),i=d(l),n=Y(),o=A("section"),_=A("div"),c=A("span"),he(p.$$.fragment),N=Y(),j=A("div"),g=A("span"),S=A("h2"),S.textContent=E,I=Y(),M=A("div"),J=A("b"),J.textContent=x,V=Y(),L=A("a"),F=d(B),U=Y(),W=A("br"),te=Y(),z=A("dl");for(let k=0;k<oe.length;k+=1)oe[k].c();le=R();for(let k=0;k<_e.length;k+=1)_e[k].c();fe=Y(),K=A("div"),Q=A("a"),ie=d("json"),D=Y(),ke.c(),u=Y(),m=A("div"),Re=A("br"),je=Y(),de=A("h2"),de.textContent=Le,Se=Y(),be=A("div"),he(ce.$$.fragment),Ie=Y(),v=A("div"),ge.c(),Ue=Y(),$e.c(),Je=Y(),Ce=A("span"),Ne.c(),Ke=Y(),we.c(),this.h()},l(k){pe(t.$$.fragment,k),f=Z(k),e=T(k,"H1",{class:!0});var P=H(e);i=h(P,l),P.forEach(s),n=Z(k),o=T(k,"SECTION",{});var se=H(o);_=T(se,"DIV",{class:!0});var Ge=H(_);c=T(Ge,"SPAN",{id:!0,class:!0});var ze=H(c);pe(p.$$.fragment,ze),ze.forEach(s),Ge.forEach(s),se.forEach(s),N=Z(k),j=T(k,"DIV",{class:!0});var X=H(j);g=T(X,"SPAN",{class:!0});var re=H(g);S=T(re,"H2",{class:!0,"data-svelte-h":!0}),qe(S)!=="svelte-1gyecon"&&(S.textContent=E),I=Z(re),M=T(re,"DIV",{class:!0});var Qe=H(M);J=T(Qe,"B",{"data-svelte-h":!0}),qe(J)!=="svelte-t69us5"&&(J.textContent=x),V=Z(Qe),L=T(Qe,"A",{href:!0});var fl=H(L);F=h(fl,B),fl.forEach(s),Qe.forEach(s),U=Z(re),W=T(re,"BR",{}),te=Z(re),z=T(re,"DL",{class:!0});var Ye=H(z);for(let He=0;He<oe.length;He+=1)oe[He].l(Ye);le=R();for(let He=0;He<_e.length;He+=1)_e[He].l(Ye);Ye.forEach(s),fe=Z(re),K=T(re,"DIV",{class:!0});var il=H(K);Q=T(il,"A",{href:!0});var nl=H(Q);ie=h(nl,"json"),nl.forEach(s),il.forEach(s),re.forEach(s),D=Z(X),ke.l(X),X.forEach(s),u=Z(k),m=T(k,"DIV",{});var Be=H(m);Re=T(Be,"BR",{}),je=Z(Be),de=T(Be,"H2",{class:!0,"data-svelte-h":!0}),qe(de)!=="svelte-x5lo7m"&&(de.textContent=Le),Se=Z(Be),be=T(Be,"DIV",{class:!0});var al=H(be);pe(ce.$$.fragment,al),al.forEach(s),Ie=Z(Be),v=T(Be,"DIV",{class:!0});var Me=H(v);ge.l(Me),Ue=Z(Me),$e.l(Me),Je=Z(Me),Ce=T(Me,"SPAN",{class:!0});var Xe=H(Ce);Ne.l(Xe),Ke=Z(Xe),we.l(Xe),Xe.forEach(s),Me.forEach(s),Be.forEach(s),this.h()},h(){w(e,"class","text-center"),w(c,"id","lookup_container"),w(c,"class","flex-column flex-column-max-content text-right"),w(_,"class","flex flex-start content svelte-3hh43c"),w(S,"class","svelte-3hh43c"),w(L,"href",ee="/dao/artifact/"+a[0].description["@id"]),w(M,"class","text-center"),w(z,"class","svelte-3hh43c"),w(Q,"href",b="/api/dao/artifact/"+a[0].description["@id"]+".json"),w(K,"class","text-right"),w(g,"class","flex-column flex-column-max-content card"),w(j,"class","flex flex-start content svelte-3hh43c"),w(de,"class","text-center svelte-3hh43c"),w(be,"class","content"),w(Ce,"class","flex-column flex-column-max-content flex-column"),w(v,"class","flex flex-start content svelte-3hh43c")},m(k,P){ve(t,k,P),r(k,f,P),r(k,e,P),$(e,i),r(k,n,P),r(k,o,P),$(o,_),$(_,c),ve(p,c,null),r(k,N,P),r(k,j,P),$(j,g),$(g,S),$(g,I),$(g,M),$(M,J),$(M,V),$(M,L),$(L,F),$(g,U),$(g,W),$(g,te),$(g,z);for(let se=0;se<oe.length;se+=1)oe[se]&&oe[se].m(z,null);$(z,le);for(let se=0;se<_e.length;se+=1)_e[se]&&_e[se].m(z,null);$(g,fe),$(g,K),$(K,Q),$(Q,ie),$(j,D),ke.m(j,null),r(k,u,P),r(k,m,P),$(m,Re),$(m,je),$(m,de),$(m,Se),$(m,be),ve(ce,be,null),$(m,Ie),$(m,v),ge.m(v,null),$(v,Ue),$e.m(v,null),$(v,Je),$(v,Ce),Ne.m(Ce,null),$(Ce,Ke),we.m(Ce,null),Ve=!0},p(k,[P]){const se={};P&1&&(se.title=k[0].description["rdfs:label"]+" - Artifact Details"),P&1&&(se.og_title=k[0].description["rdfs:label"]+" - Artifact Details"),P&1&&(se.og_description=k[0].description["d3f:definition"]),t.$set(se),(!Ve||P&1)&&l!==(l=k[0].description["rdfs:label"]+"")&&C(i,l);const Ge={};if(P&1&&(Ge.da_graph=k[0].lookup_da_graph),p.$set(Ge),(!Ve||P&1)&&B!==(B=k[0].description["@id"]+"")&&C(F,B),(!Ve||P&1&&ee!==(ee="/dao/artifact/"+k[0].description["@id"]))&&w(L,"href",ee),P&9){Pe=ne(k[3]);let X;for(X=0;X<Pe.length;X+=1){const re=jl(k,Pe,X);oe[X]?oe[X].p(re,P):(oe[X]=Vl(re),oe[X].c(),oe[X].m(z,le))}for(;X<oe.length;X+=1)oe[X].d(1);oe.length=Pe.length}if(P&17){Oe=ne(k[4]);let X;for(X=0;X<Oe.length;X+=1){const re=ql(k,Oe,X);_e[X]?_e[X].p(re,P):(_e[X]=Pl(re),_e[X].c(),_e[X].m(z,null))}for(;X<_e.length;X+=1)_e[X].d(1);_e.length=Oe.length}(!Ve||P&1&&b!==(b="/api/dao/artifact/"+k[0].description["@id"]+".json"))&&w(Q,"href",b),P&1&&Ee(ae,ae=k[0].neighbors)?(Ae(),G(ke,1,1,ue),Te(),ke=Ml(k),ke.c(),O(ke,1),ke.m(j,null)):ke.p(k,P);const ze={};P&131072&&(ze.$$scope={dirty:P,ctx:k}),ce.$set(ze),P&4&&Ee(q,q=k[2])?(Ae(),G(ge,1,1,ue),Te(),ge=zl(k),ge.c(),O(ge,1),ge.m(v,Ue)):ge.p(k,P),P&1&&Ee(el,el=k[0].da_to_def)?(Ae(),G($e,1,1,ue),Te(),$e=Wl(k),$e.c(),O($e,1),$e.m(v,Je)):$e.p(k,P),P&1&&Ee(ll,ll=k[0].da_to_weak)?(Ae(),G(Ne,1,1,ue),Te(),Ne=Fl(k),Ne.c(),O(Ne,1),Ne.m(Ce,Ke)):Ne.p(k,P),P&1&&Ee(tl,tl=k[0].da_to_off)?(Ae(),G(we,1,1,ue),Te(),we=Ul(k),we.c(),O(we,1),we.m(Ce,null)):we.p(k,P)},i(k){Ve||(O(t.$$.fragment,k),O(p.$$.fragment,k),O(ke),O(ce.$$.fragment,k),O(ge),O($e),O(Ne),O(we),Ve=!0)},o(k){G(t.$$.fragment,k),G(p.$$.fragment,k),G(ke),G(ce.$$.fragment,k),G(ge),G($e),G(Ne),G(we),Ve=!1},d(k){k&&(s(f),s(e),s(n),s(o),s(N),s(j),s(u),s(m)),me(t,k),me(p),De(oe,k),De(_e,k),ke.d(k),me(ce),ge.d(k),$e.d(k),Ne.d(k),we.d(k)}}}function Gt(a,t,f){let e,l,{data:i}=t;const n=[["name","rdfs:label"],["definition","d3f:definition"],["comment","rdfs:comment"],["synonyms","skos:altLabel"]],o=[["defined by","rdfs:isDefinedBy"],["see also","rdfs:seeAlso"]];function _(c){return nt(c["d3f:cwe-id"][0])}return a.$$set=c=>{"data"in c&&f(0,i=c.data)},a.$$.update=()=>{a.$$.dirty&1&&f(2,e=new Kl(i.da_graph)),a.$$.dirty&1&&f(1,l=i.da_to_weak["@graph"].length)},[i,l,e,n,o,_]}class lf extends We{constructor(t){super(),Fe(this,t,Gt,Mt,Ee,{data:0})}}export{lf as component,ef as universal};