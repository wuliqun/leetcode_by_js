/**
 * 129. 根节点到叶子节点之和
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
 * 84.21% 83.33%
 */
let sumNumbers = function(root) {
  if(!root) return 0;
  let res = [];
  backtrack(root,res,0);
  return res.reduce((a,b)=>a+b);
};
function backtrack(root,res,cur){
  cur = cur*10 + root.val;
  if(!root.left && !root.right){
    res.push(cur);
  }else{
    if(root.left){
      backtrack(root.left,res,cur);
    }
    if(root.right){
      backtrack(root.right,res,cur);
    }
  }
}