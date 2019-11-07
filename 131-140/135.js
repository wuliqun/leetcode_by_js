/**
 * 135. 分发糖果
 *    老师想给孩子们分发糖果，有 N 个孩子站成了一条直线，老师会根据每个孩子的表现，预先给他们评分。
 *    你需要按照以下要求，帮助老师给这些孩子分发糖果：
 *        每个孩子至少分配到 1 个糖果。
 *        相邻的孩子中，评分高的孩子必须获得更多的糖果。
 *    那么这样下来，老师至少需要准备多少颗糖果呢？
 */

/**
 * @param {number[]} ratings
 * @return {number}
 * 从数组选出当前最小的 放最少数量
 */
let candy = function(ratings) {
  let len = ratings.length,i;
  let res = new Array(len).fill(0);
  let map = {};
  let min = Infinity,minIndex,count = 0;
  while(count < len){
    for(i = 0;i<len;i++){
      if(map[i]) continue;
      if(ratings[i] < min){
        min = ratings[i];
        minIndex = i;
      }
    }
    map[minIndex] = true;
    if(ratings[minIndex] === ratings[minIndex-1] && ratings[minIndex] === ratings[minIndex+1]){
      res[minIndex] = 1;
    }else if(ratings[minIndex] === ratings[minIndex-1]){
      res[minIndex] = (res[minIndex+1] || 0) + 1;
    }else if(ratings[minIndex] === ratings[minIndex+1]){
      res[minIndex] = (res[minIndex-1] || 0) + 1;
    }else{
      res[minIndex] = Math.max(res[minIndex-1] || 0,res[minIndex+1] || 0) + 1;
    }
    min = Infinity;
    count ++;
  }
  return res.reduce((a,b)=>a+b,0);
};

console.log(candy([]))
console.log(candy([1,2,2,2,2,2]))