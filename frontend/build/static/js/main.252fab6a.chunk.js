(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(7),l=n.n(i),o=(n(13),n(5)),s=n(8),u=n(6),a=n(0),d=function(e){var t=e.breadcrumbData,n=e.clickHandler;return Object(a.jsx)("div",{children:Object(a.jsx)("ul",{style:{border:"1px solid #eee",display:"flex",listStyle:"none",padding:"5px",justifyContent:"center",color:"blue",textTransform:"capitalize"},children:t.map((function(e,c){return c===t.length-1?Object(a.jsx)("li",{onClick:function(e){return n(e,c)},style:{cursor:"pointer"},children:e},e):Object(a.jsxs)("li",{style:{cursor:"pointer"},onClick:function(e){return n(e,c)},children:[e,Object(a.jsx)("span",{style:{padding:"0px 5px"},children:"/"})," "]},e)}))})})},j=function(e){var t=e.dirName,n=e.dirData,c=e.clickHandler,r=Object.keys(n),i={cursor:"pointer",color:"blue"};return Object(a.jsxs)("div",{children:[Object(a.jsxs)("h3",{style:{textTransform:"capitalize"},children:['"',t,'" directory Content']}),r.map((function(e){return"dir"===n[e].type?Object(a.jsxs)("p",{style:i,onClick:function(t){return c(t,e)},children:[e,"/"]},e):Object(a.jsx)("p",{style:i,onClick:function(t){return c(t,e)},children:e},e)}))]})},b=function(e){var t=e.fileName;return Object(a.jsx)("div",{children:Object(a.jsxs)("h1",{children:["This is File: ",t]})})};n(15);var f=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(["home"]),l=Object(u.a)(i,2),f=l[0],h=l[1],p=Object(c.useRef)(null);Object(c.useEffect)((function(){p.current!==f&&fetch("http://127.0.0.1:5000/path/".concat(f.join("/"))).then((function(e){return e.json()})).then((function(e){r(Object(s.a)({},e.data))})).catch((function(e){return console.log("error")})),p.current=f}),[f,n]);var O=n&&"dir"===n.type?Object(a.jsx)(j,{clickHandler:function(e,t){f.includes(t)||(f.push(t),h(Object(o.a)(f)))},dirName:f[f.length-1],dirData:n.children}):null;return n&&"file"===n.type&&(O=Object(a.jsx)(b,{fileName:f[f.length-1]})),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(d,{clickHandler:function(e,t){f.splice(t+1);h(Object(o.a)(f))},rootDir:f[f.length-1],breadcrumbData:f}),O]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,l=t.getTTFB;n(e),c(e),r(e),i(e),l(e)}))};l.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root")),h()}},[[16,1,2]]]);
//# sourceMappingURL=main.252fab6a.chunk.js.map