(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(n,e,t){},107:function(n,e,t){},169:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(14),o=t.n(i),c=(t(104),t(105),t(57)),l=t.n(c),u=t(94),f=t(82),m=t(95),s=(t(107),t(11)),p=t(12);function d(){var n=Object(s.a)(["\n  color: #000;\n  font-size: ",';\n  font-family: "Open Sans", sans-serif;\n  font-weight: 900;\n  display: inline-flex;\n  letter-spacing: -2px;\n  margin-top: ',";\n  @media (min-width: 900px) {\n    margin-top: ",";\n  }\n"]);return d=function(){return n},n}var g=p.a.h1(d(),function(n){return n.announcements?"calc(20px + 2vmin)":"calc(40px + 2vmin)"},function(n){return n.announcements?"20%":"-4%"},function(n){return n.announcements?"10%":"-1%"});function v(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  margin: 5%;\n"]);return v=function(){return n},n}var h=p.a.div(v());function y(){var n=Object(s.a)(['\n  font-size: calc(15px + 2vmin);\n  color: #000;\n  font-family: "Open Sans", sans-serif;\n  font-weight: bold;\n  text-align: center;\n  margin: 0 10%;\n']);return y=function(){return n},n}var x=p.a.div(y()),b="#ef4430";function w(){var n=Object(s.a)(["\n  color: ",";\n"]);return w=function(){return n},n}var E=p.a.div(w(),function(n){return n.primary?"#74b1d5":b}),O=t(28),j=t(171),k=t(172),A=function(n){return r.a.createElement("div",{style:{minWidth:"100%"}},n.data.map(function(n,e){return r.a.createElement(O.a,{gutter:32,key:e,style:{margin:"5%"}},r.a.createElement(j.a,{hoverable:!0},r.a.createElement("p",{style:{fontSize:"1.5em"}},n.detailText),r.a.createElement(k.a,{color:"need"===n.type?"#74b1d5":b,style:{alignSelf:"flex-end"}},"need"===n.type?"Needing Help":"Offering Help")))}))};function I(){var n=Object(s.a)(["\n  width: 15%;\n  @media (max-width: 1000px) {\n    width: 30%;\n  }\n"]);return I=function(){return n},n}function H(){var n=Object(s.a)(["\n  display: block;\n  width: 100%;\n  height: auto;\n"]);return H=function(){return n},n}var z=p.a.img(H()),S=p.a.div(I());function T(){var n=Object(s.a)(["\n  margin-top: 5%;\n  flex-direction: row;\n"]);return T=function(){return n},n}function C(){var n=Object(s.a)(["\n  color: #fff;\n  background: ",';\n  font-size: 1.3em;\n  font-family: "Open Sans", sans-serif;\n  margin: 1em;\n  padding: 0.6em 2em;\n  border: none;\n  cursor: pointer;\n  @media (max-width: 540px) {\n    padding: 0.3em 1em;\n    margin: 0.5em;\n    font-size: 1em;\n  }\n']);return C=function(){return n},n}var B=p.a.button(C(),function(n){return n.primary?"#74b1d5":b}),N=p.a.div(T()),J=t(93),W=t.n(J),Y=t(62),F=t.n(Y);var G=function(){var n=r.a.useState([{detailText:"Any body Help me?",type:"need"},{detailText:"Yeah, I can Help you :)",type:"offer"},{detailText:"I need your Help!",type:"need"}]),e=Object(m.a)(n,2),t=e[0],a=e[1],i=function(n,e){return Object(f.a)(l.a.mark(function r(){var i,o,c;return l.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,F.a.fire({title:n,input:"textarea",inputPlaceholder:"Type your message here...",showCancelButton:!0,cancelButtonColor:b,inputValidator:function(n){if(!n)return"You need to write something!"}});case 2:if(i=r.sent,!(o=i.value)){r.next=9;break}return r.next=7,a([].concat(Object(u.a)(t),[{detailText:o,type:e}]));case 7:return c=F.a.mixin({toast:!0,position:"top",showConfirmButton:!1,timer:3e3}),r.abrupt("return",c.fire({type:"success",title:"Announcement posted successfully"}));case 9:case"end":return r.stop()}},r)}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null,r.a.createElement(S,null,r.a.createElement(z,{src:W.a,alt:"AI",width:735,height:460})),r.a.createElement(g,null,r.a.createElement(E,{primary:!0},"Artificial"),r.a.createElement(E,null,"impact")),r.a.createElement(x,null,"We are a not-for-profit initiative matching NGO's and international organizations with A.I. developers with the goal of making the world a better place."),r.a.createElement(N,null,r.a.createElement(B,{primary:!0,onClick:i("Need Help Announcement","need")},"I need help"),r.a.createElement(B,{onClick:i("Offer Help Announcement","offer")},"I offer help"))),r.a.createElement(h,null,r.a.createElement(g,null,"Announcements"),r.a.createElement(A,{data:t})))};o.a.render(r.a.createElement(G,null),document.getElementById("root"))},93:function(n,e,t){n.exports=t.p+"static/media/AI.b7ca0840.png"},99:function(n,e,t){n.exports=t(169)}},[[99,1,2]]]);
//# sourceMappingURL=main.6db7bff4.chunk.js.map