/**
 * 117. 填充每个节点的下一个右侧节点指针 II
 *    非满二叉树,next,指向同层右边
 *    思路:
 *        按层次遍历
 */
/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 * 79.31% 43.24%
 */
let connect = function(root) {
  if(!root) return root;
  let stack = [root],len,tmp,prev = null;
  while(stack.length){
    len = stack.length;
    while(len --> 0){
      tmp = stack.shift();
      if(prev){
        prev.next = tmp;
      }
      prev = tmp;
      if(tmp.left) stack.push(tmp.left);
      if(tmp.right) stack.push(tmp.right);
    }
    prev.next = null;
    prev = null;
  }
  return root;
};