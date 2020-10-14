// Prototypal

// Sets contain unique values in no particular order.
// Sets should not use up any more space than necessary, once a value is added to set, adding it a second time should not increase the size of the set
// for now, only handle string values
//

var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

// takes any string and adds it to the set
setPrototype.add = function(item) {
  if (this._storage[item] !== item) {
    this._storage[item] = item;
  }
};

// takes any string and returns a boolean reflecting whether it can be found in the set
setPrototype.contains = function(item) {
  if (this._storage[item] !== item) {
    return false;
  } else {
    return true;
  }
};

// takes any string and removed it from the set if present
setPrototype.remove = function(item) {
  if (this._storage[item] === item) {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add - O(1)
 * contains - O(1)
 * remove - O(1)
 */
