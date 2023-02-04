import { LinkedList } from './linked-list'

describe('Linked List', () => {
  test('should by pass push element', () => {
    const sut = new LinkedList<Number>()
    
    const elements = [2,4,6,8]
    elements.forEach(e => sut.push(e))
    expect(sut.size()).toEqual(4)
  });
});