class No<T> {

  get value() {
    return this._value
  }

  get next() { 
    return this._next
  }

  set next(next: No<T> | null) {
    this._next = next
  }

  constructor(
    private _value: T,
    private _next: No<T> | null = null
  ) { }
}

const equalsFn = <T>(a: No<T>, b: No<T>) => {
  return a === b
}

export class LinkedList <T> {
  private count: number
  private head: No<T> | null

  constructor() {
    this.count = 0
    this.head = null
  }

  push = (data: T) => {
    const node = new No(data)
    if(this.head === null) {
      this.head = node
    } else {
      let current: No<T> | null = this.head
      while(current?.next !== null) {
        current = (current as No<T>).next
      }
      current.next = node
    }
    this.count++
  }

  insert = () => {
    throw new Error('not implemented')
  }

  getElementAt = () => {
    throw new Error('not implemented')
  }

  remove = (element: No<T>) => {
    throw new Error('not implemented')
  }

  indexOf = (element: No<T>) => {
    throw new Error('not implemented')
  }

  removeAt = (position: Number) => {
    throw new Error('not implemented')
  }

  isEmpty = () => {
    throw new Error('not implemented')
  }

  size = () => {
    return this.count
  }

  toString = () => {
    throw new Error('not implemented')
  }
}