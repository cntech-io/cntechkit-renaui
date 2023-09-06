import { StyleSheet } from "react-native";
const flattenStyle = (style) => {
    if (!style) {
        return {};
    }
    if (Array.isArray(style)) {
        return StyleSheet.flatten(style);
    }
    else {
        return style;
    }
};
export default flattenStyle;
