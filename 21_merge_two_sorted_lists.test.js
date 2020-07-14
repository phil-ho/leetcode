const mergeTwoLists = require ('./21_merge_two_sorted_lists');

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}


// 1 > 2 > 4
const l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

// 1 > 3 > 4
const l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new  ListNode(4);

// 1->1->2->3->4->4
const expectedList = new ListNode(1);
expectedList.next = new ListNode(1);
expectedList.next.next = new ListNode(2);
expectedList.next.next.next = new ListNode(3);
expectedList.next.next.next.next = new ListNode(4);
expectedList.next.next.next.next.next = new ListNode(4);


const l3 = new ListNode(2);
const l4 = new ListNode(1);
const l3_4 = new ListNode(1);
l3_4.next = new ListNode(2);

test('merge two sorted lists', () => {
  expect(mergeTwoLists(l1, l2)).toEqual(expectedList);
  expect(mergeTwoLists(l3, l4)).toEqual(l3_4);
  expect(mergeTwoLists(l3, null)).toEqual(l3);
});