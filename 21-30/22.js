/**
 * 22. 括号生成
 *    给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。
 */

/**
 * 闭合法,递归
 * 先确定,起始'('和它的闭合')',然后他们中间是left,右边是right,
 * @param {number} n
 * @return {string[]}
 * 90.17% 8.12%
 */
let generateParenthesis = function(n) {
  let res = [],left,right,i;
  if(n < 2){
    res.push( n === 0 ? '' : '()');
  }else{
    for(i=0;i<n;i++){
      for(left of generateParenthesis(i)){
        for(right of generateParenthesis(n-i-1)){
          res.push(`(${left})${right}`);
        }
      }
    }
  }
  return res;
};

/**
 * 回溯法
 * 
 *    每次放一个( 或者 )
 *    放置规则:
 *      不超过n,可以放置(
 *      )的数量小于(,可以放置)
 * 
 * 89.94% 10.15%
 */
generateParenthesis = function(n) {
  let res = [];
  backtrack(res,'',0,0,n);
  return res;
};

function backtrack(res,cur,left,right,n){
  if(cur.length === n*2){
    res.push(cur);
    return ;
  }
  if(left < n){
    // 放置一个 '('
    backtrack(res,cur + '(',left + 1,right,n);
  }
  if(right < left){
    // 放置一个 ')'
    backtrack(res,cur + ')',left,right + 1,n);
  }
}