import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

export type FlexProps = {
  children?: React.ReactNode;
  direction: "row" | "column";
  style?: ViewStyle | ViewStyle[];
};

const Flex = (props: FlexProps) => {
  if (props.direction === "row") {
    return (
      <View style={[styles.rootRow, StyleSheet.flatten(props.style)]}>
        {props.children}
      </View>
    );
  }
  return (
    <View style={[styles.rootColumn, StyleSheet.flatten(props.style)]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  rootRow: {
    flexDirection: "row",
  },
  rootColumn: {
    flexDirection: "column",
  },
});

export default Flex;
