import React from "react";
import { StyleSheet, View } from "react-native";
const Flex = (props) => {
    if (props.direction === "row") {
        return (<View style={[styles.rootRow, StyleSheet.flatten(props.style)]}>
        {props.children}
      </View>);
    }
    return (<View style={[styles.rootColumn, StyleSheet.flatten(props.style)]}>
      {props.children}
    </View>);
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
