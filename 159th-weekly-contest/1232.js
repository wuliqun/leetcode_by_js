/**
 * 1232. 缀点成线
 *  判断点是否组成一条直线
 */

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
let checkStraightLine = function (coordinates) {
  let len = coordinates.length,i;
  let x = coordinates[0][0],y = coordinates[0][1];
  let diff1 = coordinates[1][0] - x;
  let diff2 = coordinates[1][1] - y; 
  for(i=2;i<len;i++){
    if(Math.abs((coordinates[i][0] - x)/diff1 - (coordinates[i][1] - y)/diff2) > 0.000001){
      return false;
    }
  }
  return true;
};