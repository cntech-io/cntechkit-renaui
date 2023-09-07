"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const Label_1 = __importDefault(require("./Label"));
const LinkLabel = (props) => {
    return (<react_native_1.TouchableOpacity onPress={props.onPress}>
      <Label_1.default>{props.label}</Label_1.default>
    </react_native_1.TouchableOpacity>);
};
exports.default = LinkLabel;
