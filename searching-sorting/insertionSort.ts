export const insertionSort = (arr: number[]) => {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i]
    let j
    for (j = i; j > 0; j--) {
      if (arr[j - 1] > temp) {
        arr[j] = arr[j - 1]
      } else {
        break
      }
    }
    arr[j] = temp
  }

  return arr
}

const arr = [15, 17, 32, 12, 35, 43, 50, 30, 14, 20, 43, 30]
console.log(insertionSort(arr))
