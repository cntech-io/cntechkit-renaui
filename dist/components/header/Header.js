"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Flex_1 = __importDefault(require("../flex/Flex"));
const Icon_1 = __importDefault(require("../icon/Icon"));
const Spacer_1 = __importDefault(require("../spacer/Spacer"));
const Text_1 = __importDefault(require("../text/Text"));
const header_style_1 = __importDefault(require("./header.style"));
const IconButton_1 = __importDefault(require("../icon-button/IconButton"));
const react_native_linear_gradient_1 = __importDefault(require("react-native-linear-gradient"));
const default_1 = __importDefault(require("../../theme/default"));
const Header = (props) => {
    const { headerLayout, paddingSize, iconSize, iconSources, onRightButtonPress, onLeftButtonPress, title, ...styleProps } = props;
    const _style = (0, header_style_1.default)(styleProps);
    const renderLeftComponent = (hasButton) => {
        if (!hasButton) {
            return (<Icon_1.default size={iconSize || default_1.default.headerIconSize} isPlaceholder={true}/>);
        }
        return onLeftButtonPress ? (<IconButton_1.default onPress={onLeftButtonPress} size={iconSize || default_1.default.headerIconSize} source={iconSources[0]}/>) : (<Icon_1.default size={iconSize || default_1.default.headerIconSize} source={iconSources[0]}/>);
    };
    const renderRightComponent = (hasButton) => {
        if (!hasButton) {
            return (<Icon_1.default size={iconSize || default_1.default.headerIconSize} isPlaceholder={true}/>);
        }
        return onRightButtonPress ? (<IconButton_1.default onPress={onRightButtonPress} size={iconSize || default_1.default.headerIconSize} source={iconSources[iconSources.length - 1]}/>) : (<Icon_1.default size={iconSize || default_1.default.headerIconSize} source={iconSources[iconSources.length - 1]}/>);
    };
    const renderBody = (hasLeftButton, hasRightButton, hasTitle) => {
        const _middleComponent = hasTitle ? (<Flex_1.default paddingSize="NONE" position="MIDDLE" fill>
        <Text_1.default style={_style.title} size={default_1.default.headerTextSize} bold>
          {title || ""}
        </Text_1.default>
      </Flex_1.default>) : (<Spacer_1.default />);
        if (props.gradientColors && props.gradientColors.length > 1) {
            return (<react_native_linear_gradient_1.default colors={props.gradientColors} style={_style.gradient}>
          <Flex_1.default fill marginSize="NONE" style={_style.root} paddingSize={paddingSize} direction={"row"}>
            {renderLeftComponent(hasLeftButton)}
            {_middleComponent}
            {renderRightComponent(hasRightButton)}
          </Flex_1.default>
        </react_native_linear_gradient_1.default>);
        }
        return (<Flex_1.default marginSize="NONE" fill style={_style.root} paddingSize={paddingSize} direction={"row"}>
        {renderLeftComponent(hasLeftButton)}
        {_middleComponent}
        {renderRightComponent(hasRightButton)}
      </Flex_1.default>);
    };
    switch (headerLayout) {
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
