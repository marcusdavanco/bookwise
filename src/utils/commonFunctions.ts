export function findMostRecurringElements(arr: string[]): string {
  const counts: { [key: string]: number } = {}
  let maxCount = 0
  const mostRecurring: string[] = []

  arr.forEach((element) => {
    counts[element] = (counts[element] || 0) + 1
    if (counts[element] > maxCount) {
      maxCount = counts[element]
      mostRecurring.length = 0
      mostRecurring.push(element)
    } else if (counts[element] === maxCount) {
      mostRecurring.push(element)
    }
  })

  return mostRecurring.join(', ')
}
