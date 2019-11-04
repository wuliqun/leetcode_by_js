/**
 * 110. 平衡二叉树
 *    一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * 70.40% 65.35%
 */
let isBalanced = function(root) {
  if(!root) return true;
  if(Math.abs(depth(root.left) - depth(root.right)) > 1) return false;
  return isBalanced(root.left) && isBalanced(root.right);
};
function depth(root){
  if(!root) return 0;
  return Math.max(depth(root.left),depth(root.right)) + 1;
}