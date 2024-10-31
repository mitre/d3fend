import{s as g,e as m,d as p,y as C,x as f,k as y,n as c,i as d,b as T,H as N,f as h,j as x,w as A,l as D}from"../chunks/scheduler.Df3gJpkL.js";import{S as b,i as v,c as _,b as F,m as k,t as S,a as w,d as L}from"../chunks/index.DTzUNj_H.js";import{m as $}from"../chunks/marked.esm.D23x4JZT.js";/* empty css                                                    */function j(i){let e,t='<div style="display: flex; just-content: space-between; align-items: center;"><div style="text-align: center; flex-grow: 1;"><h1 class="fancy-font">D3FEND <span class="snakes">☤</span> <span class="CAD"><span style="color:#e62929;">C</span><span class="A" style="color:white;text-border:1px;">A</span><span style="color:blue;">D</span></span></h1> <div style="text-align: center; padding: 0 px"><i>Cyber Attack-Defense Utility for Capturing Engagements and Understandable Scenarios</i></div> <br/></div></div>';return{c(){e=m("div"),e.innerHTML=t,this.h()},l(n){e=p(n,"DIV",{class:!0,"data-svelte-h":!0}),C(e)!=="svelte-60rjil"&&(e.innerHTML=t),this.h()},h(){f(e,"class","title-egg")},m(n,o){y(n,e,o)},p:c,i:c,o:c,d(n){n&&d(e)}}}class O extends b{constructor(e){super(),v(this,e,null,j,g,{})}}function G(i){let e,t,n,o,r,E=$(i[0])+"",l;return t=new O({}),{c(){e=m("div"),_(t.$$.fragment),n=T(),o=m("section"),r=new N(!1),this.h()},l(a){e=p(a,"DIV",{});var s=h(e);F(t.$$.fragment,s),n=x(s),o=p(s,"SECTION",{class:!0});var u=h(o);r=A(u,!1),u.forEach(d),s.forEach(d),this.h()},h(){r.a=null,f(o,"class","content")},m(a,s){y(a,e,s),k(t,e,null),D(e,n),D(e,o),r.m(E,o),l=!0},p:c,i(a){l||(S(t.$$.fragment,a),l=!0)},o(a){w(t.$$.fragment,a),l=!1},d(a){a&&d(e),L(t)}}}function H(i){return[`
# D3FEND CAD User Documentation
Put the D3FEND ontology into action with the D3FEND CAD Tool!

CAD is designed to be versatile and to support many modeling and diagramming use cases. When you create a CAD diagram you are implementing the D3FEND ontology, also known as "instances" of the ontology's classes. 

## 1. Quickstart
- See the examples by clicking <button>Example Graphs</button> button.
  - The shadowcat.json example models a CTI Report.
  - The bushwalk.json examples models malware "procedures".
  - The disk-formatting-contribution.json  represents an advanced use case of CAD.
- Drag and drop nodes onto the canvas to create your scenario, connect them by hovering over a node.
- Click the <d3fend class> on any node to select the correct class, *you can type to filter*.
- Right click the various node types to apply ontology inference results to your diagram.
- Connect nodes together, and select D3FEND object properties with autocomplete.
- Extend the D3FEND ontology yourself! See the disk-formatting-contribution.json example.

## 2. Saving and loading

### 2.1 Loading
You can load a D3FEND CAD JSON file from your file system by clicking <button>Load</button>.
### 2.2 D3FEND CAD JSON
This is the native format the D3FEND CAD GUI uses. You can save a D3FEND CAD JSON file to your computer by clicking <button>Save</button>.
### 2.4 D3FEND CAD TTL
This format creates a file with D3FEND instances stored in Terse Triple Language (TTL). You can save a D3FEND CAD JSON file to your computer by clicking <button>Save As</button>.
### 2.5 Creating a D3FEND Extension (TTL)
This format creates a D3FEND Extension file you can submit to the D3FEND team to add new concepts and relationships to the D3FEND ontology. An extension is serialized in the Terse Triple Language (TTL). You can save a D3FEND Extension file to your computer by clicking <button>Save As</button>.

## 3. Sharing and Embedding


## 4. [Design](design)
### 4.1 [CAD Schema](schema)
### 4.2 [CAD Graph to Semantic Graph Conversions](/cad/docs/design#CAD-Graph-to-Semantic-Graph-Conversions)


## 5 Terminology

The D3FEND ontology is represented in the OWL2-DL specification. Ontologies in OWL2-DL can be serialized into json-ld, rdf/xml, and ttl formats. The D3FEND team prefers the ttl format.

The ontology comprises classes, object properties, data properties, and annotation properties. Additionally it includes OWL axioms.


`]}class Y extends b{constructor(e){super(),v(this,e,H,G,g,{})}}export{Y as component};
