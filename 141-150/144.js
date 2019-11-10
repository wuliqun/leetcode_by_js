/**
 * 144. 二叉树的前序遍历
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
 * 递归  99.26% 19.17%
 */
let preorderTraversal = function(root) {
  let res = [];
  preOrder(root,res);
  return res;
};
function preOrder(root,res){
  if(root){
    res.push(root.val);
    preOrder(root.left,res);
    preOrder(root.right,res);
  }
}

/**
 * 非递归
 * 81.60% 57.00%
 */

preorderTraversal = function(root){  
  let res = [];
  if(!root) return res;
  let stack = [root],tmp;
  while(stack.length){
    tmp = stack.pop();
    res.push(tmp.val);
    if(tmp.right){
      stack.push(tmp.right);
    }
    if(tmp.left){
      stack.push(tmp.left);
    }
  }
  return res;
}