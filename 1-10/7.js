/* 07. 整数反转 */

/**
 * @param {number} x
 * @return {number}
 * 溢出返回0
 */
// let reverse = function(x) {
//   let flag = false;
//   if(x < 0){
//     flag = true;
//     x = -x;
//   }
//   let s = String(x).split('').reverse().join('');
//   let res = flag ? -s : +s;
//   if(res > 2147483647 || res < -2147483648){
//     return 0;
//   }
//   return res;
// };

/**
 * 
 * @param {*} s 
 * 88.20% 56.07%
 */
let reverse = function(s) {
  s = String(s);
  let i = s.length - 1,res = '';
  while(i > 0){
    res += s[i--];
  }
  res = s[0] === '-' ? -res : Number(res + s[0]);
  if(res > 2147483647 || res < -2147483648){
    return 0;
  }
  return res;
};
