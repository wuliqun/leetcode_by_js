/**
 * 105. 从前序与中序遍历序列构造二叉树
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * 52.41% 55.93%
 */
let buildTree = function(preorder, inorder) {
  let len = preorder.length,i,index,head = null;
  for(i = 0;i<len;i++){
    index = inorder.indexOf(preorder[i]);
    if(index !== -1){
      head = new TreeNode(preorder[i]);
      preorder.splice(i,1);
      head.left = buildTree(preorder,inorder.slice(0,index));
      head.right = buildTree(preorder,inorder.slice(index + 1));
      break;
    }
  }  
  return head;
};


