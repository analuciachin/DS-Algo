class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  // get the 1st item in the queue
  peek() {
    return this.first;
  }

  // add an item to the queue
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let holdingPointer = this.first;
      while (holdingPointer.next !== null) {
        holdingPointer = holdingPointer.next;
      }
      holdingPointer.next = newNode;
      this.last = holdingPointer.next;
    }
    this.length++;
    return this;
  }

  // Andrei solution
  enqueue1(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  // remove an item from the queue
  dequeue() {
    if (!this.first) {
      return null;
    } else if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      const holdingPointer = this.first.next;
      this.first = holdingPointer;
    }
    this.length--;
    return this;
  }

  isEmpty() {
    if (this.length === 0) {
      return true;
    } else return false;
  }
}

const myQueue = new Queue();
console.log(myQueue.enqueue("Joy"));
console.log(myQueue.enqueue("Matt"));
console.log(myQueue.enqueue("Pavel"));
console.log(myQueue.enqueue("Samir"));
console.log(myQueue.dequeue());
// console.log(myQueue.peek());
console.log(myQueue.isEmpty());
// console.log(myQueue.enqueue1("Joy"));
// console.log(myQueue.enqueue1("Matt"));
// console.log(myQueue.enqueue1("Pavel"));
// console.log(myQueue.enqueue1("Samir"));
