/**
 * 33. 克隆无向图
 */

/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 * 83.96% 19.05%
 */
let visited = [];
let newNodes = [];
let cloneGraph = function(node) {
  if(!node) return null;
  let newNode,index = visited.indexOf(node);
  if(index === -1){
    visited.push(node);
    newNode = new Node(node.val,[]);
    newNodes.push(newNode);
    let i;
    for(i = 0;i<node.neighbors.length;i++){
      newNode.neighbors.push(cloneGraph(node.neighbors[i]));
    }
  }else{
    newNode = newNodes[index];
  }
  return newNode;
};