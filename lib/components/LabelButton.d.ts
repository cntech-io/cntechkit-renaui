import React from "react";
import { ViewStyle } from "react-native";
export declare type LinkLabelProps = {
    label: string;
    onPress: () => void;
    style?: ViewStyle | ViewStyle[];
    bold?: boolean;
    noMargin?: boolean;
    color?: string;
    underlineColor?: string;
};
declare const LinkLabel: (props: LinkLabelProps) => React.JSX.Element;
export default LinkLabel;
