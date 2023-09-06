"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const utils_1 = require("../../utils");
const theme_1 = require("../../theme");
const default_1 = __importDefault(require("../../theme/default"));
const buttonStyle = (props) => {
    const _style = (0, utils_1.flattenStyle)(props.style);
    const _textStyle = (0, utils_1.flattenStyle)(props.textStyle);
    return react_native_1.StyleSheet.create({
        root: {
            height: theme_1.ThemeSystem.fixedRowHeight[default_1.default.buttonHeight],
            backgroundColor: default_1.default.buttonBackgroundColor,
            margin: theme_1.ThemeSystem.margin[props.marginSize || default_1.default.buttonMarginSize],
            paddingLeft: theme_1.ThemeSystem.padding[default_1.default.buttonHorizontalPadding],
            paddingRight: theme_1.ThemeSystem.padding[default_1.default.buttonHorizontalPadding],
            borderRadius: theme_1.ThemeSystem.borderRadiusSize[default_1.default.buttonBorderRadius],
            ...theme_1.ThemeSystem.position[default_1.default.buttonTextPosition],
            ..._style,
        },
        text: {
            color: default_1.default.buttonTextColor,
            ..._textStyle,
        },
    });
};
exports.default = buttonStyle;
