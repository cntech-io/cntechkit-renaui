import React from "react";
import { StyleSheet, Text, View } from "react-native";
const Label = (props) => {
    return (<View>
      <Text style={[styles.root, StyleSheet.flatten(props.style)]} {...props.extraProps}>
        {props.children}
      </Text>
    </View>);
};
const styles = StyleSheet.create({
    root: {
        fontSize: 16,
        color: "black",
    },
});
export default Label;
