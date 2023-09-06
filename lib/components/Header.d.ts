import React from "react";
import { TextStyle, ViewStyle } from "react-native";
export declare type LayoutType = "buttons-only" | "left-button-only" | "right-button-only" | "title-only" | "title-left-button-together" | "title-right-button-together" | "title-buttons-together";
export declare type HeaderProps = {
    title?: string;
    iconSources: NodeRequire[];
    layout: LayoutType;
    onLeftButtonPress?: () => void;
    onRightButtonPress?: () => void;
    styles?: {
        containerStyle?: ViewStyle | ViewStyle[];
        titleStyle?: TextStyle | TextStyle[];
    };
};
declare const Header: (props: HeaderProps) => React.JSX.Element;
export default Header;
