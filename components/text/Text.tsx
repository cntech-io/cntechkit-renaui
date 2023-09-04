import React from "react";
import { Text as RNText } from "react-native";
import textStyle from "./text.style";
import { TextProps } from "./text.props";

const Text = (props: TextProps) => {
  const { children, ...styleProps } = props;
  const style = textStyle(styleProps);
  return <RNText style={style.root}>{children}</RNText>;
};

export default Text;
