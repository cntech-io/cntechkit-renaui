"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Flex_1 = __importDefault(require("./Flex"));
const Label_1 = __importDefault(require("./Label"));
const default_values_1 = __importDefault(require("../styles/default-values"));
const styles_1 = require("../styles");
const Button = (props) => {
    return (<react_native_1.TouchableOpacity onPress={props.onPress} style={[
            default_values_1.default.ButtonHeight,
            default_values_1.default.BorderRadius,
            default_values_1.default.BackgroundColor,
            default_values_1.default.Margin,
            react_native_1.StyleSheet.flatten(props.styles?.containerStyle),
        ]}>
      <Flex_1.default direction="row" style={[styles_1.Fill, styles_1.Center, (0, styles_1.PaddingHorizontalX)(8)]}>
        {props.leftIcon}
        <Label_1.default style={react_native_1.StyleSheet.flatten(props.styles?.labelStyle)} color="white" bold>
          {props.label}
        </Label_1.default>
        {props.rightIcon}
      </Flex_1.default>
    </react_native_1.TouchableOpacity>);
};
exports.default = Button;
