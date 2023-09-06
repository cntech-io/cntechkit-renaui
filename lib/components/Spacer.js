"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Flex_1 = __importDefault(require("./Flex"));
const Spacer = () => {
    return <Flex_1.default direction="row" noPadding fill/>;
};
exports.default = Spacer;
