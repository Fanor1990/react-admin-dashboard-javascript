"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styles = require("@material-ui/core/styles");

var _colors = require("@material-ui/core/colors");

var theme = (0, _styles.createTheme)({
  palette: {
    primary: {
      main: _colors.orange[500]
    },
    secondary: {
      main: '#11cb5f'
    },
    "inherit": {
      main: '#11cb5f'
    }
  }
});
var _default = theme;
exports["default"] = _default;