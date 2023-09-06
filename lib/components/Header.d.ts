import React from "react";
export declare type LayoutType = "buttons-only" | "left-button-only" | "right-button-only" | "title-only" | "title-left-button-together" | "title-right-button-together" | "title-buttons-together";
export declare type HeaderProps = {
    title?: string;
    iconSources: NodeRequire[];
    layout: LayoutType;
    onLeftButtonPress?: () => void;
    onRightButtonPress?: () => void;
};
declare const Header: (props: HeaderProps) => React.JSX.Element;
export default Header;
