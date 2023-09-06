import React from "react";
import { IconProps } from "./Icon";
export declare type IconButtonProps = {
    onPress?: () => void;
    onLongPress?: () => void;
    iconProps: IconProps;
};
declare const IconButton: (props: IconButtonProps) => React.JSX.Element;
export default IconButton;
