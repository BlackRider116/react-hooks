(this["webpackJsonpreact-hooks"]=this["webpackJsonpreact-hooks"]||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(5),r=n.n(c),l=(n(12),n(3)),i=o.a.createContext();function u(e){var t=e.title,n=e.id,c=e.completed,r=Object(a.useContext)(i).dispatch,l=["todo"];return c&&l.push("completed"),o.a.createElement("div",{className:l.join(" ")},o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",checked:c,onChange:function(){return r({type:"toggle",payload:n})}}),o.a.createElement("span",null,t),o.a.createElement("i",{onClick:function(){return r({type:"remove",payload:n})}},"\u2716")))}function d(e){var t=e.todos;return o.a.createElement("ul",null,t.map((function(e){return o.a.createElement(u,Object.assign({key:e.id},e))})))}var s=n(6),m=[{id:1,title:"\u041a\u0443\u043f\u0438\u0442\u044c \u0445\u043b\u0435\u0431 \u0438 \u043c\u043e\u043b\u043e\u043a\u043e",completed:!0},{id:2,title:"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0443\u043d\u0430\u043b\u043a\u0443",completed:!1},{id:3,title:"\u0417\u0430\u0431\u0440\u0430\u0442\u044c \u0434\u043e\u043b\u0433 \u0443 \u0412\u0430\u0441\u0438",completed:!1}],p=function(e,t){switch(t.type){case"add":return[].concat(Object(s.a)(e),[{id:Date.now(),title:t.payload,completed:!1}]);case"toggle":return e.map((function(e){return e.id===t.payload&&(e.completed=!e.completed),e}));case"remove":return e.filter((function(e){return e.id!==t.payload}));default:return e}};function f(){var e=Object(a.useReducer)(p,JSON.parse(localStorage.getItem("todos"))||m),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),u=Object(l.a)(r,2),s=u[0],f=u[1];Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]);return o.a.createElement(i.Provider,{value:{dispatch:c}},o.a.createElement("div",{className:"container"},o.a.createElement("h4",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447"),o.a.createElement("div",{className:"input-field"},o.a.createElement("input",{type:"text",value:s,onChange:function(e){return f(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(c({type:"add",payload:s}),f(""))}}),o.a.createElement("label",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435")),o.a.createElement(d,{todos:n})))}n(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.5f1abe6a.chunk.js.map