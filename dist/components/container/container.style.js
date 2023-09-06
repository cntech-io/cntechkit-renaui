"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const theme_1 = require("../../theme");
const utils_1 = require("../../utils");
const default_1 = __importDefault(require("../../theme/default"));
const containerStyle = (props) => {
    const _style = (0, utils_1.flattenStyle)(props.style);
    return react_native_1.StyleSheet.create({
        root: {
            flex: 1,
            ..._style,
        },
        container: {
            padding: theme_1.ThemeSystem.padding[props.paddingSize],
            flex: 1,
        },
        safeArea: {
            flex: 1,
        },
        headerContainer: {
            height: theme_1.ThemeSystem.headerHeight[props.headerSize || default_1.default.headerPaddingSize],
            justifyContent: "center",
        },
    });
};
exports.default = containerStyle;
