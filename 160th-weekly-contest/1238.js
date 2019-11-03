/**
 * 1238. 循环码排列
 *    生成以start为开始的n为循环码
 */

/**
 * @param {number} n
 * @param {number} start
 * @return {number[]}
 * 50.00% 100%
 */
let circularPermutation = function(n, start) {
  let res = [0],i,head = 1,mirror;
  for(i=0;i<n;i++){
    mirror = res.slice().reverse();
    res = res.concat(mirror.map(i=>i+head));
    head <<= 1;
  }
  for(i = 0;i<res.length;i++){
    if(res[i] === start){
      res = res.slice(i).concat(res.slice(0,i));
      break;
    }
  }
  return res;
};

let res = circularPermutation(3,2);
console.log(res)