export const mergeSort = (target: number[]) => {
  const rec = (arr: number[]) => {
    if (arr.length <= 1) return arr
    const mid = Math.floor(arr.length / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid, arr.length)
    const leftArr: number[] = rec(left)
    const rightArr: number[] = rec(right)

    const res = []
    while (leftArr.length || rightArr.length) {
      if (leftArr.length && rightArr.length) {
        res.push(
          leftArr[0] > rightArr[0] ? rightArr.shift()! : leftArr.shift()!
        )
      } else if (leftArr.length) {
        res.push(leftArr.shift()!)
      } else if (rightArr.length) {
        res.push(rightArr.shift()!)
      }
    }
    return res
  }

  const res = rec(target)
  return res
}

const arr = [27, 48, 30, 24, 6, 33, 47, 38, 4, 29, 3, 15]
console.log(mergeSort(arr))
