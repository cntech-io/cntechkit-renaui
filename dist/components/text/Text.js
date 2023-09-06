"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const text_style_1 = __importDefault(require("./text.style"));
const Text = (props) => {
    const { children, ...textStyleProps } = props;
    const _style = (0, text_style_1.default)(textStyleProps);
    return <react_native_1.Text style={_style.root}>{children}</react_native_1.Text>;
};
exports.default = Text;
