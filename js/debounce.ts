export const debounce = <T extends Function = any>(
  fn: T,
  delay: number = 0
) => {
  let timer: number | null

  return function (this: any, ...args: any[]) {
    if (timer) clearTimeout(timer)

    const context = this
    timer = setTimeout(() => {
      fn.apply(context, args)
      timer = null
    }, delay)
  }
}
