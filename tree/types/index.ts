export interface Tree {
  value: string
  children?: Tree[]
}

export interface BinaryTree {
  value: string | number
  left: BinaryTree | null
  right: BinaryTree | null
}
