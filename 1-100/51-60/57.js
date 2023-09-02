/**
 * 57. 插入区间
 *    给定排好序的,无重叠的区间列表,现在要插入一个区间
 *    插入后要保证不重叠
 */

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 * 71.54% 84.85%
 */
let insert = function(intervals, newInterval) {
  let len = intervals.length;
  if(!len) return [newInterval];
  if(newInterval[0] >= intervals[len-1][0]){
    intervals.push(newInterval);
    merge(intervals,len);
  }else{
    let i;
    for(i = 0;i<len;i++){
      if(i !== 0 && newInterval[0] <= intervals[i-1][1]){
        intervals[i-1][1] = Math.max(intervals[i-1][1],newInterval[1]);
        merge(intervals,i);
        break;
      }else if(newInterval[0] <= intervals[i][0]){
        intervals.splice(i,0,newInterval);
        merge(intervals,i + 1);
        break;
      }
    }
  }
  return intervals;
};

function merge(intervals,i) {
  while(true){
    if(!intervals[i]) break;
    if(intervals[i-1][1] >= intervals[i][0]){
      intervals[i-1][1] = Math.max(intervals[i-1][1],intervals[i][1]);
      intervals.splice(i,1);
    }else{
      break;
    }
  }
};

console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]],[0,55]));