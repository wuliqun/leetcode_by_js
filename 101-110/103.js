/**
 * 103. 二叉树的锯齿形层次遍历
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
 * @return {number[][]}
 * 95.00% 10.94%
 */
let zigzagLevelOrder = function(root) {
  let res = [],arr = [root],level = 0,len,tmp,isReverse = false;
  if(!root) return res;
  while(arr.length){
    res[level] = [];
    len = arr.length;
    while(len --> 0){
      tmp = arr.shift();
      res[level].push(tmp.val);
      if(tmp.left) arr.push(tmp.left);
      if(tmp.right) arr.push(tmp.right);
    }    
    if(isReverse) res[level].reverse();
    isReverse = !isReverse;
    level ++;
  }
  return res;
};