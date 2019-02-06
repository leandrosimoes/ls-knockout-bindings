# ls-knockout-bindings
Some simple but useful [Knockoutjs](https://knockoutjs.com) binding handlers

## Binding Handlers

`onpresskey` - Execute some action on press a key of your choice

```javascript
const viewModel = {
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
const viewModel = {
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
const viewModel = {
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

`forIn` - Iterate over object keys

```javascript
const viewModel = {
    myObject: {
        Key1: "Value1",
        Key2: "Value2"
    }
}
```

```html
<!-- 
    The output will be:
    <div>
        <b>Key1</b> <span>Value1</span>
        <b>Key2</b> <span>Value2</span>
    </div>
-->
<div data-bind="forIn: myObject">
    <b data-bind="text: key"></b> <span data-bind="text: value"></span>
</div>
```

----------

`dispatchClickAfterCount` - Dispatch a event after click in element the amount of times of your choice

```javascript
const viewModel = {
    dispatchClickAfterCountOptions: {
        count: 15, // will trigger callback after click 15 times
        clearDelay: 1000, // will clear the counter after 1 second
        callback: () => { // do whatever you want }
    }
}
```

```html
<div data-bind="dispatchClickAfterCount: dispatchClickAfterCountOptions">
    ...
</div>
```

----------