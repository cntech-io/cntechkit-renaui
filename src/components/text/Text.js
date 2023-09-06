import React from "react";
import { Text as RNText } from "react-native";
import textStyle from "./text.style";
const Text = (props) => {
    const { children, ...textStyleProps } = props;
    const _style = textStyle(textStyleProps);
    return <RNText style={_style.root}>{children}</RNText>;
};
export default Text;
