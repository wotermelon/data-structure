class Node {
  constructor (el) {
    this.el = el
    this.next = null
  }
}
class LinkStack {
  constructor () {
    this.top = null  // 栈顶指针
    this.length = 0  // 栈长度
  }
  /**
   * 入栈
   * @param {Any} item
   */
  push (item) {
    const node = new Node(item)
    if (!this.top) {
      // 如果为空栈
      this.top = node
    } else {
      node.next = this.top
      this.top = node
    }
    this.length++
  }
  /**
   * 出栈
   * @return {Any} 栈顶元素
   */
  pop () {
    const node = this.top
    this.top = node.next
    this.length--
    return node.el
  }
  /**
   * 查看栈顶元素
   * @return {Any} 栈顶元素
   */
  getTop () {
    return this.top ? this.top.el : undefined
  }
  /**
   * 判断是否为空栈
   * @return {Boolean} 是否为空
   */
  isEmpty () {
    return this.length === 0
  }
  /**
   * 清空栈
   */
  clear () {
    this.top = null
    this.length = 0
  }
  /**
   * 获取栈元素个数
   * @return {Number}
   */
  size () {
    return this.length
  }
}
