/**
 * 1237. 找出给定方程的正整数解
 *    方程是单调递增函数
 *    1 <= x,y <= 1000
 */

/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 * 95.52% 100.00%
 */
let findSolution = function (customfunction, z) {
  let res = [];
  let x, y, tmp;
  for(x = 1;x <= 1000;x++){
    for(y = 1;y <= 1000;y++){
      tmp = customfunction.f(x, y);
      if(tmp === z){
        res.push([x, y]);
        break;
      }else if(tmp > z){
        break;
      }
    }
    if(y === 1) break;
  }
  return res;
};

