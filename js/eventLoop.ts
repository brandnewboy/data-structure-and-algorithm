new Promise<void>(function (resolve, reject) {
  // console.log(1)
  setTimeout(() => {
    console.log(1)
  }, 100)
  resolve()
})
  .then(function () {
    console.log(2)
  })
  .then(function () {
    console.log(3)
  })

setTimeout(function () {
  console.log(4)
}, 0)

new Promise<void>(function (resolve, reject) {
  console.log(5)
  resolve()
}).then(function () {
  console.log(6)
})

console.log(7)

// 5 7 2 6 3 1 4
