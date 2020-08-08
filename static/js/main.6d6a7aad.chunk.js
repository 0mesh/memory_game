(this.webpackJsonpmemory_game=this.webpackJsonpmemory_game||[]).push([[0],{25:function(e,t,a){e.exports=a(40)},30:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),i=(a(30),a(31),a(32),a(10)),o=a(11),s=a(12),u=a(9),m=a(16),d=a(14),v=a(19),h=a.n(v);a(33);var f=function(e){var t={};return e.Visible&&(t.backgroundColor=e.backgroundColor),r.a.createElement("div",{onClick:e.onClick,className:16===e.numCards?"card-container card16 ":"card-container card32",style:t})},k=a(20),p=a(21);var b=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{bg:"dark",variant:"dark"},r.a.createElement(k.a.Brand,{href:"#"},"Memory Game"),r.a.createElement(p.a,{className:"mr-auto"},r.a.createElement(p.a.Link,{href:"#",onClick:e.onNewGame},"New Game"))))},E=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).sendingData=function(e){n.props.changeLevel(e)},n.state={level:"medium"},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{onChange:function(t){return e.sendingData(t.target.value)}},r.a.createElement("div",{className:"custom-control custom-radio custom-control-inline"},r.a.createElement("input",{type:"radio",className:"custom-control-input",id:"defaultInline1",value:"easy",name:"level"}),r.a.createElement("label",{className:"custom-control-label",htmlFor:"defaultInline1"},"Easy")),r.a.createElement("div",{className:"custom-control custom-radio custom-control-inline"},r.a.createElement("input",{type:"radio",className:"custom-control-input",id:"defaultInline2",value:"medium",name:"level",defaultChecked:!0}),r.a.createElement("label",{className:"custom-control-label",htmlFor:"defaultInline2"},"Medium")),r.a.createElement("div",{className:"custom-control custom-radio custom-control-inline"},r.a.createElement("input",{type:"radio",className:"custom-control-input",id:"defaultInline3",value:"hard",name:"level"}),r.a.createElement("label",{className:"custom-control-label",htmlFor:"defaultInline3"},"Hard")),r.a.createElement("div",{className:"custom-control custom-radio custom-control-inline"},r.a.createElement("input",{type:"radio",className:"custom-control-input",id:"defaultInline4",value:"expert",name:"level"}),r.a.createElement("label",{className:"custom-control-label",htmlFor:"defaultInline4"},"Expert"))))}}]),a}(n.Component),g=a(23),C=a(24),N=0,y=1,w=2,S=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).changeLevel=function(e){var t={cards:n.makeCards(e),noClick:!1,level:e,clicks:0,cardsMatched:0};n.setState(t)},n.state={cards:n.makeCards(),noClick:!1,level:"medium",clicks:0,cardsMatched:0,previousBest:{easy:"-",medium:"-",hard:"-",expert:"-"}},n.clickHandler=n.clickHandler.bind(Object(u.a)(n)),n.handleNewGame=n.handleNewGame.bind(Object(u.a)(n)),n}return Object(s.a)(a,[{key:"makeCards",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"medium",t=["red","yellow","pink","purple","blue","orange","green","navy","brown","blueviolet","magenta","mediumaquamarine","greenyellow","gold","skyblue","olive"],a=8;"hard"!==e&&"expert"!==e||(a=16),"medium"!==e&&"expert"!==e||(this.visibleTime=500);for(var n=[],r=0;r<a;r++){var l={id:2*r,cardState:N,color:t[r]},c={id:2*r+1,cardState:N,color:t[r]};n.push(l,c)}return n=h()(n)}},{key:"clickHandler",value:function(e){var t=this;!1===this.state.noClick&&this.setState((function(e){return{clicks:e.clicks+1}}));var a=function(e,t,a){return e.map((function(e){return t.includes(e.id)?Object(i.a)(Object(i.a)({},e),{},{cardState:a}):e}))},n=this.state.cards.find((function(t){return t.id===e}));if(!this.state.noClick&&n.cardState===N){var r=!1,l=a(this.state.cards,[e],y),c=l.filter((function(e){return e.cardState===y})),o=c.map((function(e){return e.id}));if(2===c.length&&c[0].color===c[1].color)l=a(l,o,w),this.setState((function(e){return{cardsMatched:e.cardsMatched+2}}),(function(){setTimeout((function(){if(t.state.cardsMatched===t.state.cards.length){var e=t.state.level,a=t.state.clicks;if("-"===t.state.previousBest[e]||t.state.previousBest[e]>=a){var n=t.state.previousBest;n[e]=a,t.setState({previousBest:n})}t.handleNewGame()}}),1200)}));else if(2===c.length){var s=a(l,o,N);return r=!0,void this.setState({cards:l,noClick:r},(function(){setTimeout((function(){return t.setState({cards:s,noClick:!1})}),"medium"===t.state.level||"expert"===t.state.level?400:1e3)}))}this.setState({cards:l,noClick:r})}}},{key:"handleNewGame",value:function(){var e=this.state.cards.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{cardState:N})}));e=h()(e),this.setState({cards:e,clicks:0,cardsMatched:0})}},{key:"render",value:function(){var e=this,t=this.state.cards.map((function(t,a,n){return r.a.createElement(f,{numCards:n.length,key:t.id,Visible:t.cardState!==N,backgroundColor:t.color,onClick:function(){return e.clickHandler(t.id)}})}));return r.a.createElement("div",null,r.a.createElement(b,{onNewGame:this.handleNewGame}),r.a.createElement("p",null," Number of Clicks:  ",r.a.createElement("strong",null," ",this.state.clicks),r.a.createElement("br",null),r.a.createElement("strong",null,"Previous best ",this.state.previousBest[this.state.level])),r.a.createElement(E,{changeLevel:this.changeLevel.bind(this)}),r.a.createElement(g.a,null,r.a.createElement(C.a,null,t)))}}]),a}(n.Component);var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.6d6a7aad.chunk.js.map