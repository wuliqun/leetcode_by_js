/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
  let l = 0;
  let r = s.length - 1;
  const arr = s.split('');
  while(l < r) {
    if(arr[l] !== arr[r]){
      if(arr[l] > arr[r]){
        arr[l] = arr[r];
      }else{
        arr[r] = arr[l];
      }
    }
    l++;
    r--;
  }
  return arr.join('');
};