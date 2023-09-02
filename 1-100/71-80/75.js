/**
 * 75. 颜色分类
 *      仅包含0  1  2的数组排序
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 88.92% 55.47%
 */
let sortColors = function(nums) {
  // 解法一: nums.sort();
  // 解法二: 2遍扫描 计数排序
  let len = nums.length,i,zero = 0,two = len-1;
  for(i=0;i<=two;i++){
    if(nums[i] === 0){
      if(i > zero){
        swap(nums,i,zero);
        zero ++;
        i--;
      }
    }else if(nums[i] === 2){
      if(i < two){
        swap(nums,i,two);
        two --;
        i--;
      }
    }
  }
};
function swap(nums,i,j){
  let tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}