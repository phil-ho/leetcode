/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

function zipSortedNodes(node1, node2) {
  if (!node1 && !node2) {
    return null;
  } else if (!node1) {
    return node2;
  } else if (!node2) {
    return node1;
  }

  let result;

  if (node1.val === node2.val) {
    let nextNode1 = node1.next;
    let nextNode2 = node2.next;

    node1.next = node2;
    node2.next = zipSortedNodes(nextNode1, nextNode2);
    result = node1;
  } else if (node1.val < node2.val) {
    node1.next = zipSortedNodes(node1.next, node2);
    result = node1;
  } else {
    node2.next = zipSortedNodes(node1, node2.next);
    result = node2;
  }

  return result;
}


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  return zipSortedNodes(l1, l2);
};

module.exports = mergeTwoLists;