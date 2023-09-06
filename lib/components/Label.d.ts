import React from "react";
import { TextStyle, TextProps } from "react-native";
export type LabelProps = {
    children?: React.ReactNode;
    style?: TextStyle | TextStyle[];
    extraProps?: TextProps;
};
declare const Label: (props: LabelProps) => React.JSX.Element;
export default Label;
