/**
 * 二分搜索的数组必须是有序的
 */
export const binarySearch = (source: number[], target: number) => {
  let low = 0
  let high = source.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const element = source[mid]

    if (element > target) {
      high = mid - 1
    } else if (element < target) {
      low = mid + 1
    } else if (element === target) {
      return mid
    }
  }

  return -1
}

const arr = [3, 4, 6, 15, 24, 27, 29, 30, 33, 38, 47, 48]

console.log(binarySearch(arr, 29))
