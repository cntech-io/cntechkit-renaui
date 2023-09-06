import React from "react";
import { StyleSheet, TextStyle, Text, TextProps, View } from "react-native";
import defaultValues from "../styles/default-values";

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
    ...defaultValues.TextSize,
    ...defaultValues.TextColor,
  },
});

export default Label;
