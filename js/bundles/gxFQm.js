var pageComponent =
webpackJsonppageComponent([11],{

/***/ 272:
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

var _indexSoy = __webpack_require__(273);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var gxFQm = function (_Component) {
  _inherits(gxFQm, _Component);

  function gxFQm() {
    _classCallCheck(this, gxFQm);

    return _possibleConstructorReturn(this, (gxFQm.__proto__ || Object.getPrototypeOf(gxFQm)).apply(this, arguments));
  }

  return gxFQm;
}(_metalComponent2.default);

;

_metalSoy2.default.register(gxFQm, _indexSoy2.default);

exports.default = gxFQm;

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.gxFQm = undefined;

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

  // This file was automatically generated from index.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace gxFQm.
   * @public
   */

  goog.module('gxFQm.incrementaldom');

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

  var $templateAlias1 = _metalSoy2.default.getTemplate('guide.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param457 = function param457() {
      ie_open('h6');
      var dyn34 = opt_data.page.description;
      if (typeof dyn34 == 'function') dyn34();else if (dyn34 != null) itext(dyn34);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('How to Create an Async?');
      ie_close('h2');
      ie_open('p');
      itext('Below are all the ways to create an Async.');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Method');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('new Async(Async.Executor)');
      ie_close('td');
      ie_open('td');
      itext('Create an Async with an Async.Executor');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('new Async(Func)');
      ie_close('td');
      ie_open('td');
      itext('Create an Async with a Func');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Async.resolve(Object)');
      ie_close('td');
      ie_open('td');
      itext('Create a resolved Async returning the value');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Async.reject(Object)');
      ie_close('td');
      ie_open('td');
      itext('Create a rejected Async returning the error');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('How to Query an Async?');
      ie_close('h2');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Method');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('isPending()');
      ie_close('td');
      ie_open('td');
      itext('Check if the Async is pending');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('isResolved()');
      ie_close('td');
      ie_open('td');
      itext('Check if the Async is fulfilled');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('isRejected()');
      ie_close('td');
      ie_open('td');
      itext('check if the Async is rejected');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('How to Chain an Async?');
      ie_close('h2');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Method');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('then(Func, Func)');
      ie_close('td');
      ie_open('td');
      itext('Add the success handler and the error handler');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('then(Func)');
      ie_close('td');
      ie_open('td');
      itext('Add the success handler');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('error(Func)');
      ie_close('td');
      ie_open('td');
      itext('Add the error handler');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('done(Func)');
      ie_close('td');
      ie_open('td');
      itext('Add the handler as the success handler and error handler');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('fork()');
      ie_close('td');
      ie_open('td');
      itext('Trigger the Async to execute');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param457 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'gxFQm.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var gxFQm = function (_Component) {
  _inherits(gxFQm, _Component);

  function gxFQm() {
    _classCallCheck(this, gxFQm);

    return _possibleConstructorReturn(this, (gxFQm.__proto__ || Object.getPrototypeOf(gxFQm)).apply(this, arguments));
  }

  return gxFQm;
}(_metalComponent2.default);

_metalSoy2.default.register(gxFQm, templates);
exports.gxFQm = gxFQm;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[272]);