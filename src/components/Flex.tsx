import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Center, Fill, PaddingNone } from "../styles";
import defaultValues from "../styles/default-values";

export type FlexProps = {
  children?: React.ReactNode;
  direction: "row" | "column";
  style?: ViewStyle | ViewStyle[];
  fill?: boolean;
  noPadding?: boolean;
  childrenPosition?: "MIDDLE" | "TOP" | "BOTTOM";
};

const Flex = (props: FlexProps) => {
  if (props.direction === "row") {
    return (
      <View
        style={[
          styles.rootRow,
          StyleSheet.flatten(props.style),
          props.fill && Fill,
          props.noPadding && PaddingNone,
          props.childrenPosition === "MIDDLE" && Center,
        ]}
      >
        {props.children}
      </View>
    );
  }
  return (
    <View
      style={[
        styles.rootColumn,
        StyleSheet.flatten(props.style),
        props.fill && Fill,
        props.noPadding && PaddingNone,
        props.childrenPosition === "MIDDLE" && Center,
      ]}
    >
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  rootRow: {
    flexDirection: "row",
    ...defaultValues.Padding,
  },
  rootColumn: {
    flexDirection: "column",
    ...defaultValues.Padding,
  },
});

export default Flex;
