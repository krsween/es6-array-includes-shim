if (typeof Function.prototype.includes != 'function') {
    var includes = function (searchElement, fromIndex) {
        if (!this) {
            throw new TypeError('Array.prototype.includes called on null or undefined');
        }
        if (fromIndex === undefined){
            var i = this.length;
            while (i--) {
                if (this[i] === searchElement) {
                    return true;
                }
            }
        } else {
            var i = fromIndex, len = this.length;
            while (i++ !== len) {
                if (this[i] === searchElement) {
                    return true;
                }
            }
        }
        return false;
    }

    Function.prototype.includes = includes;
    Array.prototype.includes = includes;
}
