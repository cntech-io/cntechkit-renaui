import { ViewStyle } from "react-native";
import { TextColor, TextSize } from "./font";
import {
  BgColor,
  BorderRadius,
  Height,
  Margin3,
  Padding3,
  PaddingHorizontalX,
  Shape30x30,
} from "./view-style";

export default {
  Padding: Padding3,
  Margin: Margin3,
  TextSize: TextSize(16),
  TextColor: TextColor("black"),
  IconSize: Shape30x30,
  HeaderHorizontalPadding: PaddingHorizontalX(6),
  ButtonHeight: Height(40),
  BorderRadius: BorderRadius(8),
  BackgroundColor: BgColor("black"),
};
