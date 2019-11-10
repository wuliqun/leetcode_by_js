/**
 * 142. 环形链表 II
 *    返回环形链表起点
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
 * @return {ListNode}
 * 89.36% 14.15%
 */
let detectCycle = function (head) {
  let nodes = new Set();
  let tmp = head;
  while (tmp) {
    if (nodes.has(tmp)) {
      return tmp;
    } else {
      nodes.add(tmp);
      tmp = tmp.next;
    }
  }
  return null;
};
/**
 * 双指针
 * 62.62% 96.23%
 */
detectCycle = function (head) {
  let fast, slow, meet = false;
  fast = slow = head;
  while (fast) {
    if (meet) {
      if(slow === fast) return slow;
      slow = slow.next;
      fast = fast.next;      
    } else {
      slow = slow.next;
      fast = fast.next && fast.next.next;
      if(!fast) return null;
      if (fast === slow) {
        meet = true;
        fast = head;
      }
    }
  }
  return null;
};