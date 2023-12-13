/**
 * @param {string} s1 
 * @param {string} s2 
 * @return {number}
 */
function indexOf(s1, s2){
  const len1 = s1.length;
  const len2 = s2.length;
  if(len2 === 0){
    return 0;
  }else if(len1 === 0 || len1 < len2){
    return -1;
  }

  const next = getNext(s2);
  let j = 0;
  for(let i = 0;i <= len1 - len2;i++){
    while(j < len2 && s1[i + j] === s2[j]){
      j++;
    }
    if(j === len2){
      return i;
    }else if(j > 0){
      j = next[j - 1];   
      i += j;
    }
  } 
  
  return -1;
}

/**
 * @param {string} str 
 */
function getNext(str){
  const len = str.length;
  const next = new Array(len).fill(0);
  let j = 0;
  for(let i = 1;i < len;i++){
    while(j > 0 && str[i] !== str[j]){
      j = next[j - 1];
    }
    if(str[i] === str[j]){
      j++;
    }
    next[i] = j;
  }
  return next;
}