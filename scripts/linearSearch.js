// Linear Search
// Best case: 0(1) (the element you're looking for is the first in the array)
// Worst case: 0(n) (the element you're looking for is the last in the array or not in the array at all)

const linearSearch = (haystack, needle, showLogs) => {
    for (let i = 0; i < haystack.length; i++) {
        showLogs && console.log(`iteration ${i + 1}: ${needle} === ${haystack[i]} ? ... ${needle === haystack[i]}!`);
        if (needle === haystack[i]) {
            return i;
        }
    }
    return -1;
}

const linearSearchTest1 = [1, 3, 8, 5, 9, 10, 12];
const linearSearchTest2 = ['c', 'b', 'd', 'c'];

console.log(linearSearch(linearSearchTest1, 8, true))
console.log(linearSearch(linearSearchTest1, 100, true))
console.log(linearSearch(linearSearchTest2, 'c', true))
console.log(linearSearch(linearSearchTest2, 'a', true))
