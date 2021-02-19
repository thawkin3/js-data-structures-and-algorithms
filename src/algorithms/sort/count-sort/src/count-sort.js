export const countSort = (arr, showLogs) => {
  showLogs && console.log(`starting array: ${arr.join(' ')}`)
  let maxEl = Math.max(...arr)
  let countArr = Array.from({ length: maxEl + 1 }, () => 0)

  // Adding 1 to each index value of count arr
  for (let i = 0; i < arr.length; i++) {
    countArr[arr[i]] += 1
  }

  for (let i = 0; i < countArr.length - 1; i++) {
    countArr[i + 1] += countArr[i]
  }
  countArr.pop()
  countArr.unshift(0)
  let result = []
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
    result[countArr[num]] = num
    countArr[num]++
  }
  return result
}
