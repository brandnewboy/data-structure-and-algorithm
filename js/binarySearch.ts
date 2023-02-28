export const binarySearch = (arr: number[], target: number): number => {
  let low = 0
  let hight = arr.length - 1
  let mid = 0

  while (low <= hight) {
    mid = Math.floor((low + hight) / 2)
    if (target < arr[mid]) {
      hight = mid - 1
    } else if (target > arr[mid]) {
      low = mid + 1
    } else {
      return mid
    }
  }

  return -1
}
