(this["webpackJsonpgotchi-app"]=this["webpackJsonpgotchi-app"]||[]).push([[0],[,,,,function(e,a,t){e.exports=t(12)},,,,,function(e,a,t){},function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),l=t(3),i=t.n(l),s=(t(9),t(10),t(1)),r=function(e){e.fullness,e.happiness,e.meals,e.energy,e.message,e.image;return o.a.createElement("div",{className:"display"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col my-5"},o.a.createElement("h1",null,"Kim's Stats:"),o.a.createElement("h5",null,"Fullness: ",e.fullness),o.a.createElement("h5",null,"Happiness: ",e.happiness),o.a.createElement("h5",null,"Energy: ",e.energy),o.a.createElement("h5",null,"Meals: ",e.meals),o.a.createElement("h1",null,e.message)),o.a.createElement("div",{className:"col my-5"},o.a.createElement("img",{src:e.image,alt:""}))))},m=function(e){var a=Object(n.useState)(20),t=Object(s.a)(a,2),l=t[0],i=t[1],m=Object(n.useState)(20),c=Object(s.a)(m,2),u=c[0],g=c[1],d=Object(n.useState)(3),h=Object(s.a)(d,2),f=h[0],K=h[1],b=Object(n.useState)(50),E=Object(s.a)(b,2),y=E[0],p=E[1],v=Object(n.useState)("Welcome to my site! You'll have to do everything for me.  -xoxo Kim "),k=Object(s.a)(v,2),w=k[0],I=k[1],N=Object(n.useState)("Images/KimKHello.gif"),j=Object(s.a)(N,2),O=j[0],S=j[1];function M(){return Math.floor(6*Math.random())+5}function W(){return Math.floor(4*Math.random())+1}function x(){y>=100||l>=100||u>=100?(I("you won!"),S("Images/KimKWin.gif")):(l<=0||u<=0)&&(I("you lose!"),S("Images/KimKSad.gif"))}return o.a.createElement("div",{className:"dashboard"},o.a.createElement(r,{fullness:l,happiness:u,energy:y,meals:f,message:w,image:O}),"you won!"===w||"you lose!"===w?o.a.createElement("div",null,o.a.createElement("button",{className:"btn btn-dark",onClick:function(){g(20),i(20),p(50),K(3),I("Welcome to my site! You'll have to do everything for me.  -xoxo Kim "),S("Images/KimKHello.gif")}},"Reset")):o.a.createElement("div",null,o.a.createElement("button",{className:"btn btn-dark",onClick:function(){var e=y,a=1*(Math.floor(3*Math.random())+1);e>=5?(K(f+a),I("Kim worked hard for the money!"),p(y-5),S("Images/KimKWork.gif")):(I("Kim is too exhausted to go to work."),K(f),S("Images/KimKTired.gif")),x()}},"Work"),o.a.createElement("button",{className:"btn btn-dark",onClick:function(){g(u-5),i(l-5),p(y+15),I("Kim literally needed that nap."),S("Images/KimKNap.gif"),x()}},"Sleep"),o.a.createElement("button",{className:"btn btn-dark",onClick:function(){var e=f,a=1*M(),t=1*W();e>=1?1===t?(K(f-1),i(l+a),I("TG that food was just barely up to Kim's standards."),S("Images/KimKEating.gif")):(K(f-1),I("Kim will not eat your gross food."),S("Images/KimKNotEating.gif"),i(l)):(I("You are literally starving, Kim."),S("Images/KimKHungry.gif"),i(l)),x()}},"Eat"),o.a.createElement("button",{className:"btn btn-dark",onClick:function(){var e=y,a=1*M(),t=1*W();e>=5?1===t?(p(y-5),g(u+a),I("That made Kim happy!"),S("Images/KimKHappy.gif")):(p(y-5),I("Kim didnt want to play with you right now"),g(u),S("Images/KimKSad.gif")):(I("Kim is literally too tired."),g(u),S("Images/KimKTooTired.gif")),x()}},"Play")))};var c=function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"dashboard"},o.a.createElement(m,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(11);i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(c,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.c594e5d2.chunk.js.map