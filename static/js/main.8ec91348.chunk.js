(this["webpackJsonpblackbox-challenge"]=this["webpackJsonpblackbox-challenge"]||[]).push([[0],{22:function(n,e,t){"use strict";t.r(e);var r,o,c,i,a,s,b,l,d,u,p,x,j,h,g,f,O=t(0),m=t(9),w=t.n(m),v=t(4),y=t(2),k=t(3),A=t(1),S=k.b.button(r||(r=Object(y.a)(["\n    min-width: 150px;\n    padding: 20px 5px;\n    margin: 20px;\n    border: none;\n    background-color: transparent;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #121212;\n    border-top-left-radius: 12px;\n    transition: 0.5s;\n    cursor: pointer;\n\n    &:hover, :focus{\n    background-color: #121212;\n    box-shadow: 2px 5px 2px 1px rgba(0, 0, 0, 0.2);\n    font-weight: 700;\n    color: greenyellow;\n    }\n\n"]))),C=function(n){var e=n.handleAnswer,t=n.answer,r=n.data,o=n.decodeHtml,c=Object(O.useState)(t),i=Object(v.a)(c,2),a=i[0],s=i[1];return Object(A.jsx)(S,{value:t,onClick:function(n){return function(n){o(r.correct_answer)===t?s("Great!"):s("Wrong!"),setTimeout((function(){e(n),s(t)}),2e3)}(n)},children:a})},z=k.b.div(o||(o=Object(y.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: flex-end;\n"]))),P=k.b.div(c||(c=Object(y.a)(["\n    width: 500px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: #272727;\n    box-shadow: 3px 5px 5px 1px rgba(0, 0, 0, 0.2);\n    border-top-left-radius: 60px;\n"]))),E=k.b.h1(i||(i=Object(y.a)(["\n    position: relative;\n    bottom: 12px;\n    color: greenyellow;\n    font-size: 0.7rem;\n    font-weight: 300;\n    letter-spacing: 0.3em;\n    text-align: right;\n    width: 500px;\n    cursor: default;\n"]))),I=k.b.h2(a||(a=Object(y.a)(["\n    width: 400px;\n    text-align: center;\n    font-size: 1.2rem;\n    margin: 80px 0 50px;\n"]))),T=k.b.div(s||(s=Object(y.a)(["\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-evenly;\n    align-items: center;\n    margin-bottom: 50px;\n"]))),_=Object(k.b)(E)(b||(b=Object(y.a)(["\n    bottom: 0;\n    right: 513px;\n    text-align: left;\n    width: fit-content;\n    writing-mode: vertical-rl;\n    transform:scale(-1);\n"]))),F=function(n){var e=n.handlePoints,t=n.data,r=n.handleNumbQuestion,o=t.incorrect_answers.concat(t.correct_answer);o.sort((function(){return Math.random()-.5}));var c=function(n){n.target.value===t.correct_answer?("multiple"===t.type?e(10):e(5),r()):r()},i=function(n){var e=document.createElement("textarea");return e.innerHTML=n,e.value};return Object(A.jsxs)(z,{children:[Object(A.jsxs)(P,{children:[Object(A.jsx)(E,{children:"CATEGORY: ".concat(t.category.toUpperCase().replace(": ","-"))}),Object(A.jsx)(I,{children:i(t.question)}),Object(A.jsx)(T,{children:o.map((function(n){return Object(A.jsx)(C,{handleAnswer:c,answer:i(n),data:t,decodeHtml:i},n)}))})]}),Object(A.jsx)(_,{children:"DIFFICULTY: ".concat(t.difficulty.toUpperCase())})]})},G=k.b.h1(l||(l=Object(y.a)(["\n    font-size: 1.2rem;\n    text-align: center;\n"]))),H=k.b.button(d||(d=Object(y.a)(["\n    padding: 20px;\n    margin-top: 30px;\n    border: none;\n    background-color: #272727;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #121212;\n    border-top-left-radius: 12px;\n    transition: 0.5s;\n    cursor: pointer;\n\n    &:hover {\n    background-color: #121212;\n    box-shadow: 2px 5px 2px 1px rgba(0, 0, 0, 0.2);\n    font-weight: 700;\n    color: greenyellow;\n    }\n"]))),L=function(n){var e=n.points,t=n.handlePlayAgain;return Object(A.jsxs)("div",{children:[Object(A.jsxs)(G,{children:["points: ",e]}),Object(A.jsx)(H,{onClick:function(){return t()},children:"PLAY AGAIN"})]})},N=k.b.div(u||(u=Object(y.a)(["\n    width: 100%;\n    height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),Q=Object(k.c)(p||(p=Object(y.a)(["\n    from {\n        transform: rotate(0deg);\n    }\n\n    to {\n        transform: rotate(360deg);\n    }\n"]))),U=k.b.div(x||(x=Object(y.a)(["\n    border: 4px solid rgba(0, 0, 0, .1);\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n    border-left-color: greenyellow;\n\n    animation: "," 1s ease infinite;\n"])),Q),Y=function(){return Object(A.jsx)(N,{children:Object(A.jsx)(U,{})})},B=k.b.div(j||(j=Object(y.a)(["\n  width: 100%;\n  background-color: #121212;\n  min-height: 100vh;\n"]))),J=k.b.header(h||(h=Object(y.a)(["\n  width: 100%;\n  text-align: center;\n  background-color: #272727;\n  box-shadow: 2px 5px 2px 1px rgba(0, 0, 0, 0.2);\n"]))),M=k.b.h1(g||(g=Object(y.a)(["\n  font-size: 2rem;\n  padding: 25px 0;\n  letter-spacing: 0.2em;\n  text-shadow: rgb(0 0 0 / 0.5) 0.1em 0.1em;\n"]))),q=k.b.div(f||(f=Object(y.a)(["\n    width: 100%;\n    min-height: 500px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 30px;\n"])));var D,R=function(){var n=Object(O.useState)(),e=Object(v.a)(n,2),t=e[0],r=e[1],o=Object(O.useState)(!0),c=Object(v.a)(o,2),i=c[0],a=c[1],s=Object(O.useState)(0),b=Object(v.a)(s,2),l=b[0],d=b[1],u=Object(O.useState)(0),p=Object(v.a)(u,2),x=p[0],j=p[1],h=Object(O.useState)(!1),g=Object(v.a)(h,2),f=g[0],m=g[1],w=Object(O.useState)(!1),y=Object(v.a)(w,2),k=y[0],S=y[1];return Object(O.useEffect)((function(){fetch("https://opentdb.com/api.php?amount=10").then((function(n){return n.json()})).catch((function(n){return console.log(n)})).then((function(n){r(n.results),a(!1)})).catch((function(n){return console.log(n)}))}),[k]),i?Object(A.jsx)(Y,{}):Object(A.jsxs)(B,{children:[Object(A.jsx)(J,{children:Object(A.jsx)(M,{children:"QuizBox Vision"})}),Object(A.jsx)(q,{children:f?Object(A.jsx)(L,{points:l,handlePlayAgain:function(){a(!0),d(0),j(0),m(!1),S(!k)}}):Object(A.jsx)(F,{handlePoints:function(n){d((function(e){return e+n}))},data:t[x],handleNumbQuestion:function(){x<9?j((function(n){return n+1})):m(!0)}})})]})},V=Object(k.a)(D||(D=Object(y.a)(["\n    *{    \n        margin:0;\n        padding: 0;\n        color: white;\n        font-family: monospace;\n        letter-spacing: 0.1em\n    }\n\n    body{\n        width: 100%;\n        background-color: #121212;\n        min-height: 100vh;\n    }\n"])));w.a.render(Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(V,{}),Object(A.jsx)(R,{})]}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.8ec91348.chunk.js.map