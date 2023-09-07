"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Flex_1 = __importDefault(require("./Flex"));
const styles_1 = require("../styles");
const Icon = (props) => {
    return (<Flex_1.default direction="row" style={[styles.root, props.isPlaceholder ? styles_1.Opacity0 : {}]}>
      <react_native_1.Image style={[
            styles.image,
            react_native_1.StyleSheet.flatten(props.styles?.imageStyle),
        ]} source={props.source}/>
    </Flex_1.default>);
};
const styles = react_native_1.StyleSheet.create({
    root: {
        ...styles_1.Center,
        ...styles_1.Shape30x30,
    },
    image: {
        resizeMode: "contain",
        ...(0, styles_1.ShapeNxN)(28, 28),
    },
});
exports.default = Icon;
