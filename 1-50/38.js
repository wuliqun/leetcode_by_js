/**
 * 38. 报数
 *    报数序列是一个整数序列，按照其中的整数的顺序进行报数，得到下一个数。其前五项如下：
 *         1.     1
 *         2.     11
 *         3.     21
 *         4.     1211
 *         5.     111221
 */

/**
 * @param {number} n
 * @return {string}
 * 94.86% 78.32%
 */
let arr = ['1','11','21','1211','111221'];
let countAndSay = function(n) {
  let len = arr.length,cur,prev,l,i,count;
  while(len < n){
    prev = arr[len - 1];
    cur = '';
    l = prev.length;
    count = 0;    
    for(i=0;i<l;i++){
      if(count === 0 || prev[i] === prev[i-1]){
        count ++;
      }else{
        cur += count + prev[i-1];
        count = 1;
      }
    }
    cur += count + prev[l-1];
    arr[len] = cur;
    len ++;    
  }
  return arr[n - 1];
};