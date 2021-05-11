function removeDuplicatesFromLinkedListHelper(thisNode, nextNode) {
  if (thisNode === null) {
    return;
  }

  if (nextNode === null) {
    thisNode.next = null;
    return;
  }

  if (thisNode.value === nextNode.value) {
    removeDuplicatesFromLinkedListHelper(thisNode, nextNode.next);
  } else {
    thisNode.next = nextNode;
    removeDuplicatesFromLinkedListHelper(nextNode, nextNode?.next || null);
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // traverse a sorted linked list, removing duplicate values from list

	// i: linked list, sorted with duplicates
	// o: linked list, sorted with no duplicates
	// c: none
	// e: head is null
	removeDuplicatesFromLinkedListHelper(linkedList, linkedList.next);

  return linkedList;
}
// O(n) time, O(1) space;
