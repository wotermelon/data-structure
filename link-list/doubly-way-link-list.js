const Base = require('./base')

/**
 * 双向链表
 */
class Node {
  constructor (el) {
    this.el = el
    this.next = null
    this.prev = null
  }
}

class DoublyLinkList extends Base {
  constructor () {
    this.length = 0
    this.head = null
    this.p = null
  }
  /**
   * 往链表末端添加一个元素
   * @param {Any} newEl 元素
   * @return {Node} node
   */
  append (newEl) {
    const node = new Node(newEl)
    // 如果为空链表
    if (this.isEmpty()) {
      this.head = node
      this.p = this.head
    } else {
      node.prev = this.p
      this.p.next = node
      this.p = node
    }
    this.length++
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
   * 往链表指定位置添加一个元素
   * @param {Any} newEl 元素
   * @param {Function} cb 查找函数。可选，没有为往链表末端添加
   * @return {Node} node
   */
  insert (newEl, cb) {
    // 如果没有提供查找函数，或者为空链表则从末端添加
    if (this.length === 0 || typeof cb !== 'function') {
      return this.append(newEl)
    }
    const node = new Node(newEl)
    let p1 = this.find(cb)
    if (!p1) return
    node.next = p1.next
    node.prev = p1
    p1.next.prev = node
    p1.next = node
    this.length++
  }
  /**
   * 往链表末端移除一个元素
   */
  removeLast () {
    if (this.isEmpty()) return
    if (this.length === 1) {
      return this.clear()
    }
    this.p.prev.next = null
    this.p = this.p.prev
    this.length--
  }
  remove (cb) {
    // 空链表不做任何操作
    if (this.isEmpty()) return
    // 如果没有查找函数，则从末端删除
    if (typeof cb !== 'function') {
      return this.removeLast()
    }
    // 如果是删除的是head
    if (cb(this.head.el)) {
      // 长度为1则清空
      if (this.length === 1) {
        this.clear()
      } else {
        // 否则删除头部元素
        let next = this.head.next
        next.prev = null
        this.head.next = null
        this.head = next
        this.length--
      }
      return
    }
    // 如果是尾
    if (cb(this.p.el)) {
      this.p.prev.next = null
      this.p = this.p.prev
      this.length--
      return
    }
    // 如果是中间部分
    let p1 = this.find(cb)
    if (!p1) return

    p1.prev.next = p1.next
    p1.next.prev = p1.prev
    this.length--
  }
  /**
   * 重载，还要再删除p指针
   */
  clear () {
    super.clear()
    this.p = null
  }
}