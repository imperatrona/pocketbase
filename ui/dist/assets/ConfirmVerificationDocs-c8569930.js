import{S as we,i as Ce,s as Pe,e as r,w as $,b as v,c as ve,f as b,g as f,h as n,m as he,x as D,O as pe,P as Te,k as ge,Q as ye,n as Be,t as Z,a as x,o as m,d as $e,R as qe,C as Oe,p as Se,r as H,u as Ee,N as Ne}from"./index-1056580c.js";import{S as Ve}from"./SdkTabs-1f38a930.js";function ue(i,l,s){const o=i.slice();return o[5]=l[s],o}function be(i,l,s){const o=i.slice();return o[5]=l[s],o}function _e(i,l){let s,o=l[5].code+"",_,u,a,d;function p(){return l[4](l[5])}return{key:i,first:null,c(){s=r("button"),_=$(o),u=v(),b(s,"class","tab-item"),H(s,"active",l[1]===l[5].code),this.first=s},m(w,C){f(w,s,C),n(s,_),n(s,u),a||(d=Ee(s,"click",p),a=!0)},p(w,C){l=w,C&4&&o!==(o=l[5].code+"")&&D(_,o),C&6&&H(s,"active",l[1]===l[5].code)},d(w){w&&m(s),a=!1,d()}}}function ke(i,l){let s,o,_,u;return o=new Ne({props:{content:l[5].body}}),{key:i,first:null,c(){s=r("div"),ve(o.$$.fragment),_=v(),b(s,"class","tab-item"),H(s,"active",l[1]===l[5].code),this.first=s},m(a,d){f(a,s,d),he(o,s,null),n(s,_),u=!0},p(a,d){l=a;const p={};d&4&&(p.content=l[5].body),o.$set(p),(!u||d&6)&&H(s,"active",l[1]===l[5].code)},i(a){u||(Z(o.$$.fragment,a),u=!0)},o(a){x(o.$$.fragment,a),u=!1},d(a){a&&m(s),$e(o)}}}function Ke(i){var re,fe;let l,s,o=i[0].name+"",_,u,a,d,p,w,C,M=i[0].name+"",F,ee,I,P,L,B,Q,T,A,te,R,q,le,z,U=i[0].name+"",G,se,J,O,W,S,X,E,Y,g,N,h=[],oe=new Map,ie,V,k=[],ne=new Map,y;P=new Ve({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${i[3]}');

        ...

        await pb.collection('${(re=i[0])==null?void 0:re.name}').confirmVerification('TOKEN');
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${i[3]}');

        ...

        await pb.collection('${(fe=i[0])==null?void 0:fe.name}').confirmVerification('TOKEN');
    `}});let j=i[2];const ae=e=>e[5].code;for(let e=0;e<j.length;e+=1){let t=be(i,j,e),c=ae(t);oe.set(c,h[e]=_e(c,t))}let K=i[2];const ce=e=>e[5].code;for(let e=0;e<K.length;e+=1){let t=ue(i,K,e),c=ce(t);ne.set(c,k[e]=ke(c,t))}return{c(){l=r("h3"),s=$("Confirm verification ("),_=$(o),u=$(")"),a=v(),d=r("div"),p=r("p"),w=$("Confirms "),C=r("strong"),F=$(M),ee=$(" account verification request."),I=v(),ve(P.$$.fragment),L=v(),B=r("h6"),B.textContent="API details",Q=v(),T=r("div"),A=r("strong"),A.textContent="POST",te=v(),R=r("div"),q=r("p"),le=$("/api/collections/"),z=r("strong"),G=$(U),se=$("/confirm-verification"),J=v(),O=r("div"),O.textContent="Body Parameters",W=v(),S=r("table"),S.innerHTML=`<thead><tr><th>Param</th> 
            <th>Type</th> 
            <th width="50%">Description</th></tr></thead> 
    <tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> 
                    <span>token</span></div></td> 
            <td><span class="label">String</span></td> 
            <td>The token from the verification request email.</td></tr></tbody>`,X=v(),E=r("div"),E.textContent="Responses",Y=v(),g=r("div"),N=r("div");for(let e=0;e<h.length;e+=1)h[e].c();ie=v(),V=r("div");for(let e=0;e<k.length;e+=1)k[e].c();b(l,"class","m-b-sm"),b(d,"class","content txt-lg m-b-sm"),b(B,"class","m-b-xs"),b(A,"class","label label-primary"),b(R,"class","content"),b(T,"class","alert alert-success"),b(O,"class","section-title"),b(S,"class","table-compact table-border m-b-base"),b(E,"class","section-title"),b(N,"class","tabs-header compact left"),b(V,"class","tabs-content"),b(g,"class","tabs")},m(e,t){f(e,l,t),n(l,s),n(l,_),n(l,u),f(e,a,t),f(e,d,t),n(d,p),n(p,w),n(p,C),n(C,F),n(p,ee),f(e,I,t),he(P,e,t),f(e,L,t),f(e,B,t),f(e,Q,t),f(e,T,t),n(T,A),n(T,te),n(T,R),n(R,q),n(q,le),n(q,z),n(z,G),n(q,se),f(e,J,t),f(e,O,t),f(e,W,t),f(e,S,t),f(e,X,t),f(e,E,t),f(e,Y,t),f(e,g,t),n(g,N);for(let c=0;c<h.length;c+=1)h[c]&&h[c].m(N,null);n(g,ie),n(g,V);for(let c=0;c<k.length;c+=1)k[c]&&k[c].m(V,null);y=!0},p(e,[t]){var me,de;(!y||t&1)&&o!==(o=e[0].name+"")&&D(_,o),(!y||t&1)&&M!==(M=e[0].name+"")&&D(F,M);const c={};t&9&&(c.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e[3]}');

        ...

        await pb.collection('${(me=e[0])==null?void 0:me.name}').confirmVerification('TOKEN');
    `),t&9&&(c.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[3]}');

        ...

        await pb.collection('${(de=e[0])==null?void 0:de.name}').confirmVerification('TOKEN');
    `),P.$set(c),(!y||t&1)&&U!==(U=e[0].name+"")&&D(G,U),t&6&&(j=e[2],h=pe(h,t,ae,1,e,j,oe,N,Te,_e,null,be)),t&6&&(K=e[2],ge(),k=pe(k,t,ce,1,e,K,ne,V,ye,ke,null,ue),Be())},i(e){if(!y){Z(P.$$.fragment,e);for(let t=0;t<K.length;t+=1)Z(k[t]);y=!0}},o(e){x(P.$$.fragment,e);for(let t=0;t<k.length;t+=1)x(k[t]);y=!1},d(e){e&&m(l),e&&m(a),e&&m(d),e&&m(I),$e(P,e),e&&m(L),e&&m(B),e&&m(Q),e&&m(T),e&&m(J),e&&m(O),e&&m(W),e&&m(S),e&&m(X),e&&m(E),e&&m(Y),e&&m(g);for(let t=0;t<h.length;t+=1)h[t].d();for(let t=0;t<k.length;t+=1)k[t].d()}}}function Me(i,l,s){let o,{collection:_=new qe}=l,u=204,a=[];const d=p=>s(1,u=p.code);return i.$$set=p=>{"collection"in p&&s(0,_=p.collection)},o=Oe.getApiExampleUrl(Se.baseUrl),a=[{code:204,body:"null"},{code:400,body:`
                {
                  "code": 400,
                  "message": "Failed to authenticate.",
                  "data": {
                    "token": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `}],[_,u,a,o,d]}class Ue extends we{constructor(l){super(),Ce(this,l,Me,Ke,Pe,{collection:0})}}export{Ue as default};
