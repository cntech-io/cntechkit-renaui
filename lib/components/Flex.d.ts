import React from "react";
import { ViewStyle } from "react-native";
export declare type FlexProps = {
    children?: React.ReactNode;
    direction: "row" | "column";
    style?: ViewStyle | ViewStyle[];
    fill?: boolean;
};
declare const Flex: (props: FlexProps) => React.JSX.Element;
export default Flex;
