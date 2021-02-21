import React, { Children, isValidElement, cloneElement, useRef, useEffect, useState, useMemo, useReducer, useCallback, createContext, useContext } from 'react';
import styled, { keyframes, css, useTheme, createGlobalStyle } from 'styled-components';
import { space, typography, flexbox, layout } from 'styled-system';
import get from 'lodash/get';
import noop from 'lodash/noop';
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
import { Link as Link$1, NavLink, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) { return function (theme) {
    return get(theme, path, fallback);
}; };

var rotate = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate);
var Svg = styled.svg(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"], ["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1, templateObject_2, templateObject_3;

var Icon = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$1 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$2 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$3 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n  ", "\n"])), getColor, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, space, typography);
Text.defaultProps = {
    color: "text",
    small: false,
};
var templateObject_1$1;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var sizes = {
    SM: "sm",
    MD: "md",
};
var variants = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
};

var getDisabledStyles = function (_a) {
    var isLoading = _a.isLoading, theme = _a.theme;
    if (isLoading === true) {
        return "\n      &:disabled,\n      &.button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.button--disabled {\n      background-color: " + theme.colors.backgroundDisabled + ";\n      border-color: " + theme.colors.backgroundDisabled + ";\n      box-shadow: none;\n      color: " + theme.colors.textDisabled + ";\n      cursor: not-allowed;\n    }\n  ";
};
var removePointerEvents = function (_a) {
    var disabled = _a.disabled, as = _a.as;
    if (disabled && as && as !== "button") {
        return "\n      pointer-events: none;\n    ";
    }
    return "";
};
var getButtonVariantProp = function (prop) { return function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants.PRIMARY : _b;
    return theme.button[variant][prop];
}; };
var StyledButton = styled.button(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"])), getButtonVariantProp("background"), getButtonVariantProp("border"), getButtonVariantProp("boxShadow"), getButtonVariantProp("color"), function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "100%" : "max-content");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "0 16px" : "0 24px");
}, function (_a) {
    var isLoading = _a.isLoading;
    return (isLoading ? 0.5 : 1);
}, getButtonVariantProp("backgroundHover"), getButtonVariantProp("borderColorHover"), function (_a) {
    var theme = _a.theme;
    return theme.colors.secondary;
}, getButtonVariantProp("backgroundActive"), getButtonVariantProp("boxShadowActive"), getDisabledStyles, removePointerEvents, space);
StyledButton.defaultProps = {
    fullWidth: false,
    type: "button",
};
var templateObject_1$2;

var Button = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, external = _a.external, isLoading = _a.isLoading, disabled = _a.disabled, props = __rest(_a, ["startIcon", "endIcon", "children", "external", "isLoading", "disabled"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    return (React.createElement(StyledButton, __assign({}, internalProps, props, { isLoading: isLoading, disabled: isDisabled }),
        React.isValidElement(startIcon) &&
            React.cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React.isValidElement(endIcon) &&
            React.cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Button.defaultProps = {
    variant: variants.PRIMARY,
    size: sizes.MD,
    external: false,
    isLoading: false,
    disabled: false,
};

var IconButton = styled(Button)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
});
var templateObject_1$3;

var Icon$4 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$5 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$6 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$7 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$8 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$9 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M5 13.0022H16.17L11.29 17.8822C10.9 18.2722 10.9 18.9122 11.29 19.3022C11.68 19.6922 12.31 19.6922 12.7 19.3022L19.29 12.7122C19.68 12.3222 19.68 11.6922 19.29 11.3022L12.71 4.70217C12.32 4.31217 11.69 4.31217 11.3 4.70217C10.91 5.09217 10.91 5.72217 11.3 6.11217L16.17 11.0022H5C4.45 11.0022 4 11.4522 4 12.0022C4 12.5522 4.45 13.0022 5 13.0022Z" })));
};

var Icon$a = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$b = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React.createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React.createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$c = function (props) {
    var theme = useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React.createElement(Svg, __assign({ viewBox: "0 0 72 72" }, props),
        React.createElement("path", { d: "M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z", fill: primaryColor }),
        React.createElement("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "3", y: "3", width: "66", height: "66" },
            React.createElement("path", { d: "M68.25 36C68.25 53.8112 53.8112 68.25 36 68.25C18.1888 68.25 3.75 53.8112 3.75 36C3.75 18.1888 18.1888 3.75 36 3.75C53.8112 3.75 68.25 18.1888 68.25 36Z", fill: "#C4C4C4" })),
        React.createElement("g", { mask: "url(#mask0)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.9927 23.2654C26.1289 23.1362 30.0824 27.7278 29.2039 32.7879L27.6838 41.5445C30.2298 41.0514 32.9304 40.7875 35.7229 40.7875C37.7063 40.7875 39.6424 40.9206 41.5089 41.1741L49.2862 29.5726C51.7713 25.8657 56.7909 24.8751 60.4978 27.3602C64.7827 30.2326 65.3155 36.33 61.5938 39.9021L55.2585 45.9828C59.9045 49.0009 63.1305 53.2977 63.1306 58.4066V62.322C63.1306 67.644 59.6097 72.0998 54.6877 75.1077C49.7272 78.1391 43.0165 79.9412 35.7229 79.9412C28.4292 79.9412 21.7186 78.1391 16.7581 75.1077C11.836 72.0998 8.31519 67.644 8.31519 62.322V58.4067C8.31522 54.4286 10.2963 50.9169 13.3384 48.1585L13.0101 31.6154C12.9208 27.115 16.4929 23.3785 20.9927 23.2654ZM15.617 49.1514C15.6003 49.0112 15.5903 48.8688 15.5874 48.7246L15.2471 31.571C15.1822 28.3014 17.7798 25.5842 21.049 25.502C24.7712 25.4084 27.637 28.733 26.9996 32.4052L24.8971 44.5163C25.6681 44.2915 26.4607 44.0899 27.2726 43.9131C29.9138 43.338 32.7585 43.0248 35.7229 43.0248C38.1625 43.0248 40.5211 43.237 42.7519 43.6326C42.8725 43.2609 43.0459 42.8995 43.2742 42.5589L51.1446 30.8185C52.9416 28.1379 56.5714 27.4216 59.252 29.2186C62.3505 31.2957 62.7358 35.7049 60.0446 38.2879L51.5469 46.4441C52.264 46.7988 52.9486 47.1771 53.5975 47.577C58.1074 50.3568 60.8932 54.1829 60.8932 58.4066V62.322C60.8932 70.8172 49.6241 77.7039 35.7229 77.7039C21.8217 77.7039 10.5525 70.8172 10.5525 62.322V58.4067C10.5526 54.9322 12.4377 51.7266 15.617 49.1514Z", fill: secondaryColor }),
            React.createElement("path", { d: "M60.8932 62.3221C60.8932 70.8173 49.624 77.704 35.7228 77.704C21.8216 77.704 10.5525 70.8173 10.5525 62.3221V58.4067H60.8932V62.3221Z", fill: primaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.9995 32.4051C27.637 28.733 24.7711 25.4083 21.0489 25.5019C17.7797 25.5842 15.1821 28.3013 15.247 31.5709L15.5874 48.7245C15.5903 48.8687 15.6002 49.0111 15.617 49.1513C12.4376 51.7266 10.5525 54.9321 10.5525 58.4066C10.5525 66.9018 21.8216 73.7885 35.7228 73.7885C49.624 73.7885 60.8932 66.9018 60.8932 58.4066C60.8932 53.5752 57.2481 49.264 51.5468 46.444L60.0445 38.2879C62.7358 35.7048 62.3504 31.2956 59.252 29.2185C56.5714 27.4215 52.9416 28.1378 51.1446 30.8184L43.2742 42.5588C43.0458 42.8994 42.8724 43.2609 42.7519 43.6326C40.521 43.2369 38.1625 43.0248 35.7228 43.0248C31.8473 43.0248 28.1763 43.56 24.897 44.5162L26.9995 32.4051Z", fill: primaryColor }),
            React.createElement("path", { d: "M32.0873 57.2881C32.0873 59.6049 30.8352 61.4831 29.2906 61.4831C27.746 61.4831 26.4939 59.6049 26.4939 57.2881C26.4939 54.9712 27.746 53.093 29.2906 53.093C30.8352 53.093 32.0873 54.9712 32.0873 57.2881Z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28.891 54.0353C29.461 54.8903 29.8499 56.1359 29.8499 57.5677C29.8499 58.1855 30.3508 58.6864 30.9686 58.6864C31.5864 58.6864 32.0873 58.1855 32.0873 57.5677C32.0873 55.7558 31.5997 54.0649 30.7526 52.7943C29.9107 51.5314 28.6248 50.5759 27.0532 50.5759C25.4816 50.5759 24.1957 51.5314 23.3538 52.7943C22.5067 54.0649 22.0191 55.7558 22.0191 57.5677C22.0191 58.55 22.1622 59.4908 22.4244 60.3463C22.6055 60.937 23.2311 61.2691 23.8218 61.088C24.4125 60.9069 24.7446 60.2813 24.5635 59.6906C24.3685 59.0543 24.2565 58.3349 24.2565 57.5677C24.2565 56.1359 24.6454 54.8903 25.2154 54.0353C25.7906 53.1725 26.4624 52.8133 27.0532 52.8133C27.644 52.8133 28.3158 53.1725 28.891 54.0353Z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M48.1883 54.0353C48.7582 54.8903 49.1472 56.1359 49.1472 57.5677C49.1472 58.1855 49.648 58.6864 50.2658 58.6864C50.8837 58.6864 51.3845 58.1855 51.3845 57.5677C51.3845 55.7558 50.8969 54.0649 50.0498 52.7943C49.208 51.5314 47.9221 50.5759 46.3505 50.5759C44.7788 50.5759 43.4929 51.5314 42.6511 52.7943C41.804 54.0649 41.3164 55.7558 41.3164 57.5677C41.3164 58.55 41.4594 59.4908 41.7216 60.3463C41.9027 60.937 42.5284 61.2691 43.1191 61.088C43.7098 60.9069 44.0418 60.2813 43.8608 59.6906C43.6657 59.0543 43.5538 58.3349 43.5538 57.5677C43.5538 56.1359 43.9427 54.8903 44.5127 54.0353C45.0879 53.1725 45.7597 52.8133 46.3505 52.8133C46.9412 52.8133 47.613 53.1725 48.1883 54.0353Z", fill: secondaryColor }),
            React.createElement("path", { d: "M51.3844 57.2881C51.3844 59.6049 50.1323 61.4831 48.5877 61.4831C47.0431 61.4831 45.791 59.6049 45.791 57.2881C45.791 54.9712 47.0431 53.093 48.5877 53.093C50.1323 53.093 51.3844 54.9712 51.3844 57.2881Z", fill: secondaryColor }),
            React.createElement("path", { d: "M34.0221 25.9463V25.2697C34.0221 24.32 34.2121 23.5247 34.5919 22.8836C34.9956 22.2426 35.5297 21.6134 36.1945 20.9961C36.8118 20.4026 37.4172 19.8921 38.0108 19.4648C38.6043 19.0374 39.091 18.5863 39.4709 18.1115C39.8508 17.6367 40.0407 17.0787 40.0407 16.4377C40.0407 15.5118 39.7083 14.8589 39.0436 14.479C38.4025 14.0754 37.3223 13.8736 35.8028 13.8736C34.8056 13.8736 33.8203 14.0041 32.8469 14.2653C31.8735 14.5027 31.0425 14.8114 30.354 15.1912V10.3835C31.2325 9.95615 32.2652 9.61189 33.4523 9.35073C34.6632 9.08957 35.9808 8.95898 37.4054 8.95898C40.1594 8.95898 42.2606 9.5644 43.7088 10.7752C45.1571 11.9623 45.8812 13.6005 45.8812 15.6898C45.8812 17.0194 45.6082 18.0996 45.0621 18.9306C44.5161 19.7378 43.7207 20.5688 42.6761 21.4235C41.7976 22.1595 41.0616 22.8005 40.4681 23.3466C39.8745 23.8689 39.5777 24.5812 39.5777 25.4834V25.9463H34.0221ZM33.7728 32.2498V28.1187H39.7914V32.2498H33.7728Z", fill: secondaryColor })),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M71.9838 37.09L69.7348 37.0231C69.7449 36.6834 69.75 36.3423 69.75 36C69.75 35.6577 69.7449 35.3166 69.7348 34.9769L71.9838 34.91C71.9946 35.272 72 35.6354 72 36C72 36.3646 71.9946 36.728 71.9838 37.09ZM71.8544 32.7398L69.6134 32.941C69.5523 32.2603 69.471 31.5857 69.3702 30.9176L71.5949 30.5818C71.7025 31.2945 71.7892 32.014 71.8544 32.7398ZM71.2052 28.4414L69.0048 28.9115C68.8622 28.2441 68.6999 27.5841 68.5185 26.932L70.6861 26.3289C70.8798 27.0248 71.053 27.7292 71.2052 28.4414ZM70.0397 24.2525L67.9128 24.9864C67.6906 24.3424 67.4494 23.7072 67.1899 23.0815L69.2683 22.2196C69.5452 22.8874 69.8026 23.5652 70.0397 24.2525ZM68.3746 20.237L66.3524 21.2235C66.0538 20.6114 65.7373 20.0097 65.4034 19.419L67.3622 18.3119C67.7183 18.942 68.0561 19.584 68.3746 20.237ZM66.2353 16.4517L64.347 17.6751C63.977 17.104 63.5901 16.5448 63.1872 15.998L64.9984 14.6631C65.4281 15.2462 65.8407 15.8426 66.2353 16.4517ZM63.656 12.952L61.9283 14.3934C61.4925 13.8711 61.0413 13.3621 60.5752 12.8671L62.2132 11.3246C62.7102 11.8523 63.1914 12.3951 63.656 12.952ZM60.6754 9.78678L59.1329 11.4248C58.6379 10.9587 58.1289 10.5074 57.6066 10.0717L59.048 8.34397C59.6049 8.80865 60.1477 9.28984 60.6754 9.78678ZM57.3369 7.00159L56.002 8.8128C55.4552 8.40985 54.896 8.02303 54.3249 7.65302L55.5482 5.76468C56.1574 6.15933 56.7538 6.57187 57.3369 7.00159ZM53.6881 4.63782L52.581 6.5966C51.9903 6.26271 51.3886 5.94615 50.7765 5.64759L51.7629 3.62536C52.416 3.94392 53.058 4.28165 53.6881 4.63782ZM49.7804 2.7317L48.9185 4.81008C48.2928 4.55061 47.6576 4.30943 47.0136 4.08723L47.7475 1.96028C48.4348 2.19743 49.1126 2.4548 49.7804 2.7317ZM45.6711 1.31385L45.068 3.48152C44.4159 3.3001 43.7559 3.13777 43.0885 2.99517L43.5586 0.794831C44.2708 0.947003 44.9752 1.12024 45.6711 1.31385ZM41.4182 0.405049L41.0824 2.62985C40.4143 2.529 39.7397 2.44772 39.059 2.38662L39.2602 0.14563C39.986 0.210778 40.7055 0.297466 41.4182 0.405049ZM37.09 0.0161859C36.728 0.0054207 36.3646 0 36 0C35.6354 0 35.272 0.00542073 34.91 0.016186L34.9769 2.26519C35.3166 2.25509 35.6577 2.25 36 2.25C36.3423 2.25 36.6834 2.25509 37.0231 2.26519L37.09 0.0161859ZM32.7398 0.145631L32.941 2.38662C32.2603 2.44772 31.5857 2.529 30.9176 2.62985L30.5818 0.405049C31.2945 0.297467 32.014 0.210779 32.7398 0.145631ZM28.4414 0.794832L28.9115 2.99517C28.2441 3.13777 27.5841 3.3001 26.932 3.48152L26.3289 1.31386C27.0248 1.12024 27.7292 0.947004 28.4414 0.794832ZM24.2525 1.96028L24.9864 4.08723C24.3424 4.30944 23.7072 4.55061 23.0815 4.81008L22.2196 2.7317C22.8874 2.45481 23.5652 2.19743 24.2525 1.96028ZM20.237 3.62536L21.2235 5.64759C20.6114 5.94616 20.0097 6.26272 19.419 6.5966L18.3119 4.63783C18.942 4.28165 19.584 3.94392 20.237 3.62536ZM16.4517 5.76469L17.6751 7.65302C17.104 8.02303 16.5448 8.40985 15.998 8.81281L14.6631 7.00159C15.2462 6.57188 15.8426 6.15933 16.4517 5.76469ZM12.952 8.34398L14.3934 10.0717C13.8711 10.5075 13.3621 10.9587 12.8671 11.4248L11.3246 9.78679C11.8523 9.28984 12.3951 8.80865 12.952 8.34398ZM9.78678 11.3246L11.4248 12.8671C10.9587 13.3621 10.5074 13.8711 10.0717 14.3934L8.34397 12.952C8.80865 12.3951 9.28984 11.8523 9.78678 11.3246ZM7.00159 14.6631L8.8128 15.998C8.40985 16.5448 8.02303 17.104 7.65302 17.6751L5.76468 16.4518C6.15933 15.8426 6.57187 15.2462 7.00159 14.6631ZM4.63782 18.3119L6.5966 19.419C6.26271 20.0097 5.94615 20.6114 5.64759 21.2235L3.62536 20.2371C3.94392 19.584 4.28165 18.942 4.63782 18.3119ZM2.7317 22.2196L4.81008 23.0815C4.55061 23.7072 4.30943 24.3424 4.08723 24.9864L1.96028 24.2525C2.19743 23.5652 2.4548 22.8874 2.7317 22.2196ZM1.31385 26.3289L3.48152 26.932C3.3001 27.5841 3.13777 28.2441 2.99517 28.9115L0.794831 28.4414C0.947003 27.7292 1.12024 27.0248 1.31385 26.3289ZM0.405049 30.5818L2.62985 30.9176C2.529 31.5857 2.44772 32.2603 2.38662 32.941L0.14563 32.7398C0.210778 32.014 0.297466 31.2945 0.405049 30.5818ZM0.0161859 34.91C0.0054207 35.272 0 35.6354 0 36C0 36.3646 0.00542073 36.728 0.016186 37.09L2.26519 37.0231C2.25509 36.6834 2.25 36.3423 2.25 36C2.25 35.6577 2.25509 35.3166 2.26519 34.9769L0.0161859 34.91ZM0.145631 39.2602L2.38662 39.059C2.44772 39.7397 2.529 40.4143 2.62985 41.0824L0.40505 41.4182C0.297467 40.7055 0.210779 39.986 0.145631 39.2602ZM0.794833 43.5586L2.99517 43.0885C3.13777 43.7559 3.3001 44.4159 3.48152 45.068L1.31386 45.6711C1.12024 44.9752 0.947004 44.2708 0.794833 43.5586ZM1.96028 47.7475L4.08723 47.0136C4.30944 47.6576 4.55061 48.2928 4.81008 48.9185L2.7317 49.7804C2.45481 49.1126 2.19743 48.4348 1.96028 47.7475ZM3.62536 51.763L5.64759 50.7765C5.94616 51.3886 6.26272 51.9903 6.5966 52.581L4.63783 53.6881C4.28165 53.058 3.94392 52.416 3.62536 51.763ZM5.76469 55.5482L7.65302 54.3249C8.02303 54.896 8.40985 55.4552 8.81281 56.002L7.00159 57.3369C6.57188 56.7538 6.15933 56.1574 5.76469 55.5482ZM8.34398 59.048L10.0717 57.6066C10.5075 58.1289 10.9587 58.6379 11.4248 59.1329L9.78679 60.6754C9.28984 60.1477 8.80865 59.6049 8.34398 59.048ZM11.3246 62.2132L12.8671 60.5752C13.3621 61.0413 13.8711 61.4925 14.3934 61.9283L12.952 63.656C12.3951 63.1914 11.8523 62.7102 11.3246 62.2132ZM14.6631 64.9984L15.998 63.1872C16.5448 63.5901 17.104 63.977 17.6751 64.347L16.4518 66.2353C15.8426 65.8407 15.2462 65.4281 14.6631 64.9984ZM18.3119 67.3622L19.419 65.4034C20.0097 65.7373 20.6114 66.0538 21.2235 66.3524L20.2371 68.3746C19.584 68.0561 18.942 67.7184 18.3119 67.3622ZM22.2196 69.2683L23.0815 67.1899C23.7072 67.4494 24.3424 67.6906 24.9864 67.9128L24.2525 70.0397C23.5652 69.8026 22.8874 69.5452 22.2196 69.2683ZM26.3289 70.6861L26.932 68.5185C27.5841 68.6999 28.2441 68.8622 28.9115 69.0048L28.4414 71.2052C27.7292 71.053 27.0248 70.8798 26.3289 70.6861ZM30.5818 71.595L30.9176 69.3702C31.5857 69.471 32.2603 69.5523 32.941 69.6134L32.7398 71.8544C32.014 71.7892 31.2945 71.7025 30.5818 71.595ZM34.91 71.9838L34.9769 69.7348C35.3166 69.7449 35.6577 69.75 36 69.75C36.3423 69.75 36.6834 69.7449 37.0231 69.7348L37.09 71.9838C36.728 71.9946 36.3646 72 36 72C35.6354 72 35.272 71.9946 34.91 71.9838ZM39.2602 71.8544L39.059 69.6134C39.7397 69.5523 40.4143 69.471 41.0824 69.3702L41.4182 71.5949C40.7055 71.7025 39.986 71.7892 39.2602 71.8544ZM43.5586 71.2052L43.0885 69.0048C43.7559 68.8622 44.4159 68.6999 45.068 68.5185L45.6711 70.6861C44.9752 70.8798 44.2708 71.053 43.5586 71.2052ZM47.7475 70.0397L47.0136 67.9128C47.6576 67.6906 48.2928 67.4494 48.9185 67.1899L49.7804 69.2683C49.1126 69.5452 48.4348 69.8026 47.7475 70.0397ZM51.7629 68.3746L50.7765 66.3524C51.3886 66.0538 51.9903 65.7373 52.581 65.4034L53.6881 67.3622C53.058 67.7183 52.416 68.0561 51.7629 68.3746ZM55.5482 66.2353L54.3249 64.347C54.896 63.977 55.4552 63.5901 56.002 63.1872L57.3369 64.9984C56.7538 65.4281 56.1574 65.8407 55.5482 66.2353ZM59.048 63.656L57.6066 61.9283C58.1289 61.4925 58.6379 61.0413 59.1329 60.5752L60.6754 62.2132C60.1477 62.7102 59.6049 63.1914 59.048 63.656ZM62.2132 60.6754L60.5752 59.1329C61.0413 58.6379 61.4925 58.1289 61.9283 57.6066L63.656 59.048C63.1914 59.6049 62.7102 60.1477 62.2132 60.6754ZM64.9984 57.3369L63.1872 56.002C63.5901 55.4552 63.977 54.896 64.347 54.3249L66.2353 55.5482C65.8407 56.1574 65.4281 56.7538 64.9984 57.3369ZM67.3622 53.6881L65.4034 52.581C65.7373 51.9903 66.0538 51.3886 66.3524 50.7765L68.3746 51.7629C68.0561 52.416 67.7184 53.058 67.3622 53.6881ZM69.2683 49.7804L67.1899 48.9185C67.4494 48.2928 67.6906 47.6576 67.9128 47.0136L70.0397 47.7475C69.8026 48.4348 69.5452 49.1126 69.2683 49.7804ZM70.6861 45.6711L68.5185 45.068C68.6999 44.4159 68.8622 43.7559 69.0048 43.0885L71.2052 43.5586C71.053 44.2708 70.8798 44.9752 70.6861 45.6711ZM71.595 41.4182L69.3702 41.0824C69.471 40.4143 69.5523 39.7397 69.6134 39.059L71.8544 39.2602C71.7892 39.986 71.7025 40.7055 71.595 41.4182Z", fill: secondaryColor })));
};

var Icon$d = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$e = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 24" }, props),
        React.createElement("path", { d: "M19.2 3H5.19995C4.09995 3 3.19995 3.9 3.19995 5V19C3.19995 20.1 4.09995 21 5.19995 21H19.2C20.3 21 21.2 20.1 21.2 19V5C21.2 3.9 20.3 3 19.2 3ZM19.2 19H5.19995V5H19.2V19Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M11.45 7.72021H6.44995V9.22022H11.45V7.72021Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M18.2 15.75H13.2V17.25H18.2V15.75Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M18.2 13.25H13.2V14.75H18.2V13.25Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M8.19995 18H9.69995V16H11.7V14.5H9.69995V12.5H8.19995V14.5H6.19995V16H8.19995V18Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M14.29 10.95L15.7 9.54L17.11 10.95L18.17 9.89L16.76 8.47L18.17 7.06L17.11 6L15.7 7.41L14.29 6L13.23 7.06L14.64 8.47L13.23 9.89L14.29 10.95Z", fill: "#1FC7D4" })));
};

var Icon$f = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 18 13" }, props),
        React.createElement("path", { d: "M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" })));
};

var Icon$g = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$h = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$i = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$j = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$k = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" })));
};

var Icon$l = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$m = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$n = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$o = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM9 14H11V16H9V14ZM10.61 4.04C8.55 3.74 6.73 5.01 6.18 6.83C6 7.41 6.44 8 7.05 8H7.25C7.66 8 7.99 7.71 8.13 7.33C8.45 6.44 9.4 5.83 10.43 6.05C11.38 6.25 12.08 7.18 12 8.15C11.9 9.49 10.38 9.78 9.55 11.03C9.55 11.04 9.54 11.04 9.54 11.05C9.53 11.07 9.52 11.08 9.51 11.1C9.42 11.25 9.33 11.42 9.26 11.6C9.25 11.63 9.23 11.65 9.22 11.68C9.21 11.7 9.21 11.72 9.2 11.75C9.08 12.09 9 12.5 9 13H11C11 12.58 11.11 12.23 11.28 11.93C11.3 11.9 11.31 11.87 11.33 11.84C11.41 11.7 11.51 11.57 11.61 11.45C11.62 11.44 11.63 11.42 11.64 11.41C11.74 11.29 11.85 11.18 11.97 11.07C12.93 10.16 14.23 9.42 13.96 7.51C13.72 5.77 12.35 4.3 10.61 4.04Z" })));
};

var Icon$p = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip1" },
                React.createElement("path", { d: "M 45 40.640625 L 329 40.640625 L 329 334.640625 L 45 334.640625 Z M 45 40.640625 " })),
            React.createElement("clipPath", { id: "clip2" },
                React.createElement("path", { d: "M 125 112.5 L 164.632812 112.5 L 164.632812 262.5 L 125 262.5 Z M 125 112.5 " }))),
        React.createElement("g", { id: "surface1" },
            React.createElement("path", { d: "M 83.355469 266.023438 C 83.367188 266.035156 83.367188 266.046875 83.378906 266.070312 C 83.390625 266.070312 83.390625 266.070312 83.402344 266.070312 L 83.355469 266.023438 " }),
            React.createElement("path", { d: "M 67.992188 232.832031 C 67.980469 232.832031 67.96875 232.84375 67.957031 232.855469 C 67.957031 232.855469 67.957031 232.867188 67.945312 232.878906 L 67.992188 232.832031 " }),
            React.createElement("g", { "clip-path": "url(#clip1)", "clip-rule": "nonzero" },
                React.createElement("path", { d: "M 321.542969 207.636719 C 321.578125 208.074219 321.578125 208.464844 321.476562 208.886719 C 321.316406 209.554688 321.179688 210.242188 321.109375 210.933594 C 321.019531 211.78125 321.03125 212.609375 320.675781 213.445312 C 320.433594 214.011719 320.503906 214.710938 320.480469 215.34375 C 320.445312 216.007812 320.285156 216.59375 320.023438 217.203125 C 319.519531 218.316406 319.140625 219.476562 318.695312 220.613281 C 318.214844 221.867188 317.710938 223.105469 317.21875 224.347656 C 317.164062 224.496094 317.039062 224.621094 317.003906 224.769531 C 316.441406 227.445312 314.726562 229.59375 313.6875 232.039062 C 313.523438 232.429688 313.238281 232.773438 313.035156 233.144531 C 311.980469 235.003906 311.007812 236.921875 309.910156 238.757812 C 309.144531 240.035156 308.457031 241.367188 307.667969 242.628906 C 307.449219 242.996094 307.199219 243.328125 306.957031 243.683594 C 306.203125 244.789062 305.449219 245.890625 304.695312 246.980469 C 304.453125 247.335938 304.234375 247.726562 303.925781 248.003906 C 302.875 248.96875 302.1875 250.175781 301.511719 251.390625 C 301.332031 251.714844 301.171875 252.105469 300.882812 252.308594 C 299.945312 253 299.546875 254.101562 298.800781 254.941406 C 298.148438 255.699219 297.578125 256.546875 296.949219 257.386719 C 296.640625 256.996094 296.949219 256.847656 297.050781 256.640625 C 297.519531 255.6875 297.980469 254.722656 298.460938 253.78125 C 299.03125 252.6875 299.625 251.621094 300.210938 250.542969 C 300.667969 249.703125 300.988281 248.785156 301.652344 248.074219 C 302.152344 246.144531 303.355469 244.5 303.972656 242.628906 C 304.417969 241.273438 304.992188 239.941406 305.230469 238.507812 C 305.335938 237.886719 305.675781 237.300781 305.835938 236.679688 C 306.328125 234.820312 306.992188 233.003906 307.667969 231.203125 C 307.726562 231.050781 307.769531 230.890625 307.792969 230.730469 C 307.988281 228.664062 308.457031 226.621094 308.550781 224.53125 C 308.558594 224 308.675781 223.484375 308.753906 222.957031 C 308.765625 222.851562 308.835938 222.738281 308.8125 222.644531 C 308.457031 221.324219 309.074219 220.152344 309.328125 218.925781 C 309.40625 218.535156 309.371094 218.097656 309.257812 217.707031 C 311.214844 208.96875 312.265625 199.882812 312.265625 190.546875 C 312.265625 167.519531 305.996094 145.964844 295.117188 127.476562 C 295.597656 127.878906 296.046875 128.324219 296.398438 128.863281 C 296.605469 129.175781 296.890625 129.429688 297.15625 129.691406 C 297.304688 129.839844 297.519531 129.957031 297.613281 130.128906 C 298.171875 131.300781 299.078125 132.207031 299.832031 133.230469 C 300.644531 134.355469 301.457031 135.492188 302.222656 136.640625 C 303.058594 137.890625 303.824219 139.179688 304.648438 140.429688 C 305.847656 142.277344 306.707031 144.300781 307.667969 146.265625 C 307.953125 146.839844 308.332031 147.355469 308.6875 147.894531 C 308.949219 148.296875 309.222656 148.6875 309.511719 149.078125 C 310.035156 149.824219 310.492188 150.640625 311.121094 151.269531 C 311.957031 152.085938 312.484375 153.050781 312.816406 154.128906 C 313.171875 155.3125 313.617188 156.449219 314.15625 157.5625 C 314.441406 158.171875 314.488281 158.898438 314.703125 159.5625 C 315.09375 160.78125 315.527344 161.984375 315.929688 163.203125 C 316.671875 165.441406 317.210938 167.726562 317.746094 170.011719 C 318.789062 174.390625 319.554688 178.808594 320.160156 183.265625 C 320.445312 185.378906 320.722656 187.503906 321.269531 189.582031 C 321.636719 190.960938 321.625 192.453125 321.648438 193.890625 C 321.671875 195.601562 321.453125 197.3125 321.820312 199 C 321.855469 199.160156 321.921875 199.320312 321.898438 199.472656 C 321.773438 200.804688 321.578125 202.125 321.523438 203.457031 C 321.453125 204.84375 321.476562 206.246094 321.542969 207.636719 Z M 207.089844 323.15625 C 207.285156 323.167969 207.46875 323.167969 207.660156 323.167969 C 207.648438 323.351562 207.648438 323.558594 207.582031 323.71875 C 207.535156 323.835938 207.351562 323.871094 207.226562 323.9375 C 207.148438 323.8125 207.042969 323.695312 207.019531 323.558594 C 207.007812 323.433594 207.066406 323.296875 207.089844 323.15625 Z M 299.410156 261.496094 C 298.4375 263.09375 297.40625 264.644531 295.976562 265.894531 C 295.507812 266.308594 295.164062 266.882812 294.808594 267.414062 C 294.464844 267.953125 294.214844 268.550781 293.859375 269.089844 C 293.414062 269.753906 292.921875 270.375 292.054688 270.582031 C 291.664062 270.683594 291.332031 270.984375 290.933594 271.214844 C 290.976562 271.546875 291 271.8125 291.035156 272.0625 C 291.113281 272.625 291 273.15625 290.667969 273.589844 C 289.765625 274.726562 289.136719 276.035156 288.335938 277.230469 C 287.625 278.3125 286.917969 279.390625 286.128906 280.390625 C 285.726562 280.90625 285.40625 281.457031 285.15625 282.042969 C 284.984375 282.433594 284.855469 282.859375 284.617188 283.214844 C 283.425781 284.984375 282.339844 286.855469 280.886719 288.417969 C 279.765625 289.632812 278.65625 290.839844 277.179688 291.703125 C 276.289062 292.21875 275.707031 293.160156 274.90625 294.207031 C 276.175781 294.011719 276.804688 292.953125 277.980469 293.035156 C 277.960938 293.332031 278.015625 293.675781 277.902344 293.929688 C 277.695312 294.355469 277.386719 294.746094 277.125 295.136719 C 276.90625 295.445312 276.597656 295.722656 276.484375 296.054688 C 275.96875 297.5 274.753906 298.339844 273.726562 299.316406 C 273.347656 299.683594 272.855469 299.949219 272.410156 300.222656 C 271.769531 300.601562 271.105469 300.910156 270.558594 301.464844 C 270.191406 301.820312 269.652344 302.015625 269.128906 302.324219 C 269.023438 303.347656 268.085938 303.945312 267.59375 304.816406 C 267.515625 304.941406 267.34375 305.105469 267.21875 305.105469 C 266.4375 305.082031 266.050781 305.863281 265.433594 306.011719 C 264.621094 306.195312 264.378906 307 263.660156 307.285156 C 263.074219 307.515625 262.664062 308.214844 262.183594 308.710938 C 262.035156 308.859375 261.910156 309.054688 261.726562 309.15625 C 261.1875 309.480469 260.535156 309.6875 260.078125 310.097656 C 259.621094 310.523438 259.3125 311.0625 258.695312 311.363281 C 258.238281 311.582031 257.917969 312.0625 257.414062 312.535156 C 257.296875 312.5 257.058594 312.441406 256.75 312.363281 C 255.730469 313.246094 254.554688 313.933594 253.191406 314.292969 C 252.21875 314.542969 251.511719 315.175781 251.019531 316.035156 C 250.914062 316.21875 250.789062 316.394531 250.628906 316.632812 C 250.367188 316.578125 250.125 316.496094 249.875 316.460938 C 249.128906 316.335938 248.46875 316.4375 247.78125 316.886719 C 246.808594 317.53125 245.8125 318.136719 244.554688 318.183594 C 243.777344 318.21875 243.011719 318.550781 242.234375 318.65625 C 241.453125 318.757812 240.789062 318.976562 240.4375 319.839844 C 239.359375 319.390625 238.410156 319.851562 237.425781 320.035156 C 236.421875 320.21875 235.4375 320.378906 234.589844 321.03125 C 234.316406 321.238281 233.902344 321.320312 233.539062 321.378906 C 232.222656 321.617188 230.941406 321.894531 229.71875 322.46875 C 229.304688 322.664062 228.734375 322.546875 228.320312 322.753906 C 227.453125 323.191406 226.515625 323.296875 225.621094 323.558594 C 224.238281 323.984375 222.84375 324.304688 221.433594 324.570312 C 221.285156 324.605469 221.136719 324.671875 221 324.753906 C 218.941406 325.902344 216.5625 325.777344 214.398438 326.5 C 212.914062 326.476562 211.515625 327.210938 210.007812 327.0625 C 209.378906 327.003906 208.804688 327.359375 208.128906 327.359375 C 206.757812 327.382812 205.382812 327.660156 204.011719 327.808594 C 203.601562 327.855469 203.164062 327.832031 202.742188 327.796875 C 202.640625 327.785156 202.535156 327.625 202.308594 327.417969 C 202.695312 327.324219 202.9375 327.257812 203.175781 327.222656 C 204.445312 327.039062 205.714844 326.890625 206.988281 326.695312 C 207.339844 326.636719 207.683594 326.476562 208.039062 326.371094 C 208.289062 326.292969 208.542969 326.15625 208.792969 326.15625 C 209.605469 326.132812 210.382812 326.027344 211.082031 325.558594 C 211.289062 325.417969 211.609375 325.363281 211.859375 325.40625 C 212.890625 325.558594 213.746094 325.085938 214.605469 324.671875 C 215.246094 324.363281 215.875 324.191406 216.585938 324.097656 C 217.417969 323.984375 218.242188 323.707031 219.042969 323.445312 C 220.621094 322.949219 222.109375 322.25 223.632812 321.59375 C 223.699219 321.214844 223.804688 320.894531 223.792969 320.597656 C 223.769531 320.183594 223.78125 319.664062 223.550781 319.378906 C 223.21875 318.964844 222.796875 319.367188 222.40625 319.515625 C 222.234375 319.585938 222.007812 319.527344 221.800781 319.515625 C 221.273438 319.460938 220.726562 319.285156 220.234375 319.378906 C 218.929688 319.632812 217.648438 320 216.4375 320.285156 C 216.058594 320.769531 216.527344 320.929688 216.597656 321.214844 C 216.675781 321.550781 216.539062 321.710938 216.125 321.769531 C 215.945312 321.433594 215.761719 321.078125 215.519531 320.640625 C 215.316406 320.769531 214.996094 320.859375 214.996094 320.964844 C 214.996094 321.652344 214.410156 321.757812 213.929688 322.078125 C 213.691406 321.746094 213.449219 321.410156 213.175781 321.03125 C 212.121094 320.953125 210.96875 320.492188 210.167969 321.777344 C 210.292969 322.054688 210.464844 322.332031 210.542969 322.628906 C 210.648438 323.019531 210.222656 323.421875 209.878906 323.296875 C 209.582031 323.179688 209.320312 322.925781 209.023438 322.894531 C 208.75 322.859375 208.4375 323.042969 208.140625 323.101562 C 208.015625 323.132812 207.878906 323.121094 207.742188 323.121094 C 207.96875 322.882812 208.1875 322.640625 208.417969 322.386719 C 207.605469 321.871094 206.804688 322.148438 206.046875 322.066406 C 205.695312 322.019531 205.566406 322.296875 205.695312 322.730469 C 205.738281 322.871094 205.863281 322.984375 205.96875 323.121094 C 206.140625 323.109375 206.289062 323.089844 206.449219 323.089844 C 206.644531 323.101562 206.847656 323.132812 207.042969 323.15625 C 206.539062 323.433594 206.929688 324.03125 206.574219 324.453125 C 206.324219 324.535156 205.96875 324.648438 205.488281 324.800781 C 205.269531 324.535156 205.085938 324.132812 204.789062 323.996094 C 204.492188 323.859375 204.082031 323.960938 203.613281 323.960938 C 203.460938 324.203125 203.292969 324.523438 203.0625 324.800781 C 202.890625 324.996094 202.660156 325.179688 202.433594 325.246094 C 201.722656 325.441406 200.96875 325.417969 200.304688 325.832031 C 200.144531 325.925781 199.777344 325.796875 199.574219 325.671875 C 199.367188 325.535156 199.253906 325.257812 199.035156 324.960938 C 198.613281 325.363281 198.316406 325.636719 197.984375 325.949219 C 197.605469 325.867188 197.214844 325.777344 196.828125 325.695312 C 196.644531 325.972656 196.496094 326.1875 196.347656 326.394531 C 196.105469 326.417969 195.980469 326.316406 195.476562 325.671875 C 195.273438 325.683594 195.007812 325.71875 194.757812 325.730469 C 194.492188 325.742188 194.230469 325.730469 193.980469 325.730469 C 193.886719 325.808594 193.785156 325.855469 193.738281 325.949219 C 193.03125 327.40625 192.730469 327.1875 191.632812 326.730469 C 190.707031 326.339844 189.792969 326.199219 188.820312 326.476562 C 188.589844 326.546875 188.316406 326.464844 188.066406 326.464844 C 187.8125 326.464844 187.457031 326.371094 187.320312 326.511719 C 186.796875 327.015625 186.085938 326.613281 185.605469 327.128906 C 185.355469 326.761719 185.195312 326.546875 185.078125 326.382812 C 184.347656 326.511719 183.707031 326.554688 183.101562 326.742188 C 182.710938 326.855469 182.355469 327.347656 182.011719 327.316406 C 181.613281 327.28125 181.199219 327.199219 180.800781 327.304688 C 180.550781 327.371094 180.332031 327.542969 180 327.714844 C 179.589844 327.382812 179.152344 327.003906 178.695312 326.648438 C 177.894531 326.027344 177.09375 325.441406 176.007812 325.351562 C 175.402344 325.292969 174.816406 324.925781 174.246094 324.671875 C 173.273438 324.25 172.3125 323.8125 171.179688 323.304688 C 172.390625 323.078125 173.34375 323.5 174.324219 323.59375 C 176.773438 323.847656 179.210938 324.121094 181.679688 324.085938 C 183.132812 324.066406 184.542969 323.8125 185.984375 323.707031 C 186.28125 323.683594 186.589844 323.523438 186.863281 323.375 C 187.125 323.238281 187.070312 322.617188 186.785156 322.570312 C 185.835938 322.398438 185 321.871094 184.003906 321.847656 C 182.230469 321.789062 180.550781 321.226562 178.902344 320.597656 C 178.054688 320.261719 177.230469 319.859375 176.328125 319.734375 C 176.066406 319.699219 175.765625 319.65625 175.5625 319.515625 C 173.800781 318.3125 171.773438 317.816406 169.75 317.347656 C 169.441406 317.277344 169.132812 317.164062 168.847656 317.011719 C 166.945312 316.035156 164.96875 315.246094 162.953125 314.53125 C 161.890625 314.152344 160.828125 313.855469 159.71875 313.660156 C 159.085938 313.542969 158.46875 313.476562 157.964844 312.96875 C 157.773438 312.773438 157.382812 312.707031 157.085938 312.683594 C 156.492188 312.660156 155.953125 312.523438 155.382812 312.292969 C 153.847656 311.671875 152.269531 311.191406 150.726562 310.605469 C 148.792969 309.871094 146.777344 309.285156 144.902344 308.421875 C 142.730469 307.414062 140.476562 306.550781 138.484375 305.148438 C 138.027344 304.828125 137.410156 304.703125 136.835938 304.597656 C 135.875 304.4375 135.191406 303.898438 134.5625 303.199219 C 134.273438 302.875 134.160156 302.507812 134.148438 302.105469 C 150.566406 310.191406 169.027344 314.738281 188.558594 314.738281 C 230.472656 314.738281 267.492188 293.804688 289.855469 261.785156 C 289.789062 261.933594 289.707031 262.070312 289.640625 262.222656 C 289.078125 263.3125 288.5625 264.390625 287.601562 265.207031 C 287.476562 265.300781 287.410156 265.460938 287.363281 265.621094 C 286.789062 267.457031 285.371094 268.753906 284.375 270.316406 C 284.148438 270.671875 283.886719 271.019531 283.644531 271.363281 C 282.558594 272.960938 281.402344 274.476562 280.191406 275.96875 C 279.902344 276.324219 279.550781 276.484375 279.195312 276.542969 C 278.738281 278.183594 278.28125 279.722656 277.179688 280.953125 C 276.65625 281.550781 276.128906 282.136719 275.589844 282.722656 C 274.734375 283.664062 273.863281 284.605469 272.992188 285.558594 C 272.925781 285.636719 272.789062 285.695312 272.765625 285.777344 C 272.582031 286.914062 271.542969 287.347656 270.890625 288.09375 C 270.464844 288.566406 270.054688 289.046875 269.652344 289.542969 C 268.886719 290.496094 267.972656 291.34375 267.046875 292.148438 C 265.992188 293.066406 265.101562 294.125 264.183594 295.160156 C 264.058594 295.308594 264.035156 295.539062 263.933594 295.824219 C 265.179688 295.929688 266.128906 295.503906 266.78125 294.605469 C 267.367188 293.792969 268.132812 293.25 268.910156 292.679688 C 269.460938 292.265625 269.984375 291.792969 270.488281 291.3125 C 271.070312 290.761719 271.597656 290.175781 272.308594 289.75 C 272.789062 289.460938 273.121094 288.910156 273.53125 288.507812 C 274.835938 287.234375 276.082031 285.914062 277.214844 284.5 C 278.53125 282.871094 280.007812 281.398438 281.300781 279.757812 C 282.316406 279.195312 282.613281 277.964844 283.496094 277.277344 C 283.65625 277.152344 283.757812 276.933594 283.863281 276.75 C 284.640625 275.257812 285.691406 274.015625 287.007812 272.960938 C 287.625 272.464844 288.242188 271.902344 288.710938 271.269531 C 289.421875 270.304688 290.347656 269.582031 291.171875 268.753906 C 291.652344 268.261719 292.085938 267.722656 292.566406 267.226562 C 293.917969 265.863281 295.3125 264.53125 296.652344 263.152344 C 297.097656 262.703125 297.542969 262.210938 297.828125 261.648438 C 298.195312 260.921875 298.734375 260.488281 299.523438 260.152344 C 299.761719 260.660156 299.648438 261.105469 299.410156 261.496094 Z M 201.050781 327.933594 C 201.003906 327.933594 200.957031 327.898438 200.910156 327.878906 C 200.957031 327.820312 201.003906 327.761719 201.050781 327.714844 C 201.09375 327.773438 201.140625 327.820312 201.1875 327.878906 C 201.140625 327.898438 201.09375 327.933594 201.050781 327.933594 Z M 198.15625 327.878906 C 198.121094 327.878906 198.097656 327.726562 198.0625 327.636719 C 198.1875 327.601562 198.304688 327.542969 198.429688 327.53125 C 198.464844 327.53125 198.507812 327.695312 198.554688 327.820312 C 198.417969 327.84375 198.28125 327.878906 198.15625 327.878906 Z M 178.523438 328.324219 C 178.488281 328.347656 178.363281 328.257812 178.285156 328.222656 C 178.375 328.0625 178.46875 327.898438 178.582031 327.75 C 178.59375 327.738281 178.742188 327.820312 178.914062 327.898438 C 178.765625 328.0625 178.660156 328.210938 178.523438 328.324219 Z M 177.792969 330.175781 C 177.699219 330.140625 177.644531 329.980469 177.5625 329.875 C 177.675781 329.828125 177.792969 329.714844 177.894531 329.726562 C 178.03125 329.75 178.148438 329.851562 178.410156 330 C 178.042969 330.117188 177.90625 330.207031 177.792969 330.175781 Z M 136.460938 309.871094 C 136.277344 309.730469 136.164062 309.652344 136.046875 309.558594 C 136.140625 309.457031 136.21875 309.285156 136.3125 309.285156 C 136.425781 309.273438 136.609375 309.375 136.65625 309.480469 C 136.6875 309.546875 136.550781 309.699219 136.460938 309.871094 Z M 118.910156 293.640625 C 117.753906 293.089844 116.613281 292.527344 115.640625 291.644531 C 115.214844 291.242188 114.703125 290.945312 114.230469 290.585938 C 113.511719 290.046875 112.800781 289.484375 112.070312 288.957031 C 111.679688 288.667969 111.292969 288.300781 110.859375 288.1875 C 109.1875 287.726562 107.976562 286.601562 106.660156 285.59375 C 106.40625 285.398438 106.15625 285.203125 105.882812 285.027344 C 104.429688 284.144531 102.964844 283.273438 101.5 282.398438 C 100.539062 281.824219 99.566406 281.261719 98.59375 280.699219 C 98.226562 280.492188 97.828125 280.34375 97.449219 280.136719 C 95.847656 279.296875 94.75 277.898438 93.570312 276.589844 C 92.128906 275.003906 90.65625 273.453125 89.191406 271.890625 C 88.824219 271.5 88.433594 271.144531 87.714844 271.269531 C 88.082031 272.625 88.9375 273.636719 89.648438 274.726562 C 90.378906 275.839844 91.191406 276.898438 92.027344 278.070312 C 91.226562 278.253906 90.539062 278.402344 89.820312 278.082031 C 89.488281 277.933594 89.109375 277.804688 88.746094 277.78125 C 88.230469 277.757812 87.816406 277.585938 87.464844 277.21875 C 87.257812 277 87.027344 277.011719 86.742188 277.035156 C 86 277.082031 85.484375 276.589844 85.792969 276.046875 C 86.433594 274.945312 85.976562 274.292969 85.210938 273.566406 C 84.785156 273.175781 84.582031 272.582031 84.226562 272.097656 C 83.609375 271.269531 83.78125 270.261719 83.425781 269.339844 C 83.8125 268.929688 84.179688 268.550781 84.570312 268.148438 C 84.15625 267.421875 83.769531 266.746094 83.378906 266.070312 C 82.144531 265.917969 82.085938 265.851562 81.960938 264.667969 C 81.9375 264.472656 81.925781 264.183594 81.800781 264.09375 C 80.851562 263.359375 81.023438 262.277344 80.886719 261.289062 C 80.839844 261.003906 80.828125 260.695312 80.78125 260.269531 C 80.496094 260.464844 80.335938 260.578125 80.164062 260.683594 C 79.261719 261.257812 78.207031 260.980469 78.035156 259.96875 C 77.808594 258.636719 77.121094 257.628906 76.273438 256.652344 C 75.78125 256.089844 75.851562 255.375 76.414062 254.585938 C 76.5625 254.824219 76.6875 255.03125 76.824219 255.238281 C 76.972656 255.445312 77.121094 255.6875 77.304688 255.859375 C 77.554688 256.113281 77.957031 256.089844 78.152344 255.847656 C 78.367188 255.59375 78.300781 255.273438 77.945312 255.054688 C 77.683594 254.882812 77.394531 254.757812 77.132812 254.605469 C 77.0625 254 76.984375 253.445312 76.902344 252.746094 C 76.628906 253.066406 76.46875 253.242188 76.273438 253.457031 C 76.113281 253.046875 75.988281 252.667969 75.816406 252.296875 C 75.667969 251.988281 75.460938 251.691406 75.269531 251.367188 C 75.039062 251.484375 74.8125 251.597656 74.546875 251.734375 C 74.011719 251.496094 73.574219 251.140625 73.3125 250.566406 C 72.945312 249.738281 72.511719 248.933594 72.203125 248.085938 C 71.949219 247.382812 71.800781 246.648438 71.664062 245.914062 C 71.585938 245.417969 71.9375 245.234375 72.476562 245.441406 C 72.601562 245.5 72.738281 245.535156 72.957031 245.613281 C 72.980469 245.179688 73.003906 244.824219 73.027344 244.398438 C 72.773438 244.257812 72.523438 244.121094 72.226562 243.960938 C 72.179688 243.492188 72.132812 243.007812 72.089844 242.570312 C 71.769531 242.421875 71.699219 242.628906 71.5625 242.789062 C 71.230469 243.15625 70.933594 243.203125 70.625 242.9375 C 70.167969 242.558594 69.742188 242.15625 69.273438 241.746094 C 68.917969 239.804688 68.414062 237.851562 67.671875 235.957031 C 67.488281 235.460938 67.421875 234.933594 67.261719 234.417969 C 67.03125 233.671875 67.363281 233.210938 67.957031 232.855469 C 68.128906 232.476562 68.300781 232.097656 68.507812 231.636719 C 68.175781 230.9375 67.808594 230.191406 67.453125 229.46875 C 66.964844 229.375 66.804688 229.570312 66.859375 229.984375 C 66.882812 230.132812 67.019531 230.285156 67.007812 230.421875 C 66.984375 230.617188 66.917969 230.859375 66.78125 230.949219 C 66.550781 231.121094 66.011719 230.902344 66.011719 230.617188 C 66.003906 229.894531 65.625 229.179688 65.886719 228.355469 C 66.183594 228.445312 66.425781 228.515625 66.664062 228.582031 C 66.746094 228.527344 66.871094 228.480469 66.882812 228.410156 C 66.917969 228.203125 66.847656 227.953125 66.941406 227.792969 C 67.132812 227.414062 67.464844 227.023438 67.226562 226.609375 C 67.03125 226.273438 66.621094 226.058594 66.265625 225.746094 C 66.265625 225.425781 66.265625 225.070312 66.265625 224.703125 C 65.601562 224.632812 65.84375 225.414062 65.382812 225.503906 C 65.03125 225.503906 65.097656 225.148438 64.960938 224.953125 C 64.960938 224.953125 64.960938 224.953125 64.960938 224.941406 C 65.453125 224.414062 65.417969 223.75 65.382812 223.023438 C 65.074219 222.839844 64.777344 222.667969 64.433594 222.460938 C 64.457031 222.117188 64.492188 221.75 64.503906 221.394531 C 64.515625 221.199219 64.5625 220.957031 64.46875 220.820312 C 64.046875 220.1875 64.195312 219.660156 64.652344 219.15625 C 64.652344 219.144531 64.664062 219.144531 64.664062 219.132812 C 64.664062 219.132812 64.664062 219.121094 64.675781 219.121094 L 64.652344 219.144531 C 64.378906 219.0625 64.296875 218.820312 64.433594 218.648438 C 64.835938 218.097656 65.304688 217.582031 65.773438 217.007812 C 66.070312 216.132812 65.5 215.261719 65.578125 214.367188 C 65.671875 213.457031 65.84375 212.550781 65.648438 211.644531 C 65.523438 211.023438 65.292969 210.425781 65.074219 209.691406 C 65.910156 208.40625 65.453125 206.902344 65.28125 205.429688 C 65.222656 204.914062 64.996094 204.410156 64.882812 203.878906 C 64.777344 203.46875 64.699219 203.042969 64.6875 202.628906 C 64.6875 202.285156 64.582031 202.019531 64.402344 201.746094 C 64.261719 201.539062 64.242188 201.261719 64.207031 201.007812 C 64.101562 200.171875 64.046875 199.320312 63.921875 198.496094 C 63.792969 197.75 63.75 197.023438 63.929688 196.265625 C 64.195312 195.105469 64.332031 193.945312 63.644531 192.84375 C 63.542969 192.671875 63.460938 192.429688 63.484375 192.222656 C 63.609375 190.59375 63.324219 188.941406 63.738281 187.320312 C 63.75 187.296875 63.828125 187.296875 63.976562 187.25 C 64.023438 187.722656 64.082031 188.183594 64.113281 188.640625 C 64.207031 190.066406 64.433594 191.441406 64.890625 192.765625 C 65.625 234.84375 87.175781 271.820312 119.6875 293.734375 C 119.6875 293.734375 119.675781 293.734375 119.675781 293.734375 C 119.472656 293.824219 119.140625 293.746094 118.910156 293.640625 Z M 64.789062 224.082031 C 65.234375 224.460938 65.074219 224.703125 64.960938 224.941406 C 64.914062 224.714844 64.871094 224.496094 64.789062 224.082031 Z M 74.902344 127.832031 C 75.015625 127.660156 75.210938 127.511719 75.257812 127.316406 C 75.542969 126.039062 76.207031 124.9375 76.8125 123.800781 C 77.007812 123.421875 77.257812 123.054688 77.375 122.652344 C 77.695312 121.515625 78.355469 120.539062 78.871094 119.480469 C 79.476562 118.230469 80.128906 117.011719 80.863281 115.832031 C 81.789062 114.335938 82.703125 112.832031 83.621094 111.328125 C 83.734375 111.144531 83.8125 110.9375 83.894531 110.742188 C 84.410156 109.503906 85.105469 108.367188 85.882812 107.273438 C 86.664062 106.195312 87.394531 105.082031 88.113281 103.957031 C 89.269531 102.128906 90.6875 100.566406 92.359375 99.1875 C 94.910156 97.085938 97.414062 94.917969 99.945312 92.792969 C 100.882812 92 101.808594 91.195312 102.917969 90.65625 C 103.113281 90.554688 103.320312 90.460938 103.457031 90.3125 C 104.132812 89.601562 104.964844 89.140625 105.777344 88.636719 C 107.390625 87.601562 108.992188 86.546875 110.605469 85.5 C 111.121094 85.167969 111.648438 84.835938 112.160156 84.5 C 112.09375 84.671875 112.058594 84.890625 111.933594 84.984375 C 110.652344 86.027344 109.335938 87.027344 108.042969 88.0625 C 107.710938 88.324219 107.390625 88.625 107.117188 88.945312 C 106.363281 89.828125 105.605469 90.703125 104.644531 91.402344 C 103.445312 92.289062 102.359375 93.332031 101.257812 94.355469 C 99.007812 96.492188 96.71875 98.613281 94.773438 101.039062 C 93.742188 102.335938 92.609375 103.519531 91.445312 104.691406 C 91.328125 104.804688 91.238281 104.929688 91.136719 105.058594 C 90.207031 106.296875 89.257812 107.515625 88.34375 108.765625 C 86.824219 110.835938 85.324219 112.914062 83.8125 114.992188 C 83.621094 115.257812 83.414062 115.507812 83.253906 115.773438 C 81.972656 117.875 80.621094 119.917969 79.226562 121.929688 C 78.824219 122.492188 78.527344 123.121094 78.164062 123.71875 C 77.363281 124.984375 76.550781 126.234375 75.738281 127.5 C 75.554688 127.796875 75.269531 127.910156 74.914062 127.832031 C 74.925781 128.050781 74.9375 128.269531 74.960938 128.484375 C 74.9375 128.484375 74.925781 128.484375 74.902344 128.484375 C 74.902344 128.269531 74.902344 128.050781 74.902344 127.832031 Z M 114.050781 83.089844 C 114.117188 83.054688 114.3125 83.101562 114.324219 83.15625 C 114.359375 83.285156 114.390625 83.492188 114.3125 83.558594 C 113.980469 83.871094 113.601562 84.144531 113.238281 84.433594 C 113.042969 83.695312 113.488281 83.351562 114.050781 83.089844 Z M 115.183594 87.039062 C 116.382812 86.167969 117.585938 85.28125 118.820312 84.433594 C 119.644531 83.859375 120.511719 83.328125 121.382812 82.800781 C 123.109375 81.746094 124.835938 80.6875 126.574219 79.644531 C 126.988281 79.390625 127.421875 79.171875 127.835938 78.929688 C 128.554688 78.496094 129.285156 78.035156 130.007812 77.597656 C 130.375 77.371094 130.726562 77.140625 131.105469 76.933594 C 133.589844 75.578125 136.003906 74.085938 138.738281 73.246094 C 140.007812 72.40625 141.480469 72.074219 142.867188 71.535156 C 144.421875 70.9375 146.035156 70.582031 147.707031 70.5 C 148.335938 70.46875 148.964844 70.316406 149.59375 70.214844 C 150.015625 70.144531 150.4375 70.054688 150.863281 69.984375 C 151.640625 69.859375 152.429688 69.742188 153.21875 69.605469 C 153.621094 69.546875 154.03125 69.320312 154.535156 69.765625 C 152.359375 70.582031 150.335938 71.421875 148.265625 72.074219 C 146.746094 72.558594 145.152344 72.832031 143.585938 73.121094 C 142.535156 73.316406 141.460938 73.339844 140.40625 73.5 C 139.160156 73.683594 138.175781 74.464844 137.167969 75.152344 C 136.996094 75.265625 136.871094 75.453125 136.734375 75.625 C 136.277344 76.210938 135.671875 76.519531 134.949219 76.519531 C 134.320312 76.519531 133.816406 76.726562 133.347656 77.128906 C 132.765625 77.621094 132.066406 77.910156 131.324219 78.046875 C 130.683594 78.183594 130.121094 78.460938 129.605469 78.875 C 128.773438 79.527344 127.925781 80.171875 127.089844 80.816406 C 126.964844 80.917969 126.816406 81 126.679688 81.054688 C 125.292969 81.5625 124.140625 82.433594 122.960938 83.261719 C 122.160156 83.8125 121.417969 84.398438 120.445312 84.617188 C 120.089844 84.695312 119.78125 84.960938 119.472656 85.179688 C 118.566406 85.832031 117.6875 86.535156 116.773438 87.1875 C 115.503906 88.085938 114.253906 89.015625 112.949219 89.828125 C 111.304688 90.863281 109.714844 91.941406 108.464844 93.449219 C 108.03125 93.976562 107.425781 94.207031 106.863281 94.480469 C 106.234375 94.800781 105.699219 95.179688 105.207031 95.710938 C 104.382812 96.617188 103.421875 97.386719 102.699219 98.410156 C 102.496094 98.695312 102.164062 98.925781 101.84375 99.109375 C 101.089844 99.546875 100.480469 100.132812 100.011719 100.867188 C 99.886719 101.050781 99.785156 101.234375 99.636719 101.382812 C 98.273438 102.738281 96.914062 104.09375 95.550781 105.425781 C 95.449219 105.527344 95.300781 105.550781 95.070312 105.65625 C 95.128906 105.414062 95.117188 105.230469 95.195312 105.136719 C 95.800781 104.472656 96.421875 103.804688 97.050781 103.164062 C 97.792969 102.394531 98.546875 101.636719 99.292969 100.867188 C 100.628906 99.488281 101.867188 98.019531 103.332031 96.753906 C 104.460938 95.777344 105.515625 94.710938 106.601562 93.6875 C 107.835938 92.515625 109.152344 91.460938 110.617188 90.554688 C 111.875 89.773438 112.972656 88.726562 114.152344 87.796875 C 114.484375 87.53125 114.839844 87.292969 115.183594 87.039062 Z M 93.710938 106.964844 C 93.902344 106.6875 94.132812 106.449219 94.394531 106.136719 C 94.75 106.675781 94.488281 107.035156 94.269531 107.34375 C 94.167969 107.492188 93.9375 107.585938 93.753906 107.609375 C 93.582031 107.640625 93.527344 107.238281 93.710938 106.964844 Z M 328.101562 180.359375 C 327.574219 180.464844 327.4375 179.625 326.933594 180.234375 C 326.796875 179.511719 326.808594 178.765625 326.53125 178.15625 C 326.109375 177.25 326.019531 176.308594 325.914062 175.34375 C 325.824219 174.480469 325.675781 173.632812 325.160156 172.917969 C 324.746094 172.355469 324.679688 171.746094 324.65625 171.09375 C 324.621094 170.347656 324.53125 169.601562 324.394531 168.863281 C 324.277344 168.289062 324.050781 167.738281 323.914062 167.164062 C 323.671875 166.1875 323.375 165.234375 322.847656 164.351562 C 322.597656 163.914062 322.484375 163.316406 322.515625 162.800781 C 322.5625 162.148438 322.335938 161.652344 321.980469 161.171875 C 321.726562 160.835938 321.476562 160.480469 321.214844 160.136719 C 320.882812 159.699219 320.664062 159.230469 320.800781 158.65625 C 320.996094 157.851562 320.421875 157.082031 320.675781 156.277344 C 320.710938 156.152344 320.628906 155.933594 320.527344 155.820312 C 319.714844 154.945312 319.429688 153.902344 319.53125 152.730469 C 319.542969 152.625 319.496094 152.511719 319.453125 152.417969 C 318.9375 151.363281 318.890625 150.25 319.015625 149.113281 C 319.039062 148.847656 318.972656 148.582031 318.949219 148.320312 C 318.832031 146.976562 318.5 145.679688 318.320312 144.355469 C 318.078125 142.703125 317.378906 141.3125 316.636719 139.890625 C 316.410156 139.464844 316.179688 139.039062 315.996094 138.605469 C 315.171875 136.730469 314.15625 134.984375 313.386719 133.089844 C 312.746094 131.507812 311.921875 130.011719 311.316406 128.40625 C 310.367188 125.902344 309.417969 123.398438 308.125 121.042969 C 307.519531 119.917969 306.902344 118.792969 306.261719 117.679688 C 305.894531 117.023438 305.484375 116.40625 305.117188 115.75 C 304.875 115.335938 304.707031 114.886719 304.464844 114.464844 C 304.03125 113.671875 303.527344 112.914062 303.125 112.097656 C 302.507812 110.878906 301.707031 109.847656 300.710938 108.917969 C 299.238281 107.527344 297.75 106.148438 296.457031 104.5625 C 295.839844 103.828125 295.1875 103.105469 294.457031 102.484375 C 292.785156 101.074219 291.273438 99.511719 289.605469 98.097656 C 288.632812 97.28125 287.878906 96.191406 286.652344 95.675781 C 285.648438 94.550781 284.410156 93.710938 283.277344 92.746094 C 282.019531 91.667969 280.832031 90.542969 279.421875 89.644531 C 279.207031 89.507812 279.082031 89.242188 278.886719 89.070312 C 278.382812 88.601562 277.867188 88.140625 277.328125 87.707031 C 276.539062 87.0625 275.738281 86.441406 274.9375 85.808594 C 274.640625 85.582031 274.355469 85.339844 274.046875 85.144531 C 272.421875 84.109375 271.0625 82.6875 269.300781 81.859375 C 268.566406 80.882812 267.273438 80.675781 266.472656 79.78125 C 266.277344 79.550781 265.925781 79.460938 265.636719 79.320312 C 265.167969 79.082031 264.675781 78.851562 264.207031 78.609375 C 262.972656 77.964844 261.761719 77.300781 260.523438 76.65625 C 259.289062 76.027344 257.949219 75.625 256.808594 74.808594 C 256.648438 74.683594 256.429688 74.566406 256.222656 74.554688 C 255.375 74.5 254.757812 73.957031 254.0625 73.578125 C 252.609375 72.785156 251.167969 71.972656 249.75 71.121094 C 247.550781 69.789062 245.332031 68.503906 242.988281 67.46875 C 241.671875 66.894531 240.277344 66.492188 238.914062 66.046875 C 238.011719 65.746094 237.074219 65.527344 236.167969 65.207031 C 234.351562 64.585938 232.566406 63.875 230.734375 63.300781 C 228.242188 62.519531 225.746094 61.703125 223.207031 61.140625 C 220.816406 60.613281 218.367188 60.359375 215.933594 60.027344 C 214.9375 59.902344 213.90625 59.867188 212.902344 59.820312 C 212.421875 59.796875 211.929688 59.808594 211.472656 59.902344 C 210.636719 60.085938 210.519531 60.316406 210.476562 61.464844 C 210.980469 61.898438 211.585938 62.050781 212.25 61.957031 C 212.957031 61.867188 213.597656 62.015625 214.25 62.324219 C 214.878906 62.625 215.566406 62.898438 216.230469 62.921875 C 217.167969 62.96875 218.015625 63.210938 218.894531 63.4375 C 220.644531 63.898438 222.40625 64.378906 224.179688 64.738281 C 226.949219 65.3125 229.671875 66.058594 232.382812 66.816406 C 233.765625 67.207031 235.082031 67.847656 236.476562 68.160156 C 237.886719 68.480469 239.210938 68.972656 240.515625 69.570312 C 240.757812 69.6875 241.03125 69.71875 241.28125 69.800781 C 241.832031 69.996094 242.425781 70.121094 242.929688 70.410156 C 243.914062 70.972656 244.976562 71.328125 246.03125 71.695312 C 246.179688 71.753906 246.351562 71.777344 246.488281 71.855469 C 248.214844 72.820312 250.089844 73.417969 251.992188 73.957031 C 252.140625 73.992188 252.3125 74.050781 252.402344 74.164062 C 253.042969 74.945312 253.957031 75.300781 254.828125 75.691406 C 256.1875 76.289062 257.253906 77.484375 258.820312 77.65625 C 258.945312 77.667969 259.09375 77.828125 259.199219 77.945312 C 260 78.90625 261.140625 79.4375 262.136719 80.113281 C 263.863281 81.285156 265.660156 82.34375 267.320312 83.605469 C 268.667969 84.640625 270.167969 85.464844 271.449219 86.613281 C 272.523438 87.578125 273.726562 88.394531 274.8125 89.335938 C 275.910156 90.277344 276.929688 91.289062 277.980469 92.265625 C 278.335938 92.585938 278.769531 92.851562 278.679688 93.527344 C 278.28125 93.539062 277.890625 93.609375 277.523438 93.261719 C 277.089844 92.875 276.609375 92.527344 276.175781 92.125 C 274.390625 90.507812 272.261719 89.347656 270.304688 87.957031 C 269.527344 87.40625 268.820312 86.742188 267.859375 86.464844 C 267.527344 86.371094 267.226562 86.074219 266.941406 85.832031 C 265.914062 84.984375 264.824219 84.238281 263.613281 83.664062 C 262.664062 83.203125 261.816406 82.503906 260.753906 82.25 C 259.324219 81.195312 257.722656 80.503906 256.039062 79.917969 C 254.839844 79.503906 253.683594 78.941406 252.515625 78.402344 C 251.257812 77.828125 250.035156 77.175781 248.777344 76.601562 C 248.296875 76.394531 247.757812 76.222656 247.242188 76.199219 C 246.578125 76.175781 246.019531 76.09375 245.503906 75.578125 C 245.171875 75.265625 244.679688 75.003906 244.234375 74.933594 C 242.484375 74.683594 240.949219 73.625 239.144531 73.589844 C 239.039062 73.589844 238.9375 73.535156 238.847656 73.488281 C 236.992188 72.671875 235.140625 71.832031 233.273438 71.019531 C 232.347656 70.605469 231.398438 70.328125 230.378906 70.167969 C 229.363281 70.007812 228.308594 69.824219 227.429688 69.125 C 226.949219 68.746094 226.273438 68.570312 225.667969 68.410156 C 224.285156 68.019531 222.84375 67.894531 221.433594 67.515625 C 220.109375 67.160156 218.710938 67.035156 217.351562 66.769531 C 216.253906 66.550781 215.132812 66.367188 214.078125 65.988281 C 213.324219 65.710938 212.570312 65.496094 211.792969 65.300781 C 211.320312 65.183594 210.832031 65.125 210.394531 64.953125 C 208.679688 64.289062 206.894531 64.035156 205.085938 63.828125 C 204.355469 63.75 203.621094 63.589844 202.914062 63.371094 C 201.378906 62.898438 199.871094 62.40625 198.257812 62.359375 C 197.183594 62.324219 196.128906 62.253906 195.089844 61.921875 C 194.539062 61.738281 193.933594 61.738281 193.363281 61.636719 C 192.570312 61.496094 191.792969 61.347656 191.015625 61.1875 C 190.9375 61.175781 190.878906 61.050781 190.742188 60.902344 C 190.867188 60.761719 190.980469 60.554688 191.128906 60.511719 C 191.589844 60.359375 192.058594 60.234375 192.527344 60.1875 C 193.269531 60.109375 194.023438 59.980469 194.746094 60.074219 C 195.558594 60.175781 196.335938 60.175781 197.148438 60.109375 C 197.984375 60.027344 198.808594 59.980469 199.652344 60.292969 C 200.226562 60.511719 200.898438 60.453125 201.53125 60.5 C 201.851562 60.523438 202.179688 60.464844 202.480469 60.53125 C 203.472656 60.726562 204.445312 60.992188 205.429688 61.175781 C 206.164062 61.300781 206.917969 61.382812 207.660156 61.382812 C 208.0625 61.382812 208.496094 61.210938 208.875 61.039062 C 209.378906 60.796875 209.457031 60.257812 209.089844 59.832031 C 208.667969 59.328125 208.117188 59.015625 207.523438 58.742188 C 207.15625 58.558594 206.667969 58.304688 206.550781 57.972656 C 206.242188 57.078125 205.613281 56.902344 204.765625 56.882812 C 204.414062 57.132812 204.035156 57.398438 203.691406 57.652344 C 202.992188 57.339844 202.707031 56.753906 202.351562 56.226562 C 201.746094 56.617188 201.175781 56.984375 200.648438 57.316406 C 199.148438 56.847656 199.148438 56.847656 198.453125 55.710938 C 198.015625 56.101562 197.59375 56.480469 197.089844 56.914062 C 196.519531 56.582031 196.015625 56.132812 195.433594 55.972656 C 194.835938 55.8125 194.171875 55.9375 193.578125 55.9375 C 193.363281 56.238281 193.179688 56.480469 192.9375 56.800781 C 192.023438 55.835938 190.960938 55.320312 189.734375 55.203125 C 188.601562 56.753906 188.957031 56.410156 187.230469 57.042969 C 186.476562 57.304688 185.71875 57.582031 184.976562 57.878906 C 184.082031 58.234375 183.203125 58.625 182.195312 58.269531 C 182 58.203125 181.773438 58.226562 181.554688 58.234375 C 179.371094 58.304688 177.21875 58.84375 175.023438 58.777344 C 174.921875 58.765625 174.816406 58.789062 174.703125 58.820312 C 172.863281 59.351562 170.941406 59.511719 169.074219 59.902344 C 166.582031 60.429688 163.996094 60.636719 161.671875 61.84375 C 161.445312 61.957031 161.148438 61.96875 160.882812 61.945312 C 160.058594 61.855469 159.28125 62.0625 158.527344 62.3125 C 156.753906 62.898438 155.003906 63.554688 153.195312 64.023438 C 152.839844 64.117188 152.5 64.300781 152.179688 64.496094 C 151.34375 65 150.4375 65.300781 149.5 65.527344 C 147.957031 65.917969 146.367188 66.242188 145.027344 67.195312 C 144.902344 67.273438 144.730469 67.320312 144.582031 67.332031 C 143.039062 67.34375 141.675781 67.894531 140.347656 68.617188 C 139.925781 68.847656 139.46875 69.007812 139.035156 69.214844 C 138.609375 69.433594 138.164062 69.640625 137.785156 69.914062 C 136.664062 70.742188 135.441406 71.097656 134.035156 71.007812 C 132.914062 70.925781 131.792969 71.042969 130.808594 71.71875 C 130.589844 71.855469 130.316406 71.890625 130.066406 71.996094 C 128.085938 72.808594 125.992188 73.292969 124.117188 74.371094 C 123.886719 74.5 123.613281 74.554688 123.359375 74.636719 C 121.726562 75.152344 120.226562 75.957031 118.738281 76.796875 C 117.296875 77.609375 115.832031 78.378906 114.371094 79.136719 C 113.144531 79.792969 111.898438 80.390625 110.6875 81.042969 C 109.597656 81.617188 108.59375 82.34375 107.472656 82.847656 C 106.542969 83.273438 105.628906 83.6875 104.921875 84.445312 C 104.773438 84.59375 104.554688 84.648438 104.371094 84.753906 C 103.992188 84.960938 103.617188 85.132812 103.273438 85.375 C 102.390625 85.992188 101.546875 86.636719 100.675781 87.257812 C 100.46875 87.40625 100.253906 87.601562 99.886719 87.359375 C 100.128906 87.015625 100.320312 86.636719 100.609375 86.351562 C 102.128906 84.777344 103.71875 83.285156 105.195312 81.664062 C 105.984375 80.792969 107.003906 80.183594 107.769531 79.285156 C 108.144531 78.839844 108.59375 78.449219 109.027344 78.058594 C 110.824219 76.460938 112.628906 74.878906 114.597656 73.488281 C 115.855469 72.589844 117.035156 71.582031 118.304688 70.707031 C 120.25 69.386719 122.238281 68.125 124.21875 66.871094 C 126.347656 65.539062 128.507812 64.253906 130.636719 62.933594 C 131.175781 62.601562 131.65625 62.152344 132.203125 61.84375 C 133.738281 60.992188 135.28125 60.164062 136.835938 59.351562 C 139.71875 57.847656 142.613281 56.351562 145.625 55.089844 C 147.203125 54.421875 148.792969 53.804688 150.394531 53.21875 C 150.898438 53.035156 151.410156 52.515625 152.039062 52.964844 C 152.085938 53 152.28125 52.917969 152.304688 52.863281 C 152.519531 52.308594 153.046875 52.289062 153.480469 52.148438 C 156.445312 51.242188 159.386719 50.253906 162.371094 49.460938 C 165.621094 48.589844 168.902344 47.855469 172.210938 47.292969 C 175.21875 46.773438 178.191406 46.1875 181.222656 45.867188 C 184.839844 45.488281 188.417969 44.835938 192.046875 44.59375 C 192.308594 44.570312 192.59375 44.570312 192.835938 44.464844 C 193.453125 44.191406 194.082031 44.238281 194.722656 44.25 C 195.304688 44.261719 195.902344 44.28125 196.484375 44.226562 C 198.292969 44.066406 200.097656 44.179688 201.90625 44.214844 C 203.78125 44.238281 205.648438 44.269531 207.523438 44.28125 C 207.992188 44.28125 208.472656 44.191406 208.941406 44.074219 C 209.273438 43.996094 209.433594 43.6875 209.457031 43.328125 C 209.46875 42.972656 209.296875 42.722656 208.953125 42.605469 C 208.597656 42.480469 208.234375 42.308594 207.878906 42.308594 C 206.644531 42.296875 205.429688 42.179688 204.261719 41.757812 C 204.171875 41.722656 204.046875 41.746094 203.941406 41.746094 C 202.410156 41.882812 200.878906 42.019531 199.148438 42.167969 C 198.1875 41.503906 196.894531 41.285156 195.535156 41.214844 C 194.746094 41.183594 193.957031 41 193.167969 40.882812 C 192.847656 40.835938 192.527344 40.78125 192.21875 40.816406 C 191.472656 40.882812 190.742188 40.804688 190 40.769531 C 187.277344 40.652344 184.554688 40.503906 181.832031 40.894531 C 181.304688 40.976562 180.765625 41.007812 180.230469 41 C 178.019531 40.941406 175.871094 41.378906 173.71875 41.746094 C 171.191406 42.179688 168.742188 43.007812 166.203125 43.339844 C 165.984375 43.363281 165.792969 43.457031 165.585938 43.511719 C 164.761719 43.753906 163.9375 43.984375 163.125 44.214844 C 161.640625 44.648438 160.128906 45.019531 158.664062 45.535156 C 156.664062 46.246094 154.761719 47.246094 152.691406 47.796875 C 152.5 47.855469 152.28125 47.933594 152.121094 48.074219 C 151.480469 48.601562 150.65625 48.691406 149.925781 49.003906 C 149.179688 49.300781 148.414062 49.542969 147.695312 49.863281 C 145.109375 51.023438 142.546875 52.207031 139.972656 53.378906 C 137.980469 54.285156 135.945312 55.078125 134.035156 56.125 C 132.488281 56.960938 131.003906 57.902344 129.425781 58.683594 C 129 58.890625 128.519531 58.996094 128.144531 59.269531 C 127.023438 60.085938 125.914062 60.933594 124.597656 61.417969 C 124.402344 61.496094 124.242188 61.671875 124.070312 61.796875 C 123.179688 62.460938 122.273438 63.128906 121.371094 63.804688 C 120.867188 64.195312 120.351562 64.585938 119.871094 65 C 118.40625 66.253906 116.910156 67.46875 115.503906 68.777344 C 114.347656 69.859375 112.984375 70.742188 112.082031 72.097656 C 111.933594 72.304688 111.667969 72.441406 111.464844 72.601562 C 111.074219 72.890625 110.675781 73.15625 110.320312 73.488281 C 108.625 75.039062 106.75 76.371094 105.148438 78.035156 C 104.300781 78.917969 103.25 79.597656 102.414062 80.503906 C 101.601562 81.398438 100.617188 82.148438 100.023438 83.238281 C 99.945312 83.375 99.785156 83.457031 99.667969 83.558594 C 99.132812 84.085938 98.59375 84.605469 98.054688 85.121094 C 96.914062 86.246094 95.847656 87.441406 94.785156 88.648438 C 93.503906 90.082031 92.085938 91.390625 90.722656 92.757812 C 90.425781 93.066406 90.140625 93.390625 89.886719 93.734375 C 88.996094 94.929688 88.125 96.144531 87.28125 97.386719 C 86.160156 99.003906 85.070312 100.695312 83.574219 102.027344 C 81.503906 103.875 79.890625 106.160156 77.945312 108.136719 C 76.628906 109.457031 75.507812 110.972656 74.308594 112.40625 C 74.171875 112.570312 74.042969 112.742188 73.917969 112.925781 C 73.199219 113.96875 72.417969 114.980469 71.757812 116.082031 C 70.496094 118.195312 69.054688 120.195312 67.695312 122.25 C 67.15625 123.042969 66.644531 123.859375 66.117188 124.671875 C 64.515625 127.199219 62.617188 129.542969 61.367188 132.296875 C 61.21875 132.632812 60.910156 132.882812 60.714844 133.207031 C 59.871094 134.5625 58.875 135.800781 58.371094 137.375 C 57.800781 139.15625 57.066406 140.890625 56.289062 142.589844 C 55.523438 144.253906 54.769531 145.894531 54.195312 147.640625 C 53.667969 149.261719 53.0625 150.867188 52.527344 152.5 C 52.183594 153.511719 51.691406 154.476562 51.621094 155.578125 C 51.609375 155.832031 51.4375 156.070312 51.347656 156.324219 C 51.140625 156.875 50.890625 157.414062 50.742188 157.976562 C 50.191406 160.207031 49.550781 162.421875 49.09375 164.683594 C 48.671875 166.730469 48.351562 168.785156 48.042969 170.851562 C 47.6875 173.125 47.480469 175.421875 47.113281 177.695312 C 46.65625 180.554688 46.382812 183.4375 46.460938 186.355469 C 46.484375 187.585938 46.382812 188.8125 46.3125 190.042969 C 46.175781 192.558594 45.9375 195.074219 45.925781 197.585938 C 45.914062 198.976562 45.800781 200.367188 45.800781 201.746094 C 45.800781 204.433594 45.878906 207.121094 46.164062 209.785156 C 46.566406 213.480469 47.445312 217.078125 48.453125 220.636719 C 48.511719 220.808594 48.695312 220.957031 48.886719 221.199219 C 49.164062 220.53125 49.34375 220.015625 49.09375 219.394531 C 48.945312 219.003906 48.945312 218.546875 48.785156 218.167969 C 48.382812 217.203125 48.488281 216.296875 48.863281 215.363281 C 49.242188 214.378906 49.277344 213.285156 48.820312 212.378906 C 48.417969 211.597656 48.363281 210.910156 48.5 210.082031 C 48.636719 209.253906 48.636719 208.441406 48.269531 207.578125 C 47.984375 206.890625 48.132812 206.015625 48.085938 205.222656 C 48.042969 204.433594 48.191406 203.546875 47.902344 202.859375 C 47.605469 202.148438 47.675781 201.5625 47.734375 200.882812 C 47.800781 199.988281 47.949219 199.023438 47.699219 198.195312 C 47.171875 196.40625 47.492188 194.578125 47.207031 192.796875 C 47.195312 192.695312 47.21875 192.582031 47.242188 192.476562 C 47.628906 190.949219 47.433594 189.386719 47.445312 187.835938 C 47.457031 185.953125 47.378906 184.082031 47.996094 182.265625 C 48.074219 182.027344 48.121094 181.75 48.132812 181.484375 C 48.214844 179.648438 48.738281 177.902344 49.070312 176.113281 C 49.335938 174.6875 49.539062 173.261719 49.769531 171.828125 C 49.816406 171.5625 49.835938 171.300781 49.90625 171.035156 C 50.203125 169.957031 50.5 168.875 50.820312 167.808594 C 51.359375 166.015625 51.917969 164.226562 52.457031 162.433594 C 52.699219 161.664062 52.890625 160.894531 53.109375 160.113281 C 53.488281 158.722656 54.183594 157.425781 54.265625 155.945312 C 54.289062 155.691406 54.402344 155.429688 54.527344 155.1875 C 55.71875 152.785156 56.359375 150.15625 57.558594 147.746094 C 58.121094 146.632812 58.292969 145.332031 59.011719 144.242188 C 59.617188 143.300781 60.042969 142.246094 60.523438 141.234375 C 61.140625 139.925781 62.042969 138.765625 62.523438 137.386719 C 63.027344 135.917969 63.621094 134.480469 64.433594 133.148438 C 64.9375 132.332031 65.339844 131.449219 65.851562 130.644531 C 66.882812 129.070312 67.945312 127.519531 69.011719 125.984375 C 70.132812 124.339844 71.230469 122.699219 72.417969 121.113281 C 72.898438 120.46875 73.359375 119.828125 73.816406 119.160156 C 74.433594 118.242188 75.1875 117.390625 75.921875 116.542969 C 76.035156 116.40625 76.308594 116.394531 76.503906 116.324219 C 76.515625 116.300781 76.515625 116.289062 76.515625 116.277344 C 76.527344 116.277344 76.539062 116.289062 76.550781 116.289062 C 76.242188 116.839844 75.910156 117.371094 75.632812 117.933594 C 75.40625 118.414062 75.28125 118.953125 75.039062 119.425781 C 73.90625 121.6875 72.910156 123.996094 72.238281 126.429688 C 72.15625 126.683594 72.066406 126.945312 71.9375 127.175781 C 71.082031 128.679688 70.625 130.335938 70.222656 132 C 70.132812 132.367188 70.027344 132.722656 69.902344 133.078125 C 69.675781 133.792969 69.421875 134.492188 69.207031 135.203125 C 68.875 136.285156 68.566406 137.375 68.253906 138.453125 C 67.742188 140.316406 67.179688 142.152344 66.722656 144.023438 C 66.117188 146.46875 65.566406 148.929688 65.042969 151.386719 C 64.777344 152.582031 64.617188 153.796875 64.433594 155.015625 C 64.207031 156.4375 64.023438 157.875 63.769531 159.285156 C 63.496094 160.769531 63.121094 162.226562 62.867188 163.695312 C 62.730469 164.476562 62.410156 165.246094 62.59375 166.074219 C 62.648438 166.316406 62.558594 166.613281 62.480469 166.867188 C 61.78125 168.957031 61.355469 171.09375 61.152344 173.296875 C 61.027344 174.734375 60.855469 176.203125 60.375 177.546875 C 59.789062 179.132812 59.585938 180.761719 59.414062 182.40625 C 59.082031 185.539062 58.988281 188.722656 58.542969 191.84375 C 58.222656 194.085938 58.554688 196.359375 57.992188 198.5625 C 57.9375 198.769531 58.039062 199 58.027344 199.207031 C 57.992188 201.03125 58.0625 202.871094 57.855469 204.671875 C 57.652344 206.566406 57.640625 208.453125 57.992188 210.277344 C 58.382812 212.34375 58.085938 214.46875 58.75 216.480469 C 58.726562 218.71875 59.675781 220.761719 59.960938 222.933594 C 59.984375 223.140625 60.121094 223.335938 60.203125 223.53125 C 60.808594 225.136719 61.265625 226.78125 61.496094 228.480469 C 61.632812 229.433594 61.78125 230.386719 61.941406 231.339844 C 62.25 233.074219 62.570312 234.808594 62.914062 236.542969 C 63.050781 237.277344 63.175781 238.011719 63.40625 238.722656 C 63.726562 239.675781 64.160156 240.609375 64.503906 241.5625 C 64.730469 242.148438 64.800781 242.800781 65.222656 243.304688 C 65.246094 244.890625 65.875 246.328125 66.402344 247.773438 C 66.996094 249.425781 67.582031 251.105469 68.472656 252.644531 C 68.792969 253.195312 68.988281 253.828125 69.226562 254.410156 C 69.789062 255.800781 70.316406 257.203125 70.921875 258.558594 C 71.871094 260.648438 72.992188 262.667969 73.851562 264.804688 C 74.019531 265.253906 74.273438 265.667969 74.523438 266.078125 C 75.773438 268.203125 77.097656 270.285156 78.253906 272.453125 C 79.042969 273.933594 80.027344 275.257812 81.023438 276.578125 C 82.222656 278.148438 83.675781 279.515625 84.582031 281.308594 C 84.730469 281.59375 84.910156 281.882812 85.152344 282.089844 C 86.113281 282.894531 86.671875 283.996094 87.359375 285.007812 C 87.578125 285.316406 87.761719 285.660156 87.886719 286.003906 C 88.082031 286.554688 87.933594 287.074219 87.566406 287.511719 C 87.234375 287.878906 86.628906 287.898438 86.078125 287.613281 C 85.882812 287.511719 85.667969 287.417969 85.542969 287.257812 C 84.84375 286.339844 83.6875 285.820312 83.289062 284.605469 C 83.171875 284.238281 82.75 283.972656 82.464844 283.652344 C 81.527344 282.640625 80.585938 281.664062 79.914062 280.414062 C 79.273438 279.195312 78.390625 278.082031 77.007812 277.542969 C 76.550781 277.367188 76.148438 277.140625 75.875 276.691406 C 75.792969 276.542969 75.566406 276.472656 75.347656 276.335938 C 75.246094 276.851562 75.246094 277.300781 75.0625 277.65625 C 74.777344 278.195312 74.820312 278.691406 75.0625 279.195312 C 75.3125 279.722656 75.542969 280.285156 75.898438 280.746094 C 76.675781 281.757812 77.488281 282.753906 78.355469 283.707031 C 79.25 284.695312 80.3125 285.535156 81.160156 286.578125 C 82.234375 287.921875 83.503906 289.058594 84.742188 290.230469 C 86.695312 292.058594 88.605469 293.929688 90.722656 295.582031 C 91.570312 296.25 92.382812 296.925781 93.367188 297.386719 C 93.789062 297.582031 94.199219 297.789062 94.488281 298.234375 C 94.671875 298.535156 95.070312 298.695312 95.355469 298.9375 C 96.132812 299.589844 96.933594 300.210938 97.65625 300.910156 C 98.6875 301.933594 99.636719 303.023438 100.628906 304.070312 C 100.847656 304.300781 101.066406 304.574219 101.339844 304.726562 C 102.496094 305.355469 103.285156 306.402344 104.132812 307.34375 C 105.082031 308.375 106.097656 309.296875 107.207031 310.144531 C 108.136719 310.878906 109.105469 311.511719 110.125 312.109375 C 111.316406 312.796875 112.320312 313.785156 113.429688 314.613281 C 114.027344 315.0625 114.667969 315.453125 115.296875 315.839844 C 116.210938 316.394531 117.195312 316.851562 118.042969 317.496094 C 119.449219 318.574219 120.84375 319.644531 122.558594 320.195312 C 122.753906 320.25 122.9375 320.390625 123.132812 320.46875 C 125.890625 321.605469 128.496094 323.078125 131.359375 324.019531 C 132.914062 324.535156 134.480469 325.085938 135.945312 325.855469 C 136.277344 326.027344 136.65625 326.074219 137.019531 326.175781 C 137.683594 326.351562 138.371094 326.5 139.023438 326.707031 C 139.730469 326.933594 140.417969 327.246094 141.128906 327.476562 C 144.308594 328.507812 147.601562 328.796875 150.910156 329.058594 C 152.351562 329.164062 153.78125 329.347656 155.1875 329.621094 C 157.027344 329.992188 158.859375 330.359375 160.6875 330.738281 C 161.683594 330.945312 162.667969 331.183594 163.652344 331.414062 C 164.796875 331.679688 165.929688 331.976562 167.085938 332.207031 C 168.273438 332.4375 169.519531 332.355469 170.6875 332.769531 C 170.929688 332.851562 171.226562 332.78125 171.488281 332.792969 C 171.867188 332.804688 172.253906 332.746094 172.609375 332.851562 C 173.46875 333.089844 174.292969 332.964844 175.125 332.644531 C 176.304688 333.414062 177.609375 333.160156 178.878906 333.089844 C 179.417969 333.066406 179.898438 333.046875 180.421875 333.25 C 181.121094 333.503906 181.886719 333.664062 182.621094 333.652344 C 183.59375 333.632812 184.507812 333.816406 185.445312 333.976562 C 185.707031 334.019531 186.003906 334.148438 186.222656 334.078125 C 186.828125 333.871094 187.378906 334.078125 187.949219 334.160156 C 188.84375 334.296875 189.746094 334.410156 190.660156 334.46875 C 192.207031 334.5625 193.761719 334.628906 195.304688 334.628906 C 196.425781 334.640625 197.582031 334.6875 198.648438 334.421875 C 199.710938 334.171875 200.761719 334.113281 201.828125 334.089844 C 203.199219 334.066406 204.539062 333.597656 205.933594 333.757812 C 206.082031 333.769531 206.242188 333.675781 206.402344 333.664062 C 207.832031 333.503906 209.261719 333.230469 210.703125 333.230469 C 212.386719 333.21875 213.964844 332.757812 215.566406 332.378906 C 215.988281 332.289062 216.402344 332.113281 216.8125 332.125 C 217.535156 332.148438 218.199219 331.964844 218.828125 331.667969 C 219.765625 331.21875 220.75 331.035156 221.777344 330.964844 C 222.246094 330.933594 222.726562 330.828125 223.183594 330.703125 C 224.523438 330.335938 225.851562 329.945312 227.175781 329.578125 C 229.089844 329.046875 230.964844 328.519531 232.773438 327.660156 C 234.257812 326.945312 235.804688 326.292969 237.394531 325.878906 C 239.109375 325.429688 240.527344 324.59375 241.84375 323.457031 C 242.402344 322.972656 243.148438 322.652344 243.59375 322.089844 C 244.15625 321.378906 244.851562 321.421875 245.5625 321.34375 C 245.617188 321.332031 245.652344 321.285156 245.710938 321.273438 C 246.363281 321.101562 246.75 320.539062 247.289062 320.195312 C 247.859375 319.839844 248.648438 319.917969 249.128906 319.308594 C 249.324219 319.082031 249.65625 318.953125 249.929688 318.792969 C 250.582031 318.425781 251.257812 318.195312 252.023438 318.082031 C 252.78125 317.976562 253.488281 317.507812 254.246094 317.402344 C 254.964844 317.3125 255.546875 316.933594 256.1875 316.714844 C 256.441406 316.632812 256.75 316.242188 256.738281 316.003906 C 256.726562 315.335938 257.457031 315.625 257.597656 315.222656 C 257.871094 315.300781 258.15625 315.382812 258.417969 315.460938 C 258.785156 315.140625 259.09375 314.726562 259.507812 314.542969 C 260.855469 313.933594 262.125 313.175781 263.363281 312.386719 C 264.09375 311.925781 264.847656 311.59375 265.648438 311.328125 C 265.796875 311.269531 265.96875 311.238281 266.085938 311.144531 C 267.421875 310.167969 268.738281 309.179688 270.066406 308.203125 C 270.761719 307.699219 271.402344 307.042969 272.183594 306.769531 C 273.132812 306.425781 273.804688 305.746094 274.585938 305.207031 C 275.683594 304.449219 276.722656 303.632812 277.753906 302.796875 C 279.789062 301.140625 281.847656 299.511719 283.804688 297.777344 C 285.53125 296.25 287.144531 294.617188 289.078125 293.367188 C 289.433594 293.136719 289.753906 292.839844 290.0625 292.539062 C 290.75 291.875 291.414062 291.171875 292.109375 290.519531 C 292.921875 289.738281 293.769531 289.003906 294.59375 288.234375 C 295.300781 287.589844 295.976562 286.914062 296.699219 286.28125 C 297.554688 285.535156 298.34375 284.765625 298.917969 283.765625 C 299.144531 283.351562 299.511719 283.019531 299.867188 282.6875 C 301.023438 281.59375 302.371094 280.664062 303 279.101562 C 303.058594 278.964844 303.21875 278.863281 303.308594 278.722656 C 304.144531 277.425781 304.933594 276.082031 306.03125 274.980469 C 306.179688 274.832031 306.261719 274.613281 306.375 274.429688 C 307.804688 272.179688 309.28125 269.9375 310.664062 267.652344 C 311.453125 266.332031 312.105469 264.910156 312.816406 263.53125 C 312.90625 263.347656 312.976562 263.117188 312.964844 262.910156 C 312.929688 262.265625 313.25 261.75 313.570312 261.28125 C 314.234375 260.304688 314.636719 259.179688 315.4375 258.28125 C 315.640625 258.050781 315.757812 257.730469 315.882812 257.433594 C 317.070312 254.675781 318.273438 251.929688 319.441406 249.175781 C 319.632812 248.738281 319.75 248.269531 319.863281 247.808594 C 320.582031 245.050781 321.28125 242.308594 322.015625 239.5625 C 322.195312 238.886719 322.367188 238.230469 322.449219 237.53125 C 322.527344 236.921875 322.402344 236.230469 322.996094 235.75 C 323.136719 235.644531 323.15625 235.359375 323.167969 235.140625 C 323.203125 234.601562 323.316406 234.109375 323.625 233.636719 C 323.855469 233.292969 323.945312 232.832031 324.015625 232.417969 C 324.164062 231.523438 324.222656 230.617188 324.382812 229.730469 C 324.554688 228.777344 324.804688 227.847656 325 226.90625 C 325.113281 226.378906 325.207031 225.851562 325.308594 225.320312 C 325.558594 224.011719 325.824219 222.691406 326.0625 221.382812 C 326.269531 220.28125 326.464844 219.167969 326.648438 218.0625 C 326.828125 217.007812 327.140625 215.949219 327.148438 214.90625 C 327.148438 212.484375 327.652344 210.117188 327.722656 207.703125 C 327.78125 205.488281 327.871094 203.304688 327.550781 201.125 C 327.390625 200.011719 327.277344 198.917969 327.5625 197.78125 C 327.722656 197.140625 327.664062 196.335938 327.4375 195.714844 C 327 194.601562 327.195312 193.476562 327.289062 192.394531 C 327.367188 191.511719 327.140625 190.558594 327.621094 189.71875 C 327.664062 189.640625 327.640625 189.503906 327.609375 189.410156 C 327.058594 187.976562 327.414062 186.5625 327.769531 185.171875 C 327.894531 184.679688 327.894531 184.265625 327.710938 183.773438 C 327.414062 182.933594 326.96875 182.09375 327.242188 181.140625 C 327.503906 180.910156 327.746094 180.683594 328.101562 180.359375 " })),
            React.createElement("path", { d: "M 258.410156 59.28125 C 259.039062 59.683594 259.679688 60.050781 260.308594 60.453125 C 260.800781 60.773438 261.269531 61.140625 261.761719 61.453125 C 265.125 63.53125 268.429688 65.691406 271.632812 68.019531 C 272.617188 68.746094 273.613281 69.457031 274.5625 70.226562 C 274.9375 70.535156 275.257812 70.902344 275.648438 71.191406 C 277.707031 72.707031 279.710938 74.3125 281.527344 76.128906 C 283.542969 78.128906 285.703125 79.964844 287.523438 82.15625 C 288.164062 82.9375 289.042969 83.511719 289.671875 84.292969 C 290.441406 85.246094 291.433594 85.984375 292.097656 87.050781 C 292.648438 87.957031 293.402344 88.738281 294.089844 89.566406 C 295.4375 91.21875 296.996094 92.710938 297.980469 94.652344 C 298.058594 94.789062 298.140625 94.953125 298.265625 95.03125 C 298.996094 95.492188 299.269531 96.261719 299.671875 96.949219 C 299.992188 97.511719 300.3125 98.0625 300.65625 98.605469 C 301.777344 100.371094 303.183594 101.910156 304.5 103.53125 C 304.738281 103.816406 305.027344 104.082031 305.207031 104.402344 C 306.351562 106.390625 307.597656 108.332031 308.984375 110.167969 C 309.304688 110.59375 309.578125 111.0625 309.839844 111.523438 C 310.378906 112.441406 310.894531 113.371094 311.421875 114.304688 C 311.785156 114.957031 312.152344 115.601562 312.507812 116.265625 C 312.828125 116.875 313.089844 117.53125 313.445312 118.128906 C 314.347656 119.585938 315.21875 121.054688 315.617188 122.753906 C 315.6875 123.066406 315.871094 123.351562 316.019531 123.640625 C 316.429688 124.445312 316.878906 125.234375 317.265625 126.050781 C 317.953125 127.511719 318.652344 128.957031 319.269531 130.4375 C 319.941406 132.070312 320.753906 133.652344 320.902344 135.457031 C 320.9375 135.996094 321.054688 136.03125 321.933594 136.019531 C 322.105469 135.6875 322.367188 135.34375 322.003906 134.996094 C 321.441406 134.46875 321.453125 133.746094 321.292969 133.078125 C 321.15625 132.472656 321.074219 131.839844 320.960938 131.183594 C 321.074219 131 321.203125 130.769531 321.40625 130.414062 C 321.019531 129.875 320.835938 129.347656 320.824219 128.726562 C 320.777344 127.335938 320.261719 126.003906 320.378906 124.605469 C 320.390625 124.351562 320.230469 124.097656 320.148438 123.835938 C 319.863281 122.871094 319.578125 121.894531 319.292969 120.917969 C 318.878906 119.527344 318.363281 118.195312 317.507812 117 C 316.820312 116.046875 316.203125 115.050781 316.257812 113.785156 C 316.269531 113.523438 316.179688 113.257812 316.078125 113.003906 C 315.757812 112.167969 315.390625 111.328125 315.070312 110.480469 C 314.328125 108.480469 313.398438 106.550781 312.585938 104.574219 C 311.546875 102.058594 310.230469 99.660156 309.007812 97.226562 C 308.207031 95.640625 307.222656 94.195312 305.769531 93.125 C 305.644531 93.035156 305.527344 92.894531 305.484375 92.757812 C 305.152344 91.863281 304.394531 91.300781 303.800781 90.621094 C 303.527344 90.300781 303.148438 90.035156 302.945312 89.667969 C 302.144531 88.269531 300.703125 87.40625 299.867188 86.039062 C 299.453125 85.363281 298.949219 84.660156 298.308594 84.226562 C 297.28125 83.5 296.59375 82.480469 295.738281 81.605469 C 294.683594 80.527344 293.496094 79.632812 292.316406 78.710938 C 291.34375 77.964844 290.394531 77.195312 289.480469 76.394531 C 287.796875 74.898438 286.070312 73.464844 283.988281 72.546875 C 283.027344 72.121094 281.941406 71.855469 281.414062 70.765625 C 281.355469 70.652344 281.152344 70.582031 281.023438 70.5 C 280.050781 69.859375 279.082031 69.226562 278.003906 68.746094 C 277.019531 68.296875 275.957031 67.871094 275.554688 66.78125 C 274.996094 66.734375 274.527344 66.699219 274.058594 66.664062 C 273.875 66.183594 273.714844 65.746094 273.578125 65.390625 C 273.429688 65.320312 273.382812 65.277344 273.335938 65.277344 C 273.222656 65.277344 273.121094 65.300781 273.015625 65.3125 C 272.03125 65.484375 272.011719 65.484375 271.679688 64.5625 C 271.519531 64.117188 271.222656 63.945312 270.832031 64.035156 C 269.757812 64.265625 268.988281 63.761719 268.269531 63.140625 C 268.316406 62.828125 268.347656 62.589844 268.382812 62.324219 C 267.859375 62.277344 267.367188 62.222656 267.101562 61.738281 C 266.886719 61.324219 266.472656 61.199219 266.128906 60.945312 C 265.167969 60.222656 264.015625 59.949219 262.984375 59.375 C 262.46875 59.085938 261.964844 58.808594 261.324219 58.972656 C 261.140625 59.015625 260.878906 58.960938 260.71875 58.855469 C 259.976562 58.351562 259.082031 58.050781 258.546875 57.25 C 258.5 57.179688 258.351562 57.179688 258.15625 57.097656 C 257.847656 57.226562 257.46875 57.375 257.117188 57.523438 C 257.070312 58.546875 257.789062 58.878906 258.410156 59.28125 " }),
            React.createElement("path", { d: "M 222.316406 46.304688 C 223.792969 46.566406 225.164062 47.1875 226.617188 47.511719 C 227.96875 47.820312 229.292969 48.257812 230.632812 48.613281 C 232.679688 49.164062 234.773438 49.460938 236.796875 50.128906 C 238.707031 50.761719 240.6875 51.171875 242.507812 52.082031 C 242.734375 52.195312 243.023438 52.195312 243.273438 52.265625 C 243.582031 52.34375 243.925781 52.390625 244.1875 52.550781 C 245 53.066406 245.835938 53.539062 246.808594 53.710938 C 247.816406 53.894531 248.59375 54.574219 249.507812 54.953125 C 250.296875 55.285156 251.050781 55.675781 251.832031 56.03125 C 252.847656 56.503906 253.878906 56.960938 254.90625 57.398438 C 255.34375 57.59375 255.800781 57.800781 256.382812 57.421875 C 256.1875 56.523438 255.765625 55.789062 254.90625 55.320312 C 254.027344 54.824219 253.113281 54.390625 252.34375 53.710938 C 252.082031 53.46875 251.671875 53.402344 251.316406 53.308594 C 250.402344 53.058594 249.460938 52.851562 248.535156 52.609375 C 248.160156 52.515625 247.847656 52.34375 247.667969 51.964844 C 247.414062 51.460938 246.957031 51.3125 246.453125 51.414062 C 245.628906 51.585938 244.863281 51.402344 244.132812 51.105469 C 243.457031 50.839844 242.792969 50.804688 242.074219 50.933594 C 241.089844 49.828125 240.160156 49.082031 238.730469 49.039062 C 237.851562 49.003906 237.003906 48.542969 236.179688 48.164062 C 234.703125 47.476562 233.046875 47.164062 231.855469 45.867188 C 230.90625 46.28125 230.058594 46.003906 229.238281 45.59375 C 229.042969 45.5 228.824219 45.28125 228.675781 45.316406 C 227.703125 45.535156 226.925781 44.9375 226.054688 44.777344 C 225.644531 44.695312 225.1875 44.640625 224.796875 44.753906 C 223.847656 45.019531 222.921875 45.027344 221.984375 44.71875 C 221.378906 44.511719 220.898438 44.800781 220.371094 45.167969 C 220.863281 45.992188 221.628906 46.1875 222.316406 46.304688 " }),
            React.createElement("path", { d: "M 70.210938 268.882812 C 69.570312 268.777344 69.035156 268.59375 68.976562 267.835938 C 68.976562 267.675781 68.941406 267.457031 68.839844 267.390625 C 68.199219 266.976562 68.027344 266.320312 67.820312 265.65625 C 67.773438 265.515625 67.636719 265.355469 67.511719 265.300781 C 66.894531 265.046875 66.722656 264.472656 66.460938 263.945312 C 66.070312 263.152344 66.003906 262.164062 65.085938 261.679688 C 65.007812 261.648438 64.960938 261.507812 64.925781 261.417969 C 64.527344 260.292969 63.554688 259.546875 63.074219 258.476562 C 63.0625 258.453125 62.980469 258.464844 62.9375 258.464844 C 62.671875 259.121094 62.648438 259.132812 62.789062 259.453125 C 63.097656 260.1875 63.417969 260.921875 63.769531 261.636719 C 64.21875 262.554688 64.550781 263.585938 65.203125 264.324219 C 66.152344 265.355469 66.824219 266.527344 67.558594 267.699219 C 68.199219 268.734375 68.851562 269.789062 69.902344 270.476562 C 70.050781 270.59375 70.1875 270.835938 70.199219 271.019531 C 70.28125 271.832031 70.898438 272.351562 71.296875 272.960938 C 71.597656 273.417969 72.132812 273.890625 72.945312 273.980469 C 72.75 272.753906 71.984375 272.132812 71.378906 271.421875 C 70.738281 270.671875 70.175781 269.914062 70.210938 268.882812 " }),
            React.createElement("path", { d: "M 52.640625 232.363281 C 52.824219 231.019531 51.917969 230.144531 51.265625 229.144531 C 51.371094 229.605469 51.519531 230.054688 51.578125 230.511719 C 51.65625 231.03125 51.621094 231.582031 51.714844 232.097656 C 51.78125 232.511719 51.875 232.980469 52.113281 233.304688 C 52.582031 233.914062 52.71875 234.625 52.925781 235.324219 C 52.960938 235.460938 53.085938 235.566406 53.167969 235.679688 C 53.292969 235.613281 53.441406 235.566406 53.453125 235.507812 C 53.53125 234.867188 53.417969 234.246094 53.0625 233.707031 C 52.789062 233.28125 52.570312 232.84375 52.640625 232.363281 " }),
            React.createElement("path", { d: "M 61.6875 254.964844 C 61.550781 254.859375 61.253906 254.835938 61.105469 254.90625 C 60.957031 254.984375 60.84375 255.238281 60.820312 255.421875 C 60.796875 255.617188 60.855469 255.859375 60.957031 256.03125 C 61.300781 256.628906 61.6875 257.191406 62.054688 257.765625 C 62.160156 257.742188 62.261719 257.707031 62.363281 257.683594 C 62.421875 257.273438 62.535156 256.859375 62.523438 256.457031 C 62.523438 255.824219 62.179688 255.332031 61.6875 254.964844 " }),
            React.createElement("path", { d: "M 327.265625 165.914062 C 327.355469 164.972656 327.621094 164.109375 328.269531 163.46875 C 327.894531 162.949219 327.480469 162.859375 326.988281 163.03125 C 326.648438 164.433594 326.667969 164.71875 327.265625 165.914062 " }),
            React.createElement("path", { d: "M 59.308594 251.703125 C 58.964844 252.6875 59.996094 253.148438 60.28125 253.917969 C 60.613281 253.261719 60.386719 252.6875 60.097656 252.125 C 59.960938 251.863281 59.789062 251.539062 59.308594 251.703125 " }),
            React.createElement("path", { d: "M 327.894531 169.3125 C 327.882812 169.3125 327.871094 169.3125 327.859375 169.300781 C 327.847656 169.324219 327.859375 169.335938 327.847656 169.347656 C 327.859375 169.347656 327.859375 169.347656 327.859375 169.359375 C 327.871094 169.347656 327.882812 169.324219 327.894531 169.3125 " }),
            React.createElement("path", { d: "M 327.894531 167.371094 C 327.90625 167.335938 327.664062 167.164062 327.539062 167.152344 C 327.300781 167.140625 327.140625 167.324219 327.183594 167.554688 C 327.308594 168.105469 327.460938 168.660156 327.621094 169.199219 C 327.640625 169.253906 327.769531 169.277344 327.859375 169.300781 C 328.226562 168.667969 327.675781 168.015625 327.894531 167.371094 " }),
            React.createElement("path", { d: "M 327.675781 175.167969 C 328.15625 174.953125 328.15625 174.953125 328.203125 173.457031 C 327.949219 173.597656 327.652344 173.675781 327.609375 173.828125 C 327.480469 174.261719 327.414062 174.734375 327.675781 175.167969 " }),
            React.createElement("path", { d: "M 132.855469 62.820312 C 132.914062 63.09375 133.109375 63.335938 133.382812 63.265625 C 133.644531 63.199219 133.863281 62.96875 134.253906 62.714844 C 133.886719 62.507812 133.691406 62.335938 133.472656 62.300781 C 133.097656 62.253906 132.789062 62.53125 132.855469 62.820312 " }),
            React.createElement("path", { d: "M 325.332031 145.792969 C 324.78125 145.929688 324.484375 145.953125 324.257812 146.089844 C 323.9375 146.285156 323.980469 146.480469 324.425781 146.941406 C 324.679688 146.632812 324.90625 146.320312 325.332031 145.792969 " }),
            React.createElement("path", { d: "M 327.859375 169.359375 C 327.699219 169.566406 327.539062 169.785156 327.390625 169.992188 C 327.722656 170.289062 327.949219 170.21875 328.15625 170.035156 C 328.441406 169.785156 328.339844 169.554688 327.859375 169.359375 " }),
            React.createElement("path", { d: "M 326.863281 162.480469 C 327.34375 162.148438 327.34375 162.148438 326.921875 161.160156 C 326.625 161.746094 326.625 162.101562 326.863281 162.480469 " }),
            React.createElement("path", { d: "M 56.425781 244.316406 C 56.496094 244.488281 56.621094 244.640625 56.769531 244.742188 C 56.816406 244.777344 57.089844 244.582031 57.089844 244.558594 C 57.011719 244.351562 56.882812 244.167969 56.722656 243.859375 C 56.550781 244.109375 56.390625 244.25 56.425781 244.316406 " }),
            React.createElement("path", { d: "M 57.742188 246.210938 C 57.683594 246.292969 57.558594 246.394531 57.582031 246.429688 C 57.652344 246.613281 57.765625 246.761719 57.867188 246.925781 C 57.949219 246.84375 58.039062 246.75 58.1875 246.578125 C 58.003906 246.429688 57.878906 246.328125 57.742188 246.210938 " }),
            React.createElement("path", { d: "M 51.222656 226.171875 C 51.117188 226.171875 51.027344 226.332031 50.925781 226.4375 C 51.027344 226.527344 51.117188 226.675781 51.234375 226.6875 C 51.335938 226.699219 51.449219 226.5625 51.632812 226.449219 C 51.449219 226.320312 51.335938 226.160156 51.222656 226.171875 " }),
            React.createElement("path", { d: "M 58.121094 248.851562 C 58.109375 248.957031 58.257812 249.082031 58.382812 249.265625 C 58.507812 249.082031 58.644531 248.957031 58.644531 248.851562 C 58.644531 248.738281 58.484375 248.636719 58.40625 248.53125 C 58.304688 248.636719 58.144531 248.738281 58.121094 248.851562 " }),
            React.createElement("path", { d: "M 56.644531 243.121094 C 56.667969 242.871094 56.519531 242.753906 56.289062 242.742188 C 56.1875 242.730469 56.082031 242.753906 55.992188 242.765625 C 56.027344 242.847656 56.082031 242.925781 56.117188 243.019531 C 56.210938 243.214844 56.324219 243.363281 56.5625 243.25 C 56.609375 243.238281 56.644531 243.167969 56.644531 243.121094 " }),
            React.createElement("path", { d: "M 325.859375 152.867188 C 325.6875 152.625 325.570312 152.453125 325.410156 152.210938 C 325.296875 152.648438 325.367188 152.84375 325.859375 152.867188 " }),
            React.createElement("path", { d: "M 50.019531 221.625 C 49.917969 221.625 49.816406 221.785156 49.621094 221.957031 C 49.835938 222.09375 49.996094 222.1875 50.144531 222.277344 C 50.203125 222.140625 50.316406 222.003906 50.296875 221.875 C 50.285156 221.773438 50.113281 221.625 50.019531 221.625 " }),
            React.createElement("path", { d: "M 51.542969 227.964844 C 51.609375 227.988281 51.746094 227.824219 51.851562 227.757812 C 51.746094 227.652344 51.65625 227.5625 51.566406 227.46875 C 51.425781 227.550781 51.347656 227.597656 51.257812 227.652344 C 51.347656 227.757812 51.425781 227.917969 51.542969 227.964844 " }),
            React.createElement("path", { d: "M 326.488281 158.722656 C 326.5 158.644531 326.542969 158.539062 326.507812 158.484375 C 326.453125 158.402344 326.347656 158.367188 326.269531 158.324219 L 326.269531 158.3125 C 326.28125 158.402344 326.292969 158.507812 326.328125 158.585938 C 326.359375 158.644531 326.429688 158.679688 326.488281 158.722656 " }),
            React.createElement("path", { d: "M 326.347656 157.390625 C 326.316406 157.714844 326.292969 158.011719 326.269531 158.3125 L 326.269531 158.324219 C 326.554688 157.75 326.554688 157.75 326.347656 157.390625 " }),
            React.createElement("path", { d: "M 326.828125 159.871094 C 326.796875 159.78125 326.75 159.6875 326.703125 159.609375 C 326.667969 159.632812 326.589844 159.65625 326.589844 159.6875 C 326.589844 159.78125 326.613281 159.882812 326.625 159.976562 C 326.691406 159.941406 326.761719 159.90625 326.828125 159.871094 " }),
            React.createElement("path", { d: "M 54.183594 236.289062 C 54.183594 236.382812 54.265625 236.460938 54.308594 236.542969 C 54.367188 236.460938 54.425781 236.394531 54.480469 236.3125 C 54.4375 236.230469 54.390625 236.152344 54.34375 236.058594 C 54.289062 236.140625 54.195312 236.21875 54.183594 236.289062 " }),
            React.createElement("path", { d: "M 326.1875 155.945312 C 326.144531 155.863281 326.097656 155.796875 326.050781 155.714844 C 326.019531 155.75 325.949219 155.785156 325.949219 155.820312 C 325.960938 155.910156 325.984375 156.003906 326.007812 156.09375 C 326.0625 156.035156 326.132812 155.992188 326.1875 155.945312 " }),
            React.createElement("path", { d: "M 325.835938 151.238281 C 325.8125 151.15625 325.789062 151.074219 325.765625 150.984375 C 325.707031 151.03125 325.628906 151.0625 325.582031 151.121094 C 325.558594 151.144531 325.59375 151.246094 325.605469 151.246094 C 325.6875 151.257812 325.753906 151.246094 325.835938 151.238281 " }),
            React.createElement("path", { d: "M 322.300781 137.085938 C 322.277344 137.144531 322.265625 137.203125 322.242188 137.25 C 322.277344 137.238281 322.3125 137.226562 322.355469 137.203125 C 322.335938 137.167969 322.324219 137.132812 322.300781 137.085938 " }),
            React.createElement("path", { d: "M 327.652344 172.277344 C 327.628906 172.296875 327.585938 172.308594 327.574219 172.34375 C 327.550781 172.378906 327.5625 172.425781 327.5625 172.472656 C 327.621094 172.449219 327.664062 172.414062 327.722656 172.390625 C 327.699219 172.355469 327.675781 172.320312 327.652344 172.277344 " }),
            React.createElement("path", { d: "M 68.667969 266.320312 L 68.703125 266.402344 L 68.746094 266.34375 Z M 68.667969 266.320312 " }),
            React.createElement("path", { d: "M 327.757812 178.9375 L 327.871094 178.890625 L 327.769531 178.832031 Z M 327.757812 178.9375 " }),
            React.createElement("path", { d: "M 61.515625 254.136719 C 61.496094 254.089844 61.460938 254.054688 61.4375 254.019531 C 61.414062 254.054688 61.347656 254.101562 61.355469 254.113281 C 61.378906 254.160156 61.425781 254.207031 61.472656 254.25 C 61.484375 254.214844 61.507812 254.171875 61.515625 254.136719 " }),
            React.createElement("path", { d: "M 328.546875 170.566406 L 328.601562 170.691406 L 328.660156 170.566406 Z M 328.546875 170.566406 " }),
            React.createElement("path", { d: "M 50.753906 224 C 50.730469 224.035156 50.742188 224.082031 50.730469 224.128906 C 50.796875 224.117188 50.855469 224.117188 50.925781 224.105469 C 50.902344 224.058594 50.890625 224.023438 50.867188 223.976562 C 50.832031 223.976562 50.777344 223.976562 50.753906 224 " }),
            React.createElement("path", { d: "M 325.800781 153.832031 C 325.8125 153.796875 325.765625 153.761719 325.753906 153.730469 C 325.742188 153.796875 325.730469 153.855469 325.71875 153.925781 C 325.753906 153.902344 325.800781 153.867188 325.800781 153.832031 " }),
            React.createElement("path", { d: "M 57.617188 245.316406 C 57.617188 245.304688 57.546875 245.292969 57.511719 245.28125 C 57.503906 245.328125 57.480469 245.375 57.480469 245.417969 C 57.480469 245.429688 57.546875 245.441406 57.582031 245.453125 C 57.605469 245.40625 57.628906 245.363281 57.617188 245.316406 " }),
            React.createElement("path", { d: "M 56.027344 242.34375 C 56.003906 242.34375 55.992188 242.34375 55.980469 242.34375 C 55.980469 242.480469 55.980469 242.605469 55.980469 242.742188 L 55.980469 242.765625 C 55.980469 242.765625 55.992188 242.765625 55.992188 242.765625 C 55.992188 242.753906 55.980469 242.753906 55.980469 242.742188 C 55.992188 242.605469 56.015625 242.480469 56.027344 242.34375 " }),
            React.createElement("path", { d: "M 224.421875 318.621094 C 224.398438 318.863281 224.410156 319.183594 224.351562 319.492188 C 224.292969 319.851562 224.179688 320.183594 224.054688 320.675781 C 224.914062 321.019531 225.53125 320.722656 225.988281 320.527344 C 226.410156 319.882812 226.753906 319.425781 227.015625 318.929688 C 227.109375 318.746094 226.996094 318.460938 226.972656 318.128906 C 226.078125 318.332031 225.199219 317.828125 224.421875 318.621094 " }),
            React.createElement("path", { d: "M 262.46875 296.480469 C 262.171875 296.675781 261.933594 296.972656 261.632812 297.179688 C 260.914062 297.707031 260.148438 298.179688 259.4375 298.730469 C 258.933594 299.121094 258.546875 299.648438 258.417969 300.429688 C 259.058594 300.613281 259.425781 300.328125 259.816406 300.027344 C 260.558594 299.441406 261.164062 298.707031 261.988281 298.191406 C 262.414062 297.925781 262.722656 297.433594 263.019531 296.996094 C 263.109375 296.859375 263.03125 296.605469 263.03125 296.398438 C 262.835938 296.421875 262.605469 296.375 262.46875 296.480469 " }),
            React.createElement("path", { d: "M 194.882812 322.59375 C 194.324219 322.34375 193.523438 322.386719 192.996094 323.007812 C 193.542969 323.664062 193.671875 323.8125 193.933594 323.800781 C 195.042969 323.742188 196.140625 323.652344 197.113281 323.03125 C 197.136719 323.007812 197.125 322.9375 197.125 322.847656 C 196.988281 322.8125 196.839844 322.730469 196.691406 322.742188 C 196.085938 322.800781 195.535156 322.90625 194.882812 322.59375 " }),
            React.createElement("path", { d: "M 70.40625 237.941406 C 70.335938 237.804688 70.234375 237.679688 70.050781 237.390625 C 69.847656 237.804688 69.652344 238.011719 69.652344 238.230469 C 69.628906 239.101562 70.304688 239.480469 70.96875 239.917969 C 70.976562 240.5625 70.476562 241.148438 71.195312 241.5625 C 71.457031 241.054688 71.824219 240.527344 71.4375 240.054688 C 70.898438 239.425781 70.726562 238.65625 70.40625 237.941406 " }),
            React.createElement("path", { d: "M 202.054688 322.078125 C 201.734375 322.078125 201.472656 322.296875 201.402344 322.652344 C 201.347656 322.972656 201.667969 323.339844 202.101562 323.339844 C 202.445312 323.339844 202.800781 323.214844 203.132812 323.101562 C 203.246094 323.054688 203.28125 322.847656 203.359375 322.699219 C 203.269531 322.546875 203.222656 322.34375 203.109375 322.308594 C 202.765625 322.179688 202.410156 322.078125 202.054688 322.078125 " }),
            React.createElement("path", { d: "M 255.457031 302.691406 C 256.175781 302.691406 256.542969 302.691406 256.886719 302.691406 C 257.757812 301.679688 257.757812 301.679688 257.574219 300.921875 C 256.738281 301.210938 256.269531 301.898438 255.457031 302.691406 " }),
            React.createElement("path", { d: "M 268.648438 298.765625 C 270.546875 298.695312 270.742188 298.523438 270.582031 297.28125 C 269.664062 297.316406 269.207031 297.925781 268.648438 298.765625 " }),
            React.createElement("path", { d: "M 199.5625 322.527344 C 199.265625 322.492188 198.945312 322.570312 198.648438 322.628906 C 198.371094 322.6875 198.085938 322.789062 198.1875 323.132812 C 198.246094 323.285156 198.476562 323.410156 198.648438 323.492188 C 198.785156 323.558594 198.957031 323.546875 199.207031 323.582031 C 199.320312 323.546875 199.5625 323.535156 199.710938 323.410156 C 199.847656 323.304688 200.007812 323.066406 199.972656 322.917969 C 199.949219 322.753906 199.722656 322.546875 199.5625 322.527344 " }),
            React.createElement("path", { d: "M 73.425781 246.878906 C 72.910156 247.648438 72.910156 248.105469 73.460938 248.507812 C 73.597656 248.601562 73.859375 248.601562 74.042969 248.542969 C 74.136719 248.519531 74.238281 248.277344 74.214844 248.140625 C 74.171875 247.601562 73.976562 247.121094 73.425781 246.878906 " }),
            React.createElement("path", { d: "M 68.953125 234.910156 C 69.023438 235.691406 68.851562 236.371094 69.433594 237.058594 C 69.605469 236.714844 69.867188 236.4375 69.835938 236.21875 C 69.742188 235.75 69.605469 235.246094 68.953125 234.910156 " }),
            React.createElement("path", { d: "M 227.726562 318.460938 C 227.726562 318.5625 227.738281 318.65625 227.75 318.746094 C 228.195312 318.722656 228.652344 318.710938 229.109375 318.679688 C 229.5 318.632812 229.558594 318.449219 229.269531 317.828125 C 228.757812 318.035156 228.242188 318.253906 227.726562 318.460938 " }),
            React.createElement("path", { d: "M 75.269531 250.472656 C 75.382812 251.117188 75.988281 251.300781 76.355469 251.714844 C 76.195312 250.609375 76.195312 250.609375 75.269531 250.472656 " }),
            React.createElement("path", { d: "M 233.433594 316.449219 C 233.574219 317.164062 233.960938 317.070312 234.304688 316.980469 C 234.578125 316.921875 234.714844 316.726562 234.5 316.324219 C 234.214844 316.359375 233.882812 316.394531 233.433594 316.449219 " }),
            React.createElement("path", { d: "M 82.828125 264.78125 C 82.921875 264.910156 83.230469 265.023438 83.300781 264.964844 C 83.4375 264.863281 83.574219 264.5625 83.503906 264.460938 C 83.402344 264.277344 83.148438 264.171875 82.679688 263.828125 C 82.761719 264.414062 82.726562 264.644531 82.828125 264.78125 " }),
            React.createElement("path", { d: "M 74.890625 248.199219 C 74.59375 248.738281 74.742188 249.140625 74.925781 249.554688 C 75.039062 249.519531 75.199219 249.519531 75.222656 249.472656 C 75.429688 248.992188 75.234375 248.625 74.890625 248.199219 " }),
            React.createElement("path", { d: "M 266.1875 300.707031 C 265.867188 300.671875 265.753906 300.933594 265.742188 301.199219 C 265.742188 301.289062 265.925781 301.507812 265.980469 301.484375 C 266.1875 301.441406 266.371094 301.3125 266.691406 301.140625 C 266.4375 300.921875 266.324219 300.714844 266.1875 300.707031 " }),
            React.createElement("path", { d: "M 79.351562 257.121094 C 79.273438 257.351562 79.167969 257.582031 79.144531 257.824219 C 79.136719 257.914062 79.296875 258.019531 79.363281 258.121094 C 79.433594 258.050781 79.535156 257.972656 79.535156 257.902344 C 79.546875 257.652344 79.523438 257.398438 79.511719 257.15625 C 79.457031 257.144531 79.398438 257.132812 79.351562 257.121094 " }),
            React.createElement("path", { d: "M 68.78125 233.328125 C 68.816406 233.316406 68.851562 233.234375 68.839844 233.199219 C 68.714844 232.742188 68.3125 232.96875 68.039062 232.890625 C 68.210938 233.15625 68.347656 233.476562 68.78125 233.328125 " }),
            React.createElement("path", { d: "M 67.992188 232.832031 C 67.992188 232.832031 67.945312 232.878906 67.945312 232.878906 C 67.980469 232.890625 68.003906 232.890625 68.039062 232.890625 C 68.015625 232.867188 68.003906 232.855469 67.992188 232.832031 " }),
            React.createElement("path", { d: "M 64.722656 220.027344 C 64.730469 220.050781 64.835938 220.003906 64.847656 219.96875 C 64.890625 219.878906 64.9375 219.761719 64.914062 219.695312 C 64.847656 219.5 64.742188 219.339844 64.652344 219.15625 C 64.570312 219.351562 64.480469 219.535156 64.457031 219.730469 C 64.445312 219.820312 64.617188 219.9375 64.722656 220.027344 " }),
            React.createElement("path", { d: "M 79.625 259.535156 C 79.695312 259.625 79.765625 259.730469 79.832031 259.820312 C 79.890625 259.753906 79.945312 259.683594 80.003906 259.613281 C 79.957031 259.546875 79.914062 259.417969 79.855469 259.40625 C 79.785156 259.394531 79.707031 259.488281 79.625 259.535156 " }),
            React.createElement("path", { d: "M 83.664062 266.046875 C 83.789062 265.976562 83.894531 265.863281 83.960938 265.757812 C 83.984375 265.722656 83.835938 265.527344 83.8125 265.539062 C 83.6875 265.597656 83.550781 265.667969 83.46875 265.757812 C 83.414062 265.828125 83.425781 265.941406 83.402344 266.035156 C 83.503906 266.046875 83.597656 266.078125 83.664062 266.046875 " }),
            React.createElement("path", { d: "M 83.355469 266.023438 C 83.355469 266.023438 83.402344 266.070312 83.402344 266.070312 C 83.402344 266.058594 83.402344 266.046875 83.402344 266.035156 C 83.390625 266.035156 83.367188 266.023438 83.355469 266.023438 " }),
            React.createElement("path", { d: "M 231.261719 316.152344 C 231.238281 316.199219 231.375 316.382812 231.398438 316.371094 C 231.535156 316.324219 231.695312 316.277344 231.753906 316.175781 C 231.789062 316.09375 231.660156 315.945312 231.570312 315.738281 C 231.421875 315.921875 231.308594 316.027344 231.261719 316.152344 " }),
            React.createElement("path", { d: "M 72.570312 243.328125 C 72.601562 243.386719 72.648438 243.421875 72.695312 243.480469 C 72.707031 243.433594 72.71875 243.398438 72.730469 243.351562 C 72.707031 243.304688 72.683594 243.273438 72.660156 243.238281 C 72.625 243.273438 72.570312 243.316406 72.570312 243.328125 " }),
            React.createElement("path", { d: "M 86.59375 269.835938 C 86.628906 269.914062 86.683594 269.984375 86.730469 270.054688 C 86.777344 269.996094 86.824219 269.9375 86.867188 269.894531 C 86.8125 269.835938 86.742188 269.789062 86.671875 269.742188 C 86.671875 269.742188 86.59375 269.8125 86.59375 269.835938 " }),
            React.createElement("path", { d: "M 81.707031 261.980469 C 81.753906 262.050781 81.800781 262.117188 81.859375 262.1875 C 81.9375 262.152344 82.074219 262.128906 82.085938 262.070312 C 82.121094 261.992188 82.050781 261.886719 82.019531 261.796875 C 81.914062 261.855469 81.8125 261.921875 81.707031 261.980469 " }),
            React.createElement("path", { d: "M 220.050781 318.367188 C 220.085938 318.4375 220.109375 318.496094 220.140625 318.550781 C 220.175781 318.527344 220.210938 318.496094 220.246094 318.472656 C 220.222656 318.425781 220.210938 318.367188 220.1875 318.355469 C 220.152344 318.34375 220.097656 318.367188 220.050781 318.367188 " }),
            React.createElement("path", { d: "M 196.550781 128.898438 C 178.238281 135.769531 168.96875 156.097656 175.875 174.335938 C 178.910156 182.375 184.800781 189.039062 192.445312 193.070312 L 212.328125 203.554688 C 217.609375 206.34375 219.628906 212.871094 216.828125 218.140625 C 214.015625 223.410156 207.457031 225.421875 202.160156 222.636719 C 198.621094 220.757812 196.40625 217.089844 196.40625 213.097656 L 171.808594 213.097656 C 171.808594 228.46875 181.816406 242.082031 196.550781 246.71875 L 196.550781 261.503906 L 221.515625 261.503906 L 221.515625 245.367188 C 239.433594 237.523438 247.5625 216.710938 239.683594 198.890625 C 236.460938 191.625 230.890625 185.648438 223.839844 181.929688 L 204.5625 171.746094 C 199.097656 169.273438 196.683594 162.890625 199.152344 157.464844 C 201.632812 152.023438 208.050781 149.617188 213.503906 152.074219 C 217.382812 153.824219 219.878906 157.671875 219.878906 161.902344 L 244.460938 161.902344 C 244.460938 147.226562 235.324219 134.074219 221.515625 128.898438 L 221.515625 113.496094 L 196.550781 113.496094 L 196.550781 128.898438 " }),
            React.createElement("path", { d: "M 162.902344 244.792969 C 162.902344 253.160156 156.046875 259.941406 147.589844 259.941406 C 139.136719 259.941406 132.28125 253.160156 132.28125 244.792969 C 132.28125 236.429688 139.136719 229.644531 147.589844 229.644531 C 154.230469 229.644531 159.882812 233.828125 162.003906 239.671875 Z M 158.519531 211.210938 C 159.277344 207.105469 162.308594 118.992188 159.703125 116.683594 C 157.621094 114.84375 131.246094 114.839844 128.949219 116.632812 C 125.105469 119.636719 133.644531 204.015625 134.609375 213.0625 C 135.035156 217.046875 157.898438 214.570312 158.519531 211.210938 Z M 158.519531 211.210938 " }),
            React.createElement("g", { "clip-path": "url(#clip2)", "clip-rule": "nonzero" },
                React.createElement("path", { d: "M 162.820312 245.355469 C 162.988281 246.265625 163.074219 247.222656 162.960938 248.160156 L 162.761719 249.257812 C 162.734375 249.445312 162.679688 249.621094 162.628906 249.800781 L 162.472656 250.34375 L 162.316406 250.882812 C 162.257812 251.0625 162.183594 251.234375 162.113281 251.410156 C 161.972656 251.757812 161.84375 252.117188 161.683594 252.460938 C 161.035156 253.835938 160.183594 255.121094 159.179688 256.308594 C 158.144531 257.46875 156.949219 258.503906 155.625 259.394531 C 154.273438 260.238281 152.8125 260.957031 151.246094 261.457031 C 150.832031 261.59375 150.40625 261.675781 149.984375 261.785156 C 149.773438 261.835938 149.558594 261.886719 149.34375 261.933594 L 148.695312 262.015625 L 148.042969 262.097656 C 147.824219 262.121094 147.605469 262.160156 147.386719 262.15625 L 146.0625 262.171875 C 144.300781 262.105469 142.515625 261.808594 140.824219 261.203125 C 139.136719 260.589844 137.527344 259.738281 136.054688 258.675781 C 134.605469 257.585938 133.292969 256.308594 132.136719 254.863281 C 131.839844 254.457031 131.542969 254.042969 131.25 253.625 C 130.984375 253.191406 130.738281 252.742188 130.488281 252.296875 C 130.359375 252.074219 130.253906 251.839844 130.152344 251.605469 L 129.851562 250.898438 C 129.753906 250.660156 129.640625 250.425781 129.566406 250.179688 L 129.335938 249.445312 C 128.742188 247.472656 128.460938 245.390625 128.613281 243.328125 C 128.746094 241.261719 129.214844 239.199219 130.03125 237.273438 C 130.847656 235.347656 132.007812 233.570312 133.410156 232.015625 C 134.433594 230.84375 135.660156 229.855469 136.945312 228.972656 C 137.277344 228.769531 137.613281 228.570312 137.953125 228.375 C 138.121094 228.277344 138.289062 228.179688 138.460938 228.085938 L 138.992188 227.835938 L 140.058594 227.351562 C 140.421875 227.210938 140.796875 227.09375 141.164062 226.964844 C 141.898438 226.691406 142.667969 226.546875 143.429688 226.378906 C 143.808594 226.285156 144.199219 226.265625 144.582031 226.214844 C 144.96875 226.175781 145.355469 226.125 145.742188 226.101562 L 146.898438 226.09375 C 147.285156 226.09375 147.667969 226.09375 148.050781 226.140625 C 148.433594 226.179688 148.816406 226.207031 149.195312 226.261719 L 150.328125 226.46875 C 150.648438 226.519531 150.988281 226.640625 151.351562 226.742188 C 151.53125 226.796875 151.71875 226.855469 151.914062 226.914062 C 152.101562 226.980469 152.292969 227.0625 152.492188 227.140625 C 152.882812 227.304688 153.296875 227.460938 153.699219 227.683594 C 154.105469 227.898438 154.527344 228.097656 154.929688 228.367188 C 156.570312 229.359375 158.117188 230.742188 159.28125 232.207031 C 160.460938 233.667969 161.261719 235.199219 161.738281 236.410156 C 161.992188 237.007812 162.136719 237.542969 162.253906 237.949219 C 162.378906 238.351562 162.40625 238.65625 162.421875 238.792969 C 162.4375 239.097656 162.5625 239.558594 161.980469 239.667969 C 161.453125 239.773438 161.175781 239.425781 161.007812 239.152344 C 160.378906 238.1875 159.699219 237.277344 158.921875 236.472656 C 156.65625 234.078125 153.65625 232.589844 150.628906 232.167969 C 147.589844 231.757812 144.496094 232.355469 142.042969 233.867188 C 140.636719 234.714844 139.460938 235.878906 138.574219 237.179688 C 137.675781 238.480469 137.050781 239.894531 136.601562 241.335938 C 136.164062 242.84375 136.152344 244.464844 136.480469 245.972656 C 136.800781 247.480469 137.472656 248.855469 138.351562 250.03125 C 139.226562 251.214844 140.308594 252.195312 141.484375 252.988281 C 142.660156 253.789062 143.914062 254.425781 145.277344 254.949219 C 145.46875 255.046875 145.679688 255.082031 145.882812 255.140625 L 146.503906 255.308594 L 147.140625 255.390625 C 147.355469 255.410156 147.570312 255.460938 147.789062 255.449219 L 148.4375 255.449219 C 148.546875 255.449219 148.65625 255.460938 148.765625 255.445312 L 149.085938 255.410156 L 149.734375 255.34375 C 149.949219 255.308594 150.15625 255.253906 150.371094 255.214844 C 151.230469 255.058594 152.042969 254.742188 152.875 254.433594 C 153.671875 254.058594 154.5 253.6875 155.28125 253.1875 C 156.042969 252.75 157.125 251.75 158.121094 250.351562 C 159.128906 248.960938 160.058594 247.1875 160.800781 245.246094 C 160.886719 245.039062 160.863281 244.804688 161.644531 244.792969 C 162.484375 244.78125 162.773438 245.054688 162.820312 245.355469 Z M 130.8125 203.855469 L 131.9375 213.089844 C 131.960938 213.261719 131.996094 213.429688 132.027344 213.597656 C 132.070312 213.761719 132.113281 213.925781 132.164062 214.082031 C 132.261719 214.390625 132.402344 214.683594 132.589844 214.964844 C 132.96875 215.53125 133.507812 215.957031 134.089844 216.296875 C 134.679688 216.632812 135.339844 216.867188 136.015625 217.042969 C 136.363281 217.121094 136.683594 217.199219 137.058594 217.257812 C 137.316406 217.300781 137.554688 217.332031 137.796875 217.359375 C 139.71875 217.566406 141.503906 217.523438 143.277344 217.40625 C 145.046875 217.28125 146.785156 217.0625 148.507812 216.753906 C 150.234375 216.445312 151.941406 216.050781 153.640625 215.527344 C 154.464844 215.269531 155.285156 214.976562 156.101562 214.605469 C 156.917969 214.222656 157.726562 213.8125 158.535156 213.097656 C 158.753906 212.894531 159.019531 212.582031 159.097656 212.183594 C 159.136719 211.992188 159.117188 211.773438 159.03125 211.605469 C 158.9375 211.425781 158.769531 211.300781 158.550781 211.234375 C 157.519531 211.074219 157.507812 210.96875 157.222656 211.035156 C 157.105469 211.042969 156.867188 211.117188 156.433594 211.222656 C 156 211.324219 155.390625 211.445312 154.644531 211.546875 C 153.148438 211.753906 151.128906 211.890625 148.980469 211.921875 C 146.835938 211.949219 144.550781 211.878906 142.542969 211.710938 C 141.539062 211.625 140.601562 211.519531 139.800781 211.394531 C 139.402344 211.335938 139.03125 211.269531 138.714844 211.203125 C 138.546875 211.175781 138.40625 211.140625 138.265625 211.109375 C 138.214844 211.097656 138.246094 211.097656 138.246094 211.097656 C 138.253906 211.101562 138.257812 211.101562 138.253906 211.097656 L 138.253906 211.089844 C 138.246094 211.066406 138.261719 211.050781 138.265625 211.050781 L 138.269531 211.046875 C 138.269531 211.046875 138.269531 211.050781 138.269531 211.046875 L 138.261719 210.984375 L 138.25 210.855469 L 138.144531 209.851562 L 137.925781 207.835938 L 137.460938 203.804688 C 137.136719 201.121094 136.792969 198.433594 136.441406 195.75 C 135.261719 186.777344 134.324219 177.785156 133.007812 168.820312 C 131.808594 160.667969 131.148438 152.460938 130.160156 144.28125 C 129.695312 140.40625 129.316406 136.527344 129.011719 132.640625 C 128.859375 130.699219 128.726562 128.753906 128.625 126.8125 C 128.527344 124.867188 128.449219 122.925781 128.460938 120.984375 C 128.46875 120.371094 128.449219 119.753906 128.4375 119.136719 C 128.433594 118.519531 128.417969 117.898438 128.527344 117.273438 C 128.558594 117.070312 128.566406 116.847656 128.484375 116.632812 C 128.40625 116.410156 128.25 116.191406 127.886719 115.972656 C 127.554688 115.777344 127.308594 115.777344 127.125 115.914062 C 127.03125 115.980469 126.960938 116.058594 126.886719 116.1875 C 126.808594 116.316406 126.738281 116.464844 126.6875 116.578125 C 126.425781 117.128906 126.28125 117.574219 126.148438 118.023438 C 126.019531 118.464844 125.914062 118.894531 125.824219 119.320312 C 125.644531 120.167969 125.519531 121 125.421875 121.824219 C 125.226562 123.472656 125.140625 125.082031 125.097656 126.585938 C 125.019531 129.59375 125.117188 132.1875 125.066406 133.75 C 124.878906 140.378906 125.582031 146.949219 125.660156 153.546875 C 125.800781 164.96875 127.84375 176.226562 128.863281 187.554688 C 129.273438 193.011719 130.160156 198.421875 130.8125 203.855469 Z M 164.066406 138.433594 C 164.121094 135.613281 164.042969 132.792969 163.910156 129.964844 C 163.773438 127.136719 163.59375 124.3125 163.371094 121.429688 L 163.257812 120.082031 L 163.183594 119.398438 L 163.070312 118.4375 C 162.972656 117.703125 162.851562 116.964844 162.625 116.296875 C 162.515625 115.960938 162.371094 115.648438 162.199219 115.359375 C 162.113281 115.210938 162.003906 115.085938 161.894531 114.953125 C 161.84375 114.882812 161.769531 114.832031 161.730469 114.746094 C 161.667969 114.691406 161.605469 114.628906 161.539062 114.574219 C 161.203125 114.34375 160.875 114.121094 160.492188 113.964844 C 160.113281 113.804688 159.707031 113.675781 159.289062 113.574219 C 159.082031 113.523438 158.871094 113.476562 158.65625 113.4375 C 158.445312 113.394531 158.230469 113.355469 158.015625 113.324219 C 157.800781 113.292969 157.585938 113.257812 157.371094 113.230469 L 156.929688 113.179688 C 155.828125 113.0625 154.765625 112.996094 153.703125 112.945312 C 151.589844 112.851562 149.503906 112.839844 147.417969 112.875 C 143.253906 112.957031 139.113281 113.210938 134.960938 113.789062 C 134.101562 113.910156 133.246094 114.054688 132.386719 114.242188 C 131.527344 114.433594 130.671875 114.652344 129.777344 114.992188 C 129.535156 115.082031 129.230469 115.238281 129.019531 115.507812 C 128.808594 115.765625 128.679688 116.191406 128.9375 116.59375 C 129.074219 116.816406 129.222656 116.960938 129.332031 117.078125 C 129.386719 117.136719 129.433594 117.1875 129.472656 117.230469 C 129.519531 117.269531 129.5625 117.304688 129.601562 117.332031 C 129.769531 117.441406 129.957031 117.4375 130.140625 117.46875 C 130.441406 117.523438 131.546875 117.523438 133.183594 117.625 C 134.8125 117.722656 136.941406 117.890625 139.207031 118.101562 C 143.742188 118.519531 148.800781 119.125 151.628906 119.339844 C 152.882812 119.429688 154.125 119.53125 155.308594 119.664062 L 156.179688 119.769531 L 156.355469 119.796875 C 156.355469 119.796875 156.359375 119.789062 156.363281 119.789062 C 156.367188 119.785156 156.375 119.78125 156.382812 119.785156 C 156.386719 119.785156 156.390625 119.785156 156.394531 119.785156 C 156.394531 119.785156 156.398438 119.789062 156.402344 119.800781 L 156.40625 119.820312 L 156.425781 119.988281 C 156.53125 120.964844 156.613281 122 156.691406 123.039062 C 156.835938 125.125 156.953125 127.25 157.0625 129.378906 C 157.507812 138.589844 157.5 147.882812 157.914062 157.167969 C 158.285156 165.621094 158.09375 174.078125 158.324219 182.542969 C 158.53125 190.566406 158.5 198.585938 158.457031 206.601562 C 158.445312 207.875 158.589844 209.15625 158.664062 210.4375 C 158.675781 210.648438 158.746094 210.855469 158.917969 211.027344 C 159.089844 211.199219 159.355469 211.371094 159.777344 211.4375 C 160.164062 211.507812 160.378906 211.367188 160.488281 211.210938 C 160.601562 211.054688 160.625 210.851562 160.671875 210.675781 C 161.085938 209.039062 161.359375 207.414062 161.585938 205.777344 C 161.804688 204.144531 161.964844 202.527344 162.085938 201.007812 C 162.332031 197.972656 162.433594 195.328125 162.605469 193.742188 C 163.328125 187.015625 163.25 180.253906 163.839844 173.511719 C 164.847656 161.847656 164 150.140625 164.066406 138.433594 Z M 164.066406 138.433594 " })))));
};

var Icon$r = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React.createElement("circle", { cx: "256", cy: "256", r: "256", fill: "url(#paint0_linear)" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M149.813 139.861C144.738 112.406 165.591 87.0417 193.238 87.0417C217.636 87.0417 237.414 107.022 237.414 131.669V186.687C243.517 186.252 249.718 186.028 255.998 186.028C262.032 186.028 267.992 186.234 273.862 186.636V131.669C273.862 107.022 293.641 87.0417 318.039 87.0417C345.686 87.0417 366.539 112.406 361.464 139.861L349.509 204.532C390.538 222.627 421.562 254.056 421.562 293.548V317.442C421.562 349.919 400.293 377.11 370.56 395.466C340.595 413.965 300.058 424.962 255.998 424.962C211.939 424.962 171.401 413.965 141.436 395.466C111.703 377.11 90.4342 349.919 90.4342 317.442V293.548C90.4342 254.265 121.139 222.957 161.822 204.825L149.813 139.861ZM334.189 213.028L348.178 137.354C351.701 118.299 337.227 100.695 318.039 100.695C301.105 100.695 287.378 114.562 287.378 131.669V201.683C282.941 201.108 278.433 200.653 273.862 200.323C268.003 199.899 262.042 199.682 255.998 199.682C249.707 199.682 243.505 199.918 237.414 200.376C232.844 200.72 228.335 201.189 223.899 201.777V131.669C223.899 114.562 210.172 100.695 193.238 100.695C174.05 100.695 159.576 118.299 163.099 137.354L177.134 213.279C133.257 229.744 103.95 259.533 103.95 293.548V317.442C103.95 369.283 172.024 411.308 255.998 411.308C339.972 411.308 408.047 369.283 408.047 317.442V293.548C408.047 259.36 378.439 229.44 334.189 213.028Z", fill: "#633001" }),
        React.createElement("path", { d: "M408.047 317.442C408.047 369.283 339.972 411.308 255.998 411.308C172.024 411.308 103.95 369.283 103.95 317.442V293.548H408.047V317.442Z", fill: "#FEDC90" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M163.099 137.354C159.576 118.299 174.05 100.695 193.238 100.695C210.172 100.695 223.899 114.562 223.899 131.669V201.777C234.247 200.404 244.986 199.682 255.998 199.682C266.755 199.682 277.252 200.371 287.378 201.683V131.669C287.378 114.562 301.105 100.695 318.039 100.695C337.227 100.695 351.701 118.299 348.178 137.354L334.189 213.028C378.439 229.44 408.047 259.36 408.047 293.548C408.047 345.389 339.972 387.415 255.998 387.415C172.024 387.415 103.95 345.389 103.95 293.548C103.95 259.533 133.257 229.744 177.134 213.279L163.099 137.354Z", fill: "#D1884F" }),
        React.createElement("path", { d: "M213.762 286.722C213.762 300.86 206.199 312.322 196.868 312.322C187.538 312.322 179.974 300.86 179.974 286.722C179.974 272.583 187.538 261.122 196.868 261.122C206.199 261.122 213.762 272.583 213.762 286.722Z", fill: "#633001" }),
        React.createElement("path", { d: "M330.333 286.722C330.333 300.86 322.769 312.322 313.439 312.322C304.108 312.322 296.544 300.86 296.544 286.722C296.544 272.583 304.108 261.122 313.439 261.122C322.769 261.122 330.333 272.583 330.333 286.722Z", fill: "#633001" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "256", y1: "0", x2: "256", y2: "512", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#54DADE" }),
                React.createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$s = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 15 2" }, props),
        React.createElement("path", { d: "M13.2 2L1.20004 2C0.650043 2 0.200043 1.55 0.200043 1C0.200043 0.45 0.650043 0 1.20004 0L13.2 0C13.75 0 14.2 0.45 14.2 1C14.2 1.55 13.75 2 13.2 2Z" })));
};

var Icon$t = function (props) {
    var theme = useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: primaryColor }),
        React.createElement("mask", { id: "A", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "32", height: "32" },
            React.createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: "#c4c4c4" })),
        React.createElement("g", { mask: "url(#A)" },
            React.createElement("path", { d: "M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", d: "M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z", fill: secondaryColor }),
            React.createElement("ellipse", { cx: "12.308", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }),
            React.createElement("ellipse", { cx: "19.385", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }))));
};

var Icon$u = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$v = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.43832 38.1153C2.43048 38.3002 2.42654 38.4857 2.42654 38.6718C2.42654 39.3754 2.48287 40.0702 2.59273 40.7545H2.42654V41.8317C2.42654 42.3575 2.45801 42.8784 2.51976 43.3937C3.7248 53.4491 16.4632 61.3609 32 61.3609C47.5368 61.3609 60.2752 53.4491 61.4802 43.3937C61.542 42.8784 61.5735 42.3575 61.5735 41.8317V40.7545H61.4073C61.5171 40.0702 61.5735 39.3754 61.5735 38.6718C61.5735 38.4857 61.5695 38.3002 61.5617 38.1153C61.1156 27.587 48.0511 19.1426 32 19.1426C15.9489 19.1426 2.88444 27.587 2.43832 38.1153ZM0.00951064 38.1153C0.229456 31.6916 4.24297 26.2955 9.82907 22.6067C15.6197 18.7827 23.4643 16.5034 32 16.5034C40.5358 16.5034 48.3803 18.7827 54.1709 22.6067C59.757 26.2955 63.7705 31.6916 63.9905 38.1153H64V41.8317C64 48.5003 59.9176 54.102 54.1709 57.8969C48.3803 61.7208 40.5358 64.0001 32 64.0001C23.4643 64.0001 15.6197 61.7208 9.82907 57.8969C4.08238 54.102 0 48.5003 0 41.8317V38.1153H0.00951064Z", fill: "#606063" }),
        React.createElement("path", { d: "M61.5734 41.832C61.5734 52.6177 48.3329 61.3612 32 61.3612C15.667 61.3612 2.42651 52.6177 2.42651 41.832V38.7405H61.5734V41.832Z", fill: "#BEBEBE" }),
        React.createElement("path", { d: "M61.5734 38.6718C61.5734 49.4575 48.3329 58.201 32 58.201C15.667 58.201 2.42651 49.4575 2.42651 38.6718C2.42651 27.8861 15.667 19.1426 32 19.1426C48.3329 19.1426 61.5734 27.8861 61.5734 38.6718Z", fill: "#FAF9FA" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 33.1548C6.97663 33.167 6.97661 33.1792 6.97661 33.1915C6.97661 34.0795 7.09495 34.9492 7.32173 35.794H6.97634V36.9377C6.97634 37.4425 7.01459 37.9414 7.08925 38.4332C8.21673 45.8588 17.6492 51.6547 29.1184 51.6547C40.5876 51.6547 50.0201 45.8588 51.1475 38.4332C51.2222 37.9414 51.2604 37.4425 51.2604 36.9377V35.794H50.9156C51.1362 34.9723 51.2542 34.127 51.2604 33.2641C51.2606 33.2399 51.2607 33.2157 51.2607 33.1915C51.2607 33.1792 51.2607 33.167 51.2606 33.1548C51.2309 25.0436 41.329 18.4744 29.1187 18.4744C16.9083 18.4744 7.00645 25.0436 6.97668 33.1548ZM4.55012 33.1548H4.5498V36.9377C4.5498 42.269 7.79116 46.6683 12.1963 49.5962C16.643 52.5518 22.632 54.2939 29.1184 54.2939C35.6048 54.2939 41.5937 52.5518 46.0405 49.5962C50.4456 46.6683 53.687 42.269 53.687 36.9377V33.2739C53.6872 33.2464 53.6872 33.2189 53.6872 33.1915C53.6872 27.8601 50.4459 23.4609 46.0408 20.533C41.594 17.5773 35.6051 15.8352 29.1187 15.8352C22.6322 15.8352 16.6433 17.5773 12.1965 20.533C7.80153 23.4542 4.56495 27.84 4.55012 33.1548Z", fill: "#633001" }),
        React.createElement("path", { d: "M51.2604 36.9379C51.2604 45.0659 41.3471 51.6549 29.1184 51.6549C16.8897 51.6549 6.97632 45.0659 6.97632 36.9379V33.4849H51.2604V36.9379Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M51.2604 33.1914C51.2604 41.3195 41.3471 47.9085 29.1184 47.9085C16.8897 47.9085 6.97632 41.3195 6.97632 33.1914C6.97632 25.0634 16.8897 18.4744 29.1184 18.4744C41.3471 18.4744 51.2604 25.0634 51.2604 33.1914Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.6497 25.2371C13.6496 25.2493 13.6496 25.2615 13.6496 25.2737C13.6496 26.1618 13.7679 27.0315 13.9947 27.8762H13.6493V29.0199C13.6493 29.5248 13.6876 30.0237 13.7622 30.5154C14.8897 37.941 24.3222 43.737 35.7914 43.737C47.2605 43.737 56.693 37.941 57.8205 30.5154C57.8952 30.0237 57.9334 29.5248 57.9334 29.0199V27.8762H57.5886C57.8092 27.0545 57.9271 26.2092 57.9334 25.3464C57.9336 25.3222 57.9337 25.298 57.9337 25.2737C57.9337 25.2615 57.9337 25.2493 57.9336 25.2371C57.9038 17.1259 48.0019 10.5567 35.7916 10.5567C23.5813 10.5567 13.6794 17.1259 13.6497 25.2371ZM11.2231 25.2371H11.2228V29.0199C11.2228 34.3513 14.4641 38.7505 18.8693 41.6785C23.316 44.6341 29.3049 46.3762 35.7914 46.3762C42.2778 46.3762 48.2667 44.6341 52.7135 41.6785C57.1186 38.7505 60.36 34.3513 60.36 29.0199V25.3561C60.3601 25.3287 60.3602 25.3012 60.3602 25.2737C60.3602 19.9424 57.1189 15.5432 52.7137 12.6152C48.267 9.65961 42.2781 7.91748 35.7916 7.91748C29.3052 7.91748 23.3163 9.65961 18.8695 12.6152C14.4745 15.5364 11.2379 19.9222 11.2231 25.2371Z", fill: "#633001" }),
        React.createElement("path", { d: "M57.9334 29.0201C57.9334 37.1481 48.0201 43.7372 35.7913 43.7372C23.5626 43.7372 13.6493 37.1481 13.6493 29.0201V25.5671H57.9334V29.0201Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M57.9334 25.274C57.9334 33.402 48.0201 39.991 35.7913 39.991C23.5626 39.991 13.6493 33.402 13.6493 25.274C13.6493 17.1459 23.5626 10.5569 35.7913 10.5569C48.0201 10.5569 57.9334 17.1459 57.9334 25.274Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 17.3196C6.97663 17.3318 6.97661 17.344 6.97661 17.3563C6.97661 18.2443 7.09495 19.114 7.32173 19.9588H6.97634V21.1025C6.97634 21.6073 7.01459 22.1062 7.08925 22.598C8.21673 30.0236 17.6492 35.8195 29.1184 35.8195C40.5876 35.8195 50.0201 30.0236 51.1475 22.598C51.2222 22.1062 51.2604 21.6073 51.2604 21.1025V19.9588H50.9156C51.1362 19.1371 51.2542 18.2917 51.2604 17.4289C51.2606 17.4047 51.2607 17.3805 51.2607 17.3563C51.2607 17.344 51.2607 17.3318 51.2606 17.3196C51.2309 9.20843 41.329 2.63919 29.1187 2.63919C16.9083 2.63919 7.00645 9.20843 6.97668 17.3196ZM4.55012 17.3196H4.5498V21.1025C4.5498 26.4338 7.79116 30.833 12.1963 33.761C16.643 36.7166 22.632 38.4587 29.1184 38.4587C35.6048 38.4587 41.5937 36.7166 46.0405 33.761C50.4456 30.833 53.687 26.4338 53.687 21.1025V17.4387C53.6872 17.4112 53.6872 17.3837 53.6872 17.3563C53.6872 12.0249 50.4459 7.62568 46.0408 4.69775C41.594 1.74213 35.6051 0 29.1187 0C22.6322 0 16.6433 1.74213 12.1965 4.69775C7.80153 7.61896 4.56495 12.0047 4.55012 17.3196Z", fill: "#633001" }),
        React.createElement("path", { d: "M51.2604 21.1027C51.2604 29.2307 41.3471 35.8197 29.1184 35.8197C16.8897 35.8197 6.97632 29.2307 6.97632 21.1027V17.6497H51.2604V21.1027Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M51.2604 17.3562C51.2604 25.4842 41.3471 32.0733 29.1184 32.0733C16.8897 32.0733 6.97632 25.4842 6.97632 17.3562C6.97632 9.22822 16.8897 2.63916 29.1184 2.63916C41.3471 2.63916 51.2604 9.22822 51.2604 17.3562Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.214 18.272C12.214 20.9856 14.0269 23.4161 16.8871 25.0513L14.9054 28.7844L14.9059 28.7847H14.9054V38.2326C14.9054 39.4819 15.8366 40.4947 16.9853 40.4947C18.134 40.4947 19.0652 39.4819 19.0652 38.2326V30.7188L21.1972 26.7024C22.5605 27.0169 24.0238 27.1876 25.5468 27.1876C32.9103 27.1876 38.8796 23.196 38.8796 18.272C38.8796 13.3481 32.9103 9.35645 25.5468 9.35645C18.1833 9.35645 12.214 13.3481 12.214 18.272Z", fill: "url(#paint0_linear)" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.8871 25.0513C16.5702 24.8701 16.2663 24.6792 15.9762 24.4793C13.6475 22.8741 12.2139 20.685 12.2139 18.272C12.2139 13.3481 18.1832 9.35641 25.5468 9.35641C32.9103 9.35641 38.8796 13.3481 38.8796 18.272C38.8796 23.1959 32.9103 27.1876 25.5468 27.1876C24.0238 27.1876 22.5604 27.0168 21.1972 26.7024L19.0652 30.7187V38.2325C19.0652 39.4819 18.134 40.4947 16.9853 40.4947C15.8366 40.4947 14.9054 39.4819 14.9054 38.2325V28.7847L16.8871 25.0513ZM12.7822 28.8244V38.2325C12.7822 40.7573 14.664 42.804 16.9853 42.804C19.3066 42.804 21.1884 40.7573 21.1884 38.2325V31.3375L22.2942 29.2544C23.3445 29.4135 24.433 29.4969 25.5468 29.4969C29.5564 29.4969 33.2881 28.4148 36.0865 26.5435C38.8503 24.6954 41.0028 21.836 41.0028 18.272C41.0028 14.708 38.8503 11.8486 36.0865 10.0005C33.2881 8.12923 29.5564 7.04712 25.5468 7.04712C21.5371 7.04712 17.8054 8.12923 15.007 10.0005C12.2432 11.8486 10.0907 14.708 10.0907 18.272C10.0907 21.4 11.738 23.9758 14.0266 25.8213L13.0813 27.6021C12.9912 27.7662 12.9192 27.9435 12.8685 28.1307C12.8064 28.3589 12.7783 28.5928 12.7822 28.8244Z", fill: "#633001" }),
        React.createElement("path", { d: "M16.3791 14.5156C16.3791 17.0663 19.3667 19.1341 23.0521 19.1341C26.7375 19.1341 29.7251 17.0663 29.7251 14.5156C29.7251 11.9648 26.7375 9.89697 23.0521 9.89697C19.3667 9.89697 16.3791 11.9648 16.3791 14.5156Z", fill: "#9E7200" }),
        React.createElement("path", { d: "M16.3792 12.5361H29.7251V14.5155H16.3792V12.5361Z", fill: "#9E7200" }),
        React.createElement("path", { d: "M16.3791 12.5361C16.3791 15.0868 19.3667 17.1546 23.0521 17.1546C26.7375 17.1546 29.7251 15.0868 29.7251 12.5361C29.7251 9.98529 26.7375 7.91748 23.0521 7.91748C19.3667 7.91748 16.3791 9.98529 16.3791 12.5361Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M20.52 11.9795L22.4008 10.6777C22.7983 10.4027 23.3062 10.4027 23.7036 10.6777L25.5845 11.9795C25.959 12.2388 25.959 12.8336 25.5845 13.0928L23.7036 14.3946C23.3062 14.6697 22.7983 14.6697 22.4008 14.3946L20.52 13.0928C20.1454 12.8336 20.1454 12.2388 20.52 11.9795Z", fill: "#9E7200" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.1938 7.32218C18.7911 6.21664 20.8681 5.6084 23.0522 5.6084C25.2363 5.6084 27.3133 6.21664 28.9106 7.32218C30.4827 8.41029 31.8484 10.1975 31.8484 12.5363V14.5157C31.8484 16.8545 30.4827 18.6417 28.9106 19.7298C27.3133 20.8353 25.2363 21.4435 23.0522 21.4435C20.8681 21.4435 18.7911 20.8353 17.1938 19.7298C15.6217 18.6417 14.256 16.8545 14.256 14.5157V12.5363C14.256 10.1975 15.6217 8.41029 17.1938 7.32218ZM23.0522 7.91769C19.3668 7.91769 16.3792 9.9855 16.3792 12.5363V14.5157C16.3792 17.0664 19.3668 19.1343 23.0522 19.1343C26.7376 19.1343 29.7252 17.0664 29.7252 14.5157V12.5363C29.7252 9.9855 26.7376 7.91769 23.0522 7.91769Z", fill: "#633001" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "25.691", y1: "9.6549", x2: "25.691", y2: "40.2608", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#9F4A08" }),
                React.createElement("stop", { offset: "0.370494", stopColor: "#7D3900" }),
                React.createElement("stop", { offset: "1", stopColor: "#8D4104" })))));
};

var Icon$w = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 90 90" }, props),
        React.createElement("circle", { cx: "45", cy: "45", r: "45", fill: "url(#paint0_linear)" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.7703 49.9442C15.7626 50.1122 15.7587 50.2809 15.7587 50.4501C15.7587 51.0897 15.8144 51.7214 15.923 52.3435H15.7587V53.3228C15.7587 53.8008 15.7898 54.2744 15.8508 54.7428C17.0423 63.8844 29.6377 71.0772 45 71.0772C60.3623 71.0772 72.9577 63.8844 74.1492 54.7428C74.2102 54.2744 74.2413 53.8008 74.2413 53.3228V52.3435H74.077C74.1856 51.7214 74.2413 51.0897 74.2413 50.4501C74.2413 50.2809 74.2374 50.1122 74.2297 49.9442C73.7886 40.3727 60.8709 32.6957 45 32.6957C29.1291 32.6957 16.2114 40.3727 15.7703 49.9442ZM13.3688 49.9442C13.5863 44.1042 17.5547 39.1986 23.0781 35.845C28.8037 32.3686 36.5601 30.2964 45 30.2964C53.4399 30.2964 61.1964 32.3686 66.9219 35.845C72.4453 39.1986 76.4137 44.1042 76.6312 49.9442H76.6406V53.3228C76.6406 59.3853 72.6041 64.4779 66.9219 67.9279C61.1964 71.4043 53.4399 73.4765 45 73.4765C36.5601 73.4765 28.8037 71.4043 23.0781 67.9279C17.3959 64.4779 13.3594 59.3853 13.3594 53.3228V49.9442H13.3688Z", fill: "#606063" }),
        React.createElement("path", { d: "M74.2412 53.3233C74.2412 63.1287 61.1494 71.0776 44.9999 71.0776C28.8503 71.0776 15.7585 63.1287 15.7585 53.3233V50.5127H74.2412V53.3233Z", fill: "#BEBEBE" }),
        React.createElement("path", { d: "M74.2412 50.4502C74.2412 60.2557 61.1494 68.2046 44.9999 68.2046C28.8503 68.2046 15.7585 60.2557 15.7585 50.4502C15.7585 40.6447 28.8503 32.6958 44.9999 32.6958C61.1494 32.6958 74.2412 40.6447 74.2412 50.4502Z", fill: "#FAF9FA" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.2578 45.4345C20.2577 45.4456 20.2577 45.4567 20.2577 45.4679C20.2577 46.2752 20.3747 47.0659 20.5989 47.8338H20.2574V48.8736C20.2574 49.3326 20.2953 49.7861 20.3691 50.2332C21.4839 56.9839 30.8104 62.2532 42.1508 62.2532C53.4912 62.2532 62.8178 56.9839 63.9326 50.2332C64.0064 49.7861 64.0442 49.3326 64.0442 48.8736V47.8338H63.7032C63.9213 47.0868 64.038 46.3183 64.0442 45.5339C64.0444 45.5119 64.0445 45.4899 64.0445 45.4679C64.0445 45.4567 64.0444 45.4456 64.0444 45.4345C64.015 38.0605 54.2243 32.0883 42.1511 32.0883C30.0779 32.0883 20.2872 38.0605 20.2578 45.4345ZM17.8585 45.4345H17.8582V48.8736C17.8582 53.7204 21.0631 57.7199 25.4188 60.3817C29.8156 63.0687 35.7372 64.6525 42.1508 64.6525C48.5644 64.6525 54.4861 63.0687 58.8829 60.3817C63.2385 57.7199 66.4435 53.7204 66.4435 48.8736V45.5428C66.4437 45.5178 66.4438 45.4928 66.4438 45.4679C66.4438 40.621 63.2388 36.6216 58.8832 33.9598C54.4863 31.2728 48.5647 29.689 42.1511 29.689C35.7375 29.689 29.8158 31.2728 25.419 33.9598C21.0734 36.6155 17.8731 40.6027 17.8585 45.4345Z", fill: "#633001" }),
        React.createElement("path", { d: "M64.0441 48.8738C64.0441 56.2631 54.2421 62.2534 42.1507 62.2534C30.0593 62.2534 20.2573 56.2631 20.2573 48.8738V45.7346H64.0441V48.8738Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M64.0441 45.4679C64.0441 52.8573 54.2421 58.8475 42.1507 58.8475C30.0593 58.8475 20.2573 52.8573 20.2573 45.4679C20.2573 38.0786 30.0593 32.0884 42.1507 32.0884C54.2421 32.0884 64.0441 38.0786 64.0441 45.4679Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.8557 38.2365C26.8556 38.2476 26.8556 38.2587 26.8556 38.2699C26.8556 39.0772 26.9726 39.8679 27.1968 40.6359H26.8553V41.6756C26.8553 42.1346 26.8932 42.5881 26.967 43.0352C28.0818 49.7859 37.4083 55.0552 48.7487 55.0552C60.0891 55.0552 69.4157 49.7859 70.5305 43.0352C70.6043 42.5881 70.6421 42.1346 70.6421 41.6756V40.6359H70.3011C70.5192 39.8888 70.6359 39.1203 70.6421 38.3359C70.6423 38.3139 70.6424 38.2919 70.6424 38.2699C70.6424 38.2587 70.6423 38.2476 70.6423 38.2365C70.6129 30.8625 60.8222 24.8903 48.749 24.8903C36.6758 24.8903 26.8851 30.8625 26.8557 38.2365ZM24.4564 38.2365H24.4561V41.6756C24.4561 46.5224 27.661 50.5219 32.0167 53.1837C36.4135 55.8707 42.3351 57.4545 48.7487 57.4545C55.1623 57.4545 61.084 55.8707 65.4808 53.1837C69.8364 50.5219 73.0414 46.5224 73.0414 41.6756V38.3448C73.0416 38.3198 73.0417 38.2948 73.0417 38.2699C73.0417 33.4231 69.8367 29.4236 65.4811 26.7618C61.0842 24.0748 55.1626 22.491 48.749 22.491C42.3354 22.491 36.4137 24.0748 32.0169 26.7618C27.6713 29.4175 24.471 33.4047 24.4564 38.2365Z", fill: "#633001" }),
        React.createElement("path", { d: "M70.6422 41.6758C70.6422 49.0651 60.8402 55.0554 48.7488 55.0554C36.6575 55.0554 26.8555 49.0651 26.8555 41.6758V38.5366H70.6422V41.6758Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M70.6422 38.2699C70.6422 45.6593 60.8402 51.6495 48.7488 51.6495C36.6575 51.6495 26.8555 45.6593 26.8555 38.2699C26.8555 30.8806 36.6575 24.8904 48.7488 24.8904C60.8402 24.8904 70.6422 30.8806 70.6422 38.2699Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.2578 31.0385C20.2577 31.0496 20.2577 31.0607 20.2577 31.0719C20.2577 31.8792 20.3747 32.6699 20.5989 33.4379H20.2574V34.4776C20.2574 34.9366 20.2953 35.3901 20.3691 35.8372C21.4839 42.5879 30.8104 47.8572 42.1508 47.8572C53.4912 47.8572 62.8178 42.5879 63.9326 35.8372C64.0064 35.3901 64.0442 34.9366 64.0442 34.4776V33.4379H63.7032C63.9213 32.6908 64.038 31.9223 64.0442 31.1379C64.0444 31.1159 64.0445 31.0939 64.0445 31.0719C64.0445 31.0607 64.0444 31.0496 64.0444 31.0385C64.015 23.6645 54.2243 17.6923 42.1511 17.6923C30.0779 17.6923 20.2872 23.6645 20.2578 31.0385ZM17.8585 31.0385H17.8582V34.4776C17.8582 39.3244 21.0631 43.3239 25.4188 45.9857C29.8156 48.6727 35.7372 50.2565 42.1508 50.2565C48.5644 50.2565 54.4861 48.6727 58.8829 45.9857C63.2385 43.3239 66.4435 39.3244 66.4435 34.4776V31.1468C66.4437 31.1218 66.4438 31.0968 66.4438 31.0719C66.4438 26.2251 63.2388 22.2256 58.8832 19.5638C54.4863 16.8768 48.5647 15.293 42.1511 15.293C35.7375 15.293 29.8158 16.8768 25.419 19.5638C21.0734 22.2195 17.8731 26.2067 17.8585 31.0385Z", fill: "#633001" }),
        React.createElement("path", { d: "M64.0441 34.4778C64.0441 41.8671 54.2421 47.8574 42.1507 47.8574C30.0593 47.8574 20.2573 41.8671 20.2573 34.4778V31.3386H64.0441V34.4778Z", fill: "#FEDC90" }),
        React.createElement("path", { d: "M64.0441 31.0719C64.0441 38.4613 54.2421 44.4515 42.1507 44.4515C30.0593 44.4515 20.2573 38.4613 20.2573 31.0719C20.2573 23.6826 30.0593 17.6924 42.1507 17.6924C54.2421 17.6924 64.0441 23.6826 64.0441 31.0719Z", fill: "#D1884F" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.4361 31.9044C25.4361 34.3714 27.2287 36.5809 30.0567 38.0676L28.0973 41.4614L28.0977 41.4617H28.0973V50.0509C28.0973 51.1867 29.018 52.1075 30.1538 52.1075C31.2896 52.1075 32.2104 51.1867 32.2104 50.0509V43.22L34.3184 39.5686C35.6663 39.8545 37.1133 40.0097 38.6192 40.0097C45.9 40.0097 51.8022 36.3808 51.8022 31.9044C51.8022 27.428 45.9 23.7991 38.6192 23.7991C31.3383 23.7991 25.4361 27.428 25.4361 31.9044Z", fill: "url(#paint1_linear)" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.0569 38.0676C29.7437 37.9029 29.4431 37.7294 29.1563 37.5476C26.8538 36.0883 25.4363 34.0982 25.4363 31.9045C25.4363 27.428 31.3386 23.7991 38.6194 23.7991C45.9002 23.7991 51.8025 27.428 51.8025 31.9045C51.8025 36.3809 45.9002 40.0098 38.6194 40.0098C37.1135 40.0098 35.6666 39.8545 34.3187 39.5687L32.2106 43.22V50.0509C32.2106 51.1868 31.2899 52.1075 30.1541 52.1075C29.0183 52.1075 28.0975 51.1868 28.0975 50.0509V41.4617L30.0569 38.0676ZM25.9981 41.4978V50.0509C25.9981 52.3462 27.8588 54.2069 30.1541 54.2069C32.4493 54.2069 34.31 52.3462 34.31 50.0509V43.7826L35.4034 41.8887C36.4418 42.0334 37.5181 42.1092 38.6194 42.1092C42.584 42.1092 46.2738 41.1254 49.0408 39.4242C51.7735 37.7441 53.9019 35.1446 53.9019 31.9045C53.9019 28.6643 51.7735 26.0648 49.0408 24.3847C46.2738 22.6835 42.584 21.6997 38.6194 21.6997C34.6548 21.6997 30.965 22.6835 28.198 24.3847C25.4652 26.0648 23.3369 28.6643 23.3369 31.9045C23.3369 34.7481 24.9657 37.0898 27.2286 38.7677L26.2939 40.3867C26.2048 40.5358 26.1337 40.697 26.0835 40.8672C26.0221 41.0746 25.9943 41.2873 25.9981 41.4978Z", fill: "#633001" }),
        React.createElement("path", { d: "M29.5544 28.4894C29.5544 30.8083 32.5084 32.6882 36.1524 32.6882C39.7964 32.6882 42.7505 30.8083 42.7505 28.4894C42.7505 26.1704 39.7964 24.2905 36.1524 24.2905C32.5084 24.2905 29.5544 26.1704 29.5544 28.4894Z", fill: "#9E7200" }),
        React.createElement("path", { d: "M29.5547 26.6899H42.7508V28.4894H29.5547V26.6899Z", fill: "#9E7200" }),
        React.createElement("path", { d: "M29.5544 26.6898C29.5544 29.0088 32.5084 30.8887 36.1524 30.8887C39.7964 30.8887 42.7505 29.0088 42.7505 26.6898C42.7505 24.3709 39.7964 22.491 36.1524 22.491C32.5084 22.491 29.5544 24.3709 29.5544 26.6898Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M33.6489 26.1838L35.5086 25.0003C35.9016 24.7502 36.4038 24.7502 36.7968 25.0003L38.6565 26.1838C39.0269 26.4195 39.0269 26.9602 38.6565 27.1959L36.7968 28.3794C36.4038 28.6295 35.9016 28.6295 35.5086 28.3794L33.6489 27.1959C33.2785 26.9602 33.2785 26.4195 33.6489 26.1838Z", fill: "#9E7200" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.3599 21.9496C31.9392 20.9446 33.9929 20.3916 36.1525 20.3916C38.3121 20.3916 40.3658 20.9446 41.9451 21.9496C43.4996 22.9389 44.8499 24.5636 44.8499 26.6899V28.4894C44.8499 30.6156 43.4996 32.2404 41.9451 33.2296C40.3658 34.2347 38.3121 34.7876 36.1525 34.7876C33.9929 34.7876 31.9392 34.2347 30.3599 33.2296C28.8054 32.2404 27.4551 30.6156 27.4551 28.4894V26.6899C27.4551 24.5636 28.8054 22.9389 30.3599 21.9496ZM36.1525 22.491C32.5085 22.491 29.5545 24.3709 29.5545 26.6899V28.4894C29.5545 30.8083 32.5085 32.6882 36.1525 32.6882C39.7965 32.6882 42.7505 30.8083 42.7505 28.4894V26.6899C42.7505 24.3709 39.7965 22.491 36.1525 22.491Z", fill: "#633001" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "45", y1: "0", x2: "45", y2: "90", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#54DADE" }),
                React.createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })),
            React.createElement("linearGradient", { id: "paint1_linear", x1: "38.7618", y1: "24.0704", x2: "38.7618", y2: "51.8948", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#9F4A08" }),
                React.createElement("stop", { offset: "0.370494", stopColor: "#7D3900" }),
                React.createElement("stop", { offset: "1", stopColor: "#8D4104" })))));
};

var Icon$x = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React.createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$A = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 34 38" }, props),
        React.createElement("rect", { x: "8.83594", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React.createElement("rect", { x: "19.4385", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React.createElement("path", { d: "M8.5 13.0084C13.1944 8.40751 20.8056 8.40751 25.5 13.0084C30.1944 17.6093 30.1944 25.0689 25.5 29.6698L17.6538 37.3597C17.2927 37.7136 16.7073 37.7136 16.3462 37.3597L8.5 29.6698C3.80558 25.0689 3.80558 17.6093 8.5 13.0084Z", fill: "#D1884F" }),
        React.createElement("ellipse", { cx: "12.3696", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" }),
        React.createElement("ellipse", { cx: "21.2056", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" })));
};

var Icon$B = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React.createElement("g", { clipPath: "url(#clip0)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.0073 13.3635C24.9476 12.4048 23.2491 12.9058 22.8792 14.286C22.6061 15.3055 23.2111 16.3534 24.2305 16.6266L31.8797 18.6762L26.0073 13.3635ZM18.609 13.1418C19.8344 8.56857 25.4621 6.90878 28.9731 10.0851L41.2257 21.1698C43.051 22.8212 41.4235 25.8102 39.0459 25.1732L23.0863 20.8968C19.7085 19.9917 17.7039 16.5197 18.609 13.1418Z", fill: "#7645D9" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.264 10.1052C42.7399 8.62854 44.609 8.17749 45.7061 9.27458C46.5164 10.0849 46.5164 11.3987 45.7061 12.209L39.6263 18.2888L42.264 10.1052ZM49.1002 5.88046C45.4652 2.24548 39.2724 3.73996 37.6954 8.63274L32.192 25.7073C31.3722 28.251 34.5252 30.1781 36.415 28.2883L49.1002 15.6031C51.785 12.9183 51.785 8.5653 49.1002 5.88046Z", fill: "#7645D9" }),
            React.createElement("path", { opacity: "0.6", d: "M70.9047 42.5535C71.2363 43.8171 73.0301 43.8171 73.3617 42.5535L74.3564 38.7636C74.4727 38.3202 74.819 37.9739 75.2624 37.8575L79.0523 36.8629C80.3159 36.5313 80.3159 34.7375 79.0523 34.4059L75.2624 33.4112C74.819 33.2949 74.4727 32.9486 74.3564 32.5051L73.3617 28.7153C73.0301 27.4517 71.2363 27.4517 70.9047 28.7153L69.91 32.5051C69.7937 32.9486 69.4474 33.2949 69.004 33.4112L65.2141 34.4059C63.9505 34.7375 63.9505 36.5313 65.2141 36.8629L69.004 37.8575C69.4474 37.9739 69.7937 38.3202 69.91 38.7636L70.9047 42.5535Z", fill: "#53DEE9" }),
            React.createElement("path", { d: "M67.9738 14.5792C67.9699 15.345 68.9855 15.6172 69.365 14.952L70.5032 12.957C70.6364 12.7235 70.885 12.58 71.1538 12.5814L73.4506 12.5932C74.2164 12.5971 74.4886 11.5814 73.8234 11.202L71.8284 10.0637C71.5949 9.93057 71.4514 9.68195 71.4528 9.41322L71.4646 7.11635C71.4685 6.35056 70.4528 6.07841 70.0734 6.74357L68.9351 8.73862C68.802 8.97203 68.5533 9.11558 68.2846 9.1142L65.9877 9.10239C65.222 9.09846 64.9498 10.1141 65.615 10.4936L67.61 11.6318C67.8434 11.765 67.987 12.0136 67.9856 12.2824L67.9738 14.5792Z", fill: "#53DEE9" }),
            React.createElement("path", { opacity: "0.8", d: "M12.6621 19.7326C13.3806 19.544 13.3806 18.5241 12.6621 18.3356L8.79571 17.3208C8.54359 17.2547 8.34669 17.0578 8.28052 16.8056L7.26579 12.9392C7.07722 12.2208 6.05731 12.2208 5.86875 12.9392L4.85402 16.8056C4.78785 17.0578 4.59095 17.2547 4.33883 17.3208L0.472442 18.3356C-0.246022 18.5241 -0.246022 19.544 0.472441 19.7326L4.33883 20.7473C4.59095 20.8135 4.78785 21.0104 4.85402 21.2625L5.86875 25.1289C6.05731 25.8474 7.07722 25.8474 7.26578 25.1289L8.28052 21.2625C8.34669 21.0104 8.54359 20.8135 8.79571 20.7473L12.6621 19.7326Z", fill: "#53DEE9" }),
            React.createElement("path", { d: "M16.1463 37.3821C17.0611 33.9679 20.5705 31.9418 23.9847 32.8566L57.9852 41.9671C61.3994 42.8819 63.4256 46.3912 62.5107 49.8054L56.8167 71.0558C55.9019 74.47 52.3925 76.4961 48.9783 75.5813L14.9778 66.4709C11.5636 65.556 9.53745 62.0467 10.4523 58.6325L16.1463 37.3821Z", fill: "url(#paint0_linear)" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.157 45.058L23.1564 35.9476C21.4493 35.4902 19.6947 36.5032 19.2373 38.2103L13.5432 59.4607C13.0858 61.1678 14.0989 62.9225 15.806 63.3799L49.8066 72.4903C51.5137 72.9477 53.2683 71.9347 53.7257 70.2276L59.4198 48.9772C59.8772 47.2701 58.8641 45.5154 57.157 45.058ZM23.9847 32.8566C20.5705 31.9418 17.0611 33.9679 16.1463 37.3821L10.4523 58.6325C9.53745 62.0467 11.5636 65.556 14.9778 66.4709L48.9783 75.5813C52.3925 76.4961 55.9019 74.47 56.8167 71.0558L62.5107 49.8054C63.4256 46.3912 61.3994 42.8819 57.9852 41.9671L23.9847 32.8566Z", fill: "#0098A1" }),
            React.createElement("path", { d: "M35.9629 36.0654L46.0085 38.7571L37.0016 72.3714L26.956 69.6797L35.9629 36.0654Z", fill: "#7645D9" }),
            React.createElement("path", { d: "M11.8535 53.0029L14.5452 42.9573L61.111 55.4346L58.4193 65.4802L11.8535 53.0029Z", fill: "#7645D9" }),
            React.createElement("g", { style: { mixBlendMode: "multiply" } },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.0918 57.9047L40.1732 60.606L39.7591 62.1515L29.6777 59.4502L30.0918 57.9047ZM42.8724 50.5325L32.791 47.8312L33.2051 46.2857L43.2865 48.987L42.8724 50.5325Z", fill: "#7645D9" })),
            React.createElement("path", { d: "M11.4611 31.1814C10.775 28.6207 12.2946 25.9887 14.8552 25.3026L58.1287 13.7075C60.6893 13.0214 63.3213 14.541 64.0074 17.1016L65.1462 21.3517C65.8324 23.9123 64.3128 26.5443 61.7521 27.2305L18.4787 38.8256C15.918 39.5117 13.286 37.9921 12.5999 35.4314L11.4611 31.1814Z", fill: "url(#paint1_linear)" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M58.9569 16.7985L15.6834 28.3936C14.8299 28.6223 14.3233 29.4996 14.552 30.3531L15.6908 34.6032C15.9196 35.4568 16.7969 35.9633 17.6504 35.7346L60.9239 24.1395C61.7775 23.9108 62.284 23.0335 62.0553 22.1799L60.9165 17.9298C60.6878 17.0763 59.8104 16.5698 58.9569 16.7985ZM14.8552 25.3026C12.2946 25.9887 10.775 28.6207 11.4611 31.1814L12.5999 35.4314C13.286 37.9921 15.918 39.5117 18.4787 38.8256L61.7521 27.2305C64.3128 26.5443 65.8324 23.9123 65.1462 21.3517L64.0074 17.1016C63.3213 14.541 60.6893 13.0214 58.1287 13.7075L14.8552 25.3026Z", fill: "#0098A1" }),
            React.createElement("path", { d: "M31.4707 20.8506L41.5163 18.1589L45.1398 31.6818L35.0942 34.3735L31.4707 20.8506Z", fill: "#7645D9" }),
            React.createElement("g", { style: { mixBlendMode: "multiply" } },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.9671 22.5998L41.9672 19.7998L41.5673 17.9998L31.3975 20.8215L31.9671 22.5998Z", fill: "#7645D9" }))),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "40.9849", y1: "37.4118", x2: "31.978", y2: "71.0261", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#53DEE9" }),
                React.createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React.createElement("linearGradient", { id: "paint1_linear", x1: "36.4919", y1: "19.505", x2: "40.1154", y2: "33.028", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#53DEE9" }),
                React.createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("rect", { width: "80", height: "80", fill: "white", transform: "matrix(-1 0 0 1 80 0)" })))));
};

var Icon$C = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React.createElement("path", { d: "M76.2856 28.6526C77.0883 29.4553 77.1989 30.7184 76.548 31.6485C64.6385 48.6643 49.9116 63.5221 33.0019 75.5817L31.6665 76.5341C30.6872 77.2325 29.3467 77.121 28.4962 76.2705L22.4847 70.259C26.0334 66.5844 25.9945 60.7286 22.3678 57.1019C18.7411 53.4752 12.8853 53.4362 9.21067 56.985L3.68116 51.4555C2.62962 50.4039 2.77462 48.6597 3.98536 47.7962L5.32156 46.8433C21.8225 35.0751 36.1934 20.5765 47.815 3.97204C48.6291 2.80897 50.296 2.66297 51.2998 3.66682L56.9276 9.29459C53.3922 12.97 53.4356 18.8158 57.0578 22.438C60.6799 26.0601 66.5257 26.1035 70.2011 22.5681L76.2856 28.6526Z", fill: "#DBCDF9" }),
        React.createElement("path", { d: "M78.9507 30.3151L57.459 57.5291L29.6615 78.5708L24.3156 73.1863L22.3868 70.8482L24.3156 68.0575L24.9915 65.2668L24.6194 62.29L23.5031 59.4993L21.6426 57.2668L19.4101 55.7784L16.9915 55.0342H14.0147L10.8519 56.1505L8.99148 57.8249L4.52637 52.4296L11.7898 51.3463C34.3187 47.9863 55.6053 38.8899 73.6048 24.9307L78.9507 30.3151Z", fill: "#A28BD4" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.7724 70.5193C19.7732 69.7287 20.0885 68.971 20.6487 68.4131L20.6586 68.4032C23.1622 65.8996 23.1622 61.8405 20.6586 59.3369C18.155 56.8333 14.0958 56.8333 11.5922 59.3369L11.5823 59.3468C11.0245 59.907 10.2667 60.2223 9.47617 60.2231C8.68561 60.2239 7.92718 59.9103 7.36817 59.3512L1.57656 53.5596C-0.776282 51.2068 -0.451848 47.304 2.25722 45.372L3.59342 44.419L5.32184 46.8426L3.98564 47.7955C2.7749 48.659 2.6299 50.4032 3.68144 51.4548L9.47304 57.2464L9.48735 57.232C9.49192 57.2275 9.49649 57.2229 9.50106 57.2183C13.1682 53.5659 19.1019 53.5705 22.7635 57.232C26.4247 60.8933 26.4295 66.8263 22.778 70.4936C22.7731 70.4984 22.7683 70.5033 22.7635 70.5081L22.7491 70.5224L28.4965 76.2698C29.347 77.1203 30.6875 77.2318 31.6668 76.5334L33.0022 75.581C49.9119 63.5214 64.6388 48.6636 76.5483 31.6478C77.1992 30.7178 77.0886 29.4546 76.2859 28.6519L70.2487 22.6148C70.2268 22.6371 70.2047 22.6594 70.1825 22.6816C70.1603 22.7038 70.138 22.7259 70.1156 22.7479C66.4445 26.3475 60.5503 26.3254 56.9064 22.6816C53.2625 19.0376 53.2405 13.1434 56.8404 9.47221C56.8623 9.44989 56.8843 9.42764 56.9064 9.40548C56.9286 9.38329 56.9509 9.36124 56.9733 9.33932L51.3001 3.66613C50.2962 2.66229 48.6293 2.80829 47.8153 3.97136C36.1937 20.5758 21.8228 35.0744 5.32184 46.8426L3.59342 44.419C19.8185 32.8476 33.9492 18.5913 45.3766 2.26445C47.252 -0.415092 51.0922 -0.751452 53.4049 1.56125L59.0781 7.23444C59.64 7.79626 59.9539 8.55937 59.95 9.35389C59.9461 10.1484 59.6247 10.9084 59.0574 11.4647C59.042 11.4798 59.0267 11.495 59.0113 11.5104C56.5077 14.014 56.5077 18.0731 59.0113 20.5767C61.5149 23.0803 65.5741 23.0803 68.0777 20.5767C68.0929 20.5615 68.1081 20.5461 68.1233 20.5306C68.6796 19.9633 69.4396 19.6419 70.2341 19.6381C71.0287 19.6342 71.7918 19.9481 72.3536 20.5099L78.3907 26.547C80.2148 28.3711 80.4662 31.2413 78.987 33.3547C66.8832 50.648 51.9161 65.7482 34.7306 78.0046L33.3952 78.9569C31.2319 80.4997 28.2705 80.2536 26.3916 78.3747L20.6442 72.6273C20.0852 72.0683 19.7715 71.3099 19.7724 70.5193Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.9888 14.0672L41.3044 15.3827C41.8856 15.964 41.8856 16.9064 41.3044 17.4876C40.7231 18.0688 39.7808 18.0688 39.1995 17.4876L37.884 16.1721C37.3027 15.5908 37.3027 14.6484 37.884 14.0672C38.4652 13.4859 39.4076 13.4859 39.9888 14.0672Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M45.5142 19.5926L46.8298 20.9081C47.411 21.4894 47.411 22.4317 46.8298 23.013C46.2485 23.5942 45.3062 23.5942 44.7249 23.013L43.4094 21.6974C42.8281 21.1162 42.8281 20.1738 43.4094 19.5926C43.9906 19.0113 44.933 19.0113 45.5142 19.5926Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M52.3542 28.5384C51.773 29.1196 50.8306 29.1196 50.2493 28.5384L48.6707 26.9597C48.0894 26.3785 48.0894 25.4361 48.6707 24.8549C49.2519 24.2736 50.1943 24.2736 50.7755 24.8549L52.3542 26.4335C52.9354 27.0148 52.9354 27.9571 52.3542 28.5384Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.8796 34.0638C57.2983 34.645 56.356 34.645 55.7747 34.0638L54.1961 32.4851C53.6148 31.9039 53.6148 30.9615 54.1961 30.3802C54.7773 29.799 55.7197 29.799 56.3009 30.3802L57.8796 31.9589C58.4608 32.5401 58.4608 33.4825 57.8796 34.0638Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M61.8267 35.9051L63.1423 37.2206C63.7235 37.8019 63.7235 38.7442 63.1423 39.3255C62.561 39.9067 61.6187 39.9067 61.0374 39.3255L59.7219 38.0099C59.1406 37.4287 59.1406 36.4863 59.7219 35.9051C60.3031 35.3238 61.2455 35.3238 61.8267 35.9051Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M67.3521 41.4305L68.6677 42.746C69.2489 43.3273 69.2489 44.2696 68.6677 44.8509C68.0864 45.4321 67.144 45.4321 66.5628 44.8509L65.2472 43.5353C64.666 42.9541 64.666 42.0117 65.2472 41.4305C65.8285 40.8492 66.7709 40.8492 67.3521 41.4305Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32.2915 37.1288C30.6927 35.53 30.6927 32.9378 32.2915 31.3389C34.1033 29.5272 37.1152 29.806 38.5636 31.9196L42.2107 37.2416C45.3939 36.2204 48.7719 36.3559 51.0104 38.5945C53.0227 40.6067 53.3281 43.5721 52.6459 46.3981C51.9561 49.256 50.2117 52.2664 47.6467 54.8314C45.0817 57.3964 42.0713 59.1408 39.2134 59.8306C36.3874 60.5128 33.422 60.2073 31.4098 58.1951C29.1842 55.9696 29.0377 52.6168 30.0388 49.4519L24.694 45.7892C22.5804 44.3408 22.3016 41.3289 24.1134 39.5171C25.7122 37.9183 28.3044 37.9183 29.9032 39.5171L33.6067 43.2206C33.9734 42.7908 34.3625 42.3691 34.7735 41.9582C35.1704 41.5613 35.5772 41.1847 35.9918 40.8291L32.2915 37.1288Z", fill: "#633001" }),
        React.createElement("ellipse", { cx: "36.9019", cy: "50.5685", rx: "1.79015", ry: "2.60385", transform: "rotate(-45 36.9019 50.5685)", fill: "#DBCDF9" }),
        React.createElement("ellipse", { rx: "1.79015", ry: "2.60385", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 43.5768 43.8947)", fill: "#DBCDF9" })));
};

var Icon$D = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React.createElement("circle", { cx: "24", cy: "24", r: "24", fill: "url(#paint0_linear)" }),
        React.createElement("path", { d: "M39.0623 18.9777C39.3983 19.3138 39.4447 19.8426 39.1721 20.232C34.1862 27.3557 28.0207 33.576 20.9413 38.6248L20.3823 39.0235C19.9723 39.3159 19.4111 39.2692 19.055 38.9132L16.5383 36.3964C18.024 34.858 18.0077 32.4065 16.4893 30.8881C14.971 29.3698 12.5194 29.3535 10.981 30.8392L8.66608 28.5242C8.22585 28.084 8.28655 27.3538 8.79343 26.9923L9.35284 26.5933C16.261 21.6665 22.2775 15.5966 27.1429 8.64507C27.4837 8.15815 28.1816 8.09702 28.6019 8.51729L30.958 10.8734C29.4778 12.4121 29.496 14.8595 31.0125 16.3759C32.5289 17.8924 34.9762 17.9105 36.515 16.4304L39.0623 18.9777Z", fill: "#DBCDF9" }),
        React.createElement("path", { d: "M40.1776 19.6742L31.18 31.0674L19.5425 39.8766L17.3044 37.6224L16.4969 36.6435L17.3044 35.4752L17.5873 34.3068L17.4316 33.0606L16.9642 31.8923L16.1853 30.9576L15.2507 30.3345L14.2381 30.0229H12.9919L11.6678 30.4903L10.8889 31.1913L9.01953 28.9325L12.0604 28.4789C21.4923 27.0723 30.404 23.264 37.9396 17.4199L40.1776 19.6742Z", fill: "#A28BD4" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.4028 36.5059C15.4031 36.1749 15.5351 35.8577 15.7697 35.6241L15.7738 35.62C16.822 34.5718 16.822 32.8725 15.7738 31.8243C14.7257 30.7762 13.0263 30.7762 11.9781 31.8243L11.974 31.8285C11.7405 32.063 11.4232 32.195 11.0922 32.1953C10.7613 32.1957 10.4438 32.0643 10.2097 31.8303L7.78504 29.4056C6.80001 28.4206 6.93583 26.7867 8.07 25.9778L8.6294 25.5789L9.35301 26.5935L8.79361 26.9925C8.28673 27.354 8.22602 28.0842 8.66625 28.5244L11.0909 30.9491L11.0969 30.9431C11.0988 30.9412 11.1008 30.9393 11.1027 30.9374C12.638 29.4083 15.1221 29.4102 16.655 30.9431C18.1878 32.4759 18.1899 34.9598 16.6611 36.4951C16.6591 36.4971 16.6571 36.4992 16.655 36.5012L16.649 36.5072L19.0552 38.9134C19.4113 39.2694 19.9725 39.3161 20.3824 39.0237L20.9415 38.625C28.0208 33.5762 34.1863 27.3559 39.1723 20.2321C39.4448 19.8428 39.3985 19.314 39.0625 18.9779L36.535 16.4504C36.5258 16.4598 36.5166 16.4691 36.5073 16.4784C36.498 16.4877 36.4886 16.4969 36.4792 16.5061C34.9423 18.0132 32.4747 18.0039 30.9492 16.4784C29.4236 14.9528 29.4144 12.4852 30.9215 10.9482C30.9307 10.9389 30.9399 10.9296 30.9492 10.9203C30.9585 10.911 30.9678 10.9018 30.9771 10.8926L28.602 8.51747C28.1818 8.0972 27.4839 8.15833 27.1431 8.64525C22.2777 15.5968 16.2612 21.6667 9.35301 26.5935L8.6294 25.5789C15.4221 20.7344 21.338 14.766 26.1221 7.93065C26.9073 6.80885 28.515 6.66803 29.4832 7.63625L31.8584 10.0114C32.0936 10.2466 32.225 10.566 32.2234 10.8987C32.2217 11.2313 32.0872 11.5495 31.8497 11.7824C31.8432 11.7887 31.8368 11.7951 31.8304 11.8015C30.7822 12.8496 30.7822 14.549 31.8304 15.5972C32.8785 16.6453 34.5779 16.6453 35.626 15.5972C35.6324 15.5908 35.6388 15.5844 35.6452 15.5779C35.8781 15.3404 36.1962 15.2058 36.5289 15.2042C36.8615 15.2026 37.181 15.334 37.4162 15.5692L39.9437 18.0967C40.7073 18.8603 40.8126 20.062 40.1933 20.9467C35.126 28.1867 28.8599 34.5084 21.6651 39.6396L21.1061 40.0383C20.2004 40.6842 18.9606 40.5812 18.174 39.7946L15.7678 37.3884C15.5338 37.1544 15.4025 36.8369 15.4028 36.5059Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.8664 12.8716L24.4172 13.4223C24.6605 13.6657 24.6605 14.0602 24.4172 14.3035C24.1738 14.5469 23.7793 14.5469 23.536 14.3035L22.9852 13.7528C22.7419 13.5094 22.7419 13.1149 22.9852 12.8716C23.2285 12.6282 23.6231 12.6282 23.8664 12.8716Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.1799 15.1841L26.7306 15.7348C26.974 15.9782 26.974 16.3727 26.7306 16.616C26.4873 16.8594 26.0928 16.8594 25.8494 16.616L25.2987 16.0653C25.0553 15.8219 25.0553 15.4274 25.2987 15.1841C25.542 14.9407 25.9365 14.9407 26.1799 15.1841Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M29.0441 18.9295C28.8008 19.1729 28.4062 19.1728 28.1629 18.9295L27.502 18.2686C27.2587 18.0253 27.2587 17.6307 27.502 17.3874C27.7453 17.144 28.1399 17.144 28.3832 17.3874L29.0441 18.0483C29.2875 18.2916 29.2875 18.6862 29.0441 18.9295Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.3576 21.243C31.1143 21.4863 30.7197 21.4863 30.4764 21.243L29.8155 20.5821C29.5721 20.3387 29.5721 19.9442 29.8155 19.7009C30.0588 19.4575 30.4533 19.4575 30.6967 19.7009L31.3576 20.3618C31.6009 20.6051 31.6009 20.9996 31.3576 21.243Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.009 22.0141L33.5597 22.5649C33.8031 22.8082 33.8031 23.2028 33.5597 23.4461C33.3164 23.6895 32.9219 23.6895 32.6785 23.4461L32.1278 22.8953C31.8844 22.652 31.8844 22.2575 32.1278 22.0141C32.3711 21.7708 32.7656 21.7708 33.009 22.0141Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35.3225 24.3266L35.8732 24.8774C36.1166 25.1207 36.1166 25.5153 35.8732 25.7586C35.6299 26.002 35.2354 26.002 34.992 25.7586L34.4412 25.2078C34.1979 24.9645 34.1979 24.57 34.4412 24.3266C34.6846 24.0833 35.0791 24.0833 35.3225 24.3266Z", fill: "#633001" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.6437 22.5266C19.9743 21.8573 19.9743 20.772 20.6437 20.1027C21.4022 19.3442 22.6632 19.4609 23.2695 20.3458L24.7964 22.5738C26.1291 22.1463 27.5433 22.2031 28.4805 23.1402C29.3229 23.9827 29.4507 25.2241 29.1652 26.4073C28.8764 27.6037 28.1461 28.8641 27.0722 29.9379C25.9984 31.0117 24.7381 31.742 23.5416 32.0308C22.3584 32.3164 21.117 32.1886 20.2745 31.3461C19.3428 30.4144 19.2815 29.0108 19.7006 27.6858L17.4629 26.1524C16.5781 25.546 16.4614 24.285 17.2199 23.5265C17.8892 22.8572 18.9745 22.8572 19.6438 23.5265L21.1943 25.077C21.3478 24.897 21.5107 24.7205 21.6828 24.5485C21.8489 24.3823 22.0193 24.2247 22.1928 24.0758L20.6437 22.5266Z", fill: "#633001" }),
        React.createElement("ellipse", { rx: "0.749452", ry: "1.09011", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 22.5742 28.153)", fill: "#DBCDF9" }),
        React.createElement("ellipse", { cx: "25.3682", cy: "25.359", rx: "0.749453", ry: "1.09011", transform: "rotate(-45 25.3682 25.359)", fill: "#DBCDF9" }),
        React.createElement("path", { d: "M40.2095 34.2904C40.0804 34.7825 39.3818 34.7825 39.2527 34.2904L38.5576 31.6422C38.5123 31.4695 38.3775 31.3346 38.2048 31.2893L35.5566 30.5943C35.0645 30.4651 35.0645 29.7666 35.5566 29.6374L38.2048 28.9424C38.3775 28.8971 38.5123 28.7622 38.5576 28.5895L39.2527 25.9413C39.3818 25.4492 40.0804 25.4492 40.2095 25.9413L40.9045 28.5895C40.9499 28.7622 41.0847 28.8971 41.2574 28.9424L43.9056 29.6374C44.3977 29.7666 44.3977 30.4651 43.9056 30.5943L41.2574 31.2893C41.0847 31.3346 40.9499 31.4695 40.9045 31.6422L40.2095 34.2904Z", fill: "#53DEE9" }),
        React.createElement("path", { d: "M16.4183 7.94926C16.5088 7.60415 16.9988 7.60415 17.0893 7.94926L17.5767 9.80644C17.6085 9.92754 17.7031 10.0221 17.8242 10.0539L19.6814 10.5413C20.0265 10.6319 20.0265 11.1218 19.6814 11.2124L17.8242 11.6998C17.7031 11.7316 17.6085 11.8261 17.5767 11.9473L17.0893 13.8044C16.9988 14.1495 16.5088 14.1495 16.4183 13.8044L15.9309 11.9473C15.8991 11.8261 15.8045 11.7316 15.6834 11.6998L13.8262 11.2124C13.4811 11.1218 13.4811 10.6319 13.8262 10.5413L15.6834 10.0539C15.8045 10.0221 15.8991 9.92754 15.9309 9.80644L16.4183 7.94926Z", fill: "#53DEE9" }),
        React.createElement("path", { d: "M10.3511 38.7118C10.2924 38.9355 9.97486 38.9355 9.91616 38.7118L9.60024 37.5081C9.57964 37.4296 9.51834 37.3683 9.43985 37.3477L8.23612 37.0318C8.01244 36.9731 8.01244 36.6555 8.23612 36.5968L9.43985 36.2809C9.51834 36.2603 9.57964 36.199 9.60024 36.1205L9.91616 34.9168C9.97486 34.6931 10.2924 34.6931 10.3511 34.9168L10.667 36.1205C10.6876 36.199 10.7489 36.2603 10.8274 36.2809L12.0311 36.5968C12.2548 36.6555 12.2548 36.9731 12.0311 37.0318L10.8274 37.3477C10.7489 37.3683 10.6876 37.4296 10.667 37.5081L10.3511 38.7118Z", fill: "#53DEE9" }),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear", x1: "24", y1: "0", x2: "24", y2: "48", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#54DADE" }),
                React.createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$E = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$F = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$G = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$H = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Flex = styled.div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  display: flex;\n  ", "\n  ", "\n"], ["\n  display: flex;\n  ", "\n  ", "\n"])), flexbox, space);
var templateObject_1$4;

var variants$1 = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$1.INFO : _b;
    switch (variant) {
        case variants$1.DANGER:
            return theme.colors.failure;
        case variants$1.WARNING:
            return theme.colors.warning;
        case variants$1.SUCCESS:
            return theme.colors.success;
        case variants$1.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants$1.INFO; }
    switch (variant) {
        case variants$1.DANGER:
            return Icon$2;
        case variants$1.WARNING:
            return Icon$1;
        case variants$1.SUCCESS:
            return Icon;
        case variants$1.INFO:
        default:
            return Icon$3;
    }
};
var IconLabel = styled.div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled.div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"], ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? withHandlerSpacing + "px" : "12px");
});
var CloseHandler = styled.div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled(Flex)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React.createElement(StyledAlert, null,
        React.createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React.createElement(Icon, { color: "currentColor", width: "24px" })),
        React.createElement(Details, { hasHandler: !!onClick },
            React.createElement(Text, { bold: true }, title),
            typeof children === "string" ? React.createElement(Text, { as: "p" }, children) : children),
        onClick && (React.createElement(CloseHandler, null,
            React.createElement(IconButton, { size: "sm", variant: "text", onClick: onClick },
                React.createElement(Icon$k, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$5, templateObject_2$1, templateObject_3$1, templateObject_4;

var Separator = styled.div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled.ul(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArrays(accum, [item]);
        }
        return __spreadArrays(accum, [
            React.createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ]);
    }, []);
};
var DefaultSeparator = React.createElement(Icon$i, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = Children.toArray(children).filter(function (child) { return isValidElement(child); });
    var items = insertSeparators(validItems, separator);
    return (React.createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React.createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$6, templateObject_2$2;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
};
var StyledButtonMenu = styled.div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"])), getBackgroundColor);
var templateObject_1$7;

var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.size, size = _c === void 0 ? sizes.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, onClick = _a.onClick, children = _a.children;
    return (React.createElement(StyledButtonMenu, { variant: variant }, Children.map(children, function (child, index) {
        return cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onClick ? function () { return onClick(index); } : undefined,
            size: size,
            variant: variant,
        });
    })));
};

var InactiveButton = styled(Button)(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, colorKey = _a.colorKey;
    return theme.colors[colorKey];
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? sizes.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, as = _a.as, props = __rest(_a, ["isActive", "size", "variant", "as"]);
    if (!isActive) {
        return (React.createElement(InactiveButton, __assign({ forwardedAs: as, size: size, variant: "tertiary", colorKey: variant === variants.PRIMARY ? "primary" : "textSubtle" }, props)));
    }
    return React.createElement(Button, __assign({ as: as, size: size, variant: variant }, props));
};
var templateObject_1$8;

/**
 * Priority: Warning --> Success --> Active
 */
var getBoxShadow = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, theme = _a.theme;
    if (isWarning) {
        return theme.card.boxShadowWarning;
    }
    if (isSuccess) {
        return theme.card.boxShadowSuccess;
    }
    if (isActive) {
        return theme.card.boxShadowActive;
    }
    return theme.card.boxShadow;
};
var StyledCard = styled.div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.card.boxShadow;
}, getBoxShadow, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, space);
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$9;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, props = __rest(_a, ["ribbon", "children"]);
    return (React.createElement(StyledCard, __assign({}, props),
        ribbon,
        children));
};

var CardBody = styled.div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$a;

var CardHeader = styled.div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  background: ", ";\n\n  ", "\n"], ["\n  background: ", ";\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.cardHeaderBackground;
}, space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$b;

var CardFooter = styled.div(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$c;

var StyledCardRibbon = styled.div(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text;
    return (React.createElement(StyledCardRibbon, { variantColor: variantColor },
        React.createElement("div", { title: text }, text)));
};
var templateObject_1$d;

var scales = {
    SM: "sm",
    MD: "md",
};

var getScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales.SM:
            return "24px";
        case scales.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled.input.attrs({ type: "checkbox" })(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale, getScale, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
Checkbox.defaultProps = {
    scale: scales.MD,
};
var templateObject_1$e;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled.div(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container = styled.div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React.createElement(Container, null,
        target,
        React.createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$f, templateObject_2$3;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var sizes$1 = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a;
var style = (_a = {},
    _a[sizes$1.MD] = {
        fontSize: "20px",
        fontSizeLg: "20px",
    },
    _a[sizes$1.LG] = {
        fontSize: "24px",
        fontSizeLg: "24px",
    },
    _a[sizes$1.XL] = {
        fontSize: "32px",
        fontSizeLg: "40px",
    },
    _a[sizes$1.XXL] = {
        fontSize: "48px",
        fontSizeLg: "64px",
    },
    _a);
var Heading = styled(Text).attrs({ bold: true })(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"])), function (_a) {
    var size = _a.size;
    return style[size || sizes$1.MD].fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var size = _a.size;
    return style[size || sizes$1.MD].fontSizeLg;
});
Heading.defaultProps = {
    as: tags.H2,
};
var templateObject_1$g;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var Wrapper = styled.div(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"])), function (_a) {
    var height = _a.height, responsive = _a.responsive;
    return (responsive ? 0 : height);
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var width = _a.width, height = _a.height, responsive = _a.responsive;
    return (responsive ? (height / width) * 100 : 0);
}, space);
var templateObject_1$h;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = useRef(null);
    useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    img.style.backgroundImage = "url(\"" + src + "\")";
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return React.createElement(Wrapper, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled.img(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled.div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = useRef(null);
    var _b = useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return (React.createElement(Wrapper, __assign({ ref: imgRef }, otherProps), isLoaded ? React.createElement(StyledImage, { src: src, alt: alt }) : React.createElement(Placeholder, null)));
};
var templateObject_1$i, templateObject_2$4;

var scales$1 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Priority: Warning --> Success
 */
var getBoxShadow$1 = function (_a) {
    var _b = _a.isSuccess, isSuccess = _b === void 0 ? false : _b, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, theme = _a.theme;
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.inset;
};
var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$1.MD : _b;
    switch (scale) {
        case scales$1.SM:
            return "32px";
        case scales$1.LG:
            return "48px";
        case scales$1.MD:
        default:
            return "40px";
    }
};
var Input = styled.input(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, getBoxShadow$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
Input.defaultProps = {
    scale: scales$1.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$j;

var GridLayout = styled.div(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$k;

var GridLayout$1 = styled(GridLayout)(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$l;

var scales$2 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "24px";
        case scales$2.MD:
        default:
            return "32px";
    }
};
var getCheckedScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "12px";
        case scales$2.MD:
        default:
            return "20px";
    }
};
var Radio = styled.input.attrs({ type: "radio" })(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getCheckedScale, getCheckedScale, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.radio.handleBackground;
}, space);
Radio.defaultProps = {
    scale: scales$2.MD,
    m: 0,
};
var templateObject_1$m;

var getColor$1 = function (color, theme) {
    return getThemeValue("colors." + color, color)(theme);
};

var getThemeTextColor = function (_a) {
    var outline = _a.outline, _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return outline ? getColor$1(variant, theme) : "#ffffff";
};
var StyledTag = styled.div(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"], ["\n  align-items: center;\n  background-color: ",
    ";\n  border: 2px solid ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"])), function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? "primary" : _b;
    return outline ? "transparent" : getColor$1(variant, theme);
}, function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return getColor$1(variant, theme);
}, getThemeTextColor, getThemeTextColor);
var templateObject_1$n;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React.createElement(StyledTag, __assign({}, props),
        React.isValidElement(startIcon) &&
            React.cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React.isValidElement(endIcon) &&
            React.cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    outline: false,
};

var StyledLink = styled(Text)(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React.createElement(StyledLink, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$o;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React.createElement(Link, __assign({ external: true }, props),
        children,
        React.createElement(Icon$u, { color: "primary", ml: "4px" })));
};

var Bar = styled.div(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"])), function (props) { return (props.primary ? props.theme.colors.secondary : props.theme.colors.secondary + "80"); });
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled.div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$p, templateObject_2$5;

var ProgressBunnyWrapper = styled.div(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$q;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.primaryStep, primaryStep = _b === void 0 ? 0 : _b, _c = _a.secondaryStep, secondaryStep = _c === void 0 ? null : _c, _d = _a.showProgressBunny, showProgressBunny = _d === void 0 ? false : _d;
    return (React.createElement(StyledProgress, null,
        showProgressBunny && (React.createElement(ProgressBunnyWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React.createElement(Icon$A, null))),
        React.createElement(Bar, { primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? React.createElement(Bar, { style: { width: stepGuard(secondaryStep) + "%" } }) : null));
};

var Icon$I = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 256 256" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M166.898 204.279C172.402 190.795 170.197 176.127 166.942 163.633C164.747 155.208 156.522 149.043 143.339 146.339C130.289 143.662 113.23 144.62 95.212 149.658C77.1941 154.696 61.9863 162.761 52.0088 171.877C41.9295 181.085 37.8164 190.7 40.0117 199.126C43.2669 211.619 48.4857 225.444 59.7919 234.228C70.9463 242.894 88.7701 247.193 118.461 238.891C148.152 230.589 161.467 217.582 166.898 204.279ZM119.268 241.986C179.746 225.075 176.514 188.072 169.929 162.798C164.622 142.43 131.106 136.301 94.4056 146.563C57.7053 156.825 31.7183 179.593 37.0251 199.961C43.6102 225.235 58.7891 258.897 119.268 241.986Z", fill: "#464649" }),
        React.createElement("path", { d: "M155.801 175.68C158.653 186.628 180.351 181.576 214.977 171.894C249.604 162.212 257.158 150.578 254.305 139.63C251.453 128.682 244.685 121.053 216.678 128.884C182.051 138.566 152.948 164.732 155.801 175.68Z", fill: "#606063" }),
        React.createElement("path", { d: "M159.97 178.737L175.437 178.709C178.284 178.704 178.523 174.429 177.474 164.815C176.82 158.816 173.457 154.101 171.27 155.477L159.942 163.875L159.97 178.737Z", fill: "#464649" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M162.261 177.996C160.059 177.319 159.158 176.266 158.788 174.845C158.644 174.296 158.636 173.375 159.104 171.965C159.566 170.568 160.432 168.889 161.754 166.98C164.397 163.161 168.612 158.775 174.091 154.332C185.037 145.456 200.6 136.7 217.484 131.979C231.34 128.104 239.201 128.297 243.777 130.191C248.018 131.946 250.005 135.425 251.319 140.465C251.901 142.7 251.928 144.848 251.283 146.962C250.634 149.091 249.235 151.411 246.622 153.858C241.312 158.83 231.342 163.998 214.171 168.799C196.798 173.657 182.967 177.263 173.149 178.336C168.216 178.875 164.644 178.728 162.261 177.996ZM214.977 171.894C180.351 181.576 158.653 186.628 155.801 175.68C152.948 164.732 182.051 138.566 216.678 128.884C244.685 121.053 251.453 128.682 254.305 139.63C257.158 150.578 249.604 162.212 214.977 171.894Z", fill: "#464649" }),
        React.createElement("path", { d: "M169.925 161.024C176.511 186.298 179.743 223.301 119.264 240.212C58.7859 257.123 43.607 223.461 37.022 198.187C31.7151 177.819 57.7022 155.052 94.4024 144.789C131.103 134.527 164.619 140.656 169.925 161.024Z", fill: "#606063" }),
        React.createElement("path", { d: "M62.2322 217.512C45.5076 212.12 42.4613 203.795 40.3848 196.052L41.9594 211.275L50.2352 225.685L64.4374 238.481L80.947 244.327C82.4065 243.612 89.4986 243.299 83.1029 242.028C76.7073 240.758 72.7474 234.756 69.9914 231.378C68.2638 226.484 67.7365 219.287 62.2322 217.512Z", fill: "#464649" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M166.895 202.505C172.399 189.021 170.194 174.353 166.939 161.86C164.744 153.434 156.519 147.269 143.336 144.565C130.286 141.888 113.227 142.846 95.2088 147.884C77.1909 152.922 61.9831 160.987 52.0056 170.103C41.9263 179.311 37.8132 188.926 40.0086 197.352C43.2637 209.845 48.4825 223.67 59.7887 232.454C70.9431 241.12 88.7669 245.419 118.458 237.117C148.149 228.815 161.464 215.809 166.895 202.505ZM119.264 240.212C179.743 223.301 176.511 186.298 169.925 161.024C164.619 140.656 131.103 134.527 94.4024 144.789C57.7022 155.052 31.7151 177.819 37.022 198.187C43.607 223.461 58.7859 257.123 119.264 240.212Z", fill: "#464649" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M164.233 181.686C165.018 182.322 165.157 183.497 164.543 184.311C162.98 186.382 161.187 188.422 159.188 190.412C158.469 191.128 157.327 191.104 156.636 190.36C155.945 189.615 155.968 188.431 156.687 187.716C158.576 185.834 160.252 183.925 161.7 182.007C162.314 181.193 163.448 181.05 164.233 181.686ZM57.4215 216.239C57.6566 215.235 58.6323 214.619 59.6008 214.863C73.2899 218.308 91.7045 217.793 111.035 212.388C120.262 209.808 128.779 206.37 136.271 202.374C137.157 201.901 138.245 202.263 138.701 203.181C139.157 204.099 138.809 205.226 137.923 205.699C130.195 209.821 121.438 213.352 111.976 215.998C92.2044 221.527 73.1589 222.124 58.7494 218.497C57.7809 218.253 57.1863 217.242 57.4215 216.239Z", fill: "#979797" }),
        React.createElement("path", { d: "M159.836 163.292C164.405 180.829 141.059 195.381 109.857 204.106C78.655 212.831 51.4793 212.682 46.8428 194.887C42.2064 177.092 65.6193 162.798 96.8214 154.074C128.024 145.349 155.266 145.755 159.836 163.292Z", fill: "#464649" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M145.831 183.549C154.508 176.998 157.462 170.578 155.854 164.406C154.245 158.233 148.575 154.225 137.894 153.086C127.333 151.96 113.281 153.898 97.8965 158.2C82.4985 162.506 69.3986 168.094 60.8132 174.54C52.1526 181.043 49.1801 187.461 50.825 193.774C52.4698 200.087 58.1557 204.083 68.7987 205.189C79.3491 206.285 93.384 204.285 108.782 199.98C124.166 195.678 137.251 190.028 145.831 183.549ZM110.264 205.113C141.466 196.388 164.405 180.829 159.836 163.292C155.266 145.755 128.024 145.349 96.8214 154.074C65.6193 162.798 42.2064 177.092 46.8428 194.887C51.4793 212.682 79.0614 213.838 110.264 205.113Z", fill: "#737373" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M103.877 181.153C89.0555 185.297 76.4977 192.072 68.1169 199.619C67.3647 200.297 66.2249 200.214 65.5711 199.434C64.9173 198.655 64.997 197.474 65.7492 196.796C74.622 188.806 87.7006 181.803 102.936 177.543C106.034 176.676 109.107 175.955 112.134 175.375C113.114 175.187 114.056 175.858 114.237 176.873C114.419 177.889 113.771 178.864 112.792 179.052C109.86 179.614 106.881 180.313 103.877 181.153ZM123.847 175.658C123.792 174.627 124.554 173.745 125.549 173.688C132.378 173.297 138.774 173.682 144.424 174.797C145.403 174.991 146.046 175.97 145.86 176.984C145.673 177.999 144.728 178.664 143.749 178.471C138.431 177.421 132.333 177.045 125.749 177.422C124.753 177.479 123.902 176.69 123.847 175.658Z", fill: "#606063" })));
};

var Icon$J = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React.createElement("svg", { width: "128", height: "128", viewBox: "0 0 128 128", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("path", { d: "M56.7204 37.5858C56.7204 45.3822 58.0271 54.1169 60.2906 60.8591C61.4246 64.2369 62.7705 67.0285 64.249 68.946C65.742 70.8826 67.1906 71.7103 68.5307 71.7103C71.1919 71.7103 74.4165 70.5307 77.8384 68.3524C81.235 66.1902 84.7001 63.1234 87.8127 59.5481C94.0844 52.3439 98.6784 43.3694 98.6784 35.942C98.6784 28.1653 97.1567 21.2636 93.9931 16.3543C90.8793 11.5222 86.1363 8.54284 79.3564 8.54284C72.6009 8.54284 66.9825 11.9157 63.0072 17.2564C59.0174 22.6164 56.7204 29.9263 56.7204 37.5858Z", fill: "#FEDC90", stroke: "#D1884F", strokeWidth: "2.89134" }),
            React.createElement("path", { d: "M32.7442 66.7859C39.4364 62.9222 47.2575 60.5211 53.8454 59.9252C57.1411 59.6272 60.0564 59.7876 62.336 60.3933C64.6294 61.0028 66.1079 62.0118 66.8368 63.2742C69.6116 68.0804 69.9429 76.4856 67.7501 84.8501C65.5656 93.1829 61.0085 100.957 54.6069 104.653C47.9434 108.5 40.9505 110.185 34.8292 109.454C28.7533 108.729 23.476 105.626 20.0729 99.7316C16.6658 93.8305 16.5364 87.5528 18.8757 81.7754C21.228 75.9659 26.1018 70.6209 32.7442 66.7859Z", fill: "#D1884F", stroke: "#633001", strokeWidth: "2.89134" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M73.6122 7.76013C69.4145 8.86483 64.8207 11.0867 61.24 16.1556C53.2804 27.4231 51.7006 41.9592 58.5495 60.7386C65.3984 79.518 63.3431 89.9236 56.0487 98.3189C48.7543 106.714 29.475 108.685 23.3482 101.929C21.8481 100.274 17.4954 97.4588 20.3675 102.54C23.2397 107.622 30.7527 111.748 39.59 111.748C48.4273 111.748 55.5943 108.146 61.958 101.338C68.3217 94.5306 74.292 78.3883 68.3268 61.7709C60.6331 40.3385 62.8311 27.508 68.2893 19.7815C71.0879 15.8198 75.5453 12.3629 78.6077 10.5868C81.8233 8.72183 84.8797 8.42294 86.8682 8.42294C83.3332 6.65548 77.8099 6.65542 73.6122 7.76013Z", fill: "#633001" }))));
};

var rotate$1 = keyframes(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var float = keyframes(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"], ["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"])));
var Container$1 = styled.div(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var RotatingPancakeIcon = styled(Icon$J)(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"])), rotate$1);
var FloatingPanIcon = styled(Icon$I)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"])), float);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React.createElement(Container$1, null,
        React.createElement(RotatingPancakeIcon, { width: size * 0.5 + "px" }),
        React.createElement(FloatingPanIcon, { width: size + "px" })));
};
var templateObject_1$r, templateObject_2$6, templateObject_3$2, templateObject_4$1, templateObject_5;

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = keyframes(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = keyframes(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled.div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, layout, space);
var Pulse = styled(Root)(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled(Root)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React.createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React.createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$s, templateObject_2$7, templateObject_3$3, templateObject_4$2, templateObject_5$1;

var scaleKeyValues = {
    sm: {
        handleHeight: "16px",
        handleWidth: "16px",
        handleLeft: "2px",
        handleTop: "2px",
        checkedLeft: "calc(100% - 18px)",
        toggleHeight: "20px",
        toggleWidth: "36px",
    },
    md: {
        handleHeight: "32px",
        handleWidth: "32px",
        handleLeft: "4px",
        handleTop: "4px",
        checkedLeft: "calc(100% - 36px)",
        toggleHeight: "40px",
        toggleWidth: "72px",
    },
};
var getScale$2 = function (property) { return function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales.MD : _b;
    return scaleKeyValues[scale][property];
}; };
var Handle = styled.div(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.handleBackground;
}, getScale$2("handleHeight"), getScale$2("handleLeft"), getScale$2("handleTop"), getScale$2("handleWidth"));
var Input$1 = styled.input(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, getScale$2("checkedLeft"), Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled.div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getScale$2("toggleHeight"), getScale$2("toggleWidth"));
var templateObject_1$t, templateObject_2$8, templateObject_3$4;

var scales$3 = {
    SM: "sm",
    MD: "md",
};

var Toggle = function (_a) {
    var checked = _a.checked, _b = _a.scale, scale = _b === void 0 ? scales$3.MD : _b, props = __rest(_a, ["checked", "scale"]);
    var isChecked = !!checked;
    return (React.createElement(StyledToggle, { checked: isChecked, scale: scale },
        React.createElement(Input$1, __assign({ checked: checked, scale: scale }, props, { type: "checkbox" })),
        React.createElement(Handle, { scale: scale })));
};
Toggle.defaultProps = {
    scale: scales$3.MD,
};

var byTextAscending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA < upperB) {
        return -1;
    }
    if (upperA > upperB) {
        return 1;
    }
    return 0;
}; };
var byTextDescending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA > upperB) {
        return -1;
    }
    if (upperA < upperB) {
        return 1;
    }
    return 0;
}; };

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArrays(data);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending ? data.sort(column.sort) : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () { return function (state, action) {
    var rows = [];
    var nextPage = 0;
    var prevPage = 0;
    var isAscending = null;
    var sortedRows = [];
    var columnCopy = [];
    var filteredRows = [];
    var selectedRowsById = {};
    var stateCopy = __assign({}, state);
    var rowIds = {};
    switch (action.type) {
        case "SET_ROWS":
            rows = __spreadArrays(action.data);
            // preserve sorting if a sort is already enabled when data changes
            if (state.sortColumn) {
                rows = sortByColumn(action.data, state.sortColumn, state.columns);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            columnCopy = state.columns.map(function (column) {
                if (state.sortColumn === column.name) {
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: column.sorted.asc,
                        } });
                }
                return column;
            });
            return __assign(__assign({}, state), { rows: rows, originalRows: action.data, columns: columnCopy });
        case "NEXT_PAGE":
            nextPage = state.pagination.page + 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
        case "PREV_PAGE":
            prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
        case "TOGGLE_SORT":
            if (!(action.columnName in state.columnsByName)) {
                throw new Error("Invalid column, " + action.columnName + " not found");
            }
            // loop through all columns and set the sort parameter to off unless
            // it's the specified column (only one column at a time for )
            columnCopy = state.columns.map(function (column) {
                // if the row was found
                if (action.columnName === column.name) {
                    if (action.isAscOverride !== undefined) {
                        // force the sort order
                        isAscending = action.isAscOverride;
                    }
                    else {
                        // if it's undefined, start by setting to ascending, otherwise toggle
                        isAscending = column.sorted.asc === undefined ? true : !column.sorted.asc;
                    }
                    if (column.sort) {
                        sortedRows = isAscending ? state.rows.sort(column.sort) : state.rows.sort(column.sort).reverse();
                        // default to sort by string
                    }
                    else {
                        sortedRows = isAscending
                            ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                            : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                    }
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: isAscending,
                        } });
                }
                // set sorting to false for all other columns
                return __assign(__assign({}, column), { sorted: {
                        on: false,
                        asc: false,
                    } });
            });
            return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
        case "GLOBAL_FILTER":
            filteredRows = action.filter(state.originalRows);
            selectedRowsById = {};
            state.selectedRows.forEach(function (row) {
                var _a;
                selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
            });
            return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                    return selectedRowsById[row.id] ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                }), filterOn: true });
        case "SELECT_ROW":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.rows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
            stateCopy.toggleAllState =
                stateCopy.selectedRows.length === stateCopy.rows.length
                    ? (stateCopy.toggleAllState = true)
                    : (stateCopy.toggleAllState = false);
            return stateCopy;
        case "SEARCH_STRING":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                return (row.cells.filter(function (cell) {
                    if (cell.value.includes(action.searchString)) {
                        return true;
                    }
                    return false;
                }).length > 0);
            });
            return stateCopy;
        case "TOGGLE_ALL":
            if (state.selectedRows.length < state.rows.length) {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = true;
                    return __assign(__assign({}, row), { selected: true });
                });
                stateCopy.toggleAllState = true;
            }
            else {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = false;
                    return __assign(__assign({}, row), { selected: false });
                });
                stateCopy.toggleAllState = false;
            }
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                return row.id in rowIds ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
            return stateCopy;
        default:
            throw new Error("Invalid reducer action");
    }
}; };
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, " + column.name + " not found");
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
var useTable = function (columns, data, options) {
    var columnsWithSorting = useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                    asc: false,
                } });
        });
    }, [columns]);
    var columnsByName = useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: options === null || options === void 0 ? void 0 : options.sortColumn,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop,
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = useMemo(function () {
        return __spreadArrays(state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }));
    }, [state.columns]);
    useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) { return dispatch({ type: "SEARCH_STRING", searchString: searchString }); },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
    nav: "@media screen and (min-width: " + breakpointMap.lg + "px)",
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
    success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
    focus: "0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    default: "16px",
    card: "32px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries$1 = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: " + prevMinWidth + "px)", _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: " + minWidth + "px) and (max-width: " + breakpoint + "px)", _b));
    }, {});
})();
var getKey = function (size) { return "is" + size.charAt(0).toUpperCase() + size.slice(1); };
var useMatchBreakpoints = function () {
    var _a = useState(function () {
        return Object.keys(mediaQueries$1).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries$1[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries$1).map(function (size) {
            var mql = window.matchMedia(mediaQueries$1[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return state;
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(" + imgSrc + ")";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = width + "px";
    particle.style.height = height + "px";
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(" + x + "px, " + y + "px) rotate(0deg)",
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(" + (x + destinationX) + "px, " + (y + destinationY) + "px) rotate(" + rotation + "deg)",
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = useCallback(function () {
        return debounce(function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var StyledModal = styled.div(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"], ["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modal.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
});
var ModalHeader = styled.div(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"], ["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"])));
var ModalTitle = styled(Flex)(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c;
    return (React.createElement(StyledModal, null,
        React.createElement(ModalHeader, null,
            React.createElement(ModalTitle, null,
                onBack && (React.createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
                    React.createElement(Icon$5, { color: "primary" }))),
                React.createElement(Heading, null, title)),
            !hideCloseButton && (React.createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
                React.createElement(Icon$k, { color: "primary" })))),
        React.createElement(Flex, { flexDirection: "column", p: bodyPadding }, children)));
};
var templateObject_1$u, templateObject_2$9, templateObject_3$5;

var Overlay = styled.div.attrs({ role: "presentation" })(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #452a7a;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #452a7a;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? 0.6 : 0);
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex;
}, function (_a) {
    var show = _a.show;
    return (show ? "initial" : "none");
});
Overlay.defaultProps = {
    show: false,
    zIndex: 10,
};
var templateObject_1$v;

var ModalWrapper = styled.div(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = useState(true), closeOnOverlayClick = _d[0], setCloseOnOverlayClick = _d[1];
    var handlePresent = function (node) {
        setModalNode(node);
        setIsOpen(true);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (React.createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React.createElement(ModalWrapper, null,
            React.createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React.isValidElement(modalNode) &&
                React.cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$w;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var Icon$K = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M13.7803 2.71967C14.0732 3.01256 14.0732 3.48744 13.7803 3.78033L12.8107 4.75L14.0307 5.96999H20C21.1 5.96999 22 6.86999 22 7.96999V12.73C21.28 12.25 20.43 11.97 19.5 11.97C17.19 11.97 15.3 13.73 15.05 15.97H11.91C11.96 15.64 12 15.31 12 14.97C12 13.43 11.41 12.03 10.46 10.97H11C12.1 10.97 13 10.07 13 8.96999V7.06068L11.75 5.81066L10.7803 6.78033C10.4874 7.07322 10.0126 7.07322 9.71967 6.78033C9.42678 6.48744 9.42678 6.01256 9.71967 5.71967L12.7197 2.71967C13.0126 2.42678 13.4874 2.42678 13.7803 2.71967Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 15C11 17.7614 8.76142 20 6 20C3.23858 20 1 17.7614 1 15C1 12.2386 3.23858 10 6 10C8.76142 10 11 12.2386 11 15ZM9 15C9 16.6569 7.65685 18 6 18C4.34315 18 3 16.6569 3 15C3 13.3431 4.34315 12 6 12C7.65685 12 9 13.3431 9 15Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.5 12.97C17.57 12.97 16 14.54 16 16.47C16 18.4 17.57 19.97 19.5 19.97C21.43 19.97 23 18.4 23 16.47C23 14.54 21.43 12.97 19.5 12.97ZM19.5 17.97C18.67 17.97 18 17.3 18 16.47C18 15.64 18.67 14.97 19.5 14.97C20.33 14.97 21 15.64 21 16.47C21 17.3 20.33 17.97 19.5 17.97Z" }),
        React.createElement("path", { d: "M9 8.96997H4C3.45 8.96997 3 8.52997 3 7.96997C3 7.41997 3.45 6.96997 4 6.96997H7C8.1 6.96997 9 7.86997 9 8.96997Z" })));
};

var Icon$L = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$M = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$N = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" })));
};

var Icon$O = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z" })));
};

var Icon$P = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H16.73H14.72H13H11H9.28001H7.26001H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM7.02001 5L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.74001 11 4.43001 10.71 4.30001 10.53C4.04001 10.2 3.95001 9.77 4.05001 9.36L5.05001 5H7.02001ZM18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.2 19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99ZM15.51 9.52C15.56 9.91 15.44 10.3 15.18 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5H14.96L15.51 9.52ZM11 9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52L9.04001 5H11V9.69ZM18 19H6.00001C5.45001 19 5.00001 18.55 5.00001 18V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V18C19 18.55 18.55 19 18 19Z" })));
};

var Icon$Q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$R = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" })));
};

var Logo = function (_a) {
    _a.isDark; var props = __rest(_a, ["isDark"]);
    return (React.createElement(Svg, __assign({ viewBox: "0 0 160 26" }, props),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip1" },
                React.createElement("path", { d: "M 45 40.640625 L 329 40.640625 L 329 334.640625 L 45 334.640625 Z M 45 40.640625 " })),
            React.createElement("clipPath", { id: "clip2" },
                React.createElement("path", { d: "M 125 112.5 L 164.632812 112.5 L 164.632812 262.5 L 125 262.5 Z M 125 112.5 " }))),
        React.createElement("g", { id: "surface1" },
            React.createElement("path", { d: "M 83.355469 266.023438 C 83.367188 266.035156 83.367188 266.046875 83.378906 266.070312 C 83.390625 266.070312 83.390625 266.070312 83.402344 266.070312 L 83.355469 266.023438 " }),
            React.createElement("path", { d: "M 67.992188 232.832031 C 67.980469 232.832031 67.96875 232.84375 67.957031 232.855469 C 67.957031 232.855469 67.957031 232.867188 67.945312 232.878906 L 67.992188 232.832031 " }),
            React.createElement("g", { "clip-path": "url(#clip1)", "clip-rule": "nonzero" },
                React.createElement("path", { d: "M 321.542969 207.636719 C 321.578125 208.074219 321.578125 208.464844 321.476562 208.886719 C 321.316406 209.554688 321.179688 210.242188 321.109375 210.933594 C 321.019531 211.78125 321.03125 212.609375 320.675781 213.445312 C 320.433594 214.011719 320.503906 214.710938 320.480469 215.34375 C 320.445312 216.007812 320.285156 216.59375 320.023438 217.203125 C 319.519531 218.316406 319.140625 219.476562 318.695312 220.613281 C 318.214844 221.867188 317.710938 223.105469 317.21875 224.347656 C 317.164062 224.496094 317.039062 224.621094 317.003906 224.769531 C 316.441406 227.445312 314.726562 229.59375 313.6875 232.039062 C 313.523438 232.429688 313.238281 232.773438 313.035156 233.144531 C 311.980469 235.003906 311.007812 236.921875 309.910156 238.757812 C 309.144531 240.035156 308.457031 241.367188 307.667969 242.628906 C 307.449219 242.996094 307.199219 243.328125 306.957031 243.683594 C 306.203125 244.789062 305.449219 245.890625 304.695312 246.980469 C 304.453125 247.335938 304.234375 247.726562 303.925781 248.003906 C 302.875 248.96875 302.1875 250.175781 301.511719 251.390625 C 301.332031 251.714844 301.171875 252.105469 300.882812 252.308594 C 299.945312 253 299.546875 254.101562 298.800781 254.941406 C 298.148438 255.699219 297.578125 256.546875 296.949219 257.386719 C 296.640625 256.996094 296.949219 256.847656 297.050781 256.640625 C 297.519531 255.6875 297.980469 254.722656 298.460938 253.78125 C 299.03125 252.6875 299.625 251.621094 300.210938 250.542969 C 300.667969 249.703125 300.988281 248.785156 301.652344 248.074219 C 302.152344 246.144531 303.355469 244.5 303.972656 242.628906 C 304.417969 241.273438 304.992188 239.941406 305.230469 238.507812 C 305.335938 237.886719 305.675781 237.300781 305.835938 236.679688 C 306.328125 234.820312 306.992188 233.003906 307.667969 231.203125 C 307.726562 231.050781 307.769531 230.890625 307.792969 230.730469 C 307.988281 228.664062 308.457031 226.621094 308.550781 224.53125 C 308.558594 224 308.675781 223.484375 308.753906 222.957031 C 308.765625 222.851562 308.835938 222.738281 308.8125 222.644531 C 308.457031 221.324219 309.074219 220.152344 309.328125 218.925781 C 309.40625 218.535156 309.371094 218.097656 309.257812 217.707031 C 311.214844 208.96875 312.265625 199.882812 312.265625 190.546875 C 312.265625 167.519531 305.996094 145.964844 295.117188 127.476562 C 295.597656 127.878906 296.046875 128.324219 296.398438 128.863281 C 296.605469 129.175781 296.890625 129.429688 297.15625 129.691406 C 297.304688 129.839844 297.519531 129.957031 297.613281 130.128906 C 298.171875 131.300781 299.078125 132.207031 299.832031 133.230469 C 300.644531 134.355469 301.457031 135.492188 302.222656 136.640625 C 303.058594 137.890625 303.824219 139.179688 304.648438 140.429688 C 305.847656 142.277344 306.707031 144.300781 307.667969 146.265625 C 307.953125 146.839844 308.332031 147.355469 308.6875 147.894531 C 308.949219 148.296875 309.222656 148.6875 309.511719 149.078125 C 310.035156 149.824219 310.492188 150.640625 311.121094 151.269531 C 311.957031 152.085938 312.484375 153.050781 312.816406 154.128906 C 313.171875 155.3125 313.617188 156.449219 314.15625 157.5625 C 314.441406 158.171875 314.488281 158.898438 314.703125 159.5625 C 315.09375 160.78125 315.527344 161.984375 315.929688 163.203125 C 316.671875 165.441406 317.210938 167.726562 317.746094 170.011719 C 318.789062 174.390625 319.554688 178.808594 320.160156 183.265625 C 320.445312 185.378906 320.722656 187.503906 321.269531 189.582031 C 321.636719 190.960938 321.625 192.453125 321.648438 193.890625 C 321.671875 195.601562 321.453125 197.3125 321.820312 199 C 321.855469 199.160156 321.921875 199.320312 321.898438 199.472656 C 321.773438 200.804688 321.578125 202.125 321.523438 203.457031 C 321.453125 204.84375 321.476562 206.246094 321.542969 207.636719 Z M 207.089844 323.15625 C 207.285156 323.167969 207.46875 323.167969 207.660156 323.167969 C 207.648438 323.351562 207.648438 323.558594 207.582031 323.71875 C 207.535156 323.835938 207.351562 323.871094 207.226562 323.9375 C 207.148438 323.8125 207.042969 323.695312 207.019531 323.558594 C 207.007812 323.433594 207.066406 323.296875 207.089844 323.15625 Z M 299.410156 261.496094 C 298.4375 263.09375 297.40625 264.644531 295.976562 265.894531 C 295.507812 266.308594 295.164062 266.882812 294.808594 267.414062 C 294.464844 267.953125 294.214844 268.550781 293.859375 269.089844 C 293.414062 269.753906 292.921875 270.375 292.054688 270.582031 C 291.664062 270.683594 291.332031 270.984375 290.933594 271.214844 C 290.976562 271.546875 291 271.8125 291.035156 272.0625 C 291.113281 272.625 291 273.15625 290.667969 273.589844 C 289.765625 274.726562 289.136719 276.035156 288.335938 277.230469 C 287.625 278.3125 286.917969 279.390625 286.128906 280.390625 C 285.726562 280.90625 285.40625 281.457031 285.15625 282.042969 C 284.984375 282.433594 284.855469 282.859375 284.617188 283.214844 C 283.425781 284.984375 282.339844 286.855469 280.886719 288.417969 C 279.765625 289.632812 278.65625 290.839844 277.179688 291.703125 C 276.289062 292.21875 275.707031 293.160156 274.90625 294.207031 C 276.175781 294.011719 276.804688 292.953125 277.980469 293.035156 C 277.960938 293.332031 278.015625 293.675781 277.902344 293.929688 C 277.695312 294.355469 277.386719 294.746094 277.125 295.136719 C 276.90625 295.445312 276.597656 295.722656 276.484375 296.054688 C 275.96875 297.5 274.753906 298.339844 273.726562 299.316406 C 273.347656 299.683594 272.855469 299.949219 272.410156 300.222656 C 271.769531 300.601562 271.105469 300.910156 270.558594 301.464844 C 270.191406 301.820312 269.652344 302.015625 269.128906 302.324219 C 269.023438 303.347656 268.085938 303.945312 267.59375 304.816406 C 267.515625 304.941406 267.34375 305.105469 267.21875 305.105469 C 266.4375 305.082031 266.050781 305.863281 265.433594 306.011719 C 264.621094 306.195312 264.378906 307 263.660156 307.285156 C 263.074219 307.515625 262.664062 308.214844 262.183594 308.710938 C 262.035156 308.859375 261.910156 309.054688 261.726562 309.15625 C 261.1875 309.480469 260.535156 309.6875 260.078125 310.097656 C 259.621094 310.523438 259.3125 311.0625 258.695312 311.363281 C 258.238281 311.582031 257.917969 312.0625 257.414062 312.535156 C 257.296875 312.5 257.058594 312.441406 256.75 312.363281 C 255.730469 313.246094 254.554688 313.933594 253.191406 314.292969 C 252.21875 314.542969 251.511719 315.175781 251.019531 316.035156 C 250.914062 316.21875 250.789062 316.394531 250.628906 316.632812 C 250.367188 316.578125 250.125 316.496094 249.875 316.460938 C 249.128906 316.335938 248.46875 316.4375 247.78125 316.886719 C 246.808594 317.53125 245.8125 318.136719 244.554688 318.183594 C 243.777344 318.21875 243.011719 318.550781 242.234375 318.65625 C 241.453125 318.757812 240.789062 318.976562 240.4375 319.839844 C 239.359375 319.390625 238.410156 319.851562 237.425781 320.035156 C 236.421875 320.21875 235.4375 320.378906 234.589844 321.03125 C 234.316406 321.238281 233.902344 321.320312 233.539062 321.378906 C 232.222656 321.617188 230.941406 321.894531 229.71875 322.46875 C 229.304688 322.664062 228.734375 322.546875 228.320312 322.753906 C 227.453125 323.191406 226.515625 323.296875 225.621094 323.558594 C 224.238281 323.984375 222.84375 324.304688 221.433594 324.570312 C 221.285156 324.605469 221.136719 324.671875 221 324.753906 C 218.941406 325.902344 216.5625 325.777344 214.398438 326.5 C 212.914062 326.476562 211.515625 327.210938 210.007812 327.0625 C 209.378906 327.003906 208.804688 327.359375 208.128906 327.359375 C 206.757812 327.382812 205.382812 327.660156 204.011719 327.808594 C 203.601562 327.855469 203.164062 327.832031 202.742188 327.796875 C 202.640625 327.785156 202.535156 327.625 202.308594 327.417969 C 202.695312 327.324219 202.9375 327.257812 203.175781 327.222656 C 204.445312 327.039062 205.714844 326.890625 206.988281 326.695312 C 207.339844 326.636719 207.683594 326.476562 208.039062 326.371094 C 208.289062 326.292969 208.542969 326.15625 208.792969 326.15625 C 209.605469 326.132812 210.382812 326.027344 211.082031 325.558594 C 211.289062 325.417969 211.609375 325.363281 211.859375 325.40625 C 212.890625 325.558594 213.746094 325.085938 214.605469 324.671875 C 215.246094 324.363281 215.875 324.191406 216.585938 324.097656 C 217.417969 323.984375 218.242188 323.707031 219.042969 323.445312 C 220.621094 322.949219 222.109375 322.25 223.632812 321.59375 C 223.699219 321.214844 223.804688 320.894531 223.792969 320.597656 C 223.769531 320.183594 223.78125 319.664062 223.550781 319.378906 C 223.21875 318.964844 222.796875 319.367188 222.40625 319.515625 C 222.234375 319.585938 222.007812 319.527344 221.800781 319.515625 C 221.273438 319.460938 220.726562 319.285156 220.234375 319.378906 C 218.929688 319.632812 217.648438 320 216.4375 320.285156 C 216.058594 320.769531 216.527344 320.929688 216.597656 321.214844 C 216.675781 321.550781 216.539062 321.710938 216.125 321.769531 C 215.945312 321.433594 215.761719 321.078125 215.519531 320.640625 C 215.316406 320.769531 214.996094 320.859375 214.996094 320.964844 C 214.996094 321.652344 214.410156 321.757812 213.929688 322.078125 C 213.691406 321.746094 213.449219 321.410156 213.175781 321.03125 C 212.121094 320.953125 210.96875 320.492188 210.167969 321.777344 C 210.292969 322.054688 210.464844 322.332031 210.542969 322.628906 C 210.648438 323.019531 210.222656 323.421875 209.878906 323.296875 C 209.582031 323.179688 209.320312 322.925781 209.023438 322.894531 C 208.75 322.859375 208.4375 323.042969 208.140625 323.101562 C 208.015625 323.132812 207.878906 323.121094 207.742188 323.121094 C 207.96875 322.882812 208.1875 322.640625 208.417969 322.386719 C 207.605469 321.871094 206.804688 322.148438 206.046875 322.066406 C 205.695312 322.019531 205.566406 322.296875 205.695312 322.730469 C 205.738281 322.871094 205.863281 322.984375 205.96875 323.121094 C 206.140625 323.109375 206.289062 323.089844 206.449219 323.089844 C 206.644531 323.101562 206.847656 323.132812 207.042969 323.15625 C 206.539062 323.433594 206.929688 324.03125 206.574219 324.453125 C 206.324219 324.535156 205.96875 324.648438 205.488281 324.800781 C 205.269531 324.535156 205.085938 324.132812 204.789062 323.996094 C 204.492188 323.859375 204.082031 323.960938 203.613281 323.960938 C 203.460938 324.203125 203.292969 324.523438 203.0625 324.800781 C 202.890625 324.996094 202.660156 325.179688 202.433594 325.246094 C 201.722656 325.441406 200.96875 325.417969 200.304688 325.832031 C 200.144531 325.925781 199.777344 325.796875 199.574219 325.671875 C 199.367188 325.535156 199.253906 325.257812 199.035156 324.960938 C 198.613281 325.363281 198.316406 325.636719 197.984375 325.949219 C 197.605469 325.867188 197.214844 325.777344 196.828125 325.695312 C 196.644531 325.972656 196.496094 326.1875 196.347656 326.394531 C 196.105469 326.417969 195.980469 326.316406 195.476562 325.671875 C 195.273438 325.683594 195.007812 325.71875 194.757812 325.730469 C 194.492188 325.742188 194.230469 325.730469 193.980469 325.730469 C 193.886719 325.808594 193.785156 325.855469 193.738281 325.949219 C 193.03125 327.40625 192.730469 327.1875 191.632812 326.730469 C 190.707031 326.339844 189.792969 326.199219 188.820312 326.476562 C 188.589844 326.546875 188.316406 326.464844 188.066406 326.464844 C 187.8125 326.464844 187.457031 326.371094 187.320312 326.511719 C 186.796875 327.015625 186.085938 326.613281 185.605469 327.128906 C 185.355469 326.761719 185.195312 326.546875 185.078125 326.382812 C 184.347656 326.511719 183.707031 326.554688 183.101562 326.742188 C 182.710938 326.855469 182.355469 327.347656 182.011719 327.316406 C 181.613281 327.28125 181.199219 327.199219 180.800781 327.304688 C 180.550781 327.371094 180.332031 327.542969 180 327.714844 C 179.589844 327.382812 179.152344 327.003906 178.695312 326.648438 C 177.894531 326.027344 177.09375 325.441406 176.007812 325.351562 C 175.402344 325.292969 174.816406 324.925781 174.246094 324.671875 C 173.273438 324.25 172.3125 323.8125 171.179688 323.304688 C 172.390625 323.078125 173.34375 323.5 174.324219 323.59375 C 176.773438 323.847656 179.210938 324.121094 181.679688 324.085938 C 183.132812 324.066406 184.542969 323.8125 185.984375 323.707031 C 186.28125 323.683594 186.589844 323.523438 186.863281 323.375 C 187.125 323.238281 187.070312 322.617188 186.785156 322.570312 C 185.835938 322.398438 185 321.871094 184.003906 321.847656 C 182.230469 321.789062 180.550781 321.226562 178.902344 320.597656 C 178.054688 320.261719 177.230469 319.859375 176.328125 319.734375 C 176.066406 319.699219 175.765625 319.65625 175.5625 319.515625 C 173.800781 318.3125 171.773438 317.816406 169.75 317.347656 C 169.441406 317.277344 169.132812 317.164062 168.847656 317.011719 C 166.945312 316.035156 164.96875 315.246094 162.953125 314.53125 C 161.890625 314.152344 160.828125 313.855469 159.71875 313.660156 C 159.085938 313.542969 158.46875 313.476562 157.964844 312.96875 C 157.773438 312.773438 157.382812 312.707031 157.085938 312.683594 C 156.492188 312.660156 155.953125 312.523438 155.382812 312.292969 C 153.847656 311.671875 152.269531 311.191406 150.726562 310.605469 C 148.792969 309.871094 146.777344 309.285156 144.902344 308.421875 C 142.730469 307.414062 140.476562 306.550781 138.484375 305.148438 C 138.027344 304.828125 137.410156 304.703125 136.835938 304.597656 C 135.875 304.4375 135.191406 303.898438 134.5625 303.199219 C 134.273438 302.875 134.160156 302.507812 134.148438 302.105469 C 150.566406 310.191406 169.027344 314.738281 188.558594 314.738281 C 230.472656 314.738281 267.492188 293.804688 289.855469 261.785156 C 289.789062 261.933594 289.707031 262.070312 289.640625 262.222656 C 289.078125 263.3125 288.5625 264.390625 287.601562 265.207031 C 287.476562 265.300781 287.410156 265.460938 287.363281 265.621094 C 286.789062 267.457031 285.371094 268.753906 284.375 270.316406 C 284.148438 270.671875 283.886719 271.019531 283.644531 271.363281 C 282.558594 272.960938 281.402344 274.476562 280.191406 275.96875 C 279.902344 276.324219 279.550781 276.484375 279.195312 276.542969 C 278.738281 278.183594 278.28125 279.722656 277.179688 280.953125 C 276.65625 281.550781 276.128906 282.136719 275.589844 282.722656 C 274.734375 283.664062 273.863281 284.605469 272.992188 285.558594 C 272.925781 285.636719 272.789062 285.695312 272.765625 285.777344 C 272.582031 286.914062 271.542969 287.347656 270.890625 288.09375 C 270.464844 288.566406 270.054688 289.046875 269.652344 289.542969 C 268.886719 290.496094 267.972656 291.34375 267.046875 292.148438 C 265.992188 293.066406 265.101562 294.125 264.183594 295.160156 C 264.058594 295.308594 264.035156 295.539062 263.933594 295.824219 C 265.179688 295.929688 266.128906 295.503906 266.78125 294.605469 C 267.367188 293.792969 268.132812 293.25 268.910156 292.679688 C 269.460938 292.265625 269.984375 291.792969 270.488281 291.3125 C 271.070312 290.761719 271.597656 290.175781 272.308594 289.75 C 272.789062 289.460938 273.121094 288.910156 273.53125 288.507812 C 274.835938 287.234375 276.082031 285.914062 277.214844 284.5 C 278.53125 282.871094 280.007812 281.398438 281.300781 279.757812 C 282.316406 279.195312 282.613281 277.964844 283.496094 277.277344 C 283.65625 277.152344 283.757812 276.933594 283.863281 276.75 C 284.640625 275.257812 285.691406 274.015625 287.007812 272.960938 C 287.625 272.464844 288.242188 271.902344 288.710938 271.269531 C 289.421875 270.304688 290.347656 269.582031 291.171875 268.753906 C 291.652344 268.261719 292.085938 267.722656 292.566406 267.226562 C 293.917969 265.863281 295.3125 264.53125 296.652344 263.152344 C 297.097656 262.703125 297.542969 262.210938 297.828125 261.648438 C 298.195312 260.921875 298.734375 260.488281 299.523438 260.152344 C 299.761719 260.660156 299.648438 261.105469 299.410156 261.496094 Z M 201.050781 327.933594 C 201.003906 327.933594 200.957031 327.898438 200.910156 327.878906 C 200.957031 327.820312 201.003906 327.761719 201.050781 327.714844 C 201.09375 327.773438 201.140625 327.820312 201.1875 327.878906 C 201.140625 327.898438 201.09375 327.933594 201.050781 327.933594 Z M 198.15625 327.878906 C 198.121094 327.878906 198.097656 327.726562 198.0625 327.636719 C 198.1875 327.601562 198.304688 327.542969 198.429688 327.53125 C 198.464844 327.53125 198.507812 327.695312 198.554688 327.820312 C 198.417969 327.84375 198.28125 327.878906 198.15625 327.878906 Z M 178.523438 328.324219 C 178.488281 328.347656 178.363281 328.257812 178.285156 328.222656 C 178.375 328.0625 178.46875 327.898438 178.582031 327.75 C 178.59375 327.738281 178.742188 327.820312 178.914062 327.898438 C 178.765625 328.0625 178.660156 328.210938 178.523438 328.324219 Z M 177.792969 330.175781 C 177.699219 330.140625 177.644531 329.980469 177.5625 329.875 C 177.675781 329.828125 177.792969 329.714844 177.894531 329.726562 C 178.03125 329.75 178.148438 329.851562 178.410156 330 C 178.042969 330.117188 177.90625 330.207031 177.792969 330.175781 Z M 136.460938 309.871094 C 136.277344 309.730469 136.164062 309.652344 136.046875 309.558594 C 136.140625 309.457031 136.21875 309.285156 136.3125 309.285156 C 136.425781 309.273438 136.609375 309.375 136.65625 309.480469 C 136.6875 309.546875 136.550781 309.699219 136.460938 309.871094 Z M 118.910156 293.640625 C 117.753906 293.089844 116.613281 292.527344 115.640625 291.644531 C 115.214844 291.242188 114.703125 290.945312 114.230469 290.585938 C 113.511719 290.046875 112.800781 289.484375 112.070312 288.957031 C 111.679688 288.667969 111.292969 288.300781 110.859375 288.1875 C 109.1875 287.726562 107.976562 286.601562 106.660156 285.59375 C 106.40625 285.398438 106.15625 285.203125 105.882812 285.027344 C 104.429688 284.144531 102.964844 283.273438 101.5 282.398438 C 100.539062 281.824219 99.566406 281.261719 98.59375 280.699219 C 98.226562 280.492188 97.828125 280.34375 97.449219 280.136719 C 95.847656 279.296875 94.75 277.898438 93.570312 276.589844 C 92.128906 275.003906 90.65625 273.453125 89.191406 271.890625 C 88.824219 271.5 88.433594 271.144531 87.714844 271.269531 C 88.082031 272.625 88.9375 273.636719 89.648438 274.726562 C 90.378906 275.839844 91.191406 276.898438 92.027344 278.070312 C 91.226562 278.253906 90.539062 278.402344 89.820312 278.082031 C 89.488281 277.933594 89.109375 277.804688 88.746094 277.78125 C 88.230469 277.757812 87.816406 277.585938 87.464844 277.21875 C 87.257812 277 87.027344 277.011719 86.742188 277.035156 C 86 277.082031 85.484375 276.589844 85.792969 276.046875 C 86.433594 274.945312 85.976562 274.292969 85.210938 273.566406 C 84.785156 273.175781 84.582031 272.582031 84.226562 272.097656 C 83.609375 271.269531 83.78125 270.261719 83.425781 269.339844 C 83.8125 268.929688 84.179688 268.550781 84.570312 268.148438 C 84.15625 267.421875 83.769531 266.746094 83.378906 266.070312 C 82.144531 265.917969 82.085938 265.851562 81.960938 264.667969 C 81.9375 264.472656 81.925781 264.183594 81.800781 264.09375 C 80.851562 263.359375 81.023438 262.277344 80.886719 261.289062 C 80.839844 261.003906 80.828125 260.695312 80.78125 260.269531 C 80.496094 260.464844 80.335938 260.578125 80.164062 260.683594 C 79.261719 261.257812 78.207031 260.980469 78.035156 259.96875 C 77.808594 258.636719 77.121094 257.628906 76.273438 256.652344 C 75.78125 256.089844 75.851562 255.375 76.414062 254.585938 C 76.5625 254.824219 76.6875 255.03125 76.824219 255.238281 C 76.972656 255.445312 77.121094 255.6875 77.304688 255.859375 C 77.554688 256.113281 77.957031 256.089844 78.152344 255.847656 C 78.367188 255.59375 78.300781 255.273438 77.945312 255.054688 C 77.683594 254.882812 77.394531 254.757812 77.132812 254.605469 C 77.0625 254 76.984375 253.445312 76.902344 252.746094 C 76.628906 253.066406 76.46875 253.242188 76.273438 253.457031 C 76.113281 253.046875 75.988281 252.667969 75.816406 252.296875 C 75.667969 251.988281 75.460938 251.691406 75.269531 251.367188 C 75.039062 251.484375 74.8125 251.597656 74.546875 251.734375 C 74.011719 251.496094 73.574219 251.140625 73.3125 250.566406 C 72.945312 249.738281 72.511719 248.933594 72.203125 248.085938 C 71.949219 247.382812 71.800781 246.648438 71.664062 245.914062 C 71.585938 245.417969 71.9375 245.234375 72.476562 245.441406 C 72.601562 245.5 72.738281 245.535156 72.957031 245.613281 C 72.980469 245.179688 73.003906 244.824219 73.027344 244.398438 C 72.773438 244.257812 72.523438 244.121094 72.226562 243.960938 C 72.179688 243.492188 72.132812 243.007812 72.089844 242.570312 C 71.769531 242.421875 71.699219 242.628906 71.5625 242.789062 C 71.230469 243.15625 70.933594 243.203125 70.625 242.9375 C 70.167969 242.558594 69.742188 242.15625 69.273438 241.746094 C 68.917969 239.804688 68.414062 237.851562 67.671875 235.957031 C 67.488281 235.460938 67.421875 234.933594 67.261719 234.417969 C 67.03125 233.671875 67.363281 233.210938 67.957031 232.855469 C 68.128906 232.476562 68.300781 232.097656 68.507812 231.636719 C 68.175781 230.9375 67.808594 230.191406 67.453125 229.46875 C 66.964844 229.375 66.804688 229.570312 66.859375 229.984375 C 66.882812 230.132812 67.019531 230.285156 67.007812 230.421875 C 66.984375 230.617188 66.917969 230.859375 66.78125 230.949219 C 66.550781 231.121094 66.011719 230.902344 66.011719 230.617188 C 66.003906 229.894531 65.625 229.179688 65.886719 228.355469 C 66.183594 228.445312 66.425781 228.515625 66.664062 228.582031 C 66.746094 228.527344 66.871094 228.480469 66.882812 228.410156 C 66.917969 228.203125 66.847656 227.953125 66.941406 227.792969 C 67.132812 227.414062 67.464844 227.023438 67.226562 226.609375 C 67.03125 226.273438 66.621094 226.058594 66.265625 225.746094 C 66.265625 225.425781 66.265625 225.070312 66.265625 224.703125 C 65.601562 224.632812 65.84375 225.414062 65.382812 225.503906 C 65.03125 225.503906 65.097656 225.148438 64.960938 224.953125 C 64.960938 224.953125 64.960938 224.953125 64.960938 224.941406 C 65.453125 224.414062 65.417969 223.75 65.382812 223.023438 C 65.074219 222.839844 64.777344 222.667969 64.433594 222.460938 C 64.457031 222.117188 64.492188 221.75 64.503906 221.394531 C 64.515625 221.199219 64.5625 220.957031 64.46875 220.820312 C 64.046875 220.1875 64.195312 219.660156 64.652344 219.15625 C 64.652344 219.144531 64.664062 219.144531 64.664062 219.132812 C 64.664062 219.132812 64.664062 219.121094 64.675781 219.121094 L 64.652344 219.144531 C 64.378906 219.0625 64.296875 218.820312 64.433594 218.648438 C 64.835938 218.097656 65.304688 217.582031 65.773438 217.007812 C 66.070312 216.132812 65.5 215.261719 65.578125 214.367188 C 65.671875 213.457031 65.84375 212.550781 65.648438 211.644531 C 65.523438 211.023438 65.292969 210.425781 65.074219 209.691406 C 65.910156 208.40625 65.453125 206.902344 65.28125 205.429688 C 65.222656 204.914062 64.996094 204.410156 64.882812 203.878906 C 64.777344 203.46875 64.699219 203.042969 64.6875 202.628906 C 64.6875 202.285156 64.582031 202.019531 64.402344 201.746094 C 64.261719 201.539062 64.242188 201.261719 64.207031 201.007812 C 64.101562 200.171875 64.046875 199.320312 63.921875 198.496094 C 63.792969 197.75 63.75 197.023438 63.929688 196.265625 C 64.195312 195.105469 64.332031 193.945312 63.644531 192.84375 C 63.542969 192.671875 63.460938 192.429688 63.484375 192.222656 C 63.609375 190.59375 63.324219 188.941406 63.738281 187.320312 C 63.75 187.296875 63.828125 187.296875 63.976562 187.25 C 64.023438 187.722656 64.082031 188.183594 64.113281 188.640625 C 64.207031 190.066406 64.433594 191.441406 64.890625 192.765625 C 65.625 234.84375 87.175781 271.820312 119.6875 293.734375 C 119.6875 293.734375 119.675781 293.734375 119.675781 293.734375 C 119.472656 293.824219 119.140625 293.746094 118.910156 293.640625 Z M 64.789062 224.082031 C 65.234375 224.460938 65.074219 224.703125 64.960938 224.941406 C 64.914062 224.714844 64.871094 224.496094 64.789062 224.082031 Z M 74.902344 127.832031 C 75.015625 127.660156 75.210938 127.511719 75.257812 127.316406 C 75.542969 126.039062 76.207031 124.9375 76.8125 123.800781 C 77.007812 123.421875 77.257812 123.054688 77.375 122.652344 C 77.695312 121.515625 78.355469 120.539062 78.871094 119.480469 C 79.476562 118.230469 80.128906 117.011719 80.863281 115.832031 C 81.789062 114.335938 82.703125 112.832031 83.621094 111.328125 C 83.734375 111.144531 83.8125 110.9375 83.894531 110.742188 C 84.410156 109.503906 85.105469 108.367188 85.882812 107.273438 C 86.664062 106.195312 87.394531 105.082031 88.113281 103.957031 C 89.269531 102.128906 90.6875 100.566406 92.359375 99.1875 C 94.910156 97.085938 97.414062 94.917969 99.945312 92.792969 C 100.882812 92 101.808594 91.195312 102.917969 90.65625 C 103.113281 90.554688 103.320312 90.460938 103.457031 90.3125 C 104.132812 89.601562 104.964844 89.140625 105.777344 88.636719 C 107.390625 87.601562 108.992188 86.546875 110.605469 85.5 C 111.121094 85.167969 111.648438 84.835938 112.160156 84.5 C 112.09375 84.671875 112.058594 84.890625 111.933594 84.984375 C 110.652344 86.027344 109.335938 87.027344 108.042969 88.0625 C 107.710938 88.324219 107.390625 88.625 107.117188 88.945312 C 106.363281 89.828125 105.605469 90.703125 104.644531 91.402344 C 103.445312 92.289062 102.359375 93.332031 101.257812 94.355469 C 99.007812 96.492188 96.71875 98.613281 94.773438 101.039062 C 93.742188 102.335938 92.609375 103.519531 91.445312 104.691406 C 91.328125 104.804688 91.238281 104.929688 91.136719 105.058594 C 90.207031 106.296875 89.257812 107.515625 88.34375 108.765625 C 86.824219 110.835938 85.324219 112.914062 83.8125 114.992188 C 83.621094 115.257812 83.414062 115.507812 83.253906 115.773438 C 81.972656 117.875 80.621094 119.917969 79.226562 121.929688 C 78.824219 122.492188 78.527344 123.121094 78.164062 123.71875 C 77.363281 124.984375 76.550781 126.234375 75.738281 127.5 C 75.554688 127.796875 75.269531 127.910156 74.914062 127.832031 C 74.925781 128.050781 74.9375 128.269531 74.960938 128.484375 C 74.9375 128.484375 74.925781 128.484375 74.902344 128.484375 C 74.902344 128.269531 74.902344 128.050781 74.902344 127.832031 Z M 114.050781 83.089844 C 114.117188 83.054688 114.3125 83.101562 114.324219 83.15625 C 114.359375 83.285156 114.390625 83.492188 114.3125 83.558594 C 113.980469 83.871094 113.601562 84.144531 113.238281 84.433594 C 113.042969 83.695312 113.488281 83.351562 114.050781 83.089844 Z M 115.183594 87.039062 C 116.382812 86.167969 117.585938 85.28125 118.820312 84.433594 C 119.644531 83.859375 120.511719 83.328125 121.382812 82.800781 C 123.109375 81.746094 124.835938 80.6875 126.574219 79.644531 C 126.988281 79.390625 127.421875 79.171875 127.835938 78.929688 C 128.554688 78.496094 129.285156 78.035156 130.007812 77.597656 C 130.375 77.371094 130.726562 77.140625 131.105469 76.933594 C 133.589844 75.578125 136.003906 74.085938 138.738281 73.246094 C 140.007812 72.40625 141.480469 72.074219 142.867188 71.535156 C 144.421875 70.9375 146.035156 70.582031 147.707031 70.5 C 148.335938 70.46875 148.964844 70.316406 149.59375 70.214844 C 150.015625 70.144531 150.4375 70.054688 150.863281 69.984375 C 151.640625 69.859375 152.429688 69.742188 153.21875 69.605469 C 153.621094 69.546875 154.03125 69.320312 154.535156 69.765625 C 152.359375 70.582031 150.335938 71.421875 148.265625 72.074219 C 146.746094 72.558594 145.152344 72.832031 143.585938 73.121094 C 142.535156 73.316406 141.460938 73.339844 140.40625 73.5 C 139.160156 73.683594 138.175781 74.464844 137.167969 75.152344 C 136.996094 75.265625 136.871094 75.453125 136.734375 75.625 C 136.277344 76.210938 135.671875 76.519531 134.949219 76.519531 C 134.320312 76.519531 133.816406 76.726562 133.347656 77.128906 C 132.765625 77.621094 132.066406 77.910156 131.324219 78.046875 C 130.683594 78.183594 130.121094 78.460938 129.605469 78.875 C 128.773438 79.527344 127.925781 80.171875 127.089844 80.816406 C 126.964844 80.917969 126.816406 81 126.679688 81.054688 C 125.292969 81.5625 124.140625 82.433594 122.960938 83.261719 C 122.160156 83.8125 121.417969 84.398438 120.445312 84.617188 C 120.089844 84.695312 119.78125 84.960938 119.472656 85.179688 C 118.566406 85.832031 117.6875 86.535156 116.773438 87.1875 C 115.503906 88.085938 114.253906 89.015625 112.949219 89.828125 C 111.304688 90.863281 109.714844 91.941406 108.464844 93.449219 C 108.03125 93.976562 107.425781 94.207031 106.863281 94.480469 C 106.234375 94.800781 105.699219 95.179688 105.207031 95.710938 C 104.382812 96.617188 103.421875 97.386719 102.699219 98.410156 C 102.496094 98.695312 102.164062 98.925781 101.84375 99.109375 C 101.089844 99.546875 100.480469 100.132812 100.011719 100.867188 C 99.886719 101.050781 99.785156 101.234375 99.636719 101.382812 C 98.273438 102.738281 96.914062 104.09375 95.550781 105.425781 C 95.449219 105.527344 95.300781 105.550781 95.070312 105.65625 C 95.128906 105.414062 95.117188 105.230469 95.195312 105.136719 C 95.800781 104.472656 96.421875 103.804688 97.050781 103.164062 C 97.792969 102.394531 98.546875 101.636719 99.292969 100.867188 C 100.628906 99.488281 101.867188 98.019531 103.332031 96.753906 C 104.460938 95.777344 105.515625 94.710938 106.601562 93.6875 C 107.835938 92.515625 109.152344 91.460938 110.617188 90.554688 C 111.875 89.773438 112.972656 88.726562 114.152344 87.796875 C 114.484375 87.53125 114.839844 87.292969 115.183594 87.039062 Z M 93.710938 106.964844 C 93.902344 106.6875 94.132812 106.449219 94.394531 106.136719 C 94.75 106.675781 94.488281 107.035156 94.269531 107.34375 C 94.167969 107.492188 93.9375 107.585938 93.753906 107.609375 C 93.582031 107.640625 93.527344 107.238281 93.710938 106.964844 Z M 328.101562 180.359375 C 327.574219 180.464844 327.4375 179.625 326.933594 180.234375 C 326.796875 179.511719 326.808594 178.765625 326.53125 178.15625 C 326.109375 177.25 326.019531 176.308594 325.914062 175.34375 C 325.824219 174.480469 325.675781 173.632812 325.160156 172.917969 C 324.746094 172.355469 324.679688 171.746094 324.65625 171.09375 C 324.621094 170.347656 324.53125 169.601562 324.394531 168.863281 C 324.277344 168.289062 324.050781 167.738281 323.914062 167.164062 C 323.671875 166.1875 323.375 165.234375 322.847656 164.351562 C 322.597656 163.914062 322.484375 163.316406 322.515625 162.800781 C 322.5625 162.148438 322.335938 161.652344 321.980469 161.171875 C 321.726562 160.835938 321.476562 160.480469 321.214844 160.136719 C 320.882812 159.699219 320.664062 159.230469 320.800781 158.65625 C 320.996094 157.851562 320.421875 157.082031 320.675781 156.277344 C 320.710938 156.152344 320.628906 155.933594 320.527344 155.820312 C 319.714844 154.945312 319.429688 153.902344 319.53125 152.730469 C 319.542969 152.625 319.496094 152.511719 319.453125 152.417969 C 318.9375 151.363281 318.890625 150.25 319.015625 149.113281 C 319.039062 148.847656 318.972656 148.582031 318.949219 148.320312 C 318.832031 146.976562 318.5 145.679688 318.320312 144.355469 C 318.078125 142.703125 317.378906 141.3125 316.636719 139.890625 C 316.410156 139.464844 316.179688 139.039062 315.996094 138.605469 C 315.171875 136.730469 314.15625 134.984375 313.386719 133.089844 C 312.746094 131.507812 311.921875 130.011719 311.316406 128.40625 C 310.367188 125.902344 309.417969 123.398438 308.125 121.042969 C 307.519531 119.917969 306.902344 118.792969 306.261719 117.679688 C 305.894531 117.023438 305.484375 116.40625 305.117188 115.75 C 304.875 115.335938 304.707031 114.886719 304.464844 114.464844 C 304.03125 113.671875 303.527344 112.914062 303.125 112.097656 C 302.507812 110.878906 301.707031 109.847656 300.710938 108.917969 C 299.238281 107.527344 297.75 106.148438 296.457031 104.5625 C 295.839844 103.828125 295.1875 103.105469 294.457031 102.484375 C 292.785156 101.074219 291.273438 99.511719 289.605469 98.097656 C 288.632812 97.28125 287.878906 96.191406 286.652344 95.675781 C 285.648438 94.550781 284.410156 93.710938 283.277344 92.746094 C 282.019531 91.667969 280.832031 90.542969 279.421875 89.644531 C 279.207031 89.507812 279.082031 89.242188 278.886719 89.070312 C 278.382812 88.601562 277.867188 88.140625 277.328125 87.707031 C 276.539062 87.0625 275.738281 86.441406 274.9375 85.808594 C 274.640625 85.582031 274.355469 85.339844 274.046875 85.144531 C 272.421875 84.109375 271.0625 82.6875 269.300781 81.859375 C 268.566406 80.882812 267.273438 80.675781 266.472656 79.78125 C 266.277344 79.550781 265.925781 79.460938 265.636719 79.320312 C 265.167969 79.082031 264.675781 78.851562 264.207031 78.609375 C 262.972656 77.964844 261.761719 77.300781 260.523438 76.65625 C 259.289062 76.027344 257.949219 75.625 256.808594 74.808594 C 256.648438 74.683594 256.429688 74.566406 256.222656 74.554688 C 255.375 74.5 254.757812 73.957031 254.0625 73.578125 C 252.609375 72.785156 251.167969 71.972656 249.75 71.121094 C 247.550781 69.789062 245.332031 68.503906 242.988281 67.46875 C 241.671875 66.894531 240.277344 66.492188 238.914062 66.046875 C 238.011719 65.746094 237.074219 65.527344 236.167969 65.207031 C 234.351562 64.585938 232.566406 63.875 230.734375 63.300781 C 228.242188 62.519531 225.746094 61.703125 223.207031 61.140625 C 220.816406 60.613281 218.367188 60.359375 215.933594 60.027344 C 214.9375 59.902344 213.90625 59.867188 212.902344 59.820312 C 212.421875 59.796875 211.929688 59.808594 211.472656 59.902344 C 210.636719 60.085938 210.519531 60.316406 210.476562 61.464844 C 210.980469 61.898438 211.585938 62.050781 212.25 61.957031 C 212.957031 61.867188 213.597656 62.015625 214.25 62.324219 C 214.878906 62.625 215.566406 62.898438 216.230469 62.921875 C 217.167969 62.96875 218.015625 63.210938 218.894531 63.4375 C 220.644531 63.898438 222.40625 64.378906 224.179688 64.738281 C 226.949219 65.3125 229.671875 66.058594 232.382812 66.816406 C 233.765625 67.207031 235.082031 67.847656 236.476562 68.160156 C 237.886719 68.480469 239.210938 68.972656 240.515625 69.570312 C 240.757812 69.6875 241.03125 69.71875 241.28125 69.800781 C 241.832031 69.996094 242.425781 70.121094 242.929688 70.410156 C 243.914062 70.972656 244.976562 71.328125 246.03125 71.695312 C 246.179688 71.753906 246.351562 71.777344 246.488281 71.855469 C 248.214844 72.820312 250.089844 73.417969 251.992188 73.957031 C 252.140625 73.992188 252.3125 74.050781 252.402344 74.164062 C 253.042969 74.945312 253.957031 75.300781 254.828125 75.691406 C 256.1875 76.289062 257.253906 77.484375 258.820312 77.65625 C 258.945312 77.667969 259.09375 77.828125 259.199219 77.945312 C 260 78.90625 261.140625 79.4375 262.136719 80.113281 C 263.863281 81.285156 265.660156 82.34375 267.320312 83.605469 C 268.667969 84.640625 270.167969 85.464844 271.449219 86.613281 C 272.523438 87.578125 273.726562 88.394531 274.8125 89.335938 C 275.910156 90.277344 276.929688 91.289062 277.980469 92.265625 C 278.335938 92.585938 278.769531 92.851562 278.679688 93.527344 C 278.28125 93.539062 277.890625 93.609375 277.523438 93.261719 C 277.089844 92.875 276.609375 92.527344 276.175781 92.125 C 274.390625 90.507812 272.261719 89.347656 270.304688 87.957031 C 269.527344 87.40625 268.820312 86.742188 267.859375 86.464844 C 267.527344 86.371094 267.226562 86.074219 266.941406 85.832031 C 265.914062 84.984375 264.824219 84.238281 263.613281 83.664062 C 262.664062 83.203125 261.816406 82.503906 260.753906 82.25 C 259.324219 81.195312 257.722656 80.503906 256.039062 79.917969 C 254.839844 79.503906 253.683594 78.941406 252.515625 78.402344 C 251.257812 77.828125 250.035156 77.175781 248.777344 76.601562 C 248.296875 76.394531 247.757812 76.222656 247.242188 76.199219 C 246.578125 76.175781 246.019531 76.09375 245.503906 75.578125 C 245.171875 75.265625 244.679688 75.003906 244.234375 74.933594 C 242.484375 74.683594 240.949219 73.625 239.144531 73.589844 C 239.039062 73.589844 238.9375 73.535156 238.847656 73.488281 C 236.992188 72.671875 235.140625 71.832031 233.273438 71.019531 C 232.347656 70.605469 231.398438 70.328125 230.378906 70.167969 C 229.363281 70.007812 228.308594 69.824219 227.429688 69.125 C 226.949219 68.746094 226.273438 68.570312 225.667969 68.410156 C 224.285156 68.019531 222.84375 67.894531 221.433594 67.515625 C 220.109375 67.160156 218.710938 67.035156 217.351562 66.769531 C 216.253906 66.550781 215.132812 66.367188 214.078125 65.988281 C 213.324219 65.710938 212.570312 65.496094 211.792969 65.300781 C 211.320312 65.183594 210.832031 65.125 210.394531 64.953125 C 208.679688 64.289062 206.894531 64.035156 205.085938 63.828125 C 204.355469 63.75 203.621094 63.589844 202.914062 63.371094 C 201.378906 62.898438 199.871094 62.40625 198.257812 62.359375 C 197.183594 62.324219 196.128906 62.253906 195.089844 61.921875 C 194.539062 61.738281 193.933594 61.738281 193.363281 61.636719 C 192.570312 61.496094 191.792969 61.347656 191.015625 61.1875 C 190.9375 61.175781 190.878906 61.050781 190.742188 60.902344 C 190.867188 60.761719 190.980469 60.554688 191.128906 60.511719 C 191.589844 60.359375 192.058594 60.234375 192.527344 60.1875 C 193.269531 60.109375 194.023438 59.980469 194.746094 60.074219 C 195.558594 60.175781 196.335938 60.175781 197.148438 60.109375 C 197.984375 60.027344 198.808594 59.980469 199.652344 60.292969 C 200.226562 60.511719 200.898438 60.453125 201.53125 60.5 C 201.851562 60.523438 202.179688 60.464844 202.480469 60.53125 C 203.472656 60.726562 204.445312 60.992188 205.429688 61.175781 C 206.164062 61.300781 206.917969 61.382812 207.660156 61.382812 C 208.0625 61.382812 208.496094 61.210938 208.875 61.039062 C 209.378906 60.796875 209.457031 60.257812 209.089844 59.832031 C 208.667969 59.328125 208.117188 59.015625 207.523438 58.742188 C 207.15625 58.558594 206.667969 58.304688 206.550781 57.972656 C 206.242188 57.078125 205.613281 56.902344 204.765625 56.882812 C 204.414062 57.132812 204.035156 57.398438 203.691406 57.652344 C 202.992188 57.339844 202.707031 56.753906 202.351562 56.226562 C 201.746094 56.617188 201.175781 56.984375 200.648438 57.316406 C 199.148438 56.847656 199.148438 56.847656 198.453125 55.710938 C 198.015625 56.101562 197.59375 56.480469 197.089844 56.914062 C 196.519531 56.582031 196.015625 56.132812 195.433594 55.972656 C 194.835938 55.8125 194.171875 55.9375 193.578125 55.9375 C 193.363281 56.238281 193.179688 56.480469 192.9375 56.800781 C 192.023438 55.835938 190.960938 55.320312 189.734375 55.203125 C 188.601562 56.753906 188.957031 56.410156 187.230469 57.042969 C 186.476562 57.304688 185.71875 57.582031 184.976562 57.878906 C 184.082031 58.234375 183.203125 58.625 182.195312 58.269531 C 182 58.203125 181.773438 58.226562 181.554688 58.234375 C 179.371094 58.304688 177.21875 58.84375 175.023438 58.777344 C 174.921875 58.765625 174.816406 58.789062 174.703125 58.820312 C 172.863281 59.351562 170.941406 59.511719 169.074219 59.902344 C 166.582031 60.429688 163.996094 60.636719 161.671875 61.84375 C 161.445312 61.957031 161.148438 61.96875 160.882812 61.945312 C 160.058594 61.855469 159.28125 62.0625 158.527344 62.3125 C 156.753906 62.898438 155.003906 63.554688 153.195312 64.023438 C 152.839844 64.117188 152.5 64.300781 152.179688 64.496094 C 151.34375 65 150.4375 65.300781 149.5 65.527344 C 147.957031 65.917969 146.367188 66.242188 145.027344 67.195312 C 144.902344 67.273438 144.730469 67.320312 144.582031 67.332031 C 143.039062 67.34375 141.675781 67.894531 140.347656 68.617188 C 139.925781 68.847656 139.46875 69.007812 139.035156 69.214844 C 138.609375 69.433594 138.164062 69.640625 137.785156 69.914062 C 136.664062 70.742188 135.441406 71.097656 134.035156 71.007812 C 132.914062 70.925781 131.792969 71.042969 130.808594 71.71875 C 130.589844 71.855469 130.316406 71.890625 130.066406 71.996094 C 128.085938 72.808594 125.992188 73.292969 124.117188 74.371094 C 123.886719 74.5 123.613281 74.554688 123.359375 74.636719 C 121.726562 75.152344 120.226562 75.957031 118.738281 76.796875 C 117.296875 77.609375 115.832031 78.378906 114.371094 79.136719 C 113.144531 79.792969 111.898438 80.390625 110.6875 81.042969 C 109.597656 81.617188 108.59375 82.34375 107.472656 82.847656 C 106.542969 83.273438 105.628906 83.6875 104.921875 84.445312 C 104.773438 84.59375 104.554688 84.648438 104.371094 84.753906 C 103.992188 84.960938 103.617188 85.132812 103.273438 85.375 C 102.390625 85.992188 101.546875 86.636719 100.675781 87.257812 C 100.46875 87.40625 100.253906 87.601562 99.886719 87.359375 C 100.128906 87.015625 100.320312 86.636719 100.609375 86.351562 C 102.128906 84.777344 103.71875 83.285156 105.195312 81.664062 C 105.984375 80.792969 107.003906 80.183594 107.769531 79.285156 C 108.144531 78.839844 108.59375 78.449219 109.027344 78.058594 C 110.824219 76.460938 112.628906 74.878906 114.597656 73.488281 C 115.855469 72.589844 117.035156 71.582031 118.304688 70.707031 C 120.25 69.386719 122.238281 68.125 124.21875 66.871094 C 126.347656 65.539062 128.507812 64.253906 130.636719 62.933594 C 131.175781 62.601562 131.65625 62.152344 132.203125 61.84375 C 133.738281 60.992188 135.28125 60.164062 136.835938 59.351562 C 139.71875 57.847656 142.613281 56.351562 145.625 55.089844 C 147.203125 54.421875 148.792969 53.804688 150.394531 53.21875 C 150.898438 53.035156 151.410156 52.515625 152.039062 52.964844 C 152.085938 53 152.28125 52.917969 152.304688 52.863281 C 152.519531 52.308594 153.046875 52.289062 153.480469 52.148438 C 156.445312 51.242188 159.386719 50.253906 162.371094 49.460938 C 165.621094 48.589844 168.902344 47.855469 172.210938 47.292969 C 175.21875 46.773438 178.191406 46.1875 181.222656 45.867188 C 184.839844 45.488281 188.417969 44.835938 192.046875 44.59375 C 192.308594 44.570312 192.59375 44.570312 192.835938 44.464844 C 193.453125 44.191406 194.082031 44.238281 194.722656 44.25 C 195.304688 44.261719 195.902344 44.28125 196.484375 44.226562 C 198.292969 44.066406 200.097656 44.179688 201.90625 44.214844 C 203.78125 44.238281 205.648438 44.269531 207.523438 44.28125 C 207.992188 44.28125 208.472656 44.191406 208.941406 44.074219 C 209.273438 43.996094 209.433594 43.6875 209.457031 43.328125 C 209.46875 42.972656 209.296875 42.722656 208.953125 42.605469 C 208.597656 42.480469 208.234375 42.308594 207.878906 42.308594 C 206.644531 42.296875 205.429688 42.179688 204.261719 41.757812 C 204.171875 41.722656 204.046875 41.746094 203.941406 41.746094 C 202.410156 41.882812 200.878906 42.019531 199.148438 42.167969 C 198.1875 41.503906 196.894531 41.285156 195.535156 41.214844 C 194.746094 41.183594 193.957031 41 193.167969 40.882812 C 192.847656 40.835938 192.527344 40.78125 192.21875 40.816406 C 191.472656 40.882812 190.742188 40.804688 190 40.769531 C 187.277344 40.652344 184.554688 40.503906 181.832031 40.894531 C 181.304688 40.976562 180.765625 41.007812 180.230469 41 C 178.019531 40.941406 175.871094 41.378906 173.71875 41.746094 C 171.191406 42.179688 168.742188 43.007812 166.203125 43.339844 C 165.984375 43.363281 165.792969 43.457031 165.585938 43.511719 C 164.761719 43.753906 163.9375 43.984375 163.125 44.214844 C 161.640625 44.648438 160.128906 45.019531 158.664062 45.535156 C 156.664062 46.246094 154.761719 47.246094 152.691406 47.796875 C 152.5 47.855469 152.28125 47.933594 152.121094 48.074219 C 151.480469 48.601562 150.65625 48.691406 149.925781 49.003906 C 149.179688 49.300781 148.414062 49.542969 147.695312 49.863281 C 145.109375 51.023438 142.546875 52.207031 139.972656 53.378906 C 137.980469 54.285156 135.945312 55.078125 134.035156 56.125 C 132.488281 56.960938 131.003906 57.902344 129.425781 58.683594 C 129 58.890625 128.519531 58.996094 128.144531 59.269531 C 127.023438 60.085938 125.914062 60.933594 124.597656 61.417969 C 124.402344 61.496094 124.242188 61.671875 124.070312 61.796875 C 123.179688 62.460938 122.273438 63.128906 121.371094 63.804688 C 120.867188 64.195312 120.351562 64.585938 119.871094 65 C 118.40625 66.253906 116.910156 67.46875 115.503906 68.777344 C 114.347656 69.859375 112.984375 70.742188 112.082031 72.097656 C 111.933594 72.304688 111.667969 72.441406 111.464844 72.601562 C 111.074219 72.890625 110.675781 73.15625 110.320312 73.488281 C 108.625 75.039062 106.75 76.371094 105.148438 78.035156 C 104.300781 78.917969 103.25 79.597656 102.414062 80.503906 C 101.601562 81.398438 100.617188 82.148438 100.023438 83.238281 C 99.945312 83.375 99.785156 83.457031 99.667969 83.558594 C 99.132812 84.085938 98.59375 84.605469 98.054688 85.121094 C 96.914062 86.246094 95.847656 87.441406 94.785156 88.648438 C 93.503906 90.082031 92.085938 91.390625 90.722656 92.757812 C 90.425781 93.066406 90.140625 93.390625 89.886719 93.734375 C 88.996094 94.929688 88.125 96.144531 87.28125 97.386719 C 86.160156 99.003906 85.070312 100.695312 83.574219 102.027344 C 81.503906 103.875 79.890625 106.160156 77.945312 108.136719 C 76.628906 109.457031 75.507812 110.972656 74.308594 112.40625 C 74.171875 112.570312 74.042969 112.742188 73.917969 112.925781 C 73.199219 113.96875 72.417969 114.980469 71.757812 116.082031 C 70.496094 118.195312 69.054688 120.195312 67.695312 122.25 C 67.15625 123.042969 66.644531 123.859375 66.117188 124.671875 C 64.515625 127.199219 62.617188 129.542969 61.367188 132.296875 C 61.21875 132.632812 60.910156 132.882812 60.714844 133.207031 C 59.871094 134.5625 58.875 135.800781 58.371094 137.375 C 57.800781 139.15625 57.066406 140.890625 56.289062 142.589844 C 55.523438 144.253906 54.769531 145.894531 54.195312 147.640625 C 53.667969 149.261719 53.0625 150.867188 52.527344 152.5 C 52.183594 153.511719 51.691406 154.476562 51.621094 155.578125 C 51.609375 155.832031 51.4375 156.070312 51.347656 156.324219 C 51.140625 156.875 50.890625 157.414062 50.742188 157.976562 C 50.191406 160.207031 49.550781 162.421875 49.09375 164.683594 C 48.671875 166.730469 48.351562 168.785156 48.042969 170.851562 C 47.6875 173.125 47.480469 175.421875 47.113281 177.695312 C 46.65625 180.554688 46.382812 183.4375 46.460938 186.355469 C 46.484375 187.585938 46.382812 188.8125 46.3125 190.042969 C 46.175781 192.558594 45.9375 195.074219 45.925781 197.585938 C 45.914062 198.976562 45.800781 200.367188 45.800781 201.746094 C 45.800781 204.433594 45.878906 207.121094 46.164062 209.785156 C 46.566406 213.480469 47.445312 217.078125 48.453125 220.636719 C 48.511719 220.808594 48.695312 220.957031 48.886719 221.199219 C 49.164062 220.53125 49.34375 220.015625 49.09375 219.394531 C 48.945312 219.003906 48.945312 218.546875 48.785156 218.167969 C 48.382812 217.203125 48.488281 216.296875 48.863281 215.363281 C 49.242188 214.378906 49.277344 213.285156 48.820312 212.378906 C 48.417969 211.597656 48.363281 210.910156 48.5 210.082031 C 48.636719 209.253906 48.636719 208.441406 48.269531 207.578125 C 47.984375 206.890625 48.132812 206.015625 48.085938 205.222656 C 48.042969 204.433594 48.191406 203.546875 47.902344 202.859375 C 47.605469 202.148438 47.675781 201.5625 47.734375 200.882812 C 47.800781 199.988281 47.949219 199.023438 47.699219 198.195312 C 47.171875 196.40625 47.492188 194.578125 47.207031 192.796875 C 47.195312 192.695312 47.21875 192.582031 47.242188 192.476562 C 47.628906 190.949219 47.433594 189.386719 47.445312 187.835938 C 47.457031 185.953125 47.378906 184.082031 47.996094 182.265625 C 48.074219 182.027344 48.121094 181.75 48.132812 181.484375 C 48.214844 179.648438 48.738281 177.902344 49.070312 176.113281 C 49.335938 174.6875 49.539062 173.261719 49.769531 171.828125 C 49.816406 171.5625 49.835938 171.300781 49.90625 171.035156 C 50.203125 169.957031 50.5 168.875 50.820312 167.808594 C 51.359375 166.015625 51.917969 164.226562 52.457031 162.433594 C 52.699219 161.664062 52.890625 160.894531 53.109375 160.113281 C 53.488281 158.722656 54.183594 157.425781 54.265625 155.945312 C 54.289062 155.691406 54.402344 155.429688 54.527344 155.1875 C 55.71875 152.785156 56.359375 150.15625 57.558594 147.746094 C 58.121094 146.632812 58.292969 145.332031 59.011719 144.242188 C 59.617188 143.300781 60.042969 142.246094 60.523438 141.234375 C 61.140625 139.925781 62.042969 138.765625 62.523438 137.386719 C 63.027344 135.917969 63.621094 134.480469 64.433594 133.148438 C 64.9375 132.332031 65.339844 131.449219 65.851562 130.644531 C 66.882812 129.070312 67.945312 127.519531 69.011719 125.984375 C 70.132812 124.339844 71.230469 122.699219 72.417969 121.113281 C 72.898438 120.46875 73.359375 119.828125 73.816406 119.160156 C 74.433594 118.242188 75.1875 117.390625 75.921875 116.542969 C 76.035156 116.40625 76.308594 116.394531 76.503906 116.324219 C 76.515625 116.300781 76.515625 116.289062 76.515625 116.277344 C 76.527344 116.277344 76.539062 116.289062 76.550781 116.289062 C 76.242188 116.839844 75.910156 117.371094 75.632812 117.933594 C 75.40625 118.414062 75.28125 118.953125 75.039062 119.425781 C 73.90625 121.6875 72.910156 123.996094 72.238281 126.429688 C 72.15625 126.683594 72.066406 126.945312 71.9375 127.175781 C 71.082031 128.679688 70.625 130.335938 70.222656 132 C 70.132812 132.367188 70.027344 132.722656 69.902344 133.078125 C 69.675781 133.792969 69.421875 134.492188 69.207031 135.203125 C 68.875 136.285156 68.566406 137.375 68.253906 138.453125 C 67.742188 140.316406 67.179688 142.152344 66.722656 144.023438 C 66.117188 146.46875 65.566406 148.929688 65.042969 151.386719 C 64.777344 152.582031 64.617188 153.796875 64.433594 155.015625 C 64.207031 156.4375 64.023438 157.875 63.769531 159.285156 C 63.496094 160.769531 63.121094 162.226562 62.867188 163.695312 C 62.730469 164.476562 62.410156 165.246094 62.59375 166.074219 C 62.648438 166.316406 62.558594 166.613281 62.480469 166.867188 C 61.78125 168.957031 61.355469 171.09375 61.152344 173.296875 C 61.027344 174.734375 60.855469 176.203125 60.375 177.546875 C 59.789062 179.132812 59.585938 180.761719 59.414062 182.40625 C 59.082031 185.539062 58.988281 188.722656 58.542969 191.84375 C 58.222656 194.085938 58.554688 196.359375 57.992188 198.5625 C 57.9375 198.769531 58.039062 199 58.027344 199.207031 C 57.992188 201.03125 58.0625 202.871094 57.855469 204.671875 C 57.652344 206.566406 57.640625 208.453125 57.992188 210.277344 C 58.382812 212.34375 58.085938 214.46875 58.75 216.480469 C 58.726562 218.71875 59.675781 220.761719 59.960938 222.933594 C 59.984375 223.140625 60.121094 223.335938 60.203125 223.53125 C 60.808594 225.136719 61.265625 226.78125 61.496094 228.480469 C 61.632812 229.433594 61.78125 230.386719 61.941406 231.339844 C 62.25 233.074219 62.570312 234.808594 62.914062 236.542969 C 63.050781 237.277344 63.175781 238.011719 63.40625 238.722656 C 63.726562 239.675781 64.160156 240.609375 64.503906 241.5625 C 64.730469 242.148438 64.800781 242.800781 65.222656 243.304688 C 65.246094 244.890625 65.875 246.328125 66.402344 247.773438 C 66.996094 249.425781 67.582031 251.105469 68.472656 252.644531 C 68.792969 253.195312 68.988281 253.828125 69.226562 254.410156 C 69.789062 255.800781 70.316406 257.203125 70.921875 258.558594 C 71.871094 260.648438 72.992188 262.667969 73.851562 264.804688 C 74.019531 265.253906 74.273438 265.667969 74.523438 266.078125 C 75.773438 268.203125 77.097656 270.285156 78.253906 272.453125 C 79.042969 273.933594 80.027344 275.257812 81.023438 276.578125 C 82.222656 278.148438 83.675781 279.515625 84.582031 281.308594 C 84.730469 281.59375 84.910156 281.882812 85.152344 282.089844 C 86.113281 282.894531 86.671875 283.996094 87.359375 285.007812 C 87.578125 285.316406 87.761719 285.660156 87.886719 286.003906 C 88.082031 286.554688 87.933594 287.074219 87.566406 287.511719 C 87.234375 287.878906 86.628906 287.898438 86.078125 287.613281 C 85.882812 287.511719 85.667969 287.417969 85.542969 287.257812 C 84.84375 286.339844 83.6875 285.820312 83.289062 284.605469 C 83.171875 284.238281 82.75 283.972656 82.464844 283.652344 C 81.527344 282.640625 80.585938 281.664062 79.914062 280.414062 C 79.273438 279.195312 78.390625 278.082031 77.007812 277.542969 C 76.550781 277.367188 76.148438 277.140625 75.875 276.691406 C 75.792969 276.542969 75.566406 276.472656 75.347656 276.335938 C 75.246094 276.851562 75.246094 277.300781 75.0625 277.65625 C 74.777344 278.195312 74.820312 278.691406 75.0625 279.195312 C 75.3125 279.722656 75.542969 280.285156 75.898438 280.746094 C 76.675781 281.757812 77.488281 282.753906 78.355469 283.707031 C 79.25 284.695312 80.3125 285.535156 81.160156 286.578125 C 82.234375 287.921875 83.503906 289.058594 84.742188 290.230469 C 86.695312 292.058594 88.605469 293.929688 90.722656 295.582031 C 91.570312 296.25 92.382812 296.925781 93.367188 297.386719 C 93.789062 297.582031 94.199219 297.789062 94.488281 298.234375 C 94.671875 298.535156 95.070312 298.695312 95.355469 298.9375 C 96.132812 299.589844 96.933594 300.210938 97.65625 300.910156 C 98.6875 301.933594 99.636719 303.023438 100.628906 304.070312 C 100.847656 304.300781 101.066406 304.574219 101.339844 304.726562 C 102.496094 305.355469 103.285156 306.402344 104.132812 307.34375 C 105.082031 308.375 106.097656 309.296875 107.207031 310.144531 C 108.136719 310.878906 109.105469 311.511719 110.125 312.109375 C 111.316406 312.796875 112.320312 313.785156 113.429688 314.613281 C 114.027344 315.0625 114.667969 315.453125 115.296875 315.839844 C 116.210938 316.394531 117.195312 316.851562 118.042969 317.496094 C 119.449219 318.574219 120.84375 319.644531 122.558594 320.195312 C 122.753906 320.25 122.9375 320.390625 123.132812 320.46875 C 125.890625 321.605469 128.496094 323.078125 131.359375 324.019531 C 132.914062 324.535156 134.480469 325.085938 135.945312 325.855469 C 136.277344 326.027344 136.65625 326.074219 137.019531 326.175781 C 137.683594 326.351562 138.371094 326.5 139.023438 326.707031 C 139.730469 326.933594 140.417969 327.246094 141.128906 327.476562 C 144.308594 328.507812 147.601562 328.796875 150.910156 329.058594 C 152.351562 329.164062 153.78125 329.347656 155.1875 329.621094 C 157.027344 329.992188 158.859375 330.359375 160.6875 330.738281 C 161.683594 330.945312 162.667969 331.183594 163.652344 331.414062 C 164.796875 331.679688 165.929688 331.976562 167.085938 332.207031 C 168.273438 332.4375 169.519531 332.355469 170.6875 332.769531 C 170.929688 332.851562 171.226562 332.78125 171.488281 332.792969 C 171.867188 332.804688 172.253906 332.746094 172.609375 332.851562 C 173.46875 333.089844 174.292969 332.964844 175.125 332.644531 C 176.304688 333.414062 177.609375 333.160156 178.878906 333.089844 C 179.417969 333.066406 179.898438 333.046875 180.421875 333.25 C 181.121094 333.503906 181.886719 333.664062 182.621094 333.652344 C 183.59375 333.632812 184.507812 333.816406 185.445312 333.976562 C 185.707031 334.019531 186.003906 334.148438 186.222656 334.078125 C 186.828125 333.871094 187.378906 334.078125 187.949219 334.160156 C 188.84375 334.296875 189.746094 334.410156 190.660156 334.46875 C 192.207031 334.5625 193.761719 334.628906 195.304688 334.628906 C 196.425781 334.640625 197.582031 334.6875 198.648438 334.421875 C 199.710938 334.171875 200.761719 334.113281 201.828125 334.089844 C 203.199219 334.066406 204.539062 333.597656 205.933594 333.757812 C 206.082031 333.769531 206.242188 333.675781 206.402344 333.664062 C 207.832031 333.503906 209.261719 333.230469 210.703125 333.230469 C 212.386719 333.21875 213.964844 332.757812 215.566406 332.378906 C 215.988281 332.289062 216.402344 332.113281 216.8125 332.125 C 217.535156 332.148438 218.199219 331.964844 218.828125 331.667969 C 219.765625 331.21875 220.75 331.035156 221.777344 330.964844 C 222.246094 330.933594 222.726562 330.828125 223.183594 330.703125 C 224.523438 330.335938 225.851562 329.945312 227.175781 329.578125 C 229.089844 329.046875 230.964844 328.519531 232.773438 327.660156 C 234.257812 326.945312 235.804688 326.292969 237.394531 325.878906 C 239.109375 325.429688 240.527344 324.59375 241.84375 323.457031 C 242.402344 322.972656 243.148438 322.652344 243.59375 322.089844 C 244.15625 321.378906 244.851562 321.421875 245.5625 321.34375 C 245.617188 321.332031 245.652344 321.285156 245.710938 321.273438 C 246.363281 321.101562 246.75 320.539062 247.289062 320.195312 C 247.859375 319.839844 248.648438 319.917969 249.128906 319.308594 C 249.324219 319.082031 249.65625 318.953125 249.929688 318.792969 C 250.582031 318.425781 251.257812 318.195312 252.023438 318.082031 C 252.78125 317.976562 253.488281 317.507812 254.246094 317.402344 C 254.964844 317.3125 255.546875 316.933594 256.1875 316.714844 C 256.441406 316.632812 256.75 316.242188 256.738281 316.003906 C 256.726562 315.335938 257.457031 315.625 257.597656 315.222656 C 257.871094 315.300781 258.15625 315.382812 258.417969 315.460938 C 258.785156 315.140625 259.09375 314.726562 259.507812 314.542969 C 260.855469 313.933594 262.125 313.175781 263.363281 312.386719 C 264.09375 311.925781 264.847656 311.59375 265.648438 311.328125 C 265.796875 311.269531 265.96875 311.238281 266.085938 311.144531 C 267.421875 310.167969 268.738281 309.179688 270.066406 308.203125 C 270.761719 307.699219 271.402344 307.042969 272.183594 306.769531 C 273.132812 306.425781 273.804688 305.746094 274.585938 305.207031 C 275.683594 304.449219 276.722656 303.632812 277.753906 302.796875 C 279.789062 301.140625 281.847656 299.511719 283.804688 297.777344 C 285.53125 296.25 287.144531 294.617188 289.078125 293.367188 C 289.433594 293.136719 289.753906 292.839844 290.0625 292.539062 C 290.75 291.875 291.414062 291.171875 292.109375 290.519531 C 292.921875 289.738281 293.769531 289.003906 294.59375 288.234375 C 295.300781 287.589844 295.976562 286.914062 296.699219 286.28125 C 297.554688 285.535156 298.34375 284.765625 298.917969 283.765625 C 299.144531 283.351562 299.511719 283.019531 299.867188 282.6875 C 301.023438 281.59375 302.371094 280.664062 303 279.101562 C 303.058594 278.964844 303.21875 278.863281 303.308594 278.722656 C 304.144531 277.425781 304.933594 276.082031 306.03125 274.980469 C 306.179688 274.832031 306.261719 274.613281 306.375 274.429688 C 307.804688 272.179688 309.28125 269.9375 310.664062 267.652344 C 311.453125 266.332031 312.105469 264.910156 312.816406 263.53125 C 312.90625 263.347656 312.976562 263.117188 312.964844 262.910156 C 312.929688 262.265625 313.25 261.75 313.570312 261.28125 C 314.234375 260.304688 314.636719 259.179688 315.4375 258.28125 C 315.640625 258.050781 315.757812 257.730469 315.882812 257.433594 C 317.070312 254.675781 318.273438 251.929688 319.441406 249.175781 C 319.632812 248.738281 319.75 248.269531 319.863281 247.808594 C 320.582031 245.050781 321.28125 242.308594 322.015625 239.5625 C 322.195312 238.886719 322.367188 238.230469 322.449219 237.53125 C 322.527344 236.921875 322.402344 236.230469 322.996094 235.75 C 323.136719 235.644531 323.15625 235.359375 323.167969 235.140625 C 323.203125 234.601562 323.316406 234.109375 323.625 233.636719 C 323.855469 233.292969 323.945312 232.832031 324.015625 232.417969 C 324.164062 231.523438 324.222656 230.617188 324.382812 229.730469 C 324.554688 228.777344 324.804688 227.847656 325 226.90625 C 325.113281 226.378906 325.207031 225.851562 325.308594 225.320312 C 325.558594 224.011719 325.824219 222.691406 326.0625 221.382812 C 326.269531 220.28125 326.464844 219.167969 326.648438 218.0625 C 326.828125 217.007812 327.140625 215.949219 327.148438 214.90625 C 327.148438 212.484375 327.652344 210.117188 327.722656 207.703125 C 327.78125 205.488281 327.871094 203.304688 327.550781 201.125 C 327.390625 200.011719 327.277344 198.917969 327.5625 197.78125 C 327.722656 197.140625 327.664062 196.335938 327.4375 195.714844 C 327 194.601562 327.195312 193.476562 327.289062 192.394531 C 327.367188 191.511719 327.140625 190.558594 327.621094 189.71875 C 327.664062 189.640625 327.640625 189.503906 327.609375 189.410156 C 327.058594 187.976562 327.414062 186.5625 327.769531 185.171875 C 327.894531 184.679688 327.894531 184.265625 327.710938 183.773438 C 327.414062 182.933594 326.96875 182.09375 327.242188 181.140625 C 327.503906 180.910156 327.746094 180.683594 328.101562 180.359375 " })),
            React.createElement("path", { d: "M 258.410156 59.28125 C 259.039062 59.683594 259.679688 60.050781 260.308594 60.453125 C 260.800781 60.773438 261.269531 61.140625 261.761719 61.453125 C 265.125 63.53125 268.429688 65.691406 271.632812 68.019531 C 272.617188 68.746094 273.613281 69.457031 274.5625 70.226562 C 274.9375 70.535156 275.257812 70.902344 275.648438 71.191406 C 277.707031 72.707031 279.710938 74.3125 281.527344 76.128906 C 283.542969 78.128906 285.703125 79.964844 287.523438 82.15625 C 288.164062 82.9375 289.042969 83.511719 289.671875 84.292969 C 290.441406 85.246094 291.433594 85.984375 292.097656 87.050781 C 292.648438 87.957031 293.402344 88.738281 294.089844 89.566406 C 295.4375 91.21875 296.996094 92.710938 297.980469 94.652344 C 298.058594 94.789062 298.140625 94.953125 298.265625 95.03125 C 298.996094 95.492188 299.269531 96.261719 299.671875 96.949219 C 299.992188 97.511719 300.3125 98.0625 300.65625 98.605469 C 301.777344 100.371094 303.183594 101.910156 304.5 103.53125 C 304.738281 103.816406 305.027344 104.082031 305.207031 104.402344 C 306.351562 106.390625 307.597656 108.332031 308.984375 110.167969 C 309.304688 110.59375 309.578125 111.0625 309.839844 111.523438 C 310.378906 112.441406 310.894531 113.371094 311.421875 114.304688 C 311.785156 114.957031 312.152344 115.601562 312.507812 116.265625 C 312.828125 116.875 313.089844 117.53125 313.445312 118.128906 C 314.347656 119.585938 315.21875 121.054688 315.617188 122.753906 C 315.6875 123.066406 315.871094 123.351562 316.019531 123.640625 C 316.429688 124.445312 316.878906 125.234375 317.265625 126.050781 C 317.953125 127.511719 318.652344 128.957031 319.269531 130.4375 C 319.941406 132.070312 320.753906 133.652344 320.902344 135.457031 C 320.9375 135.996094 321.054688 136.03125 321.933594 136.019531 C 322.105469 135.6875 322.367188 135.34375 322.003906 134.996094 C 321.441406 134.46875 321.453125 133.746094 321.292969 133.078125 C 321.15625 132.472656 321.074219 131.839844 320.960938 131.183594 C 321.074219 131 321.203125 130.769531 321.40625 130.414062 C 321.019531 129.875 320.835938 129.347656 320.824219 128.726562 C 320.777344 127.335938 320.261719 126.003906 320.378906 124.605469 C 320.390625 124.351562 320.230469 124.097656 320.148438 123.835938 C 319.863281 122.871094 319.578125 121.894531 319.292969 120.917969 C 318.878906 119.527344 318.363281 118.195312 317.507812 117 C 316.820312 116.046875 316.203125 115.050781 316.257812 113.785156 C 316.269531 113.523438 316.179688 113.257812 316.078125 113.003906 C 315.757812 112.167969 315.390625 111.328125 315.070312 110.480469 C 314.328125 108.480469 313.398438 106.550781 312.585938 104.574219 C 311.546875 102.058594 310.230469 99.660156 309.007812 97.226562 C 308.207031 95.640625 307.222656 94.195312 305.769531 93.125 C 305.644531 93.035156 305.527344 92.894531 305.484375 92.757812 C 305.152344 91.863281 304.394531 91.300781 303.800781 90.621094 C 303.527344 90.300781 303.148438 90.035156 302.945312 89.667969 C 302.144531 88.269531 300.703125 87.40625 299.867188 86.039062 C 299.453125 85.363281 298.949219 84.660156 298.308594 84.226562 C 297.28125 83.5 296.59375 82.480469 295.738281 81.605469 C 294.683594 80.527344 293.496094 79.632812 292.316406 78.710938 C 291.34375 77.964844 290.394531 77.195312 289.480469 76.394531 C 287.796875 74.898438 286.070312 73.464844 283.988281 72.546875 C 283.027344 72.121094 281.941406 71.855469 281.414062 70.765625 C 281.355469 70.652344 281.152344 70.582031 281.023438 70.5 C 280.050781 69.859375 279.082031 69.226562 278.003906 68.746094 C 277.019531 68.296875 275.957031 67.871094 275.554688 66.78125 C 274.996094 66.734375 274.527344 66.699219 274.058594 66.664062 C 273.875 66.183594 273.714844 65.746094 273.578125 65.390625 C 273.429688 65.320312 273.382812 65.277344 273.335938 65.277344 C 273.222656 65.277344 273.121094 65.300781 273.015625 65.3125 C 272.03125 65.484375 272.011719 65.484375 271.679688 64.5625 C 271.519531 64.117188 271.222656 63.945312 270.832031 64.035156 C 269.757812 64.265625 268.988281 63.761719 268.269531 63.140625 C 268.316406 62.828125 268.347656 62.589844 268.382812 62.324219 C 267.859375 62.277344 267.367188 62.222656 267.101562 61.738281 C 266.886719 61.324219 266.472656 61.199219 266.128906 60.945312 C 265.167969 60.222656 264.015625 59.949219 262.984375 59.375 C 262.46875 59.085938 261.964844 58.808594 261.324219 58.972656 C 261.140625 59.015625 260.878906 58.960938 260.71875 58.855469 C 259.976562 58.351562 259.082031 58.050781 258.546875 57.25 C 258.5 57.179688 258.351562 57.179688 258.15625 57.097656 C 257.847656 57.226562 257.46875 57.375 257.117188 57.523438 C 257.070312 58.546875 257.789062 58.878906 258.410156 59.28125 " }),
            React.createElement("path", { d: "M 222.316406 46.304688 C 223.792969 46.566406 225.164062 47.1875 226.617188 47.511719 C 227.96875 47.820312 229.292969 48.257812 230.632812 48.613281 C 232.679688 49.164062 234.773438 49.460938 236.796875 50.128906 C 238.707031 50.761719 240.6875 51.171875 242.507812 52.082031 C 242.734375 52.195312 243.023438 52.195312 243.273438 52.265625 C 243.582031 52.34375 243.925781 52.390625 244.1875 52.550781 C 245 53.066406 245.835938 53.539062 246.808594 53.710938 C 247.816406 53.894531 248.59375 54.574219 249.507812 54.953125 C 250.296875 55.285156 251.050781 55.675781 251.832031 56.03125 C 252.847656 56.503906 253.878906 56.960938 254.90625 57.398438 C 255.34375 57.59375 255.800781 57.800781 256.382812 57.421875 C 256.1875 56.523438 255.765625 55.789062 254.90625 55.320312 C 254.027344 54.824219 253.113281 54.390625 252.34375 53.710938 C 252.082031 53.46875 251.671875 53.402344 251.316406 53.308594 C 250.402344 53.058594 249.460938 52.851562 248.535156 52.609375 C 248.160156 52.515625 247.847656 52.34375 247.667969 51.964844 C 247.414062 51.460938 246.957031 51.3125 246.453125 51.414062 C 245.628906 51.585938 244.863281 51.402344 244.132812 51.105469 C 243.457031 50.839844 242.792969 50.804688 242.074219 50.933594 C 241.089844 49.828125 240.160156 49.082031 238.730469 49.039062 C 237.851562 49.003906 237.003906 48.542969 236.179688 48.164062 C 234.703125 47.476562 233.046875 47.164062 231.855469 45.867188 C 230.90625 46.28125 230.058594 46.003906 229.238281 45.59375 C 229.042969 45.5 228.824219 45.28125 228.675781 45.316406 C 227.703125 45.535156 226.925781 44.9375 226.054688 44.777344 C 225.644531 44.695312 225.1875 44.640625 224.796875 44.753906 C 223.847656 45.019531 222.921875 45.027344 221.984375 44.71875 C 221.378906 44.511719 220.898438 44.800781 220.371094 45.167969 C 220.863281 45.992188 221.628906 46.1875 222.316406 46.304688 " }),
            React.createElement("path", { d: "M 70.210938 268.882812 C 69.570312 268.777344 69.035156 268.59375 68.976562 267.835938 C 68.976562 267.675781 68.941406 267.457031 68.839844 267.390625 C 68.199219 266.976562 68.027344 266.320312 67.820312 265.65625 C 67.773438 265.515625 67.636719 265.355469 67.511719 265.300781 C 66.894531 265.046875 66.722656 264.472656 66.460938 263.945312 C 66.070312 263.152344 66.003906 262.164062 65.085938 261.679688 C 65.007812 261.648438 64.960938 261.507812 64.925781 261.417969 C 64.527344 260.292969 63.554688 259.546875 63.074219 258.476562 C 63.0625 258.453125 62.980469 258.464844 62.9375 258.464844 C 62.671875 259.121094 62.648438 259.132812 62.789062 259.453125 C 63.097656 260.1875 63.417969 260.921875 63.769531 261.636719 C 64.21875 262.554688 64.550781 263.585938 65.203125 264.324219 C 66.152344 265.355469 66.824219 266.527344 67.558594 267.699219 C 68.199219 268.734375 68.851562 269.789062 69.902344 270.476562 C 70.050781 270.59375 70.1875 270.835938 70.199219 271.019531 C 70.28125 271.832031 70.898438 272.351562 71.296875 272.960938 C 71.597656 273.417969 72.132812 273.890625 72.945312 273.980469 C 72.75 272.753906 71.984375 272.132812 71.378906 271.421875 C 70.738281 270.671875 70.175781 269.914062 70.210938 268.882812 " }),
            React.createElement("path", { d: "M 52.640625 232.363281 C 52.824219 231.019531 51.917969 230.144531 51.265625 229.144531 C 51.371094 229.605469 51.519531 230.054688 51.578125 230.511719 C 51.65625 231.03125 51.621094 231.582031 51.714844 232.097656 C 51.78125 232.511719 51.875 232.980469 52.113281 233.304688 C 52.582031 233.914062 52.71875 234.625 52.925781 235.324219 C 52.960938 235.460938 53.085938 235.566406 53.167969 235.679688 C 53.292969 235.613281 53.441406 235.566406 53.453125 235.507812 C 53.53125 234.867188 53.417969 234.246094 53.0625 233.707031 C 52.789062 233.28125 52.570312 232.84375 52.640625 232.363281 " }),
            React.createElement("path", { d: "M 61.6875 254.964844 C 61.550781 254.859375 61.253906 254.835938 61.105469 254.90625 C 60.957031 254.984375 60.84375 255.238281 60.820312 255.421875 C 60.796875 255.617188 60.855469 255.859375 60.957031 256.03125 C 61.300781 256.628906 61.6875 257.191406 62.054688 257.765625 C 62.160156 257.742188 62.261719 257.707031 62.363281 257.683594 C 62.421875 257.273438 62.535156 256.859375 62.523438 256.457031 C 62.523438 255.824219 62.179688 255.332031 61.6875 254.964844 " }),
            React.createElement("path", { d: "M 327.265625 165.914062 C 327.355469 164.972656 327.621094 164.109375 328.269531 163.46875 C 327.894531 162.949219 327.480469 162.859375 326.988281 163.03125 C 326.648438 164.433594 326.667969 164.71875 327.265625 165.914062 " }),
            React.createElement("path", { d: "M 59.308594 251.703125 C 58.964844 252.6875 59.996094 253.148438 60.28125 253.917969 C 60.613281 253.261719 60.386719 252.6875 60.097656 252.125 C 59.960938 251.863281 59.789062 251.539062 59.308594 251.703125 " }),
            React.createElement("path", { d: "M 327.894531 169.3125 C 327.882812 169.3125 327.871094 169.3125 327.859375 169.300781 C 327.847656 169.324219 327.859375 169.335938 327.847656 169.347656 C 327.859375 169.347656 327.859375 169.347656 327.859375 169.359375 C 327.871094 169.347656 327.882812 169.324219 327.894531 169.3125 " }),
            React.createElement("path", { d: "M 327.894531 167.371094 C 327.90625 167.335938 327.664062 167.164062 327.539062 167.152344 C 327.300781 167.140625 327.140625 167.324219 327.183594 167.554688 C 327.308594 168.105469 327.460938 168.660156 327.621094 169.199219 C 327.640625 169.253906 327.769531 169.277344 327.859375 169.300781 C 328.226562 168.667969 327.675781 168.015625 327.894531 167.371094 " }),
            React.createElement("path", { d: "M 327.675781 175.167969 C 328.15625 174.953125 328.15625 174.953125 328.203125 173.457031 C 327.949219 173.597656 327.652344 173.675781 327.609375 173.828125 C 327.480469 174.261719 327.414062 174.734375 327.675781 175.167969 " }),
            React.createElement("path", { d: "M 132.855469 62.820312 C 132.914062 63.09375 133.109375 63.335938 133.382812 63.265625 C 133.644531 63.199219 133.863281 62.96875 134.253906 62.714844 C 133.886719 62.507812 133.691406 62.335938 133.472656 62.300781 C 133.097656 62.253906 132.789062 62.53125 132.855469 62.820312 " }),
            React.createElement("path", { d: "M 325.332031 145.792969 C 324.78125 145.929688 324.484375 145.953125 324.257812 146.089844 C 323.9375 146.285156 323.980469 146.480469 324.425781 146.941406 C 324.679688 146.632812 324.90625 146.320312 325.332031 145.792969 " }),
            React.createElement("path", { d: "M 327.859375 169.359375 C 327.699219 169.566406 327.539062 169.785156 327.390625 169.992188 C 327.722656 170.289062 327.949219 170.21875 328.15625 170.035156 C 328.441406 169.785156 328.339844 169.554688 327.859375 169.359375 " }),
            React.createElement("path", { d: "M 326.863281 162.480469 C 327.34375 162.148438 327.34375 162.148438 326.921875 161.160156 C 326.625 161.746094 326.625 162.101562 326.863281 162.480469 " }),
            React.createElement("path", { d: "M 56.425781 244.316406 C 56.496094 244.488281 56.621094 244.640625 56.769531 244.742188 C 56.816406 244.777344 57.089844 244.582031 57.089844 244.558594 C 57.011719 244.351562 56.882812 244.167969 56.722656 243.859375 C 56.550781 244.109375 56.390625 244.25 56.425781 244.316406 " }),
            React.createElement("path", { d: "M 57.742188 246.210938 C 57.683594 246.292969 57.558594 246.394531 57.582031 246.429688 C 57.652344 246.613281 57.765625 246.761719 57.867188 246.925781 C 57.949219 246.84375 58.039062 246.75 58.1875 246.578125 C 58.003906 246.429688 57.878906 246.328125 57.742188 246.210938 " }),
            React.createElement("path", { d: "M 51.222656 226.171875 C 51.117188 226.171875 51.027344 226.332031 50.925781 226.4375 C 51.027344 226.527344 51.117188 226.675781 51.234375 226.6875 C 51.335938 226.699219 51.449219 226.5625 51.632812 226.449219 C 51.449219 226.320312 51.335938 226.160156 51.222656 226.171875 " }),
            React.createElement("path", { d: "M 58.121094 248.851562 C 58.109375 248.957031 58.257812 249.082031 58.382812 249.265625 C 58.507812 249.082031 58.644531 248.957031 58.644531 248.851562 C 58.644531 248.738281 58.484375 248.636719 58.40625 248.53125 C 58.304688 248.636719 58.144531 248.738281 58.121094 248.851562 " }),
            React.createElement("path", { d: "M 56.644531 243.121094 C 56.667969 242.871094 56.519531 242.753906 56.289062 242.742188 C 56.1875 242.730469 56.082031 242.753906 55.992188 242.765625 C 56.027344 242.847656 56.082031 242.925781 56.117188 243.019531 C 56.210938 243.214844 56.324219 243.363281 56.5625 243.25 C 56.609375 243.238281 56.644531 243.167969 56.644531 243.121094 " }),
            React.createElement("path", { d: "M 325.859375 152.867188 C 325.6875 152.625 325.570312 152.453125 325.410156 152.210938 C 325.296875 152.648438 325.367188 152.84375 325.859375 152.867188 " }),
            React.createElement("path", { d: "M 50.019531 221.625 C 49.917969 221.625 49.816406 221.785156 49.621094 221.957031 C 49.835938 222.09375 49.996094 222.1875 50.144531 222.277344 C 50.203125 222.140625 50.316406 222.003906 50.296875 221.875 C 50.285156 221.773438 50.113281 221.625 50.019531 221.625 " }),
            React.createElement("path", { d: "M 51.542969 227.964844 C 51.609375 227.988281 51.746094 227.824219 51.851562 227.757812 C 51.746094 227.652344 51.65625 227.5625 51.566406 227.46875 C 51.425781 227.550781 51.347656 227.597656 51.257812 227.652344 C 51.347656 227.757812 51.425781 227.917969 51.542969 227.964844 " }),
            React.createElement("path", { d: "M 326.488281 158.722656 C 326.5 158.644531 326.542969 158.539062 326.507812 158.484375 C 326.453125 158.402344 326.347656 158.367188 326.269531 158.324219 L 326.269531 158.3125 C 326.28125 158.402344 326.292969 158.507812 326.328125 158.585938 C 326.359375 158.644531 326.429688 158.679688 326.488281 158.722656 " }),
            React.createElement("path", { d: "M 326.347656 157.390625 C 326.316406 157.714844 326.292969 158.011719 326.269531 158.3125 L 326.269531 158.324219 C 326.554688 157.75 326.554688 157.75 326.347656 157.390625 " }),
            React.createElement("path", { d: "M 326.828125 159.871094 C 326.796875 159.78125 326.75 159.6875 326.703125 159.609375 C 326.667969 159.632812 326.589844 159.65625 326.589844 159.6875 C 326.589844 159.78125 326.613281 159.882812 326.625 159.976562 C 326.691406 159.941406 326.761719 159.90625 326.828125 159.871094 " }),
            React.createElement("path", { d: "M 54.183594 236.289062 C 54.183594 236.382812 54.265625 236.460938 54.308594 236.542969 C 54.367188 236.460938 54.425781 236.394531 54.480469 236.3125 C 54.4375 236.230469 54.390625 236.152344 54.34375 236.058594 C 54.289062 236.140625 54.195312 236.21875 54.183594 236.289062 " }),
            React.createElement("path", { d: "M 326.1875 155.945312 C 326.144531 155.863281 326.097656 155.796875 326.050781 155.714844 C 326.019531 155.75 325.949219 155.785156 325.949219 155.820312 C 325.960938 155.910156 325.984375 156.003906 326.007812 156.09375 C 326.0625 156.035156 326.132812 155.992188 326.1875 155.945312 " }),
            React.createElement("path", { d: "M 325.835938 151.238281 C 325.8125 151.15625 325.789062 151.074219 325.765625 150.984375 C 325.707031 151.03125 325.628906 151.0625 325.582031 151.121094 C 325.558594 151.144531 325.59375 151.246094 325.605469 151.246094 C 325.6875 151.257812 325.753906 151.246094 325.835938 151.238281 " }),
            React.createElement("path", { d: "M 322.300781 137.085938 C 322.277344 137.144531 322.265625 137.203125 322.242188 137.25 C 322.277344 137.238281 322.3125 137.226562 322.355469 137.203125 C 322.335938 137.167969 322.324219 137.132812 322.300781 137.085938 " }),
            React.createElement("path", { d: "M 327.652344 172.277344 C 327.628906 172.296875 327.585938 172.308594 327.574219 172.34375 C 327.550781 172.378906 327.5625 172.425781 327.5625 172.472656 C 327.621094 172.449219 327.664062 172.414062 327.722656 172.390625 C 327.699219 172.355469 327.675781 172.320312 327.652344 172.277344 " }),
            React.createElement("path", { d: "M 68.667969 266.320312 L 68.703125 266.402344 L 68.746094 266.34375 Z M 68.667969 266.320312 " }),
            React.createElement("path", { d: "M 327.757812 178.9375 L 327.871094 178.890625 L 327.769531 178.832031 Z M 327.757812 178.9375 " }),
            React.createElement("path", { d: "M 61.515625 254.136719 C 61.496094 254.089844 61.460938 254.054688 61.4375 254.019531 C 61.414062 254.054688 61.347656 254.101562 61.355469 254.113281 C 61.378906 254.160156 61.425781 254.207031 61.472656 254.25 C 61.484375 254.214844 61.507812 254.171875 61.515625 254.136719 " }),
            React.createElement("path", { d: "M 328.546875 170.566406 L 328.601562 170.691406 L 328.660156 170.566406 Z M 328.546875 170.566406 " }),
            React.createElement("path", { d: "M 50.753906 224 C 50.730469 224.035156 50.742188 224.082031 50.730469 224.128906 C 50.796875 224.117188 50.855469 224.117188 50.925781 224.105469 C 50.902344 224.058594 50.890625 224.023438 50.867188 223.976562 C 50.832031 223.976562 50.777344 223.976562 50.753906 224 " }),
            React.createElement("path", { d: "M 325.800781 153.832031 C 325.8125 153.796875 325.765625 153.761719 325.753906 153.730469 C 325.742188 153.796875 325.730469 153.855469 325.71875 153.925781 C 325.753906 153.902344 325.800781 153.867188 325.800781 153.832031 " }),
            React.createElement("path", { d: "M 57.617188 245.316406 C 57.617188 245.304688 57.546875 245.292969 57.511719 245.28125 C 57.503906 245.328125 57.480469 245.375 57.480469 245.417969 C 57.480469 245.429688 57.546875 245.441406 57.582031 245.453125 C 57.605469 245.40625 57.628906 245.363281 57.617188 245.316406 " }),
            React.createElement("path", { d: "M 56.027344 242.34375 C 56.003906 242.34375 55.992188 242.34375 55.980469 242.34375 C 55.980469 242.480469 55.980469 242.605469 55.980469 242.742188 L 55.980469 242.765625 C 55.980469 242.765625 55.992188 242.765625 55.992188 242.765625 C 55.992188 242.753906 55.980469 242.753906 55.980469 242.742188 C 55.992188 242.605469 56.015625 242.480469 56.027344 242.34375 " }),
            React.createElement("path", { d: "M 224.421875 318.621094 C 224.398438 318.863281 224.410156 319.183594 224.351562 319.492188 C 224.292969 319.851562 224.179688 320.183594 224.054688 320.675781 C 224.914062 321.019531 225.53125 320.722656 225.988281 320.527344 C 226.410156 319.882812 226.753906 319.425781 227.015625 318.929688 C 227.109375 318.746094 226.996094 318.460938 226.972656 318.128906 C 226.078125 318.332031 225.199219 317.828125 224.421875 318.621094 " }),
            React.createElement("path", { d: "M 262.46875 296.480469 C 262.171875 296.675781 261.933594 296.972656 261.632812 297.179688 C 260.914062 297.707031 260.148438 298.179688 259.4375 298.730469 C 258.933594 299.121094 258.546875 299.648438 258.417969 300.429688 C 259.058594 300.613281 259.425781 300.328125 259.816406 300.027344 C 260.558594 299.441406 261.164062 298.707031 261.988281 298.191406 C 262.414062 297.925781 262.722656 297.433594 263.019531 296.996094 C 263.109375 296.859375 263.03125 296.605469 263.03125 296.398438 C 262.835938 296.421875 262.605469 296.375 262.46875 296.480469 " }),
            React.createElement("path", { d: "M 194.882812 322.59375 C 194.324219 322.34375 193.523438 322.386719 192.996094 323.007812 C 193.542969 323.664062 193.671875 323.8125 193.933594 323.800781 C 195.042969 323.742188 196.140625 323.652344 197.113281 323.03125 C 197.136719 323.007812 197.125 322.9375 197.125 322.847656 C 196.988281 322.8125 196.839844 322.730469 196.691406 322.742188 C 196.085938 322.800781 195.535156 322.90625 194.882812 322.59375 " }),
            React.createElement("path", { d: "M 70.40625 237.941406 C 70.335938 237.804688 70.234375 237.679688 70.050781 237.390625 C 69.847656 237.804688 69.652344 238.011719 69.652344 238.230469 C 69.628906 239.101562 70.304688 239.480469 70.96875 239.917969 C 70.976562 240.5625 70.476562 241.148438 71.195312 241.5625 C 71.457031 241.054688 71.824219 240.527344 71.4375 240.054688 C 70.898438 239.425781 70.726562 238.65625 70.40625 237.941406 " }),
            React.createElement("path", { d: "M 202.054688 322.078125 C 201.734375 322.078125 201.472656 322.296875 201.402344 322.652344 C 201.347656 322.972656 201.667969 323.339844 202.101562 323.339844 C 202.445312 323.339844 202.800781 323.214844 203.132812 323.101562 C 203.246094 323.054688 203.28125 322.847656 203.359375 322.699219 C 203.269531 322.546875 203.222656 322.34375 203.109375 322.308594 C 202.765625 322.179688 202.410156 322.078125 202.054688 322.078125 " }),
            React.createElement("path", { d: "M 255.457031 302.691406 C 256.175781 302.691406 256.542969 302.691406 256.886719 302.691406 C 257.757812 301.679688 257.757812 301.679688 257.574219 300.921875 C 256.738281 301.210938 256.269531 301.898438 255.457031 302.691406 " }),
            React.createElement("path", { d: "M 268.648438 298.765625 C 270.546875 298.695312 270.742188 298.523438 270.582031 297.28125 C 269.664062 297.316406 269.207031 297.925781 268.648438 298.765625 " }),
            React.createElement("path", { d: "M 199.5625 322.527344 C 199.265625 322.492188 198.945312 322.570312 198.648438 322.628906 C 198.371094 322.6875 198.085938 322.789062 198.1875 323.132812 C 198.246094 323.285156 198.476562 323.410156 198.648438 323.492188 C 198.785156 323.558594 198.957031 323.546875 199.207031 323.582031 C 199.320312 323.546875 199.5625 323.535156 199.710938 323.410156 C 199.847656 323.304688 200.007812 323.066406 199.972656 322.917969 C 199.949219 322.753906 199.722656 322.546875 199.5625 322.527344 " }),
            React.createElement("path", { d: "M 73.425781 246.878906 C 72.910156 247.648438 72.910156 248.105469 73.460938 248.507812 C 73.597656 248.601562 73.859375 248.601562 74.042969 248.542969 C 74.136719 248.519531 74.238281 248.277344 74.214844 248.140625 C 74.171875 247.601562 73.976562 247.121094 73.425781 246.878906 " }),
            React.createElement("path", { d: "M 68.953125 234.910156 C 69.023438 235.691406 68.851562 236.371094 69.433594 237.058594 C 69.605469 236.714844 69.867188 236.4375 69.835938 236.21875 C 69.742188 235.75 69.605469 235.246094 68.953125 234.910156 " }),
            React.createElement("path", { d: "M 227.726562 318.460938 C 227.726562 318.5625 227.738281 318.65625 227.75 318.746094 C 228.195312 318.722656 228.652344 318.710938 229.109375 318.679688 C 229.5 318.632812 229.558594 318.449219 229.269531 317.828125 C 228.757812 318.035156 228.242188 318.253906 227.726562 318.460938 " }),
            React.createElement("path", { d: "M 75.269531 250.472656 C 75.382812 251.117188 75.988281 251.300781 76.355469 251.714844 C 76.195312 250.609375 76.195312 250.609375 75.269531 250.472656 " }),
            React.createElement("path", { d: "M 233.433594 316.449219 C 233.574219 317.164062 233.960938 317.070312 234.304688 316.980469 C 234.578125 316.921875 234.714844 316.726562 234.5 316.324219 C 234.214844 316.359375 233.882812 316.394531 233.433594 316.449219 " }),
            React.createElement("path", { d: "M 82.828125 264.78125 C 82.921875 264.910156 83.230469 265.023438 83.300781 264.964844 C 83.4375 264.863281 83.574219 264.5625 83.503906 264.460938 C 83.402344 264.277344 83.148438 264.171875 82.679688 263.828125 C 82.761719 264.414062 82.726562 264.644531 82.828125 264.78125 " }),
            React.createElement("path", { d: "M 74.890625 248.199219 C 74.59375 248.738281 74.742188 249.140625 74.925781 249.554688 C 75.039062 249.519531 75.199219 249.519531 75.222656 249.472656 C 75.429688 248.992188 75.234375 248.625 74.890625 248.199219 " }),
            React.createElement("path", { d: "M 266.1875 300.707031 C 265.867188 300.671875 265.753906 300.933594 265.742188 301.199219 C 265.742188 301.289062 265.925781 301.507812 265.980469 301.484375 C 266.1875 301.441406 266.371094 301.3125 266.691406 301.140625 C 266.4375 300.921875 266.324219 300.714844 266.1875 300.707031 " }),
            React.createElement("path", { d: "M 79.351562 257.121094 C 79.273438 257.351562 79.167969 257.582031 79.144531 257.824219 C 79.136719 257.914062 79.296875 258.019531 79.363281 258.121094 C 79.433594 258.050781 79.535156 257.972656 79.535156 257.902344 C 79.546875 257.652344 79.523438 257.398438 79.511719 257.15625 C 79.457031 257.144531 79.398438 257.132812 79.351562 257.121094 " }),
            React.createElement("path", { d: "M 68.78125 233.328125 C 68.816406 233.316406 68.851562 233.234375 68.839844 233.199219 C 68.714844 232.742188 68.3125 232.96875 68.039062 232.890625 C 68.210938 233.15625 68.347656 233.476562 68.78125 233.328125 " }),
            React.createElement("path", { d: "M 67.992188 232.832031 C 67.992188 232.832031 67.945312 232.878906 67.945312 232.878906 C 67.980469 232.890625 68.003906 232.890625 68.039062 232.890625 C 68.015625 232.867188 68.003906 232.855469 67.992188 232.832031 " }),
            React.createElement("path", { d: "M 64.722656 220.027344 C 64.730469 220.050781 64.835938 220.003906 64.847656 219.96875 C 64.890625 219.878906 64.9375 219.761719 64.914062 219.695312 C 64.847656 219.5 64.742188 219.339844 64.652344 219.15625 C 64.570312 219.351562 64.480469 219.535156 64.457031 219.730469 C 64.445312 219.820312 64.617188 219.9375 64.722656 220.027344 " }),
            React.createElement("path", { d: "M 79.625 259.535156 C 79.695312 259.625 79.765625 259.730469 79.832031 259.820312 C 79.890625 259.753906 79.945312 259.683594 80.003906 259.613281 C 79.957031 259.546875 79.914062 259.417969 79.855469 259.40625 C 79.785156 259.394531 79.707031 259.488281 79.625 259.535156 " }),
            React.createElement("path", { d: "M 83.664062 266.046875 C 83.789062 265.976562 83.894531 265.863281 83.960938 265.757812 C 83.984375 265.722656 83.835938 265.527344 83.8125 265.539062 C 83.6875 265.597656 83.550781 265.667969 83.46875 265.757812 C 83.414062 265.828125 83.425781 265.941406 83.402344 266.035156 C 83.503906 266.046875 83.597656 266.078125 83.664062 266.046875 " }),
            React.createElement("path", { d: "M 83.355469 266.023438 C 83.355469 266.023438 83.402344 266.070312 83.402344 266.070312 C 83.402344 266.058594 83.402344 266.046875 83.402344 266.035156 C 83.390625 266.035156 83.367188 266.023438 83.355469 266.023438 " }),
            React.createElement("path", { d: "M 231.261719 316.152344 C 231.238281 316.199219 231.375 316.382812 231.398438 316.371094 C 231.535156 316.324219 231.695312 316.277344 231.753906 316.175781 C 231.789062 316.09375 231.660156 315.945312 231.570312 315.738281 C 231.421875 315.921875 231.308594 316.027344 231.261719 316.152344 " }),
            React.createElement("path", { d: "M 72.570312 243.328125 C 72.601562 243.386719 72.648438 243.421875 72.695312 243.480469 C 72.707031 243.433594 72.71875 243.398438 72.730469 243.351562 C 72.707031 243.304688 72.683594 243.273438 72.660156 243.238281 C 72.625 243.273438 72.570312 243.316406 72.570312 243.328125 " }),
            React.createElement("path", { d: "M 86.59375 269.835938 C 86.628906 269.914062 86.683594 269.984375 86.730469 270.054688 C 86.777344 269.996094 86.824219 269.9375 86.867188 269.894531 C 86.8125 269.835938 86.742188 269.789062 86.671875 269.742188 C 86.671875 269.742188 86.59375 269.8125 86.59375 269.835938 " }),
            React.createElement("path", { d: "M 81.707031 261.980469 C 81.753906 262.050781 81.800781 262.117188 81.859375 262.1875 C 81.9375 262.152344 82.074219 262.128906 82.085938 262.070312 C 82.121094 261.992188 82.050781 261.886719 82.019531 261.796875 C 81.914062 261.855469 81.8125 261.921875 81.707031 261.980469 " }),
            React.createElement("path", { d: "M 220.050781 318.367188 C 220.085938 318.4375 220.109375 318.496094 220.140625 318.550781 C 220.175781 318.527344 220.210938 318.496094 220.246094 318.472656 C 220.222656 318.425781 220.210938 318.367188 220.1875 318.355469 C 220.152344 318.34375 220.097656 318.367188 220.050781 318.367188 " }),
            React.createElement("path", { d: "M 196.550781 128.898438 C 178.238281 135.769531 168.96875 156.097656 175.875 174.335938 C 178.910156 182.375 184.800781 189.039062 192.445312 193.070312 L 212.328125 203.554688 C 217.609375 206.34375 219.628906 212.871094 216.828125 218.140625 C 214.015625 223.410156 207.457031 225.421875 202.160156 222.636719 C 198.621094 220.757812 196.40625 217.089844 196.40625 213.097656 L 171.808594 213.097656 C 171.808594 228.46875 181.816406 242.082031 196.550781 246.71875 L 196.550781 261.503906 L 221.515625 261.503906 L 221.515625 245.367188 C 239.433594 237.523438 247.5625 216.710938 239.683594 198.890625 C 236.460938 191.625 230.890625 185.648438 223.839844 181.929688 L 204.5625 171.746094 C 199.097656 169.273438 196.683594 162.890625 199.152344 157.464844 C 201.632812 152.023438 208.050781 149.617188 213.503906 152.074219 C 217.382812 153.824219 219.878906 157.671875 219.878906 161.902344 L 244.460938 161.902344 C 244.460938 147.226562 235.324219 134.074219 221.515625 128.898438 L 221.515625 113.496094 L 196.550781 113.496094 L 196.550781 128.898438 " }),
            React.createElement("path", { d: "M 162.902344 244.792969 C 162.902344 253.160156 156.046875 259.941406 147.589844 259.941406 C 139.136719 259.941406 132.28125 253.160156 132.28125 244.792969 C 132.28125 236.429688 139.136719 229.644531 147.589844 229.644531 C 154.230469 229.644531 159.882812 233.828125 162.003906 239.671875 Z M 158.519531 211.210938 C 159.277344 207.105469 162.308594 118.992188 159.703125 116.683594 C 157.621094 114.84375 131.246094 114.839844 128.949219 116.632812 C 125.105469 119.636719 133.644531 204.015625 134.609375 213.0625 C 135.035156 217.046875 157.898438 214.570312 158.519531 211.210938 Z M 158.519531 211.210938 " }),
            React.createElement("g", { "clip-path": "url(#clip2)", "clip-rule": "nonzero" },
                React.createElement("path", { d: "M 162.820312 245.355469 C 162.988281 246.265625 163.074219 247.222656 162.960938 248.160156 L 162.761719 249.257812 C 162.734375 249.445312 162.679688 249.621094 162.628906 249.800781 L 162.472656 250.34375 L 162.316406 250.882812 C 162.257812 251.0625 162.183594 251.234375 162.113281 251.410156 C 161.972656 251.757812 161.84375 252.117188 161.683594 252.460938 C 161.035156 253.835938 160.183594 255.121094 159.179688 256.308594 C 158.144531 257.46875 156.949219 258.503906 155.625 259.394531 C 154.273438 260.238281 152.8125 260.957031 151.246094 261.457031 C 150.832031 261.59375 150.40625 261.675781 149.984375 261.785156 C 149.773438 261.835938 149.558594 261.886719 149.34375 261.933594 L 148.695312 262.015625 L 148.042969 262.097656 C 147.824219 262.121094 147.605469 262.160156 147.386719 262.15625 L 146.0625 262.171875 C 144.300781 262.105469 142.515625 261.808594 140.824219 261.203125 C 139.136719 260.589844 137.527344 259.738281 136.054688 258.675781 C 134.605469 257.585938 133.292969 256.308594 132.136719 254.863281 C 131.839844 254.457031 131.542969 254.042969 131.25 253.625 C 130.984375 253.191406 130.738281 252.742188 130.488281 252.296875 C 130.359375 252.074219 130.253906 251.839844 130.152344 251.605469 L 129.851562 250.898438 C 129.753906 250.660156 129.640625 250.425781 129.566406 250.179688 L 129.335938 249.445312 C 128.742188 247.472656 128.460938 245.390625 128.613281 243.328125 C 128.746094 241.261719 129.214844 239.199219 130.03125 237.273438 C 130.847656 235.347656 132.007812 233.570312 133.410156 232.015625 C 134.433594 230.84375 135.660156 229.855469 136.945312 228.972656 C 137.277344 228.769531 137.613281 228.570312 137.953125 228.375 C 138.121094 228.277344 138.289062 228.179688 138.460938 228.085938 L 138.992188 227.835938 L 140.058594 227.351562 C 140.421875 227.210938 140.796875 227.09375 141.164062 226.964844 C 141.898438 226.691406 142.667969 226.546875 143.429688 226.378906 C 143.808594 226.285156 144.199219 226.265625 144.582031 226.214844 C 144.96875 226.175781 145.355469 226.125 145.742188 226.101562 L 146.898438 226.09375 C 147.285156 226.09375 147.667969 226.09375 148.050781 226.140625 C 148.433594 226.179688 148.816406 226.207031 149.195312 226.261719 L 150.328125 226.46875 C 150.648438 226.519531 150.988281 226.640625 151.351562 226.742188 C 151.53125 226.796875 151.71875 226.855469 151.914062 226.914062 C 152.101562 226.980469 152.292969 227.0625 152.492188 227.140625 C 152.882812 227.304688 153.296875 227.460938 153.699219 227.683594 C 154.105469 227.898438 154.527344 228.097656 154.929688 228.367188 C 156.570312 229.359375 158.117188 230.742188 159.28125 232.207031 C 160.460938 233.667969 161.261719 235.199219 161.738281 236.410156 C 161.992188 237.007812 162.136719 237.542969 162.253906 237.949219 C 162.378906 238.351562 162.40625 238.65625 162.421875 238.792969 C 162.4375 239.097656 162.5625 239.558594 161.980469 239.667969 C 161.453125 239.773438 161.175781 239.425781 161.007812 239.152344 C 160.378906 238.1875 159.699219 237.277344 158.921875 236.472656 C 156.65625 234.078125 153.65625 232.589844 150.628906 232.167969 C 147.589844 231.757812 144.496094 232.355469 142.042969 233.867188 C 140.636719 234.714844 139.460938 235.878906 138.574219 237.179688 C 137.675781 238.480469 137.050781 239.894531 136.601562 241.335938 C 136.164062 242.84375 136.152344 244.464844 136.480469 245.972656 C 136.800781 247.480469 137.472656 248.855469 138.351562 250.03125 C 139.226562 251.214844 140.308594 252.195312 141.484375 252.988281 C 142.660156 253.789062 143.914062 254.425781 145.277344 254.949219 C 145.46875 255.046875 145.679688 255.082031 145.882812 255.140625 L 146.503906 255.308594 L 147.140625 255.390625 C 147.355469 255.410156 147.570312 255.460938 147.789062 255.449219 L 148.4375 255.449219 C 148.546875 255.449219 148.65625 255.460938 148.765625 255.445312 L 149.085938 255.410156 L 149.734375 255.34375 C 149.949219 255.308594 150.15625 255.253906 150.371094 255.214844 C 151.230469 255.058594 152.042969 254.742188 152.875 254.433594 C 153.671875 254.058594 154.5 253.6875 155.28125 253.1875 C 156.042969 252.75 157.125 251.75 158.121094 250.351562 C 159.128906 248.960938 160.058594 247.1875 160.800781 245.246094 C 160.886719 245.039062 160.863281 244.804688 161.644531 244.792969 C 162.484375 244.78125 162.773438 245.054688 162.820312 245.355469 Z M 130.8125 203.855469 L 131.9375 213.089844 C 131.960938 213.261719 131.996094 213.429688 132.027344 213.597656 C 132.070312 213.761719 132.113281 213.925781 132.164062 214.082031 C 132.261719 214.390625 132.402344 214.683594 132.589844 214.964844 C 132.96875 215.53125 133.507812 215.957031 134.089844 216.296875 C 134.679688 216.632812 135.339844 216.867188 136.015625 217.042969 C 136.363281 217.121094 136.683594 217.199219 137.058594 217.257812 C 137.316406 217.300781 137.554688 217.332031 137.796875 217.359375 C 139.71875 217.566406 141.503906 217.523438 143.277344 217.40625 C 145.046875 217.28125 146.785156 217.0625 148.507812 216.753906 C 150.234375 216.445312 151.941406 216.050781 153.640625 215.527344 C 154.464844 215.269531 155.285156 214.976562 156.101562 214.605469 C 156.917969 214.222656 157.726562 213.8125 158.535156 213.097656 C 158.753906 212.894531 159.019531 212.582031 159.097656 212.183594 C 159.136719 211.992188 159.117188 211.773438 159.03125 211.605469 C 158.9375 211.425781 158.769531 211.300781 158.550781 211.234375 C 157.519531 211.074219 157.507812 210.96875 157.222656 211.035156 C 157.105469 211.042969 156.867188 211.117188 156.433594 211.222656 C 156 211.324219 155.390625 211.445312 154.644531 211.546875 C 153.148438 211.753906 151.128906 211.890625 148.980469 211.921875 C 146.835938 211.949219 144.550781 211.878906 142.542969 211.710938 C 141.539062 211.625 140.601562 211.519531 139.800781 211.394531 C 139.402344 211.335938 139.03125 211.269531 138.714844 211.203125 C 138.546875 211.175781 138.40625 211.140625 138.265625 211.109375 C 138.214844 211.097656 138.246094 211.097656 138.246094 211.097656 C 138.253906 211.101562 138.257812 211.101562 138.253906 211.097656 L 138.253906 211.089844 C 138.246094 211.066406 138.261719 211.050781 138.265625 211.050781 L 138.269531 211.046875 C 138.269531 211.046875 138.269531 211.050781 138.269531 211.046875 L 138.261719 210.984375 L 138.25 210.855469 L 138.144531 209.851562 L 137.925781 207.835938 L 137.460938 203.804688 C 137.136719 201.121094 136.792969 198.433594 136.441406 195.75 C 135.261719 186.777344 134.324219 177.785156 133.007812 168.820312 C 131.808594 160.667969 131.148438 152.460938 130.160156 144.28125 C 129.695312 140.40625 129.316406 136.527344 129.011719 132.640625 C 128.859375 130.699219 128.726562 128.753906 128.625 126.8125 C 128.527344 124.867188 128.449219 122.925781 128.460938 120.984375 C 128.46875 120.371094 128.449219 119.753906 128.4375 119.136719 C 128.433594 118.519531 128.417969 117.898438 128.527344 117.273438 C 128.558594 117.070312 128.566406 116.847656 128.484375 116.632812 C 128.40625 116.410156 128.25 116.191406 127.886719 115.972656 C 127.554688 115.777344 127.308594 115.777344 127.125 115.914062 C 127.03125 115.980469 126.960938 116.058594 126.886719 116.1875 C 126.808594 116.316406 126.738281 116.464844 126.6875 116.578125 C 126.425781 117.128906 126.28125 117.574219 126.148438 118.023438 C 126.019531 118.464844 125.914062 118.894531 125.824219 119.320312 C 125.644531 120.167969 125.519531 121 125.421875 121.824219 C 125.226562 123.472656 125.140625 125.082031 125.097656 126.585938 C 125.019531 129.59375 125.117188 132.1875 125.066406 133.75 C 124.878906 140.378906 125.582031 146.949219 125.660156 153.546875 C 125.800781 164.96875 127.84375 176.226562 128.863281 187.554688 C 129.273438 193.011719 130.160156 198.421875 130.8125 203.855469 Z M 164.066406 138.433594 C 164.121094 135.613281 164.042969 132.792969 163.910156 129.964844 C 163.773438 127.136719 163.59375 124.3125 163.371094 121.429688 L 163.257812 120.082031 L 163.183594 119.398438 L 163.070312 118.4375 C 162.972656 117.703125 162.851562 116.964844 162.625 116.296875 C 162.515625 115.960938 162.371094 115.648438 162.199219 115.359375 C 162.113281 115.210938 162.003906 115.085938 161.894531 114.953125 C 161.84375 114.882812 161.769531 114.832031 161.730469 114.746094 C 161.667969 114.691406 161.605469 114.628906 161.539062 114.574219 C 161.203125 114.34375 160.875 114.121094 160.492188 113.964844 C 160.113281 113.804688 159.707031 113.675781 159.289062 113.574219 C 159.082031 113.523438 158.871094 113.476562 158.65625 113.4375 C 158.445312 113.394531 158.230469 113.355469 158.015625 113.324219 C 157.800781 113.292969 157.585938 113.257812 157.371094 113.230469 L 156.929688 113.179688 C 155.828125 113.0625 154.765625 112.996094 153.703125 112.945312 C 151.589844 112.851562 149.503906 112.839844 147.417969 112.875 C 143.253906 112.957031 139.113281 113.210938 134.960938 113.789062 C 134.101562 113.910156 133.246094 114.054688 132.386719 114.242188 C 131.527344 114.433594 130.671875 114.652344 129.777344 114.992188 C 129.535156 115.082031 129.230469 115.238281 129.019531 115.507812 C 128.808594 115.765625 128.679688 116.191406 128.9375 116.59375 C 129.074219 116.816406 129.222656 116.960938 129.332031 117.078125 C 129.386719 117.136719 129.433594 117.1875 129.472656 117.230469 C 129.519531 117.269531 129.5625 117.304688 129.601562 117.332031 C 129.769531 117.441406 129.957031 117.4375 130.140625 117.46875 C 130.441406 117.523438 131.546875 117.523438 133.183594 117.625 C 134.8125 117.722656 136.941406 117.890625 139.207031 118.101562 C 143.742188 118.519531 148.800781 119.125 151.628906 119.339844 C 152.882812 119.429688 154.125 119.53125 155.308594 119.664062 L 156.179688 119.769531 L 156.355469 119.796875 C 156.355469 119.796875 156.359375 119.789062 156.363281 119.789062 C 156.367188 119.785156 156.375 119.78125 156.382812 119.785156 C 156.386719 119.785156 156.390625 119.785156 156.394531 119.785156 C 156.394531 119.785156 156.398438 119.789062 156.402344 119.800781 L 156.40625 119.820312 L 156.425781 119.988281 C 156.53125 120.964844 156.613281 122 156.691406 123.039062 C 156.835938 125.125 156.953125 127.25 157.0625 129.378906 C 157.507812 138.589844 157.5 147.882812 157.914062 157.167969 C 158.285156 165.621094 158.09375 174.078125 158.324219 182.542969 C 158.53125 190.566406 158.5 198.585938 158.457031 206.601562 C 158.445312 207.875 158.589844 209.15625 158.664062 210.4375 C 158.675781 210.648438 158.746094 210.855469 158.917969 211.027344 C 159.089844 211.199219 159.355469 211.371094 159.777344 211.4375 C 160.164062 211.507812 160.378906 211.367188 160.488281 211.210938 C 160.601562 211.054688 160.625 210.851562 160.671875 210.675781 C 161.085938 209.039062 161.359375 207.414062 161.585938 205.777344 C 161.804688 204.144531 161.964844 202.527344 162.085938 201.007812 C 162.332031 197.972656 162.433594 195.328125 162.605469 193.742188 C 163.328125 187.015625 163.25 180.253906 163.839844 173.511719 C 164.847656 161.847656 164 150.140625 164.066406 138.433594 Z M 164.066406 138.433594 " })))));
};

var Icon$S = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z" })));
};

var Icon$T = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" })));
};

var Icon$U = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12.8533 3.39627C12.4634 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02256 10.1449 7.50213 11 8.28306 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 19.5C3 20.6046 3.89543 21.5 5 21.5H9C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 9 13.5H5C3.89543 13.5 3 14.3954 3 15.5V19.5ZM5 15.5H9V19.5H5V15.5Z" })));
};

var Icon$V = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M7.5 13C7.5 11.8954 8.39543 11 9.5 11H12.5C13.6046 11 14.5 11.8954 14.5 13V15C14.5 16.1046 13.6046 17 12.5 17H9.5C8.39543 17 7.5 16.1046 7.5 15V13Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.5 2C8.39543 2 7.5 2.89543 7.5 4V6.49482C7.5 6.93167 7.2113 7.30895 6.81834 7.49981C5.15004 8.31009 4 10.0207 4 12V17C4 19.2091 5.79086 21 8 21H14C16.2091 21 18 19.2091 18 17V12C18 11.4175 17.9004 10.8583 17.7173 10.3385L17.7892 10.297C19.4786 9.32167 20.0574 7.16153 19.082 5.47221C18.1552 3.86682 16.1534 3.25957 14.5 4.05146V4C14.5 2.89543 13.6046 2 12.5 2H9.5ZM9.5 6.25V4H12.5V6.25H9.5ZM9.22663 7.75C8.89473 8.46917 8.30318 9.00205 7.69211 9.29884C6.68638 9.78731 6 10.8154 6 12V17C6 18.1046 6.89543 19 8 19H14C15.1046 19 16 18.1046 16 17V12C16 10.8154 15.3136 9.78731 14.3079 9.29884C13.6968 9.00205 13.1053 8.46917 12.7734 7.75H9.22663ZM14.5 6.3226V6.49482C14.5 6.93167 14.7887 7.30895 15.1817 7.49981C15.7529 7.77726 16.2634 8.16029 16.6878 8.62352L16.7892 8.56495C17.522 8.1419 17.773 7.20495 17.35 6.47221C16.9346 5.75269 16.0213 5.49542 15.2914 5.89229L14.5 6.3226Z" })));
};

var Icon$W = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }),
        React.createElement("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }),
        React.createElement("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }),
        React.createElement("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }),
        React.createElement("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }),
        React.createElement("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }),
        React.createElement("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }),
        React.createElement("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" })));
};

var Icon$X = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 3C7.02985 3 3 7.02985 3 11.9904C3 16.9606 7.02985 21 12 21C16.9701 21 21 16.9606 21 11.9904C21 7.02985 16.9701 3 12 3ZM16.4328 8.65139C16.3753 9.48614 14.8305 15.7228 14.8305 15.7228C14.8305 15.7228 14.7345 16.0874 14.3987 16.097C14.2836 16.097 14.1301 16.0874 13.9574 15.9243C13.6023 15.6269 12.7964 15.0512 12.0384 14.5235C12.0096 14.5522 11.9808 14.581 11.9424 14.6098C11.7697 14.7633 11.5107 14.984 11.2324 15.2527C11.1269 15.3486 11.0117 15.4542 10.8966 15.5693L10.887 15.5789C10.8198 15.6461 10.7623 15.694 10.7143 15.7324C10.3401 16.0394 10.3017 15.7804 10.3017 15.6461L10.5032 13.4488V13.4296L10.5128 13.4104C10.5224 13.3817 10.5416 13.3721 10.5416 13.3721C10.5416 13.3721 14.4659 9.87953 14.5714 9.50533C14.581 9.48614 14.5522 9.46695 14.5043 9.48614C14.2452 9.57249 9.72601 12.4318 9.22708 12.7484C9.19829 12.7676 9.11194 12.758 9.11194 12.758L6.91471 12.0384C6.91471 12.0384 6.65565 11.9328 6.742 11.693C6.76119 11.645 6.78998 11.597 6.89552 11.5299C7.38486 11.1844 15.8955 8.12367 15.8955 8.12367C15.8955 8.12367 16.1354 8.04691 16.2793 8.09488C16.3465 8.12367 16.3849 8.15245 16.4232 8.2484C16.4328 8.28678 16.4424 8.36354 16.4424 8.44989C16.4424 8.49787 16.4328 8.55544 16.4328 8.65139Z" })));
};

var Icon$Y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.3137 3L15.2631 3.94934C14.5597 5.19866 14.7398 6.81097 15.8032 7.87441C16.8667 8.93786 18.479 9.11792 19.7283 8.4146L20.6777 9.36396L17.6569 12.3848L17.1287 11.8566C16.7382 11.4661 16.105 11.4661 15.7145 11.8566C15.3239 12.2471 15.3239 12.8803 15.7145 13.2708L16.2426 13.799L9.36396 20.6777L8.49923 19.8129C9.71921 18.5286 9.69924 16.4983 8.43932 15.2384C7.1794 13.9784 5.14908 13.9585 3.86473 15.1784L3 14.3137L9.87868 7.43503L10.2145 7.77081C10.605 8.16134 11.2382 8.16134 11.6287 7.77081C12.0192 7.38029 12.0192 6.74713 11.6287 6.3566L11.2929 6.02081L14.3137 3ZM12.8995 1.58579C13.6805 0.804738 14.9469 0.804738 15.7279 1.58579L17.299 3.15684C17.6895 3.54736 17.6895 4.18053 17.299 4.57105L17.2175 4.65257C16.7183 5.15173 16.7183 5.96103 17.2175 6.4602C17.7166 6.95936 18.5259 6.95936 19.0251 6.4602L19.1066 6.37868C19.4971 5.98816 20.1303 5.98816 20.5208 6.37868L22.0919 7.94975C22.8729 8.7308 22.8729 9.99713 22.0919 10.7782L10.7782 22.0919C9.99713 22.8729 8.7308 22.8729 7.94975 22.0919L6.37869 20.5208C5.98817 20.1303 5.98817 19.4971 6.37869 19.1066L7.02511 18.4602C7.52427 17.961 7.52427 17.1517 7.02511 16.6526C6.52594 16.1534 5.71664 16.1534 5.21748 16.6526L4.57106 17.299C4.18054 17.6895 3.54737 17.6895 3.15685 17.299L1.58579 15.7279C0.804738 14.9469 0.804738 13.6805 1.58579 12.8995L12.8995 1.58579ZM13.8787 8.6066C13.4882 8.21608 12.855 8.21608 12.4645 8.6066C12.0739 8.99712 12.0739 9.63029 12.4645 10.0208L13.4645 11.0208C13.855 11.4113 14.4882 11.4113 14.8787 11.0208C15.2692 10.6303 15.2692 9.99713 14.8787 9.6066L13.8787 8.6066Z" })));
};

var Icon$Z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$_ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" })));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FarmIcon: Icon$K,
    GroupsIcon: Icon$L,
    HamburgerIcon: Icon$M,
    HamburgerCloseIcon: Icon$N,
    HomeIcon: Icon$O,
    IfoIcon: Icon$P,
    InfoIcon: Icon$Q,
    LanguageIcon: Icon$R,
    LogoIcon: Logo,
    MoonIcon: Icon$S,
    MoreIcon: Icon$T,
    NftIcon: Icon$U,
    PoolIcon: Icon$V,
    SunIcon: Icon$W,
    TelegramIcon: Icon$X,
    TicketIcon: Icon$Y,
    TradeIcon: Icon$Z,
    TwitterIcon: Icon$_
});

var MenuButton = styled(Button)(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$x;

var StyledLink$1 = styled(Link$1)(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Logo$1 = function (_a) {
    var isPushed = _a.isPushed, togglePush = _a.togglePush, isDark = _a.isDark, href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React.createElement(React.Fragment, null,
        React.createElement(Icon$q, { className: "mobile-icon" }),
        React.createElement(Logo, { className: "desktop-icon", isDark: isDark })));
    return (React.createElement(Flex, null,
        React.createElement(MenuButton, { "aria-label": "Toggle menu", onClick: togglePush, mr: "24px" }, isPushed ? (React.createElement(Icon$N, { width: "24px", color: "textSubtle" })) : (React.createElement(Icon$M, { width: "24px", color: "textSubtle" }))),
        isAbsoluteUrl ? (React.createElement(StyledLink$1, { as: "a", href: href, "aria-label": "Pancake home page" }, innerLogo)) : (React.createElement(StyledLink$1, { to: href, "aria-label": "Pancake home page" }, innerLogo))));
};
var templateObject_1$y;

var links = [
    {
        label: "Home",
        icon: "HomeIcon",
        href: "/",
    },
    {
        label: "Trade",
        icon: "TradeIcon",
        items: [
            {
                label: "Exchange",
                href: "https://exchange.pancakeswap.finance",
            },
            {
                label: "Liquidity",
                href: "https://exchange.pancakeswap.finance/#/pool",
            },
        ],
    },
    {
        label: "Farms",
        icon: "FarmIcon",
        href: "/farms",
    },
    {
        label: "Pools",
        icon: "PoolIcon",
        href: "/syrup",
    },
    {
        label: "Lottery",
        icon: "TicketIcon",
        href: "/lottery",
    },
    {
        label: "NFT",
        icon: "NftIcon",
        href: "/nft",
    },
    {
        label: "Profile & Teams",
        icon: "GroupsIcon",
        items: [
            {
                label: "Leaderboard",
                href: "/",
            },
            {
                label: "YourProfile",
                href: "/",
            },
        ],
        calloutClass: "rainbow",
    },
    {
        label: "Info",
        icon: "InfoIcon",
        items: [
            {
                label: "Overview",
                href: "https://pancakeswap.info",
            },
            {
                label: "Tokens",
                href: "https://pancakeswap.info/tokens",
            },
            {
                label: "Pairs",
                href: "https://pancakeswap.info/pairs",
            },
            {
                label: "Accounts",
                href: "https://pancakeswap.info/accounts",
            },
        ],
    },
    {
        label: "IFO",
        icon: "IfoIcon",
        items: [
            {
                label: "Next",
                href: "/ifo",
            },
            {
                label: "History",
                href: "/ifo/history",
            },
        ],
    },
    {
        label: "More",
        icon: "MoreIcon",
        items: [
            {
                label: "Voting",
                href: "https://voting.pancakeswap.finance",
            },
            {
                label: "Github",
                href: "https://github.com/pancakeswap",
            },
            {
                label: "Docs",
                href: "https://docs.pancakeswap.finance",
            },
            {
                label: "Blog",
                href: "https://pancakeswap.medium.com",
            },
        ],
    },
];
var socials = [
    {
        label: "Telegram",
        icon: "TelegramIcon",
        items: [
            {
                label: "English",
                href: "https://t.me/pancakeswap",
            },
            {
                label: "Bahasa Indonesia",
                href: "https://t.me/PancakeSwapIndonesia",
            },
            {
                label: "中文",
                href: "https://t.me/PancakeSwap_CN",
            },
            {
                label: "Tiếng Việt",
                href: "https://t.me/PancakeSwapVN",
            },
            {
                label: "Italiano",
                href: "https://t.me/pancakeswap_ita",
            },
            {
                label: "русский",
                href: "https://t.me/pancakeswap_ru",
            },
            {
                label: "Türkiye",
                href: "https://t.me/pancakeswapturkiye",
            },
            {
                label: "Português",
                href: "https://t.me/PancakeSwapPortuguese",
            },
            {
                label: "Español",
                href: "https://t.me/PancakeswapEs",
            },
            {
                label: "日本語",
                href: "https://t.me/pancakeswapjp",
            },
            {
                label: "Français",
                href: "https://t.me/pancakeswapfr",
            },
            {
                label: "Announcements",
                href: "https://t.me/PancakeSwapAnn",
            },
            {
                label: "Whale Alert",
                href: "https://t.me/PancakeSwapWhales",
            },
        ],
    },
    {
        label: "Twitter",
        icon: "TwitterIcon",
        href: "https://twitter.com/pancakeswap",
    },
];
var MENU_HEIGHT = 64;
var MENU_ENTRY_HEIGHT = 48;
var SIDEBAR_WIDTH_FULL = 240;
var SIDEBAR_WIDTH_REDUCED = 56;

var rainbowAnimation = keyframes(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"], ["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"])));
var LinkLabel = styled.div(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"], ["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"])), function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme;
    return (isPushed ? theme.colors.textSubtle : "transparent");
});
var MenuEntry = styled.div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 200% 100%;\n    font-weight: bold;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 200% 100%;\n    font-weight: bold;\n  }\n"])), MENU_ENTRY_HEIGHT, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "0 32px" : "0 16px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "14px" : "16px");
}, function (_a) {
    var secondary = _a.secondary, theme = _a.theme;
    return (secondary ? theme.colors.background : "transparent");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return (isActive ? "inset 4px 0px 0px " + theme.colors.primary : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
}, rainbowAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.bubblegum;
});
MenuEntry.defaultProps = {
    secondary: false,
    isActive: false,
    role: "button",
};
var templateObject_1$z, templateObject_2$a, templateObject_3$6;

var Container$2 = styled.div(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"])));
var AccordionContent = styled.div(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"], ["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"])), function (_a) {
    var isOpen = _a.isOpen, maxHeight = _a.maxHeight;
    return (isOpen ? maxHeight + "px" : 0);
}, function (_a) {
    var isOpen = _a.isOpen, isPushed = _a.isPushed;
    return (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent");
});
var Accordion = function (_a) {
    var label = _a.label, icon = _a.icon, isPushed = _a.isPushed, pushNav = _a.pushNav, _b = _a.initialOpenState, initialOpenState = _b === void 0 ? false : _b, children = _a.children, className = _a.className;
    var _c = useState(initialOpenState), isOpen = _c[0], setIsOpen = _c[1];
    var handleClick = function () {
        if (isPushed) {
            setIsOpen(function (prevState) { return !prevState; });
        }
        else {
            pushNav(true);
            setIsOpen(true);
        }
    };
    return (React.createElement(Container$2, null,
        React.createElement(MenuEntry, { onClick: handleClick, className: className },
            icon,
            React.createElement(LinkLabel, { isPushed: isPushed }, label),
            isOpen ? React.createElement(Icon$8, null) : React.createElement(Icon$7, null)),
        React.createElement(AccordionContent, { isOpen: isOpen, isPushed: isPushed, maxHeight: React.Children.count(children) * MENU_ENTRY_HEIGHT }, children)));
};
var templateObject_1$A, templateObject_2$b;

var MenuLink = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : NavLink;
    var props = isHttpLink ? { href: href } : { to: href };
    return React.createElement(Tag, __assign({}, props, otherProps));
};

var Icons = IconModule;
var Container$3 = styled.div(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"])));
var PanelBody = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, isMobile = _a.isMobile, links = _a.links;
    var location = useLocation();
    // Close the menu when a user clicks a link on mobile
    var handleClick = isMobile ? function () { return pushNav(false); } : undefined;
    return (React.createElement(Container$3, null, links.map(function (entry) {
        var Icon = Icons[entry.icon];
        var iconElement = React.createElement(Icon, { width: "24px", mr: "8px" });
        var calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        if (entry.items) {
            var itemsMatchIndex = entry.items.findIndex(function (item) { return item.href === location.pathname; });
            var initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;
            return (React.createElement(Accordion, { key: entry.label, isPushed: isPushed, pushNav: pushNav, icon: iconElement, label: entry.label, initialOpenState: initialOpenState, className: calloutClass }, isPushed &&
                entry.items.map(function (item) { return (React.createElement(MenuEntry, { key: item.href, secondary: true, isActive: item.href === location.pathname, onClick: handleClick },
                    React.createElement(MenuLink, { href: item.href }, item.label))); })));
        }
        return (React.createElement(MenuEntry, { key: entry.label, isActive: entry.href === location.pathname, className: calloutClass },
            React.createElement(MenuLink, { href: entry.href, onClick: handleClick },
                iconElement,
                React.createElement(LinkLabel, { isPushed: isPushed }, entry.label))));
    })));
};
var templateObject_1$B;

var Icons$1 = IconModule;
var MoonIcon = Icons$1.MoonIcon, SunIcon = Icons$1.SunIcon, LanguageIcon = Icons$1.LanguageIcon;
var Container$4 = styled.div(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"], ["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var PriceLink = styled.a(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
var SettingsEntry = styled.div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"])), MENU_ENTRY_HEIGHT);
var SocialEntry = styled.div(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"])), MENU_ENTRY_HEIGHT);
var PanelFooter = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, toggleTheme = _a.toggleTheme, isDark = _a.isDark, cakePriceUsd = _a.cakePriceUsd, currentLang = _a.currentLang, langs = _a.langs, setLang = _a.setLang;
    if (!isPushed) {
        return (React.createElement(Container$4, null,
            React.createElement(IconButton, { variant: "text", onClick: function () { return pushNav(true); } },
                React.createElement(Icon$l, null))));
    }
    return (React.createElement(Container$4, null,
        React.createElement(SocialEntry, null,
            cakePriceUsd ? (React.createElement(PriceLink, { href: "https://pancakeswap.info/token/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82", target: "_blank" },
                React.createElement(Icon$w, { width: "24px", mr: "8px" }),
                React.createElement(Text, { color: "textSubtle", bold: true }, "$" + cakePriceUsd.toFixed(3)))) : (React.createElement(Skeleton, { width: 80, height: 24 })),
            React.createElement(Flex, null, socials.map(function (social, index) {
                var Icon = Icons$1[social.icon];
                var iconProps = { width: "24px", color: "textSubtle", style: { cursor: "pointer" } };
                var mr = index < socials.length - 1 ? "24px" : 0;
                if (social.items) {
                    return (React.createElement(Dropdown, { key: social.label, position: "top", target: React.createElement(Icon, __assign({}, iconProps, { mr: mr })) }, social.items.map(function (item) { return (React.createElement(Link, { external: true, key: item.label, href: item.href, "aria-label": item.label, color: "textSubtle" }, item.label)); })));
                }
                return (React.createElement(Link, { external: true, key: social.label, href: social.href, "aria-label": social.label, mr: mr },
                    React.createElement(Icon, __assign({}, iconProps))));
            }))),
        React.createElement(SettingsEntry, null,
            React.createElement(Button, { variant: "text", onClick: function () { return toggleTheme(!isDark); } },
                React.createElement(Flex, { alignItems: "center" },
                    React.createElement(SunIcon, { color: isDark ? "textDisabled" : "text", width: "24px" }),
                    React.createElement(Text, { color: "textDisabled", mx: "4px" }, "/"),
                    React.createElement(MoonIcon, { color: isDark ? "text" : "textDisabled", width: "24px" }))),
            React.createElement(Dropdown, { position: "top-right", target: React.createElement(Button, { variant: "text", startIcon: React.createElement(LanguageIcon, { color: "textSubtle", width: "24px" }) },
                    React.createElement(Text, { color: "textSubtle" }, currentLang === null || currentLang === void 0 ? void 0 : currentLang.toUpperCase())) }, langs.map(function (lang) { return (React.createElement(MenuButton, { key: lang.code, fullWidth: true, onClick: function () { return setLang(lang); }, 
                // Safari fix
                style: { minHeight: "32px", height: "auto" } }, lang.language)); })))));
};
var templateObject_1$C, templateObject_2$c, templateObject_3$7, templateObject_4$3;

var StyledPanel = styled.div(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"], ["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? "80px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL + "px" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "initial" : "hidden");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var Panel = function (props) {
    var isPushed = props.isPushed, showMenu = props.showMenu;
    return (React.createElement(StyledPanel, { isPushed: isPushed, showMenu: showMenu },
        React.createElement(PanelBody, __assign({}, props)),
        React.createElement(PanelFooter, __assign({}, props))));
};
var templateObject_1$D;

var Icon$$ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React.createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React.createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React.createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React.createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React.createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React.createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React.createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React.createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React.createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React.createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React.createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React.createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React.createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React.createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React.createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React.createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React.createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React.createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React.createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React.createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var Icon$10 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z", fill: "#1D222A" })));
};

var Icon$11 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { d: "M44.3288 35.3546V21.7134H19.0926C18.581 21.7134 18.24 22.0544 18.24 22.566V41.8342C18.24 42.3457 18.581 42.6867 19.0926 42.6867H28.8119V77.8129C28.8119 78.3244 29.153 78.6654 29.6645 78.6654H45.5224C46.0339 78.6654 46.375 78.3244 46.375 77.8129V35.3546H44.3288Z", fill: "#29AEFF" }),
        React.createElement("path", { d: "M61.8919 17.2798H55.7534H39.2134C38.7019 17.2798 38.3608 17.6208 38.3608 18.1324V73.3792C38.3608 73.8908 38.7019 74.2318 39.2134 74.2318H55.0713C55.5829 74.2318 55.9239 73.8908 55.9239 73.3792V59.397H62.0624C73.6575 59.397 83.0358 50.0187 83.0358 38.4237C83.0358 26.6581 73.487 17.2798 61.8919 17.2798Z", fill: "#2761E7" })));
};

var Icon$12 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("g", { clipPath: "url(#clip0)" },
            React.createElement("path", { d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z", fill: "#3375BB" }),
            React.createElement("path", { d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z", fill: "white" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("rect", { width: "96", height: "96", fill: "white" })))));
};

var Icon$13 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("path", { d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z", fill: "#3389FB" }),
        React.createElement("path", { d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z", fill: "white" })));
};

var Icon$14 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { d: "M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z", fill: "#1E2026" }),
        React.createElement("path", { d: "M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z", fill: "#F0B90B" })));
};

var connectors = [
    {
        title: "Metamask",
        icon: Icon$$,
        connectorId: "injected",
    },
    {
        title: "TrustWallet",
        icon: Icon$12,
        connectorId: "injected",
    },
    {
        title: "MathWallet",
        icon: Icon$10,
        connectorId: "injected",
    },
    {
        title: "TokenPocket",
        icon: Icon$11,
        connectorId: "injected",
    },
    {
        title: "WalletConnect",
        icon: Icon$13,
        connectorId: "walletconnect",
    },
    {
        title: "Binance Chain Wallet",
        icon: Icon$14,
        connectorId: "bsc",
    },
];
var localStorageKey = "accountStatus";

var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss, mb = _a.mb;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React.createElement(Button, { fullWidth: true, variant: "tertiary", onClick: function () {
            login(walletConfig.connectorId);
            window.localStorage.setItem(localStorageKey, "1");
            onDismiss();
        }, style: { justifyContent: "space-between" }, mb: mb, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React.createElement(Text, { bold: true, color: "primary", mr: "16px" }, title),
        React.createElement(Icon, { width: "32px" })));
};

var HelpLink = styled(Link)(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"])));
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React.createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss },
        connectors.map(function (entry, index) { return (React.createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss, mb: index < connectors.length - 1 ? "8px" : "0" })); }),
        React.createElement(HelpLink, { href: "https://docs.pancakeswap.finance/guides/faq#how-do-i-set-up-my-wallet-on-binance-smart-chain", external: true },
            React.createElement(Icon$o, { color: "primary", mr: "6px" }),
            "Learn how to connect")));
};
var templateObject_1$E;

var StyleButton = styled(Text).attrs({ role: "button" })(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled.div(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React.createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(toCopy);
                setIsTooltipDisplayed(true);
                setTimeout(function () {
                    setIsTooltipDisplayed(false);
                }, 1000);
            }
        } }, props),
        children,
        React.createElement(Icon$n, { width: "20px", color: "primary", ml: "4px" }),
        React.createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$F, templateObject_2$d;

var AccountModal = function (_a) {
    var account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React.createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React.createElement(Text, { fontSize: "20px", bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } }, account),
        React.createElement(Flex, { mb: "32px" },
            React.createElement(LinkExternal, { small: true, href: "https://bscscan.com/address/" + account, mr: "16px" }, "View on BscScan"),
            React.createElement(CopyToClipboard, { toCopy: account }, "Copy Address")),
        React.createElement(Flex, { justifyContent: "center" },
            React.createElement(Button, { size: "sm", variant: "secondary", onClick: function () {
                    logout();
                    window.localStorage.removeItem(localStorageKey);
                    onDismiss();
                    window.location.reload();
                } }, "Logout"))));
};

var useWalletModal = function (login, logout, account) {
    var onPresentConnectModal = useModal(React.createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React.createElement(AccountModal, { account: account || "", logout: logout }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var UserBlock = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout;
    var _b = useWalletModal(login, logout, account), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    var accountEllipsis = account ? account.substring(0, 4) + "..." + account.substring(account.length - 4) : null;
    return (React.createElement("div", null, account ? (React.createElement(Button, { size: "sm", variant: "tertiary", onClick: function () {
            onPresentAccountModal();
        } }, accountEllipsis)) : (React.createElement(Button, { size: "sm", onClick: function () {
            onPresentConnectModal();
        } }, "Connect"))));
};

var StyledAvatar = styled.div(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"], ["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"])));
var Pip = styled.div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var Avatar = function (_a) {
    var profile = _a.profile;
    var _b = profile.username, username = _b === void 0 ? "Bunny" : _b, image = profile.image, profileLink = profile.profileLink, noProfileLink = profile.noProfileLink, _c = profile.showPip, showPip = _c === void 0 ? false : _c;
    var link = profile.username ? profileLink : noProfileLink;
    var isExternal = link.startsWith("http");
    var ariaLabel = "Link to profile";
    var icon = image ? (React.createElement("img", { src: image, alt: "profile avatar", height: "32px", width: "32px" })) : (React.createElement(Icon$t, { width: "32px", height: "32px" }));
    if (isExternal) {
        return (React.createElement(StyledAvatar, { title: username },
            React.createElement("a", { href: link, "aria-label": ariaLabel }, icon),
            showPip && React.createElement(Pip, null)));
    }
    return (React.createElement(StyledAvatar, { title: username },
        React.createElement(Link$1, { to: link, "aria-label": ariaLabel }, icon),
        showPip && React.createElement(Pip, null)));
};
var templateObject_1$G, templateObject_2$e;

var Wrapper$1 = styled.div(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled.nav(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT + "px");
}, MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var BodyWrapper = styled.div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled.div(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"], ["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? MENU_HEIGHT + "px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
}, function (_a) {
    var isPushed = _a.isPushed;
    return "calc(100% - " + (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px)";
});
var MobileOnlyOverlay = styled(Overlay)(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Menu = function (_a) {
    var _b;
    var account = _a.account, login = _a.login, logout = _a.logout, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, cakePriceUsd = _a.cakePriceUsd, links = _a.links, profile = _a.profile, children = _a.children;
    var isXl = useMatchBreakpoints().isXl;
    var isMobile = isXl === false;
    var _c = useState(!isMobile), isPushed = _c[0], setIsPushed = _c[1];
    var _d = useState(true), showMenu = _d[0], setShowMenu = _d[1];
    var refPrevOffset = useRef(window.pageYOffset);
    useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current) {
                    // Has scroll up
                    setShowMenu(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle(handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    return (React.createElement(Wrapper$1, null,
        React.createElement(StyledNav, { showMenu: showMenu },
            React.createElement(Logo$1, { isPushed: isPushed, togglePush: function () { return setIsPushed(function (prevState) { return !prevState; }); }, isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
            React.createElement(Flex, null,
                React.createElement(UserBlock, { account: account, login: login, logout: logout }),
                profile && React.createElement(Avatar, { profile: profile }))),
        React.createElement(BodyWrapper, null,
            React.createElement(Panel, { isPushed: isPushed, isMobile: isMobile, showMenu: showMenu, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, cakePriceUsd: cakePriceUsd, pushNav: setIsPushed, links: links }),
            React.createElement(Inner, { isPushed: isPushed, showMenu: showMenu }, children),
            React.createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); }, role: "presentation" }))));
};
var templateObject_1$H, templateObject_2$f, templateObject_3$8, templateObject_4$4, templateObject_5$2;

var ToastAction = function (_a) {
    var action = _a.action;
    if (action.url.startsWith("http")) {
        return (React.createElement(Button, __assign({ as: "a", size: "sm", href: action.url }, getExternalLinkProps()), action.text));
    }
    return (React.createElement(Button, { as: Link$1, size: "sm", to: action.url }, action.text));
};

var types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
};

var _a$1;
var alertTypeMap = (_a$1 = {},
    _a$1[types.INFO] = variants$1.INFO,
    _a$1[types.SUCCESS] = variants$1.SUCCESS,
    _a$1[types.DANGER] = variants$1.DANGER,
    _a$1[types.WARNING] = variants$1.WARNING,
    _a$1);
var StyledToast = styled.div(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"], ["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Toast = function (_a) {
    var toast = _a.toast, onRemove = _a.onRemove, style = _a.style, ttl = _a.ttl, props = __rest(_a, ["toast", "onRemove", "style", "ttl"]);
    var timer = useRef();
    var ref = useRef(null);
    var removeHandler = useRef(onRemove);
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type, action = toast.action;
    var handleRemove = useCallback(function () { return removeHandler.current(id); }, [id, removeHandler]);
    var handleMouseEnter = function () {
        clearTimeout(timer.current);
    };
    var handleMouseLeave = function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
    };
    useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
        return function () {
            clearTimeout(timer.current);
        };
    }, [timer, ttl, handleRemove]);
    return (React.createElement(CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React.createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React.createElement(Alert, { title: title, variant: alertTypeMap[type], onClick: handleRemove }, action ? (React.createElement(React.Fragment, null,
                React.createElement(Text, { as: "p", mb: "8px" }, description),
                React.createElement(ToastAction, { action: action }))) : (description)))));
};
var templateObject_1$I;

var ZINDEX = 1000;
var TOP_POSITION = 80; // Initial position from the top
var StyledToastContainer = styled.div(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 24 : _c;
    return (React.createElement(StyledToastContainer, null,
        React.createElement(TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var top = TOP_POSITION + index * stackSpacing;
            return (React.createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, style: { top: top + "px", zIndex: zIndex } }));
        }))));
};
var templateObject_1$J;

var ResetCSS = createGlobalStyle(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1$K;

var baseColors = {
    failure: "#ED4B9E",
    primary: "#1F73BE",
    primaryBright: "#227dcf",
    primaryDark: "#11406a",
    secondary: "black",
    success: "#31D0AA",
    warning: "#FFB237",
};
var brandColors = {
    binance: "#F0B90B",
};
var lightColors = __assign(__assign(__assign({}, baseColors), brandColors), { background: "#FAF9FA", backgroundDisabled: "#E9EAEB", contrast: "#191326", invertedContrast: "#FFFFFF", input: "#eeeaf4", tertiary: "#d1e5f7", text: "#1F73BE", textDisabled: "#BDC2C4", textSubtle: "#1F73BE", borderColor: "black", card: "#FFFFFF", gradients: {
        bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    }, locked: '#E9EAEB' });
var darkColors = __assign(__assign(__assign({}, baseColors), brandColors), { secondary: "#9A6AFF", background: "#100C18", backgroundDisabled: "#3c3742", contrast: "#FFFFFF", invertedContrast: "#191326", input: "#483f5a", primaryDark: "#0098A1", tertiary: "#124068", text: "#1F73BE", textDisabled: "#BDC2C4", textSubtle: "#1F73BE", borderColor: "white", card: "#27262c", gradients: {
        bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    }, locked: "#3C3742" });

var light = {
    background: lightColors.card,
};
var dark = {
    background: darkColors.card,
};

var _a$2, _b;
var PRIMARY = variants.PRIMARY, SECONDARY = variants.SECONDARY, TERTIARY = variants.TERTIARY, TEXT = variants.TEXT, DANGER = variants.DANGER, SUBTLE = variants.SUBTLE, SUCCESS = variants.SUCCESS;
var light$1 = (_a$2 = {},
    _a$2[PRIMARY] = {
        background: lightColors.primary,
        backgroundActive: lightColors.primaryDark,
        backgroundHover: lightColors.primaryBright,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        boxShadowActive: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        color: "#FFFFFF",
    },
    _a$2[SECONDARY] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: "transparent",
        border: "2px solid " + lightColors.primary,
        borderColorHover: lightColors.primaryBright,
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[TERTIARY] = {
        background: lightColors.tertiary,
        backgroundActive: lightColors.tertiary,
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[TEXT] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[DANGER] = {
        background: lightColors.failure,
        backgroundActive: "#D43285",
        backgroundHover: "#FF65B8",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2[SUBTLE] = {
        background: lightColors.textSubtle,
        backgroundActive: lightColors.textSubtle + "D9",
        backgroundHover: lightColors.textSubtle + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2[SUCCESS] = {
        background: lightColors.success,
        backgroundActive: lightColors.success + "D9",
        backgroundHover: lightColors.success + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2);
var dark$1 = (_b = {},
    _b[PRIMARY] = __assign({}, light$1.primary),
    _b[SECONDARY] = __assign({}, light$1.secondary),
    _b[TERTIARY] = __assign(__assign({}, light$1.tertiary), { background: darkColors.tertiary, backgroundActive: darkColors.tertiary, backgroundHover: darkColors.tertiary, color: darkColors.primary }),
    _b[TEXT] = __assign(__assign({}, light$1.text), { backgroundHover: darkColors.tertiary }),
    _b[DANGER] = __assign({}, light$1.danger),
    _b[SUBTLE] = __assign({}, light$1.subtle),
    _b[SUCCESS] = __assign({}, light$1.success),
    _b);

var light$2 = {
    background: lightColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
};
var dark$2 = {
    background: darkColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
};

var light$3 = {
    handleBackground: lightColors.card,
};
var dark$3 = {
    handleBackground: darkColors.card,
};

var light$4 = {
    handleBackground: lightColors.card,
};
var dark$4 = {
    handleBackground: darkColors.card,
};

var light$5 = {
    background: lightColors.card,
    hover: "#EEEAF4",
};
var dark$5 = {
    background: darkColors.card,
    hover: "#473d5d",
};

var light$6 = {
    background: lightColors.card,
};
var dark$6 = {
    background: darkColors.card,
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark, button: dark$1, colors: darkColors, card: dark$2, toggle: dark$4, nav: dark$5, modal: dark$6, radio: dark$3 });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light, button: light$1, colors: lightColors, card: light$2, toggle: light$4, nav: light$5, modal: light$6, radio: light$3 });

export { Icon$4 as AddIcon, Alert, Icon$5 as ArrowBackIcon, Icon$6 as ArrowDownIcon, Icon$7 as ArrowDropDownIcon, Icon$8 as ArrowDropUpIcon, Icon$9 as ArrowForwardIcon, Icon$a as AutoRenewIcon, BackgroundImage, GridLayout as BaseLayout, Icon$b as BinanceIcon, Icon$2 as BlockIcon, Breadcrumbs, Icon$c as BunnyPlaceholderIcon, Button, ButtonMenu, ButtonMenuItem, Icon$e as CalculateIcon, Card, CardBody, CardFooter, CardHeader, CardRibbon, Icon$d as CardViewIcon, GridLayout$1 as CardsLayout, Checkbox, Icon as CheckmarkCircleIcon, Icon$f as CheckmarkIcon, Icon$g as ChevronDownIcon, Icon$h as ChevronLeftIcon, Icon$i as ChevronRightIcon, Icon$j as ChevronUpIcon, Icon$k as CloseIcon, Icon$l as CogIcon, Icon$m as CommunityIcon, Icon$n as CopyIcon, Dropdown, Icon$1 as ErrorIcon, Flex, Heading, Icon$o as HelpIcon, IconButton, Image, Icon$3 as InfoIcon, Input, Link, LinkExternal, Icon$p as ListViewIcon, Icon$q as LogoIcon, Icon$r as LogoRoundIcon, Menu, Icon$s as MinusIcon, Modal, ModalProvider, Icon$t as NoProfileAvatarIcon, Icon$u as OpenNewIcon, Icon$w as PancakeRoundIcon, Icon$v as PancakesIcon, Icon$x as PrizeIcon, Progress, Icon$A as ProgressBunny, Radio, Icon$y as RemoveIcon, ResetCSS, Icon$E as SearchIcon, Skeleton, Spinner, Svg, Icon$F as SwapVertIcon, Icon$G as SyncAltIcon, Tag, Text, Icon$C as Ticket, Icon$D as TicketRound, ToastContainer, Toggle, Icon$z as VerifiedIcon, Icon$H as WarningIcon, Icon$B as Won, variants$1 as alertVariants, byTextAscending, byTextDescending, darkTheme as dark, darkColors, lightTheme as light, lightColors, makeRender, links as menuConfig, types as toastTypes, useMatchBreakpoints, useModal, useParticleBurst, useTable, useWalletModal };
