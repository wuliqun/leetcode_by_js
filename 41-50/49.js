/**
 * 49. 字母异位词分组
 *    给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。      
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 * 90.92% 70.65%
 */
let groupAnagrams = function(strs) {
  let obj = {};
  let len = strs.length,key,i,tmp;
  for(i=0;i<len;i++){
    tmp = strs[i];
    key = tmp.split('').sort().join('');
    obj[key] ? obj[key].push(tmp) : obj[key] = [tmp];
  }
  let res = [];
  for(key in obj){
    res.push(obj[key]);
  }
  return res;
};