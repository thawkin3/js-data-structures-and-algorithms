/**
 * Insertion Sort
 *
 * Inserts each element into its correct place in the array, one element at a time
 * Loops through the array for every element
 *
 * Everything to the left of the current item is known to be sorted
 * Everything to the right of the current item is unsorted
 * Not appropriate for large unsorted data sets
 *
 * Best case performance: Ω(n) (only one element is out of place, so only one iteration through the array)
 * Average case performance: 0(n^2) (array is mostly unsorted, have to do a loop nested within a loop)
 * Worst case performance: O(n^2) (array is entirely unsorted, have to do a loop nested within a loop)
 *
 * Space required: O(n) (because it operates directly on the input array)
 */

export const insertionSort = (arr, showLogs) => {
  let sortedArr = [...arr]

  /* istanbul ignore next */
  showLogs && console.log(`starting array: ${sortedArr.join(' ')}`)

  for (let i = 1; i < sortedArr.length; i++) {
    const valueToInsert = sortedArr.splice(i, 1)[0]
    let didInsertValue = false
    for (let j = i; j >= 1; j--) {
      /* istanbul ignore next */
      showLogs &&
        console.log(`  comparing ${valueToInsert} with ${sortedArr[j - 1]}`)

      if (valueToInsert > sortedArr[j - 1]) {
        /* istanbul ignore next */
        showLogs &&
          console.log(
            `    inserting ${valueToInsert} after ${sortedArr[j - 1]}`
          )
        sortedArr = [
          ...sortedArr.slice(0, j),
          valueToInsert,
          ...sortedArr.slice(j),
        ]
        didInsertValue = true
        break
      }
    }
    if (!didInsertValue) {
      /* istanbul ignore next */
      showLogs && console.log(`    inserting ${valueToInsert} at first index`)
      sortedArr = [valueToInsert, ...sortedArr]
    }

    /* istanbul ignore next */
    showLogs && console.log(`iteration ${i + 1}: array: ${sortedArr.join(' ')}`)
  }

  return sortedArr
}
