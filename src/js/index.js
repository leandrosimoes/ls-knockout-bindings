;
(() => {
    if (!ko)  throw new Error("Knockoutjs was not found. Please, see how to get it here: https://knockoutjs.com/downloads")

    ko.bindingHandlers.onpresskey = {
        init: (element, value, allbindings) => {
            let { key = 'ENTER', action, blurWhenPressed = false } = ko.toJS(value())

            if (typeof action !== 'function') throw new Error('Action must be a function');

            element.addEventListener('keyup', event => {
                if ((event.key || '').toUpperCase() === key) {
                    action(ko.unwrap(allbindings().value), event)
                    !!blurWhenPressed && event.currentTarget.blur()
                }
            })
        }
    }

    ko.bindingHandlers.range = {
        init: (element, model, allbindings) => {
            let { min = 0, max = 100 } = model()
            let { value } = allbindings()

            if (!value) return

            value.subscribe(v => {
                if (isNaN(v) || parseInt(v) < min) {
                    value(min);
                } else if (parseInt(v) > max) {
                    value(max);
                }
            })

        }
    }
    
    ko.bindingHandlers.hidden = {
        update: (element, valueAccessor) => {
            ko.bindingHandlers.visible.update(element, () => !ko.utils.unwrapObservable(valueAccessor()));
        }
    };

    ko.bindingHandlers.validateBy = {
        init: (element, valueAccessor) => {
            let validationRegex = ko.utils.unwrapObservable(valueAccessor());

            if (!validationRegex) throw new Error('invalid regex')

            validationRegex = new RegExp(validationRegex, 'i');
            
            element.addEventListener('keypress', event => !!(event.key || '').match(validationRegex))
        }
    };

    let _delayChangeInputCallback_timeout;
    ko.bindingHandlers.delayChangeInputCallback = {
        init: (element, valueAccessor) => {
            const { delay = 1000, callback } = valueAccessor();

            element.addEventListener('keyup', event => {
                clearTimeout(_delayChangeInputCallback_timeout)
                _delayChangeInputCallback_timeout = setTimeout(() => {
                    !!callback && callback(event.target.value || '')
                }, delay);
            })
        }
    }
})()