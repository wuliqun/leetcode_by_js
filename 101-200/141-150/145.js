/**
 * 145. 二叉树的后续遍历
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
 * 96.92% 18.03%
 */
let postorderTraversal = function (root) {
  let res = [];
  dfs(res, root);
  return res;
};

function dfs(res, root) {
  if (!root) return;
  dfs(res, root.left);
  dfs(res, root.right);
  res.push(root.val);
}

/**
 * 非递归
 * 66.12% 18.85%
 */
postorderTraversal = function (root) {
  let res = [],
    que = [],
    tmp;
  if (root) que.push(root);
  while (que.length) {
    tmp = que.pop();
    res.unshift(tmp.val);
    if (tmp.left) {
      que.push(tmp.left);
    }
    if (tmp.right) {
      que.push(tmp.right);
    }
  }
  return res;
};