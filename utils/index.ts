export const isAsyncFunction = (fn: any) => {
  return fn[Symbol.toStringTag] === 'AsyncFunction'
}

console.log(isAsyncFunction(() => {}))
console.log(isAsyncFunction(async () => {}))
