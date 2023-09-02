/**
 * 148. 排序链表
 *    O(nlogn) 时间复杂度和常数空间
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 模仿快速排序
 * @param {ListNode} head
 * @return {ListNode}
 * 11.04% 52.94%
 */
let sortList = function(head) {
  return quickSortLinkList(head,null);
};

function quickSortLinkList(start,end){
  if(!start || start === end) return start;
  let head = start,tmp = start.next,prev = start;
  while(tmp !== end){
    if(tmp.val >= start.val){
      prev = tmp;
      tmp = tmp.next;
    }else{
      prev.next = tmp.next;
      tmp.next = head;
      head = tmp;
      tmp = prev.next;
    }
  }
  start.next = quickSortLinkList(start.next,tmp);
  return quickSortLinkList(head,start);
}

let test = require('../linkListTest');
let arr = require('./arr');
console.log(arr.length);
console.log(test(sortList,[arr]));