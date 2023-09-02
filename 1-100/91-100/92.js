/**
 * 92. 反转链表
 *    反转从n到m的链表节点
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 * 94.92% 54.29%
 */
// 链表类题目测试工具
let testLinkList = require( '../linkListTest');

let reverseBetween = function (head, m, n) {
  if(!head) return head;
  let tmp = head, prev, reverseTail, reverseCur, x;
  let count = 0;
  while (tmp) {
    count++;
    // 小于m 时,记录prev,后面连接时要用
    if (count < m) {
      prev = tmp;
      tmp = tmp.next;
    } else if (count === m) {
      // ===m, 记录当前节点为旋转初始节点,并设为旋转当前节点
      reverseCur = reverseTail = tmp;
      tmp = tmp.next;
    } else {
      // 当前节点的next指向前一个节点,也就是reverseCur
      // reverseCur重置为当前节点
      // 遍历指针后移一步
      x = tmp.next;
      tmp.next = reverseCur;
      reverseCur = tmp;
      tmp = x;
    }
    if (count === n) {
      // 考虑m === 1 的情况, prev 可能为空
      if(prev){
        prev.next = reverseCur;
      }else{
        head = reverseCur;
      }
      reverseTail.next = tmp;
      break;
    }
  }
  return head;
};

console.log(testLinkList(reverseBetween,[[],1,5]));