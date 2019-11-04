/**
 * 104. 二叉树的最大深度
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
 * 70.19% 89.07%
 */
let maxDepth = function(root) {
  let arr = [root],level = 0,len,tmp;
  if(!root) return level;
  while(arr.length){
    len = arr.length;
    while(len --> 0){
      tmp = arr.shift();
      if(tmp.left) arr.push(tmp.left);
      if(tmp.right) arr.push(tmp.right);
    }
    level ++;
  }
  return level;
};