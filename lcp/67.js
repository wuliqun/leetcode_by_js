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
var expandBinaryTree = function(root) {
  if(!root) return null;
  const left = root.left;
  const right = root.right;
  if(left){
    root.left = new TreeNode(-1, expandBinaryTree(left));
  }

  if(right){
    root.right = new TreeNode(-1, null, expandBinaryTree(right));
  }

  return root;
};