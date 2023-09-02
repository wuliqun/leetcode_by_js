/**
 * 134. 加油站
 *    在一条环路上有 N 个加油站，其中第 i 个加油站有汽油 gas[i] 升。
 *    你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。
 *    如果你可以绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1。
 */

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 * 94.19% 26.83%
 */
let canCompleteCircuit = function (gas, cost) {
  let len = gas.length,
    i;
  if (!len) return -1;
  let cur = 0,index = 0,total = 0;
  for (i = 0; i < len; i++) {
    if(cur < 0){
      cur = 0;
      index = i; 
    }
    total += gas[i] - cost[i]; 
    cur += gas[i] - cost[i];
  }
  return total < 0 ? -1 : index;
};