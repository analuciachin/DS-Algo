# Data Structure and Algorithms

This github repo is to keep notes of the Data Structure and Algorithms courses I am taking from Andrei Neagoie and Colt Steele and a reference of all the exercises I have completed.

## Big O

- O(1): Constant - no loops
- O(log n): Logarithmic - usually searching algorithms have log n if they are sorted (Binary Search)
- O(n): Linear - for loops, while loops through n items
- O(n log(n)): Log Linear - usually sorting operations
- O(n^2): Quadratic - every element in a collection needs to be compared to ever other element. Two nested loops
- O(n^2): Exponential - recursive algorithms that solves a problem of size n
- O(n!): Factorial - adding a loop for every element

- _Iterating through half a collection is still O(n). Two separate collections is O(a \* b)_

## Data Structure

- Arrays

  - lookup (look for an element in an array): O(1)
  - push (add an element at the end of an array): O(1)
  - pop (remove the last item of an array): O(1)
  - unshift (add an item at the beginning of an array): O(n)
  - splice (add/delete items in the middle of an array): O(n)
  - insert: O(n)
  - delete: O(n)

- Hash Tables (Objects in JS)

  - insert: O(1)
  - lookup: O(1)
  - delete: O(1)
  - search: O(1)

  - _could be O(n) with hash collisions and dynamic array resizing but unlikely_

- Linked List

  - prepend: O(1)
  - append: O(1)
  - lookup: O(n)
  - insert: O(n)
  - delete: O(n)

- Stacks

  - lookup: O(n)
  - pop: O(1)
  - push: O(1)
  - peek (first one to come out - last item): O(1)

  - _for stacks we can implement it using either arrays or linked lists_

- Queues

  - lookup: O(n)
  - enqueue (like push): O(1)
  - dequeue (like pop - first one in line): O(1)
  - peek (first one to come out - first item): O(1)

  - _for queues ideally is best to implement with a linked list_

- Trees

  - Binary Tree

    - _each node can either have 0, 1 or 2 nodes_
    - _each child can only have one parent_
    - lookup: O(log n)
    - insert: O(log n)
    - delete: O(log n)

    - Binary Search Tree (Balanced)

      - if we go to the right of the current node, the value increases
      - if we go to the left of the current node, the value decreases
      - lookup: O(log n)
      - insert: O(log n)
      - delete: O(log n)

    - Binary Search Tree (Unbalanced)

      - lookup: O(n)
      - insert: O(n)
      - delete: O(n)
