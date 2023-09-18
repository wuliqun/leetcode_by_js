/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  const n = nums.length;
  let start = 0, end = n - 1, pos;
  while((pos = partition(nums, start, end)) !== n - k){
    if(pos > n - k){
      end = pos - 1;
    }else{
      start = pos + 1;
    }
  }
  return nums[pos];
};

function partition(nums, start, end){
  let pos = start, l = start + 1, r = end;
  while(l <= r){
    if(pos < r){
      if(nums[pos] > nums[r]){
        swap(nums, pos, r);
        pos = r;
      }
      r--;
    }else{
      if(nums[pos] < nums[l]){
        swap(nums, pos, l);
        pos = l;        
      }
      l++;
    }
  } 

  return pos;
}

function swap(nums, i, j){
  let tmp = nums[i];
  nums[i] = nums[j];
  nums[j] = tmp;
}


// console.log(findKthLargest([1, 2, 3, 4, 5, 6], 1));
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
// console.log(findKthLargest([1, 2, 3, 4, 5, 6], 3));
// console.log(findKthLargest([1, 2, 3, 4, 5, 6], 5));
