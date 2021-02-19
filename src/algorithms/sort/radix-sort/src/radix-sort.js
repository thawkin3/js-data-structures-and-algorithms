export const radixSort = (arr, showLogs) => {
  showLogs && console.log(`starting array: ${arr.join(' ')}`)
  // Finding the maximum number in the given array.
  let totalRounds = Math.max(...arr)

  // Finding the length of the maximum number in the array.
  let length = totalRounds.toString().length

  // Sorting the array using radix-sort.

  let result = helper(arr, length)
  return result
}

const helper = (arr, totalRounds, roundsDone = 0) => {
  // Coming out of the recursion when we have completed sorting the entire array.
  if (totalRounds === roundsDone) return arr
  // Creating an array of length 10  ================> [[],[],[],[],[],[],[],[],[],[]];
  let tempArr = Array.from({ length: 10 }, () => [])
  for (let i = 0; i < arr.length; i++) {
    let index = getDigit(arr[i], roundsDone)
    // Pushing the element in the respective bucket....
    tempArr[index].push(arr[i])
  }
  return helper([].concat(...tempArr), totalRounds, roundsDone + 1)
}

// Getting the digit at index i so the we can place it in the respective bucket
const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}
