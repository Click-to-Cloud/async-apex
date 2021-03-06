var pageComponent =
webpackJsonppageComponent([3],{

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

__webpack_require__(16);

var _step_4Soy = __webpack_require__(283);

var _step_4Soy2 = _interopRequireDefault(_step_4Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var drsul = function (_Component) {
  _inherits(drsul, _Component);

  function drsul() {
    _classCallCheck(this, drsul);

    return _possibleConstructorReturn(this, (drsul.__proto__ || Object.getPrototypeOf(drsul)).apply(this, arguments));
  }

  return drsul;
}(_metalComponent2.default);

;

_metalSoy2.default.register(drsul, _step_4Soy2.default);

exports.default = drsul;

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.drsul = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from step_4.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace drsul.
   * @public
   */

  goog.module('drsul.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('soy.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  var $templateAlias2 = _metalSoy2.default.getTemplate('ElectricCode.incrementaldom', 'render');

  var $templateAlias1 = _metalSoy2.default.getTemplate('tutorial.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?),
   *    elementClasses: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param441 = function param441() {
      ie_open('h2');
      var dyn33 = opt_data.page.title;
      if (typeof dyn33 == 'function') dyn33();else if (dyn33 != null) itext(dyn33);
      ie_close('h2');
      ie_open('p');
      itext('We have corresponding terms for ');
      ie_open('strong');
      itext('then/catch/finally');
      ie_close('strong');
      itext(' in Async.apex: ');
      ie_open('strong');
      itext('then/error/done');
      ie_close('strong');
      itext('. Their usages are the same.');
      ie_close('p');
      $templateAlias2({ code: 'promise.then(R.debug)\n    .error(new ReportFunc())\n    .done(new CleanupFunc())\n    .fork();', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      ie_open('strong');
      itext('Important');
      ie_close('strong');
      itext(' is that differently from promises, Async instances are lazy, which means that we need to ');
      ie_open('strong');
      itext('fork');
      ie_close('strong');
      itext(' them to trigger the execution.');
      ie_close('p');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param441 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'drsul.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var drsul = function (_Component) {
  _inherits(drsul, _Component);

  function drsul() {
    _classCallCheck(this, drsul);

    return _possibleConstructorReturn(this, (drsul.__proto__ || Object.getPrototypeOf(drsul)).apply(this, arguments));
  }

  return drsul;
}(_metalComponent2.default);

_metalSoy2.default.register(drsul, templates);
exports.drsul = drsul;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[282]);