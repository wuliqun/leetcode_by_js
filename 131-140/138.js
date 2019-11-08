/**
 * 138. 复制带有随机指针的链表
 */

/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 * 54.13% 40.00%
 */
let cache = [];
let newNodes = [];
let copyRandomList = function (head) {
  if (!head) return null;
  let index = cache.indexOf(head);
  let node;
  if (index === -1) {
    cache.push(head);
    node = new Node(head.val,null,null);
    // 先缓存节点,不然陷入递归缓存不了
    newNodes.push(node);
    node.next = copyRandomList(head.next);
    node.random = copyRandomList(head.random);
  } else {
    node = newNodes[index];
  }
  return node;
};

function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
};

let node2 = new Node(2,null,null);
node2.random = node2;
let node1 = new Node(1,node2,node2);
console.log(copyRandomList(node1));