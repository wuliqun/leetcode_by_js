/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var deduceTree = function(preorder, inorder) {
  if(!preorder.length) return null;
  const root = new TreeNode(preorder[0]);
  const index = inorder.indexOf(preorder[0]);
  root.left = deduceTree(preorder.slice(1, index + 1), inorder.slice(0, index));
  root.right = deduceTree(preorder.slice(index + 1), inorder.slice(index + 1));

  return root;
};