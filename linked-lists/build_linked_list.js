// 1 --> 10 --> 99 --> 5 --> 16

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
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
    };
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
    };
    newNode.next = this.head;
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
    const newNode = {
      value: value,
      next: null,
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
          currentNode.next = newNode;
          newNode.next = nextNode;
        }
        currentNode = currentNode.next;
      }
    }
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
//myLinkedList.insert(3, 7);
console.log(myLinkedList.printList());
console.log(myLinkedList);
