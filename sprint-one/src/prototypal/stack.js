var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.count = 0;
  someInstance.storage = {};

  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  pop: function() {
    if (this.count > 0) {
      this.count --;
      var data = this.storage[this.count];
      delete this.storage[this.count];
      return data;
    }
  },
  size: function() {
    return this.count;
  }
};