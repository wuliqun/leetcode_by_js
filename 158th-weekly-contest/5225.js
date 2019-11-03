/**
 * 5225. 最大相等概率
 *  给出一个正整数数组 nums，请你帮忙从该数组中找出能满足下面要求的 最长 前缀，并返回其长度
 *    从前缀中 删除一个 元素后，使得所剩下的每个数字的出现次数相同。
 *  如果删除这个元素后没有剩余元素存在，仍可认为每个数字都具有相同的出现次数（也就是 0 次）。
 */

   /**
 * @param {number[]} nums
 * @return {number}
 * 
 * 思路:
 *  以hash ({})存儲每個數字出現的次數,
 *  將數組存儲完後,在逐個刪除,判斷是否符合條件,
 *  以盡快找出最長的前綴
 */
let maxEqualFreq = function(nums) {
  let len = nums.length,i,obj = {};
  for(i=0;i<len;i++){
    if(!obj[nums[i]]){
      obj[nums[i]] = 1;
    }else{
      obj[nums[i]] ++;
    }
  }
  for(i = len;i>0;i--){
    if(isEqualFreq(obj)){
      return i;
    }
    obj[nums[i-1]] --;
  }
};
// 判斷當前是否符合最長前綴條件
function isEqualFreq(obj){
  let num1 = null,count1 = 0,num2 = null,count2 = 0;
  for(i of Object.keys(obj)){
    if(obj[i] === 0) continue;
    if(num1 === null){
      num1 = obj[i];
      count1 ++;
    }else if(num1 === obj[i]){
      count1 ++;
    }else if(num2 === null){
      num2 = obj[i];
      count2 ++;
    }else if(num2 === obj[i]){
      count2 ++;
    }else{
      // 出現3個長度,不符合
      return false;
    }
    // 必定要有一個長度為0 或 1 
    if(count1 > 1 && count2 > 1){
      return false;
    }
  }

  // 僅出現了一個長度,要麼長度為0,要麼該長度僅出現了一次
  if(num2 === null){
    return count1 === 1 || num1 === 1;
  }
  // 將num1 count1 轉換為出現1次的那個長度
  if(count1 !== 1){
    if(count2 !== 1) return false;
    let tmp = num1;
    num1 = num2;
    num2 = tmp;
    count2 = count1;
    count1 = 1;
  }
  // num1 為僅出現 1次的數字
  if(num1 === 1 || num1 - num2 === 1) return true;
  if(count2 === 1 && num2 - num1 === 1) return true;
  return false;
}