/**
 * 43. 字符串相乘
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 * 83.30% 37.10%
 */
let multiply = function (num1, num2) {
  if(num1.length < num2.length){
    let tmp = num1;
    num1 = num2;
    num2 = tmp;
  }
  let m = multiplySingle(num1);
  let len = num2.length,i = 0;
  let res = '';
  while(i < len){
    res += '0';
    res = add(res,m(Number(num2[i])));
    i++;
  }
  return res;
};

// 相加
function add(num1, num2) {
  let len1 = num1.length - 1,
    len2 = num2.length - 1,
    res = '',
    cur,
    flag = 0;
  while (len1 >= 0 && len2 >= 0) {
    cur = Number(num1[len1]) + Number(num2[len2]) + flag;
    if (cur >= 10) {
      flag = 1;
      cur -= 10;
    } else {
      flag = 0;
    }
    res = cur + res;
    len1--;
    len2--;
  }
  while (len1 >= 0) {
    if (flag) {
      cur = Number(num1[len1]) + flag;
      if (cur >= 10) {
        flag = 1;
        cur -= 10;
      } else {
        flag = 0;
      }
      res = cur + res;
      len1--;
    } else {
      res = num1.slice(0, len1 + 1) + res;
      break;
    }
  }
  while (len2 >= 0) {
    if (flag) {
      cur = Number(num2[len2]) + flag;
      if (cur >= 10) {
        flag = 1;
        cur -= 10;
      } else {
        flag = 0;
      }
      res = cur + res;
      len2--;
    } else {
      res = num2.slice(0, len2 + 1) + res;
      break;
    }
  }
  if (flag) res = '1' + res;
  return res;
}

// 和一个数相乘,因为1个数只有0-9,所以用数组把结果缓存起来
function multiplySingle(num) {
  let catched = ['0', num];
  return function (n) {
    if(!catched[n]){
      let res = '',
        len = num.length,
        i,
        flag = 0,
        cur;
      for (i = len - 1; i >= 0; i--) {
        cur = n * num[i] + flag;
        flag = Math.floor(cur / 10);
        cur = cur % 10;
        res = cur + res;
      }
      if (flag) res = flag + res;
      catched[n] = res;
    }
    return catched[n];
  }
}