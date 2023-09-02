/**
 * 42. 接雨水
 *    给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。 
 */

/**
 * @param {number[]} height
 * @return {number}
 *    超时
 */
let trap = function (height) {
  let res = 0,
    len = height.length,
    start = 0,
    end = len - 1,
    i;
  // 按层计算
  let level = 1;
  while (true) {
    // 第一个达到 level 的柱子
    while (height[start] < level) {
      start++;
    }
    // 没有达到这一层的
    if (start === len) break;
    // 最后一个达到 level的柱子
    while (height[end] < level) {
      end--;
    }
    // 只有一个或两个相邻的达到这一层,可以结束向上查找
    if (end - start < 2) break;
    res += end - start - 1;
    for (i = start + 1; i < end; i++) {
      if (height[i] >= level) {
        res--;
      }
    }
    level++;
  }
  return res;
};

/**
 * 解法二:
 * 对解法1的优化
 * 不是一层一层计算
 * 按照当前首尾所能组成的最小高度计算
 * 
 * 31.34% 36.62%
 */
trap = function (height) {
  let res = 0,
    len = height.length,
    start = 0,
    end = len - 1,
    i;
  // 按跳层计算
  let level = 0;
  let levelEnd;
  while (true) {
    // 第一个超过 level 的柱子
    while (height[start] <= level) {
      start++;
    }
    // 没有超过 level 的
    if (start === len) break;
    // 最后一个超过 level 的柱子
    while (height[end] <= level) {
      end--;
    }
    // 只有一个或两个相邻的达到这一层,可以结束向上查找
    if (end - start < 2) break;
    levelEnd = Math.min(height[start], height[end]);
    res += (end - start - 1) * (levelEnd - level);
    for (i = start + 1; i < end; i++) {
      if (height[i] > level) {
        res -= Math.min(height[i] - level, levelEnd - level);
      }
    }
    level = levelEnd;
  }
  return res;
};

/**
 * 解法三 :
 *    按列求,动态规划
 * 95.99% 15.31%
 */

trap = function (height) {
  // maxLeft[i] 表示在i位置时,左边最高的柱子
  let maxLeft = [0];
  let maxRight = [];
  let len = height.length,
    i;
  maxRight[len - 1] = 0;
  for (i = 1; i < len; i++) {
    maxLeft[i] = Math.max(maxLeft[i - 1], height[i - 1]);
    maxRight[len - i - 1] = Math.max(maxRight[len - i], height[len - i]);
  }
  let res = 0,
    h;
  for (i = 1; i < len - 1; i++) {
    h = Math.min(maxLeft[i], maxRight[i]);
    if (h > height[i]) {
      res += h - height[i];
    }
  }
  return res;
}
