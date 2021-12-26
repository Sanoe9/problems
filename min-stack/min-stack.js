
var MinStack = function() {
    this.storage = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.storage.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.storage.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.storage[this.storage.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    console.log('storage', this.storage)
    return Math.min(...this.storage);
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */