parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/demo.jpg":[["demo.090c7c6d.jpg","nKR3"],"nKR3"]}],"lPBI":[function(require,module,exports) {
function o(o){return e(o)||r(o)||a(o)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(o){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(o))return Array.from(o)}function e(o){if(Array.isArray(o))return l(o)}function t(o,n){var r;if("undefined"==typeof Symbol||null==o[Symbol.iterator]){if(Array.isArray(o)||(r=a(o))||n&&o&&"number"==typeof o.length){r&&(o=r);var e=0,t=function(){};return{s:t,n:function(){return e>=o.length?{done:!0}:{done:!1,value:o[e++]}},e:function(o){throw o},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,i=!1;return{s:function(){r=o[Symbol.iterator]()},n:function(){var o=r.next();return c=o.done,o},e:function(o){i=!0,l=o},f:function(){try{c||null==r.return||r.return()}finally{if(i)throw l}}}}function a(o,n){if(o){if("string"==typeof o)return l(o,n);var r=Object.prototype.toString.call(o).slice(8,-1);return"Object"===r&&o.constructor&&(r=o.constructor.name),"Map"===r||"Set"===r?Array.from(o):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(o,n):void 0}}function l(o,n){(null==n||n>o.length)&&(n=o.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=o[r];return e}function c(o){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(o)}var i=null;console.log(c(i));var f=5;console.log(c(f));var u="random string";console.log(Number(u)),console.log(c(Number(u)));for(var s=3,y=0,v=0;v<=s;v+=1)y+=v;console.log(y);for(var m=10,g=0;g<m;g+=1)console.log("".concat(m," % ").concat(g," = "),m%g);for(var b=["Mango","Ajax","Poly"],p=0,d=b;p<d.length;p++){var h=d[p];console.log(h)}var S,A="javascript",j=t(A);try{for(j.s();!(S=j.n()).done;){var w=S.value;console.log(w)}}catch(D){j.e(D)}finally{j.f()}var I,x="javascriptevolytion",k=t(x);try{for(k.s();!(I=k.n()).done;){var H=I.value;console.log(H)}}catch(D){k.e(D)}finally{k.f()}for(var M=[[1,2,3],[4,5,6],[7,8,9]],O=0,T=0;T<M.length;T+=1){console.log("Подмассив матрицы matrix[i]: ",M[T]);for(var C=0;C<M[T].length;C+=1)console.log("Элемент подмассива матрицы matrix[i][j]: ",M[T][C]),O+=M[T][C]}console.log(O);var E=function(){console.log("Hello! :]")},F={name:"Resort Hotel",stars:5,capacity:100};for(var N in F)console.log("Value: ",F[N]);var P=["Arryn","Frey","Greyjoy","Stark","Lannister","Tyrell"],G=[].concat(o(P.slice(0,1)),["Frey of the Crossing"],o(P.slice(2)));console.log(G);var L=function(o){return function(n){console.log("".concat(o," is cooking ").concat(n))}},R=L("Mango");R("apple pie"),R("beef stew");var U=L("Poly");U("pancakes"),U("eggs and bacon");var V=function(){var o=0;return{increment:function(){o+=1,console.log(o)}}},$=V();$.increment(),$.increment();var q=V();function z(){var o="Hello, world!";return function(){console.log(o)}}q.increment(),q.increment(),q.increment();var B=z();B();
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/task_1.js");
},{"./sass/main.scss":"clu1","./js/task_1.js":"lPBI"}]},{},["Focm"], null)
//# sourceMappingURL=/task/src.00462143.js.map