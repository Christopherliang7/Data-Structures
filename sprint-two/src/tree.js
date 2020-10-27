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
  // this.children.push(Tree(value));
  var newTree = new Tree(value);
  this.children.push(newTree);
  return newTree;
};

// takes any input and returns a boolean whether it's found at target node or any descendant node
treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      // recursion - repeat contains function for each child
      if (this.children[i].contains(target)) {
        return true;
      }
    }
  }
  return false;
};

// Created new map function - Map accepts a mapping function as its only argument. It traverses the tree, passing each node's value into the mapping function, and generates a new tree containing the results.
Tree.prototype.map = function(mapFunc) {
  // create a new Tree with new keyword with a mapFunc applied value
  var mapTree = new Tree(mapFunc(value));
  // create a recursive function that accepts OG tree children and copied parent Tree
  var searchTree = function(originalChildren, parentTree) {
    // iterate over Tree children
    for (var i = 0; i < originalChildren.length; i++) {
      // apply mapFunc to tree children and push into copied parent Tree
      parentTree.addChild(mapFunc(originalChildren[i].value));
      // if tree children contain children
      if (originalChildren[i].children.length > 0) {
        // recursively call inner function on each child
        searchTree(originalChildren[i].children, parentTree.children);
      }
    }
  };
  // initiate the recursive function with input of OG tree children, new Tree
  searchTree();
  // return the mapTree
  return mapTree;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addChild - O(1) - takes a child and adds to branch
 * contains - 0(n) - recursive but checking node after node
 */
