(function(e){function t(t){for(var l,r,c=t[0],s=t[1],i=t[2],d=0,_=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&_.push(a[r][0]),a[r]=0;for(l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l]);u&&u(t);while(_.length)_.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],l=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(l=!1)}l&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var l={},a={app:0},o=[];function r(t){if(l[t])return l[t].exports;var n=l[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=l,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)r.d(n,l,function(t){return e[t]}.bind(null,l));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/magic_cleaner/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"05e0":function(e,t,n){"use strict";n("ab6d")},"1d76":function(e,t,n){e.exports=n.p+"img/unnamed.68b195a1.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("4de4"),n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("0cdd");var l=n("2b0e"),a=n("5f5b");n("ab8b"),n("2dd8");l["default"].use(a["a"]);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("HelloWorld")],1)},r=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content container d-flex justify-content-center align-items-center"},[n("div",{staticClass:"d-flex justify-content-center row"},[n("h1",{staticClass:"d-none"},[e._v("Magic Cleaner")]),e._m(0),n("h3",{staticClass:"col-12 col-sm-10 col-xl-7 col-lg-8 col-md-10 text-center"},[e._v(e._s(e._f("localize")("translate_element_1")))]),n("p",{staticClass:"col-12 col-sm-10 col-xl-7 col-lg-8 col-md-10 text-center"},[e._v(e._s(e._f("localize")("translate_element_2")))]),n("ul",{staticClass:"col-12 col-sm-10 col-md-10 col-lg-8 col-xl-7"},[n("li",[e._v(e._s(e._f("localize")("translate_element_3")))]),n("li",[e._v(e._s(e._f("localize")("translate_element_4")))]),n("li",[e._v(e._s(e._f("localize")("translate_element_5")))]),n("li",[e._v(e._s(e._f("localize")("translate_element_6")))]),n("li",[e._v(e._s(e._f("localize")("translate_element_7")))])]),n("div",{staticClass:"col-12 col-xl-7 col-lg-8 col-md-10 col-sm-10 foot"},[n("ol",[n("li",[e._v(e._s(e._f("localize")("translate_element_8")))]),n("li",[e._v(e._s(e._f("localize")("translate_element_9")))])]),n("a",{staticClass:"text-center d-block w-100",attrs:{href:"https://www.google.com/"}},[e._v(e._s(e._f("localize")("translate_element_10")))])]),n("div",{staticClass:"custom-control custom-switch"},[n("label",{staticClass:"en"},[e._v("en")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.isRuLocale,expression:"isRuLocale"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customSwitch1"},domProps:{checked:Array.isArray(e.isRuLocale)?e._i(e.isRuLocale,null)>-1:e.isRuLocale},on:{change:function(t){var n=e.isRuLocale,l=t.target,a=!!l.checked;if(Array.isArray(n)){var o=null,r=e._i(n,o);l.checked?r<0&&(e.isRuLocale=n.concat([o])):r>-1&&(e.isRuLocale=n.slice(0,r).concat(n.slice(r+1)))}else e.isRuLocale=a}}}),n("label",{staticClass:"custom-control-label",attrs:{for:"customSwitch1"}},[e._v("ru")])])])])},s=[function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"mx-auto col-12 d-flex justify-content-center"},[l("img",{attrs:{src:n("1d76"),alt:"",height:"90px",width:"90px"}})])}],i={name:"HelloWorld",data:function(){return{isRuLocale:!0}}};localStorage.setItem("greeted",!0),!0!==localStorage.getItem("greeted")&&alert("Пам пам");var u=function(){var e;function t(){window.location.href="https://www.google.com/"}function n(){clearTimeout(e),e=setTimeout(t,1e4)}window.onload=n,document.onload=n,document.onmousemove=n,document.onmousedown=n,document.ontouchstart=n,document.onclick=n,document.onkeydown=n,document.addEventListener("scroll",n,!0)};window.onload=function(){u()};var d=i,_=(n("05e0"),n("2877")),m=Object(_["a"])(d,c,s,!1,null,"0dab64ff",null),f=m.exports,p={name:"App",components:{HelloWorld:f}},h=p,v=(n("5c0b"),Object(_["a"])(h,o,r,!1,null,null,null)),g=v.exports,b=n("af87"),y=n("7704"),w=n("edd4"),x={"ru-RU":y,"en-US":w};function C(e){var t,n;return Object(b["setTimeout"])(t=document.getElementById("customSwitch1"),1),null==t?n=navigator.language:0==t.checked?n="en-US":1==t.checked&&(n="ru-RU"),x[n][e]}l["default"].config.productionTip=!1,l["default"].filter("localize",C),new l["default"]({render:function(e){return e(g)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},7704:function(e){e.exports=JSON.parse('{"translate_element_1":"Ускорьте свой мобильный на 50% одним касанием!","translate_element_2":"Magic Cleaner - это утилита для ускорения работы вашего телефона и оптимизации его работы. Этот ускоритель скорости в полной мере использует службу специальных возможностей, чтобы полностью и надолго остановить ненужный процесс запуска приложений в фоновом режиме.","translate_element_3":" Очистите память и сделайте телефон быстрее","translate_element_4":" Ускорьте память за секунды","translate_element_5":" Помимо остановки работающего приложения","translate_element_6":" Очиститель нежелательных файлов","translate_element_7":" Существует также список игнорирования, в который вы можете добавлять приложения, которые вы хотите продолжить.","translate_element_8":"Нажмите кнопку «Скачать» и установите Magic Cleaner прямо сейчас!","translate_element_9":"Откройте приложение и наслаждайтесь!","translate_element_10":"СКАЧАТЬ"}')},"9c0c":function(e,t,n){},ab6d:function(e,t,n){},edd4:function(e){e.exports=JSON.parse('{"translate_element_1":"Boost your mobile 50% with just 1-tap!","translate_element_2":"Magic Cleaner is a utility to speed up your phone and optimize performance. This speed booster make full use of the accessibility service to thoroughly and durably stop the unnecessary process of running apps in background.","translate_element_3":" Clean up the memory and make phone faster","translate_element_4":" Speed up memory in seconds","translate_element_5":" Besides stopping the running app","translate_element_6":" Junk File Cleaner","translate_element_7":" There is also the ignore list for you to add apps you want to keep running","translate_element_8":"Tap «Download» button and install Magic Cleaner right now!","translate_element_9":"Open application and enjoy!","translate_element_10":"DOWNLOAD"}')}});
//# sourceMappingURL=app.3c3f1266.js.map