// Binary Search
// Only can be used for sorted arrays
// Best case: 0(1) (the element you're looking for is located at the array's midpoint)
// Worst case: 0(log n) (the element is located near the beginning or end of the array)

const binarySearch = (haystack, needle, showLogs) => {
    let searchableHaystack = [...haystack];
    let i = 1;
    let fullHaystackMidpointIndex = 0;

    while (searchableHaystack.length > 0) {
        const midpointIndex = Math.floor(searchableHaystack.length / 2);
        fullHaystackMidpointIndex += midpointIndex;
        showLogs && console.log(`iteration ${i}: midpoint index: ${fullHaystackMidpointIndex}; array to search: ${searchableHaystack.join(', ')}; ${needle} === ${searchableHaystack[midpointIndex]} ? ... ${needle === searchableHaystack[midpointIndex]}!`);

        if (searchableHaystack[midpointIndex] === needle) {
            return fullHaystackMidpointIndex;
        } else if (searchableHaystack[midpointIndex] > needle) {
            fullHaystackMidpointIndex -= midpointIndex;
            searchableHaystack = searchableHaystack.slice(0, midpointIndex);
        } else {
            fullHaystackMidpointIndex += 1;
            searchableHaystack = searchableHaystack.slice(midpointIndex + 1);
        }

        i++;
    }
    return -1;
}

export default binarySearch;

// const binarySearchTest1 = [1, 3, 5, 8, 9, 10, 12];
// const binarySearchTest2 = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];

// console.log(binarySearch(binarySearchTest1, 10, true));
// console.log(binarySearch(binarySearchTest1, 999, true));
// console.log(binarySearch(binarySearchTest2, 14, true));
// console.log(binarySearch(binarySearchTest2, 0, true));
// console.log(binarySearch(binarySearchTest2, 22, true));
// console.log(binarySearch(binarySearchTest2, 999, true));
