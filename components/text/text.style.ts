import { StyleSheet, TextStyle } from "react-native";
import { TextStyleProps } from "./text.props";
import defaultTheme from "../../theme/default";
import { flattenStyle } from "../../utils";
import { ThemeSystem } from "../../theme";

const textStyle = (props: TextStyleProps) => {
  const flattenedStyle = flattenStyle(props.style);
  const textAlign: TextStyle = props.center ? { textAlign: "center" } : {};

  const fontSize = ThemeSystem.textSize[props.size!];
  const fontWeight = props.bold ? "bold" : "normal";
  const padding = ThemeSystem.padding[defaultTheme.textPaddingSize];
  const margin = ThemeSystem.margin[props.marginSize || defaultTheme.textMarginSize];

  return StyleSheet.create({
    root: {
      fontSize,
      alignItems: "center",
      fontWeight,
      padding,
      margin,
      ...textAlign,
      ...flattenedStyle,
    },
  });
};

export default textStyle;
