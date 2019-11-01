/**
 * 86. 分隔链表
 *    以x分隔链表,>= 在右边,保持相对位置
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
 * @param {number} x
 * @return {ListNode}
 * 85.47% 40.27%
 */
let partition = function(head, x) {
  let left = null,right = null,rightFirst = null,tmp = head;
  while(tmp){
    if(tmp.val < x){
      if(!left){
        head = left = tmp;
      }else{
        left.next = tmp;
        left = left.next;
      }
    }else{
      if(!right){
        rightFirst = right = tmp;
      }else{
        right.next = tmp;
        right = right.next;
      }
    }
    tmp = tmp.next;
  }
  if(!left){
    head = rightFirst;
  }else{
    left.next = rightFirst;
    right && (right.next = null);
  }
  return head;
};