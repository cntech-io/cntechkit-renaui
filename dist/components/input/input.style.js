"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const utils_1 = require("../../utils");
const theme_1 = require("../../theme");
const default_1 = __importDefault(require("../../theme/default"));
const inputStyle = (props) => {
    const _style = (0, utils_1.flattenStyle)(props.style);
    const _inputStyle = (0, utils_1.flattenStyle)(props.inputStyle);
    return react_native_1.StyleSheet.create({
        root: {
            padding: theme_1.ThemeSystem.padding[default_1.default.inputPaddingSize],
            minWidth: default_1.default.inputMinWidth,
            margin: theme_1.ThemeSystem.margin[props.marginSize || default_1.default.inputMarginSize],
        },
        rootLabelled: {
            padding: theme_1.ThemeSystem.padding[default_1.default.inputPaddingSize],
            minWidth: default_1.default.inputMinWidth,
            margin: theme_1.ThemeSystem.margin[props.marginSize || default_1.default.inputMarginSize],
        },
        wrapper: {
            height: theme_1.ThemeSystem.fixedRowHeight[default_1.default.inputRowHeightSize],
            borderWidth: props.borderStyle?.borderWidth || default_1.default.inputBorderWidth,
            borderColor: props.borderStyle?.borderColor || default_1.default.inputBorderColor,
            borderRadius: props.borderStyle?.borderRadius ||
                theme_1.ThemeSystem.borderRadiusSize[default_1.default.inputBorderRadius],
            alignItems: "center",
            paddingLeft: theme_1.ThemeSystem.padding[default_1.default.inputPaddingLeftSize],
            ..._style,
        },
        wrapperWithIcon: {
            height: theme_1.ThemeSystem.fixedRowHeight[default_1.default.inputRowHeightSize],
            borderWidth: props.borderStyle?.borderWidth || default_1.default.inputBorderWidth,
            borderColor: props.borderStyle?.borderColor || default_1.default.inputBorderColor,
            borderRadius: props.borderStyle?.borderRadius ||
                theme_1.ThemeSystem.borderRadiusSize[default_1.default.inputBorderRadius],
            alignItems: "center",
            ..._style,
        },
        input: {
            flex: 1,
            padding: theme_1.ThemeSystem.padding[default_1.default.inputPaddingSize],
            ..._inputStyle,
        },
    });
};
exports.default = inputStyle;
