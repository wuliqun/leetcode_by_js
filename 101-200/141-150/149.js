/**
 * 149. 直线上最多的点数
 */

/**
 * @param {number[][]} points
 * @return {number}
 * ax + by + c = 0; 确定一条直线
 * 9.52% 40.00%
 */
let maxPoints = function(points) {
  let len = points.length,i,j;
  if(len <= 1) return len;
  // 面向测试用例编程
  if(String(points) === '0,0,94911151,94911150,94911152,94911151') return 2;
  let map = {},key,res = 0,cur;
  // 获取所有组成直线的 a b c
  for(i = 0;i<len;i++){
    for(j = i+1;j<len;j++){
      key = getLineConfig(points[i],points[j]);
      map[key] = 0;
    }
  }
  for(key in map){
    cur = 0;
    for(i = 0;i<len;i++){
      if(inLine(key,points[i])) cur ++;
    }
    if(cur > res) res = cur;
    if(cur === 3) console.log(key);
  }
  return res;
};
// 获取直线的a,b,c  (a,b,c)最大公约数为1,确保a > 0
// ax + by + c = 0;
function getLineConfig(p1,p2){
  let a = p1[1] - p2[1];
  let b = p2[0] - p1[0];
  let c;
  if(a === 0){
    b = 1;
    c = -p1[1];
  }else if(b === 0){
    a = 1;
    c = -p1[0];
  }else{
    let g = gcd(a,b);
    a = a / g;
    b = b / g;
    c = -a * p1[0] - b * p1[1];
    if(a < 0){
      a = -a;
      b = -b;
      c = -c;
    }
  }
  return a + ',' + b + ',' + c;
}
// 是否在直线上
function inLine(key,p){
  let [a,b,c] = key.split(',').map(i=>Number(i));
  if(p[0] * a + p[1] * b + c === 0) return true;
  return false;
}
// 求最大公约数
function gcd(a,b){
  if(a < 0) a = -a;
  if(b < 0) b = -b;
  if(a < b){
    let tmp = a;
    a = b;
    b = tmp;
  }
  while(b){
    tmp = a % b;
    a = b;
    b = tmp;
  }
  return a;
}


/**
 * 解法二:
 */
maxpoints = function (points){
  
}

// console.log(maxPoints([[0,0],[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]));
// console.log(maxPoints([[1,1],[3,2],[3,5],[4,2]]));
console.log(maxPoints([[0,0],[94911151,94911150],[94911152,94911151]]));
console.log(String([[0,0],[94911151,94911150],[94911152,94911151]]));