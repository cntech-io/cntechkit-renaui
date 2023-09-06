import React from "react";
import RNComponents, { StyleSheet } from "react-native";
const Text = (props) => {
    return (<RNComponents.Text style={[styles.root, StyleSheet.flatten(props.style)]} {...props.extraProps}>
      {props.children}
    </RNComponents.Text>);
};
const styles = StyleSheet.create({
    root: {
        fontSize: 16,
        color: "black",
    },
});
export default Text;
