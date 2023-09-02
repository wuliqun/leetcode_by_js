/**
 * 94. 二叉树的中序遍历
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
 * @return {number[]}
 * 递归
 */
let inorderTraversal = function(root) {
  let res = [];
  dfs(res,root);
  return res;
};
function dfs(res,root){
  if(root){
    res.push(root.val);
    dfs(res,root.left);
    dfs(res,root.right);
  }
}

/**
 * 非递归
 * 55.29% 69.03%
 */

inorderTraversal = function(root) {
  let res = [],stack = [],tmp = head;
  while(tmp || stack.length){
    if(tmp){
      stack.push(tmp);
      tmp = tmp.left;
    }else{
      tmp = stack.pop();
      res.push(tmp.val);
      tmp = tmp.right;
    }
  }
  return res;
};