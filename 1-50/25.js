/**
 * 25. k个一组翻转链表
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 中间的全部顺序要翻转,不是光交换首位元素
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 * 96.18% 51.79%
 */
let reverseKGroup = function(head, k) {
  if(k < 2) return head;
  let start = head,end = null,count = 1,startPrev = null,endNext = null,tmp,next,prev;
  while(true){
    end = start;
    count = 0;
    // 查找end,判断当前是否够一次翻转
    while(count < k - 1 && end !== null){
      end = end.next;
      count ++;
    }
    if(!end) break;
    /* -- 中间元素翻转 -- */
    endNext = end.next;

    // 记录prev next,作为下一轮的startPrev 和 start
    prev = start; 
    next = endNext;

    // 将end.next置为null,作为循环结束标记
    end.next = null;    
    while(true){
      tmp = start.next;
      start.next = endNext;
      endNext = start;
      if(!tmp){ // 翻转完成
        if(!startPrev){
          head = endNext;
        }else{
          startPrev.next = endNext;
        }
        startPrev = prev;
        start = next;
        break;
      }else{
        start = tmp;
      }
    }
    /* -- 翻转完成 -- */
  }
  return head;
};

/**
 * 使用额外空间,栈
 * 89.31% 94.64%
 */
reverseKGroup = function(head, k) {
  if(k < 2) return head;
  let stack = [],tail = null,tmp = head,item;
  while(tmp !== null){
    stack.push(tmp);
    tmp = tmp.next;
    if(stack.length === k){
      while(stack.length){
        item = stack.pop();
        if(!tail){
          head = tail = item;
        }else{
          tail.next = item;
          tail = tail.next;
        }
      }
    }
  }
  if(stack.length){
    tail && (tail.next = stack[0]);
  }else{
    tail && (tail.next = null);
  }
  return head;
};