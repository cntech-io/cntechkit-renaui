"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarginX = exports.Margin6 = exports.Margin3 = exports.MarginNone = exports.PaddingX = exports.Padding6 = exports.Padding3 = exports.PaddingNone = exports.Fill = void 0;
const Fill = {
    flex: 1,
};
exports.Fill = Fill;
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
