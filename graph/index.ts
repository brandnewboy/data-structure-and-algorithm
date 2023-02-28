import { graph } from './example'

const dfsVisited = new Set<number>()
export const dfs = (node: number) => {
  console.log(node)
  dfsVisited.add(node)

  graph[node].forEach(n => {
    if (!dfsVisited.has(n)) {
      dfs(n)
    }
  })
}

const bfsVisited = new Set<number>()
export const bfs = (node: number) => {
  const stack = [node]
  bfsVisited.add(node)

  while (stack.length > 0) {
    const currentNode = stack.shift()
    console.log(currentNode)
    graph[currentNode!].forEach(n => {
      if (!bfsVisited.has(n)) {
        stack.push(n)
        bfsVisited.add(n)
      }
    })
  }
}

export const graphExample = graph
