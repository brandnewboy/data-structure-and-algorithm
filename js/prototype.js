Function.prototype.a = () => {
  console.log(1)
}

Object.prototype.b = () => {
  console.log(2)
}

function A() {}
const a = new A()

// a.a() // A.prototype -> Object.prototype -> is not a function
a.b() // A.prototype -> Object.prototype -> Object.prototype.b
A.a() // Function.prototype -> Function.prototype.a
A.b() // Function.prototype -> Object.prototype -> Object.prototype.b
