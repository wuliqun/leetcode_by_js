/**
 * 113. 路径总和 II
 *    是否存在根节点到某个叶子节点,路径总和为target 
 *    输出所有路径
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
 * @param {number} sum
 * @return {boolean}
 * 79.14% 59.61%
 */
let pathSum = function(root, sum) {
  let res = [];
  if(root){
    backtrack(root,sum,res,[]);
  }
  return res;
};
function backtrack(root,sum,res,tmp){
  if(!root.left && !root.right){
    if(root.val === sum){
      res.push([...tmp,sum]);
    }
  }else{
    if(root.left){
      tmp.push(root.val);
      backtrack(root.left,sum - root.val,res,tmp);
      tmp.pop();
    }
    if(root.right){
      tmp.push(root.val);
      backtrack(root.right,sum - root.val,res,tmp);
      tmp.pop();
    }
  }
}