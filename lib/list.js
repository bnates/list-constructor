'use strict';

class List {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  reindex() {
    let data = Object.keys(this.data).sort().reduce((acc, val, idx) => {
      acc[idx] = this.data[val];
      return acc;
    }, {});

    this.length = Object.keys(data).length;
    this.data = data;
  }

  push(item) {
    if (arguments.length === 1) {
      this.data[this.length] = item;
      this.length++;
    }
    return this.length;
  }

  pop() {
    if (!this.length) { return undefined };
    let item = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }

  shift() {
    if (! this.data[0]) { return undefined };
    let item = this.data[0];
    delete this.data[0];
    this.reindex();
    return item;
  }

  forEach(cb) {
    if (this.length) {
      for (let i = 0; i <= this.length - 1; i++) {
        cb(this[i], i);
      }
    }
  }
}

module.exports = List;