var Stack = function() {
  var count = 0;
  var someInstance = {};
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    count ++;
  };

  someInstance.pop = function() {
    if (count > 0) {
      count--;
      var data = storage[count];
      delete storage[count];
      return data;
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};