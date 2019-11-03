/**
 * 5247. 交换字符使得字符串相同
 *    字符串仅包含  x y
 *     求出最小交换次数
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
let minimumSwap = function(s1, s2) {
  let len = s1.length,i;
  let xCount1 = 0,xCount2 = 0,yCount1 = 0,yCount2 = 0;
  for(i = 0;i<len;i++){
    if(s1[i] !== s2[i]){
      if(s1[i] === 'x'){
        xCount1 ++;
        yCount2 ++
      }else{
        yCount1 ++;
        xCount2 ++;
      }
    }
  }
  if(xCount1 + xCount2 === yCount1 + yCount2){
    if(xCount1 % 2 === 0 && yCount1 % 2 === 0){
      return xCount1 / 2 + yCount1 / 2;
    }else if(xCount1 % 2 === 1 && yCount1 % 2 === 1){
      return Math.floor(xCount1 / 2) + Math.floor(yCount1 / 2) + 2;
    }else{
      return -1;
    }
  }else{
    return -1;
  }
};

console.log(minimumSwap('xx','yy')); // 1
console.log(minimumSwap('xy','yx')); // 2
console.log(minimumSwap('xxy','xyy')); // -1
console.log(minimumSwap('xxyyxyxyxx','xyyxyxxxyx')); // 4


