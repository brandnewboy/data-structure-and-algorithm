export const quickSort = (target: number[]) => {
  const rec = (arr: number[]): number[] => {
    if (arr.length <= 1) return arr
    const left: number[] = []
    const right: number[] = []
    const base = arr[0]

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < base) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    const orderLeft = rec(left)
    const orderRight = rec(right)
    return [...orderLeft, base, ...orderRight]
  }

  return rec(target)
}

const arr = [27, 48, 30, 24, 6, 33, 47, 38, 4, 29, 3, 15, 14]
console.log(quickSort(arr))
