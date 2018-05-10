var pageComponent =
webpackJsonppageComponent([4],{

/***/ 280:
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

var _step_3Soy = __webpack_require__(281);

var _step_3Soy2 = _interopRequireDefault(_step_3Soy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UgRRb = function (_Component) {
  _inherits(UgRRb, _Component);

  function UgRRb() {
    _classCallCheck(this, UgRRb);

    return _possibleConstructorReturn(this, (UgRRb.__proto__ || Object.getPrototypeOf(UgRRb)).apply(this, arguments));
  }

  return UgRRb;
}(_metalComponent2.default);

;

_metalSoy2.default.register(UgRRb, _step_3Soy2.default);

exports.default = UgRRb;

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.UgRRb = undefined;

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

  // This file was automatically generated from step_3.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace UgRRb.
   * @public
   */

  goog.module('UgRRb.incrementaldom');

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
    var param352 = function param352() {
      ie_open('h2');
      var dyn29 = opt_data.page.title;
      if (typeof dyn29 == 'function') dyn29();else if (dyn29 != null) itext(dyn29);
      ie_close('h2');
      ie_open('p');
      itext('An Async.Executor is a piece of code that runs asynchronously. In Async.apex, all codes that run asynchronously need to be placed in Async.Executor.');
      ie_close('p');
      ie_open('p');
      itext('To create an Async by using an Async Executor, we will create an Executor first.');
      ie_close('p');
      $templateAlias2({ code: 'public class HelloWorldExecutor extends Async.Executor {\n    public HelloWorldExecutor() {\n        super(0);\n    }\n\n    public override Object exec() {\n        this.resolve(\'HelloWorld\');\n    }\n}', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Async.Executor is somehow similar with Func, right? It is because Async.Executor is just a subclass of Func. The difference lies in that Async.Executor provides two extra methods: ');
      ie_open('code');
      itext('resolve');
      ie_close('code');
      itext(' and ');
      ie_open('code');
      itext('reject');
      ie_close('code');
      itext('.');
      ie_close('p');
      ie_open('p');
      itext('By invoking ');
      ie_open('code');
      itext('this.resolve(Object)');
      ie_close('code');
      itext(', we notify the Async with the success value, while by invoking ');
      ie_open('code');
      itext('this.reject(Object)');
      ie_close('code');
      itext(' we notify the Async with the error.');
      ie_close('p');
      ie_open('p');
      itext('Then we create an Async like this:');
      ie_close('p');
      $templateAlias2({ code: 'Async promise = new Async(new HelloWorldExecutor());', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Most of the time, we have an alternative, which is based on Funcs from R.apex.');
      ie_close('p');
      $templateAlias2({ code: 'public class HelloWorldFunc extends Func {\n    public HelloWorldFunc() {\n        super(0);\n    }\n\n    public override Object exec() {\n        return \'HelloWorld\';\n    }\n}\n\nAsync promise = new Async(new HelloWorldFunc());', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('These two version are equivalent.');
      ie_close('p');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param352 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'UgRRb.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var UgRRb = function (_Component) {
  _inherits(UgRRb, _Component);

  function UgRRb() {
    _classCallCheck(this, UgRRb);

    return _possibleConstructorReturn(this, (UgRRb.__proto__ || Object.getPrototypeOf(UgRRb)).apply(this, arguments));
  }

  return UgRRb;
}(_metalComponent2.default);

_metalSoy2.default.register(UgRRb, templates);
exports.UgRRb = UgRRb;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[280]);