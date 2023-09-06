import React from "react";
import { TextStyle, TextProps } from "react-native";
export declare type LabelProps = {
    children?: React.ReactNode;
    style?: TextStyle | TextStyle[];
    extraProps?: TextProps;
    bold?: boolean;
};
declare const Label: (props: LabelProps) => React.JSX.Element;
export default Label;
