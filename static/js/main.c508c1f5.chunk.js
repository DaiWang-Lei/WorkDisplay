(this["webpackJsonpbobot-gallery"]=this["webpackJsonpbobot-gallery"]||[]).push([[0],{15:function(t,e,n){t.exports={cardContainer:"Work_cardContainer__1nn7h"}},25:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),c=n(13),r=n.n(c),o=(n(25),n(11)),s=n.n(o),u=n(14),d=n(3),p=n(4),b=n(7),j=n(6),h=n(8),l=n.n(h),m=n(17),g=n(18),O=n(0),f={authorName:"Robuta",shoppingCart:{items:[]}},x=i.a.createContext(f),v=i.a.createContext(void 0),_=function(t){var e=t.children,n=Object(a.useState)(f),i=Object(g.a)(n,2),c=i[0],r=i[1];return Object(O.jsx)(x.Provider,{value:c,children:Object(O.jsx)(v.Provider,{value:r,children:e})})},C=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(d.a)(this,n),(a=e.call(this,t)).handleClick=function(t){"SPAN"===t.target.nodeName&&a.setState({isOpen:!a.state.isOpen})},a.state={isOpen:!1},a}return Object(p.a)(n,[{key:"render",value:function(){var t=this,e=this.state.isOpen;return Object(O.jsx)(x.Consumer,{children:function(n){return Object(O.jsxs)("div",{className:l.a.cartContainer,children:[Object(O.jsxs)("button",{className:l.a.button,onClick:t.handleClick,children:[Object(O.jsx)(m.a,{}),Object(O.jsxs)("span",{children:[" \u559c\u6b22\u7684\u4f5c\u54c1 ",n.shoppingCart.items.length," (\u4ef6)"]})]}),Object(O.jsx)("div",{className:l.a.cartDropDown,style:{display:e?"block":"none"},children:Object(O.jsx)("ul",{children:n.shoppingCart.items.map((function(t){return Object(O.jsx)("li",{children:t.name})}))})})]})}})}}]),n}(i.a.Component),k=n(9),D=n.n(k),w=n(20),L=n(15),N=n.n(L),y=n(19),R=n(12),A=n(16),P=function(){var t=Object(a.useContext)(v);return function(e,n){t&&(Object(A.a)({width:300,height:300,particleCount:400,startVelocity:50,spread:300}),t((function(t){return Object(R.a)(Object(R.a)({},t),{},{shoppingCart:{items:[].concat(Object(y.a)(t.shoppingCart.items),[{id:e,name:n}])}})})))}},T=["id","name","introduction","href","src"],S=function(t){var e=t.id,n=t.name,i=t.introduction,c=t.href,r=t.src,o=(Object(w.a)(t,T),P()),s=Object(a.useContext)(x);return Object(O.jsxs)("div",{className:N.a.cardContainer,onClick:function(t){"BUTTON"!==t.target.tagName&&window.open(c)},children:[Object(O.jsx)("img",{src:r,alt:"",style:{maxWidth:"19vw"}}),Object(O.jsx)("h2",{children:n}),Object(O.jsx)("p",{children:i}),Object(O.jsxs)("p",{children:["author: ",s.authorName]}),Object(O.jsx)("button",{onClick:function(){return o(e,n)},children:"(\u2764 \u03c9 \u2764)"})]})},F=n.p+"static/media/travel.e0032f45.jpg",z=n.p+"static/media/npmPackage.4d976d6f.jpg",H=n.p+"static/media/dumi.45cd692e.jpg",J=n.p+"static/media/jira.18adb6a7.jpg",W=n.p+"static/media/cf.a0b6cf77.jpeg",B=n.p+"static/media/zigzag.f07eeb40.jpeg",I=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(d.a)(this,n),(a=e.call(this,t)).state={robotData:[{id:1,name:"Robuta-travel",href:"https://daiwang-lei.github.io/Robuta-Travel",src:F,introduction:"\u57fa\u4e8eReact\u7684\u65c5\u6e38\u7f51\u7ad9"},{id:2,name:"Robuta-Design",href:"https://daiwang-lei.github.io/robutaDesign/storybook-static",src:z,introduction:"NPM\u4e0a\u67b6\u7684React\u7ec4\u4ef6\u5e93"},{id:3,name:"Robuta-Dumi-Document",href:"https://daiwang-lei.github.io/dumiDoc/docs-dist",src:H,introduction:"\u57fa\u4e8eDumi\u7684\u4e2a\u4eba\u535a\u5ba2"},{id:4,name:"Robuta-Jira",href:"https://daiwang-lei.github.io/jira/",src:J,introduction:"\u57fa\u4e8eReact&Ts\u7684\u4efb\u52a1\u7ba1\u7406\u7cfb\u7edf"},{id:4,name:"\u7a7f\u8d8a\u706b\u7ebf\u4e4b\u52a8\u6f2b\u4eba\u7269\u5927\u4e71\u6597",href:"https://daiwang-lei.github.io/lingo/",src:W,introduction:"\u57fa\u4e8eReact&Js\u7684\u6e38\u620f"},{id:4,name:"Zigzag",href:"https://lingocreate.cn/projects/61b3e8d653aefd2bab8603bc",src:B,introduction:"\u57fa\u4e8eLingo\u7684\u6e38\u620f"}],count:0},a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var t=Object(u.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state,e=t.robotData;t.count;return Object(O.jsxs)("div",{className:D.a.app,children:[Object(O.jsx)("div",{className:D.a.appHeader,children:Object(O.jsx)("h1",{children:"Work display"})}),Object(O.jsx)(C,{}),Object(O.jsx)("div",{className:D.a.robotList,children:e.map((function(t){var e=t.id,n=t.name,a=t.introduction,i=t.href,c=t.src;return Object(O.jsx)(S,{src:c,id:e,name:n,introduction:a,href:i},e)}))})]})}}]),n}(i.a.Component),M=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),a(t),i(t),c(t),r(t)}))};r.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(_,{children:Object(O.jsx)(I,{})})}),document.getElementById("root")),M()},8:function(t,e,n){t.exports={cartContainer:"LikeList_cartContainer__2WZ-5",cartDropDown:"LikeList_cartDropDown__3s_Ie",button:"LikeList_button__39GSb"}},9:function(t,e,n){t.exports={app:"App_app__1kX79",appHeader:"App_appHeader__28RXF",appLogo:"App_appLogo__1qg7-","App-logo-spin":"App_App-logo-spin__1e7sv",robotList:"App_robotList__zTHhD"}}},[[28,1,2]]]);
//# sourceMappingURL=main.c508c1f5.chunk.js.map