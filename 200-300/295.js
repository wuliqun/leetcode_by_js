
var MedianFinder = function() {
  this.medianList = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  let l = 0;
  let r = this.medianList.length - 1;
  if(r < 0 || this.medianList[r] <= num){
    this.medianList.push(num);
  }else if(this.medianList[l] >= num){
    this.medianList.unshift(num);
  }else{
    let mid = 0;
    while(l <= r){
      mid = (l + r) >> 1;
      console.log(l, r, mid);
      if(this.medianList[mid] > num){
        if(this.medianList[mid - 1] <= num){
          break;
        }
        r = mid - 1;
      }else if(this.medianList[mid] < num){
        if(this.medianList[mid + 1] >= num){
          mid ++;
          break;
        }
        l = mid + 1;
      }else{
        break;
      }
    }
    this.medianList.splice(mid, 0, num);
  }  
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  const len = this.medianList.length;
  if(len % 2 === 1){
    return this.medianList[len >> 1];
  }else{
    return (this.medianList[(len >> 1) - 1] + this.medianList[len >> 1]) / 2;
  }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */


function run(methods, params){
  let obj;
  methods.forEach((method, index) => {
    switch(method){
    case 'MedianFinder':
      obj = new MedianFinder();
      break;
    case 'addNum':
      const num = params[index][0];
      obj.addNum(num);
      console.log(num, obj.medianList);
      break;
    case 'findMedian':
      // console.log('findMedian', obj.findMedian());
      break;
    }
  });
}


run(["MedianFinder", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian", "addNum", "findMedian"], [[], [6], [], [10], [], [2], [], [6], [], [5], [], [0], [], [6], [], [3], [], [1], [], [0], [], [0], []]);