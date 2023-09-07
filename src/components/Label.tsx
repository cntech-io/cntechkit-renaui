import React from "react";
import { StyleSheet, TextStyle, Text, TextProps, View } from "react-native";
import defaultValues from "../styles/default-values";
import { TextBold, TextColor } from "../styles";

export type LabelProps = {
  children?: React.ReactNode;
  style?: TextStyle | TextStyle[];
  extraProps?: TextProps;
  bold?: boolean;
  color?: string;
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
  },
});

export default Label;
