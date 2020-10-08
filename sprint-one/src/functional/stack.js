var Stack = function() {
  var size = 0;
  var someInstance = {};
  var storage = {}; // Use an object with numeric keys to store values

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    size ++;
  };

  someInstance.pop = function() {
    if (size > 0) {
      size--;
      var data = storage[size];
      delete storage[size];
      return data;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};