/**
 * 24. 两两交换链表节点
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
 * 
 * 98.74% 57.79%
 */
let swapPairs = function(head) {
  if(!head) return head;
  let tmp = head,tmp2 = head.next,pre = null;
  while(tmp && tmp2){
    // head 交换
    if(pre === null){
      head = tmp2;
    }else{    
      pre.next = tmp2;         
    }
    tmp.next = tmp2.next;      
    tmp2.next = tmp;   
    // 后移
    pre = tmp;
    tmp = tmp.next;
    tmp2 = tmp && tmp.next;
  }
  return head;
};