/**
 * 95. 不同的二叉搜索树 II
 *    根据n,生成包含1-n的不同二叉搜索树
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {number} n
 * @return {TreeNode[]}
 * 84.47% 25.00%
 */
let generateTrees = function (n) {
  if(n === 0) return [];
  return generateTreesHelper(1, n);
};

function generateTreesHelper(start, end) {
  if (start === end) {
    return [new TreeNode(start)];
  } else if (start > end) {
    return [null];
  } else {
    let res = [],
      i, j, k, left, right, node;
    for (i = start; i <= end; i++) {
      left = generateTreesHelper(start, i - 1);
      right = generateTreesHelper(i + 1, end);
      for (j = 0; j < left.length; j++) {
        for (k = 0; k < right.length; k++) {
          node = new TreeNode(i);
          node.left = left[j];
          node.right = right[k];
          res.push(node);
        }
      }
    }
    return res;
  }
}

console.log(generateTrees(3))