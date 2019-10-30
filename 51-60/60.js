/**
 * 60. 第k个排列
 * 
 *    按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：
 *      "123"
 *      "132"
 *      "213"
 *      "231"
 *      "312"
 *      "321"
 *    给定 n 和 k，返回第 k 个排列。
 */

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 * 全排列一共有 n! 个,
 * 因为元素不重复,所以每个以每个数字开头的排列数量相同 都为 (n-1)!
 * k / (n-1)! 即为第一个数下标  
 * 然后 k -= index * (n-1)!
 * 如此重复 
 * 
 * 99.05% 53.52%
 */
let getPermutation = function (n, k) {
  let arr = new Array(n).fill('').map((item, index) => index + 1);
  let factor = [1];
  let i;
  for(i = 1;i < 9;i++){
    factor[i] = factor[i-1]*i;
  }
  let res = '';
  k --;
  while(arr.length > 0){
    i = Math.floor(k/factor[n-1]);
    res += arr.splice(i,1)[0];
    k -= i * factor[n-1];
    n --;
  }
  return res;
};

console.log(getPermutation(8,50));

