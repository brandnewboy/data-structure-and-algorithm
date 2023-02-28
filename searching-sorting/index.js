Array.prototype.myBubbleSort = function (callback) {
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j <= this.length - 1 - i; j++) {
      const res = callback(this[j], this[j + 1])
      console.log(res)
      if (res > 0) {
        const temp = this[j]
        this[j] = this[j + 1]
        this[j + 1] = temp
      }
    }
  }

  return this
}

const arr = [1, 2, 3, 4, 5]
console.log(arr.myBubbleSort((x, y) => y - x))
