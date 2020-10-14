var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = []; // array containing number of subtrees
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

// takes any value, sets that as the target of a node, adds that node as a child of the tree
treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

// takes any input and returns a boolean whether it's found at target node or any descendant node
treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  return false;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addChild - O(1) - takes a child and adds to branch
 * contains - 0(n)
 */
