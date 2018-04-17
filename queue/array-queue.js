class ArrayQueue {
  constructor() {
    this.queueList = []
  }
  /**
   * 入队
   * @param {Any} item
   */
  push (item) {
    this.queueList.push(item)
  }
  /**
   * 出队
   */
  pop () {
    return this.queueList.shift()
  }
  /**
   * 获取队首
   */
  getFront () {
    return this.queueList[0]
  }
  /**
   * 获取队尾
   */
  getRear () {
    return this.queueList[this.queueList.length - 1]
  }
  /**
   * 判断是否为空队列
   * @return {Boolean} 是否为空
   */
  isAmpty () {
    return this.stackList.length === 0
  }
  /**
   * 清空队列
   */
  clear () {
    this.queueList.length = 0
  }
  /**
   * 获取队列长度
   * @return {Number}
   */
  size () {
    return this.queueList.length
  }
}