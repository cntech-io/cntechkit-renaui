import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "../icon/Icon";
import iconButtonStyle from "./icon-button.style";
const IconButton = (props) => {
    const { onPress, onLongPress, ...iconProps } = props;
    const _style = iconButtonStyle(iconProps);
    return (<TouchableOpacity style={_style.root} onPress={onPress} onLongPress={onLongPress}>
      <Icon {...iconProps}/>
    </TouchableOpacity>);
};
export default IconButton;
