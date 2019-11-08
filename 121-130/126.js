/**
 * 126. 单词接龙 II
 *    给定两个单词（beginWord 和 endWord）和一个字典 wordList，找出所有从 beginWord 到 endWord 的最短转换序列。转换需遵循如下规则：
 *    每次转换只能改变一个字母。
 *    转换过程中的中间单词必须是字典中的单词。   
 */

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 * 50% 90%
 */
let findLadders = function (beginWord, endWord, wordList) {
  let ladders = [
      [beginWord]
    ],
    i, j, prev, cur, end = false;
  let res = [];
  while (true) {
    prev = ladders[ladders.length - 1];
    cur = [];
    for (i = 0; i < wordList.length; i++) {
      for (j = 0; j < prev.length; j++) {
        if (isNext(prev[j], wordList[i])) {
          if (wordList[i] === endWord) {
            cur = [endWord];
            end = true;
          } else {
            cur.push(wordList[i]);
            wordList.splice(i, 1);
            i--;
          }
          break;
        }
      }
      if (end) break;
    }
    if (cur.length === 0) return res;
    ladders.push(cur);
    if (end) break;
  }
  backtrack(ladders, res, [], 0);
  return res;
};

function isNext(word, word2) {
  let len = word.length,
    i, count = 0;
  if (len !== word2.length) return false;
  for (i = 0; i < len; i++) {
    if (word[i] !== word2[i]) {
      count++;
      if (count > 1) break;
    }
  }
  return count === 1;
}

/**
 * 回溯
 * @param {*} ladders  阶梯字符串
 * @param {*} wordList
 * @param {*} res
 * @param {*} tmp
 * @returns
 */
function backtrack(ladders, res, tmp, index) {
  if (index === ladders.length) {
    res.push([...tmp]);
  } else {
    let cur = ladders[index];
    let prev = tmp.length > 0 ? tmp[tmp.length - 1] : null;
    let i;
    for (i = 0; i < cur.length; i++) {
      if (!prev || isNext(prev, cur[i])) {
        tmp.push(cur[i]);
        backtrack(ladders, res, tmp, index + 1);
        tmp.pop();
      }
    }
  }
}


console.log(findLadders("qa",
  "sq",
  ["si", "go", "se", "cm", "so", "ph", "mt", "db", "mb", "sb", "kr", "ln", "tm", "le", "av", "sm", "ar", "ci", "ca", "br", "ti", "ba", "to", "ra", "fa", "yo", "ow", "sn", "ya", "cr", "po", "fe", "ho", "ma", "re", "or", "rn", "au", "ur", "rh", "sr", "tc", "lt", "lo", "as", "fr", "nb", "yb", "if", "pb", "ge", "th", "pm", "rb", "sh", "co", "ga", "li", "ha", "hz", "no", "bi", "di", "hi", "qa", "pi", "os", "uh", "wm", "an", "me", "mo", "na", "la", "st", "er", "sc", "ne", "mn", "mi", "am", "ex", "pt", "io", "be", "fm", "ta", "tb", "ni", "mr", "pa", "he", "lr", "sq", "ye"]));