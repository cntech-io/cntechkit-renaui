import React from "react";
import { StyleSheet, TextStyle, Text, TextProps, View } from "react-native";
import defaultValues from "../styles/default-values";
import { MarginNone, TextBold, TextColor } from "../styles";

export type LabelProps = {
  children?: React.ReactNode;
  style?: TextStyle | TextStyle[];
  extraProps?: TextProps;
  bold?: boolean;
  color?: string;
  noMargin?: boolean;
};

const Label = (props: LabelProps) => {
  return (
    <View>
      <Text
        style={[
          styles.root,
          StyleSheet.flatten(props.style),
          props.bold && TextBold,
          props.color !== undefined && TextColor(props.color),
          props.noMargin && MarginNone,
        ]}
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
    ...defaultValues.Margin,
  },
});

export default Label;
