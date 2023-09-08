import React from "react";
import { StyleSheet, TouchableOpacity, ViewStyle } from "react-native";
import { Shape30x30, ShapeNxN } from "../styles";
import Icon, { IconProps } from "./Icon";

export type IconButtonProps = {
  onPress?: () => void;
  onLongPress?: () => void;
  iconProps: IconProps;
};

const IconButton = (props: IconButtonProps) => {
  return (
    <TouchableOpacity
      style={[props.iconProps.small ? ShapeNxN(20, 20) : Shape30x30]}
      onPress={props.onPress}
      onLongPress={props.onLongPress}
    >
      <Icon {...props.iconProps} />
    </TouchableOpacity>
  );
};

export default IconButton;
