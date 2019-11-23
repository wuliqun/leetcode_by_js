/**
 * @param {number} num_people
 * @return {number}
 */
let cache = { 0: 1, 2: 1 };
let MOD = Math.pow(10,9) + 7;
let numberOfWays = function (num_people) {
  if (!(num_people in cache)) {
    let res = 0,i;
    for (i = 1; i < num_people; i += 2) {
      res += numberOfWays(i-1)*numberOfWays(num_people-i-1);
    }
    res = res % MOD;
    cache[num_people] = res;    
  }
  return cache[num_people];
};
console.log(numberOfWays(1000))