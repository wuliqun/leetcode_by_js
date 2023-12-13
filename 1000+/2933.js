function isSameHour(t1, t2){
  return t1.slice(0, 2) === t2.slice(0, 2) || (t2.slice(0, 2) - t1.slice(0, 2) === 1 && t2.slice(2) < t1.slice(2));
}

/**
 * @param {string[][]} access_times
 * @return {string[]}
 */
var findHighAccessEmployees = function(access_times) {
  const res = new Set();
  access_times.sort((a, b)=>a[1] - b[1]);
  let l = 0;
  let r = 0;
  let name;
  const map = {};
  while(r < access_times.length){
    if(l === r || isSameHour(access_times[l][1], access_times[r][1])){
      name = access_times[r][0];
      if(!res.has(name)){
        map[name] = (map[name] || 0) + 1;
        if(map[name] === 3){
          res.add(name);
        }
      }
      r ++;
    }else{
      map[access_times[l][0]] --;
      l++;
    }
  }

  return [...res];
};

/**
 * @param {string[][]} access_times
 * @return {string[]}
 */
var findHighAccessEmployees2 = function(access_times) {
  const accessMap = {};
  access_times.forEach(([name, time])=>{
    if(!accessMap[name]){
      accessMap[name] = [time];
    }else{
      accessMap[name].push(time);
    }
  });
  const res = [];
  for(const name in accessMap){
    const times = accessMap[name];
    if(times.length >= 3){
      times.sort();
      for(let i = 2;i < times.length;i++){
        if(isSameHour(times[i], times[i - 2])){
          res.push(name);
          break;
        }
      }
    }
  }
  return res;
};
