var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // Node contains a value and a next property - this is the link
  list.addToTail = function(value) {
    // create data variable with Node and value of value.
    // if there is no head value, insert data to head
    // else, add to tail
    var data = Node(value);
    if (list.head === null) {
      list.head = data;
    } else {
      list.tail.next = data;
    }
    list.tail = data;
  };

  // removes the first node from the list and returns it's value
  list.removeHead = function() {
    // create data variable for list head
    // set list head to next value
    // return data variable
    var data = list.head.value;
    list.head = list.head.next;
    return data;
  };

  // returns boolean on whether or not list contained the node
  list.contains = function(target) {
    var search = function(node, target) {
      if (node.value !== target && node.next === null) {
        return false;
      } else if (node.value === target) {
        return true;
      } else {
        return search(node.next, target);
      }
    };
    return search(list.head, target);
  };
  return list;
};

var Node = function(value) {
  var node = {};
  // object containing node value and reference link to next node
  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail - O(1) - adding to tail position
 * removeHead - O(1) - removing from head position
 * contains - O(n) - recursive though is only searching one after the other for node - n depends on number of nodes.
 */

