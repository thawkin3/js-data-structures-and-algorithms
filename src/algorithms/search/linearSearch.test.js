import linearSearch from './linearSearch';

describe('linearSearch', () => {
    it('returns the index when it finds an element that exists in the array', () => {
        const testArray = [1, 3, 8, 5, 9, 10, 12];
        expect(linearSearch(testArray, 8)).toBe(2);
    });

    it('returns the first index when it finds an element that exists in the array multiple times', () => {
        const testArray = ['c', 'b', 'd', 'c'];
        expect(linearSearch(testArray, 'c')).toBe(0);
    });

    it('returns -1 when it does not find the element it is looking for', () => {
        const testArray = [1, 3, 8, 5, 9, 10, 12];
        expect(linearSearch(testArray, 999)).toBe(-1);
    });
});
