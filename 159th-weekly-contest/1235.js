/**
 * 1235. 规划兼职工作
 */

/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
let jobScheduling = function (startTime, endTime, profit) {
  let mergeArr = [];
  let len = startTime.length,
    i,j,choose,unchoose;
  for(i=0;i<len;i++){
    mergeArr[i] = {
      s:startTime[i],
      e:endTime[i],
      profit:profit[i]
    }
  }
  // 合并,以结束时间排序
  mergeArr.sort((a,b)=>a.e - b.e);

  let prevs = [-1];      
  for (i = 1; i < len; i++) {
    for (j = i - 1; j >= 0; j--) {
      if(mergeArr[i].s >= mergeArr[j].e) break;
    }
    prevs[i] = j;
  }
  let opt = [mergeArr[0].profit];
  for(i=1;i<len;i++){
    choose = mergeArr[i].profit + (opt[prevs[i]] || 0)
    unchoose = opt[i-1];
    opt[i] = Math.max(choose,unchoose);
  }      
  return opt[len-1];
};