/**
 * @param {number} num
 * @return {string}
 * 超时
 */
let encode = function(num) {
  if(num === 0) return '';
  let res = [0],i,j,len,flag;
  for(i = 2;i<=num;i++){
    len = res.length;
    flag = 1;
    for(j = len-1;j>=0;j--){
      if(!flag) break;
      flag = res[j];
      res[j] = flag ? 0 : 1;
    }
    if(flag) res.unshift(0);
  }
  return res.join('');
};

encode = function(num) {
  if(num === 0) return '';
  let s = num.toString(2);
  if(/^1+$/.test(s)){
    return ''.padStart(s.length,'0');
  }else{
    let start = parseInt(''.padStart(s.length-1,'1'),2);
    let res = new Array(s.length - 1).fill(0),i,len = s.length - 1,flag;
    flag = num - start;
    for(j = len-1;j>=0;j--){
      if(!flag) break;
      if(flag % 2 !== 0){
        if(res[j] === 1){
          res[j] = 0;
          flag += 1;
        }else{
          res[j] = 1;
        }
      }
      flag >>= 1;
    }
    return res.join('');
  }  
};

// console.log(encode(1))
// console.log(encode(2))
// console.log(encode(3))
// console.log(encode(4))
// console.log(encode(5))
// console.log(encode(6))
// console.log(encode(7))

// console.log(encode(0))
// console.log(encode(1))
console.log(encode(439818813))