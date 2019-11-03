/**
 * 5096. 数组变换
 *    元素比左右小, ++
 *    比左右大 --
 *    输出最后稳定的数组
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
let transformArray = function(arr) {
  let len = arr.length,i,changed,before;
  while(true){
    changed = false;
    before = arr.slice();
    for(i = 1;i<len-1;i++){
      if(arr[i] < before[i-1] && arr[i] < before[i+1]){
        arr[i] ++;
        changed = true;
      }

      if(arr[i] > before[i-1] && arr[i] > before[i+1]){
        arr[i] --;
        changed = true;
      }
    }
    if(!changed) break;
  }
  return arr;
};

console.log(transformArray([6,2,3,4]))
console.log(transformArray([1,6,3,4,3,5]))
console.log(transformArray([2,1,2,1,1,2,2,1]))
