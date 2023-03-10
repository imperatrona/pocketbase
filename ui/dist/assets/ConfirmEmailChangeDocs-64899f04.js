import{S as $e,i as Ce,s as we,e as r,w as g,b as v,c as ve,f as b,g as f,h as o,m as he,x as Y,O as pe,P as Pe,k as Se,Q as Oe,n as Re,t as Z,a as x,o as m,d as ge,R as Te,C as Ee,p as ye,r as j,u as Be,N as qe}from"./index-1056580c.js";import{S as Ae}from"./SdkTabs-1f38a930.js";function ue(n,l,s){const a=n.slice();return a[5]=l[s],a}function be(n,l,s){const a=n.slice();return a[5]=l[s],a}function _e(n,l){let s,a=l[5].code+"",_,u,i,d;function p(){return l[4](l[5])}return{key:n,first:null,c(){s=r("button"),_=g(a),u=v(),b(s,"class","tab-item"),j(s,"active",l[1]===l[5].code),this.first=s},m($,C){f($,s,C),o(s,_),o(s,u),i||(d=Be(s,"click",p),i=!0)},p($,C){l=$,C&4&&a!==(a=l[5].code+"")&&Y(_,a),C&6&&j(s,"active",l[1]===l[5].code)},d($){$&&m(s),i=!1,d()}}}function ke(n,l){let s,a,_,u;return a=new qe({props:{content:l[5].body}}),{key:n,first:null,c(){s=r("div"),ve(a.$$.fragment),_=v(),b(s,"class","tab-item"),j(s,"active",l[1]===l[5].code),this.first=s},m(i,d){f(i,s,d),he(a,s,null),o(s,_),u=!0},p(i,d){l=i;const p={};d&4&&(p.content=l[5].body),a.$set(p),(!u||d&6)&&j(s,"active",l[1]===l[5].code)},i(i){u||(Z(a.$$.fragment,i),u=!0)},o(i){x(a.$$.fragment,i),u=!1},d(i){i&&m(s),ge(a)}}}function Ue(n){var re,fe;let l,s,a=n[0].name+"",_,u,i,d,p,$,C,D=n[0].name+"",H,ee,F,w,I,R,L,P,N,te,K,T,le,Q,M=n[0].name+"",z,se,G,E,J,y,V,B,X,S,q,h=[],ae=new Map,ne,A,k=[],oe=new Map,O;w=new Ae({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${n[3]}');

        ...

        await pb.collection('${(re=n[0])==null?void 0:re.name}').confirmEmailChange(
            'TOKEN',
            'YOUR_PASSWORD',
        );
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${n[3]}');

        ...

        await pb.collection('${(fe=n[0])==null?void 0:fe.name}').confirmEmailChange(
          'TOKEN',
          'YOUR_PASSWORD',
        );
    `}});let W=n[2];const ie=e=>e[5].code;for(let e=0;e<W.length;e+=1){let t=be(n,W,e),c=ie(t);ae.set(c,h[e]=_e(c,t))}let U=n[2];const ce=e=>e[5].code;for(let e=0;e<U.length;e+=1){let t=ue(n,U,e),c=ce(t);oe.set(c,k[e]=ke(c,t))}return{c(){l=r("h3"),s=g("Confirm email change ("),_=g(a),u=g(")"),i=v(),d=r("div"),p=r("p"),$=g("Confirms "),C=r("strong"),H=g(D),ee=g(" email change request."),F=v(),ve(w.$$.fragment),I=v(),R=r("h6"),R.textContent="API details",L=v(),P=r("div"),N=r("strong"),N.textContent="POST",te=v(),K=r("div"),T=r("p"),le=g("/api/collections/"),Q=r("strong"),z=g(M),se=g("/confirm-email-change"),G=v(),E=r("div"),E.textContent="Body Parameters",J=v(),y=r("table"),y.innerHTML=`<thead><tr><th>Param</th> 
            <th>Type</th> 
            <th width="50%">Description</th></tr></thead> 
    <tbody><tr><td><div class="inline-flex"><span class="label label-success">Required</span> 
                    <span>token</span></div></td> 
            <td><span class="label">String</span></td> 
            <td>The token from the change email request email.</td></tr> 
        <tr><td><div class="inline-flex"><span class="label label-success">Required</span> 
                    <span>password</span></div></td> 
            <td><span class="label">String</span></td> 
            <td>The account password to confirm the email change.</td></tr></tbody>`,V=v(),B=r("div"),B.textContent="Responses",X=v(),S=r("div"),q=r("div");for(let e=0;e<h.length;e+=1)h[e].c();ne=v(),A=r("div");for(let e=0;e<k.length;e+=1)k[e].c();b(l,"class","m-b-sm"),b(d,"class","content txt-lg m-b-sm"),b(R,"class","m-b-xs"),b(N,"class","label label-primary"),b(K,"class","content"),b(P,"class","alert alert-success"),b(E,"class","section-title"),b(y,"class","table-compact table-border m-b-base"),b(B,"class","section-title"),b(q,"class","tabs-header compact left"),b(A,"class","tabs-content"),b(S,"class","tabs")},m(e,t){f(e,l,t),o(l,s),o(l,_),o(l,u),f(e,i,t),f(e,d,t),o(d,p),o(p,$),o(p,C),o(C,H),o(p,ee),f(e,F,t),he(w,e,t),f(e,I,t),f(e,R,t),f(e,L,t),f(e,P,t),o(P,N),o(P,te),o(P,K),o(K,T),o(T,le),o(T,Q),o(Q,z),o(T,se),f(e,G,t),f(e,E,t),f(e,J,t),f(e,y,t),f(e,V,t),f(e,B,t),f(e,X,t),f(e,S,t),o(S,q);for(let c=0;c<h.length;c+=1)h[c]&&h[c].m(q,null);o(S,ne),o(S,A);for(let c=0;c<k.length;c+=1)k[c]&&k[c].m(A,null);O=!0},p(e,[t]){var me,de;(!O||t&1)&&a!==(a=e[0].name+"")&&Y(_,a),(!O||t&1)&&D!==(D=e[0].name+"")&&Y(H,D);const c={};t&9&&(c.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e[3]}');

        ...

        await pb.collection('${(me=e[0])==null?void 0:me.name}').confirmEmailChange(
            'TOKEN',
            'YOUR_PASSWORD',
        );
    `),t&9&&(c.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[3]}');

        ...

        await pb.collection('${(de=e[0])==null?void 0:de.name}').confirmEmailChange(
          'TOKEN',
          'YOUR_PASSWORD',
        );
    `),w.$set(c),(!O||t&1)&&M!==(M=e[0].name+"")&&Y(z,M),t&6&&(W=e[2],h=pe(h,t,ie,1,e,W,ae,q,Pe,_e,null,be)),t&6&&(U=e[2],Se(),k=pe(k,t,ce,1,e,U,oe,A,Oe,ke,null,ue),Re())},i(e){if(!O){Z(w.$$.fragment,e);for(let t=0;t<U.length;t+=1)Z(k[t]);O=!0}},o(e){x(w.$$.fragment,e);for(let t=0;t<k.length;t+=1)x(k[t]);O=!1},d(e){e&&m(l),e&&m(i),e&&m(d),e&&m(F),ge(w,e),e&&m(I),e&&m(R),e&&m(L),e&&m(P),e&&m(G),e&&m(E),e&&m(J),e&&m(y),e&&m(V),e&&m(B),e&&m(X),e&&m(S);for(let t=0;t<h.length;t+=1)h[t].d();for(let t=0;t<k.length;t+=1)k[t].d()}}}function De(n,l,s){let a,{collection:_=new Te}=l,u=204,i=[];const d=p=>s(1,u=p.code);return n.$$set=p=>{"collection"in p&&s(0,_=p.collection)},a=Ee.getApiExampleUrl(ye.baseUrl),i=[{code:204,body:"null"},{code:400,body:`
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
            `}],[_,u,i,a,d]}class Me extends $e{constructor(l){super(),Ce(this,l,De,Ue,we,{collection:0})}}export{Me as default};
