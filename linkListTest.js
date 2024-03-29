// 链表节点定义
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// 数组转链表
function formatLinkList(arr){
  let len = arr.length;
  if(!len) return null;
  let head,tmp,i;
  head = tmp = new ListNode(arr[0]);
  for(i = 1;i<len;i++){
    tmp.next = new ListNode(arr[i]);
    tmp = tmp.next;
  }
  return head;
}

// 链表转数组
function linkListToArray(head){
  let res = [],tmp = head;
  while(tmp){
    res.push(tmp.val);
    tmp = tmp.next;
  }
  return res;
}
function transformArgs(args){
  let len = args.length,i;
  for(i = 0;i<len;i++){
    // 在前面的数组参数会被转换成链表
    if(Array.isArray(args[i])){
      args[i] = formatLinkList(args[i]);
    }else{
      break;
    }
  }
}
/**
 * 测试方法
 * @param {*} fn 方法对象
 * @param {*} args 方法参数数组,args[0:i]若为数组,则转换成链表的
 */
function testLinkList(fn,args){
  transformArgs(args);
  let res =  fn.apply(null,args);
  return linkListToArray(res);
}


// node 使用的是 module.exports 模块系统
module.exports = testLinkList;