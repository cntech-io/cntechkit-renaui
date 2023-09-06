"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const styles_1 = require("../styles");
const Icon_1 = __importDefault(require("./Icon"));
const IconButton = (props) => {
    return (<react_native_1.TouchableOpacity style={[styles.root]} onPress={props.onPress} onLongPress={props.onLongPress}>
      <Icon_1.default {...props.iconProps}/>
    </react_native_1.TouchableOpacity>);
};
const styles = react_native_1.StyleSheet.create({
    root: {
        ...styles_1.Shape30x30,
    },
});
exports.default = IconButton;
