/**
 * 139. 单词拆分
 *     给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。
 *     说明：
 *        拆分时可以重复使用字典中的单词。
 *        你可以假设字典中没有重复的单词。
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 * 超时
 */
let wordBreak = function (s, wordDict) {
  if (s === '') return true;
  let len = wordDict.length,
    i, tmp, res = false;
  for (i = 0; i < len; i++) {
    tmp = wordDict[i]
    if (tmp === s) return true;
    if (s.startsWith(tmp)) {
      wordDict.splice(i, 1);
      res = wordBreak(s.slice(tmp.length), wordDict);
      wordDict.push(tmp);
      if (res) return true;
    }
  }
  return false;
};
/**
 * 动态规划 
 *  49.12% 77.46%
 */
wordBreak = function (s, wordDict) {
  let len = s.length,
    i;
  let dp = new Array(len + 1).fill(false);
  dp[0] = true;
  for (i = 1; i <= len; i++) {
    for(j = i;j>=0;j--){
      if(dp[j] && wordDict.indexOf(s.slice(j,i)) !== -1){
        dp[i] = true;
        break;
      }
    }
  }
  return dp[len];
};



console.log(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
  ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"]))