/**
 * 147. 对链表插入排序
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
 * 100.00% 100.00%
 */
let insertionSortList = function(head) {
  if(!head) return head;
  let prev = head;
  while(prev !== null){
    insert = prev.next;
    if(insert === null){
      break;
    }else if(insert.val >= prev.val){
      // 不用动
      prev = insert;
    }else{
      // 取出节点
      prev.next = insert.next;
      if(insert.val < head.val){
        insert.next = head;
        head = insert;
      }else{
        let insertPrev = head;
        while(insertPrev.next.val <= insert.val){
          insertPrev = insertPrev.next;
        }
        insert.next = insertPrev.next;
        insertPrev.next = insert;
      }
    }
  }
  return head;
};

let test = require('../linkListTest');
console.log(test(insertionSortList,[[1,2,3]]));
console.log(test(insertionSortList,[[1]]));
console.log(test(insertionSortList,[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]));
console.log(test(insertionSortList,[[2,1]]));