const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
      this.head = head
  }

  insert(node) {
    let newNode = new Node(node)
    let currentNode = this.head

    this.head = newNode
    newNode.next = currentNode
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  
  search(value) {
    let currentNode = this.head;
    while (currentNode !== null && currentNode.data !== value) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  
  clear() {
    this.head = null;
  }
  
  getFirst() {
    return this.head;
  }
  
  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
      return lastNode;
    }
  }

  getKth(k) {
    let count = 1
    let currentNode = this.head
    while(currentNode) {
      if (count===k)
        return currentNode
      count++
      currentNode = currentNode.next
    }
  }

  getKthToLast(k) {
    let count = 1
    let currentNode = this.head
    let target = this.size() - k
    while(currentNode != null && count < target){
      currentNode = currentNode.next
      count++
    }
    return currentNode
  }

  isEmpty() {
    return this.head === null;
  }

  toArray() {
    let result = [];
    let node = this.head;
    while (node) {
      result.push(node.data);
      node = node.next;
    }
    return result;
  }

  containsDuplicates() {
    let valuesSet = new Set();
    let node = this.head;
    while (node) {
      if (valuesSet.has(node.data)) {
        return true;
      }
      valuesSet.add(node.data);
      node = node.next;
    }
    return false;
  }

  delete(data) {
    if (!this.head) {
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next && currentNode.next.data !== data) {
      currentNode = currentNode.next;
    }

    if (currentNode.next) {
      currentNode.next = currentNode.next.next;
    }
  }


  
}



// const firstNode = new Node(1);
// const secondNode = new Node(2);

// const wordList = new LinkedList(firstNode);
// const numList = new LinkedList(secondNode);







module.exports = {
  Node,
  LinkedList,
};
