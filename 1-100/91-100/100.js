/**
 * 100. 相同的树
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 * 99.17% 29.92%
 */
let isSameTree = function(p, q) {
  if(!p || !q) return !p && !q;
  if(p.val === q.val){
    return isSameTree(p.left,q.left) && isSameTree(p.right,q.right);
  }
  return false;
};