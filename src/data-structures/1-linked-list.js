class Node {
    constructor(value) {
        this.value = value
        this.next = false
    }
}

class LinkedList {

    constructor() {
        this.length = 0
        this.head = this.tail = false
    }

    /**
     * @description push is simplified if we keep track of tail, otherwise we have to loop through all nodes to push an item
     * @param {Node} value
     * O(1)
     */
    push(value) {
        const node = new Node(value)
        this.length++
        if (!this.head) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
        }
        this.tail = node
    }

    /**
     * @description remove last item from list
     * O(n)
     */
    pop() {
        if (!this.head) return null;
        if (this.head === this.tail) {
            this.length--
            const node = this.head
            this.head = this.tail = false
            return node.value
        }
        this.length--
        const lastItem = this.tail
        let current = this.head
        let previous = false
        // shifting
        while (current.next && current.value !== lastItem.value) {
            previous = current
            current = current.next
        }
        // now current == tail & prev == item before tail
        previous.next = false
        this.tail = previous
        return lastItem.value
    }

    _find(index, test = this._test) {
        let i = 0
        let current = this.head
        while (current) {
            if (index === i) return current
            i++
            current = current.next
        }
        return false
    }

    /**
     * @description get node on specified index
     * @param {Number} index
     * O(n) worst case
     */
    get(index) {
        if (!this.head) return null;
        if (index === 0) return this.head.value
        if (index === this.length) return this.tail.value;
        const node = this._find(index);
        //console.log('get function', node.value)
        if (node) {
            return node.value
        }
        return false
    }

    delete(index) {
        if (index === 0) {
            const head = this.head;
            if (head) {
                this.head = head.next;
            } else {
                this.head = false
            }
            this.length--;
            return head.value;
        }
        const previousNode = this._find(index - 1)
        if (previousNode && !previousNode.next) return false// if index is not exist, delete nothing

        const targetNode = previousNode.next
        previousNode.next = targetNode.next
        if (!previousNode.next.next)
            this.tail = previousNode.next
        this.length--
        return targetNode.value
    }

    printAll() {
        if (!this.head) console.log('LinkedList is empty')
        let current = this.head
        while (current.next) {
            console.log(current.value)
            current = current.next
        }
        console.log(current.value)
    }

}

export default LinkedList