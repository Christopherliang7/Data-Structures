var Queue = function() {

  var someInstance = {
    head: 0,
    tail: 0,
    storage: {}
  };

  _.extend(someInstance, queueMethods);
  return someInstance;
};

// storage of queue methods
var queueMethods = {
  enqueue: function(value) {
    this.storage[this.tail] = value;
    this.tail++;
  },
  dequeue: function() {
    if (this.head < this.tail) {
      var data = this.storage[this.head];
      delete this.storage[this.head];
      this.head += 1;
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