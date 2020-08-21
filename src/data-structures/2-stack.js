import LinkedList from './1-linked-list'

class Node {
    constructor(value) {
        this.value = value
        this.next = false
    }
}

/**
 * @description Stack is an extension of LinkedList Data Structures with
 * Add to the end of the stack: aka push
 * Remove last element from the stack: aka pop
 */
class Stack extends LinkedList {

    constructor() {
        super();
    }
}

export default Stack