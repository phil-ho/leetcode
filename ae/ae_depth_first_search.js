class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
		array.push(this.name);
		this.children.forEach((node) => node.depthFirstSearch(array));

		return array;
  }
}
// O(nodes + edges) Time, O(nodes) space
