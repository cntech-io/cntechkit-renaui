import React from "react";
import { Image } from "react-native";
import Flex from "../flex/Flex";
import { IconProps } from "./icon.props";
import defaultTheme from "../../theme/default";
import iconStyle from "./icon.style";

const Icon = (props: IconProps) => {
  const { source, isPlaceholder, ...styleProps } = props;
  const _style = iconStyle(styleProps);
  const _isPlaceholder = props.isPlaceholder ? { opacity: 0 } : {};
  const _source = source || require("./assets/missing.png");
  return (
    <Flex
      paddingSize={defaultTheme.flexPaddingSize}
      style={[_style.root, _isPlaceholder]}
    >
      <Image style={_style.image} source={_source} />
    </Flex>
  );
};

export default Icon;

export type { IconProps };
