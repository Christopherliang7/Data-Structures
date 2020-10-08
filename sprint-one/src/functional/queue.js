var Queue = function() {
  var head = 0;
  var tail = 0;
  var someInstance = {};
  var storage = {};

  // Implement the methods below
  someInstance.enqueue = function(value) {
    storage[tail] = value;
    tail++;
  };

  someInstance.dequeue = function() {
    if (head <= tail) {
      var data = storage[head];
      delete storage[head];
      head++;
      return data;
    }
  };

  someInstance.size = function() {
    if (tail - head < 0) {
      return 0;
    } else {
      return tail - head;
    }
  };
  return someInstance;
};
