import { StyleSheet } from "react-native";
import { flattenStyle } from "../../utils";
const headerStyle = (props) => {
    const _style = flattenStyle(props.style);
    const _textStyle = flattenStyle(props.titleStyle);
    return StyleSheet.create({
        gradient: {
            flex: 1,
        },
        root: {
            alignItems: "center",
            ..._style,
        },
        title: {
            ..._textStyle,
        },
    });
};
export default headerStyle;
