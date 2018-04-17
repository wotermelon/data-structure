# 栈

> 栈（stack），是限定仅在表头进行插入和删除操作的线性表。向一个栈插入新元素称作入栈，它是把新元素放到栈顶元素的上面，使之成为新的栈顶元素；从一个栈删除元素称作出栈，它是把栈顶元素删除掉，使其相邻的元素成为新的栈顶元素。先入后出。

## 栈图示：
![栈](../assets/img/stack.png)

## 实现：

```js
class Stack {
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
  top () {
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
```