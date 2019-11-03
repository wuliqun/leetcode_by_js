/**
 * 5249. 移除无效括号
 */

/**
 * @param {string} s
 * @return {string}
 */
let minRemoveToMakeValid = function(s) {
  let arr = s.split(''),len = arr.length,i,leftCount = 0,rightCount = 0;
  for(i=0;i<arr.length;i++){
    if(arr[i] === '('){
      leftCount ++;
    }else if(arr[i] === ')'){
      if(rightCount === leftCount){
        // delete )
        arr.splice(i,1);
        i --;
      }else{
        rightCount ++;
      }
    }
  }
  leftCount -= rightCount;
  i = arr.length - 1;
  while(leftCount > 0 && i >= 0){
    if(arr[i] === '('){
      arr.splice(i,1);
      leftCount --;
    }
    i--;
  }
  return arr.join('');
};

console.log(minRemoveToMakeValid('lee(t(c)o)de)'))
console.log(minRemoveToMakeValid('a)b(c)d'))
console.log(minRemoveToMakeValid('))(('))
console.log(minRemoveToMakeValid('(a(b(c)d)'))