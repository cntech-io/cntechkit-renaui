"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const default_1 = __importDefault(require("../../theme/default"));
const utils_1 = require("../../utils");
const theme_1 = require("../../theme");
const textStyle = (props) => {
    const _style = (0, utils_1.flattenStyle)(props.style);
    const _center = props.center ? { textAlign: "center" } : {};
    return react_native_1.StyleSheet.create({
        root: {
            fontSize: theme_1.ThemeSystem.textSize[props.size],
            alignItems: "center",
            fontWeight: props.bold ? "bold" : "normal",
            padding: theme_1.ThemeSystem.padding[default_1.default.textPaddingSize],
            margin: theme_1.ThemeSystem.margin[props.marginSize || default_1.default.textMarginSize],
            ..._center,
            ..._style,
        },
    });
};
exports.default = textStyle;
