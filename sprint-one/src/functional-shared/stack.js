// Create an object that holds the methods that will be shared by all instances of the class
// Use the keyword this in your methods
// Use _.extend  to copy the methods onto the instance

var Stack = function() {

  var someInstance = {
    count: 0,
    storage: {}
  };

  _.extend(someInstance, stackMethods);
  return someInstance;
};

// Storage of Stack Methods
var stackMethods = {
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  pop: function() {
    if (this.count > 0) {
      this.count--;
      var data = this.storage[this.count];
      delete this.storage[this.count];
      return data;
    }
  },
  size: function() {
    return this.count;
  }
};