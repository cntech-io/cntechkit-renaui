"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const default_values_1 = __importDefault(require("../styles/default-values"));
const styles_1 = require("../styles");
const Label = (props) => {
    return (<react_native_1.View>
      <react_native_1.Text style={[
            styles.root,
            react_native_1.StyleSheet.flatten(props.style),
            props.bold && styles_1.TextBold,
        ]} {...props.extraProps}>
        {props.children}
      </react_native_1.Text>
    </react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
    root: {
        ...default_values_1.default.TextSize,
        ...default_values_1.default.TextColor,
    },
});
exports.default = Label;
