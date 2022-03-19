/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {

  // create []

  // push this value

  // if left
    // go left
      // concat what this returns

  // if right
    // go right
      // concat what this returns

  // return array
  return root ? inOrderTraverse(root) : [];
};

function inOrderTraverse(node) {

  let result = [];

  if (!node) {
    return result;
  }

  result = result.concat(inOrderTraverse(node.left));

  result.push(node.val);

  result = result.concat(inOrderTraverse(node.right));

  return result;
}

let root = {
  val: 1,
  right: {
    val: 2,
    left: {
      val: 3
    }
  }
};

let result = inorderTraversal(root)
console.log(result);

result = inorderTraversal()
console.log(result);

result = inorderTraversal({val: 1})
console.log(result);