export class MinHeap {
  constructor(private heap: number[] = []) {}

  private swap(i1: number, i2: number) {
    const temp = this.heap[i1]
    this.heap[i1] = this.heap[i2]
    this.heap[i2] = temp
  }

  private shiftUp(index: number) {
    if (index === 0) return
    const parentIndex = this.getParentIndex(index)
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index)
      this.shiftUp(parentIndex)
    }
  }

  private shiftDown(index: number) {
    const [leftIndex, rightIndex] = this.getChildrenIndex(index)
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index)
      this.shiftDown(leftIndex)
    }

    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index)
      this.shiftDown(rightIndex)
    }
  }

  public getParentIndex(i: number) {
    return (i - 1) >> 1
  }

  public getChildrenIndex(i: number) {
    return [i * 2 + 1, i * 2 + 2] as const
  }

  public insert(value: number) {
    this.heap.push(value)
    this.shiftUp(this.heap.length - 1)
  }

  public pop() {
    const res = this.heap[0]
    if (this.heap.length === 0) return undefined
    this.heap[0] = this.heap.pop()!
    this.shiftDown(0)
    return res
  }

  public size() {
    return this.heap.length
  }
}
