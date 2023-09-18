/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  /**
   * @type Set<number>
   */
  const learned = new Set();
  /**
   * @type Map<number,Set<number>>
   */
  const preMap = new Map();
  for(const [i, j] of prerequisites){
    if(i === j) return false;
    let set1 = preMap.get(i), set2 = preMap.get(j);
    if(!set1){
      preMap.set(i, (set1 = new Set()));
    }
    if(!set2){
      preMap.set(j, (set2 = new Set()));
    }
    set1.add(j);
  }
  let flag = true;
  while(flag){
    flag = false;
    preMap.forEach((val, k)=>{
      if(val.size === 0 || contains(learned, val)){
        flag = true;
        learned.add(k);
        preMap.delete(k);
      }
    });
  }

  return preMap.size === 0;
};

function contains(set1, set2){
  for(const k of set2){
    if(set1.has(k)){
      set2.delete(k);
    }
  }

  return set2.size === 0;
}
