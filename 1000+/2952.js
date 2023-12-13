/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countCompleteSubstrings = function(word, k) {
  const strs = getStringList(word);
  let res = 0;
  const countArr = new Array(26).fill(0);
  strs.forEach((str)=>{
    res += simpleCountCompleteSubstrings(str, k, countArr);
  });

  return res;
};

/**
 * 相邻字符不能相差2  以相差 >2 的点把字符串切开
 * @param {string} word 
 */
function getStringList(word){
  const res = [];
  let start = 0;
  for(let i = 1;i < word.length;i++){
    if(Math.abs(word[i].charCodeAt() - word[i - 1].charCodeAt()) > 2){
      res.push(word.slice(start, i));
      start = i;
    }
  }
  res.push(word.slice(start));

  return res;
}

function simpleCountCompleteSubstrings(word, k, countArr){
  const A_CODE = 'a'.charCodeAt();
  let res = 0;

  
  for(let i = 1;i * k <= word.length && i <= 26;i++){
    for(let j = 0;j + i * k <= word.length;j++){
      if(j === 0){
        countArr.fill(0);
        for(let m = 0;m < i * k;m++){
          countArr[word[m].charCodeAt() - A_CODE]++;
        }
      }else{
        countArr[word[j - 1].charCodeAt() - A_CODE]--;
        countArr[word[j + i * k - 1].charCodeAt() - A_CODE]++;
      }
      if(isCompleteSubstring(countArr, k)){
        res ++;
      }
    }
  }

  return res;
}

function isCompleteSubstring(countArr, k){
  for(let i = 0;i < countArr.length;i++){
    if(countArr[i] !== 0 && countArr[i] !== k){
      return false;
    }
  }

  return true;
}