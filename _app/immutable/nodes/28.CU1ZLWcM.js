import{s as we,e as f,b as I,t as V,d as p,y as Q,j as F,f as y,h as R,i as u,x as s,k as G,l as t,p as Z,m as ce,n as me,z as Te,r as $e,L as ue,O as Ae,G as De,V as Ie,A as Fe,o as K}from"../chunks/scheduler.Df3gJpkL.js";import{S as Se,i as ye,f as ze,c as se,b as oe,m as le,t as ie,a as re,d as de}from"../chunks/index.DTzUNj_H.js";import{p as Pe}from"../chunks/stores.h7CWNzXc.js";import{T as ke}from"../chunks/Title.B-pDgfy6.js";import{S as Me}from"../chunks/SimpleAutocomplete.78Nb8-Ah.js";import{s as Oe}from"../chunks/file-system.DKiSPK87.js";import{e as Le,n as qe}from"../chunks/graphStore.Xc3jF7-y.js";/* empty css                             *//* empty css                     */import{w as He}from"../chunks/index.BILX0Sq2.js";const Ue=({size:e,domain:i},d="<embed-data>")=>`
<script>
  let iframe = null;

  const user_data = ${JSON.stringify(d,null,2)};

  const post_cad = (event) => {
    if (event.data?.call === "FromParent") {
      iframe.contentWindow.postMessage(
        {
          call: "toParent",
          value: user_data,
        },
        event.origin
      );
    }
  };
  <\/script>

  <svelte:window on:message={post_cad} />

  <main>
    <iframe
      id="iframe"
      bind:this={iframe}
      src="${i}/cad-frame/"
      title="D3FEND CAD Embedded"
    ></iframe>
  </main>

  <style>
    #iframe {
      display: block;
      margin: 0 auto;
      width: 100%;
      height: 100vh;
      transform: scale(${e}%);
      -moz-transform: scale(${e}%);
      -o-transform: scale(${e}%);
      -webkit-transform: scale(${e}%);
    }
  </style>
  `,Ve=({size:e,domain:i},d="<embed-data>")=>`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>D3FEND EMBEDDED</title>

    <script>
      const user_data = ${JSON.stringify(d,null,2)};

      const post_cad = (event) => {
        const iframe = document.getElementById("iframe");

        if (event.data?.call === "FromParent") {
          iframe.contentWindow.postMessage(
            {
              call: "toParent",
              value: user_data,
            },
            event.origin
          );
        }
      };

      window.addEventListener("message", (event) => {

        if (event.origin !== "${i}") return;

        post_cad(event);
      });
    <\/script>

    <style>
      #iframe {
        display: block;
        margin: 0 auto;
        width: 100%;
        height: 100vh;
        transform: scale(${e}%);
        -moz-transform: scale(${e}%);
        -o-transform: scale(${e}%);
        -webkit-transform: scale(${e}%);
      }
    </style>
  </head>

  <main>
    <iframe
      id="iframe"
      src="${i}/cad-frame/"
      title="D3FEND CAD Embedded"
    ></iframe>
  </main>
</html>
`;function Re(e){let i,d="Settings",o,r,b,c,C,m,$,l,w,k,v,E,M="60",O,h,A,N,L="100",n,_;return{c(){i=f("h3"),i.textContent=d,o=I(),r=f("section"),b=f("article"),c=f("div"),C=V("Container Scale"),m=f("span"),$=V("("),l=V(e[2]),w=V(")"),k=I(),v=f("div"),E=f("span"),E.textContent=M,O=I(),h=f("input"),A=I(),N=f("span"),N.textContent=L,this.h()},l(g){i=p(g,"H3",{class:!0,"data-svelte-h":!0}),Q(i)!=="svelte-ihiao5"&&(i.textContent=d),o=F(g),r=p(g,"SECTION",{class:!0});var S=y(r);b=p(S,"ARTICLE",{class:!0});var q=y(b);c=p(q,"DIV",{class:!0});var B=y(c);C=R(B,"Container Scale"),m=p(B,"SPAN",{});var T=y(m);$=R(T,"("),l=R(T,e[2]),w=R(T,")"),T.forEach(u),B.forEach(u),k=F(q),v=p(q,"DIV",{class:!0});var z=y(v);E=p(z,"SPAN",{"data-svelte-h":!0}),Q(E)!=="svelte-nt3n7g"&&(E.textContent=M),O=F(z),h=p(z,"INPUT",{type:!0,min:!0,max:!0,class:!0,id:!0}),A=F(z),N=p(z,"SPAN",{"data-svelte-h":!0}),Q(N)!=="svelte-rbuf0z"&&(N.textContent=L),z.forEach(u),q.forEach(u),S.forEach(u),this.h()},h(){s(i,"class","text-center"),s(c,"class","select-name svelte-tq9wry"),s(h,"type","range"),s(h,"min","60"),s(h,"max","99"),h.value="80",s(h,"class","slider"),s(h,"id","myRange"),s(v,"class","size-slider svelte-tq9wry"),s(b,"class","setting"),s(r,"class","setting-checks-container svelte-tq9wry")},m(g,S){G(g,i,S),G(g,o,S),G(g,r,S),t(r,b),t(b,c),t(c,C),t(c,m),t(m,$),t(m,l),t(m,w),t(b,k),t(b,v),t(v,E),t(v,O),t(v,h),e[4](h),t(v,A),t(v,N),n||(_=Z(h,"input",e[3]),n=!0)},p(g,[S]){S&4&&ce(l,g[2])},i:me,o:me,d(g){g&&(u(i),u(o),u(r)),e[4](null),n=!1,_()}}}function Be(e,i,d){let o,r=me,b=()=>(r(),r=Te(c,l=>d(2,o=l)),c);e.$$.on_destroy.push(()=>r());let{containerSize:c}=i;b();let C=null;const m=l=>{$e(c,o=l.target.value,o)};function $(l){ue[l?"unshift":"push"](()=>{C=l,d(1,C)})}return e.$$set=l=>{"containerSize"in l&&b(d(0,c=l.containerSize))},[c,C,o,m,$]}class je extends Se{constructor(i){super(),ye(this,i,Be,Re,we,{containerSize:0})}}function Je(e){let i,d,o,r,b='<h1 class="svelte-a38n6n"><span class="fancy-font">D3FEND</span> Embeddable CAD</h1> <h6 class="svelte-a38n6n">Use the D3FEND Embeddable CAD to embed an interactive D3FEND CAD in another webpage.</h6>',c,C,m,$,l,w,k,v,E,M,O,h,A,N=e[1].func({size:e[5],domain:e[2]},{nodes:e[4],edges:e[3]})+"",L,n,_,g,S=e[1].text+"",q,B,T,z,X,x,H,ee,Y,te,P,fe,U,ne,pe;i=new ke({props:{title:"Embedded D3FEND CAD",og_title:"MITRE Embedded D3FEND CAD",og_type:"website",og_url:"https://d3fend.mitre.org/",og_image:"https://d3fend.mitre.org/img/d3fend-og.png",og_description:"D3FEND CAD Analysis."}}),m=new je({props:{containerSize:e[6]}});function Ne(a){e[14](a)}let ve={inputClassName:"autocomplete-cursor-select",items:Object.values(e[7]),labelFieldName:"name",readonly:!0,onChange:e[13]};return e[1]!==void 0&&(ve.selectedItem=e[1]),E=new Me({props:ve}),ue.push(()=>ze(E,"selectedItem",Ne)),{c(){se(i.$$.fragment),d=I(),o=f("main"),r=f("section"),r.innerHTML=b,c=I(),C=f("code"),se(m.$$.fragment),$=I(),l=f("code"),w=f("h3"),k=V(`Embed Code

      `),v=f("span"),se(E.$$.fragment),O=I(),h=f("div"),A=f("pre"),L=V(N),n=I(),_=f("div"),g=f("div"),q=V(S),B=I(),T=f("button"),z=V("Download"),x=I(),H=f("button"),ee=V("Copy to Clipboard"),te=I(),P=f("iframe"),this.h()},l(a){oe(i.$$.fragment,a),d=F(a),o=p(a,"MAIN",{style:!0,class:!0});var D=y(o);r=p(D,"SECTION",{id:!0,class:!0,"data-svelte-h":!0}),Q(r)!=="svelte-1mht16m"&&(r.innerHTML=b),c=F(D),C=p(D,"CODE",{id:!0,class:!0});var W=y(C);oe(m.$$.fragment,W),W.forEach(u),$=F(D),l=p(D,"CODE",{id:!0,class:!0});var j=y(l);w=p(j,"H3",{class:!0});var ae=y(w);k=R(ae,`Embed Code

      `),v=p(ae,"SPAN",{id:!0,class:!0});var he=y(v);oe(E.$$.fragment,he),he.forEach(u),ae.forEach(u),O=F(j),h=p(j,"DIV",{id:!0,class:!0});var _e=y(h);A=p(_e,"PRE",{class:!0});var ge=y(A);L=R(ge,N),ge.forEach(u),_e.forEach(u),n=F(j),_=p(j,"DIV",{id:!0,class:!0});var J=y(_);g=p(J,"DIV",{});var be=y(g);q=R(be,S),be.forEach(u),B=F(J),T=p(J,"BUTTON",{class:!0});var Ce=y(T);z=R(Ce,"Download"),Ce.forEach(u),x=F(J),H=p(J,"BUTTON",{class:!0});var Ee=y(H);ee=R(Ee,"Copy to Clipboard"),Ee.forEach(u),J.forEach(u),j.forEach(u),te=F(D),P=p(D,"IFRAME",{id:!0,src:!0,title:!0,class:!0}),y(P).forEach(u),D.forEach(u),this.h()},h(){s(r,"id","header"),s(r,"class","svelte-a38n6n"),s(C,"id","embed-settings"),s(C,"class","svelte-a38n6n"),s(v,"id","download-options"),s(v,"class","svelte-a38n6n"),s(w,"class","svelte-a38n6n"),s(A,"class","svelte-a38n6n"),s(h,"id","code-container"),s(h,"class","svelte-a38n6n"),s(T,"class","download-code svelte-a38n6n"),T.disabled=X=e[1].name==="Config Settings",s(H,"class","download-code svelte-a38n6n"),H.disabled=Y=e[1].name==="Config Settings",s(_,"id","download-container"),s(_,"class","svelte-a38n6n"),s(l,"id","embed-code"),s(l,"class","config-container svelte-a38n6n"),s(P,"id","cad-iframe"),Ae(P.src,fe="/cad-frame/")||s(P,"src",fe),s(P,"title","D3FEND Embedded CAD"),s(P,"class","svelte-a38n6n"),De(o,"--container-size",e[5]+"%"),s(o,"class","svelte-a38n6n")},m(a,D){le(i,a,D),G(a,d,D),G(a,o,D),t(o,r),t(o,c),t(o,C),le(m,C,null),t(o,$),t(o,l),t(l,w),t(w,k),t(w,v),le(E,v,null),t(l,O),t(l,h),t(h,A),t(A,L),t(l,n),t(l,_),t(_,g),t(g,q),t(_,B),t(_,T),t(T,z),t(_,x),t(_,H),t(H,ee),t(o,te),t(o,P),e[17](P),U=!0,ne||(pe=[Z(window,"message",e[8]),Z(T,"click",e[15]),Z(H,"click",e[16])],ne=!0)},p(a,[D]){const W={};!M&&D&2&&(M=!0,W.selectedItem=a[1],Ie(()=>M=!1)),E.$set(W),(!U||D&62)&&N!==(N=a[1].func({size:a[5],domain:a[2]},{nodes:a[4],edges:a[3]})+"")&&ce(L,N),(!U||D&2)&&S!==(S=a[1].text+"")&&ce(q,S),(!U||D&2&&X!==(X=a[1].name==="Config Settings"))&&(T.disabled=X),(!U||D&2&&Y!==(Y=a[1].name==="Config Settings"))&&(H.disabled=Y),(!U||D&32)&&De(o,"--container-size",a[5]+"%")},i(a){U||(ie(i.$$.fragment,a),ie(m.$$.fragment,a),ie(E.$$.fragment,a),U=!0)},o(a){re(i.$$.fragment,a),re(m.$$.fragment,a),re(E.$$.fragment,a),U=!1},d(a){a&&(u(d),u(o)),de(i,a),de(m),de(E),e[17](null),ne=!1,Fe(pe)}}}function We(e,i,d){let o,r,b,c,C;K(e,Le,n=>d(3,r=n)),K(e,qe,n=>d(4,b=n)),K(e,Pe,n=>d(12,C=n));let m=null;const $=He(90);K(e,$,n=>d(5,c=n));const l={"index.html":{name:"index.html",download:"index.html",text:"Complete HTML/Javascript runnable script",func:Ve},"Svelte Compenent":{name:"Svelte Compenent",download:"D3fendProfile.svelte",text:"Composable Svelte Compoenent runnable in Svelte Application",func:Ue}};let w=l["index.html"];const k=n=>{var _;((_=n.data)==null?void 0:_.call)==="FromParent"&&m.contentWindow.postMessage({call:"toParent",value:{nodes:b,edges:r,meta:{settings:{}}}},n.origin)},v=n=>{n&&n.text&&d(1,w=n)},E=async(n,{func:_,download:g})=>{const S=_({size:c,domain:o},{nodes:b,edges:r});Oe(S,g)},M=async(n,{func:_})=>{const g=_({size:c,domain:o},{nodes:b,edges:r});try{await navigator.clipboard.writeText(g)}catch(S){console.error("Failed to copy: ",S)}},O=n=>v(n);function h(n){w=n,d(1,w)}const A=n=>E(n,w),N=n=>M(n,w);function L(n){ue[n?"unshift":"push"](()=>{m=n,d(0,m)})}return e.$$.update=()=>{e.$$.dirty&4096&&d(2,o=C.url.origin)},[m,w,o,r,b,c,$,l,k,v,E,M,C,O,h,A,N,L]}class at extends Se{constructor(i){super(),ye(this,i,We,Je,we,{})}}export{at as component};
