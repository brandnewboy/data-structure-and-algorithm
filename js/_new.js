const _new = (constructor, ...args) => {
  const obj = Object.create(constructor.prototype)

  const res = constructor.apply(obj, args)

  return res instanceof Object ? res : obj
}

function Person(name, age, sex) {
  this.name = name
  this.age = age
  this.sex = sex
}

const p = _new(Person, '张三', 18, '男')

console.log(p)
