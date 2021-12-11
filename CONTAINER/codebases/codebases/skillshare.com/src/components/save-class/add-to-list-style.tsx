var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { listStyle } from '../../themes/forms';
import { color, typography } from '../../themes/utils';
export var AddToListStyle = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", ";\n\n    &.add-to-list {\n        min-width: 260px;\n    }\n\n    .filter-title {\n        font-size: 12px;\n        padding: 16px 16px 0 16px;\n    }\n\n    .list-wrapper {\n        list-style: none;\n        margin: 0;\n        max-height: 150px;\n        overflow: auto;\n        padding: 0;\n\n        ", "\n\n        &-container {\n            padding-left: 8px;\n            padding-right: 4px;\n        }\n\n        &::-webkit-scrollbar-thumb {\n            background-color: ", ";\n            background-clip: padding-box;\n            border-radius: 4px;\n        }\n\n        &::-webkit-scrollbar {\n            background-color: ", ";\n            border: none;\n            width: 4px;\n        }\n\n        &::-webkit-scrollbar-track {\n            background-color: ", ";\n        }\n\n        .list-item {\n            & > div {\n                border-radius: 0;\n                font-weight: normal;\n            }\n\n            .check,\n            &:hover div.check {\n                background-color: ", ";\n            }\n        }\n\n        .list-break {\n            border-top: 1px solid ", ";\n            margin: 4px 8px;\n            height: 0;\n        }\n    }\n\n    .list-filter {\n        margin-bottom: 0;\n    }\n\n    .create-playlist {\n        padding: 16px;\n        text-align: right;\n\n        span {\n            color: ", ";\n            cursor: pointer;\n            font-size: ", ";\n            font-weight: bold;\n\n            &:hover {\n                text-decoration: underline;\n            }\n        }\n    }\n\n    .create-list-form {\n        padding: 0 16px 16px 16px;\n\n        .nav {\n            margin-top: 16px;\n            text-align: right;\n\n            .back-link {\n                color: ", ";\n                cursor: pointer;\n                font-size: ", ";\n                margin-right: 16px;\n                text-decoration: underline;\n            }\n        }\n    }\n\n    .check > div {\n        height: auto;\n    }\n\n    hr {\n        border: none;\n        border-top: 1px solid ", ";\n        margin: 0 16px;\n    }\n"], ["\n    ", ";\n\n    &.add-to-list {\n        min-width: 260px;\n    }\n\n    .filter-title {\n        font-size: 12px;\n        padding: 16px 16px 0 16px;\n    }\n\n    .list-wrapper {\n        list-style: none;\n        margin: 0;\n        max-height: 150px;\n        overflow: auto;\n        padding: 0;\n\n        ", "\n\n        &-container {\n            padding-left: 8px;\n            padding-right: 4px;\n        }\n\n        &::-webkit-scrollbar-thumb {\n            background-color: ", ";\n            background-clip: padding-box;\n            border-radius: 4px;\n        }\n\n        &::-webkit-scrollbar {\n            background-color: ", ";\n            border: none;\n            width: 4px;\n        }\n\n        &::-webkit-scrollbar-track {\n            background-color: ", ";\n        }\n\n        .list-item {\n            & > div {\n                border-radius: 0;\n                font-weight: normal;\n            }\n\n            .check,\n            &:hover div.check {\n                background-color: ", ";\n            }\n        }\n\n        .list-break {\n            border-top: 1px solid ", ";\n            margin: 4px 8px;\n            height: 0;\n        }\n    }\n\n    .list-filter {\n        margin-bottom: 0;\n    }\n\n    .create-playlist {\n        padding: 16px;\n        text-align: right;\n\n        span {\n            color: ", ";\n            cursor: pointer;\n            font-size: ", ";\n            font-weight: bold;\n\n            &:hover {\n                text-decoration: underline;\n            }\n        }\n    }\n\n    .create-list-form {\n        padding: 0 16px 16px 16px;\n\n        .nav {\n            margin-top: 16px;\n            text-align: right;\n\n            .back-link {\n                color: ", ";\n                cursor: pointer;\n                font-size: ", ";\n                margin-right: 16px;\n                text-decoration: underline;\n            }\n        }\n    }\n\n    .check > div {\n        height: auto;\n    }\n\n    hr {\n        border: none;\n        border-top: 1px solid ", ";\n        margin: 0 16px;\n    }\n"])), typography(function (t) { return t.normal; }), listStyle, color(function (c) { return c.charcoal; }), color(function (c) { return c.white; }), color(function (c) { return c.white; }), color(function (c) { return c.blue; }), color(function (c) { return c.navy; }), color(function (c) { return c.violet; }), typography(function (t) { return t.links.nav.small; }), color(function (c) { return c.black; }), typography(function (t) { return t.links.nav.small; }), color(function (c) { return c.navy; }));
var templateObject_1;
//# sourceMappingURL=add-to-list-style.js.map