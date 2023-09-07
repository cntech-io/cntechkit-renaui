import React from "react";
import { TouchableOpacity } from "react-native";
import Label from "./Label";

export type LinkLabelProps = {
  label: string;
  onPress: () => void;
};

const LinkLabel = (props: LinkLabelProps) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Label>{props.label}</Label>
    </TouchableOpacity>
  );
};

export default LinkLabel;
