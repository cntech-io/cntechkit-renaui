"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const styles_1 = require("../styles");
class ScreenRoot extends react_1.default.Component {
    renderHeader = () => {
        if (this.props.header) {
            return <react_native_1.View style={styles.header}>{this.props.header}</react_native_1.View>;
        }
        return null;
    };
    render() {
        if (this.props.safeAreaFlag) {
            return (<react_native_1.SafeAreaView style={styles_1.Fill}>
          <react_native_1.View style={[
                    styles.root,
                    react_native_1.StyleSheet.flatten(this.props.style),
                    this.props.noPadding && styles_1.PaddingNone,
                ]}>
            {this.renderHeader()}
            {this.props.children}
          </react_native_1.View>
        </react_native_1.SafeAreaView>);
        }
        return (<react_native_1.View style={[styles.root, react_native_1.StyleSheet.flatten(this.props.style)]}>
        {this.renderHeader()}
        {this.props.children}
      </react_native_1.View>);
    }
}
exports.default = ScreenRoot;
const styles = react_native_1.StyleSheet.create({
    root: {
        ...styles_1.Fill,
        ...styles_1.Padding3,
    },
    header: {
        width: "100%",
        height: 70,
    },
});
