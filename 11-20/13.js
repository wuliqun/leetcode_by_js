/**
 * 13. 罗马数字转整数
 */

/**
 * @param {string} s
 * @return {number}
 * 95.44%  93.08%
 */
let romanToInt = function(s) {
  let res = 0,len = s.length,i = 0;
  while(i < len){
    switch(s[i]){
      case 'M':
        res += 1000;
        break;
      case 'D':
        res += 500;
        break;
      case 'C':
        if(s[i+1] === 'M'){
          res += 900;
          i ++;
        }else if(s[i+1] === 'D'){
          res += 400;
          i ++
        }else{
          res += 100;
        } 
        break;
      case 'L':
        res += 50;
        break;
      case 'X':
        if(s[i+1] === 'C'){
          res += 90;
          i ++;
        }else if(s[i+1] === 'L'){
          res += 40;
          i ++
        }else{
          res += 10;
        } 
        break;
      case 'V':
        res += 5;
        break;
      case 'I':
        if(s[i+1] === 'X'){
          res += 9;
          i ++;
        }else if(s[i+1] === 'V'){
          res += 4;
          i ++
        }else{
          res += 1;
        } 
        break;
    }
    i ++;
  }
  return res;
};

console.log(romanToInt('III')); //3
console.log(romanToInt('V')); //5
console.log(romanToInt('LVIII')); // 58
console.log(romanToInt('MCMXCIV')); // 1994
console.log(romanToInt('MMCMXCIV')); // 2994
