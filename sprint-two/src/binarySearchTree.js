// can only have 0,1,2 children
// recursive data structures
// one child will always be less than the nodes value and the other more
// left && right child - stay consistent with sides

var BinarySearchTree = function(value) {
  var tree = Object.create(BinarySearchTree.prototype);
  tree.value = value;
  tree.left; // property where all values are lower than current
  tree.right; // property where all values are higher than current.
  return tree;
};

// accepts a value and places it in tree at correct position
BinarySearchTree.prototype.insert = function(value) {
  if (value < this.value) {
    if (this.left === undefined) {
      return this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (this.right === undefined) {
      return this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

// accepts a value and returns a boolean if value is present in BST
BinarySearchTree.prototype.contains = function(value) {

  if (value === this.value) {
    return true;
  } else if (value < this.value) {
    if (this.left !== undefined) {
      return this.left.contains(value);
    }
  } else if (value > this.value) {
    if (this.right !== undefined) {
      return this.right.contains(value);
    }
  }
  return false;
};

// accepts callback and executes on every value contained in the tree
BinarySearchTree.prototype.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left !== undefined) {
    this.left.depthFirstLog(cb);
  }
  if (this.right !== undefined) {
    this.right.depthFirstLog(cb);
  }

};


/*
 * Complexity: What is the time complexity of the above functions?
 * insert - O(1) - recursive, constant - checking if value is present
 * contains - Logarithmic O(log n) - due to binary search, being able to deduce the specific direction to head towards rather than searching everything
 * depthFirstLog - O(1) - applying callback onto value, recursive
 */