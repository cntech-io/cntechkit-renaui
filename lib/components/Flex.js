import React from "react";
import { StyleSheet, View } from "react-native";
import { Fill } from "../styles";
const Flex = (props) => {
    if (props.direction === "row") {
        return (<View style={[
                styles.rootRow,
                StyleSheet.flatten(props.style),
                props.fill && Fill,
            ]}>
        {props.children}
      </View>);
    }
    return (<View style={[
            styles.rootColumn,
            StyleSheet.flatten(props.style),
            props.fill && Fill,
        ]}>
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
