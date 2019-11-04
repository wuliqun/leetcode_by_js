/**
 * 118. 杨辉三角
 */

/**
 * @param {number} numRows
 * @return {number[][]}
 * 92.07% 28.43%
 */
let generate = function(numRows) {
  if(!numRows) return [];
  let res = [[1]],i,j,tmp,prev;
  for(i = 1;i<numRows;i++){
    prev = res[i-1];
    tmp = new Array(i + 1);
    tmp[0] = tmp[i] = 1;
    for(j = 1;j<i;j++){
      tmp[j] = prev[j] + prev[j-1];
    }
    res.push(tmp);
  }
  return res;
};

console.log(generate(5));