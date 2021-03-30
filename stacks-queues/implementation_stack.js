class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  // see the very top element
  peek() {
    return this.top;
  }

  // add a node to the top of the stack
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  // remove from the top of the stack
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    //const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }

  // check if the stack is empty
  isEmpty() {
    if (this.length === 0) {
      return true;
    } else return false;
  }
}

const myStack = new Stack();
console.log(myStack.push("google"));
console.log(myStack.push("udemy"));
console.log(myStack.push("discord"));
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
//console.log(myStack.pop());
console.log(myStack.isEmpty());
