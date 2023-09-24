/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var rob = function(root) {
  const cache1 = new WeakMap(), cache2 = new WeakMap();
  return Math.max(doRob(root, cache1, cache2), dontRob(root, cache1, cache2));
};

function doRob(root, cache1, cache2){
  if(!root) return 0;
  if(!cache1.has(root)){
    cache1.set(root, root.val + dontRob(root.left, cache1, cache2) + dontRob(root.right, cache1, cache2));
  }

  return cache1.get(root);
}

function dontRob(root, cache1, cache2){
  if(!root) return 0;
  if(!cache2.has(root)){
    let res = 0;
    res += Math.max(doRob(root.left, cache1, cache2), dontRob(root.left, cache1, cache2));
    res += Math.max(doRob(root.right, cache1, cache2), dontRob(root.right, cache1, cache2));
    cache2.set(root, res);
  }
  return cache2.get(root);
}