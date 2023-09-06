import { StyleSheet } from "react-native";
import { flattenStyle } from "../../utils";
import { ThemeSystem } from "../../theme";
import defaultTheme from "../../theme/default";
const flexStyle = (props) => {
    const _position = ThemeSystem.position[props.position || defaultTheme.flexPosition];
    const _fill = props.fill ? { flex: 1 } : {};
    const _style = flattenStyle(props.style);
    return StyleSheet.create({
        root: {
            flexDirection: props.direction,
            padding: ThemeSystem.padding[props.paddingSize],
            margin: ThemeSystem.margin[props.marginSize || defaultTheme.flexMarginSize],
            ..._position,
            ..._fill,
            ..._style,
        },
    });
};
export default flexStyle;
