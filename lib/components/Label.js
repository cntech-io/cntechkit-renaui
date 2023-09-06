"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Label = (props) => {
    return (<react_native_1.View>
      <react_native_1.Text style={[styles.root, react_native_1.StyleSheet.flatten(props.style)]} {...props.extraProps}>
        {props.children}
      </react_native_1.Text>
    </react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
    root: {
        fontSize: 16,
        color: "black",
    },
});
exports.default = Label;
