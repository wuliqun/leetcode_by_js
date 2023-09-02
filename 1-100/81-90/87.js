/**
 * 87. 扰乱字符串
 *                                 abcde
 *                           ab             cde   
 *                         a    b        c       de
 *                                             d    e
 *      caebd  -> false
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * 只要两个子串非空即可,不必平均分配
 * 94.44% 75.00%
 */
let isScramble = function (s1, s2) {
  if(s1 === s2) return true;
  // 左边的前k个字母,一定要可以和右边的前K个(后K个)字母的组成相同
  // 找到这样的位置K,然后递归判断子问题
  // 找不到,那么返回false
  let len = s1.length,i;
  for(i = 1;i<len;i++){
    if(hasSameChars(s1.slice(0,i),s2.slice(0,i))){
      if(isScramble(s1.slice(0,i),s2.slice(0,i)) && isScramble(s1.slice(i),s2.slice(i))){
        return true;
      }
    }
    if(hasSameChars(s1.slice(0,i),s2.slice(len-i))){
      if(isScramble(s1.slice(0,i),s2.slice(len-i)) && isScramble(s1.slice(i),s2.slice(0,len-i))){
        return true;
      }
    }
  }
  return false;
};

function hasSameChars(s1,s2){
  return s1.split('').sort().join('') === s2.split('').sort().join('');
}

console.log(isScramble('abab','aabb'));
console.log(isScramble('great','rgeat'));
console.log(isScramble('rgeat','rgate'));
