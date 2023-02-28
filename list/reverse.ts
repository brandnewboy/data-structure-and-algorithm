import { ListNode } from './index'

const a: ListNode = {
  data: {
    name: '张利',
    id: 1
  },

  next: null
}

const b: ListNode = {
  data: {
    name: '方新贤',
    id: 2
  },

  next: null
}

const c: ListNode = {
  data: {
    name: '王波',
    id: 3
  },

  next: null
}

a.next = b
b.next = c

const reverse = (list: ListNode): void => {
  let p1: ListNode = null
  let p2: ListNode = list

  while (!!p2) {
    const tempVal = !p2.next ? null : { ...p2.next }
    p2.next = p1
    console.log('tempVal', tempVal)
    console.log('--')
    console.log('p2.next', p2.next)
    console.log('--')
    p1 = p2
    p2 = tempVal
  }
}

const printList = () => {
  let p = c
  while (!!p) {
    console.log(p.data.name, p.data.id)
    p = p.next!
  }
}

// printList()
reverse(a)
console.log('==============================')

printList()
console.log(c)
console.log(b)
console.log(a)
