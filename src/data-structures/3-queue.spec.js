import Queue from './3-queue'

describe('Queue Data Structures Test: ', () => {
    let range = length => Array.call(null, { length }).map((item, index) => index)
    let abcRange = length => range(length).map(num => String.fromCharCode(97 + num))
    let queue;

    beforeEach(() => {
        queue = new Queue()
    })

    it('peek', () => {
        queue.enqueue('first')
        let firstItem = queue.peek();
        expect(firstItem).toEqual('first')
        expect(queue.length).toEqual(1)
    })

    it('dequeue', () => {
        queue.enqueue('first')
        expect(queue.length).toEqual(1)
        let firstItem = queue.dequeue()
        expect(firstItem).toEqual('first')
        console.log(queue.length)
        expect(queue.length).toEqual(0)
    })
})