"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const flex_style_1 = __importDefault(require("./flex.style"));
const react_native_1 = require("react-native");
const Flex = (props) => {
    const { children, onLayout, ...styleProps } = props;
    const _style = (0, flex_style_1.default)(styleProps);
    return (<react_native_1.View onLayout={onLayout} style={_style.root}>
      {children}
    </react_native_1.View>);
};
exports.default = Flex;
