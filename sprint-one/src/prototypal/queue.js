var Queue = function() {

  var someInstance = Object.create(queueMethods);
  someInstance.head = 0;
  someInstance.tail = 0;
  someInstance.storage = {};

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.tail] = value;
    this.tail++;
  },
  dequeue: function() {
    if (this.head <= this.tail) {
      var data = this.storage[this.head];
      delete this.storage[this.head];
      this.head++;
      return data;
    }
  },
  size: function() {
    if (this.tail - this.head < 0) {
      return 0;
    } else {
      return this.tail - this.head;
    }
  }
};


