/**
 * 114. 二叉树原地展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 * 81.37% 52.63%
 */
let flatten = function(root) {
  if(!root) return root;
  let stack = [root],tmp,prev = null;
  while(stack.length){
    tmp = stack.pop();
    if(tmp.right){
      stack.push(tmp.right);
    }
    if(tmp.left){
      stack.push(tmp.left);
    }
    if(prev){
      prev.right = tmp;
    }
    prev = tmp;
    prev.left = prev.right = null;
  }
  return root;
};