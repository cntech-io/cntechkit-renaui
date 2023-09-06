"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Icon_1 = __importDefault(require("./Icon"));
const IconButton_1 = __importDefault(require("./IconButton"));
const Flex_1 = __importDefault(require("./Flex"));
const Label_1 = __importDefault(require("./Label"));
const Spacer_1 = __importDefault(require("./Spacer"));
const Header = (props) => {
    const renderLeftComponent = (hasButton) => {
        if (!hasButton) {
            return <Icon_1.default isPlaceholder={true}/>;
        }
        return props.onLeftButtonPress ? (<IconButton_1.default onPress={props.onLeftButtonPress} iconProps={{ source: props.iconSources[0] }}/>) : (<Icon_1.default source={props.iconSources[0]}/>);
    };
    const renderRightComponent = (hasButton) => {
        if (!hasButton) {
            return <Icon_1.default isPlaceholder={true}/>;
        }
        return props.onRightButtonPress ? (<IconButton_1.default onPress={props.onRightButtonPress} iconProps={{ source: props.iconSources[props.iconSources.length - 1] }}/>) : (<Icon_1.default source={props.iconSources[props.iconSources.length - 1]}/>);
    };
    const renderBody = (hasLeftButton, hasRightButton, hasTitle) => {
        const middleComponent = hasTitle ? (<Flex_1.default noPadding childrenPosition="MIDDLE" fill direction={"row"}>
        <Label_1.default bold style={[props.styles?.titleStyle]}>
          {props.title || ""}
        </Label_1.default>
      </Flex_1.default>) : (<Spacer_1.default />);
        return (<Flex_1.default fill direction={"row"} style={[props.styles?.containerStyle]}>
        {renderLeftComponent(hasLeftButton)}
        {middleComponent}
        {renderRightComponent(hasRightButton)}
      </Flex_1.default>);
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
exports.default = Header;
