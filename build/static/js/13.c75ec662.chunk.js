(this["webpackJsonpgoose-frontend"]=this["webpackJsonpgoose-frontend"]||[]).push([[13],{696:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Oe}));var c=n(12),r=n(50),a=n(0),i=n(3),o=n(36),s=n(172),u=n(178),j=n(4),b=n.n(j),f=n(15),l=n(20),O=n(66),d=n(13),p=n.n(d),x=n(673),h=n(16),m=n(30),g=n(38),v=n(73),w=n(672),S=n(131),k=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(O.m)().account,i=Object(S.a)().fastRefresh;return Object(a.useEffect)((function(){r&&function(){var e=Object(f.a)(b.a.mark((function e(){var t,n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=w.a.map((function(e){return{address:Object(g.d)(),name:"pendingEgg",params:[e.pid,r]}})),e.next=3,Object(m.a)(v,t);case 3:n=e.sent,a=w.a.map((function(e,t){return Object(h.a)(Object(h.a)({},e),{},{balance:new p.a(n[t])})})),c(a);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,i]),n},z=n(674),B=n(682),y=function(e){var t=e.value,n=e.decimals,r=e.fontSize,i=void 0===r?"40px":r,s=e.prefix,u=Object(B.useCountUp)({start:0,end:t,duration:1,separator:",",decimals:void 0!==n?n:t<0?4:t>1e5?0:3}),j=u.countUp,b=u.update,f=Object(a.useRef)(b);return Object(a.useEffect)((function(){f.current(t)}),[t,f]),Object(c.jsxs)(o.B,{bold:!0,fontSize:i,children:[s,j]})},E=function(e){var t=e.earningsSum,n=Object(s.a)();return Object(O.m)().account?Object(c.jsx)(y,{value:t}):Object(c.jsx)(o.B,{color:"textDisabled",style:{lineHeight:"60px"},children:n(298,"Locked")})},F=function(e){var t=e.cakeBalance,n=Object(s.a)();return Object(O.m)().account?Object(c.jsx)(y,{value:t,fontSize:"24px"}):Object(c.jsx)(o.B,{color:"textDisabled",style:{lineHeight:"36px"},children:n(298,"Locked")})},C=n(95),G=n(270),N=n(85),R=n(675),D=function(e){var t=Object(a.useState)(new p.a(0)),n=Object(l.a)(t,2),c=n[0],r=n[1],i=Object(O.m)(),o=i.account,s=i.ethereum,u=Object(S.a)().fastRefresh;return Object(a.useEffect)((function(){o&&s&&function(){var t=Object(f.a)(b.a.mark((function t(){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(R.b)(s,e,o);case 2:n=t.sent,r(new p.a(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()()}),[o,s,e,u]),c},T=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(O.m)().account,i=Object(S.a)().fastRefresh;return Object(a.useEffect)((function(){r&&function(){var e=Object(f.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=w.a.map((function(e){return{address:Object(g.d)(),name:"pendingEgg",params:[e.pid,r]}})),e.next=3,Object(m.a)(v,t);case 3:n=e.sent,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[r,i]),n},H=n(663);function M(){var e=Object(r.a)(["\n  margin-top: 24px;\n"]);return M=function(){return e},e}function Q(){var e=Object(r.a)(["\n  color: ",";\n  font-size: 14px;\n"]);return Q=function(){return e},e}function W(){var e=Object(r.a)(["\n  margin-bottom: 16px;\n"]);return W=function(){return e},e}function $(){var e=Object(r.a)(["\n  margin-bottom: 16px;\n"]);return $=function(){return e},e}function A(){var e=Object(r.a)(["\n  background-image: url('/images/egg/2a.png');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 376px;\n"]);return A=function(){return e},e}var J=Object(i.e)(o.h)(A()),L=i.e.div($()),P=i.e.img(W()),U=i.e.div(Q(),(function(e){return e.theme.colors.textSubtle})),I=i.e.div(M()),q=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],i=Object(O.m)().account,u=Object(s.a)(),j=k(),d=Object(H.a)(D(Object(g.a)())),h=Object(C.g)().toNumber(),m=T().reduce((function(e,t){return e+new p.a(t).div(new p.a(10).pow(18)).toNumber()}),0),v=j.filter((function(e){return e.balance.toNumber()>0})),w=Object(x.a)(v.map((function(e){return e.pid}))).onReward,S=Object(a.useCallback)(Object(f.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.prev=1,e.next=4,w();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,r(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[w]);return Object(c.jsx)(J,{children:Object(c.jsxs)(o.i,{children:[Object(c.jsx)(o.n,{size:"xl",mb:"24px",children:u(542,"Farms & Staking")}),Object(c.jsx)(P,{src:"/images/egg/2.png",alt:"cake logo",width:64,height:64}),Object(c.jsxs)(L,{children:[Object(c.jsx)(U,{children:u(544,"GOOSE to Harvest")}),Object(c.jsx)(E,{earningsSum:m}),Object(c.jsxs)(U,{children:["~$",(h*m).toFixed(2)]})]}),Object(c.jsxs)(L,{children:[Object(c.jsx)(U,{children:u(546,"GOOSE in Wallet")}),Object(c.jsx)(F,{cakeBalance:d}),Object(c.jsxs)(U,{children:["~$",(h*d).toFixed(2)]})]}),Object(c.jsx)(I,{children:i?Object(c.jsx)(o.d,{id:"harvest-all",disabled:v.length<=0||n,onClick:S,fullWidth:!0,children:n?u(548,"Collecting EGG"):u(999,"Harvest all (".concat(v.length,")"))}):Object(c.jsx)(z.a,{fullWidth:!0})})]})})},K=n(670);function V(){var e=Object(r.a)(["\n  color: ",";\n  font-size: 14px;\n"]);return V=function(){return e},e}function X(){var e=Object(r.a)(["\n  margin-bottom: 16px;\n"]);return X=function(){return e},e}function Y(){var e=Object(r.a)(["\n  margin-bottom: 16px;\n"]);return Y=function(){return e},e}function Z(){var e=Object(r.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]);return Z=function(){return e},e}function _(){var e=Object(r.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]);return _=function(){return e},e}var ee=Object(i.e)(o.h)(_()),te=i.e.div(Z()),ne=(i.e.div(Y()),i.e.img(X())),ce=(i.e.div(V(),(function(e){return e.theme.colors.textSubtle})),function(){var e=Object(s.a)(),t=function(){var e=Object(S.a)().slowRefresh,t=Object(a.useState)(),n=Object(l.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){function e(){return(e=Object(f.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(N.a)(G,Object(g.a)()),e.next=3,t.methods.totalSupply().call();case 3:n=e.sent,r(new p.a(n));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),c}(),n=function(e){var t=Object(a.useState)(new p.a(0)),n=Object(l.a)(t,2),c=n[0],r=n[1],i=Object(S.a)().slowRefresh;return Object(a.useEffect)((function(){!function(){var e=Object(f.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(N.a)(G,Object(g.a)()),e.next=3,t.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:n=e.sent,r(new p.a(n));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[e,i]),c}(Object(g.a)()),r=function(e){var t=Object(a.useState)(new p.a(0)),n=Object(l.a)(t,2),c=n[0],r=n[1],i=Object(S.a)().slowRefresh;return Object(a.useEffect)((function(){!function(){var e=Object(f.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(N.a)(G,Object(g.a)()),e.next=3,t.methods.balanceOf("0xC74CDF1E1cd26cC827F247BC8A0033C4690175e3").call();case 3:n=e.sent,r(new p.a(n));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[e,i]),c}(Object(g.a)()),i=Object(C.c)(),u=new K.a(Object(C.e)().toNumber()*Object(C.f)().toNumber()),j=t?t.minus(n):new K.a(0),O=Object(H.a)(j),d=u.times(j),x=0;return i&&i[0]&&i[0].eggPerBlock&&(x=new K.a(i[0].eggPerBlock).div(new K.a(10).pow(18)).toNumber()),Object(c.jsx)(ee,{children:Object(c.jsxs)(o.i,{children:[Object(c.jsx)(o.n,{size:"xl",mb:"24px",children:e(222534,"GOOSE Stats")}),Object(c.jsx)(ne,{src:"/images/egg/2.png",alt:"cake logo",width:64,height:64}),Object(c.jsxs)(te,{children:[Object(c.jsx)(o.B,{fontSize:"14px",children:e(10005,"Market Cap")}),Object(c.jsx)(y,{fontSize:"14px",value:Object(H.a)(d),decimals:0,prefix:"$"})]}),Object(c.jsxs)(te,{children:[Object(c.jsx)(o.B,{fontSize:"14px",children:e(536,"Total Minted")}),t&&Object(c.jsx)(y,{fontSize:"14px",value:Object(H.a)(t),decimals:0})]}),Object(c.jsxs)(te,{children:[Object(c.jsx)(o.B,{fontSize:"14px",children:e(540,"New EGG/block")}),Object(c.jsx)(o.B,{bold:!0,fontSize:"14px",children:x})]}),Object(c.jsxs)(te,{children:[Object(c.jsx)(o.B,{fontSize:"14px",children:e(538,"Total Burned")}),Object(c.jsx)(y,{fontSize:"14px",value:Object(H.a)(n),decimals:0})]}),Object(c.jsxs)(te,{children:[Object(c.jsx)(o.B,{fontSize:"14px",children:e(10004,"Circulating Supply")}),O&&Object(c.jsx)(y,{fontSize:"14px",value:O,decimals:0})]}),Object(c.jsxs)(te,{children:[Object(c.jsx)(o.B,{fontSize:"14px",children:e(522240,"Fee on transfer")}),Object(c.jsxs)(o.B,{bold:!0,fontSize:"14px",children:[10,"%"]})]}),Object(c.jsxs)(te,{children:[Object(c.jsx)(o.B,{fontSize:"14px",children:e(531238,"Fees held")}),Object(c.jsx)(y,{fontSize:"14px",value:Object(H.a)(r),decimals:7})]}),Object(c.jsx)(te,{children:Object(c.jsx)(o.B,{bold:!0,fontSize:"14px",children:"  Fees will be sent to MasterChef to offset minting."})})]})})}),re=n(693);function ae(){var e=Object(r.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]);return ae=function(){return e},e}function ie(){var e=Object(r.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]);return ie=function(){return e},e}var oe=Object(i.e)(o.h)(ie()),se=(i.e.div(ae()),function(){var e=Object(s.a)();return Object(c.jsx)(oe,{children:Object(c.jsxs)(o.i,{children:[Object(c.jsx)(o.n,{size:"xl",mb:"24px",children:e(10003,"Announcements")}),Object(c.jsx)(re.a,{dataSource:{sourceType:"profile",screenName:"TheGooseSwap"},options:{height:"300",chrome:"noheader, nofooter",width:"400"}})]})})}),ue=n(126);function je(){var e=Object(r.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 48px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"]);return je=function(){return e},e}function be(){var e=Object(r.a)(["\n  align-items: center;\n  background-image: url('/images/egg/3.png');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  margin: auto;\n  margin-bottom: 32px;\n  padding-top: 116px;\n  text-align: center;\n\n  "," {\n    background-image: url('/images/egg/3.png'), url('/images/egg/3b.png');\n    background-position: left center, right center;\n    height: 165px;\n    padding-top: 0;\n  }\n"]);return be=function(){return e},e}var fe=i.e.div(be(),(function(e){return e.theme.mediaQueries.lg})),le=Object(i.e)(o.b)(je(),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),Oe=function(){var e=Object(s.a)(),t=Object(a.useContext)(ue.a).isDark;return Object(c.jsxs)(u.a,{children:[Object(c.jsxs)(fe,{children:[Object(c.jsx)(o.n,{as:"h1",size:"xl",mb:"24px",color:t?"#FFFFFF":"#000000",children:e(1111576,"GooseSwap . Finance")}),Object(c.jsx)(o.B,{children:e(578,"Top 3 best DEFI app on Binance Smart Chain.")})]}),Object(c.jsx)("div",{children:Object(c.jsxs)(le,{children:[Object(c.jsx)(q,{}),Object(c.jsx)(se,{}),Object(c.jsx)(ce,{})]})})]})}}}]);
//# sourceMappingURL=13.c75ec662.chunk.js.map