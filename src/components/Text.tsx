import React from "react";
import RNComponents, { StyleSheet, TextStyle } from "react-native";

export type TextProps = {
  children?: React.ReactNode;
  style?: TextStyle | TextStyle[];
  extraProps?: TextProps;
};

const Text = (props: TextProps) => {
  return (
    <RNComponents.Text
      style={[styles.root, StyleSheet.flatten(props.style)]}
      {...props.extraProps}
    >
      {props.children}
    </RNComponents.Text>
  );
};

const styles = StyleSheet.create({
  root: {
    fontSize: 16,
    color: "black",
  },
});

export default Text;
