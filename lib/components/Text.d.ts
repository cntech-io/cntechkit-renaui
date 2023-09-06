import React from "react";
import { TextStyle } from "react-native";
export type TextProps = {
    children?: React.ReactNode;
    style?: TextStyle | TextStyle[];
    extraProps?: TextProps;
};
declare const Text: (props: TextProps) => React.JSX.Element;
export default Text;
