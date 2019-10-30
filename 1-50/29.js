/**
 * 29. 两数相除
 */

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 * 
 * 模拟小学除法运算
 * 35.81% 32.35%
 */
let divide = function(dividend, divisor) {
  let isNegative = false;
  if(dividend < 0){
    dividend = - dividend;
    isNegative = !isNegative;
  }
  if(divisor < 0){
    divisor = - divisor;
    isNegative = !isNegative;
  }
  let res = '',
    i,
    j,
    remain = '',
    dividendStr = String(dividend),
    len = dividendStr.length,
    cur;
  if(divisor !== 1){
    for(i=0;i<len;i++){
      cur = Number(remain + dividendStr[i]);
      j = 0;
      while(cur >= divisor){
        cur -= divisor;
        j ++;
      }
      res += j;
      remain = cur;
    }
  }else{
    res = dividendStr;
  }
  res = isNegative ? -res : +res;
  if(res > 2147483647 || res < -2147483648){
    res = 2147483647;
  }
  return res;
}

/**
 * 通过移位实现
 * 无法处理 -2147483648
 * 因为任何一个数左移都无法大于 2147483648
 */
divide = function(dividend, divisor) {
  let isNegative = false;
  if(dividend < 0){
    dividend = - dividend;
    isNegative = !isNegative;
  }
  if(divisor < 0){
    divisor = - divisor;
    isNegative = !isNegative;
  }
  let count = 0,res = 0;
  while(divisor <= dividend){
    divisor <<= 1;
    count ++;
  }
  console.log(111111)
  while(count > 0){
    divisor >>= 1;
    count --;
    if(dividend >= divisor){
      res += 1 << count;
      dividend -= divisor
    }
  }
  res = isNegative ? -res : +res;
  if(res > 2147483647 || res < -2147483648){
    res = 2147483647;
  }
  return res;
}

