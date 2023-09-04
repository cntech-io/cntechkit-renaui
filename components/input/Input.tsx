import React from "react";
import { TextInput } from "react-native";
import Flex from "../flex/Flex";
import inputStyle from "./input.style";
import { InputProps } from "./input.props";
import defaultTheme from "../../theme/default";

const Input = (props: InputProps) => {
  const {
    leftComponent,
    rightComponent,
    titleComponent,
    inputProps,
    placeholder,
    value,
    onChangeText,
    secureTextEntry,
    ...styleProps
  } = props;

  const style = inputStyle({ ...styleProps });

  return (
    <Flex
      paddingSize={defaultTheme.inputContainerPadding}
      style={titleComponent ? style.rootLabelled : style.root}
    >
      {titleComponent}
      <Flex
        paddingSize={defaultTheme.inputContainerPadding}
        direction="row"
        style={leftComponent ? style.wrapperWithIcon : style.wrapper}
      >
        {leftComponent}
        <TextInput
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          hitSlop={defaultTheme.inputHitSlop}
          style={[style.input, props.inputStyle]}
          {...inputProps}
        />
      </Flex>
    </Flex>
  );
};

export default Input;

export type { InputProps };
