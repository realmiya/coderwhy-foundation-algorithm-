// 1.创建Node节点类
class Node<T> {
  value: T
  next: Node<T> | null = null
  constructor(value: T) {
    this.value = value
  }
}


// 2.创建LinkedList的类
class LinkedList<T> {
  private head: Node<T> | null = null//链表类里面能套着节点类=》类能套着类
  private size: number = 0

  get length() {
    return this.size
  }

  // 追加节点
  append(value: T) {
    // 1.根据value创建一个新节点
    const newNode = new Node(value)

    // 2.判断this.head是否为null
    if (!this.head) {
      this.head = newNode
      //对于一个空链表，如果不加newNode，this。head=null。
      //由此可见，即时不存在头节点，head也存在
      //so，对于head最好的解释就是，head是一个指向某个节点的指针的开端点，
      //而这个某节点，可以是你添加的一个‘head’节点，也可以是原第一个节点‘aaa’。
    } else {
      let current = this.head// 此题的this.head就是第一个原节点‘aaa’，不要把它理解成原节点前面的什么东西
      while (current.next) {
        current = current.next
      }//一直爬到最后一个点，再append新点

      // current肯定是指向最后一个节点的
      current.next = newNode
    }

    // 3.size++
    this.size++
  }

  // 遍历链表的方法
  traverse() {
    const values: T[] = []

    let current = this.head
    while (current) {
      values.push(current.value)
      current = current.next
    }

    console.log(values.join("->"))
  }

  // 插入方法: abc
  insert(value: T, position: number): boolean {
    // 1.越界的判断
    if (position < 0 || position > this.size) return false

    // 2.根据value创建新的节点
    const newNode = new Node(value)

    // 3.判断是否需要插入头部
    if (position === 0) {
      newNode.next = this.head//此时的头节点就是第一个原节点，，为什么因为前面代码你自己已经把‘aaa’给了他不是吗？？
      //把插入点的next箭头指向他
      this.head = newNode//让这个linkedlist的头节点变成插入的新节点
      //以上这量布不能调换顺序，否则就会造成头指向新点，又指向自己。
      //也不可以换了顺序，然后用newNode.next = this.head。next，为什么自己想
      //根据这两行，咱们再次得出对于this.head最好的理解就是，head是一个指向某个节点的指针的开端点，
      //通过‘this.head = newNode’，让她连接到（‘变成’）某节点，没有比这更好的理解了。
      //the head is a pointer or reference to the first node of the linked list.
      // The head contains the memory address of the first node in the list, 
      //which allows us to access and traverse the linked list by following the pointers to the next nodes.
    } else {
      //在后面任意position插入点的情况
      let current = this.head
      let previous : Node<T> | null = null
      let index = 0
      while (index++ < position && current) {//还没走到position且current存在的话
        previous = current
        current = current.next
      }
      // index === position，插入
      newNode.next = current
      previous!.next = newNode
    }
    this.size++

    return true
  }
}

const linkedList = new LinkedList<string>()
linkedList.append("aaa")
linkedList.append("bbb")
linkedList.append("ccc")
linkedList.append("ddd")

linkedList.insert("abc", 0)
linkedList.traverse()
linkedList.insert("cba", 2)
linkedList.insert("nba", 6)
linkedList.traverse()

export {}
