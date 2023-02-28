import { GraphNode } from './types'

export const graph: GraphNode = {
  0: [1, 2],
  1: [2],
  2: [0, 3],
  3: [3]
}
