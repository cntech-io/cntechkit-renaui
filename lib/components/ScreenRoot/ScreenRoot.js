import React from "react";
import { StyleSheet, View } from "react-native";
import { Fill, Padding3 } from "../../styles";
export default class ScreenRoot extends React.Component {
    render() {
        return (<View style={[styles.root, StyleSheet.flatten(this.props.style)]}>
        {this.props.children}
      </View>);
    }
}
const styles = StyleSheet.create({
    root: {
        ...Fill,
        ...Padding3,
    },
});
