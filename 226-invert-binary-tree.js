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
 * @return {TreeNode}
 */
var invertTree = function(root) {
// as i traverse the tree, i am going to build a new tree
// as i visit each node i will collect the left & right values and assign them to the opposite


// if root has no value, return
// left = func(root.left)
// right = func(root.right)

// root.right = left
// root.left = right
// return root

  if (!root) {
    return null;
  }

  if (root.val === undefined) {
    return 0;
  }

  const left = invertTree(root.left);
  const right = invertTree(root.right);

  root.left = right;
  root.right = left;

  return root;
};
