import {
  dfs,
  bfs,
  preorder,
  preorderNoRecursion,
  infixOrder,
  inorderNoRecursion,
  postorder,
  tree,
  binaryTree
} from './tree'

import { dfs as graphDfs, graphExample, bfs as graphBfs } from './graph'
import { MinHeap } from './heap'
// console.log('深度优先遍历')
// dfs(tree, root => {
//   console.log(root?.value)
// })

// console.log('广度优先遍历')
// bfs(tree, node => {
//   console.log(node?.value)
// })

// console.log('先序遍历')
// preorder(binaryTree, node => {
//   console.log(node?.value)
// })
// console.log('先序遍历---------非递归')
// preorderNoRecursion(binaryTree, node => {
//   console.log(node?.value)
// })

// console.log('中序遍历')
// infixOrder(binaryTree, node => {
//   console.log(node?.value)
// })
// console.log('中序遍历------------非递归')
// inorderNoRecursion(binaryTree)

// console.log('后序遍历')
// postorder(binaryTree, node => {
//   console.log(node?.value)
// })

// graphDfs(2)
// graphBfs(2)

const h = new MinHeap()

h.insert(3)
h.insert(2)
h.insert(1)
console.log(h)

console.log(h.pop())

console.log(h)
