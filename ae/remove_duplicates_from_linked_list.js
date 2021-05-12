function removeDuplicatesFromLinkedList(linkedList) {
  let currentNode = linkedList;

	while(currentNode !== null) {
		let nextDistinctNode = currentNode.next;

		while(nextDistinctNode?.value === currentNode.value) {
			nextDistinctNode = nextDistinctNode.next;
		}

		currentNode.next = nextDistinctNode;
		currentNode = nextDistinctNode;
	}

  return linkedList;
}
// O(n) time, O(1) space;
