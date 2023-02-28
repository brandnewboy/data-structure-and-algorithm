export const receiveMaxDepth = (arr: any): number => {
  let flag = false
  const num: number[] = []

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr)) {
      flag = true
      num.push(receiveMaxDepth(arr[i]))
    }
  }

  if (flag) {
    return Math.max.apply(null, num) + 1
  } else return 1
}

export const myFlatten = (arr: any) => {
  return Array.prototype.flat.apply(arr, [receiveMaxDepth(arr)])
}

const arr = [1, [1, 2], [88, [98, 56, [33, 36]]]]
console.log(myFlatten(arr))
