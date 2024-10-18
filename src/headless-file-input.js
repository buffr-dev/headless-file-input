"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeadlessFileInput = void 0;
var React = require("react");
var react_1 = require("react");
var inputStyle = {
    position: "absolute",
    left: 0,
    top: 0,
    display: "none",
    height: "100%",
    width: "100%",
};
var labelStyle = {
    position: "relative",
};
var defaultInputName = "file-input";
exports.HeadlessFileInput = (0, react_1.forwardRef)(function (props, ref) {
    var inputName = props.inputName || defaultInputName;
    return (React.createElement("label", { htmlFor: inputName, style: labelStyle, onDrop: props.onDrop, onDragOver: props.onDragOver },
        props.children,
        React.createElement("input", { ref: ref, accept: props.accept, multiple: props.multiple, disabled: props.disabled, onChange: props.onChange, type: "file", name: inputName, style: inputStyle, id: inputName })));
});
