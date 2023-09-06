import React from "react";
import Icon from "./Icon";
import IconButton from "./IconButton";
import Flex from "./Flex";
import Label from "./Label";
import Spacer from "./Spacer";

export type LayoutType =
  | "buttons-only"
  | "left-button-only"
  | "right-button-only"
  | "title-only"
  | "title-left-button-together"
  | "title-right-button-together"
  | "title-buttons-together";

export type HeaderProps = {
  title?: string;
  iconSources: NodeRequire[];
  layout: LayoutType;
  onLeftButtonPress?: () => void;
  onRightButtonPress?: () => void;
};

const Header = (props: HeaderProps) => {
  const renderLeftComponent = (hasButton: boolean) => {
    if (!hasButton) {
      return <Icon isPlaceholder={true} />;
    }
    return props.onLeftButtonPress ? (
      <IconButton
        onPress={props.onLeftButtonPress}
        iconProps={{ source: props.iconSources[0] }}
      />
    ) : (
      <Icon source={props.iconSources[0]} />
    );
  };

  const renderRightComponent = (hasButton: boolean) => {
    if (!hasButton) {
      return <Icon isPlaceholder={true} />;
    }
    return props.onRightButtonPress ? (
      <IconButton
        onPress={props.onRightButtonPress}
        iconProps={{ source: props.iconSources[props.iconSources.length - 1] }}
      />
    ) : (
      <Icon source={props.iconSources[props.iconSources.length - 1]} />
    );
  };

  const renderBody = (
    hasLeftButton: boolean,
    hasRightButton: boolean,
    hasTitle: boolean
  ) => {
    const _middleComponent = hasTitle ? (
      <Flex noPadding childrenPosition="MIDDLE" fill direction={"row"}>
        <Label>{props.title || ""}</Label>
      </Flex>
    ) : (
      <Spacer />
    );
    return (
      <Flex fill direction={"row"}>
        {renderLeftComponent(hasLeftButton)}
        {_middleComponent}
        {renderRightComponent(hasRightButton)}
      </Flex>
    );
  };

  switch (props.layout) {
    case "buttons-only":
      return renderBody(true, true, false);
    case "left-button-only":
      return renderBody(true, false, false);
    case "right-button-only":
      return renderBody(false, true, false);
    case "title-only":
      return renderBody(false, false, true);
    case "title-left-button-together":
      return renderBody(true, false, true);
    case "title-right-button-together":
      return renderBody(false, true, true);
    case "title-buttons-together":
      return renderBody(true, true, true);
    default:
      return renderBody(false, false, false);
  }
};

export default Header;
