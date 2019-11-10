/**
 * 143. 重排链表
 *    1 n 2 n-1 3 n-2
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
 * @return {void} Do not return anything, modify head in-place instead.
 * 97.96% 41.67%
 */
let reorderList = function(head) {
  let arr = [];
  let tmp = head;
  while(tmp){
    arr.push(tmp);
    tmp = tmp.next;
  }
  let left = 1,right = arr.length - 1,reverse = true;
  tmp = head;
  while(left <= right){
    if(reverse){
      tmp.next = arr[right];
      right --;
    }else{
      tmp.next = arr[left];
      left ++;
    }
    tmp = tmp.next;
    reverse = !reverse;
  }
  if(tmp) tmp.next = null;
  return head;
};