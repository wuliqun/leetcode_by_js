/**
 * 127. 单词接龙
 *    输出单词接龙的最短长度
 */

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 * 73.29% 100%
 */
let ladderLength = function (beginWord, endWord, wordList) {
  let ladders = [
      [beginWord]
    ],
    i, j, prev, cur, end = false;
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
    if (cur.length === 0) return 0;
    ladders.push(cur);
    if (end) break;
  }
  return ladders.length;
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

console.log(ladderLength("qa",
  "sq",
  ["si", "go", "se", "cm", "so", "ph", "mt", "db", "mb", "sb", "kr", "ln", "tm", "le", "av", "sm", "ar", "ci", "ca", "br", "ti", "ba", "to", "ra", "fa", "yo", "ow", "sn", "ya", "cr", "po", "fe", "ho", "ma", "re", "or", "rn", "au", "ur", "rh", "sr", "tc", "lt", "lo", "as", "fr", "nb", "yb", "if", "pb", "ge", "th", "pm", "rb", "sh", "co", "ga", "li", "ha", "hz", "no", "bi", "di", "hi", "qa", "pi", "os", "uh", "wm", "an", "me", "mo", "na", "la", "st", "er", "sc", "ne", "mn", "mi", "am", "ex", "pt", "io", "be", "fm", "ta", "tb", "ni", "mr", "pa", "he", "lr", "sq", "ye"]));