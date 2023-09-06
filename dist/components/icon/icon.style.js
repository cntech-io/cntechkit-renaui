"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const utils_1 = require("../../utils");
const theme_1 = require("../../theme");
const default_1 = __importDefault(require("../../theme/default"));
const iconStyle = (props) => {
    const _style = (0, utils_1.flattenStyle)(props.style);
    const _size = theme_1.ThemeSystem.iconSize[props.size];
    return react_native_1.StyleSheet.create({
        root: {
            width: _size,
            height: _size,
            ...theme_1.ThemeSystem.position.MIDDLE,
            ..._style,
        },
        image: {
            resizeMode: "contain",
            width: _size - theme_1.ThemeSystem.padding[default_1.default.iconPaddingSize],
            height: _size - theme_1.ThemeSystem.padding[default_1.default.iconPaddingSize],
        },
    });
};
exports.default = iconStyle;
