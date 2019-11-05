/**
 * 124. 二叉树的最大路径和
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
 * @return {number}
 * 76.00% 15.38%
 */

let maxPathSum = function (root) {
  if (!root) return 0;
  let max = -Infinity;
  path(root);
  if (max <= 0) return max;
  return getMaxPath(root);
  // 填充最大路径
  function path(root) {
    if (!root) return 0;
    if (root.val > max) max = root.val;
    root.path = Math.max(root.val + path(root.left), root.val + path(root.right), 0);
    return root.path;
  }
};

function getMaxPath(root) {
  if (!root) return 0;
  let maxLeft = root.left ? root.left.path : 0;
  let maxRight = root.right ? root.right.path : 0;
  return Math.max(root.val + maxLeft + maxRight, getMaxPath(root.left), getMaxPath(root.right));
}



console.log(maxPathSum(new TreeNode(-3)));
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}