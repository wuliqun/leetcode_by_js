/**
 * 21. 合并两个有序链表
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 99.23% 41.82%
 */
let mergeTwoLists = function(l1, l2) {
  if(!l1 || !l2) return l1 || l2;
  let head,tmp;
  if(l1.val < l2.val){
    tmp = head = l1;
    l1 = l1.next;
  }else{
    tmp = head = l2;
    l2 = l2.next;
  }
  while(l1 && l2){
    if(l1.val < l2.val){
      tmp.next = l1;
      tmp = l1;
      l1 = l1.next;
    }else{
      tmp.next = l2;
      tmp = l2;
      l2 = l2.next;
    }
  }
  if(l1){
    tmp.next = l1;
  }else{
    tmp.next = l2;
  }
  return head;
};

// test
let test = require('../linkListTest');
let res = test(mergeTwoLists,[[1,3,5,8,9,44],[1,2,3,4,5,6,7,33]])
console.log(res);