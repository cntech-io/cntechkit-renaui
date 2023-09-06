import React from "react";
import { StyleSheet, Text } from "react-native";
const Label = (props) => {
    return (<Text style={[styles.root, StyleSheet.flatten(props.style)]} {...props.extraProps}>
      {props.children}
    </Text>);
};
const styles = StyleSheet.create({
    root: {
        fontSize: 16,
        color: "black",
    },
});
export default Label;
