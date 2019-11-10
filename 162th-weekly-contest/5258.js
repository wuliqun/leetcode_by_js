/**
 * 5258. 得分最高的单词集合
 *    你将会得到一份单词表 words，一个字母表 letters （可能会有重复字母），以及每个字母对应的得分情况表 score。
 *    请你帮忙计算玩家在单词拼写游戏中所能获得的「最高得分」：能够由 letters 里的字母拼写出的 任意 属于 words 单词子集中，分数最高的单词集合的得分。
 *    单词拼写游戏的规则概述如下：
 *  
 *    玩家需要用字母表 letters 里的字母来拼写单词表 words 中的单词。  
 *    可以只使用字母表 letters 中的部分字母，但是每个字母最多被使用一次。 
 *    单词表 words 中每个单词只能计分（使用）一次。  
 *    根据字母得分情况表score，字母 'a', 'b', 'c', ... , 'z' 对应的得分分别为 score[0], score[1], ..., score[25]。  
 *    本场游戏的「得分」是指：玩家所拼写出的单词集合里包含的所有字母的得分之和。
 */

/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
let maxScoreWords = function(words, letters, score) {
  // 'a'.charCodeAt(0) --> 97
  // 用letters 组成words 的所有可能情况
  let res = [];
  backtrack(words,letters,0,res,[]);
  let max = 0,i,cached = {};
  // 遍历所有情况 获取得分最高的
  for(i=0;i<res.length;i++){
    max = Math.max(max,getScore(res[i],score,cached));
  }
  return max; 
};
function backtrack(words,letters,index,res,tmp){
  if(index === words.length){
    res.push([...tmp]);
  }else{
    backtrack(words,letters,index + 1,res,tmp);
    let splitLetters = [];
    for(let i = 0;i<words[index].length;i++){
      let index2 = letters.indexOf(words[index][i]);
      if(index2 === -1){
        break;
      }else{
        splitLetters.push(letters.splice(index2,1)[0]);
      }
    }
    if(splitLetters.length === words[index].length){
      tmp.push(words[index]);
      backtrack(words,letters,index + 1,res,tmp);
      tmp.pop();
    }
    letters.splice(0,0,...splitLetters);
  }
}

/**
 * 统计每一种情况所能获得的分数
 * @param {*} words 
 * @param {*} score 
 * @param {*} cached 因为可能有大量重复,所以使用cache
 */
function getScore(words,score,cached){
  let len = words.length,i,j,res = 0,cur;
  for(i = 0;i<len;i++){
    cur = 0;
    if(cached[words[i]]){
      cur = cached[words[i]];
    }else{
      for(j = 0;j<words[i].length;j++){
        cur += score[words[i].charCodeAt(j)- 97];
      }
      cached[words[i]] = cur;
    }
    res += cur;
  }
  return res;
}

console.log(maxScoreWords(["dog","cat","dad","good"],["a","a","c","d","d","d","g","o","o"], [1,0,9,5,0,0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0]))