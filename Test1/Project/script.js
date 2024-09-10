export default class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
    return this.items.length;
  }

  pop() {
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  length() {
    return this.items.length;
  }
}
const stack = new Stack();
