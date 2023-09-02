/**
 * 99.恢复二叉搜索树
 *    两个节点被交换
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
 * 89.66% 37.50%
 */
let recoverTree = function(root) {
  let stack = [],tmp = root,prev = null,findPrev;
  while(tmp || stack.length){
    if(tmp){
      stack.push(tmp);
      tmp = tmp.left;
    }else{
      tmp = stack.pop();
      if(prev !== null && tmp.val <= prev.val && !findPrev){
        findPrev = prev;
      }else if(findPrev && tmp.val > findPrev.val){
        t = prev.val;
        prev.val = findPrev.val;
        findPrev.val = t;
        break;
      }

      prev = tmp;
      tmp = tmp.right;
    }
  }
  if(!tmp && findPrev){
    t = prev.val;
    prev.val = findPrev.val;
    findPrev.val = t;
  }
};
