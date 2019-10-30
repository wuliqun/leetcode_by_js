/**
 * 61. 旋转链表
 * 
 *    给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * 97.78% 65.48%
 */
let rotateRight = function (head, k) {
  if (!head) return head;
  let tail = head,
    len = 1;
  while (tail.next !== null) {
    len++;
    tail = tail.next;
  }
  k = k % len;
  if (k === 0) return head;
  let i, tmp = head;
  for (i = 0; i < len - k - 1; i++) {
    tmp = tmp.next;
  }
  tail.next = head;
  head = tmp.next;
  tmp.next = null;
  return head;
};