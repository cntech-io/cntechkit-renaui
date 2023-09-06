"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const utils_1 = require("../../utils");
const headerStyle = (props) => {
    const _style = (0, utils_1.flattenStyle)(props.style);
    const _textStyle = (0, utils_1.flattenStyle)(props.titleStyle);
    return react_native_1.StyleSheet.create({
        gradient: {
            flex: 1,
        },
        root: {
            alignItems: "center",
            ..._style,
        },
        title: {
            ..._textStyle,
        },
    });
};
exports.default = headerStyle;
