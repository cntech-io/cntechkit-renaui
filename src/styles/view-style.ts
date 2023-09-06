import { ViewStyle } from "react-native";

const Fill: ViewStyle = {
  flex: 1,
};

const Center: ViewStyle = {
  justifyContent: "center",
  alignItems: "center",
};

const RowCenter: ViewStyle = {
  alignItems: "center",
};

const ColumnCenter: ViewStyle = {
  alignItems: "center",
};

const Opacity0: ViewStyle = {
  opacity: 0,
};

const Opacity = (number: number): ViewStyle => {
  return { opacity: number };
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

const PaddingVerticalX = (x: number): ViewStyle => {
  return { paddingTop: x, paddingBottom: x };
};

const PaddingHorizontalX = (x: number): ViewStyle => {
  return { paddingRight: x, paddingLeft: x };
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

const Shape30x30: ViewStyle = {
  width: 30,
  height: 30,
};

const ShapeNxN = (x: number, y: number): ViewStyle => {
  return { width: x, height: y };
};

export {
  Fill,
  Center,
  RowCenter,
  ColumnCenter,
  Opacity,
  Opacity0,
  PaddingNone,
  Padding3,
  Padding6,
  PaddingX,
  PaddingHorizontalX,
  PaddingVerticalX,
  MarginNone,
  Margin3,
  Margin6,
  MarginX,
  Shape30x30,
  ShapeNxN,
};
