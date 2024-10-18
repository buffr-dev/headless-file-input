This headless component is an ultra-lightweight wrapper around HTML input to make styling a custom input a bit more user friendly.

Intended to be used with `@buffr-dev/next` - coming soon!

## Install
```
npm install @buffr-dev/headless-file-input
```

## HeadlessFileInput

`HeadlessFileInput` accepts the following props that are propagated to its children in a pragmatic way:
- `accept`: Mime type of what file-types are accepted, default: `*`
- `disabled`: Do not allow user interaction, default: `false`
- `inputName`: the name of the HTML element, default: `file-input`
- `multiple`: Allow the user to select multiple files from the dialog, default: `false`
- `onDrop`: Respond to drop event. Handled by useFileUploader.
- `onDragOver`: Respond to dragover event. Handled by useFileUploader.
- `onChange`: vanilla input onChange handler. Handled by useFileUploader.
- `ref`: a React ref to the raw HTML input element. Handled by useFileUploader.

For a more thorough example, please see `@buffr-dev/example`.