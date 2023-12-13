/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
  if(!root) return null;
  const left = root.left;
  root.left = mirrorTree(root.right);
  root.right = mirrorTree(left);
  return root;
};