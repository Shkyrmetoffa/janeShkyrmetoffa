webpackHotUpdate(0,{

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(8);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var time = _react2.default.createElement('time', null, ' Time is ' + new Date().toLocaleTimeString());
var Component = _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
        'h1',
        null,
        ' Hello, react '
    ),
    ' ',
    _react2.default.createElement(Navigation, null)
);

/*React.createEle ment('h1', null, 'Hello? react easycode!', time);*/
_reactDom2.default.render(Component, document.getElementById('app'));

/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navigation = function Navigation() {
    return _react2.default.createElement(
        'nav',
        null,
        _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
                'li',
                null,
                ' Home '
            ),
            ' ',
            _react2.default.createElement(
                'li',
                null,
                ' Gallery '
            ),
            ' '
        ),
        ' '
    );
};

/***/ })

})
//# sourceMappingURL=0.b2ee16c802623c27c8ad.hot-update.js.map