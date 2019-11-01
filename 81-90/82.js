/**
 * 82. 删除排序链表中的重复元素
 *    只保留没有重复出现的数字
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
 * 92.66% 60.53%
 */
let deleteDuplicates = function(head) {
  if(!head) return head;
  let cur = head,prev = null,flag = false,tmp = cur.next;
  while(tmp){
    if(tmp.val === cur.val){
      flag = true;
      tmp = tmp.next;
    }else{
      if(flag){
        prev && (prev.next = tmp);
        cur = tmp;
        tmp = tmp.next;
        flag = false;
      }else{
        if(!prev){
          head = cur;
          prev = cur;
        }else{
          prev = cur;
        }
        cur = tmp;
        tmp = tmp.next;
      }
    }
  }
  if(flag){
    if(!prev) head = null;
    else prev.next = null;
  }else{
    if(!prev) head = cur;
  }
  return head;
};