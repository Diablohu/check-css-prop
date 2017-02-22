(function (name, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory()
    } else {
        window[name] = factory();
    }
})('check-css-prop', function () {

    "use strict";

    return function (propName) {
        if (typeof window === 'undefined') return propName

        if (!window.elementForCheck) window.elementForCheck = document.createElement('a')

        propName = propName.replace(/\-(.){1}/g, function (letter) {
            return letter.substr(1).toUpperCase()
        })

        if (typeof window.elementForCheck.style[propName] !== 'undefined')
            return propName

        const prefixes = [
            'webkit',
            'moz',
            'ms',
            'o'
        ]
        let result = ''

        if (typeof window.elementForCheck.style[propName] !== 'undefined')
            return propName

        prefixes.some(function (prefix) {
            let vendorCheck = prefix + propName
            if (typeof window.elementForCheck.style[vendorCheck] !== 'undefined') {
                result = vendorCheck
                return vendorCheck
            }
        })

        return result
    };
})