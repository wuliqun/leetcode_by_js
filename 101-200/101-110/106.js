/**
 * 106. 从中序与后序遍历序列构造二叉树
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 * 49.51% 48.57%
 */
let buildTree = function (inorder, postorder) {
  let len = postorder.length,
    i, index, head = null;
  for (i = len - 1; i >= 0; i--) {
    index = inorder.indexOf(postorder[i]);
    if (index !== -1) {
      head = new TreeNode(postorder[i]);
      postorder.splice(i, 1);
      head.left = buildTree(inorder.slice(0, index),postorder);
      head.right = buildTree(inorder.slice(index + 1),postorder);
      break;
    }
  }
  return head;
};

// console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]))