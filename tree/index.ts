import { Tree, BinaryTree } from './types'

export const tree: Tree = {
  value: 'a',
  children: [
    {
      value: 'b',
      children: [
        {
          value: 'd'
        },
        {
          value: 'e'
        }
      ]
    },
    {
      value: 'c',
      children: [
        {
          value: 'f'
        },
        {
          value: 'g'
        }
      ]
    }
  ]
}

export const binaryTree: BinaryTree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: null
    },
    right: {
      value: 5,
      left: null,
      right: null
    }
  },

  right: {
    value: 3,
    left: {
      value: 6,
      left: null,
      right: null
    },
    right: {
      value: 7,
      left: null,
      right: null
    }
  }
}

/**
 * 深度优先搜索 {
 * 1.访问根节点
 * 2.对该根节点的children依次进行深度优先搜索
 * }
 * @param root 根节点
 * @param fn 遍历访问时需要执行的操作
 */
export const dfs = (root: Tree, fn?: (root?: Tree) => void) => {
  fn?.(root)
  root.children?.forEach(child => dfs(child, fn))
}

/**
 * 广度优先搜索 {
 * 1.新建一个队列
 * 2.把对头出队并访问
 * 3.把对头的children依次入队
 * 4.重复二、三步直到队列为空
 * }
 * @param root 根节点
 * @param fn 遍历访问时需要执行的操作
 */
export const bfs = (root: Tree, fn?: (node?: Tree) => void) => {
  const q: Tree[] = [root]

  while (q.length > 0) {
    const qHead = q.shift()

    fn?.(qHead)

    qHead?.children?.forEach(node => {
      q.push(node)
    })
  }
}

/**
 * 二叉树的先序遍历 {
 * 1.先访问当前根节点
 * 2.遍历左节点
 * 3.遍历右节点
 * }
 * @param bt 二叉树
 * @param fn 遍历每个节点是想要执行的操作
 */
export const preorder = (
  bt: BinaryTree | null,
  fn?: (node: BinaryTree | null) => void
) => {
  if (!bt) return
  fn?.(bt)
  preorder(bt.left, fn)
  preorder(bt.right, fn)
}

/**
 * 非递归版本先序遍历
 * @param root 根节点
 */
export const preorderNoRecursion = (
  root: BinaryTree,
  fn?: (node?: BinaryTree) => void
) => {
  const stack: BinaryTree[] = [root]

  while (stack.length) {
    const node = stack.pop()
    fn?.(node)
    if (node?.right) stack.push(node.right)
    if (node?.left) stack.push(node.left)
  }
}

/**
 * 二叉树的中序遍历 {
 * 1.先遍历左节点
 * 2.访问当前根节点
 * 3.遍历右节点
 * }
 * @param bt 二叉树
 * @param fn 遍历每个节点时想要执行的操作
 */
export const infixOrder = (
  bt: BinaryTree | null,
  fn?: (node: BinaryTree | null) => void
) => {
  if (!bt) return
  preorder(bt.left, fn)
  fn?.(bt)
  preorder(bt.right, fn)
}

// 非递归版本
export const inorderNoRecursion = (
  root: BinaryTree,
  fn?: (node: BinaryTree | null) => void
) => {
  const stack: BinaryTree[] = []

  let p = root

  while (p || stack.length) {
    while (p) {
      stack.push(p)
      p = p.left!
    }
    const currentNode = stack.pop()
    if (currentNode) fn?.(currentNode)
    p = currentNode?.right!
  }
}

/**
 * 二叉树的中序遍历 {
 * 1.先遍历左节点
 * 2.遍历右节点
 * 3.访问当前根节点
 * }
 * @param bt 二叉树
 * @param fn 遍历每个节点是想要执行的操作
 */
export const postorder = (
  bt: BinaryTree | null,
  fn?: (node: BinaryTree | null) => void
) => {
  if (!bt) return
  preorder(bt.left, fn)
  preorder(bt.right, fn)
  fn?.(bt)
}

/**
 * 非递归版本后序遍历
 * @param root 根节点
 */
export const postorderNoRecursion = (
  root: BinaryTree,
  fn?: (node?: BinaryTree) => void
) => {
  const stack: BinaryTree[] = [root]
  const outputStack: BinaryTree[] = []

  while (stack.length) {
    const node = stack.pop()
    if (node) outputStack.push(node)
    if (node?.left) stack.push(node.left)
    if (node?.right) stack.push(node.right)
  }

  while (outputStack.length) {
    const node = outputStack.pop()
    fn?.(node)
  }
}
