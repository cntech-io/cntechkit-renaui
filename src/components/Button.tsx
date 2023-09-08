import React from "react";
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import Flex from "./Flex";
import Label from "./Label";
import defaultValues from "../styles/default-values";
import { Center, Fill, Margin3, PaddingHorizontalX } from "../styles";

export type ButtonProps = {
  onPress: () => void;
  label: React.ReactNode;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  styles?: {
    containerStyle?: ViewStyle | ViewStyle[];
    labelStyle?: TextStyle | TextStyle[];
  };
};

const Button = (props: ButtonProps): React.JSX.Element => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[
        defaultValues.ButtonHeight,
        defaultValues.BorderRadius,
        defaultValues.BackgroundColor,
        StyleSheet.flatten(props.styles?.containerStyle),
      ]}
    >
      {props.leftIcon}
      <Flex
        direction="row"
        style={[
          defaultValues.BorderRadius,
          Fill,
          Center,
          PaddingHorizontalX(8),
          Margin3,
          StyleSheet.flatten(props.styles?.containerStyle),
        ]}
      >
        <Label
          style={StyleSheet.flatten(props.styles?.labelStyle)}
          color="white"
          bold
        >
          {props.label}
        </Label>
        {props.rightIcon}
      </Flex>
    </TouchableOpacity>
  );
};

export default Button;
