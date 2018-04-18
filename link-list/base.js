class Base {
  /**
   * 是否为空
   * @return {Boolean}
   */
  isEmpty () {
    return this.length === 0
  }
  /**
   * 获取长度
   * @return {Number}
   */
  size () {
    return this.length
  }
  /**
   * 清空
   */
  clear () {
    this.head = null
    this.length = 0
  }
}

module.exports = Base
