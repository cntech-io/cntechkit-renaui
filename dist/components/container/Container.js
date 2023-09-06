"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const container_style_1 = __importDefault(require("./container.style"));
const react_native_linear_gradient_1 = __importDefault(require("react-native-linear-gradient"));
class Container extends react_1.default.Component {
    _style = (0, container_style_1.default)({
        paddingSize: this.props.paddingSize,
        headerSize: this.props.headerSize,
        style: this.props.style,
    });
    render() {
        const { children, safeAreaFlag, headerComponent, ...styleProps } = this.props;
        const _style = (0, container_style_1.default)(styleProps);
        if (safeAreaFlag) {
            if (this.props.gradientColors && this.props.gradientColors.length > 1) {
                return (<react_native_linear_gradient_1.default colors={this.props.gradientColors} style={_style.root}>
            <react_native_1.SafeAreaView style={[_style.safeArea]}>
              {headerComponent && (<react_native_1.View style={_style.headerContainer}>{headerComponent}</react_native_1.View>)}
              <react_native_1.View style={_style.container}>{children}</react_native_1.View>
            </react_native_1.SafeAreaView>
          </react_native_linear_gradient_1.default>);
            }
            return (<react_native_1.View style={_style.root}>
          <react_native_1.SafeAreaView style={[_style.safeArea]}>
            {headerComponent && (<react_native_1.View style={_style.headerContainer}>{headerComponent}</react_native_1.View>)}
            <react_native_1.View style={_style.container}>{children}</react_native_1.View>
          </react_native_1.SafeAreaView>
        </react_native_1.View>);
        }
        if (this.props.gradientColors && this.props.gradientColors.length > 1) {
            return (<react_native_linear_gradient_1.default colors={this.props.gradientColors} style={_style.root}>
          <react_native_1.View style={_style.container}>{children}</react_native_1.View>
        </react_native_linear_gradient_1.default>);
        }
        return (<react_native_1.View style={_style.root}>
        <react_native_1.View style={_style.container}>{children}</react_native_1.View>
      </react_native_1.View>);
    }
}
exports.default = Container;
