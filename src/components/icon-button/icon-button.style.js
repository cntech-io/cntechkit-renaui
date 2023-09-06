import { StyleSheet } from "react-native";
import { ThemeSystem } from "../../theme";
const iconButtonStyle = (props) => {
    return StyleSheet.create({
        root: {
            width: ThemeSystem.iconSize[props.size],
            height: ThemeSystem.iconSize[props.size],
        },
    });
};
export default iconButtonStyle;
