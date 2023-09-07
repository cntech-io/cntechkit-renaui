"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorderRadius = exports.ShapeNxN = exports.Shape30x30 = exports.MarginX = exports.Margin6 = exports.Margin3 = exports.MarginNone = exports.PaddingVerticalX = exports.PaddingHorizontalX = exports.PaddingX = exports.Padding6 = exports.Padding3 = exports.PaddingNone = exports.BgColor = exports.Opacity0 = exports.Width = exports.Height = exports.Opacity = exports.ColumnCenter = exports.RowCenter = exports.Center = exports.Fill = void 0;
const Fill = {
    flex: 1,
};
exports.Fill = Fill;
const Center = {
    justifyContent: "center",
    alignItems: "center",
};
exports.Center = Center;
const RowCenter = {
    alignItems: "center",
};
exports.RowCenter = RowCenter;
const ColumnCenter = {
    alignItems: "center",
};
exports.ColumnCenter = ColumnCenter;
const Opacity0 = {
    opacity: 0,
};
exports.Opacity0 = Opacity0;
const Opacity = (number) => {
    return { opacity: number };
};
exports.Opacity = Opacity;
const Height = (x) => {
    return { height: x };
};
exports.Height = Height;
const Width = (x) => {
    return { width: x };
};
exports.Width = Width;
const BgColor = (x) => {
    return { backgroundColor: x };
};
exports.BgColor = BgColor;
// paddings
const PaddingNone = {
    padding: 0,
};
exports.PaddingNone = PaddingNone;
const Padding3 = {
    padding: 3,
};
exports.Padding3 = Padding3;
const Padding6 = {
    padding: 6,
};
exports.Padding6 = Padding6;
const PaddingX = (x) => {
    return { padding: x };
};
exports.PaddingX = PaddingX;
const PaddingVerticalX = (x) => {
    return { paddingTop: x, paddingBottom: x };
};
exports.PaddingVerticalX = PaddingVerticalX;
const PaddingHorizontalX = (x) => {
    return { paddingRight: x, paddingLeft: x };
};
exports.PaddingHorizontalX = PaddingHorizontalX;
// margins
const MarginNone = {
    margin: 0,
};
exports.MarginNone = MarginNone;
const Margin3 = {
    margin: 3,
};
exports.Margin3 = Margin3;
const Margin6 = {
    margin: 6,
};
exports.Margin6 = Margin6;
const MarginX = (x) => {
    return { margin: x };
};
exports.MarginX = MarginX;
const Shape30x30 = {
    width: 30,
    height: 30,
};
exports.Shape30x30 = Shape30x30;
const ShapeNxN = (x, y) => {
    return { width: x, height: y };
};
exports.ShapeNxN = ShapeNxN;
const BorderRadius = (x) => {
    return { borderRadius: x };
};
exports.BorderRadius = BorderRadius;
