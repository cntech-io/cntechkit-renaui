import React from "react";
import { ViewStyle } from "react-native";
export type ScreenRootProps = {
    children?: React.ReactNode;
    style?: ViewStyle | ViewStyle[];
    safeAreaFlag?: boolean;
    header?: React.JSX.Element;
};
export type ScreenRootState = {};
export default class ScreenRoot extends React.Component<ScreenRootProps, ScreenRootState> {
    renderHeader: () => React.JSX.Element | null;
    render(): React.JSX.Element;
}
