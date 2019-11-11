/**
 * 146. LRU 缓存机制
 *    运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。
 *    获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
 *    写入数据 put(key, value) - 如果密钥不存在，则写入其数据值。当缓存容量达到上限时，它应该在写入新数据之前删除最近最少使用的数据值，从而为新的数据值留出空间。
 * 
 *    进阶:
 *      你是否可以在 O(1) 时间复杂度内完成这两种操作？
 */

/**
 * @param {number} capacity
 * 28.95% 81.82%
 */
let LRUCache = class {

  constructor(capacity) {
      this.cache = new Map();
      this.capacity = capacity;
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
      let cache = this.cache;
      if (cache.has(key)) {
          let temp = cache.get(key)
          cache.delete(key);
          cache.set(key, temp);
          return temp;
      } else {
          return -1;
      }
  };

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
      let cache = this.cache;
      if (cache.has(key)) {
          cache.delete(key);
      } else if (cache.size >= this.capacity) {
          cache.delete(cache.keys().next().value);
      }
      cache.set(key, value);
  };
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let obj = new LRUCache(2);
obj.put(1,1);
obj.put(2,2);
obj.get(1);
obj.put(3,3);
obj.get(2);
obj.put(4,4);
obj.get(1);
obj.get(3);
obj.get(4);