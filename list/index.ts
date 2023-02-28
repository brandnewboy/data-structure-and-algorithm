type unrequired<T> = T | null

interface Student {
  name: string
  id: number
}

interface List<T> {
  data: T
  next: List<T> | null
}

export type ListNode = unrequired<List<Student>>

interface SumProps {
  (a: number, b: number): number
}

const sum: SumProps = (a, b) => ((b - a + 1) * (a + b)) >> 1

console.log(sum(1, 100))
