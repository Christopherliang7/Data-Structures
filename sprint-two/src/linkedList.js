var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // takes a value and adds it to the end of the list
  list.addToTail = function(value) {
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
 * contains - O(n) - recursive, searching one after the other for node - n depends on number of nodes.
 */

