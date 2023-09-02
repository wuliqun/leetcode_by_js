/**
 * 101. 镜像对称二叉树
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
 * 85.69% 42.45%
 */
let isSymmetric = function(root) {
  let arr = [root],len,tmp;
  while(arr.length){
    len = arr.length;
    // 包含null 每层都是回文,则镜像对称
    if(!isPalidome(arr)) return false;
    while(len --> 0){
      tmp = arr.shift();
      if(tmp === null) continue;
      arr.push(tmp.left);
      arr.push(tmp.right);
    }
  }
  return true;
};
function isPalidome(arr){
  let len = arr.length,i;
  if(len <= 1) return true;
  let start = 0,end = len - 1;
  while(start < end){
    // 可能含有null
    if(arr[start] === null || arr[end] === null){
      if(arr[start] || arr[end]) return false;
    }else if(arr[start].val !== arr[end].val) return false;
    start ++;
    end --;
  }
  return true;
}