import React from "react";
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import Label from "./Label";

export type LinkLabelProps = {
  label: string;
  onPress: () => void;
  style?: ViewStyle | ViewStyle[];
  bold?: boolean;
  noMargin?: boolean;
  color?: string;
  underlineColor?: string;
};

const LinkLabel = (props: LinkLabelProps) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Label
        color={props.color}
        noMargin={props.noMargin}
        bold={props.bold}
        style={[
          styles.label,
          props.underlineColor !== ""
            ? {
                borderBottomColor: props.underlineColor,
              }
            : {},
          StyleSheet.flatten(props.style),
        ]}
      >
        {props.label}
      </Label>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  label: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});

export default LinkLabel;
