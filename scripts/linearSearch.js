// Linear Search
const linearSearch = (haystack, needle, showLogs) => {
	for (let i = 0; i < haystack.length; i++) {
		if (needle === haystack[i]) {
			return i;
		}
	}
	return -1;
}

const linearSearchTest1 = [1, 3, 8, 5, 9, 10, 12];
const linearSearchTest2 = ['c', 'b', 'd', 'c'];

console.log(linearSearch(linearSearchTest1, 8))
console.log(linearSearch(linearSearchTest1, 100))
console.log(linearSearch(linearSearchTest2, 'c'))
console.log(linearSearch(linearSearchTest2, 'a'))
