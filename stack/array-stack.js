class ArrayStack {
  constructor () {
    // 用数组模拟栈
    this.stackList = []
  }
  /**
   * 入栈
   * @param {Any} item
   */
  push (item) {
    this.stackList.push(item)
  }
  /**
   * 出栈
   * @return {Any} 栈顶元素
   */
  pop () {
    return this.stackList.pop()
  }
  /**
   * 查看栈顶元素
   * @return {Any} 栈顶元素
   */
  getTop () {
    return this.stackList[this.stackList.length - 1]
  }
  /**
   * 判断是否为空栈
   * @return {Boolean} 是否为空
   */
  isAmpty () {
    return this.stackList.length === 0
  }
  /**
   * 清空栈
   */
  clear () {
    this.stackList.length = 0
  }
  /**
   * 获取栈元素个数
   * @return {Number}
   */
  size () {
    return this.stackList.length
  }
}
