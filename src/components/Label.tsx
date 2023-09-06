import React from "react";
import { StyleSheet, TextStyle, Text, TextProps } from "react-native";

export type LabelProps = {
  children?: React.ReactNode;
  style?: TextStyle | TextStyle[];
  extraProps?: TextProps;
};

const Label = (props: LabelProps) => {
  return (
    <Text
      style={[styles.root, StyleSheet.flatten(props.style)]}
      {...props.extraProps}
    >
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  root: {
    fontSize: 16,
    color: "black",
  },
});

export default Label;
