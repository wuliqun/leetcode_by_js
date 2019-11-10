/**
 * 141. 环形链表
 *    判断链表中是否有环
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
 * @return {boolean}
 * 62.93% 13.95%
 */
let hasCycle = function(head) {
  let nodes = new Set();
  let tmp = head;
  while(tmp){
    if(nodes.has(tmp)){
      return true;
    }else{
      nodes.add(tmp);
      tmp = tmp.next;
    }
  } 
  return false;
};

/**
 * 快慢指针,不使用额外的空间
 * 90.60% 74.19%
 */
hasCycle = function(head) {
  if(!head || !head.next) return false;
  let slow = head.next,fast = slow.next;
  while(fast){
    if(fast === slow) return true;    
    fast = fast.next
    if(fast === slow) return true;
    if(fast){
      fast = fast.next;
    }else{
      return false;
    }
    slow = slow.next;
  }
  return false;
};
