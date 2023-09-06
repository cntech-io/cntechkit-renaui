import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { Fill, Padding3 } from "../styles";

export type ScreenRootProps = {
  children?: React.ReactNode;
  style?: ViewStyle;
};

export type ScreenRootState = {};

export default class ScreenRoot extends React.Component<
  ScreenRootProps,
  ScreenRootState
> {
  render() {
    return (
      <View style={[styles.root, StyleSheet.flatten(this.props.style)]}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    ...Fill,
    ...Padding3,
  },
});
