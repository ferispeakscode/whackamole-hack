(this["webpackJsonpwhackamole-hack"]=this["webpackJsonpwhackamole-hack"]||[]).push([[0],[,,,,,,function(e,t,a){},,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(7),s=a.n(c),o=(a(6),a(1)),u=a(2),i=a(4),l=a(3),h=(a(13),function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(o.a)(this,a),(r=t.call(this)).checkMole=function(){r.state.value==r.state.mole?console.log("You whacked the mole!"):console.log("Oops, try again!")},r.state={value:e.value,mole:"\u3042"},r}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("button",{className:"square",onClick:this.props.whack},this.props.value)}}]),a}(r.Component)),d=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"renderSquare",value:function(e){return n.a.createElement(h,{value:e,score:this.props.score,whack:this.props.wasWhacked})}},{key:"render",value:function(){for(var e=["\u3042","\u3044","\u3046","\u3048","\u304a","\u304b","\u304d","\u304f","\u3051","\u3053","\u3055","\u3057","\u3059","\u305b","\u305d","\u305f","\u3061","\u3064","\u3066","\u3068","\u306a","\u306b","\u306c","\u306d","\u306e","\u306f","\u3072","\u3075","\u3078","\u307b","\u307e","\u307f","\u3080","\u3081","\u3082","\u3084","\u3086","\u3088","\u3089","\u308a","\u308b","\u308c","\u308d","\u308f","\u3092","\u3093"],t=[],a=0;a<24;a++){var r=Math.floor(24*Math.random());t.push(e[r])}t.push("\u3042");for(var c,s,o=t.length;0!=o;)s=Math.floor(Math.random()*o),c=t[--o],t[o]=t[s],t[s]=c;return n.a.createElement("div",null,n.a.createElement("div",{className:"board-row"},this.renderSquare(t[0]),this.renderSquare(t[1]),this.renderSquare(t[2]),this.renderSquare(t[3]),this.renderSquare(t[4])),n.a.createElement("div",{className:"board-row"},this.renderSquare(t[5]),this.renderSquare(t[6]),this.renderSquare(t[7]),this.renderSquare(t[8]),this.renderSquare(t[9])),n.a.createElement("div",{className:"board-row"},this.renderSquare(t[10]),this.renderSquare(t[11]),this.renderSquare(t[12]),this.renderSquare(t[13]),this.renderSquare(t[14])),n.a.createElement("div",{className:"board-row"},this.renderSquare(t[15]),this.renderSquare(t[16]),this.renderSquare(t[17]),this.renderSquare(t[18]),this.renderSquare(t[19])),n.a.createElement("div",{className:"board-row"},this.renderSquare(t[20]),this.renderSquare(t[21]),this.renderSquare(t[22]),this.renderSquare(t[23]),this.renderSquare(t[24])))}}]),a}(r.Component),m=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Score: ",this.props.value))}}]),a}(r.Component),v=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).secondsToTime=function(e){var t=e%3600%60;return{s:Math.ceil(t)}},e.componentDidMount=function(){var t=e.secondsToTime(e.state.seconds);e.setState({time:t}),e.startTimer()},e.startTimer=function(){0==e.timer&&e.state.seconds>0&&(e.timer=setInterval(e.countDown,1e3))},e.countDown=function(){var t=e.state.seconds-1;e.setState({time:e.secondsToTime(t),seconds:t}),0==t&&clearInterval(e.timer)},e.state={time:{},seconds:60},e.timer=0,e}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,"Time Left: ",this.state.time.s)}}]),a}(r.Component),f=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleWhack=function(){e.setState({score:e.state.score+10})},e.renderScore=function(){return n.a.createElement(m,{value:e.state.score})},e.state={score:0},e}return Object(u.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",null,'Whack-a-"Mole"!'),n.a.createElement("p",{id:"directions"},"Choose your mode of play!"),n.a.createElement("p",null,n.a.createElement("button",{className:"modes easy",onClick:this.runHiragana},"Play in Hiragana"),n.a.createElement("button",{className:"modes medium",onClick:this.runKatakana},"Play in Katakana")),n.a.createElement(v,null),this.renderScore(),n.a.createElement(d,{score:this.state.score,wasWhacked:this.handleWhack}))}}]),a}(r.Component),S=(a(14),function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).showGame=function(){console.log("Start game clicked"),e.setState({shouldShowGame:!0})},e.state={shouldShowGame:!1},e}return Object(u.a)(a,[{key:"render",value:function(){return this.state.shouldShowGame?n.a.createElement(f,null):n.a.createElement("div",null,n.a.createElement("button",{className:"startButton",onClick:this.showGame},"Start Game"))}}]),a}(r.Component));var b=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(S,null))};s.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.155ceb37.chunk.js.map