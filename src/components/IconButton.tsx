import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Shape30x30 } from "../styles";
import Icon, { IconProps } from "./Icon";

export type IconButtonProps = {
  onPress?: () => void;
  onLongPress?: () => void;
  iconProps: IconProps;
};

const IconButton = (props: IconButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.root]}
      onPress={props.onPress}
      onLongPress={props.onLongPress}
    >
      <Icon {...props.iconProps} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    ...Shape30x30,
  },
});

export default IconButton;
