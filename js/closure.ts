/**
 * 函数作为返回值
 */
function create() {
  const a = 100
  return function () {
    console.log(a)
  }
}
const a = 200
const fn = create()
fn()

/**
 * 函数作为参数传递
 */

const b = 100
function foo() {
  console.log(b)
}

function print<T extends (...args: any[]) => any>(fn: T) {
  const b = 200
  fn()
}

print(fn)

/**
 * 闭包：自由变量的查找，是在函数定义的地方，向上级作用域查找
 * 不是在函数执行的地方！！！
 */
