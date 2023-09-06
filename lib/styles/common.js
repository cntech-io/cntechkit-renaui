"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarginX = exports.Margin6 = exports.Margin3 = exports.PaddingX = exports.Padding6 = exports.Padding3 = exports.Fill = void 0;
const Fill = {
    flex: 1,
};
exports.Fill = Fill;
// paddings
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
