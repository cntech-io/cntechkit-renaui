import { ViewStyle } from "react-native";

const Fill: ViewStyle = {
  flex: 1,
};

// paddings

const PaddingNone: ViewStyle = {
  padding: 0,
};

const Padding3: ViewStyle = {
  padding: 3,
};
const Padding6: ViewStyle = {
  padding: 6,
};
const PaddingX = (x: number): ViewStyle => {
  return { padding: x };
};

// margins
const MarginNone: ViewStyle = {
  margin: 0,
};

const Margin3: ViewStyle = {
  margin: 3,
};
const Margin6: ViewStyle = {
  margin: 6,
};
const MarginX = (x: number): ViewStyle => {
  return { margin: x };
};

export {
  Fill,
  PaddingNone,
  Padding3,
  Padding6,
  PaddingX,
  MarginNone,
  Margin3,
  Margin6,
  MarginX,
};
