class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (currentNode.left !== null && currentNode.right !== null) {
        if (currentNode.value < value) {
          currentNode = currentNode.right;
        } else {
          currentNode = currentNode.left;
        }
      }

      if (currentNode.value < value) {
        currentNode.right = newNode;
      } else currentNode.left = newNode;
    }
    return this;
  }
  lookup(value) {
    if (this.root === null) {
      return null;
    } else {
      let currentNode = this.root;
      while (currentNode.left !== null || currentNode.right !== null) {
        if (currentNode.value === value) {
          return currentNode;
        } else if (currentNode.value < value) {
          currentNode = currentNode.right;
        } else {
          currentNode = currentNode.left;
        }
      }
    }
  }
}

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(1);
tree.insert(6);
tree.insert(20);

tree.insert(15);
tree.insert(170);
console.log(JSON.stringify(traverse(tree.root)));

//        9
//    4       20
//  1   6   15  170
