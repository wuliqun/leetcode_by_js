class MedianFinder{
  constructor(){
    this.queueLeft = [];
    this.queueRight = [];
  }
  addNum(num){
    if(this.queueLeft.length === 0 || num <= this.queueLeft.at(-1)){
      let index = this.findIndex(this.queueLeft, num);
      this.queueLeft.splice(index, 0, num);
      if(this.queueLeft.length - this.queueRight.length >= 2){
        this.queueRight.unshift(this.queueLeft.pop());
      }
    }else{
      let index = this.findIndex(this.queueRight, num);
      this.queueRight.splice(index, 0, num);
      if(this.queueRight.length > this.queueLeft.length){
        this.queueLeft.push(this.queueRight.shift());
      }
    }
  }
  delNum(num){
    if(num <= this.queueLeft.at(-1)){
      let index = this.findIndex(this.queueLeft, num, true);
      this.queueLeft.splice(index, 1);
      if(this.queueLeft.length < this.queueRight.length){
        this.queueLeft.push(this.queueRight.shift());
      }
    }else{
      let index = this.findIndex(this.queueRight, num, true);
      this.queueRight.splice(index, 1);
      if(this.queueLeft.length - this.queueRight.length >= 2){
        this.queueRight.unshift(this.queueLeft.pop());
      }
    }
  }
  findIndex(sortedArr, num, exact){
    let l = 0;
    let r = sortedArr.length - 1;
    if(r < 0 || num <= sortedArr[l]){
      return 0;
    }else if(num >= sortedArr[r]){
      return exact ? r : r + 1;
    }else{
      let mid;
      while(l <= r){
        mid = (l + r) >> 1;
        if(sortedArr[mid] > num){
          if(sortedArr[mid - 1] <= num){
            if(exact) mid --;
            break;
          }
          r = mid - 1;
        }else if(sortedArr[mid] < num){
          if(sortedArr[mid + 1] >= num){
            mid ++;
            break;
          }
          l = mid + 1;
        }else{
          break;
        }
      }
      return mid;
    }
  }
  findMedian(){
    if(this.queueLeft.length > this.queueRight.length){
      return this.queueLeft.at(-1);
    }else{
      return (this.queueLeft.at(-1) + this.queueRight[0]) / 2;
    }
  }
}
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function(nums, k) {
  const res = [];
  const md = new MedianFinder();
  for(let i = 0;i < k;i++){
    md.addNum(nums[i]);
  }
  res.push(md.findMedian());
  for(let i = 0;i < nums.length - k;i++){
    md.delNum(nums[i]);
    md.addNum(nums[i + k]);
    res.push(md.findMedian());
  }
  return res;
};