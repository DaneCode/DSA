type Node<T> = {
  value: T
  next?: Node<T>
}
export default class Queue<T> {
  public length: number
  private head?: Node<T>
  private tail?: Node<T>

  constructor() {
    // Initialize the queue
    this.head = this.tail = undefined
    this.length = 0
  }
  enqueue(item: T): void {
    // Add an item to the end of the queue
    const node = { value: item } as Node<T>
    this.length++
    if (!this.tail) {
      this.head = this.tail = node
    }
    this.tail.next = node
    this.tail = node
  }
  dequeue(): T | undefined {
    // Remove and return the first item in the queue
    if (!this.head) {
      return undefined
    }
    this.length--
    const head = this.head
    this.head = this.head.next
    //manually remove the reference to the next node
    head.next = undefined
    if (this.length === 0) {
      this.tail = undefined
    }
    return head.value
  }
  peek(): T | undefined {
    // Return the first item in the queue without removing it
    return this.head?.value
  }
}
