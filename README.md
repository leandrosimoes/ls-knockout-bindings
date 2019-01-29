# ls-knockout-bindings
Some simple but useful [Knockoutjs](https://knockoutjs.com) binding handlers

## Binding Handlers

`onpresskey` - Execute some action on press a key of your choice

```javascript
cosnt viewModel = {
    onPressKeyOptions: {
        key: 'ENTER',
        action: (value, event) => {
            // ... do anything you want
        },
        blurWhenPressed: false
    }
}
```

```html
<input type="text" data-bind="onpresskey: onPressKeyOptions">
```

----------

`range` - Limit a number input to a range of your choice

```html
<input type="number" data-bind="range: { min: 1, max: 5 }">
```

----------

`hidden` - Knockoutjs has a `visible` binding. This is just a better way to negate that.

```javascript
cosnt viewModel = {
    HasToHideThis: ko.observable(true)
}
```

```html
<div data-bind="hidden: HasToHideThis"></div>
```

----------

`limitedInput` - Limit a input to accept just some keys and values based on a regex

```html
// For example, this input will accept just numbers
<input type="text" data-bind="limitedInput: '[0-9]'">
```

----------

`delayChangeInputCallback` - Setup a callback with delay on input value change

```javascript
cosnt viewModel = {
    delayChangeInputCallbackOptions: {
        delay: 1000, // miliseconds
        callback: value => { // do whatever you want with the value }
    }
}
```

```html
<input type="text" data-bind="delayChangeInputCallback: delayChangeInputCallbackOptions">
```

----------
