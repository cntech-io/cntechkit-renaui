"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Icon_1 = __importDefault(require("../icon/Icon"));
const icon_button_style_1 = __importDefault(require("./icon-button.style"));
const IconButton = (props) => {
    const { onPress, onLongPress, ...iconProps } = props;
    const _style = (0, icon_button_style_1.default)(iconProps);
    return (<react_native_1.TouchableOpacity style={_style.root} onPress={onPress} onLongPress={onLongPress}>
      <Icon_1.default {...iconProps}/>
    </react_native_1.TouchableOpacity>);
};
exports.default = IconButton;
