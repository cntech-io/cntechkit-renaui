"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const utils_1 = require("../../utils");
const theme_1 = require("../../theme");
const default_1 = __importDefault(require("../../theme/default"));
const flexStyle = (props) => {
    const _position = theme_1.ThemeSystem.position[props.position || default_1.default.flexPosition];
    const _fill = props.fill ? { flex: 1 } : {};
    const _style = (0, utils_1.flattenStyle)(props.style);
    return react_native_1.StyleSheet.create({
        root: {
            flexDirection: props.direction,
            padding: theme_1.ThemeSystem.padding[props.paddingSize],
            margin: theme_1.ThemeSystem.margin[props.marginSize || default_1.default.flexMarginSize],
            ..._position,
            ..._fill,
            ..._style,
        },
    });
};
exports.default = flexStyle;
