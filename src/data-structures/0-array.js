/**
 * array index is descriptive of where to get/add/modify the thing you're looking for
 * array pros --> o(1) for get
 * array cons --> o(n) for add/delete because we have to shift everything
 */
class ArrayList {

    constructor() {
        this.length = 0;
        this.data = {};
    }

    /**
     * @description push a new element to the end of the array
     * @param {*} value 
     */
    push(value) {
        this.data[this.length] = value
        this.length++;
    }

    /**
     * @description return last element from array and remove it
     * O(1)
     */
    pop() {
        return this.delete(this.length - 1)
    }

    /**
     * @description return element at specific index
     * @param {Number} index 
     * O(1)
     */
    get(index) {
        return this.data[index]
    }

    /**
     * @description delete element at specific index
     * @param {Number} index 
     */
    delete(index) {
        const item = this.data[index]
        this._collapseTo(index)
        return item
    }

    /**
     * @description rearrange/shift array elements by one index after delete operation
     * @param {Number} index 
     * this is the expensive operation: O(n)
     */
    _collapseTo(index) {
        for (let i = index; i < this.length; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--
    }

    serialize() {
        return this.data
    }
}
export default ArrayList;