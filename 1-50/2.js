/* 02. 两数相加 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *   this.val = val;
 *   this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 
 * 99.51% 54.23%
 */
let addTwoNumbers = function(l1, l2) {
  let res = l1,tmp,prev,carry = 0;
  while(l1 || l2){
    prev = l1;
    if(l2){
      tmp = l1.val + l2.val + carry;
      carry = tmp > 9 ? 1 : 0;
      tmp %= 10;
      l1.val = tmp;
      // l1 不能为null
      if(l1.next){
        l1 = l1.next;
        l2 = l2.next;
      }else{
        l1.next = l2.next;
        l1 = l1.next;
        l2 = null;
      }
    }else{
      if(!carry) break; // 精髓,提升了很多速度,由44%跃升到99%
      tmp = l1.val + carry;
      carry = tmp > 9 ? 1 : 0;
      tmp %= 10;
      l1.val = tmp;
      l1 = l1.next;
    }
  }
  if(carry){
    prev.next = new ListNode(1);
  }
  return res;
};