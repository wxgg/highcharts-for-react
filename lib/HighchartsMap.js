'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _fastDeepEqual = require('fast-deep-equal');

var _fastDeepEqual2 = _interopRequireDefault(_fastDeepEqual);

var _highmaps = require('highcharts/highmaps.js');

var _highmaps2 = _interopRequireDefault(_highmaps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = require('react-hot-loader').enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
    afterFristRender: _propTypes2.default.func,
    afterRender: _propTypes2.default.func,
    beforeFristRender: _propTypes2.default.func,
    beforeRender: _propTypes2.default.func,

    style: _propTypes2.default.object,
    className: _propTypes2.default.string,
    string: _propTypes2.default.object,
    options: _propTypes2.default.object

};
var defaultProps = {
    afterFristRender: function afterFristRender(chart) {},
    afterRender: function afterRender(chart) {},
    beforeFristRender: function beforeFristRender(chart) {},
    beforeRender: function beforeRender(chart) {},
    style: {},
    className: '',
    string: {},
    options: {}

};

var HighchartsMapCore = function (_Component) {
    _inherits(HighchartsMapCore, _Component);

    function HighchartsMapCore(props) {
        _classCallCheck(this, HighchartsMapCore);

        var _this = _possibleConstructorReturn(this, (HighchartsMapCore.__proto__ || Object.getPrototypeOf(HighchartsMapCore)).call(this, props));

        _this.createChart = function (options) {
            try {
                if (options) {
                    // 图表初始化函数
                    _this.highcharts = _highmaps2.default.mapChart(_this.container, options);
                    return _this.highcharts;
                } else {
                    _this.highcharts = {};
                    throw 'options is not defind';
                }
            } catch (e) {
                console.error(e);
            }
        };

        _this.state = {};

        _this.highcharts = '';
        return _this;
    }

    _createClass(HighchartsMapCore, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            //console.log('beforeFristRender', 1111111111111)
            //beforrender
            var _props = this.props,
                beforeFristRender = _props.beforeFristRender,
                options = _props.options;

            if (beforeFristRender instanceof Function) {
                beforeFristRender(options);
            }
        }
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate() {
            //console.log('beforeRender', 3333333333)
            var _props2 = this.props,
                beforeRender = _props2.beforeRender,
                options = _props2.options;

            if (beforeRender instanceof Function) {
                beforeRender(options);
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            //afterrender
            //console.log('afterRender', 2222222222222)
            var _props3 = this.props,
                afterRender = _props3.afterRender,
                options = _props3.options;

            if (afterRender instanceof Function) {
                afterRender(this.highcharts, options);
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var options = this.props.options;

            if (!(0, _fastDeepEqual2.default)(options, nextProps.options)) {
                this.createChart(nextProps.options);
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            // afterFristRender
            //console.log('afterFristRender', 2222222222222)
            var _props4 = this.props,
                afterFristRender = _props4.afterFristRender,
                options = _props4.options;
            // 图表初始化函数

            var chart = this.createChart(options);
            if (afterFristRender instanceof Function) {
                afterFristRender(chart, options);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            //destory
            try {
                if (this.highcharts) {
                    this.highcharts.destroy();
                } else {
                    throw 'charts has not ready';
                }
            } catch (e) {
                console.error(e);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props5 = this.props,
                className = _props5.className,
                style = _props5.style;

            return _react2.default.createElement('div', { className: className, style: style,
                ref: function ref(container) {
                    return _this2.container = container;
                }
            });
        }
    }, {
        key: '__reactstandin__regenerateByEval',
        // @ts-ignore
        value: function __reactstandin__regenerateByEval(key, code) {
            // @ts-ignore
            this[key] = eval(code);
        }
    }]);

    return HighchartsMapCore;
}(_react.Component);

HighchartsMapCore.propTypes = propTypes;
HighchartsMapCore.defaultProps = defaultProps;
var _default = HighchartsMapCore;
exports.default = _default;
;

(function () {
    var reactHotLoader = require('react-hot-loader').default;

    var leaveModule = require('react-hot-loader').leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(propTypes, 'propTypes', 'js/HighchartsMap.js');
    reactHotLoader.register(defaultProps, 'defaultProps', 'js/HighchartsMap.js');
    reactHotLoader.register(HighchartsMapCore, 'HighchartsMapCore', 'js/HighchartsMap.js');
    reactHotLoader.register(_default, 'default', 'js/HighchartsMap.js');
    leaveModule(module);
})();

;