(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{233:function(t,e,r){"use strict";var n=r(2),o=r(3),c=r(30),l=r(22),f=r(14),d=r(114),m=r(165),y=r(6),h=r(13),v=r(73),w=r(10),x=r(8),S=r(20),O=r(27),_=r(69),j=r(53),k=r(107),C=r(78),P=r(106),N=r(239),$=r(112),E=r(36),I=r(16),D=r(108),F=r(18),T=r(17),J=r(109),U=r(76),A=r(77),L=r(110),R=r(4),W=r(234),B=r(240),H=r(80),Q=r(37),z=r(28).forEach,G=U("hidden"),K=R("toPrimitive"),M=Q.set,V=Q.getterFor("Symbol"),X=Object.prototype,Y=o.Symbol,Z=c("JSON","stringify"),tt=E.f,et=I.f,nt=N.f,it=D.f,ot=J("symbols"),at=J("op-symbols"),st=J("string-to-symbol-registry"),ct=J("symbol-to-string-registry"),lt=J("wks"),ut=o.QObject,pt=!ut||!ut.prototype||!ut.prototype.findChild,ft=f&&y((function(){return 7!=k(et({},"a",{get:function(){return et(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=tt(X,e);n&&delete X[e],et(t,e,r),n&&t!==X&&et(X,e,n)}:et,gt=function(t,e){var symbol=ot[t]=k(Y.prototype);return M(symbol,{type:"Symbol",tag:t,description:e}),f||(symbol.description=e),symbol},mt=m?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Y},yt=function(t,e,r){t===X&&yt(at,e,r),x(t);var n=_(e,!0);return x(r),h(ot,n)?(r.enumerable?(h(t,G)&&t[G][n]&&(t[G][n]=!1),r=k(r,{enumerable:j(0,!1)})):(h(t,G)||et(t,G,j(1,{})),t[G][n]=!0),ft(t,n,r)):et(t,n,r)},ht=function(t,e){x(t);var r=O(e),n=C(r).concat(xt(r));return z(n,(function(e){f&&!vt.call(r,e)||yt(t,e,r[e])})),t},vt=function(t){var e=_(t,!0),r=it.call(this,e);return!(this===X&&h(ot,e)&&!h(at,e))&&(!(r||!h(this,e)||!h(ot,e)||h(this,G)&&this[G][e])||r)},bt=function(t,e){var r=O(t),n=_(e,!0);if(r!==X||!h(ot,n)||h(at,n)){var o=tt(r,n);return!o||!h(ot,n)||h(r,G)&&r[G][n]||(o.enumerable=!0),o}},wt=function(t){var e=nt(O(t)),r=[];return z(e,(function(t){h(ot,t)||h(A,t)||r.push(t)})),r},xt=function(t){var e=t===X,r=nt(e?at:O(t)),n=[];return z(r,(function(t){!h(ot,t)||e&&!h(X,t)||n.push(ot[t])})),n};(d||(T((Y=function(){if(this instanceof Y)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=L(t),r=function(t){this===X&&r.call(at,t),h(this,G)&&h(this[G],e)&&(this[G][e]=!1),ft(this,e,j(1,t))};return f&&pt&&ft(X,e,{configurable:!0,set:r}),gt(e,t)}).prototype,"toString",(function(){return V(this).tag})),T(Y,"withoutSetter",(function(t){return gt(L(t),t)})),D.f=vt,I.f=yt,E.f=bt,P.f=N.f=wt,$.f=xt,W.f=function(t){return gt(R(t),t)},f&&(et(Y.prototype,"description",{configurable:!0,get:function(){return V(this).description}}),l||T(X,"propertyIsEnumerable",vt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!d,sham:!d},{Symbol:Y}),z(C(lt),(function(t){B(t)})),n({target:"Symbol",stat:!0,forced:!d},{for:function(t){var e=String(t);if(h(st,e))return st[e];var symbol=Y(e);return st[e]=symbol,ct[symbol]=e,symbol},keyFor:function(t){if(!mt(t))throw TypeError(t+" is not a symbol");if(h(ct,t))return ct[t]},useSetter:function(){pt=!0},useSimple:function(){pt=!1}}),n({target:"Object",stat:!0,forced:!d,sham:!f},{create:function(t,e){return void 0===e?k(t):ht(k(t),e)},defineProperty:yt,defineProperties:ht,getOwnPropertyDescriptor:bt}),n({target:"Object",stat:!0,forced:!d},{getOwnPropertyNames:wt,getOwnPropertySymbols:xt}),n({target:"Object",stat:!0,forced:y((function(){$.f(1)}))},{getOwnPropertySymbols:function(t){return $.f(S(t))}}),Z)&&n({target:"JSON",stat:!0,forced:!d||y((function(){var symbol=Y();return"[null]"!=Z([symbol])||"{}"!=Z({a:symbol})||"{}"!=Z(Object(symbol))}))},{stringify:function(t,e,r){for(var n,o=[t],c=1;arguments.length>c;)o.push(arguments[c++]);if(n=e,(w(e)||void 0!==t)&&!mt(t))return v(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!mt(e))return e}),o[1]=e,Z.apply(null,o)}});Y.prototype[K]||F(Y.prototype,K,Y.prototype.valueOf),H(Y,"Symbol"),A[G]=!0},234:function(t,e,r){var n=r(4);e.f=n},235:function(t,e,r){"use strict";var n=r(2),o=r(14),c=r(3),l=r(13),f=r(10),d=r(16).f,m=r(163),y=c.Symbol;if(o&&"function"==typeof y&&(!("description"in y.prototype)||void 0!==y().description)){var h={},v=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof v?new y(t):void 0===t?y():y(t);return""===t&&(h[e]=!0),e};m(v,y);var w=v.prototype=y.prototype;w.constructor=v;var x=w.toString,S="Symbol(test)"==String(y("test")),O=/^Symbol\((.*)\)[^)]+$/;d(w,"description",{configurable:!0,get:function(){var symbol=f(this)?this.valueOf():this,t=x.call(symbol);if(l(h,symbol))return"";var desc=S?t.slice(7,-1):t.replace(O,"$1");return""===desc?void 0:desc}}),n({global:!0,forced:!0},{Symbol:v})}},239:function(t,e,r){var n=r(27),o=r(106).f,c={}.toString,l="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return l&&"[object Window]"==c.call(t)?function(t){try{return o(t)}catch(t){return l.slice()}}(t):o(n(t))}},240:function(t,e,r){var path=r(164),n=r(13),o=r(234),c=r(16).f;t.exports=function(t){var e=path.Symbol||(path.Symbol={});n(e,t)||c(e,t,{value:o.f(t)})}},252:function(t,e,r){"use strict";r.r(e);var n={name:"PrevNext",props:{prev:{type:Object,default:null},next:{type:Object,default:null}},computed:{linkStyles:function(){return"bg-indigo-400 text-white px-4 py-1 hover:bg-indigo-500 transform duration-500 ease-in-out"}}},o=r(7),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.prev||t.next?r("div",{staticClass:"flex justify-between"},[t.prev?r("NuxtLink",{class:t.linkStyles,attrs:{to:{name:"articles-slug",params:{slug:t.prev.slug}}}},[t._v("\n    "+t._s(t.prev.title)+"\n  ")]):r("span",[t._v(" ")]),t._v(" "),t.next?r("NuxtLink",{class:t.linkStyles,attrs:{to:{name:"articles-slug",params:{slug:t.next.slug}}}},[t._v("\n    "+t._s(t.next.title)+"\n  ")]):r("span",[t._v(" ")])],1):t._e()}),[],!1,null,null,null);e.default=component.exports},254:function(t,e,r){"use strict";r.r(e);r(233),r(235),r(70),r(11),r(52);var n=r(66),o=r(47),c=(r(25),r(5)),l=r(118),f={name:"ArticlePage",asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,n,article,c,l,f,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,n=t.params,e.next=3,r("articles",n.slug).fetch();case 3:return article=e.sent,e.next=6,r("articles").only(["title","slug","published"]).sortBy("published","desc").surround(n.slug).fetch();case 6:return c=e.sent,l=Object(o.a)(c,2),f=l[0],d=l[1],e.abrupt("return",{article:article,prev:f,next:d});case 11:case"end":return e.stop()}}),e)})))()},computed:{meta:function(){return function(meta){return[{hid:"description",name:"description",content:meta&&meta.description||l.a.siteDesc},{hid:"og:type",property:"og:type",content:meta&&meta.type||l.a.siteType},{hid:"og:url",property:"og:url",content:meta&&meta.url||l.a.siteUrl},{hid:"og:title",property:"og:title",content:meta&&meta.title||l.a.siteTitle},{hid:"og:description",property:"og:description",content:meta&&meta.description||l.a.siteDesc},{hid:"og:image",property:"og:image",content:meta&&meta.mainImage||l.a.mainImage},{hid:"twitter:url",name:"twitter:url",content:meta&&meta.url||l.a.siteUrl},{hid:"twitter:title",name:"twitter:title",content:meta&&meta.title||l.a.siteTitle},{hid:"twitter:description",name:"twitter:description",content:meta&&meta.description||l.a.siteDesc},{hid:"twitter:image",name:"twitter:image",content:meta&&meta.mainImage||l.a.mainImage}]}({type:"article",title:this.article.title,description:this.article.description,url:"".concat(this.$config.baseUrl,"/articles/").concat(this.$route.params.slug),mainImage:this.article.image})}},head:function(){return{title:this.article.title,meta:[].concat(Object(n.a)(this.meta),[{property:"article:published_time",content:this.article.createdAt},{property:"article:modified_time",content:this.article.updatedAt},{property:"article:tag",content:this.article.tags?this.article.tags.toString():""},{name:"twitter:label1",content:"Written by"},{name:"twitter:data1",content:l.a.author||""},{name:"twitter:label2",content:"Filed under"},{name:"twitter:data2",content:this.article.tags?this.article.tags.toString():""}]),link:[{hid:"canonical",rel:"canonical",href:"".concat(this.$config.baseUrl,"/articles/").concat(this.$route.params.slug)}]}}},d=r(7),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",[r("header",{staticClass:"text-white mx-auto text-xs"},[r("div",{staticClass:"p-5 bg-indigo-500 md:inline-block"},[r("p",[r("span",{staticClass:"uppercase"},[t._v("Published:")]),t._v(" "),r("span",[t._v(t._s(t.article.published))])]),t._v(" "),r("div",{staticClass:"flex"},[r("span",{staticClass:"mr-1 uppercase"},[t._v("Filed under:")]),t._v(" "),r("ul",{staticClass:"flex"},t._l(t.article.tags,(function(e){return r("li",{key:e,staticClass:"mr-2"},[r("nuxt-link",{staticClass:"hover:underline",attrs:{to:{name:"tags-tag",params:{tag:e.toLowerCase()}}}},[t._v("\n              "+t._s(e)+"\n            ")])],1)})),0)])])]),t._v(" "),r("div",{staticClass:"prose prose-lg text-gray-500 bg-white p-5 rounded mx-auto"},[r("nuxt-content",{attrs:{document:t.article}})],1),t._v(" "),r("footer",{staticClass:"py-5 mt-5"},[r("prev-next",{attrs:{prev:t.prev,next:t.next}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:r(64).default,PrevNext:r(252).default,Footer:r(65).default})}}]);