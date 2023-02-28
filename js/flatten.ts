export const flatten = <T>(arr: any): T[] => {
  let res: T[] = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(flatten<T>(arr[i]))
    } else {
      res.push(arr[i])
    }
  }
  return res
}

const arr = [1, [1, 2], [88, [98, 56, [33, 36]]]]
console.log(flatten<number>(arr))
