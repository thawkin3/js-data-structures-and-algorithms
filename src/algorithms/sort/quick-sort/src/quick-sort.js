// Quick Sort

// Pick a pivot value and partition the array
// Put all values smaller than the pivot to the left and all values larger
// than the pivot to the right
// Then continue to perform the pivot and partition algorithm on the left
// and right partitions, and repeat until it’s all sorted

// Not appropriate for large inverse-sorted data sets
// You are doing recursion, so be aware that it puts a new function call
// on the stack the deeper you go

// Worst case performance: Ω(n^2)
// Average case performance: 0(n log n)
// Best case performance: O(n log n)

// Space required: O(n) (because it operates directly on the input array)

export const quickSort = (arr, showLogs) => {
  // TODO: implement quick sort
}
