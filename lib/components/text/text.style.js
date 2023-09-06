import { StyleSheet } from "react-native";
import defaultTheme from "../../theme/default";
import { flattenStyle } from "../../utils";
import { ThemeSystem } from "../../theme";
const textStyle = (props) => {
    const _style = flattenStyle(props.style);
    const _center = props.center ? { textAlign: "center" } : {};
    return StyleSheet.create({
        root: {
            fontSize: ThemeSystem.textSize[props.size],
            alignItems: "center",
            fontWeight: props.bold ? "bold" : "normal",
            padding: ThemeSystem.padding[defaultTheme.textPaddingSize],
            margin: ThemeSystem.margin[props.marginSize || defaultTheme.textMarginSize],
            ..._center,
            ..._style,
        },
    });
};
export default textStyle;
