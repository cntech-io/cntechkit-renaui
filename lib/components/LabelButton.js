"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Label_1 = __importDefault(require("./Label"));
const LinkLabel = (props) => {
    return (<react_native_1.TouchableOpacity onPress={props.onPress}>
      <Label_1.default color={props.color} noMargin={props.noMargin} bold={props.bold} style={[
            styles.label,
            props.underlineColor !== ""
                ? {
                    borderBottomColor: props.underlineColor,
                }
                : {},
            react_native_1.StyleSheet.flatten(props.style),
        ]}>
        {props.label}
      </Label_1.default>
    </react_native_1.TouchableOpacity>);
};
const styles = react_native_1.StyleSheet.create({
    label: {
        borderBottomColor: "black",
        borderBottomWidth: 1,
    },
});
exports.default = LinkLabel;
