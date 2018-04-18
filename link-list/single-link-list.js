const Base = require('./base')

/**
 * 单向链表
 */
class Node {
  constructor(el) {
    super()
    this.el = el
    this.next = null
  }
}
class SingleLinkList extends Base {
  constructor () {
    this.head = null
    this.length = 0
  }
  /**
   * 查找链表元素
   * @param {Function} cb 查找函数
   * @return {Node} node
   */
  find (cb) {
    if (typeof cb !== 'function') {
      throw new Error('Callback is not a function.')
    }
    let current = this.head
    while (current && !cb(current.el)) {
      current = current.next
    }
    return current
  }
  /**
   * 查找链表元素的上一个元素
   * @param {Function} cb 查找函数
   * @return {Node} node
   */
  findPrev (cb) {
    if (typeof cb !== 'function') {
      throw new Error('Callback is not a function.')
    }
    let current = this.head
    if (cb(current.el)) return
    while (current && current.next && !cb(current.next.el)) {
      current = current.next
    }
    return current
  }
  /**
   * 往链表末端添加一个元素
   * @param {Any} newEl 元素
   * @return {Node} node
   */
  append (newEl) {
    const node = new Node(newEl)
    if (this.isEmpty()) {
      this.head = node
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.length++
    return node
  }
  /**
   * 往链表指定位置添加一个元素
   * @param {Any} newEl 元素
   * @param {Function} cb 查找函数。可选，没有为往链表末端添加
   * @return {Node} node
   */
  insert (newEl, cb) {
    if (this.isEmpty() || typeof cb !== 'function') {
      return this.append(newEl)
    }
    const node = new Node(newEl)
    let p1 = this.find(cb)
    node.next = p1.next
    p1.next = node
    this.length++
    return node
  }
  /**
   * 往链表末端移除一个元素
   */
  removeLast () {
    let current = this.head
    if (!current) return
    if (this.length === 1) {
      this.head = null
      this.length--
      return
    }
    while (current.next && current.next.next) {
      current = current.next
    }
    current.next = null
    this.length--
  }
  /**
   * 往链表指定位置移除一个元素
   * @param {Function} cb 查找函数。可选，没有为移除链表最后一个元素
   */
  remove (cb) {
    // 空链表不做任何操作
    if (this.isEmpty()) return
    if (typeof cb !== 'function') {
      return this.removeLast()
    }
    if (cb(this.head.el)) {
      this.head = this.head.next
      this.length--
      return
    }
    let prev = this.findPrev(cb)
    if (prev && prev.next) {
      prev.next = prev.next.next
      this.length--
    }
  }
}
