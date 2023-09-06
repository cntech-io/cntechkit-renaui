"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const flattenStyle = (style) => {
    if (!style) {
        return {};
    }
    if (Array.isArray(style)) {
        return react_native_1.StyleSheet.flatten(style);
    }
    else {
        return style;
    }
};
exports.default = flattenStyle;
