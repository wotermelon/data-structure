class Node {
  constructor (el) {
    this.el = el
    this.next = null
  }
}

class LinkQueue {
  constructor () {
    this.length = 0
    this.front = null
    this.rear = null
  }
  /**
   * 入队
   * @param {Any} item
   */
  push (item) {
    const node = new Node(item)
    if (this.length === 0) {
      this.front = node
      this.rear = this.front
    } else {
      this.rear.next = node
      this.rear = node
    }
    this.length++
  }
  /**
   * 出队
   */
  pop () {
    if (!this.front) return
    const node = this.front
    this.front = node.next
    if (!this.front) {
      this.rear = null
    }
    this.length--
    return node.el
  }
  /**
   * 获取队首
   */
  getFront () {
    return this.front ? this.front.el : undefined
  }
  /**
   * 获取队尾
   */
  getRear () {
    return this.rear ? this.rear.el : undefined
  }
  /**
   * 判断是否为空队列
   * @return {Boolean} 是否为空
   */
  isAmpty () {
    return this.length === 0
  }
  /**
   * 清空队列
   */
  clear () {
    this.front = null
    this.rear = null
    this.length = 0
  }
  /**
   * 获取队列长度
   * @return {Number}
   */
  size () {
    return this.length
  }
}
