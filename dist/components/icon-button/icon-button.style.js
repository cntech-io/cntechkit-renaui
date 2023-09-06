"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const theme_1 = require("../../theme");
const iconButtonStyle = (props) => {
    return react_native_1.StyleSheet.create({
        root: {
            width: theme_1.ThemeSystem.iconSize[props.size],
            height: theme_1.ThemeSystem.iconSize[props.size],
        },
    });
};
exports.default = iconButtonStyle;
