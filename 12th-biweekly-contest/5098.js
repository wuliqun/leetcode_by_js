/**
 * @param {number[][]} edges
 * @return {number}
 * 100.00% 100.00%  提交人数少
 */
let treeDiameter = function (edges) {
  let len = edges.length, arr = new Array(len+1), i;
  if (!len) return 0;
  for (i = 0; i <= len; i++) {
    arr[i] = [];
  }
  for (i = 0; i < len; i++) {
    arr[edges[i][0]].push(edges[i][1]);
    arr[edges[i][1]].push(edges[i][0]);
  }
  let res = 0, index = 0;
  // 先从一个点出发,找到对应的最深节点
  // 然后从这个最深节点出发,找到最大路径
  dfs(0, -1, 0);
  dfs(index, -1, 0);
  return res;
  function dfs(u, p, sum) {
    let i;
    for (i = 0; i < arr[u].length; i++) {
      // 不能再回去,不然死循环
      if (arr[u][i] === p) continue;
      dfs(arr[u][i], u, sum + 1);      
    }
    if (sum > res) {
      res = sum;
      index = u;
    }
  }
};

console.log(treeDiameter([[0, 1], [0, 2]]))//2
console.log(treeDiameter([[0, 1], [1, 2], [2, 3], [1, 4], [4, 5]]))//4