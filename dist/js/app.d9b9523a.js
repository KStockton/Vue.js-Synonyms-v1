(function(e){function t(t){for(var r,s,c=t[0],i=t[1],u=t[2],d=0,f=[];d<c.length;d++)s=c[d],o[s]&&f.push(o[s][0]),o[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(f.length)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},2891:function(e,t,n){"use strict";var r=n("d97a"),o=n.n(r);o.a},3620:function(e,t,n){"use strict";var r=n("e806"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Header",{on:{change:e.changeWord}}),n("WordsContainer",{attrs:{error:e.error,loading:e.loading,results:e.results,word:e.word,welcome:e.welcome},on:{change:e.changeWord}})],1)},a=[],s=(n("96cf"),n("3b8d")),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",[r("img",{staticClass:"logo",attrs:{src:n("9479")}}),r("div",{staticClass:"input-container"},[r("input",{attrs:{placeholder:"Enter Word"},domProps:{value:e.word},on:{keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.$emit("change",e.word)},e.changeWord]}}),r("i",{staticClass:"material-icons search-symbol",attrs:{role:"button"},on:{click:function(t){return e.$emit("change",e.word)}}},[e._v("\n  search\n  ")])]),r("h3",[e._v("Thesaurus")])])},i=[],u={name:"Header",data:function(){return{word:""}},methods:{changeWord:function(e){this.word=e.target.value}},mounted:function(){this.$emit("change",this.word)}},l=u,d=(n("a405"),n("2877")),f=Object(d["a"])(l,c,i,!1,null,"19d5545c",null),p=f.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[!0===e.loading?n("Loading"):e.welcome?n("Welcome"):e.error||0===e.results.length?n("Error"):e.results[0].meta?n("Word",e._g({attrs:{results:e.results}},e.$listeners)):n("NoWord",e._g({attrs:{results:e.results,word:e.word}},e.$listeners))],1)},v=[],m=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},_=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loading-bg"},[n("h5",[e._v("Loading...")])])}],g={name:"Loading"},w=g,b=(n("5ca4"),Object(d["a"])(w,m,_,!1,null,"29f97f80",null)),y=b.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"word-container"},e._l(e.results,function(t){return n("article",{key:t,staticClass:"card-wrapper"},[n("header",[n("h1",[e._v(e._s(t.meta.id))]),n("h3",[n("span",[e._v(e._s(t.fl))])])]),n("div",{staticClass:"word-bottom-half"},e._l(t.def[0].sseq,function(r,o){return n("section",{key:o},[n("h5",[e._v(e._s(o+1)+". "+e._s(r[0][1].dt[0][1]))]),n("h3",[e._v("Synonyms")]),n("section",{staticClass:"syns-wrapper"},e._l(t.meta.syns[0],function(t){return n("button",{key:t,on:{click:function(n){return e.$emit("change",t)}}},[e._v("\n          "+e._s(t)+"\n        ")])}),0)])}),0)])}),0)},x=[],E={name:"Word",props:{results:Array}},k=E,O=(n("3620"),Object(d["a"])(k,j,x,!1,null,"b68ec700",null)),W=O.exports,$=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},C=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",[e._v("'Sorry no synonyms with that word "),n("span",{attrs:{"aria-label":"Emoji: cute dog"}},[e._v("🐶")]),e._v("'")])}],S={name:"Error"},P=S,L=Object(d["a"])(P,$,C,!1,null,null,null),T=L.exports,A=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},M=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"welcome-container"},[n("header",[n("h1",[e._v("Welcome")]),n("h3",[e._v("A Fast and easy way to view synonyms")]),n("h3",[e._v("Enter a word above to get started!")])])])}],B={name:"Welcome"},H=B,N=(n("2891"),Object(d["a"])(H,A,M,!1,null,"6cfde717",null)),J=N.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("h1",[e._v("Sorry "),n("span",{attrs:{"aria-label":"Emoji: shrug"}},[e._v("🤷🏾‍♂")]),e._v(' \n    no results found with "'+e._s(e.word)+'" '),n("span",{attrs:{"ria-label":"Emoji: head-exploding"}},[e._v(" 🤯")])]),n("h1",[e._v("Try a word below")]),n("ul",e._l(e.results,function(t){return n("li",{key:t},[n("button",{on:{click:function(n){return e.$emit("change",t)}}},[e._v(e._s(t))])])}),0)])},q=[],F={name:"NoWord",props:{results:Array,word:String}},z=F,D=(n("d2b1"),Object(d["a"])(z,R,q,!1,null,"ab8aa0ac",null)),G=D.exports,I={name:"WordsContainer",components:{Loading:y,Word:W,Error:T,Welcome:J,NoWord:G},props:{loading:Boolean,error:Boolean,results:Array,word:String,welcome:Boolean}},K=I,Q=Object(d["a"])(K,h,v,!1,null,null,null),U=Q.exports,V="https://www.dictionaryapi.com/api/v3/references/thesaurus/json/",X={name:"app",components:{Header:p,WordsContainer:U},data:function(){return{word:"",results:[],error:!1,loading:!1,welcome:!0}},methods:{changeWord:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var n,r,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=2;break}return e.abrupt("return");case 2:return this.word=t,e.prev=3,this.isLoading=!0,n="".concat(V).concat(this.word,"?key=").concat("3a24a84c-1f45-466a-b097-c4d753e588f5"),e.next=8,fetch(n);case 8:return r=e.sent,e.next=11,r.json();case 11:o=e.sent,o.length>0&&(this.welcome=!1),this.results=o,e.next=19;break;case 16:e.prev=16,e.t0=e["catch"](3),this.error=!0;case 19:this.isLoading=!1;case 20:case"end":return e.stop()}},e,this,[[3,16]])}));function t(t){return e.apply(this,arguments)}return t}()}},Y=X,Z=(n("034f"),Object(d["a"])(Y,o,a,!1,null,null,null)),ee=Z.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(ee)}}).$mount("#app")},"5a64":function(e,t,n){},"5ca4":function(e,t,n){"use strict";var r=n("84d4"),o=n.n(r);o.a},"64a9":function(e,t,n){},"84d4":function(e,t,n){},9479:function(e,t,n){e.exports=n.p+"img/microsoft-word-logo.d230a9bc.png"},a405:function(e,t,n){"use strict";var r=n("5a64"),o=n.n(r);o.a},d2b1:function(e,t,n){"use strict";var r=n("e8b0"),o=n.n(r);o.a},d97a:function(e,t,n){},e806:function(e,t,n){},e8b0:function(e,t,n){}});
//# sourceMappingURL=app.d9b9523a.js.map