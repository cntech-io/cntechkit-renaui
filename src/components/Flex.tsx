import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Fill, Padding3, PaddingNone } from "../styles";

export type FlexProps = {
  children?: React.ReactNode;
  direction: "row" | "column";
  style?: ViewStyle | ViewStyle[];
  fill?: boolean;
  noPadding?: boolean;
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
      ]}
    >
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  rootRow: {
    flexDirection: "row",
    ...Padding3,
  },
  rootColumn: {
    flexDirection: "column",
    ...Padding3,
  },
});

export default Flex;
