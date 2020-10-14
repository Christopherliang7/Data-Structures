// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {};
  newNode.value = node;
  newNode.edges = [];
  this.nodes.push(newNode);
};

// Return a boolean value indicating if the node passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph if present. All edges connected to the branch are removed as well.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === node) {
      // removing edges - use removeEdge function
      for (var j = 0; j < this.nodes[i].edges.length; j++) {
        this.removeEdge(node, this.nodes[i].edges[j]);
      }
      this.nodes.splice(i, 1);
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected. Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      if (this.nodes[i].edges.indexOf(toNode) >= 0) {
        return true;
      } else {
        return false;
      }
    }
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // add Edge from node to node
  var node1, node2;
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      node1 = i;
    }
    if (this.nodes[i].value === toNode) {
      node2 = i;
    }
  }

  if (node1 >= 0 && node2 >= 0) {
    this.nodes[node1].edges.push(toNode);
    this.nodes[node2].edges.push(fromNode);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var node1, node2;
  for (var i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === fromNode) {
      node1 = i;
    } else if (this.nodes[i].value === toNode) {
      node2 = i;
    }
  }

  var nodeEdge1 = this.nodes[node1].edges.indexOf(toNode);
  var nodeEdge2 = this.nodes[node1].edges.indexOf(toNode);
  this.nodes[node1].edges.splice(nodeEdge1, 1);
  this.nodes[node2].edges.splice(nodeEdge2, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode - O(1) - adding a node into array
 * removeNode - O(n^2) - iterating array to find node, iterating once more to find edges
 * contains - O(n) - iterating array to find node
 * addEdge - O(n) - iterating an array two separate times
 * removeEdge - O(n) - iterating an array two separate times
 * hasEdge - O(n) - iterating into an array once and checking value
 * forEachNode - O(n) - iterating into array and applying callback
 */