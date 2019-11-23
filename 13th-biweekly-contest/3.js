/**
 * @param {string[][]} synonyms
 * @param {string} text
 * @return {string[]}
 */
let generateSentences = function(synonyms, text) {
  let res = [text],i,j,len;
  for(i = 0;i<synonyms.length;i++){
    len = res.length;
    for(j = 0;j<len;j++){
      if(res[j].indexOf(synonyms[i][0]) !== -1){
        res.push(res[j].replace(synonyms[i][0],synonyms[i][1]));
      }      
    }
  }
  return res.sort();
};

console.log(generateSentences([["OP","JcT"]],"AfUCr JcT I AfUCr JcT AfUCr a tn uoV a"))