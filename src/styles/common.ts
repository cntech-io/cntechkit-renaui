import { ViewStyle } from "react-native";

const Fill: ViewStyle = {
  flex: 1,
};

const Padding3: ViewStyle = {
  padding: 3,
};
const PaddingX = (x: number): ViewStyle => {
  return { padding: x };
};

export { Fill, Padding3, PaddingX };
