import React from "react";
import { ViewStyle } from "react-native";
export type ScreenRootProps = {
    children?: React.ReactNode;
    style?: ViewStyle;
};
export type ScreenRootState = {};
export default class ScreenRoot extends React.Component<ScreenRootProps, ScreenRootState> {
    render(): React.JSX.Element;
}
