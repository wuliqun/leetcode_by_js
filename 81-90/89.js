/**
 * 89. 格雷编码
 *    格雷编码是一个二进制数字系统，在该系统中，两个连续的数值仅有一个位数的差异。 
 *    给定一个代表编码总位数的非负整数 n，打印其格雷编码序列。格雷编码序列必须以 0 开头。
 */

/**
 * @param {number} n
 * @return {number[]}
 * 97.87% 58.89%
 */
let grayCode = function(n) {
  if(n === 0) return [0];
  let res = [0,1],i,mirror,head = 1;
  for(i=1;i<n;i++){
    head <<= 1;
    mirror = res.slice().reverse();
    res = res.concat(mirror.map(item=>item + head));
  }
  return res;
};

console.log(grayCode(4))