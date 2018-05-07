class Node {
  constructor(el) {
    this.el = el
    this.left = null
    this.right = null
  }
}
/**
 * 二叉树
 */
class BinaryTree {
  constructor (arr) {
    // 根节点
    this.root = null
    arr.forEach(el => this.insert(el))
  }
  /**
   * 插入
   * @param {*} el
   */
  insert (el) {
    const node = new Node(el)
    // 根节点不存在的话直接就是根节点
    if (!this.root) {
      this.root = node
      return node
    }

    let current = this.root
    while (current) {
      // 小于的话在左子树
      if (node.el < current.el) {
        // 如果没有，直接插入左子树
        if (!current.left) {
          current.left = node
          break
        }
        current = current.left
      } else {
        // 否则在右子树
        // 如果没有，直接插入右子树
        if (!current.right) {
          current.right = node
          break
        }
        current = current.right
      }
    }
    return node
  }
  /**
   * 前序遍历
   */
  preOrderTraverse () {
    const list = []
    const fn = (node) => {
      if (node) {
        list.push(node)
        fn(node.left)
        fn(node.right)
      }
    }
    fn(this.root)
    return list
  }
  /**
   * 中序遍历
   */
  inOrderTraverse () {
    const list = []
    const fn = (node) => {
      if (node) {
        fn(node.left)
        list.push(node)
        fn(node.right)
      }
    }
    fn(this.root)
    return list
  }
  /**
   * 后序遍历
   */
  postOrderTraverse () {
    const list = []
    const fn = (node) => {
      if (node) {
        fn(node.left)
        fn(node.right)
        list.push(node)
      }
    }
    fn(this.root)
    return list
  }
}

module.exports = BinaryTree
