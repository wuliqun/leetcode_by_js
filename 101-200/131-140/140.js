/**
 * 140. 单词拆分 II
 *      返回所有的拆分可能,单词用空格连接
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 * 56.90% 5.26%
 */
let wordBreak = function (s, wordDict) {
  let res = {};
  if (s) {
    let map = {},i,len = wordDict.length;
    for(i = 0;i<len;i++){
      map[wordDict[i]] = true;
    }
    backtrack(s, map, res,0);
  }else{
    res[0] = [''];
  }
  return res[0];
};

function backtrack(s, map, res, index) {
  if(res[index]){
    return res[index];
  }else{
    let ans = [],i,j,list,tmp;
    if(index === s.length){
      ans.push('');
    }else{
      for(i = index;i<s.length;i++){
        tmp = s.slice(index,i+1);
        if(map[tmp]){
          list = backtrack(s,map,res,i+1);
          for(j = 0;j<list.length;j++){
            ans.push(tmp + (!list[j] ? '':' ' + list[j]));
          }
        }
      }
    }
    return (res[index] = ans);
  }
}

console.log(wordBreak("aaaaaaa",//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]))

// console.log(wordBreak("catsandog",["cats", "dog", "sand", "and", "cat"]))