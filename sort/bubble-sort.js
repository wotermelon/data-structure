/**
 * 冒泡排序，升序
 * @param {*} arr
 */
function bubbleSort (arr) {
  for (let i = 0, len = arr.length; i < len - 1; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      // 如果前一个比后一个大，交换
      if (arr[j] > arr[j + 1]) {
        // 解构交换位置
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

module.exports = bubbleSort
