/**
 * 107. 二叉树的层次遍历II
 *    反向
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
 * 85.94% 30.44%
 */
let levelOrderBottom = function(root) {
  let res = [],arr = [root],level = 0,len,tmp;
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
    level ++;
  }
  return res.reverse();
};