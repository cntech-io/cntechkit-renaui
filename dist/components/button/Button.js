"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const button_style_1 = __importDefault(require("./button.style"));
const Text_1 = __importDefault(require("../text/Text"));
const default_1 = __importDefault(require("../../theme/default"));
const Button = (props) => {
    const { onLongPress, onPress, label, bold, textSize, ...styleProps } = props;
    const _style = (0, button_style_1.default)(styleProps);
    return (<react_native_1.TouchableOpacity style={_style.root} onPress={onPress} onLongPress={onLongPress}>
      <Text_1.default style={_style.text} bold={bold || true} size={textSize || default_1.default.buttonTextSize}>
        {label}
      </Text_1.default>
    </react_native_1.TouchableOpacity>);
};
exports.default = Button;
