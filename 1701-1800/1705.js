/**
 * 1705 吃苹果的最大数目
 */

/**
 * @param {number[]} apples
 * @param {number[]} days
 * @return {number}
 */
var eatenApples = function(apples, days) {
  const n = apples.length;
  let queue = [];
  let res = 0, i, apple, day;
  for(i = 0;;i++){
    if(i < n){
      apple = apples[i];
      day = days[i];
      if(apple !== 0){
        insertTo(queue, [day + i, apple]);
      }
    }
    while(queue.length && (queue[0][0] <= i || queue[0][1] === 0)){
      queue.shift();
    }
    if(queue.length){
      res ++;
      queue[0][1] --;
    }

    if(i >= n && !queue.length) break;
  }

  return res;
};

/**
 * 有序队列 最先腐烂的在最前  二分插入
 * @param {number[][]} queue 
 * @param {number[]} item 
 */
function insertTo(queue, item){
  const n = queue.length;
  let l = 0, r = n - 1, mid;
  if(n === 0 || item[0] >= queue[r][0]){
    queue.push(item);
    return ;
  }
  if(item[0] <= queue[l][0]){
    queue.unshift(item);
    return ;
  }
  while(l <= r){
    mid = (l + r) >> 1;
    if(queue[mid][0] > item[0]){
      if(queue[mid - 1][0] <= item[0]){
        queue.splice(mid - 1, 0, item);
        break;
      }
      r = mid - 1;
    }else if(queue[mid][0] < item[0]){
      if(queue[mid + 1][0] >= item[0]){
        queue.splice(mid, 0, item);
        break;
      }
      l = mid + 1;
    }else{
      queue.splice(mid, 0, item);
      break;
    }
  }
}


console.log(eatenApples([3, 0, 0, 0, 0, 2],  [3, 0, 0, 0, 0, 2]));