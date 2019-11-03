/**
 * 5224. 掷骰子模拟
 * 
 *    有一个骰子模拟器会每次投掷的时候生成一个 1 到 6 的随机数。
 *    不过我们在使用它时有个约束，就是使得投掷骰子时，连续 掷出数字 i 的次数不能超过 rollMax[i]（i 从 1 开始编号）。
 *    现在，给你一个整数数组 rollMax 和一个整数 n，请你来计算掷 n 次骰子可得到的不同点数序列的数量。
 *    假如两个序列中至少存在一个元素不同，就认为这两个序列是不同的。由于答案可能很大，所以请返回 模 10^9 + 7 之后的结果。
 * 
 */


/**
 * @param {number} n
 * @param {number[]} rollMax
 * @return {number}
 * 动态规划 dp[i][j][k] 表示第i次, 掷出 j, j连续出现了K次的次数
 * 72.22% 100%
 */
let dieSimulator = function (n, rollMax) {
  let dp = new Array(n + 1), i, j, k;
  let res = 0;
  let mod = Math.pow(10, 9) + 7;
  for (i = 0; i <= n; i++) {
    dp[i] = new Array(7);
    for (j = 0; j <= 6; j++) {
      dp[i][j] = new Array(16).fill(0);
    }
  }
  for (j = 1; j <= 6; j++) {
    dp[1][j][1] = 1;
  }
  for (i = 2; i <= n; i++) {
    for (j = 1; j <= 6; j++) {
      for (k = 1; k <= rollMax[j - 1]; k++) {
        if (k === 1) {
          // 连续出现1次j,那么只要上一次不是j,就可以在这里加起来
          dp[i][j][k] = sum(dp[i - 1], j, mod);
        } else {
          // 上一次要是出现了k-1次j
          dp[i][j][k] = dp[i - 1][j][k - 1];
        }
      }
    }
  }
  for (j = 1; j <= 6; j++) {
    for (k = 1; k <= rollMax[j - 1]; k++) {
      res += dp[n][j][k];
      res %= mod;
    }
  }
  return res;
};

function sum(arr, j, mod) {
  let res = 0, i, k;
  for (i = 1; i <= 6; i++) {
    // 跳过 j ,因为这里应该是连续1次
    if (i === j) continue;
    for (k = 1; k <= 15; k++) {
      res += arr[i][k];
      res %= mod;
    }
  }
  return res;
}