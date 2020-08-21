import Stack from './2-stack'

describe('Stack Data Structure Tests: ', function () {
    const range = length => Array.apply(null, { length }).map((item, index) => index)
    const abcRange = length => range(length).map(num => String.fromCharCode(97 + num));
    let stack

    beforeEach(() => {
        stack = new Stack()
    })

    it('push', () => {
        stack.push('first')
        expect(stack.length).toEqual(1)
        range(5).map(item => stack.push(item))
        expect(stack.length).toEqual(6)
    })

    it('pop', () => {
        abcRange(26).map(item => stack.push(item))
        expect(stack.length).toEqual(26)
        let lastItem = stack.pop()
        expect(lastItem).toEqual('z')
        expect(stack.length).toEqual(25)
    })
})