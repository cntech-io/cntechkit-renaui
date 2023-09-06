"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Flex_1 = __importDefault(require("../flex/Flex"));
const Button_1 = __importDefault(require("../button/Button"));
const default_1 = __importDefault(require("../../theme/default"));
const react_native_1 = require("react-native");
const ButtonGroup = (props) => {
    if (props.scrollable) {
        return (<Flex_1.default paddingSize={default_1.default.buttonGroupContainerPadding}>
        {props.titleComponent}
        <Flex_1.default direction={props.direction} paddingSize={props.paddingSize || default_1.default.flexPaddingSize} marginSize={props.marginSize || default_1.default.flexMarginSize}>
          <react_native_1.ScrollView horizontal={props.direction?.includes("row") ? true : false}>
            {props.buttonPropsArray.map((item) => (<Button_1.default key={item.label} {...item}/>))}
          </react_native_1.ScrollView>
        </Flex_1.default>
      </Flex_1.default>);
    }
    return (<Flex_1.default paddingSize={default_1.default.buttonGroupContainerPadding}>
      {props.titleComponent}
      <Flex_1.default direction={props.direction} paddingSize={props.paddingSize || default_1.default.flexPaddingSize} marginSize={props.marginSize || default_1.default.flexMarginSize}>
        {props.buttonPropsArray.map((item) => (<Button_1.default key={item.label} {...item}/>))}
      </Flex_1.default>
    </Flex_1.default>);
};
exports.default = ButtonGroup;
