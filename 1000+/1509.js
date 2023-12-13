/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
  const len = nums.length;
  if(len <= 4) return 0;

  // 维护4个最小值和最大值
  const minArr = nums.slice(0, 4).sort((a, b)=>a - b);
  const maxArr = [...minArr];
  for(let i = 4;i < len;i++){
    if(nums[i] < minArr[3]){
      insertToArr(minArr, nums[i]);
      minArr.pop();
    }

    if(nums[i] > maxArr[0]){
      insertToArr(maxArr, nums[i]);
      maxArr.shift();
    }
  }

  let min = Infinity;
  for(let i = 0;i < 4;i++){
    min = Math.min(min, maxArr[i] - minArr[i]);
  }

  console.log(minArr, maxArr);

  return min;  
};
function insertToArr(arr, num){
  const len = arr.length;
  if(num <= arr[0]){
    arr.unshift(num);
  }else if(num >= arr[len - 1]){
    arr.push(num);
  }else{
    for(let i = 1;i < len;i++){
      if(num <= arr[i]){
        arr.splice(i, 0, num);
        break;
      }
    }
  }
}

console.log(minDifference([1, 5, 0, 10, 14]));