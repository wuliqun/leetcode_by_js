/**
 * 23. 合并K个排序链表
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 利用之前的合并两个有序链表函数,归并链表数组
 * @param {ListNode[]} lists
 * @return {ListNode}
 * 
 * 99.27% 48.87%
 */
let mergeKLists = function(lists) {
  let len = lists.length;
  if(len < 3){
    return mergeTwoLists(lists[0],lists[1]);
  }else{
    let mid = len >> 1;
    return mergeTwoLists(mergeKLists(lists.slice(0,mid)),mergeKLists(lists.slice(mid)));
  }
};

function mergeTwoLists(l1, l2) {
  if(!l1 || !l2) return l1 || l2 || null;
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