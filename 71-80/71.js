/**
 * 71. 简化路径
 */

/**
 * @param {string} path
 * @return {string}
 * 62.55% 76.92%
 */
let simplifyPath = function(path) {
  let paths = path.split('/'),stack = [],i,len = paths.length;
  for(i = 0;i<len;i++){
    if(paths[i] === '.' || paths[i] === ''){
      // pass 
    }else if(paths[i] === '..'){
      stack.pop();
    }else{
      stack.push(paths[i]);
    }
  }
  return '/' + stack.join('/');
};
console.log(simplifyPath('/home//foo/')); // /home/foo
console.log(simplifyPath('/a/./b/../../c/')); // /c
console.log(simplifyPath('/a/../../b/../c//.//')); // /c
console.log(simplifyPath("/a//b////c/d//././/..")); // /a/b/c
console.log(simplifyPath("/../")); // /a/b/c