import { LinkedList } from './linked-list';

describe('LinkedList', () => {
    it('can be instantiated with the `new` keyword', () => {
        expect(() => new LinkedList()).not.toThrow();
    });

    it('can return a null head pointer', () => {
        const linkedList1 = new LinkedList();
        expect(linkedList1.head).toBe(null);
    });

    it('can have new items added to the beginning of it', () => {
        const linkedList1 = new LinkedList();
        expect(linkedList1.size).toEqual(0);
        expect(() => linkedList1.insertAtBeginning(42)).not.toThrow();
        expect(linkedList1.size).toEqual(1);
        expect(() => linkedList1.insertAtBeginning(100)).not.toThrow();
        expect(linkedList1.size).toEqual(2);
    });

    it('can have new items added to the end of it', () => {
        const linkedList1 = new LinkedList();
        expect(linkedList1.size).toEqual(0);
        expect(() => linkedList1.insertAtEnd(42)).not.toThrow();
        expect(linkedList1.size).toEqual(1);
        expect(() => linkedList1.insertAtEnd(100)).not.toThrow();
        expect(linkedList1.size).toEqual(2);
  });
});
