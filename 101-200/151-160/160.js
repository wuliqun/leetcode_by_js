/**
 * 160. 相交链表
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * 8.27% 83.77%
 */
let getIntersectionNode = function(headA, headB) {
  let arr = [];
  let tmp = headA;
  while(tmp){
    arr.push(tmp);
    tmp = tmp.next;
  }
  tmp = headB;
  while(tmp){
    if(arr.indexOf(tmp) !== -1) return tmp;
    tmp = tmp.next;
  }
  return null;
};