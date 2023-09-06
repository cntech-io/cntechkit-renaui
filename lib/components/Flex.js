"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const styles_1 = require("../styles");
const Flex = (props) => {
    if (props.direction === "row") {
        return (<react_native_1.View style={[
                styles.rootRow,
                react_native_1.StyleSheet.flatten(props.style),
                props.fill && styles_1.Fill,
                props.noPadding && styles_1.PaddingNone,
            ]}>
        {props.children}
      </react_native_1.View>);
    }
    return (<react_native_1.View style={[
            styles.rootColumn,
            react_native_1.StyleSheet.flatten(props.style),
            props.fill && styles_1.Fill,
            props.noPadding && styles_1.PaddingNone,
        ]}>
      {props.children}
    </react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
    rootRow: {
        flexDirection: "row",
        ...styles_1.Padding3,
    },
    rootColumn: {
        flexDirection: "column",
        ...styles_1.Padding3,
    },
});
exports.default = Flex;
