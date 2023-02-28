function makeGood(s: string): string {
  const stack: string[] = []

  for (let c of s) {
    if (stack.length === 0) {
      stack.push(c)
      continue
    }
    let tc = stack[stack.length - 1]

    if (
      c.charCodeAt(0) !== tc.charCodeAt(0) &&
      Math.abs(c.charCodeAt(0) - tc.charCodeAt(0)) === 32
    ) {
      stack.pop()
    } else {
      stack.push(c)
    }
  }

  return stack.join('')
}

let str = 'abBAcC'

console.log(makeGood(str))
