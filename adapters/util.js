module.exports = {
    isObject: (obj) => {
        return (obj instanceof Object) && !(Array.isArray(obj))
    },

    isString: (str) => {
        return (typeof str === 'string')
    },

    isUndefined: (thing) => {
        return (typeof thing === 'undefined')
    },

    isBlank: (obj) => {
        return (typeof obj === 'undefined') || (obj === null) || (obj === '')
    },
}
