(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(13),o=t.n(c),u=t(2),i=t(3),l=t.n(i),d="/api/persons",f=function(){return l.a.get(d).then((function(e){return e.data}))},m=function(e){return l.a.post(d,e).then((function(e){return e.data}))},s=function(e){return l.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))},h=function(e,n){return l.a.put("".concat(d,"/").concat(e),n).then((function(e){return e.data}))},b=function(e){var n=e.handleChange;return r.a.createElement("div",null,"filter shown with",r.a.createElement("input",{onChange:n}))},E=function(e){var n=e.handleNameChange,t=e.handleNumberChange,a=e.addPerson;return r.a.createElement("form",null,r.a.createElement("div",null,"name: ",r.a.createElement("input",{onChange:n})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{onChange:t})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",onClick:a},"add")))},v=function(e){var n=e.persons,t=e.filter,a=e.deleteHandler,c=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return r.a.createElement("div",null,c.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("span",null,e.name," ",e.number," "),r.a.createElement("button",{onClick:function(){return a(e.id)}},"delete"))})))},p=function(e){var n=e.notification;return void 0===n.message?null:r.a.createElement("div",{className:n.isError?"error":"info"},n.message)},g=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],o=Object(a.useState)(""),i=Object(u.a)(o,2),l=i[0],d=i[1],g=Object(a.useState)(""),C=Object(u.a)(g,2),w=C[0],j=C[1],O=Object(a.useState)(""),k=Object(u.a)(O,2),N=k[0],y=k[1],S=Object(a.useState)({}),D=Object(u.a)(S,2),I=D[0],P=D[1];Object(a.useEffect)((function(){f().then((function(e){return c(e)}))}),[]);var x=function(e,n){P({message:e,isError:n}),setTimeout((function(){P({})}),5e3)};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(p,{notification:I}),r.a.createElement(b,{handleChange:function(e){return y(e.target.value)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(E,{handleNameChange:function(e){d(e.target.value)},handleNumberChange:function(e){j(e.target.value)},addPerson:function(e){if(e.preventDefault(),t.some((function(e){return e.name===l}))){if(window.confirm("".concat(l," is already added to phonebook, ")+"replace the old number with a new one?")){var n=t.find((function(e){return e.name===l})).id;h(n,{name:l,number:w}).then((function(e){c(t.map((function(t){return t.id!==n?t:e}))),x("Replaced ".concat(e.name),!1)})).catch((function(e){c(t.filter((function(e){return e.id!==n}))),x("Information of ".concat(l," doesn't exist in server"),!0)}))}}else{var a={name:l,number:w};m(a).then((function(e){c(t.concat(e)),x("Added ".concat(e.name),!1)})).catch((function(e){x("Couldn't add ".concat(a.name," to database"),!0)}))}}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(v,{persons:t,filter:N,deleteHandler:function(e){var n=t.find((function(n){return n.id===e})).name;window.confirm("Delete ".concat(n,"?"))&&s(e).then((function(){c(t.filter((function(n){return n.id!==e}))),x("Deleted ".concat(n),!1)})).catch((function(a){c(t.filter((function(n){return n.id!==e}))),x("Information of ".concat(n," has already been removed from server"),!0)}))}}))};t(36);o.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.306f3812.chunk.js.map