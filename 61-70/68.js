/**
 * 68. 文本左右对齐
 *    给定的单词数组重新根据maxWidth排版,如
 *    [
 *      "What   must   be",
 *      "acknowledgment  ",
 *      "shall be        "
 *    ]
 *    注意最后一行格式
 */

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 * 86.31% 91.67%
 */
let fullJustify = function (words, maxWidth) {
  let res = [];
  let tmp = [], tmpLen = 0;
  let len = words.length,
    i;
  for (i = 0; i < len; i++) {
    // 本行已满
    if(tmpLen + tmp.length + words[i].length > maxWidth){
      res.push(justify(tmp,tmpLen,maxWidth));
      tmp = [words[i]];
      tmpLen = words[i].length;
    }else{
      tmp.push(words[i]);
      tmpLen += words[i].length;
    }
  }
  // 最后一行
  res.push(justify(tmp,tmpLen,maxWidth,true));
  return res;
};
/**
 * 将words组成长度为len的对齐字符串,
 * wordsLen: words的总字符数,传入是为了减少遍历
 * isLast: 是否是最后一行,最后一行左对齐
 */
function justify(words, wordsLen, len, isLast = false) {
  if (isLast || words.length === 1) {
    return words.join(' ').padEnd(len, ' ');
  } else {
    let spaces = len - wordsLen;
    let gaps = words.length - 1;
    // 平均每个间隔空格数
    let gap = Math.floor(spaces / gaps);
    // 空额余数,从左开始每次添加1个
    let spare = spaces % gaps;
    let res = words[0];
    let i, j;
    for (i = 1; i < words.length; i++) {
      // 添加gap个空格
      for (j = 0; j < gap; j++) {
        res += ' ';
      }
      // 仍有余数, 再加一个空格
      if (spare) {
        res += ' ';
        spare--;
      }
      res += words[i];
    }
    return res;
  }
}

// console.log(fullJustify([
//   "This", "is", "an", "example", "of", "text", "justification."
// ],16));
// console.log(fullJustify([
//   "What","must","be","acknowledgment","shall","be"
// ],16));
console.log(fullJustify([
  "Science",'aa'
],20));