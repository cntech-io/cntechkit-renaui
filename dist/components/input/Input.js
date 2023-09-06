"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Flex_1 = __importDefault(require("../flex/Flex"));
const input_style_1 = __importDefault(require("./input.style"));
const default_1 = __importDefault(require("../../theme/default"));
const Input = (props) => {
    const { leftComponent, rightComponent, titleComponent, inputProps, placeholder, value, onChangeText, secureTextEntry, ...styleProps } = props;
    const _style = (0, input_style_1.default)({ ...styleProps });
    return (<Flex_1.default paddingSize={default_1.default.inputContainerPadding} style={titleComponent ? _style.rootLabelled : _style.root}>
      {titleComponent}
      <Flex_1.default paddingSize={default_1.default.inputContainerPadding} direction="row" style={leftComponent ? _style.wrapperWithIcon : _style.wrapper}>
        {leftComponent}
        <react_native_1.TextInput secureTextEntry={secureTextEntry} onChangeText={onChangeText} value={value} placeholder={placeholder} hitSlop={default_1.default.inputHitSlop} style={[_style.input, props.inputStyle]} {...props.inputProps}/>
      </Flex_1.default>
    </Flex_1.default>);
};
exports.default = Input;
