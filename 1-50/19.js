/**
 * 19. 删除链表的倒数第n个节点
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
 * @param {number} n
 * @return {ListNode}
 * 98.11% 34.75%
 */
let removeNthFromEnd = function(head, n) {
  if(n === 0) return head;
  let count = 0,tmp = head,delPrev = null;
  while(tmp !== null){
    count ++;
    tmp = tmp.next;
    if(count === n + 1){
      delPrev = head;
    }else if (count > n + 1){
      delPrev = delPrev.next;
    }    
  }
  if(!delPrev) return head.next;
  delPrev.next = delPrev.next.next;
  return head;
};