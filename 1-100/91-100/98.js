/**
 * 98. 验证二叉搜索树
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
 * @return {boolean}
 * 检测是否违背了二叉搜索树的性质
 * 中序遍历有序
 * 57.38% 81.13%
 */
let isValidBST = function(root) {
  let stack = [],tmp = root,prev = null;
  while(tmp || stack.length){
    if(tmp){
      stack.push(tmp);
      tmp = tmp.left;
    }else{
      tmp = stack.pop();
      if(prev !== null && tmp.val <= prev){
        return false;
      }
      prev = tmp.val;
      tmp = tmp.right;
    }
  }
  return true;
};