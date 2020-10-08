class Queue {

  constructor() {
    this.head = 0;
    this.tail = 0;
    this.storage = {};
  }

  enqueue(value) {
    this.storage[this.tail] = value;
    this.tail++;
  }

  dequeue() {
    if (this.head < this.tail) {
      var data = this.storage[this.head];
      delete this.storage[this.head];
      this.head++;
      return data;
    }
  }

  size() {
    if (this.tail - this.head < 0) {
      return 0;
    } else {
      return this.tail - this.head;
    }
  }
}
