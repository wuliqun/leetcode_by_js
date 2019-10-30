/**
 * 12. 整数转罗马数字
 */

/**
 * @param {number} num
 * @return {string}
 * 96.54% 89.26%
 */
const charArr = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
const valueArr = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
let intToRoman = function(num) {
  let res = '',i,j,count,tmp;
  for(i=0;i < 13;i++){
    tmp = valueArr[i];
    if(num >= tmp){
      count = Math.floor(num/tmp);
      num %= tmp;
      for(j=0;j<count;j++){
        res += charArr[i];
      }
      if(num === 0) break;
    }
  }
  return res;
};