webpackHotUpdate(0,{

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var paint = function paint() {
    var time = _react2.default.createElement('time', null, ' Time is ' + new Date().toLocaleTimeString());

    var component = _react2.default.createElement(
        'h1',
        null,
        ' HEllo '
    );
    /*React.createElement('h1', null, 'Hello? react easycode!', time);*/
    _reactDom2.default.render(component, document.getElementById('app'));
};
setInterval(paint, 1000);

/***/ })

})
//# sourceMappingURL=0.e812bb48e8547eebc4d6.hot-update.js.map