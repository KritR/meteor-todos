(this["webpackJsonpmeteor-todo"]=this["webpackJsonpmeteor-todo"]||[]).push([[0],{116:function(t,e,n){},126:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(9),c=n.n(o),i=(n(116),n(18)),l=n(58),u=n(56),s=n(166),d=n(10),f=function(t){var e=t.saveTodo,n=Object(r.useState)(""),a=Object(u.a)(n,2),o=a[0],c=a[1];return Object(d.jsx)("form",{onSubmit:function(t){t.preventDefault(),e(o),c("")},children:Object(d.jsx)(s.a,{variant:"outlined",placeholder:"Add todo",margin:"normal",onChange:function(t){c(t.target.value)},value:o})})},j=n(160),b=n(161),m=n(164),g=n(163),p=n(167),h=n(162),O=n(70),v=n.n(O),x=function(t){var e=t.todos,n=t.deleteTodo,r=t.toggleComplete;return Object(d.jsx)(j.a,{children:e.map((function(t,e){return Object(d.jsxs)(b.a,{dense:!0,button:!0,children:[Object(d.jsx)(p.a,{tabIndex:-1,disableRipple:!0,onClick:function(){r(e)}}),Object(d.jsx)(g.a,{primary:t.eventTitle,secondary:new Intl.DateTimeFormat("en-US").format(t.startDate)+" | P"+t.priority}),Object(d.jsx)(m.a,{children:Object(d.jsx)(h.a,{"aria-label":"Delete",onClick:function(){n(e)},children:Object(d.jsx)(v.a,{})})})]},e.toString())}))})},y=n(71),D=n(72),C=n(51),T=n(73),w=n(80),M=(n(68),n(40)),k=n(165),S=[window.innerWidth/2,window.innerHeight],A=S[0],F=S[1];var I=function(t){Object(T.a)(n,t);var e=Object(w.a)(n);function n(t){var r;return Object(y.a)(this,n),(r=e.call(this,t)).createMeteorDiagram=r.createMeteorDiagram.bind(Object(C.a)(r)),r}return Object(D.a)(n,[{key:"componentDidMount",value:function(){this.createMeteorDiagram()}},{key:"componentDidUpdate",value:function(){this.createMeteorDiagram()}},{key:"createMeteorDiagram",value:function(){var t=this.node;Object(k.a)(t).selectAll("*").remove();var e=this.props.todos.filter((function(t){return!t.isComplete})).map((function(t){return Object(i.a)(Object(i.a)({},t),{},{radius:20*t.priority})})).map((function(t){return Object.create(t)})),n=M.c(e).force("charge",M.b().strength(-80)).force("x",M.d(A/2).strength(.03)).force("y",M.e((function(t){return 5*F/6-F/6*Math.log(Math.max(function(t,e){var n=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate()),r=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate());return Math.floor((r-n)/864e5)}(new Date,t.startDate),.8))}))).force("collide",M.a().radius((function(t){return t.radius}))),r=Object(k.a)(t).append("g").attr("stroke","#fff").attr("stroke-width",1.5).attr("fill","bisque").selectAll("circle").data(e).join("circle").attr("r",(function(t){return t.radius}));Object(k.a)(t).append("circle").attr("cx","50%").attr("cy",F+A/2-50).attr("r",A/2).style("fill","green");var a=Object(k.a)(t).selectAll(".mytext").data(e).enter().append("text").text((function(t){return t.eventTitle})).style("text-anchor","middle").style("fill","#0e0").style("font-family","Arial").style("font-size",14);n.on("tick",(function(){r.attr("cx",(function(t){return t.x})).attr("cy",(function(t){return t.y})),a.attr("x",(function(t){return t.x})).attr("y",(function(t){return t.y-t.radius-10}))}))}},{key:"render",value:function(){var t=this;return Object(d.jsx)("svg",{ref:function(e){return t.node=e},width:"50%",height:"100%"})}}]),n}(r.Component),J=n(79),N=n(78),U=n.n(N),P=function(t){var e=Object(r.useState)(t),n=Object(u.a)(e,2),a=n[0],o=n[1];return{todos:a,addTodo:function(t){var e=(t.match(/!/g)||[]).length+1,n=U.a.parse(t);n.isComplete=!1,n.priority=e,n.startDate=n.startDate||new Date,n.time=n.startDate.getTime(),o([].concat(Object(J.a)(a),[n]))},deleteTodo:function(t){var e=a.filter((function(e,n){return n!==t}));o(e)},toggleComplete:function(t){var e=a.map((function(e,n){return n!==t?e:Object(i.a)(Object(i.a)({},e),{},{isComplete:!e.isComplete})}));o(e)}}},B=function(){var t=P((function(){return(JSON.parse(window.localStorage.getItem("todos"))||[]).map((function(t){var e=new Date(t.time);return Object(i.a)(Object(i.a)({},t),{},{startDate:e})}))})),e=t.todos,n=t.addTodo,a=t.deleteTodo,o=t.toggleComplete;return Object(r.useEffect)((function(){window.localStorage.setItem("todos",JSON.stringify(e))}),[e]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("div",{className:"App-sidebar",children:[Object(d.jsx)(l.a,{component:"h1",variant:"h2",children:"Todos"}),Object(d.jsx)(f,{saveTodo:n}),Object(d.jsx)(x,{todos:e,deleteTodo:a,toggleComplete:o})]}),Object(d.jsx)(I,{todos:e})]})},E=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,169)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,o=e.getLCP,c=e.getTTFB;n(t),r(t),a(t),o(t),c(t)}))};c.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(B,{})}),document.getElementById("root")),E()},68:function(t,e,n){}},[[126,1,2]]]);
//# sourceMappingURL=main.89a084fc.chunk.js.map