import { TextStyle } from "react-native";

const TextSize = (x: number) => {
  return { fontSize: x };
};

const TextColor = (x: string) => {
  return { color: x };
};

const TextBold: TextStyle = {
  fontWeight: "bold",
};

export { TextSize, TextColor, TextBold };
