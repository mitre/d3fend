import{s as we,e as f,b as I,t as R,d as p,v as Q,j as F,f as y,h as V,i as u,w as s,k as Y,l as t,p as Z,m as ce,n as me,x as Te,r as $e,I as ue,O as Ae,E as De,Y as Ie,y as Fe,o as K}from"../chunks/scheduler.BuUavueM.js";import{S as Se,i as ye,f as Pe,c as se,b as oe,m as le,t as ie,a as re,d as de}from"../chunks/index.B8nkrWGc.js";import{p as ze}from"../chunks/stores.1wZ9lVii.js";import{T as ke}from"../chunks/Title.CTiQNLLX.js";import{S as Me}from"../chunks/SimpleAutocomplete.CVdXRzZ8.js";import{s as Oe}from"../chunks/file-system.DKiSPK87.js";import{e as qe,n as He}from"../chunks/graphStore.CZTcZBpL.js";/* empty css                             *//* empty css                     */import{w as Le}from"../chunks/index.hAAhajWd.js";const Ue=({size:e,domain:i},d="<embed-data>")=>`
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
  `,Re=({size:e,domain:i},d="<embed-data>")=>`
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
`;function Ve(e){let i,d="Settings",o,r,b,c,E,m,$,l,w,k,v,C,M="60",O,h,A,N,q="100",n,_;return{c(){i=f("h3"),i.textContent=d,o=I(),r=f("section"),b=f("article"),c=f("div"),E=R("Container Scale"),m=f("span"),$=R("("),l=R(e[2]),w=R(")"),k=I(),v=f("div"),C=f("span"),C.textContent=M,O=I(),h=f("input"),A=I(),N=f("span"),N.textContent=q,this.h()},l(g){i=p(g,"H3",{class:!0,"data-svelte-h":!0}),Q(i)!=="svelte-ihiao5"&&(i.textContent=d),o=F(g),r=p(g,"SECTION",{class:!0});var S=y(r);b=p(S,"ARTICLE",{class:!0});var H=y(b);c=p(H,"DIV",{class:!0});var B=y(c);E=V(B,"Container Scale"),m=p(B,"SPAN",{});var T=y(m);$=V(T,"("),l=V(T,e[2]),w=V(T,")"),T.forEach(u),B.forEach(u),k=F(H),v=p(H,"DIV",{class:!0});var P=y(v);C=p(P,"SPAN",{"data-svelte-h":!0}),Q(C)!=="svelte-nt3n7g"&&(C.textContent=M),O=F(P),h=p(P,"INPUT",{type:!0,min:!0,max:!0,class:!0,id:!0}),A=F(P),N=p(P,"SPAN",{"data-svelte-h":!0}),Q(N)!=="svelte-rbuf0z"&&(N.textContent=q),P.forEach(u),H.forEach(u),S.forEach(u),this.h()},h(){s(i,"class","text-center"),s(c,"class","select-name svelte-tq9wry"),s(h,"type","range"),s(h,"min","60"),s(h,"max","99"),h.value="80",s(h,"class","slider"),s(h,"id","myRange"),s(v,"class","size-slider svelte-tq9wry"),s(b,"class","setting"),s(r,"class","setting-checks-container svelte-tq9wry")},m(g,S){Y(g,i,S),Y(g,o,S),Y(g,r,S),t(r,b),t(b,c),t(c,E),t(c,m),t(m,$),t(m,l),t(m,w),t(b,k),t(b,v),t(v,C),t(v,O),t(v,h),e[4](h),t(v,A),t(v,N),n||(_=Z(h,"input",e[3]),n=!0)},p(g,[S]){S&4&&ce(l,g[2])},i:me,o:me,d(g){g&&(u(i),u(o),u(r)),e[4](null),n=!1,_()}}}function Be(e,i,d){let o,r=me,b=()=>(r(),r=Te(c,l=>d(2,o=l)),c);e.$$.on_destroy.push(()=>r());let{containerSize:c}=i;b();let E=null;const m=l=>{$e(c,o=l.target.value,o)};function $(l){ue[l?"unshift":"push"](()=>{E=l,d(1,E)})}return e.$$set=l=>{"containerSize"in l&&b(d(0,c=l.containerSize))},[c,E,o,m,$]}class je extends Se{constructor(i){super(),ye(this,i,Be,Ve,we,{containerSize:0})}}function Je(e){let i,d,o,r,b='<h1 class="svelte-a38n6n"><span class="fancy-font">D3FEND</span> Embeddable CAD</h1> <h6 class="svelte-a38n6n">Use the D3FEND Embeddable CAD to embed an interactive D3FEND CAD in another webpage.</h6>',c,E,m,$,l,w,k,v,C,M,O,h,A,N=e[1].func({size:e[5],domain:e[2]},{nodes:e[4],edges:e[3]})+"",q,n,_,g,S=e[1].text+"",H,B,T,P,X,x,L,ee,G,te,z,fe,U,ne,pe;i=new ke({props:{title:"Embedded D3FEND CAD",og_title:"MITRE Embedded D3FEND CAD",og_type:"website",og_url:"https://d3fend.mitre.org/",og_image:"https://d3fend.mitre.org/img/d3fend-og.png",og_description:"D3FEND CAD Analysis."}}),m=new je({props:{containerSize:e[6]}});function Ne(a){e[14](a)}let ve={inputClassName:"autocomplete-cursor-select",items:Object.values(e[7]),labelFieldName:"name",readonly:!0,onChange:e[13]};return e[1]!==void 0&&(ve.selectedItem=e[1]),C=new Me({props:ve}),ue.push(()=>Pe(C,"selectedItem",Ne)),{c(){se(i.$$.fragment),d=I(),o=f("main"),r=f("section"),r.innerHTML=b,c=I(),E=f("code"),se(m.$$.fragment),$=I(),l=f("code"),w=f("h3"),k=R(`Embed Code

      `),v=f("span"),se(C.$$.fragment),O=I(),h=f("div"),A=f("pre"),q=R(N),n=I(),_=f("div"),g=f("div"),H=R(S),B=I(),T=f("button"),P=R("Download"),x=I(),L=f("button"),ee=R("Copy to Clipboard"),te=I(),z=f("iframe"),this.h()},l(a){oe(i.$$.fragment,a),d=F(a),o=p(a,"MAIN",{style:!0,class:!0});var D=y(o);r=p(D,"SECTION",{id:!0,class:!0,"data-svelte-h":!0}),Q(r)!=="svelte-1mht16m"&&(r.innerHTML=b),c=F(D),E=p(D,"CODE",{id:!0,class:!0});var W=y(E);oe(m.$$.fragment,W),W.forEach(u),$=F(D),l=p(D,"CODE",{id:!0,class:!0});var j=y(l);w=p(j,"H3",{class:!0});var ae=y(w);k=V(ae,`Embed Code

      `),v=p(ae,"SPAN",{id:!0,class:!0});var he=y(v);oe(C.$$.fragment,he),he.forEach(u),ae.forEach(u),O=F(j),h=p(j,"DIV",{id:!0,class:!0});var _e=y(h);A=p(_e,"PRE",{class:!0});var ge=y(A);q=V(ge,N),ge.forEach(u),_e.forEach(u),n=F(j),_=p(j,"DIV",{id:!0,class:!0});var J=y(_);g=p(J,"DIV",{});var be=y(g);H=V(be,S),be.forEach(u),B=F(J),T=p(J,"BUTTON",{class:!0});var Ee=y(T);P=V(Ee,"Download"),Ee.forEach(u),x=F(J),L=p(J,"BUTTON",{class:!0});var Ce=y(L);ee=V(Ce,"Copy to Clipboard"),Ce.forEach(u),J.forEach(u),j.forEach(u),te=F(D),z=p(D,"IFRAME",{id:!0,src:!0,title:!0,class:!0}),y(z).forEach(u),D.forEach(u),this.h()},h(){s(r,"id","header"),s(r,"class","svelte-a38n6n"),s(E,"id","embed-settings"),s(E,"class","svelte-a38n6n"),s(v,"id","download-options"),s(v,"class","svelte-a38n6n"),s(w,"class","svelte-a38n6n"),s(A,"class","svelte-a38n6n"),s(h,"id","code-container"),s(h,"class","svelte-a38n6n"),s(T,"class","download-code svelte-a38n6n"),T.disabled=X=e[1].name==="Config Settings",s(L,"class","download-code svelte-a38n6n"),L.disabled=G=e[1].name==="Config Settings",s(_,"id","download-container"),s(_,"class","svelte-a38n6n"),s(l,"id","embed-code"),s(l,"class","config-container svelte-a38n6n"),s(z,"id","cad-iframe"),Ae(z.src,fe="/cad-frame/")||s(z,"src",fe),s(z,"title","D3FEND Embedded CAD"),s(z,"class","svelte-a38n6n"),De(o,"--container-size",e[5]+"%"),s(o,"class","svelte-a38n6n")},m(a,D){le(i,a,D),Y(a,d,D),Y(a,o,D),t(o,r),t(o,c),t(o,E),le(m,E,null),t(o,$),t(o,l),t(l,w),t(w,k),t(w,v),le(C,v,null),t(l,O),t(l,h),t(h,A),t(A,q),t(l,n),t(l,_),t(_,g),t(g,H),t(_,B),t(_,T),t(T,P),t(_,x),t(_,L),t(L,ee),t(o,te),t(o,z),e[17](z),U=!0,ne||(pe=[Z(window,"message",e[8]),Z(T,"click",e[15]),Z(L,"click",e[16])],ne=!0)},p(a,[D]){const W={};!M&&D&2&&(M=!0,W.selectedItem=a[1],Ie(()=>M=!1)),C.$set(W),(!U||D&62)&&N!==(N=a[1].func({size:a[5],domain:a[2]},{nodes:a[4],edges:a[3]})+"")&&ce(q,N),(!U||D&2)&&S!==(S=a[1].text+"")&&ce(H,S),(!U||D&2&&X!==(X=a[1].name==="Config Settings"))&&(T.disabled=X),(!U||D&2&&G!==(G=a[1].name==="Config Settings"))&&(L.disabled=G),(!U||D&32)&&De(o,"--container-size",a[5]+"%")},i(a){U||(ie(i.$$.fragment,a),ie(m.$$.fragment,a),ie(C.$$.fragment,a),U=!0)},o(a){re(i.$$.fragment,a),re(m.$$.fragment,a),re(C.$$.fragment,a),U=!1},d(a){a&&(u(d),u(o)),de(i,a),de(m),de(C),e[17](null),ne=!1,Fe(pe)}}}function We(e,i,d){let o,r,b,c,E;K(e,qe,n=>d(3,r=n)),K(e,He,n=>d(4,b=n)),K(e,ze,n=>d(12,E=n));let m=null;const $=Le(90);K(e,$,n=>d(5,c=n));const l={"index.html":{name:"index.html",download:"index.html",text:"Complete HTML/Javascript runnable script",func:Re},"Svelte Compenent":{name:"Svelte Compenent",download:"D3fendProfile.svelte",text:"Composable Svelte Compoenent runnable in Svelte Application",func:Ue}};let w=l["index.html"];const k=n=>{var _;((_=n.data)==null?void 0:_.call)==="FromParent"&&m.contentWindow.postMessage({call:"toParent",value:{nodes:b,edges:r,meta:{settings:{}}}},n.origin)},v=n=>{n&&n.text&&d(1,w=n)},C=async(n,{func:_,download:g})=>{const S=_({size:c,domain:o},{nodes:b,edges:r});Oe(S,g)},M=async(n,{func:_})=>{const g=_({size:c,domain:o},{nodes:b,edges:r});try{await navigator.clipboard.writeText(g)}catch(S){console.error("Failed to copy: ",S)}},O=n=>v(n);function h(n){w=n,d(1,w)}const A=n=>C(n,w),N=n=>M(n,w);function q(n){ue[n?"unshift":"push"](()=>{m=n,d(0,m)})}return e.$$.update=()=>{e.$$.dirty&4096&&d(2,o=E.url.origin)},[m,w,o,r,b,c,$,l,k,v,C,M,E,O,h,A,N,q]}class at extends Se{constructor(i){super(),ye(this,i,We,Je,we,{})}}export{at as component};
