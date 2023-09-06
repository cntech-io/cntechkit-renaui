"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Flex_1 = __importDefault(require("../flex/Flex"));
const icon_style_1 = __importDefault(require("./icon.style"));
const default_1 = __importDefault(require("../../theme/default"));
const Icon = (props) => {
    const { source, isPlaceholder, ...styleProps } = props;
    const _style = (0, icon_style_1.default)(styleProps);
    const _isPlaceholder = props.isPlaceholder ? { opacity: 0 } : {};
    const _source = source || require("./missing.png");
    return (<Flex_1.default paddingSize={default_1.default.flexPaddingSize} style={[_style.root, _isPlaceholder]}>
      <react_native_1.Image style={_style.image} source={_source}/>
    </Flex_1.default>);
};
exports.default = Icon;
