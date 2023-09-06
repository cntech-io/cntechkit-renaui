"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const font_1 = require("./font");
const view_style_1 = require("./view-style");
exports.default = {
    Padding: view_style_1.Padding3,
    Margin: view_style_1.Margin3,
    TextSize: (0, font_1.TextSize)(16),
    TextColor: (0, font_1.TextColor)("black"),
    IconSize: view_style_1.Shape30x30,
};
