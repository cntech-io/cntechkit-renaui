import React from "react";
import { SafeAreaView, StyleSheet, View, ViewStyle } from "react-native";
import { Fill, Padding3 } from "../styles";

export type ScreenRootProps = {
  children?: React.ReactNode;
  style?: ViewStyle | ViewStyle[];
  safeAreaFlag?: boolean;
  header?: React.JSX.Element;
};

export type ScreenRootState = {};

export default class ScreenRoot extends React.Component<
  ScreenRootProps,
  ScreenRootState
> {
  renderHeader = () => {
    if (this.props.header) {
      return <View style={styles.header}>{this.props.header}</View>;
    }
    return null;
  };
  render() {
    if (this.props.safeAreaFlag) {
      return (
        <SafeAreaView style={Fill}>
          <View style={[styles.root, StyleSheet.flatten(this.props.style)]}>
            {this.renderHeader()}
            {this.props.children}
          </View>
        </SafeAreaView>
      );
    }
    return (
      <View style={[styles.root, StyleSheet.flatten(this.props.style)]}>
        {this.renderHeader()}
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
  header: {
    width: "100%",
    height: 70,
  },
});
