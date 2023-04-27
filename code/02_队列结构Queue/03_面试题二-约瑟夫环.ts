import ArrayQueue from './01_实现队列结构Queue'

function lastRemaining(n: number, m: number) {
  // 1.创建队列
  const queue = new ArrayQueue<number>()

  // 2.将所有的数字加入到队列中
  for (let i = 0; i < n; i++) {
    queue.enqueue(i)
  }
  //n这里的i和m的i是两套不同的i，互不影响
  //第一个例子中n是5，m是3


  // 3.判断队列中是否还有数字
  while (queue.size() > 1) {
    for (let i = 1; i < m; i++) {
      queue.enqueue(queue.dequeue()!)
    }
    queue.dequeue()//第一个例子中，到第三个数，出了列之后就再也不让他回来了
  }

  return queue.dequeue()!
}

console.log(lastRemaining(5, 3)) // 3
console.log(lastRemaining(10, 17)) // 2

