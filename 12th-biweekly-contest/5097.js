/**
 * 5097. 力扣排行榜
 *    完善力扣排行榜类
 */
var Leaderboard = function() {
  this.list = [];
};

/** 
 * @param {number} playerId 
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function(playerId, score) {
  let len = this.list.length,i,index = -1;
  for(i = 0;i<len;i++){
    if(this.list[i].playerId === playerId){
      index = i;
      break;
    }
  }
  let obj;
  if(index === -1){
    obj = {
      playerId,
      score
    }
  }else{
    obj = this.list.splice(index,1)[0];
    obj.score += score;
  }
  for(i = 0;i<len;i++){
    if(this.list[i].score < obj.score){
      break;
    }
  }
  this.list.splice(i,0,obj);
};

/** 
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function(K) {
  let res = 0,i,len = this.list.length;
  K = Math.min(K,len);
  for(i=0;i<K;i++){
    res += this.list[i].score;
  }
  return res;
};

/** 
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function(playerId) {
  let len = this.list.length,i,obj;
  for(i = 0;i<len;i++){
    if(this.list[i].playerId === playerId){
      obj = this.list.splice(i,1)[0];
      obj.score = 0;
      this.list.push(obj);
      break;
    }
  }
};

/** 
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */