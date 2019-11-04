/**
 * 112. 路径总和
 *    是否存在根节点到某个叶子节点,路径总和为target 
 *
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
 * @param {number} sum
 * @return {boolean}
 * 87.69% 82.76%
 */
let hasPathSum = function(root, sum) {
  if(!root) return false;
  if(!root.left && !root.right){
    return root.val === sum;
  }else if(!root.left){
    return hasPathSum(root.right,sum - root.val);
  }else if(!root.right){
    return hasPathSum(root.left,sum - root.val);
  }else{
    return hasPathSum(root.right,sum - root.val) || hasPathSum(root.left,sum - root.val);
  }
};