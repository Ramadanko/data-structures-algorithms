import LinkedList from './1-linked-list'

class Node {
    constructor(value) {
        this.value = value
        this.next = false
    }
}

/**
 * @description Queue is an extension of LinkedList Data Structures with
 * Add element to the end of the queue: aka enqueue
 * Remove first element from the stack: aka dequeue
 */
class Queue extends LinkedList {

    constructor() {
        super()
    }

    /**
     * @description push is simplified if we keep track of tail, otherwise we have to loop through all nodes to push an item
     * @param {Node} value
     * O(1)
     */
    enqueue(value) {
        this.push(value)
    }

    /**
     * @description
     */
    dequeue() {
        if (!this.head) return null;
        let top
        if (!this.head.next) {
            top = this.head
            this.head = false
            this.tail = false
        } else {
            top = this.head
            this.head = top.next
        }
        this.length--
        return top.value;
    }

    peek() {
        return this.head.value
    }
}

export default Queue