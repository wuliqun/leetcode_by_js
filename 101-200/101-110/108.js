/**
 * 108. 将有序数组转换为二叉搜索树
 *   将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
 *   本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 * 90.68% 77.31%
 */
let sortedArrayToBST = function(nums) {
  if(!nums.length) return null;
  let mid = nums.length >> 1;
  let head = new TreeNode(nums[mid]);
  head.left = sortedArrayToBST(nums.slice(0,mid));
  head.right = sortedArrayToBST(nums.slice(mid + 1));
  return head;
};