'use strict';

var _omit2 = require('lodash-compat/object/omit');

var _omit3 = _interopRequireDefault(_omit2);

var _pick2 = require('lodash-compat/object/pick');

var _pick3 = _interopRequireDefault(_pick2);

var _filter2 = require('lodash-compat/collection/filter');

var _filter3 = _interopRequireDefault(_filter2);

var _map2 = require('lodash-compat/collection/map');

var _map3 = _interopRequireDefault(_map2);

var _noop2 = require('lodash-compat/utility/noop');

var _noop3 = _interopRequireDefault(_noop2);

var _identity2 = require('lodash-compat/utility/identity');

var _identity3 = _interopRequireDefault(_identity2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var method1 = _identity3.default || _noop3.default;
var method2 = _noop3.default ? _map3.default : _filter3.default;

(something ? _pick3.default : _omit3.default)(obj, function () {});
