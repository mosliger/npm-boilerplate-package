"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var children = _ref.children,
      type = _ref.type,
      size = _ref.size,
      onClick = _ref.onClick,
      disabled = _ref.disabled,
      className = _ref.className,
      style = _ref.style;
  return _react.default.createElement(_style.default, {
    disabled: disabled,
    className: "button ".concat(type, " ").concat(size, " ").concat(className),
    onClick: onClick,
    style: style
  }, children);
};

Button.propTypes = {
  children: _propTypes.default.any,
  type: _propTypes.default.oneOf(['primary', 'default', 'border']),
  size: _propTypes.default.oneOf(['sm', 'md']),
  disabled: _propTypes.default.bool,
  className: _propTypes.default.string,
  icon: _propTypes.default.string,
  style: _propTypes.default.shape(),
  onClick: _propTypes.default.func
};
Button.defaultProps = {
  type: 'default',
  size: 'md',
  className: '',
  style: {},
  icon: undefined,
  onClick: undefined,
  children: undefined,
  disabled: false
};
var _default = Button;
exports.default = _default;