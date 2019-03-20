"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styled = _interopRequireDefault(require("@emotion/styled"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  label: button;\n  padding: 6px 14px;\n  border-radius: 3px;\n  line-height: 1.2;\n  font-size: 14px;\n  min-width: 40px;\n  text-align: center;\n  transition: all .4s ease-in-out;\n  cursor: pointer;\n  opacity: 1;\n  outline: none;\n\n  &.primary {\n    border: 1px solid ", ";\n    color: ", ";\n    background: ", ";\n    &:hover, &:focus {\n      box-shadow: 0px 2px 4px ", ";\n    }\n  }\n  &.default {\n    background: ", ";\n    border: 1px solid ", ";\n    color: ", ";\n    &:hover, &:focus {\n      box-shadow: 0px 2px 4px ", ";\n    }\n  }\n  &.border {\n    border: 1px solid ", ";\n    color: ", ";\n    background: ", ";\n    &:hover, &:focus {\n      box-shadow: 0px 2px 4px ", ";\n    }\n  }\n  &:disabled {\n    pointer-events: none;\n    opacity: 0.5;\n  }\n  &.is-icon {\n    > i {\n      margin-right: 10px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var color = {
  primary: '#f00',
  white: '#FFF',
  brownGrey: '#DDD'
};

var _default = _styled.default.button(_templateObject(), color.primary, color.white, color.primary, color.primary, color.white, color.brownGrey, color.brownGrey, color.brownGrey, color.primary, color.primary, color.white, color.primary);

exports.default = _default;