// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedListHelper(thisNode, nextNode) {


	// compare thisNode's value to nextNode's value
	// if the same,
	  // call helper for thisNode and the node after nextNode
	// if different,
	  // set thisNode's next to nextNode
		// call helper with nextNode and nextNode's next

	// if thisNode is null then do nothing else
	if (thisNode === null) {
		return;
	}

	// if nextNode is null then its the end, so set thisNode's as tail
	if (nextNode === null) {
		thisNode.next = null;
		return;
	}

	// otherwise compare thisNode and nextNode's values
	if (thisNode.value === nextNode.value) {
		removeDuplicatesFromLinkedListHelper(thisNode, nextNode.next);
	} else {
		thisNode.next = nextNode;
		removeDuplicatesFromLinkedListHelper(nextNode, nextNode?.next || null);
	}
}

function removeDuplicatesFromLinkedList(linkedList) {
  // traverse linked list node looking for duplicates when
	// linked list is sorted

	// i: linked list, sorted with duplicates
	// o: linked list, sorted with no duplicates
	// c: none
	// e: head is null

	// remember last node
	// visit nodes on at a time
	  // if node is duplicate, skip
	  // if node is not duplicate,
			// set last node's next to this node
			// set last node to this node

	removeDuplicatesFromLinkedListHelper(linkedList, linkedList.next);

  return linkedList;
}
// O(n) time, O(1) space;
