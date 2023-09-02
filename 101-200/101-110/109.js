/**
 * 109. 有序链表转换二叉搜索树
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 * 69.88% 18.75%
 */
let sortedArrayToBST = function(nums) {
  if(!nums.length) return null;
  let mid = nums.length >> 1;
  let head = new TreeNode(nums[mid]);
  head.left = sortedArrayToBST(nums.slice(0,mid));
  head.right = sortedArrayToBST(nums.slice(mid + 1));
  return head;
};
let sortedListToBST = function(head) {
  let nums = [],tmp = head;
  while(tmp){
    nums.push(tmp.val);
    tmp = tmp.next;
  }
  return sortedArrayToBST(nums);
};