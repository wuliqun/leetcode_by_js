/**
 * 1233. 删除子文件夹
 */

let removeSubfolders = function (folder) {
  folder.sort((a,b)=>a.length - b.length);
  let len = folder.length,i,j,flag,res = [];
  for(i=0;i<len;i++){
    if(/^\/[a-z]+$/.test(folder[i])){
      res.push(folder[i]);
    }else{
      flag = true;
      for(j=0;j<res.length;j++){
        if(folder[i].startsWith(res[j]) && (!folder[i][res[j].length] || folder[i][res[j].length] === '/' )){
          flag = false;
          break;
        }
      }
      if(flag){
        res.push(folder[i]);
      }
    }
  }
  return res;
};