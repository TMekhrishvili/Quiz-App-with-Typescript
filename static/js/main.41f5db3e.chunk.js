(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{12:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(2),s=n.n(r),a=n(13),u=n.n(a),o=n(6),i=n(4),l=n.n(i),j=n(9),b=n(3),p=(n(12),n(7)),O=n(0),d=function(t){var e=t.question,n=t.answers,s=t.callback,a=t.userAnswer,u=Object(r.useRef)([]);u.current=[];var o=function(t){t&&!u.current.includes(t)&&u.current.push(t)};return Object(r.useEffect)((function(){u.current.forEach((function(t){p.a.to(t,.8,{opacity:1,y:-20,easy:O.b.easeOut})}))}),[]),Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("p",{className:"question",dangerouslySetInnerHTML:{__html:e}}),Object(c.jsx)("div",{className:"questionsContainer",children:n.map((function(t){return Object(c.jsx)("button",{ref:o,className:a?(null===a||void 0===a?void 0:a.correctAnswer)===t?"correct questionButton":(null===a||void 0===a?void 0:a.answer)===t?"incorrect questionButton":"questionButton":"questionButton",value:t,disabled:!!a,onClick:s,children:Object(c.jsx)("span",{dangerouslySetInnerHTML:{__html:t}})},t)}))})]})},f=n(11),h=function(){var t=Object(j.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://opentdb.com/api.php?amount=10&type=multiple",t.next=3,fetch("https://opentdb.com/api.php?amount=10&type=multiple");case 3:return t.next=5,t.sent.json();case 5:return e=t.sent,t.abrupt("return",e.results.map((function(t){return Object(f.a)(Object(f.a)({},t),{},{answers:(e=[].concat(Object(o.a)(t.incorrect_answers),[t.correct_answer]),Object(o.a)(e).sort((function(){return Math.random()-.5})))});var e})));case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=function(){var t=Object(r.useRef)(null);Object(r.useEffect)((function(){p.b.to(".start",{opacity:1,y:30,delay:.5,easy:O.b.easeOut}),p.a.to(t.current,.8,{opacity:1,y:-20,easy:O.b.easeOut})}),[]);var e=Object(r.useState)(!1),n=Object(b.a)(e,2),s=n[0],a=n[1],u=Object(r.useState)([]),i=Object(b.a)(u,2),f=i[0],m=i[1],w=Object(r.useState)(0),v=Object(b.a)(w,2),x=v[0],y=v[1],g=Object(r.useState)([]),q=Object(b.a)(g,2),S=q[0],N=q[1],k=Object(r.useState)(0),_=Object(b.a)(k,2),A=_[0],B=_[1],C=Object(r.useState)(!1),z=Object(b.a)(C,2),E=z[0],M=z[1],I=Object(r.useState)(!0),T=Object(b.a)(I,2),H=T[0],J=T[1],L=function(){var t=Object(j.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a(!0),B(0),J(!1),M(!1),t.t0=m,t.next=7,h();case 7:t.t1=t.sent,(0,t.t0)(t.t1),N([]),y(0),a(!1);case 12:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.jsxs)("div",{className:"main",children:[Object(c.jsx)("img",{ref:t,className:"logo",alt:"logo",src:"https://www.worlddata.info/pics/quiz.png"}),H||11===S.length?Object(c.jsx)("button",{className:"start",style:E?{opacity:1}:{opacity:0},onClick:L,children:E?Object(c.jsx)("span",{children:"Play Again"}):Object(c.jsx)("span",{children:"Start Quiz"})}):null,E&&Object(c.jsx)("div",{children:Object(c.jsxs)("p",{className:"score",children:["Score: ",A]})}),s?Object(c.jsx)("img",{className:"img",alt:"loading",src:"https://www.fogelstad.org/core/dependencies/loader.gif"}):null,!s&&!H&&Object(c.jsx)(d,{question:f[x].question,answers:f[x].answers,userAnswer:S?S[x]:void 0,callback:function(t){if(!H){var e=t.currentTarget.value,n=f[x].correct_answer===e;n&&B((function(t){return t+1}));var c={question:f[x].question,answer:e,correct:n,correctAnswer:f[x].correct_answer};N((function(t){return[].concat(Object(o.a)(t),[c])}))}}}),H||s||S.length!==x+1||10===x?null:Object(c.jsx)("button",{className:"next opacity",onClick:function(){var t=x+1;10===t?(J(!0),M(!0)):y((function(t){return t+1}))},children:"Continue"})]})},w=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(m,{})})};u.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(w,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.41f5db3e.chunk.js.map