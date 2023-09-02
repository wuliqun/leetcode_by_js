/**
 * 150. 逆波兰表达式求值
 *  根据逆波兰表示法，求表达式的值。
 *  有效的运算符包括 +, -, *, / 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。
 *     说明：
 *        整数除法只保留整数部分。
 *        给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。
 */

/**
 * @param {string[]} tokens
 * @return {number}
 * 94.93% 37.14%
 */
let evalRPN = function(tokens) {
  let len = tokens.length,i,stack = [],op1,op2;
  for(i = 0;i<len;i++)  {
    if(/^(\+|\-|\*|\/)$/.test(tokens[i])){
      op2 = stack.pop();
      op1 = stack.pop();
      let res;
      switch(tokens[i]){
        case '+':
          res = op1 + op2;
          break;
        case '-':
          res = op1 - op2;
          break;
        case '*':
          res = op1 * op2;
          break;
        case '/':
          let tmp = op1 / op2;
          res = Math.floor(tmp);
          if(tmp < 0 && tmp !== res){
            res += 1;
          }
          break;
      }
      stack.push(res);
    }else{
      stack.push(Number(tokens[i]));
    }
  }
  return stack[0];
};

console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]));