/**
 * 83. 删除排序链表中的重复元素
 *    使每个元素只出现一次
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
 * 89.84% 91.61%
 */
let deleteDuplicates = function(head) {
  if(!head) return head;
  let prev = head,cur = prev.next;
  while(cur){
    if(cur.val === prev.val){
      prev.next = cur.next;
      cur = cur.next;
    }else{
      prev = cur;
      cur = cur.next;
    }
  }
  return head;   
};