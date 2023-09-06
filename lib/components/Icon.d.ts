import React from "react";
import { ImageStyle, ViewStyle } from "react-native";
export declare type IconProps = {
    source?: any;
    isPlaceholder?: boolean;
    styles?: {
        containerStyle?: ViewStyle | ViewStyle[];
        imageStyle?: ImageStyle | ImageStyle[];
    };
};
declare const Icon: (props: IconProps) => React.JSX.Element;
export default Icon;
