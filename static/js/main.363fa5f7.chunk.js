(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/logo.47c4581a.svg"},45:function(e,t,a){e.exports=a(78)},50:function(e,t,a){},51:function(e,t,a){},75:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(40),r=a.n(c),o=(a(50),a(15)),i=a(1),m=a(23),u=(a(51),a(19)),s=a.n(u),d=function(){return l.a.createElement("div",{id:"page-home"},l.a.createElement("div",{className:"content"},l.a.createElement("header",null,l.a.createElement("img",{src:s.a,alt:"Ecoleta"})),l.a.createElement("main",null,l.a.createElement("h1",null,"Seu marketplace de coleta de res\xedduos."),l.a.createElement("p",null,"Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente."),l.a.createElement(o.b,{to:"/create-point"},l.a.createElement("span",null," ",l.a.createElement(m.b,null)," "),l.a.createElement("strong",null,"Pesquisar pontos de coleta")))))},p=a(28),E=a.n(p),f=a(42),b=a(44),g=a(21),h=a(29),v=a(12),j=a(81),O=a(82),y=a(80),S=a(18),w=a.n(S),x=w.a.create({baseURL:"http://localhost:3333"}),C=(a(75),function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([-23.4039747,-51.4414278]),u=Object(v.a)(r,2),d=u[0],p=(u[1],Object(n.useState)([])),S=Object(v.a)(p,2),C=S[0],N=S[1],k=Object(n.useState)([]),F=Object(v.a)(k,2),P=F[0],U=F[1],z=Object(n.useState)({name:"",email:"",whatsapp:""}),D=Object(v.a)(z,2),I=D[0],J=D[1],M=Object(n.useState)("0"),q=Object(v.a)(M,2),A=q[0],B=q[1],L=Object(n.useState)("0"),R=Object(v.a)(L,2),V=R[0],W=R[1],_=Object(n.useState)([]),G=Object(v.a)(_,2),H=G[0],K=G[1],Q=Object(n.useState)([0,0]),T=Object(v.a)(Q,2),X=T[0],Y=T[1],Z=Object(i.e)();function $(e){var t=e.target,a=t.name,n=t.value;J(Object(h.a)(Object(h.a)({},I),{},Object(g.a)({},a,n)))}function ee(){return(ee=Object(f.a)(E.a.mark((function e(t){var a,n,l,c,r,o,i,m,u;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=I.name,n=I.email,l=I.whatsapp,c=A,r=V,o=Object(v.a)(X,2),i=o[0],m=o[1],u={name:a,email:n,whatsapp:l,uf:c,city:r,latitude:i,longitude:m,items:H},console.log(u),e.next=10,x.post("points",u);case 10:alert("Ponto de coleta criado!"),Z.push("/");case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords;t.latitude,t.longitude}))}),[]),Object(n.useEffect)((function(){x.get("items").then((function(e){c(e.data)}))}),[]),Object(n.useEffect)((function(){w.a.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then((function(e){var t=e.data.map((function(e){return e.sigla}));N(t)}))}),[]),Object(n.useEffect)((function(){"0"!==A&&w.a.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/".concat(A,"/municipios")).then((function(e){var t=e.data.map((function(e){return e.nome}));U(t)}))}),[A]),l.a.createElement("div",{id:"page-create-point"},l.a.createElement("header",null,l.a.createElement("img",{src:s.a,alt:"Ecoleta"}),l.a.createElement(o.b,{to:"/"},l.a.createElement("span",null," ",l.a.createElement(m.a,null)," "),l.a.createElement("strong",null,"Voltar para a home"))),l.a.createElement("form",{onSubmit:function(e){return ee.apply(this,arguments)}},l.a.createElement("h1",null,"Cadastro do ",l.a.createElement("br",null)," ponto de coleta"),l.a.createElement("fieldset",null,l.a.createElement("legend",null,l.a.createElement("h2",null,"Dados")),l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"name"},"Nome da entidade"),l.a.createElement("input",{type:"text",name:"name",id:"name",onChange:$})),l.a.createElement("div",{className:"field-group"},l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"email"},"E-mail"),l.a.createElement("input",{type:"text",name:"email",id:"email",onChange:$})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"whatsapp"},"Whatsapp"),l.a.createElement("input",{type:"text",name:"whatsapp",id:"whatsapp",onChange:$})))),l.a.createElement("fieldset",null,l.a.createElement("legend",null,l.a.createElement("h2",null,"Endere\xe7o"),l.a.createElement("span",null,"Selecione o endere\xe7o no mapa")),l.a.createElement(j.a,{center:d,zoom:15,onClick:function(e){Y([e.latlng.lat,e.latlng.lng])}},l.a.createElement(O.a,{attribution:'&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),l.a.createElement(y.a,{position:X})),l.a.createElement("div",{className:"field-group"},l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"uf"},"Estado (UF)"),l.a.createElement("select",{name:"uf",id:"uf",value:A,onChange:function(e){var t=e.target.value;B(t)}},l.a.createElement("option",{value:"0"},"Selecione uma UF"),C.map((function(e){return l.a.createElement("option",{key:e,value:e},e)})))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"city"},"Cidade"),l.a.createElement("select",{name:"city",id:"city",value:V,onChange:function(e){var t=e.target.value;W(t)}},l.a.createElement("option",{value:"0"},"Selecione uma cidade"),P.map((function(e){return l.a.createElement("option",{key:e,value:e},e)})))))),l.a.createElement("fieldset",null,l.a.createElement("legend",null,l.a.createElement("h2",null,"\xcdtens de coleta"),l.a.createElement("span",null,"Selecione um ou mais \xedtens abaixo")),l.a.createElement("ul",{className:"items-grid"},a.map((function(e){return l.a.createElement("li",{key:e.id,onClick:function(){return function(e){if(H.findIndex((function(t){return t===e}))>=0){var t=H.filter((function(t){return t!==e}));K(t)}else K([].concat(Object(b.a)(H),[e]))}(e.id)},className:H.includes(e.id)?"selected":""},l.a.createElement("img",{src:e.image_url,alt:e.title}),l.a.createElement("span",null,e.title))})))),l.a.createElement("button",{type:"submit"},"Cadastrar ponto de coleta")))}),N=function(){return l.a.createElement(o.a,null,l.a.createElement(i.a,{component:d,path:"/",exact:!0}),l.a.createElement(i.a,{component:C,path:"/create-point"}))};var k=function(){return l.a.createElement(N,null)};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.363fa5f7.chunk.js.map