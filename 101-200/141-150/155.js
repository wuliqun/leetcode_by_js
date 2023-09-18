
// var MinStack = function() {
//   this.stack = [];
//   /**
//    * {
//    *    index:number, // 下标
//    *    next:null     // 下一个  有序
//    * }
//    */
//   this.head = null;
// };

// /** 
//  * @param {number} val
//  * @return {void}
//  */
// MinStack.prototype.push = function(val) {
//   this.stack.push(val);
//   if(!this.head){
//     this.head = {
//       index: 0,
//       next: null,
//     };
//   }else{
//     if(this.stack.at(-1) <= this.stack[this.head.index]){
//       this.head = {
//         index: this.stack.length - 1,
//         next: this.head,
//       };
//     }else{
//       let pre = this.head;
//       while(pre.next && this.stack[pre.next.index] < this.stack.at(-1)){
//         pre = pre.next;
//       }
//       pre.next = {
//         index: this.stack.length - 1,
//         next: pre.next,
//       };
//     }
//   }
//   return null;
// };

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function() {
//   if(this.stack.length){
//     let index = this.stack.length - 1;
//     if(index === this.head.index){
//       this.head = this.head.next;
//     }else{
//       let pre = this.head;
//       while(pre.next.index !== index){
//         pre = pre.next;
//       }
//       pre.next = pre.next.next;
//     }
//     return this.stack.pop();
//   }else{
//     return null;
//   }
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function() {
//   return this.stack.at(-1);
// };

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function() {
//   if(!this.stack.length) return null;
//   return this.stack[this.head.index];
// };

// /**
//  * Your MinStack object will be instantiated and called as such:
//  * var obj = new MinStack()
//  * obj.push(val)
//  * obj.pop()
//  * var param_3 = obj.top()
//  * var param_4 = obj.getMin()
//  */









var MinStack = function() {
  this.stack = [];
  this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.stack.push(val);
  if(!this.minStack.length || val < this.minStack.at(-1)){
    this.minStack.push(val);
  }else{
    this.minStack.push(this.minStack.at(-1));
  }
  return null;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.minStack.pop();
  return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.stack.at(-1);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minStack.at(-1);
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */