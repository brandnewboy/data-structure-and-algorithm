export const throttle = <T extends Function = any>(
  fn: T,
  delay: number = 0
) => {
  let timer: number | null

  return function (this: any, ...args: any[]) {
    const context = this

    if (timer) return
    else {
      timer = setTimeout(() => {
        fn.apply(context, args)
        timer = null
      }, delay)
    }
  }
}
