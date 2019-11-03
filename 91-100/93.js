/**
 * 93. 复原IP地址
 *    返回所有的Ip地址可能形式
 */

/**
 * @param {string} s
 * @return {string[]}
 * 77.44% 94.23%
 */
let restoreIpAddresses = function (s) {
  let res = [];
  backtrack(res, [], 0, 1, s);
  return res;
};
/**
 * 回溯函数
 * @param {*} res 结果保存用
 * @param {*} tmp 临时回溯容器
 * @param {*} index 当前s的下标
 * @param {*} count 当前是第几个数字 1 开始
 * @param {*} s 字符串
 */
function backtrack(res, tmp, index, count, s) {
  if (count > 4) {
    res.push(tmp.join('.'));
  } else {
    // 最多能用几个字符
    let max = Math.min(3, s.length - index - (4 - count));
    // 最少能放几个字符
    let min = Math.max(1, s.length - index - (4 - count) * 3);
    let i, cur;
    for (i = min; i <= max; i++) {
      cur = s.slice(index, index + i);
      // 非数字0不能以0开头  数字不能大于255
      if ((cur[0] !== '0' || cur.length === 1) && 255 - cur >= 0) {
        tmp.push(cur);
        backtrack(res, tmp, index + i, count + 1, s);
        tmp.pop();
      }
    }
  }
}

console.log(restoreIpAddresses('25501035'))