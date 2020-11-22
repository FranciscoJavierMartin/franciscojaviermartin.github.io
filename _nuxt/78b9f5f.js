(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{223:function(t,e,n){"use strict";var r=n(14),l=n(3),c=n(71),o=n(17),d=n(13),f=n(26),v=n(161),m=n(69),h=n(6),_=n(107),x=n(106).f,w=n(36).f,y=n(16).f,P=n(230).trim,C=l.Number,N=C.prototype,S="Number"==f(_(N)),k=function(t){var e,n,r,l,c,o,d,code,f=m(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=P(f)).charCodeAt(0))||45===e){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:r=2,l=49;break;case 79:case 111:r=8,l=55;break;default:return+f}for(o=(c=f.slice(2)).length,d=0;d<o;d++)if((code=c.charCodeAt(d))<48||code>l)return NaN;return parseInt(c,r)}return+f};if(c("Number",!C(" 0o1")||!C("0b1")||C("+0x1"))){for(var A,E=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof E&&(S?h((function(){N.valueOf.call(n)})):"Number"!=f(n))?v(new C(k(e)),n,E):k(e)},I=r?x(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),F=0;I.length>F;F++)d(C,A=I[F])&&!d(E,A)&&y(E,A,w(C,A));E.prototype=N,N.constructor=E,o(l,"Number",E)}},224:function(t,e,n){"use strict";n.r(e);n(223);var r={name:"ArticleList",components:{Pagination:n(225).default},props:{articles:{type:Array,default:Array},total:{type:Number,default:0}}},l=n(7),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",{staticClass:"text-gray-500 max-w-5xl mx-auto"},t._l(t.articles,(function(article){return n("li",{key:article.slug,staticClass:"mb-12 bg-white p-5 rounded shadow"},[n("NuxtLink",{staticClass:"md:grid md:gap-4 md:grid-cols-2",attrs:{to:{name:"articles-slug",params:{slug:article.slug}}}},[article.image?n("img",{staticClass:"mb-4 border rounded",attrs:{src:article.image,alt:""}}):t._e(),t._v(" "),n("div",[n("h2",{staticClass:"font-bold text-gray-900 text-2xl mb-2"},[t._v("\n            "+t._s(article.title)+"\n          ")]),t._v(" "),n("p",{staticClass:"text-lg"},[t._v(t._s(article.description))]),t._v(" "),n("p",{staticClass:"font-bold text-indigo-600 mt-2"},[t._v("\n            Read more"),n("span",{staticClass:"text-indigo-600"},[t._v("…")])])])])],1)})),0),t._v(" "),t.total?n("div",{staticClass:"constainer mx-auto my-5 max-w-5xl"},[t.total>5?n("Pagination",{attrs:{total:t.total}}):t._e()],1):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Pagination:n(225).default})},225:function(t,e,n){"use strict";n.r(e);n(223);var r=n(226),l=n(227),c=n(228),o=n(229),d={name:"Pagination",components:{DoubleFwd:r.default,DoubleBack:l.default,SingleFwd:c.default,SingleBack:o.default},props:{total:{type:Number,default:0},perPage:{type:Number,default:5}},computed:{buttonStyles:function(){return"border rounded px-4 py-1 text-sm bg-white flex justify-center items-center sm:uppercase hover:bg-blue-500 hover:text-white transform duration-500 ease-in-out"},disabledStyle:function(){return"border rounded px-4 py-1 text-sm bg-white flex justify-center items-center sm:uppercase text-gray-300"},totalPages:function(){return Math.ceil(this.total/this.perPage)},currentPage:function(){return parseInt(this.$route.params.page)||1},prevPage:function(){return this.currentPage>1?this.currentPage-1:1},nextPage:function(){return this.currentPage<this.totalPages?this.currentPage+1:this.totalPages}}},f=n(7),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid gap-4 grid-cols-4"},[1===t.currentPage?n("div",{class:t.disabledStyle},[n("span",{staticClass:"hidden sm:inline"},[t._v("First")]),t._v(" "),n("SingleBack")],1):n("nuxt-link",{class:t.buttonStyles,attrs:{to:{name:"articles-page-page",params:{page:1}}}},[n("DoubleBack"),t._v(" "),n("span",{staticClass:"hidden sm:inline"},[t._v("First")])],1),t._v(" "),1===t.currentPage?n("div",{class:t.disabledStyle},[n("span",{staticClass:"hidden sm:inline"},[t._v("Prev")]),t._v(" "),n("SingleBack")],1):n("nuxt-link",{class:t.buttonStyles,attrs:{to:{name:"articles-page-page",params:{page:t.prevPage}}}},[n("SingleBack"),t._v(" "),n("span",{staticClass:"hidden sm:inline"},[t._v("Prev")])],1),t._v(" "),t.currentPage===t.totalPages?n("div",{class:t.disabledStyle},[n("span",{staticClass:"hidden sm:inline"},[t._v("Next")]),t._v(" "),n("SingleFwd")],1):n("nuxt-link",{class:t.buttonStyles,attrs:{to:{name:"articles-page-page",params:{page:t.nextPage}}}},[n("span",{staticClass:"hidden sm:inline"},[t._v("Next")]),t._v(" "),n("SingleFwd")],1),t._v(" "),t.currentPage===t.totalPages?n("div",{class:t.disabledStyle},[n("span",{staticClass:"hidden sm:inline"},[t._v("Last")]),t._v(" "),n("DoubleFwd")],1):n("nuxt-link",{class:t.buttonStyles,attrs:{to:{name:"articles-page-page",params:{page:t.totalPages}}}},[n("span",{staticClass:"hidden sm:inline"},[t._v("Last")]),t._v(" "),n("DoubleFwd")],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SingleBack:n(229).default,DoubleBack:n(227).default,SingleFwd:n(228).default,DoubleFwd:n(226).default})},226:function(t,e,n){"use strict";n.r(e);var r={name:"DoubleFwd"},l=n(7),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"fill-current w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("title",[this._v("Last Page")]),this._v(" "),e("path",{attrs:{"fill-rule":"evenodd",d:"M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z","clip-rule":"evenodd"}}),this._v(" "),e("path",{attrs:{"fill-rule":"evenodd",d:"M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},227:function(t,e,n){"use strict";n.r(e);var r={name:"DoubleBack"},l=n(7),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"fill-current w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("title",[this._v("First Page")]),this._v(" "),e("path",{attrs:{"fill-rule":"evenodd",d:"M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},228:function(t,e,n){"use strict";n.r(e);var r={name:"SingleFwd"},l=n(7),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"fill-current w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("title",[this._v("Forward")]),this._v(" "),e("path",{attrs:{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},229:function(t,e,n){"use strict";n.r(e);var r={name:"SingleBack"},l=n(7),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"fill-current w-5 h-5",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[e("title",[this._v("Back")]),this._v(" "),e("path",{attrs:{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},230:function(t,e,n){var r=n(12),l="["+n(231)+"]",c=RegExp("^"+l+l+"*"),o=RegExp(l+l+"*$"),d=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:d(1),end:d(2),trim:d(3)}},231:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},232:function(t,e,n){"use strict";n(25);var r=n(5);e.a=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r){var l,c,o,d,f,v,m,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l=parseInt(n.page),c=5,t.next=4,e("articles").fetch();case 4:return o=t.sent,d=o.length,f=Math.ceil(d/c),v=d%c,m=function(){return 1===l?0:l===f?d-v:(l-1)*c},t.next=11,e("articles").only(["title","description","image","slug","published"]).sortBy("published","desc").limit(c).skip(m()).fetch();case 11:if(h=t.sent,0!==l&&h.length){t.next=14;break}return t.abrupt("return",r({statusCode:404,message:"No articles found!"}));case 14:return t.abrupt("return",{allArticles:o,paginatedArticles:h});case 15:case"end":return t.stop()}}),t)})));return function(e,n,r){return t.apply(this,arguments)}}()},258:function(t,e,n){"use strict";n.r(e);n(25);var r=n(5),l=n(232),c={name:"HomePage",components:{ArticleList:n(224).default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,content;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.app,r=t.params,c=t.error,e.next=3,Object(l.a)(n,r,c);case 3:return content=e.sent,e.abrupt("return",{allArticles:content.allArticles,paginatedArticles:content.paginatedArticles});case 5:case"end":return e.stop()}}),e)})))()}},o=n(7),component=Object(o.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("ArticleList",{attrs:{articles:this.paginatedArticles,total:this.allArticles.length}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ArticleList:n(224).default})}}]);