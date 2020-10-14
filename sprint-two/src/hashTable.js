// Example : contact list that you might add or delete from
// use provided hash function to convert any key into an array index
// limitedArray helper function - use to store all inserted values
// also contains get set each methods
// do not use typical bracket notation for arrays when interating with a limitedArray instance
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  for (var i = 0; i < this._limit; i++) {
    this._storage.set(i, []);
  }
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var x = 0; x < bucket.length; x++) {
    if (bucket[x][0] === k) {
      bucket[x][1] = v;
      return;
    }
  }
  bucket.push([k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j][0] === k) {
      return bucket[j][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var j = 0; j < bucket.length; j++) {
    if (bucket[j] !== undefined && bucket[j][0] === k) {
      bucket.splice(j, 1);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


