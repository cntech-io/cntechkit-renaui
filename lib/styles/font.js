"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextBold = exports.TextColor = exports.TextSize = void 0;
const TextSize = (x) => {
    return { fontSize: x };
};
exports.TextSize = TextSize;
const TextColor = (x) => {
    return { color: x };
};
exports.TextColor = TextColor;
const TextBold = {
    fontWeight: "bold",
};
exports.TextBold = TextBold;
