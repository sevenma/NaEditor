!function(e){function n(n){for(var r,c,a=n[0],d=n[1],l=n[2],_=0,s=[];_<a.length;_++)c=a[_],o[c]&&s.push(o[c][0]),o[c]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);for(i&&i(n);s.length;)s.shift()();return u.push.apply(u,l||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,a=1;a<t.length;a++){var d=t[a];0!==o[d]&&(r=!1)}r&&(u.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},o={6:0},u=[];function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="//h5editor.cn:8080/";var a=window.webpackJsonp=window.webpackJsonp||[],d=a.push.bind(a);a.push=n,a=a.slice();for(var l=0;l<a.length;l++)n(a[l]);var i=d;u.push([269,0]),t()}({269:function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n(function () {\n    var enterModule = __webpack_require__(20).enterModule;\n\n    enterModule && enterModule(module);\n})();\n\n\n\nfunction num(state = 0, action) {\n    console.log(action);\n    switch (action.type) {\n        case 'add':\n            const { time } = action;\n            let result = state + 1;\n            return time;\n        default:\n            return state;\n    }\n}\n\nconst add = time => {\n    return {\n        type: 'add',\n        time\n    };\n};\n\nconst store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(num);\n\nstore.subscribe(function () {\n    document.querySelector('#num').innerHTML = store.getState();\n});\n\nconst btn = document.querySelector('#add');\n\nbtn.addEventListener('click', function () {\n    store.dispatch(add(Date.now()));\n});\n\nwindow.store = store;\n;\n\n(function () {\n    var reactHotLoader = __webpack_require__(20).default;\n\n    var leaveModule = __webpack_require__(20).leaveModule;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(num, 'num', 'D:/Project/NaEditor/src/page/learn/index.js');\n    reactHotLoader.register(add, 'add', 'D:/Project/NaEditor/src/page/learn/index.js');\n    reactHotLoader.register(store, 'store', 'D:/Project/NaEditor/src/page/learn/index.js');\n    reactHotLoader.register(btn, 'btn', 'D:/Project/NaEditor/src/page/learn/index.js');\n    leaveModule(module);\n})();\n\n;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(47)(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjY5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9wYWdlL2xlYXJuL2luZGV4LmpzPzkwYzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcblxuXG5mdW5jdGlvbiBudW0oc3RhdGUgPSAwLCBhY3Rpb24pIHtcbiAgICBjb25zb2xlLmxvZyhhY3Rpb24pXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlICdhZGQnOlxuICAgICAgICAgICAgY29uc3QgeyB0aW1lIH0gPSBhY3Rpb247XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gc3RhdGUgKyAxO1xuICAgICAgICAgICAgcmV0dXJuIHRpbWU7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuXG5jb25zdCBhZGQgPSAodGltZSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6ICdhZGQnLFxuICAgICAgICB0aW1lLFxuICAgIH1cbn1cblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShudW0pO1xuXG5zdG9yZS5zdWJzY3JpYmUoZnVuY3Rpb24oKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI251bScpLmlubmVySFRNTCA9IHN0b3JlLmdldFN0YXRlKCk7XG59KVxuXG5cbmNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQnKTtcblxuYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgc3RvcmUuZGlzcGF0Y2goYWRkKERhdGUubm93KCkpKTtcbn0pXG5cbndpbmRvdy5zdG9yZSA9IHN0b3JlOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQWhDQTtBQVlBO0FBT0E7QUFPQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///269\n")}});