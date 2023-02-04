import { LinkedList } from './linked-list'

describe('Linked List', () => {
  test('push()', () => {
    const sut = new LinkedList<Number>()
    
    const elements = [2,4,6,8]
    elements.forEach(e => sut.push(e))
    expect(sut.size()).toEqual(4)
  })

  test('remove at index 0', () => {
    const indexesToRemove = [0, 1, 2, 3]
    
    indexesToRemove.forEach(indexToRemove => {
      const sut = new LinkedList<Number>()
      const elements = [2,4,6,8]
      elements.forEach(e => sut.push(e))
  
      sut.removeAt(indexToRemove)
      expect(sut.size()).toEqual(3)
    })
  })

  test('getElementAt()', () => {
    const sut = new LinkedList<Number>()
    const elements = [2,4,6,8]
    elements.forEach(e => sut.push(e))

    const element = sut.getElementAt(1)

    expect(element?.value).toEqual(4)
  });
})