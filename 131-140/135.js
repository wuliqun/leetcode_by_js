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
 * 每次从数组选出当前最小的 放最少数量
 * 超时
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
/**
 * 分为上升和下降各个阶段
 * 设为count个  糖果数量为count*(count+1)/2
 * 100.00% 75.86%
 */
candy = function(ratings){
  let len = ratings.length;
  if(len <= 1) return len;
  let i,j,arr = [],more = 0,added = false;
  for(i = 0;i<len;i++){
    // 走到这里肯定最后一位是和前面走势相反
    if(i === len - 1){
      if(ratings[i] > ratings[i-1]){
        more ++;
      }
      arr.push(1);
    }else{
      if(ratings[i] === ratings[i+1]){
        if(i !== 0 && ratings[i] > ratings[i-1]){
          more ++;
        }
        arr.push(1);
        added = false;
      }else if(ratings[i] < ratings[i+1]){
        for(j = i+1;j<len-1;j++){
          if(ratings[j] >= ratings[j+1]) break;
        }
        arr.push(j-i+1);
        // 前面递减,现在递增,但现在的开头,比前面大,所以这一轮要以2开头
        if(i !== 0 && ratings[i] > ratings[i-1]){
          more += j - i + 1;
          // 记录,当前比预计结尾增加了1
          added = true;
        }else{
          added = false;
        }
        i = j;
      }else{
        for(j = i+1;j<len-1;j++){
          if(ratings[j] <= ratings[j+1]) break;
        }
        // 前面递减,现在递增,但如果递减的比递增的长,
        // 会导致此轮的首位比上一轮的末位要大,
        // 所以上一轮的末位要增加,但有可能上一轮末位已经增加了1
        // 所以加上added判断
        if(ratings[i] < ratings[i-1] && j-i+1 >= arr[arr.length - 1]){
          more += j-i+1 - arr[arr.length - 1] + (added ? 0 : 1);
        }
        added = false;
        arr.push(j-i+1);
        i = j;
      }
    }    
  }
  return arr.reduce((last,i)=>{
    return last + i*(i+1)/2;
  },more);
}
let arr = require('./arr.js')
console.log(candy(arr));