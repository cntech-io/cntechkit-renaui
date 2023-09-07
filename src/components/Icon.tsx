import React from "react";
import { Image, ImageStyle, StyleSheet, ViewStyle } from "react-native";
import Flex from "./Flex";
import { Center, Opacity0, Shape30x30, ShapeNxN } from "../styles";

export type IconProps = {
  source?: any;
  isPlaceholder?: boolean;
  styles?: {
    containerStyle?: ViewStyle | ViewStyle[];
    imageStyle?: ImageStyle | ImageStyle[];
  };
};

const Icon = (props: IconProps) => {
  return (
    <Flex
      direction="row"
      style={[styles.root, props.isPlaceholder ? Opacity0 : {}]}
    >
      <Image
        style={[
          styles.image as ImageStyle,
          StyleSheet.flatten(props.styles?.imageStyle),
        ]}
        source={props.source}
      />
    </Flex>
  );
};

const styles = StyleSheet.create({
  root: {
    ...Center,
    ...Shape30x30,
  },
  image: {
    resizeMode: "contain",
    ...ShapeNxN(28, 28),
  },
});

export default Icon;
