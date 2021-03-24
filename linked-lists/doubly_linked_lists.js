// 1 <--> 10 <--> 99 <--> 5 <--> 16

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  // add the end of the list
  append(value) {
    // we could use the Node class
    // const newNode = new Node(value);

    // or create it inside the append method

    const newNode = {
      value: value,
      next: null,
      prev: null,
    };

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // add to the beginning of the list
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  insert(index, value) {
    // todo: check params
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    let currentNode = this.head;

    if (index >= this.length) {
      return this.append(value);
    } else if (index === 0) {
      return this.prepend(value);
    } else {
      for (let i = 0; i <= index; i++) {
        if (i === index - 1) {
          const nextNode = currentNode.next;
          newNode.prev = currentNode;
          currentNode.next = newNode;
          newNode.next = nextNode;
          this.length++;
        }
        currentNode = currentNode.next;
      }
    }
    return this;
  }

  remove(index) {
    // todo: check params
    let currentNode = this.head;

    if (index === 0) {
      let newHead = currentNode.next;
      this.head = newHead;
      this.length--;
    } else if (index > 0) {
      for (let i = 0; i <= index; i++) {
        if (index === this.length - 1) {
          if (i === this.length - 2) {
            currentNode.next = null;
            this.length--;
            break;
          }
        } else if (i === index - 1) {
          const newNext = currentNode.next.next;
          currentNode.next = newNext;
          newNext.prev = currentNode;
          this.length--;
        }
        currentNode = currentNode.next;
      }
    }

    return this;
  }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
// myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(1, 99);
// myLinkedList.insert(3, 7);
myLinkedList.remove(1);
// myLinkedList.remove(3);

console.log(myLinkedList.printList());
console.log(myLinkedList);
