var Queue = function() {

  this.head = 0;
  this.tail = 0;
  this.storage = {};

};


Queue.prototype.enqueue = function(value) {
  this.storage[this.tail] = value;
  this.tail++;
};

Queue.prototype.dequeue = function() {
  if (this.head <= this.tail) {
    var data = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return data;
  }
};

Queue.prototype.size = function() {
  if (this.tail - this.head < 0) {
    return 0;
  } else {
    return this.tail - this.head;
  }
};