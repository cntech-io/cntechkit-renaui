import React from "react";
import { TextStyle, ViewStyle } from "react-native";
export declare type ButtonProps = {
    onPress: () => void;
    label: React.ReactNode;
    rightIcon?: React.ReactNode;
    leftIcon?: React.ReactNode;
    styles?: {
        containerStyle?: ViewStyle | ViewStyle[];
        labelStyle?: TextStyle | TextStyle[];
    };
};
declare const Button: (props: ButtonProps) => React.JSX.Element;
export default Button;
