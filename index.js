Array.prototype.includes = Array.prototype.includes || function (searchElement, fromIndex) {
    if (!this) {
        throw new TypeError('Array.prototype.includes called on null or undefined');
    }
    if (fromIndex === undefined){
        let i = this.length;
        while (i--) {
            if (this[i] === searchElement) {
                return true;
            }
        }
    } else {
        let i = fromIndex, len = this.length;
        while (i++ !== len) {
            if (this[i] === searchElement) {
                return true;
            }
        }
    }
    return false;
};
