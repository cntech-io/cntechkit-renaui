import React from "react";
import { StyleSheet, TextStyle, Text, TextProps, View } from "react-native";

export type LabelProps = {
  children?: React.ReactNode;
  style?: TextStyle | TextStyle[];
  extraProps?: TextProps;
};

const Label = (props: LabelProps) => {
  return (
    <View>
      <Text
        style={[styles.root, StyleSheet.flatten(props.style)]}
        {...props.extraProps}
      >
        {props.children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    fontSize: 16,
    color: "black",
  },
});

export default Label;
