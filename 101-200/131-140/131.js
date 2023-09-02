/**
 * 131. 分隔回文子串
 *    将字符串分割成若干子串,使得每个子串都是回文
 *    返回所有的分割方案
 */

/**
 * @param {string} s
 * @return {string[][]}
 * 100% 88.24%
 */
let partition = function(s) {
  let res = [];
  if(s){
    backtrack(s,[],res);
  }
  return res;
};
function backtrack(s,tmp,res){
  if(!s){
    res.push([...tmp]);
  }else{
    let len = s.length,i;
    for(i = 0;i<len;i++){
      if(isPalidome(s,0,i)){
        tmp.push(s.slice(0,i+1));
        backtrack(s.slice(i+1),tmp,res);
        tmp.pop();
      }
    }
  }
}
function isPalidome(s,start = 0,end = null){
  if(end === null){
    end = s.length - 1;
  }
  while(start < end){
    if(s[start] !== s[end]) return false;
    start ++;
    end --;
  }
  return true;
}

console.log(partition('121212'));